'use strict';

/*
 * data.js — Literary Typing Studio
 * 20 public-domain works — chapter structure only.
 * Fill each `content` field with text from Project Gutenberg.
 *
 * FREE  : chapters index 0–2  (Chapter 1–3)
 * LOCKED: chapters index 3+   (Chapter 4 onward, requires $4.99)
 *
 * ── HOW TO CONNECT TO app.js ───────────────────────────────────
 * 1. In index.html, add BEFORE <script src="app.js">:
 *      <script src="data.js"></script>
 *
 * 2. In app.js, replace the RAW_BOOKS definition with:
 *      const RAW_BOOKS = bookData.map(b => ({
 *        ...b,
 *        chapters: b.chapters.map(ch => ({
 *          title: ch.title,
 *          text:  ch.content,
 *        }))
 *      }));
 *
 * ── GUTENBERG SOURCE LINKS ─────────────────────────────────────
 *  01 Pride and Prejudice       gutenberg.org/files/1342/1342-0.txt
 *  02 Alice in Wonderland       gutenberg.org/files/11/11-0.txt
 *  03 Sherlock Holmes           gutenberg.org/files/1661/1661-0.txt
 *  04 The Great Gatsby          gutenberg.org/files/64317/64317-0.txt
 *  05 Dorian Gray               gutenberg.org/files/174/174-0.txt
 *  06 Dracula                   gutenberg.org/files/345/345-0.txt
 *  07 Frankenstein              gutenberg.org/files/84/84-0.txt
 *  08 Peter Pan                 gutenberg.org/files/16/16-0.txt
 *  09 Grimm's Fairy Tales       gutenberg.org/files/2591/2591-0.txt
 *  10 Anne of Green Gables      gutenberg.org/files/45/45-0.txt
 *  11 Little Women              gutenberg.org/files/514/514-0.txt
 *  12 Treasure Island           gutenberg.org/files/120/120-0.txt
 *  13 The Secret Garden         gutenberg.org/files/113/113-0.txt
 *  14 A Tale of Two Cities      gutenberg.org/files/98/98-0.txt
 *  15 Oliver Twist              gutenberg.org/files/730/730-0.txt
 *  16 Jane Eyre                 gutenberg.org/files/1260/1260-0.txt
 *  17 Wuthering Heights         gutenberg.org/files/768/768-0.txt
 *  18 The Time Machine          gutenberg.org/files/35/35-0.txt
 *  19 The Invisible Man         gutenberg.org/files/5230/5230-0.txt
 *  20 The Call of the Wild      gutenberg.org/files/215/215-0.txt
 */

const bookData = [

  /* ══════════════════════════════════════════════════════════════
     01. PRIDE AND PREJUDICE — Jane Austen (1813)
     61 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1',  content: `Chapter 1

It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?” 
Mr. Bennet replied that he had not. 
“But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.” 
Mr. Bennet made no answer. 
“Do not you want to know who has taken it?” cried his wife, impatiently. 
“You want to tell me, and I have no objection to hearing it.”

This was invitation enough. 

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.” 

“What is his name?” 
“Bingley.” 
“Is he married or single?” 
“Oh, single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!” 

“How so? How can it affect them?” 
“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome? You must know that I am thinking of his marrying one of them.” 
“Is that his design in settling here?” 
“Design? Nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.” 

“I see no occasion for that. You and the girls may go—or you may send them by themselves, which perhaps will be still better; for as you are as handsome as any of them, Mr. Bingley might like you the best of the party.” 

“My dear, you flatter me. I certainly have had my share of beauty, but I do not pretend to be anything extraordinary now. When a woman has five grown-up daughters, she ought to give over thinking of her own beauty.” 
“In such cases, a woman has not often much beauty to think of.” 

“But, my dear, you must indeed go and see Mr. Bingley when he comes into the neighbourhood.” 
“It is more than I engage for, I assure you.” 
“But consider your daughters. Only think what an establishment it would be for one of them. Sir William and Lady Lucas are determined to go, merely on that account; for in general, you know, they visit no new comers. Indeed you must go, for it will be impossible for us to visit him, if you do not.” 

“You are over scrupulous, surely. I dare say Mr. Bingley will be very glad to see you; and I will send a few lines by you to assure him of my hearty consent to his marrying whichever he chooses of the girls—though I must throw in a good word for my little Lizzy.” 

“I desire you will do no such thing. Lizzy is not a bit better than the others: and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lydia. But you are always giving her the preference.” 

“They have none of them much to recommend them,” replied he: “they are all silly and ignorant like other girls; but Lizzy has something more of quickness than her sisters.” 

“Mr. Bennet, how can you abuse your own children in such a way? You take delight in vexing me. You have no compassion on my poor nerves.” 
“You mistake me, my dear. I have a high respect for your nerves. They are my old friends. I have heard you mention them with consideration these twenty years at least.” 

“Ah, you do not know what I suffer.” 
“But I hope you will get over it, and live to see many young men of four thousand a year come into the neighbourhood.” 
“It will be no use to us, if twenty such should come, since you will not visit them.” 
“Depend upon it, my dear, that when there are twenty, I will visit them all.” 

Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develope. She was a woman of mean understanding, little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married: its solace was visiting and news.` },
      { chapter:  2, title: 'Chapter 2',  content: `Chapter 2

Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with, “I hope Mr. Bingley will like it, Lizzy.”

“We are not in a way to know what Mr. Bingley likes,” said her mother, resentfully, “since we are not to visit.” 
“But you forget, mamma,” said Elizabeth, “that we shall meet him at the assemblies, and that Mrs. Long has promised to introduce him.” 
“I do not believe Mrs. Long will do any such thing. She has two nieces of her own. She is a selfish, hypocritical woman, and I have no opinion of her.” 
“No more have I,” said Mr. Bennet; “and I am glad to find that you do not depend on her serving you.”

Mrs. Bennet deigned not to make any reply; but, unable to contain herself, began scolding one of her daughters. 
“Don’t keep coughing so, Kitty, for heaven’s sake! Have a little compassion on my nerves. You tear them to pieces.” 
“Kitty has no discretion in her coughs,” said her father; “she times them ill.” 
“I do not cough for my own amusement,” replied Kitty, fretfully. “When is your next ball to be, Lizzy?” 
“To-morrow fortnight.” 
“Ay, so it is,” cried her mother, “and Mrs. Long does not come back till the day before; so, it will be impossible for her to introduce him, for she will not know him herself.”

“Then, my dear, you may have the advantage of your friend, and introduce Mr. Bingley to her.” 
“Impossible, Mr. Bennet, impossible, when I am not acquainted with him myself; how can you be so teasing?” 
“I honour your circumspection. A fortnight’s acquaintance is certainly very little. One cannot know what a man really is by the end of a fortnight. But if we do not venture, somebody else will; and after all, Mrs. Long and her nieces must stand their chance; and, therefore, as she will think it an act of kindness, if you decline the office, I will take it on myself.”

The girls stared at their father. Mrs. Bennet said only, “Nonsense, nonsense!” 
“What can be the meaning of that emphatic exclamation?” cried he. “Do you consider the forms of introduction, and the stress that is laid on them, as nonsense? I cannot quite agree with you there. What say you, Mary? For you are a young lady of deep reflection, I know, and read great books, and make extracts.” 

Mary wished to say something very sensible, but knew not how. 
“While Mary is adjusting her ideas,” he continued, “let us return to Mr. Bingley.” 
“I am sick of Mr. Bingley,” cried his wife. 
“I am sorry to hear that; but why did you not tell me so before? If I had known as much this morning, I certainly would not have called on him. It is very unlucky; but as I have actually paid the visit, we cannot escape the acquaintance now.”

The astonishment of the ladies was just what he wished—that of Mrs. Bennet perhaps surpassing the rest; though when the first tumult of joy was over, she began to declare that it was what she had expected all the while. 

“How good it was in you, my dear Mr. Bennet! But I knew I should persuade you at last. I was sure you loved your girls too well to neglect such an acquaintance. Well, how pleased I am! And it is such a good joke, too, that you should have gone this morning, and never said a word about it till now.” 

“Now, Kitty, you may cough as much as you choose,” said Mr. Bennet; and, as he spoke, he left the room, fatigued with the raptures of his wife. 

“What an excellent father you have, girls,” said she, when the door was shut. “I do not know how you will ever make him amends for his kindness; or me either, for that matter. At our time of life, it is not so pleasant, I can tell you, to be making new acquaintances every day; but for your sakes we would do anything. Lydia, my love, though you are the youngest, I dare say Mr. Bingley will dance with you at the next ball.” 
“Oh,” said Lydia, stoutly, “I am not afraid; for though I am the youngest, I’m the tallest.” 

The rest of the evening was spent in conjecturing how soon he would return Mr. Bennet’s visit, and determining when they should ask him to dinner.` },
      { chapter:  3, title: 'Chapter 3',  content: `Chapter 3

Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, was sufficient to draw from her husband any satisfactory description of Mr. Bingley. They attacked him in various ways, with barefaced questions, ingenious suppositions, and distant surmises; but he eluded the skill of them all; and they were at last obliged to accept the second-hand intelligence of their neighbour, Lady Lucas. 

Her report was highly favourable. Sir William had been delighted with him. He was quite young, wonderfully handsome, extremely agreeable, and, to crown the whole, he meant to be at the next assembly with a large party. Nothing could be more delightful! To be fond of dancing was a certain step towards falling in love; and very lively hopes of Mr. Bingley’s heart were entertained.

“If I can but see one of my daughters happily settled at Netherfield,” said Mrs. Bennet to her husband, “and all the others equally well married, I shall have nothing to wish for.”

In a few days Mr. Bingley returned Mr. Bennet’s visit, and sat about ten minutes with him in his library. He had entertained hopes of being admitted to a sight of the young ladies, of whose beauty he had heard much; but he saw only the father. The ladies were somewhat more fortunate, for they had the advantage of ascertaining, from an upper window, that he wore a blue coat and rode a black horse.

An invitation to dinner was soon afterwards despatched; and already had Mrs. Bennet planned the courses that were to do credit to her housekeeping, when an answer arrived which deferred it all. Mr. Bingley was obliged to be in town the following day, and consequently unable to accept the honour of their invitation. Mrs. Bennet was quite disconcerted. Lady Lucas quieted her fears a little by starting the idea of his being gone to London only to get a large party for the ball; and a report soon followed that Mr. Bingley was to bring twelve ladies and seven gentlemen with him to the assembly. 

And when the party entered the assembly-room, it consisted of only five altogether: Mr. Bingley, his two sisters, the husband of the eldest, and another young man. Mr. Bingley was good-looking and gentlemanlike: he had a pleasant countenance, and easy, unaffected manners. His sisters were fine women, with an air of decided fashion. But his friend Mr. Darcy soon drew the attention of the room by his fine, tall person, handsome features, and noble mien. The gentlemen pronounced him to be a fine figure of a man, the ladies declared he was much handsomer than Mr. Bingley.

However, his manners gave a disgust which turned the tide of his popularity; for he was discovered to be proud, to be above his company, and above being pleased. Mr. Bingley had soon made himself acquainted with all the principal people in the room: he was lively and unreserved, danced every dance. Such amiable qualities must speak for themselves. What a contrast between him and his friend! Mr. Darcy danced only once with Mrs. Hurst and once with Miss Bingley, declined being introduced to any other lady, and spent the rest of the evening in walking about the room.

Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit down for two dances; and during part of that time, Mr. Darcy had been standing near enough for her to overhear a conversation between him and Mr. Bingley. 

“Come, Darcy,” said he, “I must have you dance. I hate to see you standing about by yourself in this stupid manner.” 
“I certainly shall not. You know how I detest it, unless I am particularly acquainted with my partner. At such an assembly as this, it would be insupportable. There is not another woman in the room whom it would not be a punishment to me to stand up with.” 
“I would not be so fastidious as you are,” cried Bingley, “for a kingdom! There are several of them, you see, uncommonly pretty.” 
“You are dancing with the only handsome girl in the room,” said Mr. Darcy, looking at the eldest Miss Bennet. 
“Oh, she is the most beautiful creature I ever beheld! But there is one of her sisters sitting down just behind you, who is very pretty, and I dare say very agreeable.” 

Which do you mean?” and turning round, he looked for a moment at Elizabeth, till, catching her eye, he withdrew his own, and coldly said, “She is tolerable: but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men. You had better return to your partner and enjoy her smiles, for you are wasting your time with me.” 

Mr. Bingley followed his advice. Mr. Darcy walked off; and Elizabeth remained with no very cordial feelings towards him. She told the story, however, with great spirit among her friends; for she had a lively, playful disposition, which delighted in anything ridiculous. 

The evening altogether passed off pleasantly. They returned in good spirits to Longbourn. They found Mr. Bennet still up. “Oh, my dear Mr. Bennet,” as she entered the room, “we have had a most delightful evening. Jane was so admired, nothing could be like it. Mr. Bingley thought her quite beautiful, and danced with her twice. Only think of that, my dear: he actually danced with her twice! First of all, he asked Miss Lucas. I was so vexed to see him stand up with her; but, however, he did not admire her at all. Then he inquired who Jane was, and got introduced, and asked her for the two next.”

“If he had had any compassion for me,” cried her husband impatiently, “he would not have danced half so much! For God’s sake, say no more of his partners.” 
“Oh, my dear,” continued Mrs. Bennet, “I am quite delighted with him. He is so excessively handsome! But I can assure you that Lizzy does not lose much by not suiting his fancy; for he is a most disagreeable, horrid man, not at all worth pleasing. So high and so conceited, that there was no enduring him! Not handsome enough to dance with! I quite detest the man.”` },
      { chapter:  4, title: 'Chapter 4',  content: `Chapter 4

When Jane and Elizabeth were alone, the former, who had been cautious in her praise of Mr. Bingley before, expressed to her sister how very much she admired him. “He is just what a young man ought to be,” said she, “sensible, good-humoured, lively; and I never saw such happy manners! So much ease, with such perfect good breeding!”

“He is also handsome,” replied Elizabeth, “which a young man ought likewise to be if he possibly can. His character is thereby complete.” 
“I was very much flattered by his asking me to dance a second time. I did not expect such a compliment.” 
“Did not you? I did for you. But that is one great difference between us. Compliments always take you by surprise, and me never. What could be more natural than his asking you again? He could not help seeing that you were about five times as pretty as every other woman in the room.”

“Well, he certainly is very agreeable, and I give you leave to like him. You have liked many a stupider person.” 
“Dear Lizzy!” 
“Oh, you are a great deal too apt, you know, to like people in general. You never see a fault in anybody. All the world are good and agreeable in your eyes. I never heard you speak ill of a human being in my life.” 
“I would wish not to be hasty in censuring anyone; but I always speak what I think.”

“I know you do: and it is that which makes the wonder. With your good sense, to be so honestly blind to the follies and nonsense of others! And so, you like this man’s sisters, too, do you? Their manners are not equal to his.” 
“Certainly not, at first; but they are very pleasing women when you converse with them. Miss Bingley is to live with her brother, and keep his house; and I am much mistaken if we shall not find a very charming neighbour in her.”

Elizabeth listened in silence, but was not convinced. Bingley's sisters were, in fact, very fine ladies; but proud and conceited. They were rather handsome; had been educated in one of the first private seminaries in town; and were, therefore, in every respect entitled to think well of themselves and meanly of others.

Between Mr. Bingley and Darcy there was a very steady friendship, in spite of a great opposition of character. Bingley was endeared to Darcy by the easiness, openness, and ductility of his temper. On the strength of Darcy’s regard, Bingley had the firmest reliance, and of his judgment the highest opinion. In understanding, Darcy was the superior. Darcy was clever, but at the same time haughty, reserved, and fastidious; and his manners, though well bred, were not inviting.

The manner in which they spoke of the Meryton assembly was sufficiently characteristic. Bingley had never met with pleasanter people or prettier girls in his life; everyone had been most kind and attentive to him. As to Miss Bennet, he could not conceive an angel more beautiful. 

Darcy, on the contrary, had seen a collection of people in whom there was little beauty and no fashion, for none of whom he had felt the smallest interest. Miss Bennet he acknowledged to be pretty; but she smiled too much. Mrs. Hurst and her sister allowed it to be so; but still they admired her and liked her, and pronounced her to be a sweet girl. Their brother felt authorized by such commendation to think of her as he chose.` },
      { chapter:  5, title: 'Chapter 5',  content: `` },
      { chapter:  6, title: 'Chapter 6',  content: `` },
      { chapter:  7, title: 'Chapter 7',  content: `` },
      { chapter:  8, title: 'Chapter 8',  content: `` },
      { chapter:  9, title: 'Chapter 9',  content: `` },
      { chapter: 10, title: 'Chapter 10', content: `` },
      { chapter: 11, title: 'Chapter 11', content: `` },
      { chapter: 12, title: 'Chapter 12', content: `` },
      { chapter: 13, title: 'Chapter 13', content: `` },
      { chapter: 14, title: 'Chapter 14', content: `` },
      { chapter: 15, title: 'Chapter 15', content: `` },
      { chapter: 16, title: 'Chapter 16', content: `` },
      { chapter: 17, title: 'Chapter 17', content: `` },
      { chapter: 18, title: 'Chapter 18', content: `` },
      { chapter: 19, title: 'Chapter 19', content: `` },
      { chapter: 20, title: 'Chapter 20', content: `` },
      { chapter: 21, title: 'Chapter 21', content: `` },
      { chapter: 22, title: 'Chapter 22', content: `` },
      { chapter: 23, title: 'Chapter 23', content: `` },
      { chapter: 24, title: 'Chapter 24', content: `` },
      { chapter: 25, title: 'Chapter 25', content: `` },
      { chapter: 26, title: 'Chapter 26', content: `` },
      { chapter: 27, title: 'Chapter 27', content: `` },
      { chapter: 28, title: 'Chapter 28', content: `` },
      { chapter: 29, title: 'Chapter 29', content: `` },
      { chapter: 30, title: 'Chapter 30', content: `` },
      { chapter: 31, title: 'Chapter 31', content: `` },
      { chapter: 32, title: 'Chapter 32', content: `` },
      { chapter: 33, title: 'Chapter 33', content: `` },
      { chapter: 34, title: 'Chapter 34', content: `` },
      { chapter: 35, title: 'Chapter 35', content: `` },
      { chapter: 36, title: 'Chapter 36', content: `` },
      { chapter: 37, title: 'Chapter 37', content: `` },
      { chapter: 38, title: 'Chapter 38', content: `` },
      { chapter: 39, title: 'Chapter 39', content: `` },
      { chapter: 40, title: 'Chapter 40', content: `` },
      { chapter: 41, title: 'Chapter 41', content: `` },
      { chapter: 42, title: 'Chapter 42', content: `` },
      { chapter: 43, title: 'Chapter 43', content: `` },
      { chapter: 44, title: 'Chapter 44', content: `` },
      { chapter: 45, title: 'Chapter 45', content: `` },
      { chapter: 46, title: 'Chapter 46', content: `` },
      { chapter: 47, title: 'Chapter 47', content: `` },
      { chapter: 48, title: 'Chapter 48', content: `` },
      { chapter: 49, title: 'Chapter 49', content: `` },
      { chapter: 50, title: 'Chapter 50', content: `` },
      { chapter: 51, title: 'Chapter 51', content: `` },
      { chapter: 52, title: 'Chapter 52', content: `` },
      { chapter: 53, title: 'Chapter 53', content: `` },
      { chapter: 54, title: 'Chapter 54', content: `` },
      { chapter: 55, title: 'Chapter 55', content: `` },
      { chapter: 56, title: 'Chapter 56', content: `` },
      { chapter: 57, title: 'Chapter 57', content: `` },
      { chapter: 58, title: 'Chapter 58', content: `` },
      { chapter: 59, title: 'Chapter 59', content: `` },
      { chapter: 60, title: 'Chapter 60', content: `` },
      { chapter: 61, title: 'Chapter 61', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     02. ALICE'S ADVENTURES IN WONDERLAND — Lewis Carroll (1865)
     12 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'alice-in-wonderland',
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
    year: 1865,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — Down the Rabbit-Hole',             content: `` },
      { chapter:  2, title: 'Chapter 2 — The Pool of Tears',                content: `` },
      { chapter:  3, title: 'Chapter 3 — A Caucus-Race and a Long Tale',    content: `` },
      { chapter:  4, title: 'Chapter 4 — The Rabbit Sends in a Little Bill',content: `` },
      { chapter:  5, title: 'Chapter 5 — Advice from a Caterpillar',        content: `` },
      { chapter:  6, title: 'Chapter 6 — Pig and Pepper',                   content: `` },
      { chapter:  7, title: 'Chapter 7 — A Mad Tea-Party',                  content: `` },
      { chapter:  8, title: "Chapter 8 — The Queen's Croquet-Ground",       content: `` },
      { chapter:  9, title: "Chapter 9 — The Mock Turtle's Story",          content: `` },
      { chapter: 10, title: 'Chapter 10 — The Lobster Quadrille',           content: `` },
      { chapter: 11, title: 'Chapter 11 — Who Stole the Tarts?',            content: `` },
      { chapter: 12, title: "Chapter 12 — Alice's Evidence",                content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     03. THE ADVENTURES OF SHERLOCK HOLMES — Arthur Conan Doyle (1892)
     12 stories
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'sherlock-holmes',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'short',
    chapters: [
      { chapter:  1, title: 'A Scandal in Bohemia',                      content: `` },
      { chapter:  2, title: 'The Red-Headed League',                     content: `` },
      { chapter:  3, title: 'A Case of Identity',                        content: `` },
      { chapter:  4, title: 'The Boscombe Valley Mystery',               content: `` },
      { chapter:  5, title: 'The Five Orange Pips',                      content: `` },
      { chapter:  6, title: 'The Man with the Twisted Lip',              content: `` },
      { chapter:  7, title: 'The Adventure of the Blue Carbuncle',       content: `` },
      { chapter:  8, title: 'The Adventure of the Speckled Band',        content: `` },
      { chapter:  9, title: "The Adventure of the Engineer's Thumb",     content: `` },
      { chapter: 10, title: 'The Adventure of the Noble Bachelor',       content: `` },
      { chapter: 11, title: 'The Adventure of the Beryl Coronet',        content: `` },
      { chapter: 12, title: 'The Adventure of the Copper Beeches',       content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     04. THE GREAT GATSBY — F. Scott Fitzgerald (1925)
     9 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'great-gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'novel',
    chapters: [
      { chapter: 1, title: 'Chapter 1', content: `` },
      { chapter: 2, title: 'Chapter 2', content: `` },
      { chapter: 3, title: 'Chapter 3', content: `` },
      { chapter: 4, title: 'Chapter 4', content: `` },
      { chapter: 5, title: 'Chapter 5', content: `` },
      { chapter: 6, title: 'Chapter 6', content: `` },
      { chapter: 7, title: 'Chapter 7', content: `` },
      { chapter: 8, title: 'Chapter 8', content: `` },
      { chapter: 9, title: 'Chapter 9', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     05. THE PICTURE OF DORIAN GRAY — Oscar Wilde (1890)
     20 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'dorian-gray',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1',  content: `` },
      { chapter:  2, title: 'Chapter 2',  content: `` },
      { chapter:  3, title: 'Chapter 3',  content: `` },
      { chapter:  4, title: 'Chapter 4',  content: `` },
      { chapter:  5, title: 'Chapter 5',  content: `` },
      { chapter:  6, title: 'Chapter 6',  content: `` },
      { chapter:  7, title: 'Chapter 7',  content: `` },
      { chapter:  8, title: 'Chapter 8',  content: `` },
      { chapter:  9, title: 'Chapter 9',  content: `` },
      { chapter: 10, title: 'Chapter 10', content: `` },
      { chapter: 11, title: 'Chapter 11', content: `` },
      { chapter: 12, title: 'Chapter 12', content: `` },
      { chapter: 13, title: 'Chapter 13', content: `` },
      { chapter: 14, title: 'Chapter 14', content: `` },
      { chapter: 15, title: 'Chapter 15', content: `` },
      { chapter: 16, title: 'Chapter 16', content: `` },
      { chapter: 17, title: 'Chapter 17', content: `` },
      { chapter: 18, title: 'Chapter 18', content: `` },
      { chapter: 19, title: 'Chapter 19', content: `` },
      { chapter: 20, title: 'Chapter 20', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     06. DRACULA — Bram Stoker (1897)
     27 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'dracula',
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: "Chapter 1 — Jonathan Harker's Journal",          content: `` },
      { chapter:  2, title: "Chapter 2 — Jonathan Harker's Journal (cont.)",  content: `` },
      { chapter:  3, title: "Chapter 3 — Jonathan Harker's Journal (cont.)",  content: `` },
      { chapter:  4, title: "Chapter 4 — Jonathan Harker's Journal (cont.)",  content: `` },
      { chapter:  5, title: 'Chapter 5 — Letters — Lucy and Mina',            content: `` },
      { chapter:  6, title: "Chapter 6 — Mina Murray's Journal",              content: `` },
      { chapter:  7, title: 'Chapter 7 — Cutting from The Dailygraph',        content: `` },
      { chapter:  8, title: "Chapter 8 — Mina Murray's Journal",              content: `` },
      { chapter:  9, title: "Chapter 9 — Mina Murray's Journal",              content: `` },
      { chapter: 10, title: "Chapter 10 — Mina Murray's Journal",             content: `` },
      { chapter: 11, title: "Chapter 11 — Lucy Westenra's Diary",             content: `` },
      { chapter: 12, title: "Chapter 12 — Dr. Seward's Diary",                content: `` },
      { chapter: 13, title: "Chapter 13 — Dr. Seward's Diary",                content: `` },
      { chapter: 14, title: "Chapter 14 — Mina Harker's Journal",             content: `` },
      { chapter: 15, title: "Chapter 15 — Dr. Seward's Diary",                content: `` },
      { chapter: 16, title: "Chapter 16 — Dr. Seward's Diary",                content: `` },
      { chapter: 17, title: "Chapter 17 — Dr. Seward's Diary",                content: `` },
      { chapter: 18, title: "Chapter 18 — Mina Harker's Journal",             content: `` },
      { chapter: 19, title: "Chapter 19 — Jonathan Harker's Journal",         content: `` },
      { chapter: 20, title: "Chapter 20 — Jonathan Harker's Journal",         content: `` },
      { chapter: 21, title: "Chapter 21 — Mina Harker's Journal",             content: `` },
      { chapter: 22, title: "Chapter 22 — Jonathan Harker's Journal",         content: `` },
      { chapter: 23, title: "Chapter 23 — Dr. Seward's Diary",                content: `` },
      { chapter: 24, title: "Chapter 24 — Dr. Seward's Phonograph Diary",     content: `` },
      { chapter: 25, title: "Chapter 25 — Dr. Seward's Diary",                content: `` },
      { chapter: 26, title: "Chapter 26 — Dr. Seward's Diary",                content: `` },
      { chapter: 27, title: "Chapter 27 — Mina Harker's Journal",             content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     07. FRANKENSTEIN — Mary Shelley (1818)
     4 Letters + 24 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Letter 1',   content: `` },
      { chapter:  2, title: 'Letter 2',   content: `` },
      { chapter:  3, title: 'Letter 3',   content: `` },
      { chapter:  4, title: 'Letter 4',   content: `` },
      { chapter:  5, title: 'Chapter 1',  content: `` },
      { chapter:  6, title: 'Chapter 2',  content: `` },
      { chapter:  7, title: 'Chapter 3',  content: `` },
      { chapter:  8, title: 'Chapter 4',  content: `` },
      { chapter:  9, title: 'Chapter 5',  content: `` },
      { chapter: 10, title: 'Chapter 6',  content: `` },
      { chapter: 11, title: 'Chapter 7',  content: `` },
      { chapter: 12, title: 'Chapter 8',  content: `` },
      { chapter: 13, title: 'Chapter 9',  content: `` },
      { chapter: 14, title: 'Chapter 10', content: `` },
      { chapter: 15, title: 'Chapter 11', content: `` },
      { chapter: 16, title: 'Chapter 12', content: `` },
      { chapter: 17, title: 'Chapter 13', content: `` },
      { chapter: 18, title: 'Chapter 14', content: `` },
      { chapter: 19, title: 'Chapter 15', content: `` },
      { chapter: 20, title: 'Chapter 16', content: `` },
      { chapter: 21, title: 'Chapter 17', content: `` },
      { chapter: 22, title: 'Chapter 18', content: `` },
      { chapter: 23, title: 'Chapter 19', content: `` },
      { chapter: 24, title: 'Chapter 20', content: `` },
      { chapter: 25, title: 'Chapter 21', content: `` },
      { chapter: 26, title: 'Chapter 22', content: `` },
      { chapter: 27, title: 'Chapter 23', content: `` },
      { chapter: 28, title: 'Chapter 24', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     08. PETER PAN — J.M. Barrie (1911)
     17 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'peter-pan',
    title: 'Peter Pan',
    author: 'J.M. Barrie',
    year: 1911,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — Peter Breaks Through',              content: `` },
      { chapter:  2, title: 'Chapter 2 — The Shadow',                        content: `` },
      { chapter:  3, title: 'Chapter 3 — Come Away, Come Away!',             content: `` },
      { chapter:  4, title: 'Chapter 4 — The Flight',                        content: `` },
      { chapter:  5, title: 'Chapter 5 — The Island Come True',              content: `` },
      { chapter:  6, title: 'Chapter 6 — The Little House',                  content: `` },
      { chapter:  7, title: 'Chapter 7 — The Home Under the Ground',         content: `` },
      { chapter:  8, title: "Chapter 8 — The Mermaids' Lagoon",              content: `` },
      { chapter:  9, title: 'Chapter 9 — The Never Bird',                    content: `` },
      { chapter: 10, title: 'Chapter 10 — The Happy Home',                   content: `` },
      { chapter: 11, title: "Chapter 11 — Wendy's Story",                    content: `` },
      { chapter: 12, title: 'Chapter 12 — The Children Are Carried Off',     content: `` },
      { chapter: 13, title: 'Chapter 13 — Do You Believe in Fairies?',       content: `` },
      { chapter: 14, title: 'Chapter 14 — The Pirate Ship',                  content: `` },
      { chapter: 15, title: 'Chapter 15 — Hook or Me This Time',             content: `` },
      { chapter: 16, title: 'Chapter 16 — The Return Home',                  content: `` },
      { chapter: 17, title: 'Chapter 17 — When Wendy Grew Up',               content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     09. GRIMM'S FAIRY TALES — Brothers Grimm (1812)
     First 10 tales used as chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'grimms-fairy-tales',
    title: "Grimm's Fairy Tales",
    author: 'Brothers Grimm',
    year: 1812,
    genre: 'short',
    chapters: [
      { chapter:  1, title: 'The Golden Bird',               content: `` },
      { chapter:  2, title: 'Hans in Luck',                  content: `` },
      { chapter:  3, title: 'Jorinda and Jorindel',          content: `` },
      { chapter:  4, title: 'The Travelling Musicians',      content: `` },
      { chapter:  5, title: 'Old Sultan',                    content: `` },
      { chapter:  6, title: 'The Straw, the Coal, and the Bean', content: `` },
      { chapter:  7, title: 'Briar Rose',                    content: `` },
      { chapter:  8, title: 'The Dog and the Sparrow',       content: `` },
      { chapter:  9, title: 'The Twelve Dancing Princesses', content: `` },
      { chapter: 10, title: 'The Fisherman and His Wife',    content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     10. ANNE OF GREEN GABLES — L.M. Montgomery (1908)
     38 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'anne-of-green-gables',
    title: 'Anne of Green Gables',
    author: 'L.M. Montgomery',
    year: 1908,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — Mrs. Rachel Lynde Is Surprised',                  content: `` },
      { chapter:  2, title: 'Chapter 2 — Matthew Cuthbert Is Surprised',                   content: `` },
      { chapter:  3, title: 'Chapter 3 — Marilla Cuthbert Is Surprised',                   content: `` },
      { chapter:  4, title: 'Chapter 4 — Morning at Green Gables',                         content: `` },
      { chapter:  5, title: "Chapter 5 — Anne's History",                                  content: `` },
      { chapter:  6, title: 'Chapter 6 — Marilla Makes Up Her Mind',                       content: `` },
      { chapter:  7, title: "Chapter 7 — Anne Says Her Prayers",                           content: `` },
      { chapter:  8, title: "Chapter 8 — Anne's Bringing-up Is Begun",                     content: `` },
      { chapter:  9, title: 'Chapter 9 — Mrs. Rachel Lynde Is Properly Horrified',         content: `` },
      { chapter: 10, title: "Chapter 10 — Anne's Apology",                                 content: `` },
      { chapter: 11, title: "Chapter 11 — Anne's Impressions of Sunday School",            content: `` },
      { chapter: 12, title: 'Chapter 12 — A Solemn Vow and Promise',                       content: `` },
      { chapter: 13, title: 'Chapter 13 — The Delights of Anticipation',                   content: `` },
      { chapter: 14, title: "Chapter 14 — Anne's Confession",                              content: `` },
      { chapter: 15, title: 'Chapter 15 — A Tempest in the School Teapot',                 content: `` },
      { chapter: 16, title: 'Chapter 16 — Diana Is Invited to Tea with Tragic Results',    content: `` },
      { chapter: 17, title: 'Chapter 17 — A New Interest in Life',                         content: `` },
      { chapter: 18, title: 'Chapter 18 — Anne to the Rescue',                             content: `` },
      { chapter: 19, title: 'Chapter 19 — A Concert a Catastrophe and a Confession',       content: `` },
      { chapter: 20, title: 'Chapter 20 — A Good Imagination Gone Wrong',                  content: `` },
      { chapter: 21, title: 'Chapter 21 — A New Departure in Flavorings',                  content: `` },
      { chapter: 22, title: 'Chapter 22 — Anne Is Invited Out to Tea',                     content: `` },
      { chapter: 23, title: 'Chapter 23 — Anne Comes to Grief in an Affair of Honor',      content: `` },
      { chapter: 24, title: 'Chapter 24 — Miss Stacy and Her Pupils Get Up a Concert',     content: `` },
      { chapter: 25, title: 'Chapter 25 — Matthew Insists on Puffed Sleeves',              content: `` },
      { chapter: 26, title: 'Chapter 26 — The Story Club Is Formed',                       content: `` },
      { chapter: 27, title: 'Chapter 27 — Vanity and Vexation of Spirit',                  content: `` },
      { chapter: 28, title: 'Chapter 28 — An Unfortunate Lily Maid',                       content: `` },
      { chapter: 29, title: "Chapter 29 — An Epoch in Anne's Life",                        content: `` },
      { chapter: 30, title: "Chapter 30 — The Queen's Class Is Organized",                 content: `` },
      { chapter: 31, title: 'Chapter 31 — Where the Brook and River Meet',                 content: `` },
      { chapter: 32, title: 'Chapter 32 — The Pass List Is Out',                           content: `` },
      { chapter: 33, title: 'Chapter 33 — The Hotel Concert',                              content: `` },
      { chapter: 34, title: "Chapter 34 — A Queen's Girl",                                 content: `` },
      { chapter: 35, title: "Chapter 35 — The Winter at Queen's",                          content: `` },
      { chapter: 36, title: 'Chapter 36 — The Glory and the Dream',                        content: `` },
      { chapter: 37, title: 'Chapter 37 — The Reaper Whose Name Is Death',                 content: `` },
      { chapter: 38, title: 'Chapter 38 — The Bend in the Road',                           content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     11. LITTLE WOMEN — Louisa May Alcott (1868)
     23 chapters (Part 1)
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'little-women',
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — Playing Pilgrims',                            content: `` },
      { chapter:  2, title: 'Chapter 2 — A Merry Christmas',                           content: `` },
      { chapter:  3, title: 'Chapter 3 — The Laurence Boy',                            content: `` },
      { chapter:  4, title: 'Chapter 4 — Burdens',                                     content: `` },
      { chapter:  5, title: 'Chapter 5 — Being Neighborly',                            content: `` },
      { chapter:  6, title: 'Chapter 6 — Beth Finds the Palace Beautiful',             content: `` },
      { chapter:  7, title: "Chapter 7 — Amy's Valley of Humiliation",                 content: `` },
      { chapter:  8, title: 'Chapter 8 — Jo Meets Apollyon',                           content: `` },
      { chapter:  9, title: 'Chapter 9 — Meg Goes to Vanity Fair',                     content: `` },
      { chapter: 10, title: 'Chapter 10 — The P.C. and P.O.',                          content: `` },
      { chapter: 11, title: 'Chapter 11 — Experiments',                                content: `` },
      { chapter: 12, title: 'Chapter 12 — Camp Laurence',                              content: `` },
      { chapter: 13, title: 'Chapter 13 — Castles in the Air',                         content: `` },
      { chapter: 14, title: 'Chapter 14 — Secrets',                                    content: `` },
      { chapter: 15, title: 'Chapter 15 — A Telegram',                                 content: `` },
      { chapter: 16, title: 'Chapter 16 — Letters',                                    content: `` },
      { chapter: 17, title: 'Chapter 17 — Little Faithful',                            content: `` },
      { chapter: 18, title: 'Chapter 18 — Dark Days',                                  content: `` },
      { chapter: 19, title: "Chapter 19 — Amy's Will",                                 content: `` },
      { chapter: 20, title: 'Chapter 20 — Confidential',                               content: `` },
      { chapter: 21, title: 'Chapter 21 — Laurie Makes Mischief and Jo Makes Peace',   content: `` },
      { chapter: 22, title: 'Chapter 22 — Pleasant Meadows',                           content: `` },
      { chapter: 23, title: 'Chapter 23 — Aunt March Settles the Question',            content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     12. TREASURE ISLAND — Robert Louis Stevenson (1883)
     34 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'treasure-island',
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    year: 1883,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — The Old Sea-dog at the Admiral Benbow',       content: `` },
      { chapter:  2, title: 'Chapter 2 — Black Dog Appears and Disappears',            content: `` },
      { chapter:  3, title: 'Chapter 3 — The Black Spot',                              content: `` },
      { chapter:  4, title: 'Chapter 4 — The Sea-chest',                               content: `` },
      { chapter:  5, title: 'Chapter 5 — The Last of the Blind Man',                   content: `` },
      { chapter:  6, title: "Chapter 6 — The Captain's Papers",                        content: `` },
      { chapter:  7, title: 'Chapter 7 — I Go to Bristol',                             content: `` },
      { chapter:  8, title: 'Chapter 8 — At the Sign of the Spy-glass',                content: `` },
      { chapter:  9, title: 'Chapter 9 — Powder and Arms',                             content: `` },
      { chapter: 10, title: 'Chapter 10 — The Voyage',                                 content: `` },
      { chapter: 11, title: 'Chapter 11 — What I Heard in the Apple Barrel',           content: `` },
      { chapter: 12, title: 'Chapter 12 — Council of War',                             content: `` },
      { chapter: 13, title: 'Chapter 13 — How My Shore Adventure Began',               content: `` },
      { chapter: 14, title: 'Chapter 14 — The First Blow',                             content: `` },
      { chapter: 15, title: 'Chapter 15 — The Man of the Island',                      content: `` },
      { chapter: 16, title: 'Chapter 16 — Narrative Continued by the Doctor',          content: `` },
      { chapter: 17, title: "Chapter 17 — The Jolly-boat's Last Trip",                 content: `` },
      { chapter: 18, title: 'Chapter 18 — Narrative Continued by the Doctor (2)',      content: `` },
      { chapter: 19, title: 'Chapter 19 — Narrative Continued by the Doctor (3)',      content: `` },
      { chapter: 20, title: "Chapter 20 — Silver's Embassy",                           content: `` },
      { chapter: 21, title: 'Chapter 21 — The Attack',                                 content: `` },
      { chapter: 22, title: 'Chapter 22 — How My Sea Adventure Began',                 content: `` },
      { chapter: 23, title: 'Chapter 23 — The Ebb-tide Runs',                          content: `` },
      { chapter: 24, title: 'Chapter 24 — The Cruise of the Hispaniola',               content: `` },
      { chapter: 25, title: 'Chapter 25 — I Strike the Jolly Roger',                   content: `` },
      { chapter: 26, title: 'Chapter 26 — Israel Hands',                               content: `` },
      { chapter: 27, title: 'Chapter 27 — Pieces of Eight',                            content: `` },
      { chapter: 28, title: "Chapter 28 — In the Enemy's Camp",                        content: `` },
      { chapter: 29, title: 'Chapter 29 — The Black Spot Again',                       content: `` },
      { chapter: 30, title: 'Chapter 30 — On Parole',                                  content: `` },
      { chapter: 31, title: "Chapter 31 — The Treasure Hunt — Flint's Pointer",        content: `` },
      { chapter: 32, title: 'Chapter 32 — The Treasure Hunt — The Voice Among the Trees', content: `` },
      { chapter: 33, title: 'Chapter 33 — The Fall of a Chieftain',                    content: `` },
      { chapter: 34, title: 'Chapter 34 — And Last',                                   content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     13. THE SECRET GARDEN — Frances Hodgson Burnett (1911)
     27 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'secret-garden',
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — There Is No One Left',                          content: `` },
      { chapter:  2, title: 'Chapter 2 — Mistress Mary Quite Contrary',                  content: `` },
      { chapter:  3, title: 'Chapter 3 — Across the Moor',                               content: `` },
      { chapter:  4, title: 'Chapter 4 — Martha',                                        content: `` },
      { chapter:  5, title: 'Chapter 5 — The Cry in the Corridor',                       content: `` },
      { chapter:  6, title: 'Chapter 6 — There Was Some One Crying',                     content: `` },
      { chapter:  7, title: 'Chapter 7 — The Key to the Garden',                         content: `` },
      { chapter:  8, title: 'Chapter 8 — The Robin Who Showed the Way',                  content: `` },
      { chapter:  9, title: 'Chapter 9 — The Strangest House Any One Ever Lived In',     content: `` },
      { chapter: 10, title: 'Chapter 10 — Dickon',                                       content: `` },
      { chapter: 11, title: 'Chapter 11 — The Nest of the Missel Thrush',                content: `` },
      { chapter: 12, title: 'Chapter 12 — Might I Have a Bit of Earth?',                 content: `` },
      { chapter: 13, title: 'Chapter 13 — I Am Colin',                                   content: `` },
      { chapter: 14, title: 'Chapter 14 — A Young Rajah',                                content: `` },
      { chapter: 15, title: 'Chapter 15 — Nest Building',                                content: `` },
      { chapter: 16, title: "Chapter 16 — I Won't Said Mary",                            content: `` },
      { chapter: 17, title: 'Chapter 17 — A Tantrum',                                    content: `` },
      { chapter: 18, title: 'Chapter 18 — Tha Munnot Waste No Time',                     content: `` },
      { chapter: 19, title: 'Chapter 19 — It Has Come!',                                 content: `` },
      { chapter: 20, title: 'Chapter 20 — I Shall Live For Ever and Ever!',              content: `` },
      { chapter: 21, title: 'Chapter 21 — Ben Weatherstaff',                             content: `` },
      { chapter: 22, title: 'Chapter 22 — When the Sun Went Down',                       content: `` },
      { chapter: 23, title: 'Chapter 23 — Magic',                                        content: `` },
      { chapter: 24, title: 'Chapter 24 — Let Them Laugh',                               content: `` },
      { chapter: 25, title: 'Chapter 25 — The Curtain',                                  content: `` },
      { chapter: 26, title: "Chapter 26 — It's Mother!",                                 content: `` },
      { chapter: 27, title: 'Chapter 27 — In the Garden',                                content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     14. A TALE OF TWO CITIES — Charles Dickens (1859)
     45 chapters across 3 Books
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'tale-of-two-cities',
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Book 1, Ch.1 — The Period',                       content: `` },
      { chapter:  2, title: 'Book 1, Ch.2 — The Mail',                         content: `` },
      { chapter:  3, title: 'Book 1, Ch.3 — The Night Shadows',                content: `` },
      { chapter:  4, title: 'Book 1, Ch.4 — The Preparation',                  content: `` },
      { chapter:  5, title: 'Book 1, Ch.5 — The Wine-shop',                    content: `` },
      { chapter:  6, title: 'Book 1, Ch.6 — The Shoemaker',                    content: `` },
      { chapter:  7, title: 'Book 2, Ch.1 — Five Years Later',                 content: `` },
      { chapter:  8, title: 'Book 2, Ch.2 — A Sight',                          content: `` },
      { chapter:  9, title: 'Book 2, Ch.3 — A Disappointment',                 content: `` },
      { chapter: 10, title: 'Book 2, Ch.4 — Congratulatory',                   content: `` },
      { chapter: 11, title: 'Book 2, Ch.5 — The Jackal',                       content: `` },
      { chapter: 12, title: 'Book 2, Ch.6 — Hundreds of People',               content: `` },
      { chapter: 13, title: 'Book 2, Ch.7 — Monseigneur in Town',              content: `` },
      { chapter: 14, title: 'Book 2, Ch.8 — Monseigneur in the Country',       content: `` },
      { chapter: 15, title: "Book 2, Ch.9 — The Gorgon's Head",                content: `` },
      { chapter: 16, title: 'Book 2, Ch.10 — Two Promises',                    content: `` },
      { chapter: 17, title: 'Book 2, Ch.11 — A Companion Picture',             content: `` },
      { chapter: 18, title: 'Book 2, Ch.12 — The Fellow of Delicacy',          content: `` },
      { chapter: 19, title: 'Book 2, Ch.13 — The Fellow of No Delicacy',       content: `` },
      { chapter: 20, title: 'Book 2, Ch.14 — The Honest Tradesman',            content: `` },
      { chapter: 21, title: 'Book 2, Ch.15 — Knitting',                        content: `` },
      { chapter: 22, title: 'Book 2, Ch.16 — Still Knitting',                  content: `` },
      { chapter: 23, title: 'Book 2, Ch.17 — One Night',                       content: `` },
      { chapter: 24, title: 'Book 2, Ch.18 — Nine Days',                       content: `` },
      { chapter: 25, title: 'Book 2, Ch.19 — An Opinion',                      content: `` },
      { chapter: 26, title: 'Book 2, Ch.20 — A Plea',                          content: `` },
      { chapter: 27, title: 'Book 2, Ch.21 — Echoing Footsteps',               content: `` },
      { chapter: 28, title: 'Book 2, Ch.22 — The Sea Still Rises',             content: `` },
      { chapter: 29, title: 'Book 2, Ch.23 — Fire Rises',                      content: `` },
      { chapter: 30, title: 'Book 2, Ch.24 — Drawn to the Loadstone Rock',     content: `` },
      { chapter: 31, title: 'Book 3, Ch.1 — In Secret',                        content: `` },
      { chapter: 32, title: 'Book 3, Ch.2 — The Grindstone',                   content: `` },
      { chapter: 33, title: 'Book 3, Ch.3 — The Shadow',                       content: `` },
      { chapter: 34, title: 'Book 3, Ch.4 — Calm in Storm',                    content: `` },
      { chapter: 35, title: 'Book 3, Ch.5 — The Wood-sawyer',                  content: `` },
      { chapter: 36, title: 'Book 3, Ch.6 — Triumph',                          content: `` },
      { chapter: 37, title: 'Book 3, Ch.7 — A Knock at the Door',              content: `` },
      { chapter: 38, title: 'Book 3, Ch.8 — A Hand at Cards',                  content: `` },
      { chapter: 39, title: 'Book 3, Ch.9 — The Game Made',                    content: `` },
      { chapter: 40, title: 'Book 3, Ch.10 — The Substance of the Shadow',     content: `` },
      { chapter: 41, title: 'Book 3, Ch.11 — Dusk',                            content: `` },
      { chapter: 42, title: 'Book 3, Ch.12 — Darkness',                        content: `` },
      { chapter: 43, title: 'Book 3, Ch.13 — Fifty-two',                       content: `` },
      { chapter: 44, title: 'Book 3, Ch.14 — The Knitting Done',               content: `` },
      { chapter: 45, title: 'Book 3, Ch.15 — The Footsteps Die Out For Ever',  content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     15. OLIVER TWIST — Charles Dickens (1837)
     53 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'oliver-twist',
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    year: 1837,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1',  content: `` },
      { chapter:  2, title: 'Chapter 2',  content: `` },
      { chapter:  3, title: 'Chapter 3',  content: `` },
      { chapter:  4, title: 'Chapter 4',  content: `` },
      { chapter:  5, title: 'Chapter 5',  content: `` },
      { chapter:  6, title: 'Chapter 6',  content: `` },
      { chapter:  7, title: 'Chapter 7',  content: `` },
      { chapter:  8, title: 'Chapter 8',  content: `` },
      { chapter:  9, title: 'Chapter 9',  content: `` },
      { chapter: 10, title: 'Chapter 10', content: `` },
      { chapter: 11, title: 'Chapter 11', content: `` },
      { chapter: 12, title: 'Chapter 12', content: `` },
      { chapter: 13, title: 'Chapter 13', content: `` },
      { chapter: 14, title: 'Chapter 14', content: `` },
      { chapter: 15, title: 'Chapter 15', content: `` },
      { chapter: 16, title: 'Chapter 16', content: `` },
      { chapter: 17, title: 'Chapter 17', content: `` },
      { chapter: 18, title: 'Chapter 18', content: `` },
      { chapter: 19, title: 'Chapter 19', content: `` },
      { chapter: 20, title: 'Chapter 20', content: `` },
      { chapter: 21, title: 'Chapter 21', content: `` },
      { chapter: 22, title: 'Chapter 22', content: `` },
      { chapter: 23, title: 'Chapter 23', content: `` },
      { chapter: 24, title: 'Chapter 24', content: `` },
      { chapter: 25, title: 'Chapter 25', content: `` },
      { chapter: 26, title: 'Chapter 26', content: `` },
      { chapter: 27, title: 'Chapter 27', content: `` },
      { chapter: 28, title: 'Chapter 28', content: `` },
      { chapter: 29, title: 'Chapter 29', content: `` },
      { chapter: 30, title: 'Chapter 30', content: `` },
      { chapter: 31, title: 'Chapter 31', content: `` },
      { chapter: 32, title: 'Chapter 32', content: `` },
      { chapter: 33, title: 'Chapter 33', content: `` },
      { chapter: 34, title: 'Chapter 34', content: `` },
      { chapter: 35, title: 'Chapter 35', content: `` },
      { chapter: 36, title: 'Chapter 36', content: `` },
      { chapter: 37, title: 'Chapter 37', content: `` },
      { chapter: 38, title: 'Chapter 38', content: `` },
      { chapter: 39, title: 'Chapter 39', content: `` },
      { chapter: 40, title: 'Chapter 40', content: `` },
      { chapter: 41, title: 'Chapter 41', content: `` },
      { chapter: 42, title: 'Chapter 42', content: `` },
      { chapter: 43, title: 'Chapter 43', content: `` },
      { chapter: 44, title: 'Chapter 44', content: `` },
      { chapter: 45, title: 'Chapter 45', content: `` },
      { chapter: 46, title: 'Chapter 46', content: `` },
      { chapter: 47, title: 'Chapter 47', content: `` },
      { chapter: 48, title: 'Chapter 48', content: `` },
      { chapter: 49, title: 'Chapter 49', content: `` },
      { chapter: 50, title: 'Chapter 50', content: `` },
      { chapter: 51, title: 'Chapter 51', content: `` },
      { chapter: 52, title: 'Chapter 52', content: `` },
      { chapter: 53, title: 'Chapter 53', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     16. JANE EYRE — Charlotte Bronte (1847)
     38 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    year: 1847,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1',  content: `` },
      { chapter:  2, title: 'Chapter 2',  content: `` },
      { chapter:  3, title: 'Chapter 3',  content: `` },
      { chapter:  4, title: 'Chapter 4',  content: `` },
      { chapter:  5, title: 'Chapter 5',  content: `` },
      { chapter:  6, title: 'Chapter 6',  content: `` },
      { chapter:  7, title: 'Chapter 7',  content: `` },
      { chapter:  8, title: 'Chapter 8',  content: `` },
      { chapter:  9, title: 'Chapter 9',  content: `` },
      { chapter: 10, title: 'Chapter 10', content: `` },
      { chapter: 11, title: 'Chapter 11', content: `` },
      { chapter: 12, title: 'Chapter 12', content: `` },
      { chapter: 13, title: 'Chapter 13', content: `` },
      { chapter: 14, title: 'Chapter 14', content: `` },
      { chapter: 15, title: 'Chapter 15', content: `` },
      { chapter: 16, title: 'Chapter 16', content: `` },
      { chapter: 17, title: 'Chapter 17', content: `` },
      { chapter: 18, title: 'Chapter 18', content: `` },
      { chapter: 19, title: 'Chapter 19', content: `` },
      { chapter: 20, title: 'Chapter 20', content: `` },
      { chapter: 21, title: 'Chapter 21', content: `` },
      { chapter: 22, title: 'Chapter 22', content: `` },
      { chapter: 23, title: 'Chapter 23', content: `` },
      { chapter: 24, title: 'Chapter 24', content: `` },
      { chapter: 25, title: 'Chapter 25', content: `` },
      { chapter: 26, title: 'Chapter 26', content: `` },
      { chapter: 27, title: 'Chapter 27', content: `` },
      { chapter: 28, title: 'Chapter 28', content: `` },
      { chapter: 29, title: 'Chapter 29', content: `` },
      { chapter: 30, title: 'Chapter 30', content: `` },
      { chapter: 31, title: 'Chapter 31', content: `` },
      { chapter: 32, title: 'Chapter 32', content: `` },
      { chapter: 33, title: 'Chapter 33', content: `` },
      { chapter: 34, title: 'Chapter 34', content: `` },
      { chapter: 35, title: 'Chapter 35', content: `` },
      { chapter: 36, title: 'Chapter 36', content: `` },
      { chapter: 37, title: 'Chapter 37', content: `` },
      { chapter: 38, title: 'Chapter 38', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     17. WUTHERING HEIGHTS — Emily Bronte (1847)
     34 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'wuthering-heights',
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    year: 1847,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1',  content: `` },
      { chapter:  2, title: 'Chapter 2',  content: `` },
      { chapter:  3, title: 'Chapter 3',  content: `` },
      { chapter:  4, title: 'Chapter 4',  content: `` },
      { chapter:  5, title: 'Chapter 5',  content: `` },
      { chapter:  6, title: 'Chapter 6',  content: `` },
      { chapter:  7, title: 'Chapter 7',  content: `` },
      { chapter:  8, title: 'Chapter 8',  content: `` },
      { chapter:  9, title: 'Chapter 9',  content: `` },
      { chapter: 10, title: 'Chapter 10', content: `` },
      { chapter: 11, title: 'Chapter 11', content: `` },
      { chapter: 12, title: 'Chapter 12', content: `` },
      { chapter: 13, title: 'Chapter 13', content: `` },
      { chapter: 14, title: 'Chapter 14', content: `` },
      { chapter: 15, title: 'Chapter 15', content: `` },
      { chapter: 16, title: 'Chapter 16', content: `` },
      { chapter: 17, title: 'Chapter 17', content: `` },
      { chapter: 18, title: 'Chapter 18', content: `` },
      { chapter: 19, title: 'Chapter 19', content: `` },
      { chapter: 20, title: 'Chapter 20', content: `` },
      { chapter: 21, title: 'Chapter 21', content: `` },
      { chapter: 22, title: 'Chapter 22', content: `` },
      { chapter: 23, title: 'Chapter 23', content: `` },
      { chapter: 24, title: 'Chapter 24', content: `` },
      { chapter: 25, title: 'Chapter 25', content: `` },
      { chapter: 26, title: 'Chapter 26', content: `` },
      { chapter: 27, title: 'Chapter 27', content: `` },
      { chapter: 28, title: 'Chapter 28', content: `` },
      { chapter: 29, title: 'Chapter 29', content: `` },
      { chapter: 30, title: 'Chapter 30', content: `` },
      { chapter: 31, title: 'Chapter 31', content: `` },
      { chapter: 32, title: 'Chapter 32', content: `` },
      { chapter: 33, title: 'Chapter 33', content: `` },
      { chapter: 34, title: 'Chapter 34', content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     18. THE TIME MACHINE — H.G. Wells (1895)
     16 sections (12 chapters + prologue sections + epilogue)
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'time-machine',
    title: 'The Time Machine',
    author: 'H.G. Wells',
    year: 1895,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: 'Chapter 1 — Introduction',                   content: `` },
      { chapter:  2, title: 'Chapter 2 — The Machine',                    content: `` },
      { chapter:  3, title: 'Chapter 3 — The Time Traveller Returns',     content: `` },
      { chapter:  4, title: 'Chapter 4 — Time Travelling',                content: `` },
      { chapter:  5, title: 'Chapter 5 — In the Golden Age',              content: `` },
      { chapter:  6, title: 'Chapter 6 — The Sunset of Mankind',          content: `` },
      { chapter:  7, title: 'Chapter 7 — A Sudden Shock',                 content: `` },
      { chapter:  8, title: 'Chapter 8 — Explanation',                    content: `` },
      { chapter:  9, title: 'Chapter 9 — The Morlocks',                   content: `` },
      { chapter: 10, title: 'Chapter 10 — When Night Came',               content: `` },
      { chapter: 11, title: 'Chapter 11 — The Palace of Green Porcelain', content: `` },
      { chapter: 12, title: 'Chapter 12 — In the Darkness',               content: `` },
      { chapter: 13, title: 'Chapter 13 — The Trap of the White Sphinx',  content: `` },
      { chapter: 14, title: 'Chapter 14 — The Further Vision',            content: `` },
      { chapter: 15, title: "Chapter 15 — The Time Traveller's Return",   content: `` },
      { chapter: 16, title: 'Epilogue',                                    content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     19. THE INVISIBLE MAN — H.G. Wells (1897)
     28 chapters + epilogue
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'invisible-man',
    title: 'The Invisible Man',
    author: 'H.G. Wells',
    year: 1897,
    genre: 'novel',
    chapters: [
      { chapter:  1, title: "Chapter 1 — The Strange Man's Arrival",            content: `` },
      { chapter:  2, title: "Chapter 2 — Mr. Teddy Henfrey's First Impressions",content: `` },
      { chapter:  3, title: 'Chapter 3 — The Thousand and One Bottles',         content: `` },
      { chapter:  4, title: 'Chapter 4 — Mr. Cuss Interviews the Stranger',     content: `` },
      { chapter:  5, title: 'Chapter 5 — The Burglary at the Vicarage',         content: `` },
      { chapter:  6, title: 'Chapter 6 — The Furniture That Went Mad',          content: `` },
      { chapter:  7, title: 'Chapter 7 — The Unveiling of the Stranger',        content: `` },
      { chapter:  8, title: 'Chapter 8 — In Transit',                           content: `` },
      { chapter:  9, title: 'Chapter 9 — Mr. Thomas Marvel',                    content: `` },
      { chapter: 10, title: "Chapter 10 — Mr. Marvel's Visit to Iping",         content: `` },
      { chapter: 11, title: 'Chapter 11 — In the Coach and Horses',             content: `` },
      { chapter: 12, title: 'Chapter 12 — The Invisible Man Loses His Temper',  content: `` },
      { chapter: 13, title: "Chapter 13 — Mr. Marvel Discusses His Resignation",content: `` },
      { chapter: 14, title: 'Chapter 14 — At Port Stowe',                       content: `` },
      { chapter: 15, title: 'Chapter 15 — The Man Who Was Running',             content: `` },
      { chapter: 16, title: 'Chapter 16 — In the Jolly Cricketers',             content: `` },
      { chapter: 17, title: "Chapter 17 — Dr. Kemp's Visitor",                  content: `` },
      { chapter: 18, title: 'Chapter 18 — The Invisible Man Sleeps',            content: `` },
      { chapter: 19, title: 'Chapter 19 — Certain First Principles',            content: `` },
      { chapter: 20, title: 'Chapter 20 — At the House in Great Portland Street',content: `` },
      { chapter: 21, title: 'Chapter 21 — In Oxford Street',                    content: `` },
      { chapter: 22, title: 'Chapter 22 — In the Emporium',                     content: `` },
      { chapter: 23, title: 'Chapter 23 — In Drury Lane',                       content: `` },
      { chapter: 24, title: 'Chapter 24 — The Plan That Failed',                content: `` },
      { chapter: 25, title: 'Chapter 25 — The Hunting of the Invisible Man',    content: `` },
      { chapter: 26, title: 'Chapter 26 — The Wicksteed Murder',                content: `` },
      { chapter: 27, title: "Chapter 27 — The Siege of Kemp's House",           content: `` },
      { chapter: 28, title: 'Chapter 28 — The Hunter Hunted',                   content: `` },
      { chapter: 29, title: 'Epilogue',                                          content: `` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     20. THE CALL OF THE WILD — Jack London (1903)
     7 chapters
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'call-of-the-wild',
    title: 'The Call of the Wild',
    author: 'Jack London',
    year: 1903,
    genre: 'novel',
    chapters: [
      { chapter: 1, title: 'Chapter 1 — Into the Primitive',            content: `` },
      { chapter: 2, title: 'Chapter 2 — The Law of Club and Fang',      content: `` },
      { chapter: 3, title: 'Chapter 3 — The Dominant Primordial Beast', content: `` },
      { chapter: 4, title: 'Chapter 4 — Who Has Won to Mastership',     content: `` },
      { chapter: 5, title: 'Chapter 5 — The Toil of Trace and Trail',   content: `` },
      { chapter: 6, title: 'Chapter 6 — For the Love of a Man',         content: `` },
      { chapter: 7, title: 'Chapter 7 — The Sounding of the Call',      content: `` },
    ]
  },

];
