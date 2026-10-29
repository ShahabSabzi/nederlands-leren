import { LessonSupplement, word } from './types';

const vocabulary = [
  word('de conducteur', 'conductor', 'trein', 'noun', 'de'),
  word('de vertraging', 'delay', 'trein', 'noun', 'de'),
  word('het vervoersbewijs', 'ticket', 'trein', 'noun', 'het'),
  word('overstappen', 'to change (trains)', 'trein', 'verb'),
  word('de bestemming', 'destination', 'trein', 'noun', 'de'),
  word('op tijd', 'on time', 'trein', 'phrase'),
  word('het raam', 'window', 'trein', 'noun', 'het'),
  word('het landschap', 'landscape', 'algemeen', 'noun', 'het'),
  word('de windmolen', 'windmill', 'landschap', 'noun', 'de'),
  word('de zitplaats', 'seat', 'trein', 'noun', 'de'),
  word('de bagage', 'luggage', 'trein', 'noun', 'de'),
  word('reizen', 'to travel', 'trein', 'verb'),
  word('het spijt me', 'I am sorry', 'algemeen', 'phrase'),
  word('geeft niet', 'never mind', 'algemeen', 'phrase'),
];

export const CHAPTER_15_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Conducteur', dutch: 'Dank u wel. Let op, bij Zwolle moet u overstappen op de intercity naar Enschede.', english: 'Thank you. Please note, at Zwolle you must change to the intercity to Enschede.' },
    { speaker: 'Amira', dutch: 'Dank u wel. Weet u ook of de trein op tijd is?', english: 'Thank you. Do you also know if the train is on time?' },
    { speaker: 'Conducteur', dutch: 'Vandaag hebben we een kleine vertraging van vijf minuten. Het spijt me.', english: 'Today we have a small delay of five minutes. I am sorry.' },
    { speaker: 'Amira', dutch: 'Geeft niet. We hebben genoeg tijd om over te stappen.', english: 'Never mind. We have enough time to change.' },
    { speaker: 'Tjeerd', dutch: 'Mooi. Zullen we straks koffie halen in de bistro?', english: 'Nice. Shall we get coffee at the bistro later?' },
    { speaker: 'Amira', dutch: 'Goed idee! Ik neem een cappuccino.', english: 'Good idea! I will have a cappuccino.' },
  ],
  exercises: [
    {
      id: 'ch15_dit_dat',
      title: 'Opdracht 4-5: Dit, dat, die en deze',
      instruction: 'Kies het juiste aanwijzend voornaamwoord.',
      items: [
        { id: 1, prompt: '_____ is mijn kaartje, hier is het.', options: ['Dit', 'Die', 'Deze', 'Dat'], answer: 'Dit', explanation: '"Dit" gebruik je voor een onzijdig woord dat dichtbij is. Het kaartje is "het kaartje".' },
        { id: 2, prompt: '_____ is de trein naar Enschede.', options: ['Dat', 'Die', 'Deze', 'Dit'], answer: 'Dat', explanation: '"Dat" gebruik je voor iets verder weg, zoals een trein op het perron.' },
        { id: 3, prompt: '_____ treinen rijden elk uur.', options: ['Die', 'Dat', 'Dit', 'Deze'], answer: 'Die', explanation: 'Bij meervoud gebruik je "die": "Die treinen rijden elk uur."' },
      ],
    },
    {
      id: 'ch15_beschrijven',
      title: 'Opdracht 1: Beschrijven wat je ziet',
      instruction: 'Kies de juiste vorm van het bijvoeglijk naamwoord.',
      items: [
        { id: 1, prompt: 'Op het perron staat een _____ man met een rode jas.', options: ['lange', 'lang', 'langen', 'langer'], answer: 'lange', explanation: 'Na "een" en een zelfstandig naamwoord met "de" krijgt het bijvoeglijk naamwoord een -e.' },
        { id: 2, prompt: 'Ik zie een _____ trein met veel ramen.', options: ['mooie', 'mooi', 'mooien', 'mooier'], answer: 'mooie', explanation: 'Na "een" krijgt "mooi" een -e: "een mooie trein".' },
        { id: 3, prompt: 'De stoel is _____ en comfortabel.', options: ['groot', 'grote', 'groots', 'grootst'], answer: 'groot', explanation: 'Na "is" krijgt het bijvoeglijk naamwoord geen -e.' },
      ],
    },
    {
      id: 'ch15_vakantie',
      title: 'Opdracht 11: Vakantieplannen maken',
      instruction: 'Vul het werkwoord in op plaats 2.',
      items: [
        { id: 1, prompt: 'Volgende zomer _____ we naar de bergen.', options: ['gaan', 'gaat', 'ga', 'gaan we'], answer: 'gaan', explanation: 'Na "volgende zomer" staat het werkwoord op plaats 2 met "we": "gaan".' },
        { id: 2, prompt: 'Misschien _____ je mee naar Frankrijk.', options: ['gaat', 'gaan', 'ga', 'gaan we'], answer: 'gaat', explanation: 'Bij "je" hoort "gaat".' },
      ],
    },
  ],
  pronunciation: {
    title: '15.7 Uitspraak: ng, ing en nk',
    soundFocus: 'De "ng" in "lang" en "ring", en de "nk" in "bank"',
    ruleExplanation: 'In "lang" en "ring" hoor je één klank: de achterkant van de tong tegen het zachte gehemelte. In "bank" hoor je die klank gevolgd door een korte "k". "ing" klinkt als "ing" in "koning".',
    wordList: ['lang', 'hang', 'bang', 'ring', 'koning', 'wandeling', 'bank', 'dank', 'zinken', 'drinken'],
    minimalPairs: [
      { word1: 'bang', word2: 'bank', contrast: 'ng vs nk' },
    ],
  },
  reflection: {
    practice: 'Koop een treinkaartje of check in met je ov-chipkaart. Vraag een medewerker waar je moet overstappen.',
    reflectionQuestions: [
      'Kun je iets aanwijzen met "dit", "dat", "die" en "deze"?',
      'Kun je beschrijven wat je ziet in de trein?',
      'Kun je vertellen over je vakantieplannen?',
      'Kun je uitleggen wanneer je "die" of "dat" als betrekkelijk voornaamwoord gebruikt?',
    ],
  },
};
