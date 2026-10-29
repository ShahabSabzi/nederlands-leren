import { LessonSupplement } from './types';

export const CHAPTER_01_SUPPLEMENT: LessonSupplement = {
  exercises: [
    {
      id: 'ch01_telwoorden',
      title: 'Opdracht 4-5: Telwoorden',
      instruction: 'Kies het juiste telwoord.',
      items: [
        { id: 1, prompt: 'Welk getal is 14?', options: ['veertien', 'veertig', 'vijftien', 'zestien'], answer: 'veertien', explanation: '14 is "veertien". Let op: veertig is 40.' },
        { id: 2, prompt: 'Welk getal is 7?', options: ['zes', 'zeven', 'zeventien', 'zeventig'], answer: 'zeven', explanation: '7 is "zeven".' },
        { id: 3, prompt: 'Welk getal is 20?', options: ['twaalf', 'twintig', 'tweeëntwintig', 'twee'], answer: 'twintig', explanation: '20 is "twintig".' },
        { id: 4, prompt: 'Welk getal is 100?', options: ['honderd', 'duizend', 'tien', 'negentig'], answer: 'honderd', explanation: '100 is "honderd".' },
      ],
    },
    {
      id: 'ch01_alfabet',
      title: 'Opdracht 6-7: Het alfabet',
      instruction: 'Hoe zeg je de letter? Kies het juiste antwoord.',
      items: [
        { id: 1, prompt: 'Hoe zeg je de letter Y?', options: ['ij', 'ei', 'uu', 'ie'], answer: 'ij', explanation: 'De letter Y heet "ij" in het Nederlands.' },
        { id: 2, prompt: 'Hoe zeg je de letter C?', options: ['see', 'se', 'cee', 'si'], answer: 'cee', explanation: 'De letter C heet "cee".' },
        { id: 3, prompt: 'Hoe zeg je de letter J?', options: ['jee', 'jot', 'juu', 'joe'], answer: 'jee', explanation: 'De letter J heet "jee".' },
        { id: 4, prompt: 'Welke letter is "ei"?', options: ['A', 'E', 'G', 'I'], answer: 'E', explanation: 'De letter E wordt uitgesproken als "ee". De letter G is "gee", de letter I is "ie".' },
      ],
    },
    {
      id: 'ch01_begroeten',
      title: 'Opdracht 8-10: Begroeten en afscheid nemen',
      instruction: 'Kies de juiste reactie.',
      items: [
        { id: 1, prompt: 'Wat zeg je als je \'s avonds naar bed gaat?', options: ['Welterusten', 'Goedemorgen', 'Tot morgen', 'Hallo'], answer: 'Welterusten', explanation: '"Welterusten" zeg je \'s avonds bij het naar bed gaan.' },
        { id: 2, prompt: 'Iemand zegt "Hoe gaat het?" Wat antwoord je?', options: ['Goed, dank je. En met jou?', 'Ik ben Anna.', 'Tot ziens.', 'Dat is goed.'], answer: 'Goed, dank je. En met jou?', explanation: 'Je antwoordt en vraagt het ook terug.' },
        { id: 3, prompt: 'Je neemt afscheid van een collega in de ochtend. Wat zeg je?', options: ['Tot straks', 'Goedenacht', 'Welkom', 'Sorry'], answer: 'Tot straks', explanation: '"Tot straks" betekent dat je elkaar later die dag weer ziet.' },
      ],
    },
  ],
  reflection: {
    practice: 'Stel jezelf voor aan iemand die je nog niet kent. Vertel je naam, waar je woont en wat je doet. Gebruik minstens één vraag, zoals "Waar kom jij vandaan?"',
    reflectionQuestions: [
      'Kun je jezelf voorstellen en vragen hoe iemand heet?',
      'Kun je de getallen van 1 tot 100 noemen?',
      'Kun je het Nederlandse alfabet uitspreken?',
      'Kun je iemand begroeten en afscheid nemen?',
      'Kun je een eenvoudig formulier invullen?',
    ],
  },
};
