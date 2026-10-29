import { LessonSupplement } from './types';

export const CHAPTER_11_SUPPLEMENT: LessonSupplement = {
  exercises: [
    {
      id: 'ch11_wederkerend',
      title: 'Opdracht 6-8: Wederkerende werkwoorden',
      instruction: 'Kies het juiste wederkerende voornaamwoord.',
      items: [
        { id: 1, prompt: 'Zij voelt _____ niet lekker.', options: ['zich', 'me', 'je', 'ons'], answer: 'zich', explanation: 'Bij "zij" en "hij" hoort "zich": "Zij voelt zich niet lekker."' },
        { id: 2, prompt: 'Jullie interesseren _____ voor muziek.', options: ['je', 'jullie', 'zich', 'jou'], answer: 'je', explanation: 'Bij "jullie" hoort "je": "Jullie interesseren je voor muziek."' },
        { id: 3, prompt: 'Wij vervelen _____ op het feest.', options: ['ons', 'we', 'onze', 'zich'], answer: 'ons', explanation: 'Bij "wij" hoort "ons": "Wij vervelen ons."' },
        { id: 4, prompt: 'Ik herinner _____ die dag nog goed.', options: ['me', 'mij', 'zich', 'je'], answer: 'me', explanation: 'Bij "ik" hoort "me": "Ik herinner me die dag."' },
      ],
    },
  ],
  pronunciation: {
    title: '11.9 Uitspraak: de sjwa',
    soundFocus: 'De zwakke klank sjwa [ə] in onbeklemtoonde lettergrepen',
    ruleExplanation: 'In woorden zoals "bedoelen", "gebeuren" en "betalen" klinkt de tweede lettergreep zwak, als een korte "uh". Die klank heet de sjwa. Spreek de klinker niet te duidelijk uit.',
    wordList: ['gebeuren', 'bedoelen', 'verbeteren', 'vergeten', 'bekijken', 'betalen', 'zeker', 'bijna', 'opa', 'oma', 'ketel', 'fiets'],
  },
  reflection: {
    practice: 'Vertel iemand over je hobby, je werk of je studie. Gebruik minstens twee wederkerende werkwoorden, zoals "ik interesseer me voor" of "ik voel me goed".',
    reflectionQuestions: [
      'Kun je vragen stellen over werk, studie en hobby\'s?',
      'Kun je reageren met "Wat leuk!" of "Wat jammer!"?',
      'Weet je welk voornaamwoord bij "zich", "me" en "ons" hoort?',
      'Kun je een verjaardagskaart schrijven?',
    ],
  },
};
