import { LessonSupplement } from './types';

export const CHAPTER_05_SUPPLEMENT: LessonSupplement = {
  exercises: [
    {
      id: 'ch05_groente_fruit',
      title: 'Opdracht 2: Groente en fruit',
      instruction: 'Welk woord hoort bij de omschrijving?',
      items: [
        { id: 1, prompt: 'Een groente die groen is en lang en dun. Je kookt hem of bakt hem.', options: ['de courgette', 'de tomaat', 'de aardappel', 'de appel'], answer: 'de courgette', explanation: 'De courgette is een lange groene groente.' },
        { id: 2, prompt: 'Een fruit dat rood is en vaak in een salade zit.', options: ['de aardbei', 'de banaan', 'de druif', 'de peer'], answer: 'de aardbei', explanation: 'De aardbei is rood en zoet.' },
        { id: 3, prompt: 'Een groente die je gebruikt voor stamppot.', options: ['de andijvie', 'de banaan', 'de sinaasappel', 'de kiwi'], answer: 'de andijvie', explanation: 'Andijvie is een groente voor de traditionele stamppot.' },
      ],
    },
    {
      id: 'ch05_prijzen',
      title: 'Opdracht 6-7: Prijzen en betalen',
      instruction: 'Kies de juiste betekenis of reactie.',
      items: [
        { id: 1, prompt: 'Wat betekent "wisselgeld"?', options: ['het geld dat je terugkrijgt', 'een korting', 'een kassabon', 'een tas'], answer: 'het geld dat je terugkrijgt', explanation: 'Wisselgeld is het geld dat de verkoper teruggeeft.' },
        { id: 2, prompt: 'De verkoper vraagt: "Heb je er dertig cent bij?" Wat betekent dit?', options: ['Heb je nog dertig cent extra?', 'Wil je dertig euro?', 'Is het dertig graden?', 'Ben je dertig jaar?'], answer: 'Heb je nog dertig cent extra?', explanation: '"Er ... bij hebben" betekent dat je nog iets extra moet betalen.' },
        { id: 3, prompt: 'Je wilt een kilo appels kopen. Wat vraag je?', options: ['Ik wil graag een kilo appels, alstublieft.', 'Ik wil graag een kilo appel, alstublieft.', 'Ik wil graag kilo appels.', 'Ik wil graag appels kilo.'], answer: 'Ik wil graag een kilo appels, alstublieft.', explanation: 'Bij "kilo" hoort geen meervoud: "een kilo appels".' },
      ],
    },
  ],
  reflection: {
    practice: 'Ga naar de markt of de supermarkt. Vraag naar de prijs van drie producten en reken het bedrag zelf uit in het Nederlands.',
    reflectionQuestions: [
      'Kun je groente en fruit benoemen?',
      'Kun je vragen naar de prijs en betalen?',
      'Weet je wanneer je "-en" of "-s" bij het meervoud gebruikt?',
      'Kun je een opdracht geven met de imperatief?',
    ],
  },
};
