import { CustomLessonData } from '../types/lesson';

export const CHAPTER_10_DATA: CustomLessonData = {
  id: 'hoofdstuk_10',
  chapterNumber: 'Hoofdstuk 10',
  chapterTitle: 'Bij de fietsenmaker',
  description: 'Fietscultuur in Nederland, fietsonderdelen (stuur, zadel, trapper, remmen, bagagedrager), vragen hoe je iets noemt ("Hoe heet zo\'n ding?"), bedoelen vs betekenen, en HET IMPERFECTUM (onvoltooid verleden tijd: stam+te/de, modale werkwoorden wilde/moest/kon, en perfectum vs imperfectum).',
  language: 'Nederlands',
  createdAt: 1727730000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Fietsenmaker',
      dutch: 'Nou, ik hoef u niet te vragen wat u hier komt doen!',
      english: 'Well, I don\'t need to ask you what you are coming to do here!',
      notes: '"hoeven niet te..." = don\'t need to.',
      keyWords: ['niet te vragen', 'doen']
    },
    {
      id: 2,
      speaker: 'Mevrouw Kirbas',
      dutch: 'Nee, dat is inderdaad wel duidelijk, mijn fiets lijkt wel total loss.',
      english: 'No, that is indeed quite clear, my bicycle looks like a write-off / total loss.',
      notes: '"inderdaad" = indeed. "total loss" = total loss / kapot.',
      keyWords: ['inderdaad', 'duidelijk', 'total loss']
    },
    {
      id: 3,
      speaker: 'Fietsenmaker',
      dutch: 'Wat is er gebeurd?',
      english: 'What happened?',
      notes: 'Klassieke vraag bij een ongeluk of pech.',
      keyWords: ['wat is er gebeurd']
    },
    {
      id: 4,
      speaker: 'Mevrouw Kirbas',
      dutch: 'Ik ben gevallen. Het regende gisteren en het was een beetje glad. Ik fietste weg van onze praktijk, wilde rechts afslaan en gleed weg. Ik mankeerde zelf niets, maar mijn fiets wel.',
      english: 'I fell off. It was raining yesterday and it was a bit slippery. I cycled away from our surgery, wanted to turn right and slipped. I wasn\'t hurt myself, but my bike was.',
      notes: 'Imperfectum vormen: regende, was, fietste, wilde, gleed, mankeerde. "vallen" neemt zijn ("ik ben gevallen").',
      keyWords: ['ben gevallen', 'regende', 'glad', 'fietste', 'wilde afslaan', 'gleed weg', 'mankeerde']
    },
    {
      id: 5,
      speaker: 'Mevrouw Kirbas',
      dutch: 'Er zit een slag in het wiel, het stuur en het zadel staan scheef en dat... dat ding - hoe zeg je dat in het Nederlands? - is afgebroken. Hoe heet zo\'n ding?',
      english: 'The wheel is buckled, the handlebars and saddle are crooked and that... that thing - how do you say that in Dutch? - is snapped off. What is such a thing called?',
      notes: '"een slag in het wiel" = buckled wheel. "het stuur" = handlebars. "het zadel" = saddle. "Hoe heet zo\'n ding?" = What is such a thing called?',
      keyWords: ['slag in het wiel', 'stuur', 'zadel', 'scheef', 'hoe zeg je dat in het Nederlands', 'hoe heet zo\'n ding']
    },
    {
      id: 6,
      speaker: 'Fietsenmaker',
      dutch: 'U bedoelt de bagagedrager. De trapper is ook kapot en de banden zijn erg glad.',
      english: 'You mean the luggage rack / carrier. The pedal is also broken and the tyres are very slick / smooth.',
      notes: 'Onderdelen: de bagagedrager, de trapper, de banden.',
      keyWords: ['bedoelen', 'bagagedrager', 'trapper', 'banden', 'glad']
    },
    {
      id: 7,
      speaker: 'Mevrouw Kirbas',
      dutch: 'Sorry, ik heb u niet verstaan. Wat zegt u?',
      english: 'Sorry, I didn\'t catch that / hear you properly. What did you say?',
      notes: '"verstaan" = to hear/comprehend acoustically.',
      keyWords: ['niet verstaan', 'wat zegt u']
    },
    {
      id: 8,
      speaker: 'Fietsenmaker',
      dutch: 'De banden zijn erg oud, dus het is wel logisch dat u bent gevallen. Ik zal de hele fiets even controleren. Ik maak hem weer tiptop in orde.',
      english: 'The tyres are very old, so it\'s quite logical that you fell. I will check the whole bike. I\'ll make it tip-top again.',
      notes: '"tiptop in orde" = in prime condition.',
      keyWords: ['logisch', 'controleren', 'tiptop in orde']
    },
    {
      id: 9,
      speaker: 'Mevrouw Kirbas',
      dutch: 'Wat bedoelt u? U maakt hem weer als nieuw? Nou, heel graag! Wanneer is hij klaar?',
      english: 'What do you mean? You\'ll make it like new again? Well, I\'d love that! When will it be ready?',
      notes: '"als nieuw" = as good as new. "klaar" = ready.',
      keyWords: ['wat bedoelt u', 'als nieuw', 'wanneer is hij klaar']
    },
    {
      id: 10,
      speaker: 'Fietsenmaker',
      dutch: 'Morgen is het Koningsdag, een feestdag. Dat betekent dat we dan gesloten zijn. Overmorgen aan het einde van de dag kunt u hem weer ophalen.',
      english: 'Tomorrow is King\'s Day, a public holiday. That means that we are closed then. The day after tomorrow at the end of the day you can pick it up again.',
      notes: '"betekent" = means. "overmorgen" = the day after tomorrow. "ophalen" = to collect/pick up.',
      keyWords: ['Koningsdag', 'feestdag', 'betekent', 'gesloten', 'overmorgen', 'ophalen']
    }
  ],
  vocabulary: [
    {
      id: 'de_fiets',
      dutch: 'de fiets (de omafiets)',
      english: 'bicycle (traditional Dutch upright city bike)',
      category: 'fiets',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietsen',
      exampleSentence: 'In Nederland heeft bijna elke inwoner minstens één fiets.',
      exampleEnglish: 'In the Netherlands almost every inhabitant has at least one bicycle.'
    },
    {
      id: 'de_fietsenmaker',
      dutch: 'de fietsenmaker',
      english: 'bicycle repair shop / mechanic',
      category: 'fiets',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietsenmakers',
      exampleSentence: 'Ik breng mijn kapotte fiets naar de fietsenmaker om de hoek.',
      exampleEnglish: 'I take my broken bike to the bike mechanic around the corner.'
    },
    {
      id: 'het_stuur',
      dutch: 'het stuur',
      english: 'handlebars / steering wheel',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de sturen',
      exampleSentence: 'Houd altijd beide handen aan het stuur.',
      exampleEnglish: 'Always keep both hands on the handlebars.'
    },
    {
      id: 'het_zadel',
      dutch: 'het zadel',
      english: 'saddle / bike seat',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de zadels',
      exampleSentence: 'Mijn zadel staat te laag voor mijn lange benen.',
      exampleEnglish: 'My saddle is too low for my long legs.'
    },
    {
      id: 'de_trapper',
      dutch: 'de trapper (het pedaal)',
      english: 'pedal',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de trappers',
      exampleSentence: 'Mijn voet gleed van de gladde trapper af.',
      exampleEnglish: 'My foot slipped off the slick pedal.'
    },
    {
      id: 'de_ketting',
      dutch: 'de fietsketting',
      english: 'bike chain',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kettingen',
      exampleSentence: 'Mijn ketting ligt eraf, heb je een doekje?',
      exampleEnglish: 'My chain has come off, do you have a rag?'
    },
    {
      id: 'de_rem',
      dutch: 'de rem (handrem / terugtraprem)',
      english: 'brake (handbrake / coaster brake)',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de remmen',
      exampleSentence: 'Omafietsen hebben vaak een oerdegelijke terugtraprem.',
      exampleEnglish: 'Traditional Dutch bikes often have a robust coaster brake.'
    },
    {
      id: 'de_band',
      dutch: 'de band (binnenband / buitenband)',
      english: 'tyre (inner tube / outer tyre)',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de banden',
      exampleSentence: 'De buitenband is helemaal versleten en heeft geen profiel meer.',
      exampleEnglish: 'The outer tyre is completely worn out and has no tread left.'
    },
    {
      id: 'de_lekke_band',
      dutch: 'de lekke band',
      english: 'flat tyre / puncture',
      category: 'pech',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de lekke banden',
      exampleSentence: 'Ik kwam te laat op school door een lekke band.',
      exampleEnglish: 'I was late for school because of a flat tyre.'
    },
    {
      id: 'het_wiel',
      dutch: 'het wiel (de spaken)',
      english: 'wheel (spokes)',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de wielen',
      exampleSentence: 'Na de botsing zat er een flinke slag in het voorwiel.',
      exampleEnglish: 'After the collision there was a big buckle in the front wheel.'
    },
    {
      id: 'de_bagagedrager',
      dutch: 'de bagagedrager',
      english: 'luggage carrier / rear rack',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bagagedragers',
      exampleSentence: 'In Nederland zit er vaak iemand achterop de bagagedrager.',
      exampleEnglish: 'In the Netherlands someone often sits on the back rack.'
    },
    {
      id: 'de_fietsbel',
      dutch: 'de fietsbel',
      english: 'bicycle bell',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietsbellen',
      exampleSentence: 'Bel even als je voetgangers wilt inhalen.',
      exampleEnglish: 'Ring your bell if you want to overtake pedestrians.'
    },
    {
      id: 'de_verlichting',
      dutch: 'de fietsverlichting (voor- en achterlicht)',
      english: 'bike lights (front and rear light)',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'Zonder licht fietsen in het donker levert een boete op.',
      exampleEnglish: 'Cycling without lights in the dark will result in a fine.'
    },
    {
      id: 'het_slot',
      dutch: 'het slot (ringslot / kettingslot)',
      english: 'lock (frame lock / chain lock)',
      category: 'onderdelen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de sloten',
      exampleSentence: 'Zet je fiets altijd met twee sloten vast aan een hek.',
      exampleEnglish: 'Always lock your bike to a fence with two locks.'
    },
    {
      id: 'de_fietspomp',
      dutch: 'de fietspomp',
      english: 'bicycle pump',
      category: 'gereedschap',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietspompen',
      exampleSentence: 'Mag ik jouw fietspomp even lenen? Mijn band is zacht.',
      exampleEnglish: 'May I borrow your bike pump? My tyre is soft.'
    },
    {
      id: 'de_fietstas',
      dutch: 'de fietstas',
      english: 'pannier / bicycle bag',
      category: 'accessoires',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietstassen',
      exampleSentence: 'In de fietstassen passen alle boodschappen van de markt.',
      exampleEnglish: 'In the panniers fit all the groceries from the market.'
    },
    {
      id: 'het_fietspad',
      dutch: 'het fietspad',
      english: 'cycle lane / bike path',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de fietspaden',
      exampleSentence: 'Nederland heeft tienduizenden kilometers rood asfalt aan fietspaden.',
      exampleEnglish: 'The Netherlands has tens of thousands of kilometres of red asphalt bike lanes.'
    },
    {
      id: 'de_fietser',
      dutch: 'de fietser',
      english: 'cyclist',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fietsers',
      exampleSentence: 'Automobilisten moeten goed uitkijken voor fietsers.',
      exampleEnglish: 'Motorists must watch out carefully for cyclists.'
    },
    {
      id: 'de_stalling',
      dutch: 'de fietsenstalling',
      english: 'bicycle parking / storage garage',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de stallingen',
      exampleSentence: 'Bij het treinstation van Utrecht is de grootste fietsenstalling ter wereld.',
      exampleEnglish: 'At Utrecht railway station is the largest bike parking in the world.'
    },
    {
      id: 'band_plakken',
      dutch: 'een band plakken',
      english: 'to patch / fix a punctured tyre',
      category: 'reparatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Elk Nederlands kind leert hoe je zelf een band moet plakken.',
      exampleEnglish: 'Every Dutch child learns how to patch a tyre themselves.'
    },
    {
      id: 'oppompen',
      dutch: 'oppompen',
      english: 'to pump up / inflate',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik moet mijn banden even oppompen.',
      exampleEnglish: 'I need to pump up my tyres.'
    },
    {
      id: 'repareren',
      dutch: 'repareren / maken',
      english: 'to repair / fix',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Kunt u de remmen van mijn fiets repareren?',
      exampleEnglish: 'Can you repair the brakes of my bicycle?'
    },
    {
      id: 'controleren',
      dutch: 'controleren',
      english: 'to check / inspect',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'De fietsenmaker controleert de ketting en de verlichting.',
      exampleEnglish: 'The mechanic checks the chain and the lights.'
    },
    {
      id: 'vervangen',
      dutch: 'vervangen',
      english: 'to replace',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'De versleten remblokjes moeten vervangen worden.',
      exampleEnglish: 'The worn brake pads must be replaced.'
    },
    {
      id: 'vallen',
      dutch: 'vallen (gevallen)',
      english: 'to fall (fallen)',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij is gisteren van haar fiets gevallen op het gladde wegdek.',
      exampleEnglish: 'She fell off her bike yesterday on the slippery road.'
    },
    {
      id: 'wegglijden',
      dutch: 'wegglijden (uitglijden)',
      english: 'to slip / slide away',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'In de bocht gleed mijn voorwiel ineens weg over natte bladeren.',
      exampleEnglish: 'In the corner my front wheel suddenly slipped on wet leaves.'
    },
    {
      id: 'verstaan',
      dutch: 'verstaan',
      english: 'to hear / understand acoustically',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Sorry, er rijdt net een vrachtwagen voorbij, ik versta u niet.',
      exampleEnglish: 'Sorry, a lorry is passing right now, I can\'t hear you.'
    },
    {
      id: 'bedoelen',
      dutch: 'bedoelen',
      english: 'to mean (intent of a speaker)',
      category: 'communicatie',
      partOfSpeech: 'verb',
      exampleSentence: 'Wat bedoelt u daarmee?',
      exampleEnglish: 'What do you mean by that?'
    },
    {
      id: 'betekenen',
      dutch: 'betekenen',
      english: 'to mean (definition / signify of words/things)',
      category: 'communicatie',
      partOfSpeech: 'verb',
      exampleSentence: 'Wat betekent het woord "bagagedrager"?',
      exampleEnglish: 'What does the word "bagagedrager" mean?'
    },
    {
      id: 'hoe_heet_zo_n_ding',
      dutch: 'hoe heet zo\'n ding?',
      english: 'what is such a thing called?',
      category: 'communicatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Dat ding waar je je tas op zet, hoe heet zo\'n ding?',
      exampleEnglish: 'That thing you put your bag on, what is such a thing called?'
    },
    {
      id: 'slag_in_het_wiel',
      dutch: 'een slag in het wiel',
      english: 'a buckled / wobbly wheel',
      category: 'pech',
      partOfSpeech: 'phrase',
      exampleSentence: 'Door de botsing tegen de stoeprand zit er een slag in het wiel.',
      exampleEnglish: 'Due to hitting the curb there is a buckle in the wheel.'
    },
    {
      id: 'total_loss',
      dutch: 'total loss',
      english: 'written off / beyond repair',
      category: 'pech',
      partOfSpeech: 'adjective',
      exampleSentence: 'Het frame is gebroken, de fiets is total loss.',
      exampleEnglish: 'The frame is cracked, the bike is a total loss.'
    },
    {
      id: 'scheef',
      dutch: 'scheef',
      english: 'crooked / askew',
      category: 'eigenschap',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zet het stuur recht, het staat helemaal scheef.',
      exampleEnglish: 'Straighten the handlebars, they are completely crooked.'
    },
    {
      id: 'glad',
      dutch: 'glad',
      english: 'slippery / slick',
      category: 'eigenschap',
      partOfSpeech: 'adjective',
      exampleSentence: 'Pas op bij het remmen, de klinkers zijn erg glad.',
      exampleEnglish: 'Watch out when braking, the cobblestones are very slippery.'
    },
    {
      id: 'tiptop_in_orde',
      dutch: 'tiptop in orde (als nieuw)',
      english: 'in tip-top condition (as good as new)',
      category: 'uitdrukkingen',
      partOfSpeech: 'phrase',
      exampleSentence: 'Overmorgen is uw fiets weer tiptop in orde.',
      exampleEnglish: 'The day after tomorrow your bike will be in tip-top shape again.'
    },
    {
      id: 'klaar',
      dutch: 'klaar',
      english: 'ready / finished',
      category: 'tijd',
      partOfSpeech: 'adjective',
      exampleSentence: 'Wanneer is de reparatie klaar?',
      exampleEnglish: 'When will the repair be ready?'
    },
    {
      id: 'ophalen',
      dutch: 'ophalen',
      english: 'to collect / pick up',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'U kunt uw fiets vrijdagmiddag weer ophalen.',
      exampleEnglish: 'You can pick up your bicycle again on Friday afternoon.'
    },
    {
      id: 'koningsdag',
      dutch: 'Koningsdag (27 april)',
      english: 'King\'s Day (national Dutch holiday)',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'Op Koningsdag kleurt heel Nederland oranje en zijn winkels gesloten.',
      exampleEnglish: 'On King\'s Day all of the Netherlands turns orange and shops are closed.'
    },
    {
      id: 'de_feestdag',
      dutch: 'de feestdag (vrije dag)',
      english: 'public holiday (day off)',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de feestdagen',
      exampleSentence: 'Tweede Paasdag is een officiële Nederlandse feestdag.',
      exampleEnglish: 'Easter Monday is an official Dutch public holiday.'
    },
    {
      id: 'overmorgen',
      dutch: 'overmorgen',
      english: 'the day after tomorrow',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Vandaag is woensdag, morgen is donderdag en overmorgen is vrijdag.',
      exampleEnglish: 'Today is Wednesday, tomorrow is Thursday and the day after tomorrow is Friday.'
    }
  ],
  grammarPoints: [
    {
      id: 'imperfectum_regelmatig',
      title: '10.5 Het Imperfectum: Regelmatige Werkwoorden (stam + te/de)',
      summary: 'De onvoltooid verleden tijd: enkelvoud -te/-de, meervoud -ten/-den.',
      ruleExplanation: `Het Imperfectum gebruik je vooral bij het vertellen van verhalen, beschrijvingen in het verleden en situaties die langer duurden.

De regel van \'t kofschip (soft ketchup) geldt ook hier:
Kijk naar de LAATSTE LETTER VAN DE WERKWOORDSTAM:
1. Is het s, f, t, k, ch of p? -> Voeg -TE (enkelvoud) of -TEN (meervoud) toe!
   • fietsen -> stam fiets (s) -> ik fietste / wij fietsten
   • hopen -> stam hoop (p) -> ik hoopte / wij hoopten
   • koken -> stam kook (k) -> ik kookte / wij kookten
   • missen -> stam mis (s) -> ik miste / wij misten

2. Is het een ANDERE letter? -> Voeg -DE of -DEN toe!
   • regenen -> stam regen (n) -> het regende
   • horen -> stam hoor (r) -> ik hoorde / wij hoorden
   • wonen -> stam woon (n) -> ik woonde / wij woonden
   • spelen -> stam speel (l) -> ik speelde / wij speelden`,
      examples: [
        {
          dutch: 'Het regende gisteren pijpenstelen toen ik naar huis fietste.',
          english: 'It was raining cats and dogs yesterday when I cycled home.',
          note: 'regenen -> regende; fietsen -> fietste.'
        },
        {
          dutch: 'Wij woonden vroeger in een klein dorp.',
          english: 'We used to live in a small village.',
          note: 'wonen -> woonden (meervoud met -den).'
        }
      ]
    },
    {
      id: 'modale_werkwoorden_imperfectum',
      title: '10.6 Modale werkwoorden in het Imperfectum',
      summary: 'Wilde, moest, kon, mocht en zou.',
      ruleExplanation: `De verleden tijd van modale werkwoorden is heel regelmatig in gebruik en essentieel voor het vertellen van verhalen:

• Willen (wensen): ik wilde / wou, wij wilden
  - "Ik wilde rechts afslaan." (I wanted to turn right)
• Moeten (verplichting): ik moest, wij moesten
  - "Ik moest hard remmen voor een kat." (I had to brake hard)
• Kunnen (vermogen): ik kon, wij konden
  - "Zij kon haar fietssleutel niet vinden." (She could not find her bike key)
• Mogen (toestemming): ik mocht, wij mochten
  - "Mocht je vroeger zonder helm fietsen?" (Were you allowed to cycle without a helmet?)
• Zullen (zou): ik zou, wij zouden
  - "Hij zei dat hij de band zou plakken." (He said he would patch the tyre)`,
      examples: [
        {
          dutch: 'Ik wilde gisteren mijn fiets ophalen, maar de winkel was gesloten.',
          english: 'I wanted to pick up my bike yesterday, but the shop was closed.',
          note: 'willen in het verleden -> wilde.'
        },
        {
          dutch: 'We moesten tien kilometer omfietsen door wegwerkzaamheden.',
          english: 'We had to detour ten kilometres due to roadworks.',
          note: 'moeten in meervoud verleden tijd -> moesten.'
        }
      ]
    },
    {
      id: 'perfectum_vs_imperfectum',
      title: '10.7 Perfectum vs Imperfectum (Welke verleden tijd kies je?)',
      summary: 'Feiten en acties (perfectum) versus beschrijving en context (imperfectum).',
      ruleExplanation: `Het Nederlands heeft twee verleden tijden:

1. Gebruik het IMPERFECTUM voor:
• Toestanden, achtergrond en sfeer: "Het regende en het was erg koud."
• Gewoontes van vroeger: "Vroeger fietste ik elke dag naar school."
• De werkwoorden zijn, hebben en modale werkwoorden: "Ik was ziek", "Ik had pech", "Ik wilde slapen."

2. Gebruik het PERFECTUM voor:
• Concrete gebeurtenissen en feiten die nu afgerond zijn: "Ik ben gisteren gevallen."
• Nieuws en recente mededelingen: "Ik heb mijn band geplakt."
• Korte acties die elkaar opvolgen.`,
      examples: [
        {
          dutch: 'Toen ik naar huis fietste (imperfectum), ben ik gevallen (perfectum).',
          english: 'While I was cycling home, I fell off.',
          note: 'Achtergrondactiviteit (fietste) onderbroken door een gebeurtenis (ben gevallen).'
        }
      ]
    },
    {
      id: 'bedoelen_vs_betekenen',
      title: '10.8 Bedoelen vs Betekenen',
      summary: 'Mensen bedoelen iets; woorden en borden betekenen iets.',
      ruleExplanation: `Een van de meest gemaakte fouten door anderstaligen:

1. BEDOELEN = Wat een PERSOON wil zeggen:
• "Wat BEDOEL je?" (What do you mean?)
• "Ik BEDOELde dat niet zo." (I didn\'t mean it like that)
• "U BEDOELT zeker de bagagedrager?"

2. BETEKENEN = Wat een WOORD, SYMBOOL of SITUATIE inhoudt:
• "Wat BETEKENT dit woord?" (What does this word mean?)
• "Dat verkeersbord BETEKENT dat fietsers voorrang hebben."
• "Morgen is Koningsdag. Dat BETEKENT dat de winkels dicht zijn."`,
      examples: [
        {
          dutch: 'Wat bedoelt u daarmee? - Ik bedoel dat de reparatie gratis is.',
          english: 'What do you mean by that? - I mean that the repair is free.',
          note: 'Mensen als onderwerp -> bedoelen.'
        },
        {
          dutch: 'Wat betekent dit Nederlandse spreekwoord?',
          english: 'What does this Dutch proverb mean?',
          note: 'Woord/spreekwoord als onderwerp -> betekenen.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_begrip',
      title: 'Opdracht 1: Begrip van het gesprek bij de fietsenmaker',
      instruction: 'Zijn de beweringen WAAR of NIET WAAR op basis van de tekst?',
      items: [
        {
          id: 1,
          prompt: 'Mevrouw Kirbas raakte zwaargewond tijdens haar val.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Ze zegt zelf: "Ik mankeerde zelf niets, maar mijn fiets wel."'
        },
        {
          id: 2,
          prompt: 'Het regende gisteren en het wegdek was erg glad.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Ze gleed weg toen ze wilde afslaan op de natte weg.'
        },
        {
          id: 3,
          prompt: 'De fietsenmaker kan de fiets morgen repareren en afleveren.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Morgen is het Koningsdag en is de winkel gesloten. Overmorgen is hij klaar.'
        },
        {
          id: 4,
          prompt: 'De banden van mevrouw Kirbas waren al erg versleten en glad.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: De fietsenmaker stelt vast dat de banden erg oud en glad zijn.'
        },
        {
          id: 5,
          prompt: 'Het onderdeel dat afgebroken is, heet volgens de fietsenmaker de "bagagedrager".',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Mevrouw Kirbas vroeg "Hoe heet zo\'n ding?" en de fietsenmaker noemt de bagagedrager.'
        }
      ]
    },
    {
      id: 'opdracht_2_imperfectum',
      title: 'Opdracht 2: Imperfectum vormen (-te of -de)',
      instruction: 'Welke verleden tijdsvorm is correct volgens \'t kofschip?',
      items: [
        {
          id: 1,
          prompt: 'fietsen -> Ik _______ gisteren naar mijn werk door de storm.',
          answer: 'fietste',
          options: ['fietste', 'fietsde'],
          explanation: 'stam fiets (s zit in \'t kofschip) -> fietste.'
        },
        {
          id: 2,
          prompt: 'regenen -> Het _______ de hele middag onophoudelijk.',
          answer: 'regende',
          options: ['regende', 'regente'],
          explanation: 'stam regen (n zit niet in \'t kofschip) -> regende.'
        },
        {
          id: 3,
          prompt: 'wonen -> Wij _______ vroeger in een oud grachtenpand.',
          answer: 'woonden',
          options: ['woonden', 'woonten'],
          explanation: 'stam woon (n zit niet in kofschip) -> meervoud woonden.'
        },
        {
          id: 4,
          prompt: 'hopen -> Zij _______ op goed weer tijdens Koningsdag.',
          answer: 'hoopte',
          options: ['hoopte', 'hoopde'],
          explanation: 'stam hoop (p zit in \'t kofschip) -> hoopte.'
        },
        {
          id: 5,
          prompt: 'praten -> De docent en de student _______ over het examen.',
          answer: 'praatten',
          options: ['praatten', 'praatden'],
          explanation: 'stam praat (t zit in \'t kofschip) -> meervoud praatten.'
        }
      ]
    },
    {
      id: 'opdracht_3_modaal_verleden',
      title: 'Opdracht 3: Modale werkwoorden in het Imperfectum',
      instruction: 'Vul de juiste vorm van willen, moeten of kunnen in.',
      items: [
        {
          id: 1,
          prompt: 'Ik _______ gisteren rechts afslaan, maar mijn fiets gleed weg.',
          answer: 'wilde',
          options: ['wilde', 'moest', 'kon'],
          explanation: 'Wens/voornemen: willen -> wilde.'
        },
        {
          id: 2,
          prompt: 'Omdat de trein niet reed, _______ we veertig minuten fietsen.',
          answer: 'moesten',
          options: ['moesten', 'wilden', 'mochten'],
          explanation: 'Noodzaak/verplichting door omstandigheden: moesten.'
        },
        {
          id: 3,
          prompt: 'Zij had spierpijn en _______ vandaag bijna niet lopen.',
          answer: 'kon',
          options: ['kon', 'mocht', 'moest'],
          explanation: 'Fysiek niet in staat zijn: kunnen -> kon.'
        }
      ]
    },
    {
      id: 'opdracht_4_bedoelen_vs_betekenen',
      title: 'Opdracht 4: Bedoelen of Betekenen?',
      instruction: 'Kies tussen de vormen van bedoelen en betekenen.',
      items: [
        {
          id: 1,
          prompt: 'Wat _______ jij eigenlijk met die opmerking?',
          answer: 'bedoel',
          options: ['bedoel', 'beteken'],
          explanation: 'Jij (een persoon) -> bedoel.'
        },
        {
          id: 2,
          prompt: 'Wat _______ het woord "terugtraprem"?',
          answer: 'betekent',
          options: ['betekent', 'bedoelt'],
          explanation: 'Het woord (definitie) -> betekent.'
        },
        {
          id: 3,
          prompt: 'Morgen zijn alle winkels dicht. Dat _______ dat we vandaag boodschappen moeten doen.',
          answer: 'betekent',
          options: ['betekent', 'bedoelt'],
          explanation: 'Die situatie houdt in dat -> betekent.'
        },
        {
          id: 4,
          prompt: 'Sorry, ik heb u niet goed verstaan. Wat _______ u?',
          answer: 'bedoelt',
          options: ['bedoelt', 'betekent'],
          explanation: 'U (de spreker) -> bedoelt.'
        }
      ]
    },
    {
      id: 'opdracht_5_onderdelen',
      title: 'Opdracht 5: Fietsonderdelen en reparatie',
      instruction: 'Welk fietsonderdeel wordt hier omschreven?',
      items: [
        {
          id: 1,
          prompt: 'Het onderdeel achterop de fiets waar je fietstassen aan hangt of een passagier op meeneemt:',
          answer: 'de bagagedrager',
          options: ['de bagagedrager', 'de fietsbel', 'de trapper'],
          explanation: 'Dit is de bagagedrager.'
        },
        {
          id: 2,
          prompt: 'Het onderdeel waar je je voeten op zet om vooruit te komen:',
          answer: 'de trapper (het pedaal)',
          options: ['de trapper (het pedaal)', 'het zadel', 'het stuur'],
          explanation: 'Je trapt op de trapper.'
        },
        {
          id: 3,
          prompt: 'Het onderdeel waarmee je rinkelt om wandelaars te waarschuwen:',
          answer: 'de fietsbel',
          options: ['de fietsbel', 'het ventiel', 'de spaak'],
          explanation: 'Met de fietsbel maak je geluid.'
        },
        {
          id: 4,
          prompt: 'Het zachte zitje waar de fietser op zit:',
          answer: 'het zadel',
          options: ['het zadel', 'het stuur', 'het fietspad'],
          explanation: 'Zitten doe je op het zadel.'
        }
      ]
    }
  ],
  readingText: {
    title: '10.9 Tekst: Nederland Fietsland',
    subtitle: 'Over rode fietspaden, stallingen voor 12.500 fietsen en verkeersveiligheid (Blz. 148)',
    content: `In Nederland zijn er naar schatting ruim 23 miljoen fietsen op een bevolking van bijna 18 miljoen mensen. Dat betekent gemiddeld 1,3 fiets per inwoner! Vrijwel elk Nederlands kind leert fietsen zodra het kan lopen, eerst op een loopfietsje en daarna zonder zijwieltjes.

Het enorme succes van de fiets is te danken aan de ongeëvenaarde infrastructuur: Nederland beschikt over meer dan 35.000 kilometer aan vrijliggende, roodgekleurde fietspaden. Op kruispunten hebben fietsers vaak eigen stoplichten met een speciaal fietsersicoontje en een regensensor die fietsers sneller groen licht geeft bij slecht weer.

Bij grote treinstations zijn gigantische ondergrondse fietsenstallingen gebouwd. De stalling onder het Centraal Station van Utrecht is met 12.500 plekken de grootste ter wereld. Je checkt er gratis in met je ov-chipkaart en parkeert je fiets droog en bewaakt.

Toch is er één grote vijand van elke fietser: fietsendiefstal. In grote steden als Amsterdam worden jaarlijks tienduizenden fietsen gestolen. Daarom luidt het beroemde Nederlandse advies: "Koop een goedkope tweedehands stadsfiets, maar investeer in twee sloten die duurder zijn dan de fiets zelf!"`,
    vocabularyNotes: [
      { word: 'de bevolking', translation: 'population' },
      { word: 'de loopfiets', translation: 'balance bike' },
      { word: 'vrijliggend fietspad', translation: 'separated cycle lane' },
      { word: 'de regensensor', translation: 'rain sensor giving quicker green lights' },
      { word: 'de fietsendiefstal', translation: 'bicycle theft' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Hoeveel fietsen zijn er ongeveer in Nederland op 18 miljoen inwoners?',
        answer: 'Ruim 23 miljoen (meer fietsen dan inwoners!)',
        options: [
          'Ruim 23 miljoen (meer fietsen dan inwoners!)',
          'Slechts 5 miljoen',
          'Precies één fiets per gezin'
        ],
        explanation: 'Er zijn gemiddeld 1,3 fietsen per inwoner in Nederland.'
      },
      {
        id: 2,
        prompt: 'Waar bevindt zich de grootste overdekte fietsenstalling ter wereld?',
        answer: 'Onder het Centraal Station van Utrecht (12.500 plekken)',
        options: [
          'Onder het Centraal Station van Utrecht (12.500 plekken)',
          'Op Schiphol Airport',
          'Bij de Eiffeltoren in Parijs'
        ],
        explanation: 'De stalling bij Utrecht Centraal biedt plaats aan 12.500 fietsen.'
      },
      {
        id: 3,
        prompt: 'Welk advies geven Nederlanders over het voorkomen van fietsendiefstal?',
        answer: 'Gebruik twee stevige sloten die vastgemaakt worden aan een hek of paal',
        options: [
          'Gebruik twee stevige sloten die vastgemaakt worden aan een hek of paal',
          'Laat je fiets \'s nachts altijd ontgrendeld staan',
          'Fiets alleen op zondagochtend'
        ],
        explanation: 'Met twee verschillende sloten (bijv. ringslot plus kettingslot aan een hek) is diefstal veel lastiger.'
      }
    ]
  },
  pronunciation: {
    title: '10.10 Uitspraak: sch – sj',
    soundFocus: 'Medeklinkercombinatie: "sch" (scheef, schaar) vs "sj"',
    explanation: 'De Nederlandse "sch" (zoals in "scheef", "schuur", "school", "boodschappen") bestaat uit een s gevolgd door de schraapklank ch [sx]. Het is GEEN Engelse "sh" [ʃ]! Oefen het schrapen achter in je keel direct na de s-klank.',
    wordList: [
      'scheef', 'sjeik', 'schaar', 'sjaal', 'schip', 'sjip', 'school', 'schroef', 'schrijven', 'schade', 'schrikken'
    ],
    minimalPairs: [
      { word1: 'scheef', word2: 'sjeik', contrast: 'sch vs sj' },
      { word1: 'schaar', word2: 'sjaal', contrast: 'sch vs sj' },
      { word1: 'schip', word2: 'sjip', contrast: 'sch vs sj' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 10: Bij de fietsenmaker',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is het juiste lidwoord voor "stuur"?',
        options: ['het stuur', 'de stuur', 'een stuur'],
        answer: 'het stuur',
        explanation: 'Stuur is onzijdig: het stuur (en ook: het zadel, het wiel, het fietspad).'
      },
      {
        id: 2,
        prompt: 'Wat is het juiste lidwoord voor "bagagedrager"?',
        options: ['de bagagedrager', 'het bagagedrager', 'een bagagedrager'],
        answer: 'de bagagedrager',
        explanation: 'Woorden op -er van handelingen zijn de-woorden: de drager, de bagagedrager.'
      },
      {
        id: 3,
        prompt: 'Vervoeg in het imperfectum (verleden tijd): "Toen ik naar huis _______ (fietsen), brak mijn ketting."',
        options: ['fietste', 'fietsde', 'gefietst'],
        answer: 'fietste',
        explanation: 'De stam fiets eindigt op s (\'t kofschip) -> fietste.'
      },
      {
        id: 4,
        prompt: 'Vervoeg in het imperfectum: "Het weer was somber en het _______ (regenen) de hele dag."',
        options: ['regende', 'regente', 'geregend'],
        answer: 'regende',
        explanation: 'De stam regen eindigt op n (niet in kofschip) -> regende.'
      },
      {
        id: 5,
        prompt: 'Kies het juiste werkwoord: "Wat _______ dit verkeersbord voor fietsers?"',
        options: ['betekent', 'bedoelt', 'begrijpt'],
        answer: 'betekent',
        explanation: 'Een bord of symbool betekent iets (bedoelen doe je als persoon).'
      },
      {
        id: 6,
        prompt: 'Kies het juiste werkwoord: "Wat _______ u daarmee, dokter?"',
        options: ['bedoelt', 'betekent', 'noemt'],
        answer: 'bedoelt',
        explanation: 'Een persoon bedoelt iets: "wat bedoelt u?".'
      },
      {
        id: 7,
        prompt: 'Wat betekent het als er "een slag in het wiel" zit?',
        options: [
          'Het wiel is verbogen / krom door een val of botsing.',
          'Er zit een gevaarlijke slang in de spaken.',
          'De band is net nieuw opgepompt.'
        ],
        answer: 'Het wiel is verbogen / krom door een val of botsing.',
        explanation: 'Een slag in het wiel betekent een wiebelend / verbogen wiel.'
      },
      {
        id: 8,
        prompt: 'Wat is de verleden tijd (imperfectum) van het modale werkwoord "willen" (hij-vorm)?',
        options: ['hij wilde / wou', 'hij wilt', 'hij woude'],
        answer: 'hij wilde / wou',
        explanation: 'De verleden tijd van willen is wilde (of in spreektaal wou).'
      },
      {
        id: 9,
        prompt: 'Waarom zijn in Nederland de meeste fietspaden voorzien van rood asfalt?',
        options: [
          'Voor duidelijke zichtbaarheid en herkenning voor fietsers en automobilisten.',
          'Omdat rode verf goedkoper is dan zwarte teer.',
          'Omdat rood de lievelingskleur van de koning is.'
        ],
        answer: 'Voor duidelijke zichtbaarheid en herkenning voor fietsers en automobilisten.',
        explanation: 'Rood asfalt scheidt fietsers visueel van voetgangers en autoverkeer.'
      },
      {
        id: 10,
        prompt: 'Wat betekent "overmorgen"?',
        options: [
          'De dag na morgen (the day after tomorrow).',
          'Gisterenochtend vroeg.',
          'Volgende week woensdag.'
        ],
        answer: 'De dag na morgen (the day after tomorrow).',
        explanation: 'Overmorgen is de dag die direct volgt op morgen.'
      }
    ]
  },
  culturalOrPracticalNote: 'Fietscultuur in Nederland: In Nederland zijn er meer fietsen dan inwoners (ruim 23 miljoen fietsen op 18 miljoen mensen!). Er zijn meer dan 35.000 kilometer aan vrijliggende fietspaden. Let op: fietsen zonder verlichting in het donker levert een boete op van € 60,-!'
};
