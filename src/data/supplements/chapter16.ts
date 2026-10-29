import { LessonSupplement, word } from './types';

const vocabulary = [
  word('de bioscoop', 'cinema', 'bioscoop', 'noun', 'de'),
  word('de kassa', 'ticket desk / till', 'bioscoop', 'noun', 'de'),
  word('het kaartje', 'ticket', 'bioscoop', 'noun', 'het'),
  word('de korting', 'discount', 'bioscoop', 'noun', 'de'),
  word('de ondertiteling', 'subtitles', 'bioscoop', 'noun', 'de'),
  word('de zaal', 'screening room / hall', 'bioscoop', 'noun', 'de'),
  word('de speelfilm', 'feature film', 'bioscoop', 'noun', 'de'),
  word('de acteur', 'actor', 'bioscoop', 'noun', 'de'),
  word('het verhaal', 'story', 'bioscoop', 'noun', 'het'),
  word('pinnen', 'to pay by card', 'betalen', 'verb'),
  word('contant', 'in cash', 'betalen', 'adjective'),
  word('de collegekaart', 'student card', 'bioscoop', 'noun', 'de'),
  word('de cola', 'cola', 'eten', 'noun', 'de'),
  word('de popcorn', 'popcorn', 'eten', 'noun', 'de'),
  word('geschikt', 'suitable', 'bioscoop', 'adjective'),
];

export const CHAPTER_16_SUPPLEMENT: LessonSupplement = {
  vocabulary,
  dialogue: [
    { speaker: 'Amira', dutch: 'Ja, een kleine popcorn en een cola, alstublieft.', english: 'Yes, a small popcorn and a cola, please.' },
    { speaker: 'Caissière', dutch: 'Dat wordt dan € 12,50 in totaal. Wilt u pinnen of contant betalen?', english: 'That will be € 12.50 in total. Would you like to pay by card or in cash?' },
    { speaker: 'Amira', dutch: 'Ik pin wel. Hoe laat begint de film eigenlijk?', english: 'I will pay by card. What time does the film actually start?' },
    { speaker: 'Caissière', dutch: 'Om acht uur vijftien in zaal drie. U kunt nu al naar binnen.', english: 'At quarter past eight in hall three. You can go in now.' },
    { speaker: 'Amira', dutch: 'Super, dank u wel!', english: 'Super, thank you!' },
    { speaker: 'Caissière', dutch: 'Veel plezier met de film!', english: 'Enjoy the film!' },
  ],
  exercises: [
    {
      id: 'ch16_kijkwijzer',
      title: 'Opdracht 4-5: De kijkwijzer en leeftijd',
      instruction: 'Kies het juiste woord of de juiste betekenis.',
      items: [
        { id: 1, prompt: 'Een film met de kijkwijzer "12" betekent:', options: ['vanaf 12 jaar', 'voor iedereen', 'alleen voor volwassenen', 'gratis'], answer: 'vanaf 12 jaar', explanation: 'Het cijfer op de kijkwijzer geeft de minimumleeftijd aan.' },
        { id: 2, prompt: 'Deze film is _____ voor jonge kinderen.', options: ['ongeschikt', 'geschikt', 'gratis', 'leuk'], answer: 'ongeschikt', explanation: '"Ongeschikt" betekent dat de film niet bij die leeftijd past.' },
      ],
    },
    {
      id: 'ch16_bioscoop',
      title: 'Opdracht 7: In de bioscoop',
      instruction: 'Kies het juiste woord bij de situatie.',
      items: [
        { id: 1, prompt: 'Bij de kassa koop je een _____.', options: ['kaartje', 'bril', 'boek', 'kopje'], answer: 'kaartje', explanation: 'Een kaartje koop je bij de kassa.' },
        { id: 2, prompt: 'Met je _____ krijg je korting als student.', options: ['studentenkaart', 'bankpas', 'paspoort', 'sleutel'], answer: 'studentenkaart', explanation: 'Met een studentenkaart krijg je vaak korting.' },
        { id: 3, prompt: 'Je wilt iets te drinken bij je film. Wat vraag je?', options: ['Wilt u daar nog iets bij?', 'Wat kost de bus?', 'Waar is de trein?', 'Hoe laat is het?'], answer: 'Wilt u daar nog iets bij?', explanation: 'Dit is een vraag van de kassamedewerker. Je antwoordt dan met "Ja, een cola, alstublieft."' },
      ],
    },
  ],
  pronunciation: {
    title: '16.9 Uitspraak: -ig en -lijk',
    soundFocus: 'Eindklanken "-ig" (koning, machtig) en "-lijk" (vriendelijk, eerlijk)',
    ruleExplanation: 'Aan het eind van een woord klinkt "-ig" als een harde "ch" met een korte "uh" ervoor. "-lijk" klinkt als "lək", met een zwakke "uh" en een "k" aan het eind.',
    wordList: ['machtig', 'koning', 'zonnig', 'gezellig', 'heerlijk', 'vrolijk', 'eerlijk', 'vriendelijk', 'lelijk', 'mooi', 'zeker', 'gelijk'],
  },
  reflection: {
    practice: 'Ga naar de bioscoop of kijk op een website naar een film. Lees de kijkwijzer en vertel wat die betekent.',
    reflectionQuestions: [
      'Kun je met "en", "maar", "want", "of" en "dus" zinnen verbinden?',
      'Kun je vergelijken met comparatief en superlatief?',
      'Kun je een kaartje kopen en vragen naar de film?',
      'Kun je de kijkwijzer en de leeftijd lezen?',
    ],
  },
};
