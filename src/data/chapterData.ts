export interface DialogueLine {
  id: number;
  speaker: string;
  dutch: string;
  english: string;
  notes?: string;
  keyWords?: string[];
}

export interface VocabWord {
  id: string;
  dutch: string;
  english: string;
  category: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'phrase' | 'preposition';
  article?: 'de' | 'het';
  plural?: string;
  exampleSentence?: string;
  exampleEnglish?: string;
  tip?: string;
}

export interface ExerciseItem {
  id: number;
  prompt: string;
  subPrompt?: string;
  context?: string;
  answer: string;
  acceptableAnswers?: string[];
  options?: string[];
  explanation: string;
}

export const DIALOGUE_DATA: DialogueLine[] = [
  {
    id: 1,
    speaker: 'Susy',
    dutch: 'Is deze plaats vrij?',
    english: 'Is this seat free / available?',
    notes: 'Inversion question (Verb "Is" in position 1). "de plaats" = seat/place.',
    keyWords: ['plaats', 'vrij', 'deze']
  },
  {
    id: 2,
    speaker: 'Edit',
    dutch: 'Ja hoor.',
    english: 'Yes, sure! / Of course.',
    notes: '"Hoor" is a conversational particle that softens responses or confirms politely.',
    keyWords: ['ja hoor']
  },
  {
    id: 3,
    speaker: 'Susy',
    dutch: 'Zo, een lekker kopje koffie.',
    english: 'Ah, a nice cup of coffee.',
    notes: '"het kopje" is the diminutive of "de kop" (cup). "Lekker" means tasty, delicious, or pleasant.',
    keyWords: ['lekker', 'kopje', 'koffie']
  },
  {
    id: 4,
    speaker: 'Edit',
    dutch: 'Woon je al lang in Utrecht?',
    english: 'Have you lived in Utrecht for a long time?',
    notes: 'Literally: "Live you already long in Utrecht?" Notice V1 in yes/no question.',
    keyWords: ['woon', 'al lang', 'in']
  },
  {
    id: 5,
    speaker: 'Susy',
    dutch: 'Nee, pas drie dagen, of vier. Welke dag is het eigenlijk vandaag?',
    english: 'No, only three days, or four. What day is it actually today?',
    notes: '"Pas" means only/just in terms of time. "Eigenlijk" means actually / really.',
    keyWords: ['pas', 'dagen', 'welke', 'eigenlijk', 'vandaag']
  },
  {
    id: 6,
    speaker: 'Edit',
    dutch: 'Het is donderdag 20 augustus. Morgen ben ik jarig.',
    english: "It is Thursday August 20th. Tomorrow is my birthday.",
    notes: 'Notice inversion in "Morgen ben ik jarig": Time word first ("Morgen"), so Verb ("ben") comes before Subject ("ik").',
    keyWords: ['donderdag', 'augustus', 'morgen', 'jarig']
  },
  {
    id: 7,
    speaker: 'Susy',
    dutch: 'Wat leuk! Ik ben in december jarig, dus in de winter. Krijg je nog bezoek?',
    english: "How nice! My birthday is in December, so in the winter. Are you getting any visitors?",
    notes: '"in" with months and seasons (in december, in de winter). "bezoek krijgen" = to receive visitors.',
    keyWords: ['wat leuk', 'december', 'winter', 'bezoek', 'krijgen']
  },
  {
    id: 8,
    speaker: 'Edit',
    dutch: 'Ja, mijn broer komt.',
    english: 'Yes, my brother is coming.',
    notes: '"mijn" = my (possessive pronoun). "broer" = brother.',
    keyWords: ['mijn', 'broer', 'komt']
  },
  {
    id: 9,
    speaker: 'Susy',
    dutch: 'Wie is jonger? Hij of jij?',
    english: 'Who is younger? He or you?',
    notes: '"jonger" is the comparative form of "jong" (+er). "Wie" = who.',
    keyWords: ['wie', 'jonger', 'hij', 'jij']
  },
  {
    id: 10,
    speaker: 'Edit',
    dutch: 'Hij is jonger, maar wel langer.',
    english: 'He is younger, but definitely taller.',
    notes: '"wel" emphasizes contrast ("certainly / indeed"). "lang" -> "langer" (tall/longer).',
    keyWords: ['maar', 'wel', 'langer']
  },
  {
    id: 11,
    speaker: 'Susy',
    dutch: 'Heb je nog meer broers of zussen?',
    english: 'Do you have any more brothers or sisters?',
    notes: '"nog meer" = any more. Plurals: broer -> broers, zus -> zussen.',
    keyWords: ['nog meer', 'broers', 'zussen']
  },
  {
    id: 12,
    speaker: 'Edit',
    dutch: 'Ja, ik heb nog een zus. Kijk, hier is een foto.',
    english: 'Yes, I have another sister. Look, here is a photo.',
    notes: '"nog een" = another / one more. "Kijk" = imperative of kijken (look).',
    keyWords: ['zus', 'kijk', 'foto']
  },
  {
    id: 13,
    speaker: 'Susy',
    dutch: 'Goh, ze is een heel ander type. Ze heeft kort, blond haar en jij donker haar. Komen je ouders ook op bezoek?',
    english: 'Gosh, she is a completely different type. She has short, blonde hair and you have dark hair. Are your parents also visiting?',
    notes: '"Goh" is an interjection like "Gosh/Wow". "op bezoek komen" = to come visit.',
    keyWords: ['goh', 'ander type', 'kort', 'blond', 'donker haar', 'ouders']
  },
  {
    id: 14,
    speaker: 'Edit',
    dutch: 'Nee, ze zijn op dit moment in Indonesië.',
    english: 'No, they are in Indonesia at the moment.',
    notes: '"op dit moment" = at this moment / right now.',
    keyWords: ['op dit moment', 'Indonesië']
  },
  {
    id: 15,
    speaker: 'Susy',
    dutch: 'Wat doen ze daar? Zijn ze daar op vakantie?',
    english: 'What are they doing there? Are they there on holiday?',
    notes: '"op vakantie" = on vacation / holiday. "Wat doen ze daar?" = What do they do there?',
    keyWords: ['doen', 'daar', 'op vakantie']
  },
  {
    id: 16,
    speaker: 'Edit',
    dutch: 'Ja, en mijn vader is daar ook voor zijn werk.',
    english: 'Yes, and my father is also there for his work.',
    notes: '"voor zijn werk" = for his work. "zijn" = his.',
    keyWords: ['vader', 'zijn werk']
  },
  {
    id: 17,
    speaker: 'Susy',
    dutch: 'Welk seizoen is het daar nu? Wanneer is het daar zomer?',
    english: 'Which season is it there now? When is it summer there?',
    notes: '"Welk" (used with het-words like "het seizoen"). "Wanneer" = when.',
    keyWords: ['welk', 'seizoen', 'wanneer', 'zomer']
  },
  {
    id: 18,
    speaker: 'Edit',
    dutch: 'Ik weet het niet. Maar vertel eens over jouw familie.',
    english: "I don't know. But do tell me about your family.",
    notes: '"vertel eens" = do tell / tell me. "jouw" = your (stressed form of je).',
    keyWords: ['weet niet', 'vertel eens', 'over', 'jouw familie']
  },
  {
    id: 19,
    speaker: 'Susy',
    dutch: 'Dat wil ik wel, maar hoe laat is het eigenlijk?',
    english: "I would like to, but what time is it actually?",
    notes: '"Hoe laat is het?" = standard Dutch question for "What time is it?".',
    keyWords: ['wil wel', 'hoe laat', 'eigenlijk']
  },
  {
    id: 20,
    speaker: 'Edit',
    dutch: 'Het is 11.00 uur. We moeten weer naar de les.',
    english: "It's 11:00 o'clock. We have to go back to class.",
    notes: '"uur" = o\'clock/hour. "moeten" = must / have to. "weer" = again.',
    keyWords: ['uur', 'moeten', 'weer', 'naar de les']
  }
];

export const VOCABULARY_LIST: VocabWord[] = [
  // Canteen & Dialogue Essentials
  {
    id: 'zitten',
    dutch: 'zitten',
    english: 'to sit / are sitting',
    category: 'canteen',
    partOfSpeech: 'verb',
    exampleSentence: 'Susy en Edit zitten in de kantine.',
    exampleEnglish: 'Susy and Edit are sitting in the canteen.'
  },
  {
    id: 'kantine',
    dutch: 'kantine',
    article: 'de',
    english: 'canteen / cafeteria',
    category: 'canteen',
    partOfSpeech: 'noun',
    plural: 'kantines',
    exampleSentence: 'Is deze plaats in de kantine vrij?',
    exampleEnglish: 'Is this seat in the canteen free?'
  },
  {
    id: 'plaats',
    dutch: 'plaats',
    article: 'de',
    english: 'place / seat',
    category: 'canteen',
    partOfSpeech: 'noun',
    plural: 'plaatsen',
    exampleSentence: 'Is deze plaats vrij?',
    exampleEnglish: 'Is this seat free?'
  },
  {
    id: 'vrij',
    dutch: 'vrij',
    english: 'free / vacant / off',
    category: 'canteen',
    partOfSpeech: 'adjective',
    exampleSentence: 'Deze stoel is vrij.',
    exampleEnglish: 'This chair is free.'
  },
  {
    id: 'ja_hoor',
    dutch: 'ja hoor',
    english: 'yes, sure / of course',
    category: 'canteen',
    partOfSpeech: 'phrase',
    tip: '"Hoor" makes confirmations friendlier.'
  },
  {
    id: 'lekker',
    dutch: 'lekker',
    english: 'nice / delicious / tasty',
    category: 'canteen',
    partOfSpeech: 'adjective',
    exampleSentence: 'Zo, een lekker kopje koffie.',
    exampleEnglish: 'Ah, a nice cup of coffee.'
  },
  {
    id: 'kopje',
    dutch: 'kopje',
    article: 'het',
    english: 'cup (diminutive of de kop)',
    category: 'canteen',
    partOfSpeech: 'noun',
    plural: 'kopjes',
    exampleSentence: 'Ik drink een kopje koffie.',
    exampleEnglish: 'I am drinking a cup of coffee.'
  },
  {
    id: 'koffie',
    dutch: 'koffie',
    article: 'de',
    english: 'coffee',
    category: 'canteen',
    partOfSpeech: 'noun',
    exampleSentence: 'De koffie smaakt heerlijk.',
    exampleEnglish: 'The coffee tastes delicious.'
  },
  {
    id: 'al_lang',
    dutch: 'al lang',
    english: 'for a long time / already long',
    category: 'canteen',
    partOfSpeech: 'adverb',
    exampleSentence: 'Woon je al lang in Nederland?',
    exampleEnglish: 'Have you lived in the Netherlands for a long time?'
  },
  {
    id: 'pas',
    dutch: 'pas',
    english: 'only / just (with time and numbers)',
    category: 'canteen',
    partOfSpeech: 'adverb',
    tip: 'Contrast with "alleen" (alone/only). Use "pas" for time/age: "pas drie dagen".',
    exampleSentence: 'Ik woon hier pas twee weken.',
    exampleEnglish: 'I have only lived here for two weeks.'
  },
  {
    id: 'eigenlijk',
    dutch: 'eigenlijk',
    english: 'actually / really',
    category: 'canteen',
    partOfSpeech: 'adverb',
    exampleSentence: 'Welke dag is het eigenlijk vandaag?',
    exampleEnglish: 'What day is it actually today?'
  },
  {
    id: 'jarig_zijn',
    dutch: 'jarig zijn (ik ben jarig)',
    english: "to have one's birthday (it's my birthday)",
    category: 'time',
    partOfSpeech: 'phrase',
    exampleSentence: 'Morgen ben ik jarig!',
    exampleEnglish: "Tomorrow is my birthday!"
  },
  {
    id: 'wat_leuk',
    dutch: 'wat leuk!',
    english: 'how nice! / that sounds fun!',
    category: 'canteen',
    partOfSpeech: 'phrase'
  },
  {
    id: 'krijgen',
    dutch: 'krijgen',
    english: 'to get / to receive',
    category: 'canteen',
    partOfSpeech: 'verb',
    exampleSentence: 'Krijg je nog bezoek?',
    exampleEnglish: 'Are you getting any visitors?'
  },
  {
    id: 'bezoek',
    dutch: 'bezoek',
    article: 'het',
    english: 'visit / visitors / company',
    category: 'canteen',
    partOfSpeech: 'noun',
    exampleSentence: 'Mijn broer komt op bezoek.',
    exampleEnglish: 'My brother is coming on a visit.'
  },
  {
    id: 'foto',
    dutch: 'foto',
    article: 'de',
    english: 'photo / picture',
    category: 'canteen',
    partOfSpeech: 'noun',
    plural: "foto's",
    exampleSentence: 'Kijk, hier is een foto van mijn familie.',
    exampleEnglish: 'Look, here is a photo of my family.'
  },
  {
    id: 'vakantie',
    dutch: 'vakantie',
    article: 'de',
    english: 'holiday / vacation',
    category: 'canteen',
    partOfSpeech: 'noun',
    exampleSentence: 'Zijn ze daar op vakantie?',
    exampleEnglish: 'Are they there on vacation?'
  },
  {
    id: 'werk',
    dutch: 'werk',
    article: 'het',
    english: 'work / job',
    category: 'canteen',
    partOfSpeech: 'noun',
    exampleSentence: 'Mijn vader is daar voor zijn werk.',
    exampleEnglish: 'My father is there for his work.'
  },
  {
    id: 'moeten',
    dutch: 'moeten',
    english: 'must / have to / should',
    category: 'canteen',
    partOfSpeech: 'verb',
    exampleSentence: 'We moeten weer naar de les.',
    exampleEnglish: 'We have to go back to class.'
  },
  {
    id: 'vertellen',
    dutch: 'vertellen',
    english: 'to tell',
    category: 'canteen',
    partOfSpeech: 'verb',
    exampleSentence: 'Vertel eens over jouw familie.',
    exampleEnglish: 'Tell me about your family.'
  },

  // Family relations (2.3)
  {
    id: 'gezin',
    dutch: 'gezin',
    article: 'het',
    english: 'immediate family (household: parents & children)',
    category: 'family',
    partOfSpeech: 'noun',
    tip: 'Important in Dutch: "gezin" = nuclear family, while "familie" = extended family.'
  },
  {
    id: 'familie',
    dutch: 'familie',
    article: 'de',
    english: 'extended family (relatives)',
    category: 'family',
    partOfSpeech: 'noun'
  },
  {
    id: 'ouders',
    dutch: 'ouders',
    article: 'de',
    english: 'parents',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'ouders'
  },
  {
    id: 'vader',
    dutch: 'vader',
    article: 'de',
    english: 'father',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'vaders'
  },
  {
    id: 'moeder',
    dutch: 'moeder',
    article: 'de',
    english: 'mother',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'moeders'
  },
  {
    id: 'echtgenoot',
    dutch: 'echtgenoot / man',
    article: 'de',
    english: 'husband / spouse',
    category: 'family',
    partOfSpeech: 'noun'
  },
  {
    id: 'echtgenote',
    dutch: 'echtgenote / vrouw',
    article: 'de',
    english: 'wife / spouse',
    category: 'family',
    partOfSpeech: 'noun'
  },
  {
    id: 'kind',
    dutch: 'kind',
    article: 'het',
    english: 'child',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'kinderen'
  },
  {
    id: 'zoon',
    dutch: 'zoon',
    article: 'de',
    english: 'son',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'zonen / zoons'
  },
  {
    id: 'dochter',
    dutch: 'dochter',
    article: 'de',
    english: 'daughter',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'dochters'
  },
  {
    id: 'broer',
    dutch: 'broer',
    article: 'de',
    english: 'brother',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'broers'
  },
  {
    id: 'zus',
    dutch: 'zus',
    article: 'de',
    english: 'sister',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'zussen'
  },
  {
    id: 'schoonzus',
    dutch: 'schoonzus',
    article: 'de',
    english: 'sister-in-law',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'schoonzussen'
  },
  {
    id: 'zwager',
    dutch: 'zwager',
    article: 'de',
    english: 'brother-in-law',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'zwagers'
  },
  {
    id: 'opa',
    dutch: 'opa (grootvader)',
    article: 'de',
    english: 'grandfather',
    category: 'family',
    partOfSpeech: 'noun',
    plural: "opa's"
  },
  {
    id: 'oma',
    dutch: 'oma (grootmoeder)',
    article: 'de',
    english: 'grandmother',
    category: 'family',
    partOfSpeech: 'noun',
    plural: "oma's"
  },
  {
    id: 'kleinkind',
    dutch: 'kleinkind',
    article: 'het',
    english: 'grandchild',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'kleinkinderen'
  },
  {
    id: 'oom',
    dutch: 'oom',
    article: 'de',
    english: 'uncle',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'ooms'
  },
  {
    id: 'tante',
    dutch: 'tante',
    article: 'de',
    english: 'aunt',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'tantes'
  },
  {
    id: 'neef',
    dutch: 'neef',
    article: 'de',
    english: 'nephew / male cousin',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'neven',
    tip: 'In Dutch, "neef" means both nephew AND male cousin!'
  },
  {
    id: 'nicht',
    dutch: 'nicht',
    article: 'de',
    english: 'niece / female cousin',
    category: 'family',
    partOfSpeech: 'noun',
    plural: 'nichten',
    tip: 'In Dutch, "nicht" means both niece AND female cousin!'
  },

  // Describing people (2.4)
  {
    id: 'jong',
    dutch: 'jong / jonger',
    english: 'young / younger',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Hij is jonger dan ik.',
    exampleEnglish: 'He is younger than me.'
  },
  {
    id: 'oud',
    dutch: 'oud / ouder',
    english: 'old / older',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Ik ben ouder dan mijn broer.',
    exampleEnglish: 'I am older than my brother.'
  },
  {
    id: 'lang',
    dutch: 'lang / langer',
    english: 'tall (person) / long',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Hij is langer dan zijn zus.',
    exampleEnglish: 'He is taller than his sister.'
  },
  {
    id: 'klein',
    dutch: 'klein',
    english: 'short (in stature) / small',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Ze is klein.',
    exampleEnglish: 'She is short / small.'
  },
  {
    id: 'kort',
    dutch: 'kort',
    english: 'short (length)',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Ze heeft kort blond haar.',
    exampleEnglish: 'She has short blonde hair.'
  },
  {
    id: 'blond',
    dutch: 'blond',
    english: 'blonde',
    category: 'description',
    partOfSpeech: 'adjective'
  },
  {
    id: 'donker',
    dutch: 'donker',
    english: 'dark',
    category: 'description',
    partOfSpeech: 'adjective',
    exampleSentence: 'Susy heeft donker haar.',
    exampleEnglish: 'Susy has dark hair.'
  },
  {
    id: 'haar',
    dutch: 'haar',
    article: 'het',
    english: 'hair',
    category: 'description',
    partOfSpeech: 'noun'
  },
  {
    id: 'bril',
    dutch: 'bril',
    article: 'de',
    english: 'pair of glasses',
    category: 'description',
    partOfSpeech: 'noun',
    exampleSentence: 'Hij heeft een bril.',
    exampleEnglish: 'He wears glasses.'
  },

  // Time & Calendar
  {
    id: 'hoe_laat',
    dutch: 'hoe laat is het?',
    english: 'what time is it?',
    category: 'time',
    partOfSpeech: 'phrase'
  },
  {
    id: 'uur',
    dutch: 'uur',
    article: 'het',
    english: "hour / o'clock",
    category: 'time',
    partOfSpeech: 'noun'
  },
  {
    id: 'halfuur',
    dutch: 'halfuur',
    article: 'het',
    english: 'half an hour',
    category: 'time',
    partOfSpeech: 'noun'
  },
  {
    id: 'kwartier',
    dutch: 'kwartier',
    article: 'het',
    english: 'quarter of an hour (15 mins)',
    category: 'time',
    partOfSpeech: 'noun'
  },
  {
    id: 'minuut',
    dutch: 'minuut',
    article: 'de',
    english: 'minute',
    category: 'time',
    partOfSpeech: 'noun',
    plural: 'minuten'
  },
  {
    id: 'vandaag',
    dutch: 'vandaag',
    english: 'today',
    category: 'time',
    partOfSpeech: 'adverb'
  },
  {
    id: 'morgen',
    dutch: 'morgen',
    english: 'tomorrow (or: morning)',
    category: 'time',
    partOfSpeech: 'adverb'
  },
  {
    id: 'overmorgen',
    dutch: 'overmorgen',
    english: 'the day after tomorrow',
    category: 'time',
    partOfSpeech: 'adverb'
  },
  {
    id: 'gisteren',
    dutch: 'gisteren',
    english: 'yesterday',
    category: 'time',
    partOfSpeech: 'adverb'
  },
  {
    id: 'eergisteren',
    dutch: 'eergisteren',
    english: 'the day before yesterday',
    category: 'time',
    partOfSpeech: 'adverb'
  },
  {
    id: 'seizoen',
    dutch: 'seizoen',
    article: 'het',
    english: 'season',
    category: 'time',
    partOfSpeech: 'noun',
    plural: 'seizoenen'
  }
];

export const DAYS_OF_WEEK = [
  { dutch: 'maandag', english: 'Monday' },
  { dutch: 'dinsdag', english: 'Tuesday' },
  { dutch: 'woensdag', english: 'Wednesday' },
  { dutch: 'donderdag', english: 'Thursday' },
  { dutch: 'vrijdag', english: 'Friday' },
  { dutch: 'zaterdag', english: 'Saturday' },
  { dutch: 'zondag', english: 'Sunday' }
];

export const MONTHS = [
  { dutch: 'januari', english: 'January' },
  { dutch: 'februari', english: 'February' },
  { dutch: 'maart', english: 'March' },
  { dutch: 'april', english: 'April' },
  { dutch: 'mei', english: 'May' },
  { dutch: 'juni', english: 'June' },
  { dutch: 'juli', english: 'July' },
  { dutch: 'augustus', english: 'August' },
  { dutch: 'september', english: 'September' },
  { dutch: 'oktober', english: 'October' },
  { dutch: 'november', english: 'November' },
  { dutch: 'december', english: 'December' }
];

export const SEASONS = [
  { dutch: 'de winter', english: 'winter' },
  { dutch: 'de lente / het voorjaar', english: 'spring' },
  { dutch: 'de zomer', english: 'summer' },
  { dutch: 'de herfst / het najaar', english: 'autumn / fall' }
];

export const QUESTION_WORDS = [
  { word: 'Wie', meaning: 'Who', example: 'Wie ben jij? / Wie is jonger?', tip: 'Refers to a person' },
  { word: 'Wat', meaning: 'What', example: 'Wat doe je vandaag? / Wat is je adres?', tip: 'Refers to things/actions' },
  { word: 'Waar', meaning: 'Where', example: 'Waar woon je? / Waar zijn de docenten?', tip: 'Refers to location' },
  { word: 'Waarvandaan / Waar ... vandaan', meaning: 'Where from', example: 'Waar kom je vandaan?', tip: 'Often separated: Waar ... vandaan' },
  { word: 'Waarom', meaning: 'Why', example: 'Waarom zijn je ouders in Indonesië?', tip: 'Asks for a reason' },
  { word: 'Wanneer', meaning: 'When', example: 'Wanneer is Edit jarig?', tip: 'Asks about time/date' },
  { word: 'Hoe', meaning: 'How', example: 'Hoe heet jij? / Hoe laat is het?', tip: 'Manner, name, or time' },
  { word: 'Hoeveel', meaning: 'How many / How much', example: 'Hoeveel broers heb je?', tip: 'Quantity or number' },
  { word: 'Welk / Welke', meaning: 'Which / What', example: 'Welke dag is het? / Welk land?', tip: '"Welke" for de-words & plurals; "Welk" for het-words' }
];

export const POSSESSIVE_PRONOUNS = [
  { subject: 'ik', possessive: 'mijn', example: 'mijn broer, mijn boek', note: 'my' },
  { subject: 'jij / je', possessive: 'jouw / je', example: 'jouw zus, je ouders', note: 'your (informal singular; "jouw" is stressed, "je" is unstressed)' },
  { subject: 'u', possessive: 'uw', example: 'uw adres, uw familie', note: 'your (polite/formal singular & plural)' },
  { subject: 'hij', possessive: 'zijn', example: 'zijn werk, zijn vader', note: 'his' },
  { subject: 'zij / ze (singular)', possessive: 'haar', example: 'haar foto, haar achternaam', note: 'her' },
  { subject: 'wij / we', possessive: 'ons / onze', example: 'ons adres (het-woord) / onze les (de-woord / plural)', note: 'our — USE "ons" with het-words, "onze" with de-words and plurals!' },
  { subject: 'jullie', possessive: 'jullie (or je)', example: 'jullie docent, jullie vakantie', note: 'your (plural)' },
  { subject: 'zij / ze (plural)', possessive: 'hun', example: 'hun familie, hun docent', note: 'their' }
];

// Opdracht 1: Questions on dialogue
export const OPDRACHT_1: ExerciseItem[] = [
  {
    id: 1,
    prompt: 'Waar zijn Susy en Edit?',
    context: 'Susy en Edit hebben pauze en...',
    answer: 'In de kantine.',
    acceptableAnswers: ['in de kantine', 'in de kantine.', 'ze zijn in de kantine', 'ze zijn in de kantine.'],
    explanation: 'De tekst begint met: "Susy en Edit hebben pauze en zitten in de kantine."'
  },
  {
    id: 2,
    prompt: 'Wat drinkt Susy?',
    context: 'Susy zegt: "Zo, een lekker..."',
    answer: 'Een kopje koffie.',
    acceptableAnswers: ['een kopje koffie', 'koffie', 'een kopje koffie.', 'ze drinkt een kopje koffie.'],
    explanation: 'Susy zegt: "Zo, een lekker kopje koffie."'
  },
  {
    id: 3,
    prompt: 'Woont Susy al lang in Utrecht?',
    context: 'Edit vraagt: "Woon je al lang in Utrecht?"',
    answer: 'Nee, pas drie of vier dagen.',
    acceptableAnswers: ['nee', 'nee, pas drie dagen', 'nee, pas drie of vier dagen', 'pas drie of vier dagen', 'nee, pas drie dagen, of vier.'],
    explanation: 'Susy antwoordt: "Nee, pas drie dagen, of vier."'
  },
  {
    id: 4,
    prompt: 'Welke dag is het in de tekst?',
    context: 'Edit antwoordt op de vraag welke dag het is...',
    answer: 'Donderdag 20 augustus.',
    acceptableAnswers: ['donderdag 20 augustus', 'het is donderdag 20 augustus', 'donderdag', 'donderdag 20 augustus.'],
    explanation: 'Edit zegt: "Het is donderdag 20 augustus."'
  },
  {
    id: 5,
    prompt: 'Wanneer is Edit jarig?',
    context: 'Edit vertelt over haar verjaardag...',
    answer: 'Morgen (vrijdag 21 augustus).',
    acceptableAnswers: ['morgen', 'morgen.', 'vrijdag 21 augustus', 'morgen (21 augustus)'],
    explanation: 'Edit zegt: "Morgen ben ik jarig." (21 augustus).'
  },
  {
    id: 6,
    prompt: 'Krijgt Edit bezoek?',
    context: 'Susy vraagt: "Krijg je nog bezoek?"',
    answer: 'Ja, haar broer komt.',
    acceptableAnswers: ['ja, haar broer komt', 'ja, mijn broer komt', 'ja', 'haar broer komt', 'ja, haar broer.'],
    explanation: 'Edit antwoordt: "Ja, mijn broer komt."'
  },
  {
    id: 7,
    prompt: 'Heeft Edit broers en zussen?',
    context: 'Edit vertelt wie ze in haar gezin heeft...',
    answer: 'Ja, ze heeft een broer en een zus.',
    acceptableAnswers: ['ja, een broer en een zus', 'ja', 'een broer en een zus', 'ze heeft een broer en een zus'],
    explanation: 'Edit zegt dat haar broer komt en: "Ja, ik heb nog een zus."'
  },
  {
    id: 8,
    prompt: 'Heeft Edit kort, blond haar?',
    context: 'Susy vergelijkt Edit met haar zus op de foto...',
    answer: 'Nee, haar zus heeft kort blond haar, Edit heeft donker haar.',
    acceptableAnswers: ['nee', 'nee, donker haar', 'nee, ze heeft donker haar', 'nee, haar zus heeft blond haar'],
    explanation: 'Susy zegt tegen Edit: "Ze [je zus] heeft kort, blond haar en jij donker haar."'
  },
  {
    id: 9,
    prompt: 'Komen de ouders van Edit op bezoek?',
    context: 'Susy vraagt naar haar ouders...',
    answer: 'Nee, ze zijn op dit moment in Indonesië.',
    acceptableAnswers: ['nee', 'nee, ze zijn in indonesie', 'nee, ze zijn in indonesië', 'nee, ze zijn op dit moment in indonesië.'],
    explanation: 'Edit antwoordt: "Nee, ze zijn op dit moment in Indonesië."'
  },
  {
    id: 10,
    prompt: 'Welk seizoen is het in Indonesië?',
    context: 'Susy vraagt welk seizoen het daar is...',
    answer: 'Edit weet het niet.',
    acceptableAnswers: ['edit weet het niet', 'ze weet het niet', 'ik weet het niet', 'niemand weet het', 'weet het niet'],
    explanation: 'Edit antwoordt letterlijk: "Ik weet het niet."'
  },
  {
    id: 11,
    prompt: 'Hoe laat is het in de tekst?',
    context: 'Aan het einde vraagt Susy naar de tijd...',
    answer: 'Het is 11.00 uur.',
    acceptableAnswers: ['11.00 uur', 'het is 11.00 uur', 'elf uur', '11:00', '11 uur'],
    explanation: 'Edit zegt: "Het is 11.00 uur. We moeten weer naar de les."'
  }
];

// Opdracht 3: Vraagwoordvragen invullen (Fill in the question word)
export const OPDRACHT_3: ExerciseItem[] = [
  {
    id: 1,
    prompt: '_______ heet jouw zus?',
    subPrompt: 'Antwoord: Mijn zus heet Sandra.',
    answer: 'Hoe',
    acceptableAnswers: ['Hoe', 'hoe'],
    options: ['Hoe', 'Wie', 'Wat', 'Waar'],
    explanation: 'Voor een naam vragen we altijd: "Hoe heet...?". ("Hoe heet jouw zus?")'
  },
  {
    id: 2,
    prompt: '_______ doe je vandaag?',
    subPrompt: 'Antwoord: Ik ga naar de cursus.',
    answer: 'Wat',
    acceptableAnswers: ['Wat', 'wat'],
    options: ['Wat', 'Waarom', 'Waar', 'Wie'],
    explanation: 'Als je naar een bezigheid of actie vraagt, gebruik je "Wat". ("Wat doe je vandaag?")'
  },
  {
    id: 3,
    prompt: '_______ woont Astrid?',
    subPrompt: 'Antwoord: Astrid woont in de Brugstraat.',
    answer: 'Waar',
    acceptableAnswers: ['Waar', 'waar'],
    options: ['Waar', 'Wie', 'Hoe', 'Wanneer'],
    explanation: 'Als je naar een plaats of straat vraagt, gebruik je "Waar". ("Waar woont Astrid?")'
  },
  {
    id: 4,
    prompt: '_______ cursus doe je?',
    subPrompt: 'Antwoord: Ik doe nu cursus 1.',
    answer: 'Welke',
    acceptableAnswers: ['Welke', 'welke', 'Welk'],
    options: ['Welke', 'Wat', 'Hoe', 'Waar'],
    explanation: '"Cursus" is een de-woord (de cursus), dus gebruiken we "Welke". ("Welke cursus doe je?")'
  },
  {
    id: 5,
    prompt: '_______ heeft mijn boek?',
    subPrompt: 'Antwoord: Ik. Ik heb jouw boek.',
    answer: 'Wie',
    acceptableAnswers: ['Wie', 'wie'],
    options: ['Wie', 'Wat', 'Waar', 'Hoe'],
    explanation: 'Als het antwoord een persoon is ("Ik"), vraag je met "Wie". ("Wie heeft mijn boek?")'
  },
  {
    id: 6,
    prompt: '_______ laat is het?',
    subPrompt: 'Antwoord: Het is nu tien voor twee.',
    answer: 'Hoe',
    acceptableAnswers: ['Hoe', 'hoe'],
    options: ['Hoe', 'Wat', 'Waar', 'Wanneer'],
    explanation: 'De vaste uitdrukking om naar de tijd te vragen is: "Hoe laat is het?".'
  },
  {
    id: 7,
    prompt: '_______ zijn de docenten?',
    subPrompt: 'Antwoord: De docenten zijn in de kantine.',
    answer: 'Waar',
    acceptableAnswers: ['Waar', 'waar'],
    options: ['Waar', 'Wie', 'Wat', 'Hoe'],
    explanation: 'Het antwoord geeft een locatie ("in de kantine"), dus gebruik je "Waar".'
  },
  {
    id: 8,
    prompt: '_______ komen Peter en Alice vandaan?',
    subPrompt: 'Antwoord: Peter en Alice komen uit Australië.',
    answer: 'Waar',
    acceptableAnswers: ['Waar', 'waar'],
    options: ['Waar', 'Wie', 'Wat', 'Waarvandaan'],
    explanation: 'In combinatie met "... vandaan" vraag je om herkomst: "Waar komen ... vandaan?".'
  },
  {
    id: 9,
    prompt: '_______ komt Patrick vandaan?',
    subPrompt: 'Antwoord: Patrick komt uit Maastricht.',
    answer: 'Waar',
    acceptableAnswers: ['Waar', 'waar'],
    options: ['Waar', 'Hoe', 'Wie', 'Wat'],
    explanation: '"Waar ... vandaan" vraagt naar herkomst ("uit Maastricht").'
  },
  {
    id: 10,
    prompt: '_______ dag is het?',
    subPrompt: 'Antwoord: Het is vandaag maandag.',
    answer: 'Welke',
    acceptableAnswers: ['Welke', 'welke'],
    options: ['Welke', 'Wat', 'Hoe', 'Waar'],
    explanation: '"Dag" is een de-woord (de dag), dus: "Welke dag is het?".'
  },
  {
    id: 11,
    prompt: 'Over _______ vakantie vertelt Jeroen?',
    subPrompt: 'Antwoord: Hij vertelt over zijn zomervakantie.',
    answer: 'welke',
    acceptableAnswers: ['welke', 'Welke', 'wat voor'],
    options: ['welke', 'wat', 'wie', 'hoeveel'],
    explanation: '"Vakantie" is een de-woord (de vakantie). "Over welke vakantie vertelt Jeroen?"'
  },
  {
    id: 12,
    prompt: 'Met _______ zit je in de kantine?',
    subPrompt: 'Antwoord: Ik zit met Petra in de kantine.',
    answer: 'wie',
    acceptableAnswers: ['wie', 'Wie'],
    options: ['wie', 'wat', 'waar', 'hoe'],
    explanation: '"Met wie" vraagt naar een persoon ("met Petra").'
  },
  {
    id: 13,
    prompt: '_______ is je broer in China?',
    subPrompt: 'Antwoord: Hij is daar voor zijn werk.',
    answer: 'Waarom',
    acceptableAnswers: ['Waarom', 'waarom'],
    options: ['Waarom', 'Waar', 'Wanneer', 'Hoe'],
    explanation: 'Het antwoord geeft de reden ("voor zijn werk"), dus vraag je: "Waarom...".'
  },
  {
    id: 14,
    prompt: '_______ zussen heb je?',
    subPrompt: 'Antwoord: Ik heb twee zussen.',
    answer: 'Hoeveel',
    acceptableAnswers: ['Hoeveel', 'hoeveel'],
    options: ['Hoeveel', 'Welke', 'Wie', 'Wat'],
    explanation: 'Het antwoord bevat een getal/aantal ("twee zussen"), dus vraag je met "Hoeveel".'
  }
];

// Opdracht 4: Possessief pronomen (Possessive pronouns)
export const OPDRACHT_4: ExerciseItem[] = [
  {
    id: 1,
    prompt: 'Wij wonen nu in Zwolle. _______ adres is Rozenstraat 8.',
    subPrompt: 'Onderwerp: Wij | Zelfstandig naamwoord: het adres',
    answer: 'Ons',
    acceptableAnswers: ['Ons', 'ons'],
    options: ['Ons', 'Onze', 'Hun', 'Mijn'],
    explanation: 'Let op! "Het adres" is een HET-woord. Bij "wij" gebruiken we "ons" voor het-woorden en "onze" voor de-woorden/meervoud.'
  },
  {
    id: 2,
    prompt: 'Ik woon in Amersfoort en _______ zus woont in Rotterdam.',
    subPrompt: 'Onderwerp: Ik | Zelfstandig naamwoord: zus',
    answer: 'mijn',
    acceptableAnswers: ['mijn', 'Mijn'],
    options: ['mijn', 'haar', 'zijn', 'onze'],
    explanation: 'Bij het onderwerp "Ik" hoort het bezittelijk voornaamwoord "mijn".'
  },
  {
    id: 3,
    prompt: 'Mevrouw Jansen, gaat u met _______ broer op vakantie?',
    subPrompt: 'Onderwerp: u (beleefd) | Zelfstandig naamwoord: broer',
    answer: 'uw',
    acceptableAnswers: ['uw', 'Uw'],
    options: ['uw', 'jouw', 'haar', 'zijn'],
    explanation: 'Bij de beleefdheidsvorm "u" hoort altijd "uw".'
  },
  {
    id: 4,
    prompt: 'Vera en Hilda, vertellen jullie eens over _______ vakantie.',
    subPrompt: 'Aangesproken personen: jullie | Zelfstandig naamwoord: vakantie',
    answer: 'jullie',
    acceptableAnswers: ['jullie', 'Jullie', 'je'],
    options: ['jullie', 'hun', 'onze', 'uw'],
    explanation: 'Bij "jullie" is het bezittelijk voornaamwoord ook "jullie" (of spreektaal "je").'
  },
  {
    id: 5,
    prompt: 'Dit is Farah en _______ achternaam is Ahmany.',
    subPrompt: 'Persoon: Farah (vrouw) | Zelfstandig naamwoord: achternaam',
    answer: 'haar',
    acceptableAnswers: ['haar', 'Haar'],
    options: ['haar', 'zijn', 'hun', 'uw'],
    explanation: 'Farah is een vrouw (zij/ze), dus gebruiken we "haar".'
  },
  {
    id: 6,
    prompt: 'Herman, de docent, spreekt met _______ buurman over de cursus.',
    subPrompt: 'Persoon: Herman (man) | Zelfstandig naamwoord: buurman',
    answer: 'zijn',
    acceptableAnswers: ['zijn', 'Zijn'],
    options: ['zijn', 'haar', 'hun', 'ons'],
    explanation: 'Herman is een man (hij), dus gebruiken we "zijn".'
  },
  {
    id: 7,
    prompt: 'Wij komen uit Polen en _______ cursus begint maandag.',
    subPrompt: 'Onderwerp: Wij | Zelfstandig naamwoord: de cursus',
    answer: 'onze',
    acceptableAnswers: ['onze', 'Onze'],
    options: ['onze', 'ons', 'hun', 'jullie'],
    explanation: '"Cursus" is een DE-woord (de cursus). Bij "wij" gebruiken we daarom "onze" (niet "ons").'
  },
  {
    id: 8,
    prompt: 'Edit en Ning zitten met _______ docent in de kantine.',
    subPrompt: 'Personen: Edit en Ning (zij meervoud) | Zelfstandig naamwoord: docent',
    answer: 'hun',
    acceptableAnswers: ['hun', 'Hun'],
    options: ['hun', 'haar', 'onze', 'jullie'],
    explanation: 'Edit en Ning zijn meerdere personen (zij meervoud / they). Het bezittelijk voornaamwoord is "hun".'
  },
  {
    id: 9,
    prompt: 'Theresa, woont _______ familie ook in Nederland?',
    subPrompt: 'Aangesproken persoon: jij / je (Theresa) | Zelfstandig naamwoord: familie',
    answer: 'jouw',
    acceptableAnswers: ['jouw', 'je', 'Jouw', 'Je'],
    options: ['jouw', 'je', 'haar', 'uw'],
    explanation: 'Theresa wordt direct aangesproken met jij/je, dus gebruiken we "jouw" of "je".'
  },
  {
    id: 10,
    prompt: 'Peter moet voor _______ werk naar Indonesië.',
    subPrompt: 'Persoon: Peter (man) | Zelfstandig naamwoord: het werk',
    answer: 'zijn',
    acceptableAnswers: ['zijn', 'Zijn'],
    options: ['zijn', 'haar', 'hun', 'ons'],
    explanation: 'Peter is een man (hij), dus gebruiken we "zijn" ("voor zijn werk").'
  }
];

// Opdracht 10: Een prepositie invullen (op, om of in)
export const OPDRACHT_10: ExerciseItem[] = [
  {
    id: 1,
    prompt: 'De cursus begint [blank1] maandag 8 april, [blank2] 9.00 uur.',
    subPrompt: 'Regels: Dagen/Data = op | Exacte tijd = om | Maand/Jaar/Seizoen = in',
    answer: 'op / om',
    acceptableAnswers: ['op, om', 'op om', 'op / om'],
    options: ['op / om', 'in / om', 'om / op', 'in / in'],
    explanation: 'Bij een dag/datum ("maandag 8 april") gebruik je "op". Bij een tijdstip ("9.00 uur") gebruik je "om".'
  },
  {
    id: 2,
    prompt: 'Heb jij ook les _______ dinsdag?',
    subPrompt: 'Tijdseenheid: dag van de week (dinsdag)',
    answer: 'op',
    acceptableAnswers: ['op', 'Op'],
    options: ['op', 'om', 'in'],
    explanation: 'Voor dagen van de week gebruiken we altijd "op" (op maandag, op dinsdag).'
  },
  {
    id: 3,
    prompt: 'De tweede cursus begint _______ januari.',
    subPrompt: 'Tijdseenheid: maand (januari)',
    answer: 'in',
    acceptableAnswers: ['in', 'In'],
    options: ['in', 'op', 'om'],
    explanation: 'Voor maanden gebruiken we altijd "in" (in januari, in augustus).'
  },
  {
    id: 4,
    prompt: 'We zijn _______ 9.45 uur in Amsterdam.',
    subPrompt: 'Tijdseenheid: kloktijd (9.45 uur)',
    answer: 'om',
    acceptableAnswers: ['om', 'Om'],
    options: ['om', 'op', 'in'],
    explanation: 'Voor kloktijden gebruiken we altijd "om" (om 9.45 uur, om elf uur).'
  },
  {
    id: 5,
    prompt: 'Fred is _______ 12 augustus jarig.',
    subPrompt: 'Tijdseenheid: specifieke datum (12 augustus)',
    answer: 'op',
    acceptableAnswers: ['op', 'Op'],
    options: ['op', 'in', 'om'],
    explanation: 'Voor een specifieke datum gebruiken we "op" (op 12 augustus).'
  },
  {
    id: 6,
    prompt: 'Ben jij ook _______ de zomer jarig?',
    subPrompt: 'Tijdseenheid: seizoen (de zomer)',
    answer: 'in',
    acceptableAnswers: ['in', 'In'],
    options: ['in', 'op', 'om'],
    explanation: 'Voor seizoenen gebruiken we altijd "in" (in de lente, in de zomer, in de herfst, in de winter).'
  },
  {
    id: 7,
    prompt: 'Bart en Eva zijn _______ 2017 getrouwd.',
    subPrompt: 'Tijdseenheid: jaartal (2017)',
    answer: 'in',
    acceptableAnswers: ['in', 'In'],
    options: ['in', 'op', 'om'],
    explanation: 'Voor een jaartal gebruiken we "in" (in 2017) of geen voorzetsel.'
  },
  {
    id: 8,
    prompt: '_______ welke datum zijn ze getrouwd?',
    subPrompt: 'Tijdseenheid: datum',
    answer: 'Op',
    acceptableAnswers: ['Op', 'op'],
    options: ['Op', 'In', 'Om'],
    explanation: 'Bij het woord datum hoort "op": "Op welke datum...?".'
  },
  {
    id: 9,
    prompt: 'Ze zijn _______ 7 juli getrouwd.',
    subPrompt: 'Tijdseenheid: datum (7 juli)',
    answer: 'op',
    acceptableAnswers: ['op', 'Op'],
    options: ['op', 'in', 'om'],
    explanation: 'Voor een specifieke datum gebruiken we "op" (op 7 juli).'
  },
  {
    id: 10,
    prompt: 'We gaan _______ 10.30 uur naar de kantine.',
    subPrompt: 'Tijdseenheid: kloktijd (10.30 uur)',
    answer: 'om',
    acceptableAnswers: ['om', 'Om'],
    options: ['om', 'op', 'in'],
    explanation: 'Voor tijden gebruiken we "om" (om half elf / om 10.30 uur).'
  },
  {
    id: 11,
    prompt: 'Gerard en Senna gaan _______ oktober op vakantie.',
    subPrompt: 'Tijdseenheid: maand (oktober)',
    answer: 'in',
    acceptableAnswers: ['in', 'In'],
    options: ['in', 'op', 'om'],
    explanation: 'Voor een maand gebruiken we "in" (in oktober).'
  },
  {
    id: 12,
    prompt: 'Hij is _______ 23 mei 1991 geboren.',
    subPrompt: 'Tijdseenheid: datum (23 mei 1991)',
    answer: 'op',
    acceptableAnswers: ['op', 'Op'],
    options: ['op', 'in', 'om'],
    explanation: 'Voor een volledige geboortedatum gebruiken we "op" (op 23 mei 1991).'
  }
];

// Dutch Clock Times Reference (2.9)
export interface ClockTimeExample {
  digital: string;
  hour: number;
  minute: number;
  dutch: string;
  literalBreakdown: string;
  zone: 'hour' | 'over' | 'voor_half' | 'half' | 'over_half' | 'voor';
}

export const CLOCK_EXAMPLES: ClockTimeExample[] = [
  {
    digital: '11:00',
    hour: 11,
    minute: 0,
    dutch: 'Het is elf uur.',
    literalBreakdown: 'It is eleven o\'clock.',
    zone: 'hour'
  },
  {
    digital: '11:05',
    hour: 11,
    minute: 5,
    dutch: 'Het is vijf over elf.',
    literalBreakdown: '5 minutes past 11.',
    zone: 'over'
  },
  {
    digital: '11:10',
    hour: 11,
    minute: 10,
    dutch: 'Het is tien over elf.',
    literalBreakdown: '10 minutes past 11.',
    zone: 'over'
  },
  {
    digital: '11:15',
    hour: 11,
    minute: 15,
    dutch: 'Het is kwart over elf.',
    literalBreakdown: 'Quarter past 11.',
    zone: 'over'
  },
  {
    digital: '11:20',
    hour: 11,
    minute: 20,
    dutch: 'Het is tien voor half twaalf.',
    literalBreakdown: '10 minutes before half to twelve! (Also: twintig over elf)',
    zone: 'voor_half'
  },
  {
    digital: '11:25',
    hour: 11,
    minute: 25,
    dutch: 'Het is vijf voor half twaalf.',
    literalBreakdown: '5 minutes before half to twelve.',
    zone: 'voor_half'
  },
  {
    digital: '11:30',
    hour: 11,
    minute: 30,
    dutch: 'Het is half twaalf.',
    literalBreakdown: 'Halfway TO twelve (i.e. 11:30)! Crucial Dutch clock rule.',
    zone: 'half'
  },
  {
    digital: '11:35',
    hour: 11,
    minute: 35,
    dutch: 'Het is vijf over half twaalf.',
    literalBreakdown: '5 minutes past half to twelve.',
    zone: 'over_half'
  },
  {
    digital: '11:40',
    hour: 11,
    minute: 40,
    dutch: 'Het is tien over half twaalf.',
    literalBreakdown: '10 minutes past half to twelve. (Also: twintig voor twaalf)',
    zone: 'over_half'
  },
  {
    digital: '11:45',
    hour: 11,
    minute: 45,
    dutch: 'Het is kwart voor twaalf.',
    literalBreakdown: 'Quarter to twelve.',
    zone: 'voor'
  },
  {
    digital: '11:50',
    hour: 11,
    minute: 50,
    dutch: 'Het is tien voor twaalf.',
    literalBreakdown: '10 minutes to twelve.',
    zone: 'voor'
  },
  {
    digital: '11:55',
    hour: 11,
    minute: 55,
    dutch: 'Het is vijf voor twaalf.',
    literalBreakdown: '5 minutes to twelve.',
    zone: 'voor'
  }
];

// Helper to calculate Dutch time for any hour and minute
export function getDutchTimePhrase(hour: number, minute: number): { dutch: string; explanation: string } {
  const dutchNumbers = [
    'twaalf', 'één', 'twee', 'drie', 'vier', 'vijf',
    'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf'
  ];

  // Normalize hour to 1-12
  let h = hour % 12;
  if (h === 0) h = 12;
  const nextH = h === 12 ? 1 : h + 1;

  const currentHourWord = dutchNumbers[h];
  const nextHourWord = dutchNumbers[nextH];

  // Round minute to nearest 5 or handle exact
  const m = minute;

  if (m === 0) {
    return {
      dutch: `Het is ${currentHourWord} uur.`,
      explanation: `Exact hour: Het is [uur] uur.`
    };
  } else if (m === 5) {
    return {
      dutch: `Het is vijf over ${currentHourWord}.`,
      explanation: `5 minutes past the hour.`
    };
  } else if (m === 10) {
    return {
      dutch: `Het is tien over ${currentHourWord}.`,
      explanation: `10 minutes past the hour.`
    };
  } else if (m === 15) {
    return {
      dutch: `Het is kwart over ${currentHourWord}.`,
      explanation: `Quarter past the hour.`
    };
  } else if (m === 20) {
    return {
      dutch: `Het is tien voor half ${nextHourWord}.`,
      explanation: `Dutch calculates around the half hour: 10 minutes BEFORE half to ${nextH}. (Alternatively: twintig over ${currentHourWord})`
    };
  } else if (m === 25) {
    return {
      dutch: `Het is vijf voor half ${nextHourWord}.`,
      explanation: `5 minutes BEFORE half to ${nextH}.`
    };
  } else if (m === 30) {
    return {
      dutch: `Het is half ${nextHourWord}.`,
      explanation: `CRITICAL: In Dutch, "half ${nextHourWord}" means halfway TO ${nextH} (i.e. ${h}:30)!`
    };
  } else if (m === 35) {
    return {
      dutch: `Het is vijf over half ${nextHourWord}.`,
      explanation: `5 minutes PAST half to ${nextH}.`
    };
  } else if (m === 40) {
    return {
      dutch: `Het is tien over half ${nextHourWord}.`,
      explanation: `10 minutes PAST half to ${nextH}. (Alternatively: twintig voor ${nextHourWord})`
    };
  } else if (m === 45) {
    return {
      dutch: `Het is kwart voor ${nextHourWord}.`,
      explanation: `Quarter to ${nextH}.`
    };
  } else if (m === 50) {
    return {
      dutch: `Het is tien voor ${nextHourWord}.`,
      explanation: `10 minutes to ${nextH}.`
    };
  } else if (m === 55) {
    return {
      dutch: `Het is vijf voor ${nextHourWord}.`,
      explanation: `5 minutes to ${nextH}.`
    };
  } else {
    // Arbitrary minutes
    if (m < 15) {
      return { dutch: `Het is ${m} over ${currentHourWord}.`, explanation: `${m} minutes past ${currentHourWord}.` };
    } else if (m < 30) {
      const diff = 30 - m;
      return { dutch: `Het is ${diff} voor half ${nextHourWord}.`, explanation: `${diff} minutes before half ${nextHourWord}.` };
    } else if (m < 45) {
      const diff = m - 30;
      return { dutch: `Het is ${diff} over half ${nextHourWord}.`, explanation: `${diff} minutes past half ${nextHourWord}.` };
    } else {
      const diff = 60 - m;
      return { dutch: `Het is ${diff} voor ${nextHourWord}.`, explanation: `${diff} minutes to ${nextHourWord}.` };
    }
  }
}

// Pronunciation pairs (2.13)
export interface PronunciationPair {
  shortWord: string;
  longWord: string;
  shortMeaning: string;
  longMeaning: string;
  ruleExplanation: string;
}

export const PRONUNCIATION_PAIRS: PronunciationPair[] = [
  {
    shortWord: 'acht',
    longWord: 'jaar',
    shortMeaning: 'eight (short /ɑ/)',
    longMeaning: 'year (long /a:/)',
    ruleExplanation: '"acht" has short "a" before consonant cluster -cht. "jaar" has double "aa" in closed syllable for long sound.'
  },
  {
    shortWord: 'dag',
    longWord: 'dagen',
    shortMeaning: 'day (short /ɑ/)',
    longMeaning: 'days (long /a:/)',
    ruleExplanation: 'Classic Dutch spelling rule! "dag" has short "a" in closed syllable. In plural "da-gen", the syllable is OPEN, so a single "a" sounds long [aa]!'
  },
  {
    shortWord: 'was',
    longWord: 'vader',
    shortMeaning: 'was (short /ɑ/)',
    longMeaning: 'father (long /a:/)',
    ruleExplanation: '"was" is closed short syllable. In "va-der", the first syllable ends in a vowel (open syllable), making it long /a:/.'
  },
  {
    shortWord: 'straks',
    longWord: 'plaats',
    shortMeaning: 'later / soon (short /ɑ/)',
    longMeaning: 'place / seat (long /a:/)',
    ruleExplanation: '"straks" has short single "a" trapped by consonants. "plaats" explicitly writes double "aa" to stay long.'
  },
  {
    shortWord: 'half',
    longWord: 'maand',
    shortMeaning: 'half (short /ɑ/)',
    longMeaning: 'month (long /a:/)',
    ruleExplanation: '"half" is short /ɑ/ before -lf. "maand" has long /a:/ spelled with double "aa".'
  },
  {
    shortWord: 'kantine',
    longWord: 'maken',
    shortMeaning: 'canteen (kan-ti-ne: short /ɑ/)',
    longMeaning: 'to make (ma-ken: long /a:/)',
    ruleExplanation: 'kan- is closed with -n -> short /ɑ/. ma- is open syllable -> long /a:/.'
  }
];

export const PRONUNCIATION_WORDS_A = [
  { word: 'acht', type: 'short', ipa: '[ɑxt]', meaning: 'eight' },
  { word: 'wat', type: 'short', ipa: '[ʋɑt]', meaning: 'what' },
  { word: 'ander', type: 'short', ipa: '[ˈɑndər]', meaning: 'other/different' },
  { word: 'was', type: 'short', ipa: '[ʋɑs]', meaning: 'was' },
  { word: 'straks', type: 'short', ipa: '[strɑks]', meaning: 'later/soon' },
  { word: 'dag', type: 'short', ipa: '[dɑx]', meaning: 'day' },
  { word: 'half', type: 'short', ipa: '[hɑlf]', meaning: 'half' },
  { word: 'kantine', type: 'short', ipa: '[kɑnˈtinə]', meaning: 'canteen' },
  { word: 'land', type: 'short', ipa: '[lɑnt]', meaning: 'country' },
  { word: 'lang', type: 'short', ipa: '[lɑŋ]', meaning: 'long / tall' },

  { word: 'jaar', type: 'long', ipa: '[ja:r]', meaning: 'year' },
  { word: 'plaats', type: 'long', ipa: '[pla:ts]', meaning: 'place' },
  { word: 'maand', type: 'long', ipa: '[ma:nt]', meaning: 'month' },
  { word: 'naar', type: 'long', ipa: '[na:r]', meaning: 'to' },
  { word: 'naam', type: 'long', ipa: '[na:m]', meaning: 'name' },
  { word: 'dagen', type: 'long', ipa: '[ˈda:ɣən]', meaning: 'days (open syllable da-)' },
  { word: 'jarig', type: 'long', ipa: '[ˈja:rəx]', meaning: 'having birthday (open ja-)' },
  { word: 'ja', type: 'long', ipa: '[ja:]', meaning: 'yes' },
  { word: 'vader', type: 'long', ipa: '[ˈva:dər]', meaning: 'father (open va-)' },
  { word: 'maken', type: 'long', ipa: '[ˈma:kən]', meaning: 'to make (open ma-)' }
];
