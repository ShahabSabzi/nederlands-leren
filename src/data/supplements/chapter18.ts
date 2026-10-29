import { LessonSupplement, word } from './types';

const vocabulary = [
  word('de politie', 'police', 'politie', 'noun', 'de'),
  word('de agent', 'police officer', 'politie', 'noun', 'de'),
  word('de aangifte', 'report (of a crime)', 'politie', 'noun', 'de'),
  word('het proces-verbaal', 'official police report', 'politie', 'noun', 'het'),
  word('de diefstal', 'theft', 'politie', 'noun', 'de'),
  word('de verzekering', 'insurance', 'politie', 'noun', 'de'),
  word('verdacht', 'suspicious', 'politie', 'adjective'),
  word('het signalement', 'description (of a suspect)', 'politie', 'noun', 'het'),
  word('het alarmnummer', 'emergency number', 'politie', 'noun', 'het'),
  word('de schade', 'damage', 'politie', 'noun', 'de'),
  word('verliezen', 'to lose', 'politie', 'verb'),
  word('stelen', 'to steal', 'politie', 'verb'),
  word('de getuige', 'witness', 'politie', 'noun', 'de'),
  word('het bureau', 'police station / office', 'politie', 'noun', 'het'),
  word('dringend', 'urgent', 'politie', 'adjective'),
];

export const CHAPTER_18_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Sam', dutch: 'Dank u wel. Wat moet ik nu met de verzekering doen?', english: 'Thank you. What do I need to do now with the insurance?' },
    { speaker: 'Politieagent', dutch: 'U stuurt het proces-verbaal naar uw verzekeringsmaatschappij. Die hebben ze nodig voor de schade.', english: 'You send the police report to your insurance company. They need it for the damage.' },
    { speaker: 'Sam', dutch: 'Moet ik ook nog aangifte doen op het bureau?', english: 'Do I also still need to file a report at the station?' },
    { speaker: 'Politieagent', dutch: 'Dat is niet nodig. Het proces-verbaal is genoeg. Hebt u nog vragen?', english: 'That is not necessary. The police report is enough. Do you have any more questions?' },
    { speaker: 'Sam', dutch: 'Nee, dat is alles. Heel fijn dat u zo snel kwam.', english: 'No, that is all. Very nice that you came so quickly.' },
    { speaker: 'Politieagent', dutch: 'Graag gedaan. Bij spoed belt u 112. Als het niet dringend is, belt u 0900-8844.', english: 'You are welcome. In an emergency, call 112. If it is not urgent, call 0900-8844.' },
    { speaker: 'Sam', dutch: 'Ik onthoud het. Fijne avond nog.', english: 'I will remember that. Have a nice evening.' },
    { speaker: 'Politieagent', dutch: 'Dank u, u ook.', english: 'Thank you, you too.' },
  ],
  exercises: [
    {
      id: 'ch18_gebeurtenis',
      title: 'Opdracht 2: Gebeurtenissen beschrijven',
      instruction: 'Vul het hulpwerkwoord in de verleden tijd in.',
      items: [
        { id: 1, prompt: 'Gisteren _____ ik mijn portemonnee verloren.', options: ['heb', 'ben', 'ga', 'hebt'], answer: 'heb', explanation: '"Verliezen" gebruikt "hebben": "Ik heb verloren."' },
        { id: 2, prompt: 'Zij _____ de fiets gestolen op het station.', options: ['heeft', 'is', 'hebben', 'zijn'], answer: 'heeft', explanation: '"Stelen" gebruikt "hebben": "Zij heeft gestolen."' },
      ],
    },
    {
      id: 'ch18_aangifte',
      title: 'Opdracht 7-9: Aangifte doen en advies vragen',
      instruction: 'Kies de juiste zin.',
      items: [
        { id: 1, prompt: 'Ik wil graag _____ doen van een diefstal.', options: ['aangifte', 'een kaart', 'een afspraak', 'een klacht van de buren'], answer: 'aangifte', explanation: 'Bij de politie doe je aangifte van een misdrijf zoals diefstal.' },
        { id: 2, prompt: 'Wat _____ ik doen als ik mijn tas kwijt ben?', options: ['moet', 'hoef', 'ben', 'heb'], answer: 'moet', explanation: 'Met "moet" vraag je naar wat je moet doen.' },
        { id: 3, prompt: 'Bij spoed _____ je 112 bellen.', options: ['moet', 'hoeft', 'ben', 'heb'], answer: 'moet', explanation: '"Moet" geeft een verplichting aan. Bij een noodgeval moet je 112 bellen.' },
      ],
    },
  ],
  pronunciation: {
    title: '18.9 Uitspraak: g, sch en -isch',
    soundFocus: 'De "g" in "goed", de "sch" in "school" en de "-isch" in "praktisch"',
    ruleExplanation: 'De "g" klinkt als een zachte schraapklank achter in de keel. De "sch" klinkt als een lange "s" met de lippen iets naar voren. Aan het eind van een woord klinkt "-isch" als "-is".',
    wordList: ['school', 'schip', 'scheef', 'goed', 'gaan', 'groot', 'fantastisch', 'praktisch', 'economisch', 'technisch', 'politiek', 'ziek'],
  },
  reflection: {
    practice: 'Bedenk een situatie waarin je de politie of hulpdiensten zou bellen. Oefen met een vriend welke zinnen je dan zegt.',
    reflectionQuestions: [
      'Kun je gebeurtenissen in de verleden tijd beschrijven?',
      'Kun je aangifte doen van een diefstal of verlies?',
      'Weet je wanneer je 112 belt en wanneer je het niet-dringende nummer gebruikt?',
      'Kun je advies vragen en geven met "moet" en "hoeft niet"?',
    ],
  },
};
