import { CustomLessonData } from '../types/lesson';

export const CHAPTER_1_DATA: CustomLessonData = {
  id: 'hoofdstuk_1',
  chapterNumber: 'Hoofdstuk 1',
  chapterTitle: 'Welkom',
  description: 'Kennismaken, jezelf voorstellen, naam, land van herkomst, adres en postcode, telwoorden (0-1000), het alfabet, begroeten en afscheid nemen, de tegenwoordige tijd (zijn, hebben, regelmatige werkwoorden en inversie bij jij/je).',
  language: 'Nederlands',
  createdAt: 1727600000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Docent',
      dutch: 'Goedemorgen allemaal. Welkom in de cursus Nederlands.',
      english: 'Good morning everyone. Welcome to the Dutch course.',
      notes: '"allemaal" = everyone/all. "Welkom in" = welcome to.',
      keyWords: ['goedemorgen', 'allemaal', 'cursus', 'Nederlands']
    },
    {
      id: 2,
      speaker: 'Docent',
      dutch: 'Ik ben Karin Dijkstra en ik ben jullie docent. Jullie hebben twee docenten. De andere docent is Paul de Vries. Hij geeft twee dagen les en ik drie.',
      english: 'I am Karin Dijkstra and I am your teacher. You have two teachers. The other teacher is Paul de Vries. He teaches two days and I three.',
      notes: '"jullie" = your (plural). "lesgeven" = to teach.',
      keyWords: ['docent', 'twee docenten', 'lesgeven']
    },
    {
      id: 3,
      speaker: 'Docent',
      dutch: 'We beginnen met kennismaken. Wie ben jij? Wat is jouw naam?',
      english: 'We begin with getting to know each other. Who are you? What is your name?',
      notes: '"kennismaken" = to introduce oneself / get acquainted. Question words: Wie (who), Wat (what).',
      keyWords: ['beginnen met', 'kennismaken', 'wie', 'wat', 'jouw naam']
    },
    {
      id: 4,
      speaker: 'Susy',
      dutch: 'Ik ben Susy. Mijn naam is Susy.',
      english: 'I am Susy. My name is Susy.',
      notes: 'Standard introductory phrase in Dutch.',
      keyWords: ['ik ben', 'mijn naam is']
    },
    {
      id: 5,
      speaker: 'Docent',
      dutch: 'Dag Susy. Susy is je voornaam. En wat is je achternaam?',
      english: 'Hello Susy. Susy is your first name. And what is your surname / last name?',
      notes: '"de voornaam" = first name, "de achternaam" = surname.',
      keyWords: ['voornaam', 'achternaam']
    },
    {
      id: 6,
      speaker: 'Susy',
      dutch: 'Mijn achternaam is Wall.',
      english: 'My surname is Wall.',
      notes: 'Giving surname.',
      keyWords: ['achternaam']
    },
    {
      id: 7,
      speaker: 'Docent',
      dutch: 'Uit welk land kom je?',
      english: 'Which country do you come from?',
      notes: '"het land" is a het-word, hence "welk land" (not welke).',
      keyWords: ['uit', 'welk land', 'komen']
    },
    {
      id: 8,
      speaker: 'Susy',
      dutch: 'Ik kom uit Engeland.',
      english: 'I come from England.',
      notes: '"komen uit" + country name.',
      keyWords: ['Engeland']
    },
    {
      id: 9,
      speaker: 'Docent',
      dutch: 'De buurman van Susy: Wie ben jij? Hoe heet jij?',
      english: 'The neighbour of Susy: Who are you? What is your name?',
      notes: '"de buurman" = (male) neighbour. "Hoe heet jij?" = What are you called?',
      keyWords: ['buurman', 'hoe heet jij']
    },
    {
      id: 10,
      speaker: 'Ning',
      dutch: 'Ik heet Ning.',
      english: 'My name is Ning / I am called Ning.',
      notes: 'Verb "heten" (to be called): ik heet, jij heet.',
      keyWords: ['ik heet']
    },
    {
      id: 11,
      speaker: 'Docent',
      dutch: 'Dag Ning. En waar kom je vandaan?',
      english: 'Hello Ning. And where do you come from?',
      notes: '"Waar ... vandaan?" = Where from?',
      keyWords: ['waar ... vandaan']
    },
    {
      id: 12,
      speaker: 'Ning',
      dutch: 'Ik kom uit China.',
      english: 'I come from China.',
      notes: 'Origin country.',
      keyWords: ['China']
    },
    {
      id: 13,
      speaker: 'Docent',
      dutch: 'Waar woon je?',
      english: 'Where do you live?',
      notes: 'Verb "wonen" (to live / reside).',
      keyWords: ['waar', 'wonen']
    },
    {
      id: 14,
      speaker: 'Ning',
      dutch: 'Ik woon nu in Utrecht.',
      english: 'I live now in Utrecht.',
      notes: '"nu" = now. In Dutch, place follows time.',
      keyWords: ['nu', 'in Utrecht']
    },
    {
      id: 15,
      speaker: 'Docent',
      dutch: 'Wat is je adres?',
      english: 'What is your address?',
      notes: '"het adres" = address.',
      keyWords: ['adres']
    },
    {
      id: 16,
      speaker: 'Ning',
      dutch: 'Mijn adres is Hofstraat 22.',
      english: 'My address is Hofstraat 22.',
      notes: 'In Dutch addresses, street name comes first, then house number.',
      keyWords: ['Hofstraat']
    },
    {
      id: 17,
      speaker: 'Docent',
      dutch: 'Op welk nummer? Wat is je antwoord? 23?',
      english: 'At which number? What is your answer? 23?',
      notes: '"het antwoord" = answer.',
      keyWords: ['nummer', 'antwoord']
    },
    {
      id: 18,
      speaker: 'Ning',
      dutch: 'Nee, op 22. En mijn postcode is 3581 TW in Utrecht. En u, mevrouw? Woont u ook in Utrecht?',
      english: 'No, at 22. And my postcode is 3581 TW in Utrecht. And you, ma\'am? Do you also live in Utrecht?',
      notes: 'Dutch postcodes always consist of 4 digits + 2 letters (e.g. 3581 TW). "U" is formal.',
      keyWords: ['postcode', 'mevrouw', 'woont u']
    },
    {
      id: 19,
      speaker: 'Docent',
      dutch: 'Zeg maar jij, hoor. Ja, ik woon hier al twintig jaar. Oké, we gaan verder met de les. Heeft iedereen het boek? We beginnen met tekst 1 op bladzijde 8. We gaan naar de tekst luisteren en hem ook lezen. We stoppen even, het is pauze. Tot straks!',
      english: 'Just say "jij" (informal), you know. Yes, I have lived here for twenty years already. Okay, we continue with the lesson. Does everyone have the book? We start with text 1 on page 8. We will listen to the text and also read it. We stop for a moment, it\'s break time. See you later!',
      notes: '"Zeg maar jij" = you can address me informally! "Tot straks" = see you later today.',
      keyWords: ['zeg maar jij', 'al twintig jaar', 'pauze', 'tot straks']
    }
  ],
  vocabulary: [
    // Complete Woordenlijst 1.2 (Book page 22)
    { id: 'ch1_welkom', dutch: 'welkom (in)', english: 'welcome (to)', category: 'basis', partOfSpeech: 'phrase', exampleSentence: 'Welkom in de cursus Nederlands!', exampleEnglish: 'Welcome to the Dutch course!' },
    { id: 'ch1_goedemorgen', dutch: 'goedemorgen', english: 'good morning', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Goedemorgen allemaal.', exampleEnglish: 'Good morning everyone.' },
    { id: 'ch1_allemaal', dutch: 'allemaal', english: 'everyone / all', category: 'basis', partOfSpeech: 'pronoun', exampleSentence: 'We beginnen allemaal samen.', exampleEnglish: 'We all start together.' },
    { id: 'ch1_de_cursus', dutch: 'de cursus', english: 'course / class', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de cursussen', exampleSentence: 'De cursus Nederlands is erg leuk.', exampleEnglish: 'The Dutch course is very fun.' },
    { id: 'ch1_nederlands', dutch: 'Nederlands', english: 'Dutch (language)', category: 'taal', partOfSpeech: 'noun', exampleSentence: 'Ik leer Nederlands.', exampleEnglish: 'I am learning Dutch.' },
    { id: 'ch1_ik', dutch: 'ik', english: 'I', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Ik ben student.', exampleEnglish: 'I am a student.' },
    { id: 'ch1_zijn', dutch: 'zijn (ben, bent, is, zijn)', english: 'to be', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik ben Karin Dijkstra.', exampleEnglish: 'I am Karin Dijkstra.' },
    { id: 'ch1_en', dutch: 'en', english: 'and', category: 'grammatica', partOfSpeech: 'adverb', exampleSentence: 'Paul en Karin geven les.', exampleEnglish: 'Paul and Karin teach.' },
    { id: 'ch1_jullie', dutch: 'jullie', english: 'you (plural) / your (plural)', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Jullie hebben twee docenten.', exampleEnglish: 'You have two teachers.' },
    { id: 'ch1_de_docent', dutch: 'de docent', english: 'teacher / lecturer', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de docenten', exampleSentence: 'Wie is jullie docent?', exampleEnglish: 'Who is your teacher?' },
    { id: 'ch1_hebben', dutch: 'hebben (heb, hebt, heeft, hebben)', english: 'to have', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Heeft iedereen het boek?', exampleEnglish: 'Does everyone have the book?' },
    { id: 'ch1_twee', dutch: 'twee', english: 'two', category: 'getallen', partOfSpeech: 'adjective', exampleSentence: 'We hebben twee pauzes.', exampleEnglish: 'We have two breaks.' },
    { id: 'ch1_andere', dutch: 'andere (ander)', english: 'other', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'De andere docent heet Paul.', exampleEnglish: 'The other teacher is called Paul.' },
    { id: 'ch1_hij', dutch: 'hij', english: 'he', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Hij komt uit Engeland.', exampleEnglish: 'He comes from England.' },
    { id: 'ch1_lesgeven', dutch: 'lesgeven (geeft les)', english: 'to teach', category: 'school', partOfSpeech: 'verb', exampleSentence: 'Hij geeft twee dagen les.', exampleEnglish: 'He teaches two days.' },
    { id: 'ch1_de_dag', dutch: 'de dag (dagen)', english: 'day (days)', category: 'tijd', partOfSpeech: 'noun', article: 'de', plural: 'de dagen', exampleSentence: 'Een week heeft zeven dagen.', exampleEnglish: 'A week has seven days.' },
    { id: 'ch1_drie', dutch: 'drie', english: 'three', category: 'getallen', partOfSpeech: 'adjective', exampleSentence: 'Ik heb drie vragen.', exampleEnglish: 'I have three questions.' },
    { id: 'ch1_we', dutch: 'we / wij', english: 'we', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'We beginnen nu met de les.', exampleEnglish: 'We begin now with the lesson.' },
    { id: 'ch1_beginnen', dutch: 'beginnen met', english: 'to start / begin with', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We beginnen met kennismaken.', exampleEnglish: 'We start with getting acquainted.' },
    { id: 'ch1_kennismaken', dutch: 'kennismaken', english: 'to get to know / introduce oneself', category: 'sociaal', partOfSpeech: 'verb', exampleSentence: 'Aangenaam om kennis te maken!', exampleEnglish: 'Pleased to meet you!' },
    { id: 'ch1_wie', dutch: 'wie', english: 'who', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Wie ben jij?', exampleEnglish: 'Who are you?' },
    { id: 'ch1_jij', dutch: 'jij / je', english: 'you (singular informal)', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Waar woon jij?', exampleEnglish: 'Where do you live?' },
    { id: 'ch1_wat', dutch: 'wat', english: 'what', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Wat is jouw naam?', exampleEnglish: 'What is your name?' },
    { id: 'ch1_jouw', dutch: 'jouw / je', english: 'your (singular)', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Is dit jouw boek?', exampleEnglish: 'Is this your book?' },
    { id: 'ch1_de_naam', dutch: 'de naam', english: 'name', category: 'persoonlijk', partOfSpeech: 'noun', article: 'de', plural: 'de namen', exampleSentence: 'Mijn naam is Susy.', exampleEnglish: 'My name is Susy.' },
    { id: 'ch1_mijn', dutch: 'mijn', english: 'my', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Mijn achternaam is Wall.', exampleEnglish: 'My surname is Wall.' },
    { id: 'ch1_dag', dutch: 'dag', english: 'hello / goodbye', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Dag allemaal, tot morgen!', exampleEnglish: 'Goodbye everyone, see you tomorrow!' },
    { id: 'ch1_de_voornaam', dutch: 'de voornaam', english: 'first name', category: 'persoonlijk', partOfSpeech: 'noun', article: 'de', plural: 'de voornamen', exampleSentence: 'Wat is je voornaam?', exampleEnglish: 'What is your first name?' },
    { id: 'ch1_de_achternaam', dutch: 'de achternaam', english: 'surname / family name', category: 'persoonlijk', partOfSpeech: 'noun', article: 'de', plural: 'de achternamen', exampleSentence: 'Mijn achternaam is Dijkstra.', exampleEnglish: 'My surname is Dijkstra.' },
    { id: 'ch1_uit', dutch: 'uit', english: 'from / out of', category: 'prepositie', partOfSpeech: 'preposition', exampleSentence: 'Ik kom uit Frankrijk.', exampleEnglish: 'I come from France.' },
    { id: 'ch1_welk', dutch: 'welk / welke', english: 'which', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Uit welk land kom je?', exampleEnglish: 'Which country do you come from?' },
    { id: 'ch1_het_land', dutch: 'het land', english: 'country', category: 'geografie', partOfSpeech: 'noun', article: 'het', plural: 'de landen', exampleSentence: 'Nederland is een klein land.', exampleEnglish: 'The Netherlands is a small country.' },
    { id: 'ch1_engeland', dutch: 'Engeland', english: 'England', category: 'geografie', partOfSpeech: 'noun', article: 'het', exampleSentence: 'Susy komt uit Engeland.', exampleEnglish: 'Susy comes from England.' },
    { id: 'ch1_komen', dutch: 'komen (kom, komt, komen)', english: 'to come', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Waar kom je vandaan?', exampleEnglish: 'Where do you come from?' },
    { id: 'ch1_de_buurman', dutch: 'de buurman (buurvrouw)', english: 'neighbour', category: 'mensen', partOfSpeech: 'noun', article: 'de', plural: 'de buren', exampleSentence: 'Ning is de buurman van Susy.', exampleEnglish: 'Ning is Susy\'s neighbour.' },
    { id: 'ch1_hoe', dutch: 'hoe', english: 'how / what', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Hoe spel je jouw naam?', exampleEnglish: 'How do you spell your name?' },
    { id: 'ch1_hoe_heet_jij', dutch: 'hoe heet jij?', english: 'what is your name? / what are you called?', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Hoe heet jij? - Ik heet Ning.', exampleEnglish: 'What are you called? - I am called Ning.' },
    { id: 'ch1_heten', dutch: 'heten (heet, heet, heten)', english: 'to be called', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik heet Paul.', exampleEnglish: 'I am called Paul.' },
    { id: 'ch1_waar_vandaan', dutch: 'waar ... vandaan', english: 'where ... from', category: 'vraagwoorden', partOfSpeech: 'phrase', exampleSentence: 'Waar komt hij vandaan?', exampleEnglish: 'Where does he come from?' },
    { id: 'ch1_waar', dutch: 'waar', english: 'where', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Waar woon je nu?', exampleEnglish: 'Where do you live now?' },
    { id: 'ch1_china', dutch: 'China', english: 'China', category: 'geografie', partOfSpeech: 'noun', article: 'het', exampleSentence: 'Ning komt uit China.', exampleEnglish: 'Ning comes from China.' },
    { id: 'ch1_wonen', dutch: 'wonen (woon, woont, wonen)', english: 'to live / reside', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik woon in Utrecht.', exampleEnglish: 'I live in Utrecht.' },
    { id: 'ch1_nu', dutch: 'nu', english: 'now', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Nu gaan we beginnen.', exampleEnglish: 'Now we are going to start.' },
    { id: 'ch1_het_adres', dutch: 'het adres', english: 'address', category: 'persoonlijk', partOfSpeech: 'noun', article: 'het', plural: 'de adressen', exampleSentence: 'Wat is jouw adres?', exampleEnglish: 'What is your address?' },
    { id: 'ch1_het_nummer', dutch: 'het nummer (huisnummer)', english: 'number (house number)', category: 'persoonlijk', partOfSpeech: 'noun', article: 'het', plural: 'de nummers', exampleSentence: 'Op welk nummer woon je?', exampleEnglish: 'At which number do you live?' },
    { id: 'ch1_het_antwoord', dutch: 'het antwoord', english: 'answer', category: 'school', partOfSpeech: 'noun', article: 'het', plural: 'de antwoorden', exampleSentence: 'Wat is het juiste antwoord?', exampleEnglish: 'What is the correct answer?' },
    { id: 'ch1_nee', dutch: 'nee', english: 'no', category: 'basis', partOfSpeech: 'adverb', exampleSentence: 'Nee, ik woon op nummer 22.', exampleEnglish: 'No, I live at number 22.' },
    { id: 'ch1_de_postcode', dutch: 'de postcode', english: 'postcode / postal code', category: 'persoonlijk', partOfSpeech: 'noun', article: 'de', plural: 'de postcodes', exampleSentence: 'Mijn postcode is 3581 TW.', exampleEnglish: 'My postcode is 3581 TW.' },
    { id: 'ch1_u', dutch: 'u', english: 'you (formal / polite)', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Woont u ook in Utrecht?', exampleEnglish: 'Do you also live in Utrecht?' },
    { id: 'ch1_mevrouw', dutch: 'mevrouw (meneer)', english: 'Ms / Mrs / Madam (Mr / Sir)', category: 'aanspreekvorm', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Dag mevrouw Dijkstra.', exampleEnglish: 'Hello Mrs Dijkstra.' },
    { id: 'ch1_zeg_maar_jij', dutch: 'zeg maar jij (hoor)', english: 'you can say "jij" / call me by first name', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Zeg maar jij hoor, we zijn allemaal collega\'s.', exampleEnglish: 'Just call me "jij", we are all colleagues.' },
    { id: 'ch1_al', dutch: 'al', english: 'already', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Ik woon hier al twintig jaar.', exampleEnglish: 'I have lived here for twenty years already.' },
    { id: 'ch1_het_jaar', dutch: 'het jaar', english: 'year', category: 'tijd', partOfSpeech: 'noun', article: 'het', plural: 'de jaren', exampleSentence: 'Hij is 25 jaar oud.', exampleEnglish: 'He is 25 years old.' },
    { id: 'ch1_verdergaan', dutch: 'verdergaan (gaan verder)', english: 'to continue / go on', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We gaan verder met de opdracht.', exampleEnglish: 'We continue with the exercise.' },
    { id: 'ch1_de_les', dutch: 'de les', english: 'lesson / class', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de lessen', exampleSentence: 'De les duurt twee uur.', exampleEnglish: 'The lesson lasts two hours.' },
    { id: 'ch1_iedereen', dutch: 'iedereen', english: 'everyone / everybody', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Heeft iedereen een pen?', exampleEnglish: 'Does everyone have a pen?' },
    { id: 'ch1_het_boek', dutch: 'het boek', english: 'book', category: 'school', partOfSpeech: 'noun', article: 'het', plural: 'de boeken', exampleSentence: 'Open je boek op pagina 8.', exampleEnglish: 'Open your book on page 8.' },
    { id: 'ch1_de_tekst', dutch: 'de tekst', english: 'text / reading passage', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de teksten', exampleSentence: 'We gaan de tekst samen lezen.', exampleEnglish: 'We are going to read the text together.' },
    { id: 'ch1_de_bladzijde', dutch: 'de bladzijde (pagina)', english: 'page', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de bladzijden', exampleSentence: 'Kijk op bladzijde 24.', exampleEnglish: 'Look on page 24.' },
    { id: 'ch1_luisteren', dutch: 'luisteren naar', english: 'to listen to', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Luister naar de uitspraak van de docent.', exampleEnglish: 'Listen to the teacher\'s pronunciation.' },
    { id: 'ch1_lezen', dutch: 'lezen (lees, leest, lezen)', english: 'to read', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Zij leest graag Nederlandse boeken.', exampleEnglish: 'She likes reading Dutch books.' },
    { id: 'ch1_stoppen', dutch: 'stoppen (met)', english: 'to stop / pause', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We stoppen even voor de pauze.', exampleEnglish: 'We stop for a moment for the break.' },
    { id: 'ch1_de_pauze', dutch: 'de pauze', english: 'break / intermission', category: 'school', partOfSpeech: 'noun', article: 'de', plural: 'de pauzes', exampleSentence: 'In de pauze drinken we koffie.', exampleEnglish: 'In the break we drink coffee.' },
    { id: 'ch1_tot_straks', dutch: 'tot straks / tot zo', english: 'see you later today / see you in a bit', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Tot straks na de pauze!', exampleEnglish: 'See you later after the break!' }
  ],
  grammarPoints: [
    {
      id: 'persoonlijk_pronomen_werkwoord',
      title: '1.4 Persoonlijk voornaamwoord + Werkwoord (Tegenwoordige tijd)',
      summary: 'De basisvervoeging van de tegenwoordige tijd (stam, stam+t, infinitief).',
      ruleExplanation: `In het Nederlands vervoeg je regelmatige werkwoorden in de tegenwoordige tijd (presens) zo:

1. De Stam van een werkwoord:
De stam is het hele werkwoord (de infinitief) minus -en (met aanpassing van klinkers/medeklinkers voor de uitspraak):
• luisteren -> luister
• wonen -> woon (dubbele 'o' voor lange klank in gesloten lettergreep!)
• komen -> kom

2. De Vervoegingsregels:
• ik -> stam (ik luister, ik woon, ik kom)
• jij / je -> stam + t (jij luistert, jij woont, jij komt)
• u -> stam + t (u luistert, u woont, u komt)
• hij / zij / het -> stam + t (hij luistert, zij woont, het komt)
• wij / we -> infinitief (wij luisteren, wij wonen, wij komen)
• jullie -> infinitief (jullie luisteren, jullie wonen, jullie komen)
• zij / ze -> infinitief (zij luisteren, zij wonen, zij komen)

3. CRUCIALE INVERSIEREGEL (bij jij/je):
Als 'jij' of 'je' ACHTER de persoonsvorm staat in een vraag of na inversie, valt de '-t' ALTIJD weg!
• Jij luistert -> Luister jij? (GEEN -t!)
• Jij woont -> Waar woon je? (GEEN -t!)
• Jij hebt -> Heb je het boek? (GEEN -t!)
• Let op: dit geldt NIET voor 'u' ("Woont u in Utrecht?").`,
      examples: [
        { dutch: 'Waar woon je? - Ik woon in Utrecht.', english: 'Where do you live? - I live in Utrecht.', note: 'Inversie: "woon je" zonder -t!' },
        { dutch: 'Hij geeft twee dagen les en ik geef drie dagen les.', english: 'He teaches two days and I teach three days.', note: 'Hij geeft (stam+t), ik geef (stam).' },
        { dutch: 'Luisteren jullie naar de docent?', english: 'Are you guys listening to the teacher?', note: 'Bij jullie hoort de hele infinitief.' }
      ]
    },
    {
      id: 'onregelmatige_werkwoorden_zijn_hebben',
      title: '1.4 Onregelmatige werkwoorden: Zijn & Hebben',
      summary: 'Vervoeging van de twee belangrijkste werkwoorden in de Nederlandse taal.',
      ruleExplanation: `De werkwoorden "zijn" (to be) en "hebben" (to have) zijn onregelmatig en moet je uit je hoofd leren:

ZIJN (to be):
• ik ben
• jij / je bent (inversie: ben jij? / ben je?)
• u bent (of: u is)
• hij / zij / het is
• wij / we zijn
• jullie zijn
• zij / ze zijn

HEBBEN (to have):
• ik heb
• jij / je hebt (inversie: heb jij? / heb je?)
• u hebt / heeft
• hij / zij / het heeft
• wij / we hebben
• jullie hebben
• zij / ze hebben`,
      examples: [
        { dutch: 'Wie ben jij? - Ik ben Susy Wall.', english: 'Who are you? - I am Susy Wall.', note: 'Vervoeging van zijn.' },
        { dutch: 'Heb je het boek? - Ja, ik heb het boek.', english: 'Do you have the book? - Yes, I have the book.', note: 'Inversie: "heb je" zonder -t.' },
        { dutch: 'Heeft iedereen pauze?', english: 'Does everyone have a break?', note: '"Iedereen" is enkelvoud (hij/heeft).' }
      ]
    },
    {
      id: 'ch1_telwoorden',
      title: '1.5 Telwoorden (Numbers 0 - 1000)',
      summary: 'Tellen van nul tot honderd en duizend.',
      ruleExplanation: `Telwoorden in het Nederlands:
• 0 nul, 1 één, 2 twee, 3 drie, 4 vier, 5 vijf, 6 zes, 7 zeven, 8 acht, 9 negen, 10 tien
• 11 elf, 12 twaalf, 13 dertien, 14 veertien, 15 vijftien, 16 zestien, 17 zeventien, 18 achttien, 19 negentien, 20 twintig
• 21 eenentwintig (één-en-twintig: eenheden eerst, dan tientallen!)
• 22 tweeëntwintig (met trema op de e)
• 30 dertig, 40 veertig, 50 vijftig, 60 zestig, 70 zeventig, 80 tachtig, 90 negentig
• 100 honderd, 124 honderdvijfentwintig, 1000 duizend`,
      examples: [
        { dutch: 'Ik woon op nummer 22 (tweeëntwintig).', english: 'I live at number 22.', note: 'Huisnummers uitspreken.' },
        { dutch: 'Zijn postcode is 3581 TW.', english: 'His postcode is 3581 TW.', note: 'Vier cijfers en twee letters.' }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_2_pronomen',
      title: 'Opdracht 2: Vul een personaal pronomen in',
      instruction: 'Vul in: ik, jij/je, u, hij, zij/ze, wij/we, jullie (blz. 24).',
      items: [
        {
          id: 1,
          prompt: 'Dit is Mustafa, mijn buurman. _______ woont in de Emmastraat.',
          answer: 'Hij',
          options: ['Hij', 'Zij', 'Wij', 'Ik'],
          explanation: 'Mustafa is mannelijk (de buurman), dus "Hij".'
        },
        {
          id: 2,
          prompt: 'Sonja, kun _______ je achternaam spellen?',
          answer: 'jij',
          acceptableAnswers: ['je', 'jij'],
          options: ['jij', 'u', 'hij', 'zij'],
          explanation: 'Er staat "je achternaam", dus aanspreekvorm is "jij" of "je".'
        },
        {
          id: 3,
          prompt: 'De andere docent heet Herman. _______ geeft twee dagen les.',
          answer: 'Hij',
          options: ['Hij', 'Zij', 'Jullie', 'Wij'],
          explanation: 'Herman is mannelijk enkelvoud, dus "Hij".'
        },
        {
          id: 4,
          prompt: 'Juha en Arto, komen _______ uit Finland?',
          answer: 'jullie',
          options: ['jullie', 'zij', 'wij', 'u'],
          explanation: 'Aanspreken van twee personen tegelijk is "jullie".'
        },
        {
          id: 5,
          prompt: 'Mijn naam is Shirley en _______ kom uit Australië.',
          answer: 'ik',
          options: ['ik', 'zij', 'hij', 'wij'],
          explanation: '"Mijn naam is Shirley" -> spreker zegt "ik".'
        },
        {
          id: 6,
          prompt: 'Mevrouw Govers, hebt _______ het boek?',
          answer: 'u',
          options: ['u', 'jij', 'hij', 'ze'],
          explanation: 'Beleefde aanspreekvorm met "mevrouw" is "u".'
        },
        {
          id: 7,
          prompt: 'Dit is de andere docent. _______ heet Anne-Marie.',
          answer: 'Zij',
          acceptableAnswers: ['Ze', 'Zij'],
          options: ['Zij', 'Hij', 'Het', 'Wij'],
          explanation: 'Anne-Marie is vrouwelijk enkelvoud, dus "Zij" of "Ze".'
        },
        {
          id: 8,
          prompt: 'Jullie docenten zijn Herman en Anne-Marie. _______ geven les.',
          answer: 'Zij',
          acceptableAnswers: ['Ze', 'Zij'],
          options: ['Zij', 'Jullie', 'Wij', 'Hij'],
          explanation: 'Meervoud van personen (3e persoon): "Zij" of "Ze".'
        },
        {
          id: 9,
          prompt: 'Ning komt uit China. En Yin? Komt _______ ook uit China?',
          answer: 'zij',
          acceptableAnswers: ['hij', 'zij', 'ze'],
          options: ['zij', 'jij', 'u', 'wij'],
          explanation: '3e persoon enkelvoud (hij of zij): "Komt zij ook uit China?".'
        },
        {
          id: 10,
          prompt: '_______ bent nu twee dagen in Nederland en _______ spreekt al Nederlands!',
          answer: 'U, u',
          acceptableAnswers: ['U, u', 'U u', 'u, u'],
          options: ['U, u', 'Jij, je', 'Hij, hij', 'Wij, we'],
          explanation: 'De werkwoordsvorm "bent" en "spreekt" met uitroepteken is de beleefde vorm "U".'
        }
      ]
    },
    {
      id: 'opdracht_3_werkwoorden',
      title: 'Opdracht 3: Kies de goede vorm van het werkwoord',
      instruction: 'Kies de juiste vorm van het werkwoord (blz. 25).',
      items: [
        {
          id: 1,
          prompt: 'Hebben / hebt jullie al pauze?',
          answer: 'Hebben',
          options: ['Hebben', 'hebt'],
          explanation: 'Bij "jullie" hoort in de standaardtaal de meervoudsvorm (infinitief): "Hebben jullie al pauze?".'
        },
        {
          id: 2,
          prompt: 'We ga / gaan verder met de tekst.',
          answer: 'gaan',
          options: ['gaan', 'ga'],
          explanation: 'Bij "we" hoort de infinitief: "gaan".'
        },
        {
          id: 3,
          prompt: 'Luister / Luistert u naar de docent?',
          answer: 'Luistert',
          options: ['Luistert', 'Luister'],
          explanation: 'Bij de beleefde vorm "u" krijgt de stam een -t: "Luistert u".'
        },
        {
          id: 4,
          prompt: 'Geef / geeft Richard ook les?',
          answer: 'geeft',
          options: ['geeft', 'Geef'],
          explanation: 'Richard is 3e persoon enkelvoud (hij): stam + t = "geeft".'
        },
        {
          id: 5,
          prompt: 'De docent komt / komen uit Nederland.',
          answer: 'komt',
          options: ['komt', 'komen'],
          explanation: 'De docent is enkelvoud: "komt".'
        },
        {
          id: 6,
          prompt: 'Hij heeft / hebt mijn boek.',
          answer: 'heeft',
          options: ['heeft', 'hebt'],
          explanation: 'Bij "hij" hoort "heeft" (stam+t vorm van hebben).'
        },
        {
          id: 7,
          prompt: 'We stopt / stoppen even.',
          answer: 'stoppen',
          options: ['stoppen', 'stopt'],
          explanation: 'Bij "we" hoort de infinitief: "stoppen".'
        },
        {
          id: 8,
          prompt: 'Ga / gaat je verder met Nederlands?',
          answer: 'Ga',
          options: ['Ga', 'Gaat'],
          explanation: 'Inversie met "je": de -t valt weg! "Ga je verder?".'
        },
        {
          id: 9,
          prompt: 'Diego en Maria komt / komen uit Spanje.',
          answer: 'komen',
          options: ['komen', 'komt'],
          explanation: 'Diego en Maria is meervoud (zij): "komen".'
        },
        {
          id: 10,
          prompt: 'U begint / beginnen met de les.',
          answer: 'begint',
          options: ['begint', 'beginnen'],
          explanation: 'Bij "u" hoort stam + t: "U begint".'
        },
        {
          id: 11,
          prompt: 'Wij wonen / woon nu in Nederland.',
          answer: 'wonen',
          options: ['wonen', 'woon'],
          explanation: 'Bij "wij" hoort de meervoudsvorm: "wonen".'
        },
        {
          id: 12,
          prompt: 'Mevrouw Halvers is / zijn jullie docent.',
          answer: 'is',
          options: ['is', 'zijn'],
          explanation: 'Mevrouw Halvers is enkelvoud: "is".'
        }
      ]
    }
  ],
  readingText: {
    title: 'Persoonlijke Gegevens & Cultuur',
    subtitle: 'Tegen wie zeg je "u" en tegen wie "jij"? (Blz. 28 - 29)',
    content: `In Nederland is de omgangsvorm vaak informeel, maar er zijn duidelijke beleefdheidsregels:

1. Wie spreek je aan met "jij" of "je"?
• Medecursisten, vrienden, familieleden, kinderen en leeftijdsgenoten.
• Docenten in volwasseneneducatie stellen vaak zelf voor: "Zeg maar jij hoor!".

2. Wie spreek je aan met "u"?
• Oudere mensen die je niet kent (bijv. een buurvrouw van 82).
• Onbekende mensen op straat of in officiële instanties (politie, arts, loket).
• Zakelijke contacten of klanten, totdat zij zelf aangeven dat je "jij" mag zeggen.

Adresnotatie in Nederland:
Een Nederlands adres bestaat altijd uit:
• Straatnaam + huisnummer (eventueel toevoeging, bijv. Hofstraat 22 bis)
• Postcode: 4 cijfers + 2 letters (bijv. 3581 TW)
• Woonplaats (bijv. Utrecht)`,
    vocabularyNotes: [
      { word: 'tutoyeren', translation: 'aanspreken met "jij"' },
      { word: 'vousvoyeren', translation: 'aanspreken met "u"' },
      { word: 'de postcode', translation: '4 digits + 2 letters' }
    ]
  },
  pronunciation: {
    title: '1.9 Uitspraak & Zinsaccent',
    soundFocus: 'Klemtoon en intonatie in vraag en antwoord',
    explanation: 'In een vraag krijgt het belangrijkste nieuwe informatiewoord het zinsaccent (nadruk). In het antwoord ligt het accent vaak op het woord dat de vraag beantwoordt.',
    wordList: [
      'Kom je uit Nederland? - Nee, ik kom uit Hongarije.',
      'Heet je buurman Peter? - Nee, mijn docent heet Peter.',
      'Woon je in de Hofstraat? - Nee, ik woon in de Kerkstraat.',
      'Woon je in Groningen? - Nee, ik woon in Leeuwarden.',
      'Woont u hier al twintig jaar? - Nee, ik woon hier al dertig jaar.'
    ],
    minimalPairs: [
      { word1: 'Hofstraat', word2: 'Kerkstraat', contrast: 'Accent op straatnaam' },
      { word1: 'twintig', word2: 'dertig', contrast: 'Accent op getal' },
      { word1: 'Hongarije', word2: 'Nederland', contrast: 'Accent op land' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 1: Welkom',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is de juiste begroeting om 09:30 uur \'s ochtends?',
        answer: 'Goedemorgen',
        options: ['Goedemorgen', 'Goedemiddag', 'Goedenavond', 'Tot ziens'],
        explanation: '\'s Ochtends tot 12:00 uur zeg je "Goedemorgen".'
      },
      {
        id: 2,
        prompt: 'Susy komt _______ Engeland.',
        answer: 'uit',
        options: ['uit', 'in', 'naar', 'van'],
        explanation: 'Herkomst geef je aan met "komen uit": Susy komt uit Engeland.'
      },
      {
        id: 3,
        prompt: 'Kies de juiste vorm: "Waar _______ je nu?" (wonen)',
        answer: 'woon',
        options: ['woon', 'woont', 'wonen', 'woont je'],
        explanation: 'Inversie bij "je": de -t valt weg! "Waar woon je?".'
      },
      {
        id: 4,
        prompt: 'Hoe schrijf je het getal 22 voluit in het Nederlands?',
        answer: 'tweeëntwintig',
        options: ['tweeëntwintig', 'twintigtwee', 'twee-en-twintig', 'tweendertig'],
        explanation: 'In het Nederlands noem je eerst de eenheid en dan het tiental, met trema op de e: tweeëntwintig.'
      },
      {
        id: 5,
        prompt: 'Welk lidwoord hoort bij "land"?',
        answer: 'het',
        options: ['het', 'de'],
        explanation: '"Land" is een onzijdig woord: "het land" (daarom: welk land).'
      },
      {
        id: 6,
        prompt: 'De docenten _______ Karin en Paul.',
        answer: 'zijn',
        options: ['zijn', 'is', 'ben', 'bent'],
        explanation: 'De docenten is meervoud, dus de vorm van zijn is "zijn".'
      },
      {
        id: 7,
        prompt: 'Wat zeg je als je weggaat na de les?',
        answer: 'Tot ziens',
        options: ['Tot ziens', 'Welkom', 'Goedemorgen', 'Alstublieft'],
        explanation: '"Tot ziens" of "Tot morgen" is afscheid nemen.'
      },
      {
        id: 8,
        prompt: 'Wat is een geldige Nederlandse postcode?',
        answer: '3581 TW',
        options: ['3581 TW', 'TW 3581', '35812', '35-81-TW'],
        explanation: 'Nederlandse postcodes bestaan altijd uit vier cijfers gevolgd door twee hoofdletters (bijv. 3581 TW).'
      },
      {
        id: 9,
        prompt: 'Vul in: "Wat is _______ voornaam?" (jij)',
        answer: 'jouw',
        acceptableAnswers: ['jouw', 'je'],
        options: ['jouw', 'jou', 'jij', 'u'],
        explanation: 'Het bezittelijk voornaamwoord bij "jij" is "jouw" of "je".'
      },
      {
        id: 10,
        prompt: 'Wat betekent "Zeg maar jij hoor"?',
        answer: 'Je mag me informeel met "jij" aanspreken.',
        options: [
          'Je mag me informeel met "jij" aanspreken.',
          'Je moet stil zijn in de les.',
          'Je moet u zeggen tegen de docent.',
          'Je spreekt te snel Nederlands.'
        ],
        explanation: '"Zeg maar jij" nodigt de ander uit om informeel te tutoyeren.'
      }
    ]
  },
  culturalOrPracticalNote: 'Tutoyeren in Nederland: Nederlanders zijn over het algemeen heel informeel. De docent zegt in de eerste les al gauw: "Zeg maar jij, hoor!" tegen de cursisten.'
};
