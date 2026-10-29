import { CustomLessonData } from '../types/lesson';

export const CHAPTER_17_DATA: CustomLessonData = {
  id: 'hoofdstuk_17',
  chapterNumber: 'Hoofdstuk 17',
  chapterTitle: 'Thuis',
  description: 'Dagelijkse routine thuis, huishoudelijke taken en apparaten (stofzuigen, de afwas doen, strijken, de wasmachine), DE CONTINUOUS CONSTRUCTIE: "ZIJN + AAN HET + INFINITIEF" ("Wat ben je aan het doen? Ik ben aan het stofzuigen!"), houdingswerkwoorden (zitten/staan/liggen/lopen te...), en HET WOORDJE "ER" (er is/zijn, er + getal, erin, erop, erover).',
  language: 'Nederlands',
  createdAt: 1727800000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Sam',
      dutch: 'Goedemorgen schat, heb je een beetje lekker geslapen?',
      english: 'Good morning darling, did you sleep well?',
      notes: '"schat" = darling / honey (standard Dutch term of endearment).',
      keyWords: ['schat', 'lekker geslapen']
    },
    {
      id: 2,
      speaker: 'Tina',
      dutch: 'Ja heel goed, en ik heb zo heerlijk gedroomd! We waren op vakantie op een tropisch eiland. En jij?',
      english: 'Yes very well, and I dreamed so wonderfully! We were on holiday on a tropical island. And you?',
      notes: 'Perfectum of dromen: "gedroomd".',
      keyWords: ['heerlijk gedroomd', 'tropisch eiland']
    },
    {
      id: 3,
      speaker: 'Sam',
      dutch: 'Ik kon helemaal niet in slaap komen. Ik heb de halve nacht wakker gelegen omdat de buren feest vierden.',
      english: 'I couldn\'t fall asleep at all. I lay awake for half the night because the neighbours were having a party.',
      notes: '"wakker liggen" = to lie awake.',
      keyWords: ['in slaap komen', 'wakker gelegen', 'feest vierden']
    },
    {
      id: 4,
      speaker: 'Tina',
      dutch: 'Wat vervelend voor je! Blijf dan nog maar even lekker liggen, dan ga ik opstaan en verse koffie en broodjes klaarmaken.',
      english: 'How annoying for you! Just stay in bed a bit longer then, and I\'ll get up and prepare fresh coffee and rolls.',
      notes: '"blijf liggen" (houdingswerkwoord). "klaarmaken" = to prepare.',
      keyWords: ['blijf liggen', 'opstaan', 'klaarmaken']
    },
    {
      id: 5,
      speaker: 'Sam',
      dutch: 'Nee hoor, ik sta ook op. Ik ga eerst douchen en daarna moet ik nodig de badkamer schoonmaken.',
      english: 'No, I\'m getting up too. I\'ll take a shower first and after that I urgently need to clean the bathroom.',
      notes: '"nodig moeten" = urgently need to.',
      keyWords: ['douchen', 'badkamer schoonmaken']
    },
    {
      id: 6,
      speaker: 'Tina',
      dutch: 'Wat ben je nu aan het doen, Sam?',
      english: 'What are you doing right now, Sam?',
      notes: 'Continuous construction: "Wat ben je aan het doen?".',
      keyWords: ['aan het doen']
    },
    {
      id: 7,
      speaker: 'Sam',
      dutch: 'Ik ben de wasmand aan het sorteren en de wasmachine aan het aanzetten. Er liggen nog zoveel vuile handdoeken.',
      english: 'I am sorting the laundry basket and turning on the washing machine. There are still so many dirty towels lying around.',
      notes: 'Continuous: "aan het sorteren", "aan het aanzetten". "Er liggen..." (er + positie).',
      keyWords: ['wasmand sorteren', 'wasmachine aanzetten', 'er liggen vuile handdoeken']
    },
    {
      id: 8,
      speaker: 'Tina',
      dutch: 'Super, dan ga ik ondertussen beneden stofzuigen en dweilen. Hebben we eigenlijk nog stofzuigerzakken?',
      english: 'Super, then in the meantime I\'ll vacuum and mop downstairs. Do we actually have any vacuum cleaner bags left?',
      notes: '"stofzuigen en dweilen" = vacuuming and mopping.',
      keyWords: ['stofzuigen', 'dweilen', 'stofzuigerzakken']
    },
    {
      id: 9,
      speaker: 'Sam',
      dutch: 'Ja, ik heb er gisteren nog twee gekocht bij de drogist. Ze liggen in de voorraadkast onder de trap.',
      english: 'Yes, I bought two of them yesterday at the drugstore. They are lying in the pantry under the stairs.',
      notes: 'Er + getal: "Ik heb er gisteren nog twee gekocht".',
      keyWords: ['ik heb er twee gekocht', 'voorraadkast']
    },
    {
      id: 10,
      speaker: 'Tina',
      dutch: 'Mooi zo! Als we vanmiddag klaar zijn met het huishouden, gaan we lekker op het terras zitten ontspannen.',
      english: 'Great! When we are finished with the chores this afternoon, we\'ll go sit and relax nicely on the terrace.',
      notes: '"klaar zijn met" = to be finished with.',
      keyWords: ['klaar met het huishouden', 'ontspannen']
    }
  ],
  vocabulary: [
    {
      id: 'het_huishouden',
      dutch: 'het huishouden (het huishoudelijk werk)',
      english: 'housekeeping / household chores',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de huishoudens',
      exampleSentence: 'Op zaterdagochtend doen we samen het hele huishouden.',
      exampleEnglish: 'On Saturday mornings we do all the household chores together.'
    },
    {
      id: 'stofzuigen',
      dutch: 'stofzuigen (de stofzuiger)',
      english: 'to vacuum (vacuum cleaner)',
      category: 'taken',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij stofzuigt elke week de woonkamer en de slaapkamers.',
      exampleEnglish: 'She vacuums the living room and the bedrooms every week.'
    },
    {
      id: 'dweilen',
      dutch: 'dweilen (de dweil, de emmer)',
      english: 'to mop (mop / floor cloth, bucket)',
      category: 'taken',
      partOfSpeech: 'verb',
      exampleSentence: 'Na het stofzuigen dweilen we de tegelvloer in de keuken.',
      exampleEnglish: 'After vacuuming we mop the tiled floor in the kitchen.'
    },
    {
      id: 'de_afwas_doen',
      dutch: 'de afwas doen (afwassen)',
      english: 'to do the dishes / wash up',
      category: 'taken',
      partOfSpeech: 'phrase',
      exampleSentence: 'Wie kookt, hoeft de afwas niet te doen!',
      exampleEnglish: 'Whoever cooks doesn\'t have to do the washing up!'
    },
    {
      id: 'de_vaatwasser',
      dutch: 'de vaatwasser (de afwasmachine)',
      english: 'dishwasher',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vaatwassers',
      exampleSentence: 'Ruim je de vieze borden en glazen even in de vaatwasser?',
      exampleEnglish: 'Could you put the dirty plates and glasses in the dishwasher?'
    },
    {
      id: 'de_was_doen',
      dutch: 'de was doen (wassen)',
      english: 'to do the laundry / wash clothes',
      category: 'taken',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik draai vanavond twee trommels met witte en bonte was.',
      exampleEnglish: 'Tonight I will run two loads of white and coloured laundry.'
    },
    {
      id: 'de_wasmachine',
      dutch: 'de wasmachine',
      english: 'washing machine',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de wasmachines',
      exampleSentence: 'De wasmachine centrifugeert op 1400 toeren.',
      exampleEnglish: 'The washing machine spins at 1400 rpm.'
    },
    {
      id: 'de_wasdroger',
      dutch: 'de wasdroger (de droger)',
      english: 'tumble dryer',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de wasdrogers',
      exampleSentence: 'Stop de handdoeken en het beddengoed in de droger.',
      exampleEnglish: 'Put the towels and bed linen in the dryer.'
    },
    {
      id: 'het_wasrek',
      dutch: 'het wasrek (de waslijn)',
      english: 'drying rack / clothes horse (washing line)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de wasrekken',
      exampleSentence: 'We hangen de natte overhemden aan het wasrek op zolder.',
      exampleEnglish: 'We hang the wet shirts on the drying rack in the attic.'
    },
    {
      id: 'strijken',
      dutch: 'strijken (het strijkijzer, de strijkplank)',
      english: 'to iron (iron, ironing board)',
      category: 'taken',
      partOfSpeech: 'verb',
      exampleSentence: 'Hij strijkt zijn nette overhemden voor de werkweek.',
      exampleEnglish: 'He irons his smart shirts for the work week.'
    },
    {
      id: 'opruimen',
      dutch: 'opruimen (een opgeruimd huis)',
      english: 'to tidy up / clear away (a tidy home)',
      category: 'taken',
      partOfSpeech: 'verb',
      exampleSentence: 'Ruim alsjeblieft al je rondslingerende speelgoed op.',
      exampleEnglish: 'Please tidy away all your scattered toys.'
    },
    {
      id: 'schoonmaken',
      dutch: 'schoonmaken (poetsen)',
      english: 'to clean / scrub',
      category: 'taken',
      partOfSpeech: 'verb',
      exampleSentence: 'Met chloor en allesreiniger maken we het toilet schoon.',
      exampleEnglish: 'With bleach and all-purpose cleaner we clean the toilet.'
    },
    {
      id: 'de_koelkast',
      dutch: 'de koelkast (de ijskast)',
      english: 'fridge / refrigerator',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de koelkasten',
      exampleSentence: 'Zet de melk en de boter meteen terug in de koelkast.',
      exampleEnglish: 'Put the milk and butter right back in the fridge.'
    },
    {
      id: 'de_diepvries',
      dutch: 'de diepvries (de vriezer)',
      english: 'freezer',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vriezers',
      exampleSentence: 'In de diepvries bewaren we bevroren pizza\'s en ijs.',
      exampleEnglish: 'In the freezer we keep frozen pizzas and ice cream.'
    },
    {
      id: 'de_oven',
      dutch: 'de oven (de magnetron)',
      english: 'oven (microwave)',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ovens / de magnetrons',
      exampleSentence: 'Verwarm de oven voor op 180 graden voor de ovenschotel.',
      exampleEnglish: 'Preheat the oven to 180 degrees for the casserole.'
    },
    {
      id: 'het_fornuis',
      dutch: 'het fornuis (de inductiekookplaat)',
      english: 'stove / cooker (induction hob)',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de fornuizen',
      exampleSentence: 'De soep staat zachtjes te pruttelen op het inductiefornuis.',
      exampleEnglish: 'The soup is gently simmering on the induction hob.'
    },
    {
      id: 'wakker_worden',
      dutch: 'wakker worden (de wekker)',
      english: 'to wake up (alarm clock)',
      category: 'routine',
      partOfSpeech: 'verb',
      exampleSentence: 'Mijn wekker gaat elke ochtend stipt om kwart voor zeven.',
      exampleEnglish: 'My alarm goes off every morning promptly at quarter to seven.'
    },
    {
      id: 'opstaan',
      dutch: 'opstaan',
      english: 'to get out of bed / get up',
      category: 'routine',
      partOfSpeech: 'verb',
      exampleSentence: 'In het weekend sta ik nooit voor negen uur op.',
      exampleEnglish: 'At the weekend I never get up before nine o\'clock.'
    },
    {
      id: 'in_slaap_vallen',
      dutch: 'in slaap vallen / in slaap komen',
      english: 'to fall asleep',
      category: 'routine',
      partOfSpeech: 'phrase',
      exampleSentence: 'Na zo\'n lange fietstocht val ik binnen twee minuten in slaap.',
      exampleEnglish: 'After such a long bike ride I fall asleep within two minutes.'
    },
    {
      id: 'dromen',
      dutch: 'dromen (de droom, gedroomd)',
      english: 'to dream (dream, dreamed)',
      category: 'routine',
      partOfSpeech: 'verb',
      exampleSentence: 'Waar heb jij vannacht over gedroomd?',
      exampleEnglish: 'What did you dream about last night?'
    },
    {
      id: 'uitgerust',
      dutch: 'uitgerust (zich uitrusten)',
      english: 'well-rested / rested',
      category: 'gevoel',
      partOfSpeech: 'adjective',
      exampleSentence: 'Na acht uur diepe slaap voel ik me helemaal uitgerust.',
      exampleEnglish: 'After eight hours of deep sleep I feel completely rested.'
    },
    {
      id: 'de_voorraadkast',
      dutch: 'de voorraadkast (de voorraad)',
      english: 'pantry / storage cupboard (supplies)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de voorraadkasten',
      exampleSentence: 'In de voorraadkast staan potten pasta, rijst en blikken bonen.',
      exampleEnglish: 'In the pantry are jars of pasta, rice and cans of beans.'
    },
    {
      id: 'het_wasmiddel',
      dutch: 'het wasmiddel (de wasverzachter)',
      english: 'laundry detergent (fabric softener)',
      category: 'schoonmaak',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de wasmiddelen',
      exampleSentence: 'Gebruik vloeibaar wasmiddel voor de donkere kleding.',
      exampleEnglish: 'Use liquid detergent for dark clothes.'
    },
    {
      id: 'de_vuilnis',
      dutch: 'het vuilnis (de vuilnisbak, het afval)',
      english: 'rubbish / garbage (rubbish bin, waste)',
      category: 'schoonmaak',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Zet je de vuilniszak vanavond aan de straat voor de vuilniswagen?',
      exampleEnglish: 'Will you put the garbage bag out on the street tonight for the bin lorry?'
    },
    {
      id: 'afval_scheiden',
      dutch: 'afval scheiden (papier, gft, glas, plastic)',
      english: 'to separate waste / recycle',
      category: 'milieu',
      partOfSpeech: 'phrase',
      exampleSentence: 'Nederlanders scheiden zorgvuldig groente-afval, glas en papier.',
      exampleEnglish: 'The Dutch carefully separate organic waste, glass and paper.'
    },
    {
      id: 'ondertussen',
      dutch: 'ondertussen (intussen)',
      english: 'in the meantime / meanwhile',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Dek jij de tafel? Dan kook ik ondertussen de soep.',
      exampleEnglish: 'Will you set the table? Meanwhile I will heat up the soup.'
    },
    {
      id: 'de_buren',
      dutch: 'de buren (de onderburen / bovenburen)',
      english: 'neighbours (downstairs / upstairs neighbours)',
      category: 'mensen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de buren',
      exampleSentence: 'Onze bovenburen maken soms \'s nachts lawaai.',
      exampleEnglish: 'Our upstairs neighbours sometimes make noise at night.'
    },
    {
      id: 'het_terras',
      dutch: 'het terras (het balkon)',
      english: 'patio / terrace (balcony)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de terrassen / de balkons',
      exampleSentence: 'Als de zon schijnt, zitten we heerlijk op het dakterras.',
      exampleEnglish: 'When the sun shines, we sit delightfully on the roof terrace.'
    },
    {
      id: 'ontspannen',
      dutch: 'zich ontspannen (de ontspanning)',
      english: 'to relax / unwind (relaxation)',
      category: 'gevoel',
      partOfSpeech: 'verb',
      exampleSentence: 'Na een drukke werkdag ontspan ik met een spannend boek.',
      exampleEnglish: 'After a busy working day I relax with an exciting book.'
    },
    {
      id: 'de_klus',
      dutch: 'de klus (klussen in huis)',
      english: 'chore / odd job / DIY (doing odd jobs)',
      category: 'taken',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de klussen',
      exampleSentence: 'Mijn man houdt van klussen en schilderde het hele trappenhuis.',
      exampleEnglish: 'My husband loves DIY and painted the whole stairwell.'
    },
    {
      id: 'klaar_zijn_met',
      dutch: 'klaar zijn met...',
      english: 'to be done / finished with...',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ben je al klaar met het schrijven van je verslag?',
      exampleEnglish: 'Are you already finished writing your report?'
    },
    {
      id: 'de_papadag',
      dutch: 'de papadag / mamadag',
      english: '"daddy day" / "mommy day" (weekly childcare day off work)',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de papadagen',
      exampleSentence: 'Op woensdag werkt Jeroen niet, want dan heeft hij papadag.',
      exampleEnglish: 'On Wednesdays Jeroen doesn\'t work because that is his daddy day.'
    },
    {
      id: 'het_deeltijdwerk',
      dutch: 'het deeltijdwerk (parttime werken)',
      english: 'part-time work',
      category: 'werk',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Nederland is wereldkampioen deeltijdwerk.',
      exampleEnglish: 'The Netherlands is world champion in part-time employment.'
    },
    {
      id: 'verdelen',
      dutch: 'de taken verdelen (de taakverdeling)',
      english: 'to divide chores (division of tasks)',
      category: 'sociaal',
      partOfSpeech: 'phrase',
      exampleSentence: 'We verdelen de huishoudelijke klussen eerlijk over de week.',
      exampleEnglish: 'We divide the household chores fairly across the week.'
    },
    {
      id: 'de_reparatie',
      dutch: 'de reparatie (repareren)',
      english: 'repair (to repair / fix)',
      category: 'techniek',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de reparaties',
      exampleSentence: 'De loodgieter kwam langs voor de reparatie van de lekkende kraan.',
      exampleEnglish: 'The plumber came by to repair the leaking tap.'
    },
    {
      id: 'de_kraan',
      dutch: 'de kraan (een lekkende kraan)',
      english: 'tap / faucet (leaking tap)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kranen',
      exampleSentence: 'Draai de kraan goed dicht om water te besparen.',
      exampleEnglish: 'Turn the tap tightly off to save water.'
    },
    {
      id: 'de_badkamer',
      dutch: 'de badkamer (de wastafel)',
      english: 'bathroom (washbasin / sink)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de badkamers',
      exampleSentence: 'De badkamer heeft een ligbad, inloopdouche en dubbele wastafel.',
      exampleEnglish: 'The bathroom has a bathtub, walk-in shower and double sink.'
    },
    {
      id: 'de_tuin',
      dutch: 'de tuin (in de tuin werken)',
      english: 'garden / yard (gardening)',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de tuinen',
      exampleSentence: '\'s Zaterdags maait mijn vader het gras in de achtertuin.',
      exampleEnglish: 'On Saturdays my father mows the lawn in the back garden.'
    },
    {
      id: 'het_koffiezetapparaat',
      dutch: 'het koffiezetapparaat',
      english: 'coffee machine / maker',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de koffiezetapparaten',
      exampleSentence: 'Het bonen-koffiezetapparaat maalt verse espressobonen.',
      exampleEnglish: 'The bean-to-cup coffee maker grinds fresh espresso beans.'
    },
    {
      id: 'gezellig_thuis',
      dutch: 'oost west, thuis best',
      english: 'east west, home is best (there\'s no place like home)',
      category: 'spreekwoord',
      partOfSpeech: 'phrase',
      exampleSentence: 'Na een lange reis zeg ik altijd: oost west, thuis best!',
      exampleEnglish: 'After a long journey I always say: east west, home is best!'
    }
  ],
  grammarPoints: [
    {
      id: 'continuous_zijn_aan_het',
      title: '17.1 De Continuous Vorm: "Zijn + Aan Het + Infinitief"',
      summary: 'Uitdrukken dat een handeling op DIT MOMENT bezig is (be doing / -ing vorm).',
      ruleExplanation: `In het Nederlands gebruik je "ZIJN + AAN HET + INFINITIEF" om aan te geven dat een actie nu op dit moment aan de gang is:

Vorming:
persoonsvorm van ZIJN + (object / bepalingen) + AAN HET + INFINITIEF

Voorbeelden:
• "Wat ben je aan het doen?" (What are you doing?)
• "Ik BEN aan het KOKEN." (I am cooking.)
• "Sam IS de badkamer AAN HET SCHOONMAKEN." (Sam is cleaning the bathroom.)
• "Zij WAREN de was AAN HET OPHANGEN." (They were hanging the laundry.)

Alternatief met houdingswerkwoorden (zitten, staan, liggen, lopen + TE + infinitief):
Nederlanders gebruiken heel vaak een lichaamshouding om een voortdurende handeling te beschrijven:
• "Zij ZIT een boek TE LEZEN." (She is sitting reading a book.)
• "Hij STAAT de groenten TE SNIJDEN." (He is standing chopping vegetables.)
• "De baby LIGT TE SLAPEN." (The baby is lying sleeping.)
• "De buurman LOOPT TE IJSBEREN in de tuin." (The neighbour is pacing around the garden.)`,
      examples: [
        {
          dutch: 'Stoor me even niet, ik ben aan het studeren voor mijn examen.',
          english: 'Don\'t disturb me right now, I am studying for my exam.',
          note: 'Zijn + aan het + infinitief.'
        },
        {
          dutch: 'Mijn zus zit op de bank een serie te kijken.',
          english: 'My sister is sitting on the couch watching a series.',
          note: 'Zitten + te + infinitief.'
        }
      ],
      tables: [
        {
          headers: ['Constructie', 'Vaste onderdelen', 'Voorbeeldzin'],
          rows: [
            ['zijn + aan het', 'onderwerp + ben/is/zijn + ... + aan het + werkwoord', 'Ik ben de vloer aan het dweilen.'],
            ['zitten te...', 'onderwerp + zit/zitten + ... + te + werkwoord', 'Wij zitten een kop koffie te drinken.'],
            ['staan te...', 'onderwerp + staat/staan + ... + te + werkwoord', 'Hij staat bij de voordeur te wachten.'],
            ['liggen te...', 'onderwerp + ligt/liggen + ... + te + werkwoord', 'De kat ligt in de zon te spinnen.'],
            ['lopen te...', 'onderwerp + loopt/lopen + ... + te + werkwoord', 'Zij loopt over straat te telefoneren.']
          ]
        }
      ]
    },
    {
      id: 'het_woordje_er',
      title: '17.2 De Vier Functies van het Woordje "ER"',
      summary: 'Er is/zijn, er + getal, er als voorlopig onderwerp, en er + voorzetsel.',
      ruleExplanation: `Het kleine woordje "ER" heeft vier belangrijke functies in het Nederlands:

1. Aanwezigheid (There is / there are):
• "ER IS nog koffie in de pot." (There is still coffee in the pot.)
• "ER ZIJN veel klussen te doen." (There are many chores to do.)

2. In combinatie met een GETAL of hoeveelheid:
"ER" vervangt een eerder genoemd zelfstandig naamwoord (of them):
• "Heb je nog stofzuigerzakken? - Ja, ik heb ER gisteren nog twee gekocht." (two of them)
• "Hoeveel koekjes wil je? - Ik neem ER graag eentje."

3. Er + voorzetsel (Voornaamwoordelijk bijwoord):
Voorzetsel + het/dat verandert in ER + voorzetsel (erin, erop, erover, ermee):
• op de tafel -> EROP: "Wat ligt er op tafel? - Mijn bril ligt EROP."
• over het feest praten -> EROVER praten: "We praten EROVER."
• in de kast -> ERIN: "Hang je jas maar ERIN."

4. Plaatsaanduiding (daar / there):
• "Ben je weleens in Maastricht geweest? - Ja, ik woon ER al drie jaar." (daar)`,
      examples: [
        {
          dutch: 'Er liggen drie schone handdoeken op de wasmachine.',
          english: 'There are three clean towels lying on the washing machine.',
          note: 'Er is/zijn met onbepaald onderwerp.'
        },
        {
          dutch: 'Hebben we nog appels? - Nee, er zijn er geen meer.',
          english: 'Do we still have apples? - No, there are none left.',
          note: 'Er van aanwezigheid + er van kwantiteit.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_continuous',
      title: 'Opdracht 1: De "aan het" of "te" constructie',
      instruction: 'Welke vorm drukt een handeling uit die nu bezig is?',
      items: [
        {
          id: 1,
          prompt: 'Wat doe je nu? - Ik ben de vloer in de keuken _______ .',
          answer: 'aan het dweilen',
          options: ['aan het dweilen', 'te dweilen', 'gedweild'],
          explanation: 'Met "ben" (zijn) gebruik je: aan het + infinitief.'
        },
        {
          id: 2,
          prompt: 'Kijk naar Sam, hij staat voor de spiegel zijn haar _______ .',
          answer: 'te kammen',
          options: ['te kammen', 'aan het kammen', 'kammen'],
          explanation: 'Met het houdingswerkwoord "staat" gebruik je: te + infinitief.'
        },
        {
          id: 3,
          prompt: 'Wees eens stil, de baby ligt in zijn wiegje _______ .',
          answer: 'te slapen',
          options: ['te slapen', 'aan het slapen', 'geslapen'],
          explanation: 'Met "ligt" (liggen) gebruik je: te + infinitief.'
        },
        {
          id: 4,
          prompt: 'De monteurs zijn de vaatwasser _______ .',
          answer: 'aan het repareren',
          options: ['aan het repareren', 'te repareren', 'gerepareerd'],
          explanation: 'Met "zijn" combineer je met "aan het repareren".'
        }
      ]
    },
    {
      id: 'opdracht_2_het_woordje_er',
      title: 'Opdracht 2: Het woordje "ER"',
      instruction: 'Kies de juiste combinatie met "er".',
      items: [
        {
          id: 1,
          prompt: 'Hoeveel koppen koffie drink jij per dag? - Ik drink _______ meestal vier.',
          answer: 'er',
          options: ['er', 'daar', 'het'],
          explanation: '"Er" combineert met getallen: "ik drink er vier" (van de koffie).'
        },
        {
          id: 2,
          prompt: 'Staat de soep al op het fornuis? - Ja, de pan staat _______ .',
          answer: 'erop',
          options: ['erop', 'erin', 'ermee'],
          explanation: 'Op het fornuis -> erop.'
        },
        {
          id: 3,
          prompt: '_______ is gisteravond een leiding gesprongen in de kelder.',
          answer: 'Er',
          options: ['Er', 'Het', 'Daar'],
          explanation: '"Er is..." introduceert een onbepaald onderwerp.'
        }
      ]
    },
    {
      id: 'opdracht_3_huishouden_vocabulaire',
      title: 'Opdracht 3: Huishoudelijke apparaten en taken',
      instruction: 'Welk apparaat of welke taak wordt omschreven?',
      items: [
        {
          id: 1,
          prompt: 'Het apparaat waarmee je kreukels uit kleding haalt heet een:',
          answer: 'strijkijzer',
          options: ['strijkijzer', 'stofzuiger', 'koelkast'],
          explanation: 'Strijken doe je met een strijkijzer op een strijkplank.'
        },
        {
          id: 2,
          prompt: 'Het apparaat dat borden, bestek en pannen automatisch afwast:',
          answer: 'de vaatwasser',
          options: ['de vaatwasser', 'de wasdroger', 'de diepvries'],
          explanation: 'De vaatwasser / afwasmachine doet de borden en bestek.'
        },
        {
          id: 3,
          prompt: 'De wekelijkse vrije dag waarop een werkende vader voor zijn jonge kinderen zorgt noemt men:',
          answer: 'papadag',
          options: ['papadag', 'klusdag', 'droogdag'],
          explanation: 'Een vaste vrije dag voor kinderopvang door de vader heet "papadag".'
        }
      ]
    }
  ],
  readingText: {
    title: '17.8 Tekst: Taakverdeling en "Papadag" in Nederland',
    subtitle: 'Over de deeltijdeconomie, huishoudelijke gelijkheid en de wekelijkse papadag (Blz. 254)',
    content: `Nederland staat internationaal bekend als de absolute "wereldkampioen deeltijdwerk". Nergens in de Europese Unie werken zoveel mensen in parttime banen als in Nederland: bijna driekwart van de werkende vrouwen en ruim een kwart van de mannen werkt parttime.

Deze specifieke arbeidsmarktstructuur heeft grote invloed op het gezinsleven en de verdeling van huishoudelijke taken. Waar vroeger de moeder vrijwel het gehele huishouden runde, is er in moderne Nederlandse gezinnen sprake van een actieve zoektocht naar gelijkwaardigheid.

Een typisch Nederlands fenomeen dat hieruit is ontstaan, is de zogeheten "papadag". Veel vaders werken vier dagen in de week (bijvoorbeeld vier keer negen uur) en zijn één doordeweekse dag (vaak woensdag of vrijdag) thuis bij de kinderen. Op deze papadag zie je vaders met bakfietsen door de stad rijden, boodschappen doen op de markt, koken en stofzuigen.

Toch blijkt uit sociologisch onderzoek van het Sociaal en Cultureel Planbureau (SCP) dat de traditionele taakverdeling nog niet helemaal verdwenen is: vrouwen besteden nog steeds gemiddeld negen uur per week meer aan huishoudelijke zorg en schoonmaken dan hun mannelijke partners.`,
    vocabularyNotes: [
      { word: 'deeltijdwerk', translation: 'part-time work' },
      { word: 'de gelijkwaardigheid', translation: 'equality / equal division' },
      { word: 'de papadag', translation: 'dad day (father\'s designated childcare day off)' },
      { word: 'de bakfiets', translation: 'cargo bike / box bike for carrying children' },
      { word: 'de taakverdeling', translation: 'division of household tasks' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Waarom staat Nederland internationaal bekend als "kampioen deeltijdwerk"?',
        answer: 'Omdat een zeer hoog percentage van de werkenden in parttime dienstverband werkt',
        options: [
          'Omdat een zeer hoog percentage van de werkenden in parttime dienstverband werkt',
          'Omdat alle bedrijven om 14:00 uur \'s middags sluiten',
          'Omdat niemand in het weekend mag werken'
        ],
        explanation: 'Nederland heeft het hoogste percentage parttime banen van heel Europa.'
      },
      {
        id: 2,
        prompt: 'Wat doet een Nederlandse vader op zijn wekelijkse "papadag"?',
        answer: 'Hij zorgt zelfstandig voor de jonge kinderen, het huishouden en de boodschappen',
        options: [
          'Hij zorgt zelfstandig voor de jonge kinderen, het huishouden en de boodschappen',
          'Hij gaat de hele dag vissen zonder telefoon',
          'Hij werkt stiekem over op zolder'
        ],
        explanation: 'Op papadag neemt de vader de volledige zorg voor kinderen en huishouden op zich.'
      },
      {
        id: 3,
        prompt: 'Welk vervoermiddel gebruiken jonge ouders in Nederlandse steden vaak om kinderen en boodschappen te vervoeren?',
        answer: 'De bakfiets (cargo bike)',
        options: [
          'De bakfiets (cargo bike)',
          'De sneeuwscooter',
          'De quad'
        ],
        explanation: 'De bakfiets is het iconische vervoermiddel voor Nederlandse gezinnen.'
      }
    ]
  },
  pronunciation: {
    title: '17.9 Uitspraak: Klemtoon in Samengestelde Woorden',
    soundFocus: 'Woordklemtoon: hoofdklemtoon op het eerste woorddeel bij samenstellingen',
    explanation: 'Het Nederlands maakt heel veel samengestelde woorden (compound nouns), zoals "STOFzuiger", "VAATwasser", "WASmachine", "BADkamer", "VOORraadkast". De hoofdregel is: de klemtoon ligt vrijwel altijd op het EERSTE deel van de samenstelling! Oefen het benadrukken van de eerste lettergreep.',
    wordList: [
      'STOFzuiger', 'VAATwasser', 'WASmachine', 'DROOGtrommel', 'BADkamer', 'STRIJKplank', 'VUILnisbak', 'VOORraadkast'
    ],
    minimalPairs: [
      { word1: 'STOFzuiger', word2: 'stof ZUIGEN', contrast: 'zelfstandig naamwoord vs werkwoordelijke uitdrukking' },
      { word1: 'WASmachine', word2: 'wassen', contrast: 'samenstelling vs grondwoord' },
      { word1: 'BADkamer', word2: 'het bad', contrast: 'klemtoon op eerste lid' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 17: Thuis',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Welke zin bevat een correcte continuous constructie met "aan het"?',
        options: [
          'Ik ben de vloer aan het dweilen.',
          'Ik ben aan dweilen de vloer.',
          'Ik ben de vloer te dweilen.'
        ],
        answer: 'Ik ben de vloer aan het dweilen.',
        explanation: 'Vorming: persoonsvorm van zijn + object + aan het + infinitief.'
      },
      {
        id: 2,
        prompt: 'Welke zin met een houdingswerkwoord (zitten, staan, liggen, lopen) is correct?',
        options: [
          'Zij zit in de woonkamer een boek te lezen.',
          'Zij zit in de woonkamer een boek aan het lezen.',
          'Zij zit in de woonkamer een boek lezend.'
        ],
        answer: 'Zij zit in de woonkamer een boek te lezen.',
        explanation: 'Houdingswerkwoorden combineren met "te + infinitief".'
      },
      {
        id: 3,
        prompt: 'Vul in: "Hebben we nog schone handdoeken? - Ja, ik heb _______ nog drie in de kast liggen."',
        options: ['er', 'daar', 'het', 'wat'],
        answer: 'er',
        explanation: '"Er" combineert met getallen om een eerder genoemd voorwerp aan te duiden.'
      },
      {
        id: 4,
        prompt: 'Voorzetselvervanging: "Zij denkt voortdurend aan haar vakantie." -> "Zij denkt _______."',
        options: ['eraan', 'erop', 'erin', 'ermee'],
        answer: 'eraan',
        explanation: 'Aan + dat/het verandert in het voornaamwoordelijk bijwoord "eraan".'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "huishouden"?',
        options: ['het huishouden', 'de huishouden', 'beide kunnen'],
        answer: 'het huishouden',
        explanation: 'Woorden op -en die van werkwoorden komen zijn het-woorden: het huishouden.'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "vaatwasser"?',
        options: ['de vaatwasser', 'het vaatwasser', 'een vaatwasser (geen lidwoord mogelijk)'],
        answer: 'de vaatwasser',
        explanation: 'Apparaten op -er zijn de-woorden: de vaatwasser, de stofzuiger, de droger.'
      },
      {
        id: 7,
        prompt: 'Wat betekent: "Ik heb de halve nacht wakker gelegen"?',
        options: [
          'I lay awake for half the night (couldn\'t sleep).',
          'I slept through the alarm clock.',
          'I woke up at half past eight.'
        ],
        answer: 'I lay awake for half the night (couldn\'t sleep).',
        explanation: '"Wakker liggen" betekent de slaap niet kunnen vatten.'
      },
      {
        id: 8,
        prompt: 'Waar leg je de hoofdklemtoon bij samengestelde woorden zoals "STOFzuiger" en "WASmachine"?',
        options: [
          'Op het eerste deel van het woord.',
          'Altijd op de allerlaatste lettergreep.',
          'Precies in het midden van het woord.'
        ],
        answer: 'Op het eerste deel van het woord.',
        explanation: 'In het Nederlands ligt de klemtoon bij samenstellingen op het eerste deel.'
      },
      {
        id: 9,
        prompt: 'Wat is een "papadag" in de Nederlandse cultuur?',
        options: [
          'Een wekelijkse vrije dag waarop een werkende vader de zorg voor zijn kinderen en het huishouden op zich neemt.',
          'De verjaardag van je vader.',
          'Vaderdag in juni.'
        ],
        answer: 'Een wekelijkse vrije dag waarop een werkende vader de zorg voor zijn kinderen en het huishouden op zich neemt.',
        explanation: 'Papadag is een vaste doordeweekse parttime zorgdag voor de vader.'
      },
      {
        id: 10,
        prompt: 'Wat betekent het spreekwoord "Oost west, thuis best"?',
        options: [
          'Hoe mooi andere plaatsen ook zijn, nergens is het zo fijn als in je eigen huis.',
          'Je moet altijd naar het oosten of westen reizen.',
          'Een huis op het westen heeft de meeste zon.'
        ],
        answer: 'Hoe mooi andere plaatsen ook zijn, nergens is het zo fijn als in je eigen huis.',
        explanation: '"Oost west, thuis best" betekent: there\'s no place like home.'
      }
    ]
  },
  culturalOrPracticalNote: 'Huishouden en gezin in Nederland: Nederlanders zijn koploper in parttime werken. Veel ouders delen de zorgtaken gelijkwaardig: moeders én vaders werken vaak vier dagen, waardoor de vader een vaste "papadag" heeft voor de kinderen en het huishouden. Let op bij het afval: afval scheiden (papier, gft, glas, plastic) is in Nederland verplicht en streng geregeld per gemeente!'
};
