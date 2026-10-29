import { CustomLessonData } from '../types/lesson';

export const CHAPTER_7_DATA: CustomLessonData = {
  id: 'hoofdstuk_7',
  chapterNumber: 'Hoofdstuk 7',
  chapterTitle: 'In een kledingzaak',
  description: 'Kleding kopen, maten en kleuren beschrijven, trappen van vergelijking (beter, mooier, het best), aanwijzende voornaamwoorden (deze/die/dit/dat) en voornaamwoorden als lijdend voorwerp (mij, hem, haar, ons).',
  language: 'Nederlands',
  createdAt: 1727700000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Verkoopster',
      dutch: 'Kan ik jullie helpen?',
      english: 'Can I help you guys?',
      notes: 'Informal plural "jullie" used for the young customers entering.',
      keyWords: ['helpen', 'jullie']
    },
    {
      id: 2,
      speaker: 'Meisje en jongen',
      dutch: 'Nee, we kijken alleen even.',
      english: 'No, we are just looking around for a moment.',
      notes: '"Alleen even" is a very common Dutch phrase when shopping: just browsing.',
      keyWords: ['kijken', 'alleen even']
    },
    {
      id: 3,
      speaker: 'Sandra',
      dutch: 'Kunt u mij helpen? Ik zoek een spijkerbroek.',
      english: 'Could you help me? I am looking for a pair of jeans.',
      notes: 'Polite question with "u". "zoeken" = to look for. "de spijkerbroek" = jeans.',
      keyWords: ['kunt u', 'mij', 'zoeken', 'spijkerbroek']
    },
    {
      id: 4,
      speaker: 'Verkoopster',
      dutch: 'Welke maat hebt u?',
      english: 'What size do you have / wear?',
      notes: '"de maat" = size. "Welke" is used before de-words.',
      keyWords: ['welke', 'maat']
    },
    {
      id: 5,
      speaker: 'Sandra',
      dutch: 'Ik heb normaal maat 40, soms groter.',
      english: 'I normally have size 40, sometimes larger.',
      notes: '"groter" is the comparative form of "groot" (large/big).',
      keyWords: ['normaal', 'maat', 'soms', 'groter']
    },
    {
      id: 6,
      speaker: 'Verkoopster',
      dutch: 'Welke kleur en wat voor model wilt u?',
      english: 'What colour and what kind of style would you like?',
      notes: '"wat voor" = what kind of. "het model" = model/style.',
      keyWords: ['kleur', 'wat voor', 'model', 'wilt u']
    },
    {
      id: 7,
      speaker: 'Sandra',
      dutch: 'Ik wil graag een lichte spijkerbroek, een laag model.',
      english: 'I would like a light-coloured pair of jeans, a low-waisted model.',
      notes: '"lichte" (inflected adjective before de-word). "laag model" (low waist).',
      keyWords: ['graag', 'lichte', 'laag model']
    },
    {
      id: 8,
      speaker: 'Verkoopster',
      dutch: 'Ik geef u twee spijkerbroeken van twee verschillende merken. Probeert u ze allebei maar even.',
      english: 'I will give you two pairs of jeans from two different brands. Just try them both on.',
      notes: '"het merk" (brand) -> "merken" (plural). "proberen / passen" = try on. "allebei" = both.',
      keyWords: ['verschillende', 'merken', 'proberen', 'allebei']
    },
    {
      id: 9,
      speaker: 'Sandra',
      dutch: 'Waar kan ik ze ergens passen?',
      english: 'Where can I try them on somewhere?',
      notes: '"ze" refers to plural objects (de spijkerbroeken). "passen" = to try on.',
      keyWords: ['ergens', 'passen']
    },
    {
      id: 10,
      speaker: 'Verkoopster',
      dutch: 'Daar zijn de paskamers.',
      english: 'The fitting rooms are over there.',
      notes: '"de paskamer" = fitting / changing cubicle.',
      keyWords: ['daar', 'paskamers']
    },
    {
      id: 11,
      speaker: 'Verkoopster',
      dutch: 'En, hoe zitten ze?',
      english: 'And, how do they fit?',
      notes: 'In Dutch, clothes "zitten" (sit/fit): "Hoe zit de broek?" or "Hoe zitten ze?".',
      keyWords: ['hoe zitten ze']
    },
    {
      id: 12,
      speaker: 'Sandra',
      dutch: 'Deze broek zit beter dan die andere broek. Ik vind hem wel een beetje wijd. Hebt u hem in een kleinere maat?',
      english: 'These trousers fit better than that other pair. I find it a bit wide though. Do you have it in a smaller size?',
      notes: '"Deze" (this one here) vs "die" (that one there). "beter dan" = better than. "hem" refers to de broek.',
      keyWords: ['deze', 'die', 'beter dan', 'wijd', 'kleinere maat', 'hem']
    },
    {
      id: 13,
      speaker: 'Verkoopster',
      dutch: 'Het spijt me. Ik heb hem niet in een kleinere maat. Dit is de kleinste maat van dit model.',
      english: 'I am sorry. I do not have it in a smaller size. This is the smallest size of this model.',
      notes: '"Het spijt me" = I am sorry. "de kleinste" = the smallest (superlative).',
      keyWords: ['het spijt me', 'kleinste maat', 'dit model']
    },
    {
      id: 14,
      speaker: 'Sandra',
      dutch: 'Ik neem hem toch. Kan ik hem eventueel nog ruilen?',
      english: 'I will take it anyway. Can I possibly still exchange it if needed?',
      notes: '"toch" = anyway / nevertheless. "ruilen" = to exchange/swap.',
      keyWords: ['nemen', 'toch', 'eventueel', 'ruilen']
    },
    {
      id: 15,
      speaker: 'Verkoopster',
      dutch: 'Ja hoor. Binnen 14 dagen, met de bon.',
      english: 'Yes of course. Within 14 days, with the receipt.',
      notes: '"de bon" = receipt / sales slip. "binnen 14 dagen" = within 14 days.',
      keyWords: ['binnen', 'dagen', 'de bon']
    },
    {
      id: 16,
      speaker: 'Sandra',
      dutch: 'Ik wil ook nog graag een paar T-shirts.',
      english: 'I would also like a couple of T-shirts.',
      notes: '"een paar" = a few / a couple.',
      keyWords: ['ook nog', 'een paar T-shirts']
    },
    {
      id: 17,
      speaker: 'Verkoopster',
      dutch: 'Hier liggen de T-shirts. Ik heb ze in allerlei kleuren: wit, zwart, rood, roze, groen en blauw.',
      english: 'Here are the T-shirts. I have them in all kinds of colours: white, black, red, pink, green, and blue.',
      notes: '"allerlei" = all sorts of / all kinds of.',
      keyWords: ['liggen', 'allerlei', 'kleuren', 'wit', 'zwart', 'rood', 'roze', 'groen', 'blauw']
    },
    {
      id: 18,
      speaker: 'Sandra',
      dutch: 'Ik neem een wit en een rood T-shirt. Of toch een roze? Ik kan altijd zo moeilijk beslissen. Dit roze shirt staat me het best. Ik neem dus deze spijkerbroek en deze twee T-shirts. Kan ik pinnen?',
      english: 'I will take a white and a red T-shirt. Or perhaps a pink one? I can always decide so with difficulty. This pink shirt suits me best. So I will take these jeans and these two T-shirts. Can I pay by debit card?',
      notes: '"staat me het best" = suits me best! "pinnen" = paying with debit card & PIN (the standard Dutch way to pay).',
      keyWords: ['beslissen', 'staat me het best', 'nemen', 'pinnen']
    }
  ],
  vocabulary: [
    // Clothes
    {
      id: 'kledingzaak',
      dutch: 'de kledingzaak',
      english: 'clothes shop / boutique',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kledingzaken',
      exampleSentence: 'Sandra koopt een broek in de kledingzaak.',
      exampleEnglish: 'Sandra buys trousers in the clothing store.',
      tip: 'Compound of "de kleding" (clothing) + "de zaak" (store/business).'
    },
    {
      id: 'spijkerbroek',
      dutch: 'de spijkerbroek',
      english: 'jeans / denim trousers',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de spijkerbroeken',
      exampleSentence: 'Ik zoek een lichte spijkerbroek.',
      exampleEnglish: 'I am looking for a light pair of jeans.',
      tip: '"Spijker" literally means nail/rivet (the copper rivets on jeans).'
    },
    {
      id: 'broek',
      dutch: 'de broek',
      english: 'trousers / pants',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de broeken',
      exampleSentence: 'Deze broek zit heel lekker.',
      exampleEnglish: 'These trousers fit very comfortably.'
    },
    {
      id: 'tshirt',
      dutch: 'het T-shirt',
      english: 'T-shirt',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de T-shirts',
      exampleSentence: 'Dit roze T-shirt staat me het best.',
      exampleEnglish: 'This pink T-shirt suits me best.'
    },
    {
      id: 'trui',
      dutch: 'de trui',
      english: 'jumper / sweater / pullover',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de truien',
      exampleSentence: 'In de winter draag ik een warme trui.',
      exampleEnglish: 'In winter I wear a warm sweater.'
    },
    {
      id: 'bloes',
      dutch: 'de bloes',
      english: 'blouse',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bloezen',
      exampleSentence: 'Zij draagt een witte bloes naar haar werk.',
      exampleEnglish: 'She wears a white blouse to her work.'
    },
    {
      id: 'overhemd',
      dutch: 'het overhemd',
      english: 'men\'s shirt / dress shirt',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de overhemden',
      exampleSentence: 'Hij draagt een gestreept overhemd.',
      exampleEnglish: 'He is wearing a striped shirt.'
    },
    {
      id: 'rok',
      dutch: 'de rok',
      english: 'skirt',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de rokken',
      exampleSentence: 'Hebt u deze rok ook een maat groter?',
      exampleEnglish: 'Do you also have this skirt one size larger?'
    },
    {
      id: 'jurk',
      dutch: 'de jurk',
      english: 'dress',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de jurken',
      exampleSentence: 'Zij zoekt een mooie zwarte jurk voor het feest.',
      exampleEnglish: 'She is looking for a nice black dress for the party.'
    },
    {
      id: 'jas',
      dutch: 'de jas',
      english: 'coat / jacket',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de jassen',
      exampleSentence: 'Trek je warme jas aan, het is koud buiten.',
      exampleEnglish: 'Put on your warm coat, it is cold outside.'
    },
    {
      id: 'schoenen',
      dutch: 'de schoenen',
      english: 'shoes',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de schoenen',
      exampleSentence: 'Waar kan ik deze schoenen passen?',
      exampleEnglish: 'Where can I try on these shoes?'
    },
    {
      id: 'pak',
      dutch: 'het pak',
      english: 'suit',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de pakken',
      exampleSentence: 'De directeur draagt altijd een donkerblauw pak.',
      exampleEnglish: 'The director always wears a dark blue suit.'
    },

    // Colors & Patterns
    {
      id: 'wit',
      dutch: 'wit',
      english: 'white',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Ik neem een wit T-shirt.',
      exampleEnglish: 'I will take a white T-shirt.'
    },
    {
      id: 'zwart',
      dutch: 'zwart',
      english: 'black',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Hebt u deze broek ook in het zwart?',
      exampleEnglish: 'Do you also have these trousers in black?'
    },
    {
      id: 'grijs',
      dutch: 'grijs',
      english: 'grey',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Hij heeft een grijze trui.',
      exampleEnglish: 'He has a grey sweater.'
    },
    {
      id: 'rood',
      dutch: 'rood',
      english: 'red',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zij kiest een rode bloes.',
      exampleEnglish: 'She chooses a red blouse.'
    },
    {
      id: 'blauw',
      dutch: 'blauw',
      english: 'blue',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Sandra wil een donkerblauwe broek.',
      exampleEnglish: 'Sandra wants dark blue trousers.'
    },
    {
      id: 'geel',
      dutch: 'geel',
      english: 'yellow',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Geel is een vrolijke kleur voor de zomer.',
      exampleEnglish: 'Yellow is a cheerful colour for summer.'
    },
    {
      id: 'groen',
      dutch: 'groen',
      english: 'green',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Hij koopt een lichtgroen shirt.',
      exampleEnglish: 'He buys a light green shirt.'
    },
    {
      id: 'bruin',
      dutch: 'bruin',
      english: 'brown',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'De verkoper draagt donkerbruine schoenen.',
      exampleEnglish: 'The salesman wears dark brown shoes.'
    },
    {
      id: 'paars',
      dutch: 'paars',
      english: 'purple',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Vind je paars een mooie kleur?',
      exampleEnglish: 'Do you think purple is a pretty colour?'
    },
    {
      id: 'roze',
      dutch: 'roze',
      english: 'pink',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Dit roze shirt staat me het best.',
      exampleEnglish: 'This pink shirt suits me best.'
    },
    {
      id: 'oranje',
      dutch: 'oranje',
      english: 'orange (national colour of the Netherlands)',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Op Koningsdag draagt iedereen oranje.',
      exampleEnglish: 'On King\'s Day everyone wears orange.'
    },
    {
      id: 'gestreept',
      dutch: 'gestreept',
      english: 'striped',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zij zoekt een gestreepte trui.',
      exampleEnglish: 'She is looking for a striped jumper.'
    },
    {
      id: 'geruit',
      dutch: 'geruit',
      english: 'checkered / plaid',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Mijn vader draagt een geruit overhemd.',
      exampleEnglish: 'My father wears a checkered shirt.'
    },
    {
      id: 'gebloemd',
      dutch: 'gebloemd',
      english: 'flowered / floral',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zij heeft een gebloemde jurk gekocht.',
      exampleEnglish: 'She bought a floral dress.'
    },
    {
      id: 'effen',
      dutch: 'effen',
      english: 'plain / solid (one solid colour)',
      category: 'kleuren',
      partOfSpeech: 'adjective',
      exampleSentence: 'Ik houd meer van effen kleren dan van drukke prints.',
      exampleEnglish: 'I prefer plain clothes to busy prints.'
    },

    // Shopping & Verbs
    {
      id: 'de_maat',
      dutch: 'de maat',
      english: 'size',
      category: 'winkelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de maten',
      exampleSentence: 'Welke maat hebt u? Maat 40.',
      exampleEnglish: 'What size do you have? Size 40.'
    },
    {
      id: 'paskamer',
      dutch: 'de paskamer',
      english: 'fitting room / changing cubicle',
      category: 'winkelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de paskamers',
      exampleSentence: 'Daar achterin zijn de paskamers.',
      exampleEnglish: 'In the back over there are the fitting rooms.'
    },
    {
      id: 'passen',
      dutch: 'passen',
      english: 'to try on / to fit',
      category: 'winkelen',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik deze trui even passen?',
      exampleEnglish: 'May I try on this sweater for a moment?'
    },
    {
      id: 'staan',
      dutch: 'staan (staat goed / staat het best)',
      english: 'to suit / to look good on someone',
      category: 'winkelen',
      partOfSpeech: 'verb',
      exampleSentence: 'Deze kleur staat jou geweldig!',
      exampleEnglish: 'This colour suits you amazingly!'
    },
    {
      id: 'zitten',
      dutch: 'zitten (zit goed / zit lekker)',
      english: 'to fit / to feel comfortable (clothes)',
      category: 'winkelen',
      partOfSpeech: 'verb',
      exampleSentence: 'Hoe zit de broek? Hij zit perfect.',
      exampleEnglish: 'How do the trousers fit? They fit perfectly.'
    },
    {
      id: 'wijd',
      dutch: 'wijd',
      english: 'wide / baggy / loose',
      category: 'winkelen',
      partOfSpeech: 'adjective',
      exampleSentence: 'Deze broek is mij te wijd.',
      exampleEnglish: 'These trousers are too loose/wide for me.'
    },
    {
      id: 'strak',
      dutch: 'strak',
      english: 'tight / slim-fitting',
      category: 'winkelen',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zij zoekt een strak model.',
      exampleEnglish: 'She is looking for a tight/fitted model.'
    },
    {
      id: 'ruilen',
      dutch: 'ruilen',
      english: 'to exchange',
      category: 'winkelen',
      partOfSpeech: 'verb',
      exampleSentence: 'Kan ik dit kledingstuk ruilen met de bon?',
      exampleEnglish: 'Can I exchange this garment with the receipt?'
    },
    {
      id: 'de_bon',
      dutch: 'de bon',
      english: 'receipt / proof of purchase',
      category: 'winkelen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bonnen',
      exampleSentence: 'Bewaar de bon goed als u wilt ruilen.',
      exampleEnglish: 'Keep the receipt safe if you want to exchange.'
    },
    {
      id: 'pinnen',
      dutch: 'pinnen',
      english: 'to pay by debit card with PIN',
      category: 'winkelen',
      partOfSpeech: 'verb',
      exampleSentence: 'Kan ik hier pinnen? Ja, natuurlijk.',
      exampleEnglish: 'Can I pay by card here? Yes, of course.'
    },
    {
      id: 'het_spijt_me',
      dutch: 'het spijt me',
      english: 'I am sorry',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Het spijt me, we hebben geen maat 38 meer.',
      exampleEnglish: 'I am sorry, we don\'t have size 38 anymore.'
    },
    {
      id: 'beslissen',
      dutch: 'beslissen',
      english: 'to decide',
      category: 'conversatie',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik kan altijd zo moeilijk beslissen.',
      exampleEnglish: 'I always find it so hard to make up my mind.'
    }
  ],
  grammarPoints: [
    {
      id: 'comparatief_superlatief',
      title: '7.7 Trappen van vergelijking (Comparatief & Superlatief)',
      summary: 'Hoe je dingen vergelijkt: -er (dan) en het -st.',
      ruleExplanation: `In het Nederlands maak je vergelijkingen met:
1. Regelmatige vorm:
   • Stellende trap: klein, groot, duur
   • Vergrotende trap (+er): kleiner dan, groter dan, duurder dan
   • Overtreffende trap (het +st): het kleinst, het grootst, het duurst
   • Gelijkheid: even ... als ("even klein als", "even duur als")

2. Onregelmatige vormen (belangrijk uit je hoofd leren!):
   • goed -> beter (dan) -> het best (even goed als)
   • veel -> meer (dan) -> het meest (even veel als)
   • weinig -> minder (dan) -> het minst (even weinig als)
   • graag -> liever (dan) -> het liefst (even graag als)

Let op spelling:
• groot -> groter (één 'o' valt weg in open lettergreep)
• duur -> duurder ('d' ertussen bij woorden op -r)`,
      examples: [
        {
          dutch: 'Deze broek zit beter dan die andere broek.',
          english: 'These trousers fit better than that other pair.',
          note: 'Onregelmatig: goed -> beter dan.'
        },
        {
          dutch: 'Dit roze shirt staat me het best.',
          english: 'This pink shirt suits me best.',
          note: 'Overtreffende trap: het best.'
        },
        {
          dutch: 'Mijn broer is groter dan ik.',
          english: 'My brother is taller than me.',
          note: 'Vergelijking met "dan".'
        },
        {
          dutch: 'Mijn kamer is even groot als jouw kamer.',
          english: 'My room is just as big as your room.',
          note: 'Gelijkheid met "even ... als".'
        }
      ]
    },
    {
      id: 'demonstratief_pronomen',
      title: '7.8 Demonstratief Pronomen (Deze, die, dit, dat)',
      summary: 'Aanwijzen dichtbij (hier) en veraf (daar).',
      ruleExplanation: `Gebruik demonstratieve voornaamwoorden om dingen aan te wijzen:

1. De-woorden en Pluralis (Meervoud):
   • Dichtbij (hier): DEZE ("deze broek", "deze schoenen")
   • Veraf (daar): DIE ("die broek", "die schoenen")
   -> Tip: Ze eindigen allebei op -e, net zoals 'de'!

2. Het-woorden (Enkelvoud):
   • Dichtbij (hier): DIT ("dit shirt", "dit boek")
   • Veraf (daar): DAT ("dat shirt", "dat boek")
   -> Tip: Ze eindigen allebei op -t, net zoals 'het'!

Voorbeeld:
• "Ik neem deze broek (hier) en niet die broek (daar)."
• "Dit T-shirt (hier) is mooier dan dat T-shirt (daar)."`,
      examples: [
        {
          dutch: 'Deze broek zit beter dan die andere broek.',
          english: 'These trousers (here) fit better than those trousers (there).',
          note: 'De-woord: deze vs die.'
        },
        {
          dutch: 'Dit roze shirt staat me het best.',
          english: 'This pink shirt (here) suits me best.',
          note: 'Het-woord: dit shirt.'
        },
        {
          dutch: 'Kijk, dat boek vind ik leuker.',
          english: 'Look, that book (over there) I find nicer.',
          note: 'Het-woord veraf: dat.'
        }
      ]
    },
    {
      id: 'objectvorm_pronomen',
      title: '7.9 Objectvorm van het Persoonlijk Voornaamwoord',
      summary: 'Mij/me, jou/je, hem, haar, het, ons, jullie, hen/ze.',
      ruleExplanation: `Wanneer een persoon of ding het lijdend voorwerp (direct object) of meewerkend voorwerp is, verandert de vorm:

Onderwerp (Subject) -> Voorwerp (Object):
• ik -> mij / me (mij met klemtoon)
• jij / je -> jou / je (jou met klemtoon)
• u -> u
• hij -> hem
• zij / ze -> haar
• het -> het
• wij / we -> ons
• jullie -> jullie
• zij / ze -> hen / ze / hun (bij dingen: ze)

Speciale regel voor niet-personen (dingen):
• de-woord ("de fiets"): "Dit is mijn nieuwe fiets. Ik heb hem pas drie weken." (gebruik 'hem'!)
• het-woord ("het boek"): "Dit is een goed boek. Ik koop het voor mijn vriendin." (gebruik 'het'!)
• meervoud ("de schoenen"): "Dat zijn leuke schoenen! Mag ik ze even passen?" (gebruik 'ze'!)`,
      examples: [
        {
          dutch: 'Kan ik jullie helpen? - Kunt u mij helpen?',
          english: 'Can I help you guys? - Could you help me?',
          note: 'jullie en mij als object.'
        },
        {
          dutch: 'Ik vind hem een beetje wijd. Hebt u hem in een kleinere maat?',
          english: 'I find it (de broek) a bit loose. Do you have it in a smaller size?',
          note: '"hem" verwijst naar de broek (de-woord).'
        },
        {
          dutch: 'Dit roze shirt staat me het best.',
          english: 'This pink shirt suits me best.',
          note: '"me" als object.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1',
      title: 'Opdracht 1: Begrip van de dialoog',
      instruction: 'Kies het goede vervolg: a of b (bladzijde 98).',
      items: [
        {
          id: 1,
          prompt: 'Sandra wil...',
          answer: 'a: een spijkerbroek kopen.',
          options: ['a: een spijkerbroek kopen.', 'b: alleen even kijken.'],
          explanation: 'Sandra zegt tegen de verkoopster: "Ik zoek een spijkerbroek." Het meisje en de jongen wilden alleen even kijken.'
        },
        {
          id: 2,
          prompt: 'Sandra heeft...',
          answer: 'b: maat 40.',
          options: ['a: maat 42.', 'b: maat 40.'],
          explanation: 'Sandra zegt: "Ik heb normaal maat 40, soms groter."'
        },
        {
          id: 3,
          prompt: 'Sandra past...',
          answer: 'a: twee spijkerbroeken.',
          options: ['a: twee spijkerbroeken.', 'b: een lichte spijkerbroek.'],
          explanation: 'De verkoopster geeft haar twee spijkerbroeken van twee verschillende merken om te passen.'
        },
        {
          id: 4,
          prompt: 'Sandra vindt de tweede broek...',
          answer: 'a: een beetje wijd.',
          options: ['a: een beetje wijd.', 'b: een beetje klein.'],
          explanation: 'Sandra zegt: "Ik vind hem wel een beetje wijd. Hebt u hem in een kleinere maat?"'
        },
        {
          id: 5,
          prompt: 'Sandra koopt uiteindelijk...',
          answer: 'a: een wit en een roze T-shirt.',
          options: ['a: een wit en een roze T-shirt.', 'b: een wit, een rood en een roze T-shirt.'],
          explanation: 'Ze twijfelde over rood, maar koos het roze shirt omdat dit haar het best staat. Ze koopt dus wit en roze.'
        }
      ]
    },
    {
      id: 'opdracht_5',
      title: 'Opdracht 5: Modale werkwoorden invullen',
      instruction: 'Vul een vorm in van mogen, willen, moeten, kunnen of zullen (bladzijde 101).',
      items: [
        {
          id: 1,
          prompt: '_______ ik u helpen? - Nee, ik kijk alleen even.',
          subPrompt: 'Keuze: Kan of Mag',
          answer: 'Kan',
          acceptableAnswers: ['Mag', 'kan', 'mag'],
          options: ['Kan', 'Moet', 'Zal', 'Mag'],
          explanation: '"Kan ik u helpen?" of "Mag ik u helpen?" is de standaard beleefde begroeting in een winkel.'
        },
        {
          id: 2,
          prompt: '_______ u een donkere of een lichte spijkerbroek? - Liever een lichte.',
          subPrompt: 'Keuze: Wilt',
          answer: 'Wilt',
          acceptableAnswers: ['wilt'],
          options: ['Wilt', 'Moet', 'Mag', 'Kunt'],
          explanation: 'Vragen naar de wens van de klant doe je met "Wilt u...?"'
        },
        {
          id: 3,
          prompt: 'Dat is dan € 44,90. - _______ ik pinnen?',
          subPrompt: 'Keuze: Kan of Mag',
          answer: 'Kan',
          acceptableAnswers: ['Mag', 'kan', 'mag'],
          options: ['Kan', 'Zal', 'Moet', 'Mag'],
          explanation: '"Kan ik pinnen?" of "Mag ik pinnen?" is de gebruikelijke vraag bij het afrekenen.'
        },
        {
          id: 4,
          prompt: 'Hebt u deze broek in het zwart? - Ik _______ even kijken.',
          subPrompt: 'Belofte: zal',
          answer: 'zal',
          acceptableAnswers: ['Zal'],
          options: ['zal', 'moet', 'kan', 'wil'],
          explanation: '"Ik zal even kijken" drukt een belofte of toezegging uit van de verkoopster.'
        },
        {
          id: 5,
          prompt: 'Misschien is dit shirt te groot. - U _______ het wel even passen.',
          subPrompt: 'Mogelijkheid: kunt',
          answer: 'kunt',
          acceptableAnswers: ['Kunt'],
          options: ['kunt', 'moet', 'wilt', 'zult'],
          explanation: '"U kunt het wel even passen" geeft de mogelijkheid aan.'
        },
        {
          id: 6,
          prompt: 'Zit deze broek goed? - Nee, ik _______ een kleinere maat hebben.',
          subPrompt: 'Noodzaak: moet',
          answer: 'moet',
          acceptableAnswers: ['Moet'],
          options: ['moet', 'mag', 'kan', 'zal'],
          explanation: 'Als een kledingstuk niet past, "moet" je een andere maat hebben.'
        },
        {
          id: 7,
          prompt: '_______ ik deze trui nemen? - Hij staat je goed.',
          subPrompt: 'Toestemming/advies: Mag of Kan',
          answer: 'Mag',
          acceptableAnswers: ['Kan', 'mag', 'kan'],
          options: ['Mag', 'Kan', 'Moet', 'Zal'],
          explanation: '"Mag ik deze trui nemen?" of "Zal ik deze trui nemen?" vraagt om advies.'
        },
        {
          id: 8,
          prompt: '_______ u deze trui in maat 38 bestellen? - Ja, dat kan.',
          subPrompt: 'Beleefd verzoek: Kunt of Wilt',
          answer: 'Kunt',
          acceptableAnswers: ['Wilt', 'kunt', 'wilt'],
          options: ['Kunt', 'Wilt', 'Moet', 'Mag'],
          explanation: '"Kunt u... bestellen?" of "Wilt u... bestellen?" vraagt de winkelier om iets te doen.'
        }
      ]
    },
    {
      id: 'opdracht_6',
      title: 'Opdracht 6: Trappen van vergelijking',
      instruction: 'Kies het goede woord (comparatief of superlatief, bladzijde 102).',
      items: [
        {
          id: 1,
          prompt: 'Vind je rood mooi of _______ dan blauw?',
          answer: 'mooier',
          options: ['mooi', 'mooier'],
          explanation: 'Er staat "dan", dus we gebruiken de vergrotende trap (comparatief): mooier dan.'
        },
        {
          id: 2,
          prompt: 'Is les 6 leuker of _______ dan les 7?',
          answer: 'leuker',
          options: ['leuker', 'het leukst'],
          explanation: 'Bij een vergelijking tussen twee lessen met "dan" gebruik je "leuker".'
        },
        {
          id: 3,
          prompt: 'Vind je paella lekker of _______?',
          answer: 'lekkerder',
          options: ['lekker', 'lekkerder'],
          explanation: 'Vergelijking van smaak: lekkerder.'
        },
        {
          id: 4,
          prompt: 'Welke cursist is vaker of _______ in de les?',
          answer: 'het vaakst',
          options: ['vaker', 'het vaakst'],
          explanation: 'Van de hele groep cursisten zoek je de overtreffende trap: het vaakst.'
        },
        {
          id: 5,
          prompt: 'Welke spijkerbroek is goedkoop of _______?',
          answer: 'het goedkoopst',
          options: ['goedkoper', 'het goedkoopst'],
          explanation: 'Tussen alle broeken vraag je naar de meest voordelige: het goedkoopst.'
        },
        {
          id: 6,
          prompt: 'Zijn de tomaten op de markt rood of _______ dan in de winkel?',
          answer: 'roder',
          options: ['rood', 'roder'],
          explanation: 'Vergelijking met "dan": roder dan in de winkel.'
        },
        {
          id: 7,
          prompt: 'Vind je een laag model prettiger of _______ dan een hoog model?',
          answer: 'prettiger',
          options: ['prettiger', 'het prettigst'],
          explanation: 'Twee modellen worden vergeleken met "dan": prettiger dan.'
        },
        {
          id: 8,
          prompt: 'Is de cappuccino duurder of _______?',
          answer: 'het duurst',
          options: ['duurder', 'het duurst'],
          explanation: 'Vragen of iets van alle dranken de hoogste prijs heeft: het duurst.'
        },
        {
          id: 9,
          prompt: 'Spreek je _______ Engels dan Nederlands?',
          answer: 'beter',
          options: ['beter', 'het best'],
          explanation: 'Goed -> beter dan (onregelmatig comparatief).'
        },
        {
          id: 10,
          prompt: 'Houd je _______ van groente dan van fruit?',
          answer: 'meer',
          options: ['meer', 'het meest'],
          explanation: 'Veel -> meer dan (onregelmatig comparatief).'
        }
      ]
    },
    {
      id: 'opdracht_8',
      title: 'Opdracht 8: Demonstratief pronomen (deze, die, dit, dat)',
      instruction: 'Vul in: deze, die, dit of dat (bladzijde 104).',
      items: [
        {
          id: 1,
          prompt: 'Neem je _______ rode paprika of _______ groene?',
          subPrompt: 'paprika = de-woord',
          answer: 'deze, die',
          acceptableAnswers: ['deze, die', 'deze / die', 'deze die'],
          explanation: 'Paprika is een de-woord. Dichtbij is "deze", veraf is "die".'
        },
        {
          id: 2,
          prompt: 'Ik neem _______ bril. _______ andere bril staat me niet.',
          subPrompt: 'bril = de-woord',
          answer: 'deze, die',
          acceptableAnswers: ['deze, die', 'deze die'],
          explanation: 'Bril is een de-woord: "deze bril" en "die andere bril".'
        },
        {
          id: 3,
          prompt: 'Ober, _______ biefstuk is niet vers!',
          subPrompt: 'biefstuk = de-woord',
          answer: 'deze',
          options: ['deze', 'dit', 'die', 'dat'],
          explanation: 'Biefstuk is een de-woord (ligt hier op mijn bord): "deze biefstuk".'
        },
        {
          id: 4,
          prompt: 'Wie is _______ docent, daar in de kantine?',
          subPrompt: 'docent = de-woord, staat daar veraf',
          answer: 'die',
          options: ['die', 'deze', 'dat', 'dit'],
          explanation: 'Omdat de docent "daar" in de kantine staat, gebruik je "die".'
        },
        {
          id: 5,
          prompt: 'Ik houd van ijs, maar _______ ijs vind ik niet lekker.',
          subPrompt: 'ijs = het-woord',
          answer: 'dit',
          options: ['dit', 'dat', 'deze', 'die'],
          explanation: 'IJs is een het-woord: "dit ijs".'
        },
        {
          id: 6,
          prompt: 'Kijk, _______ boek vind ik leuker.',
          subPrompt: 'boek = het-woord',
          answer: 'dat',
          acceptableAnswers: ['dit', 'dat'],
          options: ['dat', 'dit', 'die', 'deze'],
          explanation: 'Boek is een het-woord: "dat boek" of "dit boek".'
        },
        {
          id: 7,
          prompt: 'Ik stop! _______ tekst is te moeilijk!',
          subPrompt: 'tekst = de-woord',
          answer: 'deze',
          options: ['deze', 'dit', 'die', 'dat'],
          explanation: 'Tekst is een de-woord: "deze tekst".'
        },
        {
          id: 8,
          prompt: 'Ik betaal _______ rondje. Wat wil je drinken?',
          subPrompt: 'rondje (diminutief) = het-woord',
          answer: 'dit',
          options: ['dit', 'dat', 'deze', 'die'],
          explanation: 'Alle verkleinwoorden zijn het-woorden: "dit rondje".'
        }
      ]
    },
    {
      id: 'opdracht_11',
      title: 'Opdracht 11: Objectvorm van het personaal pronomen',
      instruction: 'Vul een persoonlijk voornaamwoord in als object (bladzijde 106).',
      items: [
        {
          id: 1,
          prompt: 'Wat een leuke broek! Kan ik _______ even passen?',
          subPrompt: 'broek = de-woord',
          answer: 'hem',
          options: ['hem', 'het', 'haar', 'ze'],
          explanation: 'Voor de-woorden (niet-personen) gebruik je "hem": Kan ik hem even passen?'
        },
        {
          id: 2,
          prompt: 'Mevrouw, ik heb een vraag. Kunt u _______ helpen?',
          subPrompt: 'spreker is "ik"',
          answer: 'mij',
          acceptableAnswers: ['me', 'mij'],
          options: ['mij', 'me', 'hem', 'ons'],
          explanation: 'Objectvorm van "ik" is "mij" of "me".'
        },
        {
          id: 3,
          prompt: 'Patricia woont hier ook. Ik kom _______ vaak tegen.',
          subPrompt: 'Patricia is vrouwelijk',
          answer: 'haar',
          options: ['haar', 'hem', 'ze', 'me'],
          explanation: 'Patricia is vrouwelijk: "Ik kom haar vaak tegen."'
        },
        {
          id: 4,
          prompt: 'Ik heb dit shirt nog in een kleinere maat. Ik zal _______ even halen.',
          subPrompt: 'shirt = het-woord',
          answer: 'het',
          options: ['het', 'hem', 'ze', 'haar'],
          explanation: 'Voor het-woorden gebruik je "het" als object.'
        },
        {
          id: 5,
          prompt: 'Waar zijn Jenny en Johan? Ik haal _______ uit de kantine.',
          subPrompt: 'meervoud personen',
          answer: 'ze',
          acceptableAnswers: ['hen', 'ze'],
          options: ['ze', 'hen', 'hem', 'ons'],
          explanation: 'Meervoud van personen als lijdend voorwerp is "hen" of "ze".'
        },
        {
          id: 6,
          prompt: 'Ik houd van tomaten. Ik koop _______ altijd op de markt.',
          subPrompt: 'tomaten = meervoud',
          answer: 'ze',
          options: ['ze', 'hem', 'het', 'haar'],
          explanation: 'Voor meervoudige dingen gebruik je "ze".'
        },
        {
          id: 7,
          prompt: 'Wij spreken geen Nederlands! Wie kan _______ helpen?',
          subPrompt: 'onderwerp is "wij"',
          answer: 'ons',
          options: ['ons', 'jullie', 'me', 'hen'],
          explanation: 'Objectvorm van "wij" is "ons".'
        },
        {
          id: 8,
          prompt: 'Wat een leuk boek! Ik ga _______ ook kopen.',
          subPrompt: 'boek = het-woord',
          answer: 'het',
          options: ['het', 'hem', 'ze', 'haar'],
          explanation: 'Boek is een het-woord: "Ik ga het ook kopen."'
        }
      ]
    },
    {
      id: 'opdracht_14',
      title: 'Opdracht 14: Begripstekst Jos Schomaker',
      instruction: 'Zijn de volgende zinnen waar of niet waar over de tekst op blz. 107?',
      items: [
        {
          id: 1,
          prompt: '"De trui van Jos Schomaker is oud."',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: "Ik heb deze trui al twintig jaar."'
        },
        {
          id: 2,
          prompt: '"Na het wassen zit de trui niet goed."',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: De tekst zegt juist: "na een week in de wasmachine komt hij weer mooi in model."'
        },
        {
          id: 3,
          prompt: '"Jos Schomaker moet de collectie voor de lente kopen."',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: De tekst zegt: "Op het moment moet ik de collectie voor het najaar kopen."'
        }
      ]
    }
  ],
  readingText: {
    title: '7.9 Tekst: Mijn favoriete kledingstuk',
    subtitle: 'Jos Schomaker en zijn wollen trui (Blz. 107)',
    content: `Jos Schomaker werkt al jarenlang in de modebranche. Als inkoper voor een grote kledingzaak bezoekt hij modeshows in Parijs, Milaan en Amsterdam. "Op het moment moet ik de collectie voor het najaar kopen," vertelt Jos. "Ik zoek naar warme jassen, stijlvolle pantalons en wollen truien in herfstkleuren zoals bordeauxrood, olijfgroen en donkerblauw."

Toch draagt Jos zelf het liefst kleren die al heel oud zijn. Zijn absolute favoriet is een donkerblauwe wollen trui van zuiver scheerwol. "Ik heb deze trui al twintig jaar," lacht hij trots. "Toen ik hem kocht, was hij best duur, maar de kwaliteit is onovertroffen."

"Veel moderne truien verliezen na een paar wasbeurten hun vorm of gaan pluizen. Maar deze trui zit na al die jaren nog altijd als gegoten. Zelfs na een week intensief dragen en een voorzichtige was op het wolwasprogramma komt hij weer prachtig in model. Goede kleding hoef je niet elk seizoen weg te gooien."`,
    vocabularyNotes: [
      { word: 'de modebranche', translation: 'fashion industry' },
      { word: 'de inkoper', translation: 'buyer / purchasing agent' },
      { word: 'het najaar', translation: 'autumn / fall' },
      { word: 'zuiver scheerwol', translation: 'pure virgin wool' },
      { word: 'als gegoten zitten', translation: 'to fit like a glove' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat is het beroep van Jos Schomaker?',
        answer: 'Inkoper in de modebranche',
        options: [
          'Inkoper in de modebranche',
          'Fietsenmaker in Amsterdam',
          'Kelner in een café'
        ],
        explanation: 'Jos koopt collecties in voor een grote kledingwinkel.'
      },
      {
        id: 2,
        prompt: 'Hoe oud is de favoriete donkerblauwe wollen trui van Jos?',
        answer: 'Al twintig jaar oud',
        options: [
          'Al twintig jaar oud',
          'Slechts twee maanden oud',
          'Vorige week nieuw gekocht'
        ],
        explanation: 'Jos heeft deze trui al 20 jaar en draagt hem nog steeds.'
      },
      {
        id: 3,
        prompt: 'Wat gebeurt er met de trui na een voorzichtige wasbeurt?',
        answer: 'Hij komt weer mooi in model en zit perfect',
        options: [
          'Hij komt weer mooi in model en zit perfect',
          'Hij krimpt helemaal en past niet meer',
          'Hij verliest zijn kleur en wordt wit'
        ],
        explanation: 'Dankzij de hoge kwaliteit scheerwol komt de trui direct weer mooi in vorm.'
      }
    ]
  },
  pronunciation: {
    title: '7.10 Uitspraak: ei/ij – ie',
    soundFocus: 'Tweeklank "ei / ij" vs pure klinker "ie"',
    explanation: 'De klank "ei / ij" (de korte ei en lange ij klinken identiek in modern Nederlands!) klinkt als een glijdende tweeklank (zoals in "grijs", "trein", "kledingzaak"). Verwar deze niet met de pure klinker "ie" (zoals in "niet", "vier", "dier").',
    wordList: [
      'grijs', 'gries', 'wijd', 'wied', 'prijs', 'pries', 'kijken', 'kliek', 'klein', 'kien', 'blijven', 'blik', 'reizen', 'rijzen'
    ],
    minimalPairs: [
      { word1: 'grijs', word2: 'gries', contrast: 'ij vs ie' },
      { word1: 'wijd', word2: 'wied', contrast: 'ij vs ie' },
      { word1: 'prijs', word2: 'pries', contrast: 'ij vs ie' },
      { word1: 'klein', word2: 'kien', contrast: 'ei vs ie' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 7: In een kledingzaak',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is het juiste lidwoord voor "spijkerbroek"?',
        options: ['de spijkerbroek', 'het spijkerbroek', 'een spijkerbroek'],
        answer: 'de spijkerbroek',
        explanation: 'Broek is een de-woord, dus "de spijkerbroek".'
      },
      {
        id: 2,
        prompt: 'Welk aanwijzend voornaamwoord gebruik je voor een het-woord dichtbij: "_______ overhemd vind ik heel mooi."',
        options: ['Dit', 'Deze', 'Die', 'Dat'],
        answer: 'Dit',
        explanation: 'Voor een onzijdig woord (het overhemd) dichtbij gebruik je "dit" ("dit overhemd").'
      },
      {
        id: 3,
        prompt: 'Welk aanwijzend voornaamwoord gebruik je voor een de-woord verder weg: "_______ jas daar aan het rek is prachtig."',
        options: ['Die', 'Deze', 'Dat', 'Dit'],
        answer: 'Die',
        explanation: 'Voor een de-woord ver weg gebruik je "die" ("die jas").'
      },
      {
        id: 4,
        prompt: 'Wat is de vergrotende trap (comparatief) van "goed"?',
        options: ['beter', 'goeder', 'best', 'mooier'],
        answer: 'beter',
        explanation: 'Goed is onregelmatig: goed -> beter -> best.'
      },
      {
        id: 5,
        prompt: 'Vul het juiste voornaamwoord als lijdend voorwerp in: "Zie je Jan daar lopen? Roep _______ even!"',
        options: ['hem', 'haar', 'het', 'ze'],
        answer: 'hem',
        explanation: 'Jan is mannelijk; het persoonlijk voornaamwoord als object is "hem".'
      },
      {
        id: 6,
        prompt: 'Vul het juiste voornaamwoord in: "Waar zijn mijn schoenen? Ik kan _______ nergens vinden."',
        options: ['ze', 'hem', 'haar', 'het'],
        answer: 'ze',
        explanation: 'Schoenen is meervoud; als lijdend voorwerp gebruik je "ze".'
      },
      {
        id: 7,
        prompt: 'Wat vraag je aan de verkoopster als je kleding wilt passen?',
        options: [
          'Waar zijn de paskamers?',
          'Hoeveel weegt deze spijkerbroek?',
          'Mag ik een kopje koffie afrekenen?'
        ],
        answer: 'Waar zijn de paskamers?',
        explanation: 'In een paskamer pas je kleding.'
      },
      {
        id: 8,
        prompt: 'Hoe zeg je in het Nederlands dat een kledingstuk de juiste maat heeft en comfortabel is?',
        options: [
          'De broek zit heel goed.',
          'De broek staat heel moe.',
          'De broek loopt heel zwaar.'
        ],
        answer: 'De broek zit heel goed.',
        explanation: 'In het Nederlands "zit" kleding goed of niet goed: "deze broek zit perfect".'
      },
      {
        id: 9,
        prompt: 'Wat is de overtreffende trap (superlatief) van "duur"?',
        options: ['het duurst', 'duurder', 'het meeste duur', 'duurstens'],
        answer: 'het duurst',
        explanation: 'De overtreffende trap van duur is "het duurst" (of "de duurste").'
      },
      {
        id: 10,
        prompt: 'Wat betekent "Alleen even kijken" als een verkoopster je vraagt of ze kan helpen?',
        options: [
          'Ik ben gewoon aan het rondkijken (just browsing).',
          'Ik ben mijn bril vergeten.',
          'Ik wil direct de winkel verlaten.'
        ],
        answer: 'Ik ben gewoon aan het rondkijken (just browsing).',
        explanation: '"Even kijken" is het typische Nederlandse antwoord als je nog geen hulp nodig hebt.'
      }
    ]
  },
  culturalOrPracticalNote: 'Winkelen in Nederland: In Nederland is "pinnen" (betalen met je bankpas) de standaard; veel kledingwinkels accepteren liever geen contant geld ("pin only / alleen pinnen"). Vraag altijd: "Mag ik pinnen?". Ruilen mag meestal binnen 14 of 30 dagen als je de kassabon bewaart!'
};

