import { LessonSupplement } from './types';

export const CHAPTER_03_SUPPLEMENT: LessonSupplement = {
  exercises: [
    {
      id: 'ch03_de_het',
      title: 'Opdracht 5: De of het?',
      instruction: 'Kies het juiste lidwoord. Let op: de meeste woorden hebben "de".',
      items: [
        { id: 1, prompt: '_____ rekening komt eraan.', options: ['De', 'Het'], answer: 'De', explanation: '"De rekening" is het juiste lidwoord.' },
        { id: 2, prompt: '_____ glas staat op tafel.', options: ['De', 'Het'], answer: 'Het', explanation: '"Het glas" heeft het lidwoord "het".' },
        { id: 3, prompt: '_____ ober brengt de koffie.', options: ['De', 'Het'], answer: 'De', explanation: '"De ober" heeft "de".' },
        { id: 4, prompt: '_____ bier is koud.', options: ['De', 'Het'], answer: 'Het', explanation: '"Het bier" heeft "het".' },
        { id: 5, prompt: '_____ kopje staat op het dienblad.', options: ['De', 'Het'], answer: 'Het', explanation: 'Woorden met -je zijn meestal "het", zoals "het kopje".' },
      ],
    },
    {
      id: 'ch03_rangtelwoorden',
      title: 'Opdracht 6: Rangtelwoorden',
      instruction: 'Kies het juiste rangtelwoord.',
      items: [
        { id: 1, prompt: 'De 3e (derde) — welke vorm is juist?', options: ['derde', 'drie', 'derden', 'drieden'], answer: 'derde', explanation: 'Het rangtelwoord van 3 is "derde".' },
        { id: 2, prompt: 'De 10e — welke vorm is juist?', options: ['tiende', 'tien', 'tiene', 'tienende'], answer: 'tiende', explanation: 'Het rangtelwoord van 10 is "tiende".' },
        { id: 3, prompt: 'De 1e — welke vorm is juist?', options: ['eerste', 'een', 'enste', 'eenste'], answer: 'eerste', explanation: 'De eerste is "eerste". Let op: het is een uitzondering.' },
        { id: 4, prompt: 'De 21e — welke vorm is juist?', options: ['eenentwintigste', 'eenentwintigde', 'eenentwintigen', 'een-en-twintig'], answer: 'eenentwintigste', explanation: 'Na 20 krijgt het rangtelwoord de uitgang "-ste".' },
      ],
    },
    {
      id: 'ch03_inversie',
      title: 'Opdracht 7: Hoofdzin met inversie',
      instruction: 'Zet het werkwoord op plaats 2 (V2-regel). Kies de juiste zin.',
      items: [
        { id: 1, prompt: 'Morgen _____ ik naar het café.', options: ['ga', 'ik ga', 'gaat', 'gaan'], answer: 'ga', explanation: 'Na "morgen" staat het werkwoord op plaats 2: "Morgen ga ik naar het café."' },
        { id: 2, prompt: 'Vandaag _____ wij een koffie.', options: ['drinken', 'drinken wij', 'drinkt', 'drinken we'], answer: 'drinken', explanation: 'Voor "wij" met "vandaag" als eerste woord hoort de vorm "drinken": "Vandaag drinken wij een koffie."' },
        { id: 3, prompt: 'Straks _____ hij de rekening.', options: ['betaalt', 'betaal', 'betalen', 'hij betaalt'], answer: 'betaalt', explanation: '"Straks betaalt hij de rekening." Het werkwoord staat op plaats 2.' },
      ],
    },
  ],
  reflection: {
    practice: 'Ga naar een café of restaurant en bestel iets in het Nederlands. Zeg bijvoorbeeld: "Mag ik een kopje koffie, alstublieft?"',
    reflectionQuestions: [
      'Kun je iets bestellen in een café?',
      'Kun je vragen om de rekening en afrekenen?',
      'Weet je wanneer je "de" of "het" gebruikt?',
      'Kun je rangtelwoorden zoals "derde" en "tiende" gebruiken?',
      'Kun je een hoofdzin maken met inversie na een bijwoord?',
    ],
  },
};
