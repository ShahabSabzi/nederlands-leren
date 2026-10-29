import { CustomLessonData } from '../types/lesson';

export const CHAPTER_4_DATA: CustomLessonData = {
  id: 'hoofdstuk_4',
  chapterNumber: 'Hoofdstuk 4',
  chapterTitle: 'Op straat',
  description: 'Vrienden ontmoeten op straat, vragen en vertellen hoe het gaat ("Alles goed? Het gaat wel / hartstikke goed"), een afspraak maken in de agenda, voorstellen doen met "ZULLEN" ("Zullen we zaterdag afspreken? / Zal ik spaghetti maken?"), en positief of negatief reageren.',
  language: 'Nederlands',
  createdAt: 1727660000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Bert',
      dutch: 'Hé Hans, hallo!',
      english: 'Hey Hans, hello!',
      notes: 'Informal friendly street greeting.',
      keyWords: ['hallo']
    },
    {
      id: 2,
      speaker: 'Hans',
      dutch: 'Hé Bert, hoi. Dat is lang geleden, zeg. Wat leuk! Alles goed?',
      english: 'Hey Bert, hi. That\'s a long time ago! How nice! Everything good?',
      notes: '"Dat is lang geleden" = Long time no see! "Alles goed?" = Everything good?',
      keyWords: ['lang geleden', 'wat leuk', 'alles goed']
    },
    {
      id: 3,
      speaker: 'Bert',
      dutch: 'Ja, prima. En met jou, hoe is het met jou?',
      english: 'Yes, great. And with you, how are things with you?',
      notes: '"En met jou?" returns the question.',
      keyWords: ['prima', 'en met jou']
    },
    {
      id: 4,
      speaker: 'Hans',
      dutch: 'Het gaat wel. Ik heb problemen met de buren, maar dat is nu niet zo belangrijk. Ik heb vakantie en Wilma en ik gaan deze week een paar dagen naar Venetië.',
      english: 'It\'s going okay. I have problems with the neighbours, but that\'s not so important right now. I have vacation and Wilma and I are going to Venice for a few days this week.',
      notes: '"Het gaat wel" = so-so / fair. "een paar dagen" = a couple of days.',
      keyWords: ['het gaat wel', 'problemen', 'vakantie', 'een paar dagen']
    },
    {
      id: 5,
      speaker: 'Bert',
      dutch: 'Wauw! Venetië is prachtig. Ga je veel foto\'s maken?',
      english: 'Wow! Venice is gorgeous. Are you going to take lots of photos?',
      notes: '"foto\'s maken" = to take photos.',
      keyWords: ['prachtig', 'foto\'s maken']
    },
    {
      id: 6,
      speaker: 'Hans',
      dutch: 'Nee, we hebben sinds gisteren een nieuwe camera, dus we gaan een romantische film maken. Kom je na de vakantie naar de film kijken?',
      english: 'No, we have a new camera since yesterday, so we\'re going to make a romantic film. Will you come and watch the film after the holidays?',
      notes: '"sinds" = since. "kijken naar" = watch / look at.',
      keyWords: ['sinds', 'nieuwe camera', 'kijken']
    },
    {
      id: 7,
      speaker: 'Bert',
      dutch: 'Ja, leuk. Zullen we direct iets afspreken?',
      english: 'Yes, nice! Shall we arrange something right away?',
      notes: '"Zullen we... afspreken?" = Shall we arrange / meet up?',
      keyWords: ['zullen we', 'afspreken']
    },
    {
      id: 8,
      speaker: 'Hans',
      dutch: 'Goed. We zijn op vrijdag weer thuis. Zullen we voor zaterdag een afspraak maken?',
      english: 'Good. We are home again on Friday. Shall we make an appointment for Saturday?',
      notes: '"een afspraak maken" = to set a date / make an appointment.',
      keyWords: ['weer thuis', 'afspraak maken']
    },
    {
      id: 9,
      speaker: 'Bert',
      dutch: 'Welke datum is het dan? De 29ste? Nee, dat lukt niet. Dan heb ik al een afspraak. Zondag 30 augustus kan ik wel.',
      english: 'What date is it then? The 29th? No, that doesn\'t work / I can\'t make that. Then I already have an appointment. Sunday August 30 I can do.',
      notes: '"Dat lukt niet" is very common for "That won\'t work for me".',
      keyWords: ['welke datum', 'dat lukt niet', 'kan ik wel']
    },
    {
      id: 10,
      speaker: 'Hans',
      dutch: 'Dat kan ook. Zullen we om 16.00 uur bij ons thuis afspreken? Blijf je ook eten? Zal ik dan spaghetti carbonara maken?',
      english: 'That works too. Shall we meet at 16:00 at our house? Will you stay for dinner too? Shall I make spaghetti carbonara then?',
      notes: '"Zal ik... maken?" = Shall I make...?',
      keyWords: ['bij ons thuis', 'blijf je eten', 'zal ik maken']
    },
    {
      id: 11,
      speaker: 'Bert',
      dutch: 'Ja, lekker. Goed plan. Ik schrijf het straks in mijn agenda. Hartstikke leuk. Ik moet ervandoor. Gauw even naar de winkel. Ik wens jullie een fijne vakantie. Doe de groeten aan Wilma en tot volgende week zondag.',
      english: 'Yes, delicious! Good plan. I\'ll write it in my diary / calendar later. Terrific! I have to dash / run. Quick trip to the shop. I wish you a nice vacation. Give my regards to Wilma and see you next Sunday.',
      notes: '"Ik moet ervandoor" = I have to run/go! "Doe de groeten aan..." = Give my regards to...',
      keyWords: ['goed plan', 'in mijn agenda', 'hartstikke leuk', 'ervandoor', 'doe de groeten']
    },
    {
      id: 12,
      speaker: 'Hans',
      dutch: 'Doe ik. Tot dan. Doeg!',
      english: 'Will do! Until then. Bye!',
      notes: '"Doeg" is a cheerful, casual Dutch goodbye.',
      keyWords: ['doe ik', 'tot dan', 'doeg']
    }
  ],
  vocabulary: [
    // Complete Woordenlijst 4.2 (Book pages 59 - 60)
    { id: 'ch4_de_straat', dutch: 'de straat', english: 'street', category: 'locatie', partOfSpeech: 'noun', article: 'de', plural: 'de straten', exampleSentence: 'Bert en Hans ontmoeten elkaar op straat.', exampleEnglish: 'Bert and Hans meet each other on the street.' },
    { id: 'ch4_de_vriend', dutch: 'de vriend (vriendin)', english: 'friend (boyfriend / girlfriend)', category: 'mensen', partOfSpeech: 'noun', article: 'de', plural: 'de vrienden', exampleSentence: 'Hans is een goede vriend van Bert.', exampleEnglish: 'Hans is a good friend of Bert.' },
    { id: 'ch4_tegenkomen', dutch: 'tegenkomen (komt tegen)', english: 'to bump into / meet by chance', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik kom mijn buurman op straat tegen.', exampleEnglish: 'I bump into my neighbour on the street.' },
    { id: 'ch4_he', dutch: 'hé', english: 'hey', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Hé Hans, wat leuk je te zien!', exampleEnglish: 'Hey Hans, how nice to see you!' },
    { id: 'ch4_geleden', dutch: 'geleden (lang geleden)', english: 'ago (a long time ago)', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Dat is al heel lang geleden!', exampleEnglish: 'That is already a very long time ago!' },
    { id: 'ch4_leuk', dutch: 'leuk', english: 'nice / pleasant / fun', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Wat leuk dat je er bent.', exampleEnglish: 'How nice that you are here.' },
    { id: 'ch4_prima', dutch: 'prima', english: 'fine / wonderful / great', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Alles gaat prima, dank je.', exampleEnglish: 'Everything is going fine, thank you.' },
    { id: 'ch4_jou', dutch: 'jou / je', english: 'you (object / after preposition)', category: 'pronomen', partOfSpeech: 'pronoun', exampleSentence: 'Hoe gaat het met jou?', exampleEnglish: 'How are things with you?' },
    { id: 'ch4_het_gaat_wel', dutch: 'het gaat wel', english: 'it\'s going okay / so-so', category: 'gevoel', partOfSpeech: 'phrase', exampleSentence: 'Hoe is het? - Het gaat wel.', exampleEnglish: 'How are you? - It\'s going so-so.' },
    { id: 'ch4_het_probleem', dutch: 'het probleem', english: 'problem', category: 'leven', partOfSpeech: 'noun', article: 'het', plural: 'de problemen', exampleSentence: 'Ik heb problemen met mijn buren.', exampleEnglish: 'I have problems with my neighbours.' },
    { id: 'ch4_de_buren', dutch: 'de buren (buurman/buurvrouw)', english: 'neighbours', category: 'mensen', partOfSpeech: 'noun', article: 'de', plural: 'de buren', exampleSentence: 'Onze buren maken veel lawaai.', exampleEnglish: 'Our neighbours make a lot of noise.' },
    { id: 'ch4_niet_zo', dutch: 'niet zo', english: 'not so / not very', category: 'beschrijving', partOfSpeech: 'adverb', exampleSentence: 'Dat is nu niet zo belangrijk.', exampleEnglish: 'That is not so important right now.' },
    { id: 'ch4_belangrijk', dutch: 'belangrijk', english: 'important', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Gezondheid is heel belangrijk.', exampleEnglish: 'Health is very important.' },
    { id: 'ch4_gaan', dutch: 'gaan (ga, gaat, gaan)', english: 'to go', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We gaan naar Venetië.', exampleEnglish: 'We are going to Venice.' },
    { id: 'ch4_de_week', dutch: 'de week', english: 'week', category: 'tijd', partOfSpeech: 'noun', article: 'de', plural: 'de weken', exampleSentence: 'Volgende week heb ik vakantie.', exampleEnglish: 'Next week I have vacation.' },
    { id: 'ch4_een_paar_dagen', dutch: 'een paar dagen', english: 'a few days / a couple of days', category: 'tijd', partOfSpeech: 'phrase', exampleSentence: 'We gaan een paar dagen naar Rome.', exampleEnglish: 'We are going to Rome for a few days.' },
    { id: 'ch4_wauw', dutch: 'wauw', english: 'wow', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Wauw, wat een prachtig uitzicht!', exampleEnglish: 'Wow, what a gorgeous view!' },
    { id: 'ch4_prachtig', dutch: 'prachtig', english: 'splendid / gorgeous / fine', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Venetië is een prachtige stad.', exampleEnglish: 'Venice is a gorgeous city.' },
    { id: 'ch4_veel', dutch: 'veel', english: 'much / many / a lot', category: 'hoeveelheid', partOfSpeech: 'adverb', exampleSentence: 'Er zijn veel toeristen in de stad.', exampleEnglish: 'There are many tourists in the city.' },
    { id: 'ch4_fotos_maken', dutch: 'foto\'s maken', english: 'to take photos', category: 'activiteit', partOfSpeech: 'phrase', exampleSentence: 'Ga je veel foto\'s maken op vakantie?', exampleEnglish: 'Are you going to take many photos on holiday?' },
    { id: 'ch4_sinds', dutch: 'sinds', english: 'since', category: 'tijd', partOfSpeech: 'preposition', exampleSentence: 'We hebben sinds gisteren een nieuwe camera.', exampleEnglish: 'We have a new camera since yesterday.' },
    { id: 'ch4_nieuw', dutch: 'nieuw (nieuwe)', english: 'new', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Dit is mijn nieuwe telefoon.', exampleEnglish: 'This is my new telephone.' },
    { id: 'ch4_de_camera', dutch: 'de camera', english: 'camera', category: 'techniek', partOfSpeech: 'noun', article: 'de', plural: 'de camera\'s', exampleSentence: 'De camera maakt scherpe beelden.', exampleEnglish: 'The camera takes sharp pictures.' },
    { id: 'ch4_romantisch', dutch: 'romantisch (romantische)', english: 'romantic', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'We maken een romantische film.', exampleEnglish: 'We are making a romantic film.' },
    { id: 'ch4_de_film', dutch: 'de film', english: 'film / movie', category: 'cultuur', partOfSpeech: 'noun', article: 'de', plural: 'de films', exampleSentence: 'We kijken vanavond naar een spannende film.', exampleEnglish: 'We are watching an exciting film tonight.' },
    { id: 'ch4_na', dutch: 'na', english: 'after', category: 'tijd', partOfSpeech: 'preposition', exampleSentence: 'Kom je na de vakantie kijken?', exampleEnglish: 'Will you come and see after the holidays?' },
    { id: 'ch4_kijken_naar', dutch: 'kijken naar', english: 'to look at / to watch', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We kijken naar de foto\'s.', exampleEnglish: 'We look at the photos.' },
    { id: 'ch4_direct', dutch: 'direct', english: 'right now / directly', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Zullen we direct iets afspreken?', exampleEnglish: 'Shall we arrange something right now?' },
    { id: 'ch4_iets', dutch: 'iets', english: 'something', category: 'basis', partOfSpeech: 'pronoun', exampleSentence: 'Wil je iets drinken?', exampleEnglish: 'Do you want to drink something?' },
    { id: 'ch4_afspreken', dutch: 'afspreken (scheidbaar)', english: 'to arrange to meet / make a date', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Wanneer zullen we afspreken?', exampleEnglish: 'When shall we meet up?' },
    { id: 'ch4_thuis', dutch: 'thuis (bij ons thuis)', english: 'at home (at our house)', category: 'locatie', partOfSpeech: 'adverb', exampleSentence: 'We spreken om vier uur bij ons thuis af.', exampleEnglish: 'We arrange to meet at 4 o\'clock at our house.' },
    { id: 'ch4_de_afspraak', dutch: 'de afspraak', english: 'appointment / date / agreement', category: 'tijd', partOfSpeech: 'noun', article: 'de', plural: 'de afspraken', exampleSentence: 'Ik heb zaterdag al een afspraak.', exampleEnglish: 'I already have an appointment on Saturday.' },
    { id: 'ch4_de_datum', dutch: 'de datum', english: 'date (calendar date)', category: 'tijd', partOfSpeech: 'noun', article: 'de', plural: 'de data / datums', exampleSentence: 'Welke datum is het zaterdag?', exampleEnglish: 'What date is it on Saturday?' },
    { id: 'ch4_lukken', dutch: 'lukken (dat lukt niet)', english: 'to work out (that doesn\'t work / I can\'t make it)', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Nee, zaterdag lukt niet.', exampleEnglish: 'No, Saturday doesn\'t work for me.' },
    { id: 'ch4_blijven', dutch: 'blijven (blijft, blijven)', english: 'to stay', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Blijf je ook eten vanavond?', exampleEnglish: 'Will you stay for dinner tonight too?' },
    { id: 'ch4_eten', dutch: 'eten (eet, eet, eten)', english: 'to eat / dinner', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Wat eten we vanavond?', exampleEnglish: 'What are we eating tonight?' },
    { id: 'ch4_het_plan', dutch: 'het plan (goed plan)', english: 'plan (good plan)', category: 'denken', partOfSpeech: 'noun', article: 'het', plural: 'de plannen', exampleSentence: 'Dat is een heel goed plan!', exampleEnglish: 'That is a very good plan!' },
    { id: 'ch4_schrijven', dutch: 'schrijven (schrijf, schrijft)', english: 'to write', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik schrijf de afspraak in mijn agenda.', exampleEnglish: 'I write the appointment in my diary.' },
    { id: 'ch4_de_agenda', dutch: 'de agenda', english: 'diary / planner / calendar', category: 'tijd', partOfSpeech: 'noun', article: 'de', plural: 'de agenda\'s', exampleSentence: 'Heb je je agenda bij je?', exampleEnglish: 'Do you have your planner with you?' },
    { id: 'ch4_hartstikke_leuk', dutch: 'hartstikke leuk', english: 'terrific / fantastic / super nice', category: 'beschrijving', partOfSpeech: 'phrase', exampleSentence: 'Ik vind het hartstikke leuk dat je komt!', exampleEnglish: 'I think it\'s terrific that you are coming!' },
    { id: 'ch4_vinden', dutch: 'vinden (vind ik ook)', english: 'to find / to think (I think so too)', category: 'mening', partOfSpeech: 'verb', exampleSentence: 'Dat vind ik ook een prima idee.', exampleEnglish: 'I think that\'s a fine idea too.' },
    { id: 'ch4_ervandoor', dutch: 'ervandoor (moet ervandoor)', english: 'off / away (have to dash / run)', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Pardon, ik moet ervandoor, de trein komt.', exampleEnglish: 'Excuse me, I have to run, the train is coming.' },
    { id: 'ch4_gauw', dutch: 'gauw', english: 'quickly / soon', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'Ik moet gauw even boodschappen doen.', exampleEnglish: 'I need to quickly do some shopping.' },
    { id: 'ch4_de_winkel', dutch: 'de winkel', english: 'shop / store', category: 'winkelen', partOfSpeech: 'noun', article: 'de', plural: 'de winkels', exampleSentence: 'De winkel sluit om zes uur.', exampleEnglish: 'The shop closes at six o\'clock.' },
    { id: 'ch4_wensen', dutch: 'wensen (wens)', english: 'to wish', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik wens jullie een fijne vakantie.', exampleEnglish: 'I wish you a nice vacation.' },
    { id: 'ch4_fijn', dutch: 'fijn (fijne)', english: 'nice / pleasant', category: 'beschrijving', partOfSpeech: 'adjective', exampleSentence: 'Prettig weekend en fijne vakantie!', exampleEnglish: 'Have a nice weekend and pleasant vacation!' },
    { id: 'ch4_doe_de_groeten', dutch: 'doe de groeten aan...', english: 'give my regards to...', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Doe de groeten aan je familie.', exampleEnglish: 'Give my regards to your family.' },
    { id: 'ch4_volgende', dutch: 'volgende', english: 'next', category: 'tijd', partOfSpeech: 'adjective', exampleSentence: 'Tot volgende week zondag!', exampleEnglish: 'See you next week on Sunday!' },
    { id: 'ch4_tot_dan', dutch: 'tot dan', english: 'until then / see you then', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Afgesproken, tot dan!', exampleEnglish: 'Agreed, see you then!' },
    { id: 'ch4_doeg', dutch: 'doeg / doei', english: 'bye / bye-bye', category: 'groeten', partOfSpeech: 'phrase', exampleSentence: 'Doeg, fijne dag nog!', exampleEnglish: 'Bye, have a nice day!' }
  ],
  grammarPoints: [
    {
      id: 'zullen_voorstel_doen',
      title: '4.4 & 4.5 Zullen (1) – Een voorstel doen & afspreken',
      summary: 'Hoe je "zullen" gebruikt om iets voor te stellen en te reageren.',
      ruleExplanation: `Het werkwoord "zullen" gebruik je om een suggestie of voorstel te doen:

Formule voor een voorstel:
• "ZULLEN WE + [activiteit / tijd / plaats] + [INFINITIEF]?"
  - "Zullen we zaterdag een afspraak MAKEN?"
  - "Zullen we om 16.00 uur bij ons thuis AFSPREKEN?"
  - "Zullen we iets DRINKEN?"

• "ZAL IK + [INFINITIEF]?"
  - "Zal ik spaghetti carbonara MAKEN?"
  - "Zal ik de ober ROEPEN?"
  - "Zal ik mijn naam SPELLEN?"

Reageren op een voorstel:
1. Positief reageren (+):
   • "+ Ja, leuk! / Ja, lekker!"
   • "+ Ja, dat kan. / Dat is goed."
   • "+ Dat is een goed idee! / Goed plan."
   • "+ Graag!"

2. Negatief reageren (-):
   • "- Nee, dat lukt niet." (That won't work / I can't manage that.)
   • "- Nee, dan kan ik niet."
   • "- Nee, ik heb al een afspraak."
   • "- Nee, dat vind ik niet zo leuk."`,
      examples: [
        { dutch: 'Zullen we zaterdag iets afspreken? - Ja, leuk!', english: 'Shall we arrange something on Saturday? - Yes, great!', note: 'Positieve reactie op voorstel.' },
        { dutch: 'Kun je om 16.00 uur komen? - Nee, dat lukt niet. Dan moet ik werken.', english: 'Can you come at 16:00? - No, that won\'t work. Then I have to work.', note: 'Negatieve beleefde reactie met "dat lukt niet".' }
      ]
    },
    {
      id: 'hoe_gaat_het_schaal',
      title: '4.3 Vragen en vertellen hoe het gaat',
      summary: 'De gevoelschaal van ++ (uitstekend) tot -- (slecht).',
      ruleExplanation: `Vragen hoe het met iemand gaat:
• "Alles goed?"
• "Hoe is het (met jou)?"
• "Hoe gaat het (met jou / met u)?"

Antwoorden op de schaal:
• ++ prima! / fantastisch! / uitstekend! / hartstikke goed!
• + goed.
• +- het gaat wel. / niet zo (goed).
• - niet goed. / slecht.`,
      examples: [
        { dutch: 'Alles goed? - Ja, prima. En met jou?', english: 'All good? - Yes, fine. And with you?', note: 'Informele standaardbegroeting.' },
        { dutch: 'Hoe is het met je? - Het gaat wel, ik ben een beetje verkouden.', english: 'How are you? - So-so, I have a bit of a cold.', note: 'Neutrale reactie.' }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_straat_compleet',
      title: 'Opdracht 1: Waar of niet waar?',
      instruction: 'Zijn de volgende zinnen waar of niet waar? (blz. 60)',
      items: [
        {
          id: 1,
          prompt: 'Bert en Hans hebben elkaar lang niet gezien.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Hans zegt direct: "Dat is lang geleden, zeg!"'
        },
        {
          id: 2,
          prompt: 'Hans en Wilma gaan in Venetië wonen.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Ze gaan er een paar dagen op vakantie.'
        },
        {
          id: 3,
          prompt: 'Hans gaat een film maken in de vakantie.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Ze hebben een nieuwe camera om een romantische film te maken.'
        },
        {
          id: 4,
          prompt: 'Hans en Bert maken een afspraak om samen te eten.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Hans stelt voor spaghetti carbonara te maken op zondag 30 augustus.'
        },
        {
          id: 5,
          prompt: 'Hans en Wilma komen 30 augustus bij Bert eten.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Bert komt juist bij Hans en Wilma thuis eten ("om 16.00 uur bij ons thuis").'
        }
      ]
    },
    {
      id: 'opdracht_3_zullen_we',
      title: 'Opdracht 3: Reageer met "Zal ik ...?" of "Zullen we ...?"',
      instruction: 'Vorm het juiste voorstel (blz. 62).',
      items: [
        {
          id: 1,
          prompt: 'Ik wil op vakantie! -> (een paar dagen naar Parijs gaan):',
          answer: 'Zullen we een paar dagen naar Parijs gaan?',
          acceptableAnswers: ['Zullen we een paar dagen naar Parijs gaan?', 'Zullen we een paar dagen naar Parijs gaan'],
          options: [
            'Zullen we een paar dagen naar Parijs gaan?',
            'Zal ik een paar dagen naar Parijs gaan?',
            'Moeten we een paar dagen naar Parijs gaan?'
          ],
          explanation: 'Samen iets doen: "Zullen we... gaan?".'
        },
        {
          id: 2,
          prompt: 'Dit is een leuk café! -> (hier iets drinken):',
          answer: 'Zullen we hier iets drinken?',
          acceptableAnswers: ['Zullen we hier iets drinken?', 'Zullen we hier iets drinken'],
          options: [
            'Zullen we hier iets drinken?',
            'Zal ik hier iets drinken?',
            'Willen we hier iets drinken?'
          ],
          explanation: '"Zullen we hier iets drinken?".'
        },
        {
          id: 3,
          prompt: 'Ik wil afrekenen. -> (de ober roepen):',
          answer: 'Zal ik de ober roepen?',
          acceptableAnswers: ['Zal ik de ober roepen?', 'Zal ik de ober roepen'],
          options: [
            'Zal ik de ober roepen?',
            'Zullen we de ober roepen?',
            'Mag ik de ober roepen?'
          ],
          explanation: 'Aanbieden om iets voor de ander te doen: "Zal ik de ober roepen?".'
        },
        {
          id: 4,
          prompt: 'Wat zeg je? Wat is je naam? -> (mijn naam spellen):',
          answer: 'Zal ik mijn naam spellen?',
          acceptableAnswers: ['Zal ik mijn naam spellen?', 'Zal ik mijn naam spellen'],
          options: [
            'Zal ik mijn naam spellen?',
            'Zullen we mijn naam spellen?',
            'Moet ik mijn naam spellen?'
          ],
          explanation: '"Zal ik mijn naam spellen?".'
        },
        {
          id: 5,
          prompt: 'Hé Hans, lang niet gezien! -> (een afspraak maken):',
          answer: 'Zullen we een afspraak maken?',
          acceptableAnswers: ['Zullen we een afspraak maken?', 'Zullen we een afspraak maken'],
          options: [
            'Zullen we een afspraak maken?',
            'Zal ik een afspraak maken?',
            'Kunnen we een afspraak maken?'
          ],
          explanation: '"Zullen we een afspraak maken?".'
        },
        {
          id: 6,
          prompt: 'Wat eten we? -> (spaghetti maken):',
          answer: 'Zal ik spaghetti maken?',
          acceptableAnswers: ['Zal ik spaghetti maken?', 'Zal ik spaghetti maken'],
          options: [
            'Zal ik spaghetti maken?',
            'Zullen we spaghetti maken?',
            'Mag ik spaghetti maken?'
          ],
          explanation: '"Zal ik spaghetti maken?".'
        }
      ]
    },
    {
      id: 'opdracht_6_invullen',
      title: 'Opdracht 6: Woorden invullen',
      instruction: 'Welke woorden passen in deze zinnen? (blz. 64)',
      items: [
        {
          id: 1,
          prompt: 'Kun je om 16.00 uur komen? - Ja, dat _______ .',
          answer: 'kan',
          options: ['kan', 'lukt niet', 'moet'],
          explanation: 'Positieve bevestiging: "Ja, dat kan".'
        },
        {
          id: 2,
          prompt: 'Ik moet ervandoor. Doe _______ aan je ouders.',
          answer: 'de groeten',
          options: ['de groeten', 'het weer', 'de afspraak'],
          explanation: 'Vaste uitdrukking: "Doe de groeten aan je ouders".'
        },
        {
          id: 3,
          prompt: 'Kun je woensdag de 8ste? - Nee, dan _______ ik niet.',
          answer: 'kan',
          options: ['kan', 'ben', 'ga'],
          explanation: '"Nee, dan kan ik niet" (geen tijd hebben).'
        },
        {
          id: 4,
          prompt: 'Alles goed? - Ja, prima. En _______ jou?',
          answer: 'met',
          options: ['met', 'van', 'voor'],
          explanation: '"En met jou?" is de vaste wedervraag.'
        }
      ]
    }
  ],
  readingText: {
    title: '4.7 Tekst: Informatie van het Talencentrum',
    subtitle: 'Rijksuniversiteit Groningen (Blz. 64 - 65)',
    content: `Voor informatie over de diensten van het Talencentrum van de Rijksuniversiteit Groningen kunt u onze website bezoeken: www.rug.nl/talencentrum.
Hebt u vragen die niet beantwoord zijn na het raadplegen van onze website, dan doen wij ons best uw e-mail zo spoedig mogelijk te beantwoorden.

Openingstijden van het secretariaat:
• Maandag t/m vrijdag: 12.00 - 16.00 uur
• Donderdag: 12.00 - 20.00 uur
Het secretariaat is op werkdagen telefonisch bereikbaar van 09.00 tot 17.00 uur.`,
    vocabularyNotes: [
      { word: 'het secretariaat', translation: 'front desk / administration office' },
      { word: 'raadplegen', translation: 'to consult / look up' },
      { word: 'zo spoedig mogelijk', translation: 'as soon as possible' }
    ]
  },
  pronunciation: {
    title: '4.8 Uitspraak: e – ee',
    soundFocus: 'Korte e [ɛ] versus lange ee [e:]',
    explanation: 'De korte e hoor je in een gesloten lettergreep (wel, verder, hebben, lekker). De lange ee hoor je als dubbele klinker of in een open lettergreep (week, heeft, idee, probleem, deze, geven).',
    wordList: [
      'wel', 'verder', 'hebben', 'lekker', 'hetzelfde', 'moment', 'wensen', 'prettig', 'tekst', 'vertellen',
      'week', 'heeft', 'idee', 'probleem', 'deze', 'geven', 'tegen', 'uitstekend', 'nemen'
    ],
    minimalPairs: [
      { word1: 'wet', word2: 'weet', contrast: 'korte e vs lange ee' },
      { word1: 'les', word2: 'lees', contrast: 'korte e vs lange ee' },
      { word1: 'bed', word2: 'beet', contrast: 'korte e vs lange ee' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 4: Op straat',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat zeg je als je iemand tegenkomt die je heel lang niet hebt gezien?',
        answer: 'Dat is lang geleden, zeg!',
        options: [
          'Dat is lang geleden, zeg!',
          'Waarom ben je hier?',
          'Tot ziens!',
          'Laat de rest maar zitten.'
        ],
        explanation: '"Dat is lang geleden, zeg!" is de natuurlijke Nederlandse reactie.'
      },
      {
        id: 2,
        prompt: 'Hoe stel je voor om zaterdag een afspraak te maken?',
        answer: 'Zullen we voor zaterdag een afspraak maken?',
        options: [
          'Zullen we voor zaterdag een afspraak maken?',
          'Moeten we zaterdag verplicht afspreken?',
          'Hebben we zaterdag een afspraak gemaakt?',
          'Zaterdag is een afspraak.'
        ],
        explanation: '"Zullen we... maken?" is een beleefd voorstel.'
      },
      {
        id: 3,
        prompt: 'Wat betekent: "Nee, dat lukt niet"?',
        answer: 'Nee, dat kan ik niet / dat schikt mij niet.',
        options: [
          'Nee, dat kan ik niet / dat schikt mij niet.',
          'Nee, ik wil nooit meer met je praten.',
          'Ja, dat is een fantastisch idee.',
          'Ik weet niet wat een afspraak is.'
        ],
        explanation: '"Dat lukt niet" betekent dat je verhinderd bent of geen tijd hebt.'
      },
      {
        id: 4,
        prompt: 'Wat zeg je als je haast hebt en weg moet?',
        answer: 'Ik moet ervandoor!',
        options: ['Ik moet ervandoor!', 'Ik ben thuis.', 'Zeg het maar.', 'Tot nooit.'],
        explanation: '"Ik moet ervandoor" betekent "I have to dash / run".'
      },
      {
        id: 5,
        prompt: 'Kies de juiste volgorde: "Zal ik dan spaghetti carbonara _______?"',
        answer: 'maken',
        options: ['maken', 'maak', 'gemaakt', 'maakt'],
        explanation: 'Na het hulpwerkwoord "zal" komt de infinitief aan het einde van de zin: "maken".'
      },
      {
        id: 6,
        prompt: 'Wat betekent "Doe de groeten aan Wilma"?',
        answer: 'Say hi / give my regards to Wilma.',
        options: [
          'Say hi / give my regards to Wilma.',
          'Wilma moet geld betalen.',
          'Ga naar Wilma toe nu.',
          'Wie is Wilma?'
        ],
        explanation: '"De groeten doen aan" is de vaste groet overbrengen aan iemand.'
      },
      {
        id: 7,
        prompt: 'Welk lidwoord hoort bij "agenda"?',
        answer: 'de',
        options: ['de', 'het'],
        explanation: '"De agenda" (in mijn agenda).'
      },
      {
        id: 8,
        prompt: 'Wat antwoord je als alles fantastisch met je gaat?',
        answer: 'Uitstekend!',
        options: ['Uitstekend!', 'Het gaat wel.', 'Niet zo goed.', 'Slecht.'],
        explanation: '"Uitstekend" of "hartstikke goed" staat bovenaan de schaal (++).'
      },
      {
        id: 9,
        prompt: 'Hans en Wilma gaan een film maken _______ ze een nieuwe camera hebben.',
        answer: 'want',
        options: ['want', 'maar', 'of', 'en'],
        explanation: '"want" verklaart de reden in een hoofdzin.'
      },
      {
        id: 10,
        prompt: 'Hoe schrijf je "tot ziens" informeel tussen vrienden?',
        answer: 'Doeg!',
        options: ['Doeg!', 'Hoogachtend,', 'Vaarwel,', 'Gecondoleerd,'],
        explanation: '"Doeg!" of "Doei!" is vrolijk en informeel afscheid nemen.'
      }
    ]
  },
  culturalOrPracticalNote: 'De agenda in Nederland: Nederlanders plannen afspraken met vrienden vaak ver van tevoren ("Zullen we de agenda\'s erbij pakken?"). Spontaan langskomen kan, maar vooraf een datum prikken is heel normaal!'
};
