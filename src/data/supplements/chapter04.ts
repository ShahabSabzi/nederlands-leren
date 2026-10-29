import { LessonSupplement } from './types';

export const CHAPTER_04_SUPPLEMENT: LessonSupplement = {
  exercises: [
    {
      id: 'ch04_zullen_voorstel',
      title: 'Opdracht 2: Zullen en voorstellen doen',
      instruction: 'Vul het juiste onderwerp in bij "zullen".',
      items: [
        { id: 1, prompt: 'Zullen _____ samen koffie drinken?', options: ['we', 'je', 'ik', 'jullie'], answer: 'we', explanation: 'Bij een voorstel doen met "zullen" gebruik je "we": "Zullen we ...?"' },
        { id: 2, prompt: 'Zal _____ de deur voor je openen?', options: ['ik', 'we', 'jij', 'zij'], answer: 'ik', explanation: '"Zal ik ...?" biedt je hulp aan.' },
        { id: 3, prompt: 'Zullen _____ morgen naar het park gaan?', options: ['we', 'ik', 'hij', 'jullie'], answer: 'we', explanation: 'Het voorstel is "Zullen we morgen naar het park gaan?"' },
      ],
    },
    {
      id: 'ch04_reageren',
      title: 'Opdracht 4: Positief of negatief reageren',
      instruction: 'Kies de passende reactie op het voorstel.',
      items: [
        { id: 1, prompt: '"Zullen we vanavond naar de film gaan?" — Positief antwoord:', options: ['Ja, leuk! Goed idee.', 'Nee, dank je. Ik ben moe.', 'Dat weet ik niet.', 'Ik heet Sara.'], answer: 'Ja, leuk! Goed idee.', explanation: 'Een positief antwoord laat merken dat je het voorstel leuk vindt.' },
        { id: 2, prompt: '"Zullen we zaterdag samen koken?" — Negatief antwoord:', options: ['Helaas kan ik niet. Ik werk.', 'Ja, graag!', 'Prima, om vijf uur.', 'Goed, tot dan.'], answer: 'Helaas kan ik niet. Ik werk.', explanation: '"Helaas kan ik niet" is een beleefd negatief antwoord.' },
        { id: 3, prompt: '"Zal ik je morgen bellen?" — Positief antwoord:', options: ['Ja, dat is goed.', 'Nee, dat is slecht.', 'Ik ben boos.', 'Waar is het?'], answer: 'Ja, dat is goed.', explanation: 'Met "Ja, dat is goed" stem je in met het voorstel.' },
      ],
    },
  ],
  reflection: {
    practice: 'Doe in de week een voorstel aan iemand met "Zullen we ...?". Luister naar het antwoord en reageer positief of negatief.',
    reflectionQuestions: [
      'Kun je een voorstel doen met "zullen we"?',
      'Kun je aanbieden om iets te doen met "zal ik"?',
      'Kun je positief en negatief reageren op een voorstel?',
      'Kun je vertellen hoe het met je gaat?',
    ],
  },
};
