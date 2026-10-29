import { LessonSupplement, word } from './types';

const vocabulary = [
  word('het abonnement', 'membership / subscription', 'sport', 'noun', 'het'),
  word('de proefles', 'trial lesson', 'sport', 'noun', 'de'),
  word('de kleedkamer', 'changing room', 'sport', 'noun', 'de'),
  word('de kluis', 'locker', 'sport', 'noun', 'de'),
  word('de rondleiding', 'guided tour', 'sport', 'noun', 'de'),
  word('onbeperkt', 'unlimited', 'sport', 'adjective'),
  word('de training', 'training / workout', 'sport', 'noun', 'de'),
  word('het gewicht', 'weight', 'sport', 'noun', 'het'),
  word('het pakket', 'package', 'sport', 'noun', 'het'),
  word('de sauna', 'sauna', 'sport', 'noun', 'de'),
  word('de ledenpas', 'membership card', 'sport', 'noun', 'de'),
  word('het slot', 'lock / padlock', 'sport', 'noun', 'het'),
  word('de conditie', 'fitness', 'sport', 'noun', 'de'),
  word('zwemmen', 'to swim', 'sport', 'verb'),
  word('schaatsen', 'to skate', 'sport', 'verb'),
  word('voetballen', 'to play football', 'sport', 'verb'),
];

export const CHAPTER_14_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Paul', dutch: 'Duidelijk. Hoeveel kost een abonnement per maand?', english: 'Clear. How much does a membership cost per month?' },
    { speaker: 'Tjeerd', dutch: 'Dat hangt af van het pakket. Met onbeperkt sporten betaalt u ongeveer vijfenveertig euro per maand.', english: 'That depends on the package. With unlimited training you pay about forty-five euros per month.' },
    { speaker: 'Paul', dutch: 'Dat klinkt redelijk. Kan ik ook een proefles doen?', english: 'That sounds reasonable. Can I also do a trial lesson?' },
    { speaker: 'Tjeerd', dutch: 'Jazeker. Dan kunt u morgen om negen uur komen. Dan krijgt u een rondleiding.', english: 'Certainly. Then you can come tomorrow at nine o\'clock. You will get a tour then.' },
    { speaker: 'Paul', dutch: 'Prima. Ik kom morgen. Tot dan!', english: 'Fine. I will come tomorrow. See you then!' },
    { speaker: 'Tjeerd', dutch: 'Tot morgen! Veel plezier met de training.', english: 'See you tomorrow! Have fun with the training.' },
  ],
  exercises: [
    {
      id: 'ch14_sporten',
      title: 'Opdracht 2-3: Praten over sporten',
      instruction: 'Welke sport past bij de omschrijving?',
      items: [
        { id: 1, prompt: 'Je doet deze sport in een zwembad.', options: ['zwemmen', 'hardlopen', 'fietsen', 'boksen'], answer: 'zwemmen', explanation: 'Je zwemt in een zwembad.' },
        { id: 2, prompt: 'Je speelt deze sport in een zaal met een bal en een net.', options: ['volleybal', 'schaatsen', 'turnen', 'zwemmen'], answer: 'volleybal', explanation: 'Bij volleybal speel je over een net.' },
        { id: 3, prompt: 'Je doet deze sport op het ijs.', options: ['schaatsen', 'zwemmen', 'voetballen', 'boksen'], answer: 'schaatsen', explanation: 'Op het ijs schaats je.' },
        { id: 4, prompt: 'Op de sportschool doe je dit.', options: ['gewichten tillen', 'vissen', 'koken', 'lezen'], answer: 'gewichten tillen', explanation: 'Op de sportschool til je vaak gewichten.' },
      ],
    },
    {
      id: 'ch14_zullen_waarschijnlijk',
      title: 'Opdracht 7: Zullen voor waarschijnlijkheid',
      instruction: 'Kies de juiste vorm van "zullen". Gebruik het als je iets waarschijnlijk vindt.',
      items: [
        { id: 1, prompt: 'Hij is er nog niet. Hij _____ wel in de file staan.', options: ['zal', 'zullen', 'zult', 'zal ik'], answer: 'zal', explanation: 'Bij "hij" hoort "zal". Je zegt iets waarschijnlijk met "wel".' },
        { id: 2, prompt: 'Dat _____ wel duur zijn.', options: ['zal', 'zullen', 'zal ik', 'zult'], answer: 'zal', explanation: 'Bij "dat" hoort "zal".' },
        { id: 3, prompt: 'Jullie _____ het wel druk hebben.', options: ['zullen', 'zal', 'zult', 'zal ik'], answer: 'zullen', explanation: 'Bij "jullie" hoort "zullen".' },
      ],
    },
  ],
  pronunciation: {
    title: '14.9 Uitspraak: oe, u en uu',
    soundFocus: 'Klinkers "oe" (boek, hoek) versus korte "u" (bus, dun) versus lange "uu" (buur, muur)',
    ruleExplanation: '"oe" klinkt met de lippen rond en de tong naar achteren. Korte "u" klinkt kort en scherp, zoals in "bus". Lange "uu" klinkt als "oe" met de lippen gespannen, zoals in "buur".',
    wordList: ['boek', 'hoek', 'doe', 'moe', 'bus', 'dun', 'buur', 'muur', 'uur', 'huur', 'boer', 'moer'],
    minimalPairs: [
      { word1: 'buur', word2: 'boer', contrast: 'uu vs oe' },
      { word1: 'muur', word2: 'moer', contrast: 'uu vs oe' },
    ],
  },
  reflection: {
    practice: 'Vraag in een sportschool of sportclub naar de mogelijkheden. Stel minstens drie vragen over prijzen, lessen en openingstijden.',
    reflectionQuestions: [
      'Kun je indirecte vragen stellen met "Weet u of ...?"?',
      'Kun je praten over sporten en sporten raden?',
      'Kun je met "gaan" een toekomstplan maken?',
      'Kun je met "zullen" iets waarschijnlijk vinden?',
    ],
  },
};
