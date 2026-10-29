import { LessonSupplement, word } from './types';

const vocabulary = [
  word('de vaatwasser', 'dishwasher', 'huishouden', 'noun', 'de'),
  word('de wasmachine', 'washing machine', 'huishouden', 'noun', 'de'),
  word('de stofzuiger', 'vacuum cleaner', 'huishouden', 'noun', 'de'),
  word('de dweil', 'mop', 'huishouden', 'noun', 'de'),
  word('de bezem', 'broom', 'huishouden', 'noun', 'de'),
  word('het strijkijzer', 'iron (for clothes)', 'huishouden', 'noun', 'het'),
  word('de gootsteen', 'kitchen sink', 'huishouden', 'noun', 'de'),
  word('de voorraadkast', 'pantry / storage cupboard', 'huishouden', 'noun', 'de'),
  word('het terras', 'terrace', 'huis', 'noun', 'het'),
  word('ontspannen', 'to relax', 'algemeen', 'verb'),
  word('het huishouden', 'housework', 'huishouden', 'noun', 'het'),
  word('de boodschappen', 'groceries / shopping', 'huishouden', 'noun', 'de'),
  word('opruimen', 'to tidy up', 'huishouden', 'verb'),
  word('de melk', 'milk', 'eten', 'noun', 'de'),
  word('de pan', 'pan', 'huishouden', 'noun', 'de'),
];

export const CHAPTER_17_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Sam', dutch: 'Goed plan. Zal ik de was ook even in de machine doen?', english: 'Good plan. Shall I also put the laundry in the machine for a moment?' },
    { speaker: 'Tina', dutch: 'Doe maar. De wasmachine staat aan. Heb jij de vaatwasser al uitgeruimd?', english: 'Go ahead. The washing machine is on. Have you already unloaded the dishwasher?' },
    { speaker: 'Sam', dutch: 'Ja, dat is al gebeurd. Alleen de pannen staan nog in de gootsteen.', english: 'Yes, that has already happened. Only the pans are still in the sink.' },
    { speaker: 'Tina', dutch: 'Die doe ik wel even. Ik zet de muziek aan, dan gaat het sneller.', english: 'I will do those. I will put the music on, then it goes faster.' },
    { speaker: 'Sam', dutch: 'Prima. Zullen we daarna boodschappen doen?', english: 'Fine. Shall we do the shopping afterwards?' },
    { speaker: 'Tina', dutch: 'Goed idee. We zijn bijna door de melk heen.', english: 'Good idea. We are almost out of milk.' },
    { speaker: 'Sam', dutch: 'Dan neem ik de fiets naar de supermarkt.', english: 'Then I will take the bike to the supermarket.' },
    { speaker: 'Tina', dutch: 'Mooi, dat is afgesproken.', english: 'Nice, that is agreed.' },
  ],
  exercises: [
    {
      id: 'ch17_huishouden',
      title: 'Opdracht 6: Huishoudelijke apparaten en taken',
      instruction: 'Kies het juiste woord bij de taak.',
      items: [
        { id: 1, prompt: 'Met een _____ zuig je het stof van de vloer op.', options: ['stofzuiger', 'dweil', 'bezem', 'strijkijzer'], answer: 'stofzuiger', explanation: 'Een stofzuiger zuigt stof op.' },
        { id: 2, prompt: 'Je _____ de was in de machine.', options: ['doet', 'koopt', 'zet', 'draait'], answer: 'doet', explanation: '"De was doen" betekent wassen in de wasmachine.' },
        { id: 3, prompt: 'Je _____ de kleren met een strijkijzer.', options: ['strijkt', 'wast', 'droogt', 'vouwt'], answer: 'strijkt', explanation: 'Met een strijkijzer strijk je kleren.' },
        { id: 4, prompt: 'Om de vloer schoon te maken, gebruik je een _____.', options: ['dweil', 'koelkast', 'bank', 'kraan'], answer: 'dweil', explanation: 'Met een dweil maak je de vloer nat schoon.' },
      ],
    },
  ],
  pronunciation: {
    title: '17.9 Uitspraak: r en l',
    soundFocus: 'Het verschil tussen de "r" (rood, rat) en de "l" (lood, lat)',
    ruleExplanation: 'De Nederlandse "r" maak je achter in de keel of met de tongpunt. De "l" maak je met de tongpunt tegen het gehemelte. Let op: bij "rood" en "lood" verandert één klank de betekenis.',
    wordList: ['rood', 'lood', 'rat', 'lat', 'rijst', 'lijst', 'rol', 'lol', 'rijk', 'lijk', 'raar', 'laar'],
    minimalPairs: [
      { word1: 'rood', word2: 'lood', contrast: 'r vs l' },
      { word1: 'rijst', word2: 'lijst', contrast: 'r vs l' },
      { word1: 'rat', word2: 'lat', contrast: 'r vs l' },
    ],
  },
  reflection: {
    practice: 'Maak een lijst van de klussen die deze week gedaan moeten worden. Verdeel ze met een huisgenoot en bespreek wie wat doet.',
    reflectionQuestions: [
      'Kun je zeggen wat je nu aan het doen bent met "aan het"?',
      'Kun je het woordje "er" op vier manieren gebruiken?',
      'Kun je de huishoudelijke apparaten en taken noemen?',
      'Kun je met een huisgenoot afspraken maken over het huishouden?',
    ],
  },
};
