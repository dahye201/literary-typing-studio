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
      { chapter:  5, title: 'Chapter 5',  content: `Within a short walk of Longbourn lived a family with whom the Bennets were particularly intimate. Sir William Lucas had been formerly in trade in Meryton, where he had made a tolerable fortune, and risen to the honour of knighthood by an address to the king during his mayoralty.  

      The distinction had, perhaps, been felt too strongly. It had given him a disgust to his business and to his residence in a small market town; and, quitting them both, he had removed with his family to a house about a mile from Meryton, denominated from that period Lucas Lodge; where he could think with pleasure of his own importance, and, unshackled by business, occupy himself solely in being civil to all the world.  
      
      Lady Lucas was a very good kind of woman, not too clever to be a valuable neighbour to Mrs. Bennet. They had several children. The eldest of them, a sensible, intelligent young woman, about twenty-seven, was Elizabeth’s intimate friend. That the Miss Lucases and the Miss Bennets should meet to talk over a ball was absolutely necessary; and the morning after the assembly brought the former to Longbourn to hear and to communicate.  
      
      "You began the evening well, Charlotte," said Mrs. Bennet, with civil self-command, to Miss Lucas. "You were Mr. Bingley’s first choice."  
      
      "Yes; but he seemed to like his second better."  
      
      "Oh, you mean Jane, I suppose, because he danced with her twice. To be sure that did seem as if he admired her—indeed, I rather believe he did—I heard something about it—but I hardly know what—something about Mr. Robinson."  
      
      "Perhaps you mean what I overheard between him and Mr. Robinson: did not I mention it to you? Mr. Robinson’s asking him how he liked our Meryton assemblies, and whether he did not think there were a great many pretty women in the room, and which he thought the prettiest? and his answering immediately to the last question, 'Oh, the eldest Miss Bennet, beyond a doubt: there cannot be two opinions on that point.'"  
      
      "Upon my word! Well, that was very decided, indeed—that does seem as if—but, however, it may all come to nothing, you know."  
      
      "My overhearings were more to the purpose than yours, Eliza," said Charlotte. "Mr. Darcy is not so well worth listening to as his friend, is he? Poor Eliza! to be only just tolerable."  
      
      "I beg you will not put it into Lizzy’s head to be vexed by his ill-treatment, for he is such a disagreeable man that it would be quite a misfortune to be liked by him. Mrs. Long told me last night that he sat close to her for half an hour without once opening his lips."  
      
      "Are you quite sure, ma’am? Is not there a little mistake?" said Jane. "I certainly saw Mr. Darcy speaking to her."  
      
      "Ay, because she asked him at last how he liked Netherfield, and he could not help answering her; but she said he seemed very angry at being spoke to."
      
      "Miss Bingley told me," said Jane, "that he never speaks much unless among his intimate acquaintance. With them he is remarkably agreeable."  
      
      "I do not believe a word of it, my dear. If he had been so very agreeable, he would have talked to Mrs. Long. But I can guess how it was; everybody says that he is eat up with pride, and I dare say he had heard somehow that Mrs. Long does not keep a carriage, and had to come to the ball in a hack chaise."  
      
      "I do not mind his not talking to Mrs. Long," said Miss Lucas, "but I wish he had danced with Eliza."  
      
      "Another time, Lizzy," said her mother, "I would not dance with him, if I were you."  
      
      "I believe, ma’am, I may safely promise you never to dance with him."  
      
      "His pride," said Miss Lucas, "does not offend me so much as pride often does, because there is an excuse for it. One cannot wonder that so very fine a young man, with family, fortune, everything in his favour, should think highly of himself. If I may so express it, he has a right to be proud."  
      
      "That is very true," replied Elizabeth, "and I could easily forgive his pride, if he had not mortified mine."  
      
      "Pride," observed Mary, who piqued herself upon the solidity of her reflections, "is a very common failing, I believe. By all that I have ever read, I am convinced that it is very common indeed; that human nature is particularly prone to it, and that there are very few of us who do not cherish a feeling of self-complacency on the score of some quality or other, real or imaginary."  
      
      "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves; vanity to what we would have others think of us."  
      
      "If I were as rich as Mr. Darcy," cried a young Lucas, who came with his sisters, "I should not care how proud I was. I would keep a pack of foxhounds, and drink a bottle of wine every day."  
      
      "Then you would drink a great deal more than you ought," said Mrs. Bennet; "and if I were to see you at it, I should take away your bottle directly."  
      
      The boy protested that she should not; she continued to declare that she would; and the argument ended only with the visit.` },
      { chapter:  6, title: 'Chapter 6',  content: `The ladies of Longbourn soon waited on those of Netherfield. The visit was returned in due form. Miss Bennet’s pleasing manners grew on the good-will of Mrs. Hurst and Miss Bingley; and though the mother was found to be intolerable, and the younger sisters not worth speaking to, a wish of being better acquainted with them was expressed towards the two eldest.  

By Jane this attention was received with the greatest pleasure; but Elizabeth still saw superciliousness in their treatment of everybody, hardly excepting even her sister, and could not like them. Whenever they met, it was evident that Mr. Bingley admired Jane; and to Elizabeth it was equally evident that Jane was yielding to the preference she had begun to entertain for him from the first.  

"It may, perhaps, be pleasant," replied Charlotte, "to be able to impose on the public in such a case; but it is sometimes a disadvantage to be so very guarded. If a woman conceals her affection with the same skill from the object of it, she may lose the opportunity of fixing him. In nine cases out of ten, a woman had better show more affection than she feels. Bingley likes your sister undoubtedly; but he may never do more than like her, if she does not help him on."

"But she does help him on, as much as her nature will allow. If I can perceive her regard for him, he must be a simpleton indeed not to discover it too."

"Remember, Eliza, that he does not know Jane’s disposition as you do. When she is secure of him, there will be leisure for falling in love as much as she chooses."

"Your plan is a good one," replied Elizabeth, "where nothing is in question but the desire of being well married. But these are not Jane’s feelings; she is not acting by design. She has known him only a fortnight. This is not quite enough to make her understand his character."

"Happiness in marriage is entirely a matter of chance," said Charlotte. "If the dispositions of the parties are ever so well known to each other, or ever so similar beforehand, it does not advance their felicity in the least. It is better to know as little as possible of the defects of the person with whom you are to pass your life."  

"You make me laugh, Charlotte; but it is not sound. You know it is not sound, and that you would never act in this way yourself."  

Occupied in observing Mr. Bingley’s attention to her sister, Elizabeth was far from suspecting that she was herself becoming an object of some interest in the eyes of his friend. Mr. Darcy had at first scarcely allowed her to be pretty; but he soon began to find it was rendered uncommonly intelligent by the beautiful expression of her dark eyes.

"What does Mr. Darcy mean," said she to Charlotte, "by listening to my conversation with Colonel Forster?"

"That is a question which Mr. Darcy only can answer."

"But if he does it any more, I shall certainly let him know that I see what he is about. He has a very satirical eye, and if I do not begin by being impertinent myself, I shall soon grow afraid of him."

On his approaching them soon afterwards, Elizabeth turned to him and said, "Did not you think, Mr. Darcy, that I expressed myself uncommonly well just now, when I was teasing Colonel Forster to give us a ball at Meryton?"  

"With great energy; but it is a subject which always makes a lady energetic."  

"You are severe on us."  

"It will be her turn soon to be teased," said Miss Lucas. "I am going to open the instrument, Eliza, and you know what follows."  

After a song or two, Elizabeth was succeeded by her sister Mary, who had worked hard for knowledge and accomplishments, and was always impatient for display. Mary had neither genius nor taste; and though vanity had given her application, it had given her likewise a pedantic air and conceited manner.

Mr. Darcy stood near them in silent indignation at such a mode of passing the evening, to the exclusion of all conversation. Sir William Lucas, his neighbour, began: "What a charming amusement for young people this is, Mr. Darcy! There is nothing like dancing, after all."

"Certainly, sir; and it has the advantage also of being in vogue amongst the less polished societies of the world: every savage can dance."

"My dear Miss Eliza, why are not you dancing?" called out Sir William. "Mr. Darcy, you must allow me to present this young lady to you as a very desirable partner. You cannot refuse to dance, I am sure, when so much beauty is before you."

"Indeed, sir, I have not the least intention of dancing," said Elizabeth. Mr. Darcy, with grave propriety, requested to be allowed the honour of her hand, but in vain. Elizabeth was determined.

"I can guess the subject of your reverie," said Miss Bingley, accosting Mr. Darcy.

"I should imagine not."

"You are considering how insupportable it would be to pass many evenings in this manner, in such society. What would I give to hear your strictures on them!"

"Your conjecture is totally wrong, I assure you. My mind was more agreeably engaged. I have been meditating on the very great pleasure which a pair of fine eyes in the face of a pretty woman can bestow."

Miss Bingley immediately fixed her eyes on his face. Mr. Darcy replied, with great intrepidity, "Miss Elizabeth Bennet."

"Miss Elizabeth Bennet!" repeated Miss Bingley. "I am all astonishment. How long has she been such a favourite? and pray when am I to wish you joy?"

"That is exactly the question which I expected you to ask. A lady’s imagination is very rapid; it jumps from admiration to love, from love to matrimony, in a moment. I knew you would be wishing me joy."` },
      { chapter:  7, title: 'Chapter 7',  content: `Mr. Bennet’s property consisted almost entirely in an estate of two thousand a year, which, unfortunately for his daughters, was entailed, in default of heirs male, on a distant relation; and their mother’s fortune, though ample for her situation in life, could but ill supply the deficiency of his. Her father had been an attorney in Meryton, and had left her four thousand pounds.

      The village of Longbourn was only one mile from Meryton; a most convenient distance for the young ladies, who were usually tempted thither three or four times a week, to pay their duty to their aunt, and to a milliner’s shop just over the way. At present, they were well supplied with news by the recent arrival of a militia regiment in the neighbourhood.
      
      After listening one morning to their effusions on this subject, Mr. Bennet coolly observed, "From all that I can collect by your manner of talking, you must be two of the silliest girls in the country. I have suspected it some time, but I am now convinced."
      
      "I am astonished, my dear," said Mrs. Bennet, "that you should be so ready to think your own children silly. If I wished to think slightingly of anybody’s children, it should not be of my own, however."
      
      "My dear Mr. Bennet, you must not expect such girls to have the sense of their father and mother. When they get to our age, I dare say they will not think about officers any more than we do. I remember the time when I liked a red coat myself very well, and, indeed, so I do still at my heart."
      
      Mrs. Bennet was prevented replying by the entrance of the footman with a note for Miss Bennet from Netherfield. "Well, Jane, who is it from? What is it about? What does he say? Well, Jane, make haste and tell us; make haste, my love."
      
      "It is from Miss Bingley," said Jane, and then read it aloud. It was an invitation to dine with Miss Bingley and Mrs. Hurst, as the gentlemen were to dine with the officers.
      
      "Can I have the carriage?" said Jane.
      
      "No, my dear, you had better go on horseback, because it seems likely to rain; and then you must stay all night."
      
      "That would be a good scheme," said Elizabeth, "if you were sure that they would not offer to send her home."
      
      Jane was therefore obliged to go on horseback, and her mother attended her to the door with many cheerful prognostics of a bad day. Her hopes were answered; Jane had not been gone long before it rained hard. Breakfast was scarcely over the next morning when a note arrived for Elizabeth. Jane was unwell from getting wet through and was staying at Netherfield until she was better.
      
      "Well, my dear," said Mr. Bennet, "if your daughter should have a dangerous fit of illness, if she should die, it would be a comfort to know that it was all in pursuit of Mr. Bingley, and under your orders."
      
      Elizabeth, feeling really anxious, determined to go to her. As the carriage was not to be had, walking was her only alternative. "How can you be so silly," cried her mother, "as to think of such a thing, in all this dirt! You will not be fit to be seen when you get there."
      
      "I shall be very fit to see Jane, which is all I want."
      
      Elizabeth set off, crossing field after field at a quick pace, jumping over stiles and springing over puddles with impatient activity, and finding herself at last within view of the house, with weary ankles, dirty stockings, and a face glowing with the warmth of exercise.
      
      Her appearance created a great deal of surprise. That she should have walked three miles so early in the day in such dirty weather, and by herself, was almost incredible to Mrs. Hurst and Miss Bingley. She was received, however, very politely; and in Mr. Bingley’s manners there was something better than politeness, there was good-humour and kindness.
      
      Elizabeth was glad to be taken to Jane immediately. Jane had caught a violent cold and was very feverish. Elizabeth did not quit her room for a moment. When the clock struck three, Elizabeth felt that she must go, but Jane testified such concern at parting with her that Miss Bingley was obliged to invite Elizabeth to remain at Netherfield for the present. Elizabeth most thankfully consented.` },
      { chapter:  8, title: 'Chapter 8',  content: `At five o'clock the two ladies retired to dress, and at half-past six Elizabeth was summoned to dinner. To the civil inquiries which then poured in, she could not make a very favourable answer. Jane was by no means better. The sisters repeated how much they were grieved and how shocking it was to have a bad cold, but their indifference towards Jane, when not immediately before them, restored Elizabeth to her original dislike.

      Their brother, indeed, was the only one of the party whom she could regard with any complacency. His anxiety for Jane was evident, and his attentions to herself most pleasing. Miss Bingley was engrossed by Mr. Darcy, and as for Mr. Hurst, he was an indolent man who lived only to eat, drink, and play at cards.
      
      When dinner was over, she returned directly to Jane, and Miss Bingley began abusing her as soon as she was out of the room. Her manners were pronounced to be very bad indeed, a mixture of pride and impertinence. Mrs. Hurst added, "She has nothing to recommend her but being an excellent walker. I shall never forget her appearance this morning. She really looked almost wild."
      
      "She did indeed, Louisa," said Miss Bingley. "Her hair so untidy, so blowzy! And her petticoat, I hope you saw her petticoat, six inches deep in mud."
      
      "I thought Miss Elizabeth Bennet looked remarkably well when she came into the room this morning," said Bingley. "Her dirty petticoat quite escaped my notice."
      
      "You observed it, Mr. Darcy, I am sure," said Miss Bingley. "To walk three or four miles alone, above her ankles in dirt! It shows an abominable sort of conceited independence."
      
      "It shows an affection for her sister that is very pleasing," said Bingley.
      
      Later in the evening, Elizabeth joined the party in the drawing-room. She declined joining their game of cards, saying she would amuse herself with a book.
      
      "Miss Eliza Bennet," said Miss Bingley, "despises cards. She is a great reader, and has no pleasure in anything else."
      
      "I deserve neither such praise nor such censure," cried Elizabeth. "I am not a great reader, and I have pleasure in many things."
      
      The conversation turned to the idea of an accomplished woman. "I cannot boast of knowing more than half-a-dozen in the whole range of my acquaintance that are really accomplished," said Darcy.
      
      "No one can be really esteemed accomplished," added Miss Bingley, "who does not greatly surpass what is usually met with. A woman must have a thorough knowledge of music, singing, drawing, dancing, and the modern languages. She must possess a certain something in her air and manner."
      
      "All this she must possess," added Darcy, "and to all she must yet add something more substantial in the improvement of her mind by extensive reading."
      
      "I am no longer surprised at your knowing only six accomplished women," said Elizabeth. "I rather wonder now at your knowing any. I never saw such capacity, and taste, and application, and elegance, as you describe, united."
      
      Elizabeth soon afterwards left the room to return to her sister. "Eliza Bennet," said Miss Bingley, when the door was closed, "is one of those young ladies who seek to recommend themselves to the other sex by undervaluing their own."
      
      Elizabeth joined them again only to say that her sister was worse. Bingley was quite uncomfortable and urged that the apothecary be sent for immediately. His sisters declared that they were miserable, but they solaced their wretchedness by playing duets after supper.` },
      { chapter:  9, title: 'Chapter 9',  content: `Elizabeth passed the chief of the night in her sister’s room, and in the morning had the pleasure of being able to send a tolerable answer to the inquiries which she very early received from Mr. Bingley. In spite of this amendment, however, she requested to have a note sent to Longbourn, desiring her mother to visit Jane and form her own judgment of her situation. Mrs. Bennet, accompanied by her two youngest girls, reached Netherfield soon after the family breakfast.
      
      Had she found Jane in any apparent danger, Mrs. Bennet would have been very miserable; but being satisfied on seeing her that her illness was not alarming, she had no wish of her recovering immediately, as her restoration to health would probably remove her from Netherfield. She would not listen, therefore, to her daughter’s proposal of being carried home; neither did the apothecary, who arrived about the same time, think it at all advisable.
      
      After sitting a little while with Jane, the mother and three daughters all attended Miss Bingley into the breakfast parlour. Bingley met them with hopes that Mrs. Bennet had not found Miss Bennet worse than she expected.
      
      "Indeed I have, sir," was her answer. "She is a great deal too ill to be moved. Mr. Jones says we must not think of moving her. We must trespass a little longer on your kindness."
      
      "Removed!" cried Bingley. "It must not be thought of. My sister, I am sure, will not hear of her removal."
      
      "You may depend upon it, madam," said Miss Bingley, with cold civility, "that Miss Bennet shall receive every possible attention while she remains with us."
      
      Mrs. Bennet was profuse in her acknowledgments. "I am sure, if it was not for such good friends, I do not know what would become of her, for she is very ill indeed. You have a sweet room here, Mr. Bingley, and a charming prospect over that gravel walk. I do not know a place in the country that is equal to Netherfield."
      
      "Whatever I do is done in a hurry," replied he; "and therefore if I should resolve to quit Netherfield, I should probably be off in five minutes. At present, however, I consider myself as quite fixed here."
      
      "That is exactly what I should have supposed of you," said Elizabeth.
      
      "You begin to comprehend me, do you?" cried he, turning towards her.
      
      "Oh yes, I understand you perfectly."
      
      "I wish I might take this for a compliment; but to be so easily seen through, I am afraid, is pitiful."
      
      "That is as it happens. It does not necessarily follow that a deep, intricate character is more or less estimable than such a one as yours."
      
      "Lizzy," cried her mother, "remember where you are, and do not run on in the wild manner that you are suffered to do at home."
      
      "I did not know before," continued Bingley, immediately, "that you were a studier of character. It must be an amusing study."
      
      "Yes; but intricate characters are the most amusing. They have at least that advantage."
      
      "The country," said Darcy, "can in general supply but few subjects for such a study. In a country neighbourhood you move in a very confined and unvarying society."
      
      "But people themselves alter so much, that there is something new to be observed in them for ever."
      
      "Indeed, mamma, you are mistaken," said Elizabeth, blushing for her mother. "You quite mistook Mr. Darcy. He only meant that there was not such a variety of people to be met with in the country as in town, which you must acknowledge to be true."
      
      "Certainly, my dear, nobody said there were; but as to not meeting with many people in this neighbourhood, I believe there are few neighbourhoods larger. I know we dine with four and twenty families."
      
      Elizabeth, for the sake of saying something that might turn her mother’s thoughts, now asked her if Charlotte Lucas had been at Longbourn since her coming away.
      
      "Yes, she called yesterday with her father. What an agreeable man Sir William is, Mr. Bingley, is not he? So much the man of fashion! So genteel and so easy! He has always something to say to everybody."
      
      "I have been used to consider poetry as the food of love," said Darcy.
      
      "Of a fine, stout, healthy love it may. Everything nourishes what is strong already. But if it be only a slight, thin sort of inclination, I am convinced that one good sonnet will starve it entirely away."
      
      Darcy only smiled; and after a short silence Mrs. Bennet began repeating her thanks to Mr. Bingley for his kindness to Jane. Lydia, the youngest daughter, then abruptly reminded Mr. Bingley of his promise to give a ball at Netherfield.
      
      "I am perfectly ready, I assure you, to keep my engagement; and, when your sister is recovered, you shall, if you please, name the very day of the ball. But you would not wish to be dancing while she is ill?"
      
      Lydia declared herself satisfied. Mrs. Bennet and her daughters then departed, and Elizabeth returned instantly to Jane, leaving her own and her relations' behaviour to the remarks of the two ladies and Mr. Darcy.` },
      { chapter: 10, title: 'Chapter 10', content: `The day passed much as the day before had done. In the evening, Elizabeth joined the party in the drawing-room. Mr. Darcy was writing, and Miss Bingley, seated near him, was watching the progress of his letter, repeatedly calling off his attention by messages to his sister.
      
      "How delighted Miss Darcy will be to receive such a letter!" She remarked.
      
      He made no answer.
      
      "You write uncommonly fast."
      
      "You are mistaken. I write rather slowly."
      
      "Pray tell your sister that I long to see her."
      
      "I have already told her so once, by your desire."
      
      "I am afraid you do not like your pen. Let me mend it for you. I mend pens remarkably well."
      
      "Thank you, but I always mend my own."
      
      Miss Bingley continued to offer compliments on his handwriting and his style, but Darcy remained relatively indifferent. Her brother, Mr. Bingley, joked about Darcy’s careful word choices, while Miss Bingley teased Charles for his own careless way of writing.
      
      "Your humility, Mr. Bingley," said Elizabeth, "must disarm reproof."
      
      "Nothing is more deceitful," said Darcy, "than the appearance of humility. It is often only carelessness of opinion, and sometimes an indirect boast."
      
      The conversation evolved into a debate about the influence of friends and the merit of yielding to persuasion. Elizabeth argued that a regard for the requester often makes one yield readily, while Darcy maintained that yielding without conviction was no compliment to the understanding of either party.
      
      When Darcy finished his letter, he requested some music. Miss Bingley seated herself at the piano. While she played, Elizabeth noticed how frequently Mr. Darcy’s eyes were fixed on her. She could only imagine that she drew his notice because there was something about her more wrong and reprehensible, according to his ideas, than in any other person present.
      
      After some time, Mr. Darcy approached Elizabeth and said, "Do you not feel a great inclination, Miss Bennet, to seize such an opportunity of dancing a reel?"
      
      She smiled, but made no answer. He repeated the question, surprised at her silence.
      
      "Oh," said she, "I heard you before; but I could not immediately determine what to say in reply. You wanted me, I know, to say 'Yes,' that you might have the pleasure of despising my taste; but I always delight in overthrowing those kind of schemes. I have, therefore, made up my mind to tell you that I do not want to dance a reel at all; and now despise me if you dare."
      
      "Indeed I do not dare," he replied.
      
      Darcy had never been so bewitched by any woman as he was by her. He really believed that, were it not for the inferiority of her connections, he should be in some danger. Miss Bingley saw enough to be jealous and later tried to provoke Darcy by teasing him about a supposed marriage with Elizabeth.
      
      The next day, while walking in the shrubbery, Miss Bingley continued her sarcastic remarks about Elizabeth’s family. They were soon met by Mrs. Hurst and Elizabeth herself.
      
      "This walk is not wide enough for our party," Mr. Darcy said, feeling the rudeness of the others. "We had better go into the avenue."
      
      But Elizabeth, who had no desire to stay with them, laughingly answered, "No, no; stay where you are. You are charmingly grouped, and appear to uncommon advantage. The picturesque would be spoilt by admitting a fourth. Good-bye."
      
      She then ran gaily off, rejoicing in the hope of being at home again soon, as Jane was already recovering.` },
      { chapter: 11, title: 'Chapter 11', content: `When the ladies removed after dinner, Elizabeth ran up to her sister and, seeing her well guarded from cold, attended her into the drawing-room. Jane was welcomed by her two friends with many professions of pleasure. Elizabeth had never seen them so agreeable as they were during the hour before the gentlemen appeared.

      But when the gentlemen entered, Jane was no longer the first object. Miss Bingley’s eyes were instantly turned towards Darcy, while Bingley was full of joy and attention for Jane. He sat down by her and talked scarcely to anyone else. Elizabeth, at work in the opposite corner, saw it all with great delight.
      
      When tea was over, Mr. Hurst reminded his sister-in-law of the card-table, but in vain. She had obtained private intelligence that Mr. Darcy did not wish for cards. Darcy took up a book, and Miss Bingley did the same. Her attention was quite as much engaged in watching Mr. Darcy’s progress through his book as in reading her own. She could not win him, however, to any conversation.
      
      At length, quite exhausted by the attempt to be amused with her own book, she gave a great yawn and said, "How pleasant it is to spend an evening in this way! I declare, after all, there is no enjoyment like reading!" No one made any reply. She then yawned again, threw aside her book, and walked about the room. Her figure was elegant, and she walked well, but Darcy was still inflexibly studious.
      
      In the desperation of her feelings, she turned to Elizabeth and said, "Miss Eliza Bennet, let me persuade you to follow my example, and take a turn about the room. It is very refreshing after sitting so long in one attitude."
      
      Elizabeth agreed immediately. Mr. Darcy looked up. He unconsciously closed his book and was invited to join them, but he declined. He observed that he could imagine but two motives for their choosing to walk up and down together, and his joining them would interfere with either.
      
      "I have not the smallest objection to explaining them," said he. "You either choose this method of passing the evening because you are in each other’s confidence and have secret affairs to discuss, or because you are conscious that your figures appear to the greatest advantage in walking. If the first, I should be in your way; and if the second, I can admire you much better as I sit by the fire."
      
      "How shall we punish him for such a speech?" asked Miss Bingley.
      
      "Nothing so easy," said Elizabeth. "Tease him, laugh at him."
      
      "Mr. Darcy is not to be laughed at!" cried Elizabeth later. "That is an uncommon advantage."
      
      "I have faults enough," said Darcy, "but they are not, I hope, of understanding. My temper I dare not vouch for. It is, I believe, too little yielding. My good opinion once lost is lost for ever."
      
      "That is a failing, indeed!" cried Elizabeth. "Implacable resentment is a shade in a character. But you have chosen your fault well. I really cannot laugh at it."
      
      "There is, I believe, in every disposition a tendency to some particular evil, a natural defect, which not even the best education can overcome."
      
      "And your defect is a propensity to hate everybody," said Elizabeth.
      
      "And yours," he replied, with a smile, "is wilfully to misunderstand them."
      
      Miss Bingley, tired of a conversation in which she had no share, called for music. Darcy, after a few moments’ recollection, was not sorry for it. He began to feel the danger of paying Elizabeth too much attention.` },
      { chapter: 12, title: 'Chapter 12', content: `In consequence of an agreement between the sisters, Elizabeth wrote the next morning to her mother, to beg that the carriage might be sent for them in the course of the day. But Mrs. Bennet, who had calculated on her daughters remaining at Netherfield till the following Tuesday, sent them word that they could not possibly have the carriage before then. She added that if Mr. Bingley and his sister pressed them to stay longer, she could spare them very well.

      Against staying longer, however, Elizabeth was positively resolved. Fearful of being considered as intruding themselves needlessly long, she urged Jane to borrow Mr. Bingley’s carriage immediately. At length it was settled that their design of leaving should be mentioned and the request made.
      
      The communication excited many professions of concern. Enough was said of wishing them to stay at least till the following day to work on Jane, and until the morrow their going was deferred. Miss Bingley was then sorry that she had proposed the delay, for her jealousy and dislike of one sister much exceeded her affection for the other.
      
      The master of the house heard with real sorrow that they were to go so soon, and repeatedly tried to persuade Miss Bennet that she was not enough recovered; but Jane was firm where she felt herself to be right.
      
      To Mr. Darcy it was welcome intelligence: Elizabeth had been at Netherfield long enough. She attracted him more than he liked, and Miss Bingley was uncivil to her and more teasing than usual to himself. He wisely resolved to be particularly careful that no sign of admiration should now escape him. Steady to his purpose, he can scarcely speak ten words to her through the whole of Saturday.
      
      On Sunday, after morning service, the separation took place. Miss Bingley’s civility to Elizabeth increased rapidly at the last, as did her affection for Jane. After embracing Jane tenderly, she even shook hands with Elizabeth. Elizabeth took leave of the whole party in the liveliest spirits.
      
      They were not welcomed home very cordially by their mother. Mrs. Bennet wondered at their coming and was sure Jane would have caught cold again. But their father was really glad to see them, as he had felt their importance in the family circle. The evening conversation had lost much of its sense by the absence of Jane and Elizabeth.
      
      They found Mary, as usual, deep in the study of thorough bass and human nature. Catherine and Lydia had information for them of a different sort: much had been done in the regiment lately, several of the officers had dined with their uncle, and it had been hinted that Colonel Forster was going to be married.` },
      { chapter: 13, title: 'Chapter 13', content: `"I hope, my dear," said Mr. Bennet to his wife at breakfast, "that you have ordered a good dinner to-day, because I have reason to expect an addition to our family party."

      "Who do you mean, my dear? I know of nobody that is coming, unless Charlotte Lucas should happen to call in."
      
      "The person of whom I speak is a gentleman and a stranger."
      
      Mrs. Bennet’s eyes sparkled, thinking it was Mr. Bingley, but her husband explained that the guest was his cousin, Mr. Collins, who was the legal heir to the Longbourn estate. This news was met with bitterness by Mrs. Bennet, who hated the nature of the entail that would eventually turn her daughters out of their home.
      
      Mr. Bennet read a letter from Mr. Collins. In it, the cousin expressed his wish to heal the breach between their families. Having recently been ordained and received the patronage of Lady Catherine de Bourgh, he offered an "olive branch," mentioning his readiness to make amends to the daughters.
      
      "He seems to be a most conscientious and polite young man," said Mr. Bennet. "There is a mixture of servility and self-importance in his letter which promises well. I am impatient to see him."
      
      Elizabeth was struck by his pompous style and his extraordinary deference for Lady Catherine. Mary thought the letter well-expressed, while Catherine and Lydia found no interest in a man who did not wear a scarlet military coat.
      
      Mr. Collins arrived punctually at four o'clock. He was a tall, heavy-looking young man of twenty-five, with grave and formal manners. He soon complimented Mrs. Bennet on the beauty of her daughters and hinted that he came prepared to admire them, perhaps as a way of making amends through marriage.
      
      At dinner, Mr. Collins examined and praised the house and furniture, which secretly mortified Mrs. Bennet as she thought of him one day owning it all. He also highly admired the cooking and asked which daughter was responsible, but Mrs. Bennet sharply informed him that they were wealthy enough to keep a good cook and her daughters did nothing in the kitchen. Mr. Collins apologized for the mistake for the next quarter of an hour.` },
      { chapter: 14, title: 'Chapter 14', content: `"I hope, my dear," said Mr. Bennet to his wife, as they were at breakfast the next morning, "that you have ordered a good dinner to-day, because I have reason to expect an addition to our family party."

      "Who do you mean, my dear? I know of nobody that is coming, I am sure, unless Charlotte Lucas should happen to call in; and I hope my dinners are good enough for her. I do not believe she often sees such at home."
      
      "The person of whom I speak is a gentleman and a stranger."
      
      Mrs. Bennet’s eyes sparkled. "A gentleman and a stranger! It is Mr. Bingley, I am sure. Why, Jane, you never dropped a word of this, you sly thing! Well, I am sure I shall be extremely glad to see Mr. Bingley. But, good Lord! how unlucky! there is not a bit of fish to be got to-day. Lydia, my love, ring the bell. I must speak to Hill this moment."
      
      "It is not Mr. Bingley," said her husband; "it is a person whom I never saw in the whole course of my life."
      
      This roused a general astonishment; and he had the pleasure of being eagerly questioned by his wife and five daughters at once.
      
      After amusing himself some time with their curiosity, he thus explained: "About a month ago I received this letter, and about a fortnight ago I answered it; for I thought it a case of some delicacy, and requiring early attention. It is from my cousin, Mr. Collins, who, when I am dead, may turn you all out of this house as soon as he pleases."
      
      "Oh, my dear," cried his wife, "I cannot bear to hear that mentioned. Pray do not talk of that odious man. I do think it is the hardest thing in the world, that your estate should be entailed away from your own children; and I am sure, if I had been you, I should have tried long ago to do something or other about it."
      
      Jane and Elizabeth attempted to explain to her the nature of an entail. They had often attempted it before: but it was a subject on which Mrs. Bennet was beyond the reach of reason; and she continued to rail bitterly against the cruelty of settling an estate away from a family of five daughters, in favour of a man whom nobody cared anything about.
      
      "It certainly is a most iniquitous affair," said Mr. Bennet; "and nothing can clear Mr. Collins from the guilt of inheriting Longbourn. But if you will listen to his letter, you may, perhaps, be a little softened by his manner of expressing himself."
      
      "No, that I am sure I shall not: and I think it was very impertinent of him to write to you at all, and very hypocritical. I hate such false friends. Why could not he keep on quarrelling with you, as his father did before him?"
      
      "Why, indeed, he does seem to have had some filial scruples on that head, as you will hear."
      
      "Hunsford, near Westerham, Kent, 15th October.
      
      Dear Sir,
      
      The disagreement subsisting between yourself and my late honoured father always gave me much uneasiness; and, since I have had the misfortune to lose him, I have frequently wished to heal the breach: but, for some time, I was kept back by my own doubts, fearing lest it might seem disrespectful to his memory for me to be on good terms with anyone with whom it had always pleased him to be at variance. My mind, however, is now made up on the subject; for, having received ordination at Easter, I have been so fortunate as to be distinguished by the patronage of the Right Honourable Lady Catherine de Bourgh, widow of Sir Lewis de Bourgh, whose bounty and beneficence has preferred me to the valuable rectory of this parish, where it shall be my earnest endeavour to demean myself with grateful respect towards her Ladyship, and be ever ready to perform those rites and ceremonies which are instituted by the Church of England.
      
      As a clergyman, moreover, I feel it my duty to promote and establish the blessing of peace in all families within the reach of my influence; and on these grounds I flatter myself that my present overtures of good-will are highly commendable, and that the circumstance of my being next in the entail of Longbourn estate will be kindly overlooked on your side, and not lead you to reject the offered olive branch. I cannot be otherwise than concerned at being the means of injuring your amiable daughters, and beg leave to apologize for it, as well as to assure you of my readiness to make them every possible amends; but of this hereafter. If you should have no objection to receive me into your house, I propose myself the satisfaction of waiting on you and your family, Monday, November 18th, by four o'clock, and shall probably trespass on your hospitality till the Saturday se’nnight following, which I can do without any inconvenience, as Lady Catherine is far from objecting to my occasional absence on a Sunday, provided that some other clergyman is engaged to do the duty of the day. I remain, dear sir, with respectful compliments to your lady and daughters, your well-wisher and friend,
      
      WILLIAM COLLINS."
      
      "At four o’clock, therefore, we may expect this peace-making gentleman," said Mr. Bennet, as he folded up the letter. "He seems to be a most conscientious and polite young man, upon my word; and, I doubt not, will prove a valuable acquaintance, especially if Lady Catherine should be so indulgent as to let him come to us again."
      
      "There is some sense in what he says about the girls, however; and, if he is disposed to make them any amends, I shall not be the person to discourage him."
      
      "Though it is difficult," said Jane, "to guess in what way he can mean to make us the atonement he thinks our due, the wish is certainly to his credit."
      
      Elizabeth was chiefly struck with his extraordinary deference for Lady Catherine, and his kind intention of christening, marrying, and burying his parishioners whenever it were required.
      
      "He must be an oddity, I think," said she. "I cannot make him out. There is something very pompous in his style. And what can he mean by apologizing for being next in the entail? We cannot suppose he would help it, if he could. Can he be a sensible man, sir?"
      
      "No, my dear; I think not. I have great hopes of finding him quite the reverse. There is a mixture of servility and self-importance in his letter which promises well. I am impatient to see him."
      
      "In point of composition," said Mary, "his letter does not seem defective. The idea of the olive branch perhaps is not wholly new, yet I think it is well expressed."
      
      To Catherine and Lydia neither the letter nor its writer were in any degree interesting. It was next to impossible that their cousin should come in a scarlet coat, and it was now some weeks since they had received pleasure from the society of a man in any other colour. As for their mother, Mr. Collins’s letter had done away much of her ill-will, and she was preparing to see him with a degree of composure which astonished her husband and daughters.
      
      Mr. Collins was punctual to his time, and was received with great politeness by the whole family. Mr. Bennet indeed said little; but the ladies were ready enough to talk, and Mr. Collins seemed neither in need of encouragement, nor inclined to be silent himself. He was a tall, heavy-looking young man of five-and-twenty. His air was grave and stately, and his manners were very formal. He had not been long seated before he complimented Mrs. Bennet on having so fine a family of daughters, said he had heard much of their beauty, but that, in this instance, fame had fallen short of the truth; and added, that he did not doubt her seeing them all in due time well disposed of in marriage. This gallantry was not much to the taste of some of his hearers; but Mrs. Bennet, who quarrelled with no compliments, answered most readily,
      
      "You are very kind, sir, I am sure; and I wish with all my heart it may prove so; for else they will be destitute enough. Things are settled so oddly."
      
      "You allude, perhaps, to the entail of this estate."
      
      "Ah, sir, I do indeed. It is a grievous affair to my poor girls, you must confess. Not that I mean to find fault with you, for such things, I know, are all chance in this world. There is no knowing how estates will go when once they come to be entailed."
      
      "I am very sensible, madam, of the hardship to my fair cousins, and could say much on the subject, but that I am cautious of appearing forward and precipitate. But I can assure the young ladies that I come prepared to admire them. At present I will not say more, but, perhaps, when we are better acquainted"
      
      He was interrupted by a summons to dinner; and the girls smiled on each other. They were not the only objects of Mr. Collins’s admiration. The hall, the dining-room, and all its furniture, were examined and praised; and his commendation of everything would have touched Mrs. Bennet’s heart, but for the mortifying supposition of his viewing it all as his own future property. The dinner, too, in its turn, was highly admired; and he begged to know to which of his fair cousins the excellence of its cookery was owing. But here he was set right by Mrs. Bennet, who assured him, with some asperity, that they were very well able to keep a good cook, and that her daughters had nothing to do in the kitchen. He begged pardon for having displeased her. In a softened tone she declared herself not at all offended; but he continued to apologize for about a quarter of an hour.` },
      { chapter: 15, title: 'Chapter 15', content: `During dinner, Mr. Bennet scarcely spoke at all; but when the servants were withdrawn, he thought it time to have some conversation with his guest, and therefore started a subject in which he expected him to shine, by observing that he seemed very fortunate in his patroness. Lady Catherine de Bourgh’s attention to his wishes, and consideration for his comfort, appeared very remarkable. Mr. Bennet could not have chosen better. Mr. Collins was eloquent in her praise. The subject elevated him to more than usual solemnity of manner; and with a most important aspect he protested that he had never in his life witnessed such behaviour in a person of rank, such affability and condescension, as he had himself experienced from Lady Catherine.

      She had been graciously pleased to approve of both the discourses which he had already had the honour of preaching before her. She had also asked him twice to dine at Rosings, and had sent for him only the Saturday before, to make up her pool of quadrille in the evening. Lady Catherine was reckoned proud by many people, he knew, but he had never seen anything but affability in her. She had always spoken to him as she would to any other gentleman; she made not the smallest objection to his joining in the society of the neighbourhood, nor to his leaving his parish occasionally for a week or two to visit his relations. She had even condescended to advise him to marry as soon as he could, provided he chose with discretion; and had once paid him a visit in his humble parsonage, where she had perfectly approved all the alterations he had been making, and had even vouchsafed to suggest some herself, some shelves in the closets upstairs.
      
      "That is all very proper and civil, I am sure," said Mrs. Bennet, "and I dare say she is a very agreeable woman. It is a pity that great ladies in general are not more like her. Does she live near you, sir?"
      
      "The garden in which stands my humble abode is separated only by a lane from Rosings Park, her Ladyship’s residence."
      
      "I think you said she was a widow, sir? has she any family?"
      
      "She has one only daughter, the heiress of Rosings, and of very extensive property."
      
      "Ah," cried Mrs. Bennet, shaking her head, "then she is better off than many girls. And what sort of young lady is she? Is she handsome?"
      
      "She is a most charming young lady, indeed. Lady Catherine herself says that, in point of true beauty, Miss de Bourgh is far superior to the handsomest of her sex; because there is that in her features which marks the young woman of distinguished birth. She is unfortunately of a sickly constitution, which has prevented her making that progress in many accomplishments which she could not otherwise have failed of, as I am informed by the lady who superintended her education, and who still resides with them. But she is perfectly amiable, and often condescends to drive by my humble abode in her little phaeton and ponies."
      
      "Has she been presented? I do not remember her name among the ladies at court."
      
      "Her indifferent state of health unhappily prevents her being in town; and by that means, as I told Lady Catherine myself one day, has deprived the British Court of its brightest ornament. Her Ladyship seemed pleased with the idea; and you may imagine that I am happy on every occasion to offer those little delicate compliments which are always acceptable to ladies. I have more than once observed to Lady Catherine, that her charming daughter seemed born to be a duchess; and that the most elevated rank, instead of giving her consequence, would be adorned by her. These are the kind of little things which please her Ladyship, and it is a sort of attention which I conceive myself peculiarly bound to pay."
      
      "You judge very properly," said Mr. Bennet; "and it is happy for you that you possess the talent of flattering with delicacy. May I ask whether these pleasing attentions proceed from the impulse of the moment, or are the result of previous study?"
      
      "They arise chiefly from what is passing at the time; and though I sometimes amuse myself with suggesting and arranging such little elegant compliments as may be adapted to ordinary occasions, I always wish to give them as unstudied an air as possible."
      
      Mr. Bennet’s expectations were fully answered. His cousin was as absurd as he had hoped; and he listened to him with the keenest enjoyment, maintaining at the same time the most resolute composure of countenance, and, except in an occasional glance at Elizabeth, requiring no partner in his pleasure.
      
      By tea-time, however, the dose had been enough, and Mr. Bennet was glad to take his guest into the drawing-room again, and when tea was over, glad to invite him to read aloud to the ladies. Mr. Collins readily assented, and a book was produced; but on beholding it (for everything announced it to be from a circulating library) he started back, and, begging pardon, protested that he never read novels. Kitty stared at him, and Lydia exclaimed. Other books were produced, and after some deliberation he chose "Fordyce’s Sermons." Lydia gaped as he opened the volume; and before he had, with very monotonous solemnity, read three pages, she interrupted him with,
      
      "Do you know, mamma, that my uncle Philips talks of turning away Richard? and if he does, Colonel Forster will hire him. My aunt told me so herself on Saturday. I shall walk to Meryton to-morrow to hear more about it, and to ask when Mr. Denny comes back from town."
      
      Lydia was bid by her two eldest sisters to hold her tongue; but Mr. Collins, much offended, laid aside his book, and said,
      
      "I have often observed how little young ladies are interested by books of a serious stamp, though written solely for their benefit. It amazes me, I confess; for certainly there can be nothing so advantageous to them as instruction. But I will no longer importune my young cousin."
      
      Then, turning to Mr. Bennet, he offered himself as his antagonist at backgammon. Mr. Bennet accepted the challenge, observing that he acted very wisely in leaving the girls to their own trifling amusements. Mrs. Bennet and her daughters apologized most civilly for Lydia’s interruption, and promised that it should not occur again, if he would resume his book; but Mr. Collins, after assuring them that he bore his young cousin no ill-will, and should never resent her behaviour as any affront, seated himself at another table with Mr. Bennet, and prepared for backgammon.` },
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
      { chapter:  1, title: 'Chapter 1 — Down the Rabbit-Hole',             content: `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”

      So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.
      
      There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.
      
      In another moment down went Alice after it, never once considering how in the world she was to get out again.
      
      The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.
      
      Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.
      
      “Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)
      
      Down, down, down. Would the fall never come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)
      
      Presently she began again. “I wonder if I shall fall right through the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there was no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy curtseying as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”
      
      Down, down, down. There was nothing else to do, so Alice soon began talking again. “Dinah’ll miss me very much to-night, I should think!” (Dinah was the cat.) “I hope they’ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I’m afraid, but you might catch a bat, and that’s very like a mouse, you know. But do cats eat bats, I wonder?” And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, “Do cats eat bats? Do cats eat bats?” and sometimes, “Do bats eat cats?” for, you see, as she couldn’t answer either question, it didn’t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, “Now, Dinah, tell me the truth: did you ever eat a bat?” when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.
      
      Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, “Oh my ears and whiskers, how late it’s getting!” She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.
      
      There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.
      
      Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice’s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!
      
      Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway; “and even if my head would go through,” thought poor Alice, “it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only knew how to begin.” For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.
      
      There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, (“which certainly was not here before,” said Alice,) and round the neck of the bottle was a paper label, with the words “DRINK ME,” beautifully printed on it in large letters.
      
      It was all very well to say “Drink me,” but the wise little Alice was not going to do that in a hurry. “No, I’ll look first,” she said, “and see whether it’s marked ‘poison’ or not”; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they would not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger very deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked “poison,” it is almost certain to disagree with you, sooner or later.
      
      However, this bottle was not marked “poison,” so Alice ventured to taste it, and finding it very nice, (it had, in fact, a sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon finished it off.
      
      “What a curious feeling!” said Alice; “I must be shutting up like a telescope.”
      
      And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; “for it might end, you know,” said Alice to herself, “in my going out altogether, like a candle. I wonder what I should be like then?” And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.
      
      After a while, finding that nothing more happened, she decided on going into the garden at once; but, alas for poor Alice! when she got to the door, she found she had forgotten the little golden key, and when she went back to the table for it, she found she could not possibly reach it: she could see it quite plainly through the glass, and she tried her best to climb up one of the legs of the table, but it was too slippery; and when she had tired herself out with trying, the poor little thing sat down and cried.
      
      “Come, there’s no use in crying like that!” said Alice to herself, rather sharply; “I advise you to leave off this minute!” She generally gave herself very good advice, (though she very seldom followed it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a game of croquet she was playing against herself, for this curious child was very fond of pretending to be two people. “But it’s no use now,” thought poor Alice, “to pretend to be two people! Why, there’s hardly enough of me left to make one respectable person!”
      
      Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words “EAT ME” were beautifully marked in currants. “Well, I’ll eat it,” said Alice, “and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I’ll get into the garden, and I don’t care which happens!”
      
      She ate a little bit, and said anxiously to herself, “Which way? Which way?”, holding her hand on the top of her head to feel which way it was growing, and she was quite surprised to find that she remained the same size: to be sure, this generally happens when one eats cake, but Alice had got so much into the way of expecting nothing but out-of-the-way things to happen, that it seemed quite dull and stupid for life to go on in the common way.
      
      So she set to work, and very soon finished off the cake.` },
      { chapter:  2, title: 'Chapter 2 — The Pool of Tears',                content: `“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); “now I’m opening out like the largest telescope that ever was! Good-bye, feet!” (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). “Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I’m sure I shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;—but I must be kind to them,” thought Alice, “or perhaps they won’t walk the way I want to go! Let me see: I’ll give them a new pair of boots every Christmas.”

      And she went on planning to herself how she would manage it. “They must go by the carrier,” she thought; “and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!
      
      Alice’s Right Foot, Esq., Hearthrug, near the Fender, (with Alice’s love).
      
      Oh dear, what nonsense I’m talking!”
      
      Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.
      
      Poor Alice! It was as much as she could do, lying down on one side, to look through into the garden with one eye; but to get through was more hopeless than ever: she sat down and began to cry again.
      
      “You ought to be ashamed of yourself,” said Alice, “a great girl like you,” (she might well say this), “to go on crying in this way! Stop this moment, I tell you!” But she went on all the same, shedding gallons of tears, until there was a large pool all round her, about four inches deep and reaching half down the hall.
      
      After a time she heard a little pattering of feet in the distance, and she hastily dried her eyes to see what was coming. It was the White Rabbit returning, splendidly dressed, with a pair of white kid gloves in one hand and a large fan in the other: he came trotting along in a great hurry, muttering to himself as he came, “Oh! the Duchess, the Duchess! Oh! won’t she be savage if I’ve kept her waiting!” Alice felt so desperate that she was ready to ask help of any one; so, when the Rabbit came near her, she began, in a low, timid voice, “If you please, sir—” The Rabbit started violently, dropped the white kid gloves and the fan, and skurried away into the darkness as hard as he could go.
      
      Alice took up the fan and gloves, and, as the hall was very hot, she kept fanning herself all the time she went on talking: “Dear, dear! How queer everything is to-day! And yesterday things went on just as usual. I wonder if I’ve been changed in the night? Let me think: was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I’m not the same, the next question is, Who in the world am I? Ah, that’s the great puzzle!” And she began thinking over all the children she knew that were of the same age as herself, to see if she could have been changed for any of them.
      
      “I’m sure I’m not Ada,” she said, “for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all; and I’m sure I can’t be Mabel, for I know all sorts of things, and she, oh! she knows such a very little! Besides, she’s she, and I’m I, and—oh dear, how puzzling it all is! I’ll try if I know all the things I used to know. Let me see: four times five is twelve, and four times six is thirteen, and four times seven is—oh dear! I shall never get to twenty at that rate! However, the Multiplication Table doesn’t signify: let’s try Geography. London is the capital of Paris, and Paris is the capital of Rome, and Rome—no, that’s all wrong, I’m certain! I must have been changed for Mabel! I’ll try and say ‘How doth the little—’” and she crossed her hands on her lap as if she were saying lessons, and began to repeat it, but her voice sounded hoarse and strange, and the words did not come the same as they used to do:—
      
      “How doth the little crocodile
      Improve his shining tail,
      And pour the waters of the Nile
      On every golden scale!
      
      “How cheerfully he seems to grin,
      How neatly spread his claws,
      And welcome little fishes in
      With gently smiling jaws!”
      
      “I’m sure those are not the right words,” said poor Alice, and her eyes filled with tears again as she went on, “I must be Mabel after all, and I shall have to go and live in that poky little house, and have next to no toys to play with, and oh! ever so many lessons to learn! No, I’ve made up my mind about it; if I’m Mabel, I’ll stay down here! It’ll be no use their putting their heads down and saying ‘Come up again, dear!’ I shall only look up and say ‘Who am I then? Tell me that first, and then, if I like being that person, I’ll come up: if not, I’ll stay down here till I’m somebody else’—but, oh dear!” cried Alice, with a sudden burst of tears, “I do wish they would put their heads down! I am so very tired of being all alone here!”
      
      As she said this she looked down at her hands, and was surprised to see that she had put on one of the Rabbit’s little white kid gloves while she was talking. “How can I have done that?” she thought. “I must be growing small again.” She got up and went to the table to measure herself by it, and found that, as nearly as she could guess, she was now about two feet high, and was going on shrinking rapidly: she soon found out that the cause of this was the fan she was holding, and she dropped it hastily, just in time to avoid shrinking away altogether.
      
      “That was a narrow escape!” said Alice, a good deal frightened at the sudden change, but very glad to find herself still in existence; “and now for the garden!” and she ran with all speed back to the little door: but, alas! the little door was shut again, and the little golden key was lying on the glass table as before, “and things are worse than ever,” thought the poor child, “for I never was so small as this before, never! And I declare it’s too bad, that it is!”
      
      As she said these words her foot slipped, and in another moment, splash! she was up to her chin in salt water. Her first idea was that she had somehow fallen into the sea, “and in that case I can go back by railway,” she said to herself. (Alice had been to the seaside once in her life, and had come to the general conclusion, that wherever you go to on the English coast you find a number of bathing machines in the sea, some children digging in the sand with wooden spades, then a row of lodging houses, and behind them a railway station.) However, she soon made out that she was in the pool of tears which she had wept when she was nine feet high.
      
      “I wish I hadn’t cried so much!” said Alice, as she swam about, trying to find her way out. “I shall be punished for it now, I suppose, by being drowned in my own tears! That will be a queer thing, to be sure! However, everything is queer to-day.”
      
      Just then she heard something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.
      
      “Would it be of any use, now,” thought Alice, “to speak to this mouse? Everything is so out-of-the-way down here, that I should think very likely it can talk: at any rate, there’s no harm in trying.” So she began: “O Mouse, do you know the way out of this pool? I am very tired of swimming about here, O Mouse!” (Alice thought this must be the right way of speaking to a mouse: she had never done such a thing before, but she remembered having seen in her brother’s Latin Grammar, “A mouse—of a mouse—to a mouse—a mouse—O mouse!”) The Mouse looked at her rather inquisitively, and seemed to her to wink with one of its little eyes, but it said nothing.
      
      “Perhaps it doesn’t understand English,” thought Alice; “I daresay it’s a French mouse, come over with William the Conqueror.” (For, with all her knowledge of history, Alice had no very clear notion how long ago anything had happened.) So she began again: “Où est ma chatte?” which was the first sentence in her French lesson-book. The Mouse gave a sudden leap out of the water, and seemed to quiver all over with fright. “Oh, I beg your pardon!” cried Alice hastily, afraid that she had hurt the poor animal’s feelings. “I quite forgot you didn’t like cats.”
      
      “Not like cats!” cried the Mouse, in a shrill, passionate voice. “Would you like cats if you were me?”
      
      “Well, perhaps not,” said Alice in a soothing tone: “don’t be angry about it. And yet I wish I could show you our cat Dinah: I think you’d take a fancy to cats if you could only see her. She is such a dear quiet thing,” Alice went on, half to herself, as she swam lazily about in the pool, “and she sits purring so nicely by the fire, licking her paws and washing her face—and she is such a nice soft thing to nurse—and she’s such a capital one for catching mice—oh, I beg your pardon!” cried Alice again, for this time the Mouse was bristling all over, and she felt certain it must be really offended. “We won’t talk about her any more if you’d rather not.”
      
      “We indeed!” cried the Mouse, who was trembling down to the end of his tail. “As if I would talk on such a subject! Our family always hated cats: nasty, low, vulgar things! Don’t let me hear the name again!”
      
      “I won’t indeed!” said Alice, in a great hurry to change the subject of conversation. “Are you—are you fond—of—of dogs?” The Mouse did not answer, so Alice went on eagerly: “There is such a nice little dog near our house I should like to show you! A little bright-eyed terrier, you know, with oh, such long curly brown hair! And it’ll fetch things when you throw them, and it’ll sit up and beg for its dinner, and all sorts of things—I can’t remember half of them—and it belongs to a farmer, you know, and he says it’s so useful, it’s worth a hundred pounds! He says it kills all the rats and—oh dear!” cried Alice in a sorrowful tone, “I’m afraid I’ve offended it again!” For the Mouse was swimming away from her as hard as it could go, and making quite a commotion in the pool as it went.
      
      So she called softly after it, “Mouse dear! Do come back again, and we won’t talk about cats or dogs either, if you don’t like them!” When the Mouse heard this, it turned round and swam slowly back to her: its face was quite pale (with passion, Alice thought), and it said in a low trembling voice, “Let us get to the shore, and then I’ll tell you my history, and you’ll understand why it is I hate cats and dogs.”
      
      It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures. Alice led the way, and the whole party swam to the shore.` },
      { chapter:  3, title: 'Chapter 3 — A Caucus-Race and a Long Tale',    content: `They were indeed a queer-looking party that assembled on the bank—the birds with draggled feathers, the animals with their fur clinging close to them, and all dripping wet, cross, and uncomfortable.

      The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them, as if she had known them all her life. Indeed, she had quite a long argument with the Lory, who at last turned sulky, and would only say, “I am older than you, and must know better;” and this Alice would not allow without knowing how old it was, and, as the Lory positively refused to tell its age, there was no more to be said.
      
      At last the Mouse, who seemed to be a person of authority among them, called out, “Sit down, all of you, and listen to me! I’ll soon make you dry enough!” They all sat down at once, in a large ring, with the Mouse in the middle. Alice kept her eyes anxiously fixed on it, for she felt sure she would catch a bad cold if she did not get dry very soon.
      
      “Ahem!” said the Mouse with an important air, “are you all ready? This is the driest thing I know. Silence all round, if you please! ‘William the Conqueror, whose cause was favoured by the pope, was soon submitted to by the English, who wanted leaders, and had been of late much accustomed to usurpation and conquest. Edwin and Morcar, the earls of Mercia and Northumbria—’”
      
      “Ugh!” said the Lory, with a shiver.
      
      “I beg your pardon!” said the Mouse, frowning, but very politely: “Did you speak?”
      
      “Not I!” said the Lory hastily.
      
      “I thought you did,” said the Mouse. “—I proceed. ‘Edwin and Morcar, the earls of Mercia and Northumbria, declared for him: and even Stigand, the patriotic archbishop of Canterbury, found it advisable—’”
      
      “Found what?” said the Duck.
      
      “Found it,” the Mouse replied rather crossly: “of course you know what ‘it’ means.”
      
      “I know what ‘it’ means well enough, when I find a thing,” said the Duck: “it’s generally a frog or a worm. The question is, what did the archbishop find?”
      
      The Mouse did not notice this question, but hurriedly went on, “‘—found it advisable to go with Edgar Atheling to meet William and offer him the crown. William’s conduct at first was moderate. But the insolence of his Normans—’ How are you getting on now, my dear?” it continued, turning to Alice as it spoke.
      
      “As wet as ever,” said Alice in a melancholy tone: “it doesn’t seem to dry me at all.”
      
      “In that case,” said the Dodo solemnly, rising to its feet, “I move that the meeting adjourn, for the immediate adoption of more energetic remedies—”
      
      “Speak English!” said the Eaglet. “I don’t know the meaning of half those long words, and, what’s more, I don’t believe you do either!” And the Eaglet bent down its head to hide a smile: some of the other birds tittered audibly.
      
      “What I was going to say,” said the Dodo in an offended tone, “was, that the best thing to get us dry would be a Caucus-race.”
      
      “What is a Caucus-race?” said Alice; not that she wanted much to know, but the Dodo had paused as if it thought that somebody ought to speak, and no one else seemed inclined to say anything.
      
      “Why,” said the Dodo, “the best way to explain it is to do it.” (And, as you might like to try the thing yourself, some winter day, I will tell you how the Dodo managed it.)
      
      First it marked out a race-course, in a sort of circle, (“the exact shape doesn’t matter,” it said,) and then all the party were placed along the course, here and there. There was no “One, two, three, and away,” but they began running when they liked, and left off when they liked, so that it was not easy to know when the race was over. However, when they had been running half an hour or so, and were quite dry again, the Dodo suddenly called out “The race is over!” and they all crowded round it, panting, and asking, “But who has won?”
      
      This question the Dodo could not answer without a great deal of thought, and it sat for a long time with one finger pressed upon its forehead (the position in which you usually see Shakespeare, in the pictures of him), while the rest waited in silence. At last the Dodo said, “Everybody has won, and all must have prizes.”
      
      “But who is to give the prizes?” quite a chorus of voices asked.
      
      “Why, she, of course,” said the Dodo, pointing to Alice with one finger; and the whole party at once crowded round her, calling out in a confused way, “Prizes! Prizes!”
      
      Alice had no idea what to do, and in despair she put her hand in her pocket, and pulled out a box of comfits, (luckily the salt water had not got into it), and handed them round as prizes. There was exactly one a-piece, all round.
      
      “But she must have a prize herself, you know,” said the Mouse.
      
      “Of course,” the Dodo replied very gravely. “What else have you got in your pocket?” he went on, turning to Alice.
      
      “Only a thimble,” said Alice sadly.
      
      “Hand it over here,” said the Dodo.
      
      Then they all crowded round her once more, while the Dodo solemnly presented the thimble, saying “We beg your acceptance of this elegant thimble;” and, when it had finished this short speech, they all cheered.
      
      Alice thought the whole thing very absurd, but they all looked so grave that she did not dare to laugh; and, as she could not think of anything to say, she simply bowed, and took the thimble, looking as solemn as she could.
      
      The next thing was to eat the comfits: this caused some noise and confusion, as the large birds complained that they could not taste theirs, and the small ones choked and had to be patted on the back. However, it was over at last, and they sat down again in a ring, and begged the Mouse to tell them something more.
      
      “You promised to tell me your history, you know,” said Alice, “and why it is you hate—C and D,” she added in a whisper, half afraid that it would be offended again.
      
      “Mine is a long and a sad tale!” said the Mouse, turning to Alice, and sighing.
      
      “It is a long tail, certainly,” said Alice, looking down with wonder at the Mouse’s tail; “but why do you call it sad?” And she kept on puzzling about it while the Mouse was speaking, so that her idea of the tale was something like this:—
      
      “Fury said to a mouse, That he met in the house, ‘Let us both go to law: I will prosecute you.—Come, I’ll take no denial; We must have a trial: For really this morning I’ve nothing to do.’ Said the mouse to the cur, ‘Such a trial, dear sir, With no jury or judge, would be wasting our breath.’ ‘I’ll be judge, I’ll be jury,’ Said cunning old Fury: ‘I’ll try the whole cause, and condemn you to death.’”
      
      “You are not attending!” said the Mouse to Alice severely. “What are you thinking of?”
      
      “I beg your pardon,” said Alice very humbly: “you had got to the fifth bend, I think?”
      
      “I had not!” cried the Mouse, sharply and very angrily.
      
      “A knot!” said Alice, always ready to make herself useful, and looking anxiously about her. “Oh, do let me help to undo it!”
      
      “I shall do nothing of the sort,” said the Mouse, getting up and walking away. “You insult me by talking such nonsense!”
      
      “I didn’t mean it!” pleaded poor Alice. “But you’re so easily offended, you know!”
      
      The Mouse only growled in reply.
      
      “Please come back and finish your story!” Alice called after it; and the others all joined in chorus, “Yes, please do!” but the Mouse only shook its head impatiently, and walked a little quicker.
      
      “What a pity it wouldn’t stay!” sighed the Lory, as soon as it was quite out of sight; and an old Crab took the opportunity of saying to her daughter “Ah, my dear! Let this be a lesson to you never to lose your temper!” “Hold your tongue, Ma!” said the young Crab, a little snappishly. “You’re enough to try the patience of an oyster!”
      
      “I wish I had our Dinah here, I know I do!” said Alice aloud, addressing nobody in particular. “She’d soon fetch it back!”
      
      “And who is Dinah, if I might venture to ask the question?” said the Lory.
      
      Alice replied eagerly, for she was always ready to talk about her pet: “Dinah’s our cat. And she’s such a capital one for catching mice you can’t think! And oh, I wish you could see her after the birds! Why, she’ll eat a little bird as soon as look at it!”
      
      This speech caused a remarkable sensation among the party. Some of the birds hurried off at once: one old Magpie began wrapping itself up very carefully, remarking, “I really must be getting home; the night-air doesn’t suit my throat!” and a Canary called out in a trembling voice to its children, “Come away, my dears! It’s high time you were all in bed!” On various pretexts they all moved off, and Alice was soon left alone.
      
      “I wish I hadn’t mentioned Dinah!” she said to herself in a melancholy tone. “Nobody seems to like her, down here, and I’m sure she’s the best cat in the world! Oh, my dear Dinah! I wonder if I shall ever see you any more!” And here poor Alice began to cry again, for she felt very lonely and low-spirited. In a little while, however, she again heard a little pattering of footsteps in the distance, and she looked up eagerly, half hoping that the Mouse had changed his mind, and was coming back to finish his story.` },
      { chapter:  4, title: 'Chapter 4 — The Rabbit Sends in a Little Bill',content: `It was the White Rabbit, trotting slowly back again, and looking anxiously about as it went, as if it had lost something; and she heard it muttering to itself “The Duchess! The Duchess! Oh my dear paws! Oh my fur and whiskers! She’ll get me executed, as sure as ferrets are ferrets! Where can I have dropped them, I wonder?” Alice guessed in a moment that it was looking for the fan and the pair of white kid gloves, and she very good-naturedly began hunting about for them, but they were nowhere to be seen—everything seemed to have changed since her swim in the pool, and the great hall, with the glass table and the little door, had vanished completely.

      Very soon the Rabbit noticed Alice, as she went hunting about, and called out to her in an angry tone, “Why, Mary Ann, what are you doing out here? Run home this moment, and fetch me a pair of gloves and a fan! Quick, now!” And Alice was so much frightened that she ran off at once in the direction it pointed to, without trying to explain the mistake it had made.
      
      “He took me for his housemaid,” she said to herself as she ran. “How surprised he’ll be when he finds out who I am! But I’d better take him his fan and gloves—that is, if I can find them.” As she said this, she came upon a neat little house, on the door of which was a bright brass plate with the name “W. RABBIT,” engraved upon it. She went in without knocking, and hurried upstairs, in great fear lest she should meet the real Mary Ann, and be turned out of the house before she had found the fan and gloves.
      
      “How queer it seems,” Alice said to herself, “to be going messages for a rabbit! I suppose Dinah’ll be sending me on messages next!” And she began fancying the sort of thing that would happen: “‘Miss Alice! Come here directly, and get ready for your walk!’ ‘Coming in a minute, nurse! But I’ve got to see that the mouse doesn’t get out.’ Only I don’t think,” Alice went on, “that they’d let Dinah stop in the house if it began ordering people about like that!”
      
      By this time she had found her way into a tidy little room with a table in the window, and on it (as she had hoped) a fan and two or three pairs of tiny white kid gloves: she took up the fan and a pair of the gloves, and was just going to leave the room, when her eye fell upon a little bottle that stood near the looking-glass. There was no label this time with the words “DRINK ME,” but nevertheless she uncorked it and put it to her lips. “I know something interesting is sure to happen,” she said to herself, “whenever I eat or drink anything; so I’ll just see what this bottle does. I do hope it’ll make me grow large again, for really I’m quite tired of being such a tiny little thing!”
      
      It did so indeed, and much sooner than she had expected: before she had drunk half the bottle, she found her head pressing against the ceiling, and had to stoop to save her neck from being broken. She hastily put down the bottle, saying to herself “That’s quite enough—I hope I shan’t grow any more—As it is, I can’t get out at the door—I do wish I hadn’t drunk quite so much!”
      
      Alas! it was too late to wish that! She went on growing, and growing, and very soon had to kneel down on the floor: in another minute there was not even room for this, and she tried the effect of lying down with one elbow against the door, and the other arm curled round her head. Still she went on growing, and, as a last resource, she put one arm out of the window, and one foot up the chimney, and said to herself “Now I can do no more, whatever happens. What will become of me?”
      
      Luckily for Alice, the little magic bottle had now had its full effect, and she grew no larger: still it was very uncomfortable, and, as there seemed to be no sort of chance of her ever getting out of the room again, no wonder she felt unhappy.
      
      “It was much pleasanter at home,” thought poor Alice, “when one wasn’t always growing larger and smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t gone down that rabbit-hole—and yet—and yet—it’s rather curious, you know, this sort of life! I do wonder what can have happened to me! When I used to read fairy-tales, I fancied that kind of thing never happened, and now here I am in the middle of one! There ought to be a book written about me, that there ought! And when I grow up, I’ll write one—but I’m grown up now,” she added in a sorrowful tone; “at least there’s no room to grow up any more here.”
      
      “But then,” thought Alice, “shall I never get any older than I am now? That’ll be a comfort, one way—never to be an old woman—but then—always to have lessons to learn! Oh, I shouldn’t like that!”
      
      “Oh, you foolish Alice!” she answered herself. “How can you learn lessons in here? Why, there’s hardly room for you, and no room at all for any lesson-books!”
      
      And so she went on, taking first one side and then the other, and making quite a conversation of it altogether; but after a few minutes she heard a voice outside, and stopped to listen.
      
      “Mary Ann! Mary Ann!” said the voice. “Fetch me my gloves this moment!” Then came a little pattering of feet on the stairs. Alice knew it was the Rabbit coming to look for her, and she trembled till she shook the house, quite forgetting that she was now about a thousand times as large as the Rabbit, and had no reason to be afraid of it.
      
      Presently the Rabbit came up to the door, and tried to open it; but, as the door opened inwards, and Alice’s elbow was pressed hard against it, that attempt proved a failure. Alice heard it say to itself “Then I’ll go round and get in at the window.”
      
      “That you won’t!” thought Alice, and, after waiting till she fancied she heard the Rabbit just under the window, she suddenly spread out her hand, and made a snatch in the air. She did not get hold of anything, but she heard a little shriek and a fall, and a crash of broken glass, from which she concluded that it was just possible it had fallen into a cucumber-frame, or something of the sort.
      
      Next came an angry voice—the Rabbit’s—“Pat! Pat! Where are you?” And then a voice she had never heard before, “Sure then I’m here! Digging for apples, yer honour!”
      
      “Digging for apples, indeed!” said the Rabbit angrily. “Here! Come and help me out of this!” (Sounds of more broken glass.)
      
      “Now tell me, Pat, what’s that in the window?”
      
      “Sure, it’s an arm, yer honour!” (He pronounced it “arrum.”)
      
      “An arm, you goose! Who ever saw one that size? Why, it fills the whole window!”
      
      “Sure, it does, yer honour: but it’s an arm for all that.”
      
      “Well, it’s got no business there, at any rate: go and take it away!”
      
      There was a long silence after this, and Alice could only hear whispers now and then; such as, “Sure, I don’t like it, yer honour, at all, at all!” “Do as I tell you, you coward!” and at last she spread out her hand again, and made another snatch in the air. This time there were two little shrieks, and more sounds of broken glass. “What a number of cucumber-frames there must be!” thought Alice. “I wonder what they’ll do next! As for pulling me out of the window, I only wish they could! I’m sure I don’t want to stay in here any longer!”
      
      She waited for some time without hearing anything more: at last came a rumbling of little cartwheels, and the sound of a good many voices all talking together: she made out the words: “Where’s the other ladder?—Why, I hadn’t to bring but one; Bill’s got the other—Bill! fetch it here, lad!—Here, put ’em up at this corner—No, tie ’em together first—they don’t reach half high enough yet—Oh! they’ll do well enough; don’t be particular—Here, Bill! catch hold of this rope—Will the roof bear?—Mind that loose slate—Oh, it’s coming down! Heads below!” (a loud crash)—“Now, who did that?—It was Bill, I fancy—Who’s to go down the chimney?—Nay, I shan’t! You do it!—That I won’t, then!—Bill’s to go down—Here, Bill! the master says you’re to go down the chimney!”
      
      “Oh! So Bill’s got to come down the chimney, has he?” said Alice to herself. “Shy, they seem to put everything upon Bill! I wouldn’t be in Bill’s place for a good deal: this fireplace is narrow, to be sure; but I think I can kick a little!”
      
      She drew her foot as far down the chimney as she could, and waited till she heard a little animal (she couldn’t guess of what sort it was) scratching and scrambling about in the chimney close above her: then, saying to herself “This is Bill,” she gave one sharp kick, and waited to see what would happen next.
      
      The first thing she heard was a general chorus of “There goes Bill!” then the Rabbit’s voice along—“Catch him, you by the hedge!” then silence, and then another confusion of voices—“Hold up his head—Brandy now—Don’t choke him—How was it, old fellow? What happened to you? Tell us all about it!”
      
      Last came a little feeble, squeaking voice, (“That’s Bill,” thought Alice,) “Well, I hardly know—No more, thank ye; I’m better now—but I’m a deal too flustered to tell you—all I know is, something comes at me like a Jack-in-the-box, and up I goes like a sky-rocket!”
      
      “So you did, old fellow!” said the others.
      
      “We must burn the house down!” said the Rabbit’s voice; and Alice called out as loud as she could, “If you do, I’ll set Dinah at you!”
      
      There was a dead silence instantly, and Alice thought to herself, “I wonder what they will do next! If they had any sense, they’d take the roof off.” After a minute or two, they began moving about again, and Alice heard the Rabbit say, “A barrowful will do, to begin with.”
      
      “A barrowful of what?” thought Alice; but she had not long to doubt, for the next moment a shower of little pebbles came rattling in at the window, and some of them hit her in the face. “I’ll put a stop to this,” she said to herself, and shouted out, “You’d better not do that again!” which produced another dead silence.
      
      Alice noticed with some surprise that the pebbles were all turning into little cakes as they lay on the floor, and a bright idea came into her head. “If I eat one of these cakes,” she thought, “it’s sure to make some change in my size; and as it can’t possibly make me larger, it must make me smaller, I suppose.”
      
      So she swallowed one of the cakes, and was delighted to find that she began shrinking directly. As soon as she was small enough to get through the door, she ran out of the house, and found quite a crowd of little animals and birds waiting outside. The poor little Lizard, Bill, was in the middle, being held up by two guinea-pigs, who were giving it something out of a bottle. They all made a rush at Alice the moment she appeared; but she ran off as hard as she could, and soon found herself safe in a thick wood.
      
      “The first thing I’ve got to do,” said Alice to herself, as she wandered about in the wood, “is to grow to my right size again; and the second thing is to find my way into that lovely garden. I think that will be the best plan.”
      
      It sounded an excellent plan, no doubt, and very neatly and simply arranged; the only difficulty was, that she had not the smallest idea how to set about it; and while she was peering about anxiously among the trees, a little sharp bark just over her head made her look up in a great hurry.
      
      An enormous puppy was looking down at her with large round eyes, and feebly stretching out one paw, trying to touch her. “Poor little thing!” said Alice, in a coaxing tone, and she tried hard to whistle to it; but she was terribly frightened all the time at the thought that it might be hungry, in which case it would be very likely to eat her up in spite of all her coaxing.
      
      Hardly knowing what she did, she picked up a little bit of stick, and held it out to the puppy; whereupon the puppy jumped into the air off all its feet at once, with a yelp of delight, and rushed at the stick, and made believe to worry it; then Alice dodged behind a great thistle, to keep herself from being run over; and the moment she appeared on the other side, the puppy made another rush at the stick, and tumbled head over heels in its hurry to get hold of it; then Alice, thinking it was very like having a game of play with a cart-horse, and expecting every moment to be trampled under its feet, ran round the thistle again; then the puppy began a series of short charges at the stick, running a very little way forwards each time and a long way back, and barking hoarsely all the while, till at last it sat down a good way off, panting, with its tongue hanging out of its mouth, and its great eyes half shut.
      
      This seemed to Alice a good opportunity for making her escape; so she set off at once, and ran till she was quite tired and out of breath, and till the puppy’s bark sounded quite faint in the distance.
      
      “And yet what a dear little puppy it was!” said Alice, as she leant against a buttercup to rest herself, and fanned herself with one of the leaves: “I should have liked teaching it tricks very much, if—if I’d only been the right size to do it! Oh dear! I’d nearly forgotten that I’ve got to grow up again! Let me see—how is it to be managed? I suppose I ought to eat or drink something or other; but the great question is, what?”
      
      The great question certainly was, what? Alice looked all round her at the flowers and the blades of grass, but she did not see anything that looked like the right thing to eat or drink under the circumstances. There was a large mushroom growing near her, about the same height as herself; and when she had looked under it, and on both sides of it, and behind it, it occurred to her that she might as well look and see what was on the top of it.
      
      She stretched herself up on tiptoe, and peeped over the edge of the mushroom, and her eyes immediately met those of a large blue caterpillar, that was sitting on the top with its arms folded, quietly smoking a long hookah, and taking not the smallest notice of her or of anything else.` },
      { chapter:  5, title: 'Chapter 5 — Advice from a Caterpillar',        content: `The Caterpillar and Alice looked at each other for some time in silence: at last the Caterpillar took the hookah out of its mouth, and addressed her in a languid, sleepy voice.

      “Who are you?” said the Caterpillar.
      
      This was not an encouraging opening for a conversation. Alice replied, rather shyly, “I—I hardly know, sir, just at present—at least I know who I was when I got up this morning, but I think I must have been changed several times since then.”
      
      “What do you mean by that?” said the Caterpillar sternly. “Explain yourself!”
      
      “I can’t explain myself, I’m afraid, sir,” said Alice, “because I’m not myself, you see.”
      
      “I don’t see,” said the Caterpillar.
      
      “I’m afraid I can’t put it more clearly,” Alice replied very politely, “for I can’t understand it myself to begin with; and being so many different sizes in a day is very confusing.”
      
      “It isn’t,” said the Caterpillar.
      
      “Well, perhaps you haven’t found it so yet,” said Alice; “but when you have to turn into a chrysalis—you will some day, you know—and then after that into a butterfly, I should think you’ll feel it a little queer, won’t you?”
      
      “Not a bit,” said the Caterpillar.
      
      “Well, perhaps your feelings may be different,” said Alice; “all I know is, it would feel very queer to me.”
      
      “You!” said the Caterpillar contemptuously. “Who are you?”
      
      Which brought them back again to the beginning of the conversation. Alice felt a little irritated at the Caterpillar’s making such very short remarks, and she drew herself up and said, very gravely, “I think, you ought to tell me who you are, first.”
      
      “Why?” said the Caterpillar.
      
      Here was another puzzling question; and as Alice could not think of any good reason, and as the Caterpillar seemed to be in a very unpleasant state of mind, she turned away.
      
      “Come back!” the Caterpillar called after her. “I’ve something important to say!”
      
      This sounded promising, certainly: Alice turned and came back again.
      
      “Keep your temper,” said the Caterpillar.
      
      “Is that all?” said Alice, swallowing down her anger as well as she could.
      
      “No,” said the Caterpillar.
      
      Alice thought she might as well wait, as she had nothing else to do, and perhaps after all it might tell her something worth hearing. For some minutes it puffed away without speaking, but at last it unfolded its arms, took the hookah out of its mouth again, and said, “So you think you’re changed, do you?”
      
      “I’m afraid I am, sir,” said Alice; “I can’t remember things as I used—and I don’t keep the same size for ten minutes together!”
      
      “Can’t remember what things?” said the Caterpillar.
      
      “Well, I’ve tried to say “How doth the little busy bee,” but it all came different!” Alice replied in a very melancholy voice.
      
      “Repeat, ‘You are old, Father William,’” said the Caterpillar.
      
      Alice folded her hands, and began:—
      
      “You are old, Father William,” the young man said,
      “And your hair has become very white;
      And yet you incessantly stand on your head—
      Do you think, at your age, it is right?”
      
      “In my youth,” Father William replied to his son,
      “I feared it might injure the brain;
      But, now that I’m perfectly sure I have none,
      Why, I do it again and again.”
      
      “You are old,” said the youth, “as I mentioned before,
      And have grown most uncommonly fat;
      Yet you turned a back-somersault in at the door—
      Pray, what is the reason of that?”
      
      “In my youth,” said the sage, as he shook his grey locks,
      “I kept all my limbs very supple
      By the use of this ointment—one shilling the box—
      Allow me to sell you a couple?”
      
      “You are old,” said the youth, “and your jaws are too weak
      For anything tougher than suet;
      Yet you finished the goose, with the bones and the beak—
      Pray, how did you manage to do it?”
      
      “In my youth,” said his father, “I took to the law,
      And argued each case with my wife;
      And the muscular strength, which it gave to my jaw,
      Has lasted the rest of my life.”
      
      “You are old,” said the youth, “one would hardly suppose
      That your eye was as steady as ever;
      Yet you balanced an eel on the end of your nose—
      What made you so awfully clever?”
      
      “I have answered three questions, and that is enough,”
      Said his father; “don’t give yourself airs!
      Do you think I can listen all day to such stuff?
      Be off, or I’ll kick you down stairs!”
      
      “That is not said right,” said the Caterpillar.
      
      “Not quite right, I’m afraid,” said Alice, timidly; “some of the words have got altered.”
      
      “It is wrong from beginning to end,” said the Caterpillar decidedly, and there was silence for some minutes.
      
      The Caterpillar was the first to speak.
      
      “What size do you want to be?” it asked.
      
      “Oh, I’m not particular as to size,” Alice hastily replied; “only one doesn’t like changing so often, you know.”
      
      “I don’t know,” said the Caterpillar.
      
      Alice said nothing: she had never been so much contradicted in her life before, and she felt that she was losing her temper.
      
      “Are you content now?” said the Caterpillar.
      
      “Well, I should like to be a little larger, sir, if you wouldn’t mind,” said Alice: “three inches is such a wretched height to be.”
      
      “It is a very good height indeed!” said the Caterpillar angrily, rearing itself upright as it spoke (it was exactly three inches high).
      
      “But I’m not used to it!” pleaded poor Alice in a piteous tone. And she thought of herself, “I wish the creatures wouldn’t be so easily offended!”
      
      “You’ll get used to it in time,” said the Caterpillar; and it put the hookah into its mouth and began smoking again.
      
      This time Alice waited patiently until it chose to speak again. In a minute or two the Caterpillar took the hookah out of its mouth and yawned once or twice, and shook itself. Then it got down off the mushroom, and crawled away in the grass, merely remarking as it went, “One side will make you grow taller, and the other side will make you grow shorter.”
      
      “One side of what? The other side of what?” thought Alice to herself.
      
      “Of the mushroom,” said the Caterpillar, just as if she had asked it aloud; and in another moment it was out of sight.
      
      Alice remained looking thoughtfully at the mushroom for a minute, trying to make out which were the two sides of it; and as it was perfectly round, she found this a very difficult question. However, at last she stretched her arms round it as far as they would go, and broke off a bit of the edge with each hand.
      
      “And now which is which?” she said to herself, and nibbled a little of the right-hand bit to try the effect: the next moment she felt a violent blow underneath her chin: it had struck her foot!
      
      She was a good deal frightened by this very sudden change, but she felt that there was no time to be lost, as she was shrinking rapidly; so she set to work at once to eat some of the other bit. Her chin was pressed so closely against her foot, that there was hardly room to open her mouth; but she did it at last, and managed to swallow a morsel of the left-hand bit.
      
      “Come, my head’s free at last!” said Alice in a tone of delight, which changed into alarm in another moment, when she found that her shoulders were nowhere to be found: all she could see, when she looked down, was an immense length of neck, which seemed to rise like a stalk out of a sea of green leaves that lay far below her.
      
      “What can all that green stuff be?” said Alice. “And where have my shoulders got to? And oh, my poor hands, how is it I can’t see you?” She was moving them about as she spoke, but no result seemed to follow, except a little shaking among the distant green leaves.
      
      As there seemed to be no chance of getting her hands up to her head, she tried to get her head down to them, and was delighted to find that her neck would bend about easily in any direction, like a serpent. She had just succeeded in curving it down into a graceful zigzag, and was going to dive in among the leaves, which she found to be nothing but the tops of the trees under which she had been wandering, when a sharp hiss made her draw back in a hurry: a large pigeon had flown into her face, and was beating her violently with its wings.
      
      “Serpent!” screamed the Pigeon.
      
      “I’m not a serpent!” said Alice indignantly. “Let me alone!”
      
      “Serpent, I say again!” repeated the Pigeon, but in a more subdued tone, and added with a kind of sob, “I’ve tried every way, and nothing seems to suit them!”
      
      “I haven’t the least idea what you’re talking about,” said Alice.
      
      “I’ve tried the roots of trees, and I’ve tried banks, and I’ve tried hedges,” the Pigeon went on, without attending to her; “but those serpents! There’s no pleasing them!”
      
      Alice was more and more puzzled, but she thought there was no use in saying anything more till the Pigeon had finished.
      
      “As if it wasn’t trouble enough hatching the eggs,” said the Pigeon; “but I must be on the look-out for serpents night and day! Why, I haven’t had a wink of sleep these three weeks!”
      
      “I’m very sorry you’ve been annoyed,” said Alice, who was beginning to see its meaning.
      
      “And just as I’d taken the highest tree in the wood,” continued the Pigeon, raising its voice to a shriek, “and just as I was thinking I should be free of them at last, they must needs come wriggling down from the sky! Ugh, Serpent!”
      
      “But I’m not a serpent, I tell you!” said Alice. “I’m a—I’m a—”
      
      “Well! What are you?” said the Pigeon. “I can see you’re trying to invent something!”
      
      “I—I’m a little girl,” said Alice, rather doubtfully, as she remembered the number of changes she had gone through that day.
      
      “A likely story indeed!” said the Pigeon in a tone of the deepest contempt. “I’ve seen a good many little girls in my time, but never one with such a neck as that! No, no! You’re a serpent; and there’s no use denying it. I suppose you’ll be telling me next that you never tasted an egg!”
      
      “I have tasted eggs, certainly,” said Alice, who was a very truthful child; “but little girls eat eggs quite as much as serpents do, you know.”
      
      “I don’t believe it,” said the Pigeon; “but if they do, why then they’re a kind of serpent, that’s all I can say.”
      
      This was such a new idea to Alice, that she was quite silent for a minute or two, which gave the Pigeon the opportunity of adding, “You’re looking for eggs, I know that well enough; and what does it matter to me whether you’re a little girl or a serpent?”
      
      “It matters a good deal to me,” said Alice hastily; “but I’m not looking for eggs, as it happens; and if I was, I shouldn’t want yours: I don’t like them raw.”
      
      “Well, be off, then!” said the Pigeon in a sulky tone, as it settled down again into its nest. Alice crouched down among the trees as well as she could, for her neck kept getting entangled among the branches, and every now and then she had to stop and untwist it. After a while she remembered that she still held the pieces of mushroom in her hands, and she set to work very carefully, nibbling first at one and then at the other, and growing sometimes taller and sometimes shorter, until she had succeeded in bringing herself down to her usual height.
      
      It was so long since she had been anything near the right size, that it felt quite strange at first; but she got used to it in a few minutes, and began talking to herself, as usual. “Come, there’s half my plan done now! How puzzling all these changes are! I’m never sure what I’m going to be, from one minute to another! However, I’ve got back to my right size: the next thing is, to get into that beautiful garden—how is that to be done, I wonder?” As she said this, she came suddenly upon an open place, with a little house in it about four feet high. “Whoever lives there,” thought Alice, “it’ll never do to come upon them this size: why, I should frighten them out of their wits!” So she began nibbling at the right-hand bit again, and did not venture to go near the house till she had brought herself down to nine inches high.` },
      { chapter:  6, title: 'Chapter 6 — Pig and Pepper',                   content: `For a minute or two she stood looking at the house, and wondering what to do next, when suddenly a footman in livery came running out of the wood—(she considered him to be a footman because he was in livery: otherwise, judging by his face only, she would have called him a fish)—and rapped loudly at the door with his knuckles. It was opened by another footman in livery, with a round face, and large eyes like a frog; and both footmen, Alice noticed, had powdered hair that curled all over their heads. She felt very curious to know what it was all about, and crept a little way out of the wood to listen.
      
      The Fish-Footman began by producing from under his arm a great letter, nearly as large as himself, and this he handed over to the other, saying, in a solemn tone, “For the Duchess. An invitation from the Queen to play croquet.” The Frog-Footman repeated, in the same solemn tone, only changing the order of the words a little, “From the Queen. An invitation for the Duchess to play croquet.”
      
      Then they both bowed low, and their curls got entangled together.
      
      Alice laughed so much at this, that she had to run back into the wood for fear of their hearing her; and when she next peeped out the Fish-Footman was gone, and the other was sitting on the ground near the door, staring stupidly up into the sky.
      
      Alice went timidly up to the door, and knocked.
      
      “There’s no sort of use in knocking,” said the Footman, “and that for two reasons. First, because I’m on the same side of the door as you are; secondly, because they’re making such a noise inside, no one could possibly hear you.” And certainly there was a most extraordinary noise going on within—a constant howling and sneezing, and every now and then a great crash, as if a dish or kettle had been broken to pieces.
      
      “Please, then,” said Alice, “how am I to get in?”
      
      “There might be some sense in your knocking,” the Footman went on without attending to her, “if we had the door between us. For instance, if you were inside, you might knock, and I could let you out, you know.” He was looking up into the sky all the time he was speaking, and this Alice thought decidedly uncivil. “But perhaps he can’t help it,” she said to herself; “his eyes are so very nearly at the top of his head. But at any rate he might answer questions.—How am I to get in?” she repeated, aloud.
      
      “I shall sit here,” the Footman remarked, “till tomorrow—”
      
      At this moment the door of the house opened, and a large plate came skimming out, straight at the Footman’s head: it just grazed his nose, and broke to pieces against one of the trees behind him.
      
      “—or next day, maybe,” the Footman continued in the same tone, exactly as if nothing had happened.
      
      “How am I to get in?” asked Alice again, in a louder tone.
      
      “Are you to get in at all?” said the Footman. “That’s the first question, you know.”
      
      It was, no doubt: only Alice did not like to be told so. “It’s really dreadful,” she muttered to herself, “the way all the creatures argue. It’s enough to drive one crazy!”
      
      The Footman seemed to think this a good opportunity for repeating his remark, with variations. “I shall sit here,” he said, “on and off, for days and days.”
      
      “But what am I to do?” said Alice.
      
      “Anything you like,” said the Footman, and began whistling.
      
      “Oh, there’s no use in talking to him,” said Alice desperately: “he’s perfectly idiotic!” And she opened the door and went in.
      
      The door led right into a large kitchen, which was full of smoke from one end to the other: the Duchess was sitting on a three-legged stool in the middle, nursing a baby; the cook was leaning over the fire, stirring a large cauldron which seemed to be full of soup.
      
      “There’s certainly too much pepper in that soup!” Alice said to herself, as well as she could for sneezing.
      
      There was certainly too much of it in the air. Even the Duchess sneezed occasionally; and as for the baby, it was sneezing and howling alternately without a moment’s pause. The only things in the kitchen that did not sneeze, were the cook, and a large cat which was sitting on the hearth and grinning from ear to ear.
      
      “Please would you tell me,” said Alice, a little timidly, for she was not quite sure whether it was good manners for her to speak first, “why your cat grins like that?”
      
      “It’s a Cheshire cat,” said the Duchess, “and that’s why. Pig!”
      
      She said the last word with such sudden violence that Alice quite jumped; but she saw in another moment that it was addressed to the baby, and not to her, so she took courage, and went on again:—
      
      “I didn’t know that Cheshire cats always grinned; in fact, I didn’t know that cats could grin.”
      
      “They all can,” said the Duchess; “and most of ’em do.”
      
      “I don’t know of any that do,” Alice said very politely, feeling quite pleased to have got into a conversation.
      
      “You don’t know much,” said the Duchess; “and that’s a fact.”
      
      Alice did not at all like the tone of this remark, and thought it would be as well to introduce some other subject of conversation. While she was trying to fix on one, the cook took the cauldron of soup off the fire, and at once set to work throwing everything within her reach at the Duchess and the baby—the fire-irons came first; then followed a shower of saucepans, plates, and dishes. The Duchess took no notice of them even when they hit her; and the baby was howling so much already, that it was quite impossible to say whether the blows hurt it or not.
      
      “Oh, please mind what you’re doing!” cried Alice, jumping up and down in an agony of terror. “Oh, there goes his precious nose!” as an unusually large saucepan flew close by it, and very nearly carried it off.
      
      “If everybody minded their own business,” the Duchess said in a hoarse growl, “the world would go round a deal faster than it does.”
      
      “Which would not be an advantage,” said Alice, who felt very glad to get an opportunity of showing off a little of her knowledge. “Just think of what work it would make with the day and night! You see the earth takes twenty-four hours to turn round on its axis—”
      
      “Talking of axes,” said the Duchess, “chop off her head!”
      
      Alice glanced rather anxiously at the cook, to see if she meant to take the hint; but the cook was busily stirring the soup, and seemed not to be listening, so she went on again: “Twenty-four hours, I think; or is it twelve? I—”
      
      “Oh, don’t bother me,” said the Duchess; “I never could abide figures!” And with that she began nursing her child again, singing a sort of lullaby to it as she did so, and giving it a violent shake at the end of every line:
      
      “Speak roughly to your little boy,
      And beat him when he sneezes:
      He only does it to annoy,
      Because he knows it teases.”
      
      CHORUS.
      (In which the cook and the baby joined):
      
      “Wow! wow! wow!”
      
      While the Duchess sang the second verse of the song, she kept tossing the baby violently up and down, and the poor little thing howled so, that Alice could hardly hear the words:—
      
      “I speak severely to my boy,
          I beat him when he sneezes;
      For he can thoroughly enjoy
          The pepper when he pleases!”
      
      CHORUS.
      
      “Wow! wow! wow!”
      
      “Here! you may nurse it a bit, if you like!” the Duchess said to Alice, flinging the baby at her as she spoke. “I must go and get ready to play croquet with the Queen,” and she hurried out of the room. The cook threw a frying-pan after her as she went out, but it just missed her.
      
      Alice caught the baby with some difficulty, as it was a queer-shaped little creature, and held out its arms and legs in all directions, “just like a star-fish,” thought Alice. The poor little thing was snorting like a steam-engine when she caught it, and kept doubling itself up and straightening itself out again, so that altogether, for the first minute or two, it was as much as she could do to hold it.
      
      As soon as she had made out the proper way of nursing it, (which was to twist it up into a sort of knot, and then keep tight hold of its right ear and left foot, so as to prevent its undoing itself,) she carried it out into the open air. “If I don’t take this child away with me,” thought Alice, “they’re sure to kill it in a day or two: wouldn’t it be murder to leave it behind?” She said the last words out loud, and the little thing grunted in reply (it had left off sneezing by this time). “Don’t grunt,” said Alice; “that’s not at all a proper way of expressing yourself.”
      
      The baby grunted again, and Alice looked very anxiously into its face to see what was the matter with it. There could be no doubt that it had a very turn-up nose, much more like a snout than a real nose; also its eyes were getting extremely small for a baby: altogether Alice did not like the look of the thing at all. “But perhaps it was only sobbing,” she thought, and looked into its eyes again, to see if there were any tears.
      
      No, there were no tears. “If you’re going to turn into a pig, my dear,” said Alice, seriously, “I’ll have nothing more to do with you. Mind now!” The poor little thing sobbed again (or grunted, it was impossible to say which), and they went on for some while in silence.
      
      Alice was just beginning to think to herself, “Now, what am I to do with this creature when I get it home?” when it grunted again, so violently, that she looked down into its face in some alarm. This time there could be no mistake about it: it was neither more nor less than a pig, and she felt that it would be quite absurd for her to carry it further.
      
      So she set the little creature down, and felt quite relieved to see it trot away quietly into the wood. “If it had grown up,” she said to herself, “it would have made a dreadfully ugly child: but it makes rather a handsome pig, I think.” And she began thinking over other children she knew, who might do very well as pigs, and was just saying to herself, “if one only knew the right way to change them—” when she was a little startled by seeing the Cheshire Cat sitting on a bough of a tree a few yards off.
      
      The Cat only grinned when it saw Alice. It looked good-natured, she thought: still it had very long claws and a great many teeth, so she felt that it ought to be treated with respect.
      
      “Cheshire Puss,” she began, rather timidly, as she did not at all know whether it would like the name: however, it only grinned a little wider. “Come, it’s pleased so far,” thought Alice, and she went on. “Would you tell me, please, which way I ought to go from here?”
      
      “That depends a good deal on where you want to get to,” said the Cat.
      
      “I don’t much care where—” said Alice.
      
      “Then it doesn’t matter which way you go,” said the Cat.
      
      “—so long as I get somewhere,” Alice added as an explanation.
      
      “Oh, you’re sure to do that,” said the Cat, “if you only walk long enough.”
      
      Alice felt that this could not be denied, so she tried another question. “What sort of people live about here?”
      
      “In that direction,” the Cat said, waving its right paw round, “lives a Hatter: and in that direction,” waving the other paw, “lives a March Hare. Visit either you like: they’re both mad.”
      
      “But I don’t want to go among mad people,” Alice remarked.
      
      “Oh, you can’t help that,” said the Cat: “we’re all mad here. I’m mad. You’re mad.”
      
      “How do you know I’m mad?” said Alice.
      
      “You must be,” said the Cat, “or you wouldn’t have come here.”
      
      Alice didn’t think that proved it at all; however, she went on “And how do you know that you’re mad?”
      
      “To begin with,” said the Cat, “a dog’s not mad. You grant that?”
      
      “I suppose so,” said Alice.
      
      “Well, then,” the Cat went on, “you see, a dog growls when it’s angry, and wags its tail when it’s pleased. Now I growl when I’m pleased, and wag my tail when I’m angry. Therefore I’m mad.”
      
      “I call it purring, not growling,” said Alice.
      
      “Call it what you like,” said the Cat. “Do you play croquet with the Queen to-day?”
      
      “I should like it very much,” said Alice, “but I haven’t been invited yet.”
      
      “You’ll see me there,” said the Cat, and vanished.
      
      Alice was not much surprised at this, she was getting so used to queer things happening. While she was looking at the place where it had been, it suddenly appeared again.
      
      “By-the-bye, what became of the baby?” said the Cat. “I’d nearly forgotten to ask.”
      
      “It turned into a pig,” Alice quietly said, just as if it had come back in a natural way.
      
      “I thought it would,” said the Cat, and vanished again.
      
      Alice waited a little, half expecting to see it again, but it did not appear, and after a minute or two she walked on in the direction in which the March Hare was said to live. “I’ve seen hatters before,” she said to herself; “the March Hare will be much the most interesting, and perhaps as this is May it won’t be raving mad—at least not so mad as it was in March.” As she said this, she looked up, and there was the Cat again, sitting on a branch of a tree.
      
      “Did you say pig, or fig?” said the Cat.
      
      “I said pig,” replied Alice; “and I wish you wouldn’t keep appearing and vanishing so suddenly: you make one quite giddy.”
      
      “All right,” said the Cat; and this time it vanished quite slowly, beginning with the end of the tail, and ending with the grin, which remained some time after the rest of it had gone.
      
      “Well! I’ve often seen a cat without a grin,” thought Alice; “but a grin without a cat! It’s the most curious thing I ever saw in my life!”
      
      She had not gone much farther before she came in sight of the house of the March Hare: she thought it must be the right house, because the chimneys were shaped like ears and the roof was thatched with fur. It was so large a house, that she did not like to go nearer till she had nibbled some more of the left-hand bit of mushroom, and raised herself to about two feet high: even then she walked up towards it rather timidly, saying to herself “Suppose it should be raving mad after all! I almost wish I’d gone to see the Hatter instead!”` },
      { chapter:  7, title: 'Chapter 7 — A Mad Tea-Party',                  content: `There was a table set out under a tree in front of the house, and the March Hare and the Hatter were having tea at it: a Dormouse was sitting between them, fast asleep, and the other two were using it as a cushion, resting their elbows on it, and talking over its head. “Very uncomfortable for the Dormouse,” thought Alice; “only, as it’s asleep, I suppose it doesn’t mind.”

      The table was a large one, but the three were all crowded together at one corner of it: “No room! No room!” they cried out when they saw Alice coming. “There’s plenty of room!” said Alice indignantly, and she sat down in a large arm-chair at one end of the table.
      
      “Have some wine,” the March Hare said in an encouraging tone.
      
      Alice looked all round the table, but there was nothing on it but tea. “I don’t see any wine,” she remarked.
      
      “There isn’t any,” said the March Hare.
      
      “Then it wasn’t very civil of you to offer it,” said Alice angrily.
      
      “It wasn’t very civil of you to sit down without being invited,” said the March Hare.
      
      “I didn’t know it was your table,” said Alice; “it’s laid for a great many more than three.”
      
      “Your hair wants cutting,” said the Hatter. He had been looking at Alice for some time with great curiosity, and this was his first speech.
      
      “You should learn not to make personal remarks,” Alice said with some severity; “it’s very rude.”
      
      The Hatter opened his eyes very wide on hearing this; but all he said was, “Why is a raven like a writing-desk?”
      
      “Come, we shall have some fun now!” thought Alice. “I’m glad they’ve begun asking riddles.—I believe I can guess that,” she added aloud.
      
      “Do you mean that you think you can find out the answer to it?” said the March Hare.
      
      “Exactly so,” said Alice.
      
      “Then you should say what you mean,” the March Hare went on.
      
      “I do,” Alice hastily replied; “at least—at least I mean what I say—that’s the same thing, you know.”
      
      “Not the same thing a bit!” said the Hatter. “You might just as well say that ‘I see what I eat’ is the same thing as ‘I eat what I see’!”
      
      “You might just as well say,” added the March Hare, “that ‘I like what I get’ is the same thing as ‘I get what I like’!”
      
      “You might just as well say,” added the Dormouse, who seemed to be talking in his sleep, “that ‘I breathe when I sleep’ is the same thing as ‘I sleep when I breathe’!”
      
      “It is the same thing with you,” said the Hatter, and here the conversation dropped, and the party sat silent for a minute, while Alice thought over all she could remember about ravens and writing-desks, which wasn’t much.
      
      The Hatter was the first to break the silence. “What day of the month is it?” he said, turning to Alice: he had taken his watch out of his pocket, and was looking at it uneasily, shaking it every now and then, and holding it to his ear.
      
      Alice considered a little, and then said “The fourth.”
      
      “Two days wrong!” sighed the Hatter. “I told you butter wouldn’t suit the works!” he added looking angrily at the March Hare.
      
      “It was the best butter,” the March Hare meekly replied.
      
      “Yes, but some crumbs must have got in as well,” the Hatter grumbled: “you shouldn’t have put it in with the bread-knife.”
      
      The March Hare took the watch and looked at it gloomily: then he dipped it into his cup of tea, and looked at it again: but he could think of nothing better to say than his first remark, “It was the best butter, you know.”
      
      Alice had been looking over his shoulder with some curiosity. “What a funny watch!” she remarked. “It tells the day of the month, and doesn’t tell what o’clock it is!”
      
      “Why should it?” muttered the Hatter. “Does your watch tell you what year it is?”
      
      “Of course not,” Alice replied very readily: “but that’s because it stays the same year for such a long time together.”
      
      “Which is just the case with mine,” said the Hatter.
      
      Alice felt dreadfully puzzled, The Hatter’s remark seemed to have no sort of meaning in it, and yet it was certainly English. “I don’t quite understand you,” she said, as politely as she could.
      
      “The Dormouse is asleep again,” said the Hatter, and he poured a little hot tea upon its nose.
      
      The Dormouse shook its head impatiently, and said, without opening its eyes, “Of course, of course; just what I was going to remark myself.”
      
      “Have you guessed the riddle yet?” the Hatter said, turning to Alice again.
      
      “No, I give it up,” Alice replied: “what’s the answer?”
      
      “I haven’t the slightest idea,” said the Hatter.
      
      “Nor I,” said the March Hare.
      
      Alice sighed wearily. “I think you might do something better with the time,” she said, “than waste it in asking riddles that have no answers.”
      
      “If you knew Time as well as I do,” said the Hatter, “you wouldn’t talk about wasting it. It’s him.”
      
      “I don’t know what you mean,” said Alice.
      
      “Of course you don’t!” the Hatter said, tossing his head contemptuously. “I dare say you never even spoke to Time!”
      
      “Perhaps not,” Alice cautiously replied: “but I know I have to beat time when I learn music.”
      
      “Ah! that accounts for it,” said the Hatter. “He won’t stand beating. Now, if you only kept on good terms with him, he’d do almost anything you liked with the clock. For instance, suppose it were nine o’clock in the morning, just time to begin lessons: you’d only have to whisper a hint to Time, and round goes the clock in a twinkling! Half-past one, time for dinner!”
      
      (“I only wish it was,” the March Hare said to itself in a whisper.)
      
      “That would be grand, certainly,” said Alice thoughtfully: “but then—I shouldn’t be hungry for it, you know.”
      
      “Not at first, perhaps,” said the Hatter: “but you could keep it to half-past one as long as you liked.”
      
      “Is that the way you manage?” Alice asked.
      
      The Hatter shook his head mournfully. “Not I!” he replied. “We quarrelled last March—just before he went mad, you know—” (pointing with his tea spoon at the March Hare,) “—it was at the great concert given by the Queen of Hearts, and I had to sing
      
      ‘Twinkle, twinkle, little bat!
      How I wonder what you’re at!’
      
      You know the song, perhaps?”
      
      “I’ve heard something like it,” said Alice.
      
      “It goes on, you know,” the Hatter continued, “in this way:—
      
      ‘Up above the world you fly,
      Like a tea-tray in the sky.
                          Twinkle, twinkle—’”
      
      Here the Dormouse shook itself, and began singing in its sleep “Twinkle, twinkle, twinkle, twinkle—” and went on so long that they had to pinch it to make it stop.
      
      “Well, I’d hardly finished the first verse,” said the Hatter, “when the Queen jumped up and bawled out, ‘He’s murdering the time! Off with his head!’”
      
      “How dreadfully savage!” exclaimed Alice.
      
      “And ever since that,” the Hatter went on in a mournful tone, “he won’t do a thing I ask! It’s always six o’clock now.”
      
      A bright idea came into Alice’s head. “Is that the reason so many tea-things are put out here?” she asked.
      
      “Yes, that’s it,” said the Hatter with a sigh: “it’s always tea-time, and we’ve no time to wash the things between whiles.”
      
      “Then you keep moving round, I suppose?” said Alice.
      
      “Exactly so,” said the Hatter: “as the things get used up.”
      
      “But what happens when you come to the beginning again?” Alice ventured to ask.
      
      “Suppose we change the subject,” the March Hare interrupted, yawning. “I’m getting tired of this. I vote the young lady tells us a story.”
      
      “I’m afraid I don’t know one,” said Alice, rather alarmed at the proposal.
      
      “Then the Dormouse shall!” they both cried. “Wake up, Dormouse!” And they pinched it on both sides at once.
      
      The Dormouse slowly opened his eyes. “I wasn’t asleep,” he said in a hoarse, feeble voice: “I heard every word you fellows were saying.”
      
      “Tell us a story!” said the March Hare.
      
      “Yes, please do!” pleaded Alice.
      
      “And be quick about it,” added the Hatter, “or you’ll be asleep again before it’s done.”
      
      “Once upon a time there were three little sisters,” the Dormouse began in a great hurry; “and their names were Elsie, Lacie, and Tillie; and they lived at the bottom of a well—”
      
      “What did they live on?” said Alice, who always took a great interest in questions of eating and drinking.
      
      “They lived on treacle,” said the Dormouse, after thinking a minute or two.
      
      “They couldn’t have done that, you know,” Alice gently remarked; “they’d have been ill.”
      
      “So they were,” said the Dormouse; “very ill.”
      
      Alice tried to fancy to herself what such an extraordinary way of living would be like, but it puzzled her too much, so she went on: “But why did they live at the bottom of a well?”
      
      “Take some more tea,” the March Hare said to Alice, very earnestly.
      
      “I’ve had nothing yet,” Alice replied in an offended tone, “so I can’t take more.”
      
      “You mean you can’t take less,” said the Hatter: “it’s very easy to take more than nothing.”
      
      “Nobody asked your opinion,” said Alice.
      
      “Who’s making personal remarks now?” the Hatter asked triumphantly.
      
      Alice did not quite know what to say to this: so she helped herself to some tea and bread-and-butter, and then turned to the Dormouse, and repeated her question. “Why did they live at the bottom of a well?”
      
      The Dormouse again took a minute or two to think about it, and then said, “It was a treacle-well.”
      
      “There’s no such thing!” Alice was beginning very angrily, but the Hatter and the March Hare went “Sh! sh!” and the Dormouse sulkily remarked, “If you can’t be civil, you’d better finish the story for yourself.”
      
      “No, please go on!” Alice said very humbly; “I won’t interrupt again. I dare say there may be one.”
      
      “One, indeed!” said the Dormouse indignantly. However, he consented to go on. “And so these three little sisters—they were learning to draw, you know—”
      
      “What did they draw?” said Alice, quite forgetting her promise.
      
      “Treacle,” said the Dormouse, without considering at all this time.
      
      “I want a clean cup,” interrupted the Hatter: “let’s all move one place on.”
      
      He moved on as he spoke, and the Dormouse followed him: the March Hare moved into the Dormouse’s place, and Alice rather unwillingly took the place of the March Hare. The Hatter was the only one who got any advantage from the change: and Alice was a good deal worse off than before, as the March Hare had just upset the milk-jug into his plate.
      
      Alice did not wish to offend the Dormouse again, so she began very cautiously: “But I don’t understand. Where did they draw the treacle from?”
      
      “You can draw water out of a water-well,” said the Hatter; “so I should think you could draw treacle out of a treacle-well—eh, stupid?”
      
      “But they were in the well,” Alice said to the Dormouse, not choosing to notice this last remark.
      
      “Of course they were,” said the Dormouse; “—well in.”
      
      This answer so confused poor Alice, that she let the Dormouse go on for some time without interrupting it.
      
      “They were learning to draw,” the Dormouse went on, yawning and rubbing its eyes, for it was getting very sleepy; “and they drew all manner of things—everything that begins with an M—”
      
      “Why with an M?” said Alice.
      
      “Why not?” said the March Hare.
      
      Alice was silent.
      
      The Dormouse had closed its eyes by this time, and was going off into a doze; but, on being pinched by the Hatter, it woke up again with a little shriek, and went on: “—that begins with an M, such as mouse-traps, and the moon, and memory, and muchness—you know you say things are ‘much of a muchness’—did you ever see such a thing as a drawing of a muchness?”
      
      “Really, now you ask me,” said Alice, very much confused, “I don’t think—”
      
      “Then you shouldn’t talk,” said the Hatter.
      
      This piece of rudeness was more than Alice could bear: she got up in great disgust, and walked off; the Dormouse fell asleep instantly, and neither of the others took the least notice of her going, though she looked back once or twice, half hoping that they would call after her: the last time she saw them, they were trying to put the Dormouse into the teapot.
      
      “At any rate I’ll never go there again!” said Alice as she picked her way through the wood. “It’s the stupidest tea-party I ever was at in all my life!”
      
      Just as she said this, she noticed that one of the trees had a door leading right into it. “That’s very curious!” she thought. “But everything’s curious today. I think I may as well go in at once.” And in she went.
      
      Once more she found herself in the long hall, and close to the little glass table. “Now, I’ll manage better this time,” she said to herself, and began by taking the little golden key, and unlocking the door that led into the garden. Then she went to work nibbling at the mushroom (she had kept a piece of it in her pocket) till she was about a foot high: then she walked down the little passage: and then—she found herself at last in the beautiful garden, among the bright flower-beds and the cool fountains.` },
      { chapter:  8, title: "Chapter 8 — The Queen's Croquet-Ground",       content: `A large rose-tree stood near the entrance of the garden: the roses growing on it were white, but there were three gardeners at it, busily painting them red. Alice thought this a very curious thing, and she went nearer to watch them, and just as she came up to them she heard one of them say, “Look out now, Five! Don’t go splashing paint over me like that!”

      “I couldn’t help it,” said Five, in a sulky tone; “Seven jogged my elbow.”
      
      On which Seven looked up and said, “That’s right, Five! Always lay the blame on others!”
      
      “You’d better not talk!” said Five. “I heard the Queen say only yesterday you deserved to be beheaded!”
      
      “What for?” said the one who had spoken first.
      
      “That’s none of your business, Two!” said Seven.
      
      “Yes, it is his business!” said Five, “and I’ll tell him—it was for bringing the cook tulip-roots instead of onions.”
      
      Seven flung down his brush, and had just begun “Well, of all the unjust things—” when his eye chanced to fall upon Alice, as she stood watching them, and he checked himself suddenly: the others looked round also, and all of them bowed low.
      
      “Would you tell me,” said Alice, a little timidly, “why you are painting those roses?”
      
      Five and Seven said nothing, but looked at Two. Two began in a low voice, “Why the fact is, you see, Miss, this here ought to have been a red rose-tree, and we put a white one in by mistake; and if the Queen was to find it out, we should all have our heads cut off, you know. So you see, Miss, we’re doing our best, afore she comes, to—” At this moment Five, who had been anxiously looking across the garden, called out “The Queen! The Queen!” and the three gardeners instantly threw themselves flat upon their faces. There was a sound of many footsteps, and Alice looked round, eager to see the Queen.
      
      First came ten soldiers carrying clubs; these were all shaped like the three gardeners, oblong and flat, with their hands and feet at the corners: next the ten courtiers; these were ornamented all over with diamonds, and walked two and two, as the soldiers did. After these came the royal children; there were ten of them, and the little dears came jumping merrily along hand in hand, in couples: they were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit: it was talking in a hurried nervous manner, smiling at everything that was said, and went by without noticing her. Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion; and, last of all this grand procession, came THE KING AND QUEEN OF HEARTS.
      
      Alice was rather doubtful whether she ought not to lie down on her face like the three gardeners, but she could not remember ever having heard of such a rule at processions; “and besides, what would be the use of a procession,” thought she, “if people had all to lie down upon their faces, so that they couldn’t see it?” So she stood still where she was, and waited.
      
      When the procession came opposite to Alice, they all stopped and looked at her, and the Queen said severely “Who is this?” She said it to the Knave of Hearts, who only bowed and smiled in reply.
      
      “Idiot!” said the Queen, tossing her head impatiently; and, turning to Alice, she went on, “What’s your name, child?”
      
      “My name is Alice, so please your Majesty,” said Alice very politely; but she added, to herself, “Why, they’re only a pack of cards, after all. I needn’t be afraid of them!”
      
      “And who are these?” said the Queen, pointing to the three gardeners who were lying round the rose-tree; for, you see, as they were lying on their faces, and the pattern on their backs was the same as the rest of the pack, she could not tell whether they were gardeners, or soldiers, or courtiers, or three of her own children.
      
      “How should I know?” said Alice, surprised at her own courage. “It’s no business of mine.”
      
      The Queen turned crimson with fury, and, after glaring at her for a moment like a wild beast, screamed “Off with her head! Off—”
      
      “Nonsense!” said Alice, very loudly and decidedly, and the Queen was silent.
      
      The King laid his hand upon her arm, and timidly said “Consider, my dear: she is only a child!”
      
      The Queen turned angrily away from him, and said to the Knave “Turn them over!”
      
      The Knave did so, very carefully, with one foot.
      
      “Get up!” said the Queen, in a shrill, loud voice, and the three gardeners instantly jumped up, and began bowing to the King, the Queen, the royal children, and everybody else.
      
      “Leave off that!” screamed the Queen. “You make me giddy.” And then, turning to the rose-tree, she went on, “What have you been doing here?”
      
      “May it please your Majesty,” said Two, in a very humble tone, going down on one knee as he spoke, “we were trying—”
      
      “I see!” said the Queen, who had meanwhile been examining the roses. “Off with their heads!” and the procession moved on, three of the soldiers remaining behind to execute the unfortunate gardeners, who ran to Alice for protection.
      
      “You shan’t be beheaded!” said Alice, and she put them into a large flower-pot that stood near. The three soldiers wandered about for a minute or two, looking for them, and then quietly marched off after the others.
      
      “Are their heads off?” shouted the Queen.
      
      “Their heads are gone, if it please your Majesty!” the soldiers shouted in reply.
      
      “That’s right!” shouted the Queen. “Can you play croquet?”
      
      The soldiers were silent, and looked at Alice, as the question was evidently meant for her.
      
      “Yes!” shouted Alice.
      
      “Come on, then!” roared the Queen, and Alice joined the procession, wondering very much what would happen next.
      
      “It’s—it’s a very fine day!” said a timid voice at her side. She was walking by the White Rabbit, who was peeping anxiously into her face.
      
      “Very,” said Alice: “—where’s the Duchess?”
      
      “Hush! Hush!” said the Rabbit in a low, hurried tone. He looked anxiously over his shoulder as he spoke, and then raised himself upon tiptoe, put his mouth close to her ear, and whispered “She’s under sentence of execution.”
      
      “What for?” said Alice.
      
      “Did you say ‘What a pity!’?” the Rabbit asked.
      
      “No, I didn’t,” said Alice: “I don’t think it’s at all a pity. I said ‘What for?’”
      
      “She boxed the Queen’s ears—” the Rabbit began. Alice gave a little scream of laughter. “Oh, hush!” the Rabbit whispered in a frightened tone. “The Queen will hear you! You see, she came rather late, and the Queen said—”
      
      “Get to your places!” shouted the Queen in a voice of thunder, and people began running about in all directions, tumbling up against each other; however, they got settled down in a minute or two, and the game began. Alice thought she had never seen such a curious croquet-ground in her life; it was all ridges and furrows; the balls were live hedgehogs, the mallets live flamingoes, and the soldiers had to double themselves up and to stand on their hands and feet, to make the arches.
      
      The chief difficulty Alice found at first was in managing her flamingo: she succeeded in getting its body tucked away, comfortably enough, under her arm, with its legs hanging down, but generally, just as she had got its neck nicely straightened out, and was going to give the hedgehog a blow with its head, it would twist itself round and look up in her face, with such a puzzled expression that she could not help bursting out laughing: and when she had got its head down, and was going to begin again, it was very provoking to find that the hedgehog had unrolled itself, and was in the act of crawling away: besides all this, there was generally a ridge or furrow in the way wherever she wanted to send the hedgehog to, and, as the doubled-up soldiers were always getting up and walking off to other parts of the ground, Alice soon came to the conclusion that it was a very difficult game indeed.
      
      The players all played at once without waiting for turns, quarrelling all the while, and fighting for the hedgehogs; and in a very short time the Queen was in a furious passion, and went stamping about, and shouting “Off with his head!” or “Off with her head!” about once in a minute.
      
      Alice began to feel very uneasy: to be sure, she had not as yet had any dispute with the Queen, but she knew that it might happen any minute, “and then,” thought she, “what would become of me? They’re dreadfully fond of beheading people here; the great wonder is, that there’s any one left alive!”
      
      She was looking about for some way of escape, and wondering whether she could get away without being seen, when she noticed a curious appearance in the air: it puzzled her very much at first, but, after watching it a minute or two, she made it out to be a grin, and she said to herself “It’s the Cheshire Cat: now I shall have somebody to talk to.”
      
      “How are you getting on?” said the Cat, as soon as there was mouth enough for it to speak with.
      
      Alice waited till the eyes appeared, and then nodded. “It’s no use speaking to it,” she thought, “till its ears have come, or at least one of them.” In another minute the whole head appeared, and then Alice put down her flamingo, and began an account of the game, feeling very glad she had someone to listen to her. The Cat seemed to think that there was enough of it now in sight, and no more of it appeared.
      
      “I don’t think they play at all fairly,” Alice began, in rather a complaining tone, “and they all quarrel so dreadfully one can’t hear oneself speak—and they don’t seem to have any rules in particular; at least, if there are, nobody attends to them—and you’ve no idea how confusing it is all the things being alive; for instance, there’s the arch I’ve got to go through next walking about at the other end of the ground—and I should have croqueted the Queen’s hedgehog just now, only it ran away when it saw mine coming!”
      
      “How do you like the Queen?” said the Cat in a low voice.
      
      “Not at all,” said Alice: “she’s so extremely—” Just then she noticed that the Queen was close behind her, listening: so she went on, “—likely to win, that it’s hardly worth while finishing the game.”
      
      The Queen smiled and passed on.
      
      “Who are you talking to?” said the King, going up to Alice, and looking at the Cat’s head with great curiosity.
      
      “It’s a friend of mine—a Cheshire Cat,” said Alice: “allow me to introduce it.”
      
      “I don’t like the look of it at all,” said the King: “however, it may kiss my hand if it likes.”
      
      “I’d rather not,” the Cat remarked.
      
      “Don’t be impertinent,” said the King, “and don’t look at me like that!” He got behind Alice as he spoke.
      
      “A cat may look at a king,” said Alice. “I’ve read that in some book, but I don’t remember where.”
      
      “Well, it must be removed,” said the King very decidedly, and he called the Queen, who was passing at the moment, “My dear! I wish you would have this cat removed!”
      
      The Queen had only one way of settling all difficulties, great or small. “Off with his head!” she said, without even looking round.
      
      “I’ll fetch the executioner myself,” said the King eagerly, and he hurried off.
      
      Alice thought she might as well go back, and see how the game was going on, as she heard the Queen’s voice in the distance, screaming with passion. She had already heard her sentence three of the players to be executed for having missed their turns, and she did not like the look of things at all, as the game was in such confusion that she never knew whether it was her turn or not. So she went in search of her hedgehog.
      
      The hedgehog was engaged in a fight with another hedgehog, which seemed to Alice an excellent opportunity for croqueting one of them with the other: the only difficulty was, that her flamingo was gone across to the other side of the garden, where Alice could see it trying in a helpless sort of way to fly up into a tree.
      
      By the time she had caught the flamingo and brought it back, the fight was over, and both the hedgehogs were out of sight: “but it doesn’t matter much,” thought Alice, “as all the arches are gone from this side of the ground.” So she tucked it away under her arm, that it might not escape again, and went back for a little more conversation with her friend.
      
      When she got back to the Cheshire Cat, she was surprised to find quite a large crowd collected round it: there was a dispute going on between the executioner, the King, and the Queen, who were all talking at once, while all the rest were quite silent, and looked very uncomfortable.
      
      The moment Alice appeared, she was appealed to by all three to settle the question, and they repeated their arguments to her, though, as they all spoke at once, she found it very hard indeed to make out exactly what they said.
      
      The executioner’s argument was, that you couldn’t cut off a head unless there was a body to cut it off from: that he had never had to do such a thing before, and he wasn’t going to begin at his time of life.
      
      The King’s argument was, that anything that had a head could be beheaded, and that you weren’t to talk nonsense.
      
      The Queen’s argument was, that if something wasn’t done about it in less than no time she’d have everybody executed, all round. (It was this last remark that had made the whole party look so grave and anxious.)
      
      Alice could think of nothing else to say but “It belongs to the Duchess: you’d better ask her about it.”
      
      “She’s in prison,” the Queen said to the executioner: “fetch her here.” And the executioner went off like an arrow.
      
      The Cat’s head began fading away the moment he was gone, and, by the time he had come back with the Duchess, it had entirely disappeared; so the King and the executioner ran wildly up and down looking for it, while the rest of the party went back to the game.` },
      { chapter:  9, title: "Chapter 9 — The Mock Turtle's Story",          content: `“You can’t think how glad I am to see you again, you dear old thing!” said the Duchess, as she tucked her arm affectionately into Alice’s, and they walked off together.

      Alice was very glad to find her in such a pleasant temper, and thought to herself that perhaps it was only the pepper that had made her so savage when they met in the kitchen.
      
      “When I’m a Duchess,” she said to herself, (not in a very hopeful tone though), “I won’t have any pepper in my kitchen at all. Soup does very well without—Maybe it’s always pepper that makes people hot-tempered,” she went on, very much pleased at having found out a new kind of rule, “and vinegar that makes them sour—and camomile that makes them bitter—and—and barley-sugar and such things that make children sweet-tempered. I only wish people knew that: then they wouldn’t be so stingy about it, you know—”
      
      She had quite forgotten the Duchess by this time, and was a little startled when she heard her voice close to her ear. “You’re thinking about something, my dear, and that makes you forget to talk. I can’t tell you just now what the moral of that is, but I shall remember it in a bit.”
      
      “Perhaps it hasn’t one,” Alice ventured to remark.
      
      “Tut, tut, child!” said the Duchess. “Everything’s got a moral, if only you can find it.” And she squeezed herself up closer to Alice’s side as she spoke.
      
      Alice did not much like keeping so close to her: first, because the Duchess was very ugly; and secondly, because she was exactly the right height to rest her chin upon Alice’s shoulder, and it was an uncomfortably sharp chin. However, she did not like to be rude, so she bore it as well as she could.
      
      “The game’s going on rather better now,” she said, by way of keeping up the conversation a little.
      
      “’Tis so,” said the Duchess: “and the moral of that is—‘Oh, ’tis love, ’tis love, that makes the world go round!’”
      
      “Somebody said,” Alice whispered, “that it’s done by everybody minding their own business!”
      
      “Ah, well! It means much the same thing,” said the Duchess, digging her sharp little chin into Alice’s shoulder as she added, “and the moral of that is—‘Take care of the sense, and the sounds will take care of themselves.’”
      
      “How fond she is of finding morals in things!” Alice thought to herself.
      
      “I dare say you’re wondering why I don’t put my arm round your waist,” the Duchess said after a pause: “the reason is, that I’m doubtful about the temper of your flamingo. Shall I try the experiment?”
      
      “He might bite,” Alice cautiously replied, not feeling at all anxious to have the experiment tried.
      
      “Very true,” said the Duchess: “flamingoes and mustard both bite. And the moral of that is—‘Birds of a feather flock together.’”
      
      “Only mustard isn’t a bird,” Alice remarked.
      
      “Right, as usual,” said the Duchess: “what a clear way you have of putting things!”
      
      “It’s a mineral, I think,” said Alice.
      
      “Of course it is,” said the Duchess, who seemed ready to agree to everything that Alice said; “there’s a large mustard-mine near here. And the moral of that is—‘The more there is of mine, the less there is of yours.’”
      
      “Oh, I know!” exclaimed Alice, who had not attended to this last remark, “it’s a vegetable. It doesn’t look like one, but it is.”
      
      “I quite agree with you,” said the Duchess; “and the moral of that is—‘Be what you would seem to be’—or if you’d like it put more simply—‘Never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.’”
      
      “I think I should understand that better,” Alice said very politely, “if I had it written down: but I can’t quite follow it as you say it.”
      
      “That’s nothing to what I could say if I chose,” the Duchess replied, in a pleased tone.
      
      “Pray don’t trouble yourself to say it any longer than that,” said Alice.
      
      “Oh, don’t talk about trouble!” said the Duchess. “I make you a present of everything I’ve said as yet.”
      
      “A cheap sort of present!” thought Alice. “I’m glad they’ve don’t give birthday presents like that!” But she did not venture to say it out loud.
      
      “Thinking again?” the Duchess asked, with another dig of her sharp little chin.
      
      “I’ve a right to think,” said Alice sharply, for she was beginning to feel a little worried.
      
      “Just about as much right,” said the Duchess, “as pigs have to fly; and the m—”
      
      But here, to Alice’s great surprise, the Duchess’s voice died away, even in the middle of her favourite word ‘moral,’ and the arm that was linked into hers began to tremble. Alice looked up, and there stood the Queen in front of them, with her arms folded, frowning like a thunderstorm.
      
      “A fine day, your Majesty!” the Duchess began in a low, weak voice.
      
      “Now, I give you fair warning,” shouted the Queen, stamping on the ground as she spoke; “either you or your head must be off, and that in about half no time! Take your choice!”
      
      The Duchess took her choice, and was gone in a moment.
      
      “Let’s go on with the game,” the Queen said to Alice; and Alice was too much frightened to say a word, but slowly followed her back to the croquet-ground.
      
      The other guests had taken advantage of the Queen’s absence, and were resting in the shade: however, the moment they saw her, they hurried back to the game, the Queen merely remarking that a moment’s delay would cost them their lives.
      
      All the time they were playing the Queen never left off quarrelling with the other players, and shouting “Off with his head!” or “Off with her head!” Those whom she sentenced were taken into custody by the soldiers, who of course had to leave off being arches to do this, so that by the end of half an hour or so there were no arches left, and all the players, except the King, the Queen, and Alice, were in custody and under sentence of execution.
      
      Then the Queen left off, quite out of breath, and said to Alice, “Have you seen the Mock Turtle yet?”
      
      “No,” said Alice. “I don’t even know what a Mock Turtle is.”
      
      “It’s the thing Mock Turtle Soup is made from,” said the Queen.
      
      “I never saw one, or heard of one,” said Alice.
      
      “Come on, then,” said the Queen, “and he shall tell you his history.”
      
      As they walked off together, Alice heard the King say in a low voice, to the company generally, “You are all pardoned.” “Come, that’s a good thing!” she said to herself, for she had felt quite unhappy at the number of executions the Queen had ordered.
      
      They very soon came upon a Gryphon, lying fast asleep in the sun. (If you don’t know what a Gryphon is, look at the picture.) “Up, lazy thing!” said the Queen, “and take this young lady to see the Mock Turtle, and to hear his history. I must go back and see after some executions I have ordered;” and she walked off, leaving Alice alone with the Gryphon. Alice did not quite like the look of the creature, but on the whole she thought it would be quite as safe to stay with it as to go after that savage Queen: so she waited.
      
      The Gryphon sat up and rubbed its eyes: then it watched the Queen till she was out of sight: then it chuckled. “What fun!” said the Gryphon, half to itself, half to Alice.
      
      “What is the fun?” said Alice.
      
      “Why, she,” said the Gryphon. “It’s all her fancy, that: they never executes nobody, you know. Come on!”
      
      “Everybody says ‘come on!’ here,” thought Alice, as she went slowly after it: “I never was so ordered about in all my life, never!”
      
      They had not gone far before they saw the Mock Turtle in the distance, sitting sad and lonely on a little ledge of rock, and, as they came nearer, Alice could hear him sighing as if his heart would break. She pitied him deeply. “What is his sorrow?” she asked the Gryphon, and the Gryphon answered, very nearly in the same words as before, “It’s all his fancy, that: he hasn’t got no sorrow, you know. Come on!”
      
      So they went up to the Mock Turtle, who looked at them with large eyes full of tears, but said nothing.
      
      “This here young lady,” said the Gryphon, “she wants for to know your history, she do.”
      
      “I’ll tell it her,” said the Mock Turtle in a deep, hollow tone: “sit down, both of you, and don’t speak a word till I’ve finished.”
      
      So they sat down, and nobody spoke for some minutes. Alice thought to herself, “I don’t see how he can ever finish, if he doesn’t begin.” But she waited patiently.
      
      “Once,” said the Mock Turtle at last, with a deep sigh, “I was a real Turtle.”
      
      These words were followed by a very long silence, broken only by an occasional exclamation of “Hjckrrh!” from the Gryphon, and the constant heavy sobbing of the Mock Turtle. Alice was very nearly getting up and saying, “Thank you, sir, for your interesting story,” but she could not help thinking there must be more to come, so she sat still and said nothing.
      
      “When we were little,” the Mock Turtle went on at last, more calmly, though still sobbing a little now and then, “we went to school in the sea. The master was an old Turtle—we used to call him Tortoise—”
      
      “Why did you call him Tortoise, if he wasn’t one?” Alice asked.
      
      “We called him Tortoise because he taught us,” said the Mock Turtle angrily: “really you are very dull!”
      
      “You ought to be ashamed of yourself for asking such a simple question,” added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, “Drive on, old fellow! Don’t be all day about it!” and he went on in these words:
      
      “Yes, we went to school in the sea, though you mayn’t believe it—”
      
      “I never said I didn’t!” interrupted Alice.
      
      “You did,” said the Mock Turtle.
      
      “Hold your tongue!” added the Gryphon, before Alice could speak again. The Mock Turtle went on.
      
      “We had the best of educations—in fact, we went to school every day—”
      
      “I’ve been to a day-school, too,” said Alice; “you needn’t be so proud as all that.”
      
      “With extras?” asked the Mock Turtle a little anxiously.
      
      “Yes,” said Alice, “we learned French and music.”
      
      “And washing?” said the Mock Turtle.
      
      “Certainly not!” said Alice indignantly.
      
      “Ah! then yours wasn’t a really good school,” said the Mock Turtle in a tone of great relief. “Now at ours they had at the end of the bill, ‘French, music, and washing—extra.’”
      
      “You couldn’t have wanted it much,” said Alice; “living at the bottom of the sea.”
      
      “I couldn’t afford to learn it.” said the Mock Turtle with a sigh. “I only took the regular course.”
      
      “What was that?” inquired Alice.
      
      “Reeling and Writhing, of course, to begin with,” the Mock Turtle replied; “and then the different branches of Arithmetic—Ambition, Distraction, Uglification, and Derision.”
      
      “I never heard of ‘Uglification,’” Alice ventured to say. “What is it?”
      
      The Gryphon lifted up both its paws in surprise. “What! Never heard of uglifying!” it exclaimed. “You know what to beautify is, I suppose?”
      
      “Yes,” said Alice doubtfully: “it means—to—make—anything—prettier.”
      
      “Well, then,” the Gryphon went on, “if you don’t know what to uglify is, you are a simpleton.”
      
      Alice did not feel encouraged to ask any more questions about it, so she turned to the Mock Turtle, and said “What else had you to learn?”
      
      “Well, there was Mystery,” the Mock Turtle replied, counting off the subjects on his flappers, “—Mystery, ancient and modern, with Seaography: then Drawling—the Drawling-master was an old conger-eel, that used to come once a week: he taught us Drawling, Stretching, and Fainting in Coils.”
      
      “What was that like?” said Alice.
      
      “Well, I can’t show it you myself,” the Mock Turtle said: “I’m too stiff. And the Gryphon never learnt it.”
      
      “Hadn’t time,” said the Gryphon: “I went to the Classics master, though. He was an old crab, he was.”
      
      “I never went to him,” the Mock Turtle said with a sigh: “he taught Laughing and Grief, they used to say.”
      
      “So he did, so he did,” said the Gryphon, sighing in his turn; and both creatures hid their faces in their paws.
      
      “And how many hours a day did you do lessons?” said Alice, in a hurry to change the subject.
      
      “Ten hours the first day,” said the Mock Turtle: “nine the next, and so on.”
      
      “What a curious plan!” exclaimed Alice.
      
      “That’s the reason they’re called lessons,” the Gryphon remarked: “because they lessen from day to day.”
      
      This was quite a new idea to Alice, and she thought it over a little before she made her next remark. “Then the eleventh day must have been a holiday?”
      
      “Of course it was,” said the Mock Turtle.
      
      “And how did you manage on the twelfth?” Alice went on eagerly.
      
      “That’s enough about lessons,” the Gryphon interrupted in a very decided tone: “tell her something about the games now.”` },
      { chapter: 10, title: 'Chapter 10 — The Lobster Quadrille',           content: `The Mock Turtle sighed deeply, and drew the back of one flapper across his eyes. He looked at Alice, and tried to speak, but for a minute or two sobs choked his voice. “Same as if he had a bone in his throat,” said the Gryphon: and it set to work shaking him and punching him in the back. At last the Mock Turtle recovered his voice, and, with tears running down his cheeks, he went on again:—

      “You may not have lived much under the sea—” (“I haven’t,” said Alice)—“and perhaps you were never even introduced to a lobster—” (Alice began to say “I once tasted—” but checked herself hastily, and said “No, never”) “—so you can have no idea what a delightful thing a Lobster Quadrille is!”
      
      “No, indeed,” said Alice. “What sort of a dance is it?”
      
      “Why,” said the Gryphon, “you first form into a line along the sea-shore—”
      
      “Two lines!” cried the Mock Turtle. “Seals, turtles, salmon, and so on; then, when you’ve cleared all the jelly-fish out of the way—”
      
      “That generally takes some time,” interrupted the Gryphon.
      
      “—you advance twice—”
      
      “Each with a lobster as a partner!” cried the Gryphon.
      
      “Of course,” the Mock Turtle said: “advance twice, set to partners—”
      
      “—change lobsters, and retire in same order,” continued the Gryphon.
      
      “Then, you know,” the Mock Turtle went on, “you throw the—”
      
      “The lobsters!” shouted the Gryphon, with a bound into the air.
      
      “—as far out to sea as you can—”
      
      “Swim after them!” screamed the Gryphon.
      
      “Turn a somersault in the sea!” cried the Mock Turtle, capering wildly about.
      
      “Change lobsters again!” yelled the Gryphon at the top of its voice.
      
      “Back to land again, and that’s all the first figure,” said the Mock Turtle, suddenly dropping his voice; and the two creatures, who had been jumping about like mad things all this time, sat down again very sadly and quietly, and looked at Alice.
      
      “It must be a very pretty dance,” said Alice timidly.
      
      “Would you like to see a little of it?” said the Mock Turtle.
      
      “Very much indeed,” said Alice.
      
      “Come, let’s try the first figure!” said the Mock Turtle to the Gryphon. “We can do without lobsters, you know. Which shall sing?”
      
      “Oh, you sing,” said the Gryphon. “I’ve forgotten the words.”
      
      So they began solemnly dancing round and round Alice, every now and then treading on her toes when they passed too close, and waving their forepaws to mark the time, while the Mock Turtle sang this, very slowly and sadly:—
      
      “Will you walk a little faster?” said a whiting to a snail.
      “There’s a porpoise close behind us, and he’s treading on my tail.
      See how eagerly the lobsters and the turtles all advance!
      They are waiting on the shingle—will you come and join the dance?
      Will you, won’t you, will you, won’t you, will you join the dance?
      Will you, won’t you, will you, won’t you, won’t you join the dance?
      
      “You can really have no notion how delightful it will be
      When they take us up and throw us, with the lobsters, out to sea!”
      But the snail replied “Too far, too far!” and gave a look askance—
      Said he thanked the whiting kindly, but he would not join the dance.
      Would not, could not, would not, could not, would not join the dance.
      Would not, could not, would not, could not, could not join the dance.
      
      “What matters it how far we go?” his scaly friend replied.
      “There is another shore, you know, upon the other side.
      The further off from England the nearer is to France—
      Then turn not pale, beloved snail, but come and join the dance.
      Will you, won’t you, will you, won’t you, will you join the dance?
      Will you, won’t you, will you, won’t you, won’t you join the dance?”
      
      
      “Thank you, it’s a very interesting dance to watch,” said Alice, feeling very glad that it was over at last: “and I do so like that curious song about the whiting!”
      
      “Oh, as to the whiting,” said the Mock Turtle, “they—you’ve seen them, of course?”
      
      “Yes,” said Alice, “I’ve often seen them at dinn—” she checked herself hastily.
      
      “I don’t know where Dinn may be,” said the Mock Turtle, “but if you’ve seen them so often, of course you know what they’re like.”
      
      “I believe so,” Alice replied thoughtfully. “They have their tails in their mouths—and they’re all over crumbs.”
      
      “You’re wrong about the crumbs,” said the Mock Turtle: “crumbs would all wash off in the sea. But they have their tails in their mouths; and the reason is—” here the Mock Turtle yawned and shut his eyes.—“Tell her about the reason and all that,” he said to the Gryphon.
      
      “The reason is,” said the Gryphon, “that they would go with the lobsters to the dance. So they got thrown out to sea. So they had to fall a long way. So they got their tails fast in their mouths. So they couldn’t get them out again. That’s all.”
      
      “Thank you,” said Alice, “it’s very interesting. I never knew so much about a whiting before.”
      
      “I can tell you more than that, if you like,” said the Gryphon. “Do you know why it’s called a whiting?”
      
      “I never thought about it,” said Alice. “Why?”
      
      “It does the boots and shoes,” the Gryphon replied very solemnly.
      
      Alice was thoroughly puzzled. “Does the boots and shoes!” she repeated in a wondering tone.
      
      “Why, what are your shoes done with?” said the Gryphon. “I mean, what makes them so shiny?”
      
      Alice looked down at them, and considered a little before she gave her answer. “They’re done with blacking, I believe.”
      
      “Boots and shoes under the sea,” the Gryphon went on in a deep voice, “are done with a whiting. Now you know.”
      
      “And what are they made of?” Alice asked in a tone of great curiosity.
      
      “Soles and eels, of course,” the Gryphon replied rather impatiently: “any shrimp could have told you that.”
      
      “If I’d been the whiting,” said Alice, whose thoughts were still running on the song, “I’d have said to the porpoise, ‘Keep back, please: we don’t want you with us!’”
      
      “They were obliged to have him with them,” the Mock Turtle said: “no wise fish would go anywhere without a porpoise.”
      
      “Wouldn’t it really?” said Alice in a tone of great surprise.
      
      “Of course not,” said the Mock Turtle: “why, if a fish came to me, and told me he was going a journey, I should say ‘With what porpoise?’”
      
      “Don’t you mean ‘purpose’?” said Alice.
      
      “I mean what I say,” the Mock Turtle replied in an offended tone. And the Gryphon added “Come, let’s hear some of your adventures.”
      
      “I could tell you my adventures—beginning from this morning,” said Alice a little timidly: “but it’s no use going back to yesterday, because I was a different person then.”
      
      “Explain all that,” said the Mock Turtle.
      
      “No, no! The adventures first,” said the Gryphon in an impatient tone: “explanations take such a dreadful time.”
      
      So Alice began telling them her adventures from the time when she first saw the White Rabbit. She was a little nervous about it just at first, the two creatures got so close to her, one on each side, and opened their eyes and mouths so very wide, but she gained courage as she went on. Her listeners were perfectly quiet till she got to the part about her repeating “You are old, Father William,” to the Caterpillar, and the words all coming different, and then the Mock Turtle drew a long breath, and said “That’s very curious.”
      
      “It’s all about as curious as it can be,” said the Gryphon.
      
      “It all came different!” the Mock Turtle repeated thoughtfully. “I should like to hear her try and repeat something now. Tell her to begin.” He looked at the Gryphon as if he thought it had some kind of authority over Alice.
      
      “Stand up and repeat ‘’Tis the voice of the sluggard,’” said the Gryphon.
      
      “How the creatures order one about, and make one repeat lessons!” thought Alice; “I might as well be at school at once.” However, she got up, and began to repeat it, but her head was so full of the Lobster Quadrille, that she hardly knew what she was saying, and the words came very queer indeed:—
      
      “’Tis the voice of the Lobster; I heard him declare,
      “You have baked me too brown, I must sugar my hair.”
      As a duck with its eyelids, so he with his nose
      Trims his belt and his buttons, and turns out his toes.”
      
      [later editions continued as follows
      When the sands are all dry, he is gay as a lark,
      And will talk in contemptuous tones of the Shark,
      But, when the tide rises and sharks are around,
      His voice has a timid and tremulous sound.]
      
      
      “That’s different from what I used to say when I was a child,” said the Gryphon.
      
      “Well, I never heard it before,” said the Mock Turtle; “but it sounds uncommon nonsense.”
      
      Alice said nothing; she had sat down with her face in her hands, wondering if anything would ever happen in a natural way again.
      
      “I should like to have it explained,” said the Mock Turtle.
      
      “She can’t explain it,” said the Gryphon hastily. “Go on with the next verse.”
      
      “But about his toes?” the Mock Turtle persisted. “How could he turn them out with his nose, you know?”
      
      “It’s the first position in dancing.” Alice said; but was dreadfully puzzled by the whole thing, and longed to change the subject.
      
      “Go on with the next verse,” the Gryphon repeated impatiently: “it begins ‘I passed by his garden.’”
      
      Alice did not dare to disobey, though she felt sure it would all come wrong, and she went on in a trembling voice:—
      
      “I passed by his garden, and marked, with one eye,
      How the Owl and the Panther were sharing a pie—”
      
      [later editions continued as follows
      The Panther took pie-crust, and gravy, and meat,
      While the Owl had the dish as its share of the treat.
      When the pie was all finished, the Owl, as a boon,
      Was kindly permitted to pocket the spoon:
      While the Panther received knife and fork with a growl,
      And concluded the banquet—]
      
      
      “What is the use of repeating all that stuff,” the Mock Turtle interrupted, “if you don’t explain it as you go on? It’s by far the most confusing thing I ever heard!”
      
      “Yes, I think you’d better leave off,” said the Gryphon: and Alice was only too glad to do so.
      
      “Shall we try another figure of the Lobster Quadrille?” the Gryphon went on. “Or would you like the Mock Turtle to sing you a song?”
      
      “Oh, a song, please, if the Mock Turtle would be so kind,” Alice replied, so eagerly that the Gryphon said, in a rather offended tone, “Hm! No accounting for tastes! Sing her ‘Turtle Soup,’ will you, old fellow?”
      
      The Mock Turtle sighed deeply, and began, in a voice sometimes choked with sobs, to sing this:—
      
      “Beautiful Soup, so rich and green,
      Waiting in a hot tureen!
      Who for such dainties would not stoop?
      Soup of the evening, beautiful Soup!
      Soup of the evening, beautiful Soup!
          Beau—ootiful Soo—oop!
          Beau—ootiful Soo—oop!
      Soo—oop of the e—e—evening,
          Beautiful, beautiful Soup!
      
      “Beautiful Soup! Who cares for fish,
      Game, or any other dish?
      Who would not give all else for two p
      ennyworth only of beautiful Soup?
      Pennyworth only of beautiful Soup?
          Beau—ootiful Soo—oop!
          Beau—ootiful Soo—oop!
      Soo—oop of the e—e—evening,
          Beautiful, beauti—FUL SOUP!”
      
      
      “Chorus again!” cried the Gryphon, and the Mock Turtle had just begun to repeat it, when a cry of “The trial’s beginning!” was heard in the distance.
      
      “Come on!” cried the Gryphon, and, taking Alice by the hand, it hurried off, without waiting for the end of the song.
      
      “What trial is it?” Alice panted as she ran; but the Gryphon only answered “Come on!” and ran the faster, while more and more faintly came, carried on the breeze that followed them, the melancholy words:—
      
      “Soo—oop of the e—e—evening,
          Beautiful, beautiful Soup!”` },
      { chapter: 11, title: 'Chapter 11 — Who Stole the Tarts?',            content: `The King and Queen of Hearts were seated on their throne when they arrived, with a great crowd assembled about them—all sorts of little birds and beasts, as well as the whole pack of cards: the Knave was standing before them, in chains, with a soldier on each side to guard him; and near the King was the White Rabbit, with a trumpet in one hand, and a scroll of parchment in the other. In the very middle of the court was a table, with a large dish of tarts upon it: they looked so good, that it made Alice quite hungry to look at them—“I wish they’d get the trial done,” she thought, “and hand round the refreshments!” But there seemed to be no chance of this, so she began looking at everything about her, to pass away the time.

      Alice had never been in a court of justice before, but she had read about them in books, and she was quite pleased to find that she knew the name of nearly everything there. “That’s the judge,” she said to herself, “because of his great wig.”
      
      The judge, by the way, was the King; and as he wore his crown over the wig, (look at the frontispiece if you want to see how he did it,) he did not look at all comfortable, and it was certainly not becoming.
      
      “And that’s the jury-box,” thought Alice, “and those twelve creatures,” (she was obliged to say “creatures,” you see, because some of them were animals, and some were birds,) “I suppose they are the jurors.” She said this last word two or three times over to herself, being rather proud of it: for she thought, and rightly too, that very few little girls of her age knew the meaning of it at all. However, “jury-men” would have done just as well.
      
      The twelve jurors were all writing very busily on slates. “What are they doing?” Alice whispered to the Gryphon. “They can’t have anything to put down yet, before the trial’s begun.”
      
      “They’re putting down their names,” the Gryphon whispered in reply, “for fear they should forget them before the end of the trial.”
      
      “Stupid things!” Alice began in a loud, indignant voice, but she stopped hastily, for the White Rabbit cried out, “Silence in the court!” and the King put on his spectacles and looked anxiously round, to make out who was talking.
      
      Alice could see, as well as if she were looking over their shoulders, that all the jurors were writing down “stupid things!” on their slates, and she could even make out that one of them didn’t know how to spell “stupid,” and that he had to ask his neighbour to tell him. “A nice muddle their slates’ll be in before the trial’s over!” thought Alice.
      
      One of the jurors had a pencil that squeaked. This of course, Alice could not stand, and she went round the court and got behind him, and very soon found an opportunity of taking it away. She did it so quickly that the poor little juror (it was Bill, the Lizard) could not make out at all what had become of it; so, after hunting all about for it, he was obliged to write with one finger for the rest of the day; and this was of very little use, as it left no mark on the slate.
      
      “Herald, read the accusation!” said the King.
      
      On this the White Rabbit blew three blasts on the trumpet, and then unrolled the parchment scroll, and read as follows:—
      
      “The Queen of Hearts, she made some tarts,
          All on a summer day:
      The Knave of Hearts, he stole those tarts,
          And took them quite away!”
      
      
      “Consider your verdict,” the King said to the jury.
      
      “Not yet, not yet!” the Rabbit hastily interrupted. “There’s a great deal to come before that!”
      
      “Call the first witness,” said the King; and the White Rabbit blew three blasts on the trumpet, and called out, “First witness!”
      
      The first witness was the Hatter. He came in with a teacup in one hand and a piece of bread-and-butter in the other. “I beg pardon, your Majesty,” he began, “for bringing these in: but I hadn’t quite finished my tea when I was sent for.”
      
      “You ought to have finished,” said the King. “When did you begin?”
      
      The Hatter looked at the March Hare, who had followed him into the court, arm-in-arm with the Dormouse. “Fourteenth of March, I think it was,” he said.
      
      “Fifteenth,” said the March Hare.
      
      “Sixteenth,” added the Dormouse.
      
      “Write that down,” the King said to the jury, and the jury eagerly wrote down all three dates on their slates, and then added them up, and reduced the answer to shillings and pence.
      
      “Take off your hat,” the King said to the Hatter.
      
      “It isn’t mine,” said the Hatter.
      
      “Stolen!” the King exclaimed, turning to the jury, who instantly made a memorandum of the fact.
      
      “I keep them to sell,” the Hatter added as an explanation; “I’ve none of my own. I’m a hatter.”
      
      Here the Queen put on her spectacles, and began staring at the Hatter, who turned pale and fidgeted.
      
      “Give your evidence,” said the King; “and don’t be nervous, or I’ll have you executed on the spot.”
      
      This did not seem to encourage the witness at all: he kept shifting from one foot to the other, looking uneasily at the Queen, and in his confusion he bit a large piece out of his teacup instead of the bread-and-butter.
      
      Just at this moment Alice felt a very curious sensation, which puzzled her a good deal until she made out what it was: she was beginning to grow larger again, and she thought at first she would get up and leave the court; but on second thoughts she decided to remain where she was as long as there was room for her.
      
      “I wish you wouldn’t squeeze so,” said the Dormouse, who was sitting next to her. “I can hardly breathe.”
      
      “I can’t help it,” said Alice very meekly: “I’m growing.”
      
      “You’ve no right to grow here,” said the Dormouse.
      
      “Don’t talk nonsense,” said Alice more boldly: “you know you’re growing too.”
      
      “Yes, but I grow at a reasonable pace,” said the Dormouse: “not in that ridiculous fashion.” And he got up very sulkily and crossed over to the other side of the court.
      
      All this time the Queen had never left off staring at the Hatter, and, just as the Dormouse crossed the court, she said to one of the officers of the court, “Bring me the list of the singers in the last concert!” on which the wretched Hatter trembled so, that he shook both his shoes off.
      
      “Give your evidence,” the King repeated angrily, “or I’ll have you executed, whether you’re nervous or not.”
      
      “I’m a poor man, your Majesty,” the Hatter began, in a trembling voice, “—and I hadn’t begun my tea—not above a week or so—and what with the bread-and-butter getting so thin—and the twinkling of the tea—”
      
      “The twinkling of the what?” said the King.
      
      “It began with the tea,” the Hatter replied.
      
      “Of course twinkling begins with a T!” said the King sharply. “Do you take me for a dunce? Go on!”
      
      “I’m a poor man,” the Hatter went on, “and most things twinkled after that—only the March Hare said—”
      
      “I didn’t!” the March Hare interrupted in a great hurry.
      
      “You did!” said the Hatter.
      
      “I deny it!” said the March Hare.
      
      “He denies it,” said the King: “leave out that part.”
      
      “Well, at any rate, the Dormouse said—” the Hatter went on, looking anxiously round to see if he would deny it too: but the Dormouse denied nothing, being fast asleep.
      
      “After that,” continued the Hatter, “I cut some more bread-and-butter—”
      
      “But what did the Dormouse say?” one of the jury asked.
      
      “That I can’t remember,” said the Hatter.
      
      “You must remember,” remarked the King, “or I’ll have you executed.”
      
      The miserable Hatter dropped his teacup and bread-and-butter, and went down on one knee. “I’m a poor man, your Majesty,” he began.
      
      “You’re a very poor speaker,” said the King.
      
      Here one of the guinea-pigs cheered, and was immediately suppressed by the officers of the court. (As that is rather a hard word, I will just explain to you how it was done. They had a large canvas bag, which tied up at the mouth with strings: into this they slipped the guinea-pig, head first, and then sat upon it.)
      
      “I’m glad I’ve seen that done,” thought Alice. “I’ve so often read in the newspapers, at the end of trials, “There was some attempts at applause, which was immediately suppressed by the officers of the court,” and I never understood what it meant till now.”
      
      “If that’s all you know about it, you may stand down,” continued the King.
      
      “I can’t go no lower,” said the Hatter: “I’m on the floor, as it is.”
      
      “Then you may sit down,” the King replied.
      
      Here the other guinea-pig cheered, and was suppressed.
      
      “Come, that finished the guinea-pigs!” thought Alice. “Now we shall get on better.”
      
      “I’d rather finish my tea,” said the Hatter, with an anxious look at the Queen, who was reading the list of singers.
      
      “You may go,” said the King, and the Hatter hurriedly left the court, without even waiting to put his shoes on.
      
      “—and just take his head off outside,” the Queen added to one of the officers: but the Hatter was out of sight before the officer could get to the door.
      
      “Call the next witness!” said the King.
      
      The next witness was the Duchess’s cook. She carried the pepper-box in her hand, and Alice guessed who it was, even before she got into the court, by the way the people near the door began sneezing all at once.
      
      “Give your evidence,” said the King.
      
      “Shan’t,” said the cook.
      
      The King looked anxiously at the White Rabbit, who said in a low voice, “Your Majesty must cross-examine this witness.”
      
      “Well, if I must, I must,” the King said, with a melancholy air, and, after folding his arms and frowning at the cook till his eyes were nearly out of sight, he said in a deep voice, “What are tarts made of?”
      
      “Pepper, mostly,” said the cook.
      
      “Treacle,” said a sleepy voice behind her.
      
      “Collar that Dormouse,” the Queen shrieked out. “Behead that Dormouse! Turn that Dormouse out of court! Suppress him! Pinch him! Off with his whiskers!”
      
      For some minutes the whole court was in confusion, getting the Dormouse turned out, and, by the time they had settled down again, the cook had disappeared.
      
      “Never mind!” said the King, with an air of great relief. “Call the next witness.” And he added in an undertone to the Queen, “Really, my dear, you must cross-examine the next witness. It quite makes my forehead ache!”
      
      Alice watched the White Rabbit as he fumbled over the list, feeling very curious to see what the next witness would be like, “—for they haven’t got much evidence yet,” she said to herself. Imagine her surprise, when the White Rabbit read out, at the top of his shrill little voice, the name “Alice!”ㅍ` },
      { chapter: 12, title: "Chapter 12 — Alice's Evidence",                content: `“Here!” cried Alice, quite forgetting in the flurry of the moment how large she had grown in the last few minutes, and she jumped up in such a hurry that she tipped over the jury-box with the edge of her skirt, upsetting all the jurymen on to the heads of the crowd below, and there they lay sprawling about, reminding her very much of a globe of goldfish she had accidentally upset the week before.

      “Oh, I beg your pardon!” she exclaimed in a tone of great dismay, and began picking them up again as quickly as she could, for the accident of the goldfish kept running in her head, and she had a vague sort of idea that they must be collected at once and put back into the jury-box, or they would die.
      
      “The trial cannot proceed,” said the King in a very grave voice, “until all the jurymen are back in their proper places—all,” he repeated with great emphasis, looking hard at Alice as he said so.
      
      Alice looked at the jury-box, and saw that, in her haste, she had put the Lizard in head downwards, and the poor little thing was waving its tail about in a melancholy way, being quite unable to move. She soon got it out again, and put it right; “not that it signifies much,” she said to herself; “I should think it would be quite as much use in the trial one way up as the other.”
      
      As soon as the jury had a little recovered from the shock of being upset, and their slates and pencils had been found and handed back to them, they set to work very diligently to write out a history of the accident, all except the Lizard, who seemed too much overcome to do anything but sit with its mouth open, gazing up into the roof of the court.
      
      “What do you know about this business?” the King said to Alice.
      
      “Nothing,” said Alice.
      
      “Nothing whatever?” persisted the King.
      
      “Nothing whatever,” said Alice.
      
      “That’s very important,” the King said, turning to the jury. They were just beginning to write this down on their slates, when the White Rabbit interrupted: “Unimportant, your Majesty means, of course,” he said in a very respectful tone, but frowning and making faces at him as he spoke.
      
      “Unimportant, of course, I meant,” the King hastily said, and went on to himself in an undertone, “important—unimportant—unimportant—important—” as if he were trying which word sounded best.
      
      Some of the jury wrote it down “important,” and some “unimportant.” Alice could see this, as she was near enough to look over their slates; “but it doesn’t matter a bit,” she thought to herself.
      
      At this moment the King, who had been for some time busily writing in his note-book, cackled out “Silence!” and read out from his book, “Rule Forty-two. All persons more than a mile high to leave the court.”
      
      Everybody looked at Alice.
      
      “I’m not a mile high,” said Alice.
      
      “You are,” said the King.
      
      “Nearly two miles high,” added the Queen.
      
      “Well, I shan’t go, at any rate,” said Alice: “besides, that’s not a regular rule: you invented it just now.”
      
      “It’s the oldest rule in the book,” said the King.
      
      “Then it ought to be Number One,” said Alice.
      
      The King turned pale, and shut his note-book hastily. “Consider your verdict,” he said to the jury, in a low, trembling voice.
      
      “There’s more evidence to come yet, please your Majesty,” said the White Rabbit, jumping up in a great hurry; “this paper has just been picked up.”
      
      “What’s in it?” said the Queen.
      
      “I haven’t opened it yet,” said the White Rabbit, “but it seems to be a letter, written by the prisoner to—to somebody.”
      
      “It must have been that,” said the King, “unless it was written to nobody, which isn’t usual, you know.”
      
      “Who is it directed to?” said one of the jurymen.
      
      “It isn’t directed at all,” said the White Rabbit; “in fact, there’s nothing written on the outside.” He unfolded the paper as he spoke, and added “It isn’t a letter, after all: it’s a set of verses.”
      
      “Are they in the prisoner’s handwriting?” asked another of the jurymen.
      
      “No, they’re not,” said the White Rabbit, “and that’s the queerest thing about it.” (The jury all looked puzzled.)
      
      “He must have imitated somebody else’s hand,” said the King. (The jury all brightened up again.)
      
      “Please your Majesty,” said the Knave, “I didn’t write it, and they can’t prove I did: there’s no name signed at the end.”
      
      “If you didn’t sign it,” said the King, “that only makes the matter worse. You must have meant some mischief, or else you’d have signed your name like an honest man.”
      
      There was a general clapping of hands at this: it was the first really clever thing the King had said that day.
      
      “That proves his guilt,” said the Queen.
      
      “It proves nothing of the sort!” said Alice. “Why, you don’t even know what they’re about!”
      
      “Read them,” said the King.
      
      The White Rabbit put on his spectacles. “Where shall I begin, please your Majesty?” he asked.
      
      “Begin at the beginning,” the King said gravely, “and go on till you come to the end: then stop.”
      
      These were the verses the White Rabbit read:—
      
      “They told me you had been to her,
          And mentioned me to him:
      She gave me a good character,
          But said I could not swim.
      
      He sent them word I had not gone
          (We know it to be true):
      If she should push the matter on,
          What would become of you?
      
      I gave her one, they gave him two,
          You gave us three or more;
      They all returned from him to you,
          Though they were mine before.
      
      If I or she should chance to be
          Involved in this affair,
      He trusts to you to set them free,
          Exactly as we were.
      
      My notion was that you had been
          (Before she had this fit)
      An obstacle that came between
          Him, and ourselves, and it.
      
      Don’t let him know she liked them best,
          For this must ever be
      A secret, kept from all the rest,
          Between yourself and me.”
      
      
      “That’s the most important piece of evidence we’ve heard yet,” said the King, rubbing his hands; “so now let the jury—”
      
      “If any one of them can explain it,” said Alice, (she had grown so large in the last few minutes that she wasn’t a bit afraid of interrupting him,) “I’ll give him sixpence. I don’t believe there’s an atom of meaning in it.”
      
      The jury all wrote down on their slates, “She doesn’t believe there’s an atom of meaning in it,” but none of them attempted to explain the paper.
      
      “If there’s no meaning in it,” said the King, “that saves a world of trouble, you know, as we needn’t try to find any. And yet I don’t know,” he went on, spreading out the verses on his knee, and looking at them with one eye; “I seem to see some meaning in them, after all. “—said I could not swim—” you can’t swim, can you?” he added, turning to the Knave.
      
      The Knave shook his head sadly. “Do I look like it?” he said. (Which he certainly did not, being made entirely of cardboard.)
      
      “All right, so far,” said the King, and he went on muttering over the verses to himself: “‘We know it to be true—’ that’s the jury, of course—‘I gave her one, they gave him two—’ why, that must be what he did with the tarts, you know—”
      
      “But, it goes on ‘they all returned from him to you,’” said Alice.
      
      “Why, there they are!” said the King triumphantly, pointing to the tarts on the table. “Nothing can be clearer than that. Then again—‘before she had this fit—’ you never had fits, my dear, I think?” he said to the Queen.
      
      “Never!” said the Queen furiously, throwing an inkstand at the Lizard as she spoke. (The unfortunate little Bill had left off writing on his slate with one finger, as he found it made no mark; but he now hastily began again, using the ink, that was trickling down his face, as long as it lasted.)
      
      “Then the words don’t fit you,” said the King, looking round the court with a smile. There was a dead silence.
      
      “It’s a pun!” the King added in an offended tone, and everybody laughed, “Let the jury consider their verdict,” the King said, for about the twentieth time that day.
      
      “No, no!” said the Queen. “Sentence first—verdict afterwards.”
      
      “Stuff and nonsense!” said Alice loudly. “The idea of having the sentence first!”
      
      “Hold your tongue!” said the Queen, turning purple.
      
      “I won’t!” said Alice.
      
      “Off with her head!” the Queen shouted at the top of her voice. Nobody moved.
      
      “Who cares for you?” said Alice, (she had grown to her full size by this time.) “You’re nothing but a pack of cards!”
      
      At this the whole pack rose up into the air, and came flying down upon her: she gave a little scream, half of fright and half of anger, and tried to beat them off, and found herself lying on the bank, with her head in the lap of her sister, who was gently brushing away some dead leaves that had fluttered down from the trees upon her face.
      
      “Wake up, Alice dear!” said her sister; “Why, what a long sleep you’ve had!”
      
      “Oh, I’ve had such a curious dream!” said Alice, and she told her sister, as well as she could remember them, all these strange Adventures of hers that you have just been reading about; and when she had finished, her sister kissed her, and said, “It was a curious dream, dear, certainly: but now run in to your tea; it’s getting late.” So Alice got up and ran off, thinking while she ran, as well she might, what a wonderful dream it had been.
      
      
      But her sister sat still just as she left her, leaning her head on her hand, watching the setting sun, and thinking of little Alice and all her wonderful Adventures, till she too began dreaming after a fashion, and this was her dream:—
      
      First, she dreamed of little Alice herself, and once again the tiny hands were clasped upon her knee, and the bright eager eyes were looking up into hers—she could hear the very tones of her voice, and see that queer little toss of her head to keep back the wandering hair that would always get into her eyes—and still as she listened, or seemed to listen, the whole place around her became alive with the strange creatures of her little sister’s dream.
      
      The long grass rustled at her feet as the White Rabbit hurried by—the frightened Mouse splashed his way through the neighbouring pool—she could hear the rattle of the teacups as the March Hare and his friends shared their never-ending meal, and the shrill voice of the Queen ordering off her unfortunate guests to execution—once more the pig-baby was sneezing on the Duchess’s knee, while plates and dishes crashed around it—once more the shriek of the Gryphon, the squeaking of the Lizard’s slate-pencil, and the choking of the suppressed guinea-pigs, filled the air, mixed up with the distant sobs of the miserable Mock Turtle.
      
      So she sat on, with closed eyes, and half believed herself in Wonderland, though she knew she had but to open them again, and all would change to dull reality—the grass would be only rustling in the wind, and the pool rippling to the waving of the reeds—the rattling teacups would change to tinkling sheep-bells, and the Queen’s shrill cries to the voice of the shepherd boy—and the sneeze of the baby, the shriek of the Gryphon, and all the other queer noises, would change (she knew) to the confused clamour of the busy farm-yard—while the lowing of the cattle in the distance would take the place of the Mock Turtle’s heavy sobs.
      
      Lastly, she pictured to herself how this same little sister of hers would, in the after-time, be herself a grown woman; and how she would keep, through all her riper years, the simple and loving heart of her childhood: and how she would gather about her other little children, and make their eyes bright and eager with many a strange tale, perhaps even with the dream of Wonderland of long ago: and how she would feel with all their simple sorrows, and find a pleasure in all their simple joys, remembering her own child-life, and the happy summer days.
      
      THE END` },
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     03. THE ADVENTURES OF SHERLOCK HOLMES — Arthur Conan Doyle (1892)
     12 stories
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'sherlock-holmes',
    title: 'The Adventures of Sherlock Holmes - A Scandal in Bohemia',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'short',
    chapters: [
      { chapter:  1, title: 'A Scandal in Bohemia I',                      content: `

      To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.
      
      I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drowsiness of the drug, and the fierce energy of his own keen nature. He was still, as ever, deeply attracted by the study of crime, and occupied his immense faculties and extraordinary powers of observation in following out those clues, and clearing up those mysteries which had been abandoned as hopeless by the official police. From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of the daily press, I knew little of my former friend and companion.
      
      One night—it was on the twentieth of March, 1888—I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to know how he was employing his extraordinary powers. His rooms were brilliantly lit, and, even as I looked up, I saw his tall, spare figure pass twice in a dark silhouette against the blind. He was pacing the room swiftly, eagerly, with his head sunk upon his chest and his hands clasped behind him. To me, who knew his every mood and habit, his attitude and manner told their own story. He was at work again. He had risen out of his drug-created dreams and was hot upon the scent of some new problem. I rang the bell and was shown up to the chamber which had formerly been in part my own.
      
      His manner was not effusive. It seldom was; but he was glad, I think, to see me. With hardly a word spoken, but with a kindly eye, he waved me to an armchair, threw across his case of cigars, and indicated a spirit case and a gasogene in the corner. Then he stood before the fire and looked me over in his singular introspective fashion.
      
      “Wedlock suits you,” he remarked. “I think, Watson, that you have put on seven and a half pounds since I saw you.”
      
      “Seven!” I answered.
      
      “Indeed, I should have thought a little more. Just a trifle more, I fancy, Watson. And in practice again, I observe. You did not tell me that you intended to go into harness.”
      
      “Then, how do you know?”
      
      “I see it, I deduce it. How do I know that you have been getting yourself very wet lately, and that you have a most clumsy and careless servant girl?”
      
      “My dear Holmes,” said I, “this is too much. You would certainly have been burned, had you lived a few centuries ago. It is true that I had a country walk on Thursday and came home in a dreadful mess, but as I have changed my clothes I can’t imagine how you deduce it. As to Mary Jane, she is incorrigible, and my wife has given her notice, but there, again, I fail to see how you work it out.”
      
      He chuckled to himself and rubbed his long, nervous hands together.
      
      “It is simplicity itself,” said he; “my eyes tell me that on the inside of your left shoe, just where the firelight strikes it, the leather is scored by six almost parallel cuts. Obviously they have been caused by someone who has very carelessly scraped round the edges of the sole in order to remove crusted mud from it. Hence, you see, my double deduction that you had been out in vile weather, and that you had a particularly malignant boot-slitting specimen of the London slavey. As to your practice, if a gentleman walks into my rooms smelling of iodoform, with a black mark of nitrate of silver upon his right forefinger, and a bulge on the right side of his top-hat to show where he has secreted his stethoscope, I must be dull, indeed, if I do not pronounce him to be an active member of the medical profession.”
      
      I could not help laughing at the ease with which he explained his process of deduction. “When I hear you give your reasons,” I remarked, “the thing always appears to me to be so ridiculously simple that I could easily do it myself, though at each successive instance of your reasoning I am baffled until you explain your process. And yet I believe that my eyes are as good as yours.”
      
      “Quite so,” he answered, lighting a cigarette, and throwing himself down into an armchair. “You see, but you do not observe. The distinction is clear. For example, you have frequently seen the steps which lead up from the hall to this room.”
      
      “Frequently.”
      
      “How often?”
      
      “Well, some hundreds of times.”
      
      “Then how many are there?”
      
      “How many? I don’t know.”
      
      “Quite so! You have not observed. And yet you have seen. That is just my point. Now, I know that there are seventeen steps, because I have both seen and observed. By the way, since you are interested in these little problems, and since you are good enough to chronicle one or two of my trifling experiences, you may be interested in this.” He threw over a sheet of thick, pink-tinted notepaper which had been lying open upon the table. “It came by the last post,” said he. “Read it aloud.”
      
      The note was undated, and without either signature or address.
      
      “There will call upon you to-night, at a quarter to eight o’clock,” it said, “a gentleman who desires to consult you upon a matter of the very deepest moment. Your recent services to one of the royal houses of Europe have shown that you are one who may safely be trusted with matters which are of an importance which can hardly be exaggerated. This account of you we have from all quarters received. Be in your chamber then at that hour, and do not take it amiss if your visitor wear a mask.”
      
      “This is indeed a mystery,” I remarked. “What do you imagine that it means?”
      
      “I have no data yet. It is a capital mistake to theorise before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts. But the note itself. What do you deduce from it?”
      
      I carefully examined the writing, and the paper upon which it was written.
      
      “The man who wrote it was presumably well to do,” I remarked, endeavouring to imitate my companion’s processes. “Such paper could not be bought under half a crown a packet. It is peculiarly strong and stiff.”
      
      “Peculiar—that is the very word,” said Holmes. “It is not an English paper at all. Hold it up to the light.”
      
      I did so, and saw a large “E” with a small “g,” a “P,” and a large “G” with a small “t” woven into the texture of the paper.
      
      “What do you make of that?” asked Holmes.
      
      “The name of the maker, no doubt; or his monogram, rather.”
      
      “Not at all. The ‘G’ with the small ‘t’ stands for ‘Gesellschaft,’ which is the German for ‘Company.’ It is a customary contraction like our ‘Co.’ ‘P,’ of course, stands for ‘Papier.’ Now for the ‘Eg.’ Let us glance at our Continental Gazetteer.” He took down a heavy brown volume from his shelves. “Eglow, Eglonitz—here we are, Egria. It is in a German-speaking country—in Bohemia, not far from Carlsbad. ‘Remarkable as being the scene of the death of Wallenstein, and for its numerous glass-factories and paper-mills.’ Ha, ha, my boy, what do you make of that?” His eyes sparkled, and he sent up a great blue triumphant cloud from his cigarette.
      
      “The paper was made in Bohemia,” I said.
      
      “Precisely. And the man who wrote the note is a German. Do you note the peculiar construction of the sentence—‘This account of you we have from all quarters received.’ A Frenchman or Russian could not have written that. It is the German who is so uncourteous to his verbs. It only remains, therefore, to discover what is wanted by this German who writes upon Bohemian paper and prefers wearing a mask to showing his face. And here he comes, if I am not mistaken, to resolve all our doubts.”
      
      As he spoke there was the sharp sound of horses’ hoofs and grating wheels against the curb, followed by a sharp pull at the bell. Holmes whistled.
      
      “A pair, by the sound,” said he. “Yes,” he continued, glancing out of the window. “A nice little brougham and a pair of beauties. A hundred and fifty guineas apiece. There’s money in this case, Watson, if there is nothing else.”
      
      “I think that I had better go, Holmes.”
      
      “Not a bit, Doctor. Stay where you are. I am lost without my Boswell. And this promises to be interesting. It would be a pity to miss it.”
      
      “But your client—”
      
      “Never mind him. I may want your help, and so may he. Here he comes. Sit down in that armchair, Doctor, and give us your best attention.”
      
      A slow and heavy step, which had been heard upon the stairs and in the passage, paused immediately outside the door. Then there was a loud and authoritative tap.
      
      “Come in!” said Holmes.
      
      A man entered who could hardly have been less than six feet six inches in height, with the chest and limbs of a Hercules. His dress was rich with a richness which would, in England, be looked upon as akin to bad taste. Heavy bands of astrakhan were slashed across the sleeves and fronts of his double-breasted coat, while the deep blue cloak which was thrown over his shoulders was lined with flame-coloured silk and secured at the neck with a brooch which consisted of a single flaming beryl. Boots which extended halfway up his calves, and which were trimmed at the tops with rich brown fur, completed the impression of barbaric opulence which was suggested by his whole appearance. He carried a broad-brimmed hat in his hand, while he wore across the upper part of his face, extending down past the cheekbones, a black vizard mask, which he had apparently adjusted that very moment, for his hand was still raised to it as he entered. From the lower part of the face he appeared to be a man of strong character, with a thick, hanging lip, and a long, straight chin suggestive of resolution pushed to the length of obstancy.
      
      “You had my note?” he asked with a deep harsh voice and a strongly marked German accent. “I told you that I would call.” He looked from one to the other of us, as if uncertain which to address.
      
      “Pray take a seat,” said Holmes. “This is my friend and colleague, Dr. Watson, who is occasionally good enough to help me in my cases. Whom have I the honour to address?”
      
      “You may address me as the Count Von Kramm, a Bohemian nobleman. I understand that this gentleman, your friend, is a man of honour and discretion, whom I may trust with a matter of the most extreme importance. If not, I should much prefer to communicate with you alone.”
      
      I rose to go, but Holmes caught me by the wrist and pushed me back into my chair. “It is both, or none,” said he. “You may say before this gentleman anything which you may say to me.”
      
      The Count shrugged his broad shoulders. “Then I must begin,” said he, “by binding you both to absolute secrecy for two years; at the end of that time the matter will be of no importance. At present it is not too much to say that it is of such weight it may have an influence upon European history.”
      
      “I promise,” said Holmes.
      
      “And I.”
      
      “You will excuse this mask,” continued our strange visitor. “The august person who employs me wishes his agent to be unknown to you, and I may confess at once that the title by which I have just called myself is not exactly my own.”
      
      “I was aware of it,” said Holmes dryly.
      
      “The circumstances are of great delicacy, and every precaution has to be taken to quench what might grow to be an immense scandal and seriously compromise one of the reigning families of Europe. To speak plainly, the matter implicates the great House of Ormstein, hereditary kings of Bohemia.”
      
      “I was also aware of that,” murmured Holmes, settling himself down in his armchair and closing his eyes.
      
      Our visitor glanced with some apparent surprise at the languid, lounging figure of the man who had been no doubt depicted to him as the most incisive reasoner and most energetic agent in Europe. Holmes slowly reopened his eyes and looked impatiently at his gigantic client.
      
      “If your Majesty would condescend to state your case,” he remarked, “I should be better able to advise you.”
      
      The man sprang from his chair and paced up and down the room in uncontrollable agitation. Then, with a gesture of desperation, he tore the mask from his face and hurled it upon the ground. “You are right,” he cried; “I am the King. Why should I attempt to conceal it?”
      
      “Why, indeed?” murmured Holmes. “Your Majesty had not spoken before I was aware that I was addressing Wilhelm Gottsreich Sigismond von Ormstein, Grand Duke of Cassel-Felstein, and hereditary King of Bohemia.”
      
      “But you can understand,” said our strange visitor, sitting down once more and passing his hand over his high white forehead, “you can understand that I am not accustomed to doing such business in my own person. Yet the matter was so delicate that I could not confide it to an agent without putting myself in his power. I have come incognito from Prague for the purpose of consulting you.”
      
      “Then, pray consult,” said Holmes, shutting his eyes once more.
      
      “The facts are briefly these: Some five years ago, during a lengthy visit to Warsaw, I made the acquaintance of the well-known adventuress, Irene Adler. The name is no doubt familiar to you.”
      
      “Kindly`},
      { chapter:  2, title: 'A Scandal in Bohemia II',                     content: `

      At three o’clock precisely I was at Baker Street, but Holmes had not yet returned. The landlady informed me that he had left the house shortly after eight o’clock in the morning. I sat down beside the fire, however, with the intention of awaiting him, however long he might be. I was already deeply interested in his inquiry, for, though it was surrounded by none of the grim and strange features which were associated with the two crimes which I have already recorded, still, the nature of the case and the exalted station of his client gave it a character of its own. Indeed, apart from the nature of the investigation which my friend had on hand, there was something in his masterly grasp of a situation, and his keen, incisive reasoning, which made it a pleasure to me to study his system of work, and to follow the quick, subtle methods by which he disentangled the most inextricable mysteries. So accustomed was I to his invariable success that the very possibility of his failing had ceased to enter into my head.
      
      It was close upon four before the door opened, and a drunken-looking groom, ill-kempt and side-whiskered, with an inflamed face and disreputable clothes, walked into the room. Accustomed as I was to my friend’s amazing powers in the use of disguises, I had to look three times before I was certain that it was indeed he. With a nod he vanished into the bedroom, whence he emerged in five minutes tweed-suited and respectable, as of old. Putting his hands into his pockets, he stretched out his legs in front of the fire and laughed heartily for some minutes.
      
      “Well, really!” he cried, and then he choked and laughed again until he was obliged to lie back, limp and helpless, in the chair.
      
      “What is it?”
      
      “It’s quite too funny. I am sure you could never guess how I employed my morning, or what I ended by doing.”
      
      “I can’t imagine. I suppose that you have been watching the habits, and perhaps the house, of Miss Irene Adler.”
      
      “Quite so; but the sequel was rather unusual. I will tell you, however. I left the house a little after eight o’clock this morning in the character of a groom out of work. There is a wonderful sympathy and freemasonry among horsey men. Be one of them, and you will know all that there is to know. I soon found Briony Lodge. It is a bijou villa, with a garden at the back, but built out in front right up to the road, two stories. Chubb lock to the door. Large sitting-room on the right side, well furnished, with long windows almost to the floor, and those preposterous English window fasteners which a child could open. Behind there was nothing remarkable, save that the passage window could be reached from the top of the coach-house. I walked round it and examined it closely from every point of view, but without noting anything else of interest.
      
      “I then lounged down the street and found, as I expected, that there was a mews in a lane which runs down by one wall of the garden. I lent the ostlers a hand in rubbing down their horses, and received in exchange twopence, a glass of half-and-half, two fills of shag tobacco, and as much information as I could desire about Miss Adler, to say nothing of half a dozen other people in the neighbourhood in whom I was not in the least interested, but whose biographies I was compelled to listen to.”
      
      “And what of Irene Adler?” I asked.
      
      “Oh, she has turned all the men’s heads down in that part. She is the daintiest thing under a bonnet on this planet. So say the Serpentine-mews, to a man. She lives quietly, sings at concerts, drives out at five every day, and returns at seven sharp for dinner. Seldom goes out at other times, except when she sings. Has only one male visitor, but a good deal of him. He is dark, handsome, and dashing, never calls less than once a day, and often twice. He is a Mr. Godfrey Norton, of the Inner Temple. See the advantages of a cabman as a confidant. They had driven him home a dozen times from Serpentine-mews, and knew all about him. When I had listened to all they had to tell, I began to walk up and down near Briony Lodge once more, and to think over my plan of campaign.
      
      “This Godfrey Norton was evidently an important factor in the matter. He was a lawyer. That sounded ominous. What was the relation between them, and what the object of his repeated visits? Was she his client, his friend, or his mistress? If the former, she had probably transferred the photograph to his keeping. If the latter, it was less likely. On the issue of this question depended whether I should continue my work at Briony Lodge, or turn my attention to the gentleman’s chambers in the Temple. It was a delicate point, and it widened the field of my inquiry. I fear that I bore you with these details, but I have to let you see my little difficulties, if you are to understand the situation.”
      
      “I am following you closely,” I answered.
      
      “I was still balancing the matter in my mind when a hansom cab drove up to Briony Lodge, and a gentleman sprang out. He was a remarkably handsome man, dark, aquiline, and moustached—evidently the man of whom I had heard. He appeared to be in a great hurry, shouted to the cabman to wait, and brushed past the maid who opened the door with the air of a man who was thoroughly at home.
      
      “He was in the house about half an hour, and I could catch glimpses of him in the windows of the sitting-room, pacing up and down, talking excitedly, and waving his arms. Of her I could see nothing. Presently he emerged, looking even more flurried than before. As he stepped up to the cab, he pulled a gold watch from his pocket and looked at it earnestly, ‘Drive like the devil,’ he shouted, ‘first to Gross & Hankey’s in Regent Street, and then to the Church of St. Monica in the Edgeware Road. Half a guinea if you do it in twenty minutes!’
      
      “Away they went, and I was just wondering whether I should not do well to follow them when up the lane came a neat little landau, the coachman with his coat only half-buttoned, and his tie under his ear, while all the tags of his harness were sticking out of the buckles. It hadn’t pulled up before she shot out of the hall door and into it. I only caught a glimpse of her at the moment, but she was a lovely woman, with a face that a man might die for.
      
      “‘The Church of St. Monica, John,’ she cried, ‘and half a sovereign if you reach it in twenty minutes.’
      
      “This was quite too good to lose, Watson. I was just balancing whether I should run for it, or whether I should perch behind her landau when a cab came through the street. The driver looked twice at such a shabby fare, but I jumped in before he could object. ‘The Church of St. Monica,’ said I, ‘and half a sovereign if you reach it in twenty minutes.’ It was twenty-five minutes to twelve, and of course it was clear enough what was in the wind.
      
      “My cabby drove fast. I don’t think I ever drove faster, but the others were there before us. The cab and the landau with their steaming horses were in front of the door when I arrived. I paid the man and hurried into the church. There was not a soul there save the two whom I had followed and a surpliced clergyman, who seemed to be expostulating with them. They were all three standing in a knot in front of the altar. I lounged up the side aisle like any other idler who has dropped into a church. Suddenly, to my surprise, the three at the altar faced round to me, and Godfrey Norton came running as hard as he could towards me.
      
      “‘Thank God,’ he cried. ‘You’ll do. Come! Come!’
      
      “‘What then?’ I asked.
      
      “‘Come, man, come, only three minutes, or it won’t be legal.’
      
      “I was half-dragged up to the altar, and before I knew where I was I found myself mumbling responses which were whispered in my ear, and vouching for things of which I knew nothing, and generally assisting in the secure tying up of Irene Adler, spinster, to Godfrey Norton, bachelor. It was all done in an instant, and there was the gentleman thanking me on the one side and the lady on the other, while the clergyman beamed on me in front. It was the most preposterous position in which I ever found myself in my life, and it was the thought of it that started me laughing just now. It seems that there had been some informality about their license, that the clergyman absolutely refused to marry them without a witness of some sort, and that my lucky appearance saved the bridegroom from having to sally out into the streets in search of a best man. The bride gave me a sovereign, and I mean to wear it on my watch chain in memory of the occasion.”
      
      “This is a very unexpected turn of affairs,” said I; “and what then?”
      
      “Well, I found my plans very seriously menaced. It looked as if the pair might take an immediate departure, and so necessitate very prompt and energetic measures on my part. At the church door, however, they separated, he driving back to the Temple, and she to her own house. ‘I shall drive out in the park at five as usual,’ she said as she left him. I heard no more. They drove away in different directions, and I went off to make my own arrangements.”
      
      “Which are?”
      
      “Some cold beef and a glass of beer,” he answered, ringing the bell. “I have been too busy to think of food, and I am likely to be busier still this evening. By the way, Doctor, I shall want your co-operation.”
      
      “I shall be delighted.”
      
      “You don’t mind breaking the law?”
      
      “Not in the least.”
      
      “Nor running a chance of arrest?”
      
      “Not in a good cause.”
      
      “Oh, the cause is excellent!”
      
      “Then I am your man.”
      
      “I was sure that I might rely on you.”
      
      “But what is it you wish?”
      
      “When Mrs. Turner has brought in the tray I will make it clear to you. Now,” he said as he turned hungrily on the simple fare that our landlady had provided, “I must discuss it while I eat, for I have not much time. It is nearly five now. In two hours we must be on the scene of action. Miss Irene, or Madame, rather, returns from her drive at seven. We must be at Briony Lodge to meet her.”
      
      “And what then?”
      
      “You must leave that to me. I have already arranged what is to occur. There is only one point on which I must insist. You must not interfere, come what may. You understand?”
      
      “I am to be neutral?”
      
      “To do nothing whatever. There will probably be some small unpleasantness. Do not join in it. It will end in my being conveyed into the house. Four or five minutes afterwards the sitting-room window will open. You are to station yourself close to that open window.”
      
      “Yes.”
      
      “You are to watch me, for I will be visible to you.”
      
      “Yes.”
      
      “And when I raise my hand—so—you will throw into the room what I give you to throw, and will, at the same time, raise the cry of fire. You quite follow me?”
      
      “Entirely.”
      
      “It is nothing very formidable,” he said, taking a long cigar-shaped roll from his pocket. “It is an ordinary plumber’s smoke-rocket, fitted with a cap at either end to make it self-lighting. Your task is confined to that. When you raise your cry of fire, it will be taken up by quite a number of people. You may then walk to the end of the street, and I will rejoin you in ten minutes. I hope that I have made myself clear?”
      
      “I am to remain neutral, to get near the window, to watch you, and at the signal to throw in this object, then to raise the cry of fire, and to wait you at the corner of the street.”
      
      “Precisely.”
      
      “Then you may entirely rely on me.”
      
      “That is excellent. I think, perhaps, it is almost time that I prepare for the new role I have to play.”
      
      He disappeared into his bedroom and returned in a few minutes in the character of an amiable and simple-minded Nonconformist clergyman. His broad black hat, his baggy trousers, his white tie, his sympathetic smile, and general look of peering and benevolent curiosity were such as Mr. John Hare alone could have equalled. It was not merely that Holmes changed his costume. His expression, his manner, his very soul seemed to vary with every fresh part that he assumed. The stage lost a fine actor, even as science lost an acute reasoner, when he became a specialist in crime.
      
      It was a quarter past six when we left Baker Street, and it still wanted ten minutes to the hour when we found ourselves in Serpentine Avenue. It was already dusk, and the lamps were just being lighted as we paced up and down in front of Briony Lodge, waiting for the coming of its occupant. The house was just such as I had pictured it from Sherlock Holmes’ succinct description, but the locality appeared to be less private than I expected. On the contrary, for a small street in a quiet neighbourhood, it was remarkably animated. There was a group of shabbily dressed men smoking and laughing in a corner, a scissors-grinder with his wheel, two guardsmen who were flirting with a nurse-girl, and several well-dressed young men who were lounging up and down with cigars in their mouths.
      
      “You see,” remarked Holmes, as we paced to and fro in front of the house, “this marriage rather simplifies matters. The photograph becomes a double-edged weapon now. The chances are that she would be as averse to its being seen by Mr. Godfrey Norton, as our client is to its coming to the eyes of his princess. Now the question is, Where are we to find the photograph?”
      
      “Where, indeed?”
      
      “It is most unlikely that she carries it about with her. It is cabinet size. Too large for easy concealment about a woman’s dress. She knows that the King is capable of having her waylaid and searched. Two attempts of the sort have already been made. We may take it, then, that she does not carry it about with her.”
      
      “Where, then?”
      
      “Her banker or her lawyer. There is that double possibility. But I am inclined to think neither. Women are naturally secretive, and they like to do their own secreting. Why should she hand it over to anyone else? She could trust her own guardianship, but she could not tell what indirect or political influence might be brought to bear upon a business man. Besides, remember that she had resolved to use it within a few days. It must be where she can lay her hands upon it. It must be in her own house.”
      
      “But it has twice been burgled.”
      
      “Pshaw! They did not know how to look.”
      
      “But how will you look?”
      
      “I will not look.”
      
      “What then?”
      
      “I will get her to show me.”
      
      “But she will refuse.”
      
      “She will not be able to. But I hear the rumble of wheels. It is her carriage. Now carry out my orders to the letter.”
      
      As he spoke the gleam of the sidelights of a carriage came round the curve of the avenue. It was a smart little landau which rattled up to the door of Briony Lodge. As it pulled up, one of the loafing men at the corner dashed forward to open the door in the hope of earning a copper, but was elbowed away by another loafer, who had rushed up with the same intention. A fierce quarrel broke out, which was increased by the two guardsmen, who took sides with one of the loungers, and by the scissors-grinder, who was equally hot upon the other side. A blow was struck, and in an instant the lady, who had stepped from her carriage, was the centre of a little knot of flushed and struggling men, who struck savagely at each other with their fists and sticks. Holmes dashed into the crowd to protect the lady; but, just as he reached her, he gave a cry and dropped to the ground, with the blood running freely down his face. At his fall the guardsmen took to their heels in one direction and the loungers in the other, while a number of better dressed people, who had watched the scuffle without taking part in it, crowded in to help the lady and to attend to the injured man. Irene Adler, as I will still call her, had hurried up the steps; but she stood at the top with her superb figure outlined against the lights of the hall, looking back into the street.
      
      “Is the poor gentleman much hurt?” she asked.
      
      “He is dead,” cried several voices.
      
      “No, no, there’s life in him!” shouted another. “But he’ll be gone before you can get him to hospital.”
      
      “He’s a brave fellow,” said a woman. “They would have had the lady’s purse and watch if it hadn’t been for him. They were a gang, and a rough one, too. Ah, he’s breathing now.”
      
      “He can’t lie in the street. May we bring him in, marm?”
      
      “Surely. Bring him into the sitting-room. There is a comfortable sofa. This way, please!”
      
      Slowly and solemnly he was borne into Briony Lodge and laid out in the principal room, while I still observed the proceedings from my post by the window. The lamps had been lit, but the blinds had not been drawn, so that I could see Holmes as he lay upon the couch. I do not know whether he was seized with compunction at that moment for the part he was playing, but I know that I never felt more heartily ashamed of myself in my life than when I saw the beautiful creature against whom I was conspiring, or the grace and kindliness with which she waited upon the injured man. And yet it would be the blackest treachery to Holmes to draw back now from the part which he had intrusted to me. I hardened my heart, and took the smoke-rocket from under my ulster. After all, I thought, we are not injuring her. We are but preventing her from injuring another.
      
      Holmes had sat up upon the couch, and I saw him motion like a man who is in need of air. A mouth rushed across and threw open the window. At the same instant I saw him raise his hand and at the signal I tossed my rocket into the room with a cry of “Fire!” The word was no sooner out of my mouth than the whole crowd of spectators, well dressed and ill—gentlemen, ostlers, and servant maids—joined in a general shriek of “Fire!” Thick clouds of smoke curled through the room and out at the open window. I caught a glimpse of rushing figures, and a moment later the voice of Holmes from within assuring them that it was a false alarm. Slipping through the shouting crowd I made my way to the corner of the street, and in ten minutes was rejoiced to find my friend’s arm in mine, and to get away from the scene of uproar. He walked swiftly and in silence for some few minutes until we had turned down one of the quiet streets which lead towards the Edgeware Road.
      
      “You did it very nicely, Doctor,” he remarked. “Nothing could have been better. It is all right.”
      
      “You have the photograph?”
      
      “I know where it is.”
      
      “And how did you find out?”
      
      “She showed me, as I told you she would.”
      
      “I am still in the dark.”
      
      “I do not wish to make a mystery,” said he, laughing. “The matter was perfectly simple. You, of course, saw that everyone in the street was an accomplice. They were all engaged for the evening.”
      
      “I guessed as much.”
      
      “Then, when the row broke out, I had a little moist red paint in the palm of my hand. I rushed forward, fell down, clapped my hand to my face, and became a piteous spectacle. It is an old trick.”
      
      “That also I could fathom.”
      
      “Then they carried me in. She was bound to have me in. What else could she do? And into her sitting-room, which was the very room which I suspected. It lay between that and her bedroom, and I was determined to see which. They laid me on a couch, I motioned for air, they were compelled to open the window, and you had your chance.”
      
      “How did that help you?”
      
      “It was all-important. When a woman thinks that her house is on fire, her instinct is at once to rush to the thing which she values most. It is a perfectly overpowering impulse, and I have more than once taken advantage of it. In the case of the Darlington Substitution Scandal it was of use to me, and also in the Arnsworth Castle business. A married woman grabs at her baby; an unmarried one reaches for her jewel-box. Now it was clear to me that our lady of to-day had nothing in the house more precious to her than what we are in quest of. She would rush to secure it. The alarm of fire was admirably done. The smoke and shouting were enough to shake nerves of steel. She responded beautifully. The photograph is in a recess behind a sliding panel just above the right bell-pull. She was there in an instant, and I caught a glimpse of it as she half drew it out. When I cried out that it was a false alarm, she replaced it, glanced at the rocket, rushed from the room, and I have not seen her since. I rose, and, making my excuses, escaped from the house. I hesitated whether to attempt to secure the photograph at once; but the coachman had come in, and as he was watching me narrowly, it seemed safer to wait. A little over-precipitance may ruin all.”
      
      “And now?” I asked.
      
      “Our quest is practically finished. I shall call with the King to-morrow, and with you, if you care to come with us. We will be shown into the sitting-room to wait for the lady, but it is probable that when she comes she may find neither us nor the photograph. It might be a satisfaction to his Majesty to regain it with his own hands.”
      
      “And when will you call?”
      
      “At eight in the morning. She will not be up, so that we shall have a clear field. Besides, we must be prompt, for this marriage may mean a complete change in her life and habits. I must wire to the King without delay.”
      
      We had reached Baker Street and had stopped at the door. He was searching his pockets for the key when someone passing said:
      
      “Good-night, Mister Sherlock Holmes.”
      
      There were several people on the pavement at the time, but the greeting appeared to come from a slim youth in an ulster who had hurried by.
      
      “I’ve heard that voice before,” said Holmes, staring down the dimly lit street. “Now, I wonder who the deuce that could have been.”` },
      { chapter:  3, title: 'A Scandal in Bohemia III',                        content: `III.

      I slept at Baker Street that night, and we were engaged upon our toast and coffee in the morning when the King of Bohemia rushed into the room.
      
      “You have really got it!” he cried, grasping Sherlock Holmes by either shoulder and looking eagerly into his face.
      
      “Not yet.”
      
      “But you have hopes?”
      
      “I have hopes.”
      
      “Then, come. I am all impatience to be gone.”
      
      “We must have a cab.”
      
      “No, my brougham is waiting.”
      
      “Then that will simplify matters.” We descended and started off once more for Briony Lodge.
      
      “Irene Adler is married,” remarked Holmes.
      
      “Married! When?”
      
      “Yesterday.”
      
      “But to whom?”
      
      “To an English lawyer named Norton.”
      
      “But she could not love him.”
      
      “I am in hopes that she does.”
      
      “And why in hopes?”
      
      “Because it would spare your Majesty all fear of future annoyance. If the lady loves her husband, she does not love your Majesty. If she does not love your Majesty, there is no reason why she should interfere with your Majesty’s plan.”
      
      “It is true. And yet—! Well! I wish she had been of my own station! What a queen she would have made!” He relapsed into a moody silence, which was not broken until we drew up in Serpentine Avenue.
      
      The door of Briony Lodge was open, and an elderly woman stood upon the steps. She watched us with a sardonic eye as we stepped from the brougham.
      
      “Mr. Sherlock Holmes, I believe?” said she.
      
      “I am Mr. Holmes,” answered my companion, looking at her with a questioning and rather startled gaze.
      
      “Indeed! My mistress told me that you were likely to call. She left this morning with her husband by the 5:15 train from Charing Cross for the Continent.”
      
      “What!” Sherlock Holmes staggered back, white with chagrin and surprise. “Do you mean that she has left England?”
      
      “Never to return.”
      
      “And the papers?” asked the King hoarsely. “All is lost.”
      
      “We shall see.” He pushed past the servant and rushed into the drawing-room, followed by the King and myself. The furniture was scattered about in every direction, with dismantled shelves and open drawers, as if the lady had hurriedly ransacked them before her flight. Holmes rushed at the bell-pull, tore back a small sliding shutter, and, plunging in his hand, pulled out a photograph and a letter. The photograph was of Irene Adler herself in evening dress, the letter was superscribed to “Sherlock Holmes, Esq. To be left till called for.” My friend tore it open, and we all three read it together. It was dated at midnight of the preceding night and ran in this way:
      
      “MY DEAR MR. SHERLOCK HOLMES,—You really did it very well. You took me in completely. Until after the alarm of fire, I had not a suspicion. But then, when I found how I had betrayed myself, I began to think. I had been warned against you months ago. I had been told that, if the King employed an agent, it would certainly be you. And your address had been given me. Yet, with all this, you made me reveal what you wanted to know. Even after I became suspicious, I found it hard to think evil of such a dear, kind old clergyman. But, you know, I have been trained as an actress myself. Male costume is nothing new to me. I often take advantage of the freedom which it gives. I sent John, the coachman, to watch you, ran upstairs, got into my walking clothes, as I call them, and came down just as you departed.
      
      “Well, I followed you to your door, and so made sure that I was really an object of interest to the celebrated Mr. Sherlock Holmes. Then I, rather imprudently, wished you good-night, and started for the Temple to see my husband.
      
      “We both thought the best resource was flight, when pursued by so formidable an antagonist; so you will find the nest empty when you call to-morrow. As to the photograph, your client may rest in peace. I love and am loved by a better man than he. The King may do what he will without hindrance from one whom he has cruelly wronged. I keep it only to safeguard myself, and to preserve a weapon which will always secure me from any steps which he might take in the future. I leave a photograph which he might care to possess; and I remain, dear Mr. Sherlock Holmes,
      
      “Very truly yours,
      “IRENE NORTON, née ADLER.”
      
      “What a woman—oh, what a woman!” cried the King of Bohemia, when we had all three read this epistle. “Did I not tell you how quick and resolute she was? Would she not have made an admirable queen? Is it not a pity that she was not on my level?”
      
      “From what I have seen of the lady, she seems, indeed, to be on a very different level to your Majesty,” said Holmes coldly. “I am sorry that I have not been able to bring your Majesty’s business to a more successful conclusion.”
      
      “On the contrary, my dear sir,” cried the King; “nothing could be more successful. I know that her word is inviolate. The photograph is now as safe as if it were in the fire.”
      
      “I am glad to hear your Majesty say so.”
      
      “I am immensely indebted to you. Pray tell me in what way I can reward you. This ring—” He slipped an emerald snake ring from his finger and held it out upon the palm of his hand.
      
      “Your Majesty has something which I should value even more highly,” said Holmes.
      
      “You have but to name it.”
      
      “This photograph!”
      
      The King stared at him in amazement.
      
      “Irene’s photograph!” he cried. “Certainly, if you wish it.”
      
      “I thank your Majesty. Then there is no more to be done in the matter. I have the honour to wish you a very good morning.” He bowed, and, turning away without observing the hand which the King had stretched out to him, he set off in my company for his chambers.
      
      And that was how a great scandal threatened to affect the kingdom of Bohemia, and how the best plans of Mr. Sherlock Holmes were beaten by a woman’s wit. He used to make merry over the cleverness of women, but I have not heard him do it of late. And when he speaks of Irene Adler, or when he refers to her photograph, it is always under the honourable title of the woman.` },
      
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
      { chapter: 1, title: 'Chapter 1', content: `I

      In my younger and more vulnerable years my father gave me some advice
      that I’ve been turning over in my mind ever since.
      
      “Whenever you feel like criticizing anyone,” he told me, “just
      remember that all the people in this world haven’t had the advantages
      that you’ve had.”
      
      He didn’t say any more, but we’ve always been unusually communicative
      in a reserved way, and I understood that he meant a great deal more
      than that. In consequence, I’m inclined to reserve all judgements, a
      habit that has opened up many curious natures to me and also made me
      the victim of not a few veteran bores. The abnormal mind is quick to
      detect and attach itself to this quality when it appears in a normal
      person, and so it came about that in college I was unjustly accused of
      being a politician, because I was privy to the secret griefs of wild,
      unknown men. Most of the confidences were unsought—frequently I have
      feigned sleep, preoccupation, or a hostile levity when I realized by
      some unmistakable sign that an intimate revelation was quivering on
      the horizon; for the intimate revelations of young men, or at least
      the terms in which they express them, are usually plagiaristic and
      marred by obvious suppressions. Reserving judgements is a matter of
      infinite hope. I am still a little afraid of missing something if I
      forget that, as my father snobbishly suggested, and I snobbishly
      repeat, a sense of the fundamental decencies is parcelled out
      unequally at birth.
      
      And, after boasting this way of my tolerance, I come to the admission
      that it has a limit. Conduct may be founded on the hard rock or the
      wet marshes, but after a certain point I don’t care what it’s founded
      on. When I came back from the East last autumn I felt that I wanted
      the world to be in uniform and at a sort of moral attention forever; I
      wanted no more riotous excursions with privileged glimpses into the
      human heart. Only Gatsby, the man who gives his name to this book, was
      exempt from my reaction—Gatsby, who represented everything for which I
      have an unaffected scorn. If personality is an unbroken series of
      successful gestures, then there was something gorgeous about him, some
      heightened sensitivity to the promises of life, as if he were related
      to one of those intricate machines that register earthquakes ten
      thousand miles away. This responsiveness had nothing to do with that
      flabby impressionability which is dignified under the name of the
      “creative temperament”—it was an extraordinary gift for hope, a
      romantic readiness such as I have never found in any other person and
      which it is not likely I shall ever find again. No—Gatsby turned out
      all right at the end; it is what preyed on Gatsby, what foul dust
      floated in the wake of his dreams that temporarily closed out my
      interest in the abortive sorrows and short-winded elations of men.
      
      ------------------------------------------------------------------------
      
      My family have been prominent, well-to-do people in this Middle
      Western city for three generations. The Carraways are something of a
      clan, and we have a tradition that we’re descended from the Dukes of
      Buccleuch, but the actual founder of my line was my grandfather’s
      brother, who came here in fifty-one, sent a substitute to the Civil
      War, and started the wholesale hardware business that my father
      carries on today.
      
      I never saw this great-uncle, but I’m supposed to look like him—with
      special reference to the rather hard-boiled painting that hangs in
      father’s office. I graduated from New Haven in 1915, just a quarter of
      a century after my father, and a little later I participated in that
      delayed Teutonic migration known as the Great War. I enjoyed the
      counter-raid so thoroughly that I came back restless. Instead of being
      the warm centre of the world, the Middle West now seemed like the
      ragged edge of the universe—so I decided to go East and learn the bond
      business. Everybody I knew was in the bond business, so I supposed it
      could support one more single man. All my aunts and uncles talked it
      over as if they were choosing a prep school for me, and finally said,
      “Why—ye-es,” with very grave, hesitant faces. Father agreed to finance
      me for a year, and after various delays I came East, permanently, I
      thought, in the spring of twenty-two.
      
      The practical thing was to find rooms in the city, but it was a warm
      season, and I had just left a country of wide lawns and friendly
      trees, so when a young man at the office suggested that we take a
      house together in a commuting town, it sounded like a great idea. He
      found the house, a weather-beaten cardboard bungalow at eighty a
      month, but at the last minute the firm ordered him to Washington, and
      I went out to the country alone. I had a dog—at least I had him for a
      few days until he ran away—and an old Dodge and a Finnish woman, who
      made my bed and cooked breakfast and muttered Finnish wisdom to
      herself over the electric stove.
      
      It was lonely for a day or so until one morning some man, more
      recently arrived than I, stopped me on the road.
      
      “How do you get to West Egg village?” he asked helplessly.
      
      I told him. And as I walked on I was lonely no longer. I was a guide,
      a pathfinder, an original settler. He had casually conferred on me the
      freedom of the neighbourhood.
      
      And so with the sunshine and the great bursts of leaves growing on the
      trees, just as things grow in fast movies, I had that familiar
      conviction that life was beginning over again with the summer.
      
      There was so much to read, for one thing, and so much fine health to
      be pulled down out of the young breath-giving air. I bought a dozen
      volumes on banking and credit and investment securities, and they
      stood on my shelf in red and gold like new money from the mint,
      promising to unfold the shining secrets that only Midas and Morgan and
      Maecenas knew. And I had the high intention of reading many other
      books besides. I was rather literary in college—one year I wrote a
      series of very solemn and obvious editorials for the Yale News—and now
      I was going to bring back all such things into my life and become
      again that most limited of all specialists, the “well-rounded man.”
      This isn’t just an epigram—life is much more successfully looked at
      from a single window, after all.
      
      It was a matter of chance that I should have rented a house in one of
      the strangest communities in North America. It was on that slender
      riotous island which extends itself due east of New York—and where
      there are, among other natural curiosities, two unusual formations of
      land. Twenty miles from the city a pair of enormous eggs, identical in
      contour and separated only by a courtesy bay, jut out into the most
      domesticated body of salt water in the Western hemisphere, the great
      wet barnyard of Long Island Sound. They are not perfect ovals—like the
      egg in the Columbus story, they are both crushed flat at the contact
      end—but their physical resemblance must be a source of perpetual
      wonder to the gulls that fly overhead. To the wingless a more
      interesting phenomenon is their dissimilarity in every particular
      except shape and size.
      
      I lived at West Egg, the—well, the less fashionable of the two, though
      this is a most superficial tag to express the bizarre and not a little
      sinister contrast between them. My house was at the very tip of the
      egg, only fifty yards from the Sound, and squeezed between two huge
      places that rented for twelve or fifteen thousand a season. The one on
      my right was a colossal affair by any standard—it was a factual
      imitation of some Hôtel de Ville in Normandy, with a tower on one
      side, spanking new under a thin beard of raw ivy, and a marble
      swimming pool, and more than forty acres of lawn and garden. It was
      Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a
      mansion inhabited by a gentleman of that name. My own house was an
      eyesore, but it was a small eyesore, and it had been overlooked, so I
      had a view of the water, a partial view of my neighbour’s lawn, and
      the consoling proximity of millionaires—all for eighty dollars a
      month.
      
      Across the courtesy bay the white palaces of fashionable East Egg
      glittered along the water, and the history of the summer really begins
      on the evening I drove over there to have dinner with the Tom
      Buchanans. Daisy was my second cousin once removed, and I’d known Tom
      in college. And just after the war I spent two days with them in
      Chicago.
      
      Her husband, among various physical accomplishments, had been one of
      the most powerful ends that ever played football at New Haven—a
      national figure in a way, one of those men who reach such an acute
      limited excellence at twenty-one that everything afterward savours of
      anticlimax. His family were enormously wealthy—even in college his
      freedom with money was a matter for reproach—but now he’d left Chicago
      and come East in a fashion that rather took your breath away: for
      instance, he’d brought down a string of polo ponies from Lake
      Forest. It was hard to realize that a man in my own generation was
      wealthy enough to do that.
      
      Why they came East I don’t know. They had spent a year in France for
      no particular reason, and then drifted here and there unrestfully
      wherever people played polo and were rich together. This was a
      permanent move, said Daisy over the telephone, but I didn’t believe
      it—I had no sight into Daisy’s heart, but I felt that Tom would drift
      on forever seeking, a little wistfully, for the dramatic turbulence of
      some irrecoverable football game.
      
      And so it happened that on a warm windy evening I drove over to East
      Egg to see two old friends whom I scarcely knew at all. Their house
      was even more elaborate than I expected, a cheerful red-and-white
      Georgian Colonial mansion, overlooking the bay. The lawn started at
      the beach and ran towards the front door for a quarter of a mile,
      jumping over sundials and brick walks and burning gardens—finally when
      it reached the house drifting up the side in bright vines as though
      from the momentum of its run. The front was broken by a line of French
      windows, glowing now with reflected gold and wide open to the warm
      windy afternoon, and Tom Buchanan in riding clothes was standing with
      his legs apart on the front porch.
      
      He had changed since his New Haven years. Now he was a sturdy
      straw-haired man of thirty, with a rather hard mouth and a
      supercilious manner. Two shining arrogant eyes had established
      dominance over his face and gave him the appearance of always leaning
      aggressively forward. Not even the effeminate swank of his riding
      clothes could hide the enormous power of that body—he seemed to fill
      those glistening boots until he strained the top lacing, and you could
      see a great pack of muscle shifting when his shoulder moved under his
      thin coat. It was a body capable of enormous leverage—a cruel body.
      
      His speaking voice, a gruff husky tenor, added to the impression of
      fractiousness he conveyed. There was a touch of paternal contempt in
      it, even toward people he liked—and there were men at New Haven who
      had hated his guts.
      
      “Now, don’t think my opinion on these matters is final,” he seemed to
      say, “just because I’m stronger and more of a man than you are.” We
      were in the same senior society, and while we were never intimate I
      always had the impression that he approved of me and wanted me to like
      him with some harsh, defiant wistfulness of his own.
      
      We talked for a few minutes on the sunny porch.
      
      “I’ve got a nice place here,” he said, his eyes flashing about
      restlessly.
      
      Turning me around by one arm, he moved a broad flat hand along the
      front vista, including in its sweep a sunken Italian garden, a half
      acre of deep, pungent roses, and a snub-nosed motorboat that bumped
      the tide offshore.
      
      “It belonged to Demaine, the oil man.” He turned me around again,
      politely and abruptly. “We’ll go inside.”
      
      We walked through a high hallway into a bright rosy-coloured space,
      fragilely bound into the house by French windows at either end. The
      windows were ajar and gleaming white against the fresh grass outside
      that seemed to grow a little way into the house. A breeze blew through
      the room, blew curtains in at one end and out the other like pale
      flags, twisting them up toward the frosted wedding-cake of the
      ceiling, and then rippled over the wine-coloured rug, making a shadow
      on it as wind does on the sea.
      
      The only completely stationary object in the room was an enormous
      couch on which two young women were buoyed up as though upon an
      anchored balloon. They were both in white, and their dresses were
      rippling and fluttering as if they had just been blown back in after a
      short flight around the house. I must have stood for a few moments
      listening to the whip and snap of the curtains and the groan of a
      picture on the wall. Then there was a boom as Tom Buchanan shut the
      rear windows and the caught wind died out about the room, and the
      curtains and the rugs and the two young women ballooned slowly to the
      floor.
      
      The younger of the two was a stranger to me. She was extended full
      length at her end of the divan, completely motionless, and with her
      chin raised a little, as if she were balancing something on it which
      was quite likely to fall. If she saw me out of the corner of her eyes
      she gave no hint of it—indeed, I was almost surprised into murmuring
      an apology for having disturbed her by coming in.
      
      The other girl, Daisy, made an attempt to rise—she leaned slightly
      forward with a conscientious expression—then she laughed, an absurd,
      charming little laugh, and I laughed too and came forward into the
      room.
      
      “I’m p-paralysed with happiness.”
      
      She laughed again, as if she said something very witty, and held my
      hand for a moment, looking up into my face, promising that there was
      no one in the world she so much wanted to see. That was a way she
      had. She hinted in a murmur that the surname of the balancing girl was
      Baker. (I’ve heard it said that Daisy’s murmur was only to make people
      lean toward her; an irrelevant criticism that made it no less
      charming.)
      
      At any rate, Miss Baker’s lips fluttered, she nodded at me almost
      imperceptibly, and then quickly tipped her head back again—the object
      she was balancing had obviously tottered a little and given her
      something of a fright. Again a sort of apology arose to my lips.
      Almost any exhibition of complete self-sufficiency draws a stunned
      tribute from me.
      
      I looked back at my cousin, who began to ask me questions in her low,
      thrilling voice. It was the kind of voice that the ear follows up and
      down, as if each speech is an arrangement of notes that will never be
      played again. Her face was sad and lovely with bright things in it,
      bright eyes and a bright passionate mouth, but there was an excitement
      in her voice that men who had cared for her found difficult to forget:
      a singing compulsion, a whispered “Listen,” a promise that she had
      done gay, exciting things just a while since and that there were gay,
      exciting things hovering in the next hour.
      
      I told her how I had stopped off in Chicago for a day on my way East,
      and how a dozen people had sent their love through me.
      
      “Do they miss me?” she cried ecstatically.
      
      “The whole town is desolate. All the cars have the left rear wheel
      painted black as a mourning wreath, and there’s a persistent wail all
      night along the north shore.”
      
      “How gorgeous! Let’s go back, Tom. Tomorrow!” Then she added
      irrelevantly: “You ought to see the baby.”
      
      “I’d like to.”
      
      “She’s asleep. She’s three years old. Haven’t you ever seen her?”
      
      “Never.”
      
      “Well, you ought to see her. She’s—”
      
      Tom Buchanan, who had been hovering restlessly about the room, stopped
      and rested his hand on my shoulder.
      
      “What you doing, Nick?”
      
      “I’m a bond man.”
      
      “Who with?”
      
      I told him.
      
      “Never heard of them,” he remarked decisively.
      
      This annoyed me.
      
      “You will,” I answered shortly. “You will if you stay in the East.”
      
      “Oh, I’ll stay in the East, don’t you worry,” he said, glancing at
      Daisy and then back at me, as if he were alert for something
      more. “I’d be a God damned fool to live anywhere else.”
      
      At this point Miss Baker said: “Absolutely!” with such suddenness that
      I started—it was the first word she had uttered since I came into the
      room. Evidently it surprised her as much as it did me, for she yawned
      and with a series of rapid, deft movements stood up into the room.
      
      “I’m stiff,” she complained, “I’ve been lying on that sofa for as long
      as I can remember.”
      
      “Don’t look at me,” Daisy retorted, “I’ve been trying to get you to
      New York all afternoon.”
      
      “No, thanks,” said Miss Baker to the four cocktails just in from the
      pantry. “I’m absolutely in training.”
      
      Her host looked at her incredulously.
      
      “You are!” He took down his drink as if it were a drop in the bottom
      of a glass. “How you ever get anything done is beyond me.”
      
      I looked at Miss Baker, wondering what it was she “got done.” I
      enjoyed looking at her. She was a slender, small-breasted girl, with
      an erect carriage, which she accentuated by throwing her body backward
      at the shoulders like a young cadet. Her grey sun-strained eyes looked
      back at me with polite reciprocal curiosity out of a wan, charming,
      discontented face. It occurred to me now that I had seen her, or a
      picture of her, somewhere before.
      
      “You live in West Egg,” she remarked contemptuously. “I know somebody
      there.”
      
      “I don’t know a single—”
      
      “You must know Gatsby.”
      
      “Gatsby?” demanded Daisy. “What Gatsby?”
      
      Before I could reply that he was my neighbour dinner was announced;
      wedging his tense arm imperatively under mine, Tom Buchanan compelled
      me from the room as though he were moving a checker to another square.
      
      Slenderly, languidly, their hands set lightly on their hips, the two
      young women preceded us out on to a rosy-coloured porch, open toward
      the sunset, where four candles flickered on the table in the
      diminished wind.
      
      “Why candles?” objected Daisy, frowning. She snapped them out with her
      fingers. “In two weeks it’ll be the longest day in the year.” She
      looked at us all radiantly. “Do you always watch for the longest day
      of the year and then miss it? I always watch for the longest day in
      the year and then miss it.”
      
      “We ought to plan something,” yawned Miss Baker, sitting down at the
      table as if she were getting into bed.
      
      “All right,” said Daisy. “What’ll we plan?” She turned to me
      helplessly: “What do people plan?”
      
      Before I could answer her eyes fastened with an awed expression on her
      little finger.
      
      “Look!” she complained; “I hurt it.”
      
      We all looked—the knuckle was black and blue.
      
      “You did it, Tom,” she said accusingly. “I know you didn’t mean to,
      but you did do it. That’s what I get for marrying a brute of a man, a
      great, big, hulking physical specimen of a—”
      
      “I hate that word ‘hulking,’ ” objected Tom crossly, “even in
      kidding.”
      
      “Hulking,” insisted Daisy.
      
      Sometimes she and Miss Baker talked at once, unobtrusively and with a
      bantering inconsequence that was never quite chatter, that was as cool
      as their white dresses and their impersonal eyes in the absence of all
      desire. They were here, and they accepted Tom and me, making only a
      polite pleasant effort to entertain or to be entertained. They knew
      that presently dinner would be over and a little later the evening too
      would be over and casually put away. It was sharply different from the
      West, where an evening was hurried from phase to phase towards its
      close, in a continually disappointed anticipation or else in sheer
      nervous dread of the moment itself.
      
      “You make me feel uncivilized, Daisy,” I confessed on my second glass
      of corky but rather impressive claret. “Can’t you talk about crops or
      something?”
      
      I meant nothing in particular by this remark, but it was taken up in
      an unexpected way.
      
      “Civilization’s going to pieces,” broke out Tom violently. “I’ve
      gotten to be a terrible pessimist about things. Have you read The Rise
      of the Coloured Empires by this man Goddard?”
      
      “Why, no,” I answered, rather surprised by his tone.
      
      “Well, it’s a fine book, and everybody ought to read it. The idea is
      if we don’t look out the white race will be—will be utterly
      submerged. It’s all scientific stuff; it’s been proved.”
      
      “Tom’s getting very profound,” said Daisy, with an expression of
      unthoughtful sadness. “He reads deep books with long words in
      them. What was that word we—”
      
      “Well, these books are all scientific,” insisted Tom, glancing at her
      impatiently. “This fellow has worked out the whole thing. It’s up to
      us, who are the dominant race, to watch out or these other races will
      have control of things.”
      
      “We’ve got to beat them down,” whispered Daisy, winking ferociously
      toward the fervent sun.
      
      “You ought to live in California—” began Miss Baker, but Tom
      interrupted her by shifting heavily in his chair.
      
      “This idea is that we’re Nordics. I am, and you are, and you are,
      and—” After an infinitesimal hesitation he included Daisy with a
      slight nod, and she winked at me again. “—And we’ve produced all the
      things that go to make civilization—oh, science and art, and all
      that. Do you see?”
      
      There was something pathetic in his concentration, as if his
      complacency, more acute than of old, was not enough to him any more.
      When, almost immediately, the telephone rang inside and the butler
      left the porch Daisy seized upon the momentary interruption and leaned
      towards me.
      
      “I’ll tell you a family secret,” she whispered enthusiastically.
      “It’s about the butler’s nose. Do you want to hear about the butler’s
      nose?”
      
      “That’s why I came over tonight.”
      
      “Well, he wasn’t always a butler; he used to be the silver polisher
      for some people in New York that had a silver service for two hundred
      people. He had to polish it from morning till night, until finally it
      began to affect his nose—”
      
      “Things went from bad to worse,” suggested Miss Baker.
      
      “Yes. Things went from bad to worse, until finally he had to give up
      his position.”
      
      For a moment the last sunshine fell with romantic affection upon her
      glowing face; her voice compelled me forward breathlessly as I
      listened—then the glow faded, each light deserting her with lingering
      regret, like children leaving a pleasant street at dusk.
      
      The butler came back and murmured something close to Tom’s ear,
      whereupon Tom frowned, pushed back his chair, and without a word went
      inside. As if his absence quickened something within her, Daisy leaned
      forward again, her voice glowing and singing.
      
      “I love to see you at my table, Nick. You remind me of a—of a rose, an
      absolute rose. Doesn’t he?” She turned to Miss Baker for confirmation:
      “An absolute rose?”
      
      This was untrue. I am not even faintly like a rose. She was only
      extemporizing, but a stirring warmth flowed from her, as if her heart
      was trying to come out to you concealed in one of those breathless,
      thrilling words. Then suddenly she threw her napkin on the table and
      excused herself and went into the house.
      
      Miss Baker and I exchanged a short glance consciously devoid of
      meaning. I was about to speak when she sat up alertly and said “Sh!”
      in a warning voice. A subdued impassioned murmur was audible in the
      room beyond, and Miss Baker leaned forward unashamed, trying to
      hear. The murmur trembled on the verge of coherence, sank down,
      mounted excitedly, and then ceased altogether.
      
      “This Mr. Gatsby you spoke of is my neighbour—” I began.
      
      “Don’t talk. I want to hear what happens.”
      
      “Is something happening?” I inquired innocently.
      
      “You mean to say you don’t know?” said Miss Baker, honestly surprised.
      “I thought everybody knew.”
      
      “I don’t.”
      
      “Why—” she said hesitantly. “Tom’s got some woman in New York.”
      
      “Got some woman?” I repeated blankly.
      
      Miss Baker nodded.
      
      “She might have the decency not to telephone him at dinner time.
      Don’t you think?”
      
      Almost before I had grasped her meaning there was the flutter of a
      dress and the crunch of leather boots, and Tom and Daisy were back at
      the table.
      
      “It couldn’t be helped!” cried Daisy with tense gaiety.
      
      She sat down, glanced searchingly at Miss Baker and then at me, and
      continued: “I looked outdoors for a minute, and it’s very romantic
      outdoors. There’s a bird on the lawn that I think must be a
      nightingale come over on the Cunard or White Star Line. He’s singing
      away—” Her voice sang: “It’s romantic, isn’t it, Tom?”
      
      “Very romantic,” he said, and then miserably to me: “If it’s light
      enough after dinner, I want to take you down to the stables.”
      
      The telephone rang inside, startlingly, and as Daisy shook her head
      decisively at Tom the subject of the stables, in fact all subjects,
      vanished into air. Among the broken fragments of the last five minutes
      at table I remember the candles being lit again, pointlessly, and I
      was conscious of wanting to look squarely at everyone, and yet to
      avoid all eyes. I couldn’t guess what Daisy and Tom were thinking, but
      I doubt if even Miss Baker, who seemed to have mastered a certain
      hardy scepticism, was able utterly to put this fifth guest’s shrill
      metallic urgency out of mind. To a certain temperament the situation
      might have seemed intriguing—my own instinct was to telephone
      immediately for the police.
      
      The horses, needless to say, were not mentioned again. Tom and Miss
      Baker, with several feet of twilight between them, strolled back into
      the library, as if to a vigil beside a perfectly tangible body, while,
      trying to look pleasantly interested and a little deaf, I followed
      Daisy around a chain of connecting verandas to the porch in front. In
      its deep gloom we sat down side by side on a wicker settee.
      
      Daisy took her face in her hands as if feeling its lovely shape, and
      her eyes moved gradually out into the velvet dusk. I saw that
      turbulent emotions possessed her, so I asked what I thought would be
      some sedative questions about her little girl.
      
      “We don’t know each other very well, Nick,” she said suddenly. “Even
      if we are cousins. You didn’t come to my wedding.”
      
      “I wasn’t back from the war.”
      
      “That’s true.” She hesitated. “Well, I’ve had a very bad time, Nick,
      and I’m pretty cynical about everything.”
      
      Evidently she had reason to be. I waited but she didn’t say any more,
      and after a moment I returned rather feebly to the subject of her
      daughter.
      
      “I suppose she talks, and—eats, and everything.”
      
      “Oh, yes.” She looked at me absently. “Listen, Nick; let me tell you
      what I said when she was born. Would you like to hear?”
      
      “Very much.”
      
      “It’ll show you how I’ve gotten to feel about—things. Well, she was
      less than an hour old and Tom was God knows where. I woke up out of
      the ether with an utterly abandoned feeling, and asked the nurse right
      away if it was a boy or a girl. She told me it was a girl, and so I
      turned my head away and wept. ‘All right,’ I said, ‘I’m glad it’s a
      girl. And I hope she’ll be a fool—that’s the best thing a girl can be
      in this world, a beautiful little fool.’
      
      “You see I think everything’s terrible anyhow,” she went on in a
      convinced way. “Everybody thinks so—the most advanced people. And I
      know. I’ve been everywhere and seen everything and done everything.”
      Her eyes flashed around her in a defiant way, rather like Tom’s, and
      she laughed with thrilling scorn. “Sophisticated—God, I’m
      sophisticated!”
      
      The instant her voice broke off, ceasing to compel my attention, my
      belief, I felt the basic insincerity of what she had said. It made me
      uneasy, as though the whole evening had been a trick of some sort to
      exact a contributory emotion from me. I waited, and sure enough, in a
      moment she looked at me with an absolute smirk on her lovely face, as
      if she had asserted her membership in a rather distinguished secret
      society to which she and Tom belonged.
      
      ------------------------------------------------------------------------
      
      Inside, the crimson room bloomed with light. Tom and Miss Baker sat at
      either end of the long couch and she read aloud to him from the
      Saturday Evening Post—the words, murmurous and uninflected, running
      together in a soothing tune. The lamplight, bright on his boots and
      dull on the autumn-leaf yellow of her hair, glinted along the paper as
      she turned a page with a flutter of slender muscles in her arms.
      
      When we came in she held us silent for a moment with a lifted hand.
      
      “To be continued,” she said, tossing the magazine on the table, “in
      our very next issue.”
      
      Her body asserted itself with a restless movement of her knee, and she
      stood up.
      
      “Ten o’clock,” she remarked, apparently finding the time on the
      ceiling. “Time for this good girl to go to bed.”
      
      “Jordan’s going to play in the tournament tomorrow,” explained Daisy,
      “over at Westchester.”
      
      “Oh—you’re Jordan Baker.”
      
      I knew now why her face was familiar—its pleasing contemptuous
      expression had looked out at me from many rotogravure pictures of the
      sporting life at Asheville and Hot Springs and Palm Beach. I had heard
      some story of her too, a critical, unpleasant story, but what it was I
      had forgotten long ago.
      
      “Good night,” she said softly. “Wake me at eight, won’t you.”
      
      “If you’ll get up.”
      
      “I will. Good night, Mr. Carraway. See you anon.”
      
      “Of course you will,” confirmed Daisy. “In fact I think I’ll arrange a
      marriage. Come over often, Nick, and I’ll sort of—oh—fling you
      together. You know—lock you up accidentally in linen closets and push
      you out to sea in a boat, and all that sort of thing—”
      
      “Good night,” called Miss Baker from the stairs. “I haven’t heard a
      word.”
      
      “She’s a nice girl,” said Tom after a moment. “They oughtn’t to let
      her run around the country this way.”
      
      “Who oughtn’t to?” inquired Daisy coldly.
      
      “Her family.”
      
      “Her family is one aunt about a thousand years old. Besides, Nick’s
      going to look after her, aren’t you, Nick? She’s going to spend lots
      of weekends out here this summer. I think the home influence will be
      very good for her.”
      
      Daisy and Tom looked at each other for a moment in silence.
      
      “Is she from New York?” I asked quickly.
      
      “From Louisville. Our white girlhood was passed together there. Our
      beautiful white—”
      
      “Did you give Nick a little heart to heart talk on the veranda?”
      demanded Tom suddenly.
      
      “Did I?” She looked at me. “I can’t seem to remember, but I think we
      talked about the Nordic race. Yes, I’m sure we did. It sort of crept
      up on us and first thing you know—”
      
      “Don’t believe everything you hear, Nick,” he advised me.
      
      I said lightly that I had heard nothing at all, and a few minutes
      later I got up to go home. They came to the door with me and stood
      side by side in a cheerful square of light. As I started my motor
      Daisy peremptorily called: “Wait!
      
      “I forgot to ask you something, and it’s important. We heard you were
      engaged to a girl out West.”
      
      “That’s right,” corroborated Tom kindly. “We heard that you were
      engaged.”
      
      “It’s a libel. I’m too poor.”
      
      “But we heard it,” insisted Daisy, surprising me by opening up again
      in a flower-like way. “We heard it from three people, so it must be
      true.”
      
      Of course I knew what they were referring to, but I wasn’t even
      vaguely engaged. The fact that gossip had published the banns was one
      of the reasons I had come East. You can’t stop going with an old
      friend on account of rumours, and on the other hand I had no intention
      of being rumoured into marriage.
      
      Their interest rather touched me and made them less remotely
      rich—nevertheless, I was confused and a little disgusted as I drove
      away. It seemed to me that the thing for Daisy to do was to rush out
      of the house, child in arms—but apparently there were no such
      intentions in her head. As for Tom, the fact that he “had some woman
      in New York” was really less surprising than that he had been
      depressed by a book. Something was making him nibble at the edge of
      stale ideas as if his sturdy physical egotism no longer nourished his
      peremptory heart.
      
      Already it was deep summer on roadhouse roofs and in front of wayside
      garages, where new red petrol-pumps sat out in pools of light, and
      when I reached my estate at West Egg I ran the car under its shed and
      sat for a while on an abandoned grass roller in the yard. The wind had
      blown off, leaving a loud, bright night, with wings beating in the
      trees and a persistent organ sound as the full bellows of the earth
      blew the frogs full of life. The silhouette of a moving cat wavered
      across the moonlight, and, turning my head to watch it, I saw that I
      was not alone—fifty feet away a figure had emerged from the shadow of
      my neighbour’s mansion and was standing with his hands in his pockets
      regarding the silver pepper of the stars. Something in his leisurely
      movements and the secure position of his feet upon the lawn suggested
      that it was Mr. Gatsby himself, come out to determine what share was
      his of our local heavens.
      
      I decided to call to him. Miss Baker had mentioned him at dinner, and
      that would do for an introduction. But I didn’t call to him, for he
      gave a sudden intimation that he was content to be alone—he stretched
      out his arms toward the dark water in a curious way, and, far as I was
      from him, I could have sworn he was trembling. Involuntarily I glanced
      seaward—and distinguished nothing except a single green light, minute
      and far away, that might have been the end of a dock. When I looked
      once more for Gatsby he had vanished, and I was alone again in the
      unquiet darkness.
      
      ` },
      { chapter: 2, title: 'Chapter 2', content: `II

      About halfway between West Egg and New York the motor road hastily
      joins the railroad and runs beside it for a quarter of a mile, so as
      to shrink away from a certain desolate area of land. This is a valley
      of ashes—a fantastic farm where ashes grow like wheat into ridges and
      hills and grotesque gardens; where ashes take the forms of houses and
      chimneys and rising smoke and, finally, with a transcendent effort, of
      ash-grey men, who move dimly and already crumbling through the powdery
      air. Occasionally a line of grey cars crawls along an invisible track,
      gives out a ghastly creak, and comes to rest, and immediately the
      ash-grey men swarm up with leaden spades and stir up an impenetrable
      cloud, which screens their obscure operations from your sight.
      
      But above the grey land and the spasms of bleak dust which drift
      endlessly over it, you perceive, after a moment, the eyes of Doctor T.
      J. Eckleburg. The eyes of Doctor T. J. Eckleburg are blue and
      gigantic—their retinas are one yard high. They look out of no face,
      but, instead, from a pair of enormous yellow spectacles which pass
      over a nonexistent nose. Evidently some wild wag of an oculist set
      them there to fatten his practice in the borough of Queens, and then
      sank down himself into eternal blindness, or forgot them and moved
      away. But his eyes, dimmed a little by many paintless days, under sun
      and rain, brood on over the solemn dumping ground.
      
      The valley of ashes is bounded on one side by a small foul river, and,
      when the drawbridge is up to let barges through, the passengers on
      waiting trains can stare at the dismal scene for as long as half an
      hour. There is always a halt there of at least a minute, and it was
      because of this that I first met Tom Buchanan’s mistress.
      
      The fact that he had one was insisted upon wherever he was known. His
      acquaintances resented the fact that he turned up in popular cafés
      with her and, leaving her at a table, sauntered about, chatting with
      whomsoever he knew. Though I was curious to see her, I had no desire
      to meet her—but I did. I went up to New York with Tom on the train one
      afternoon, and when we stopped by the ash-heaps he jumped to his feet
      and, taking hold of my elbow, literally forced me from the car.
      
      “We’re getting off,” he insisted. “I want you to meet my girl.”
      
      I think he’d tanked up a good deal at luncheon, and his determination
      to have my company bordered on violence. The supercilious assumption
      was that on Sunday afternoon I had nothing better to do.
      
      I followed him over a low whitewashed railroad fence, and we walked
      back a hundred yards along the road under Doctor Eckleburg’s
      persistent stare. The only building in sight was a small block of
      yellow brick sitting on the edge of the waste land, a sort of compact
      Main Street ministering to it, and contiguous to absolutely nothing.
      One of the three shops it contained was for rent and another was an
      all-night restaurant, approached by a trail of ashes; the third was a
      garage—Repairs. George B. Wilson. Cars bought and sold.—and I followed
      Tom inside.
      
      The interior was unprosperous and bare; the only car visible was the
      dust-covered wreck of a Ford which crouched in a dim corner. It had
      occurred to me that this shadow of a garage must be a blind, and that
      sumptuous and romantic apartments were concealed overhead, when the
      proprietor himself appeared in the door of an office, wiping his hands
      on a piece of waste. He was a blond, spiritless man, anaemic, and
      faintly handsome. When he saw us a damp gleam of hope sprang into his
      light blue eyes.
      
      “Hello, Wilson, old man,” said Tom, slapping him jovially on the
      shoulder. “How’s business?”
      
      “I can’t complain,” answered Wilson unconvincingly. “When are you
      going to sell me that car?”
      
      “Next week; I’ve got my man working on it now.”
      
      “Works pretty slow, don’t he?”
      
      “No, he doesn’t,” said Tom coldly. “And if you feel that way about it,
      maybe I’d better sell it somewhere else after all.”
      
      “I don’t mean that,” explained Wilson quickly. “I just meant—”
      
      His voice faded off and Tom glanced impatiently around the garage.
      Then I heard footsteps on a stairs, and in a moment the thickish
      figure of a woman blocked out the light from the office door. She was
      in the middle thirties, and faintly stout, but she carried her flesh
      sensuously as some women can. Her face, above a spotted dress of dark
      blue crêpe-de-chine, contained no facet or gleam of beauty, but there
      was an immediately perceptible vitality about her as if the nerves of
      her body were continually smouldering. She smiled slowly and, walking
      through her husband as if he were a ghost, shook hands with Tom,
      looking him flush in the eye. Then she wet her lips, and without
      turning around spoke to her husband in a soft, coarse voice:
      
      “Get some chairs, why don’t you, so somebody can sit down.”
      
      “Oh, sure,” agreed Wilson hurriedly, and went toward the little
      office, mingling immediately with the cement colour of the walls. A
      white ashen dust veiled his dark suit and his pale hair as it veiled
      everything in the vicinity—except his wife, who moved close to Tom.
      
      “I want to see you,” said Tom intently. “Get on the next train.”
      
      “All right.”
      
      “I’ll meet you by the newsstand on the lower level.”
      
      She nodded and moved away from him just as George Wilson emerged with
      two chairs from his office door.
      
      We waited for her down the road and out of sight. It was a few days
      before the Fourth of July, and a grey, scrawny Italian child was
      setting torpedoes in a row along the railroad track.
      
      “Terrible place, isn’t it,” said Tom, exchanging a frown with Doctor
      Eckleburg.
      
      “Awful.”
      
      “It does her good to get away.”
      
      “Doesn’t her husband object?”
      
      “Wilson? He thinks she goes to see her sister in New York. He’s so
      dumb he doesn’t know he’s alive.”
      
      So Tom Buchanan and his girl and I went up together to New York—or not
      quite together, for Mrs. Wilson sat discreetly in another car. Tom
      deferred that much to the sensibilities of those East Eggers who might
      be on the train.
      
      She had changed her dress to a brown figured muslin, which stretched
      tight over her rather wide hips as Tom helped her to the platform in
      New York. At the newsstand she bought a copy of Town Tattle and a
      moving-picture magazine, and in the station drugstore some cold cream
      and a small flask of perfume. Upstairs, in the solemn echoing drive
      she let four taxicabs drive away before she selected a new one,
      lavender-coloured with grey upholstery, and in this we slid out from
      the mass of the station into the glowing sunshine. But immediately she
      turned sharply from the window and, leaning forward, tapped on the
      front glass.
      
      “I want to get one of those dogs,” she said earnestly. “I want to get
      one for the apartment. They’re nice to have—a dog.”
      
      We backed up to a grey old man who bore an absurd resemblance to John
      D. Rockefeller. In a basket swung from his neck cowered a dozen very
      recent puppies of an indeterminate breed.
      
      “What kind are they?” asked Mrs. Wilson eagerly, as he came to the
      taxi-window.
      
      “All kinds. What kind do you want, lady?”
      
      “I’d like to get one of those police dogs; I don’t suppose you got
      that kind?”
      
      The man peered doubtfully into the basket, plunged in his hand and
      drew one up, wriggling, by the back of the neck.
      
      “That’s no police dog,” said Tom.
      
      “No, it’s not exactly a police dog,” said the man with disappointment
      in his voice. “It’s more of an Airedale.” He passed his hand over the
      brown washrag of a back. “Look at that coat. Some coat. That’s a dog
      that’ll never bother you with catching cold.”
      
      “I think it’s cute,” said Mrs. Wilson enthusiastically. “How much is
      it?”
      
      “That dog?” He looked at it admiringly. “That dog will cost you ten
      dollars.”
      
      The Airedale—undoubtedly there was an Airedale concerned in it
      somewhere, though its feet were startlingly white—changed hands and
      settled down into Mrs. Wilson’s lap, where she fondled the
      weatherproof coat with rapture.
      
      “Is it a boy or a girl?” she asked delicately.
      
      “That dog? That dog’s a boy.”
      
      “It’s a bitch,” said Tom decisively. “Here’s your money. Go and buy
      ten more dogs with it.”
      
      We drove over to Fifth Avenue, warm and soft, almost pastoral, on the
      summer Sunday afternoon. I wouldn’t have been surprised to see a great
      flock of white sheep turn the corner.
      
      “Hold on,” I said, “I have to leave you here.”
      
      “No you don’t,” interposed Tom quickly. “Myrtle’ll be hurt if you
      don’t come up to the apartment. Won’t you, Myrtle?”
      
      “Come on,” she urged. “I’ll telephone my sister Catherine. She’s said
      to be very beautiful by people who ought to know.”
      
      “Well, I’d like to, but—”
      
      We went on, cutting back again over the Park toward the West Hundreds.
      At 158th Street the cab stopped at one slice in a long white cake of
      apartment-houses. Throwing a regal homecoming glance around the
      neighbourhood, Mrs. Wilson gathered up her dog and her other
      purchases, and went haughtily in.
      
      “I’m going to have the McKees come up,” she announced as we rose in
      the elevator. “And, of course, I got to call up my sister, too.”
      
      The apartment was on the top floor—a small living-room, a small
      dining-room, a small bedroom, and a bath. The living-room was crowded
      to the doors with a set of tapestried furniture entirely too large for
      it, so that to move about was to stumble continually over scenes of
      ladies swinging in the gardens of Versailles. The only picture was an
      over-enlarged photograph, apparently a hen sitting on a blurred rock.
      Looked at from a distance, however, the hen resolved itself into a
      bonnet, and the countenance of a stout old lady beamed down into the
      room. Several old copies of Town Tattle lay on the table together with
      a copy of Simon Called Peter, and some of the small scandal magazines
      of Broadway. Mrs. Wilson was first concerned with the dog. A reluctant
      elevator boy went for a box full of straw and some milk, to which he
      added on his own initiative a tin of large, hard dog biscuits—one of
      which decomposed apathetically in the saucer of milk all
      afternoon. Meanwhile Tom brought out a bottle of whisky from a locked
      bureau door.
      
      I have been drunk just twice in my life, and the second time was that
      afternoon; so everything that happened has a dim, hazy cast over it,
      although until after eight o’clock the apartment was full of cheerful
      sun. Sitting on Tom’s lap Mrs. Wilson called up several people on the
      telephone; then there were no cigarettes, and I went out to buy some
      at the drugstore on the corner. When I came back they had both
      disappeared, so I sat down discreetly in the living-room and read a
      chapter of Simon Called Peter—either it was terrible stuff or the
      whisky distorted things, because it didn’t make any sense to me.
      
      Just as Tom and Myrtle (after the first drink Mrs. Wilson and I called
      each other by our first names) reappeared, company commenced to arrive
      at the apartment door.
      
      The sister, Catherine, was a slender, worldly girl of about thirty,
      with a solid, sticky bob of red hair, and a complexion powdered milky
      white. Her eyebrows had been plucked and then drawn on again at a more
      rakish angle, but the efforts of nature toward the restoration of the
      old alignment gave a blurred air to her face. When she moved about
      there was an incessant clicking as innumerable pottery bracelets
      jingled up and down upon her arms. She came in with such a proprietary
      haste, and looked around so possessively at the furniture that I
      wondered if she lived here. But when I asked her she laughed
      immoderately, repeated my question aloud, and told me she lived with a
      girl friend at a hotel.
      
      Mr. McKee was a pale, feminine man from the flat below. He had just
      shaved, for there was a white spot of lather on his cheekbone, and he
      was most respectful in his greeting to everyone in the room. He
      informed me that he was in the “artistic game,” and I gathered later
      that he was a photographer and had made the dim enlargement of
      Mrs. Wilson’s mother which hovered like an ectoplasm on the wall. His
      wife was shrill, languid, handsome, and horrible. She told me with
      pride that her husband had photographed her a hundred and twenty-seven
      times since they had been married.
      
      Mrs. Wilson had changed her costume some time before, and was now
      attired in an elaborate afternoon dress of cream-coloured chiffon,
      which gave out a continual rustle as she swept about the room. With
      the influence of the dress her personality had also undergone a
      change. The intense vitality that had been so remarkable in the garage
      was converted into impressive hauteur. Her laughter, her gestures, her
      assertions became more violently affected moment by moment, and as she
      expanded the room grew smaller around her, until she seemed to be
      revolving on a noisy, creaking pivot through the smoky air.
      
      “My dear,” she told her sister in a high, mincing shout, “most of
      these fellas will cheat you every time. All they think of is money. I
      had a woman up here last week to look at my feet, and when she gave me
      the bill you’d of thought she had my appendicitis out.”
      
      “What was the name of the woman?” asked Mrs. McKee.
      
      “Mrs. Eberhardt. She goes around looking at people’s feet in their own
      homes.”
      
      “I like your dress,” remarked Mrs. McKee, “I think it’s adorable.”
      
      Mrs. Wilson rejected the compliment by raising her eyebrow in disdain.
      
      “It’s just a crazy old thing,” she said. “I just slip it on sometimes
      when I don’t care what I look like.”
      
      “But it looks wonderful on you, if you know what I mean,” pursued Mrs.
      McKee. “If Chester could only get you in that pose I think he could
      make something of it.”
      
      We all looked in silence at Mrs. Wilson, who removed a strand of hair
      from over her eyes and looked back at us with a brilliant smile. Mr.
      McKee regarded her intently with his head on one side, and then moved
      his hand back and forth slowly in front of his face.
      
      “I should change the light,” he said after a moment. “I’d like to
      bring out the modelling of the features. And I’d try to get hold of
      all the back hair.”
      
      “I wouldn’t think of changing the light,” cried Mrs. McKee. “I think
      it’s—”
      
      Her husband said “Sh!” and we all looked at the subject again,
      whereupon Tom Buchanan yawned audibly and got to his feet.
      
      “You McKees have something to drink,” he said. “Get some more ice and
      mineral water, Myrtle, before everybody goes to sleep.”
      
      “I told that boy about the ice.” Myrtle raised her eyebrows in despair
      at the shiftlessness of the lower orders. “These people! You have to
      keep after them all the time.”
      
      She looked at me and laughed pointlessly. Then she flounced over to
      the dog, kissed it with ecstasy, and swept into the kitchen, implying
      that a dozen chefs awaited her orders there.
      
      “I’ve done some nice things out on Long Island,” asserted Mr. McKee.
      
      Tom looked at him blankly.
      
      “Two of them we have framed downstairs.”
      
      “Two what?” demanded Tom.
      
      “Two studies. One of them I call Montauk Point—The Gulls, and the
      other I call Montauk Point—The Sea.”
      
      The sister Catherine sat down beside me on the couch.
      
      “Do you live down on Long Island, too?” she inquired.
      
      “I live at West Egg.”
      
      “Really? I was down there at a party about a month ago. At a man named
      Gatsby’s. Do you know him?”
      
      “I live next door to him.”
      
      “Well, they say he’s a nephew or a cousin of Kaiser Wilhelm’s. That’s
      where all his money comes from.”
      
      “Really?”
      
      She nodded.
      
      “I’m scared of him. I’d hate to have him get anything on me.”
      
      This absorbing information about my neighbour was interrupted by Mrs.
      McKee’s pointing suddenly at Catherine:
      
      “Chester, I think you could do something with her,” she broke out, but
      Mr. McKee only nodded in a bored way, and turned his attention to Tom.
      
      “I’d like to do more work on Long Island, if I could get the entry.
      All I ask is that they should give me a start.”
      
      “Ask Myrtle,” said Tom, breaking into a short shout of laughter as
      Mrs. Wilson entered with a tray. “She’ll give you a letter of
      introduction, won’t you, Myrtle?”
      
      “Do what?” she asked, startled.
      
      “You’ll give McKee a letter of introduction to your husband, so he can
      do some studies of him.” His lips moved silently for a moment as he
      invented, “ ‘George B. Wilson at the Gasoline Pump,’ or something like
      that.”
      
      Catherine leaned close to me and whispered in my ear:
      
      “Neither of them can stand the person they’re married to.”
      
      “Can’t they?”
      
      “Can’t stand them.” She looked at Myrtle and then at Tom. “What I say
      is, why go on living with them if they can’t stand them? If I was them
      I’d get a divorce and get married to each other right away.”
      
      “Doesn’t she like Wilson either?”
      
      The answer to this was unexpected. It came from Myrtle, who had
      overheard the question, and it was violent and obscene.
      
      “You see,” cried Catherine triumphantly. She lowered her voice again.
      “It’s really his wife that’s keeping them apart. She’s a Catholic, and
      they don’t believe in divorce.”
      
      Daisy was not a Catholic, and I was a little shocked at the
      elaborateness of the lie.
      
      “When they do get married,” continued Catherine, “they’re going West
      to live for a while until it blows over.”
      
      “It’d be more discreet to go to Europe.”
      
      “Oh, do you like Europe?” she exclaimed surprisingly. “I just got back
      from Monte Carlo.”
      
      “Really.”
      
      “Just last year. I went over there with another girl.”
      
      “Stay long?”
      
      “No, we just went to Monte Carlo and back. We went by way of
      Marseilles. We had over twelve hundred dollars when we started, but we
      got gyped out of it all in two days in the private rooms. We had an
      awful time getting back, I can tell you. God, how I hated that town!”
      
      The late afternoon sky bloomed in the window for a moment like the
      blue honey of the Mediterranean—then the shrill voice of Mrs. McKee
      called me back into the room.
      
      “I almost made a mistake, too,” she declared vigorously. “I almost
      married a little kike who’d been after me for years. I knew he was
      below me. Everybody kept saying to me: ‘Lucille, that man’s way below
      you!’ But if I hadn’t met Chester, he’d of got me sure.”
      
      “Yes, but listen,” said Myrtle Wilson, nodding her head up and down,
      “at least you didn’t marry him.”
      
      “I know I didn’t.”
      
      “Well, I married him,” said Myrtle, ambiguously. “And that’s the
      difference between your case and mine.”
      
      “Why did you, Myrtle?” demanded Catherine. “Nobody forced you to.”
      
      Myrtle considered.
      
      “I married him because I thought he was a gentleman,” she said
      finally. “I thought he knew something about breeding, but he wasn’t
      fit to lick my shoe.”
      
      “You were crazy about him for a while,” said Catherine.
      
      “Crazy about him!” cried Myrtle incredulously. “Who said I was crazy
      about him? I never was any more crazy about him than I was about that
      man there.”
      
      She pointed suddenly at me, and everyone looked at me accusingly. I
      tried to show by my expression that I expected no affection.
      
      “The only crazy I was was when I married him. I knew right away I made
      a mistake. He borrowed somebody’s best suit to get married in, and
      never even told me about it, and the man came after it one day when he
      was out: ‘Oh, is that your suit?’ I said. ‘This is the first I ever
      heard about it.’ But I gave it to him and then I lay down and cried to
      beat the band all afternoon.”
      
      “She really ought to get away from him,” resumed Catherine to me.
      “They’ve been living over that garage for eleven years. And Tom’s the
      first sweetie she ever had.”
      
      The bottle of whisky—a second one—was now in constant demand by all
      present, excepting Catherine, who “felt just as good on nothing at
      all.” Tom rang for the janitor and sent him for some celebrated
      sandwiches, which were a complete supper in themselves. I wanted to
      get out and walk eastward toward the park through the soft twilight,
      but each time I tried to go I became entangled in some wild, strident
      argument which pulled me back, as if with ropes, into my chair. Yet
      high over the city our line of yellow windows must have contributed
      their share of human secrecy to the casual watcher in the darkening
      streets, and I saw him too, looking up and wondering. I was within and
      without, simultaneously enchanted and repelled by the inexhaustible
      variety of life.
      
      Myrtle pulled her chair close to mine, and suddenly her warm breath
      poured over me the story of her first meeting with Tom.
      
      “It was on the two little seats facing each other that are always the
      last ones left on the train. I was going up to New York to see my
      sister and spend the night. He had on a dress suit and patent leather
      shoes, and I couldn’t keep my eyes off him, but every time he looked
      at me I had to pretend to be looking at the advertisement over his
      head. When we came into the station he was next to me, and his white
      shirtfront pressed against my arm, and so I told him I’d have to call
      a policeman, but he knew I lied. I was so excited that when I got into
      a taxi with him I didn’t hardly know I wasn’t getting into a subway
      train. All I kept thinking about, over and over, was ‘You can’t live
      forever; you can’t live forever.’ ”
      
      She turned to Mrs. McKee and the room rang full of her artificial
      laughter.
      
      “My dear,” she cried, “I’m going to give you this dress as soon as I’m
      through with it. I’ve got to get another one tomorrow. I’m going to
      make a list of all the things I’ve got to get. A massage and a wave,
      and a collar for the dog, and one of those cute little ashtrays where
      you touch a spring, and a wreath with a black silk bow for mother’s
      grave that’ll last all summer. I got to write down a list so I won’t
      forget all the things I got to do.”
      
      It was nine o’clock—almost immediately afterward I looked at my watch
      and found it was ten. Mr. McKee was asleep on a chair with his fists
      clenched in his lap, like a photograph of a man of action. Taking out
      my handkerchief I wiped from his cheek the spot of dried lather that
      had worried me all the afternoon.
      
      The little dog was sitting on the table looking with blind eyes
      through the smoke, and from time to time groaning faintly. People
      disappeared, reappeared, made plans to go somewhere, and then lost
      each other, searched for each other, found each other a few feet
      away. Some time toward midnight Tom Buchanan and Mrs. Wilson stood
      face to face discussing, in impassioned voices, whether Mrs. Wilson
      had any right to mention Daisy’s name.
      
      “Daisy! Daisy! Daisy!” shouted Mrs. Wilson. “I’ll say it whenever I
      want to! Daisy! Dai—”
      
      Making a short deft movement, Tom Buchanan broke her nose with his
      open hand.
      
      Then there were bloody towels upon the bathroom floor, and women’s
      voices scolding, and high over the confusion a long broken wail of
      pain. Mr. McKee awoke from his doze and started in a daze toward the
      door. When he had gone halfway he turned around and stared at the
      scene—his wife and Catherine scolding and consoling as they stumbled
      here and there among the crowded furniture with articles of aid, and
      the despairing figure on the couch, bleeding fluently, and trying to
      spread a copy of Town Tattle over the tapestry scenes of
      Versailles. Then Mr. McKee turned and continued on out the door.
      Taking my hat from the chandelier, I followed.
      
      “Come to lunch some day,” he suggested, as we groaned down in the
      elevator.
      
      “Where?”
      
      “Anywhere.”
      
      “Keep your hands off the lever,” snapped the elevator boy.
      
      “I beg your pardon,” said Mr. McKee with dignity, “I didn’t know I was
      touching it.”
      
      “All right,” I agreed, “I’ll be glad to.”
      
      … I was standing beside his bed and he was sitting up between the
      sheets, clad in his underwear, with a great portfolio in his hands.
      
      “Beauty and the Beast … Loneliness … Old Grocery Horse … Brook’n
      Bridge …”
      
      Then I was lying half asleep in the cold lower level of the
      Pennsylvania Station, staring at the morning Tribune, and waiting for
      the four o’clock train.
      ` },
      { chapter: 3, title: 'Chapter 3', content: `There was music from my neighbour’s house through the summer nights.
      In his blue gardens men and girls came and went like moths among the
      whisperings and the champagne and the stars. At high tide in the
      afternoon I watched his guests diving from the tower of his raft, or
      taking the sun on the hot sand of his beach while his two motorboats
      slit the waters of the Sound, drawing aquaplanes over cataracts of
      foam. On weekends his Rolls-Royce became an omnibus, bearing parties
      to and from the city between nine in the morning and long past
      midnight, while his station wagon scampered like a brisk yellow bug to
      meet all trains. And on Mondays eight servants, including an extra
      gardener, toiled all day with mops and scrubbing-brushes and hammers
      and garden-shears, repairing the ravages of the night before.
      
      Every Friday five crates of oranges and lemons arrived from a
      fruiterer in New York—every Monday these same oranges and lemons left
      his back door in a pyramid of pulpless halves. There was a machine in
      the kitchen which could extract the juice of two hundred oranges in
      half an hour if a little button was pressed two hundred times by a
      butler’s thumb.
      
      At least once a fortnight a corps of caterers came down with several
      hundred feet of canvas and enough coloured lights to make a Christmas
      tree of Gatsby’s enormous garden. On buffet tables, garnished with
      glistening hors-d’oeuvre, spiced baked hams crowded against salads of
      harlequin designs and pastry pigs and turkeys bewitched to a dark
      gold. In the main hall a bar with a real brass rail was set up, and
      stocked with gins and liquors and with cordials so long forgotten that
      most of his female guests were too young to know one from another.
      
      By seven o’clock the orchestra has arrived, no thin five-piece affair,
      but a whole pitful of oboes and trombones and saxophones and viols and
      cornets and piccolos, and low and high drums. The last swimmers have
      come in from the beach now and are dressing upstairs; the cars from
      New York are parked five deep in the drive, and already the halls and
      salons and verandas are gaudy with primary colours, and hair bobbed in
      strange new ways, and shawls beyond the dreams of Castile. The bar is
      in full swing, and floating rounds of cocktails permeate the garden
      outside, until the air is alive with chatter and laughter, and casual
      innuendo and introductions forgotten on the spot, and enthusiastic
      meetings between women who never knew each other’s names.
      
      The lights grow brighter as the earth lurches away from the sun, and
      now the orchestra is playing yellow cocktail music, and the opera of
      voices pitches a key higher. Laughter is easier minute by minute,
      spilled with prodigality, tipped out at a cheerful word. The groups
      change more swiftly, swell with new arrivals, dissolve and form in the
      same breath; already there are wanderers, confident girls who weave
      here and there among the stouter and more stable, become for a sharp,
      joyous moment the centre of a group, and then, excited with triumph,
      glide on through the sea-change of faces and voices and colour under
      the constantly changing light.
      
      Suddenly one of these gypsies, in trembling opal, seizes a cocktail
      out of the air, dumps it down for courage and, moving her hands like
      Frisco, dances out alone on the canvas platform. A momentary hush; the
      orchestra leader varies his rhythm obligingly for her, and there is a
      burst of chatter as the erroneous news goes around that she is Gilda
      Gray’s understudy from the Follies. The party has begun.
      
      I believe that on the first night I went to Gatsby’s house I was one
      of the few guests who had actually been invited. People were not
      invited—they went there. They got into automobiles which bore them out
      to Long Island, and somehow they ended up at Gatsby’s door. Once there
      they were introduced by somebody who knew Gatsby, and after that they
      conducted themselves according to the rules of behaviour associated
      with an amusement park. Sometimes they came and went without having
      met Gatsby at all, came for the party with a simplicity of heart that
      was its own ticket of admission.
      
      I had been actually invited. A chauffeur in a uniform of robin’s-egg
      blue crossed my lawn early that Saturday morning with a surprisingly
      formal note from his employer: the honour would be entirely Gatsby’s,
      it said, if I would attend his “little party” that night. He had seen
      me several times, and had intended to call on me long before, but a
      peculiar combination of circumstances had prevented it—signed Jay
      Gatsby, in a majestic hand.
      
      Dressed up in white flannels I went over to his lawn a little after
      seven, and wandered around rather ill at ease among swirls and eddies
      of people I didn’t know—though here and there was a face I had noticed
      on the commuting train. I was immediately struck by the number of
      young Englishmen dotted about; all well dressed, all looking a little
      hungry, and all talking in low, earnest voices to solid and prosperous
      Americans. I was sure that they were selling something: bonds or
      insurance or automobiles. They were at least agonizingly aware of the
      easy money in the vicinity and convinced that it was theirs for a few
      words in the right key.
      
      As soon as I arrived I made an attempt to find my host, but the two or
      three people of whom I asked his whereabouts stared at me in such an
      amazed way, and denied so vehemently any knowledge of his movements,
      that I slunk off in the direction of the cocktail table—the only place
      in the garden where a single man could linger without looking
      purposeless and alone.
      
      I was on my way to get roaring drunk from sheer embarrassment when
      Jordan Baker came out of the house and stood at the head of the marble
      steps, leaning a little backward and looking with contemptuous
      interest down into the garden.
      
      Welcome or not, I found it necessary to attach myself to someone
      before I should begin to address cordial remarks to the passersby.
      
      “Hello!” I roared, advancing toward her. My voice seemed unnaturally
      loud across the garden.
      
      “I thought you might be here,” she responded absently as I came up.
      “I remembered you lived next door to—”
      
      She held my hand impersonally, as a promise that she’d take care of me
      in a minute, and gave ear to two girls in twin yellow dresses, who
      stopped at the foot of the steps.
      
      “Hello!” they cried together. “Sorry you didn’t win.”
      
      That was for the golf tournament. She had lost in the finals the week
      before.
      
      “You don’t know who we are,” said one of the girls in yellow, “but we
      met you here about a month ago.”
      
      “You’ve dyed your hair since then,” remarked Jordan, and I started,
      but the girls had moved casually on and her remark was addressed to
      the premature moon, produced like the supper, no doubt, out of a
      caterer’s basket. With Jordan’s slender golden arm resting in mine, we
      descended the steps and sauntered about the garden. A tray of
      cocktails floated at us through the twilight, and we sat down at a
      table with the two girls in yellow and three men, each one introduced
      to us as Mr. Mumble.
      
      “Do you come to these parties often?” inquired Jordan of the girl
      beside her.
      
      “The last one was the one I met you at,” answered the girl, in an
      alert confident voice. She turned to her companion: “Wasn’t it for
      you, Lucille?”
      
      It was for Lucille, too.
      
      “I like to come,” Lucille said. “I never care what I do, so I always
      have a good time. When I was here last I tore my gown on a chair, and
      he asked me my name and address—inside of a week I got a package from
      Croirier’s with a new evening gown in it.”
      
      “Did you keep it?” asked Jordan.
      
      “Sure I did. I was going to wear it tonight, but it was too big in the
      bust and had to be altered. It was gas blue with lavender beads. Two
      hundred and sixty-five dollars.”
      
      “There’s something funny about a fellow that’ll do a thing like that,”
      said the other girl eagerly. “He doesn’t want any trouble with
      anybody.”
      
      “Who doesn’t?” I inquired.
      
      “Gatsby. Somebody told me—”
      
      The two girls and Jordan leaned together confidentially.
      
      “Somebody told me they thought he killed a man once.”
      
      A thrill passed over all of us. The three Mr. Mumbles bent forward and
      listened eagerly.
      
      “I don’t think it’s so much that,” argued Lucille sceptically; “It’s
      more that he was a German spy during the war.”
      
      One of the men nodded in confirmation.
      
      “I heard that from a man who knew all about him, grew up with him in
      Germany,” he assured us positively.
      
      “Oh, no,” said the first girl, “it couldn’t be that, because he was in
      the American army during the war.” As our credulity switched back to
      her she leaned forward with enthusiasm. “You look at him sometimes
      when he thinks nobody’s looking at him. I’ll bet he killed a man.”
      
      She narrowed her eyes and shivered. Lucille shivered. We all turned
      and looked around for Gatsby. It was testimony to the romantic
      speculation he inspired that there were whispers about him from those
      who had found little that it was necessary to whisper about in this
      world.
      
      The first supper—there would be another one after midnight—was now
      being served, and Jordan invited me to join her own party, who were
      spread around a table on the other side of the garden. There were
      three married couples and Jordan’s escort, a persistent undergraduate
      given to violent innuendo, and obviously under the impression that
      sooner or later Jordan was going to yield him up her person to a
      greater or lesser degree. Instead of rambling, this party had
      preserved a dignified homogeneity, and assumed to itself the function
      of representing the staid nobility of the countryside—East Egg
      condescending to West Egg and carefully on guard against its
      spectroscopic gaiety.
      
      “Let’s get out,” whispered Jordan, after a somehow wasteful and
      inappropriate half-hour; “this is much too polite for me.”
      
      We got up, and she explained that we were going to find the host: I
      had never met him, she said, and it was making me uneasy. The
      undergraduate nodded in a cynical, melancholy way.
      
      The bar, where we glanced first, was crowded, but Gatsby was not
      there. She couldn’t find him from the top of the steps, and he wasn’t
      on the veranda. On a chance we tried an important-looking door, and
      walked into a high Gothic library, panelled with carved English oak,
      and probably transported complete from some ruin overseas.
      
      A stout, middle-aged man, with enormous owl-eyed spectacles, was
      sitting somewhat drunk on the edge of a great table, staring with
      unsteady concentration at the shelves of books. As we entered he
      wheeled excitedly around and examined Jordan from head to foot.
      
      “What do you think?” he demanded impetuously.
      
      “About what?”
      
      He waved his hand toward the bookshelves.
      
      “About that. As a matter of fact you needn’t bother to ascertain. I
      ascertained. They’re real.”
      
      “The books?”
      
      He nodded.
      
      “Absolutely real—have pages and everything. I thought they’d be a nice
      durable cardboard. Matter of fact, they’re absolutely real.  Pages
      and—Here! Lemme show you.”
      
      Taking our scepticism for granted, he rushed to the bookcases and
      returned with Volume One of the Stoddard Lectures.
      
      “See!” he cried triumphantly. “It’s a bona-fide piece of printed
      matter. It fooled me. This fella’s a regular Belasco. It’s a
      triumph. What thoroughness! What realism! Knew when to stop,
      too—didn’t cut the pages. But what do you want? What do you expect?”
      
      He snatched the book from me and replaced it hastily on its shelf,
      muttering that if one brick was removed the whole library was liable
      to collapse.
      
      “Who brought you?” he demanded. “Or did you just come? I was brought.
      Most people were brought.”
      
      Jordan looked at him alertly, cheerfully, without answering.
      
      “I was brought by a woman named Roosevelt,” he continued. “Mrs. Claud
      Roosevelt. Do you know her? I met her somewhere last night. I’ve been
      drunk for about a week now, and I thought it might sober me up to sit
      in a library.”
      
      “Has it?”
      
      “A little bit, I think. I can’t tell yet. I’ve only been here an hour.
      Did I tell you about the books? They’re real. They’re—”
      
      “You told us.”
      
      We shook hands with him gravely and went back outdoors.
      
      There was dancing now on the canvas in the garden; old men pushing
      young girls backward in eternal graceless circles, superior couples
      holding each other tortuously, fashionably, and keeping in the
      corners—and a great number of single girls dancing individually or
      relieving the orchestra for a moment of the burden of the banjo or the
      traps. By midnight the hilarity had increased. A celebrated tenor had
      sung in Italian, and a notorious contralto had sung in jazz, and
      between the numbers people were doing “stunts” all over the garden,
      while happy, vacuous bursts of laughter rose toward the summer sky. A
      pair of stage twins, who turned out to be the girls in yellow, did a
      baby act in costume, and champagne was served in glasses bigger than
      finger-bowls. The moon had risen higher, and floating in the Sound was
      a triangle of silver scales, trembling a little to the stiff, tinny
      drip of the banjoes on the lawn.
      
      I was still with Jordan Baker. We were sitting at a table with a man
      of about my age and a rowdy little girl, who gave way upon the
      slightest provocation to uncontrollable laughter. I was enjoying
      myself now. I had taken two finger-bowls of champagne, and the scene
      had changed before my eyes into something significant, elemental, and
      profound.
      
      At a lull in the entertainment the man looked at me and smiled.
      
      “Your face is familiar,” he said politely. “Weren’t you in the First
      Division during the war?”
      
      “Why yes. I was in the Twenty-eighth Infantry.”
      
      “I was in the Sixteenth until June nineteen-eighteen. I knew I’d seen
      you somewhere before.”
      
      We talked for a moment about some wet, grey little villages in France.
      Evidently he lived in this vicinity, for he told me that he had just
      bought a hydroplane, and was going to try it out in the morning.
      
      “Want to go with me, old sport? Just near the shore along the Sound.”
      
      “What time?”
      
      “Any time that suits you best.”
      
      It was on the tip of my tongue to ask his name when Jordan looked
      around and smiled.
      
      “Having a gay time now?” she inquired.
      
      “Much better.” I turned again to my new acquaintance. “This is an
      unusual party for me. I haven’t even seen the host. I live over
      there—” I waved my hand at the invisible hedge in the distance, “and
      this man Gatsby sent over his chauffeur with an invitation.”
      
      For a moment he looked at me as if he failed to understand.
      
      “I’m Gatsby,” he said suddenly.
      
      “What!” I exclaimed. “Oh, I beg your pardon.”
      
      “I thought you knew, old sport. I’m afraid I’m not a very good host.”
      
      He smiled understandingly—much more than understandingly. It was one
      of those rare smiles with a quality of eternal reassurance in it, that
      you may come across four or five times in life. It faced—or seemed to
      face—the whole eternal world for an instant, and then concentrated on
      you with an irresistible prejudice in your favour. It understood you
      just so far as you wanted to be understood, believed in you as you
      would like to believe in yourself, and assured you that it had
      precisely the impression of you that, at your best, you hoped to
      convey. Precisely at that point it vanished—and I was looking at an
      elegant young roughneck, a year or two over thirty, whose elaborate
      formality of speech just missed being absurd. Some time before he
      introduced himself I’d got a strong impression that he was picking his
      words with care.
      
      Almost at the moment when Mr. Gatsby identified himself a butler
      hurried toward him with the information that Chicago was calling him
      on the wire. He excused himself with a small bow that included each of
      us in turn.
      
      “If you want anything just ask for it, old sport,” he urged me.
      “Excuse me. I will rejoin you later.”
      
      When he was gone I turned immediately to Jordan—constrained to assure
      her of my surprise. I had expected that Mr. Gatsby would be a florid
      and corpulent person in his middle years.
      
      “Who is he?” I demanded. “Do you know?”
      
      “He’s just a man named Gatsby.”
      
      “Where is he from, I mean? And what does he do?”
      
      “Now you’re started on the subject,” she answered with a wan smile.
      “Well, he told me once he was an Oxford man.”
      
      A dim background started to take shape behind him, but at her next
      remark it faded away.
      
      “However, I don’t believe it.”
      
      “Why not?”
      
      “I don’t know,” she insisted, “I just don’t think he went there.”
      
      Something in her tone reminded me of the other girl’s “I think he
      killed a man,” and had the effect of stimulating my curiosity. I would
      have accepted without question the information that Gatsby sprang from
      the swamps of Louisiana or from the lower East Side of New York. That
      was comprehensible. But young men didn’t—at least in my provincial
      inexperience I believed they didn’t—drift coolly out of nowhere and
      buy a palace on Long Island Sound.
      
      “Anyhow, he gives large parties,” said Jordan, changing the subject
      with an urban distaste for the concrete. “And I like large parties.
      They’re so intimate. At small parties there isn’t any privacy.”
      
      There was the boom of a bass drum, and the voice of the orchestra
      leader rang out suddenly above the echolalia of the garden.
      
      “Ladies and gentlemen,” he cried. “At the request of Mr. Gatsby we are
      going to play for you Mr. Vladmir Tostoff’s latest work, which
      attracted so much attention at Carnegie Hall last May. If you read the
      papers you know there was a big sensation.” He smiled with jovial
      condescension, and added: “Some sensation!” Whereupon everybody
      laughed.
      
      “The piece is known,” he concluded lustily, “as ‘Vladmir Tostoff’s
      Jazz History of the World!’ ”
      
      The nature of Mr. Tostoff’s composition eluded me, because just as it
      began my eyes fell on Gatsby, standing alone on the marble steps and
      looking from one group to another with approving eyes. His tanned skin
      was drawn attractively tight on his face and his short hair looked as
      though it were trimmed every day. I could see nothing sinister about
      him. I wondered if the fact that he was not drinking helped to set him
      off from his guests, for it seemed to me that he grew more correct as
      the fraternal hilarity increased. When the “Jazz History of the World”
      was over, girls were putting their heads on men’s shoulders in a
      puppyish, convivial way, girls were swooning backward playfully into
      men’s arms, even into groups, knowing that someone would arrest their
      falls—but no one swooned backward on Gatsby, and no French bob touched
      Gatsby’s shoulder, and no singing quartets were formed with Gatsby’s
      head for one link.
      
      “I beg your pardon.”
      
      Gatsby’s butler was suddenly standing beside us.
      
      “Miss Baker?” he inquired. “I beg your pardon, but Mr. Gatsby would
      like to speak to you alone.”
      
      “With me?” she exclaimed in surprise.
      
      “Yes, madame.”
      
      She got up slowly, raising her eyebrows at me in astonishment, and
      followed the butler toward the house. I noticed that she wore her
      evening-dress, all her dresses, like sports clothes—there was a
      jauntiness about her movements as if she had first learned to walk
      upon golf courses on clean, crisp mornings.
      
      I was alone and it was almost two. For some time confused and
      intriguing sounds had issued from a long, many-windowed room which
      overhung the terrace. Eluding Jordan’s undergraduate, who was now
      engaged in an obstetrical conversation with two chorus girls, and who
      implored me to join him, I went inside.
      
      The large room was full of people. One of the girls in yellow was
      playing the piano, and beside her stood a tall, red-haired young lady
      from a famous chorus, engaged in song. She had drunk a quantity of
      champagne, and during the course of her song she had decided, ineptly,
      that everything was very, very sad—she was not only singing, she was
      weeping too. Whenever there was a pause in the song she filled it with
      gasping, broken sobs, and then took up the lyric again in a quavering
      soprano. The tears coursed down her cheeks—not freely, however, for
      when they came into contact with her heavily beaded eyelashes they
      assumed an inky colour, and pursued the rest of their way in slow
      black rivulets. A humorous suggestion was made that she sing the notes
      on her face, whereupon she threw up her hands, sank into a chair, and
      went off into a deep vinous sleep.
      
      “She had a fight with a man who says he’s her husband,” explained a
      girl at my elbow.
      
      I looked around. Most of the remaining women were now having fights
      with men said to be their husbands. Even Jordan’s party, the quartet
      from East Egg, were rent asunder by dissension. One of the men was
      talking with curious intensity to a young actress, and his wife, after
      attempting to laugh at the situation in a dignified and indifferent
      way, broke down entirely and resorted to flank attacks—at intervals
      she appeared suddenly at his side like an angry diamond, and hissed:
      “You promised!” into his ear.
      
      The reluctance to go home was not confined to wayward men. The hall
      was at present occupied by two deplorably sober men and their highly
      indignant wives. The wives were sympathizing with each other in
      slightly raised voices.
      
      “Whenever he sees I’m having a good time he wants to go home.”
      
      “Never heard anything so selfish in my life.”
      
      “We’re always the first ones to leave.”
      
      “So are we.”
      
      “Well, we’re almost the last tonight,” said one of the men sheepishly.
      “The orchestra left half an hour ago.”
      
      In spite of the wives’ agreement that such malevolence was beyond
      credibility, the dispute ended in a short struggle, and both wives
      were lifted, kicking, into the night.
      
      As I waited for my hat in the hall the door of the library opened and
      Jordan Baker and Gatsby came out together. He was saying some last
      word to her, but the eagerness in his manner tightened abruptly into
      formality as several people approached him to say goodbye.
      
      Jordan’s party were calling impatiently to her from the porch, but she
      lingered for a moment to shake hands.
      
      “I’ve just heard the most amazing thing,” she whispered. “How long
      were we in there?”
      
      “Why, about an hour.”
      
      “It was … simply amazing,” she repeated abstractedly. “But I swore I
      wouldn’t tell it and here I am tantalizing you.” She yawned gracefully
      in my face. “Please come and see me … Phone book … Under the name of
      Mrs. Sigourney Howard … My aunt …” She was hurrying off as she
      talked—her brown hand waved a jaunty salute as she melted into her
      party at the door.
      
      Rather ashamed that on my first appearance I had stayed so late, I
      joined the last of Gatsby’s guests, who were clustered around him. I
      wanted to explain that I’d hunted for him early in the evening and to
      apologize for not having known him in the garden.
      
      “Don’t mention it,” he enjoined me eagerly. “Don’t give it another
      thought, old sport.” The familiar expression held no more familiarity
      than the hand which reassuringly brushed my shoulder. “And don’t
      forget we’re going up in the hydroplane tomorrow morning, at nine
      o’clock.”
      
      Then the butler, behind his shoulder:
      
      “Philadelphia wants you on the phone, sir.”
      
      “All right, in a minute. Tell them I’ll be right there … Good night.”
      
      “Good night.”
      
      “Good night.” He smiled—and suddenly there seemed to be a pleasant
      significance in having been among the last to go, as if he had desired
      it all the time. “Good night, old sport … Good night.”
      
      But as I walked down the steps I saw that the evening was not quite
      over. Fifty feet from the door a dozen headlights illuminated a
      bizarre and tumultuous scene. In the ditch beside the road, right side
      up, but violently shorn of one wheel, rested a new coupé which had
      left Gatsby’s drive not two minutes before. The sharp jut of a wall
      accounted for the detachment of the wheel, which was now getting
      considerable attention from half a dozen curious chauffeurs. However,
      as they had left their cars blocking the road, a harsh, discordant din
      from those in the rear had been audible for some time, and added to
      the already violent confusion of the scene.
      
      A man in a long duster had dismounted from the wreck and now stood in
      the middle of the road, looking from the car to the tyre and from the
      tyre to the observers in a pleasant, puzzled way.
      
      “See!” he explained. “It went in the ditch.”
      
      The fact was infinitely astonishing to him, and I recognized first the
      unusual quality of wonder, and then the man—it was the late patron of
      Gatsby’s library.
      
      “How’d it happen?”
      
      He shrugged his shoulders.
      
      “I know nothing whatever about mechanics,” he said decisively.
      
      “But how did it happen? Did you run into the wall?”
      
      “Don’t ask me,” said Owl Eyes, washing his hands of the whole
      matter. “I know very little about driving—next to nothing. It
      happened, and that’s all I know.”
      
      “Well, if you’re a poor driver you oughtn’t to try driving at night.”
      
      “But I wasn’t even trying,” he explained indignantly, “I wasn’t even
      trying.”
      
      An awed hush fell upon the bystanders.
      
      “Do you want to commit suicide?”
      
      “You’re lucky it was just a wheel! A bad driver and not even trying!”
      
      “You don’t understand,” explained the criminal. “I wasn’t driving.
      There’s another man in the car.”
      
      The shock that followed this declaration found voice in a sustained
      “Ah-h-h!” as the door of the coupé swung slowly open. The crowd—it was
      now a crowd—stepped back involuntarily, and when the door had opened
      wide there was a ghostly pause. Then, very gradually, part by part, a
      pale, dangling individual stepped out of the wreck, pawing tentatively
      at the ground with a large uncertain dancing shoe.
      
      Blinded by the glare of the headlights and confused by the incessant
      groaning of the horns, the apparition stood swaying for a moment
      before he perceived the man in the duster.
      
      “Wha’s matter?” he inquired calmly. “Did we run outa gas?”
      
      “Look!”
      
      Half a dozen fingers pointed at the amputated wheel—he stared at it
      for a moment, and then looked upward as though he suspected that it
      had dropped from the sky.
      
      “It came off,” someone explained.
      
      He nodded.
      
      “At first I din’ notice we’d stopped.”
      
      A pause. Then, taking a long breath and straightening his shoulders,
      he remarked in a determined voice:
      
      “Wonder’ff tell me where there’s a gas’line station?”
      
      At least a dozen men, some of them a little better off than he was,
      explained to him that wheel and car were no longer joined by any
      physical bond.
      
      “Back out,” he suggested after a moment. “Put her in reverse.”
      
      “But the wheel’s off!”
      
      He hesitated.
      
      “No harm in trying,” he said.
      
      The caterwauling horns had reached a crescendo and I turned away and
      cut across the lawn toward home. I glanced back once. A wafer of a
      moon was shining over Gatsby’s house, making the night fine as before,
      and surviving the laughter and the sound of his still glowing garden.
      A sudden emptiness seemed to flow now from the windows and the great
      doors, endowing with complete isolation the figure of the host, who
      stood on the porch, his hand up in a formal gesture of farewell.
      
      
      Reading over what I have written so far, I see I have given the
      impression that the events of three nights several weeks apart were
      all that absorbed me. On the contrary, they were merely casual events
      in a crowded summer, and, until much later, they absorbed me
      infinitely less than my personal affairs.
      
      Most of the time I worked. In the early morning the sun threw my
      shadow westward as I hurried down the white chasms of lower New York
      to the Probity Trust. I knew the other clerks and young bond-salesmen
      by their first names, and lunched with them in dark, crowded
      restaurants on little pig sausages and mashed potatoes and coffee. I
      even had a short affair with a girl who lived in Jersey City and
      worked in the accounting department, but her brother began throwing
      mean looks in my direction, so when she went on her vacation in July I
      let it blow quietly away.
      
      I took dinner usually at the Yale Club—for some reason it was the
      gloomiest event of my day—and then I went upstairs to the library and
      studied investments and securities for a conscientious hour. There
      were generally a few rioters around, but they never came into the
      library, so it was a good place to work. After that, if the night was
      mellow, I strolled down Madison Avenue past the old Murray Hill Hotel,
      and over 33rd Street to the Pennsylvania Station.
      
      I began to like New York, the racy, adventurous feel of it at night,
      and the satisfaction that the constant flicker of men and women and
      machines gives to the restless eye. I liked to walk up Fifth Avenue
      and pick out romantic women from the crowd and imagine that in a few
      minutes I was going to enter into their lives, and no one would ever
      know or disapprove. Sometimes, in my mind, I followed them to their
      apartments on the corners of hidden streets, and they turned and
      smiled back at me before they faded through a door into warm
      darkness. At the enchanted metropolitan twilight I felt a haunting
      loneliness sometimes, and felt it in others—poor young clerks who
      loitered in front of windows waiting until it was time for a solitary
      restaurant dinner—young clerks in the dusk, wasting the most poignant
      moments of night and life.
      
      Again at eight o’clock, when the dark lanes of the Forties were lined
      five deep with throbbing taxicabs, bound for the theatre district, I
      felt a sinking in my heart. Forms leaned together in the taxis as they
      waited, and voices sang, and there was laughter from unheard jokes,
      and lighted cigarettes made unintelligible circles inside. Imagining
      that I, too, was hurrying towards gaiety and sharing their intimate
      excitement, I wished them well.
      
      For a while I lost sight of Jordan Baker, and then in midsummer I
      found her again. At first I was flattered to go places with her,
      because she was a golf champion, and everyone knew her name. Then it
      was something more. I wasn’t actually in love, but I felt a sort of
      tender curiosity. The bored haughty face that she turned to the world
      concealed something—most affectations conceal something eventually,
      even though they don’t in the beginning—and one day I found what it
      was. When we were on a house-party together up in Warwick, she left a
      borrowed car out in the rain with the top down, and then lied about
      it—and suddenly I remembered the story about her that had eluded me
      that night at Daisy’s. At her first big golf tournament there was a
      row that nearly reached the newspapers—a suggestion that she had moved
      her ball from a bad lie in the semifinal round. The thing approached
      the proportions of a scandal—then died away. A caddy retracted his
      statement, and the only other witness admitted that he might have been
      mistaken. The incident and the name had remained together in my mind.
      
      Jordan Baker instinctively avoided clever, shrewd men, and now I saw
      that this was because she felt safer on a plane where any divergence
      from a code would be thought impossible. She was incurably dishonest.
      She wasn’t able to endure being at a disadvantage and, given this
      unwillingness, I suppose she had begun dealing in subterfuges when she
      was very young in order to keep that cool, insolent smile turned to
      the world and yet satisfy the demands of her hard, jaunty body.
      
      It made no difference to me. Dishonesty in a woman is a thing you
      never blame deeply—I was casually sorry, and then I forgot. It was on
      that same house-party that we had a curious conversation about driving
      a car. It started because she passed so close to some workmen that our
      fender flicked a button on one man’s coat.
      
      “You’re a rotten driver,” I protested. “Either you ought to be more
      careful, or you oughtn’t to drive at all.”
      
      “I am careful.”
      
      “No, you’re not.”
      
      “Well, other people are,” she said lightly.
      
      “What’s that got to do with it?”
      
      “They’ll keep out of my way,” she insisted. “It takes two to make an
      accident.”
      
      “Suppose you met somebody just as careless as yourself.”
      
      “I hope I never will,” she answered. “I hate careless people. That’s
      why I like you.”
      
      Her grey, sun-strained eyes stared straight ahead, but she had
      deliberately shifted our relations, and for a moment I thought I loved
      her. But I am slow-thinking and full of interior rules that act as
      brakes on my desires, and I knew that first I had to get myself
      definitely out of that tangle back home. I’d been writing letters once
      a week and signing them: “Love, Nick,” and all I could think of was
      how, when that certain girl played tennis, a faint moustache of
      perspiration appeared on her upper lip. Nevertheless there was a vague
      understanding that had to be tactfully broken off before I was free.
      
      Everyone suspects himself of at least one of the cardinal virtues, and
      this is mine: I am one of the few honest people that I have ever
      known.
      ` },
      { chapter: 4, title: 'Chapter 4', content: `IV

      On Sunday morning while church bells rang in the villages alongshore,
      the world and its mistress returned to Gatsby’s house and twinkled
      hilariously on his lawn.
      
      “He’s a bootlegger,” said the young ladies, moving somewhere between
      his cocktails and his flowers. “One time he killed a man who had found
      out that he was nephew to Von Hindenburg and second cousin to the
      devil. Reach me a rose, honey, and pour me a last drop into that there
      crystal glass.”
      
      Once I wrote down on the empty spaces of a timetable the names of
      those who came to Gatsby’s house that summer. It is an old timetable
      now, disintegrating at its folds, and headed “This schedule in effect
      July 5th, 1922.” But I can still read the grey names, and they will
      give you a better impression than my generalities of those who
      accepted Gatsby’s hospitality and paid him the subtle tribute of
      knowing nothing whatever about him.
      
      From East Egg, then, came the Chester Beckers and the Leeches, and a
      man named Bunsen, whom I knew at Yale, and Doctor Webster Civet, who
      was drowned last summer up in Maine. And the Hornbeams and the Willie
      Voltaires, and a whole clan named Blackbuck, who always gathered in a
      corner and flipped up their noses like goats at whosoever came
      near. And the Ismays and the Chrysties (or rather Hubert Auerbach and
      Mr. Chrystie’s wife), and Edgar Beaver, whose hair, they say, turned
      cotton-white one winter afternoon for no good reason at all.
      
      Clarence Endive was from East Egg, as I remember. He came only once,
      in white knickerbockers, and had a fight with a bum named Etty in the
      garden. From farther out on the Island came the Cheadles and the O.
      R. P. Schraeders, and the Stonewall Jackson Abrams of Georgia, and the
      Fishguards and the Ripley Snells. Snell was there three days before he
      went to the penitentiary, so drunk out on the gravel drive that
      Mrs. Ulysses Swett’s automobile ran over his right hand. The Dancies
      came, too, and S. B. Whitebait, who was well over sixty, and Maurice
      A. Flink, and the Hammerheads, and Beluga the tobacco importer, and
      Beluga’s girls.
      
      From West Egg came the Poles and the Mulreadys and Cecil Roebuck and
      Cecil Schoen and Gulick the State senator and Newton Orchid, who
      controlled Films Par Excellence, and Eckhaust and Clyde Cohen and Don
      S. Schwartz (the son) and Arthur McCarty, all connected with the
      movies in one way or another. And the Catlips and the Bembergs and G.
      Earl Muldoon, brother to that Muldoon who afterward strangled his
      wife. Da Fontano the promoter came there, and Ed Legros and James B.
      (“Rot-Gut”) Ferret and the De Jongs and Ernest Lilly—they came to
      gamble, and when Ferret wandered into the garden it meant he was
      cleaned out and Associated Traction would have to fluctuate profitably
      next day.
      
      A man named Klipspringer was there so often that he became known as
      “the boarder”—I doubt if he had any other home. Of theatrical people
      there were Gus Waize and Horace O’Donavan and Lester Myer and George
      Duckweed and Francis Bull. Also from New York were the Chromes and the
      Backhyssons and the Dennickers and Russel Betty and the Corrigans and
      the Kellehers and the Dewars and the Scullys and S. W. Belcher and the
      Smirkes and the young Quinns, divorced now, and Henry L. Palmetto, who
      killed himself by jumping in front of a subway train in Times Square.
      
      Benny McClenahan arrived always with four girls. They were never quite
      the same ones in physical person, but they were so identical one with
      another that it inevitably seemed they had been there before. I have
      forgotten their names—Jaqueline, I think, or else Consuela, or Gloria
      or Judy or June, and their last names were either the melodious names
      of flowers and months or the sterner ones of the great American
      capitalists whose cousins, if pressed, they would confess themselves
      to be.
      
      In addition to all these I can remember that Faustina O’Brien came
      there at least once and the Baedeker girls and young Brewer, who had
      his nose shot off in the war, and Mr. Albrucksburger and Miss Haag,
      his fiancée, and Ardita Fitz-Peters and Mr. P. Jewett, once head of
      the American Legion, and Miss Claudia Hip, with a man reputed to be
      her chauffeur, and a prince of something, whom we called Duke, and
      whose name, if I ever knew it, I have forgotten.
      
      All these people came to Gatsby’s house in the summer.
      
      
      At nine o’clock, one morning late in July, Gatsby’s gorgeous car
      lurched up the rocky drive to my door and gave out a burst of melody
      from its three-noted horn.
      
      It was the first time he had called on me, though I had gone to two of
      his parties, mounted in his hydroplane, and, at his urgent invitation,
      made frequent use of his beach.
      
      “Good morning, old sport. You’re having lunch with me today and I
      thought we’d ride up together.”
      
      He was balancing himself on the dashboard of his car with that
      resourcefulness of movement that is so peculiarly American—that comes,
      I suppose, with the absence of lifting work in youth and, even more,
      with the formless grace of our nervous, sporadic games. This quality
      was continually breaking through his punctilious manner in the shape
      of restlessness. He was never quite still; there was always a tapping
      foot somewhere or the impatient opening and closing of a hand.
      
      He saw me looking with admiration at his car.
      
      “It’s pretty, isn’t it, old sport?” He jumped off to give me a better
      view. “Haven’t you ever seen it before?”
      
      I’d seen it. Everybody had seen it. It was a rich cream colour, bright
      with nickel, swollen here and there in its monstrous length with
      triumphant hatboxes and supper-boxes and toolboxes, and terraced with
      a labyrinth of windshields that mirrored a dozen suns. Sitting down
      behind many layers of glass in a sort of green leather conservatory,
      we started to town.
      
      I had talked with him perhaps half a dozen times in the past month and
      found, to my disappointment, that he had little to say. So my first
      impression, that he was a person of some undefined consequence, had
      gradually faded and he had become simply the proprietor of an
      elaborate roadhouse next door.
      
      And then came that disconcerting ride. We hadn’t reached West Egg
      village before Gatsby began leaving his elegant sentences unfinished
      and slapping himself indecisively on the knee of his caramel-coloured
      suit.
      
      “Look here, old sport,” he broke out surprisingly, “what’s your
      opinion of me, anyhow?”
      
      A little overwhelmed, I began the generalized evasions which that
      question deserves.
      
      “Well, I’m going to tell you something about my life,” he interrupted.
      “I don’t want you to get a wrong idea of me from all these stories you
      hear.”
      
      So he was aware of the bizarre accusations that flavoured conversation
      in his halls.
      
      “I’ll tell you God’s truth.” His right hand suddenly ordered divine
      retribution to stand by. “I am the son of some wealthy people in the
      Middle West—all dead now. I was brought up in America but educated at
      Oxford, because all my ancestors have been educated there for many
      years. It is a family tradition.”
      
      He looked at me sideways—and I knew why Jordan Baker had believed he
      was lying. He hurried the phrase “educated at Oxford,” or swallowed
      it, or choked on it, as though it had bothered him before. And with
      this doubt, his whole statement fell to pieces, and I wondered if
      there wasn’t something a little sinister about him, after all.
      
      “What part of the Middle West?” I inquired casually.
      
      “San Francisco.”
      
      “I see.”
      
      “My family all died and I came into a good deal of money.”
      
      His voice was solemn, as if the memory of that sudden extinction of a
      clan still haunted him. For a moment I suspected that he was pulling
      my leg, but a glance at him convinced me otherwise.
      
      “After that I lived like a young rajah in all the capitals of
      Europe—Paris, Venice, Rome—collecting jewels, chiefly rubies, hunting
      big game, painting a little, things for myself only, and trying to
      forget something very sad that had happened to me long ago.”
      
      With an effort I managed to restrain my incredulous laughter. The very
      phrases were worn so threadbare that they evoked no image except that
      of a turbaned “character” leaking sawdust at every pore as he pursued
      a tiger through the Bois de Boulogne.
      
      “Then came the war, old sport. It was a great relief, and I tried very
      hard to die, but I seemed to bear an enchanted life. I accepted a
      commission as first lieutenant when it began. In the Argonne Forest I
      took the remains of my machine-gun battalion so far forward that there
      was a half mile gap on either side of us where the infantry couldn’t
      advance. We stayed there two days and two nights, a hundred and thirty
      men with sixteen Lewis guns, and when the infantry came up at last
      they found the insignia of three German divisions among the piles of
      dead. I was promoted to be a major, and every Allied government gave
      me a decoration—even Montenegro, little Montenegro down on the
      Adriatic Sea!”
      
      Little Montenegro! He lifted up the words and nodded at them—with his
      smile. The smile comprehended Montenegro’s troubled history and
      sympathized with the brave struggles of the Montenegrin people. It
      appreciated fully the chain of national circumstances which had
      elicited this tribute from Montenegro’s warm little heart. My
      incredulity was submerged in fascination now; it was like skimming
      hastily through a dozen magazines.
      
      He reached in his pocket, and a piece of metal, slung on a ribbon,
      fell into my palm.
      
      “That’s the one from Montenegro.”
      
      To my astonishment, the thing had an authentic look. “Orderi di
      Danilo,” ran the circular legend, “Montenegro, Nicolas Rex.”
      
      “Turn it.”
      
      “Major Jay Gatsby,” I read, “For Valour Extraordinary.”
      
      “Here’s another thing I always carry. A souvenir of Oxford days. It
      was taken in Trinity Quad—the man on my left is now the Earl of
      Doncaster.”
      
      It was a photograph of half a dozen young men in blazers loafing in an
      archway through which were visible a host of spires. There was Gatsby,
      looking a little, not much, younger—with a cricket bat in his hand.
      
      Then it was all true. I saw the skins of tigers flaming in his palace
      on the Grand Canal; I saw him opening a chest of rubies to ease, with
      their crimson-lighted depths, the gnawings of his broken heart.
      
      “I’m going to make a big request of you today,” he said, pocketing his
      souvenirs with satisfaction, “so I thought you ought to know something
      about me. I didn’t want you to think I was just some nobody. You see,
      I usually find myself among strangers because I drift here and there
      trying to forget the sad things that happened to me.” He hesitated.
      “You’ll hear about it this afternoon.”
      
      “At lunch?”
      
      “No, this afternoon. I happened to find out that you’re taking Miss
      Baker to tea.”
      
      “Do you mean you’re in love with Miss Baker?”
      
      “No, old sport, I’m not. But Miss Baker has kindly consented to speak
      to you about this matter.”
      
      I hadn’t the faintest idea what “this matter” was, but I was more
      annoyed than interested. I hadn’t asked Jordan to tea in order to
      discuss Mr. Jay Gatsby. I was sure the request would be something
      utterly fantastic, and for a moment I was sorry I’d ever set foot upon
      his overpopulated lawn.
      
      He wouldn’t say another word. His correctness grew on him as we neared
      the city. We passed Port Roosevelt, where there was a glimpse of
      red-belted oceangoing ships, and sped along a cobbled slum lined with
      the dark, undeserted saloons of the faded-gilt nineteen-hundreds.
      Then the valley of ashes opened out on both sides of us, and I had a
      glimpse of Mrs. Wilson straining at the garage pump with panting
      vitality as we went by.
      
      With fenders spread like wings we scattered light through half
      Astoria—only half, for as we twisted among the pillars of the elevated
      I heard the familiar “jug-jug-spat!” of a motorcycle, and a frantic
      policeman rode alongside.
      
      “All right, old sport,” called Gatsby. We slowed down. Taking a white
      card from his wallet, he waved it before the man’s eyes.
      
      “Right you are,” agreed the policeman, tipping his cap. “Know you next
      time, Mr. Gatsby. Excuse me!”
      
      “What was that?” I inquired. “The picture of Oxford?”
      
      “I was able to do the commissioner a favour once, and he sends me a
      Christmas card every year.”
      
      Over the great bridge, with the sunlight through the girders making a
      constant flicker upon the moving cars, with the city rising up across
      the river in white heaps and sugar lumps all built with a wish out of
      nonolfactory money. The city seen from the Queensboro Bridge is always
      the city seen for the first time, in its first wild promise of all the
      mystery and the beauty in the world.
      
      A dead man passed us in a hearse heaped with blooms, followed by two
      carriages with drawn blinds, and by more cheerful carriages for
      friends. The friends looked out at us with the tragic eyes and short
      upper lips of southeastern Europe, and I was glad that the sight of
      Gatsby’s splendid car was included in their sombre holiday. As we
      crossed Blackwell’s Island a limousine passed us, driven by a white
      chauffeur, in which sat three modish negroes, two bucks and a girl. I
      laughed aloud as the yolks of their eyeballs rolled toward us in
      haughty rivalry.
      
      “Anything can happen now that we’ve slid over this bridge,” I thought;
      “anything at all …”
      
      Even Gatsby could happen, without any particular wonder.
      
      
      Roaring noon. In a well-fanned Forty-second Street cellar I met Gatsby
      for lunch. Blinking away the brightness of the street outside, my eyes
      picked him out obscurely in the anteroom, talking to another man.
      
      “Mr. Carraway, this is my friend Mr. Wolfshiem.”
      
      A small, flat-nosed Jew raised his large head and regarded me with two
      fine growths of hair which luxuriated in either nostril. After a
      moment I discovered his tiny eyes in the half-darkness.
      
      “—So I took one look at him,” said Mr. Wolfshiem, shaking my hand
      earnestly, “and what do you think I did?”
      
      “What?” I inquired politely.
      
      But evidently he was not addressing me, for he dropped my hand and
      covered Gatsby with his expressive nose.
      
      “I handed the money to Katspaugh and I said: ‘All right, Katspaugh,
      don’t pay him a penny till he shuts his mouth.’ He shut it then and
      there.”
      
      Gatsby took an arm of each of us and moved forward into the
      restaurant, whereupon Mr. Wolfshiem swallowed a new sentence he was
      starting and lapsed into a somnambulatory abstraction.
      
      “Highballs?” asked the head waiter.
      
      “This is a nice restaurant here,” said Mr. Wolfshiem, looking at the
      presbyterian nymphs on the ceiling. “But I like across the street
      better!”
      
      “Yes, highballs,” agreed Gatsby, and then to Mr. Wolfshiem: “It’s too
      hot over there.”
      
      “Hot and small—yes,” said Mr. Wolfshiem, “but full of memories.”
      
      “What place is that?” I asked.
      
      “The old Metropole.”
      
      “The old Metropole,” brooded Mr. Wolfshiem gloomily. “Filled with
      faces dead and gone. Filled with friends gone now forever. I can’t
      forget so long as I live the night they shot Rosy Rosenthal there. It
      was six of us at the table, and Rosy had eat and drunk a lot all
      evening. When it was almost morning the waiter came up to him with a
      funny look and says somebody wants to speak to him outside. ‘All
      right,’ says Rosy, and begins to get up, and I pulled him down in his
      chair.
      
      “ ‘Let the bastards come in here if they want you, Rosy, but don’t
      you, so help me, move outside this room.’
      
      “It was four o’clock in the morning then, and if we’d of raised the
      blinds we’d of seen daylight.”
      
      “Did he go?” I asked innocently.
      
      “Sure he went.” Mr. Wolfshiem’s nose flashed at me indignantly. “He
      turned around in the door and says: ‘Don’t let that waiter take away
      my coffee!’ Then he went out on the sidewalk, and they shot him three
      times in his full belly and drove away.”
      
      “Four of them were electrocuted,” I said, remembering.
      
      “Five, with Becker.” His nostrils turned to me in an interested way.
      “I understand you’re looking for a business gonnegtion.”
      
      The juxtaposition of these two remarks was startling. Gatsby answered
      for me:
      
      “Oh, no,” he exclaimed, “this isn’t the man.”
      
      “No?” Mr. Wolfshiem seemed disappointed.
      
      “This is just a friend. I told you we’d talk about that some other
      time.”
      
      “I beg your pardon,” said Mr. Wolfshiem, “I had a wrong man.”
      
      A succulent hash arrived, and Mr. Wolfshiem, forgetting the more
      sentimental atmosphere of the old Metropole, began to eat with
      ferocious delicacy. His eyes, meanwhile, roved very slowly all around
      the room—he completed the arc by turning to inspect the people
      directly behind. I think that, except for my presence, he would have
      taken one short glance beneath our own table.
      
      “Look here, old sport,” said Gatsby, leaning toward me, “I’m afraid I
      made you a little angry this morning in the car.”
      
      There was the smile again, but this time I held out against it.
      
      “I don’t like mysteries,” I answered, “and I don’t understand why you
      won’t come out frankly and tell me what you want. Why has it all got
      to come through Miss Baker?”
      
      “Oh, it’s nothing underhand,” he assured me. “Miss Baker’s a great
      sportswoman, you know, and she’d never do anything that wasn’t all
      right.”
      
      Suddenly he looked at his watch, jumped up, and hurried from the room,
      leaving me with Mr. Wolfshiem at the table.
      
      “He has to telephone,” said Mr. Wolfshiem, following him with his
      eyes. “Fine fellow, isn’t he? Handsome to look at and a perfect
      gentleman.”
      
      “Yes.”
      
      “He’s an Oggsford man.”
      
      “Oh!”
      
      “He went to Oggsford College in England. You know Oggsford College?”
      
      “I’ve heard of it.”
      
      “It’s one of the most famous colleges in the world.”
      
      “Have you known Gatsby for a long time?” I inquired.
      
      “Several years,” he answered in a gratified way. “I made the pleasure
      of his acquaintance just after the war. But I knew I had discovered a
      man of fine breeding after I talked with him an hour. I said to
      myself: ‘There’s the kind of man you’d like to take home and introduce
      to your mother and sister.’ ” He paused. “I see you’re looking at my
      cuff buttons.”
      
      I hadn’t been looking at them, but I did now. They were composed of
      oddly familiar pieces of ivory.
      
      “Finest specimens of human molars,” he informed me.
      
      “Well!” I inspected them. “That’s a very interesting idea.”
      
      “Yeah.” He flipped his sleeves up under his coat. “Yeah, Gatsby’s very
      careful about women. He would never so much as look at a friend’s
      wife.”
      
      When the subject of this instinctive trust returned to the table and
      sat down Mr. Wolfshiem drank his coffee with a jerk and got to his
      feet.
      
      “I have enjoyed my lunch,” he said, “and I’m going to run off from you
      two young men before I outstay my welcome.”
      
      “Don’t hurry Meyer,” said Gatsby, without enthusiasm. Mr. Wolfshiem
      raised his hand in a sort of benediction.
      
      “You’re very polite, but I belong to another generation,” he announced
      solemnly. “You sit here and discuss your sports and your young ladies
      and your—” He supplied an imaginary noun with another wave of his
      hand. “As for me, I am fifty years old, and I won’t impose myself on
      you any longer.”
      
      As he shook hands and turned away his tragic nose was trembling. I
      wondered if I had said anything to offend him.
      
      “He becomes very sentimental sometimes,” explained Gatsby. “This is
      one of his sentimental days. He’s quite a character around New York—a
      denizen of Broadway.”
      
      “Who is he, anyhow, an actor?”
      
      “No.”
      
      “A dentist?”
      
      “Meyer Wolfshiem? No, he’s a gambler.” Gatsby hesitated, then added,
      coolly: “He’s the man who fixed the World’s Series back in 1919.”
      
      “Fixed the World’s Series?” I repeated.
      
      The idea staggered me. I remembered, of course, that the World’s
      Series had been fixed in 1919, but if I had thought of it at all I
      would have thought of it as a thing that merely happened, the end of
      some inevitable chain. It never occurred to me that one man could
      start to play with the faith of fifty million people—with the
      single-mindedness of a burglar blowing a safe.
      
      “How did he happen to do that?” I asked after a minute.
      
      “He just saw the opportunity.”
      
      “Why isn’t he in jail?”
      
      “They can’t get him, old sport. He’s a smart man.”
      
      I insisted on paying the check. As the waiter brought my change I
      caught sight of Tom Buchanan across the crowded room.
      
      “Come along with me for a minute,” I said; “I’ve got to say hello to
      someone.”
      
      When he saw us Tom jumped up and took half a dozen steps in our
      direction.
      
      “Where’ve you been?” he demanded eagerly. “Daisy’s furious because you
      haven’t called up.”
      
      “This is Mr. Gatsby, Mr. Buchanan.”
      
      They shook hands briefly, and a strained, unfamiliar look of
      embarrassment came over Gatsby’s face.
      
      “How’ve you been, anyhow?” demanded Tom of me. “How’d you happen to
      come up this far to eat?”
      
      “I’ve been having lunch with Mr. Gatsby.”
      
      I turned toward Mr. Gatsby, but he was no longer there.
      
      One October day in nineteen-seventeen—
      
      (said Jordan Baker that afternoon, sitting up very straight on a
      straight chair in the tea-garden at the Plaza Hotel)
      
      —I was walking along from one place to another, half on the sidewalks
      and half on the lawns. I was happier on the lawns because I had on
      shoes from England with rubber knobs on the soles that bit into the
      soft ground. I had on a new plaid skirt also that blew a little in the
      wind, and whenever this happened the red, white, and blue banners in
      front of all the houses stretched out stiff and said tut-tut-tut-tut,
      in a disapproving way.
      
      The largest of the banners and the largest of the lawns belonged to
      Daisy Fay’s house. She was just eighteen, two years older than me, and
      by far the most popular of all the young girls in Louisville. She
      dressed in white, and had a little white roadster, and all day long
      the telephone rang in her house and excited young officers from Camp
      Taylor demanded the privilege of monopolizing her that
      night. “Anyways, for an hour!”
      
      When I came opposite her house that morning her white roadster was
      beside the kerb, and she was sitting in it with a lieutenant I had
      never seen before. They were so engrossed in each other that she
      didn’t see me until I was five feet away.
      
      “Hello, Jordan,” she called unexpectedly. “Please come here.”
      
      I was flattered that she wanted to speak to me, because of all the
      older girls I admired her most. She asked me if I was going to the Red
      Cross to make bandages. I was. Well, then, would I tell them that she
      couldn’t come that day? The officer looked at Daisy while she was
      speaking, in a way that every young girl wants to be looked at
      sometime, and because it seemed romantic to me I have remembered the
      incident ever since. His name was Jay Gatsby, and I didn’t lay eyes on
      him again for over four years—even after I’d met him on Long Island I
      didn’t realize it was the same man.
      
      That was nineteen-seventeen. By the next year I had a few beaux
      myself, and I began to play in tournaments, so I didn’t see Daisy very
      often. She went with a slightly older crowd—when she went with anyone
      at all. Wild rumours were circulating about her—how her mother had
      found her packing her bag one winter night to go to New York and say
      goodbye to a soldier who was going overseas. She was effectually
      prevented, but she wasn’t on speaking terms with her family for
      several weeks. After that she didn’t play around with the soldiers any
      more, but only with a few flat-footed, shortsighted young men in town,
      who couldn’t get into the army at all.
      
      By the next autumn she was gay again, gay as ever. She had a début
      after the armistice, and in February she was presumably engaged to a
      man from New Orleans. In June she married Tom Buchanan of Chicago,
      with more pomp and circumstance than Louisville ever knew before. He
      came down with a hundred people in four private cars, and hired a
      whole floor of the Muhlbach Hotel, and the day before the wedding he
      gave her a string of pearls valued at three hundred and fifty thousand
      dollars.
      
      I was a bridesmaid. I came into her room half an hour before the
      bridal dinner, and found her lying on her bed as lovely as the June
      night in her flowered dress—and as drunk as a monkey. She had a bottle
      of Sauterne in one hand and a letter in the other.
      
      “ ’Gratulate me,” she muttered. “Never had a drink before, but oh how
      I do enjoy it.”
      
      “What’s the matter, Daisy?”
      
      I was scared, I can tell you; I’d never seen a girl like that before.
      
      “Here, dearies.” She groped around in a wastebasket she had with her
      on the bed and pulled out the string of pearls. “Take ’em downstairs
      and give ’em back to whoever they belong to. Tell ’em all Daisy’s
      change’ her mine. Say: ‘Daisy’s change’ her mine!’ ”
      
      She began to cry—she cried and cried. I rushed out and found her
      mother’s maid, and we locked the door and got her into a cold bath.
      She wouldn’t let go of the letter. She took it into the tub with her
      and squeezed it up in a wet ball, and only let me leave it in the
      soap-dish when she saw that it was coming to pieces like snow.
      
      But she didn’t say another word. We gave her spirits of ammonia and
      put ice on her forehead and hooked her back into her dress, and half
      an hour later, when we walked out of the room, the pearls were around
      her neck and the incident was over. Next day at five o’clock she
      married Tom Buchanan without so much as a shiver, and started off on a
      three months’ trip to the South Seas.
      
      I saw them in Santa Barbara when they came back, and I thought I’d
      never seen a girl so mad about her husband. If he left the room for a
      minute she’d look around uneasily, and say: “Where’s Tom gone?” and
      wear the most abstracted expression until she saw him coming in the
      door. She used to sit on the sand with his head in her lap by the
      hour, rubbing her fingers over his eyes and looking at him with
      unfathomable delight. It was touching to see them together—it made you
      laugh in a hushed, fascinated way. That was in August. A week after I
      left Santa Barbara Tom ran into a wagon on the Ventura road one night,
      and ripped a front wheel off his car. The girl who was with him got
      into the papers, too, because her arm was broken—she was one of the
      chambermaids in the Santa Barbara Hotel.
      
      The next April Daisy had her little girl, and they went to France for
      a year. I saw them one spring in Cannes, and later in Deauville, and
      then they came back to Chicago to settle down. Daisy was popular in
      Chicago, as you know. They moved with a fast crowd, all of them young
      and rich and wild, but she came out with an absolutely perfect
      reputation. Perhaps because she doesn’t drink. It’s a great advantage
      not to drink among hard-drinking people. You can hold your tongue and,
      moreover, you can time any little irregularity of your own so that
      everybody else is so blind that they don’t see or care. Perhaps Daisy
      never went in for amour at all—and yet there’s something in that voice
      of hers …
      
      Well, about six weeks ago, she heard the name Gatsby for the first
      time in years. It was when I asked you—do you remember?—if you knew
      Gatsby in West Egg. After you had gone home she came into my room and
      woke me up, and said: “What Gatsby?” and when I described him—I was
      half asleep—she said in the strangest voice that it must be the man
      she used to know. It wasn’t until then that I connected this Gatsby
      with the officer in her white car.
      
      
      When Jordan Baker had finished telling all this we had left the Plaza
      for half an hour and were driving in a victoria through Central Park.
      The sun had gone down behind the tall apartments of the movie stars in
      the West Fifties, and the clear voices of children, already gathered
      like crickets on the grass, rose through the hot twilight:
      
       “I’m the Sheik of Araby. Your love belongs to me. At night when
       you’re asleep Into your tent I’ll creep—”
      
      “It was a strange coincidence,” I said.
      
      “But it wasn’t a coincidence at all.”
      
      “Why not?”
      
      “Gatsby bought that house so that Daisy would be just across the bay.”
      
      Then it had not been merely the stars to which he had aspired on that
      June night. He came alive to me, delivered suddenly from the womb of
      his purposeless splendour.
      
      “He wants to know,” continued Jordan, “if you’ll invite Daisy to your
      house some afternoon and then let him come over.”
      
      The modesty of the demand shook me. He had waited five years and
      bought a mansion where he dispensed starlight to casual moths—so that
      he could “come over” some afternoon to a stranger’s garden.
      
      “Did I have to know all this before he could ask such a little thing?”
      
      “He’s afraid, he’s waited so long. He thought you might be
      offended. You see, he’s regular tough underneath it all.”
      
      Something worried me.
      
      “Why didn’t he ask you to arrange a meeting?”
      
      “He wants her to see his house,” she explained. “And your house is
      right next door.”
      
      “Oh!”
      
      “I think he half expected her to wander into one of his parties, some
      night,” went on Jordan, “but she never did. Then he began asking
      people casually if they knew her, and I was the first one he found. It
      was that night he sent for me at his dance, and you should have heard
      the elaborate way he worked up to it. Of course, I immediately
      suggested a luncheon in New York—and I thought he’d go mad:
      
      “ ‘I don’t want to do anything out of the way!’ he kept saying. ‘I
      want to see her right next door.’
      
      “When I said you were a particular friend of Tom’s, he started to
      abandon the whole idea. He doesn’t know very much about Tom, though he
      says he’s read a Chicago paper for years just on the chance of
      catching a glimpse of Daisy’s name.”
      
      It was dark now, and as we dipped under a little bridge I put my arm
      around Jordan’s golden shoulder and drew her toward me and asked her
      to dinner. Suddenly I wasn’t thinking of Daisy and Gatsby any more,
      but of this clean, hard, limited person, who dealt in universal
      scepticism, and who leaned back jauntily just within the circle of my
      arm. A phrase began to beat in my ears with a sort of heady
      excitement: “There are only the pursued, the pursuing, the busy, and
      the tired.”
      
      “And Daisy ought to have something in her life,” murmured Jordan to
      me.
      
      “Does she want to see Gatsby?”
      
      “She’s not to know about it. Gatsby doesn’t want her to know. You’re
      just supposed to invite her to tea.”
      
      We passed a barrier of dark trees, and then the façade of Fifty-Ninth
      Street, a block of delicate pale light, beamed down into the park.
      Unlike Gatsby and Tom Buchanan, I had no girl whose disembodied face
      floated along the dark cornices and blinding signs, and so I drew up
      the girl beside me, tightening my arms. Her wan, scornful mouth
      smiled, and so I drew her up again closer, this time to my face.
      
      ` },
      { chapter: 5, title: 'Chapter 5', content: `V

      When I came home to West Egg that night I was afraid for a moment that
      my house was on fire. Two o’clock and the whole corner of the
      peninsula was blazing with light, which fell unreal on the shrubbery
      and made thin elongating glints upon the roadside wires. Turning a
      corner, I saw that it was Gatsby’s house, lit from tower to cellar.
      
      At first I thought it was another party, a wild rout that had resolved
      itself into “hide-and-go-seek” or “sardines-in-the-box” with all the
      house thrown open to the game. But there wasn’t a sound. Only wind in
      the trees, which blew the wires and made the lights go off and on
      again as if the house had winked into the darkness. As my taxi groaned
      away I saw Gatsby walking toward me across his lawn.
      
      “Your place looks like the World’s Fair,” I said.
      
      “Does it?” He turned his eyes toward it absently. “I have been
      glancing into some of the rooms. Let’s go to Coney Island, old
      sport. In my car.”
      
      “It’s too late.”
      
      “Well, suppose we take a plunge in the swimming pool? I haven’t made
      use of it all summer.”
      
      “I’ve got to go to bed.”
      
      “All right.”
      
      He waited, looking at me with suppressed eagerness.
      
      “I talked with Miss Baker,” I said after a moment. “I’m going to call
      up Daisy tomorrow and invite her over here to tea.”
      
      “Oh, that’s all right,” he said carelessly. “I don’t want to put you
      to any trouble.”
      
      “What day would suit you?”
      
      “What day would suit you?” he corrected me quickly. “I don’t want to
      put you to any trouble, you see.”
      
      “How about the day after tomorrow?”
      
      He considered for a moment. Then, with reluctance: “I want to get the
      grass cut,” he said.
      
      We both looked down at the grass—there was a sharp line where my
      ragged lawn ended and the darker, well-kept expanse of his began. I
      suspected that he meant my grass.
      
      “There’s another little thing,” he said uncertainly, and hesitated.
      
      “Would you rather put it off for a few days?” I asked.
      
      “Oh, it isn’t about that. At least—” He fumbled with a series of
      beginnings. “Why, I thought—why, look here, old sport, you don’t make
      much money, do you?”
      
      “Not very much.”
      
      This seemed to reassure him and he continued more confidently.
      
      “I thought you didn’t, if you’ll pardon my—you see, I carry on a
      little business on the side, a sort of side line, you understand. And
      I thought that if you don’t make very much—You’re selling bonds,
      aren’t you, old sport?”
      
      “Trying to.”
      
      “Well, this would interest you. It wouldn’t take up much of your time
      and you might pick up a nice bit of money. It happens to be a rather
      confidential sort of thing.”
      
      I realize now that under different circumstances that conversation
      might have been one of the crises of my life. But, because the offer
      was obviously and tactlessly for a service to be rendered, I had no
      choice except to cut him off there.
      
      “I’ve got my hands full,” I said. “I’m much obliged but I couldn’t
      take on any more work.”
      
      “You wouldn’t have to do any business with Wolfshiem.” Evidently he
      thought that I was shying away from the “gonnegtion” mentioned at
      lunch, but I assured him he was wrong. He waited a moment longer,
      hoping I’d begin a conversation, but I was too absorbed to be
      responsive, so he went unwillingly home.
      
      The evening had made me lightheaded and happy; I think I walked into a
      deep sleep as I entered my front door. So I don’t know whether or not
      Gatsby went to Coney Island, or for how many hours he “glanced into
      rooms” while his house blazed gaudily on. I called up Daisy from the
      office next morning, and invited her to come to tea.
      
      “Don’t bring Tom,” I warned her.
      
      “What?”
      
      “Don’t bring Tom.”
      
      “Who is ‘Tom’?” she asked innocently.
      
      The day agreed upon was pouring rain. At eleven o’clock a man in a
      raincoat, dragging a lawn-mower, tapped at my front door and said that
      Mr. Gatsby had sent him over to cut my grass. This reminded me that I
      had forgotten to tell my Finn to come back, so I drove into West Egg
      Village to search for her among soggy whitewashed alleys and to buy
      some cups and lemons and flowers.
      
      The flowers were unnecessary, for at two o’clock a greenhouse arrived
      from Gatsby’s, with innumerable receptacles to contain it. An hour
      later the front door opened nervously, and Gatsby in a white flannel
      suit, silver shirt, and gold-coloured tie, hurried in. He was pale,
      and there were dark signs of sleeplessness beneath his eyes.
      
      “Is everything all right?” he asked immediately.
      
      “The grass looks fine, if that’s what you mean.”
      
      “What grass?” he inquired blankly. “Oh, the grass in the yard.” He
      looked out the window at it, but, judging from his expression, I don’t
      believe he saw a thing.
      
      “Looks very good,” he remarked vaguely. “One of the papers said they
      thought the rain would stop about four. I think it was The
      Journal. Have you got everything you need in the shape of—of tea?”
      
      I took him into the pantry, where he looked a little reproachfully at
      the Finn. Together we scrutinized the twelve lemon cakes from the
      delicatessen shop.
      
      “Will they do?” I asked.
      
      “Of course, of course! They’re fine!” and he added hollowly, “… old
      sport.”
      
      The rain cooled about half-past three to a damp mist, through which
      occasional thin drops swam like dew. Gatsby looked with vacant eyes
      through a copy of Clay’s Economics, starting at the Finnish tread that
      shook the kitchen floor, and peering towards the bleared windows from
      time to time as if a series of invisible but alarming happenings were
      taking place outside. Finally he got up and informed me, in an
      uncertain voice, that he was going home.
      
      “Why’s that?”
      
      “Nobody’s coming to tea. It’s too late!” He looked at his watch as if
      there was some pressing demand on his time elsewhere. “I can’t wait
      all day.”
      
      “Don’t be silly; it’s just two minutes to four.”
      
      He sat down miserably, as if I had pushed him, and simultaneously
      there was the sound of a motor turning into my lane. We both jumped
      up, and, a little harrowed myself, I went out into the yard.
      
      Under the dripping bare lilac-trees a large open car was coming up the
      drive. It stopped. Daisy’s face, tipped sideways beneath a
      three-cornered lavender hat, looked out at me with a bright ecstatic
      smile.
      
      “Is this absolutely where you live, my dearest one?”
      
      The exhilarating ripple of her voice was a wild tonic in the rain. I
      had to follow the sound of it for a moment, up and down, with my ear
      alone, before any words came through. A damp streak of hair lay like a
      dash of blue paint across her cheek, and her hand was wet with
      glistening drops as I took it to help her from the car.
      
      “Are you in love with me,” she said low in my ear, “or why did I have
      to come alone?”
      
      “That’s the secret of Castle Rackrent. Tell your chauffeur to go far
      away and spend an hour.”
      
      “Come back in an hour, Ferdie.” Then in a grave murmur: “His name is
      Ferdie.”
      
      “Does the gasoline affect his nose?”
      
      “I don’t think so,” she said innocently. “Why?”
      
      We went in. To my overwhelming surprise the living-room was deserted.
      
      “Well, that’s funny,” I exclaimed.
      
      “What’s funny?”
      
      She turned her head as there was a light dignified knocking at the
      front door. I went out and opened it. Gatsby, pale as death, with his
      hands plunged like weights in his coat pockets, was standing in a
      puddle of water glaring tragically into my eyes.
      
      With his hands still in his coat pockets he stalked by me into the
      hall, turned sharply as if he were on a wire, and disappeared into the
      living-room. It wasn’t a bit funny. Aware of the loud beating of my
      own heart I pulled the door to against the increasing rain.
      
      For half a minute there wasn’t a sound. Then from the living-room I
      heard a sort of choking murmur and part of a laugh, followed by
      Daisy’s voice on a clear artificial note:
      
      “I certainly am awfully glad to see you again.”
      
      A pause; it endured horribly. I had nothing to do in the hall, so I
      went into the room.
      
      Gatsby, his hands still in his pockets, was reclining against the
      mantelpiece in a strained counterfeit of perfect ease, even of
      boredom. His head leaned back so far that it rested against the face
      of a defunct mantelpiece clock, and from this position his distraught
      eyes stared down at Daisy, who was sitting, frightened but graceful,
      on the edge of a stiff chair.
      
      “We’ve met before,” muttered Gatsby. His eyes glanced momentarily at
      me, and his lips parted with an abortive attempt at a laugh. Luckily
      the clock took this moment to tilt dangerously at the pressure of his
      head, whereupon he turned and caught it with trembling fingers, and
      set it back in place. Then he sat down, rigidly, his elbow on the arm
      of the sofa and his chin in his hand.
      
      “I’m sorry about the clock,” he said.
      
      My own face had now assumed a deep tropical burn. I couldn’t muster up
      a single commonplace out of the thousand in my head.
      
      “It’s an old clock,” I told them idiotically.
      
      I think we all believed for a moment that it had smashed in pieces on
      the floor.
      
      “We haven’t met for many years,” said Daisy, her voice as
      matter-of-fact as it could ever be.
      
      “Five years next November.”
      
      The automatic quality of Gatsby’s answer set us all back at least
      another minute. I had them both on their feet with the desperate
      suggestion that they help me make tea in the kitchen when the demoniac
      Finn brought it in on a tray.
      
      Amid the welcome confusion of cups and cakes a certain physical
      decency established itself. Gatsby got himself into a shadow and,
      while Daisy and I talked, looked conscientiously from one to the other
      of us with tense, unhappy eyes. However, as calmness wasn’t an end in
      itself, I made an excuse at the first possible moment, and got to my
      feet.
      
      “Where are you going?” demanded Gatsby in immediate alarm.
      
      “I’ll be back.”
      
      “I’ve got to speak to you about something before you go.”
      
      He followed me wildly into the kitchen, closed the door, and
      whispered: “Oh, God!” in a miserable way.
      
      “What’s the matter?”
      
      “This is a terrible mistake,” he said, shaking his head from side to
      side, “a terrible, terrible mistake.”
      
      “You’re just embarrassed, that’s all,” and luckily I added: “Daisy’s
      embarrassed too.”
      
      “She’s embarrassed?” he repeated incredulously.
      
      “Just as much as you are.”
      
      “Don’t talk so loud.”
      
      “You’re acting like a little boy,” I broke out impatiently. “Not only
      that, but you’re rude. Daisy’s sitting in there all alone.”
      
      He raised his hand to stop my words, looked at me with unforgettable
      reproach, and, opening the door cautiously, went back into the other
      room.
      
      I walked out the back way—just as Gatsby had when he had made his
      nervous circuit of the house half an hour before—and ran for a huge
      black knotted tree, whose massed leaves made a fabric against the
      rain. Once more it was pouring, and my irregular lawn, well-shaved by
      Gatsby’s gardener, abounded in small muddy swamps and prehistoric
      marshes. There was nothing to look at from under the tree except
      Gatsby’s enormous house, so I stared at it, like Kant at his church
      steeple, for half an hour. A brewer had built it early in the “period”
      craze, a decade before, and there was a story that he’d agreed to pay
      five years’ taxes on all the neighbouring cottages if the owners would
      have their roofs thatched with straw. Perhaps their refusal took the
      heart out of his plan to Found a Family—he went into an immediate
      decline. His children sold his house with the black wreath still on
      the door. Americans, while willing, even eager, to be serfs, have
      always been obstinate about being peasantry.
      
      After half an hour, the sun shone again, and the grocer’s automobile
      rounded Gatsby’s drive with the raw material for his servants’
      dinner—I felt sure he wouldn’t eat a spoonful. A maid began opening
      the upper windows of his house, appeared momentarily in each, and,
      leaning from the large central bay, spat meditatively into the
      garden. It was time I went back. While the rain continued it had
      seemed like the murmur of their voices, rising and swelling a little
      now and then with gusts of emotion. But in the new silence I felt that
      silence had fallen within the house too.
      
      I went in—after making every possible noise in the kitchen, short of
      pushing over the stove—but I don’t believe they heard a sound. They
      were sitting at either end of the couch, looking at each other as if
      some question had been asked, or was in the air, and every vestige of
      embarrassment was gone. Daisy’s face was smeared with tears, and when
      I came in she jumped up and began wiping at it with her handkerchief
      before a mirror. But there was a change in Gatsby that was simply
      confounding. He literally glowed; without a word or a gesture of
      exultation a new well-being radiated from him and filled the little
      room.
      
      “Oh, hello, old sport,” he said, as if he hadn’t seen me for years. I
      thought for a moment he was going to shake hands.
      
      “It’s stopped raining.”
      
      “Has it?” When he realized what I was talking about, that there were
      twinkle-bells of sunshine in the room, he smiled like a weather man,
      like an ecstatic patron of recurrent light, and repeated the news to
      Daisy. “What do you think of that? It’s stopped raining.”
      
      “I’m glad, Jay.” Her throat, full of aching, grieving beauty, told
      only of her unexpected joy.
      
      “I want you and Daisy to come over to my house,” he said, “I’d like to
      show her around.”
      
      “You’re sure you want me to come?”
      
      “Absolutely, old sport.”
      
      Daisy went upstairs to wash her face—too late I thought with
      humiliation of my towels—while Gatsby and I waited on the lawn.
      
      “My house looks well, doesn’t it?” he demanded. “See how the whole
      front of it catches the light.”
      
      I agreed that it was splendid.
      
      “Yes.” His eyes went over it, every arched door and square tower. “It
      took me just three years to earn the money that bought it.”
      
      “I thought you inherited your money.”
      
      “I did, old sport,” he said automatically, “but I lost most of it in
      the big panic—the panic of the war.”
      
      I think he hardly knew what he was saying, for when I asked him what
      business he was in he answered: “That’s my affair,” before he realized
      that it wasn’t an appropriate reply.
      
      “Oh, I’ve been in several things,” he corrected himself. “I was in the
      drug business and then I was in the oil business. But I’m not in
      either one now.” He looked at me with more attention. “Do you mean
      you’ve been thinking over what I proposed the other night?”
      
      Before I could answer, Daisy came out of the house and two rows of
      brass buttons on her dress gleamed in the sunlight.
      
      “That huge place there?” she cried pointing.
      
      “Do you like it?”
      
      “I love it, but I don’t see how you live there all alone.”
      
      “I keep it always full of interesting people, night and day. People
      who do interesting things. Celebrated people.”
      
      Instead of taking the shortcut along the Sound we went down to the
      road and entered by the big postern. With enchanting murmurs Daisy
      admired this aspect or that of the feudal silhouette against the sky,
      admired the gardens, the sparkling odour of jonquils and the frothy
      odour of hawthorn and plum blossoms and the pale gold odour of
      kiss-me-at-the-gate. It was strange to reach the marble steps and find
      no stir of bright dresses in and out the door, and hear no sound but
      bird voices in the trees.
      
      And inside, as we wandered through Marie Antoinette music-rooms and
      Restoration Salons, I felt that there were guests concealed behind
      every couch and table, under orders to be breathlessly silent until we
      had passed through. As Gatsby closed the door of “the Merton College
      Library” I could have sworn I heard the owl-eyed man break into
      ghostly laughter.
      
      We went upstairs, through period bedrooms swathed in rose and lavender
      silk and vivid with new flowers, through dressing-rooms and poolrooms,
      and bathrooms with sunken baths—intruding into one chamber where a
      dishevelled man in pyjamas was doing liver exercises on the floor. It
      was Mr. Klipspringer, the “boarder.” I had seen him wandering hungrily
      about the beach that morning. Finally we came to Gatsby’s own
      apartment, a bedroom and a bath, and an Adam’s study, where we sat
      down and drank a glass of some Chartreuse he took from a cupboard in
      the wall.
      
      He hadn’t once ceased looking at Daisy, and I think he revalued
      everything in his house according to the measure of response it drew
      from her well-loved eyes. Sometimes too, he stared around at his
      possessions in a dazed way, as though in her actual and astounding
      presence none of it was any longer real. Once he nearly toppled down a
      flight of stairs.
      
      His bedroom was the simplest room of all—except where the dresser was
      garnished with a toilet set of pure dull gold. Daisy took the brush
      with delight, and smoothed her hair, whereupon Gatsby sat down and
      shaded his eyes and began to laugh.
      
      “It’s the funniest thing, old sport,” he said hilariously. “I
      can’t—When I try to—”
      
      He had passed visibly through two states and was entering upon a
      third. After his embarrassment and his unreasoning joy he was consumed
      with wonder at her presence. He had been full of the idea so long,
      dreamed it right through to the end, waited with his teeth set, so to
      speak, at an inconceivable pitch of intensity. Now, in the reaction,
      he was running down like an over-wound clock.
      
      Recovering himself in a minute he opened for us two hulking patent
      cabinets which held his massed suits and dressing-gowns and ties, and
      his shirts, piled like bricks in stacks a dozen high.
      
      “I’ve got a man in England who buys me clothes. He sends over a
      selection of things at the beginning of each season, spring and fall.”
      
      He took out a pile of shirts and began throwing them, one by one,
      before us, shirts of sheer linen and thick silk and fine flannel,
      which lost their folds as they fell and covered the table in
      many-coloured disarray. While we admired he brought more and the soft
      rich heap mounted higher—shirts with stripes and scrolls and plaids in
      coral and apple-green and lavender and faint orange, with monograms of
      indian blue. Suddenly, with a strained sound, Daisy bent her head into
      the shirts and began to cry stormily.
      
      “They’re such beautiful shirts,” she sobbed, her voice muffled in the
      thick folds. “It makes me sad because I’ve never seen such—such
      beautiful shirts before.”
      
      ------------------------------------------------------------------------
      
      After the house, we were to see the grounds and the swimming pool, and
      the hydroplane, and the midsummer flowers—but outside Gatsby’s window
      it began to rain again, so we stood in a row looking at the corrugated
      surface of the Sound.
      
      “If it wasn’t for the mist we could see your home across the bay,”
      said Gatsby. “You always have a green light that burns all night at
      the end of your dock.”
      
      Daisy put her arm through his abruptly, but he seemed absorbed in what
      he had just said. Possibly it had occurred to him that the colossal
      significance of that light had now vanished forever. Compared to the
      great distance that had separated him from Daisy it had seemed very
      near to her, almost touching her. It had seemed as close as a star to
      the moon. Now it was again a green light on a dock. His count of
      enchanted objects had diminished by one.
      
      I began to walk about the room, examining various indefinite objects
      in the half darkness. A large photograph of an elderly man in yachting
      costume attracted me, hung on the wall over his desk.
      
      “Who’s this?”
      
      “That? That’s Mr. Dan Cody, old sport.”
      
      The name sounded faintly familiar.
      
      “He’s dead now. He used to be my best friend years ago.”
      
      There was a small picture of Gatsby, also in yachting costume, on the
      bureau—Gatsby with his head thrown back defiantly—taken apparently
      when he was about eighteen.
      
      “I adore it,” exclaimed Daisy. “The pompadour! You never told me you
      had a pompadour—or a yacht.”
      
      “Look at this,” said Gatsby quickly. “Here’s a lot of clippings—about
      you.”
      
      They stood side by side examining it. I was going to ask to see the
      rubies when the phone rang, and Gatsby took up the receiver.
      
      “Yes … Well, I can’t talk now … I can’t talk now, old sport … I said a
      small town … He must know what a small town is … Well, he’s no use to
      us if Detroit is his idea of a small town …”
      
      He rang off.
      
      “Come here quick!” cried Daisy at the window.
      
      The rain was still falling, but the darkness had parted in the west,
      and there was a pink and golden billow of foamy clouds above the sea.
      
      “Look at that,” she whispered, and then after a moment: “I’d like to
      just get one of those pink clouds and put you in it and push you
      around.”
      
      I tried to go then, but they wouldn’t hear of it; perhaps my presence
      made them feel more satisfactorily alone.
      
      “I know what we’ll do,” said Gatsby, “we’ll have Klipspringer play the
      piano.”
      
      He went out of the room calling “Ewing!” and returned in a few minutes
      accompanied by an embarrassed, slightly worn young man, with
      shell-rimmed glasses and scanty blond hair. He was now decently
      clothed in a “sport shirt,” open at the neck, sneakers, and duck
      trousers of a nebulous hue.
      
      “Did we interrupt your exercise?” inquired Daisy politely.
      
      “I was asleep,” cried Mr. Klipspringer, in a spasm of embarrassment.
      “That is, I’d been asleep. Then I got up …”
      
      “Klipspringer plays the piano,” said Gatsby, cutting him off. “Don’t
      you, Ewing, old sport?”
      
      “I don’t play well. I don’t—hardly play at all. I’m all out of prac—”
      
      “We’ll go downstairs,” interrupted Gatsby. He flipped a switch. The
      grey windows disappeared as the house glowed full of light.
      
      In the music-room Gatsby turned on a solitary lamp beside the piano.
      He lit Daisy’s cigarette from a trembling match, and sat down with her
      on a couch far across the room, where there was no light save what the
      gleaming floor bounced in from the hall.
      
      When Klipspringer had played “The Love Nest” he turned around on the
      bench and searched unhappily for Gatsby in the gloom.
      
      “I’m all out of practice, you see. I told you I couldn’t play. I’m all
      out of prac—”
      
      “Don’t talk so much, old sport,” commanded Gatsby. “Play!”
      
       “In the morning, In the evening, Ain’t we got fun—”
      
      Outside the wind was loud and there was a faint flow of thunder along
      the Sound. All the lights were going on in West Egg now; the electric
      trains, men-carrying, were plunging home through the rain from New
      York. It was the hour of a profound human change, and excitement was
      generating on the air.
      
       “One thing’s sure and nothing’s surer The rich get richer and the
       poor get—children. In the meantime, In between time—”
      
      As I went over to say goodbye I saw that the expression of
      bewilderment had come back into Gatsby’s face, as though a faint doubt
      had occurred to him as to the quality of his present happiness. Almost
      five years! There must have been moments even that afternoon when
      Daisy tumbled short of his dreams—not through her own fault, but
      because of the colossal vitality of his illusion. It had gone beyond
      her, beyond everything. He had thrown himself into it with a creative
      passion, adding to it all the time, decking it out with every bright
      feather that drifted his way. No amount of fire or freshness can
      challenge what a man can store up in his ghostly heart.
      
      As I watched him he adjusted himself a little, visibly. His hand took
      hold of hers, and as she said something low in his ear he turned
      toward her with a rush of emotion. I think that voice held him most,
      with its fluctuating, feverish warmth, because it couldn’t be
      over-dreamed—that voice was a deathless song.
      
      They had forgotten me, but Daisy glanced up and held out her hand;
      Gatsby didn’t know me now at all. I looked once more at them and they
      looked back at me, remotely, possessed by intense life. Then I went
      out of the room and down the marble steps into the rain, leaving them
      there together.
      
      ` },
      { chapter: 6, title: 'Chapter 6', content: `VI

      About this time an ambitious young reporter from New York arrived one
      morning at Gatsby’s door and asked him if he had anything to say.
      
      “Anything to say about what?” inquired Gatsby politely.
      
      “Why—any statement to give out.”
      
      It transpired after a confused five minutes that the man had heard
      Gatsby’s name around his office in a connection which he either
      wouldn’t reveal or didn’t fully understand. This was his day off and
      with laudable initiative he had hurried out “to see.”
      
      It was a random shot, and yet the reporter’s instinct was right.
      Gatsby’s notoriety, spread about by the hundreds who had accepted his
      hospitality and so become authorities upon his past, had increased all
      summer until he fell just short of being news. Contemporary legends
      such as the “underground pipeline to Canada” attached themselves to
      him, and there was one persistent story that he didn’t live in a house
      at all, but in a boat that looked like a house and was moved secretly
      up and down the Long Island shore. Just why these inventions were a
      source of satisfaction to James Gatz of North Dakota, isn’t easy to
      say.
      
      James Gatz—that was really, or at least legally, his name. He had
      changed it at the age of seventeen and at the specific moment that
      witnessed the beginning of his career—when he saw Dan Cody’s yacht
      drop anchor over the most insidious flat on Lake Superior. It was
      James Gatz who had been loafing along the beach that afternoon in a
      torn green jersey and a pair of canvas pants, but it was already Jay
      Gatsby who borrowed a rowboat, pulled out to the Tuolomee, and
      informed Cody that a wind might catch him and break him up in half an
      hour.
      
      I suppose he’d had the name ready for a long time, even then. His
      parents were shiftless and unsuccessful farm people—his imagination
      had never really accepted them as his parents at all. The truth was
      that Jay Gatsby of West Egg, Long Island, sprang from his Platonic
      conception of himself. He was a son of God—a phrase which, if it means
      anything, means just that—and he must be about His Father’s business,
      the service of a vast, vulgar, and meretricious beauty. So he invented
      just the sort of Jay Gatsby that a seventeen-year-old boy would be
      likely to invent, and to this conception he was faithful to the end.
      
      For over a year he had been beating his way along the south shore of
      Lake Superior as a clam-digger and a salmon-fisher or in any other
      capacity that brought him food and bed. His brown, hardening body
      lived naturally through the half-fierce, half-lazy work of the bracing
      days. He knew women early, and since they spoiled him he became
      contemptuous of them, of young virgins because they were ignorant, of
      the others because they were hysterical about things which in his
      overwhelming self-absorption he took for granted.
      
      But his heart was in a constant, turbulent riot. The most grotesque
      and fantastic conceits haunted him in his bed at night. A universe of
      ineffable gaudiness spun itself out in his brain while the clock
      ticked on the washstand and the moon soaked with wet light his tangled
      clothes upon the floor. Each night he added to the pattern of his
      fancies until drowsiness closed down upon some vivid scene with an
      oblivious embrace. For a while these reveries provided an outlet for
      his imagination; they were a satisfactory hint of the unreality of
      reality, a promise that the rock of the world was founded securely on
      a fairy’s wing.
      
      An instinct toward his future glory had led him, some months before,
      to the small Lutheran College of St. Olaf’s in southern Minnesota. He
      stayed there two weeks, dismayed at its ferocious indifference to the
      drums of his destiny, to destiny itself, and despising the janitor’s
      work with which he was to pay his way through. Then he drifted back to
      Lake Superior, and he was still searching for something to do on the
      day that Dan Cody’s yacht dropped anchor in the shallows alongshore.
      
      Cody was fifty years old then, a product of the Nevada silver fields,
      of the Yukon, of every rush for metal since seventy-five. The
      transactions in Montana copper that made him many times a millionaire
      found him physically robust but on the verge of soft-mindedness, and,
      suspecting this, an infinite number of women tried to separate him
      from his money. The none too savoury ramifications by which Ella Kaye,
      the newspaper woman, played Madame de Maintenon to his weakness and
      sent him to sea in a yacht, were common property of the turgid
      journalism in 1902. He had been coasting along all too hospitable
      shores for five years when he turned up as James Gatz’s destiny in
      Little Girl Bay.
      
      To young Gatz, resting on his oars and looking up at the railed deck,
      that yacht represented all the beauty and glamour in the world. I
      suppose he smiled at Cody—he had probably discovered that people liked
      him when he smiled. At any rate Cody asked him a few questions (one of
      them elicited the brand new name) and found that he was quick and
      extravagantly ambitious. A few days later he took him to Duluth and
      bought him a blue coat, six pairs of white duck trousers, and a
      yachting cap. And when the Tuolomee left for the West Indies and the
      Barbary Coast, Gatsby left too.
      
      He was employed in a vague personal capacity—while he remained with
      Cody he was in turn steward, mate, skipper, secretary, and even
      jailor, for Dan Cody sober knew what lavish doings Dan Cody drunk
      might soon be about, and he provided for such contingencies by
      reposing more and more trust in Gatsby. The arrangement lasted five
      years, during which the boat went three times around the Continent.
      It might have lasted indefinitely except for the fact that Ella Kaye
      came on board one night in Boston and a week later Dan Cody
      inhospitably died.
      
      I remember the portrait of him up in Gatsby’s bedroom, a grey, florid
      man with a hard, empty face—the pioneer debauchee, who during one
      phase of American life brought back to the Eastern seaboard the savage
      violence of the frontier brothel and saloon. It was indirectly due to
      Cody that Gatsby drank so little. Sometimes in the course of gay
      parties women used to rub champagne into his hair; for himself he
      formed the habit of letting liquor alone.
      
      And it was from Cody that he inherited money—a legacy of twenty-five
      thousand dollars. He didn’t get it. He never understood the legal
      device that was used against him, but what remained of the millions
      went intact to Ella Kaye. He was left with his singularly appropriate
      education; the vague contour of Jay Gatsby had filled out to the
      substantiality of a man.
      
      ------------------------------------------------------------------------
      
      He told me all this very much later, but I’ve put it down here with
      the idea of exploding those first wild rumours about his antecedents,
      which weren’t even faintly true. Moreover he told it to me at a time
      of confusion, when I had reached the point of believing everything and
      nothing about him. So I take advantage of this short halt, while
      Gatsby, so to speak, caught his breath, to clear this set of
      misconceptions away.
      
      It was a halt, too, in my association with his affairs. For several
      weeks I didn’t see him or hear his voice on the phone—mostly I was in
      New York, trotting around with Jordan and trying to ingratiate myself
      with her senile aunt—but finally I went over to his house one Sunday
      afternoon. I hadn’t been there two minutes when somebody brought Tom
      Buchanan in for a drink. I was startled, naturally, but the really
      surprising thing was that it hadn’t happened before.
      
      They were a party of three on horseback—Tom and a man named Sloane and
      a pretty woman in a brown riding-habit, who had been there previously.
      
      “I’m delighted to see you,” said Gatsby, standing on his porch. “I’m
      delighted that you dropped in.”
      
      As though they cared!
      
      “Sit right down. Have a cigarette or a cigar.” He walked around the
      room quickly, ringing bells. “I’ll have something to drink for you in
      just a minute.”
      
      He was profoundly affected by the fact that Tom was there. But he
      would be uneasy anyhow until he had given them something, realizing in
      a vague way that that was all they came for. Mr. Sloane wanted
      nothing. A lemonade? No, thanks. A little champagne? Nothing at all,
      thanks … I’m sorry—
      
      “Did you have a nice ride?”
      
      “Very good roads around here.”
      
      “I suppose the automobiles—”
      
      “Yeah.”
      
      Moved by an irresistible impulse, Gatsby turned to Tom, who had
      accepted the introduction as a stranger.
      
      “I believe we’ve met somewhere before, Mr. Buchanan.”
      
      “Oh, yes,” said Tom, gruffly polite, but obviously not remembering.
      “So we did. I remember very well.”
      
      “About two weeks ago.”
      
      “That’s right. You were with Nick here.”
      
      “I know your wife,” continued Gatsby, almost aggressively.
      
      “That so?”
      
      Tom turned to me.
      
      “You live near here, Nick?”
      
      “Next door.”
      
      “That so?”
      
      Mr. Sloane didn’t enter into the conversation, but lounged back
      haughtily in his chair; the woman said nothing either—until
      unexpectedly, after two highballs, she became cordial.
      
      “We’ll all come over to your next party, Mr. Gatsby,” she suggested.
      “What do you say?”
      
      “Certainly; I’d be delighted to have you.”
      
      “Be ver’ nice,” said Mr. Sloane, without gratitude. “Well—think ought
      to be starting home.”
      
      “Please don’t hurry,” Gatsby urged them. He had control of himself
      now, and he wanted to see more of Tom. “Why don’t you—why don’t you
      stay for supper? I wouldn’t be surprised if some other people dropped
      in from New York.”
      
      “You come to supper with me,” said the lady enthusiastically. “Both of
      you.”
      
      This included me. Mr. Sloane got to his feet.
      
      “Come along,” he said—but to her only.
      
      “I mean it,” she insisted. “I’d love to have you. Lots of room.”
      
      Gatsby looked at me questioningly. He wanted to go and he didn’t see
      that Mr. Sloane had determined he shouldn’t.
      
      “I’m afraid I won’t be able to,” I said.
      
      “Well, you come,” she urged, concentrating on Gatsby.
      
      Mr. Sloane murmured something close to her ear.
      
      “We won’t be late if we start now,” she insisted aloud.
      
      “I haven’t got a horse,” said Gatsby. “I used to ride in the army, but
      I’ve never bought a horse. I’ll have to follow you in my car. Excuse
      me for just a minute.”
      
      The rest of us walked out on the porch, where Sloane and the lady
      began an impassioned conversation aside.
      
      “My God, I believe the man’s coming,” said Tom. “Doesn’t he know she
      doesn’t want him?”
      
      “She says she does want him.”
      
      “She has a big dinner party and he won’t know a soul there.” He
      frowned. “I wonder where in the devil he met Daisy. By God, I may be
      old-fashioned in my ideas, but women run around too much these days to
      suit me. They meet all kinds of crazy fish.”
      
      Suddenly Mr. Sloane and the lady walked down the steps and mounted
      their horses.
      
      “Come on,” said Mr. Sloane to Tom, “we’re late. We’ve got to go.”  And
      then to me: “Tell him we couldn’t wait, will you?”
      
      Tom and I shook hands, the rest of us exchanged a cool nod, and they
      trotted quickly down the drive, disappearing under the August foliage
      just as Gatsby, with hat and light overcoat in hand, came out the
      front door.
      
      Tom was evidently perturbed at Daisy’s running around alone, for on
      the following Saturday night he came with her to Gatsby’s
      party. Perhaps his presence gave the evening its peculiar quality of
      oppressiveness—it stands out in my memory from Gatsby’s other parties
      that summer. There were the same people, or at least the same sort of
      people, the same profusion of champagne, the same many-coloured,
      many-keyed commotion, but I felt an unpleasantness in the air, a
      pervading harshness that hadn’t been there before. Or perhaps I had
      merely grown used to it, grown to accept West Egg as a world complete
      in itself, with its own standards and its own great figures, second to
      nothing because it had no consciousness of being so, and now I was
      looking at it again, through Daisy’s eyes. It is invariably saddening
      to look through new eyes at things upon which you have expended your
      own powers of adjustment.
      
      They arrived at twilight, and, as we strolled out among the sparkling
      hundreds, Daisy’s voice was playing murmurous tricks in her throat.
      
      “These things excite me so,” she whispered. “If you want to kiss me
      any time during the evening, Nick, just let me know and I’ll be glad
      to arrange it for you. Just mention my name. Or present a green card.
      I’m giving out green—”
      
      “Look around,” suggested Gatsby.
      
      “I’m looking around. I’m having a marvellous—”
      
      “You must see the faces of many people you’ve heard about.”
      
      Tom’s arrogant eyes roamed the crowd.
      
      “We don’t go around very much,” he said; “in fact, I was just thinking
      I don’t know a soul here.”
      
      “Perhaps you know that lady.” Gatsby indicated a gorgeous, scarcely
      human orchid of a woman who sat in state under a white-plum tree. Tom
      and Daisy stared, with that peculiarly unreal feeling that accompanies
      the recognition of a hitherto ghostly celebrity of the movies.
      
      “She’s lovely,” said Daisy.
      
      “The man bending over her is her director.”
      
      He took them ceremoniously from group to group:
      
      “Mrs. Buchanan … and Mr. Buchanan—” After an instant’s hesitation he
      added: “the polo player.”
      
      “Oh no,” objected Tom quickly, “not me.”
      
      But evidently the sound of it pleased Gatsby for Tom remained “the
      polo player” for the rest of the evening.
      
      “I’ve never met so many celebrities,” Daisy exclaimed. “I liked that
      man—what was his name?—with the sort of blue nose.”
      
      Gatsby identified him, adding that he was a small producer.
      
      “Well, I liked him anyhow.”
      
      “I’d a little rather not be the polo player,” said Tom pleasantly,
      “I’d rather look at all these famous people in—in oblivion.”
      
      Daisy and Gatsby danced. I remember being surprised by his graceful,
      conservative foxtrot—I had never seen him dance before. Then they
      sauntered over to my house and sat on the steps for half an hour,
      while at her request I remained watchfully in the garden. “In case
      there’s a fire or a flood,” she explained, “or any act of God.”
      
      Tom appeared from his oblivion as we were sitting down to supper
      together. “Do you mind if I eat with some people over here?” he
      said. “A fellow’s getting off some funny stuff.”
      
      “Go ahead,” answered Daisy genially, “and if you want to take down any
      addresses here’s my little gold pencil.” … She looked around after a
      moment and told me the girl was “common but pretty,” and I knew that
      except for the half-hour she’d been alone with Gatsby she wasn’t
      having a good time.
      
      We were at a particularly tipsy table. That was my fault—Gatsby had
      been called to the phone, and I’d enjoyed these same people only two
      weeks before. But what had amused me then turned septic on the air
      now.
      
      “How do you feel, Miss Baedeker?”
      
      The girl addressed was trying, unsuccessfully, to slump against my
      shoulder. At this inquiry she sat up and opened her eyes.
      
      “Wha’?”
      
      A massive and lethargic woman, who had been urging Daisy to play golf
      with her at the local club tomorrow, spoke in Miss Baedeker’s defence:
      
      “Oh, she’s all right now. When she’s had five or six cocktails she
      always starts screaming like that. I tell her she ought to leave it
      alone.”
      
      “I do leave it alone,” affirmed the accused hollowly.
      
      “We heard you yelling, so I said to Doc Civet here: ‘There’s somebody
      that needs your help, Doc.’ ”
      
      “She’s much obliged, I’m sure,” said another friend, without
      gratitude, “but you got her dress all wet when you stuck her head in
      the pool.”
      
      “Anything I hate is to get my head stuck in a pool,” mumbled Miss
      Baedeker. “They almost drowned me once over in New Jersey.”
      
      “Then you ought to leave it alone,” countered Doctor Civet.
      
      “Speak for yourself!” cried Miss Baedeker violently. “Your hand
      shakes. I wouldn’t let you operate on me!”
      
      It was like that. Almost the last thing I remember was standing with
      Daisy and watching the moving-picture director and his Star. They were
      still under the white-plum tree and their faces were touching except
      for a pale, thin ray of moonlight between. It occurred to me that he
      had been very slowly bending toward her all evening to attain this
      proximity, and even while I watched I saw him stoop one ultimate
      degree and kiss at her cheek.
      
      “I like her,” said Daisy, “I think she’s lovely.”
      
      But the rest offended her—and inarguably because it wasn’t a gesture
      but an emotion. She was appalled by West Egg, this unprecedented
      “place” that Broadway had begotten upon a Long Island fishing
      village—appalled by its raw vigour that chafed under the old
      euphemisms and by the too obtrusive fate that herded its inhabitants
      along a shortcut from nothing to nothing. She saw something awful in
      the very simplicity she failed to understand.
      
      I sat on the front steps with them while they waited for their car.
      It was dark here in front; only the bright door sent ten square feet
      of light volleying out into the soft black morning. Sometimes a shadow
      moved against a dressing-room blind above, gave way to another shadow,
      an indefinite procession of shadows, who rouged and powdered in an
      invisible glass.
      
      “Who is this Gatsby anyhow?” demanded Tom suddenly. “Some big
      bootlegger?”
      
      “Where’d you hear that?” I inquired.
      
      “I didn’t hear it. I imagined it. A lot of these newly rich people are
      just big bootleggers, you know.”
      
      “Not Gatsby,” I said shortly.
      
      He was silent for a moment. The pebbles of the drive crunched under
      his feet.
      
      “Well, he certainly must have strained himself to get this menagerie
      together.”
      
      A breeze stirred the grey haze of Daisy’s fur collar.
      
      “At least they are more interesting than the people we know,” she said
      with an effort.
      
      “You didn’t look so interested.”
      
      “Well, I was.”
      
      Tom laughed and turned to me.
      
      “Did you notice Daisy’s face when that girl asked her to put her under
      a cold shower?”
      
      Daisy began to sing with the music in a husky, rhythmic whisper,
      bringing out a meaning in each word that it had never had before and
      would never have again. When the melody rose her voice broke up
      sweetly, following it, in a way contralto voices have, and each change
      tipped out a little of her warm human magic upon the air.
      
      “Lots of people come who haven’t been invited,” she said
      suddenly. “That girl hadn’t been invited. They simply force their way
      in and he’s too polite to object.”
      
      “I’d like to know who he is and what he does,” insisted Tom. “And I
      think I’ll make a point of finding out.”
      
      “I can tell you right now,” she answered. “He owned some drugstores, a
      lot of drugstores. He built them up himself.”
      
      The dilatory limousine came rolling up the drive.
      
      “Good night, Nick,” said Daisy.
      
      Her glance left me and sought the lighted top of the steps, where
      “Three O’Clock in the Morning,” a neat, sad little waltz of that year,
      was drifting out the open door. After all, in the very casualness of
      Gatsby’s party there were romantic possibilities totally absent from
      her world. What was it up there in the song that seemed to be calling
      her back inside? What would happen now in the dim, incalculable hours?
      Perhaps some unbelievable guest would arrive, a person infinitely rare
      and to be marvelled at, some authentically radiant young girl who with
      one fresh glance at Gatsby, one moment of magical encounter, would
      blot out those five years of unwavering devotion.
      
      I stayed late that night. Gatsby asked me to wait until he was free,
      and I lingered in the garden until the inevitable swimming party had
      run up, chilled and exalted, from the black beach, until the lights
      were extinguished in the guestrooms overhead. When he came down the
      steps at last the tanned skin was drawn unusually tight on his face,
      and his eyes were bright and tired.
      
      “She didn’t like it,” he said immediately.
      
      “Of course she did.”
      
      “She didn’t like it,” he insisted. “She didn’t have a good time.”
      
      He was silent, and I guessed at his unutterable depression.
      
      “I feel far away from her,” he said. “It’s hard to make her
      understand.”
      
      “You mean about the dance?”
      
      “The dance?” He dismissed all the dances he had given with a snap of
      his fingers. “Old sport, the dance is unimportant.”
      
      He wanted nothing less of Daisy than that she should go to Tom and
      say: “I never loved you.” After she had obliterated four years with
      that sentence they could decide upon the more practical measures to be
      taken. One of them was that, after she was free, they were to go back
      to Louisville and be married from her house—just as if it were five
      years ago.
      
      “And she doesn’t understand,” he said. “She used to be able to
      understand. We’d sit for hours—”
      
      He broke off and began to walk up and down a desolate path of fruit
      rinds and discarded favours and crushed flowers.
      
      “I wouldn’t ask too much of her,” I ventured. “You can’t repeat the
      past.”
      
      “Can’t repeat the past?” he cried incredulously. “Why of course you
      can!”
      
      He looked around him wildly, as if the past were lurking here in the
      shadow of his house, just out of reach of his hand.
      
      “I’m going to fix everything just the way it was before,” he said,
      nodding determinedly. “She’ll see.”
      
      He talked a lot about the past, and I gathered that he wanted to
      recover something, some idea of himself perhaps, that had gone into
      loving Daisy. His life had been confused and disordered since then,
      but if he could once return to a certain starting place and go over it
      all slowly, he could find out what that thing was …
      
      … One autumn night, five years before, they had been walking down the
      street when the leaves were falling, and they came to a place where
      there were no trees and the sidewalk was white with moonlight. They
      stopped here and turned toward each other. Now it was a cool night
      with that mysterious excitement in it which comes at the two changes
      of the year. The quiet lights in the houses were humming out into the
      darkness and there was a stir and bustle among the stars. Out of the
      corner of his eye Gatsby saw that the blocks of the sidewalks really
      formed a ladder and mounted to a secret place above the trees—he could
      climb to it, if he climbed alone, and once there he could suck on the
      pap of life, gulp down the incomparable milk of wonder.
      
      His heart beat faster as Daisy’s white face came up to his own. He
      knew that when he kissed this girl, and forever wed his unutterable
      visions to her perishable breath, his mind would never romp again like
      the mind of God. So he waited, listening for a moment longer to the
      tuning-fork that had been struck upon a star. Then he kissed her. At
      his lips’ touch she blossomed for him like a flower and the
      incarnation was complete.
      
      Through all he said, even through his appalling sentimentality, I was
      reminded of something—an elusive rhythm, a fragment of lost words,
      that I had heard somewhere a long time ago. For a moment a phrase
      tried to take shape in my mouth and my lips parted like a dumb man’s,
      as though there was more struggling upon them than a wisp of startled
      air. But they made no sound, and what I had almost remembered was
      uncommunicable forever.
      ` },
      { chapter: 7, title: 'Chapter 7', content: ` VII

      It was when curiosity about Gatsby was at its highest that the lights
      in his house failed to go on one Saturday night—and, as obscurely as
      it had begun, his career as Trimalchio was over. Only gradually did I
      become aware that the automobiles which turned expectantly into his
      drive stayed for just a minute and then drove sulkily away. Wondering
      if he were sick I went over to find out—an unfamiliar butler with a
      villainous face squinted at me suspiciously from the door.
      
      “Is Mr. Gatsby sick?”
      
      “Nope.” After a pause he added “sir” in a dilatory, grudging way.
      
      “I hadn’t seen him around, and I was rather worried. Tell him Mr.
      Carraway came over.”
      
      “Who?” he demanded rudely.
      
      “Carraway.”
      
      “Carraway. All right, I’ll tell him.”
      
      Abruptly he slammed the door.
      
      My Finn informed me that Gatsby had dismissed every servant in his
      house a week ago and replaced them with half a dozen others, who never
      went into West Egg village to be bribed by the tradesmen, but ordered
      moderate supplies over the telephone. The grocery boy reported that
      the kitchen looked like a pigsty, and the general opinion in the
      village was that the new people weren’t servants at all.
      
      Next day Gatsby called me on the phone.
      
      “Going away?” I inquired.
      
      “No, old sport.”
      
      “I hear you fired all your servants.”
      
      “I wanted somebody who wouldn’t gossip. Daisy comes over quite
      often—in the afternoons.”
      
      So the whole caravansary had fallen in like a card house at the
      disapproval in her eyes.
      
      “They’re some people Wolfshiem wanted to do something for. They’re all
      brothers and sisters. They used to run a small hotel.”
      
      “I see.”
      
      He was calling up at Daisy’s request—would I come to lunch at her
      house tomorrow? Miss Baker would be there. Half an hour later Daisy
      herself telephoned and seemed relieved to find that I was
      coming. Something was up. And yet I couldn’t believe that they would
      choose this occasion for a scene—especially for the rather harrowing
      scene that Gatsby had outlined in the garden.
      
      The next day was broiling, almost the last, certainly the warmest, of
      the summer. As my train emerged from the tunnel into sunlight, only
      the hot whistles of the National Biscuit Company broke the simmering
      hush at noon. The straw seats of the car hovered on the edge of
      combustion; the woman next to me perspired delicately for a while into
      her white shirtwaist, and then, as her newspaper dampened under her
      fingers, lapsed despairingly into deep heat with a desolate cry. Her
      pocketbook slapped to the floor.
      
      “Oh, my!” she gasped.
      
      I picked it up with a weary bend and handed it back to her, holding it
      at arm’s length and by the extreme tip of the corners to indicate that
      I had no designs upon it—but everyone near by, including the woman,
      suspected me just the same.
      
      “Hot!” said the conductor to familiar faces. “Some weather! … Hot! …
      Hot! … Hot! … Is it hot enough for you? Is it hot? Is it … ?”
      
      My commutation ticket came back to me with a dark stain from his hand.
      That anyone should care in this heat whose flushed lips he kissed,
      whose head made damp the pyjama pocket over his heart!
      
      … Through the hall of the Buchanans’ house blew a faint wind, carrying
      the sound of the telephone bell out to Gatsby and me as we waited at
      the door.
      
      “The master’s body?” roared the butler into the mouthpiece. “I’m
      sorry, madame, but we can’t furnish it—it’s far too hot to touch this
      noon!”
      
      What he really said was: “Yes … Yes … I’ll see.”
      
      He set down the receiver and came toward us, glistening slightly, to
      take our stiff straw hats.
      
      “Madame expects you in the salon!” he cried, needlessly indicating the
      direction. In this heat every extra gesture was an affront to the
      common store of life.
      
      The room, shadowed well with awnings, was dark and cool. Daisy and
      Jordan lay upon an enormous couch, like silver idols weighing down
      their own white dresses against the singing breeze of the fans.
      
      “We can’t move,” they said together.
      
      Jordan’s fingers, powdered white over their tan, rested for a moment
      in mine.
      
      “And Mr. Thomas Buchanan, the athlete?” I inquired.
      
      Simultaneously I heard his voice, gruff, muffled, husky, at the hall
      telephone.
      
      Gatsby stood in the centre of the crimson carpet and gazed around with
      fascinated eyes. Daisy watched him and laughed, her sweet, exciting
      laugh; a tiny gust of powder rose from her bosom into the air.
      
      “The rumour is,” whispered Jordan, “that that’s Tom’s girl on the
      telephone.”
      
      We were silent. The voice in the hall rose high with annoyance: “Very
      well, then, I won’t sell you the car at all … I’m under no obligations
      to you at all … and as for your bothering me about it at lunch time, I
      won’t stand that at all!”
      
      “Holding down the receiver,” said Daisy cynically.
      
      “No, he’s not,” I assured her. “It’s a bona-fide deal. I happen to
      know about it.”
      
      Tom flung open the door, blocked out its space for a moment with his
      thick body, and hurried into the room.
      
      “Mr. Gatsby!” He put out his broad, flat hand with well-concealed
      dislike. “I’m glad to see you, sir … Nick …”
      
      “Make us a cold drink,” cried Daisy.
      
      As he left the room again she got up and went over to Gatsby and
      pulled his face down, kissing him on the mouth.
      
      “You know I love you,” she murmured.
      
      “You forget there’s a lady present,” said Jordan.
      
      Daisy looked around doubtfully.
      
      “You kiss Nick too.”
      
      “What a low, vulgar girl!”
      
      “I don’t care!” cried Daisy, and began to clog on the brick fireplace.
      Then she remembered the heat and sat down guiltily on the couch just
      as a freshly laundered nurse leading a little girl came into the room.
      
      “Bles-sed pre-cious,” she crooned, holding out her arms. “Come to your
      own mother that loves you.”
      
      The child, relinquished by the nurse, rushed across the room and
      rooted shyly into her mother’s dress.
      
      “The bles-sed pre-cious! Did mother get powder on your old yellowy
      hair? Stand up now, and say—How-de-do.”
      
      Gatsby and I in turn leaned down and took the small reluctant hand.
      Afterward he kept looking at the child with surprise. I don’t think he
      had ever really believed in its existence before.
      
      “I got dressed before luncheon,” said the child, turning eagerly to
      Daisy.
      
      “That’s because your mother wanted to show you off.” Her face bent
      into the single wrinkle of the small white neck. “You dream, you. You
      absolute little dream.”
      
      “Yes,” admitted the child calmly. “Aunt Jordan’s got on a white dress
      too.”
      
      “How do you like mother’s friends?” Daisy turned her around so that
      she faced Gatsby. “Do you think they’re pretty?”
      
      “Where’s Daddy?”
      
      “She doesn’t look like her father,” explained Daisy. “She looks like
      me. She’s got my hair and shape of the face.”
      
      Daisy sat back upon the couch. The nurse took a step forward and held
      out her hand.
      
      “Come, Pammy.”
      
      “Goodbye, sweetheart!”
      
      With a reluctant backward glance the well-disciplined child held to
      her nurse’s hand and was pulled out the door, just as Tom came back,
      preceding four gin rickeys that clicked full of ice.
      
      Gatsby took up his drink.
      
      “They certainly look cool,” he said, with visible tension.
      
      We drank in long, greedy swallows.
      
      “I read somewhere that the sun’s getting hotter every year,” said Tom
      genially. “It seems that pretty soon the earth’s going to fall into
      the sun—or wait a minute—it’s just the opposite—the sun’s getting
      colder every year.
      
      “Come outside,” he suggested to Gatsby, “I’d like you to have a look
      at the place.”
      
      I went with them out to the veranda. On the green Sound, stagnant in
      the heat, one small sail crawled slowly toward the fresher sea.
      Gatsby’s eyes followed it momentarily; he raised his hand and pointed
      across the bay.
      
      “I’m right across from you.”
      
      “So you are.”
      
      Our eyes lifted over the rose-beds and the hot lawn and the weedy
      refuse of the dog-days alongshore. Slowly the white wings of the boat
      moved against the blue cool limit of the sky. Ahead lay the scalloped
      ocean and the abounding blessed isles.
      
      “There’s sport for you,” said Tom, nodding. “I’d like to be out there
      with him for about an hour.”
      
      We had luncheon in the dining-room, darkened too against the heat, and
      drank down nervous gaiety with the cold ale.
      
      “What’ll we do with ourselves this afternoon?” cried Daisy, “and the
      day after that, and the next thirty years?”
      
      “Don’t be morbid,” Jordan said. “Life starts all over again when it
      gets crisp in the fall.”
      
      “But it’s so hot,” insisted Daisy, on the verge of tears, “and
      everything’s so confused. Let’s all go to town!”
      
      Her voice struggled on through the heat, beating against it, moulding
      its senselessness into forms.
      
      “I’ve heard of making a garage out of a stable,” Tom was saying to
      Gatsby, “but I’m the first man who ever made a stable out of a
      garage.”
      
      “Who wants to go to town?” demanded Daisy insistently. Gatsby’s eyes
      floated toward her. “Ah,” she cried, “you look so cool.”
      
      Their eyes met, and they stared together at each other, alone in
      space. With an effort she glanced down at the table.
      
      “You always look so cool,” she repeated.
      
      She had told him that she loved him, and Tom Buchanan saw. He was
      astounded. His mouth opened a little, and he looked at Gatsby, and
      then back at Daisy as if he had just recognized her as someone he knew
      a long time ago.
      
      “You resemble the advertisement of the man,” she went on innocently.
      “You know the advertisement of the man—”
      
      “All right,” broke in Tom quickly, “I’m perfectly willing to go to
      town. Come on—we’re all going to town.”
      
      He got up, his eyes still flashing between Gatsby and his wife. No one
      moved.
      
      “Come on!” His temper cracked a little. “What’s the matter, anyhow?
      If we’re going to town, let’s start.”
      
      His hand, trembling with his effort at self-control, bore to his lips
      the last of his glass of ale. Daisy’s voice got us to our feet and out
      on to the blazing gravel drive.
      
      “Are we just going to go?” she objected. “Like this? Aren’t we going
      to let anyone smoke a cigarette first?”
      
      “Everybody smoked all through lunch.”
      
      “Oh, let’s have fun,” she begged him. “It’s too hot to fuss.”
      
      He didn’t answer.
      
      “Have it your own way,” she said. “Come on, Jordan.”
      
      They went upstairs to get ready while we three men stood there
      shuffling the hot pebbles with our feet. A silver curve of the moon
      hovered already in the western sky. Gatsby started to speak, changed
      his mind, but not before Tom wheeled and faced him expectantly.
      
      “Have you got your stables here?” asked Gatsby with an effort.
      
      “About a quarter of a mile down the road.”
      
      “Oh.”
      
      A pause.
      
      “I don’t see the idea of going to town,” broke out Tom savagely.
      “Women get these notions in their heads—”
      
      “Shall we take anything to drink?” called Daisy from an upper window.
      
      “I’ll get some whisky,” answered Tom. He went inside.
      
      Gatsby turned to me rigidly:
      
      “I can’t say anything in his house, old sport.”
      
      “She’s got an indiscreet voice,” I remarked. “It’s full of—” I
      hesitated.
      
      “Her voice is full of money,” he said suddenly.
      
      That was it. I’d never understood before. It was full of money—that
      was the inexhaustible charm that rose and fell in it, the jingle of
      it, the cymbals’ song of it … High in a white palace the king’s
      daughter, the golden girl …
      
      Tom came out of the house wrapping a quart bottle in a towel, followed
      by Daisy and Jordan wearing small tight hats of metallic cloth and
      carrying light capes over their arms.
      
      “Shall we all go in my car?” suggested Gatsby. He felt the hot, green
      leather of the seat. “I ought to have left it in the shade.”
      
      “Is it standard shift?” demanded Tom.
      
      “Yes.”
      
      “Well, you take my coupé and let me drive your car to town.”
      
      The suggestion was distasteful to Gatsby.
      
      “I don’t think there’s much gas,” he objected.
      
      “Plenty of gas,” said Tom boisterously. He looked at the gauge. “And
      if it runs out I can stop at a drugstore. You can buy anything at a
      drugstore nowadays.”
      
      A pause followed this apparently pointless remark. Daisy looked at Tom
      frowning, and an indefinable expression, at once definitely unfamiliar
      and vaguely recognizable, as if I had only heard it described in
      words, passed over Gatsby’s face.
      
      “Come on, Daisy,” said Tom, pressing her with his hand toward Gatsby’s
      car. “I’ll take you in this circus wagon.”
      
      He opened the door, but she moved out from the circle of his arm.
      
      “You take Nick and Jordan. We’ll follow you in the coupé.”
      
      She walked close to Gatsby, touching his coat with her hand. Jordan
      and Tom and I got into the front seat of Gatsby’s car, Tom pushed the
      unfamiliar gears tentatively, and we shot off into the oppressive
      heat, leaving them out of sight behind.
      
      “Did you see that?” demanded Tom.
      
      “See what?”
      
      He looked at me keenly, realizing that Jordan and I must have known
      all along.
      
      “You think I’m pretty dumb, don’t you?” he suggested. “Perhaps I am,
      but I have a—almost a second sight, sometimes, that tells me what to
      do. Maybe you don’t believe that, but science—”
      
      He paused. The immediate contingency overtook him, pulled him back
      from the edge of theoretical abyss.
      
      “I’ve made a small investigation of this fellow,” he continued. “I
      could have gone deeper if I’d known—”
      
      “Do you mean you’ve been to a medium?” inquired Jordan humorously.
      
      “What?” Confused, he stared at us as we laughed. “A medium?”
      
      “About Gatsby.”
      
      “About Gatsby! No, I haven’t. I said I’d been making a small
      investigation of his past.”
      
      “And you found he was an Oxford man,” said Jordan helpfully.
      
      “An Oxford man!” He was incredulous. “Like hell he is! He wears a pink
      suit.”
      
      “Nevertheless he’s an Oxford man.”
      
      “Oxford, New Mexico,” snorted Tom contemptuously, “or something like
      that.”
      
      “Listen, Tom. If you’re such a snob, why did you invite him to lunch?”
      demanded Jordan crossly.
      
      “Daisy invited him; she knew him before we were married—God knows
      where!”
      
      We were all irritable now with the fading ale, and aware of it we
      drove for a while in silence. Then as Doctor T. J. Eckleburg’s faded
      eyes came into sight down the road, I remembered Gatsby’s caution
      about gasoline.
      
      “We’ve got enough to get us to town,” said Tom.
      
      “But there’s a garage right here,” objected Jordan. “I don’t want to
      get stalled in this baking heat.”
      
      Tom threw on both brakes impatiently, and we slid to an abrupt dusty
      stop under Wilson’s sign. After a moment the proprietor emerged from
      the interior of his establishment and gazed hollow-eyed at the car.
      
      “Let’s have some gas!” cried Tom roughly. “What do you think we
      stopped for—to admire the view?”
      
      “I’m sick,” said Wilson without moving. “Been sick all day.”
      
      “What’s the matter?”
      
      “I’m all run down.”
      
      “Well, shall I help myself?” Tom demanded. “You sounded well enough on
      the phone.”
      
      With an effort Wilson left the shade and support of the doorway and,
      breathing hard, unscrewed the cap of the tank. In the sunlight his
      face was green.
      
      “I didn’t mean to interrupt your lunch,” he said. “But I need money
      pretty bad, and I was wondering what you were going to do with your
      old car.”
      
      “How do you like this one?” inquired Tom. “I bought it last week.”
      
      “It’s a nice yellow one,” said Wilson, as he strained at the handle.
      
      “Like to buy it?”
      
      “Big chance,” Wilson smiled faintly. “No, but I could make some money
      on the other.”
      
      “What do you want money for, all of a sudden?”
      
      “I’ve been here too long. I want to get away. My wife and I want to go
      West.”
      
      “Your wife does,” exclaimed Tom, startled.
      
      “She’s been talking about it for ten years.” He rested for a moment
      against the pump, shading his eyes. “And now she’s going whether she
      wants to or not. I’m going to get her away.”
      
      The coupé flashed by us with a flurry of dust and the flash of a
      waving hand.
      
      “What do I owe you?” demanded Tom harshly.
      
      “I just got wised up to something funny the last two days,” remarked
      Wilson. “That’s why I want to get away. That’s why I been bothering
      you about the car.”
      
      “What do I owe you?”
      
      “Dollar twenty.”
      
      The relentless beating heat was beginning to confuse me and I had a
      bad moment there before I realized that so far his suspicions hadn’t
      alighted on Tom. He had discovered that Myrtle had some sort of life
      apart from him in another world, and the shock had made him physically
      sick. I stared at him and then at Tom, who had made a parallel
      discovery less than an hour before—and it occurred to me that there
      was no difference between men, in intelligence or race, so profound as
      the difference between the sick and the well. Wilson was so sick that
      he looked guilty, unforgivably guilty—as if he had just got some poor
      girl with child.
      
      “I’ll let you have that car,” said Tom. “I’ll send it over tomorrow
      afternoon.”
      
      That locality was always vaguely disquieting, even in the broad glare
      of afternoon, and now I turned my head as though I had been warned of
      something behind. Over the ash-heaps the giant eyes of Doctor T. J.
      Eckleburg kept their vigil, but I perceived, after a moment, that
      other eyes were regarding us with peculiar intensity from less than
      twenty feet away.
      
      In one of the windows over the garage the curtains had been moved
      aside a little, and Myrtle Wilson was peering down at the car. So
      engrossed was she that she had no consciousness of being observed, and
      one emotion after another crept into her face like objects into a
      slowly developing picture. Her expression was curiously familiar—it
      was an expression I had often seen on women’s faces, but on Myrtle
      Wilson’s face it seemed purposeless and inexplicable until I realized
      that her eyes, wide with jealous terror, were fixed not on Tom, but on
      Jordan Baker, whom she took to be his wife.
      
      ------------------------------------------------------------------------
      
      There is no confusion like the confusion of a simple mind, and as we
      drove away Tom was feeling the hot whips of panic. His wife and his
      mistress, until an hour ago secure and inviolate, were slipping
      precipitately from his control. Instinct made him step on the
      accelerator with the double purpose of overtaking Daisy and leaving
      Wilson behind, and we sped along toward Astoria at fifty miles an
      hour, until, among the spidery girders of the elevated, we came in
      sight of the easygoing blue coupé.
      
      “Those big movies around Fiftieth Street are cool,” suggested
      Jordan. “I love New York on summer afternoons when everyone’s away.
      There’s something very sensuous about it—overripe, as if all sorts of
      funny fruits were going to fall into your hands.”
      
      The word “sensuous” had the effect of further disquieting Tom, but
      before he could invent a protest the coupé came to a stop, and Daisy
      signalled us to draw up alongside.
      
      “Where are we going?” she cried.
      
      “How about the movies?”
      
      “It’s so hot,” she complained. “You go. We’ll ride around and meet you
      after.” With an effort her wit rose faintly. “We’ll meet you on some
      corner. I’ll be the man smoking two cigarettes.”
      
      “We can’t argue about it here,” Tom said impatiently, as a truck gave
      out a cursing whistle behind us. “You follow me to the south side of
      Central Park, in front of the Plaza.”
      
      Several times he turned his head and looked back for their car, and if
      the traffic delayed them he slowed up until they came into sight. I
      think he was afraid they would dart down a side-street and out of his
      life forever.
      
      But they didn’t. And we all took the less explicable step of engaging
      the parlour of a suite in the Plaza Hotel.
      
      The prolonged and tumultuous argument that ended by herding us into
      that room eludes me, though I have a sharp physical memory that, in
      the course of it, my underwear kept climbing like a damp snake around
      my legs and intermittent beads of sweat raced cool across my back.
      The notion originated with Daisy’s suggestion that we hire five
      bathrooms and take cold baths, and then assumed more tangible form as
      “a place to have a mint julep.” Each of us said over and over that it
      was a “crazy idea”—we all talked at once to a baffled clerk and
      thought, or pretended to think, that we were being very funny …
      
      The room was large and stifling, and, though it was already four
      o’clock, opening the windows admitted only a gust of hot shrubbery
      from the Park. Daisy went to the mirror and stood with her back to us,
      fixing her hair.
      
      “It’s a swell suite,” whispered Jordan respectfully, and everyone
      laughed.
      
      “Open another window,” commanded Daisy, without turning around.
      
      “There aren’t any more.”
      
      “Well, we’d better telephone for an axe—”
      
      “The thing to do is to forget about the heat,” said Tom impatiently.
      “You make it ten times worse by crabbing about it.”
      
      He unrolled the bottle of whisky from the towel and put it on the
      table.
      
      “Why not let her alone, old sport?” remarked Gatsby. “You’re the one
      that wanted to come to town.”
      
      There was a moment of silence. The telephone book slipped from its
      nail and splashed to the floor, whereupon Jordan whispered, “Excuse
      me”—but this time no one laughed.
      
      “I’ll pick it up,” I offered.
      
      “I’ve got it.” Gatsby examined the parted string, muttered “Hum!” in
      an interested way, and tossed the book on a chair.
      
      “That’s a great expression of yours, isn’t it?” said Tom sharply.
      
      “What is?”
      
      “All this ‘old sport’ business. Where’d you pick that up?”
      
      “Now see here, Tom,” said Daisy, turning around from the mirror, “if
      you’re going to make personal remarks I won’t stay here a minute.
      Call up and order some ice for the mint julep.”
      
      As Tom took up the receiver the compressed heat exploded into sound
      and we were listening to the portentous chords of Mendelssohn’s
      Wedding March from the ballroom below.
      
      “Imagine marrying anybody in this heat!” cried Jordan dismally.
      
      “Still—I was married in the middle of June,” Daisy remembered.
      “Louisville in June! Somebody fainted. Who was it fainted, Tom?”
      
      “Biloxi,” he answered shortly.
      
      “A man named Biloxi. ‘Blocks’ Biloxi, and he made boxes—that’s a
      fact—and he was from Biloxi, Tennessee.”
      
      “They carried him into my house,” appended Jordan, “because we lived
      just two doors from the church. And he stayed three weeks, until Daddy
      told him he had to get out. The day after he left Daddy died.”  After
      a moment she added as if she might have sounded irreverent, “There
      wasn’t any connection.”
      
      “I used to know a Bill Biloxi from Memphis,” I remarked.
      
      “That was his cousin. I knew his whole family history before he
      left. He gave me an aluminium putter that I use today.”
      
      The music had died down as the ceremony began and now a long cheer
      floated in at the window, followed by intermittent cries of
      “Yea—ea—ea!” and finally by a burst of jazz as the dancing began.
      
      “We’re getting old,” said Daisy. “If we were young we’d rise and
      dance.”
      
      “Remember Biloxi,” Jordan warned her. “Where’d you know him, Tom?”
      
      “Biloxi?” He concentrated with an effort. “I didn’t know him. He was a
      friend of Daisy’s.”
      
      “He was not,” she denied. “I’d never seen him before. He came down in
      the private car.”
      
      “Well, he said he knew you. He said he was raised in Louisville. Asa
      Bird brought him around at the last minute and asked if we had room
      for him.”
      
      Jordan smiled.
      
      “He was probably bumming his way home. He told me he was president of
      your class at Yale.”
      
      Tom and I looked at each other blankly.
      
      “Biloxi?”
      
      “First place, we didn’t have any president—”
      
      Gatsby’s foot beat a short, restless tattoo and Tom eyed him suddenly.
      
      “By the way, Mr. Gatsby, I understand you’re an Oxford man.”
      
      “Not exactly.”
      
      “Oh, yes, I understand you went to Oxford.”
      
      “Yes—I went there.”
      
      A pause. Then Tom’s voice, incredulous and insulting:
      
      “You must have gone there about the time Biloxi went to New Haven.”
      
      Another pause. A waiter knocked and came in with crushed mint and ice
      but the silence was unbroken by his “thank you” and the soft closing
      of the door. This tremendous detail was to be cleared up at last.
      
      “I told you I went there,” said Gatsby.
      
      “I heard you, but I’d like to know when.”
      
      “It was in nineteen-nineteen, I only stayed five months. That’s why I
      can’t really call myself an Oxford man.”
      
      Tom glanced around to see if we mirrored his unbelief. But we were all
      looking at Gatsby.
      
      “It was an opportunity they gave to some of the officers after the
      armistice,” he continued. “We could go to any of the universities in
      England or France.”
      
      I wanted to get up and slap him on the back. I had one of those
      renewals of complete faith in him that I’d experienced before.
      
      Daisy rose, smiling faintly, and went to the table.
      
      “Open the whisky, Tom,” she ordered, “and I’ll make you a mint julep.
      Then you won’t seem so stupid to yourself … Look at the mint!”
      
      “Wait a minute,” snapped Tom, “I want to ask Mr. Gatsby one more
      question.”
      
      “Go on,” Gatsby said politely.
      
      “What kind of a row are you trying to cause in my house anyhow?”
      
      They were out in the open at last and Gatsby was content.
      
      “He isn’t causing a row,” Daisy looked desperately from one to the
      other. “You’re causing a row. Please have a little self-control.”
      
      “Self-control!” repeated Tom incredulously. “I suppose the latest
      thing is to sit back and let Mr. Nobody from Nowhere make love to your
      wife. Well, if that’s the idea you can count me out … Nowadays people
      begin by sneering at family life and family institutions, and next
      they’ll throw everything overboard and have intermarriage between
      black and white.”
      
      Flushed with his impassioned gibberish, he saw himself standing alone
      on the last barrier of civilization.
      
      “We’re all white here,” murmured Jordan.
      
      “I know I’m not very popular. I don’t give big parties. I suppose
      you’ve got to make your house into a pigsty in order to have any
      friends—in the modern world.”
      
      Angry as I was, as we all were, I was tempted to laugh whenever he
      opened his mouth. The transition from libertine to prig was so
      complete.
      
      “I’ve got something to tell you, old sport—” began Gatsby. But Daisy
      guessed at his intention.
      
      “Please don’t!” she interrupted helplessly. “Please let’s all go
      home. Why don’t we all go home?”
      
      “That’s a good idea,” I got up. “Come on, Tom. Nobody wants a drink.”
      
      “I want to know what Mr. Gatsby has to tell me.”
      
      “Your wife doesn’t love you,” said Gatsby. “She’s never loved you.
      She loves me.”
      
      “You must be crazy!” exclaimed Tom automatically.
      
      Gatsby sprang to his feet, vivid with excitement.
      
      “She never loved you, do you hear?” he cried. “She only married you
      because I was poor and she was tired of waiting for me. It was a
      terrible mistake, but in her heart she never loved anyone except me!”
      
      At this point Jordan and I tried to go, but Tom and Gatsby insisted
      with competitive firmness that we remain—as though neither of them had
      anything to conceal and it would be a privilege to partake vicariously
      of their emotions.
      
      “Sit down, Daisy,” Tom’s voice groped unsuccessfully for the paternal
      note. “What’s been going on? I want to hear all about it.”
      
      “I told you what’s been going on,” said Gatsby. “Going on for five
      years—and you didn’t know.”
      
      Tom turned to Daisy sharply.
      
      “You’ve been seeing this fellow for five years?”
      
      “Not seeing,” said Gatsby. “No, we couldn’t meet. But both of us loved
      each other all that time, old sport, and you didn’t know. I used to
      laugh sometimes”—but there was no laughter in his eyes—“to think that
      you didn’t know.”
      
      “Oh—that’s all.” Tom tapped his thick fingers together like a
      clergyman and leaned back in his chair.
      
      “You’re crazy!” he exploded. “I can’t speak about what happened five
      years ago, because I didn’t know Daisy then—and I’ll be damned if I
      see how you got within a mile of her unless you brought the groceries
      to the back door. But all the rest of that’s a God damned lie. Daisy
      loved me when she married me and she loves me now.”
      
      “No,” said Gatsby, shaking his head.
      
      “She does, though. The trouble is that sometimes she gets foolish
      ideas in her head and doesn’t know what she’s doing.” He nodded
      sagely. “And what’s more, I love Daisy too. Once in a while I go off
      on a spree and make a fool of myself, but I always come back, and in
      my heart I love her all the time.”
      
      “You’re revolting,” said Daisy. She turned to me, and her voice,
      dropping an octave lower, filled the room with thrilling scorn: “Do
      you know why we left Chicago? I’m surprised that they didn’t treat you
      to the story of that little spree.”
      
      Gatsby walked over and stood beside her.
      
      “Daisy, that’s all over now,” he said earnestly. “It doesn’t matter
      any more. Just tell him the truth—that you never loved him—and it’s
      all wiped out forever.”
      
      She looked at him blindly. “Why—how could I love him—possibly?”
      
      “You never loved him.”
      
      She hesitated. Her eyes fell on Jordan and me with a sort of appeal,
      as though she realized at last what she was doing—and as though she
      had never, all along, intended doing anything at all. But it was done
      now. It was too late.
      
      “I never loved him,” she said, with perceptible reluctance.
      
      “Not at Kapiolani?” demanded Tom suddenly.
      
      “No.”
      
      From the ballroom beneath, muffled and suffocating chords were
      drifting up on hot waves of air.
      
      “Not that day I carried you down from the Punch Bowl to keep your
      shoes dry?” There was a husky tenderness in his tone … “Daisy?”
      
      “Please don’t.” Her voice was cold, but the rancour was gone from it.
      She looked at Gatsby. “There, Jay,” she said—but her hand as she tried
      to light a cigarette was trembling. Suddenly she threw the cigarette
      and the burning match on the carpet.
      
      “Oh, you want too much!” she cried to Gatsby. “I love you now—isn’t
      that enough? I can’t help what’s past.” She began to sob
      helplessly. “I did love him once—but I loved you too.”
      
      Gatsby’s eyes opened and closed.
      
      “You loved me too?” he repeated.
      
      “Even that’s a lie,” said Tom savagely. “She didn’t know you were
      alive. Why—there’s things between Daisy and me that you’ll never know,
      things that neither of us can ever forget.”
      
      The words seemed to bite physically into Gatsby.
      
      “I want to speak to Daisy alone,” he insisted. “She’s all excited
      now—”
      
      “Even alone I can’t say I never loved Tom,” she admitted in a pitiful
      voice. “It wouldn’t be true.”
      
      “Of course it wouldn’t,” agreed Tom.
      
      She turned to her husband.
      
      “As if it mattered to you,” she said.
      
      “Of course it matters. I’m going to take better care of you from now
      on.”
      
      “You don’t understand,” said Gatsby, with a touch of panic. “You’re
      not going to take care of her any more.”
      
      “I’m not?” Tom opened his eyes wide and laughed. He could afford to
      control himself now. “Why’s that?”
      
      “Daisy’s leaving you.”
      
      “Nonsense.”
      
      “I am, though,” she said with a visible effort.
      
      “She’s not leaving me!” Tom’s words suddenly leaned down over Gatsby.
      “Certainly not for a common swindler who’d have to steal the ring he
      put on her finger.”
      
      “I won’t stand this!” cried Daisy. “Oh, please let’s get out.”
      
      “Who are you, anyhow?” broke out Tom. “You’re one of that bunch that
      hangs around with Meyer Wolfshiem—that much I happen to know. I’ve
      made a little investigation into your affairs—and I’ll carry it
      further tomorrow.”
      
      “You can suit yourself about that, old sport,” said Gatsby steadily.
      
      “I found out what your ‘drugstores’ were.” He turned to us and spoke
      rapidly. “He and this Wolfshiem bought up a lot of side-street
      drugstores here and in Chicago and sold grain alcohol over the
      counter. That’s one of his little stunts. I picked him for a
      bootlegger the first time I saw him, and I wasn’t far wrong.”
      
      “What about it?” said Gatsby politely. “I guess your friend Walter
      Chase wasn’t too proud to come in on it.”
      
      “And you left him in the lurch, didn’t you? You let him go to jail for
      a month over in New Jersey. God! You ought to hear Walter on the
      subject of you.”
      
      “He came to us dead broke. He was very glad to pick up some money, old
      sport.”
      
      “Don’t you call me ‘old sport’!” cried Tom. Gatsby said
      nothing. “Walter could have you up on the betting laws too, but
      Wolfshiem scared him into shutting his mouth.”
      
      That unfamiliar yet recognizable look was back again in Gatsby’s face.
      
      “That drugstore business was just small change,” continued Tom slowly,
      “but you’ve got something on now that Walter’s afraid to tell me
      about.”
      
      I glanced at Daisy, who was staring terrified between Gatsby and her
      husband, and at Jordan, who had begun to balance an invisible but
      absorbing object on the tip of her chin. Then I turned back to
      Gatsby—and was startled at his expression. He looked—and this is said
      in all contempt for the babbled slander of his garden—as if he had
      “killed a man.” For a moment the set of his face could be described in
      just that fantastic way.
      
      It passed, and he began to talk excitedly to Daisy, denying
      everything, defending his name against accusations that had not been
      made. But with every word she was drawing further and further into
      herself, so he gave that up, and only the dead dream fought on as the
      afternoon slipped away, trying to touch what was no longer tangible,
      struggling unhappily, undespairingly, toward that lost voice across
      the room.
      
      The voice begged again to go.
      
      “Please, Tom! I can’t stand this any more.”
      
      Her frightened eyes told that whatever intentions, whatever courage
      she had had, were definitely gone.
      
      “You two start on home, Daisy,” said Tom. “In Mr. Gatsby’s car.”
      
      She looked at Tom, alarmed now, but he insisted with magnanimous
      scorn.
      
      “Go on. He won’t annoy you. I think he realizes that his presumptuous
      little flirtation is over.”
      
      They were gone, without a word, snapped out, made accidental,
      isolated, like ghosts, even from our pity.
      
      After a moment Tom got up and began wrapping the unopened bottle of
      whisky in the towel.
      
      “Want any of this stuff? Jordan? … Nick?”
      
      I didn’t answer.
      
      “Nick?” He asked again.
      
      “What?”
      
      “Want any?”
      
      “No … I just remembered that today’s my birthday.”
      
      I was thirty. Before me stretched the portentous, menacing road of a
      new decade.
      
      It was seven o’clock when we got into the coupé with him and started
      for Long Island. Tom talked incessantly, exulting and laughing, but
      his voice was as remote from Jordan and me as the foreign clamour on
      the sidewalk or the tumult of the elevated overhead. Human sympathy
      has its limits, and we were content to let all their tragic arguments
      fade with the city lights behind. Thirty—the promise of a decade of
      loneliness, a thinning list of single men to know, a thinning
      briefcase of enthusiasm, thinning hair. But there was Jordan beside
      me, who, unlike Daisy, was too wise ever to carry well-forgotten
      dreams from age to age. As we passed over the dark bridge her wan face
      fell lazily against my coat’s shoulder and the formidable stroke of
      thirty died away with the reassuring pressure of her hand.
      
      So we drove on toward death through the cooling twilight.
      
      ------------------------------------------------------------------------
      
      The young Greek, Michaelis, who ran the coffee joint beside the
      ash-heaps was the principal witness at the inquest. He had slept
      through the heat until after five, when he strolled over to the
      garage, and found George Wilson sick in his office—really sick, pale
      as his own pale hair and shaking all over. Michaelis advised him to go
      to bed, but Wilson refused, saying that he’d miss a lot of business if
      he did. While his neighbour was trying to persuade him a violent
      racket broke out overhead.
      
      “I’ve got my wife locked in up there,” explained Wilson calmly.
      “She’s going to stay there till the day after tomorrow, and then we’re
      going to move away.”
      
      Michaelis was astonished; they had been neighbours for four years, and
      Wilson had never seemed faintly capable of such a statement.
      Generally he was one of these worn-out men: when he wasn’t working, he
      sat on a chair in the doorway and stared at the people and the cars
      that passed along the road. When anyone spoke to him he invariably
      laughed in an agreeable, colourless way. He was his wife’s man and not
      his own.
      
      So naturally Michaelis tried to find out what had happened, but Wilson
      wouldn’t say a word—instead he began to throw curious, suspicious
      glances at his visitor and ask him what he’d been doing at certain
      times on certain days. Just as the latter was getting uneasy, some
      workmen came past the door bound for his restaurant, and Michaelis
      took the opportunity to get away, intending to come back later. But he
      didn’t. He supposed he forgot to, that’s all. When he came outside
      again, a little after seven, he was reminded of the conversation
      because he heard Mrs. Wilson’s voice, loud and scolding, downstairs in
      the garage.
      
      “Beat me!” he heard her cry. “Throw me down and beat me, you dirty
      little coward!”
      
      A moment later she rushed out into the dusk, waving her hands and
      shouting—before he could move from his door the business was over.
      
      The “death car” as the newspapers called it, didn’t stop; it came out
      of the gathering darkness, wavered tragically for a moment, and then
      disappeared around the next bend. Mavro Michaelis wasn’t even sure of
      its colour—he told the first policeman that it was light green. The
      other car, the one going toward New York, came to rest a hundred yards
      beyond, and its driver hurried back to where Myrtle Wilson, her life
      violently extinguished, knelt in the road and mingled her thick dark
      blood with the dust.
      
      Michaelis and this man reached her first, but when they had torn open
      her shirtwaist, still damp with perspiration, they saw that her left
      breast was swinging loose like a flap, and there was no need to listen
      for the heart beneath. The mouth was wide open and ripped a little at
      the corners, as though she had choked a little in giving up the
      tremendous vitality she had stored so long.
      
      ------------------------------------------------------------------------
      
      We saw the three or four automobiles and the crowd when we were still
      some distance away.
      
      “Wreck!” said Tom. “That’s good. Wilson’ll have a little business at
      last.”
      
      He slowed down, but still without any intention of stopping, until, as
      we came nearer, the hushed, intent faces of the people at the garage
      door made him automatically put on the brakes.
      
      “We’ll take a look,” he said doubtfully, “just a look.”
      
      I became aware now of a hollow, wailing sound which issued incessantly
      from the garage, a sound which as we got out of the coupé and walked
      toward the door resolved itself into the words “Oh, my God!” uttered
      over and over in a gasping moan.
      
      “There’s some bad trouble here,” said Tom excitedly.
      
      He reached up on tiptoes and peered over a circle of heads into the
      garage, which was lit only by a yellow light in a swinging metal
      basket overhead. Then he made a harsh sound in his throat, and with a
      violent thrusting movement of his powerful arms pushed his way
      through.
      
      The circle closed up again with a running murmur of expostulation; it
      was a minute before I could see anything at all. Then new arrivals
      deranged the line, and Jordan and I were pushed suddenly inside.
      
      Myrtle Wilson’s body, wrapped in a blanket, and then in another
      blanket, as though she suffered from a chill in the hot night, lay on
      a worktable by the wall, and Tom, with his back to us, was bending
      over it, motionless. Next to him stood a motorcycle policeman taking
      down names with much sweat and correction in a little book. At first I
      couldn’t find the source of the high, groaning words that echoed
      clamorously through the bare garage—then I saw Wilson standing on the
      raised threshold of his office, swaying back and forth and holding to
      the doorposts with both hands. Some man was talking to him in a low
      voice and attempting, from time to time, to lay a hand on his
      shoulder, but Wilson neither heard nor saw. His eyes would drop slowly
      from the swinging light to the laden table by the wall, and then jerk
      back to the light again, and he gave out incessantly his high,
      horrible call:
      
      “Oh, my Ga-od! Oh, my Ga-od! Oh, Ga-od! Oh, my Ga-od!”
      
      Presently Tom lifted his head with a jerk and, after staring around
      the garage with glazed eyes, addressed a mumbled incoherent remark to
      the policeman.
      
      “M-a-v—” the policeman was saying, “—o—”
      
      “No, r—” corrected the man, “M-a-v-r-o—”
      
      “Listen to me!” muttered Tom fiercely.
      
      “r—” said the policeman, “o—”
      
      “g—”
      
      “g—” He looked up as Tom’s broad hand fell sharply on his shoulder.
      “What you want, fella?”
      
      “What happened?—that’s what I want to know.”
      
      “Auto hit her. Ins’antly killed.”
      
      “Instantly killed,” repeated Tom, staring.
      
      “She ran out ina road. Son-of-a-bitch didn’t even stopus car.”
      
      “There was two cars,” said Michaelis, “one comin’, one goin’, see?”
      
      “Going where?” asked the policeman keenly.
      
      “One goin’ each way. Well, she”—his hand rose toward the blankets but
      stopped halfway and fell to his side—“she ran out there an’ the one
      comin’ from N’York knock right into her, goin’ thirty or forty miles
      an hour.”
      
      “What’s the name of this place here?” demanded the officer.
      
      “Hasn’t got any name.”
      
      A pale well-dressed negro stepped near.
      
      “It was a yellow car,” he said, “big yellow car. New.”
      
      “See the accident?” asked the policeman.
      
      “No, but the car passed me down the road, going faster’n forty. Going
      fifty, sixty.”
      
      “Come here and let’s have your name. Look out now. I want to get his
      name.”
      
      Some words of this conversation must have reached Wilson, swaying in
      the office door, for suddenly a new theme found voice among his
      grasping cries:
      
      “You don’t have to tell me what kind of car it was! I know what kind
      of car it was!”
      
      Watching Tom, I saw the wad of muscle back of his shoulder tighten
      under his coat. He walked quickly over to Wilson and, standing in
      front of him, seized him firmly by the upper arms.
      
      “You’ve got to pull yourself together,” he said with soothing
      gruffness.
      
      Wilson’s eyes fell upon Tom; he started up on his tiptoes and then
      would have collapsed to his knees had not Tom held him upright.
      
      “Listen,” said Tom, shaking him a little. “I just got here a minute
      ago, from New York. I was bringing you that coupé we’ve been talking
      about. That yellow car I was driving this afternoon wasn’t mine—do you
      hear? I haven’t seen it all afternoon.”
      
      Only the negro and I were near enough to hear what he said, but the
      policeman caught something in the tone and looked over with truculent
      eyes.
      
      “What’s all that?” he demanded.
      
      “I’m a friend of his.” Tom turned his head but kept his hands firm on
      Wilson’s body. “He says he knows the car that did it … It was a yellow
      car.”
      
      Some dim impulse moved the policeman to look suspiciously at Tom.
      
      “And what colour’s your car?”
      
      “It’s a blue car, a coupé.”
      
      “We’ve come straight from New York,” I said.
      
      Someone who had been driving a little behind us confirmed this, and
      the policeman turned away.
      
      “Now, if you’ll let me have that name again correct—”
      
      Picking up Wilson like a doll, Tom carried him into the office, set
      him down in a chair, and came back.
      
      “If somebody’ll come here and sit with him,” he snapped
      authoritatively. He watched while the two men standing closest glanced
      at each other and went unwillingly into the room. Then Tom shut the
      door on them and came down the single step, his eyes avoiding the
      table. As he passed close to me he whispered: “Let’s get out.”
      
      Self-consciously, with his authoritative arms breaking the way, we
      pushed through the still gathering crowd, passing a hurried doctor,
      case in hand, who had been sent for in wild hope half an hour ago.
      
      Tom drove slowly until we were beyond the bend—then his foot came down
      hard, and the coupé raced along through the night. In a little while I
      heard a low husky sob, and saw that the tears were overflowing down
      his face.
      
      “The God damned coward!” he whimpered. “He didn’t even stop his car.”
      
      ------------------------------------------------------------------------
      
      The Buchanans’ house floated suddenly toward us through the dark
      rustling trees. Tom stopped beside the porch and looked up at the
      second floor, where two windows bloomed with light among the vines.
      
      “Daisy’s home,” he said. As we got out of the car he glanced at me and
      frowned slightly.
      
      “I ought to have dropped you in West Egg, Nick. There’s nothing we can
      do tonight.”
      
      A change had come over him, and he spoke gravely, and with decision.
      As we walked across the moonlight gravel to the porch he disposed of
      the situation in a few brisk phrases.
      
      “I’ll telephone for a taxi to take you home, and while you’re waiting
      you and Jordan better go in the kitchen and have them get you some
      supper—if you want any.” He opened the door. “Come in.”
      
      “No, thanks. But I’d be glad if you’d order me the taxi. I’ll wait
      outside.”
      
      Jordan put her hand on my arm.
      
      “Won’t you come in, Nick?”
      
      “No, thanks.”
      
      I was feeling a little sick and I wanted to be alone. But Jordan
      lingered for a moment more.
      
      “It’s only half-past nine,” she said.
      
      I’d be damned if I’d go in; I’d had enough of all of them for one day,
      and suddenly that included Jordan too. She must have seen something of
      this in my expression, for she turned abruptly away and ran up the
      porch steps into the house. I sat down for a few minutes with my head
      in my hands, until I heard the phone taken up inside and the butler’s
      voice calling a taxi. Then I walked slowly down the drive away from
      the house, intending to wait by the gate.
      
      I hadn’t gone twenty yards when I heard my name and Gatsby stepped
      from between two bushes into the path. I must have felt pretty weird
      by that time, because I could think of nothing except the luminosity
      of his pink suit under the moon.
      
      “What are you doing?” I inquired.
      
      “Just standing here, old sport.”
      
      Somehow, that seemed a despicable occupation. For all I knew he was
      going to rob the house in a moment; I wouldn’t have been surprised to
      see sinister faces, the faces of “Wolfshiem’s people,” behind him in
      the dark shrubbery.
      
      “Did you see any trouble on the road?” he asked after a minute.
      
      “Yes.”
      
      He hesitated.
      
      “Was she killed?”
      
      “Yes.”
      
      “I thought so; I told Daisy I thought so. It’s better that the shock
      should all come at once. She stood it pretty well.”
      
      He spoke as if Daisy’s reaction was the only thing that mattered.
      
      “I got to West Egg by a side road,” he went on, “and left the car in
      my garage. I don’t think anybody saw us, but of course I can’t be
      sure.”
      
      I disliked him so much by this time that I didn’t find it necessary to
      tell him he was wrong.
      
      “Who was the woman?” he inquired.
      
      “Her name was Wilson. Her husband owns the garage. How the devil did
      it happen?”
      
      “Well, I tried to swing the wheel—” He broke off, and suddenly I
      guessed at the truth.
      
      “Was Daisy driving?”
      
      “Yes,” he said after a moment, “but of course I’ll say I was. You see,
      when we left New York she was very nervous and she thought it would
      steady her to drive—and this woman rushed out at us just as we were
      passing a car coming the other way. It all happened in a minute, but
      it seemed to me that she wanted to speak to us, thought we were
      somebody she knew. Well, first Daisy turned away from the woman toward
      the other car, and then she lost her nerve and turned back. The second
      my hand reached the wheel I felt the shock—it must have killed her
      instantly.”
      
      “It ripped her open—”
      
      “Don’t tell me, old sport.” He winced. “Anyhow—Daisy stepped on it. I
      tried to make her stop, but she couldn’t, so I pulled on the emergency
      brake. Then she fell over into my lap and I drove on.
      
      “She’ll be all right tomorrow,” he said presently. “I’m just going to
      wait here and see if he tries to bother her about that unpleasantness
      this afternoon. She’s locked herself into her room, and if he tries
      any brutality she’s going to turn the light out and on again.”
      
      “He won’t touch her,” I said. “He’s not thinking about her.”
      
      “I don’t trust him, old sport.”
      
      “How long are you going to wait?”
      
      “All night, if necessary. Anyhow, till they all go to bed.”
      
      A new point of view occurred to me. Suppose Tom found out that Daisy
      had been driving. He might think he saw a connection in it—he might
      think anything. I looked at the house; there were two or three bright
      windows downstairs and the pink glow from Daisy’s room on the ground
      floor.
      
      “You wait here,” I said. “I’ll see if there’s any sign of a
      commotion.”
      
      I walked back along the border of the lawn, traversed the gravel
      softly, and tiptoed up the veranda steps. The drawing-room curtains
      were open, and I saw that the room was empty. Crossing the porch where
      we had dined that June night three months before, I came to a small
      rectangle of light which I guessed was the pantry window. The blind
      was drawn, but I found a rift at the sill.
      
      Daisy and Tom were sitting opposite each other at the kitchen table,
      with a plate of cold fried chicken between them, and two bottles of
      ale. He was talking intently across the table at her, and in his
      earnestness his hand had fallen upon and covered her own. Once in a
      while she looked up at him and nodded in agreement.
      
      They weren’t happy, and neither of them had touched the chicken or the
      ale—and yet they weren’t unhappy either. There was an unmistakable air
      of natural intimacy about the picture, and anybody would have said
      that they were conspiring together.
      
      As I tiptoed from the porch I heard my taxi feeling its way along the
      dark road toward the house. Gatsby was waiting where I had left him in
      the drive.
      
      “Is it all quiet up there?” he asked anxiously.
      
      “Yes, it’s all quiet.” I hesitated. “You’d better come home and get
      some sleep.”
      
      He shook his head.
      
      “I want to wait here till Daisy goes to bed. Good night, old sport.”
      
      He put his hands in his coat pockets and turned back eagerly to his
      scrutiny of the house, as though my presence marred the sacredness of
      the vigil. So I walked away and left him standing there in the
      moonlight—watching over nothing.` },
      { chapter: 8, title: 'Chapter 8', content: ` VIII

      I couldn’t sleep all night; a foghorn was groaning incessantly on the
      Sound, and I tossed half-sick between grotesque reality and savage,
      frightening dreams. Toward dawn I heard a taxi go up Gatsby’s drive,
      and immediately I jumped out of bed and began to dress—I felt that I
      had something to tell him, something to warn him about, and morning
      would be too late.
      
      Crossing his lawn, I saw that his front door was still open and he was
      leaning against a table in the hall, heavy with dejection or sleep.
      
      “Nothing happened,” he said wanly. “I waited, and about four o’clock
      she came to the window and stood there for a minute and then turned
      out the light.”
      
      His house had never seemed so enormous to me as it did that night when
      we hunted through the great rooms for cigarettes. We pushed aside
      curtains that were like pavilions, and felt over innumerable feet of
      dark wall for electric light switches—once I tumbled with a sort of
      splash upon the keys of a ghostly piano. There was an inexplicable
      amount of dust everywhere, and the rooms were musty, as though they
      hadn’t been aired for many days. I found the humidor on an unfamiliar
      table, with two stale, dry cigarettes inside. Throwing open the French
      windows of the drawing-room, we sat smoking out into the darkness.
      
      “You ought to go away,” I said. “It’s pretty certain they’ll trace
      your car.”
      
      “Go away now, old sport?”
      
      “Go to Atlantic City for a week, or up to Montreal.”
      
      He wouldn’t consider it. He couldn’t possibly leave Daisy until he
      knew what she was going to do. He was clutching at some last hope and
      I couldn’t bear to shake him free.
      
      It was this night that he told me the strange story of his youth with
      Dan Cody—told it to me because “Jay Gatsby” had broken up like glass
      against Tom’s hard malice, and the long secret extravaganza was played
      out. I think that he would have acknowledged anything now, without
      reserve, but he wanted to talk about Daisy.
      
      She was the first “nice” girl he had ever known. In various unrevealed
      capacities he had come in contact with such people, but always with
      indiscernible barbed wire between. He found her excitingly
      desirable. He went to her house, at first with other officers from
      Camp Taylor, then alone. It amazed him—he had never been in such a
      beautiful house before. But what gave it an air of breathless
      intensity, was that Daisy lived there—it was as casual a thing to her
      as his tent out at camp was to him. There was a ripe mystery about it,
      a hint of bedrooms upstairs more beautiful and cool than other
      bedrooms, of gay and radiant activities taking place through its
      corridors, and of romances that were not musty and laid away already
      in lavender but fresh and breathing and redolent of this year’s
      shining motorcars and of dances whose flowers were scarcely
      withered. It excited him, too, that many men had already loved
      Daisy—it increased her value in his eyes. He felt their presence all
      about the house, pervading the air with the shades and echoes of still
      vibrant emotions.
      
      But he knew that he was in Daisy’s house by a colossal
      accident. However glorious might be his future as Jay Gatsby, he was
      at present a penniless young man without a past, and at any moment the
      invisible cloak of his uniform might slip from his shoulders. So he
      made the most of his time. He took what he could get, ravenously and
      unscrupulously—eventually he took Daisy one still October night, took
      her because he had no real right to touch her hand.
      
      He might have despised himself, for he had certainly taken her under
      false pretences. I don’t mean that he had traded on his phantom
      millions, but he had deliberately given Daisy a sense of security; he
      let her believe that he was a person from much the same strata as
      herself—that he was fully able to take care of her. As a matter of
      fact, he had no such facilities—he had no comfortable family standing
      behind him, and he was liable at the whim of an impersonal government
      to be blown anywhere about the world.
      
      But he didn’t despise himself and it didn’t turn out as he had
      imagined. He had intended, probably, to take what he could and go—but
      now he found that he had committed himself to the following of a
      grail. He knew that Daisy was extraordinary, but he didn’t realize
      just how extraordinary a “nice” girl could be. She vanished into her
      rich house, into her rich, full life, leaving Gatsby—nothing. He felt
      married to her, that was all.
      
      When they met again, two days later, it was Gatsby who was breathless,
      who was, somehow, betrayed. Her porch was bright with the bought
      luxury of star-shine; the wicker of the settee squeaked fashionably as
      she turned toward him and he kissed her curious and lovely mouth. She
      had caught a cold, and it made her voice huskier and more charming
      than ever, and Gatsby was overwhelmingly aware of the youth and
      mystery that wealth imprisons and preserves, of the freshness of many
      clothes, and of Daisy, gleaming like silver, safe and proud above the
      hot struggles of the poor.
    
  
      
      “I can’t describe to you how surprised I was to find out I loved her,
      old sport. I even hoped for a while that she’d throw me over, but she
      didn’t, because she was in love with me too. She thought I knew a lot
      because I knew different things from her … Well, there I was, way off
      my ambitions, getting deeper in love every minute, and all of a sudden
      I didn’t care. What was the use of doing great things if I could have
      a better time telling her what I was going to do?”
      
      On the last afternoon before he went abroad, he sat with Daisy in his
      arms for a long, silent time. It was a cold fall day, with fire in the
      room and her cheeks flushed. Now and then she moved and he changed his
      arm a little, and once he kissed her dark shining hair. The afternoon
      had made them tranquil for a while, as if to give them a deep memory
      for the long parting the next day promised. They had never been closer
      in their month of love, nor communicated more profoundly one with
      another, than when she brushed silent lips against his coat’s shoulder
      or when he touched the end of her fingers, gently, as though she were
      asleep.
  
      
      He did extraordinarily well in the war. He was a captain before he
      went to the front, and following the Argonne battles he got his
      majority and the command of the divisional machine-guns. After the
      armistice he tried frantically to get home, but some complication or
      misunderstanding sent him to Oxford instead. He was worried now—there
      was a quality of nervous despair in Daisy’s letters. She didn’t see
      why he couldn’t come. She was feeling the pressure of the world
      outside, and she wanted to see him and feel his presence beside her
      and be reassured that she was doing the right thing after all.
      
      For Daisy was young and her artificial world was redolent of orchids
      and pleasant, cheerful snobbery and orchestras which set the rhythm of
      the year, summing up the sadness and suggestiveness of life in new
      tunes. All night the saxophones wailed the hopeless comment of the
      “Beale Street Blues” while a hundred pairs of golden and silver
      slippers shuffled the shining dust. At the grey tea hour there were
      always rooms that throbbed incessantly with this low, sweet fever,
      while fresh faces drifted here and there like rose petals blown by the
      sad horns around the floor.
      
      Through this twilight universe Daisy began to move again with the
      season; suddenly she was again keeping half a dozen dates a day with
      half a dozen men, and drowsing asleep at dawn with the beads and
      chiffon of an evening-dress tangled among dying orchids on the floor
      beside her bed. And all the time something within her was crying for a
      decision. She wanted her life shaped now, immediately—and the decision
      must be made by some force—of love, of money, of unquestionable
      practicality—that was close at hand.
      
      That force took shape in the middle of spring with the arrival of Tom
      Buchanan. There was a wholesome bulkiness about his person and his
      position, and Daisy was flattered. Doubtless there was a certain
      struggle and a certain relief. The letter reached Gatsby while he was
      still at Oxford.
      
      
      It was dawn now on Long Island and we went about opening the rest of
      the windows downstairs, filling the house with grey-turning,
      gold-turning light. The shadow of a tree fell abruptly across the dew
      and ghostly birds began to sing among the blue leaves. There was a
      slow, pleasant movement in the air, scarcely a wind, promising a cool,
      lovely day.
      
      “I don’t think she ever loved him.” Gatsby turned around from a window
      and looked at me challengingly. “You must remember, old sport, she was
      very excited this afternoon. He told her those things in a way that
      frightened her—that made it look as if I was some kind of cheap
      sharper. And the result was she hardly knew what she was saying.”
      
      He sat down gloomily.
      
      “Of course she might have loved him just for a minute, when they were
      first married—and loved me more even then, do you see?”
      
      Suddenly he came out with a curious remark.
      
      “In any case,” he said, “it was just personal.”
      
      What could you make of that, except to suspect some intensity in his
      conception of the affair that couldn’t be measured?
      
      He came back from France when Tom and Daisy were still on their
      wedding trip, and made a miserable but irresistible journey to
      Louisville on the last of his army pay. He stayed there a week,
      walking the streets where their footsteps had clicked together through
      the November night and revisiting the out-of-the-way places to which
      they had driven in her white car. Just as Daisy’s house had always
      seemed to him more mysterious and gay than other houses, so his idea
      of the city itself, even though she was gone from it, was pervaded
      with a melancholy beauty.
      
      He left feeling that if he had searched harder, he might have found
      her—that he was leaving her behind. The day-coach—he was penniless
      now—was hot. He went out to the open vestibule and sat down on a
      folding-chair, and the station slid away and the backs of unfamiliar
      buildings moved by. Then out into the spring fields, where a yellow
      trolley raced them for a minute with people in it who might once have
      seen the pale magic of her face along the casual street.
      
      The track curved and now it was going away from the sun, which, as it
      sank lower, seemed to spread itself in benediction over the vanishing
      city where she had drawn her breath. He stretched out his hand
      desperately as if to snatch only a wisp of air, to save a fragment of
      the spot that she had made lovely for him. But it was all going by too
      fast now for his blurred eyes and he knew that he had lost that part
      of it, the freshest and the best, forever.
      
      It was nine o’clock when we finished breakfast and went out on the
      porch. The night had made a sharp difference in the weather and there
      was an autumn flavour in the air. The gardener, the last one of
      Gatsby’s former servants, came to the foot of the steps.
      
      “I’m going to drain the pool today, Mr. Gatsby. Leaves’ll start
      falling pretty soon, and then there’s always trouble with the pipes.”
      
      “Don’t do it today,” Gatsby answered. He turned to me apologetically.
      “You know, old sport, I’ve never used that pool all summer?”
      
      I looked at my watch and stood up.
      
      “Twelve minutes to my train.”
      
      I didn’t want to go to the city. I wasn’t worth a decent stroke of
      work, but it was more than that—I didn’t want to leave Gatsby. I
      missed that train, and then another, before I could get myself away.
      
      “I’ll call you up,” I said finally.
      
      “Do, old sport.”
      
      “I’ll call you about noon.”
      
      We walked slowly down the steps.
      
      “I suppose Daisy’ll call too.” He looked at me anxiously, as if he
      hoped I’d corroborate this.
      
      “I suppose so.”
      
      “Well, goodbye.”
      
      We shook hands and I started away. Just before I reached the hedge I
      remembered something and turned around.
      
      “They’re a rotten crowd,” I shouted across the lawn. “You’re worth the
      whole damn bunch put together.”
      
      I’ve always been glad I said that. It was the only compliment I ever
      gave him, because I disapproved of him from beginning to end. First he
      nodded politely, and then his face broke into that radiant and
      understanding smile, as if we’d been in ecstatic cahoots on that fact
      all the time. His gorgeous pink rag of a suit made a bright spot of
      colour against the white steps, and I thought of the night when I
      first came to his ancestral home, three months before. The lawn and
      drive had been crowded with the faces of those who guessed at his
      corruption—and he had stood on those steps, concealing his
      incorruptible dream, as he waved them goodbye.
      
      I thanked him for his hospitality. We were always thanking him for
      that—I and the others.
      
      “Goodbye,” I called. “I enjoyed breakfast, Gatsby.”
      
      
      Up in the city, I tried for a while to list the quotations on an
      interminable amount of stock, then I fell asleep in my swivel-chair.
      Just before noon the phone woke me, and I started up with sweat
      breaking out on my forehead. It was Jordan Baker; she often called me
      up at this hour because the uncertainty of her own movements between
      hotels and clubs and private houses made her hard to find in any other
      way. Usually her voice came over the wire as something fresh and cool,
      as if a divot from a green golf-links had come sailing in at the
      office window, but this morning it seemed harsh and dry.
      
      “I’ve left Daisy’s house,” she said. “I’m at Hempstead, and I’m going
      down to Southampton this afternoon.”
      
      Probably it had been tactful to leave Daisy’s house, but the act
      annoyed me, and her next remark made me rigid.
      
      “You weren’t so nice to me last night.”
      
      “How could it have mattered then?”
      
      Silence for a moment. Then:
      
      “However—I want to see you.”
      
      “I want to see you, too.”
      
      “Suppose I don’t go to Southampton, and come into town this
      afternoon?”
      
      “No—I don’t think this afternoon.”
      
      “Very well.”
      
      “It’s impossible this afternoon. Various—”
      
      We talked like that for a while, and then abruptly we weren’t talking
      any longer. I don’t know which of us hung up with a sharp click, but I
      know I didn’t care. I couldn’t have talked to her across a tea-table
      that day if I never talked to her again in this world.
      
      I called Gatsby’s house a few minutes later, but the line was busy. I
      tried four times; finally an exasperated central told me the wire was
      being kept open for long distance from Detroit. Taking out my
      timetable, I drew a small circle around the three-fifty train. Then I
      leaned back in my chair and tried to think. It was just noon.
      
      
      When I passed the ash-heaps on the train that morning I had crossed
      deliberately to the other side of the car. I supposed there’d be a
      curious crowd around there all day with little boys searching for dark
      spots in the dust, and some garrulous man telling over and over what
      had happened, until it became less and less real even to him and he
      could tell it no longer, and Myrtle Wilson’s tragic achievement was
      forgotten. Now I want to go back a little and tell what happened at
      the garage after we left there the night before.
      
      They had difficulty in locating the sister, Catherine. She must have
      broken her rule against drinking that night, for when she arrived she
      was stupid with liquor and unable to understand that the ambulance had
      already gone to Flushing. When they convinced her of this, she
      immediately fainted, as if that was the intolerable part of the
      affair. Someone, kind or curious, took her in his car and drove her in
      the wake of her sister’s body.
      
      Until long after midnight a changing crowd lapped up against the front
      of the garage, while George Wilson rocked himself back and forth on
      the couch inside. For a while the door of the office was open, and
      everyone who came into the garage glanced irresistibly through it.
      Finally someone said it was a shame, and closed the door. Michaelis
      and several other men were with him; first, four or five men, later
      two or three men. Still later Michaelis had to ask the last stranger
      to wait there fifteen minutes longer, while he went back to his own
      place and made a pot of coffee. After that, he stayed there alone with
      Wilson until dawn.
      
      About three o’clock the quality of Wilson’s incoherent muttering
      changed—he grew quieter and began to talk about the yellow car. He
      announced that he had a way of finding out whom the yellow car
      belonged to, and then he blurted out that a couple of months ago his
      wife had come from the city with her face bruised and her nose
      swollen.
      
      But when he heard himself say this, he flinched and began to cry “Oh,
      my God!” again in his groaning voice. Michaelis made a clumsy attempt
      to distract him.
      
      “How long have you been married, George? Come on there, try and sit
      still a minute, and answer my question. How long have you been
      married?”
      
      “Twelve years.”
      
      “Ever had any children? Come on, George, sit still—I asked you a
      question. Did you ever have any children?”
      
      The hard brown beetles kept thudding against the dull light, and
      whenever Michaelis heard a car go tearing along the road outside it
      sounded to him like the car that hadn’t stopped a few hours before.
      He didn’t like to go into the garage, because the work bench was
      stained where the body had been lying, so he moved uncomfortably
      around the office—he knew every object in it before morning—and from
      time to time sat down beside Wilson trying to keep him more quiet.
      
      “Have you got a church you go to sometimes, George? Maybe even if you
      haven’t been there for a long time? Maybe I could call up the church
      and get a priest to come over and he could talk to you, see?”
      
      “Don’t belong to any.”
      
      “You ought to have a church, George, for times like this. You must
      have gone to church once. Didn’t you get married in a church? Listen,
      George, listen to me. Didn’t you get married in a church?”
      
      “That was a long time ago.”
      
      The effort of answering broke the rhythm of his rocking—for a moment
      he was silent. Then the same half-knowing, half-bewildered look came
      back into his faded eyes.
      
      “Look in the drawer there,” he said, pointing at the desk.
      
      “Which drawer?”
      
      “That drawer—that one.”
      
      Michaelis opened the drawer nearest his hand. There was nothing in it
      but a small, expensive dog-leash, made of leather and braided
      silver. It was apparently new.
      
      “This?” he inquired, holding it up.
      
      Wilson stared and nodded.
      
      “I found it yesterday afternoon. She tried to tell me about it, but I
      knew it was something funny.”
      
      “You mean your wife bought it?”
      
      “She had it wrapped in tissue paper on her bureau.”
      
      Michaelis didn’t see anything odd in that, and he gave Wilson a dozen
      reasons why his wife might have bought the dog-leash. But conceivably
      Wilson had heard some of these same explanations before, from Myrtle,
      because he began saying “Oh, my God!” again in a whisper—his comforter
      left several explanations in the air.
      
      “Then he killed her,” said Wilson. His mouth dropped open suddenly.
      
      “Who did?”
      
      “I have a way of finding out.”
      
      “You’re morbid, George,” said his friend. “This has been a strain to
      you and you don’t know what you’re saying. You’d better try and sit
      quiet till morning.”
      
      “He murdered her.”
      
      “It was an accident, George.”
      
      Wilson shook his head. His eyes narrowed and his mouth widened
      slightly with the ghost of a superior “Hm!”
      
      “I know,” he said definitely. “I’m one of these trusting fellas and I
      don’t think any harm to nobody, but when I get to know a thing I know
      it. It was the man in that car. She ran out to speak to him and he
      wouldn’t stop.”
      
      Michaelis had seen this too, but it hadn’t occurred to him that there
      was any special significance in it. He believed that Mrs. Wilson had
      been running away from her husband, rather than trying to stop any
      particular car.
      
      “How could she of been like that?”
      
      “She’s a deep one,” said Wilson, as if that answered the question.
      “Ah-h-h—”
      
      He began to rock again, and Michaelis stood twisting the leash in his
      hand.
      
      “Maybe you got some friend that I could telephone for, George?”
      
      This was a forlorn hope—he was almost sure that Wilson had no friend:
      there was not enough of him for his wife. He was glad a little later
      when he noticed a change in the room, a blue quickening by the window,
      and realized that dawn wasn’t far off. About five o’clock it was blue
      enough outside to snap off the light.
      
      Wilson’s glazed eyes turned out to the ash-heaps, where small grey
      clouds took on fantastic shapes and scurried here and there in the
      faint dawn wind.
      
      “I spoke to her,” he muttered, after a long silence. “I told her she
      might fool me but she couldn’t fool God. I took her to the
      window”—with an effort he got up and walked to the rear window and
      leaned with his face pressed against it—“and I said ‘God knows what
      you’ve been doing, everything you’ve been doing. You may fool me, but
      you can’t fool God!’ ”
      
      Standing behind him, Michaelis saw with a shock that he was looking at
      the eyes of Doctor T. J. Eckleburg, which had just emerged, pale and
      enormous, from the dissolving night.
      
      “God sees everything,” repeated Wilson.
      
      “That’s an advertisement,” Michaelis assured him. Something made him
      turn away from the window and look back into the room. But Wilson
      stood there a long time, his face close to the window pane, nodding
      into the twilight.
      
      
      By six o’clock Michaelis was worn out, and grateful for the sound of a
      car stopping outside. It was one of the watchers of the night before
      who had promised to come back, so he cooked breakfast for three, which
      he and the other man ate together. Wilson was quieter now, and
      Michaelis went home to sleep; when he awoke four hours later and
      hurried back to the garage, Wilson was gone.
      
      His movements—he was on foot all the time—were afterward traced to
      Port Roosevelt and then to Gad’s Hill, where he bought a sandwich that
      he didn’t eat, and a cup of coffee. He must have been tired and
      walking slowly, for he didn’t reach Gad’s Hill until noon. Thus far
      there was no difficulty in accounting for his time—there were boys who
      had seen a man “acting sort of crazy,” and motorists at whom he stared
      oddly from the side of the road. Then for three hours he disappeared
      from view. The police, on the strength of what he said to Michaelis,
      that he “had a way of finding out,” supposed that he spent that time
      going from garage to garage thereabout, inquiring for a yellow car. On
      the other hand, no garage man who had seen him ever came forward, and
      perhaps he had an easier, surer way of finding out what he wanted to
      know. By half-past two he was in West Egg, where he asked someone the
      way to Gatsby’s house. So by that time he knew Gatsby’s name.
      
      
      At two o’clock Gatsby put on his bathing-suit and left word with the
      butler that if anyone phoned word was to be brought to him at the
      pool. He stopped at the garage for a pneumatic mattress that had
      amused his guests during the summer, and the chauffeur helped him to
      pump it up. Then he gave instructions that the open car wasn’t to be
      taken out under any circumstances—and this was strange, because the
      front right fender needed repair.
      
      Gatsby shouldered the mattress and started for the pool. Once he
      stopped and shifted it a little, and the chauffeur asked him if he
      needed help, but he shook his head and in a moment disappeared among
      the yellowing trees.
      
      No telephone message arrived, but the butler went without his sleep
      and waited for it until four o’clock—until long after there was anyone
      to give it to if it came. I have an idea that Gatsby himself didn’t
      believe it would come, and perhaps he no longer cared. If that was
      true he must have felt that he had lost the old warm world, paid a
      high price for living too long with a single dream. He must have
      looked up at an unfamiliar sky through frightening leaves and shivered
      as he found what a grotesque thing a rose is and how raw the sunlight
      was upon the scarcely created grass. A new world, material without
      being real, where poor ghosts, breathing dreams like air, drifted
      fortuitously about … like that ashen, fantastic figure gliding toward
      him through the amorphous trees.
      
      The chauffeur—he was one of Wolfshiem’s protégés—heard the
      shots—afterwards he could only say that he hadn’t thought anything
      much about them. I drove from the station directly to Gatsby’s house
      and my rushing anxiously up the front steps was the first thing that
      alarmed anyone. But they knew then, I firmly believe. With scarcely a
      word said, four of us, the chauffeur, butler, gardener, and I hurried
      down to the pool.
      
      There was a faint, barely perceptible movement of the water as the
      fresh flow from one end urged its way toward the drain at the other.
      With little ripples that were hardly the shadows of waves, the laden
      mattress moved irregularly down the pool. A small gust of wind that
      scarcely corrugated the surface was enough to disturb its accidental
      course with its accidental burden. The touch of a cluster of leaves
      revolved it slowly, tracing, like the leg of transit, a thin red
      circle in the water.
      
      It was after we started with Gatsby toward the house that the gardener
      saw Wilson’s body a little way off in the grass, and the holocaust was
      complete.` },
      { chapter: 9, title: 'Chapter 9', content: ` IX

      After two years I remember the rest of that day, and that night and
      the next day, only as an endless drill of police and photographers and
      newspaper men in and out of Gatsby’s front door. A rope stretched
      across the main gate and a policeman by it kept out the curious, but
      little boys soon discovered that they could enter through my yard, and
      there were always a few of them clustered open-mouthed about the
      pool. Someone with a positive manner, perhaps a detective, used the
      expression “madman” as he bent over Wilson’s body that afternoon, and
      the adventitious authority of his voice set the key for the newspaper
      reports next morning.
      
      Most of those reports were a nightmare—grotesque, circumstantial,
      eager, and untrue. When Michaelis’s testimony at the inquest brought
      to light Wilson’s suspicions of his wife I thought the whole tale
      would shortly be served up in racy pasquinade—but Catherine, who might
      have said anything, didn’t say a word. She showed a surprising amount
      of character about it too—looked at the coroner with determined eyes
      under that corrected brow of hers, and swore that her sister had never
      seen Gatsby, that her sister was completely happy with her husband,
      that her sister had been into no mischief whatever. She convinced
      herself of it, and cried into her handkerchief, as if the very
      suggestion was more than she could endure. So Wilson was reduced to a
      man “deranged by grief” in order that the case might remain in its
      simplest form. And it rested there.
      
      But all this part of it seemed remote and unessential. I found myself
      on Gatsby’s side, and alone. From the moment I telephoned news of the
      catastrophe to West Egg village, every surmise about him, and every
      practical question, was referred to me. At first I was surprised and
      confused; then, as he lay in his house and didn’t move or breathe or
      speak, hour upon hour, it grew upon me that I was responsible, because
      no one else was interested—interested, I mean, with that intense
      personal interest to which everyone has some vague right at the end.
      
      I called up Daisy half an hour after we found him, called her
      instinctively and without hesitation. But she and Tom had gone away
      early that afternoon, and taken baggage with them.
      
      “Left no address?”
      
      “No.”
      
      “Say when they’d be back?”
      
      “No.”
      
      “Any idea where they are? How I could reach them?”
      
      “I don’t know. Can’t say.”
      
      I wanted to get somebody for him. I wanted to go into the room where
      he lay and reassure him: “I’ll get somebody for you, Gatsby. Don’t
      worry. Just trust me and I’ll get somebody for you—”
      
      Meyer Wolfshiem’s name wasn’t in the phone book. The butler gave me
      his office address on Broadway, and I called Information, but by the
      time I had the number it was long after five, and no one answered the
      phone.
      
      “Will you ring again?”
      
      “I’ve rung three times.”
      
      “It’s very important.”
      
      “Sorry. I’m afraid no one’s there.”
      
      I went back to the drawing-room and thought for an instant that they
      were chance visitors, all these official people who suddenly filled
      it. But, though they drew back the sheet and looked at Gatsby with
      shocked eyes, his protest continued in my brain:
      
      “Look here, old sport, you’ve got to get somebody for me. You’ve got
      to try hard. I can’t go through this alone.”
      
      Someone started to ask me questions, but I broke away and going
      upstairs looked hastily through the unlocked parts of his desk—he’d
      never told me definitely that his parents were dead. But there was
      nothing—only the picture of Dan Cody, a token of forgotten violence,
      staring down from the wall.
      
      Next morning I sent the butler to New York with a letter to Wolfshiem,
      which asked for information and urged him to come out on the next
      train. That request seemed superfluous when I wrote it. I was sure
      he’d start when he saw the newspapers, just as I was sure there’d be a
      wire from Daisy before noon—but neither a wire nor Mr. Wolfshiem
      arrived; no one arrived except more police and photographers and
      newspaper men. When the butler brought back Wolfshiem’s answer I began
      to have a feeling of defiance, of scornful solidarity between Gatsby
      and me against them all.
      
       Dear Mr. Carraway. This has been one of the most terrible shocks of
       my life to me I hardly can believe it that it is true at all. Such a
       mad act as that man did should make us all think. I cannot come down
       now as I am tied up in some very important business and cannot get
       mixed up in this thing now. If there is anything I can do a little
       later let me know in a letter by Edgar. I hardly know where I am when
       I hear about a thing like this and am completely knocked down and
       out.
      
      Yours truly
      
      Meyer Wolfshiem
      
      and then hasty addenda beneath:
      
       Let me know about the funeral etc do not know his family at all.
      
      When the phone rang that afternoon and Long Distance said Chicago was
      calling I thought this would be Daisy at last. But the connection came
      through as a man’s voice, very thin and far away.
      
      “This is Slagle speaking …”
      
      “Yes?” The name was unfamiliar.
      
      “Hell of a note, isn’t it? Get my wire?”
      
      “There haven’t been any wires.”
      
      “Young Parke’s in trouble,” he said rapidly. “They picked him up when
      he handed the bonds over the counter. They got a circular from New
      York giving ’em the numbers just five minutes before. What d’you know
      about that, hey? You never can tell in these hick towns—”
      
      “Hello!” I interrupted breathlessly. “Look here—this isn’t Mr.
      Gatsby. Mr. Gatsby’s dead.”
      
      There was a long silence on the other end of the wire, followed by an
      exclamation … then a quick squawk as the connection was broken.
      
      
      I think it was on the third day that a telegram signed Henry C. Gatz
      arrived from a town in Minnesota. It said only that the sender was
      leaving immediately and to postpone the funeral until he came.
      
      It was Gatsby’s father, a solemn old man, very helpless and dismayed,
      bundled up in a long cheap ulster against the warm September day. His
      eyes leaked continuously with excitement, and when I took the bag and
      umbrella from his hands he began to pull so incessantly at his sparse
      grey beard that I had difficulty in getting off his coat. He was on
      the point of collapse, so I took him into the music-room and made him
      sit down while I sent for something to eat. But he wouldn’t eat, and
      the glass of milk spilled from his trembling hand.
      
      “I saw it in the Chicago newspaper,” he said. “It was all in the
      Chicago newspaper. I started right away.”
      
      “I didn’t know how to reach you.”
      
      His eyes, seeing nothing, moved ceaselessly about the room.
      
      “It was a madman,” he said. “He must have been mad.”
      
      “Wouldn’t you like some coffee?” I urged him.
      
      “I don’t want anything. I’m all right now, Mr.—”
      
      “Carraway.”
      
      “Well, I’m all right now. Where have they got Jimmy?”
      
      I took him into the drawing-room, where his son lay, and left him
      there. Some little boys had come up on the steps and were looking into
      the hall; when I told them who had arrived, they went reluctantly
      away.
      
      After a little while Mr. Gatz opened the door and came out, his mouth
      ajar, his face flushed slightly, his eyes leaking isolated and
      unpunctual tears. He had reached an age where death no longer has the
      quality of ghastly surprise, and when he looked around him now for the
      first time and saw the height and splendour of the hall and the great
      rooms opening out from it into other rooms, his grief began to be
      mixed with an awed pride. I helped him to a bedroom upstairs; while he
      took off his coat and vest I told him that all arrangements had been
      deferred until he came.
      
      “I didn’t know what you’d want, Mr. Gatsby—”
      
      “Gatz is my name.”
      
      “—Mr. Gatz. I thought you might want to take the body West.”
      
      He shook his head.
      
      “Jimmy always liked it better down East. He rose up to his position in
      the East. Were you a friend of my boy’s, Mr.—?”
      
      “We were close friends.”
      
      “He had a big future before him, you know. He was only a young man,
      but he had a lot of brain power here.”
      
      He touched his head impressively, and I nodded.
      
      “If he’d of lived, he’d of been a great man. A man like James J.
      Hill. He’d of helped build up the country.”
      
      “That’s true,” I said, uncomfortably.
      
      He fumbled at the embroidered coverlet, trying to take it from the
      bed, and lay down stiffly—was instantly asleep.
      
      That night an obviously frightened person called up, and demanded to
      know who I was before he would give his name.
      
      “This is Mr. Carraway,” I said.
      
      “Oh!” He sounded relieved. “This is Klipspringer.”
      
      I was relieved too, for that seemed to promise another friend at
      Gatsby’s grave. I didn’t want it to be in the papers and draw a
      sightseeing crowd, so I’d been calling up a few people myself. They
      were hard to find.
      
      “The funeral’s tomorrow,” I said. “Three o’clock, here at the house.
      I wish you’d tell anybody who’d be interested.”
      
      “Oh, I will,” he broke out hastily. “Of course I’m not likely to see
      anybody, but if I do.”
      
      His tone made me suspicious.
      
      “Of course you’ll be there yourself.”
      
      “Well, I’ll certainly try. What I called up about is—”
      
      “Wait a minute,” I interrupted. “How about saying you’ll come?”
      
      “Well, the fact is—the truth of the matter is that I’m staying with
      some people up here in Greenwich, and they rather expect me to be with
      them tomorrow. In fact, there’s a sort of picnic or something. Of
      course I’ll do my best to get away.”
      
      I ejaculated an unrestrained “Huh!” and he must have heard me, for he
      went on nervously:
      
      “What I called up about was a pair of shoes I left there. I wonder if
      it’d be too much trouble to have the butler send them on. You see,
      they’re tennis shoes, and I’m sort of helpless without them. My
      address is care of B. F.—”
      
      I didn’t hear the rest of the name, because I hung up the receiver.
      
      After that I felt a certain shame for Gatsby—one gentleman to whom I
      telephoned implied that he had got what he deserved. However, that was
      my fault, for he was one of those who used to sneer most bitterly at
      Gatsby on the courage of Gatsby’s liquor, and I should have known
      better than to call him.
      
      The morning of the funeral I went up to New York to see Meyer
      Wolfshiem; I couldn’t seem to reach him any other way. The door that I
      pushed open, on the advice of an elevator boy, was marked “The
      Swastika Holding Company,” and at first there didn’t seem to be anyone
      inside. But when I’d shouted “hello” several times in vain, an
      argument broke out behind a partition, and presently a lovely Jewess
      appeared at an interior door and scrutinized me with black hostile
      eyes.
      
      “Nobody’s in,” she said. “Mr. Wolfshiem’s gone to Chicago.”
      
      The first part of this was obviously untrue, for someone had begun to
      whistle “The Rosary,” tunelessly, inside.
      
      “Please say that Mr. Carraway wants to see him.”
      
      “I can’t get him back from Chicago, can I?”
      
      At this moment a voice, unmistakably Wolfshiem’s, called “Stella!”
      from the other side of the door.
      
      “Leave your name on the desk,” she said quickly. “I’ll give it to him
      when he gets back.”
      
      “But I know he’s there.”
      
      She took a step toward me and began to slide her hands indignantly up
      and down her hips.
      
      “You young men think you can force your way in here any time,” she
      scolded. “We’re getting sickantired of it. When I say he’s in Chicago,
      he’s in Chicago.”
      
      I mentioned Gatsby.
      
      “Oh-h!” She looked at me over again. “Will you just—What was your
      name?”
      
      She vanished. In a moment Meyer Wolfshiem stood solemnly in the
      doorway, holding out both hands. He drew me into his office, remarking
      in a reverent voice that it was a sad time for all of us, and offered
      me a cigar.
      
      “My memory goes back to when first I met him,” he said. “A young major
      just out of the army and covered over with medals he got in the war.
      He was so hard up he had to keep on wearing his uniform because he
      couldn’t buy some regular clothes. First time I saw him was when he
      came into Winebrenner’s poolroom at Forty-third Street and asked for a
      job. He hadn’t eat anything for a couple of days. ‘Come on have some
      lunch with me,’ I said. He ate more than four dollars’ worth of food
      in half an hour.”
      
      “Did you start him in business?” I inquired.
      
      “Start him! I made him.”
      
      “Oh.”
      
      “I raised him up out of nothing, right out of the gutter. I saw right
      away he was a fine-appearing, gentlemanly young man, and when he told
      me he was at Oggsford I knew I could use him good. I got him to join
      the American Legion and he used to stand high there. Right off he did
      some work for a client of mine up to Albany. We were so thick like
      that in everything”—he held up two bulbous fingers—“always together.”
      
      I wondered if this partnership had included the World’s Series
      transaction in 1919.
      
      “Now he’s dead,” I said after a moment. “You were his closest friend,
      so I know you’ll want to come to his funeral this afternoon.”
      
      “I’d like to come.”
      
      “Well, come then.”
      
      The hair in his nostrils quivered slightly, and as he shook his head
      his eyes filled with tears.
      
      “I can’t do it—I can’t get mixed up in it,” he said.
      
      “There’s nothing to get mixed up in. It’s all over now.”
      
      “When a man gets killed I never like to get mixed up in it in any
      way. I keep out. When I was a young man it was different—if a friend
      of mine died, no matter how, I stuck with them to the end. You may
      think that’s sentimental, but I mean it—to the bitter end.”
      
      I saw that for some reason of his own he was determined not to come,
      so I stood up.
      
      “Are you a college man?” he inquired suddenly.
      
      For a moment I thought he was going to suggest a “gonnegtion,” but he
      only nodded and shook my hand.
      
      “Let us learn to show our friendship for a man when he is alive and
      not after he is dead,” he suggested. “After that my own rule is to let
      everything alone.”
      
      When I left his office the sky had turned dark and I got back to West
      Egg in a drizzle. After changing my clothes I went next door and found
      Mr. Gatz walking up and down excitedly in the hall. His pride in his
      son and in his son’s possessions was continually increasing and now he
      had something to show me.
      
      “Jimmy sent me this picture.” He took out his wallet with trembling
      fingers. “Look there.”
      
      It was a photograph of the house, cracked in the corners and dirty
      with many hands. He pointed out every detail to me eagerly. “Look
      there!” and then sought admiration from my eyes. He had shown it so
      often that I think it was more real to him now than the house itself.
      
      “Jimmy sent it to me. I think it’s a very pretty picture. It shows up
      well.”
      
      “Very well. Had you seen him lately?”
      
      “He come out to see me two years ago and bought me the house I live in
      now. Of course we was broke up when he run off from home, but I see
      now there was a reason for it. He knew he had a big future in front of
      him. And ever since he made a success he was very generous with me.”
      
      He seemed reluctant to put away the picture, held it for another
      minute, lingeringly, before my eyes. Then he returned the wallet and
      pulled from his pocket a ragged old copy of a book called Hopalong
      Cassidy.
      
      “Look here, this is a book he had when he was a boy. It just shows
      you.”
      
      He opened it at the back cover and turned it around for me to see. On
      the last flyleaf was printed the word schedule, and the date September
      12, 1906. And underneath:
      
          Rise from bed                                  6:00      a.m.
          Dumbell exercise and wall-scaling              6:15-6:30 ”
          Study electricity, etc.                        7:15-8:15 ”
          Work                                           8:30-4:30 p.m.
          Baseball and sports                            4:30-5:00 ”
          Practise elocution, poise and how to attain it 5:00-6:00 ”
          Study needed inventions                        7:00-9:00 ”
      
                     General Resolves
      
        * No wasting time at Shafters or [a name, indecipherable]
      
        * No more smokeing or chewing.
      
        * Bath every other day
      
        * Read one improving book or magazine per week
      
        * Save $5.00 [crossed out] $3.00 per week
      
        * Be better to parents
      
      “I came across this book by accident,” said the old man. “It just
      shows you, don’t it?”
      
      “It just shows you.”
      
      “Jimmy was bound to get ahead. He always had some resolves like this
      or something. Do you notice what he’s got about improving his mind? He
      was always great for that. He told me I et like a hog once, and I beat
      him for it.”
      
      He was reluctant to close the book, reading each item aloud and then
      looking eagerly at me. I think he rather expected me to copy down the
      list for my own use.
      
      A little before three the Lutheran minister arrived from Flushing, and
      I began to look involuntarily out the windows for other cars. So did
      Gatsby’s father. And as the time passed and the servants came in and
      stood waiting in the hall, his eyes began to blink anxiously, and he
      spoke of the rain in a worried, uncertain way. The minister glanced
      several times at his watch, so I took him aside and asked him to wait
      for half an hour. But it wasn’t any use. Nobody came.
    
      
      About five o’clock our procession of three cars reached the cemetery
      and stopped in a thick drizzle beside the gate—first a motor hearse,
      horribly black and wet, then Mr. Gatz and the minister and me in the
      limousine, and a little later four or five servants and the postman
      from West Egg, in Gatsby’s station wagon, all wet to the skin. As we
      started through the gate into the cemetery I heard a car stop and then
      the sound of someone splashing after us over the soggy ground. I
      looked around. It was the man with owl-eyed glasses whom I had found
      marvelling over Gatsby’s books in the library one night three months
      before.
      
      I’d never seen him since then. I don’t know how he knew about the
      funeral, or even his name. The rain poured down his thick glasses, and
      he took them off and wiped them to see the protecting canvas unrolled
      from Gatsby’s grave.
      
      I tried to think about Gatsby then for a moment, but he was already
      too far away, and I could only remember, without resentment, that
      Daisy hadn’t sent a message or a flower. Dimly I heard someone murmur
      “Blessed are the dead that the rain falls on,” and then the owl-eyed
      man said “Amen to that,” in a brave voice.
      
      We straggled down quickly through the rain to the cars. Owl-eyes spoke
      to me by the gate.
      
      “I couldn’t get to the house,” he remarked.
      
      “Neither could anybody else.”
      
      “Go on!” He started. “Why, my God! they used to go there by the
      hundreds.”
      
      He took off his glasses and wiped them again, outside and in.
      
      “The poor son-of-a-bitch,” he said.
      
      
      One of my most vivid memories is of coming back West from prep school
      and later from college at Christmas time. Those who went farther than
      Chicago would gather in the old dim Union Station at six o’clock of a
      December evening, with a few Chicago friends, already caught up into
      their own holiday gaieties, to bid them a hasty goodbye. I remember
      the fur coats of the girls returning from Miss This-or-That’s and the
      chatter of frozen breath and the hands waving overhead as we caught
      sight of old acquaintances, and the matchings of invitations: “Are you
      going to the Ordways’? the Herseys’? the Schultzes’?” and the long
      green tickets clasped tight in our gloved hands. And last the murky
      yellow cars of the Chicago, Milwaukee and St. Paul railroad looking
      cheerful as Christmas itself on the tracks beside the gate.
      
      When we pulled out into the winter night and the real snow, our snow,
      began to stretch out beside us and twinkle against the windows, and
      the dim lights of small Wisconsin stations moved by, a sharp wild
      brace came suddenly into the air. We drew in deep breaths of it as we
      walked back from dinner through the cold vestibules, unutterably aware
      of our identity with this country for one strange hour, before we
      melted indistinguishably into it again.
      
      That’s my Middle West—not the wheat or the prairies or the lost Swede
      towns, but the thrilling returning trains of my youth, and the street
      lamps and sleigh bells in the frosty dark and the shadows of holly
      wreaths thrown by lighted windows on the snow. I am part of that, a
      little solemn with the feel of those long winters, a little complacent
      from growing up in the Carraway house in a city where dwellings are
      still called through decades by a family’s name. I see now that this
      has been a story of the West, after all—Tom and Gatsby, Daisy and
      Jordan and I, were all Westerners, and perhaps we possessed some
      deficiency in common which made us subtly unadaptable to Eastern life.
      
      Even when the East excited me most, even when I was most keenly aware
      of its superiority to the bored, sprawling, swollen towns beyond the
      Ohio, with their interminable inquisitions which spared only the
      children and the very old—even then it had always for me a quality of
      distortion. West Egg, especially, still figures in my more fantastic
      dreams. I see it as a night scene by El Greco: a hundred houses, at
      once conventional and grotesque, crouching under a sullen, overhanging
      sky and a lustreless moon. In the foreground four solemn men in dress
      suits are walking along the sidewalk with a stretcher on which lies a
      drunken woman in a white evening dress. Her hand, which dangles over
      the side, sparkles cold with jewels. Gravely the men turn in at a
      house—the wrong house. But no one knows the woman’s name, and no one
      cares.
      
      After Gatsby’s death the East was haunted for me like that, distorted
      beyond my eyes’ power of correction. So when the blue smoke of brittle
      leaves was in the air and the wind blew the wet laundry stiff on the
      line I decided to come back home.
      
      There was one thing to be done before I left, an awkward, unpleasant
      thing that perhaps had better have been let alone. But I wanted to
      leave things in order and not just trust that obliging and indifferent
      sea to sweep my refuse away. I saw Jordan Baker and talked over and
      around what had happened to us together, and what had happened
      afterward to me, and she lay perfectly still, listening, in a big
      chair.
      
      She was dressed to play golf, and I remember thinking she looked like
      a good illustration, her chin raised a little jauntily, her hair the
      colour of an autumn leaf, her face the same brown tint as the
      fingerless glove on her knee. When I had finished she told me without
      comment that she was engaged to another man. I doubted that, though
      there were several she could have married at a nod of her head, but I
      pretended to be surprised. For just a minute I wondered if I wasn’t
      making a mistake, then I thought it all over again quickly and got up
      to say goodbye.
      
      “Nevertheless you did throw me over,” said Jordan suddenly. “You threw
      me over on the telephone. I don’t give a damn about you now, but it
      was a new experience for me, and I felt a little dizzy for a while.”
      
      We shook hands.
      
      “Oh, and do you remember”—she added—“a conversation we had once about
      driving a car?”
      
      “Why—not exactly.”
      
      “You said a bad driver was only safe until she met another bad driver?
      Well, I met another bad driver, didn’t I? I mean it was careless of me
      to make such a wrong guess. I thought you were rather an honest,
      straightforward person. I thought it was your secret pride.”
      
      “I’m thirty,” I said. “I’m five years too old to lie to myself and
      call it honour.”
      
      She didn’t answer. Angry, and half in love with her, and tremendously
      sorry, I turned away.
      
      
      One afternoon late in October I saw Tom Buchanan. He was walking ahead
      of me along Fifth Avenue in his alert, aggressive way, his hands out a
      little from his body as if to fight off interference, his head moving
      sharply here and there, adapting itself to his restless eyes. Just as
      I slowed up to avoid overtaking him he stopped and began frowning into
      the windows of a jewellery store. Suddenly he saw me and walked back,
      holding out his hand.
      
      “What’s the matter, Nick? Do you object to shaking hands with me?”
      
      “Yes. You know what I think of you.”
      
      “You’re crazy, Nick,” he said quickly. “Crazy as hell. I don’t know
      what’s the matter with you.”
      
      “Tom,” I inquired, “what did you say to Wilson that afternoon?”
      
      He stared at me without a word, and I knew I had guessed right about
      those missing hours. I started to turn away, but he took a step after
      me and grabbed my arm.
      
      “I told him the truth,” he said. “He came to the door while we were
      getting ready to leave, and when I sent down word that we weren’t in
      he tried to force his way upstairs. He was crazy enough to kill me if
      I hadn’t told him who owned the car. His hand was on a revolver in his
      pocket every minute he was in the house—” He broke off defiantly.
      “What if I did tell him? That fellow had it coming to him. He threw
      dust into your eyes just like he did in Daisy’s, but he was a tough
      one. He ran over Myrtle like you’d run over a dog and never even
      stopped his car.”
      
      There was nothing I could say, except the one unutterable fact that it
      wasn’t true.
      
      “And if you think I didn’t have my share of suffering—look here, when
      I went to give up that flat and saw that damn box of dog biscuits
      sitting there on the sideboard, I sat down and cried like a baby. By
      God it was awful—”
      
      I couldn’t forgive him or like him, but I saw that what he had done
      was, to him, entirely justified. It was all very careless and
      confused. They were careless people, Tom and Daisy—they smashed up
      things and creatures and then retreated back into their money or their
      vast carelessness, or whatever it was that kept them together, and let
      other people clean up the mess they had made …
      
      I shook hands with him; it seemed silly not to, for I felt suddenly as
      though I were talking to a child. Then he went into the jewellery
      store to buy a pearl necklace—or perhaps only a pair of cuff
      buttons—rid of my provincial squeamishness forever.

      
      Gatsby’s house was still empty when I left—the grass on his lawn had
      grown as long as mine. One of the taxi drivers in the village never
      took a fare past the entrance gate without stopping for a minute and
      pointing inside; perhaps it was he who drove Daisy and Gatsby over to
      East Egg the night of the accident, and perhaps he had made a story
      about it all his own. I didn’t want to hear it and I avoided him when
      I got off the train.
      
      I spent my Saturday nights in New York because those gleaming,
      dazzling parties of his were with me so vividly that I could still
      hear the music and the laughter, faint and incessant, from his garden,
      and the cars going up and down his drive. One night I did hear a
      material car there, and saw its lights stop at his front steps. But I
      didn’t investigate. Probably it was some final guest who had been away
      at the ends of the earth and didn’t know that the party was over.
      
      On the last night, with my trunk packed and my car sold to the grocer,
      I went over and looked at that huge incoherent failure of a house once
      more. On the white steps an obscene word, scrawled by some boy with a
      piece of brick, stood out clearly in the moonlight, and I erased it,
      drawing my shoe raspingly along the stone. Then I wandered down to the
      beach and sprawled out on the sand.
      
      Most of the big shore places were closed now and there were hardly any
      lights except the shadowy, moving glow of a ferryboat across the
      Sound. And as the moon rose higher the inessential houses began to
      melt away until gradually I became aware of the old island here that
      flowered once for Dutch sailors’ eyes—a fresh, green breast of the new
      world. Its vanished trees, the trees that had made way for Gatsby’s
      house, had once pandered in whispers to the last and greatest of all
      human dreams; for a transitory enchanted moment man must have held his
      breath in the presence of this continent, compelled into an aesthetic
      contemplation he neither understood nor desired, face to face for the
      last time in history with something commensurate to his capacity for
      wonder.
      
      And as I sat there brooding on the old, unknown world, I thought of
      Gatsby’s wonder when he first picked out the green light at the end of
      Daisy’s dock. He had come a long way to this blue lawn, and his dream
      must have seemed so close that he could hardly fail to grasp it. He
      did not know that it was already behind him, somewhere back in that
      vast obscurity beyond the city, where the dark fields of the republic
      rolled on under the night.
      
      Gatsby believed in the green light, the orgiastic future that year by
      year recedes before us. It eluded us then, but that’s no
      matter—tomorrow we will run faster, stretch out our arms further … And
      one fine morning. So we beat on, boats against the current, borne back ceaselessly into
      the past.
      END
    ` },
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
      { chapter:  1, title: 'The Golden Bird',               content: `

      A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples. These apples were always counted, and about the time when they began to grow ripe it was found that every night one of them was gone. The king became very angry at this, and ordered the gardener to keep watch all night under the tree. The gardener set his eldest son to watch; but about twelve o’clock he fell asleep, and in the morning another of the apples was missing. Then the second son was ordered to watch; and at midnight he too fell asleep, and in the morning another apple was gone.
      
      Then the third son offered to keep watch; but the gardener at first would not let him, for fear some harm should come to him: however, at last he consented, and the young man laid himself under the tree to watch. As the clock struck twelve he heard a rustling noise in the air, and a bird came flying that was of pure gold; and as it was snapping at one of the apples with its beak, the gardener’s son jumped up and shot an arrow at it. But the arrow did the bird no harm; only it dropped a golden feather from its tail, and then flew away. The golden feather was brought to the king in the morning, and all the council was called together. Everyone agreed that it was worth more than all the wealth of the kingdom: but the king said, ‘One feather is of no use to me, I must have the whole bird.’
      
      Then the gardener’s eldest son set out and thought to find the golden bird very easily; and when he had gone but a little way, he came to a wood, and by the side of the wood he saw a fox sitting; so he took his bow and made ready to shoot at it. Then the fox said, ‘Do not shoot me, for I will give you good counsel; I know what your business is, and that you want to find the golden bird. You will reach a village in the evening; and when you get there, you will see two inns opposite to each other, one of which is very pleasant and beautiful to look at: go not in there, but rest for the night in the other, though it may appear to you to be very poor and mean.’ But the son thought to himself, ‘What can such a beast as this know about the matter?’ So he shot his arrow at the fox; but he missed it, and it set up its tail above its back and ran into the wood. Then he went his way, and in the evening came to the village where the two inns were; and in one of these were people singing, and dancing, and feasting; but the other looked very dirty, and poor. ‘I should be very silly,’ said he, ‘if I went to that shabby house, and left this charming place’; so he went into the smart house, and ate and drank at his ease, and forgot the bird, and his country too.
      
      Time passed on; and as the eldest son did not come back, and no tidings were heard of him, the second son set out, and the same thing happened to him. He met the fox, who gave him the good advice: but when he came to the two inns, his eldest brother was standing at the window where the merrymaking was, and called to him to come in; and he could not withstand the temptation, but went in, and forgot the golden bird and his country in the same manner.
      
      Time passed on again, and the youngest son too wished to set out into the wide world to seek for the golden bird; but his father would not listen to it for a long while, for he was very fond of his son, and was afraid that some ill luck might happen to him also, and prevent his coming back. However, at last it was agreed he should go, for he would not rest at home; and as he came to the wood, he met the fox, and heard the same good counsel. But he was thankful to the fox, and did not attempt his life as his brothers had done; so the fox said, ‘Sit upon my tail, and you will travel faster.’ So he sat down, and the fox began to run, and away they went over stock and stone so quick that their hair whistled in the wind.
      
      When they came to the village, the son followed the fox’s counsel, and without looking about him went to the shabby inn and rested there all night at his ease. In the morning came the fox again and met him as he was beginning his journey, and said, ‘Go straight forward, till you come to a castle, before which lie a whole troop of soldiers fast asleep and snoring: take no notice of them, but go into the castle and pass on and on till you come to a room, where the golden bird sits in a wooden cage; close by it stands a beautiful golden cage; but do not try to take the bird out of the shabby cage and put it into the handsome one, otherwise you will repent it.’ Then the fox stretched out his tail again, and the young man sat himself down, and away they went over stock and stone till their hair whistled in the wind.
      
      Before the castle gate all was as the fox had said: so the son went in and found the chamber where the golden bird hung in a wooden cage, and below stood the golden cage, and the three golden apples that had been lost were lying close by it. Then thought he to himself, ‘It will be a very droll thing to bring away such a fine bird in this shabby cage’; so he opened the door and took hold of it and put it into the golden cage. But the bird set up such a loud scream that all the soldiers awoke, and they took him prisoner and carried him before the king. The next morning the court sat to judge him; and when all was heard, it sentenced him to die, unless he should bring the king the golden horse which could run as swiftly as the wind; and if he did this, he was to have the golden bird given him for his own.
      
      So he set out once more on his journey, sighing, and in great despair, when on a sudden his friend the fox met him, and said, ‘You see now what has happened on account of your not listening to my counsel. I will still, however, tell you how to find the golden horse, if you will do as I bid you. You must go straight on till you come to the castle where the horse stands in his stall: by his side will lie the groom fast asleep and snoring: take away the horse quietly, but be sure to put the old leathern saddle upon him, and not the golden one that is close by it.’ Then the son sat down on the fox’s tail, and away they went over stock and stone till their hair whistled in the wind.
      
      All went right, and the groom lay snoring with his hand upon the golden saddle. But when the son looked at the horse, he thought it a great pity to put the leathern saddle upon it. ‘I will give him the good one,’ said he; ‘I am sure he deserves it.’ As he took up the golden saddle the groom awoke and cried out so loud, that all the guards ran in and took him prisoner, and in the morning he was again brought before the court to be judged, and was sentenced to die. But it was agreed, that, if he could bring thither the beautiful princess, he should live, and have the bird and the horse given him for his own.
      
      Then he went his way very sorrowful; but the old fox came and said, ‘Why did not you listen to me? If you had, you would have carried away both the bird and the horse; yet will I once more give you counsel. Go straight on, and in the evening you will arrive at a castle. At twelve o’clock at night the princess goes to the bathing-house: go up to her and give her a kiss, and she will let you lead her away; but take care you do not suffer her to go and take leave of her father and mother.’ Then the fox stretched out his tail, and so away they went over stock and stone till their hair whistled again.
      
      As they came to the castle, all was as the fox had said, and at twelve o’clock the young man met the princess going to the bath and gave her the kiss, and she agreed to run away with him, but begged with many tears that he would let her take leave of her father. At first he refused, but she wept still more and more, and fell at his feet, till at last he consented; but the moment she came to her father’s house the guards awoke and he was taken prisoner again.
      
      Then he was brought before the king, and the king said, ‘You shall never have my daughter unless in eight days you dig away the hill that stops the view from my window.’ Now this hill was so big that the whole world could not take it away: and when he had worked for seven days, and had done very little, the fox came and said. ‘Lie down and go to sleep; I will work for you.’ And in the morning he awoke and the hill was gone; so he went merrily to the king, and told him that now that it was removed he must give him the princess.
      
      Then the king was obliged to keep his word, and away went the young man and the princess; and the fox came and said to him, ‘We will have all three, the princess, the horse, and the bird.’ ‘Ah!’ said the young man, ‘that would be a great thing, but how can you contrive it?’
      
      ‘If you will only listen,’ said the fox, ‘it can be done. When you come to the king, and he asks for the beautiful princess, you must say, “Here she is!” Then he will be very joyful; and you will mount the golden horse that they are to give you, and put out your hand to take leave of them; but shake hands with the princess last. Then lift her quickly on to the horse behind you; clap your spurs to his side, and gallop away as fast as you can.’
      
      All went right: then the fox said, ‘When you come to the castle where the bird is, I will stay with the princess at the door, and you will ride in and speak to the king; and when he sees that it is the right horse, he will bring out the bird; but you must sit still, and say that you want to look at it, to see whether it is the true golden bird; and when you get it into your hand, ride away.’
      
      This, too, happened as the fox said; they carried off the bird, the princess mounted again, and they rode on to a great wood. Then the fox came, and said, ‘Pray kill me, and cut off my head and my feet.’ But the young man refused to do it: so the fox said, ‘I will at any rate give you good counsel: beware of two things; ransom no one from the gallows, and sit down by the side of no river.’ Then away he went. ‘Well,’ thought the young man, ‘it is no hard matter to keep that advice.’
      
      He rode on with the princess, till at last he came to the village where he had left his two brothers. And there he heard a great noise and uproar; and when he asked what was the matter, the people said, ‘Two men are going to be hanged.’ As he came nearer, he saw that the two men were his brothers, who had turned robbers; so he said, ‘Cannot they in any way be saved?’ But the people said ‘No,’ unless he would bestow all his money upon the rascals and buy their liberty. Then he did not stay to think about the matter, but paid what was asked, and his brothers were given up, and went on with him towards their home.
      
      And as they came to the wood where the fox first met them, it was so cool and pleasant that the two brothers said, ‘Let us sit down by the side of the river, and rest a while, to eat and drink.’ So he said, ‘Yes,’ and forgot the fox’s counsel, and sat down on the side of the river; and while he suspected nothing, they came behind, and threw him down the bank, and took the princess, the horse, and the bird, and went home to the king their master, and said. ‘All this have we won by our labour.’ Then there was great rejoicing made; but the horse would not eat, the bird would not sing, and the princess wept.
      
      The youngest son fell to the bottom of the river’s bed: luckily it was nearly dry, but his bones were almost broken, and the bank was so steep that he could find no way to get out. Then the old fox came once more, and scolded him for not following his advice; otherwise no evil would have befallen him: ‘Yet,’ said he, ‘I cannot leave you here, so lay hold of my tail and hold fast.’ Then he pulled him out of the river, and said to him, as he got upon the bank, ‘Your brothers have set watch to kill you, if they find you in the kingdom.’ So he dressed himself as a poor man, and came secretly to the king’s court, and was scarcely within the doors when the horse began to eat, and the bird to sing, and the princess left off weeping. Then he went to the king, and told him all his brothers’ roguery; and they were seized and punished, and he had the princess given to him again; and after the king’s death he was heir to his kingdom.
      
      A long while after, he went to walk one day in the wood, and the old fox met him, and besought him with tears in his eyes to kill him, and cut off his head and feet. And at last he did so, and in a moment the fox was changed into a man, and turned out to be the brother of the princess, who had been lost a great many many years.` },
      { chapter:  2, title: 'Hans in Luck',                  content: `

      Some men are born to good luck: all they do or try to do comes right—all that falls to them is so much gain—all their geese are swans—all their cards are trumps—toss them which way you will, they will always, like poor puss, alight upon their legs, and only move on so much the faster. The world may very likely not always think of them as they think of themselves, but what care they for the world? what can it know about the matter?
      
      One of these lucky beings was neighbour Hans. Seven long years he had worked hard for his master. At last he said, ‘Master, my time is up; I must go home and see my poor mother once more: so pray pay me my wages and let me go.’ And the master said, ‘You have been a faithful and good servant, Hans, so your pay shall be handsome.’ Then he gave him a lump of silver as big as his head.
      
      Hans took out his pocket-handkerchief, put the piece of silver into it, threw it over his shoulder, and jogged off on his road homewards. As he went lazily on, dragging one foot after another, a man came in sight, trotting gaily along on a capital horse. ‘Ah!’ said Hans aloud, ‘what a fine thing it is to ride on horseback! There he sits as easy and happy as if he was at home, in the chair by his fireside; he trips against no stones, saves shoe-leather, and gets on he hardly knows how.’
      
      Hans did not speak so softly but the horseman heard it all, and said, ‘Well, friend, why do you go on foot then?’ ‘Ah!’ said he, ‘I have this load to carry: to be sure it is silver, but it is so heavy that I can’t hold up my head, and you must know it hurts my shoulder sadly.’ ‘What do you say of making an exchange?’ said the horseman. ‘I will give you my horse, and you shall give me the silver; which will save you a great deal of trouble in carrying such a heavy load about with you.’ ‘With all my heart,’ said Hans: ‘but as you are so kind to me, I must tell you one thing—you will have a weary task to draw that silver about with you.’ However, the horseman got off, took the silver, helped Hans up, gave him the bridle into one hand and the whip into the other, and said, ‘When you want to go very fast, smack your lips loudly together, and cry “Jip!”’
      
      Hans was delighted as he sat on the horse, drew himself up, squared his elbows, turned out his toes, cracked his whip, and rode merrily off. After a time he thought he should like to go a little faster, so he smacked his lips and cried ‘Jip!’ Away went the horse full gallop; and before Hans knew what he was about, he was thrown off, and lay on his back by the road-side. His horse would have ran off, if a shepherd who was coming by, driving a cow, had not stopped it.
      
      Hans soon came to himself and said to the shepherd, ‘This riding is no joke, when a man has the luck to get upon a beast like this that stumbles and flings him off. I like your cow now a great deal better than this smart beast. One can walk along at one’s leisure behind that cow—keep good company, and have milk, butter, and cheese, every day.’ ‘Well,’ said the shepherd, ‘if you are so fond of her, I will change my cow for your horse.’ ‘Done!’ said Hans, merrily.
      
      Hans thought his bargain a very lucky one. But as he drove his cow on, the heat grew greater, and he became very thirsty. He tried to milk the cow, but not a drop was to be had, for the cow was old and dry. As he was trying, the beast gave him such a kick on the head as knocked him senseless. Luckily a butcher soon came by, driving a pig in a wheelbarrow. Hans told him what had happened. ‘Alas!’ said Hans, ‘If I kill this cow, what will she be good for? I hate cow-beef. If it were a pig now, it would at any rate make sausages.’ ‘Well,’ said the butcher, ‘I will change, and give you my fine fat pig for the cow.’ ‘Heaven reward you for your kindness!’ said Hans.
      
      So on he jogged, and next he met a countryman carrying a fine white goose. The countryman told him, ‘Hark ye! Your pig may get you into a scrape. A pig has been stolen from the squire in the village I just came from. If they catch you, they will throw you into the horse-pond.’ Poor Hans was sadly frightened. ‘Good man,’ cried he, ‘take my pig and give me the goose.’ ‘I ought to have something into the bargain,’ said the countryman, ‘but I will not be hard upon you.’ So Hans went on his way free from care, thinking how happy his mother would be with a fine fat goose.
      
      As he came to the next village, he saw a scissor-grinder. ‘You must be well off, master grinder!’ said Hans. ‘Yes,’ said the other, ‘mine is a golden trade. Now if you could find money in your pocket whenever you put your hand in it, your fortune would be made. You only want a grindstone. I would not ask more than the value of your goose for this one.’ ‘How can you ask?’ said Hans; ‘I should be the happiest man in the world. There’s the goose.’ The grinder gave him a common rough stone that lay by his side.
      
      Hans took the stone and went his way with a light heart. But at last the stone tired him sadly, and he dragged himself to a river to take a drink. He laid the stone carefully on the bank, but as he stooped to drink, he forgot it, pushed it a little, and down it rolled, plump into the stream. Hans watched it sinking, then sprang up and danced for joy, and thanked Heaven with tears in his eyes for taking away his only plague, the heavy stone.
      
      ‘How happy am I!’ cried he; ‘nobody was ever so lucky as I.’ Then up he got with a light heart, free from all his troubles, and walked on till he reached his mother’s house, and told her how very easy the road to good luck was.` },
      { chapter:  3, title: 'Jorinda and Jorindel',          content: `

      There was once an old castle that stood in the middle of a deep gloomy wood, and in the castle lived an old fairy. This fairy could take any shape she pleased. All the day long she flew about in the form of an owl, or crept about the country like a cat; but at night she always became an old woman again. 
      
      When any young man came within a hundred paces of her castle, he became quite fixed, and could not move a step till she came and set him free. But when any pretty maiden came within that space she was changed into a bird, and the fairy put her into a cage, and hung her up in a chamber in the castle. There were seven hundred of these cages hanging in the castle, and all with beautiful birds in them.
      
      Now there was once a maiden whose name was Jorinda. She was prettier than all the pretty girls that ever were seen before, and a shepherd lad, whose name was Jorindel, was very fond of her, and they were soon to be married. One day they went to walk in the wood, and without knowing it, they sat down close under the old walls of the castle.
      
      Suddenly, Jorinda was changed into a nightingale, and an owl with fiery eyes flew three times round them, screaming, "Tu whu! Tu whu!" Jorindel could not move; he stood fixed as a stone. The old fairy came forth, seized the nightingale, and went away with it. At last the fairy came back, sang a spell, and Jorindel found himself free. But she laughed at him and said he should never see Jorinda again.
      
      Jorindel sorrowed for a long time. He went to a strange village and kept sheep. One night he dreamt that he found a beautiful purple flower with a costly pearl in the middle, and that everything he touched with it was disenchanted.
      
      In the morning he began to search, and on the ninth day he found the beautiful purple flower with a large dewdrop as big as a pearl. He travelled day and night till he came to the castle. This time, he did not become fixed. He touched the door with the flower, and it sprang open. 
      
      He entered the chamber where the fairy sat with the seven hundred birds. When she saw him she was angry, but she could not come near him because of the flower. Jorindel looked at the many nightingales, wondering which was his Jorinda. Then he saw the fairy trying to sneak away with one cage. He ran to her, touched the cage with the flower, and Jorinda stood before him, as beautiful as ever.
      
      Then he touched all the other birds with the flower, so that they all took their old forms again. He took Jorinda home, where they were married and lived happily together for many years.` },
      { chapter:  4, title: 'The Travelling Musicians',      content: `

      An honest farmer had once an ass that had been a faithful servant to him for many years, but was now growing old and unfit for work. Seeing that his master was thinking of putting an end to him, the ass took himself slyly off and began his journey towards the great city. ‘For there,’ thought he, ‘I may turn musician.’
      
      After he had travelled a little way, he spied a dog panting by the roadside. ‘My master was going to knock me on the head because I am old and no longer useful in hunting,’ said the dog. ‘Come with me to the great city,’ said the ass, ‘and try what you can do as a musician.’ The dog agreed, and they jogged on together.
      
      Soon they saw a cat with a rueful face. ‘Because I am old and prefer lying by the fire to chasing mice, my mistress was going to drown me,’ she sighed. ‘Go with us!’ said the ass. ‘You are a good night singer and may make your fortune.’ The cat joined them. Afterwards, they met a cock screaming on a gate. ‘They threaten to make broth of me for Sunday’s guests!’ he cried. ‘Come with us, Master Chanticleer,’ said the ass. ‘Anything is better than staying here to have your head cut off.’
      
      They could not reach the city that day, so they stopped in a wood. From the top of a tree, the cock saw a light in the distance. They walked towards it and found a house where a gang of robbers lived. The ass, being the tallest, peeped through the window and saw a table spread with good things. They consulted on how to drive the robbers out and hit upon a plan.
      
      The ass stood on his hind legs at the window, the dog jumped on his back, the cat scrambled onto the dog, and the cock sat on the cat’s head. At a signal, they began their "music"—braying, barking, mewing, and screaming—and burst through the window! The terrified robbers, thinking a hobgoblin had attacked, fled into the woods.
      
      The four friends feasted and went to sleep. But at midnight, one robber returned to spy. In the dark kitchen, he mistook the cat’s glowing eyes for live coals and tried to light a match. The cat scratched his face; he ran to the door where the dog bit his leg; in the yard the ass kicked him; and the cock crowed with all his might. 
      
      The robber ran back to his comrades and cried, ‘A horrid witch spat at me and scratched me! Behind the door stood a man with a knife who stabbed my leg! In the yard is a black monster who struck me with a club! And on the roof sits the devil, crying, “Throw the rascal up here!”’ 
      
      The robbers never dared return, and the musicians were so pleased with their quarters that they stayed there forever.` },
      { chapter:  5, title: 'Old Sultan',                    content: `

      A shepherd had a faithful dog, called Sultan, who was grown very old and had lost all his teeth. One day, the shepherd said to his wife, ‘I will shoot old Sultan tomorrow morning, for he is of no use now.’ But his wife pleaded, ‘Pray let the poor faithful creature live; he has served us well for many years.’ ‘But what can we do with him?’ said the shepherd. ‘He has not a tooth in his head, and the thieves don’t care for him at all. Tomorrow shall be his last day.’
      
      Poor Sultan, lying close by, heard everything and was very frightened. In the evening, he went to his friend the wolf in the wood and told him his sorrows. ‘Make yourself easy,’ said the wolf, ‘I will give you some good advice.’ The wolf proposed a plan: when the master and mistress lay their child behind the hedge while working, the wolf would "kidnap" it, and Sultan would "rescue" it. 
      
      The plan worked perfectly. Sultan "saved" the child from the wolf, and the grateful shepherd said, ‘Old Sultan shall live and be well taken care of.’ From that day on, Sultan had a comfortable cushion and plenty to eat.
      
      Soon after, the wolf came to Sultan and suggested that, in return for the favour, Sultan should look the other way when the wolf stole a sheep. ‘No,’ said Sultan, ‘I will be true to my master.’ The wolf thought he was joking and tried to steal a sheep anyway, but Sultan had warned his master. The wolf received a sound beating with a stout cudgel.
      
      The wolf was furious and sent a wild boar to challenge Sultan to a fight in the wood. Sultan’s only "second" was the shepherd’s old three-legged cat. As they limped along, the cat’s tail stuck straight up in the air. 
      
      When the wolf and the boar saw them coming, they mistook the cat’s upright tail for a sword, and her limping for the act of picking up stones. Terrified, the boar hid behind a bush and the wolf jumped into a tree. 
      
      The cat, seeing the boar’s ears twitching in the bush and thinking it was a mouse, sprang upon them and bit them hard. The boar ran away, yelling, ‘Look up in the tree! There sits the one who is to blame!’ Sultan and the cat looked up and saw the cowardly wolf. He was so ashamed of himself that he promised to be good friends with old Sultan once again.` },
      { chapter:  6, title: 'The Straw, the Coal, and the Bean', content: `

      In a village dwelt a poor old woman who had gathered a dish of beans to cook. She made a fire on her hearth and lighted it with a handful of straw to make it burn quicker. As she emptied the beans into the pan, one dropped unnoticed and lay on the ground beside a straw. Soon after, a burning coal leapt from the fire and joined them.
      
      The straw asked, ‘Dear friends, from whence do you come?’ The coal replied, ‘I fortunately sprang out of the fire; otherwise, I should have been burnt to ashes.’ The bean said, ‘I too escaped with a whole skin, but if I had been in that pan, I should have been made into broth.’ ‘And I,’ said the straw, ‘luckily slipped through the old woman's fingers before she destroyed all my brethren in fire and smoke.’
      
      ‘But what are we to do now?’ asked the coal. 
      
      ‘I think,’ answered the bean, ‘that we should keep together like good companions and travel to a foreign country.’ The others agreed, and they set out together. 
      
      Soon they came to a little brook. As there was no bridge, they did not know how to cross. The straw had a good idea: ‘I will lay myself straight across, and then you can walk over me as on a bridge.’ The straw stretched from one bank to the other, and the impetuous coal tripped boldly onto the newly-built bridge. 
      
      But when the coal reached the middle and heard the water rushing beneath, she grew afraid and stood still. At that moment, the straw began to burn from the heat of the coal, broke in two, and fell into the stream. The coal slipped after her, hissed in the water, and breathed her last. 
      
      The bean, who had prudently stayed behind on the shore, could not help but laugh at the scene. She laughed so heartily that she burst! It would have been the end of her, too, if a travelling tailor had not sat down to rest by the brook. Being a compassionate man, he pulled out his needle and thread and sewed her together. The bean thanked him prettily, but because the tailor used black thread, all beans since then have a black seam.` },
      { chapter:  7, title: 'Briar Rose',                    content: `

      A king and queen, who had no children, were told by a little fish they saved that they would soon have a daughter. When the princess was born, the king held a great feast. He invited twelve fairies, but since he had only twelve golden dishes, he left the thirteenth fairy out.
      
      The twelve fairies gave the child gifts of beauty, riches, and virtue. But just as the eleventh had finished, the angry thirteenth fairy entered and cursed the child: ‘In her fifteenth year, the king’s daughter shall be wounded by a spindle and fall down dead.’ The twelfth fairy, who had not yet given her gift, softened the curse: ‘She shall not die, but fall asleep for a hundred years.’
      
      On her fifteenth birthday, while the king and queen were away, the princess explored the palace and found an old tower. There sat an old lady spinning. As the princess touched the spindle, the prophecy was fulfilled; she fell into a deep sleep. 
      
      The king, the queen, and the entire court fell asleep too. The horses in the stables, the dogs in the yard, the pigeons on the roof, and even the flies on the wall stood still. A thick hedge of thorns grew around the palace, hiding it from view. Many princes tried to break through the thorns to find "Briar Rose," but they all got stuck and died.
      
      After a hundred years, a new prince arrived. On that very day, the thorns turned into beautiful flowers and let him pass easily. He found the palace silent and still. When he reached the tower, he saw Briar Rose and was so struck by her beauty that he kissed her. 
      
      At that moment, she awoke and smiled. The king, the queen, and the court woke up too. The horses shook themselves, the dogs barked, and the kitchen fire blazed up again. The cook finally finished giving the boy a box on the ear, and everything returned to life. The prince and Briar Rose were married and lived happily ever after.` },
      { chapter:  8, title: 'The Dog and the Sparrow',       content: `

      A shepherd’s dog, starving due to his master’s neglect, ran away in sorrow. On the road, he met a sparrow who promised to find him food. In town, the sparrow pecked down steaks from a butcher’s shop and rolls from a baker’s until the dog was full. 
      
      Afterward, as they walked along the high road, the tired dog fell asleep in the middle of the path. A carter with a wagon drawn by three horses came along. Though the sparrow warned him to stop, the carter drove over the dog, crushing him to death. 
      
      "Thou hast killed my friend!" cried the sparrow. "This deed shall cost thee all thou art worth." The carter scoffed, but the sparrow began her revenge. She pecked the bung out of his wine casks, spilling all the wine. When the carter tried to kill her with a hatchet, he missed and killed his own horses one by one. 
      
      "Not wretch enough yet!" the sparrow chirped. When the carter reached home, he found thousands of birds, led by the sparrow, eating all his corn. In a blind rage, the carter tried to strike the sparrow inside his house, but instead, he and his wife smashed all their furniture and walls. 
      
      Finally, the carter caught the bird and decided to eat her alive. As the sparrow fluttered in his mouth, crying, "Carter! It shall cost thee thy life!" the carter ordered his wife to strike the bird with a hatchet. The wife swung, but missed the bird and hit her husband on the head, killing him instantly. The sparrow then flew quietly back to her nest.` },
      { chapter:  9, title: 'The Twelve Dancing Princesses', content: `

      A king had twelve beautiful daughters who slept in twelve beds in one room. Every morning, their shoes were found worn through as if they had been danced in all night, but no one knew how. The king promised his kingdom and a daughter’s hand to anyone who could solve the mystery in three nights; those who failed were put to death.
      
      Many princes failed, falling asleep on watch. Then an old wounded soldier decided to try. An old woman gave him a magic cloak of invisibility and warned him not to drink the wine the princesses would offer. 
      
      The soldier followed her advice, pretended to sleep, and put on his invisible cloak. He followed the princesses as they went through a trap-door under a bed, down a secret staircase, and through three magnificent groves of trees—one with silver leaves, one with gold, and one with diamonds. He broke a branch from each as proof.
      
      They reached a lake where twelve handsome princes waited in boats. The soldier rode with the youngest princess, making the boat feel strangely heavy. At an underground castle, they danced all night until their shoes were worn out.
      
      The soldier followed them for three nights, even taking a golden cup as further proof. When brought before the king, he revealed the secret and showed the branches and the cup. The princesses confessed, and the soldier chose the eldest princess to be his wife, becoming the heir to the kingdom.` },
      { chapter: 10, title: 'The Fisherman and His Wife',    content: `

      A fisherman once lived with his wife, Ilsabill, in a miserable pigsty by the sea. One day, he caught a large fish that claimed to be an enchanted prince. Taking pity on it, the man let it go. When he told his wife, she scolded him: ‘Did you not ask for anything? Go back and ask for a snug cottage!’
      
      The fisherman went to the sea, which was now green and yellow, and called the fish:
      "O man of the sea! Hearken to me! My wife Ilsabill will have her own will!"
      The fish granted the wish, and the pigsty became a lovely cottage.
      
      But Ilsabill was not satisfied for long. She soon demanded a stone castle. The sea turned dark blue and gloomy, but the fish granted it. Then she wanted to be King, then Emperor, and even Pope. Each time the fisherman went to the shore, the sea became more violent—turning grey, then thick black, then boiling with storms. 
      
      Finally, as Pope, Ilsabill watched the sun rise and became furious that she could not control the sun and moon. ‘I must be Lord of the Sun and Moon!’ she cried. 
      
      The fisherman went to the shore amidst a terrifying storm where rocks shook and the sky turned pitch black. He made his plea one last time. The fish replied: 
      ‘Go home, then, to your pigsty again.’
      
      And there they live to this very day.` },
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
