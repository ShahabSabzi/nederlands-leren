import { CustomLessonData } from '../types/lesson';

export const CHAPTER_11_DATA: CustomLessonData = {
  id: 'hoofdstuk_11',
  chapterNumber: 'Hoofdstuk 11',
  chapterTitle: 'Op een verjaardag',
  description: 'Verjaardagen vieren ("Lang zal ze leven"), iemand feliciteren ("Van harte gefeliciteerd met..."), small talk over studie en werk ("Wat doe je?"), vaste reacties (wat leuk, wat jammer, wat toevallig), wederkerig voornaamwoord "elkaar", en REFLEXIEVE WERKWOORDEN (zich herinneren, zich vergissen, zich voorstellen, zich voelen, zich vervelen, zich voorbereiden).',
  language: 'Nederlands',
  createdAt: 1727740000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Tom',
      dutch: 'Lang zal ze leven, lang zal ze leven in de gloria! Hoera Marit, van harte gefeliciteerd met je verjaardag. Ik heb een cadeautje voor je, alsjeblieft.',
      english: 'Long may she live, long may she live in glory! Hooray Marit, congratulations on your birthday from the bottom of my heart. I have a small present for you, here you go.',
      notes: '"Lang zal ze leven" is the traditional Dutch birthday song. "Van harte gefeliciteerd" = warm congratulations.',
      keyWords: ['lang zal ze leven', 'hoera', 'van harte gefeliciteerd', 'cadeautje']
    },
    {
      id: 2,
      speaker: 'Marit',
      dutch: 'O, een kaartje voor Festival Cubana! Wat leuk. Wat een goed idee. Dank je wel.',
      english: 'Oh, a ticket for Festival Cubana! How nice. What a great idea. Thank you so much.',
      notes: '"het kaartje" = ticket / card. "Wat een goed idee" = What a good idea.',
      keyWords: ['kaartje', 'festival', 'wat leuk', 'goed idee']
    },
    {
      id: 3,
      speaker: 'Tom',
      dutch: 'Het is dat festival in april, weet je wel? Ik hoop dat je nog geen kaartje hebt.',
      english: 'It\'s that festival in April, you know? I hope you don\'t have a ticket yet.',
      notes: '"nog geen" = not yet / none yet.',
      keyWords: ['in april', 'hopen', 'nog geen']
    },
    {
      id: 4,
      speaker: 'Marit',
      dutch: 'Nee. Fantastisch. Ik ben gek op Cubaanse muziek.',
      english: 'No. Fantastic. I am crazy about Cuban music.',
      notes: '"gek zijn op..." = to be crazy about / to love.',
      keyWords: ['gek op', 'Cubaanse muziek']
    },
    {
      id: 5,
      speaker: 'Tom',
      dutch: 'Ja, dat kon ik me herinneren, dat heb je een keer verteld.',
      english: 'Yes, I could remember that, you told me once.',
      notes: 'Reflexive verb: "zich herinneren" -> "dat kon ik me herinneren".',
      keyWords: ['herinneren', 'verteld']
    },
    {
      id: 6,
      speaker: 'Marit',
      dutch: 'Tom, in de keuken staat koffie en taart, je weet de weg. Dan doe ik even de deur open.',
      english: 'Tom, there is coffee and cake in the kitchen, you know your way around. Then I\'ll go open the door.',
      notes: '"je weet de weg" = you know your way around (make yourself at home).',
      keyWords: ['koffie en taart', 'je weet de weg', 'deur opendoen']
    },
    {
      id: 7,
      speaker: 'Tom',
      dutch: 'Lekker, maar ik ga eerst even je familie en vrienden feliciteren. Hé Peter, gefeliciteerd met je vriendin. Lang niet gezien, alles goed? Hoe is het met je bedrijf? Je bent toch accountant, of vergis ik me?',
      english: 'Lovely, but first I\'ll go congratulate your family and friends. Hey Peter, congratulations on your girlfriend. Long time no see, all good? How is your company? You are an accountant, right, or am I mistaken?',
      notes: 'Congratulating a partner on their birthday: "gefeliciteerd met je vriendin". Reflexive: "zich vergissen" -> "of vergis ik me?".',
      keyWords: ['feliciteren', 'lang niet gezien', 'bedrijf', 'accountant', 'vergis ik me']
    },
    {
      id: 8,
      speaker: 'Peter',
      dutch: 'Nee, je vergist je niet. Ik werk niet meer op kantoor. Ik ben eigen baas geworden. Het gaat goed. Ik verveel me nooit. Hé, daar is Kirsten. Kennen jullie elkaar?',
      english: 'No, you\'re not mistaken. I don\'t work in an office anymore. I became self-employed / my own boss. It\'s going well. I never get bored. Hey, there is Kirsten. Do you know each other?',
      notes: '"eigen baas" = self-employed / own boss. Reflexive: "zich vervelen" -> "ik verveel me nooit". Reciprocal: "elkaar".',
      keyWords: ['je vergist je niet', 'eigen baas', 'verveel me nooit', 'elkaar']
    },
    {
      id: 9,
      speaker: 'Tom',
      dutch: 'Hallo, nee, wij kennen elkaar nog niet. Ik zal me even voorstellen, ik ben Tom Fransen, de buurman van Marit.',
      english: 'Hello, no, we don\'t know each other yet. I\'ll introduce myself, I am Tom Fransen, Marit\'s neighbour.',
      notes: 'Reflexive: "zich voorstellen" -> "ik zal me even voorstellen".',
      keyWords: ['elkaar', 'voorstellen', 'buurman']
    },
    {
      id: 10,
      speaker: 'Kirsten',
      dutch: 'Hallo, ik ben Kirsten Baumer, ik ben een vriendin van Marit. Prettig met je kennis te maken.',
      english: 'Hello, I am Kirsten Baumer, I am a friend of Marit. Pleased to meet you.',
      notes: 'Friendly greeting: "Prettig kennis te maken".',
      keyWords: ['kennis te maken']
    },
    {
      id: 11,
      speaker: 'Tom',
      dutch: 'Kom je uit het buitenland? Hoor ik een Duits accent?',
      english: 'Do you come from abroad? Do I hear a German accent?',
      notes: '"het buitenland" = abroad.',
      keyWords: ['buitenland', 'Duits accent']
    },
    {
      id: 12,
      speaker: 'Kirsten',
      dutch: 'Ja, dat klopt, ik kom uit Hamburg en woon sinds kort in Nederland. Het bevalt me heel goed hier, ik voel me thuis in Nederland.',
      english: 'Yes, that\'s right, I come from Hamburg and have been living in the Netherlands recently. I like it very much here, I feel at home in the Netherlands.',
      notes: '"sinds kort" = recently. "Het bevalt me" = I like it / it suits me. Reflexive: "zich thuis voelen" -> "ik voel me thuis".',
      keyWords: ['dat klopt', 'sinds kort', 'bevalt me', 'voel me thuis']
    },
    {
      id: 13,
      speaker: 'Tom',
      dutch: 'Wat doe je? Studeer je of werk je?',
      english: 'What do you do? Do you study or do you work?',
      notes: 'Everyday Dutch conversation starter.',
      keyWords: ['studeren', 'werken']
    },
    {
      id: 14,
      speaker: 'Kirsten',
      dutch: 'Ik studeer logopedie. En ik heb een bijbaantje in de bioscoop.',
      english: 'I study speech therapy. And I have a side job in the cinema.',
      notes: '"het bijbaantje" = side job / student job. "de bioscoop" = cinema.',
      keyWords: ['logopedie', 'bijbaantje', 'bioscoop']
    },
    {
      id: 15,
      speaker: 'Tom',
      dutch: 'Wat leuk, interesseer je je ook voor films of is het gewoon een bijbaantje?',
      english: 'How nice, are you interested in films too or is it just a side job?',
      notes: 'Reflexive: "zich interesseren voor" -> "interesseer je je...".',
      keyWords: ['wat leuk', 'interesseer je je voor', 'gewoon']
    },
    {
      id: 16,
      speaker: 'Kirsten',
      dutch: 'Niet zo snel alsjeblieft, mijn Nederlands is nog niet zo goed! Film is niet echt mijn hobby, ik houd meer van sport, van zwemmen en wandelen.',
      english: 'Not so fast please, my Dutch is not so good yet! Film isn\'t really my hobby, I prefer sport, swimming and hiking.',
      notes: 'Very useful phrase: "Niet zo snel alsjeblieft!".',
      keyWords: ['niet zo snel alsjeblieft', 'hobby', 'zwemmen', 'wandelen']
    }
  ],
  vocabulary: [
    {
      id: 'zich_herinneren',
      dutch: 'zich herinneren',
      english: 'to remember',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik kan me dat gesprek nog heel goed herinneren.',
      exampleEnglish: 'I can remember that conversation very well.'
    },
    {
      id: 'zich_vergissen',
      dutch: 'zich vergissen',
      english: 'to be mistaken / to make a mistake',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Pardon, ik vergis me in de datum van de afspraak.',
      exampleEnglish: 'Excuse me, I am mistaken about the date of the appointment.'
    },
    {
      id: 'zich_voorstellen',
      dutch: 'zich voorstellen',
      english: 'to introduce oneself / to imagine',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik me even voorstellen? Ik ben Tom.',
      exampleEnglish: 'May I introduce myself? I am Tom.'
    },
    {
      id: 'zich_voelen',
      dutch: 'zich voelen (zich thuis voelen)',
      english: 'to feel (to feel at home)',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij voelt zich al helemaal thuis in haar nieuwe woning.',
      exampleEnglish: 'She already feels completely at home in her new apartment.'
    },
    {
      id: 'zich_vervelen',
      dutch: 'zich vervelen',
      english: 'to be bored',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Als het de hele dag regent, verveel ik me snel.',
      exampleEnglish: 'When it rains all day, I get bored quickly.'
    },
    {
      id: 'zich_interesseren_voor',
      dutch: 'zich interesseren voor',
      english: 'to be interested in',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Interesseer jij je voor moderne kunst en architectuur?',
      exampleEnglish: 'Are you interested in modern art and architecture?'
    },
    {
      id: 'zich_voorbereiden_op',
      dutch: 'zich voorbereiden op',
      english: 'to prepare for',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'De studenten bereiden zich goed voor op het tentamen.',
      exampleEnglish: 'The students are preparing well for the exam.'
    },
    {
      id: 'zich_haasten',
      dutch: 'zich haasten',
      english: 'to hurry / to rush',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'We moeten ons haasten, anders missen we de trein!',
      exampleEnglish: 'We have to hurry, otherwise we\'ll miss the train!'
    },
    {
      id: 'zich_schamen',
      dutch: 'zich schamen',
      english: 'to be ashamed',
      category: 'reflexief',
      partOfSpeech: 'verb',
      exampleSentence: 'Hij schaamt zich voor zijn slordige handschrift.',
      exampleEnglish: 'He is ashamed of his messy handwriting.'
    },
    {
      id: 'de_verjaardag',
      dutch: 'de verjaardag',
      english: 'birthday',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de verjaardagen',
      exampleSentence: 'Wanneer vier jij je verjaardag dit jaar?',
      exampleEnglish: 'When are you celebrating your birthday this year?'
    },
    {
      id: 'de_jarige',
      dutch: 'de jarige',
      english: 'birthday person / person celebrating birthday',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de jarigen',
      exampleSentence: 'Iedereen zingt een feestelijk lied voor de jarige.',
      exampleEnglish: 'Everyone sings a festive song for the birthday boy/girl.'
    },
    {
      id: 'feliciteren',
      dutch: 'feliciteren',
      english: 'to congratulate',
      category: 'feest',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik wil je graag feliciteren met je promotie!',
      exampleEnglish: 'I would like to congratulate you on your promotion!'
    },
    {
      id: 'van_harte_gefeliciteerd',
      dutch: 'van harte gefeliciteerd (met...)',
      english: 'congratulations / happy birthday',
      category: 'feest',
      partOfSpeech: 'phrase',
      exampleSentence: 'Van harte gefeliciteerd met je dertigste verjaardag!',
      exampleEnglish: 'Warm congratulations on your thirtieth birthday!'
    },
    {
      id: 'het_cadeau',
      dutch: 'het cadeau / het cadeautje',
      english: 'gift / present',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de cadeaus / de cadeautjes',
      exampleSentence: 'Wat een prachtig cadeautje heb je voor me gekocht!',
      exampleEnglish: 'What a wonderful little present you bought for me!'
    },
    {
      id: 'de_taart',
      dutch: 'de taart',
      english: 'cake / pie / tart',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de taarten',
      exampleSentence: 'Bij een Nederlandse verjaardag hoort natuurlijk verse appeltaart.',
      exampleEnglish: 'A Dutch birthday naturally calls for fresh apple pie.'
    },
    {
      id: 'het_feest',
      dutch: 'het feest',
      english: 'party / celebration',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de feesten',
      exampleSentence: 'Het feest begint vanavond om acht uur.',
      exampleEnglish: 'The party starts at eight o\'clock tonight.'
    },
    {
      id: 'het_kaartje',
      dutch: 'het kaartje',
      english: 'ticket / card',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kaartjes',
      exampleSentence: 'Ik stuur een verjaardagskaartje naar mijn oma.',
      exampleEnglish: 'I am sending a birthday card to my grandmother.'
    },
    {
      id: 'trakteren',
      dutch: 'trakteren (op...)',
      english: 'to treat / to buy treats for colleagues/classmates',
      category: 'feest',
      partOfSpeech: 'verb',
      exampleSentence: 'Als je jarig bent, trakteer je je collega\'s op gebak.',
      exampleEnglish: 'When it is your birthday, you treat your colleagues to pastries.'
    },
    {
      id: 'de_traktatie',
      dutch: 'de traktatie',
      english: 'treat / goodies',
      category: 'feest',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de traktaties',
      exampleSentence: 'De kinderen brachten een gezonde traktatie mee naar school.',
      exampleEnglish: 'The children brought a healthy treat to school.'
    },
    {
      id: 'het_bezoek',
      dutch: 'het bezoek',
      english: 'visit / visitors / company',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bezoeken',
      exampleSentence: 'Vanmiddag krijgen we gezellig bezoek van vrienden.',
      exampleEnglish: 'This afternoon we are having nice visitors from friends.'
    },
    {
      id: 'op_bezoek_zijn',
      dutch: 'op bezoek zijn / gaan',
      english: 'to be visiting / to go visiting',
      category: 'sociaal',
      partOfSpeech: 'phrase',
      exampleSentence: 'We gaan zaterdag op bezoek bij mijn schoonouders.',
      exampleEnglish: 'We are going on a visit to my in-laws on Saturday.'
    },
    {
      id: 'de_gast',
      dutch: 'de gast',
      english: 'guest',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de gasten',
      exampleSentence: 'Alle gasten zitten in een grote kring in de woonkamer.',
      exampleEnglish: 'All the guests are sitting in a large circle in the living room.'
    },
    {
      id: 'de_gastheer',
      dutch: 'de gastheer / de gastvrouw',
      english: 'host / hostess',
      category: 'sociaal',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de gastheren / de gastvrouwen',
      exampleSentence: 'De gastheer schenkt iedereen een glaasje wijn in.',
      exampleEnglish: 'The host pours everyone a small glass of wine.'
    },
    {
      id: 'elkaar',
      dutch: 'elkaar',
      english: 'each other / one another',
      category: 'grammatica',
      partOfSpeech: 'pronoun',
      exampleSentence: 'Kennen jullie elkaar al van de universiteit?',
      exampleEnglish: 'Do you already know each other from university?'
    },
    {
      id: 'de_buurman',
      dutch: 'de buurman (buurvrouw / buren)',
      english: 'neighbour',
      category: 'mensen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de buurmannen / de buren',
      exampleSentence: 'Onze buurman bakt altijd heerlijke pannenkoeken.',
      exampleEnglish: 'Our neighbour always bakes delicious pancakes.'
    },
    {
      id: 'het_buitenland',
      dutch: 'het buitenland',
      english: 'abroad / foreign country',
      category: 'algemeen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Veel internationale studenten komen uit het buitenland.',
      exampleEnglish: 'Many international students come from abroad.'
    },
    {
      id: 'het_accent',
      dutch: 'het accent',
      english: 'accent',
      category: 'taal',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de accenten',
      exampleSentence: 'Ze spreekt vloeiend Nederlands met een charmant accent.',
      exampleEnglish: 'She speaks fluent Dutch with a charming accent.'
    },
    {
      id: 'sinds_kort',
      dutch: 'sinds kort',
      english: 'recently / lately',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Ik woon pas sinds kort in deze rustige wijk.',
      exampleEnglish: 'I have only recently been living in this quiet neighbourhood.'
    },
    {
      id: 'bevallen',
      dutch: 'bevallen (het bevalt me)',
      english: 'to please / to like / to suit',
      category: 'werkwoord',
      partOfSpeech: 'verb',
      exampleSentence: 'Hoe bevalt je nieuwe baan bij het architectenbureau?',
      exampleEnglish: 'How are you liking your new job at the architectural firm?'
    },
    {
      id: 'het_bedrijf',
      dutch: 'het bedrijf',
      english: 'company / business',
      category: 'werk',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bedrijven',
      exampleSentence: 'Peter heeft zijn eigen bedrijf opgericht.',
      exampleEnglish: 'Peter started his own company.'
    },
    {
      id: 'de_baas',
      dutch: 'de baas (eigen baas)',
      english: 'boss (self-employed)',
      category: 'werk',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bazen',
      exampleSentence: 'Hij is eigen baas en bepaalt zelf zijn werktijden.',
      exampleEnglish: 'He is his own boss and decides his own working hours.'
    },
    {
      id: 'het_bijbaantje',
      dutch: 'het bijbaantje',
      english: 'side job / student job',
      category: 'werk',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bijbaantjes',
      exampleSentence: 'Naast haar studie heeft ze een bijbaantje in de horeca.',
      exampleEnglish: 'Alongside her studies, she has a side job in hospitality.'
    },
    {
      id: 'de_studie',
      dutch: 'de studie',
      english: 'studies / field of study',
      category: 'studie',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de studies',
      exampleSentence: 'Welke studie volg jij aan de Erasmus Universiteit?',
      exampleEnglish: 'What degree programme do you follow at Erasmus University?'
    },
    {
      id: 'de_opleiding',
      dutch: 'de opleiding',
      english: 'education / training course',
      category: 'studie',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de opleidingen',
      exampleSentence: 'Zij volgt een vierjarige opleiding tot fysiotherapeut.',
      exampleEnglish: 'She is taking a four-year training course to become a physiotherapist.'
    },
    {
      id: 'gek_zijn_op',
      dutch: 'gek zijn op...',
      english: 'to be crazy about / to love',
      category: 'uitdrukking',
      partOfSpeech: 'phrase',
      exampleSentence: 'De meeste Nederlanders zijn gek op drop en stroopwafels.',
      exampleEnglish: 'Most Dutch people are crazy about licorice and syrup waffles.'
    },
    {
      id: 'houden_van',
      dutch: 'houden van...',
      english: 'to love / to care for / to be fond of',
      category: 'uitdrukking',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik houd ontzettend veel van klassieke muziek en opera.',
      exampleEnglish: 'I love classical music and opera very much.'
    },
    {
      id: 'wat_leuk',
      dutch: 'wat leuk!',
      english: 'how nice! / that\'s great!',
      category: 'reactie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ga je trouwen? Wat leuk!',
      exampleEnglish: 'Are you getting married? How nice!'
    },
    {
      id: 'wat_toevallig',
      dutch: 'wat toevallig!',
      english: 'what a coincidence!',
      category: 'reactie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Woon jij in dezelfde straat als mijn zus? Wat toevallig!',
      exampleEnglish: 'Do you live in the same street as my sister? What a coincidence!'
    },
    {
      id: 'wat_jammer',
      dutch: 'wat jammer!',
      english: 'what a pity! / what a shame!',
      category: 'reactie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Kun je niet op mijn feestje komen? Wat jammer!',
      exampleEnglish: 'Can\'t you come to my party? What a pity!'
    },
    {
      id: 'wat_vervelend',
      dutch: 'wat vervelend!',
      english: 'how annoying! / what a nuisance!',
      category: 'reactie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Is je trein alweer uitgevallen? Wat vervelend!',
      exampleEnglish: 'Has your train been cancelled again? How annoying!'
    },
    {
      id: 'wat_gezellig',
      dutch: 'wat gezellig!',
      english: 'how cozy! / how pleasant!',
      category: 'reactie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Iedereen is er vanavond, wat gezellig!',
      exampleEnglish: 'Everyone is here tonight, how cozy!'
    },
    {
      id: 'niet_zo_snel',
      dutch: 'niet zo snel alsjeblieft',
      english: 'not so fast, please',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Spreek alsjeblieft een beetje langzamer, niet zo snel.',
      exampleEnglish: 'Please speak a bit slower, not so fast.'
    },
    {
      id: 'de_kringverjaardag',
      dutch: 'de kringverjaardag',
      english: 'circle party (typical Dutch birthday party)',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kringverjaardagen',
      exampleSentence: 'Op de kringverjaardag zat iedereen in een cirkel op stoelen.',
      exampleEnglish: 'At the circle birthday party everyone sat in a circle on chairs.'
    }
  ],
  grammarPoints: [
    {
      id: 'reflexieve_werkwoorden',
      title: '11.1 Wederkerende Werkwoorden (Reflexieve Pronomina)',
      summary: 'Werkwoorden gecombineerd met me, je, zich, ons.',
      ruleExplanation: `Bij reflexieve werkwoorden verwijst het pronomen terug naar het onderwerp van de zin.

Het reflexief pronomen per persoon:
• ik -> ME ("Ik verveel me", "Ik herinner me dat")
• jij / je -> JE ("Verveel je je?", "Je vergist je")
• u -> U of ZICH ("U vergist u" / "U vergist zich")
• hij / zij / het -> ZICH ("Hij herinnert zich niets", "Zij voelt zich thuis")
• wij / we -> ONS ("Wij bereiden ons goed voor")
• jullie -> JE ("Jullie vervelen je nooit")
• zij / ze (meervoud) -> ZICH ("Zij stellen zich voor aan de buren")

Let op: in een inversiezin of vraagzin komt het onderwerp voor het reflexieve pronomen:
"Herinner JE JE dat nog?" (onderwerp "je", reflexief pronomen "je").
"Vergist HIJ ZICH in de tijd?" (onderwerp "hij", reflexief pronomen "zich").`,
      examples: [
        {
          dutch: 'Ik zal me even voorstellen, ik ben Kirsten.',
          english: 'I will introduce myself for a moment, I am Kirsten.',
          note: '"ik" -> "me".'
        },
        {
          dutch: 'Vergis je je niet in het huisnummer?',
          english: 'Aren\'t you mistaken about the house number?',
          note: '"je" (onderwerp) + "je" (reflexief).'
        },
        {
          dutch: 'Wij verheugen ons op het zomerfeest.',
          english: 'We look forward to the summer party.',
          note: '"wij" -> "ons".'
        }
      ],
      tables: [
        {
          headers: ['Persoonlijk voornaamwoord', 'Reflexief pronomen', 'Voorbeeldzin met "zich vergissen"'],
          rows: [
            ['ik', 'me', 'Ik vergis me.'],
            ['jij / je', 'je', 'Je vergist je.'],
            ['u', 'u / zich', 'U vergist u / zich.'],
            ['hij / zij / het', 'zich', 'Hij vergist zich.'],
            ['wij / we', 'ons', 'We vergissen ons.'],
            ['jullie', 'je', 'Jullie vergissen je.'],
            ['zij / ze (mv.)', 'zich', 'Zij vergissen zich.']
          ]
        }
      ]
    },
    {
      id: 'vaste_reacties',
      title: '11.2 Vaste Reacties met "Wat...!"',
      summary: 'Korte enthousiaste of meelevende reacties in een alledaags gesprek.',
      ruleExplanation: `In informele Nederlandse conversaties reageer je op nieuws van een ander met "Wat + adjectief!":

Positief / Enthousiast:
• Wat leuk! (How nice / cool!)
• Wat geweldig! (How great!)
• Wat toevallig! (What a coincidence!)
• Wat gezellig! (How pleasant / cozy!)
• Wat lekker! (How tasty!)
• Wat interessant! (How interesting!)

Negatief / Meelevend:
• Wat jammer! (What a pity!)
• Wat vervelend! (How annoying / what a shame!)
• Wat erg! (How terrible!)
• Wat naar! (How unpleasant / awful!)`,
      examples: [
        {
          dutch: 'Ik ga morgen met vakantie naar Spanje! - Wat leuk, geniet ervan!',
          english: 'I am going on holiday to Spain tomorrow! - How nice, enjoy it!',
          note: 'Enthousiaste positieve reactie.'
        },
        {
          dutch: 'Mijn fiets is gisteravond gestolen. - Wat vervelend voor je!',
          english: 'My bike was stolen yesterday evening. - How annoying for you!',
          note: 'Meelevende negatieve reactie.'
        }
      ]
    },
    {
      id: 'wederkerig_elkaar',
      title: '11.3 Het wederkerig voornaamwoord "elkaar"',
      summary: '"Elkaar" drukt een wederzijdse relatie uit tussen twee of meer personen.',
      ruleExplanation: `"Elkaar" betekent "each other" of "one another".
Het wordt gebruikt wanneer meerdere personen dezelfde actie naar elkaar toe uitvoeren:
• Wij kennen elkaar al tien jaar. (We know each other for 10 years.)
• Zij helpen elkaar met het huiswerk. (They help each other with homework.)
• Tom en Kirsten groeten elkaar vriendelijk. (Tom and Kirsten greet each other kindly.)

Let op: combineer voorzetsels direct met elkaar:
• met elkaar (with each other)
• naar elkaar (towards each other)
• van elkaar (from each other)`,
      examples: [
        {
          dutch: 'Kennen jullie elkaar?',
          english: 'Do you know each other?',
          note: 'Vraag aan twee mensen.'
        },
        {
          dutch: 'We zien elkaar morgenmiddag om twee uur.',
          english: 'We\'ll see each other tomorrow afternoon at two.',
          note: 'Afspraak maken.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_reflexief',
      title: 'Opdracht 1: Vul het reflexieve pronomen in',
      instruction: 'Kies de juiste vorm van me, je, zich of ons (blz. 164).',
      items: [
        {
          id: 1,
          prompt: 'Wat is er gebeurd? Ik kan het _______ niet meer herinneren.',
          answer: 'me',
          options: ['me', 'zich', 'ons', 'je'],
          explanation: 'Onderwerp is "ik", dus het reflexief pronomen is "me".'
        },
        {
          id: 2,
          prompt: 'Een wandelreis naar Chili? We gaan _______ heel goed voorbereiden.',
          answer: 'ons',
          options: ['ons', 'me', 'zich', 'je'],
          explanation: 'Onderwerp is "we", dus reflexief pronomen is "ons".'
        },
        {
          id: 3,
          prompt: 'Ze woont toch in Delft? - Nee echt niet, je vergist _______.',
          answer: 'je',
          options: ['je', 'me', 'zich', 'ons'],
          explanation: 'Onderwerp is "je", dus "je vergist je".'
        },
        {
          id: 4,
          prompt: 'Stefan verveelt _______ een beetje tijdens de vakantie.',
          answer: 'zich',
          options: ['zich', 'hem', 'me', 'je'],
          explanation: 'Stefan is 3e persoon enkelvoud (hij), dus "zich".'
        },
        {
          id: 5,
          prompt: 'Kirsten voelt _______ heel erg thuis in Nederland.',
          answer: 'zich',
          options: ['zich', 'haar', 'me', 'ons'],
          explanation: 'Kirsten is 3e persoon enkelvoud (zij), dus "zich".'
        },
        {
          id: 6,
          prompt: 'Mag ik _______ even voorstellen? Ik ben de nieuwe buurman.',
          answer: 'me',
          options: ['me', 'zich', 'ons', 'je'],
          explanation: 'Onderwerp is "ik" (mag ik), dus "mag ik me even voorstellen".'
        }
      ]
    },
    {
      id: 'opdracht_2_reacties',
      title: 'Opdracht 2: Passende reacties met "Wat...!"',
      instruction: 'Welke reactie past het beste bij de situatie?',
      items: [
        {
          id: 1,
          prompt: '"Ik heb vanmorgen een 9 gehaald voor mijn staatsexamen!"',
          answer: 'Wat geweldig!',
          options: ['Wat geweldig!', 'Wat jammer!', 'Wat vervelend!'],
          explanation: 'Een 9 voor een examen is geweldig nieuws.'
        },
        {
          id: 2,
          prompt: '"Helaas kan ik zaterdag niet naar je verjaardag komen, ik ben ziek."',
          answer: 'Wat jammer!',
          options: ['Wat jammer!', 'Wat lekker!', 'Wat toevallig!'],
          explanation: 'Als iemand niet kan komen wegens ziekte, reageer je met "Wat jammer!".'
        },
        {
          id: 3,
          prompt: '"Kijk, ik heb net verse warme appeltaart gebakken voor het bezoek."',
          answer: 'Wat lekker!',
          options: ['Wat lekker!', 'Wat toevallig!', 'Wat vervelend!'],
          explanation: 'Verse warme taart is lekker.'
        },
        {
          id: 4,
          prompt: '"Gisteren heb ik mijn portemonnee met al mijn pasjes verloren in de tram."',
          answer: 'Wat vervelend!',
          options: ['Wat vervelend!', 'Wat gezellig!', 'Wat toevallig!'],
          explanation: 'Een portemonnee verliezen is heel vervelend.'
        },
        {
          id: 5,
          prompt: '"Kom jij ook uit Groningen? Ik heb daar vijf jaar gewoond!"',
          answer: 'Wat toevallig!',
          options: ['Wat toevallig!', 'Wat jammer!', 'Wat vervelend!'],
          explanation: 'Dezelfde afkomst of ervaring delen is toevallig.'
        }
      ]
    },
    {
      id: 'opdracht_3_verjaardag_woordenschat',
      title: 'Opdracht 3: Verjaardag & Conversatie',
      instruction: 'Kies het juiste woord om de zin compleet te maken.',
      items: [
        {
          id: 1,
          prompt: 'Als je jarig bent op je werk, _______ je je collega\'s op iets lekkers.',
          answer: 'trakteer',
          options: ['trakteer', 'feliciteer', 'vergis'],
          explanation: 'Als je jarig bent, trakteer je (geven van gebak of taart).'
        },
        {
          id: 2,
          prompt: 'Tom feliciteert Peter met zijn vriendin en zegt: "Van harte _______!"',
          answer: 'gefeliciteerd',
          options: ['gefeliciteerd', 'verheugd', 'getrakteerd'],
          explanation: 'De vaste felicitatieformule is "van harte gefeliciteerd".'
        },
        {
          id: 3,
          prompt: 'Peter werkt niet meer voor een baas, hij is _______ baas geworden.',
          answer: 'eigen',
          options: ['eigen', 'nieuwe', 'goede'],
          explanation: '"Eigen baas" is de Nederlandse uitdrukking voor zzp\'er of zelfstandige ondernemer.'
        },
        {
          id: 4,
          prompt: 'Kirsten heeft naast haar studie logopedie een _______ in de bioscoop.',
          answer: 'bijbaantje',
          options: ['bijbaantje', 'diploma', 'traktatie'],
          explanation: 'Een studentenbaantje noem je een bijbaantje.'
        }
      ]
    }
  ],
  readingText: {
    title: '11.8 Tekst: De Nederlandse Verjaardag',
    subtitle: 'Over feliciteren, de beroemde kring en wie er eigenlijk trakteert (Blz. 168)',
    content: `Een verjaardag vieren in Nederland heeft een aantal bijzondere tradities die veel buitenlanders verbazen. 

Ten eerste: wie trakteert er? In veel landen betaalt de jarige niets en trakteren vrienden de jarige op drankjes of een etentje. In Nederland is het precies omgekeerd: wie jarig is, brengt taart of gebak mee naar het werk of naar school en trakteert iedereen!

Ten tweede feliciteer je in Nederland niet alleen de persoon die jarig is, maar de héle familie. Als je binnenkomt op een verjaardagsfeestje schud je iedereen de hand of geef je drie kussen en zeg je tegen de partner: "Gefeliciteerd met je vriendin!", tegen de ouders: "Gefeliciteerd met je zoon!", en zelfs tegen vrienden: "Gefeliciteerd met Marit!".

Ten derde is er het fenomeen van de "kringverjaardag". De gastheer zet alle stoelen en fauteuils in een grote kring in de huiskamer. Iedereen zit naast elkaar, eet eerst een punt appeltaart met koffie of thee, en later op de avond komen de schaaltjes met blokjes kaas, plakjes leverworst en augurken rond. Voor buitenlanders is dit soms een cultuurschok, maar Nederlanders vinden het vooral heel "gezellig".`,
    vocabularyNotes: [
      { word: 'omgekeerd', translation: 'the other way around / reversed' },
      { word: 'trakteren', translation: 'to provide treats / buy for others' },
      { word: 'de kring', translation: 'circle' },
      { word: 'de cultuurschok', translation: 'culture shock' },
      { word: 'de leverworst', translation: 'liver sausage (classic birthday snack)' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wie zorgt er op het werk voor taart als er iemand jarig is in Nederland?',
        answer: 'De jarige zelf brengt taart mee en trakteert',
        options: [
          'De jarige zelf brengt taart mee en trakteert',
          'De baas moet verplicht taart kopen voor iedereen',
          'De collega\'s betalen altijd een luxe lunch'
        ],
        explanation: 'In Nederland trakteert de jarige zelf zijn collega\'s op het werk.'
      },
      {
        id: 2,
        prompt: 'Wie feliciteer je op een Nederlands verjaardagsfeestje als je binnenkomt?',
        answer: 'Niet alleen de jarige, maar ook de familieleden, partner en vrienden',
        options: [
          'Niet alleen de jarige, maar ook de familieleden, partner en vrienden',
          'Alleen de jarige en niemand anders',
          'Alleen de gastheer en de buren'
        ],
        explanation: 'In Nederland feliciteer je iedereen in de kring met de jarige ("Gefeliciteerd met je dochter/vriendin!").'
      },
      {
        id: 3,
        prompt: 'Hoe zitten de gasten op een traditionele Nederlandse "kringverjaardag"?',
        answer: 'In een grote cirkel van stoelen in de huiskamer',
        options: [
          'In een grote cirkel van stoelen in de huiskamer',
          'Staand aan een hoge bar in de gang',
          'Aan afzonderlijke restauranttafeltjes'
        ],
        explanation: 'Bij een kringverjaardag worden alle stoelen in een grote cirkel opgesteld.'
      }
    ]
  },
  pronunciation: {
    title: '11.9 Uitspraak: De tweeklanken "ij/ei" en "ui"',
    soundFocus: 'Tweeklanken: "ij/ei" (blij, trein) vs "ui" (huis, buiten, buurman)',
    explanation: 'De tweeklank "ui" (zoals in "huis", "tuin", "buiten", "geluid") is voor veel anderstaligen een van de moeilijkste klanken in het Nederlands. Begin met je lippen een beetje gerond naar voren en beweeg naar binnen. Vergelijk dit met "ei/ij" (zoals in "trein", "blij", "kennen"), waarbij je mondhoeken breed naar buiten bewegen als een glimlach.',
    wordList: [
      'buiten', 'bijten', 'huis', 'hij', 'tuin', 'trein', 'buurman', 'blij', 'duur', 'duik', 'dijk', 'fluit'
    ],
    minimalPairs: [
      { word1: 'huis', word2: 'hij', contrast: 'ui vs ij' },
      { word1: 'tuin', word2: 'trein', contrast: 'ui vs ei' },
      { word1: 'buiten', word2: 'bijten', contrast: 'ui vs ij' },
      { word1: 'duik', word2: 'dijk', contrast: 'ui vs ij' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 11: Op een verjaardag',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Kies het juiste reflexieve pronomen: "Ik verveel _______ vanmiddag."',
        options: ['me', 'zich', 'je', 'ons'],
        answer: 'me',
        explanation: 'Bij het onderwerp "ik" hoort het reflexief pronomen "me".'
      },
      {
        id: 2,
        prompt: 'Kies het juiste reflexieve pronomen: "De kinderen verheugen _______ enorm op het schoolreisje."',
        options: ['zich', 'ons', 'ze', 'hun'],
        answer: 'zich',
        explanation: 'De kinderen = meervoud (zij), dus het reflexief pronomen is "zich".'
      },
      {
        id: 3,
        prompt: 'Vraagvorm met inversie: "Herinner _______ dat feestje van vorig jaar nog?"',
        options: ['je je', 'zich je', 'je me', 'ons je'],
        answer: 'je je',
        explanation: 'Vraag aan "jij/je": persoonsvorm + onderwerp (je) + reflexief pronomen (je) -> "Herinner je je...".'
      },
      {
        id: 4,
        prompt: 'Iemand vertelt: "Mijn oma is gisteren opgenomen in het ziekenhuis." Wat is de meest empathische reactie?',
        options: ['Wat vervelend / Wat erg!', 'Wat lekker!', 'Wat toevallig!', 'Wat gezellig!'],
        answer: 'Wat vervelend / Wat erg!',
        explanation: 'Bij verdrietig of zorgelijk nieuws reageer je meelevend met "Wat erg!" of "Wat vervelend!".'
      },
      {
        id: 5,
        prompt: 'Wat betekent het als iemand "eigen baas" is?',
        options: [
          'De persoon is zelfstandig ondernemer en werkt niet in loondienst.',
          'De persoon is directeur van een multinational met duizend man personeel.',
          'De persoon zoekt al heel lang naar een parttime baan.'
        ],
        answer: 'De persoon is zelfstandig ondernemer en werkt niet in loondienst.',
        explanation: '"Eigen baas zijn" betekent zelfstandige ondernemer (zzp\'er) zijn.'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "cadeautje"?',
        options: ['het cadeautje', 'de cadeautje', 'een cadeautje (geen lidwoord mogelijk)'],
        answer: 'het cadeautje',
        explanation: 'Alle verkleinwoorden (diminutieven) op -je/-tje/-pje zijn altijd het-woorden.'
      },
      {
        id: 7,
        prompt: 'Wat is de juiste betekenis van "elkaar" in: "Zij helpen elkaar met de voorbereiding"?',
        options: ['one another / each other', 'themselves', 'everyone', 'nobody'],
        answer: 'one another / each other',
        explanation: '"Elkaar" is het wederkerig voornaamwoord en betekent "each other".'
      },
      {
        id: 8,
        prompt: 'Wat betekent "zich schamen"?',
        options: ['to be ashamed', 'to hurry', 'to apologize', 'to enjoy oneself'],
        answer: 'to be ashamed',
        explanation: '"Zich schamen" betekent "to be ashamed / feel embarrassed".'
      },
      {
        id: 9,
        prompt: 'Wat doe je in Nederland als je jarig bent op kantoor?',
        options: [
          'Je trakteert zelf je collega\'s op taart of gebak.',
          'Je vraagt al je collega\'s om geld voor je verjaardag.',
          'Je blijft de hele dag thuis zonder iets te melden.'
        ],
        answer: 'Je trakteert zelf je collega\'s op taart of gebak.',
        explanation: 'De jarige brengt de traktatie mee voor de collega\'s.'
      },
      {
        id: 10,
        prompt: 'Wat zeg je tegen de partner van de jarige op een Nederlands verjaardagsfeest?',
        options: [
          'Gefeliciteerd met je partner / vriend(in)!',
          'Gecondoleerd met de situatie.',
          'Veel succes met je verjaardag vandaag.'
        ],
        answer: 'Gefeliciteerd met je partner / vriend(in)!',
        explanation: 'In Nederland feliciteer je familieleden en partners met de jarige.'
      }
    ]
  },
  culturalOrPracticalNote: 'Verjaardagen in Nederland: In Nederland feliciteer je niet alleen de jarige, maar ook de familie en partner van de jarige ("Gefeliciteerd met je vriendin!"). De jarige trakteert zelf op taart. Op een typische "kringverjaardag" zitten de gasten in een cirkel rond de koffietafel met blokjes kaas en plakjes worst.'
};
