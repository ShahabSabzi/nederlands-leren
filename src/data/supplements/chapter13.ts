import { LessonSupplement, word } from './types';

const vocabulary = [
  word('de schuur', 'shed / barn', 'huis', 'noun', 'de'),
  word('verlegen', 'shy', 'karakter', 'adjective'),
  word('aaien', 'to pet / stroke', 'huisdieren', 'verb'),
  word('spinnen', 'to purr', 'huisdieren', 'verb'),
  word('het jong', 'young animal', 'huisdieren', 'noun', 'het'),
  word('de kruiden', 'herbs', 'eten', 'noun', 'de'),
  word('de salade', 'salad', 'eten', 'noun', 'de'),
  word('de tuin', 'garden', 'huis', 'noun', 'de'),
  word('het weer', 'weather', 'weer', 'noun', 'het'),
  word('koud', 'cold', 'weer', 'adjective'),
  word('nat', 'wet', 'weer', 'adjective'),
  word('gezellig', 'cosy / pleasant', 'algemeen', 'adjective'),
  word('de groeten', 'regards', 'visite', 'noun', 'de'),
  word('meenemen', 'to bring along / take along', 'visite', 'verb'),
  word('verkouden zijn', 'to have a cold', 'gezondheid', 'phrase'),
  word('de verwarming', 'heating', 'huis', 'noun', 'de'),
];

export const CHAPTER_13_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Paul', dutch: 'Goed plan! Ik zet het water op. Heb jij trek in iets erbij?', english: 'Good plan! I will put the water on. Do you fancy something with it?' },
    { speaker: 'Bas', dutch: 'Misschien een salade. Dat lijkt me lekker.', english: 'Maybe a salad. That sounds nice to me.' },
    { speaker: 'Paul', dutch: 'Dan maken we ook een fles wijn open. Wat drink jij?', english: 'Then we will also open a bottle of wine. What do you drink?' },
    { speaker: 'Bas', dutch: 'Ik neem wel een glas rode wijn, graag.', english: 'I will have a glass of red wine, please.' },
    { speaker: 'Paul', dutch: 'Prima. Janine is in de tuin. Zij haalt even de kruiden.', english: 'Fine. Janine is in the garden. She is fetching the herbs.' },
    { speaker: 'Bas', dutch: 'Mooi. Zal ik de tafel dekken?', english: 'Nice. Shall I set the table?' },
    { speaker: 'Paul', dutch: 'Ja, graag. De borden staan in de keuken.', english: 'Yes, please. The plates are in the kitchen.' },
    { speaker: 'Bas', dutch: 'Geen probleem. Ik pak de borden meteen.', english: 'No problem. I will get the plates right away.' },
  ],
  exercises: [
    {
      id: 'ch13_reageren',
      title: 'Opdracht 4-5: Reageren op een opmerking',
      instruction: 'Kies de juiste reactie.',
      items: [
        { id: 1, prompt: '"Wat een weer, hé?" — "Zeg dat _____!"', options: ['wel', 'niet', 'nu', 'maar'], answer: 'wel', explanation: '"Zeg dat wel!" betekent: dat ben ik met je eens.' },
        { id: 2, prompt: '"Ik ben al twee weken verkouden." — Welke reactie past?', options: ['Wat vervelend!', 'Wat lekker!', 'Wat druk!', 'Wat laat!'], answer: 'Wat vervelend!', explanation: 'Je toont medeleven met "Wat vervelend!".' },
        { id: 3, prompt: '"Ik heb een doos bonbons meegenomen." — Welke reactie past?', options: ['Wat lekker!', 'Wat koud!', 'Wat laat!', 'Wat druk!'], answer: 'Wat lekker!', explanation: '"Wat lekker!" is een vriendelijke reactie op een cadeau.' },
      ],
    },
    {
      id: 'ch13_belofte',
      title: 'Opdracht 8: Een belofte maken',
      instruction: 'Maak van de zin een belofte met "ik zal" of "we zullen".',
      items: [
        { id: 1, prompt: 'Ik haal koffie voor je.', options: ['Ik zal koffie voor je halen.', 'Ik heb koffie voor je gehaald.', 'Zal ik koffie voor je halen?', 'Koffie halen ik voor je.'], answer: 'Ik zal koffie voor je halen.', explanation: 'Een belofte maak je met "zal" en de infinitief aan het eind.' },
        { id: 2, prompt: 'We brengen de vakantiefoto\'s mee.', options: ['We zullen de vakantiefoto\'s meenemen.', 'Wij hebben de foto\'s meegenomen.', 'Zullen wij de foto\'s brengen?', 'Wij brengen de foto\'s niet mee.'], answer: 'We zullen de vakantiefoto\'s meenemen.', explanation: '"We zullen" maakt er een belofte van.' },
      ],
    },
  ],
  pronunciation: {
    title: '13.9 Uitspraak: vocalen',
    soundFocus: 'Korte en lange klinkers: "man" versus "maan", "pen" versus "peen", "bot" versus "boot"',
    ruleExplanation: 'Een korte klinker klinkt kort, een lange klinker klinkt langer. Het verschil zit in de lengte. Herhaal de paren hardop en let op de lengte van de klinker.',
    wordList: ['man', 'maan', 'pen', 'peen', 'bot', 'boot', 'bek', 'beek', 'zet', 'stel', 'staal'],
    minimalPairs: [
      { word1: 'man', word2: 'maan', contrast: 'korte a vs lange aa' },
      { word1: 'pen', word2: 'peen', contrast: 'korte e vs lange ee' },
      { word1: 'bot', word2: 'boot', contrast: 'korte o vs lange oo' },
    ],
  },
  reflection: {
    practice: 'Ga op bezoek bij iemand of nodig iemand uit. Neem iets mee en reageer op wat je hoort, zoals "Wat lekker!" of "Zeg dat wel!".',
    reflectionQuestions: [
      'Kun je het hulpwerkwoord "zullen" gebruiken bij voorstellen en beloftes?',
      'Kun je beleefd reageren als iemand bij je op bezoek komt?',
      'Kun je de seizoenen en tijdsaanduidingen noemen?',
      'Kun je praten over het weer?',
    ],
  },
};
