import { LessonSupplement } from './types';

export const CHAPTER_08_SUPPLEMENT: LessonSupplement = {
  dialogue: [
    { speaker: 'Makelaar', dutch: 'Dat begrijp ik. Mag ik vragen wanneer u wilt verhuizen?', english: 'I understand. May I ask when you want to move?', notes: 'Verhuizen = to move house.' },
    { speaker: 'Patricia', dutch: 'Over twee maanden. Mijn huidige huurcontract stopt in juni.', english: 'In two months. My current rental contract ends in June.', keyWords: ['huurcontract'] },
    { speaker: 'Makelaar', dutch: 'Dan hebben we misschien nog een andere woning. Er is een appartement op de tweede verdieping met een balkon op het zuiden.', english: 'Then we may have another home. There is an apartment on the second floor with a south-facing balcony.' },
    { speaker: 'Patricia', dutch: 'Dat klinkt goed. Is er ook een berging?', english: 'That sounds good. Is there also a storage room?' },
    { speaker: 'Makelaar', dutch: 'Ja, er is een grote berging in de kelder en een fietsenstalling bij de ingang.', english: 'Yes, there is a large storage room in the basement and a bicycle shed at the entrance.' },
    { speaker: 'Patricia', dutch: 'Prima. Mag ik het appartement eerst bekijken?', english: 'Fine. May I first look at the apartment?' },
    { speaker: 'Makelaar', dutch: 'Natuurlijk. Morgen om twee uur past mij goed. Zullen we afspreken bij de voordeur?', english: 'Of course. Tomorrow at two o\'clock suits me well. Shall we meet at the front door?' },
    { speaker: 'Patricia', dutch: 'Ja, dat doen we. Tot morgen!', english: 'Yes, let us do that. See you tomorrow!' },
  ],
  exercises: [
    {
      id: 'ch08_woonruimte',
      title: 'Opdracht 1: Soorten woonruimte',
      instruction: 'Kies de juiste woonruimte of ruimte in het huis.',
      items: [
        { id: 1, prompt: 'Een woning op de begane grond heet een _____.', options: ['benedenwoning', 'bovenwoning', 'zolder', 'kelder'], answer: 'benedenwoning', explanation: 'Een benedenwoning ligt op de begane grond.' },
        { id: 2, prompt: 'Je slaapt in de _____.', options: ['slaapkamer', 'keuken', 'badkamer', 'berging'], answer: 'slaapkamer', explanation: 'De slaapkamer is de kamer om in te slapen.' },
        { id: 3, prompt: 'Je kookt in de _____.', options: ['keuken', 'woonkamer', 'gang', 'tuin'], answer: 'keuken', explanation: 'In de keuken kook je.' },
        { id: 4, prompt: 'Een tafel en stoelen staan meestal in de _____.', options: ['eetkamer', 'zolder', 'garage', 'kelder'], answer: 'eetkamer', explanation: 'In de eetkamer eet je samen.' },
      ],
    },
  ],
  reflection: {
    practice: 'Zoek op een woningsite een huis of appartement. Beschrijf in het Nederlands drie ruimtes en wat erin staat.',
    reflectionQuestions: [
      'Kun je de verschillende soorten woonruimte noemen?',
      'Kun je meubels en ruimtes in een huis benoemen?',
      'Kun je met "niet" en "geen" een ontkenning maken?',
      'Kun je vertellen waar iets staat met voorzetsels zoals "op", "onder" en "naast"?',
    ],
  },
  pronunciation: {
    title: '8.10 Uitspraak: ij, ei, eu en ie',
    soundFocus: 'Tweeklanken "ij / ei" (wijn, trein) versus "eu" (deur, neus) versus "ie" (lief, dier)',
    ruleExplanation: '"ij" en "ei" klinken hetzelfde, als een tweeklank. "eu" klinkt met de lippen gerond, zoals in "deur". "ie" klinkt als een lange i, zoals in "lief".',
    wordList: ['wijn', 'trein', 'mijn', 'zijn', 'zien', 'deur', 'neus', 'keuze', 'lief', 'dier', 'bier', 'kies'],
    minimalPairs: [
      { word1: 'zijn', word2: 'zien', contrast: 'ij vs ie' },
      { word1: 'lijn', word2: 'lief', contrast: 'ij vs ie' },
      { word1: 'deur', word2: 'dier', contrast: 'eu vs ie' },
    ],
  },
};
