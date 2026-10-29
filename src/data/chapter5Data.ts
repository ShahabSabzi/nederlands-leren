import { CustomLessonData } from '../types/lesson';

export const CHAPTER_5_DATA: CustomLessonData = {
  id: 'hoofdstuk_5',
  chapterNumber: 'Hoofdstuk 5',
  chapterTitle: 'Op de markt',
  description: 'Boodschappen doen op de markt ("Wie is er aan de beurt?"), groente en fruit, traditionele stamppot andijvie koken, prijzen en wisselgeld ("Heb je er dertig cent bij?"), meervoudsvorming (-en, -s, -\'s en geen meervoud bij kilo, euro, cent), adjectiefbuiging (wanneer wel of geen -e), en de imperatief.',
  language: 'Nederlands',
  createdAt: 1727670000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Jasper',
      dutch: 'Wie is er aan de beurt?',
      english: 'Who is next? / Whose turn is it?',
      notes: '"Aan de beurt zijn" = to be one\'s turn. Standard phrase at Dutch market stalls.',
      keyWords: ['aan de beurt']
    },
    {
      id: 2,
      speaker: 'Hans',
      dutch: 'Ik.',
      english: 'Me.',
      notes: 'Direct answer.',
      keyWords: ['ik']
    },
    {
      id: 3,
      speaker: 'Jasper',
      dutch: 'Zeg het maar.',
      english: 'Tell me / How can I help you?',
      notes: 'Friendly imperative: "Zeg het maar".',
      keyWords: ['zeg het maar']
    },
    {
      id: 4,
      speaker: 'Hans',
      dutch: 'Mag ik alsjeblieft een kleine courgette, twee gele paprika\'s en zes mooie tomaten?',
      english: 'May I please have a small courgette, two yellow peppers and six nice tomatoes?',
      notes: 'Ordering plural items and inflected adjectives.',
      keyWords: ['alsjeblieft', 'courgette', 'paprika\'s', 'tomaten']
    },
    {
      id: 5,
      speaker: 'Jasper',
      dutch: 'Hé! De tomaten zijn hier altijd mooi! Anders nog iets?',
      english: 'Hey! The tomatoes are always nice here! Anything else?',
      notes: '"Anders nog iets?" = Anything else?',
      keyWords: ['altijd mooi', 'anders nog iets']
    },
    {
      id: 6,
      speaker: 'Hans',
      dutch: 'Ja, ik wil graag een typisch Nederlands gerecht maken. Onze buren komen morgen eten. Ze komen niet uit Nederland.',
      english: 'Yes, I would like to make a typical Dutch dish. Our neighbours are coming for dinner tomorrow. They are not from the Netherlands.',
      notes: '"typisch Nederlands gerecht" = typical Dutch dish.',
      keyWords: ['typisch', 'gerecht', 'buren', 'eten']
    },
    {
      id: 7,
      speaker: 'Jasper',
      dutch: 'Buitenlanders vinden stamppot andijvie met spekjes vaak heerlijk. En ik heb vandaag mooie, goedkope andijvie.',
      english: 'Foreigners often find endive mash with bacon bits delicious. And today I have nice, cheap endive.',
      notes: '"stamppot andijvie" is an iconic Dutch comfort food dish.',
      keyWords: ['buitenlanders', 'stamppot andijvie', 'spekjes', 'heerlijk']
    },
    {
      id: 8,
      speaker: 'Hans',
      dutch: 'Dat is een goed idee. Hoeveel heb ik nodig voor vier personen?',
      english: 'That is a good idea. How much do I need for four people?',
      notes: '"nodig hebben" = to need.',
      keyWords: ['hoeveel', 'nodig hebben', 'personen']
    },
    {
      id: 9,
      speaker: 'Jasper',
      dutch: 'Ongeveer een halve kilo andijvie en een kilo aardappels. Voor de spekjes moet je naar de slager.',
      english: 'About half a kilo of endive and a kilo of potatoes. For the bacon you need to go to the butcher.',
      notes: 'No plural for "kilo" after numbers ("een halve kilo", "twee kilo").',
      keyWords: ['ongeveer', 'halve kilo', 'kilo aardappels', 'de slager']
    },
    {
      id: 10,
      speaker: 'Hans',
      dutch: 'Prima, doe maar. En doe ook maar een kleine bloemkool, een klein bakje champignons en dat kleine bosje peterselie graag.',
      english: 'Fine, do that. And add a small cauliflower, a small punnet of mushrooms and that small bunch of parsley please.',
      notes: '"het bakje" / "het bosje" (het-words, so "een klein bakje" without -e!).',
      keyWords: ['bloemkool', 'champignons', 'peterselie', 'klein bakje', 'klein bosje']
    },
    {
      id: 11,
      speaker: 'Jasper',
      dutch: 'Verder nog iets? Ik heb mooie, fijne boontjes, verse knoflook, drie komkommers voor één euro...',
      english: 'Anything further? I have lovely, fine green beans, fresh garlic, three cucumbers for one euro...',
      notes: 'Special market deals.',
      keyWords: ['verder nog iets', 'fijne boontjes', 'verse knoflook', 'drie komkommers']
    },
    {
      id: 12,
      speaker: 'Hans',
      dutch: 'Nee, zo is het wel genoeg. Ik ga volgende week op vakantie.',
      english: 'No, that is quite enough. I am going on holiday next week.',
      notes: '"zo is het wel genoeg" = that\'s plenty / enough.',
      keyWords: ['wel genoeg', 'op vakantie']
    },
    {
      id: 13,
      speaker: 'Jasper',
      dutch: 'O, lekker. Waarnaartoe? Hans: Venetië. Jasper: Prachtig. Dat is dan acht dertig. Heb je er dertig cent bij?',
      english: 'Oh, lovely. Where to? Hans: Venice. Jasper: Gorgeous. That is eight thirty (€8.30). Do you have thirty cents to go with it?',
      notes: 'Market pricing and small change.',
      keyWords: ['waarnaartoe', 'acht dertig', 'dertig cent erbij']
    },
    {
      id: 14,
      speaker: 'Jasper',
      dutch: 'Geeft niet. Acht vijftig, negen en dat is tien. Nou, prettige vakantie en prettig weekend! Hans: Dank je wel. Dag!',
      english: 'Doesn\'t matter. Eight fifty, nine and that makes ten (counting change). Well, have a nice holiday and nice weekend! Hans: Thank you. Bye!',
      notes: '"Geeft niet" = Never mind / no problem. Traditional cash-change counting.',
      keyWords: ['geeft niet', 'prettige vakantie', 'prettig weekend']
    }
  ],
  vocabulary: [
    // Complete Woordenlijst 5.2 (Book page 72)
    { id: 'ch5_boodschappen_doen', dutch: 'boodschappen doen', english: 'to go grocery shopping', category: 'boodschappen', partOfSpeech: 'phrase', exampleSentence: 'Hans doet op zaterdag boodschappen op de markt.', exampleEnglish: 'Hans does grocery shopping at the market on Saturday.' },
    { id: 'ch5_de_markt', dutch: 'de markt', english: 'open-air street market', category: 'winkelen', partOfSpeech: 'noun', article: 'de', plural: 'de markten', exampleSentence: 'Op de markt zijn groenten heel goedkoop.', exampleEnglish: 'At the market vegetables are very cheap.' },
    { id: 'ch5_de_groenteboer', dutch: 'de groenteboer', english: 'greengrocer', category: 'beroepen', partOfSpeech: 'noun', article: 'de', plural: 'de groenteboeren', exampleSentence: 'De groenteboer roept: "Wie is er aan de beurt?"', exampleEnglish: 'The greengrocer calls: "Who is next?"' },
    { id: 'ch5_de_beurt', dutch: 'de beurt (aan de beurt zijn)', english: 'turn (to be one\'s turn)', category: 'winkelen', partOfSpeech: 'noun', article: 'de', plural: 'de beurten', exampleSentence: 'Wie is er aan de beurt? - Ik!', exampleEnglish: 'Whose turn is it? - Mine!' },
    { id: 'ch5_alsjeblieft', dutch: 'alsjeblieft / alstublieft', english: 'please / here you are', category: 'beleefdheid', partOfSpeech: 'phrase', exampleSentence: 'Mag ik een kilo appels alsjeblieft?', exampleEnglish: 'May I have a kilo of apples please?' },
    { id: 'ch5_klein', dutch: 'klein (kleine)', english: 'small / little', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Een kleine bloemkool, alstublieft.', exampleEnglish: 'A small cauliflower, please.' },
    { id: 'ch5_de_courgette', dutch: 'de courgette', english: 'courgette / zucchini', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de courgettes', exampleSentence: 'Bak de courgette in olijfolie.', exampleEnglish: 'Fry the courgette in olive oil.' },
    { id: 'ch5_geel', dutch: 'geel (gele)', english: 'yellow', category: 'kleuren', partOfSpeech: 'adjective', exampleSentence: 'Twee gele paprika\'s, graag.', exampleEnglish: 'Two yellow peppers, please.' },
    { id: 'ch5_de_paprika', dutch: 'de paprika', english: 'bell pepper', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de paprika\'s', exampleSentence: 'Paprika\'s zijn rood, geel of groen.', exampleEnglish: 'Bell peppers are red, yellow or green.' },
    { id: 'ch5_mooi', dutch: 'mooi (mooie)', english: 'nice / beautiful', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'De tomaten zijn hier altijd mooi.', exampleEnglish: 'The tomatoes are always nice here.' },
    { id: 'ch5_de_tomaat', dutch: 'de tomaat', english: 'tomato', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de tomaten', exampleSentence: 'Zes mooie rijpe tomaten.', exampleEnglish: 'Six nice ripe tomatoes.' },
    { id: 'ch5_altijd', dutch: 'altijd', english: 'always', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Jasper heeft altijd verse groenten.', exampleEnglish: 'Jasper always has fresh vegetables.' },
    { id: 'ch5_sorry', dutch: 'sorry', english: 'sorry', category: 'beleefdheid', partOfSpeech: 'phrase', exampleSentence: 'Sorry, ik heb geen kleingeld.', exampleEnglish: 'Sorry, I don\'t have small change.' },
    { id: 'ch5_natuurlijk', dutch: 'natuurlijk (tuurlijk)', english: 'of course / naturally', category: 'conversatie', partOfSpeech: 'adverb', exampleSentence: 'Natuurlijk mag u even proeven.', exampleEnglish: 'Of course you may have a taste.' },
    { id: 'ch5_anders_nog_iets', dutch: 'anders nog iets?', english: 'anything else?', category: 'winkelen', partOfSpeech: 'phrase', exampleSentence: 'Twee komkommers. Anders nog iets?', exampleEnglish: 'Two cucumbers. Anything else?' },
    { id: 'ch5_typisch', dutch: 'typisch', english: 'typical', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Stamppot is een typisch Nederlands gerecht.', exampleEnglish: 'Stamppot is a typical Dutch dish.' },
    { id: 'ch5_het_gerecht', dutch: 'het gerecht', english: 'dish / meal', category: 'eten', partOfSpeech: 'noun', article: 'het', plural: 'de gerechten', exampleSentence: 'Wat is jouw favoriete gerecht?', exampleEnglish: 'What is your favourite dish?' },
    { id: 'ch5_de_buitenlander', dutch: 'de buitenlander', english: 'foreigner', category: 'mensen', partOfSpeech: 'noun', article: 'de', plural: 'de buitenlanders', exampleSentence: 'Buitenlanders vinden stroopwafels vaak heerlijk.', exampleEnglish: 'Foreigners often find syrup waffles delicious.' },
    { id: 'ch5_de_stamppot', dutch: 'de stamppot', english: 'mashed potato and vegetable dish', category: 'eten', partOfSpeech: 'noun', article: 'de', plural: 'de stamppotten', exampleSentence: 'In de winter eten Nederlanders vaak stamppot.', exampleEnglish: 'In winter Dutch people often eat stamppot.' },
    { id: 'ch5_de_andijvie', dutch: 'de andijvie', english: 'endive', category: 'groente', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Snijd de andijvie in fijne reepjes.', exampleEnglish: 'Cut the endive into thin strips.' },
    { id: 'ch5_het_spekje', dutch: 'het spekje (de spekjes)', english: 'bacon bit (bacon bits)', category: 'eten', partOfSpeech: 'noun', article: 'het', plural: 'de spekjes', exampleSentence: 'Bak de spekjes knapperig in de pan.', exampleEnglish: 'Fry the bacon bits crispy in the pan.' },
    { id: 'ch5_vaak', dutch: 'vaak', english: 'often', category: 'frequentie', partOfSpeech: 'adverb', exampleSentence: 'Hoe vaak ga je naar de markt?', exampleEnglish: 'How often do you go to the market?' },
    { id: 'ch5_heerlijk', dutch: 'heerlijk', english: 'delicious / wonderful', category: 'eten', partOfSpeech: 'adjective', exampleSentence: 'De verse soep ruikt heerlijk.', exampleEnglish: 'The fresh soup smells delicious.' },
    { id: 'ch5_goedkoop', dutch: 'goedkoop (goedkope)', english: 'cheap / inexpensive', category: 'winkelen', partOfSpeech: 'adjective', exampleSentence: 'De andijvie is vandaag heel goedkoop.', exampleEnglish: 'The endive is very cheap today.' },
    { id: 'ch5_hoeveel', dutch: 'hoeveel', english: 'how much / how many', category: 'vraagwoorden', partOfSpeech: 'pronoun', exampleSentence: 'Hoeveel kost een kilo appels?', exampleEnglish: 'How much does a kilo of apples cost?' },
    { id: 'ch5_nodig_hebben', dutch: 'nodig hebben (heb nodig)', english: 'to need', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Hoeveel heb ik nodig voor vier personen?', exampleEnglish: 'How much do I need for four people?' },
    { id: 'ch5_de_persoon', dutch: 'de persoon', english: 'person / people', category: 'mensen', partOfSpeech: 'noun', article: 'de', plural: 'de personen', exampleSentence: 'Een tafel voor vier personen, graag.', exampleEnglish: 'A table for four persons, please.' },
    { id: 'ch5_ongeveer', dutch: 'ongeveer', english: 'about / approximately', category: 'hoeveelheid', partOfSpeech: 'adverb', exampleSentence: 'Ik heb ongeveer een half uur nodig.', exampleEnglish: 'I need about half an hour.' },
    { id: 'ch5_half', dutch: 'half (halve)', english: 'half', category: 'hoeveelheid', partOfSpeech: 'adjective', exampleSentence: 'Een halve kilo andijvie.', exampleEnglish: 'Half a kilo of endive.' },
    { id: 'ch5_de_kilo', dutch: 'de kilo', english: 'kilo / kilogram', category: 'meten', partOfSpeech: 'noun', article: 'de', plural: 'de kilo\'s', exampleSentence: 'Twee kilo aardappels, alstublieft.', exampleEnglish: 'Two kilos of potatoes, please.' },
    { id: 'ch5_de_aardappel', dutch: 'de aardappel', english: 'potato', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de aardappels / aardappelen', exampleSentence: 'Schil de aardappels en kook ze gaar.', exampleEnglish: 'Peel the potatoes and boil them tender.' },
    { id: 'ch5_de_slager', dutch: 'de slager', english: 'butcher', category: 'beroepen', partOfSpeech: 'noun', article: 'de', plural: 'de slagers', exampleSentence: 'Voor spekjes en worst ga je naar de slager.', exampleEnglish: 'For bacon and sausage you go to the butcher.' },
    { id: 'ch5_de_bloemkool', dutch: 'de bloemkool', english: 'cauliflower', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de bloemkolen', exampleSentence: 'Doe ook maar een kleine bloemkool.', exampleEnglish: 'Add a small cauliflower too.' },
    { id: 'ch5_het_bakje', dutch: 'het bakje', english: 'punnet / small tub', category: 'verpakking', partOfSpeech: 'noun', article: 'het', plural: 'de bakjes', exampleSentence: 'Een klein bakje champignons.', exampleEnglish: 'A small punnet of mushrooms.' },
    { id: 'ch5_de_champignon', dutch: 'de champignon', english: 'mushroom', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de champignons', exampleSentence: 'Champignons zijn lekker in de pasta.', exampleEnglish: 'Mushrooms are tasty in pasta.' },
    { id: 'ch5_de_peterselie', dutch: 'de peterselie', english: 'parsley', category: 'kruiden', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Strooi verse peterselie over het gerecht.', exampleEnglish: 'Sprinkle fresh parsley over the dish.' },
    { id: 'ch5_het_bosje', dutch: 'het bosje', english: 'bunch / bundle', category: 'verpakking', partOfSpeech: 'noun', article: 'het', plural: 'de bosjes', exampleSentence: 'Dat kleine bosje peterselie, graag.', exampleEnglish: 'That small bunch of parsley, please.' },
    { id: 'ch5_verder_nog_iets', dutch: 'verder nog iets?', english: 'anything further / anything else?', category: 'winkelen', partOfSpeech: 'phrase', exampleSentence: 'Verder nog iets? - Nee, dit is alles.', exampleEnglish: 'Anything else? - No, this is all.' },
    { id: 'ch5_vers', dutch: 'vers (verse)', english: 'fresh', category: 'eten', partOfSpeech: 'adjective', exampleSentence: 'Op de markt verkopen ze verse kruiden.', exampleEnglish: 'At the market they sell fresh herbs.' },
    { id: 'ch5_het_boontje', dutch: 'het boontje (sperziebonen)', english: 'green bean', category: 'groente', partOfSpeech: 'noun', article: 'het', plural: 'de boontjes', exampleSentence: 'Ik heb mooie, fijne boontjes in de aanbieding.', exampleEnglish: 'I have lovely fine beans on offer.' },
    { id: 'ch5_de_knoflook', dutch: 'de knoflook', english: 'garlic', category: 'kruiden', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Een teentje verse knoflook.', exampleEnglish: 'A clove of fresh garlic.' },
    { id: 'ch5_de_komkommer', dutch: 'de komkommer', english: 'cucumber', category: 'groente', partOfSpeech: 'noun', article: 'de', plural: 'de komkommers', exampleSentence: 'Drie komkommers voor één euro.', exampleEnglish: 'Three cucumbers for one euro.' },
    { id: 'ch5_de_euro', dutch: 'de euro', english: 'euro', category: 'geld', partOfSpeech: 'noun', article: 'de', plural: 'de euro\'s', exampleSentence: 'Dat kost twee euro.', exampleEnglish: 'That costs two euros.' },
    { id: 'ch5_genoeg', dutch: 'genoeg (wel genoeg)', english: 'enough / plenty', category: 'hoeveelheid', partOfSpeech: 'adverb', exampleSentence: 'Zo is het wel genoeg, dank u.', exampleEnglish: 'That is plenty, thank you.' },
    { id: 'ch5_waarnaartoe', dutch: 'waarnaartoe (waar ... naartoe)', english: 'where to', category: 'vraagwoorden', partOfSpeech: 'adverb', exampleSentence: 'Waarnaartoe ga je op vakantie?', exampleEnglish: 'Where to are you going on holiday?' },
    { id: 'ch5_de_cent', dutch: 'de cent', english: 'cent', category: 'geld', partOfSpeech: 'noun', article: 'de', plural: 'de centen', exampleSentence: 'Heb je er dertig cent bij?', exampleEnglish: 'Do you have thirty cents to go with it?' },
    { id: 'ch5_geeft_niet', dutch: 'geeft niet', english: 'doesn\'t matter / no problem', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Heb je geen kleingeld? Geeft niet hoor!', exampleEnglish: 'No change? No problem at all!' },
    { id: 'ch5_prettig_weekend', dutch: 'prettig weekend!', english: 'have a nice weekend!', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Tot maandag en een heel prettig weekend!', exampleEnglish: 'See you on Monday and have a very nice weekend!' }
  ],
  grammarPoints: [
    {
      id: 'adjectief_buiging_regels',
      title: '5.5 Adjectiefbuiging: De Gouden Regels (-e of geen -e?)',
      summary: 'De-woorden krijgen altijd -e. Het-woorden met "een" krijgen GEEN -e!',
      ruleExplanation: `In het Nederlands verandert de uitgang van een bijvoeglijk naamwoord vóór het zelfstandig naamwoord:

1. DE-WOORDEN & MEERVOUD: ALTIJD EEN -E!
• "de kleine courgette"
• "een kleine courgette"
• "kleine courgettes" (meervoud)
• "de gele paprika's"

2. HET-WOORDEN:
• Met HET / DIT / DAT: WÉL een -e!
  -> "het kleine bosje"
  -> "dit goede idee"
• Met EEN of GEEN lidwoord: GEEN -e!
  -> "een klein bakje" (NIET: een kleine bakje!)
  -> "een typisch Nederlands gerecht" (NIET: typische!)
  -> "goed idee!" (NIET: goede idee!)
  -> "vers fruit" (NIET: verse fruit!)

3. ACHTER HET WERKWOORD (predikatief): NOOIT EEN -E!
• "De tomaten zijn mooi." (nooit: zijn mooie)
• "De andijvie is goedkoop."
• "Het weer is lekker."`,
      examples: [
        { dutch: 'Mag ik een kleine courgette en een klein bakje champignons?', english: 'May I have a small courgette and a small punnet of mushrooms?', note: '"de courgette" -> kleine; "het bakje" -> klein (geen -e!).' },
        { dutch: 'Dat is een goed idee!', english: 'That is a good idea!', note: '"het idee" met "een" -> goed (geen -e).' },
        { dutch: 'De tomaten zijn hier altijd mooi.', english: 'The tomatoes are always nice here.', note: 'Predikatief achter het werkwoord -> geen -e.' }
      ]
    },
    {
      id: 'pluralis_en_eenheden',
      title: '5.4 Pluralis (Meervoudsvorming & Uitzonderingen)',
      summary: 'Meervoud met -en, -s of -\'s, en woorden die GEEN meervoud krijgen.',
      ruleExplanation: `1. Regelmatig meervoud:
• Woorden krijgen meestal +-EN:
  - de tomaat -> de tomaten
  - de persoon -> de personen
  - de boodschap -> de boodschappen
• Woorden op -el, -em, -en, -er, -je krijgen +-S:
  - de aardappel -> de aardappels
  - de komkommer -> de komkommers
  - het spekje -> de spekjes
  - de buitenlander -> de buitenlanders
• Woorden eindigend op lange klinkers -a, -i, -o, -u, -y krijgen +-\'S:
  - de paprika -> de paprika's
  - de kiwi -> de kiwi's
  - de foto -> de foto's

2. GOUDEN REGEL: GEEN MEERVOUD NA GETALLEN BIJ MAAT- EN MUNTEENHEDEN!
Na een getal krijgen woorden voor gewicht, tijd en geld GEEN meervoud:
• twee KILO andijvie (NIET: kilo's)
• tien EURO (NIET: euro's)
• dertig CENT (NIET: centen)
• twee UUR (NIET: uren)
• twintig JAAR (NIET: jaren)`,
      examples: [
        { dutch: 'Dat is dan acht euro en dertig cent.', english: 'That will be eight euros and thirty cents.', note: 'Euro en cent blijven enkelvoud na getallen.' },
        { dutch: 'Mag ik twee kilo aardappels?', english: 'May I have two kilos of potatoes?', note: 'Kilo blijft enkelvoud; aardappels krijgt meervoud.' }
      ]
    },
    {
      id: 'imperatief_vormen',
      title: '5.8 De Imperatief (Gebiedende Wijs)',
      summary: 'Instructies geven: Zeg het maar, Doe maar, Kook de aardappels.',
      ruleExplanation: `De imperatief gebruik je om instructies, advies of opdrachten te geven:

1. De Gewone Imperatief (tegen iedereen: vriend, klant, groep):
Gebruik gewoon de STAM van het werkwoord!
• "Zeg het maar." (Tell me.)
• "Doe maar een bloemkool." (Make it a cauliflower.)
• "Schil de aardappels en kook ze gaar."
• "Kijk eens naar die molen!"

2. Beleefde vorm met U:
STAM + T + U:
• "Doet u maar een kilo aardappels."
• "Gaat u maar even zitten."

Tip: Woordjes als "maar", "even" of "eens" maken de imperatief vriendelijk en niet bazig!`,
      examples: [
        { dutch: 'Zeg het maar, wie is er aan de beurt?', english: 'Tell me, whose turn is it?', note: 'Vriendelijke imperatief met "maar".' },
        { dutch: 'Proef maar even van de kaas.', english: 'Just have a taste of the cheese.', note: 'Imperatief met "maar even".' }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_markt_begrip',
      title: 'Opdracht 1: Begripsvragen dialoog op de markt',
      instruction: 'Beantwoord de vragen over het gesprek (blz. 73).',
      items: [
        {
          id: 1,
          prompt: 'Waar is Hans?',
          answer: 'Hij is op de markt bij de groenteboer.',
          options: ['Hij is op de markt bij de groenteboer.', 'Hij is in de bioscoop.', 'Hij is bij de kledingwinkel.'],
          explanation: 'Hans doet boodschappen op de markt bij groenteboer Jasper.'
        },
        {
          id: 2,
          prompt: 'Hoeveel tomaten koopt Hans?',
          answer: 'zes tomaten',
          options: ['zes tomaten', 'twee tomaten', 'tien tomaten'],
          explanation: 'Hans vraagt: "Mag ik alsjeblieft ... zes mooie tomaten?"'
        },
        {
          id: 3,
          prompt: 'Wat gaat Hans koken voor zijn buren?',
          answer: 'stamppot andijvie met spekjes',
          options: ['stamppot andijvie met spekjes', 'pizza margherita', 'spaghetti carbonara'],
          explanation: 'Jasper raadt stamppot andijvie aan omdat buitenlanders dat vaak heerlijk vinden.'
        },
        {
          id: 4,
          prompt: 'Waar moet Hans naartoe voor de spekjes?',
          answer: 'naar de slager',
          options: ['naar de slager', 'naar de bakker', 'naar de kaasboer'],
          explanation: 'Jasper zegt: "Voor de spekjes moet je naar de slager."'
        },
        {
          id: 5,
          prompt: 'Hoeveel moet Hans betalen?',
          answer: '€ 8,30',
          options: ['€ 8,30', '€ 10,00', '€ 5,50'],
          explanation: 'Jasper zegt: "Dat is dan acht dertig."'
        }
      ]
    },
    {
      id: 'opdracht_3_meervoudsvorming',
      title: 'Opdracht 3: Maak het meervoud',
      instruction: 'Wat is het juiste meervoud? (blz. 75)',
      items: [
        { id: 1, prompt: 'de tomaat -> de _______', answer: 'tomaten', options: ['tomaten', 'tomaats', 'tomaatjes'], explanation: '-en toevoegen (klinker verdubbelt niet bij open lettergreep): tomaten.' },
        { id: 2, prompt: 'de aardappel -> de _______', answer: 'aardappels', options: ['aardappels', 'aardappelen', 'aardappel\'s'], explanation: 'Woorden op -el krijgen meestal een -s: aardappels.' },
        { id: 3, prompt: 'de paprika -> de _______', answer: 'paprika\'s', options: ['paprika\'s', 'paprikas', 'paprikaen'], explanation: 'Woorden op -a krijgen apostrof-s: paprika\'s.' },
        { id: 4, prompt: 'de komkommer -> de _______', answer: 'komkommers', options: ['komkommers', 'komkommeren', 'komkommer\'s'], explanation: 'Woorden op -er krijgen een -s: komkommers.' },
        { id: 5, prompt: 'de champignon -> de _______', answer: 'champignons', options: ['champignons', 'champignonnen', 'champignons\''], explanation: 'Franse leenwoorden krijgen -s: champignons.' },
        { id: 6, prompt: 'de euro na getal: "Ik heb tien _______."', answer: 'euro', options: ['euro', 'euro\'s'], explanation: 'Munteenheden krijgen geen meervoud na getallen: tien euro.' },
        { id: 7, prompt: 'de kilo na getal: "Ik koop twee _______ aardappels."', answer: 'kilo', options: ['kilo', 'kilo\'s'], explanation: 'Gewichtseenheden krijgen geen meervoud na getallen: twee kilo.' }
      ]
    },
    {
      id: 'opdracht_4_adjectief_compleet',
      title: 'Opdracht 4: Kies de goede vorm van het adjectief',
      instruction: 'Welke vorm is correct? Denk aan de de/het regels! (blz. 76)',
      items: [
        { id: 1, prompt: 'Dat is een goed / goede idee.', answer: 'goed', options: ['goed', 'goede'], explanation: '"het idee" met onbepaald "een" krijgt GEEN -e: "een goed idee".' },
        { id: 2, prompt: 'Dit is een fantastisch / fantastische film.', answer: 'fantastische', options: ['fantastische', 'fantastisch'], explanation: '"de film" is een de-woord -> krijgt altijd een -e: "fantastische film".' },
        { id: 3, prompt: 'Je hebt een leuk / leuke bril!', answer: 'leuke', options: ['leuke', 'leuk'], explanation: '"de bril" is een de-woord -> "een leuke bril".' },
        { id: 4, prompt: 'Prettig / Prettige weekend!', answer: 'Prettig', options: ['Prettig', 'Prettige'], explanation: '"het weekend" zonder lidwoord -> geen -e: "Prettig weekend".' },
        { id: 5, prompt: 'Ha, een lekker / lekkere kopje koffie!', answer: 'lekker', options: ['lekker', 'lekkere'], explanation: '"het kopje" (diminutief) met "een" -> geen -e: "een lekker kopje".' },
        { id: 6, prompt: 'Irene heeft een Arabisch / Arabische achternaam.', answer: 'Arabische', options: ['Arabische', 'Arabisch'], explanation: '"de achternaam" is een de-woord -> "een Arabische achternaam".' },
        { id: 7, prompt: 'Hans komt uit een groot / grote gezin.', answer: 'groot', options: ['groot', 'grote'], explanation: '"het gezin" met "een" -> geen -e: "een groot gezin".' },
        { id: 8, prompt: 'We hebben mooi / mooie tomaten.', answer: 'mooie', options: ['mooie', 'mooi'], explanation: 'Meervoud krijgt altijd een -e: "mooie tomaten".' }
      ]
    }
  ],
  readingText: {
    title: '5.9 Tekst: Echte Hollandse Winterkost',
    subtitle: 'Recept voor Andijviestamppot met Spekjes (Blz. 80)',
    content: `Andijviestamppot met spekjes (voor 6 personen):
Ingrediënten:
• 2 kilo aardappels
• 500 gram andijvie
• 250 gram spekjes
• 300 gram cherrytomaten
• 300 gram kaas, in blokjes
• 2 deciliter melk
• 1 rookworst
• boter, peper en zout

Bereiding:
Schil de aardappels en kook ze in 20 minuten gaar. Maak de andijvie schoon en snijd de bladeren in fijne reepjes. 
Bak de spekjes en snijd de tomaten in stukjes. Verwarm intussen de rookworst. 
Stamp de aardappels fijn met melk en een klontje boter tot een smeuïge puree. Roer de rauwe andijvie, de spekjes en de kaas erdoorheen. 
Breng op smaak met peper en zout. Eet smakelijk!`,
    vocabularyNotes: [
      { word: 'de rookworst', translation: 'smoked sausage' },
      { word: 'schillen', translation: 'to peel (potatoes)' },
      { word: 'stampen', translation: 'to mash' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Hoelang moet je de aardappels koken?',
        answer: '20 minuten',
        options: ['20 minuten', '3 kwartier', '2 uur'],
        explanation: 'De tekst vermeldt: "Schil de aardappels en kook ze in 20 minuten gaar."'
      }
    ]
  },
  pronunciation: {
    title: '5.10 Uitspraak: u – uu',
    soundFocus: 'Korte u [ʏ] versus lange uu [y]',
    explanation: 'De korte u hoor je in gesloten lettergrepen (dus, cursus, lukken, zus, augustus, hun, jullie, kunnen). De lange uu hoor je als dubbele klinker of in open lettergrepen (buurman, minuut, uur, nu, buren, u, alstublieft, uw).',
    wordList: [
      'dus', 'cursus', 'lukken', 'zus', 'augustus', 'hun', 'jullie', 'kunnen', 'lukt', 'zullen',
      'buurman', 'minuut', 'uur', 'nu', 'buren', 'u', 'alstublieft', 'uw'
    ],
    minimalPairs: [
      { word1: 'lukt', word2: 'luukt', contrast: 'korte u vs lange uu' },
      { word1: 'buren', word2: 'burren', contrast: 'lange u in open lettergreep vs korte u' },
      { word1: 'uur', word2: 'Urk', contrast: 'lange uu vs korte u' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 5: Op de markt',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat roept de marktkoopman als hij klaar is met de vorige klant?',
        answer: 'Wie is er aan de beurt?',
        options: [
          'Wie is er aan de beurt?',
          'Wie heeft er honger?',
          'Wie wil er naar huis?',
          'Wie ben jij?'
        ],
        explanation: '"Wie is er aan de beurt?" is de vaste uitroep op de markt.'
      },
      {
        id: 2,
        prompt: 'Kies het juiste lidwoord en adjectief: "Mag ik _______ (klein) courgette?"',
        answer: 'een kleine',
        options: ['een kleine', 'een klein', 'het kleine', 'het klein'],
        explanation: '"de courgette" is een de-woord, dus krijgt het adjectief altijd een -e: "een kleine courgette".'
      },
      {
        id: 3,
        prompt: 'Kies het juiste adjectief: "Mag ik een _______ (klein) bakje champignons?"',
        answer: 'klein',
        options: ['klein', 'kleine'],
        explanation: '"het bakje" is een het-woord. Na "een" krijgt het adjectief GEEN -e: "een klein bakje".'
      },
      {
        id: 4,
        prompt: 'Hoe zeg je: "Dat kost € 2,-"?',
        answer: 'Dat kost twee euro.',
        options: ['Dat kost twee euro.', 'Dat kost twee euro\'s.', 'Dat kost twee euren.', 'Dat kost tweede euro.'],
        explanation: 'Euro krijgt na getallen geen meervoud: "twee euro".'
      },
      {
        id: 5,
        prompt: 'Wat is het meervoud van "de paprika"?',
        answer: 'de paprika\'s',
        options: ['de paprika\'s', 'de paprikas', 'de paprikaen', 'de paprika\'en'],
        explanation: 'Woorden op een open -a krijgen een apostrof-s in het meervoud: de paprika\'s.'
      },
      {
        id: 6,
        prompt: 'Wat betekent: "Heb je er dertig cent bij?"',
        answer: 'Kun je dertig cent kleingeld bijgeven zodat ik rond kan teruggeven?',
        options: [
          'Kun je dertig cent kleingeld bijgeven zodat ik rond kan teruggeven?',
          'Heb je dertig cent gestolen?',
          'Kost dit dertig cent extra?',
          'Wil je dertig cent van mij lenen?'
        ],
        explanation: 'Nederlandse winkeliers vragen naar gepast kleingeld om makkelijk wisselgeld terug te geven.'
      },
      {
        id: 7,
        prompt: 'Wat is de imperatief van "zeggen" in: "_______ het maar!"',
        answer: 'Zeg',
        options: ['Zeg', 'Zegt', 'Zeggen', 'Zegt u'],
        explanation: 'De gewone imperatief is de zuivere stam van het werkwoord: "Zeg het maar!".'
      },
      {
        id: 8,
        prompt: 'Wat zijn de hoofdingrediënten van traditionele stamppot andijvie?',
        answer: 'Aardappels, andijvie en spekjes.',
        options: [
          'Aardappels, andijvie en spekjes.',
          'Rijst, kip en tomaten.',
          'Pasta, kaas en champignons.',
          'Brood, boter en jam.'
        ],
        explanation: 'Stamppot andijvie bestaat uit gestampte aardappels met fijngesneden andijvie en uitgebakken spekjes.'
      },
      {
        id: 9,
        prompt: 'Wat is het meervoud van "de aardappel"?',
        answer: 'de aardappels',
        options: ['de aardappels', 'de aardappels\'', 'de aardappel\'s', 'de aardappelen\'s'],
        explanation: 'Woorden op -el krijgen meestal -s: de aardappels.'
      },
      {
        id: 10,
        prompt: 'Wat antwoordt de groenteboer als je geen kleingeld hebt?',
        answer: 'Geeft niet.',
        options: ['Geeft niet.', 'Dat is verplicht.', 'Ga naar de politie.', 'Ik verkoop niets.'],
        explanation: '"Geeft niet" betekent "geen probleem / never mind".'
      }
    ]
  },
  culturalOrPracticalNote: 'De markt in Nederland: Op de markt verkopen kooplui groenten, fruit, kaas, stroopwafels en vis (haring). Prijzen zijn vaak veel lager dan in de supermarkt en de sfeer is gezellig en luidruchtig!'
};
