'use strict';

/* ════════════════════════════════════════
   SUPABASE CONFIG
════════════════════════════════════════ */
const SUPABASE_URL = 'https://ootavtvsojfugqbrevpb.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdGF2dHZzb2pmdWdxYnJldnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTA2NjQsImV4cCI6MjA5MjUyNjY2NH0.LWjIMMW_rX0hCALhn_-jQDGZrylHx0v_kRDP5teiWJU';

async function checkIsPremium(userId) {
  try {
    const res = await fetch(`${SUPABASE_URL}profiles?select=is_premium&id=eq.${userId}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      }
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) return !!data[0].is_premium;
  } catch (e) {}
  return false;
}

/* ════════════════════════════════════════
   TEXT CLEANSING UTILITY
   - normalize NFKC
   - replace typographic quotes/dashes
════════════════════════════════════════ */
function cleanText(str) {
  return str
    .normalize('NFKC')
    .replace(/\u201C|\u201D/g, '"')   // " "  → "
    .replace(/\u2018|\u2019/g, "'")   // ' '  → '
    .replace(/\u2014/g, '--')          // —    → --
    .replace(/\u2013/g, '-')           // –    → -
    .replace(/\u2026/g, '...')         // …    → ...
    .replace(/\u00A0/g, ' ');          // NBSP → space
}

/* ════════════════════════════════════════
   BOOKS  (text cleaned at definition time)
════════════════════════════════════════ */
const RAW_BOOKS = [
  {id:'gatsby',title:'The Great Gatsby',author:'F. Scott Fitzgerald',year:1925,genre:'novel',
   text:`In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven't had the advantages that you've had." He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.`},
  {id:'moby',title:'Moby-Dick',author:'Herman Melville',year:1851,genre:'novel',
   text:`Call me Ishmael. Some years ago -- never mind how long precisely -- having little money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet -- then, I account it high time to get to sea as soon as I can.`},
  {id:'1984',title:'1984',author:'George Orwell',year:1949,genre:'novel',
   text:`It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for the wall, had been tacked to it. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache.`},
  {id:'pride',title:'Pride and Prejudice',author:'Jane Austen',year:1813,genre:'novel',
   text:`It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters. "My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?" Mr. Bennet replied that he had not.`},
  {id:'anna',title:'Anna Karenina',author:'Leo Tolstoy',year:1878,genre:'novel',
   text:`Happy families are all alike; every unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him. This position of affairs had now lasted three days, and not only the husband and wife themselves, but all the members of their family and household, were painfully conscious of it.`},
  {id:'kafka',title:'The Metamorphosis',author:'Franz Kafka',year:1915,genre:'short',
   text:`As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided by stiff arched segments on top of which the bed quilt was ready to slide off completely. His numerous legs, pitifully thin compared to the rest of his bulk, flickered helplessly before his eyes. What has happened to me? he thought. It was no dream.`},
  {id:'crime',title:'Crime and Punishment',author:'Fyodor Dostoevsky',year:1866,genre:'novel',
   text:`On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge. He had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high, five-storied house and was more like a cupboard than a room. The landlady who provided him with garret, dinners, and attendance, lived on the floor below, and every time he went out he was obliged to pass her kitchen.`},
  {id:'dorian',title:'The Picture of Dorian Gray',author:'Oscar Wilde',year:1890,genre:'novel',
   text:`The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum.`},
  {id:'twain',title:'Adventures of Huckleberry Finn',author:'Mark Twain',year:1884,genre:'novel',
   text:`You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There were things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary.`},
  {id:'dickens',title:'A Tale of Two Cities',author:'Charles Dickens',year:1859,genre:'novel',
   text:`It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way.`},
  {id:'dracula',title:'Dracula',author:'Bram Stoker',year:1897,genre:'novel',
   text:`3 May. Bistritz. Left Munich at 8:35 P.M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little time I had there. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible.`},
  {id:'tess',title:"Tess of the d'Urbervilles",author:'Thomas Hardy',year:1891,genre:'novel',
   text:`On an evening in the latter part of May a middle-aged man was walking homeward from Shaston to the village of Marlott, in the adjoining Vale of Blakemore, or Blackmoor. The pair of legs that carried him were rickety, and there was a bias in his gait which inclined him somewhat to the left of a straight line. He occasionally gave a smart nod, as if in confirmation of some opinion, though he was not thinking of anything in particular.`},
  {id:'middle',title:'Middlemarch',author:'George Eliot',year:1871,genre:'novel',
   text:`Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress. Her hand and wrist were so finely formed that she could wear sleeves not less bare of style than those in which the Blessed Virgin appeared to Italian painters; and her profile as well as her stature and bearing seemed to gain the more dignity from her plain garments.`},
  {id:'madding',title:'Far from the Madding Crowd',author:'Thomas Hardy',year:1874,genre:'novel',
   text:`When Farmer Oak smiled, the corners of his mouth spread till they were within an unimportant distance of his ears, his eyes were reduced to chinks, and diverging wrinkles appeared round them, extending upon his countenance like the rays in a rudimentary sketch of the rising sun.`},
  {id:'screw',title:'The Turn of the Screw',author:'Henry James',year:1898,genre:'short',
   text:`The story had held us, round the fire, sufficiently breathless, but except the obvious remark that it was gruesome, as, on Christmas eve in an old house, a strange tale should essentially be, I remember no comment uttered till somebody happened to say that it was the only case he had met in which such a visitation had fallen on a child.`},
  {id:'wild',title:'The Call of the Wild',author:'Jack London',year:1903,genre:'novel',
   text:`Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland.`},
  {id:'innocence',title:'The Age of Innocence',author:'Edith Wharton',year:1920,genre:'novel',
   text:`On a January evening of the early seventies, Christine Nilsson was singing in Faust at the Academy of Music in New York. Though there was already talk of the erection, in remote metropolitan distances "above the Forties," of a new Opera House which should compete in costliness and splendour with those of the great European capitals, the world of fashion was still content to reassemble every winter in the shabby red and gold boxes of the sociable old Academy.`},
  {id:'redcourage',title:'The Red Badge of Courage',author:'Stephen Crane',year:1895,genre:'novel',
   text:`The cold passed reluctantly from the earth, and the retiring fogs revealed an army stretched out on the hills, resting. As the landscape changed from brown to green, the army awakened, and began to tremble with eagerness at the noise of rumors. It cast its eyes upon the roads, which were growing from long troughs of liquid mud to proper thoroughfares.`},
  {id:'owlcreek',title:'An Occurrence at Owl Creek',author:'Ambrose Bierce',year:1890,genre:'short',
   text:`A man stood upon a railroad bridge in northern Alabama, looking down into the swift water twenty feet below. The man's hands were behind his back, the wrists bound with a cord. A rope closely encircled his neck. It was attached to a stout cross-timber above his head and the slack fell to the level of his knees.`},
  {id:'portrait',title:'The Portrait of a Lady',author:'Henry James',year:1881,genre:'novel',
   text:`Under certain circumstances there are few hours in life more agreeable than the hour dedicated to the ceremony known as afternoon tea. There are circumstances in which, whether you partake of the tea or not -- some people of course never do -- the situation is in itself delightful. Those that I have in mind in beginning to unfold this simple history offered an admirable setting to an innocent pastime.`},
  // PREMIUM
  {id:'proust',title:'In Search of Lost Time',author:'Marcel Proust',year:1913,genre:'novel',
   text:`For a long time I went to bed early. Sometimes, the candle barely out, my eyes closed so quickly that I did not have time to tell myself: "I'm falling asleep." And half an hour later the thought that it was time to go to sleep would wake me; I would try to put away the book which, I imagined, was still in my hands, and to blow out the light.`},
  {id:'woolf',title:'Mrs Dalloway',author:'Virginia Woolf',year:1925,genre:'novel',
   text:`Mrs. Dalloway said she would buy the flowers herself. For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer's men were coming. And then, thought Clarissa Dalloway, what a morning -- fresh as if issued to children on a beach. What a lark! What a plunge!`},
  {id:'brave',title:'Brave New World',author:'Aldous Huxley',year:1932,genre:'novel',
   text:`A squat grey building of only thirty-four stories. Over the main entrance the words, CENTRAL LONDON HATCHERY AND CONDITIONING CENTRE, and, in a shield, the World State's motto, COMMUNITY, IDENTITY, STABILITY. The enormous room on the ground floor faced towards the north.`},
  {id:'mice',title:'Of Mice and Men',author:'John Steinbeck',year:1937,genre:'short',
   text:`A few miles south of Soledad, the Salinas River drops in close to the hillside bank and runs deep and green. The water is warm too, for it has slipped twinkling over the yellow sands in the sunlight before reaching the narrow pool.`},
];

/* ════════════════════════════════════════
   PAGE SPLITTING
════════════════════════════════════════ */
const PAGE_SIZE  = 280;
const FREE_MAX_PG = 5; // pages 1-5 free; page 6+ requires premium

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

let gpc = 0;
const BOOKS = RAW_BOOKS.map(b => {
  const cleaned = cleanText(b.text);
  const pages   = splitPages(cleaned);
  const gs = gpc + 1;
  gpc += pages.length;
  return { ...b, text: cleaned, pages, globalStart: gs, globalEnd: gpc, free: gs <= FREE_MAX_PG };
});

const QUOTES = [
  '"A reader lives a thousand lives before he dies." -- George R.R. Martin',
  '"There is no friend as loyal as a book." -- Ernest Hemingway',
  '"The more that you read, the more things you will know." -- Dr. Seuss',
  '"A writer only begins a book. A reader finishes it." -- Samuel Johnson',
];

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
const PER = 4;
let libFilter = 'all', libSearch = '', libPage = 1, acHi = -1;

let passage = '';
let typed   = [];   // boolean per char: true = correct, false = incorrect
let curIdx  = 0;    // chars typed so far

let curBook = 0, curPg = 0;
let tStart = null, tAcc = 0, tIdle = false, tIdleTimer = null, tTick = null;
let soundOn = true;
const LINE = 54;

let currentUser = null, isPremium = false, sessions = [], detIdx = -1;

/* ════════════════════════════════════════
   SOUND — typewriter.mp3 on correct only
   (currentTime reset prevents overlap)
════════════════════════════════════════ */
let twAudio = null;
function getTypewriterAudio() {
  if (!twAudio) {
    twAudio = new Audio('typewriter.mp3');
    twAudio.volume = 0.55;
  }
  return twAudio;
}

// Fallback synthesised clack (used when typewriter.mp3 unavailable)
let AC = null;
function getAC() { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); return AC; }

function playCorrectSound() {
  if (!soundOn) return;
  const audio = getTypewriterAudio();
  try {
    audio.currentTime = 0;  // reset to prevent overlap
    audio.play().catch(() => playClackFallback());
  } catch(e) { playClackFallback(); }
}

function playClackFallback() {
  try {
    const c = getAC(), n = 280;
    const buf = c.createBuffer(1, n, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random()*2-1) * Math.pow(1-i/n, 3) * 0.11;
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain();
    g.gain.setValueAtTime(0.42, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.055);
    src.connect(g); g.connect(c.destination);
    src.start(c.currentTime); src.stop(c.currentTime + 0.06);
  } catch(e) {}
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
    o.start(c.currentTime); o.stop(c.currentTime + 0.45);
  } catch(e) {}
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
    src.start(c.currentTime); src.stop(c.currentTime + dur);
    animRet();
  } catch(e) { animRet(); }
}

document.getElementById('sndBtn').addEventListener('click', function() {
  soundOn = !soundOn;
  this.textContent = soundOn ? 'Sound On' : 'Sound Off';
  this.className = 'snd' + (soundOn ? ' on' : '');
});

/* ════════════════════════════════════════
   OVERLAY SYSTEM
════════════════════════════════════════ */
const openOv  = id => document.getElementById(id).classList.add('open');
const closeOv = id => document.getElementById(id).classList.remove('open');

document.querySelectorAll('[data-c]').forEach(b =>
  b.addEventListener('click', () => closeOv(b.dataset.c))
);
document.querySelectorAll('.ov').forEach(o =>
  o.addEventListener('click', e => { if (e.target === o) closeOv(o.id); })
);

/* ════════════════════════════════════════
   SCREEN NAV
════════════════════════════════════════ */
function goScr(id) {
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}

document.getElementById('bLogo') .addEventListener('click', () => { goScr('sLib'); rl(); });
document.getElementById('bLib')  .addEventListener('click', () => { goScr('sLib'); rl(); });
document.getElementById('bProg') .addEventListener('click', () => { goScr('sMy');  rMy(); });
document.getElementById('bSI')   .addEventListener('click', () => openOv('ovL'));
document.getElementById('bCof')  .addEventListener('click', () => openOv('ovC'));
document.getElementById('bAbout').addEventListener('click', () => openOv('ovAb'));
document.getElementById('bPriv') .addEventListener('click', () => openOv('ovPr'));
document.getElementById('bFootCof').addEventListener('click', e => { e.preventDefault(); openOv('ovC'); });
document.getElementById('premLogin').addEventListener('click', () => { closeOv('ovP'); openOv('ovL'); });
document.getElementById('mySI')  .addEventListener('click', () => openOv('ovL'));

['socG','socA','socF','socX','socE'].forEach(id =>
  document.getElementById(id).addEventListener('click', async () => {
    // Demo login — in production replace with real OAuth flow
    const userId = 'demo-user-id';
    currentUser = { id: userId, name: 'Demo User', email: 'demo@example.com' };
    document.getElementById('bSI').textContent = 'Demo User';
    // Check Supabase for premium status
    isPremium = await checkIsPremium(userId);
    closeOv('ovL');
  })
);

document.getElementById('doneLibBtn').addEventListener('click', () => {
  document.getElementById('doneOv').classList.remove('show');
  goScr('sLib'); rl();
});
document.getElementById('doneRetypeBtn').addEventListener('click', () => {
  document.getElementById('doneOv').classList.remove('show');
  loadPage(curBook, curPg);
});

/* ════════════════════════════════════════
   PAGE NAV BUTTONS
   - pages 1-5: free
   - page 6+: show premium modal if not isPremium
   - on completion: auto-advance to next page
════════════════════════════════════════ */
document.getElementById('prevPg').addEventListener('click', () => {
  if (curPg > 0) loadPage(curBook, curPg - 1);
});

document.getElementById('nextPg').addEventListener('click', () => {
  tryNextPage();
});

function tryNextPage() {
  const book  = BOOKS[curBook];
  const nextLocalPg = curPg + 1;
  if (nextLocalPg >= book.pages.length) return; // no more pages in this book

  const nextGlobal = book.globalStart + nextLocalPg; // 1-based global page number
  // Page 6+ requires premium
  if (nextGlobal > FREE_MAX_PG && !isPremium) {
    openOv('ovP');
    return;
  }
  loadPage(curBook, nextLocalPg);
}

/* ════════════════════════════════════════
   LIBRARY
════════════════════════════════════════ */
function getFiltered() {
  return BOOKS.filter(b => {
    const q  = libSearch.toLowerCase();
    const mq = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    const mf = libFilter === 'all'
      || (libFilter === 'free'    && b.free)
      || (libFilter === 'premium' && !b.free)
      || libFilter === b.genre;
    return mq && mf;
  });
}

function rl() {
  const fb  = getFiltered();
  const tot = Math.max(1, Math.ceil(fb.length / PER));
  if (libPage > tot) libPage = tot;
  const sl  = fb.slice((libPage-1)*PER, libPage*PER);
  document.getElementById('fct').textContent = fb.length + ' passage' + (fb.length !== 1 ? 's' : '');

  const list = document.getElementById('bkl'); list.innerHTML = '';
  sl.forEach(b => {
    const gi  = BOOKS.indexOf(b);
    const row = document.createElement('div');
    row.className = 'bkr' + (b.free ? '' : ' lk');
    row.innerHTML = `
      <div class="bkn">${String(gi+1).padStart(2,'0')}</div>
      <div class="bkb">
        <div class="bkti">${b.title}</div>
        <div class="bkme">${b.author} &middot; ${b.year} &middot; ${b.genre}</div>
        <div class="bkpv">${b.text.substring(0,100)}...</div>
      </div>
      <div class="bksd">
        <div class="bkyr">${b.year}</div>
        ${b.free ? '<div class="bkf">Free</div>' : '<div class="bkp">Pro</div>'}
        ${b.free ? '<div class="bkar">&rarr;</div>' : ''}
      </div>`;
    row.addEventListener('click', () => b.free ? startBook(gi) : openOv('ovP'));
    list.appendChild(row);
  });

  const pg = document.getElementById('pgr'); pg.innerHTML = '';
  if (tot <= 1) return;

  const prev = document.createElement('button');
  prev.className = 'pgb' + (libPage === 1 ? ' off' : '');
  prev.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
  if (libPage > 1) prev.addEventListener('click', () => { libPage--; rl(); });
  pg.appendChild(prev);

  for (let i = 1; i <= tot; i++) {
    const pb = document.createElement('button');
    pb.className = 'pgb' + (i === libPage ? ' on' : '');
    pb.textContent = i;
    const p = i; pb.addEventListener('click', () => { libPage = p; rl(); });
    pg.appendChild(pb);
  }

  const next = document.createElement('button');
  next.className = 'pgb' + (libPage === tot ? ' off' : '');
  next.innerHTML = '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  if (libPage < tot) next.addEventListener('click', () => { libPage++; rl(); });
  pg.appendChild(next);
}

/* Search / autocomplete */
const siEl  = document.getElementById('si');
const acdEl = document.getElementById('acd');

siEl.addEventListener('input', function() {
  libSearch = this.value.trim(); libPage = 1; acHi = -1; rl(); rAC(this.value.trim());
});
siEl.addEventListener('keydown', function(e) {
  const items = acdEl.querySelectorAll('.acr');
  if (e.key === 'ArrowDown') {
    e.preventDefault(); acHi = Math.min(acHi+1, items.length-1);
    items.forEach((el,i) => el.classList.toggle('hl', i===acHi));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault(); acHi = Math.max(acHi-1, 0);
    items.forEach((el,i) => el.classList.toggle('hl', i===acHi));
  } else if (e.key === 'Enter' && acHi >= 0) items[acHi]?.click();
  else if (e.key === 'Escape') { acdEl.classList.remove('open'); acHi = -1; }
});
document.addEventListener('click', e => {
  if (!siEl.contains(e.target) && !acdEl.contains(e.target)) {
    acdEl.classList.remove('open'); acHi = -1;
  }
});

function rAC(q) {
  if (!q) { acdEl.classList.remove('open'); acdEl.innerHTML = ''; return; }
  const ql   = q.toLowerCase();
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
  btn.addEventListener('click', function() {
    libFilter = this.dataset.f; libPage = 1;
    document.querySelectorAll('.ft').forEach(b => b.classList.remove('on'));
    this.classList.add('on'); rl();
  });
});

/* ════════════════════════════════════════
   TYPING ENGINE

   DESIGN:
   - Transparent <textarea> overlays styled display div
   - Every keystroke: compare textarea.value char-by-char to passage
   - typed[i] = (val[i] === passage[i])  — boolean array
   - Display re-renders from typed[] + curIdx
   - Typing is NEVER blocked — wrong chars shown in red (class "incorrect")
     and continue without stopping
   - Sound: correct keystrokes → typewriter.mp3 (currentTime=0 to prevent overlap)
             incorrect keystrokes → silent
════════════════════════════════════════ */

const typInput = document.getElementById('typInput');
const typDisp  = document.getElementById('typDisp');

function focusInput() { typInput.focus({ preventScroll: true }); }

document.getElementById('ppEl')  .addEventListener('click', focusInput);
document.getElementById('kb')    .addEventListener('click', focusInput);
document.getElementById('hintEl').addEventListener('click', focusInput);

function startBook(idx) { loadPage(idx, 0); }

function loadPage(bookIdx, pageIdx) {
  curBook = bookIdx;
  curPg   = pageIdx;
  const book = BOOKS[bookIdx];
  passage = book.pages[pageIdx];   // already NFKC-cleaned
  typed   = [];
  curIdx  = 0;
  tStart = null; tAcc = 0; tIdle = false;
  clearInterval(tTick); clearTimeout(tIdleTimer);

  document.getElementById('stW').textContent = '??';
  document.getElementById('stA').textContent = '??';
  document.getElementById('stC').textContent = '0';
  document.getElementById('stT').textContent = '0:00';
  document.getElementById('idlePill').classList.remove('on');
  document.getElementById('prf').style.width = '0%';

  document.getElementById('pTi').textContent  = book.title;
  document.getElementById('pAu').textContent  = book.author + ', ' + book.year;
  const gp = book.globalStart + pageIdx;
  document.getElementById('pPgI').textContent = 'p.' + gp;
  document.getElementById('pgInfo').textContent = 'Page ' + (pageIdx+1) + ' of ' + book.pages.length;

  document.getElementById('prevPg').disabled = (pageIdx === 0);

  const nextLocalPg = pageIdx + 1;
  const nextIsLast  = nextLocalPg >= book.pages.length;
  const nextGlobal  = book.globalStart + nextLocalPg;
  const nextPgBtn   = document.getElementById('nextPg');
  nextPgBtn.disabled = nextIsLast;

  // Show gold tint if next page will hit paywall
  const nextLocked  = !nextIsLast && nextGlobal > FREE_MAX_PG && !isPremium;
  nextPgBtn.style.color       = nextLocked ? 'var(--gld)' : '';
  nextPgBtn.style.borderColor = nextLocked ? 'var(--gd)'  : '';

  document.getElementById('hintEl').style.display = 'block';
  typInput.value = '';

  renderTyping();
  updateCar();
  goScr('sTw');
  setTimeout(focusInput, 100);
}

/* ═══════════════════════════════════════
   CORE INPUT HANDLER

   Algorithm:
   1. val = current textarea content
   2. Clamp to passage length (prevent over-typing)
   3. For i in 0..val.length-1: typed[i] = (val[i] === passage[i])
   4. curIdx = val.length
   5. If newly added char:
        correct  → play typewriter.mp3 (currentTime=0)
        incorrect → silent (no sound, no error beep)
   6. Finish when curIdx >= passage.length
═══════════════════════════════════════ */
let lastSndT = 0;

typInput.addEventListener('input', function() {
  const val     = this.value;
  const prevLen = curIdx;

  // Clamp to passage length
  if (val.length > passage.length) {
    this.value = val.slice(0, passage.length);
    return; // re-triggers input event
  }

  // Core: build typed[] boolean array
  typed  = Array.from({ length: val.length }, (_, i) => val[i] === passage[i]);
  curIdx = val.length;

  // Sound: only for newly added chars (not backspace/delete)
  if (val.length > prevLen) {
    const now      = Date.now();
    const lastI    = val.length - 1;
    const correct  = typed[lastI];

    if (correct) {
      // Play typewriter.mp3 — reset currentTime to avoid overlap
      if (now - lastSndT > 20) {
        lastSndT = now;
        playCorrectSound();
        flashKey(val[lastI]);
      }
    } else {
      // Incorrect: silent — just flash the key in red
      flashKeyErr(val[lastI]);
    }

    // Carriage sounds at line end
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

  // Finish when all passage characters have been typed
  if (curIdx >= passage.length) finish();
});

// Block paste to keep the exercise fair
typInput.addEventListener('paste', e => e.preventDefault());

/* ═══════════════════════════════════════
   RENDER TYPING DISPLAY

   i < curIdx  → typed:   correct=.ck  incorrect=.incorrect (red)
   i === curIdx → cursor: .cc (blinking)
   i > curIdx  → pending: .cd (dim)
═══════════════════════════════════════ */
function renderTyping() {
  let h = '';
  for (let i = 0; i < passage.length; i++) {
    const ch   = passage[i];
    const safe = ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch;

    if (i < curIdx) {
      // typed[i] true = correct (dark ink), false = incorrect (red)
      h += `<span class="${typed[i] ? 'ck' : 'incorrect'}">${safe}</span>`;
    } else if (i === curIdx) {
      h += `<span class="cc">${safe}</span>`;
    } else {
      h += `<span class="cd">${safe}</span>`;
    }
  }
  typDisp.innerHTML = h;
  typDisp.querySelector('.cc')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ── CARRIAGE ── */
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

/* ── TIMER ── */
function getEl()    { return tAcc + (!tIdle && tStart !== null ? Date.now() - tStart : 0); }
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
  const ms  = getEl(), sec = ms / 1000, min = sec / 60;
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

/* ════════════════════════════════════════
   FINISH
   - Save session
   - Show completion overlay
   - Auto-advance to next page IF pages 1-5 (free range)
     OR user isPremium; otherwise show premium modal
════════════════════════════════════════ */
function finish() {
  clearInterval(tTick); clearTimeout(tIdleTimer);
  if (tStart !== null) { tAcc += Date.now() - tStart; tStart = null; }

  const ms  = tAcc, sec = ms / 1000, min = sec / 60;
  const wpm = min > 0 ? Math.round((curIdx / 5) / min) : 0;
  const ok  = typed.filter(Boolean).length;
  const acc = curIdx > 0 ? Math.round(ok / curIdx * 100) : 0;
  const s   = Math.floor(sec % 60), m = Math.floor(sec / 60);
  const book = BOOKS[curBook];
  const gp   = book.globalStart + curPg;

  sessions.unshift({
    id: Date.now(), bookId: book.id, title: book.title, author: book.author,
    wpm, acc, chars: curIdx, durMs: ms, pageIdx: curPg,
    date: new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }),
    text: passage
  });

  // Check whether next page would be page 6+ (paywall) 
  const nextLocalPg = curPg + 1;
  const nextGlobal  = book.globalStart + nextLocalPg;
  const hasNextPage = nextLocalPg < book.pages.length;
  const nextLocked  = hasNextPage && nextGlobal > FREE_MAX_PG && !isPremium;

  // Auto-advance: page 1-5 complete → silently load next page after short delay
  // Page 5 complete → if page 6 is locked, show premium modal instead
  if (hasNextPage && !nextLocked) {
    // Show brief completion overlay first, then auto-advance
    showCompletionOverlay(wpm, acc, gp, m, s, book, true);
  } else if (hasNextPage && nextLocked) {
    // Would enter page 6+ without premium
    showCompletionOverlay(wpm, acc, gp, m, s, book, false);
    // Delay premium modal slightly so overlay is visible
    setTimeout(() => openOv('ovP'), 1200);
  } else {
    // Last page of book
    showCompletionOverlay(wpm, acc, gp, m, s, book, false);
  }
}

function showCompletionOverlay(wpm, acc, gp, m, s, book, autoAdvance) {
  const grade = acc >= 95 ? 'Perfect.' : acc >= 80 ? 'Well composed.' : acc >= 65 ? 'Good effort.' : 'Keep practising.';
  document.getElementById('doneEy').textContent = book.title + ' -- ' + book.author + ' -- Page ' + gp;
  document.getElementById('doneTi').textContent = grade;
  document.getElementById('doneSR').innerHTML = `
    <div class="done-sc"><span class="done-sv">${wpm}</span><span class="done-sl">WPM</span></div>
    <div class="done-sc"><span class="done-sv">${acc}%</span><span class="done-sl">Accuracy</span></div>
    <div class="done-sc"><span class="done-sv">${curIdx}</span><span class="done-sl">Chars</span></div>
    <div class="done-sc"><span class="done-sv">${m}:${String(s).padStart(2,'0')}</span><span class="done-sl">Time</span></div>`;
  const fill = document.getElementById('doneBarF');
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = acc + '%'; }, 80);
  document.getElementById('doneQt').textContent = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  document.getElementById('doneOv').classList.add('show');
  document.getElementById('hintEl').style.display = 'none';

  if (autoAdvance) {
    // Auto-advance after 1.8s — user can still click "Choose Another" or "Type Again"
    setTimeout(() => {
      if (document.getElementById('doneOv').classList.contains('show')) {
        document.getElementById('doneOv').classList.remove('show');
        loadPage(curBook, curPg + 1);
      }
    }, 1800);
  }
}

/* ════════════════════════════════════════
   MY PROGRESS
════════════════════════════════════════ */
function rMy() {
  if (!currentUser) {
    document.getElementById('mpC').style.display = 'none';
    document.getElementById('nlo').style.display = 'block';
    return;
  }
  document.getElementById('mpC').style.display = 'block';
  document.getElementById('nlo').style.display = 'none';
  document.getElementById('mpU').textContent = currentUser.email;
  const n  = sessions.length;
  const aW = n ? Math.round(sessions.reduce((a,s) => a+s.wpm, 0) / n) : 0;
  const bW = n ? Math.max(...sessions.map(s => s.wpm)) : 0;
  const aA = n ? Math.round(sessions.reduce((a,s) => a+s.acc, 0) / n) : 0;
  document.getElementById('mpS').textContent = n;
  document.getElementById('mpW').textContent = aW || '--';
  document.getElementById('mpB').textContent = bW || '--';
  document.getElementById('mpA').textContent = aA ? aA + '%' : '--';
  const list = document.getElementById('ssl2'); list.innerHTML = '';
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
        <div><span class="ssv">${s.wpm}</span><span class="ssl3">WPM</span></div>
        <div><span class="ssv">${s.acc}%</span><span class="ssl3">ACC</span></div>
        <div><span class="ssv">${s.chars}</span><span class="ssl3">CHARS</span></div>
      </div>`;
    row.addEventListener('click', () => openDet(i));
    list.appendChild(row);
  });
}

function openDet(i) {
  detIdx = i; const s = sessions[i];
  document.getElementById('dT').textContent  = s.title;
  document.getElementById('dM').textContent  = s.author + ' \u00b7 ' + s.date;
  document.getElementById('dW').textContent  = s.wpm;
  document.getElementById('dA').textContent  = s.acc + '%';
  document.getElementById('dC').textContent  = s.chars;
  const sec = Math.round(s.durMs / 1000);
  document.getElementById('dTm').textContent = Math.floor(sec/60) + ':' + String(sec%60).padStart(2,'0');
  document.getElementById('dTx').textContent = s.text.substring(0, 280) + (s.text.length > 280 ? '...' : '');
  openOv('ovD');
}

document.getElementById('dRt').addEventListener('click', () => {
  if (detIdx < 0) return;
  const gi = BOOKS.findIndex(b => b.id === sessions[detIdx].bookId);
  if (gi >= 0) { closeOv('ovD'); loadPage(gi, sessions[detIdx].pageIdx || 0); }
});
document.getElementById('dDl').addEventListener('click', () => {
  if (detIdx < 0) return;
  sessions.splice(detIdx, 1); closeOv('ovD'); rMy();
});

/* ════════════════════════════════════════
   BUILD KEYBOARD
════════════════════════════════════════ */
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

/* ════════════════════════════════════════
   INIT
════════════════════════════════════════ */
rl();
startBook(0);
goScr('sLib');
