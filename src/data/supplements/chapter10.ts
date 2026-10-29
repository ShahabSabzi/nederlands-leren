import { LessonSupplement } from './types';
import { VocabWord } from '../chapterData';

const vocabulary: VocabWord[] = [
  { id: 'ch10_fietsbel', dutch: 'de fietsbel', english: 'bicycle bell', category: 'fiets', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Ik heb een nieuwe fietsbel gekocht.', exampleEnglish: 'I bought a new bicycle bell.' },
  { id: 'ch10_band', dutch: 'de band', english: 'tyre / tire', category: 'fiets', partOfSpeech: 'noun', article: 'de', plural: 'banden', exampleSentence: 'De banden zijn erg oud.', exampleEnglish: 'The tyres are very old.' },
  { id: 'ch10_ketting', dutch: 'de ketting', english: 'chain', category: 'fiets', partOfSpeech: 'noun', article: 'de', plural: 'kettingen', exampleSentence: 'De ketting springt steeds eraf.', exampleEnglish: 'The chain keeps coming off.' },
  { id: 'ch10_rem', dutch: 'de rem', english: 'brake', category: 'fiets', partOfSpeech: 'noun', article: 'de', plural: 'remmen', exampleSentence: 'De rem van mijn fiets piept.', exampleEnglish: 'The brake on my bike squeaks.' },
  { id: 'ch10_zadel', dutch: 'het zadel', english: 'saddle / seat', category: 'fiets', partOfSpeech: 'noun', article: 'het', plural: 'zadels', exampleSentence: 'Het zadel is te laag.', exampleEnglish: 'The saddle is too low.' },
  { id: 'ch10_stuur', dutch: 'het stuur', english: 'handlebars', category: 'fiets', partOfSpeech: 'noun', article: 'het', exampleSentence: 'Houd het stuur met beide handen vast.', exampleEnglish: 'Hold the handlebars with both hands.' },
  { id: 'ch10_versnelling', dutch: 'de versnelling', english: 'gear', category: 'fiets', partOfSpeech: 'noun', article: 'de', plural: 'versnellingen', exampleSentence: 'Deze fiets heeft acht versnellingen.', exampleEnglish: 'This bike has eight gears.' },
  { id: 'ch10_lamp', dutch: 'het lampje', english: 'light (on a bike)', category: 'fiets', partOfSpeech: 'noun', article: 'het', exampleSentence: 'Het lampje achterop is kapot.', exampleEnglish: 'The rear light is broken.' },
  { id: 'ch10_fietsenmaker', dutch: 'de fietsenmaker', english: 'bicycle repairer', category: 'beroepen', partOfSpeech: 'noun', article: 'de', plural: 'fietsenmakers', exampleSentence: 'De fietsenmaker repareert mijn fiets.', exampleEnglish: 'The bicycle repairer fixes my bike.' },
  { id: 'ch10_kapot', dutch: 'kapot', english: 'broken', category: 'algemeen', partOfSpeech: 'adjective', exampleSentence: 'Mijn fiets is kapot.', exampleEnglish: 'My bike is broken.' },
];

export const CHAPTER_10_SUPPLEMENT: LessonSupplement = {
  dialogue: [
    { speaker: 'Mevrouw Kirbas', dutch: 'Dat is fijn. Kunt u mij ook vertellen wat het kost?', english: 'That is nice. Can you also tell me what it costs?' },
    { speaker: 'Fietsenmaker', dutch: 'Dat hangt af van de onderdelen. Ik bel u morgen met de prijs.', english: 'That depends on the parts. I will call you tomorrow with the price.' },
    { speaker: 'Mevrouw Kirbas', dutch: 'Afgesproken. Hebt u misschien ook een nieuwe bel voor mijn fiets?', english: 'Agreed. Do you perhaps also have a new bell for my bike?' },
    { speaker: 'Fietsenmaker', dutch: 'Zeker. Er ligt een mooie zwarte bel op de plank. Die past er perfect op.', english: 'Certainly. There is a nice black bell on the shelf. It fits perfectly.' },
    { speaker: 'Mevrouw Kirbas', dutch: 'Mooi! Ik kom overmorgen dan terug.', english: 'Lovely! Then I will come back the day after tomorrow.' },
    { speaker: 'Fietsenmaker', dutch: 'Tot dan, mevrouw. En pas goed op de weg!', english: 'See you then, madam. And take care on the road!' },
  ],
  vocabulary,
  exercises: [
    {
      id: 'ch10_fietsonderdelen',
      title: 'Opdracht 4: Fietsonderdelen',
      instruction: 'Welk onderdeel bedoelt de fietsenmaker?',
      items: [
        { id: 1, prompt: 'Met dit onderdeel stop je de fiets.', options: ['de rem', 'de bel', 'het zadel', 'het stuur'], answer: 'de rem', explanation: 'Met de rem remt en stopt de fiets.' },
        { id: 2, prompt: 'Hier zit je op als je fietst.', options: ['het zadel', 'het stuur', 'de band', 'de ketting'], answer: 'het zadel', explanation: 'Op het zadel zit je.' },
        { id: 3, prompt: 'Met dit onderdeel stuur je de fiets.', options: ['het stuur', 'het lampje', 'de versnelling', 'de bel'], answer: 'het stuur', explanation: 'Met het stuur stuur je de richting aan.' },
      ],
    },
  ],
  pronunciation: {
    title: '10.10 Uitspraak: ui en eu',
    soundFocus: 'De klinkers "ui" (huis, buiten) en "eu" (deur, neus) klinken verschillend.',
    ruleExplanation: '"ui" klinkt als een tweeklank: de klank begint met een ronde "u" en eindigt met een "i". "eu" klinkt met de lippen gerond maar de tong voor, zoals in "deur".',
    wordList: ['huis', 'buiten', 'muis', 'uil', 'deur', 'neus', 'keuze', 'leuk', 'reuze', 'fietsen', 'kluis'],
    minimalPairs: [
      { word1: 'huis', word2: 'heus', contrast: 'ui vs eu' },
    ],
  },
  reflection: {
    practice: 'Ga naar een fietsenwinkel of bel er een. Vraag wat er mis is met je fiets en laat de fietsenmaker de klachten herhalen.',
    reflectionQuestions: [
      'Kun je zeggen dat je iets niet verstaat?',
      'Kun je fietsonderdelen benoemen?',
      'Weet je wanneer je het imperfectum gebruikt?',
      'Kun je het verschil tussen "bedoelen" en "betekenen" uitleggen?',
    ],
  },
};
