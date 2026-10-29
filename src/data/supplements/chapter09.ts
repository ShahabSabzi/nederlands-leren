import { LessonSupplement } from './types';

export const CHAPTER_09_SUPPLEMENT: LessonSupplement = {
  dialogue: [
    { speaker: 'Huisarts', dutch: 'Meneer Smit, nog één ding. Heeft u de zalf al gehaald bij de apotheek?', english: 'Mr Smit, one more thing. Have you already picked up the cream at the pharmacy?', notes: 'Apotheek = pharmacy.' },
    { speaker: 'Meneer Smit', dutch: 'Nee, dat ga ik straks doen. Moet ik ook iets innemen?', english: 'No, I will do that later. Do I also need to take something?', keyWords: ['innemen'] },
    { speaker: 'Huisarts', dutch: 'Alleen als de jeuk erger wordt. Dan neemt u \'s avonds een tablet.', english: 'Only if the itching gets worse. Then you take a tablet in the evening.' },
    { speaker: 'Meneer Smit', dutch: 'Duidelijk. En als het na drie dagen niet beter is?', english: 'Clear. And if it is not better after three days?' },
    { speaker: 'Huisarts', dutch: 'Dan belt u de praktijk. Wij maken dan een nieuwe afspraak.', english: 'Then you call the practice. We will then make a new appointment.' },
    { speaker: 'Meneer Smit', dutch: 'Prima, dank u wel.', english: 'Fine, thank you.' },
    { speaker: 'Huisarts', dutch: 'Graag gedaan. Beterschap!', english: 'You are welcome. Get well soon!', notes: 'Beterschap = get well soon.' },
  ],
  exercises: [
    {
      id: 'ch09_perfectum',
      title: 'Opdracht 6-10: Perfectum met hebben of zijn',
      instruction: 'Kies het juiste hulpwerkwoord.',
      items: [
        { id: 1, prompt: 'Ik _____ gisteren naar de huisarts gegaan.', options: ['ben', 'heb', 'ga', 'hebt'], answer: 'ben', explanation: '"Gaan" krijgt "zijn" in het perfectum: "Ik ben gegaan."' },
        { id: 2, prompt: 'Zij _____ twee dagen in bed gelegen.', options: ['heeft', 'is', 'hebben', 'zijn'], answer: 'heeft', explanation: 'Bij "gelegen" hoort "hebben": "Zij heeft gelegen."' },
        { id: 3, prompt: 'Wij _____ thee gedronken.', options: ['hebben', 'zijn', 'ben', 'heeft'], answer: 'hebben', explanation: '"Drinken" gebruikt "hebben": "Wij hebben gedronken."' },
        { id: 4, prompt: 'Hij _____ met de auto naar het ziekenhuis gereden.', options: ['is', 'heeft', 'hebt', 'zijn'], answer: 'is', explanation: '"Rijden" van plaats naar plaats gebruikt "zijn": "Hij is gereden."' },
      ],
    },
    {
      id: 'ch09_iets_niets',
      title: 'Opdracht 11: Iets of niets',
      instruction: 'Kies "iets" of "niets".',
      items: [
        { id: 1, prompt: 'Heeft u _____ last van uw keel?', options: ['iets', 'niets'], answer: 'iets', explanation: 'In een vraag gebruik je "iets": "Heeft u iets?"' },
        { id: 2, prompt: 'Gelukkig is er _____ aan de hand.', options: ['niets', 'iets'], answer: 'niets', explanation: '"Er is niets aan de hand" betekent: het is niet erg.' },
        { id: 3, prompt: 'Wilt u _____ drinken?', options: ['iets', 'niets'], answer: 'iets', explanation: 'Bij een aanbod gebruik je "iets".' },
      ],
    },
  ],
  reflection: {
    practice: 'Bel een praktijk of ga naar de apotheek. Vertel waar je klachten zijn, bijvoorbeeld "Ik heb hoofdpijn en koorts."',
    reflectionQuestions: [
      'Kun je lichaamsdelen en klachten benoemen?',
      'Kun je in het perfectum vertellen wat je gisteren deed?',
      'Weet je wanneer je "hebben" en wanneer je "zijn" gebruikt?',
      'Kun je "iets" en "niets" goed gebruiken?',
    ],
  },
  pronunciation: {
    title: '9.10 Uitspraak: eindklank -d en -t',
    soundFocus: 'Eindklanken -d en -t klinken hetzelfde. Verbonden spraak in dagelijkse zinnen.',
    ruleExplanation: 'Aan het eind van een woord klinkt een "d" als een "t". Daarom klinkt "hond" als "hont" en "rad" als "rat". In gesproken taal vloeien woorden ook samen, zoals in "heb je", dat je hoort als "hebje".',
    wordList: ['hond', 'rond', 'vriend', 'lied', 'bed', 'mond', 'goed', 'kat', 'nat', 'rad', 'rat', 'pad'],
    minimalPairs: [
      { word1: 'rad', word2: 'rat', contrast: 'd en t klinken hetzelfde aan het eind' },
      { word1: 'pad', word2: 'pat', contrast: 'd en t klinken hetzelfde aan het eind' },
    ],
  },
};
