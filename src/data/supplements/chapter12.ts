import { LessonSupplement } from './types';
import { VocabWord } from '../chapterData';

const vocabulary: VocabWord[] = [
  { id: 'ch12_perron', dutch: 'het perron', english: 'platform', category: 'vervoer', partOfSpeech: 'noun', article: 'het', plural: 'perrons', exampleSentence: 'De trein vertrekt van perron drie.', exampleEnglish: 'The train leaves from platform three.' },
  { id: 'ch12_halte', dutch: 'de halte', english: 'stop (bus or tram)', category: 'vervoer', partOfSpeech: 'noun', article: 'de', plural: 'haltes', exampleSentence: 'Bij de volgende halte stap ik uit.', exampleEnglish: 'I get off at the next stop.' },
  { id: 'ch12_roltrap', dutch: 'de roltrap', english: 'escalator', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'roltrappen', exampleSentence: 'Neem de roltrap naar boven.', exampleEnglish: 'Take the escalator upstairs.' },
  { id: 'ch12_lift', dutch: 'de lift', english: 'lift / elevator', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'liften', exampleSentence: 'De lift is op de tweede verdieping.', exampleEnglish: 'The lift is on the second floor.' },
  { id: 'ch12_hoek', dutch: 'de hoek', english: 'corner', category: 'route', partOfSpeech: 'noun', article: 'de', plural: 'hoeken', exampleSentence: 'Gaat u de hoek om.', exampleEnglish: 'Go around the corner.' },
  { id: 'ch12_kruispunt', dutch: 'het kruispunt', english: 'crossroads / junction', category: 'route', partOfSpeech: 'noun', article: 'het', plural: 'kruispunten', exampleSentence: 'Op het kruispunt slaat u rechtsaf.', exampleEnglish: 'At the junction you turn right.' },
  { id: 'ch12_stoplicht', dutch: 'het stoplicht', english: 'traffic light', category: 'route', partOfSpeech: 'noun', article: 'het', plural: 'stoplichten', exampleSentence: 'Bij het stoplicht gaat u linksaf.', exampleEnglish: 'At the traffic light you turn left.' },
  { id: 'ch12_ingang', dutch: 'de ingang', english: 'entrance', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'ingangen', exampleSentence: 'De ingang van de hal is aan de zijkant.', exampleEnglish: 'The entrance to the hall is at the side.' },
  { id: 'ch12_uitgang', dutch: 'de uitgang', english: 'exit', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'uitgangen', exampleSentence: 'De uitgang is achter het station.', exampleEnglish: 'The exit is behind the station.' },
  { id: 'ch12_plattegrond', dutch: 'de plattegrond', english: 'floor plan / map', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'plattegronden', exampleSentence: 'Op de plattegrond staat zaal B.', exampleEnglish: 'Hall B is on the floor plan.' },
  { id: 'ch12_verdieping', dutch: 'de verdieping', english: 'floor / storey', category: 'gebouw', partOfSpeech: 'noun', article: 'de', plural: 'verdiepingen', exampleSentence: 'Het kantoor is op de derde verdieping.', exampleEnglish: 'The office is on the third floor.' },
];

export const CHAPTER_12_SUPPLEMENT: LessonSupplement = {
  dialogue: [
    { speaker: 'Kirsten', dutch: 'Dank u wel. Is de roltrap aan de linkerkant of aan de rechterkant?', english: 'Thank you. Is the escalator on the left or on the right?' },
    { speaker: 'Receptioniste', dutch: 'Aan de rechterkant, naast de lift. Die is er ook, als u liever de lift neemt.', english: 'On the right, next to the lift. That is there too, if you prefer to take the lift.' },
    { speaker: 'Kirsten', dutch: 'Geweldig. Moet ik ook iets laten zien bij de ingang?', english: 'Great. Do I also need to show something at the entrance?' },
    { speaker: 'Receptioniste', dutch: 'Ja, uw uitnodiging graag. Dan kunt u meteen naar binnen.', english: 'Yes, your invitation please. Then you can go in straight away.' },
    { speaker: 'Kirsten', dutch: 'Hier is hij. Tot straks!', english: 'Here it is. See you later!' },
    { speaker: 'Receptioniste', dutch: 'Veel succes met de conferentie.', english: 'Good luck with the conference.' },
  ],
  vocabulary,
  exercises: [
    {
      id: 'ch12_weg_wijzen',
      title: 'Opdracht 2-3: De weg vragen en wijzen',
      instruction: 'Kies het juiste woord voor de route.',
      items: [
        { id: 1, prompt: 'Loop _____ door tot het stoplicht.', options: ['rechtdoor', 'linksaf', 'omhoog', 'terug'], answer: 'rechtdoor', explanation: '"Rechtdoor" betekent dat je niet afslaat.' },
        { id: 2, prompt: 'Sla bij het stoplicht _____ af.', options: ['linksaf', 'rechtdoor', 'omhoog', 'binnen'], answer: 'linksaf', explanation: '"Linksaf" betekent naar links afslaan.' },
        { id: 3, prompt: 'De conferentie is op de tweede _____.', options: ['verdieping', 'hoek', 'halte', 'plattegrond'], answer: 'verdieping', explanation: 'Een verdieping is een etage in een gebouw.' },
        { id: 4, prompt: 'Neem de _____ naar boven.', options: ['trap', 'bus', 'fiets', 'deur'], answer: 'trap', explanation: 'Met de trap ga je naar boven of naar beneden.' },
      ],
    },
  ],
  pronunciation: {
    title: '12.9 Uitspraak: ou/au en ui',
    soundFocus: 'Tweeklanken "ou / au" (hout, pauze) versus "ui" (huis, buiten)',
    ruleExplanation: '"ou" en "au" klinken hetzelfde, als [au]. "ui" klinkt anders: met ronde lippen, zoals [œy]. Vergelijk "hout" met "huid".',
    wordList: ['koud', 'hout', 'blauw', 'zout', 'auto', 'pauze', 'huis', 'muis', 'buiten', 'fruit', 'uil', 'kuip'],
    minimalPairs: [
      { word1: 'hout', word2: 'huid', contrast: 'ou vs ui' },
      { word1: 'zout', word2: 'zuid', contrast: 'ou vs ui' },
    ],
  },
  reflection: {
    practice: 'Vraag een medewerker of voorbijganger de weg naar een plek in je stad. Luister naar de aanwijzingen en herhaal ze.',
    reflectionQuestions: [
      'Kun je de weg vragen en aanwijzen?',
      'Kun je routeaanwijzingen geven met "rechtdoor", "linksaf" en "de hoek om"?',
      'Weet je hoe een scheidbaar werkwoord in een zin verandert?',
      'Kun je reizen met het openbaar vervoer en in- en uitchecken?',
    ],
  },
};
