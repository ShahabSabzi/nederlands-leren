import { CustomLessonData, GrammarPoint } from '../types/lesson';
import { 
  DIALOGUE_DATA, 
  VOCABULARY_LIST, 
  OPDRACHT_1, 
  OPDRACHT_3, 
  OPDRACHT_4, 
  OPDRACHT_10,
  PRONUNCIATION_PAIRS,
  PRONUNCIATION_WORDS_A,
  ExerciseItem
} from './chapterData';

export const CHAPTER_2_EXAM_QUESTIONS: ExerciseItem[] = [
  {
    id: 1,
    prompt: 'Wat bedoelt Edit met "Morgen ben ik jarig"?',
    answer: 'Morgen vier ik mijn verjaardag.',
    options: ['Morgen ga ik op reis.', 'Morgen vier ik mijn verjaardag.', 'Morgen heb ik een cursus.', 'Morgen is het weekend.'],
    explanation: '"Jarig zijn" betekent dat het je verjaardag is.'
  },
  {
    id: 2,
    prompt: 'Hoe laat is het als de klok 11:30 aanwijst in het Nederlands?',
    answer: 'Het is half twaalf.',
    options: ['Het is half elf.', 'Het is half twaalf.', 'Het is dertig over elf.', 'Het is twaalf uur.'],
    explanation: 'Het Nederlands telt vóóruit naar het komende hele uur: 11:30 is "half twaalf".'
  },
  {
    id: 3,
    prompt: 'Hoe laat is het om 11:20?',
    answer: 'Het is tien voor half twaalf.',
    options: ['Het is twintig over elf.', 'Het is tien voor half twaalf.', 'Het is tien over half elf.', 'Het is tien voor twaalf.'],
    explanation: '11:20 is 10 minuten vóór 11:30 (half twaalf), dus "tien voor half twaalf".'
  },
  {
    id: 4,
    prompt: 'Vul het juiste bezittelijk voornaamwoord in: "Wij wonen in Utrecht. _______ adres is Janskerkhof 12."',
    answer: 'Ons',
    options: ['Ons', 'Onze', 'Hun', 'Mijn'],
    explanation: '"Het adres" is een het-woord. Bij "wij" hoort "ons" voor het-woorden.'
  },
  {
    id: 5,
    prompt: 'Vul in: "Edit praat met _______ docent in de kantine."',
    answer: 'haar',
    options: ['haar', 'zijn', 'hun', 'jouw'],
    explanation: 'Edit is een vrouw (zij), dus het bezittelijk voornaamwoord is "haar".'
  },
  {
    id: 6,
    prompt: 'Vul het vraagwoord in: "_______ laat begint de les?"',
    answer: 'Hoe',
    options: ['Hoe', 'Wat', 'Waar', 'Wanneer'],
    explanation: 'De vaste vraag naar een specifiek tijdstip is "Hoe laat...".'
  },
  {
    id: 7,
    prompt: 'Kies de juiste voorzetsels: "De les is _______ maandag _______ 9.00 uur."',
    answer: 'op / om',
    options: ['op / om', 'in / om', 'om / op', 'in / in'],
    explanation: '"op" voor dagen/data, "om" voor kloktijden.'
  },
  {
    id: 8,
    prompt: 'Wat is de juiste inversiezin als "Morgen" vooraan staat?',
    answer: 'Morgen ben ik jarig.',
    options: ['Morgen ik ben jarig.', 'Morgen ben ik jarig.', 'Morgen ben jarig ik.', 'Morgen ik jarig ben.'],
    explanation: 'Bij inversie staat de persoonsvorm (ben) direct op positie 2, gevolgd door het onderwerp (ik).'
  }
];

export const CHAPTER_2_GRAMMAR: GrammarPoint[] = [
  {
    id: 'h2_gram_1',
    title: '1. Zinsbouw in de hoofdzin (Normale volgorde & Inversie)',
    summary: 'De persoonsvorm (het vervoegde werkwoord) staat in een gewone Nederlandse hoofdzin ALTIJD op de tweede positie (P2).',
    ruleExplanation: `In het Nederlands heeft de hoofdzin een vaste structuur:
1. **Normale volgorde**: Het onderwerp staat op positie 1, direct gevolgd door de persoonsvorm (werkwoord) op positie 2.
   *Formule: Onderwerp (1) + Persoonsvorm (2) + Rest van de zin*
   
2. **Inversie (Omdraaiing)**: Als er een ander zinsdeel (zoals tijd of plaats) op positie 1 staat voor nadruk, wisselen onderwerp en werkwoord van plaats. De persoonsvorm MOET op positie 2 blijven!
   *Formule: Tijd/Plaats (1) + Persoonsvorm (2) + Onderwerp (3) + Rest*

3. **Ja/Nee-vragen**: Bij een gesloten vraag (zonder vraagwoord) begint de zin met de persoonsvorm op positie 1.
   *Formule: Persoonsvorm (1) + Onderwerp (2) + Rest?*

4. **Inversie bij 'jij/je'**: Let op! Als 'jij' of 'je' achter de persoonsvorm staat (door inversie of vraagzin), valt de uitgang **-t** weg!
   - Jij woont in Utrecht. -> Woon jij in Utrecht? (NIET: Woont jij?)
   - Jij hebt koffie. -> Heb jij koffie? (NIET: Hebt jij?)`,
    tables: [
      {
        headers: ['Positie 1 (Aanloop)', 'Positie 2 (Werkwoord)', 'Positie 3 (Onderwerp/Rest)', 'Rest van de zin'],
        rows: [
          ['Susy en Edit (Onderwerp)', 'zitten (pv)', 'in de kantine.', '—'],
          ['Morgen (Tijd)', 'ben (pv)', 'ik (Onderwerp)', 'jarig.'],
          ['Nu (Tijd)', 'hebben (pv)', 'wij (Onderwerp)', 'pauze.'],
          ['In Utrecht (Plaats)', 'woont (pv)', 'Susy (Onderwerp)', 'pas vier dagen.'],
          ['Is (Gesloten vraag)', 'deze plaats (Onderwerp)', 'vrij?', '—']
        ]
      }
    ],
    examples: [
      { dutch: 'Edit is morgen jarig.', english: 'Edit has her birthday tomorrow.', note: 'Normale volgorde (Onderwerp eerst)' },
      { dutch: 'Morgen is Edit jarig.', english: 'Tomorrow Edit has her birthday.', note: 'Inversie: Tijd "Morgen" op positie 1 -> werkwoord "is" op positie 2' },
      { dutch: 'Woon je al lang in Utrecht?', english: 'Have you been living in Utrecht for long?', note: 'Vraagzin: Werkwoord "woon" eerst, "-t" valt weg voor "je"!' },
      { dutch: 'We moeten weer naar de les.', english: 'We have to go back to class.', note: 'pv "moeten" op positie 2, infinitief "gaan" weggelaten met "naar"' }
    ]
  },
  {
    id: 'h2_gram_2',
    title: '2. Possessieve pronomen (Bezit vragende voornaamwoorden)',
    summary: 'Drukt bezit uit: mijn, jouw/je, zijn, haar, ons/onze, jullie, hun, uw.',
    ruleExplanation: `Het possessief pronomen geeft aan van wie iets is:
• **ik** -> **mijn** (spreektaal: m'n)
• **jij / je** -> **jouw** (nadruk) / **je** (ongeaccentueerd)
• **hij** -> **zijn** (spreektaal: z'n)
• **zij / ze (enkelvoud)** -> **haar** (spreektaal: d'r)
• **u** -> **uw** (beleefd)
• **wij / we** -> **ons** (bij het-woorden) / **onze** (bij de-woorden en meervoud!)
• **jullie** -> **jullie** (of 'je' in informele taal)
• **zij / ze (meervoud)** -> **hun**

*Belangrijke regel voor 'ons / onze':*
- **ons**: uitsluitend bij *het*-woorden in het enkelvoud: *ons huis, ons kind, ons gezin, ons kopje koffie*.
- **onze**: bij álle *de*-woorden én álle meervouden: *onze docent, onze familie, onze boeken, onze kinderen*.`,
    tables: [
      {
        headers: ['Persoonlijk', 'Bezittelijk (Possessief)', 'Voorbeeld met de-woord', 'Voorbeeld met het-woord / meervoud'],
        rows: [
          ['ik', 'mijn (m’n)', 'mijn zus', 'mijn kopje'],
          ['jij / je', 'jouw / je', 'jouw broer', 'jouw boek'],
          ['hij', 'zijn (z’n)', 'zijn vader', 'zijn kind'],
          ['zij / ze (enk.)', 'haar (d’r)', 'haar moeder', 'haar huis'],
          ['u', 'uw', 'uw docent', 'uw lokaal'],
          ['wij / we', 'ons / onze', 'onze kantine (de)', 'ons kopje (het), onze vrienden (mv)'],
          ['jullie', 'jullie', 'jullie familie', 'jullie huis'],
          ['zij / ze (mv.)', 'hun', 'hun ouders', 'hun rooster']
        ]
      }
    ],
    examples: [
      { dutch: 'Mijn zus heeft blond haar.', english: 'My sister has blonde hair.' },
      { dutch: 'Wat is jouw achternaam?', english: 'What is your surname?' },
      { dutch: 'Dit is ons huis en dit zijn onze kinderen.', english: 'This is our house (het) and these are our children (mv).' },
      { dutch: 'Zijn ouders wonen in Duitsland.', english: 'His parents live in Germany.' },
      { dutch: 'Haar man werkt in Amsterdam.', english: 'Her husband works in Amsterdam.' }
    ]
  },
  {
    id: 'h2_gram_3',
    title: '3. Klokkijken in het Nederlands (De Klok)',
    summary: 'Nederlands deelt het uur in twee helften rond het hele en halve uur: over, voor, en relatief aan half!',
    ruleExplanation: `Klokkijken in het Nederlands is uniek omdat het de tijd oriënteert rond **half**!
1. **Heel uur**: Het is 3.00 uur -> *Het is drie uur.*
2. **Minuten 1 t/m 14**: **over** het vorige hele uur.
   - 3.10 -> *Het is tien over drie.*
3. **Kwart over**: 15 minuten over.
   - 3.15 -> *Het is kwart over drie.*
4. **Minuten 16 t/m 29**: **voor half** het KOMENDE uur!
   - 3.20 -> *Het is tien voor half vier* (10 min vóór 3.30!).
   - 3.25 -> *Het is vijf voor half vier.*
5. **Half uur**: *Het is half + VOLGEND uur!*
   - 3.30 -> *Het is half vier* (letterlijk: halverwege naar 4 uur!).
6. **Minuten 31 t/m 44**: **over half**!
   - 3.35 -> *Het is vijf over half vier.*
   - 3.40 -> *Het is tien over half vier.*
7. **Kwart voor**: 45 minuten.
   - 3.45 -> *Het is kwart voor vier.*
8. **Minuten 46 t/m 59**: **voor** het komende hele uur.
   - 3.50 -> *Het is tien voor vier.*`,
    tables: [
      {
        headers: ['Digitale tijd', 'Nederlands analoog', 'Logica / Uitleg'],
        rows: [
          ['10:00', 'tien uur', 'Heel uur'],
          ['10:05', 'vijf over tien', '5 min over het hele uur'],
          ['10:15', 'kwart over tien', 'Kwartier over'],
          ['10:20', 'tien voor half elf', '10 min vóór half 11'],
          ['10:25', 'vijf voor half elf', '5 min vóór half 11'],
          ['10:30', 'half elf', 'Op de helft naar 11!'],
          ['10:35', 'vijf over half elf', '5 min na half 11'],
          ['10:40', 'tien over half elf', '10 min na half 11'],
          ['10:45', 'kwart voor elf', 'Kwartier voor 11'],
          ['10:55', 'vijf voor elf', '5 min voor 11']
        ]
      }
    ],
    examples: [
      { dutch: 'Hoe laat is het? — Het is kwart over elf.', english: 'What time is it? — It is quarter past eleven (11:15).' },
      { dutch: 'De les begint om half negen.', english: 'The class starts at half past eight (8:30).' },
      { dutch: 'Het is tien voor half twee.', english: "It's twenty past one (1:20 - literally 10 to half 2)." }
    ]
  },
  {
    id: 'h2_gram_4',
    title: '4. Vraagwoorden (Interrogatieve pronomina)',
    summary: 'De belangrijkste vraagwoorden om gerichte informatie te vragen.',
    ruleExplanation: `Vraagwoorden staan ALTIJD op positie 1 in een vraagzin. Daarna volgt direct de persoonsvorm (positie 2):
• **Wie**: personen (*Wie is dat?*)
• **Wat**: dingen of acties (*Wat drink je?*)
• **Waar**: plaats / locatie (*Waar woon je?*)
• **Waarheen / Waarnaartoe**: richting (*Waar ga je naartoe?*)
• **Waarvandaan**: herkomst (*Waar kom je vandaan?*)
• **Wanneer**: tijd (*Wanneer ben je jarig?*)
• **Hoe**: manier of toestand (*Hoe heet je? Hoe gaat het?*)
• **Waarom**: reden of oorzaak (*Waarom leer je Nederlands?*)
• **Hoe laat**: specifiek tijdstip op de klok (*Hoe laat begint de film?*)
• **Hoe lang**: duur (*Hoe lang woon je hier al?*)
• **Welk / Welke**: keuze (*Welke dag is het? Welk kopje wil je?*)`,
    tables: [
      {
        headers: ['Vraagwoord', 'Betekenis', 'Voorbeeld in een zin'],
        rows: [
          ['Wie', 'Who', 'Wie is jouw docent?'],
          ['Wat', 'What', 'Wat drink je?'],
          ['Waar', 'Where', 'Waar zitten Susy en Edit?'],
          ['Wanneer', 'When', 'Wanneer is Edit jarig?'],
          ['Hoe', 'How', 'Hoe spel je jouw achternaam?'],
          ['Waarom', 'Why', 'Waarom moeten we naar de les?'],
          ['Hoe laat', 'What time', 'Hoe laat is het eigenlijk?'],
          ['Welke / Welk', 'Which', 'Welke dag is het vandaag?']
        ]
      }
    ],
    examples: [
      { dutch: 'Hoe laat is het eigenlijk? — Het is 11.00 uur.', english: 'What time is it actually? — It is 11:00.' },
      { dutch: 'Waarom drink je koffie? — Omdat ik moe ben.', english: 'Why do you drink coffee? — Because I am tired.' },
      { dutch: 'Welke dag is het vandaag? — Het is donderdag.', english: 'Which day is it today? — It is Thursday.' }
    ]
  },
  {
    id: 'h2_gram_5',
    title: '5. Preposities bij Tijd en Datum (om, op, in)',
    summary: 'De juiste voorzetsels voor kloktijd, dagen, data, maanden en seizoenen.',
    ruleExplanation: `In het Nederlands gebruik je vaste preposities bij tijdsbepalingen:
• **om**: bij specifieke kloktijd (*om 11.00 uur, om half negen, om kwart over drie*).
• **op**: bij dagen van de week, dagdelen en specifieke data (*op maandag, op donderdagavond, op 20 augustus*).
  *(Let op: 's ochtends, 's middags, 's avonds, 's nachts zonder 'op')*
• **in**: bij maanden, jaargetijden/seizoenen en jaren (*in augustus, in de zomer, in de lente, in 2024*).
• **van ... tot**: begin en eindpunt (*van 9.00 tot 17.00 uur, van maandag tot vrijdag*).`,
    tables: [
      {
        headers: ['Prepositie', 'Gebruik bij', 'Voorbeelden'],
        rows: [
          ['om', 'Kloktijd', 'om 8.30 uur, om kwart over elf, om twaalf uur'],
          ['op', 'Dagen & exacte data', 'op donderdag, op zaterdag, op 21 augustus'],
          ['in', 'Maanden, seizoenen, jaren', 'in augustus, in de winter, in 2025'],
          ['van ... tot', 'Tijdsspanne', 'van 11.00 tot 12.00 uur, van juli tot september']
        ]
      }
    ],
    examples: [
      { dutch: 'De les begint om 11.00 uur.', english: 'The lesson starts at 11:00.' },
      { dutch: 'Zij is op 21 augustus jarig.', english: 'Her birthday is on August 21st.' },
      { dutch: 'In de zomer gaan we op vakantie.', english: 'In the summer we go on holiday.' }
    ]
  }
];

export const CHAPTER_2_DATA: CustomLessonData = {
  id: 'hoofdstuk_2',
  chapterNumber: 'Hoofdstuk 2',
  chapterTitle: 'In de kantine',
  description: 'Pauze in de kantine, kennismaken met medestudenten, familieleden, uiterlijk beschrijven, klokkijken, dagen, maanden, seizoenen en tijdsbepalingen, possessieve pronomen en zinsbouw (hoofdzin & inversie).',
  language: 'Nederlands',
  createdAt: 1727650000000,
  dialogue: DIALOGUE_DATA,
  vocabulary: VOCABULARY_LIST,
  grammarPoints: CHAPTER_2_GRAMMAR,
  exercises: [
    {
      id: 'opdracht_1_tekstvragen',
      title: 'Opdracht 1: Vragen over de dialoog in de kantine',
      instruction: 'Beantwoord de vragen over de tekst op blz. 32.',
      items: OPDRACHT_1
    },
    {
      id: 'opdracht_3_vraagwoorden',
      title: 'Opdracht 3: Vul het juiste vraagwoord in',
      instruction: 'Kies uit: Wie, Wat, Waar, Wanneer, Hoe, Welke, Hoe laat.',
      items: OPDRACHT_3
    },
    {
      id: 'opdracht_4_possessiva',
      title: 'Opdracht 4: Bezittelijke voornaamwoorden (mijn, jouw, haar, zijn...)',
      instruction: 'Vul het juiste possessief pronomen in.',
      items: OPDRACHT_4
    },
    {
      id: 'opdracht_10_preposities',
      title: 'Opdracht 10: Preposities bij tijd en datum (op, om, in)',
      instruction: 'Vul in: op, om of in.',
      items: OPDRACHT_10
    }
  ],
  pronunciation: {
    title: 'Uitspraak: Korte a /ɑ/ versus Lange aa /a:/',
    soundFocus: 'a [ɑ] (acht, wat, kantine) vs. aa / a- [a:] (jaar, plaats, vader)',
    ruleExplanation: 'In een gesloten lettergreep (eindigend op een medeklinker) is een enkele klinker kort (bad, man). In een open lettergreep (eindigend op klinker) is een enkele klinker lang (va-der, ma-ken). Dubbele letters aa blijven altijd lang (plaats, maand).',
    wordList: PRONUNCIATION_WORDS_A.map(w => w.word),
    minimalPairs: PRONUNCIATION_PAIRS.map(p => ({
      word1: p.shortWord,
      word2: p.longWord,
      contrast: `${p.shortMeaning} vs ${p.longMeaning}`
    }))
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 2: In de kantine',
    passingScore: 70,
    questions: CHAPTER_2_EXAM_QUESTIONS
  },
  culturalOrPracticalNote: 'In Nederland is de lunch vaak een korte pauze in de kantine van 30 minuten met een broodje ("boterham") en een kop koffie of melk. Nederlanders hechten veel waarde aan punctualiteit ("op tijd komen").'
};
