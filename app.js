'use strict';

/* ════════════════════════════════════════════════════════════
   SUPABASE CONFIG
   - Replace SUPABASE_URL and SUPABASE_ANON_KEY with your own
   - Table: profiles (id uuid, is_premium bool, email text)
   - Table: sessions  (id uuid, user_id uuid, book_id text,
                       chapter_idx int, page_idx int,
                       wpm int, acc int, chars int,
                       dur_ms int, created_at timestamptz)
════════════════════════════════════════════════════════════ */
const SUPABASE_URL      = 'https://YOUR_PROJECT.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

/* ── Supabase helpers ── */
async function sbGet(table, params = '') {
  try {
    const res = await fetch(`${SUPABASE_URL}${table}?${params}`, {
      headers: {
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      }
    });
    return await res.json();
  } catch { return null; }
}

async function sbPost(table, body) {
  try {
    const res = await fetch(`${SUPABASE_URL}${table}`, {
      method: 'POST',
      headers: {
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type':  'application/json',
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch { return false; }
}

async function sbDelete(table, params = '') {
  try {
    const res = await fetch(`${SUPABASE_URL}${table}?${params}`, {
      method: 'DELETE',
      headers: {
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      }
    });
    return res.ok;
  } catch { return false; }
}

/* Check whether the logged-in user has paid ($4.99 one-time) */
async function checkIsPremium(userId) {
  const data = await sbGet('profiles', `select=is_premium&id=eq.${userId}`);
  if (Array.isArray(data) && data.length > 0) return !!data[0].is_premium;
  return false;
}

/* Persist a finished typing session to Supabase */
async function persistSession(userId, sess) {
  await sbPost('sessions', {
    user_id:     userId,
    book_id:     sess.bookId,
    chapter_idx: sess.chapterIdx,
    page_idx:    sess.pageIdx,
    wpm:         sess.wpm,
    acc:         sess.acc,
    chars:       sess.chars,
    dur_ms:      sess.durMs,
  });
}

/* Load past sessions from Supabase for My Progress view */
async function loadRemoteSessions(userId) {
  const data = await sbGet(
    'sessions',
    `select=*&user_id=eq.${userId}&order=created_at.desc&limit=50`
  );
  return Array.isArray(data) ? data : [];
}

async function deleteRemoteSession(sessionId) {
  return sbDelete('sessions', `id=eq.${sessionId}`);
}

/* ════════════════════════════════════════════════════════════
   TEXT CLEANSING UTILITY
════════════════════════════════════════════════════════════ */
function cleanText(str) {
  return str
    .normalize('NFKC')
    .replace(/\u201C|\u201D/g, '"')
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u2014/g, '--')
    .replace(/\u2013/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\u00A0/g, ' ');
}

/* ════════════════════════════════════════════════════════════
   BOOK DATA
   Each book has:
     id        – stable string key
     title     – display title
     author    – display author
     year      – publication year
     genre     – 'novel' | 'short'
     chapters  – array of chapter objects:
                   { title: string, text: string }
                 Chapters 1-3 (index 0-2) are FREE.
                 Chapters 4+ (index 3+) require isPremium.

   Data is intentionally empty here.
   To populate, add chapter objects with long text strings.
   Minimum: each chapter text should be ~2 000 characters
            so PAGE_SIZE = 700 gives 3+ pages per chapter.
════════════════════════════════════════════════════════════ */
const PAGE_SIZE     = 700;   // characters per typing page
const FREE_CHAPTERS = 3;     // chapters[0..2] free; chapters[3+] locked

// 클로드가 시킨 연결 로직입니다.
const RAW_BOOKS = bookData.map(book => ({
  title: book.title, // 책 제목
  chapters: [ // 지금은 책 한 권당 챕터를 하나씩 넣고 있으니 이렇게 구성합니다.
      {
          title: book.title,
          text: book.content
      }
  ]
}));


/* ════════════════════════════════════════════════════════════
   PAGE SPLITTING
   Splits a chapter's text into PAGE_SIZE-character chunks,
   breaking on word boundaries.
════════════════════════════════════════════════════════════ */
function splitPages(text) {
  const pages = [];
  let start = 0;
  while (start < text.length) {
    let end = start + PAGE_SIZE;
    if (end >= text.length) { pages.push(text.slice(start)); break; }
    let cut = text.lastIndexOf(' ', end);
    if (cut <= start) cut = end;
    pages.push(text.slice(start, cut));
    start = cut + (text[cut] === ' ' ? 1 : 0);
  }
  return pages;
}

/* Build the runtime BOOKS array.
   Each book gets a `chapters` array where each chapter has
   a `pages` array (split text). */
const BOOKS = RAW_BOOKS.map(b => {
  const chapters = (b.chapters || []).map((ch, ci) => {
    const cleaned = cleanText(ch.text);
    return {
      index:  ci,
      title:  ch.title || `Chapter ${ci + 1}`,
      text:   cleaned,
      pages:  splitPages(cleaned),
      locked: ci >= FREE_CHAPTERS,   // chapters[0..2] free
    };
  });
  return { ...b, chapters };
});

const QUOTES = [
  '"A reader lives a thousand lives before he dies." -- George R.R. Martin',
  '"There is no friend as loyal as a book." -- Ernest Hemingway',
  '"The more that you read, the more things you will know." -- Dr. Seuss',
  '"A writer only begins a book. A reader finishes it." -- Samuel Johnson',
  '"I have always imagined that Paradise will be a kind of library." -- Borges',
];

/* ════════════════════════════════════════════════════════════
   GLOBAL STATE
════════════════════════════════════════════════════════════ */
const PER = 4;   // books per library page
let libFilter = 'all', libSearch = '', libPage = 1, acHi = -1;

/* Typing state */
let passage  = '';
let typed    = [];   // boolean[]  true = correct, false = incorrect
let curIdx   = 0;    // chars typed

/* Navigation state */
let curBook    = 0;   // index into BOOKS
let curChapter = 0;   // index into BOOKS[curBook].chapters
let curPg      = 0;   // index into chapter.pages

/* Timer state */
let tStart = null, tAcc = 0, tIdle = false, tIdleTimer = null, tTick = null;
let soundOn = true;
const LINE = 54;

/* Auth / premium */
let currentUser = null;
let isPremium   = false;

/* Local session history (also synced to Supabase when logged in) */
let sessions = [];
let detIdx   = -1;

/* ════════════════════════════════════════════════════════════
   SOUND ENGINE
════════════════════════════════════════════════════════════ */
let twAudio = null;
function getTypewriterAudio() {
  if (!twAudio) {
    twAudio = new Audio('typewriter.mp3');
    twAudio.volume = 0.55;
  }
  return twAudio;
}

let AC = null;
function getAC() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  return AC;
}

function playCorrectSound() {
  if (!soundOn) return;
  try {
    const audio = getTypewriterAudio();
    audio.currentTime = 0;
    audio.play().catch(() => playClackFallback());
  } catch { playClackFallback(); }
}

function playClackFallback() {
  try {
    const c = getAC(), n = 280;
    const buf = c.createBuffer(1, n, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random()*2-1) * Math.pow(1-i/n,3) * 0.11;
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain();
    g.gain.setValueAtTime(0.42, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.055);
    src.connect(g); g.connect(c.destination);
    src.start(); src.stop(c.currentTime + 0.06);
  } catch {}
}

function playDing() {
  if (!soundOn) return;
  try {
    const c = getAC();
    const o = c.createOscillator(), g = c.createGain();
    o.frequency.value = 1174; o.type = 'triangle';
    g.gain.setValueAtTime(0.06, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.45);
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime + 0.45);
  } catch {}
}

function playReturn() {
  if (!soundOn) return;
  try {
    const c = getAC(), dur = 0.11;
    const buf = c.createBuffer(1, Math.floor(c.sampleRate*dur), c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++)
      d[i] = (Math.random()*2-1)*0.13*Math.pow(1-i/d.length,0.9)*(1+0.5*Math.sin(i*0.1));
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain();
    g.gain.setValueAtTime(0.5, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    src.connect(g); g.connect(c.destination);
    src.start(); src.stop(c.currentTime + dur);
    animRet();
  } catch { animRet(); }
}

document.getElementById('sndBtn').addEventListener('click', function () {
  soundOn = !soundOn;
  this.textContent = soundOn ? 'Sound On' : 'Sound Off';
  this.className   = 'snd' + (soundOn ? ' on' : '');
});

/* ════════════════════════════════════════════════════════════
   OVERLAY SYSTEM
════════════════════════════════════════════════════════════ */
const openOv  = id => document.getElementById(id).classList.add('open');
const closeOv = id => document.getElementById(id).classList.remove('open');

document.querySelectorAll('[data-c]').forEach(b =>
  b.addEventListener('click', () => closeOv(b.dataset.c))
);
document.querySelectorAll('.ov').forEach(o =>
  o.addEventListener('click', e => { if (e.target === o) closeOv(o.id); })
);

/* ════════════════════════════════════════════════════════════
   SCREEN NAVIGATION
════════════════════════════════════════════════════════════ */
function goScr(id) {
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}

document.getElementById('bLogo')   .addEventListener('click', () => { goScr('sLib'); rl(); });
document.getElementById('bLib')    .addEventListener('click', () => { goScr('sLib'); rl(); });
document.getElementById('bProg')   .addEventListener('click', () => { goScr('sMy');  rMy(); });
document.getElementById('bSI')     .addEventListener('click', () => openOv('ovL'));
document.getElementById('bCof')    .addEventListener('click', () => openOv('ovC'));
document.getElementById('bAbout')  .addEventListener('click', () => openOv('ovAb'));
document.getElementById('bPriv')   .addEventListener('click', () => openOv('ovPr'));
document.getElementById('bFootCof').addEventListener('click', e => { e.preventDefault(); openOv('ovC'); });
document.getElementById('premLogin').addEventListener('click', () => { closeOv('ovP'); openOv('ovL'); });
document.getElementById('mySI')    .addEventListener('click', () => openOv('ovL'));

/* Back button inside sidebar → return to library */
document.getElementById('sbBack').addEventListener('click', () => {
  goScr('sLib'); rl();
});

/* ── AUTH (demo + Supabase hook) ── */
['socG', 'socA', 'socE'].forEach(id =>
  document.getElementById(id).addEventListener('click', async () => {
    /*
      PRODUCTION: Replace this block with your real OAuth / email-magic-link flow.
      Example for Supabase Auth (Google OAuth):
        const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      Then handle the session via supabase.auth.onAuthStateChange().
    */
    const userId = 'demo-user-' + Date.now();
    currentUser  = { id: userId, name: 'Demo User', email: 'demo@example.com' };
    document.getElementById('bSI').textContent = currentUser.name;
    isPremium = await checkIsPremium(userId);
    closeOv('ovL');
    /* Reload sidebar in case lock state changed */
    if (document.getElementById('sTw').classList.contains('on')) {
      renderSidebar(curBook);
    }
  })
);

/* Completion overlay buttons */
document.getElementById('doneLibBtn').addEventListener('click', () => {
  document.getElementById('doneOv').classList.remove('show');
  goScr('sLib'); rl();
});
document.getElementById('doneRetypeBtn').addEventListener('click', () => {
  document.getElementById('doneOv').classList.remove('show');
  loadPage(curBook, curChapter, curPg);
});

/* ════════════════════════════════════════════════════════════
   PAGE NAV BUTTONS  (Prev / Next within current chapter)
════════════════════════════════════════════════════════════ */
document.getElementById('prevPg').addEventListener('click', () => {
  if (curPg > 0) loadPage(curBook, curChapter, curPg - 1);
});

document.getElementById('nextPg').addEventListener('click', () => {
  tryNextPage();
});

/* Advance to next page; if at end of chapter, go to next chapter.
   Chapters 4+ (index >= FREE_CHAPTERS) require isPremium. */
function tryNextPage() {
  const chapter = BOOKS[curBook].chapters[curChapter];
  const nextPg  = curPg + 1;

  if (nextPg < chapter.pages.length) {
    /* Still inside the same chapter — always allowed
       (chapter-level lock is checked when entering the chapter) */
    loadPage(curBook, curChapter, nextPg);
    return;
  }

  /* End of this chapter — move to next chapter */
  const nextCh = curChapter + 1;
  const book   = BOOKS[curBook];

  if (nextCh >= book.chapters.length) return; // last chapter of book

  if (nextCh >= FREE_CHAPTERS && !isPremium) {
    openOv('ovP');
    return;
  }
  loadPage(curBook, nextCh, 0);
}

/* ════════════════════════════════════════════════════════════
   SIDEBAR — renders chapter list for the active book
════════════════════════════════════════════════════════════ */
function renderSidebar(bookIdx) {
  const book = BOOKS[bookIdx];
  document.getElementById('sbBookTitle') .textContent = book.title;
  document.getElementById('sbBookAuthor').textContent = book.author + ' · ' + book.year;

  const list = document.getElementById('sbList');
  list.innerHTML = '';

  book.chapters.forEach((ch, ci) => {
    const locked  = ci >= FREE_CHAPTERS && !isPremium;
    const active  = (ci === curChapter);

    const row = document.createElement('div');
    row.className = 'sb-ch' +
                    (active  ? ' active' : '') +
                    (locked  ? ' locked' : '');

    /* Chapter number */
    const numEl = document.createElement('div');
    numEl.className   = 'sb-ch-num';
    numEl.textContent = String(ci + 1).padStart(2, '0');

    /* Chapter label */
    const labelEl = document.createElement('div');
    labelEl.className   = 'sb-ch-label';
    labelEl.textContent = ch.title;

    /* Badge */
    const badgeEl = document.createElement('div');
    badgeEl.className   = 'sb-ch-badge ' + (locked ? 'lock' : 'free');
    badgeEl.textContent = locked ? '🔒' : 'Free';

    row.appendChild(numEl);
    row.appendChild(labelEl);
    row.appendChild(badgeEl);

    row.addEventListener('click', () => {
      if (locked) {
        openOv('ovP');
        return;
      }
      loadPage(bookIdx, ci, 0);
    });

    list.appendChild(row);
  });
}

/* Mark the active chapter row in the sidebar */
function updateSidebarActive() {
  document.querySelectorAll('.sb-ch').forEach((row, ci) => {
    row.classList.toggle('active', ci === curChapter);
  });
  /* Scroll active row into view */
  const activeRow = document.querySelector('.sb-ch.active');
  if (activeRow) activeRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ════════════════════════════════════════════════════════════
   LIBRARY RENDER
════════════════════════════════════════════════════════════ */
function getFiltered() {
  return BOOKS.filter(b => {
    const q  = libSearch.toLowerCase();
    const mq = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    const mf = libFilter === 'all' || libFilter === b.genre;
    return mq && mf;
  });
}

function rl() {
  const fb  = getFiltered();
  const tot = Math.max(1, Math.ceil(fb.length / PER));
  if (libPage > tot) libPage = tot;
  const sl  = fb.slice((libPage - 1) * PER, libPage * PER);
  document.getElementById('fct').textContent =
    fb.length + ' work' + (fb.length !== 1 ? 's' : '');

  const list = document.getElementById('bkl');
  list.innerHTML = '';

  if (fb.length === 0) {
    list.innerHTML = '<div style="font-family:var(--E);font-size:10px;color:var(--t3);letter-spacing:.14em;padding:28px 0;text-align:center">No works found.</div>';
    return;
  }

  sl.forEach(b => {
    const gi  = BOOKS.indexOf(b);
    const row = document.createElement('div');
    row.className = 'bkr';
    const preview = b.chapters.length > 0 ? b.chapters[0].text.substring(0, 100) + '...' : '—';
    row.innerHTML = `
      <div class="bkn">${String(gi + 1).padStart(2, '0')}</div>
      <div class="bkb">
        <div class="bkti">${b.title}</div>
        <div class="bkme">${b.author} &middot; ${b.year} &middot; ${b.genre}</div>
        <div class="bkpv">${preview}</div>
      </div>
      <div class="bksd">
        <div class="bkyr">${b.year}</div>
        <div class="bkf">${b.chapters.length} ch.</div>
        <div class="bkar">&rarr;</div>
      </div>`;
    row.addEventListener('click', () => startBook(gi));
    list.appendChild(row);
  });

  /* Pagination */
  const pg = document.getElementById('pgr');
  pg.innerHTML = '';
  if (tot <= 1) return;

  const prev = document.createElement('button');
  prev.className = 'pgb' + (libPage === 1 ? ' off' : '');
  prev.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>';
  if (libPage > 1) prev.addEventListener('click', () => { libPage--; rl(); });
  pg.appendChild(prev);

  for (let i = 1; i <= tot; i++) {
    const pb = document.createElement('button');
    pb.className = 'pgb' + (i === libPage ? ' on' : '');
    pb.textContent = i;
    const p = i;
    pb.addEventListener('click', () => { libPage = p; rl(); });
    pg.appendChild(pb);
  }

  const next = document.createElement('button');
  next.className = 'pgb' + (libPage === tot ? ' off' : '');
  next.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>';
  if (libPage < tot) next.addEventListener('click', () => { libPage++; rl(); });
  pg.appendChild(next);
}

/* Search autocomplete */
const siEl  = document.getElementById('si');
const acdEl = document.getElementById('acd');

siEl.addEventListener('input', function () {
  libSearch = this.value.trim(); libPage = 1; acHi = -1; rl(); rAC(this.value.trim());
});
siEl.addEventListener('keydown', function (e) {
  const items = acdEl.querySelectorAll('.acr');
  if      (e.key === 'ArrowDown')  { e.preventDefault(); acHi = Math.min(acHi + 1, items.length - 1); }
  else if (e.key === 'ArrowUp')    { e.preventDefault(); acHi = Math.max(acHi - 1, 0); }
  else if (e.key === 'Enter' && acHi >= 0) { items[acHi]?.click(); return; }
  else if (e.key === 'Escape')     { acdEl.classList.remove('open'); acHi = -1; return; }
  items.forEach((el, i) => el.classList.toggle('hl', i === acHi));
});
document.addEventListener('click', e => {
  if (!siEl.contains(e.target) && !acdEl.contains(e.target)) {
    acdEl.classList.remove('open'); acHi = -1;
  }
});

function rAC(q) {
  if (!q) { acdEl.classList.remove('open'); acdEl.innerHTML = ''; return; }
  const ql  = q.toLowerCase();
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re   = new RegExp(safe, 'gi');
  const matches = BOOKS.filter(b =>
    b.title.toLowerCase().includes(ql) || b.author.toLowerCase().includes(ql)
  ).slice(0, 5);
  if (!matches.length) { acdEl.classList.remove('open'); return; }
  acdEl.innerHTML = '';
  matches.forEach(b => {
    const d = document.createElement('div'); d.className = 'acr';
    d.innerHTML = `<span>${b.title.replace(re, m => `<span class="ach">${m}</span>`)}</span><span class="aca">${b.author}</span>`;
    d.addEventListener('click', () => {
      siEl.value = b.title; libSearch = b.title; libPage = 1;
      acdEl.classList.remove('open'); rl();
    });
    acdEl.appendChild(d);
  });
  acdEl.classList.add('open'); acHi = -1;
}

document.querySelectorAll('.ft').forEach(btn => {
  btn.addEventListener('click', function () {
    libFilter = this.dataset.f; libPage = 1;
    document.querySelectorAll('.ft').forEach(b => b.classList.remove('on'));
    this.classList.add('on'); rl();
  });
});

/* ════════════════════════════════════════════════════════════
   BOOK → CHAPTER ENTRY POINT
   startBook(bookIdx): open sidebar, load chapter 0, page 0
════════════════════════════════════════════════════════════ */
function startBook(idx) {
  if (!BOOKS[idx] || BOOKS[idx].chapters.length === 0) return;
  loadPage(idx, 0, 0);
}

/* ════════════════════════════════════════════════════════════
   loadPage(bookIdx, chapterIdx, pageIdx)
   Central function that loads a specific page of a chapter.
════════════════════════════════════════════════════════════ */
function loadPage(bookIdx, chapterIdx, pageIdx) {
  const book    = BOOKS[bookIdx];
  const chapter = book.chapters[chapterIdx];
  if (!chapter) return;

  /* Guard: locked chapter */
  if (chapterIdx >= FREE_CHAPTERS && !isPremium) {
    openOv('ovP');
    return;
  }

  curBook    = bookIdx;
  curChapter = chapterIdx;
  curPg      = pageIdx;

  passage = chapter.pages[pageIdx];
  typed   = [];
  curIdx  = 0;

  /* Reset timer */
  tStart = null; tAcc = 0; tIdle = false;
  clearInterval(tTick); clearTimeout(tIdleTimer);

  /* Reset stats display */
  document.getElementById('stW').textContent = '??';
  document.getElementById('stA').textContent = '??';
  document.getElementById('stC').textContent = '0';
  document.getElementById('stT').textContent = '0:00';
  document.getElementById('idlePill').classList.remove('on');
  document.getElementById('prf').style.width = '0%';

  /* Header info on paper */
  document.getElementById('pTi') .textContent = book.title + ' — ' + chapter.title;
  document.getElementById('pAu') .textContent = book.author + ', ' + book.year;
  document.getElementById('pPgI').textContent  =
    'Ch.' + (chapterIdx + 1) + ' · p.' + (pageIdx + 1);

  /* Page nav */
  const totalPages = chapter.pages.length;
  document.getElementById('pgInfo').textContent =
    'Ch.' + (chapterIdx + 1) + '  Page ' + (pageIdx + 1) + ' / ' + totalPages;
  document.getElementById('prevPg').disabled = (pageIdx === 0 && chapterIdx === 0);

  const isLastPageOfChapter = (pageIdx + 1 >= totalPages);
  const isLastChapter       = (chapterIdx + 1 >= book.chapters.length);
  const isVeryLastPage      = isLastPageOfChapter && isLastChapter;
  const nextChLocked        = isLastPageOfChapter &&
                              !isLastChapter &&
                              (chapterIdx + 1) >= FREE_CHAPTERS &&
                              !isPremium;

  const nextBtn = document.getElementById('nextPg');
  nextBtn.disabled      = isVeryLastPage;
  nextBtn.style.color       = nextChLocked ? 'var(--gld)' : '';
  nextBtn.style.borderColor = nextChLocked ? 'var(--gd)'  : '';

  /* Input reset */
  document.getElementById('typInput').value = '';
  document.getElementById('hintEl').style.display = 'block';

  /* Render sidebar + typing display */
  renderSidebar(bookIdx);
  updateSidebarActive();
  renderTyping();
  updateCar();

  goScr('sTw');
  setTimeout(focusInput, 100);
}

/* ════════════════════════════════════════════════════════════
   TYPING ENGINE
════════════════════════════════════════════════════════════ */
const typInput = document.getElementById('typInput');
const typDisp  = document.getElementById('typDisp');

function focusInput() { typInput.focus({ preventScroll: true }); }

document.getElementById('ppEl')  .addEventListener('click', focusInput);
document.getElementById('kb')    .addEventListener('click', focusInput);
document.getElementById('hintEl').addEventListener('click', focusInput);

let lastSndT = 0;

typInput.addEventListener('input', function () {
  const val     = this.value;
  const prevLen = curIdx;

  if (val.length > passage.length) {
    this.value = val.slice(0, passage.length);
    return;
  }

  typed  = Array.from({ length: val.length }, (_, i) => val[i] === passage[i]);
  curIdx = val.length;

  if (val.length > prevLen) {
    const now   = Date.now();
    const lastI = val.length - 1;

    if (typed[lastI]) {
      if (now - lastSndT > 20) { lastSndT = now; playCorrectSound(); flashKey(val[lastI]); }
    } else {
      flashKeyErr(val[lastI]);
    }

    const pol = curIdx % LINE;
    if (pol === LINE - 4) playDing();
    if (pol === 0 && curIdx > 0) playReturn();
  }

  this.style.height = 'auto';
  this.style.height = typDisp.scrollHeight + 'px';

  ensureTimer();
  schedIdle();
  renderTyping();
  updateCar();
  updateStats();

  if (curIdx >= passage.length) finish();
});

typInput.addEventListener('paste', e => e.preventDefault());

/* ── Render char-by-char display ── */
function renderTyping() {
  let h = '';
  for (let i = 0; i < passage.length; i++) {
    const ch   = passage[i];
    const safe = ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch;
    if      (i <  curIdx) h += `<span class="${typed[i] ? 'ck' : 'incorrect'}">${safe}</span>`;
    else if (i === curIdx) h += `<span class="cc">${safe}</span>`;
    else                   h += `<span class="cd">${safe}</span>`;
  }
  typDisp.innerHTML = h;
  typDisp.querySelector('.cc')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ── Carriage animation ── */
function updateCar() {
  const frac = (curIdx % LINE) / LINE;
  const ctr  = document.querySelector('.ctr');
  const car  = document.getElementById('car');
  if (!ctr || !car) return;
  car.style.left = Math.round((1 - frac) * Math.max(0, ctr.offsetWidth - 50)) + 'px';
}
function animRet() {
  const ctr = document.querySelector('.ctr'), car = document.getElementById('car');
  if (!ctr || !car) return;
  car.style.transition = 'left 0.22s cubic-bezier(0.1,0,0.3,1)';
  car.style.left = Math.max(0, ctr.offsetWidth - 50) + 'px';
  setTimeout(() => { car.style.transition = 'left 0.06s linear'; }, 240);
}

/* ── Key flash ── */
function flashKey(ch) {
  document.querySelectorAll('.k').forEach(el => {
    if (el.dataset.k === ch.toLowerCase()) {
      el.classList.add('hit'); setTimeout(() => el.classList.remove('hit'), 75);
    }
  });
}
function flashKeyErr(ch) {
  document.querySelectorAll('.k').forEach(el => {
    if (el.dataset.k === ch.toLowerCase()) {
      el.classList.add('err-hit'); setTimeout(() => el.classList.remove('err-hit'), 75);
    }
  });
}

/* ── Timer ── */
function getElapsed() {
  return tAcc + (!tIdle && tStart !== null ? Date.now() - tStart : 0);
}
function ensureTimer() {
  if (tStart === null && tAcc === 0) {
    tStart = Date.now(); tIdle = false;
    tTick  = setInterval(updateStats, 350);
  } else if (tIdle) {
    tStart = Date.now(); tIdle = false;
    document.getElementById('idlePill').classList.remove('on');
  }
}
function schedIdle() {
  clearTimeout(tIdleTimer);
  tIdleTimer = setTimeout(() => {
    if (tStart !== null) { tAcc += Date.now() - tStart; tStart = null; }
    tIdle = true;
    document.getElementById('idlePill').classList.add('on');
  }, 2000);
}
function updateStats() {
  const ms  = getElapsed(), sec = ms / 1000, min = sec / 60;
  const wpm = min > 0 ? Math.round((curIdx / 5) / min) : 0;
  const ok  = typed.filter(Boolean).length;
  const acc = curIdx > 0 ? Math.round(ok / curIdx * 100) : 0;
  const s   = Math.floor(sec % 60), m = Math.floor(sec / 60);
  document.getElementById('stW').textContent = wpm > 0 ? String(wpm) : '??';
  document.getElementById('stA').textContent = curIdx > 0 ? acc + '%' : '??';
  document.getElementById('stC').textContent = String(curIdx);
  document.getElementById('stT').textContent = m + ':' + String(s).padStart(2, '0');
  document.getElementById('prf').style.width =
    (passage.length > 0 ? curIdx / passage.length * 100 : 0).toFixed(1) + '%';
}

/* ════════════════════════════════════════════════════════════
   FINISH — called when all passage chars are typed
   AUTO-ADVANCE LOGIC:
   • Same chapter, next page  → advance immediately (no popup)
   • End of chapter, next ch unlocked → advance immediately
   • End of chapter, next ch locked → show paywall
   • Last chapter, last page → show completion overlay
════════════════════════════════════════════════════════════ */
function finish() {
  clearInterval(tTick); clearTimeout(tIdleTimer);
  if (tStart !== null) { tAcc += Date.now() - tStart; tStart = null; }

  const ms  = tAcc, sec = ms / 1000, min = sec / 60;
  const wpm = min > 0 ? Math.round((curIdx / 5) / min) : 0;
  const ok  = typed.filter(Boolean).length;
  const acc = curIdx > 0 ? Math.round(ok / curIdx * 100) : 0;
  const s   = Math.floor(sec % 60), m = Math.floor(sec / 60);
  const book    = BOOKS[curBook];
  const chapter = book.chapters[curChapter];

  /* Save session locally */
  const sess = {
    id:         Date.now(),
    bookId:     book.id,
    title:      book.title,
    author:     book.author,
    chapterIdx: curChapter,
    chTitle:    chapter.title,
    pageIdx:    curPg,
    wpm, acc,
    chars:      curIdx,
    durMs:      ms,
    date:       new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }),
    text:       passage,
  };
  sessions.unshift(sess);

  /* Optionally persist to Supabase */
  if (currentUser) {
    persistSession(currentUser.id, sess);
  }

  /* Determine what comes next */
  const isLastPageOfChapter = curPg + 1 >= chapter.pages.length;
  const isLastChapter       = curChapter + 1 >= book.chapters.length;
  const isVeryLastPage      = isLastPageOfChapter && isLastChapter;
  const nextChIdx           = isLastPageOfChapter ? curChapter + 1 : curChapter;
  const nextChLocked        = isLastPageOfChapter &&
                              !isLastChapter &&
                              nextChIdx >= FREE_CHAPTERS &&
                              !isPremium;

  if (!isLastPageOfChapter) {
    /* More pages in this chapter → auto-advance, no popup */
    loadPage(curBook, curChapter, curPg + 1);

  } else if (!isLastChapter && !nextChLocked) {
    /* End of chapter, next chapter unlocked → auto-advance */
    loadPage(curBook, curChapter + 1, 0);

  } else if (nextChLocked) {
    /* End of free chapter, next is locked → show paywall */
    openOv('ovP');

  } else {
    /* Last page of last chapter → show completion overlay */
    showCompletionOverlay(wpm, acc, m, s, book, chapter);
  }
}

function showCompletionOverlay(wpm, acc, m, s, book, chapter) {
  const grade = acc >= 95 ? 'Perfect.' : acc >= 80 ? 'Well composed.' : acc >= 65 ? 'Good effort.' : 'Keep practising.';
  document.getElementById('doneEy').textContent =
    book.title + ' — ' + chapter.title;
  document.getElementById('doneTi').textContent = grade;
  document.getElementById('doneSR').innerHTML = `
    <div class="done-sc"><span class="done-sv">${wpm}</span><span class="done-sl">WPM</span></div>
    <div class="done-sc"><span class="done-sv">${acc}%</span><span class="done-sl">Accuracy</span></div>
    <div class="done-sc"><span class="done-sv">${curIdx}</span><span class="done-sl">Chars</span></div>
    <div class="done-sc"><span class="done-sv">${m}:${String(s).padStart(2,'0')}</span><span class="done-sl">Time</span></div>`;
  const fill = document.getElementById('doneBarF');
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = acc + '%'; }, 80);
  document.getElementById('doneQt').textContent =
    QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById('doneOv').classList.add('show');
  document.getElementById('hintEl').style.display = 'none';
}

/* ════════════════════════════════════════════════════════════
   MY PROGRESS
════════════════════════════════════════════════════════════ */
async function rMy() {
  if (!currentUser) {
    document.getElementById('mpC').style.display = 'none';
    document.getElementById('nlo').style.display  = 'block';
    return;
  }
  document.getElementById('nlo').style.display  = 'none';
  document.getElementById('mpC').style.display  = 'block';
  document.getElementById('mpU').textContent    = currentUser.email;

  /* Merge local + remote sessions */
  const remote = await loadRemoteSessions(currentUser.id);
  if (remote.length > 0) {
    /* Map Supabase rows to local session shape */
    const mapped = remote.map(r => ({
      id:         r.id,
      bookId:     r.book_id,
      chapterIdx: r.chapter_idx,
      pageIdx:    r.page_idx,
      wpm:        r.wpm,
      acc:        r.acc,
      chars:      r.chars,
      durMs:      r.dur_ms,
      date:       new Date(r.created_at).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }),
      title:      BOOKS.find(b => b.id === r.book_id)?.title || r.book_id,
      author:     BOOKS.find(b => b.id === r.book_id)?.author || '',
      text:       '',
    }));
    sessions = mapped;
  }

  const n  = sessions.length;
  const aW = n ? Math.round(sessions.reduce((a, s) => a + s.wpm, 0) / n) : 0;
  const bW = n ? Math.max(...sessions.map(s => s.wpm))                   : 0;
  const aA = n ? Math.round(sessions.reduce((a, s) => a + s.acc, 0) / n) : 0;

  document.getElementById('mpS').textContent = n;
  document.getElementById('mpW').textContent = aW || '--';
  document.getElementById('mpB').textContent = bW || '--';
  document.getElementById('mpA').textContent = aA ? aA + '%' : '--';

  const list = document.getElementById('ssl2');
  list.innerHTML = '';

  if (!n) {
    list.innerHTML = '<div style="font-family:var(--E);font-size:9px;letter-spacing:.14em;color:var(--t3);padding:18px 0">No sessions yet.</div>';
    return;
  }

  sessions.forEach((s, i) => {
    const row = document.createElement('div'); row.className = 'ssr';
    row.innerHTML = `
      <div class="ssb">
        <div class="sst">${s.title}</div>
        <div class="ssd">${s.date} &middot; ${s.author}</div>
      </div>
      <div class="sss">
        <div><span class="ssv">${s.wpm}</span><span class="ssl3"> WPM</span></div>
        <div><span class="ssv">${s.acc}%</span><span class="ssl3"> ACC</span></div>
        <div><span class="ssv">${s.chars}</span><span class="ssl3"> CH</span></div>
      </div>`;
    row.addEventListener('click', () => openDet(i));
    list.appendChild(row);
  });
}

function openDet(i) {
  detIdx = i; const s = sessions[i];
  document.getElementById('dT').textContent  = s.title;
  document.getElementById('dM').textContent  = (s.author || '') + ' · ' + (s.date || '');
  document.getElementById('dW').textContent  = s.wpm;
  document.getElementById('dA').textContent  = s.acc + '%';
  document.getElementById('dC').textContent  = s.chars;
  const sec = Math.round((s.durMs || 0) / 1000);
  document.getElementById('dTm').textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
  document.getElementById('dTx').textContent = (s.text || '').substring(0, 280) + ((s.text || '').length > 280 ? '...' : '');
  openOv('ovD');
}

document.getElementById('dRt').addEventListener('click', () => {
  if (detIdx < 0) return;
  const s  = sessions[detIdx];
  const gi = BOOKS.findIndex(b => b.id === s.bookId);
  if (gi >= 0) {
    closeOv('ovD');
    loadPage(gi, s.chapterIdx || 0, s.pageIdx || 0);
  }
});

document.getElementById('dDl').addEventListener('click', async () => {
  if (detIdx < 0) return;
  const s = sessions[detIdx];
  if (currentUser && s.id) {
    await deleteRemoteSession(s.id);
  }
  sessions.splice(detIdx, 1);
  closeOv('ovD');
  rMy();
});

/* ════════════════════════════════════════════════════════════
   BUILD KEYBOARD
════════════════════════════════════════════════════════════ */
[
  { id: 'r0', k: '`1234567890-=' },
  { id: 'r1', k: 'QWERTYUIOP[]\\' },
  { id: 'r2', k: "ASDFGHJKL;'" },
  { id: 'r3', k: 'ZXCVBNM,./' },
].forEach(({ id, k }) => {
  const row = document.getElementById(id);
  [...k].forEach(c => {
    const d = document.createElement('div');
    d.className = 'k'; d.dataset.k = c.toLowerCase(); d.textContent = c;
    row.appendChild(d);
  });
});

/* ════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
rl();
goScr('sLib');
