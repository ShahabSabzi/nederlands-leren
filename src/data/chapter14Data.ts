import { CustomLessonData } from '../types/lesson';

export const CHAPTER_14_DATA: CustomLessonData = {
  id: 'hoofdstuk_14',
  chapterNumber: 'Hoofdstuk 14',
  chapterTitle: 'In de sportschool',
  description: 'Inschrijven bij de sportschool, abonnementen vergelijken (maand- vs jaarabonnement, korting, opzeggen), sport en fitness (krachttraining, cardio, spieren, conditie, kluisjes), INDIRECTE VRAGEN met "OF" en vraagwoorden ("Weet je of...?", "Kun je me vertellen hoe...?"), en DE TOEKOMST (futurum met gaan + infinitief of tegenwoordige tijd).',
  language: 'Nederlands',
  createdAt: 1727770000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Paul',
      dutch: 'Hallo, weet je misschien of ik me hier kan inschrijven?',
      english: 'Hello, do you perhaps know if I can register here?',
      notes: 'Indirect question: "weet je misschien of..." (all verbs move to the end: "kan inschrijven").',
      keyWords: ['weet je misschien of', 'inschrijven']
    },
    {
      id: 2,
      speaker: 'Vrouw',
      dutch: 'Ja, daar bij de balie, waar al die mensen in de rij staan. Het is vanavond een beetje druk.',
      english: 'Yes, over there at the reception desk, where all those people are queuing. It\'s a bit busy tonight.',
      notes: '"in de rij staan" = to queue / wait in line.',
      keyWords: ['balie', 'in de rij staan', 'druk']
    },
    {
      id: 3,
      speaker: 'Paul',
      dutch: 'Hallo, ik wil graag lid worden. Kan dat?',
      english: 'Hello, I would like to become a member. Is that possible?',
      notes: '"lid worden" = to become a member.',
      keyWords: ['lid worden']
    },
    {
      id: 4,
      speaker: 'Tjeerd',
      dutch: 'Natuurlijk! Welkom. Wat voor abonnement wil je, een jaarabonnement of een maandabonnement?',
      english: 'Of course! Welcome. What kind of subscription do you want, an annual subscription or a monthly subscription?',
      notes: '"het abonnement" = membership / subscription.',
      keyWords: ['jaarabonnement', 'maandabonnement']
    },
    {
      id: 5,
      speaker: 'Paul',
      dutch: 'Hmm, kun je me zeggen wat het verschil tussen die abonnementen is?',
      english: 'Hmm, can you tell me what the difference between those subscriptions is?',
      notes: 'Indirect question: "wat het verschil ... is".',
      keyWords: ['verschil', 'tussen']
    },
    {
      id: 6,
      speaker: 'Tjeerd',
      dutch: 'Een maandabonnement kun je maandelijks opzeggen. Bij een jaarabonnement betaal je het hele bedrag in één keer, dat is veel goedkoper. En we hebben nu tien procent korting en een gratis sporttas!',
      english: 'A monthly membership you can cancel monthly. With an annual membership you pay the full amount at once, which is much cheaper. And right now we have a ten percent discount and a free sports bag!',
      notes: '"opzeggen" = to cancel. "korting" = discount. "gratis" = free.',
      keyWords: ['opzeggen', 'veel goedkoper', 'korting', 'gratis']
    },
    {
      id: 7,
      speaker: 'Paul',
      dutch: 'Dat klinkt goed. En mag ik met dat abonnement ook alle groepslessen volgen?',
      english: 'That sounds good. And am I allowed to follow all group classes with that subscription too?',
      notes: '"de groepsles" = group class.',
      keyWords: ['groepslessen volgen', 'abonnement']
    },
    {
      id: 8,
      speaker: 'Tjeerd',
      dutch: 'Jazeker, je kunt meedoen met spinning, yoga, pilates en buikspierkwartier. We hebben ook een sauna in de kleedkamer.',
      english: 'Certainly, you can participate in spinning, yoga, pilates and 15-minute abs. We also have a sauna in the changing room.',
      notes: '"meedoen met" = to join / participate in. "de kleedkamer" = changing room.',
      keyWords: ['meedoen', 'spinning', 'yoga', 'sauna', 'kleedkamer']
    },
    {
      id: 9,
      speaker: 'Paul',
      dutch: 'Prachtig. Mag ik vragen waar de kluisjes zijn en of ik een eigen slotje moet meenemen?',
      english: 'Wonderful. May I ask where the lockers are and whether I need to bring my own padlock?',
      notes: 'Indirect question: "waar de kluisjes zijn en of ik een eigen slotje moet meenemen".',
      keyWords: ['kluisjes', 'slotje', 'meenemen']
    },
    {
      id: 10,
      speaker: 'Tjeerd',
      dutch: 'De kluisjes zijn in de kleedruimte en werken met je ledenpas. Vul dit formulier even in, dan gaan we meteen je pasje aanmaken!',
      english: 'The lockers are in the changing area and work with your member card. Please fill in this form, and we\'ll create your card right away!',
      notes: 'Futurum met gaan: "gaan we meteen je pasje aanmaken".',
      keyWords: ['kleedruimte', 'ledenpas', 'formulier invullen', 'gaan aanmaken']
    }
  ],
  vocabulary: [
    {
      id: 'de_sportschool',
      dutch: 'de sportschool (het fitnesscentrum)',
      english: 'gym / fitness centre',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de sportscholen',
      exampleSentence: 'Ik ga drie keer per week naar de sportschool.',
      exampleEnglish: 'I go to the gym three times a week.'
    },
    {
      id: 'het_abonnement',
      dutch: 'het abonnement',
      english: 'subscription / membership',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de abonnementen',
      exampleSentence: 'Paul kiest voor een voordelig jaarabonnement.',
      exampleEnglish: 'Paul chooses an economical annual membership.'
    },
    {
      id: 'lid_worden',
      dutch: 'lid worden (het lid, de leden)',
      english: 'to become a member (member, members)',
      category: 'sport',
      partOfSpeech: 'phrase',
      exampleSentence: 'Wil jij ook lid worden van deze gezellige tennisclub?',
      exampleEnglish: 'Do you also want to become a member of this pleasant tennis club?'
    },
    {
      id: 'de_ledenpas',
      dutch: 'de ledenpas',
      english: 'membership card',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ledenpassen',
      exampleSentence: 'Bij het tourniquet scan je je ledenpas.',
      exampleEnglish: 'At the turnstile you scan your member card.'
    },
    {
      id: 'inschrijven',
      dutch: 'zich inschrijven',
      english: 'to register / to enrol',
      category: 'administratie',
      partOfSpeech: 'verb',
      exampleSentence: 'Je kunt je online of bij de balie inschrijven.',
      exampleEnglish: 'You can register online or at the reception desk.'
    },
    {
      id: 'opzeggen',
      dutch: 'opzeggen',
      english: 'to cancel / terminate (contract, membership)',
      category: 'administratie',
      partOfSpeech: 'verb',
      exampleSentence: 'Je kunt het maandabonnement altijd per direct opzeggen.',
      exampleEnglish: 'You can always cancel the monthly membership immediately.'
    },
    {
      id: 'de_korting',
      dutch: 'de korting',
      english: 'discount',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kortingen',
      exampleSentence: 'Studenten krijgen twintig procent korting op het tarief.',
      exampleEnglish: 'Students get a twenty percent discount on the rate.'
    },
    {
      id: 'gratis',
      dutch: 'gratis (kosteloos)',
      english: 'free of charge',
      category: 'geld',
      partOfSpeech: 'adjective',
      exampleSentence: 'Bij inschrijving ontvang je een gratis bidon en sporttas.',
      exampleEnglish: 'Upon registration you receive a free water bottle and sports bag.'
    },
    {
      id: 'de_conditie',
      dutch: 'de conditie (in conditie zijn)',
      english: 'stamina / physical condition (to be in shape)',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Door regelmatig hardlopen verbetert je conditie aanzienlijk.',
      exampleEnglish: 'By running regularly your physical condition improves noticeably.'
    },
    {
      id: 'de_krachttraining',
      dutch: 'de krachttraining',
      english: 'strength training / weight training',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Krachttraining helpt om sterke spieren op te bouwen.',
      exampleEnglish: 'Strength training helps to build strong muscles.'
    },
    {
      id: 'de_cardio',
      dutch: 'de cardio / cardiotraining',
      english: 'cardio workout',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Ik begin mijn training altijd met twintig minuten cardio.',
      exampleEnglish: 'I always start my workout with twenty minutes of cardio.'
    },
    {
      id: 'de_spier',
      dutch: 'de spier (de spierpijn)',
      english: 'muscle (muscle ache / soreness)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de spieren',
      exampleSentence: 'De dag na het sporten had ik erge spierpijn in mijn benen.',
      exampleEnglish: 'The day after exercising I had severe muscle ache in my legs.'
    },
    {
      id: 'de_groepsles',
      dutch: 'de groepsles',
      english: 'group class',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de groepslessen',
      exampleSentence: 'Dinsdagavond doe ik mee met de groepsles bodypump.',
      exampleEnglish: 'On Tuesday evening I take part in the bodypump group class.'
    },
    {
      id: 'de_kleedkamer',
      dutch: 'de kleedkamer (de kleedruimte)',
      english: 'changing room / locker room',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kleedkamers',
      exampleSentence: 'Laat je schoenen niet achter in de kleedkamer.',
      exampleEnglish: 'Do not leave your shoes behind in the changing room.'
    },
    {
      id: 'het_kluisje',
      dutch: 'het kluisje (de locker)',
      english: 'locker',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kluisjes',
      exampleSentence: 'Berg je waardevolle spullen altijd op in een kluisje.',
      exampleEnglish: 'Always store your valuables in a locker.'
    },
    {
      id: 'het_slot',
      dutch: 'het slot (het hangslotje)',
      english: 'lock (padlock)',
      category: 'voorwerp',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de sloten / de slotjes',
      exampleSentence: 'Vergeet niet een eigen slotje mee te nemen voor het kluisje.',
      exampleEnglish: 'Don\'t forget to bring your own padlock for the locker.'
    },
    {
      id: 'de_handdoek',
      dutch: 'de handdoek',
      english: 'towel',
      category: 'voorwerp',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de handdoeken',
      exampleSentence: 'Het is verplicht een handdoek op de fitnessapparaten te leggen.',
      exampleEnglish: 'It is mandatory to put a towel on the gym equipment.'
    },
    {
      id: 'de_bidon',
      dutch: 'de bidon (de waterfles)',
      english: 'water bottle',
      category: 'voorwerp',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bidons',
      exampleSentence: 'Vul je bidon met koel water bij het tappunt.',
      exampleEnglish: 'Refill your water bottle with cool water at the tap.'
    },
    {
      id: 'de_loopband',
      dutch: 'de loopband',
      english: 'treadmill',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de loopbanden',
      exampleSentence: 'Zij rent vijf kilometer op de loopband met uitzicht over de stad.',
      exampleEnglish: 'She runs five kilometres on the treadmill overlooking the city.'
    },
    {
      id: 'de_hometrainer',
      dutch: 'de hometrainer (de stationaire fiets)',
      english: 'exercise bike',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de hometrainers',
      exampleSentence: 'Ik trap een half uur op de hometrainer om op te warmen.',
      exampleEnglish: 'I pedal on the exercise bike for half an hour to warm up.'
    },
    {
      id: 'de_halter',
      dutch: 'de halter (de gewichten)',
      english: 'dumbbell / barbell (weights)',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de halters',
      exampleSentence: 'Hij traint zijn armspieren met zware halters.',
      exampleEnglish: 'He trains his arm muscles with heavy dumbbells.'
    },
    {
      id: 'opwarmen',
      dutch: 'opwarmen (de warming-up)',
      english: 'to warm up (warm-up)',
      category: 'sport',
      partOfSpeech: 'verb',
      exampleSentence: 'Warm je spieren altijd goed op voor je zwaar gaat tillen.',
      exampleEnglish: 'Always warm your muscles up well before you lift heavy.'
    },
    {
      id: 'rekken_en_strekken',
      dutch: 'rekken en strekken (de cooling-down)',
      english: 'to stretch (cooling down)',
      category: 'sport',
      partOfSpeech: 'phrase',
      exampleSentence: 'Na het hardlopen doen we rek- en strekoefeningen.',
      exampleEnglish: 'After running we do stretching exercises.'
    },
    {
      id: 'het_formulier',
      dutch: 'het formulier (invullen)',
      english: 'form (to fill in / out)',
      category: 'administratie',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de formulieren',
      exampleSentence: 'Wilt u dit inschrijfformulier ondertekenen?',
      exampleEnglish: 'Would you please sign this registration form?'
    },
    {
      id: 'de_rij',
      dutch: 'de rij (in de rij staan)',
      english: 'line / queue (to queue up)',
      category: 'dagelijks',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de rijen',
      exampleSentence: 'Er stond een lange rij voor de kassa.',
      exampleEnglish: 'There was a long queue in front of the checkout.'
    },
    {
      id: 'de_balie',
      dutch: 'de balie (de receptie)',
      english: 'counter / front desk',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de balies',
      exampleSentence: 'Meld je bij aankomst even bij de balie.',
      exampleEnglish: 'Report to the reception desk upon arrival.'
    },
    {
      id: 'het_verschil',
      dutch: 'het verschil (verschillen)',
      english: 'difference (to differ)',
      category: 'algemeen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de verschillen',
      exampleSentence: 'Wat is het verschil tussen deze twee trainingsschema\'s?',
      exampleEnglish: 'What is the difference between these two workout routines?'
    },
    {
      id: 'het_bedrag',
      dutch: 'het bedrag',
      english: 'amount / sum of money',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bedragen',
      exampleSentence: 'U kunt het totale bedrag met pinpas betalen.',
      exampleEnglish: 'You can pay the full amount by debit card.'
    },
    {
      id: 'in_een_keer',
      dutch: 'in één keer betalen',
      english: 'to pay all at once / lump sum',
      category: 'geld',
      partOfSpeech: 'phrase',
      exampleSentence: 'Als u in één keer betaalt, krijgt u extra korting.',
      exampleEnglish: 'If you pay all at once, you get an extra discount.'
    },
    {
      id: 'de_sauna',
      dutch: 'de sauna',
      english: 'sauna',
      category: 'ontspanning',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de sauna\'s',
      exampleSentence: 'Na een intensieve training ontspan ik graag in de sauna.',
      exampleEnglish: 'After an intense workout I like relaxing in the sauna.'
    },
    {
      id: 'blesseren',
      dutch: 'zich blesseren (de blessure)',
      english: 'to injure oneself (injury)',
      category: 'gezondheid',
      partOfSpeech: 'verb',
      exampleSentence: 'Kijk uit dat je je knie niet blesseert bij die sprong.',
      exampleEnglish: 'Be careful not to injure your knee during that jump.'
    },
    {
      id: 'de_trainer',
      dutch: 'de trainer / personal trainer',
      english: 'coach / personal trainer',
      category: 'sport',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de trainers',
      exampleSentence: 'De personal trainer helpt je met een persoonlijk eetschema.',
      exampleEnglish: 'The personal trainer assists you with an individual diet plan.'
    },
    {
      id: 'gezond',
      dutch: 'gezond leven (de gezondheid)',
      english: 'healthy living (health)',
      category: 'gezondheid',
      partOfSpeech: 'adjective',
      exampleSentence: 'Voldoende slaap en regelmatig bewegen zijn gezond.',
      exampleEnglish: 'Adequate sleep and regular movement are healthy.'
    },
    {
      id: 'het_doel',
      dutch: 'het doel (de doelstelling)',
      english: 'goal / objective',
      category: 'algemeen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de doelen',
      exampleSentence: 'Mijn doel is om binnen drie maanden tien kilometer te lopen.',
      exampleEnglish: 'My goal is to run ten kilometres within three months.'
    },
    {
      id: 'afvallen',
      dutch: 'afvallen (gewicht verliezen)',
      english: 'to lose weight',
      category: 'gezondheid',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij wil graag vijf kilo afvallen voor de zomervakantie.',
      exampleEnglish: 'She would like to lose five kilos before the summer holiday.'
    },
    {
      id: 'aankomen_in_gewicht',
      dutch: 'aankomen (in gewicht)',
      english: 'to gain weight / build mass',
      category: 'gezondheid',
      partOfSpeech: 'verb',
      exampleSentence: 'Door krachttraining kwam hij drie kilo aan in spiermassa.',
      exampleEnglish: 'Through strength training he gained three kilos in muscle mass.'
    },
    {
      id: 'zweten',
      dutch: 'zweten',
      english: 'to sweat / to perspire',
      category: 'lichaam',
      partOfSpeech: 'verb',
      exampleSentence: 'In de spinningles stond iedereen enorm te zweten.',
      exampleEnglish: 'In the spinning class everyone was sweating profusely.'
    },
    {
      id: 'volhouden',
      dutch: 'volhouden',
      english: 'to persevere / keep going',
      category: 'karakter',
      partOfSpeech: 'verb',
      exampleSentence: 'Kom op, nog één minuutje, even volhouden!',
      exampleEnglish: 'Come on, just one more minute, keep it up!'
    },
    {
      id: 'zin_hebben_in',
      dutch: 'zin hebben in...',
      english: 'to feel like / to be in the mood for',
      category: 'gevoel',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik heb vanavond echt zin in een stevige workout.',
      exampleEnglish: 'I really feel like a vigorous workout tonight.'
    },
    {
      id: 'regelmatig',
      dutch: 'regelmatig (vaak)',
      english: 'regularly (often)',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Het is belangrijk om regelmatig water te drinken.',
      exampleEnglish: 'It is important to drink water regularly.'
    }
  ],
  grammarPoints: [
    {
      id: 'indirecte_vragen_met_of',
      title: '14.1 Indirecte Vragen met "OF" en Vraagwoorden',
      summary: 'Beleefde vragen formuleren: in de bijzin gaan alle werkwoorden naar het einde.',
      ruleExplanation: `Als je een vraag beleefder maakt, begin je vaak met:
• "Weet je misschien...?"
• "Kunt u mij vertellen...?"
• "Mag ik vragen...?"
• "Ik wil graag weten..."

Hierdoor ontstaat een BIJZIN. In een Nederlandse bijzin verhuizen ALLE WERKWOORDEN naar het EINDE van de zin!

1. Ja/Nee-vragen worden ingeleid met "OF":
• Directe vraag: "Kan ik me hier inschrijven?"
• Indirecte vraag: "Weet je OF ik me hier KAN INSCHRIJVEN?"

• Directe vraag: "Heeft de sportschool een sauna?"
• Indirecte vraag: "Kunt u mij zeggen OF de sportschool een sauna HEEFT?"

2. Open vragen behouden het vraagwoord (wat, waar, hoe, wie, wanneer):
• Directe vraag: "Wat is het verschil tussen de abonnementen?"
• Indirecte vraag: "Kun je me vertellen WAT het verschil tussen de abonnementen IS?"

• Directe vraag: "Hoe laat sluit de zaal?"
• Indirecte vraag: "Mag ik vragen HOE LAAT de zaal SLUIT?"`,
      examples: [
        {
          dutch: 'Weet u of deze les gratis is?',
          english: 'Do you know if this class is free?',
          note: 'Bijzin met "of": werkwoord "is" staat achteraan.'
        },
        {
          dutch: 'Ik wil graag weten waar de kleedkamers zijn.',
          english: 'I would like to know where the changing rooms are.',
          note: 'Vraagwoord "waar": werkwoord "zijn" achteraan.'
        }
      ],
      tables: [
        {
          headers: ['Directe vraag', 'Inleidende hoofdzin', 'Indirecte bijzin (werkwoord achteraan)'],
          rows: [
            ['Is de zaal open?', 'Weet je...', '... OF de zaal open IS?'],
            ['Mag ik hier parkeren?', 'Kunt u me vertellen...', '... OF ik hier MAG PARKEREN?'],
            ['Waar zijn de kluisjes?', 'Mag ik vragen...', '... WAAR de kluisjes ZIJN?'],
            ['Hoeveel kost een jaarabonnement?', 'Ik wil weten...', '... HOEVEEL een jaarabonnement KOST.']
          ]
        }
      ]
    },
    {
      id: 'toekomst_uitdrukken_futurum',
      title: '14.2 De Toekomende Tijd (Futurum)',
      summary: 'Drie manieren om de toekomst uit te drukken in het Nederlands.',
      ruleExplanation: `In het Nederlands druk je de toekomst op drie manieren uit:

1. GAAN + infinitief (heel gebruikelijk bij plannen en intenties):
• "Ik GA morgenochtend hardlopen." (I am going to go running tomorrow.)
• "We GAAN meteen je pasje aanmaken." (We are going to make your card right away.)

2. TEGENWOORDIGE TIJD + tijdsbepaling (zeer frequent in het Nederlands!):
• "Morgen BEGIN ik met mijn trainingsschema." (Tomorrow I start my routine.)
• "Volgende week DONDERDAG IS de fitness dicht." (Next Thursday the gym is closed.)

3. ZULLEN + infinitief (formeler, voorspellingen of formele toezeggingen):
• "De trainer ZAL je morgen rondleiden." (The trainer will show you around tomorrow.)
• "Het ZAL overmorgen zonnig zijn." (It will be sunny the day after tomorrow.)`,
      examples: [
        {
          dutch: 'Wat ga je vanavond doen? - Ik ga naar de sportschool.',
          english: 'What are you going to do tonight? - I am going to the gym.',
          note: 'Gaan + infinitief voor intentie.'
        },
        {
          dutch: 'Zaterdag doe ik mee aan de marathon van Rotterdam.',
          english: 'On Saturday I am participating in the Rotterdam marathon.',
          note: 'Presens met tijdsbepaling "zaterdag".'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_indirecte_vragen',
      title: 'Opdracht 1: Maak de indirecte vraag',
      instruction: 'Zet de woorden in de juiste bijzinvolgorde (werkwoord achteraan).',
      items: [
        {
          id: 1,
          prompt: '"Kan ik pinnen?" -> Kunt u mij vertellen of ik hier _______ ?',
          answer: 'kan pinnen',
          options: ['kan pinnen', 'pin kan', 'kan gepind'],
          explanation: 'In de bijzin staan alle werkwoorden helemaal achteraan: "of ik hier kan pinnen".'
        },
        {
          id: 2,
          prompt: '"Waar is de kleedkamer?" -> Weet jij waar de kleedkamer _______ ?',
          answer: 'is',
          options: ['is', 'zijn', 'was'],
          explanation: 'Het werkwoord "is" verhuist naar het einde van de bijzin.'
        },
        {
          id: 3,
          prompt: '"Moet ik een handdoek meenemen?" -> Mag ik vragen of ik een handdoek _______ ?',
          answer: 'moet meenemen',
          options: ['moet meenemen', 'meenemen moet', 'neem mee'],
          explanation: 'Hulpwerkwoord + infinitief achteraan: "of ik een handdoek moet meenemen".'
        },
        {
          id: 4,
          prompt: '"Hoe laat begint de yogales?" -> Weet iemand hoe laat de yogales _______ ?',
          answer: 'begint',
          options: ['begint', 'beginnen', 'begonnen'],
          explanation: 'Persoonsvorm "begint" achteraan.'
        }
      ]
    },
    {
      id: 'opdracht_2_futurum',
      title: 'Opdracht 2: Toekomst met "gaan"',
      instruction: 'Vervoeg "gaan" als hulpwerkwoord van de toekomst.',
      items: [
        {
          id: 1,
          prompt: 'Wij _______ morgenochtend om zeven uur samen trainen.',
          answer: 'gaan',
          options: ['gaan', 'gaat', 'gingen'],
          explanation: 'Onderwerp "wij" -> wij gaan.'
        },
        {
          id: 2,
          prompt: 'Wat _______ jij vanavond na je werk doen?',
          answer: 'ga',
          options: ['ga', 'gaat', 'gaan'],
          explanation: 'Inversie met "jij": persoonsvorm verliest de -t -> "wat ga jij doen?".'
        },
        {
          id: 3,
          prompt: 'Paul _______ zich inschrijven voor een jaarabonnement.',
          answer: 'gaat',
          options: ['gaat', 'gaan', 'ga'],
          explanation: 'Paul (hij) -> gaat.'
        }
      ]
    },
    {
      id: 'opdracht_3_sportschool_vocabulaire',
      title: 'Opdracht 3: Woorden in de sportschool',
      instruction: 'Kies het juiste woord.',
      items: [
        {
          id: 1,
          prompt: 'Als je stopt met sporten, moet je je abonnement schriftelijk:',
          answer: 'opzeggen',
          options: ['opzeggen', 'inschrijven', 'zweten'],
          explanation: 'Een contract beëindigen heet "opzeggen".'
        },
        {
          id: 2,
          prompt: 'Pijn in je benen na een hele zware beentraining noem je:',
          answer: 'spierpijn',
          options: ['spierpijn', 'korting', 'kleinigheid'],
          explanation: 'Spierpijn = muscle soreness.'
        },
        {
          id: 3,
          prompt: 'In de kleedkamer sluit je je kleding en tas op in een:',
          answer: 'kluisje',
          options: ['kluisje', 'bidon', 'halter'],
          explanation: 'Een locker noem je in het Nederlands een kluisje.'
        }
      ]
    }
  ],
  readingText: {
    title: '14.8 Tekst: Sport- en Beweegcultuur in Nederland',
    subtitle: 'Over sportverenigingen, bootcampen in het Vondelpark en Elfstedentocht (Blz. 210)',
    content: `Nederlanders behoren tot de sportiefste volkeren van Europa: meer dan 55 procent van de bevolking sport minimaal één keer per week. 

Naast de commerciële fitnesscentra en sportscholen kent Nederland een unieke "verenigingscultuur". Miljoenen mensen zijn lid van een lokale voetbalclub, hockeyvereniging, tennisclub of roeivereniging. Deze verenigingen draaien grotendeels op vrijwilligers: ouders die limonade schenken in de kantine, bardiensten draaien of scheidsrechter zijn op zaterdagochtend. Na de wedstrijd drinkt men steevast samen een biertje of frisje in het clubhuis: de "derde helft".

In de grote steden zie je de laatste jaren ook een enorme toename van buitensport. In stadsparken zoals het Vondelpark in Amsterdam, het Noorderplantsoen in Groningen of het Wilhelminapark in Utrecht zie je op doordeweekse avonden talloze bootcampgroepen, hardlopers en calisthenics-beoefenaars. 

En zodra het in de winter enkele nachten flink vriest, krijgt heel Nederland spontaan "schaatskoorts" en hoopt iedereen op de tocht der tochten: de legendarische 200 kilometer lange Elfstedentocht op natuurijs in Friesland!`,
    vocabularyNotes: [
      { word: 'de verenigingscultuur', translation: 'club / association culture' },
      { word: 'de vrijwilliger', translation: 'volunteer' },
      { word: 'de derde helft', translation: '"third half" (social drinks after the sports match)' },
      { word: 'de toename', translation: 'increase / growth' },
      { word: 'de schaatskoorts', translation: 'skating fever (excitement when canals freeze)' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Waarop draaien de meeste traditionele Nederlandse sportverenigingen?',
        answer: 'Grotendeels op vrijwilligers (ouders en clubleden)',
        options: [
          'Grotendeels op vrijwilligers (ouders en clubleden)',
          'Uitsluitend op betaalde professionele managers',
          'Op subsidies van buitenlandse bedrijven'
        ],
        explanation: 'De Nederlandse clubcultuur steunt zwaar op vrijwilligerswerk van leden en ouders.'
      },
      {
        id: 2,
        prompt: 'Wat bedoelt men in de Nederlandse sportwereld met "de derde helft"?',
        answer: 'De gezellige nazit met een drankje in het clubhuis na afloop van de wedstrijd',
        options: [
          'De gezellige nazit met een drankje in het clubhuis na afloop van de wedstrijd',
          'Een verplichte verlenging bij een gelijkspel',
          'Een extra trainingssessie op zondag'
        ],
        explanation: 'De derde helft is het sociale samenzijn aan de bar van de clubkantine.'
      },
      {
        id: 3,
        prompt: 'Wat gebeurt er in Nederland als het in de winter hard begint te vriezen?',
        answer: 'Mensen krijgen "schaatskoorts" en hopen op schaatsen op natuurijs',
        options: [
          'Mensen krijgen "schaatskoorts" en hopen op schaatsen op natuurijs',
          'Alle sportscholen worden meteen voor een maand gesloten',
          'Iedereen gaat verplicht binnen badminton spelen'
        ],
        explanation: 'Schaatsen op natuurijs is de nationale passie bij wintervorst.'
      }
    ]
  },
  pronunciation: {
    title: '14.9 Uitspraak: De klinkers "eu" vs "u"',
    soundFocus: 'Klinkers: "eu" (deur, leuk, neus) vs korte "u" (dun, bus, club)',
    explanation: 'De lange klank "eu" [ø:] (in "deur", "leuk", "keuze", "neus") spreek je uit met vooruitgestoken, geronde lippen. De korte "u" [ʏ] (in "dun", "bus", "club", "stuk") is veel korter, ontspannen en iets meer open. Verwar ze niet!',
    wordList: [
      'deur', 'dun', 'reuk', 'ruk', 'neus', 'zus', 'leuk', 'lukt', 'deuk', 'druk', 'beurt', 'bult'
    ],
    minimalPairs: [
      { word1: 'deur', word2: 'dun', contrast: 'eu vs korte u' },
      { word1: 'reuk', word2: 'ruk', contrast: 'eu vs korte u' },
      { word1: 'deuk', word2: 'druk', contrast: 'eu vs korte u' },
      { word1: 'leuk', word2: 'lukt', contrast: 'eu vs korte u' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 14: In de sportschool',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Kies de correcte indirecte vraag: "Kunt u mij vertellen _______ ?"',
        options: [
          'of er een sauna in de kleedkamer is',
          'is er een sauna in de kleedkamer',
          'of is er in de kleedkamer een sauna'
        ],
        answer: 'of er een sauna in de kleedkamer is',
        explanation: 'In een bijzin met "of" staat de persoonsvorm ("is") helemaal aan het einde.'
      },
      {
        id: 2,
        prompt: 'Kies de correcte indirecte vraag met vraagwoord: "Weet jij _______ ?"',
        options: [
          'hoeveel een jaarabonnement kost',
          'hoeveel kost een jaarabonnement',
          'kost hoeveel een jaarabonnement'
        ],
        answer: 'hoeveel een jaarabonnement kost',
        explanation: 'Het werkwoord "kost" verhuist naar het einde van de bijzin.'
      },
      {
        id: 3,
        prompt: 'Wat is het juiste lidwoord voor "abonnement"?',
        options: ['het abonnement', 'de abonnement', 'beide kunnen'],
        answer: 'het abonnement',
        explanation: 'Abonnement is een het-woord: het abonnement (de abonnementen).'
      },
      {
        id: 4,
        prompt: 'Wat is het juiste lidwoord voor "sportschool"?',
        options: ['de sportschool', 'het sportschool', 'een sportschool (geen lidwoord mogelijk)'],
        answer: 'de sportschool',
        explanation: 'School is een de-woord: de school, dus ook de sportschool.'
      },
      {
        id: 5,
        prompt: 'Wat betekent: "Je kunt het abonnement maandelijks opzeggen"?',
        options: [
          'You can cancel the subscription every month.',
          'You must renew the subscription every year.',
          'You can only pay with coins every month.'
        ],
        answer: 'You can cancel the subscription every month.',
        explanation: '"Opzeggen" betekent annuleren of beëindigen van een contract.'
      },
      {
        id: 6,
        prompt: 'Welke zin drukt een toekomstig voornemen uit met het werkwoord "gaan"?',
        options: [
          'Ik ga morgenochtend vroeg fitnessen.',
          'Ik ga nu meteen naar huis lopen.',
          'Ik ging gisteren naar de sportschool.'
        ],
        answer: 'Ik ga morgenochtend vroeg fitnessen.',
        explanation: '"Gaan + infinitief" met tijdsbepaling in de toekomst drukt een intentie uit.'
      },
      {
        id: 7,
        prompt: 'Wat is verplicht om op de fitnessapparaten te leggen uit hygiënisch oogpunt?',
        options: ['Een handdoek', 'Een krant', 'Een winterjas'],
        answer: 'Een handdoek',
        explanation: 'In vrijwel alle sportscholen is het gebruik van een handdoek verplicht.'
      },
      {
        id: 8,
        prompt: 'Wat is een "kluisje"?',
        options: [
          'Een locker om kleding en waardevolle spullen veilig in op te bergen.',
          'Een speciaal gewicht voor de armspieren.',
          'Een drankje met elektrolyten.'
        ],
        answer: 'Een locker om kleding en waardevolle spullen veilig in op te bergen.',
        explanation: 'Een kluisje is een afsluitbare locker.'
      },
      {
        id: 9,
        prompt: 'Wat betekent de Nederlandse sportterm "de derde helft"?',
        options: [
          'Gezellig samen iets drinken in de clubkantine na afloop van de wedstrijd.',
          'Een extra helft van 45 minuten bij gelijkspel.',
          'De warming-up voorafgaand aan de training.'
        ],
        answer: 'Gezellig samen iets drinken in de clubkantine na afloop van de wedstrijd.',
        explanation: 'De derde helft staat voor de gezelligheid na de wedstrijd in het clubhuis.'
      },
      {
        id: 10,
        prompt: 'Wat betekent het woord "gratis"?',
        options: [
          'Kosteloos / free of charge (je hoeft er niets voor te betalen).',
          'Met twintig procent extra rente.',
          'Gevaarlijk voor de gezondheid.'
        ],
        answer: 'Kosteloos / free of charge (je hoeft er niets voor te betalen).',
        explanation: 'Gratis betekent dat het niets kost.'
      }
    ]
  },
  culturalOrPracticalNote: 'Sportcultuur in Nederland: Meer dan de helft van de Nederlanders sport wekelijks. Veel sporten zijn georganiseerd in gezellige verenigingen (voetbal, hockey, tennis, roeien) die draaien op vrijwilligers. Na de wedstrijd volgt steevast "de derde helft" aan de bar in de clubkantine!'
};
