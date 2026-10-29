import { CustomLessonData } from '../types/lesson';

export const CHAPTER_13_DATA: CustomLessonData = {
  id: 'hoofdstuk_13',
  chapterNumber: 'Hoofdstuk 13',
  chapterTitle: 'Bij vrienden',
  description: 'Op bezoek bij vrienden ("kom binnen!"), cadeautjes meenemen (bloemen en bonbons), praten over het weer en koetjes en kalfjes ("Zeg dat wel!"), huisdieren en plannen, en HET WERKWOORD "ZULLEN" (voorstellen doen: "zullen we?", beloftes maken: "dat zal ik doen", en de toekomende tijd).',
  language: 'Nederlands',
  createdAt: 1727760000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Paul',
      dutch: 'Hallo Bas, welkom, kom binnen! Kon je het makkelijk vinden?',
      english: 'Hello Bas, welcome, come in! Could you find it easily?',
      notes: '"Kom binnen!" is the standard Dutch invitation into someone\'s home.',
      keyWords: ['kom binnen', 'makkelijk vinden']
    },
    {
      id: 2,
      speaker: 'Bas',
      dutch: 'Ja, het was geen enkel probleem. Het huis naast de kerk, zei je. Dat kon niet missen!',
      english: 'Yes, it was no problem at all. The house next to the church, you said. You couldn\'t miss it!',
      notes: '"Dat kon niet missen" = You couldn\'t miss it / impossible to miss.',
      keyWords: ['geen probleem', 'naast de kerk', 'kon niet missen']
    },
    {
      id: 3,
      speaker: 'Paul',
      dutch: 'Gelukkig maar. Mag ik je jas aannemen? Ga lekker zitten.',
      english: 'Fortunately. May I take your coat? Make yourself comfortable / take a seat.',
      notes: 'Dutch hospitality: taking guests\' coats and offering a seat.',
      keyWords: ['jas aannemen', 'ga lekker zitten']
    },
    {
      id: 4,
      speaker: 'Bas',
      dutch: 'Dank je wel. Ik heb een kleinigheidje voor jullie meegebracht: een doosje bonbons en een bos tulpen.',
      english: 'Thank you. I brought along a little something for you guys: a box of chocolates and a bunch of tulips.',
      notes: '"een kleinigheidje" = a little something / small token gift.',
      keyWords: ['kleinigheidje', 'meegebracht', 'bonbons', 'bos tulpen']
    },
    {
      id: 5,
      speaker: 'Paul',
      dutch: 'Wat attent van je, dat had je echt niet hoeven doen! Wat een prachtige bloemen. Ik zet ze meteen in het water.',
      english: 'How thoughtful of you, you really didn\'t have to do that! What gorgeous flowers. I\'ll put them in water right away.',
      notes: '"Dat had je niet hoeven doen" is the polite standard response when receiving a gift.',
      keyWords: ['wat attent', 'in het water zetten']
    },
    {
      id: 6,
      speaker: 'Bas',
      dutch: 'Graag gedaan! Wat een herfstweer buiten hè, het stormt en het regent onophoudelijk.',
      english: 'My pleasure! What autumn weather outside huh, it\'s storming and raining ceaselessly.',
      notes: 'Classic Dutch conversation starter: talking about the weather.',
      keyWords: ['herfstweer', 'stormt', 'onophoudelijk']
    },
    {
      id: 7,
      speaker: 'Paul',
      dutch: 'Zeg dat wel! Typisch Nederlands weer. Zal ik een lekkere warme kop koffie voor je inschenken, of wil je liever muntthee?',
      english: 'You can say that again! Typical Dutch weather. Shall I pour you a nice hot cup of coffee, or would you prefer mint tea?',
      notes: '"Zeg dat wel!" = You can say that again! Modal "zullen" for offering: "Zal ik... inschenken?".',
      keyWords: ['zeg dat wel', 'zal ik inschenken', 'muntthee']
    },
    {
      id: 8,
      speaker: 'Bas',
      dutch: 'Een cappuccino zou heerlijk zijn, alsjeblieft. Hé, wie hebben we daar? Wat een schattige kat!',
      english: 'A cappuccino would be lovely, please. Hey, who do we have here? What an adorable cat!',
      notes: '"Wat een schattige kat" = What an adorable cat.',
      keyWords: ['cappuccino', 'schattige kat']
    },
    {
      id: 9,
      speaker: 'Paul',
      dutch: 'Dat is Minoes. Ze is een beetje verlegen bij vreemden, maar als je haar aait, spint ze meteen. Zullen we vanavond gezellig samen koken of pizza bestellen?',
      english: 'That is Minoes. She is a bit shy around strangers, but if you pet her, she purrs immediately. Shall we cook together tonight or order pizza?',
      notes: 'Proposal with zullen: "Zullen we koken of bestellen?".',
      keyWords: ['verlegen', 'aaien', 'spinnen', 'zullen we koken']
    },
    {
      id: 10,
      speaker: 'Bas',
      dutch: 'Laten we gezellig samen pasta maken! Ik zal de groenten snijden en de saus bereiden.',
      english: 'Let\'s make pasta together! I will chop the vegetables and prepare the sauce.',
      notes: 'Promise / intention with zullen: "Ik zal de groenten snijden".',
      keyWords: ['laten we', 'ik zal snijden', 'saus bereiden']
    }
  ],
  vocabulary: [
    {
      id: 'zullen',
      dutch: 'zullen (zal, zult, zullen)',
      english: 'shall / will (for proposals, promises, future)',
      category: 'werkwoord',
      partOfSpeech: 'verb',
      exampleSentence: 'Zal ik een kopje thee voor je zetten?',
      exampleEnglish: 'Shall I make a cup of tea for you?'
    },
    {
      id: 'het_bezoek',
      dutch: 'het bezoek (op bezoek komen)',
      english: 'visit / guests (to come on a visit)',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bezoeken',
      exampleSentence: 'Onze vrienden komen vanavond op bezoek.',
      exampleEnglish: 'Our friends are coming over for a visit tonight.'
    },
    {
      id: 'de_gastvrijheid',
      dutch: 'de gastvrijheid',
      english: 'hospitality',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Hartelijk dank voor jullie warme gastvrijheid!',
      exampleEnglish: 'Thank you warmly for your kind hospitality!'
    },
    {
      id: 'het_kleinigheidje',
      dutch: 'het kleinigheidje',
      english: 'small gift / token / little something',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kleinigheidjes',
      exampleSentence: 'Ik heb een kleinigheidje meegenomen voor de gastvrouw.',
      exampleEnglish: 'I brought a little something for the hostess.'
    },
    {
      id: 'de_bonbon',
      dutch: 'de bonbon (het doosje bonbons)',
      english: 'chocolate praline (box of chocolates)',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bonbons',
      exampleSentence: 'Bij de koffie kregen we luxe Belgische bonbons.',
      exampleEnglish: 'With coffee we were served luxury Belgian pralines.'
    },
    {
      id: 'de_bos_bloemen',
      dutch: 'de bos bloemen (de tulp)',
      english: 'bunch of flowers / bouquet (tulip)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bossen bloemen',
      exampleSentence: 'Hij kocht een vrolijke bos gele tulpen op de markt.',
      exampleEnglish: 'He bought a cheerful bunch of yellow tulips at the market.'
    },
    {
      id: 'de_vaas',
      dutch: 'de vaas',
      english: 'vase',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vazen',
      exampleSentence: 'Zet de bloemen in een schone vaas met vers water.',
      exampleEnglish: 'Put the flowers in a clean vase with fresh water.'
    },
    {
      id: 'aannemen',
      dutch: 'aannemen (de jas aannemen)',
      english: 'to take / accept (take someone\'s coat)',
      category: 'werkwoord',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik uw natte jas aannemen?',
      exampleEnglish: 'May I take your wet coat?'
    },
    {
      id: 'attent',
      dutch: 'attent (wat attent van je)',
      english: 'thoughtful / considerate (how thoughtful of you)',
      category: 'sociaal',
      partOfSpeech: 'adjective',
      exampleSentence: 'Wat attent dat je aan mijn verjaardag hebt gedacht!',
      exampleEnglish: 'How thoughtful of you to remember my birthday!'
    },
    {
      id: 'kom_binnen',
      dutch: 'kom binnen! (welkom)',
      english: 'come in! / welcome',
      category: 'sociaal',
      partOfSpeech: 'phrase',
      exampleSentence: 'Kom binnen en doe alsof je thuis bent!',
      exampleEnglish: 'Come in and make yourself at home!'
    },
    {
      id: 'zeg_dat_wel',
      dutch: 'zeg dat wel!',
      english: 'you can say that again! / tell me about it!',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Het is koud vandaag! - Zeg dat wel!',
      exampleEnglish: 'It\'s cold today! - You can say that again!'
    },
    {
      id: 'het_weer',
      dutch: 'het weer',
      english: 'weather',
      category: 'weer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Nederlanders praten voortdurend over het weer.',
      exampleEnglish: 'Dutch people talk constantly about the weather.'
    },
    {
      id: 'stormen',
      dutch: 'stormen (de storm)',
      english: 'to storm (storm / gale)',
      category: 'weer',
      partOfSpeech: 'verb',
      exampleSentence: 'Aan de kust stormt het vanavond hevig.',
      exampleEnglish: 'On the coast it will storm heavily tonight.'
    },
    {
      id: 'regenen',
      dutch: 'onophoudelijk regenen',
      english: 'to rain continuously / ceaselessly',
      category: 'weer',
      partOfSpeech: 'verb',
      exampleSentence: 'Het regende onophoudelijk vanochtend vroeg.',
      exampleEnglish: 'It rained ceaselessly early this morning.'
    },
    {
      id: 'de_temperatuur',
      dutch: 'de temperatuur (graden)',
      english: 'temperature (degrees)',
      category: 'weer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de temperaturen',
      exampleSentence: 'De temperatuur stijgt morgen naar 22 graden.',
      exampleEnglish: 'The temperature rises tomorrow to 22 degrees.'
    },
    {
      id: 'het_seizoen',
      dutch: 'het seizoen (de seizoenen)',
      english: 'season',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de seizoenen',
      exampleSentence: 'Mijn favoriete seizoen is de lente.',
      exampleEnglish: 'My favourite season is spring.'
    },
    {
      id: 'de_lente',
      dutch: 'de lente / het voorjaar',
      english: 'spring',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de lentes',
      exampleSentence: 'In de lente bloeien alle bollenvelden in Lisse.',
      exampleEnglish: 'In spring all the bulb fields blossom in Lisse.'
    },
    {
      id: 'de_zomer',
      dutch: 'de zomer (\'s zomers)',
      english: 'summer (in summer)',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zomers',
      exampleSentence: '\'s Zomers zitten terrassen in Utrecht bomvol.',
      exampleEnglish: 'In summer terraces in Utrecht are packed.'
    },
    {
      id: 'de_herfst',
      dutch: 'de herfst (\'s herfst)',
      english: 'autumn / fall',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de herfsten',
      exampleSentence: 'In de herfst verkleuren de bladeren prachtig rood en geel.',
      exampleEnglish: 'In autumn leaves turn beautifully red and yellow.'
    },
    {
      id: 'de_winter',
      dutch: 'de winter (\'s winters)',
      english: 'winter (in winter)',
      category: 'tijd',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de winters',
      exampleSentence: 'Als het vriest \'s winters, binden Nederlanders de schaatsen onder.',
      exampleEnglish: 'When it freezes in winter, the Dutch put on their ice skates.'
    },
    {
      id: 'het_huisdier',
      dutch: 'het huisdier',
      english: 'pet / domestic animal',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de huisdieren',
      exampleSentence: 'Hebben jullie thuis ook een huisdier?',
      exampleEnglish: 'Do you also have a pet at home?'
    },
    {
      id: 'de_kat',
      dutch: 'de kat / de poes',
      english: 'cat',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de katten / de poezen',
      exampleSentence: 'Onze zwarte kat slaapt altijd op de verwarming.',
      exampleEnglish: 'Our black cat always sleeps on the radiator.'
    },
    {
      id: 'de_hond',
      dutch: 'de hond',
      english: 'dog',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de honden',
      exampleSentence: 'Elke avond laten we de hond uit in het park.',
      exampleEnglish: 'Every evening we walk the dog in the park.'
    },
    {
      id: 'aaien',
      dutch: 'aaien',
      english: 'to pet / to stroke (an animal)',
      category: 'dieren',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik jouw zachte hond even aaien?',
      exampleEnglish: 'May I pet your soft dog for a moment?'
    },
    {
      id: 'spinnen',
      dutch: 'spinnen',
      english: 'to purr (cat)',
      category: 'dieren',
      partOfSpeech: 'verb',
      exampleSentence: 'De kat spint tevreden op mijn schoot.',
      exampleEnglish: 'The cat purrs contentedly on my lap.'
    },
    {
      id: 'verlegen',
      dutch: 'verlegen',
      english: 'shy / bashful',
      category: 'karakter',
      partOfSpeech: 'adjective',
      exampleSentence: 'Het kleine jongetje was eerst een beetje verlegen.',
      exampleEnglish: 'The little boy was a bit shy at first.'
    },
    {
      id: 'inschenken',
      dutch: 'inschenken',
      english: 'to pour (a drink)',
      category: 'eten',
      partOfSpeech: 'verb',
      exampleSentence: 'Zal ik nog een kopje koffie voor je inschenken?',
      exampleEnglish: 'Shall I pour you another cup of coffee?'
    },
    {
      id: 'de_muntthee',
      dutch: 'de muntthee (verse muntthee)',
      english: 'mint tea (fresh mint tea with honey)',
      category: 'drank',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'In Nederlandse cafés is verse muntthee met honing enorm populair.',
      exampleEnglish: 'In Dutch cafés fresh mint tea with honey is enormously popular.'
    },
    {
      id: 'koetjes_en_kalfjes',
      dutch: 'over koetjes en kalfjes praten',
      english: 'to make small talk / chit-chat about trivial things',
      category: 'uitdrukking',
      partOfSpeech: 'phrase',
      exampleSentence: 'We dronken thee en praatten over koetjes en kalfjes.',
      exampleEnglish: 'We drank tea and chatted about everyday little things.'
    },
    {
      id: 'de_afspraak',
      dutch: 'de afspraak (een afspraak maken)',
      english: 'appointment / arrangement (to make an appointment)',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de afspraken',
      exampleSentence: 'Nederlanders maken weken van tevoren een afspraak om af te spreken.',
      exampleEnglish: 'Dutch people make an appointment weeks in advance to meet up.'
    },
    {
      id: 'de_agenda',
      dutch: 'de agenda',
      english: 'diary / planner / calendar',
      category: 'werk',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de agenda\'s',
      exampleSentence: 'Wacht even, ik pak mijn agenda erbij om te kijken wanneer ik kan.',
      exampleEnglish: 'Wait a moment, I\'ll grab my planner to check when I\'m free.'
    },
    {
      id: 'binnenkort',
      dutch: 'binnenkort',
      english: 'soon / before long',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Zullen we binnenkort weer eens afspreken?',
      exampleEnglish: 'Shall we meet up again soon?'
    },
    {
      id: 'snijden',
      dutch: 'snijden (groenten snijden)',
      english: 'to chop / to cut (chop vegetables)',
      category: 'koken',
      partOfSpeech: 'verb',
      exampleSentence: 'Snijd de uien en paprika\'s in kleine stukjes.',
      exampleEnglish: 'Chop the onions and bell peppers into small pieces.'
    },
    {
      id: 'bereiden',
      dutch: 'bereiden (de maaltijd bereiden)',
      english: 'to prepare (prepare the meal / dish)',
      category: 'koken',
      partOfSpeech: 'verb',
      exampleSentence: 'We bereiden samen een traditionele Italiaanse pastasaus.',
      exampleEnglish: 'Together we prepare a traditional Italian pasta sauce.'
    },
    {
      id: 'het_etentje',
      dutch: 'het etentje',
      english: 'dinner party / casual dinner with friends',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de etentjes',
      exampleSentence: 'Zaterdag organiseren we een gezellig etentje voor vrienden.',
      exampleEnglish: 'On Saturday we are organising a nice dinner party for friends.'
    },
    {
      id: 'lekker_zitten',
      dutch: 'ga lekker zitten',
      english: 'make yourself comfortable / have a seat',
      category: 'sociaal',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ga lekker zitten op de bank, ik breng zo drankjes.',
      exampleEnglish: 'Make yourself comfortable on the couch, I\'ll bring drinks shortly.'
    },
    {
      id: 'het_koekje',
      dutch: 'het koekje (één koekje bij de koffie)',
      english: 'biscuit / cookie',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de koekjes',
      exampleSentence: 'In Nederland krijg je traditioneel één koekje bij de koffie.',
      exampleEnglish: 'In the Netherlands you traditionally get one cookie with coffee.'
    },
    {
      id: 'de_koektrommel',
      dutch: 'de koektrommel',
      english: 'biscuit tin',
      category: 'huis',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de koektrommels',
      exampleSentence: 'De gastvrouw opent de koektrommel en biedt je een koekje aan.',
      exampleEnglish: 'The hostess opens the biscuit tin and offers you a cookie.'
    },
    {
      id: 'spontaan',
      dutch: 'spontaan (zomaar langsgaan)',
      english: 'spontaneous (dropping by unannounced)',
      category: 'karakter',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zomaar spontaan bij iemand aanbellen gebeurt niet vaak meer.',
      exampleEnglish: 'Just dropping by spontaneously rarely happens anymore.'
    },
    {
      id: 'meegebracht',
      dutch: 'meegebracht (meebrengen)',
      english: 'brought along',
      category: 'werkwoord',
      partOfSpeech: 'verb',
      exampleSentence: 'Wat heb je voor lekkers meegebracht?',
      exampleEnglish: 'What treats did you bring along?'
    }
  ],
  grammarPoints: [
    {
      id: 'het_hulpwerkwoord_zullen',
      title: '13.1 Het Hulpwerkwoord "Zullen"',
      summary: 'Voorstellen doen ("zullen we?"), beloftes ("ik zal het doen") en de toekomende tijd.',
      ruleExplanation: `Het werkwoord "zullen" is een modaal hulpwerkwoord met drie hoofdfuncties:

1. Een voorstel doen (vragen om instemming):
• "ZULLEN WE vanavond samen eten?" (Shall we eat together tonight?)
• "ZAL IK een kopje thee voor je zetten?" (Shall I make tea for you?)

2. Een belofte of toezegging doen:
• "Ik ZAL je morgenochtend bellen." (I will call you tomorrow morning.)
• "Geen zorgen, we ZULLEN op tijd zijn." (Don't worry, we will be on time.)

3. De toekomende tijd (future tense):
• "Het ZAL morgen de hele dag regenen." (It will rain all day tomorrow.)
• "Volgend jaar ZAL hij afstuderen." (Next year he will graduate.)

Vervoeging van "zullen":
• ik zal
• jij / je zult (of: zal) / zal je? (bij inversie vervalt de -t)
• u zult (of: zal)
• hij / zij / het zal
• wij / jullie / zij zullen`,
      examples: [
        {
          dutch: 'Zullen we zaterdag naar de film gaan?',
          english: 'Shall we go to the movies on Saturday?',
          note: 'Voorstel doen aan een vriend.'
        },
        {
          dutch: 'Ik zal je helpen met de afwas.',
          english: 'I will help you with the washing up.',
          note: 'Beloftetoezegging.'
        },
        {
          dutch: 'Zal ik de ramen even dichtdoen?',
          english: 'Shall I close the windows for a moment?',
          note: 'Beleefd aanbod.'
        }
      ],
      tables: [
        {
          headers: ['Persoon', 'Vorm van ZULLEN', 'Voorbeeldzin'],
          rows: [
            ['ik', 'zal', 'Ik zal de groenten snijden.'],
            ['jij / je', 'zult / zal', 'Je zult het snel begrijpen.'],
            ['inversie (jij)', 'zal je?', 'Zal je me vanavond appen?'],
            ['u', 'zult / zal', 'U zult de ingang direct zien.'],
            ['hij / zij / het', 'zal', 'Het zal morgen warmer worden.'],
            ['wij / we', 'zullen', 'Zullen we een kop koffie drinken?'],
            ['jullie', 'zullen', 'Zullen jullie op tijd komen?'],
            ['zij / ze (mv.)', 'zullen', 'Zij zullen ons morgen bezoeken.']
          ]
        }
      ]
    },
    {
      id: 'beleefde_visite_uitdrukkingen',
      title: '13.2 Beleefdheidsvormen bij Visite & Gastvrijheid',
      summary: 'Vaste formules bij het ontvangen van gasten thuis.',
      ruleExplanation: `Bij een bezoek thuis gebruik je vaste beleefde uitdrukkingen:

Bij binnenkomst:
• "Kom binnen!" (Come in!)
• "Mag ik je jas aannemen?" (May I take your coat?)
• "Ga lekker zitten / Doe alsof je thuis bent." (Make yourself comfortable.)

Cadeautje overhandigen en ontvangen:
• "Ik heb een kleinigheidje voor je meegebracht." (I brought a little something.)
• "Wat attent van je, dat had je echt niet hoeven doen!" (How thoughtful, you didn't have to!)
• "Wat een prachtige bloemen, ik zet ze meteen in een vaas." (What lovely flowers!)

Tijdens het gesprek:
• "Zeg dat wel!" (You can say that again!)
• "Zal ik nog wat inschenken?" (Shall I pour some more?)
• "Heb je zin in nog een kopje koffie?" (Would you like another coffee?)`,
      examples: [
        {
          dutch: 'Dat had je echt niet hoeven doen, maar wel heel erg bedankt!',
          english: 'You really shouldn\'t have, but thank you very much!',
          note: 'Vaste dankformule voor een attentie.'
        }
      ]
    },
    {
      id: 'seizoenen_en_tijdsbepalingen',
      title: '13.3 Seizoenen en Tijdsaanduidingen',
      summary: 'Praten over de seizoenen en het weer in het Nederlands.',
      ruleExplanation: `De vier seizoenen (het seizoen):
• de lente / het voorjaar -> "in de lente" / "in het voorjaar"
• de zomer -> "\'s zomers" / "in de zomer"
• de herfst / het najaar -> "\'s herfst" / "in de herfst"
• de winter -> "\'s winters" / "in de winter"

Let op de vaste tijdsaanduidingen met \'s ... -s:
• \'s ochtends (in the morning)
• \'s middags (in the afternoon)
• \'s avonds (in the evening)
• \'s nachts (at night)
• \'s zomers (in summertime)
• \'s winters (in wintertime)`,
      examples: [
        {
          dutch: '\'s Zomers gaan veel Nederlanders met de caravan naar Frankrijk.',
          english: 'In summer many Dutch people go to France with a caravan.',
          note: 'Vaste tijdsaanduiding \'s zomers.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_zullen',
      title: 'Opdracht 1: Het werkwoord "zullen"',
      instruction: 'Vul de juiste vorm van "zullen" in.',
      items: [
        {
          id: 1,
          prompt: '_______ we vanavond gezellig samen pizza eten?',
          answer: 'Zullen',
          options: ['Zullen', 'Zal', 'Zult'],
          explanation: 'Onderwerp is "we" (wij) -> "Zullen we...".'
        },
        {
          id: 2,
          prompt: 'Geen zorgen, ik _______ je morgen het boek teruggeven.',
          answer: 'zal',
          options: ['zal', 'zullen', 'zult'],
          explanation: 'Onderwerp is "ik" -> "ik zal".'
        },
        {
          id: 3,
          prompt: '_______ ik de voordeur even voor je opendoen?',
          answer: 'Zal',
          options: ['Zal', 'Zullen', 'Zult'],
          explanation: 'Onderwerp is "ik" -> "Zal ik...".'
        },
        {
          id: 4,
          prompt: 'Het weerbericht voorspelt dat het morgen hard _______ waaien.',
          answer: 'zal',
          options: ['zal', 'zullen', 'zult'],
          explanation: 'Onderwerp is "het" -> "het zal waaien".'
        },
        {
          id: 5,
          prompt: 'Wat _______ jullie komende zomer gaan doen tijdens de vakantie?',
          answer: 'zullen',
          options: ['zullen', 'zal', 'zult'],
          explanation: 'Onderwerp is "jullie" (meervoud) -> "zullen jullie".'
        }
      ]
    },
    {
      id: 'opdracht_2_gastvrijheid_conversatie',
      title: 'Opdracht 2: Beleefde reacties bij visite',
      instruction: 'Welke zin past het beste in de situatie?',
      items: [
        {
          id: 1,
          prompt: 'Iemand overhandigt je een mooie bos bloemen aan de deur. Wat zeg je?',
          answer: 'Wat attent van je, dat had je echt niet hoeven doen!',
          options: [
            'Wat attent van je, dat had je echt niet hoeven doen!',
            'Zet ze zelf maar even in de keuken.',
            'Waarom heb je geen taart meegebracht?'
          ],
          explanation: 'Dit is de beleefde Nederlandse standaardreactie.'
        },
        {
          id: 2,
          prompt: 'De gast staat met een natte jas in je gang. Wat bied je aan?',
          answer: 'Mag ik je jas aannemen?',
          options: [
            'Mag ik je jas aannemen?',
            'Hou je jas maar aan, het is koud hier.',
            'Waar heb je die jas gekocht?'
          ],
          explanation: 'De gastheer neemt traditioneel de jas van de bezoeker aan.'
        },
        {
          id: 3,
          prompt: 'Iemand zucht: "Het regent al drie dagen achter elkaar!". Hoe stem je in?',
          answer: 'Zeg dat wel!',
          options: ['Zeg dat wel!', 'Geen sprake van.', 'Niet zo snel alsjeblieft.'],
          explanation: '"Zeg dat wel!" betekent "Inderdaad, je hebt helemaal gelijk!".'
        }
      ]
    },
    {
      id: 'opdracht_3_seizoenen_en_tijden',
      title: 'Opdracht 3: Seizoenen en tijdsaanduidingen',
      instruction: 'Kies het juiste woord.',
      items: [
        {
          id: 1,
          prompt: 'In welk seizoen bloeien de tulpen en worden de dagen langer?',
          answer: 'de lente (het voorjaar)',
          options: ['de lente (het voorjaar)', 'de herfst', 'de winter'],
          explanation: 'Tulpen bloeien in het voorjaar / de lente.'
        },
        {
          id: 2,
          prompt: 'In Nederland schaatsen mensen op natuurijs in:',
          answer: 'de winter',
          options: ['de winter', 'de zomer', 'de lente'],
          explanation: 'Natuurijs is er alleen in strenge winters.'
        },
        {
          id: 3,
          prompt: '\'s _______ zitten de terrassen vol en gaan mensen naar het strand.',
          answer: 'zomers',
          options: ['zomers', 'winters', 'ochtends'],
          explanation: '\'s Zomers = in de zomer.'
        }
      ]
    }
  ],
  readingText: {
    title: '13.8 Tekst: De Nederlandse \'Agendacultuur\' en Gastvrijheid',
    subtitle: 'Over afspraken maken, de koektrommel en gezelligheid thuis (Blz. 196)',
    content: `Voor buitenlanders die pas in Nederland wonen, is de Nederlandse sociale omgang even wennen. Nederlanders hechten enorm veel waarde aan planning en structuur.

Waar het in veel Zuid-Europese of Latijns-Amerikaanse landen volkomen normaal is om spontaan bij vrienden of familie aan te bellen voor een kop koffie of een maaltijd, wordt dat in Nederland niet altijd op prijs gesteld. Nederlanders pakken standaard hun papieren agenda of smartphone erbij: "Zullen we afspreken? Even kijken... volgende week woensdag om half acht?". Zelfs goede vrienden plannen een etentje vaak twee tot drie weken vooruit.

Bovendien is er het beroemde diner-tijdstip: Nederlanders eten stipt tussen 18:00 en 18:30 uur. Kom je rond die tijd onverwacht langs? Grote kans dat de gastheer zegt: "We gaan zo aan tafel, zal ik je morgen even bellen?". Tenzij je vooraf bent uitgenodigd voor het eten!

Toch zijn Nederlanders, eenmaal binnen, bijzonder hartelijk en gastvrij. Een bekende grap onder expats is het fenomeen van het "ene koekje": de gastvrouw opent de koektrommel, je mag één koekje pakken, en daarna gaat het deksel er weer resoluut op. Tegenwoordig is dat beeld wat overdreven, maar het illustreert de nuchtere calvinistische inslag van "gezellig, maar doe maar gewoon".`,
    vocabularyNotes: [
      { word: 'de agendacultuur', translation: 'calendar / scheduling culture' },
      { word: 'spontaan aanbellen', translation: 'ringing the doorbell unannounced' },
      { word: 'niet op prijs stellen', translation: 'not appreciate / not prefer' },
      { word: 'stipt', translation: 'promptly / punctually' },
      { word: 'de koektrommel', translation: 'biscuit tin' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Hoe maken vrienden in Nederland meestal een afspraak om elkaar te ontmoeten?',
        answer: 'Door van tevoren een vaste datum en tijd in de agenda af te spreken',
        options: [
          'Door van tevoren een vaste datum en tijd in de agenda af te spreken',
          'Door altijd onaangekondigd \'s avonds aan te bellen',
          'Door op goed geluk bij het restaurant te gaan wachten'
        ],
        explanation: 'De agendacultuur vereist dat afspraken van tevoren gepland worden.'
      },
      {
        id: 2,
        prompt: 'Hoe laat eten Nederlandse gezinnen traditioneel warm \'s avonds?',
        answer: 'Stipt tussen 18:00 en 18:30 uur',
        options: [
          'Stipt tussen 18:00 en 18:30 uur',
          'Pas na 21:30 uur \'s avonds',
          'Midden op de dag om 12:00 uur'
        ],
        explanation: 'Nederlanders eten traditioneel vroeg, tussen zes en half zeven.'
      },
      {
        id: 3,
        prompt: 'Wat is de culturele mythe van "het ene koekje" bij de koffie?',
        answer: 'Dat de koektrommel na één koekje per gast weer dichtgaat',
        options: [
          'Dat de koektrommel na één koekje per gast weer dichtgaat',
          'Dat Nederlanders nooit koekjes eten bij de koffie',
          'Dat je altijd drie taarten moet opeten'
        ],
        explanation: 'Het cliché van het ene koekje weerspiegelt de zuinige calvinistische traditie.'
      }
    ]
  },
  pronunciation: {
    title: '13.9 Uitspraak: Korte klinker "a" vs Lange klinker "aa"',
    soundFocus: 'Klinkers: "a" (kat, bad, man, dak) vs "aa" (kaat, baat, maan, vaak)',
    explanation: 'De korte "a" [ɑ] (zoals in "kat", "bad", "stad", "dat") is een donkere, open klank achter in de mond. De lange "aa" [a:] (zoals in "vaas", "straat", "maken", "afspraak") is helder, ver naar voren gevormd met een wijd geopende mond. Verwar ze niet, want de betekenis van het woord verandert!',
    wordList: [
      'kat', 'kaat', 'bad', 'baat', 'man', 'maan', 'dak', 'vaak', 'stad', 'staat', 'was', 'waar'
    ],
    minimalPairs: [
      { word1: 'bad', word2: 'baat', contrast: 'korte a vs lange aa' },
      { word1: 'man', word2: 'maan', contrast: 'korte a vs lange aa' },
      { word1: 'stad', word2: 'staat', contrast: 'korte a vs lange aa' },
      { word1: 'dak', word2: 'vaak', contrast: 'korte a vs lange aa' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 13: Bij vrienden',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Welke zin met "zullen" is een correct voorstel?',
        options: [
          'Zullen we zaterdag gezellig samen gaan koken?',
          'Zullen we zaterdag koken samen gaan gewild?',
          'Zal we samen koken gaan?'
        ],
        answer: 'Zullen we zaterdag gezellig samen gaan koken?',
        explanation: 'Voorstel met "we": "Zullen we..." met het werkwoord achteraan.'
      },
      {
        id: 2,
        prompt: 'Wat is de juiste vorm van "zullen" bij de ik-persoon?',
        options: ['ik zal', 'ik zult', 'ik zulle', 'ik zalde'],
        answer: 'ik zal',
        explanation: 'De ik-vorm van zullen is "ik zal".'
      },
      {
        id: 3,
        prompt: 'Wat brengt een gast in Nederland vaak mee als hij op bezoek komt bij vrienden?',
        options: [
          'Een bos bloemen, een fles wijn of een doosje bonbons.',
          'Zijn eigen servies en bestek.',
          'Een rekening voor de reiskosten.'
        ],
        answer: 'Een bos bloemen, een fles wijn of een doosje bonbons.',
        explanation: 'Bloemen, chocolade of wijn zijn typische attenties (kleinigheidjes).'
      },
      {
        id: 4,
        prompt: 'Wat betekent de uitdrukking "over koetjes en kalfjes praten"?',
        options: [
          'Praten over alledaagse, lichte onderwerpen (small talk).',
          'Onderhandelen over de aankoop van een boerderij.',
          'Heel ruzie maken over politiek.'
        ],
        answer: 'Praten over alledaagse, lichte onderwerpen (small talk).',
        explanation: '"Over koetjes en kalfjes praten" betekent gezellig babbelen over koetjes en kalfjes (small talk).'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "huisdier"?',
        options: ['het huisdier', 'de huisdier', 'een huisdier (geen lidwoord mogelijk)'],
        answer: 'het huisdier',
        explanation: 'Dier is onzijdig: het dier, dus ook het huisdier.'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "seizoen"?',
        options: ['het seizoen', 'de seizoen', 'beide kunnen'],
        answer: 'het seizoen',
        explanation: 'Seizoen is een het-woord: het seizoen (de seizoenen).'
      },
      {
        id: 7,
        prompt: 'Wat zegt de gastheer als hij de jas van de bezoeker wil ophangen?',
        options: [
          'Mag ik je jas aannemen?',
          'Wil je mijn jas wassen?',
          'Gooi je jas maar buiten neer.'
        ],
        answer: 'Mag ik je jas aannemen?',
        explanation: 'Dit is de beleefde standaardzin van een gastheer.'
      },
      {
        id: 8,
        prompt: 'Wat is de betekenis van "\'s zomers"?',
        options: [
          'In de zomer (during summertime).',
          'Elke zondagavond.',
          'Morgenmiddag om twaalf uur.'
        ],
        answer: 'In de zomer (during summertime).',
        explanation: '\'s Zomers betekent in de zomer.'
      },
      {
        id: 9,
        prompt: 'Wat betekent: "Dat kon niet missen"?',
        options: [
          'Het was heel gemakkelijk te vinden / onmogelijk over het hoofd te zien.',
          'We hebben de afspraak gemist.',
          'Je had geen geluk vandaag.'
        ],
        answer: 'Het was heel gemakkelijk te vinden / onmogelijk over het hoofd te zien.',
        explanation: '"Dat kon niet missen" betekent dat iets heel duidelijk of makkelijk te vinden was.'
      },
      {
        id: 10,
        prompt: 'Wat antwoord je beleefd op: "Ik heb een kleinigheidje voor je meegebracht"?',
        options: [
          'Wat attent van je, dat had je echt niet hoeven doen!',
          'Geef maar snel hier, ik had al iets verwacht.',
          'Het is inderdaad veel te klein.'
        ],
        answer: 'Wat attent van je, dat had je echt niet hoeven doen!',
        explanation: 'Dit is de vaste beleefde reactie op een attentie.'
      }
    ]
  },
  culturalOrPracticalNote: 'Op bezoek bij Nederlanders: Nederlanders plannen afspraken meestal ruim van tevoren in hun agenda. Als je op bezoek komt, is het attent om een kleinigheidje mee te nemen, zoals bloemen of bonbons. Word je uitgenodigd voor het eten? Wees stipt op tijd, want Nederlanders eten traditioneel vroeg (rond 18:00 uur)!'
};
