import { CustomLessonData } from '../types/lesson';

export const CHAPTER_6_DATA: CustomLessonData = {
  id: 'hoofdstuk_6',
  chapterNumber: 'Hoofdstuk 6',
  chapterTitle: 'In een restaurant',
  description: 'Eten in een restaurant, menukaart lezen (voor-, hoofd-, nagerecht), bestek benoemen (mes, vork, lepel), je mening geven over eten (heerlijk, vies, houden van), modale werkwoorden (kunnen, willen, moeten, mogen, zullen), en fooi geven.',
  language: 'Nederlands',
  createdAt: 1727680000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Serveerster',
      dutch: 'Goedenavond, twee personen?',
      english: 'Good evening, two persons?',
      notes: 'Standaard begroeting in een restaurant.',
      keyWords: ['goedenavond', 'twee personen']
    },
    {
      id: 2,
      speaker: 'Jasper',
      dutch: 'Ja, hebt u een tafel voor ons? Mogen we bij het raam zitten?',
      english: 'Yes, do you have a table for us? May we sit by the window?',
      notes: '"Mogen" = may (toestemming vragen). "bij het raam" = by the window.',
      keyWords: ['tafel voor ons', 'mogen', 'bij het raam']
    },
    {
      id: 3,
      speaker: 'Serveerster',
      dutch: 'Ja hoor, jullie kunnen daar gaan zitten. Hier is de menukaart. Willen jullie alvast iets te drinken bestellen?',
      english: 'Yes of course, you can sit over there. Here is the menu. Would you like to order something to drink in the meantime?',
      notes: '"de menukaart" = menu. "alvast" = in the meantime / already.',
      keyWords: ['kunnen', 'menukaart', 'alvast', 'drinken bestellen']
    },
    {
      id: 4,
      speaker: 'Jasper',
      dutch: 'Mag ik een mineraalwater alstublieft? Ik heb dorst.',
      english: 'May I have a mineral water please? I am thirsty.',
      notes: '"Ik heb dorst" (letterlijk: ik heb dorst) is het vaste Nederlandse idioom.',
      keyWords: ['mineraalwater', 'ik heb dorst']
    },
    {
      id: 5,
      speaker: 'Christine',
      dutch: 'Voor mij ook graag. Ik heb honger, ik wil ook graag een voorgerecht en misschien een nagerecht.',
      english: 'For me too please. I am hungry, I would also like a starter and maybe a dessert.',
      notes: '"Ik heb honger" = I am hungry. "het voorgerecht" = starter, "het nagerecht / toetje" = dessert.',
      keyWords: ['ik heb honger', 'voorgerecht', 'nagerecht']
    },
    {
      id: 6,
      speaker: 'Jasper',
      dutch: 'Als hoofdgerecht wil ik de biefstuk met frietjes. En wat wil jij?',
      english: 'As a main course I want the steak with chips / fries. And what do you want?',
      notes: '"het hoofdgerecht" = main course. "biefstuk met frietjes" = steak and chips.',
      keyWords: ['hoofdgerecht', 'biefstuk met frietjes']
    },
    {
      id: 7,
      speaker: 'Christine',
      dutch: 'Ik wil geen vlees, doe toch maar de vegetarische dagschotel. Moeten we het nagerecht nu al kiezen?',
      english: 'I don\'t want meat, just make it the vegetarian daily special. Do we have to choose dessert already now?',
      notes: '"geen vlees" = no meat. "de dagschotel" = daily special. "Moeten" = to have to.',
      keyWords: ['geen vlees', 'vegetarische dagschotel', 'moeten kiezen']
    },
    {
      id: 8,
      speaker: 'Serveerster',
      dutch: 'Alstublieft, een mosterdsoep en een Spaanse salade. Eet smakelijk! O, jullie hebben alleen een mes en een vork. Momentje, ik moet even een lepel halen.',
      english: 'Here you are, a mustard soup and a Spanish salad. Bon appétit / Enjoy your meal! Oh, you only have a knife and fork. Just a moment, I must fetch a spoon.',
      notes: '"Eet smakelijk!" is de universele Nederlandse wens bij eten! Bestek: het mes, de vork, de lepel.',
      keyWords: ['eet smakelijk', 'mes', 'vork', 'lepel']
    },
    {
      id: 9,
      speaker: 'Christine',
      dutch: 'Hoe vind je de soep?',
      english: 'How do you like the soup?',
      notes: '"Hoe vind je...?" = Wat is je mening over...?',
      keyWords: ['hoe vind je']
    },
    {
      id: 10,
      speaker: 'Jasper',
      dutch: 'Heerlijk! En hoe is jouw salade?',
      english: 'Delicious! And how is your salad?',
      notes: '"Heerlijk" = delicious / verrukkelijk.',
      keyWords: ['heerlijk']
    },
    {
      id: 11,
      speaker: 'Christine',
      dutch: 'Hm, het gaat wel. Ik houd niet zo van mosselen. Proef maar wat.',
      english: 'Hm, it\'s okay. I don\'t really like mussels. Have a taste.',
      notes: '"houden van" = to like / love. "proeven" = to taste.',
      keyWords: ['het gaat wel', 'houden van', 'proeven']
    },
    {
      id: 12,
      speaker: 'Jasper',
      dutch: 'Mogen we de rekening? Alstublieft, zeventig euro. Laat de rest maar zitten.',
      english: 'May we have the bill? Here you are, seventy euros. Keep the change.',
      notes: '"Laat de rest maar zitten" = Keep the change (de klassieke Nederlandse manier om fooi te geven!).',
      keyWords: ['de rekening', 'laat de rest maar zitten']
    }
  ],
  vocabulary: [
    {
      id: 'het_restaurant',
      dutch: 'het restaurant',
      english: 'restaurant',
      category: 'horeca',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de restaurants',
      exampleSentence: 'We eten vanavond in een gezellig restaurant.',
      exampleEnglish: 'We are eating in a cosy restaurant tonight.'
    },
    {
      id: 'de_menukaart',
      dutch: 'de menukaart',
      english: 'menu',
      category: 'horeca',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de menukaarten',
      exampleSentence: 'Hier is de menukaart, zegt de serveerster.',
      exampleEnglish: 'Here is the menu, says the waitress.'
    },
    {
      id: 'de_ober',
      dutch: 'de ober',
      english: 'waiter',
      category: 'horeca',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de obers',
      exampleSentence: 'De ober brengt twee glazen wijn.',
      exampleEnglish: 'The waiter brings two glasses of wine.'
    },
    {
      id: 'de_serveerster',
      dutch: 'de serveerster',
      english: 'waitress',
      category: 'horeca',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de serveersters',
      exampleSentence: 'De serveerster vraagt of alles naar wens is.',
      exampleEnglish: 'The waitress asks if everything is to your liking.'
    },
    {
      id: 'het_voorgerecht',
      dutch: 'het voorgerecht',
      english: 'starter / appetiser',
      category: 'gangen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de voorgerechten',
      exampleSentence: 'Als voorgerecht neem ik de mosterdsoep.',
      exampleEnglish: 'As a starter I will have the mustard soup.'
    },
    {
      id: 'het_hoofdgerecht',
      dutch: 'het hoofdgerecht',
      english: 'main course',
      category: 'gangen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de hoofdgerechten',
      exampleSentence: 'Het hoofdgerecht is biefstuk met warme groenten.',
      exampleEnglish: 'The main course is steak with hot vegetables.'
    },
    {
      id: 'het_nagerecht',
      dutch: 'het nagerecht (het toetje)',
      english: 'dessert',
      category: 'gangen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de nagerechten / toetjes',
      exampleSentence: 'Wie wil er vanavond een toetje met ijs?',
      exampleEnglish: 'Who would like a dessert with ice cream tonight?'
    },
    {
      id: 'de_dagschotel',
      dutch: 'de dagschotel',
      english: 'daily special / dish of the day',
      category: 'gangen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de dagschotels',
      exampleSentence: 'De vegetarische dagschotel is vandaag lasagne.',
      exampleEnglish: 'The vegetarian daily special today is lasagna.'
    },
    {
      id: 'de_biefstuk',
      dutch: 'de biefstuk',
      english: 'steak',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de biefstukken',
      exampleSentence: 'Hoe wilt u de biefstuk gebakken hebben?',
      exampleEnglish: 'How would you like the steak cooked?'
    },
    {
      id: 'de_frietjes',
      dutch: 'de frietjes (patat)',
      english: 'chips / French fries',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de frietjes / patatten',
      exampleSentence: 'Ik bestel frietjes met mayonaise.',
      exampleEnglish: 'I order chips with mayonnaise.'
    },
    {
      id: 'de_soep',
      dutch: 'de soep',
      english: 'soup',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de soepen',
      exampleSentence: 'De Groningse mosterdsoep is heerlijk warm.',
      exampleEnglish: 'The Groningen mustard soup is deliciously warm.'
    },
    {
      id: 'de_salade',
      dutch: 'de salade',
      english: 'salad',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de salades',
      exampleSentence: 'Een frisse salade smaakt goed in de zomer.',
      exampleEnglish: 'A fresh salad tastes good in summer.'
    },
    {
      id: 'de_mosselen',
      dutch: 'de mosselen',
      english: 'mussels',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de mosselen',
      exampleSentence: 'In Zeeland eten veel mensen mosselen met friet.',
      exampleEnglish: 'In Zeeland many people eat mussels with chips.'
    },
    {
      id: 'het_vlees',
      dutch: 'het vlees',
      english: 'meat',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'het',
      exampleSentence: 'Zij eet al jaren geen vlees meer.',
      exampleEnglish: 'She has not eaten meat for years.'
    },
    {
      id: 'de_vis',
      dutch: 'de vis',
      english: 'fish',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vissen',
      exampleSentence: 'Verse vis is gezond en lekker.',
      exampleEnglish: 'Fresh fish is healthy and delicious.'
    },
    {
      id: 'de_vegetarier',
      dutch: 'de vegetariër',
      english: 'vegetarian',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vegetariërs',
      exampleSentence: 'Hebt u ook gerechten voor vegetariërs?',
      exampleEnglish: 'Do you also have dishes for vegetarians?'
    },
    {
      id: 'het_bestek',
      dutch: 'het bestek',
      english: 'cutlery',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      exampleSentence: 'Op tafel ligt het bestek netjes klaar.',
      exampleEnglish: 'On the table the cutlery is neatly laid out.'
    },
    {
      id: 'het_mes',
      dutch: 'het mes',
      english: 'knife',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de messen',
      exampleSentence: 'Dit mes is erg scherp, snijd voorzichtig.',
      exampleEnglish: 'This knife is very sharp, cut carefully.'
    },
    {
      id: 'de_vork',
      dutch: 'de vork',
      english: 'fork',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vorken',
      exampleSentence: 'Hij eet zijn salade met een vork.',
      exampleEnglish: 'He eats his salad with a fork.'
    },
    {
      id: 'de_lepel',
      dutch: 'de lepel',
      english: 'spoon',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de lepels',
      exampleSentence: 'Mag ik een lepel voor de soep?',
      exampleEnglish: 'May I have a spoon for the soup?'
    },
    {
      id: 'het_bord',
      dutch: 'het bord',
      english: 'plate',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de borden',
      exampleSentence: 'De warme biefstuk ligt op een wit bord.',
      exampleEnglish: 'The hot steak is on a white plate.'
    },
    {
      id: 'het_glas',
      dutch: 'het glas',
      english: 'glass',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de glazen',
      exampleSentence: 'Een glas kraanwater is gratis in veel cafés.',
      exampleEnglish: 'A glass of tap water is free in many cafes.'
    },
    {
      id: 'het_kopje',
      dutch: 'het kopje',
      english: 'cup',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kopjes',
      exampleSentence: 'Wilt u een kopje koffie na het eten?',
      exampleEnglish: 'Would you like a cup of coffee after eating?'
    },
    {
      id: 'het_servet',
      dutch: 'het servet',
      english: 'napkin',
      category: 'tafel',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de servetten',
      exampleSentence: 'Leg het servet op je schoot.',
      exampleEnglish: 'Put the napkin on your lap.'
    },
    {
      id: 'het_mineraalwater',
      dutch: 'het mineraalwater (met / zonder koolzuur)',
      english: 'mineral water (sparkling / still)',
      category: 'drankjes',
      partOfSpeech: 'noun',
      article: 'het',
      exampleSentence: 'Wilt u water met bubbels of zonder koolzuur?',
      exampleEnglish: 'Do you want sparkling water or still water?'
    },
    {
      id: 'het_biertje',
      dutch: 'het biertje',
      english: 'beer',
      category: 'drankjes',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de biertjes',
      exampleSentence: 'Zullen we een koud biertje bestellen?',
      exampleEnglish: 'Shall we order a cold beer?'
    },
    {
      id: 'de_wijn',
      dutch: 'de wijn (rode / witte / rosé)',
      english: 'wine (red / white / rosé)',
      category: 'drankjes',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de wijnen',
      exampleSentence: 'Een droge witte wijn past goed bij vis.',
      exampleEnglish: 'A dry white wine goes well with fish.'
    },
    {
      id: 'eet_smakelijk',
      dutch: 'eet smakelijk!',
      english: 'enjoy your meal! / bon appétit!',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Iedereen wenst elkaar "Eet smakelijk!" voordat ze beginnen.',
      exampleEnglish: 'Everyone wishes each other "Enjoy your meal!" before they start.'
    },
    {
      id: 'proost',
      dutch: 'proost! / gezondheid!',
      english: 'cheers!',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ze klinken hun glazen en roepen: "Proost!"',
      exampleEnglish: 'They clink their glasses and yell: "Cheers!"'
    },
    {
      id: 'de_rekening',
      dutch: 'de rekening',
      english: 'bill / check',
      category: 'restaurant',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de rekeningen',
      exampleSentence: 'Mogen wij de rekening alstublieft?',
      exampleEnglish: 'May we have the bill please?'
    },
    {
      id: 'de_fooi',
      dutch: 'de fooi',
      english: 'tip / gratuity',
      category: 'restaurant',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de fooien',
      exampleSentence: 'De bediening was fantastisch, we geven een royale fooi.',
      exampleEnglish: 'The service was fantastic, we give a generous tip.'
    },
    {
      id: 'laat_de_rest_maar_zitten',
      dutch: 'laat de rest maar zitten',
      english: 'keep the change',
      category: 'restaurant',
      partOfSpeech: 'phrase',
      exampleSentence: 'Het bedrag is 46 euro; maak er maar 50 van en laat de rest maar zitten.',
      exampleEnglish: 'The amount is 46 euros; make it 50 and keep the change.'
    },
    {
      id: 'honger_hebben',
      dutch: 'honger hebben',
      english: 'to be hungry',
      category: 'uitdrukkingen',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik heb enorme honger, wanneer gaan we eten?',
      exampleEnglish: 'I am extremely hungry, when are we going to eat?'
    },
    {
      id: 'dorst_hebben',
      dutch: 'dorst hebben',
      english: 'to be thirsty',
      category: 'uitdrukkingen',
      partOfSpeech: 'phrase',
      exampleSentence: 'Na het hardlopen heb ik altijd veel dorst.',
      exampleEnglish: 'After running I am always very thirsty.'
    },
    {
      id: 'bestellen',
      dutch: 'bestellen',
      english: 'to order',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'We willen graag twee pizza\'s bestellen.',
      exampleEnglish: 'We would like to order two pizzas.'
    },
    {
      id: 'proeven',
      dutch: 'proeven',
      english: 'to taste',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Wil je van mijn soep proeven?',
      exampleEnglish: 'Do you want to taste some of my soup?'
    },
    {
      id: 'afrekenen',
      dutch: 'afrekenen (betalen)',
      english: 'to settle the bill / pay',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Kunnen we pinnen of moeten we contant afrekenen?',
      exampleEnglish: 'Can we pay by card or do we have to pay cash?'
    },
    {
      id: 'pinnen',
      dutch: 'pinnen',
      english: 'to pay with debit card',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik pinnen alstublieft?',
      exampleEnglish: 'May I pay with debit card please?'
    },
    {
      id: 'trakteren',
      dutch: 'trakteren',
      english: 'to treat someone / foot the bill',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Vandaag is het mijn verjaardag, dus ik trakteer!',
      exampleEnglish: 'Today is my birthday, so it\'s my treat!'
    },
    {
      id: 'heerlijk',
      dutch: 'heerlijk / verrukkelijk',
      english: 'delicious / delightful',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'Dit toetje smaakt echt heerlijk.',
      exampleEnglish: 'This dessert tastes truly delicious.'
    },
    {
      id: 'vies',
      dutch: 'vies',
      english: 'disgusting / bad-tasting / dirty',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'Vind je spruitjes vies of lekker?',
      exampleEnglish: 'Do you find Brussels sprouts disgusting or tasty?'
    },
    {
      id: 'pittig',
      dutch: 'pittig (heet / pikant)',
      english: 'spicy / hot',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'Indisch eten is vaak lekker pittig.',
      exampleEnglish: 'Indonesian food is often nice and spicy.'
    },
    {
      id: 'zoet',
      dutch: 'zoet',
      english: 'sweet',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'Nederlanders houden van zoete drop en stroopwafels.',
      exampleEnglish: 'The Dutch love sweet liquorice and stroopwafels.'
    },
    {
      id: 'zout',
      dutch: 'zout',
      english: 'salty',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'De frietjes zijn een beetje te zout.',
      exampleEnglish: 'The chips are a bit too salty.'
    },
    {
      id: 'zuur',
      dutch: 'zuur',
      english: 'sour',
      category: 'smaak',
      partOfSpeech: 'adjective',
      exampleSentence: 'Een citroen is erg zuur.',
      exampleEnglish: 'A lemon is very sour.'
    }
  ],
  grammarPoints: [
    {
      id: 'modale_werkwoorden',
      title: '6.5 Modale Werkwoorden (Mogen, Willen, Moeten, Kunnen, Zullen)',
      summary: 'De 5 modale hulpwerkwoorden en de zinsstructuur met infinitief achteraan.',
      ruleExplanation: `Modale werkwoorden combineren altijd met een infinitief aan het EINDE van de zin:
[Onderwerp] + [Modaal werkwoord (vervoegd)] + [Rest van de zin] + [Infinitief!]

Voorbeelden:
• "Mogen we bij het raam ZITTEN?"
• "Willen jullie alvast iets DRINKEN?"
• "Ik moet even een lepel HALEN."
• "Kan ik een toetje BESTELLEN?"
• "Wat zullen we vanavond ETEN?"

Vervoeging in de tegenwoordige tijd:
• Mogen (toestemming): ik mag, jij mag, u mag, hij/zij mag, wij mogen, jullie mogen, zij mogen
• Willen (wens): ik wil, jij wilt/wil, u wilt, hij/zij wil, wij willen, jullie willen, zij willen
• Moeten (noodzaak/plicht): ik moet, jij moet, u moet, hij/zij moet, wij moeten, jullie moeten, zij moeten
• Kunnen (mogelijkheid/vermogen): ik kan, jij kunt/kan, u kunt, hij/zij kan, wij kunnen, jullie kunnen, zij kunnen
• Zullen (voorstel/toekomst): ik zal, jij zult/zal, u zult, hij/zij zal, wij zullen, jullie zullen, zij zullen`,
      examples: [
        {
          dutch: 'Mogen we de rekening, alstublieft?',
          english: 'May we have the bill, please?',
          note: 'Beleefd toestemming vragen met "mogen".'
        },
        {
          dutch: 'Ik wil graag een kopje koffie bestellen.',
          english: 'I would like to order a cup of coffee.',
          note: 'De infinitief "bestellen" staat helemaal aan het einde van de zin.'
        },
        {
          dutch: 'Zullen we vanavond in dat nieuwe restaurant eten?',
          english: 'Shall we eat in that new restaurant tonight?',
          note: '"Zullen" gebruikt voor een vriendelijk voorstel.'
        }
      ]
    },
    {
      id: 'mening_geven_eten',
      title: '6.3 Mening geven over eten & Houden van',
      summary: 'Hoe vind je het? Ik vind het heerlijk / vies / Ik houd van...',
      ruleExplanation: `Vragen naar een mening over eten:
• "Hoe vind je de soep?" / "Wat vind je van de salade?"
• "Vind je de biefstuk lekker?"

Je mening geven:
• Positief: "Ik vind het heerlijk / verrukkelijk / erg lekker!"
• Neutraal: "Het gaat wel / Het smaakt prima."
• Negatief: "Ik vind het vies / niet lekker / te zout / te pittig."

Het werkwoord "houden van" (to love / like):
• "Ik houd van vis en groenten."
• "Zij houdt niet van pittig eten."
• Let op: in gesproken taal hoor je vaak "ik hou van" zonder d.`,
      examples: [
        {
          dutch: 'Hoe vind je de appeltaart? - Heerlijk, echt verrukkelijk!',
          english: 'How do you like the apple pie? - Delicious, truly wonderful!',
          note: 'Mening uiten over desserts.'
        },
        {
          dutch: 'Ik houd erg van Italiaans eten, vooral pasta.',
          english: 'I really love Italian food, especially pasta.',
          note: 'Constructie: houden van + zelfstandig naamwoord.'
        }
      ]
    },
    {
      id: 'beleefd_bestellen',
      title: '6.4 Beleefd bestellen en vragen in de horeca',
      summary: 'Graag, alstublieft, mag ik... en zou ik mogen...',
      ruleExplanation: `In Nederlandse restaurants en cafés bestel je beleefd met deze formules:
1. "Mag ik een cappuccino, alstublieft?"
2. "Voor mij graag een glas witte wijn."
3. "Ik wil graag de dagsoep bestellen."
4. "Mogen we de rekening van u?"

Tips voor de bediening:
• Zeg "Dank u wel" of "Alstublieft" wanneer de serveerder iets brengt.
• Zeg "Eet smakelijk!" tegen je tafelgenoten wanneer het eten arriveert.
• Zeg "Laat de rest maar zitten" als je contant fooi achterlaat.`,
      examples: [
        {
          dutch: 'Mag ik een glas kraanwater van u?',
          english: 'May I have a glass of tap water from you?',
          note: 'Veelgebruikte beleefde bestelvorm.'
        },
        {
          dutch: 'Voor mij graag de biefstuk, alstublieft.',
          english: 'For me the steak please.',
          note: 'Kort en vriendelijk bestellen aan tafel.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_begrip',
      title: 'Opdracht 1: Begrip van het restaurantgesprek',
      instruction: 'Zijn de uitspraken WAAR of NIET WAAR op basis van de dialoog?',
      items: [
        {
          id: 1,
          prompt: 'Jasper en Christine willen graag bij het raam zitten.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Jasper vraagt direct: "Mogen we bij het raam zitten?".'
        },
        {
          id: 2,
          prompt: 'Christine bestelt biefstuk met frietjes.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Jasper bestelt de biefstuk; Christine eet geen vlees en kiest de vegetarische dagschotel.'
        },
        {
          id: 3,
          prompt: 'De gasten missen aanvankelijk een lepel voor de soep.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: De serveerster ziet dat ze alleen een mes en een vork hebben en haalt een lepel.'
        },
        {
          id: 4,
          prompt: 'Christine vindt mosselen ontzettend lekker.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Christine zegt: "Ik houd niet zo van mosselen."'
        },
        {
          id: 5,
          prompt: 'Jasper rondt het bedrag af en geeft vijf euro fooi.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: De rekening is 65 euro en Jasper betaalt 70 euro met "Laat de rest maar zitten".'
        }
      ]
    },
    {
      id: 'opdracht_2_modaal',
      title: 'Opdracht 2: Welk modaal werkwoord past het best?',
      instruction: 'Kies het juiste modale werkwoord op basis van de betekenis.',
      items: [
        {
          id: 1,
          prompt: 'Wat _______ we drinken vanavond? Wijn of bier?',
          answer: 'zullen',
          options: ['zullen', 'moeten', 'mogen'],
          explanation: '"Zullen we...?" is een voorstel aan je tafelgenoten.'
        },
        {
          id: 2,
          prompt: 'Mijn broer is ziek, dus hij _______ vanavond niet mee uit eten.',
          answer: 'kan',
          options: ['kan', 'mag', 'wil'],
          explanation: 'Niet in staat zijn wegens ziekte: "kan niet mee".'
        },
        {
          id: 3,
          prompt: 'Mevrouw, _______ ik hier even roken? - Nee, dit is een rookvrij restaurant.',
          answer: 'mag',
          options: ['mag', 'moet', 'zal'],
          explanation: 'Toestemming vragen aan personeel doe je met "mogen".'
        },
        {
          id: 4,
          prompt: 'De gasten hebben dorst; ze _______ graag mineraalwater bestellen.',
          answer: 'willen',
          options: ['willen', 'moeten', 'mogen'],
          explanation: 'Een wens of bestelling uitdrukken: "willen bestellen".'
        },
        {
          id: 5,
          prompt: 'Het is al middernacht, we _______ nu echt naar huis gaan.',
          answer: 'moeten',
          options: ['moeten', 'mogen', 'willen'],
          explanation: 'Noodzaak wegens tijd: "moeten gaan".'
        }
      ]
    },
    {
      id: 'opdracht_3_zinsbouw',
      title: 'Opdracht 3: Zinsbouw met modale werkwoorden',
      instruction: 'Waar hoort de infinitief in de zin te staan?',
      items: [
        {
          id: 1,
          prompt: 'Waar moet het werkwoord "drinken" staan? "Wij willen een kopje koffie _______."',
          answer: 'aan het einde van de zin',
          options: ['aan het einde van de zin', 'direct na het onderwerp', 'vóór het lijdend voorwerp'],
          explanation: 'In een Nederlandse hoofdzin met een modaal werkwoord staat de infinitief altijd helemaal achteraan.'
        },
        {
          id: 2,
          prompt: 'Kies de correcte Nederlandse zin:',
          answer: 'Mogen wij hier alstublieft gaan zitten?',
          options: [
            'Mogen wij hier alstublieft gaan zitten?',
            'Mogen wij zitten hier alstublieft gaan?',
            'Wij gaan mogen zitten hier alstublieft?'
          ],
          explanation: 'Modaal vooraan (vraagzin) en de infinitieven "gaan zitten" aan het einde.'
        },
        {
          id: 3,
          prompt: 'Kies de correcte zin met ontkenning:',
          answer: 'Ik kan vanavond helaas niet komen.',
          options: [
            'Ik kan vanavond helaas niet komen.',
            'Ik kan niet komen vanavond helaas.',
            'Ik komen kan helaas niet vanavond.'
          ],
          explanation: '"Komen" sluit de zin af.'
        }
      ]
    },
    {
      id: 'opdracht_4_bestek',
      title: 'Opdracht 4: Het bestek en tafelgerei',
      instruction: 'Welk voorwerp heb je nodig in deze situatie?',
      items: [
        {
          id: 1,
          prompt: 'Je hebt een kom hete mosterdsoep voor je staan. Wat gebruik je?',
          answer: 'de lepel',
          options: ['de lepel', 'het mes', 'de vork'],
          explanation: 'Soep eet je met een lepel.'
        },
        {
          id: 2,
          prompt: 'Je biefstuk is dik en moet in stukjes gesneden worden. Wat gebruik je?',
          answer: 'het mes en de vork',
          options: ['het mes en de vork', 'de lepel', 'het glas'],
          explanation: 'Vlees snijd je met een mes en houd je vast met een vork.'
        },
        {
          id: 3,
          prompt: 'Je morst een beetje saus op je kin. Wat gebruik je om je mond af te vegen?',
          answer: 'het servet',
          options: ['het servet', 'de menukaart', 'het bord'],
          explanation: 'Je veegt je mond af met een servet.'
        },
        {
          id: 4,
          prompt: 'Je wilt rode wijn drinken. Waar schenkt de ober de wijn in?',
          answer: 'in een glas',
          options: ['in een glas', 'in een kopje', 'op een bord'],
          explanation: 'Wijn drink je uit een wijnglas.'
        }
      ]
    },
    {
      id: 'opdracht_5_smaken',
      title: 'Opdracht 5: Woordenschat en smaken',
      instruction: 'Welke smaak hoort bij welk eten?',
      items: [
        {
          id: 1,
          prompt: 'Een citroen smaakt...',
          answer: 'zuur',
          options: ['zuur', 'zoet', 'zout', 'pittig'],
          explanation: 'Citroenen hebben een uitgesproken zure smaak.'
        },
        {
          id: 2,
          prompt: 'Stroopwafels en suiker zijn...',
          answer: 'zoet',
          options: ['zoet', 'zout', 'bitter', 'zuur'],
          explanation: 'Suiker en stroopwafels zijn zoet.'
        },
        {
          id: 3,
          prompt: 'Frietjes met veel zout erop smaken...',
          answer: 'zout',
          options: ['zout', 'zoet', 'zuur', 'mild'],
          explanation: 'Zout maakt frietjes zout van smaak.'
        },
        {
          id: 4,
          prompt: 'Indische sambal oelek smaakt...',
          answer: 'pittig / heet',
          options: ['pittig / heet', 'zoet', 'koud', 'flauw'],
          explanation: 'Sambal is pikant en pittig.'
        }
      ]
    },
    {
      id: 'opdracht_6_communicatie',
      title: 'Opdracht 6: Wat zeg je in het restaurant?',
      instruction: 'Kies de meest natuurlijke Nederlandse uitdrukking.',
      items: [
        {
          id: 1,
          prompt: 'De serveerder zet het hoofdgerecht voor jullie neer. Wat zeg je tegen je partner?',
          answer: 'Eet smakelijk!',
          options: ['Eet smakelijk!', 'Tot ziens!', 'Laat maar zitten!'],
          explanation: '"Eet smakelijk!" is de vaste wens bij de start van de maaltijd.'
        },
        {
          id: 2,
          prompt: 'Jullie hebben klaar gegeten en willen betalen. Wat vraag je aan de bediening?',
          answer: 'Mogen we de rekening, alstublieft?',
          options: [
            'Mogen we de rekening, alstublieft?',
            'Hoeveel kost dit huis?',
            'Wat is uw menukaart?'
          ],
          explanation: 'Zo vraag je netjes om de rekening.'
        },
        {
          id: 3,
          prompt: 'De rekening is 27 euro. Je geeft 30 euro contant en wilt 3 euro fooi geven. Wat zeg je?',
          answer: 'Maak er maar 30 van, laat de rest maar zitten.',
          options: [
            'Maak er maar 30 van, laat de rest maar zitten.',
            'Ik wil graag 3 euro terug.',
            'Het eten was te duur.'
          ],
          explanation: '"Laat de rest maar zitten" is de bekende manier om fooi af te ronden.'
        }
      ]
    }
  ],
  readingText: {
    title: '6.9 Tekst: Uit eten in Nederland',
    subtitle: 'Over borrelen, de daghap, Going Dutch en fooi geven (Blz. 94)',
    content: `In het weekend of op vrijdagmiddag na het werk gaan veel Nederlanders eerst even borrelen. Dat betekent dat je gezellig met vrienden of collega's in een café of op een terras zit en bier of wijn drinkt met warme bitterballen en nootjes erbij.

Veel eetcafés hebben een daghap of dagschotel: een voedzame, eenvoudige maaltijd van de dag voor een schappelijke prijs, vaak tussen de 12 en 16 euro. Populaire gerechten zijn saté met frietjes, stoofvlees, stamppot of een verse maaltijdsalade.

Wereldwijd staat de uitdrukking "Going Dutch" bekend als het eerlijk delen van de kosten. In Nederland is het inderdaad volkomen normaal dat iedereen aan tafel precies betaalt voor wat hij of zij zelf gegeten en gedronken heeft. Tegenwoordig sturen vrienden elkaar direct na het etentje een Tikkie via WhatsApp om hun deel over te maken.

En hoe zit het met de fooi? In Nederland is de bediening altijd al bij de prijs op de menukaart inbegrepen. Een fooi is daarom niet verplicht. Was de service echter vriendelijk en snel, dan is het gebruikelijk om het bedrag naar boven af te ronden (ongeveer 5 tot 10 procent). Bij het pinnen zegt de klant dan: "Maak er maar vijftig euro van, alstublieft."`,
    vocabularyNotes: [
      { word: 'borrelen', translation: 'having drinks with snacks after work' },
      { word: 'de daghap', translation: 'dish of the day / daily special' },
      { word: 'de bitterbal', translation: 'crispy deep-fried meat ragout snack' },
      { word: 'een Tikkie sturen', translation: 'sending a mobile payment link via WhatsApp' },
      { word: 'inbegrepen', translation: 'included in the price' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat is een typisch kenmerk van "borrelen"?',
        answer: 'Gezellig iets drinken met bitterballen en snacks',
        options: [
          'Gezellig iets drinken met bitterballen en snacks',
          'Een zware driegangenmaaltijd eten',
          'Thuis vroeg naar bed gaan'
        ],
        explanation: 'Borrelen is napraten met een drankje en typische Hollandse snacks zoals bitterballen.'
      },
      {
        id: 2,
        prompt: 'Wat bedoelen mensen met "Going Dutch"?',
        answer: 'Iedereen betaalt zijn eigen deel van de rekening',
        options: [
          'Iedereen betaalt zijn eigen deel van de rekening',
          'Eén persoon betaalt altijd voor de hele groep',
          'Niemand betaalt en iedereen rent weg'
        ],
        explanation: 'Going Dutch betekent de rekening splitsen zodat ieder zijn eigen consumpties vergoedt.'
      },
      {
        id: 3,
        prompt: 'Is het geven van fooi in een Nederlands restaurant verplicht?',
        answer: 'Nee, het zit al in de prijs, maar afronden bij goede service is gebruikelijk',
        options: [
          'Nee, het zit al in de prijs, maar afronden bij goede service is gebruikelijk',
          'Ja, je moet standaard minstens 25% fooi geven',
          'Nee, fooi geven is wettelijk verboden in Nederland'
        ],
        explanation: 'De service is inbegrepen, maar 5-10% afronden is gebruikelijk bij goede service.'
      }
    ]
  },
  pronunciation: {
    title: '6.10 Uitspraak: ui – ou/au',
    soundFocus: 'Tweeklanken: "ui" vs "ou / au"',
    explanation: 'De klank "ui" (zoals in "huis", "buik", "tuin") is een van de moeilijkste klanken in het Nederlands. Plaats je lippen een beetje gerond naar voren. Vergelijk dit met "ou/au" (zoals in "koud", "vrouw", "blauw"), die meer klinkt als de Engelse ow in cow.',
    wordList: [
      'huis', 'kous', 'buik', 'bout', 'fruit', 'fout', 'tuin', 'touw', 'luisteren', 'louter', 'uit', 'oud', 'muis', 'mouw'
    ],
    minimalPairs: [
      { word1: 'huis', word2: 'kous', contrast: 'ui vs ou' },
      { word1: 'buik', word2: 'bout', contrast: 'ui vs ou' },
      { word1: 'fruit', word2: 'fout', contrast: 'ui vs ou' },
      { word1: 'tuin', word2: 'touw', contrast: 'ui vs ou' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 6: In een restaurant',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is het juiste lidwoord voor "menukaart"?',
        options: ['de menukaart', 'het menukaart', 'een menukaart'],
        answer: 'de menukaart',
        explanation: 'Kaart is een de-woord, dus "de menukaart".'
      },
      {
        id: 2,
        prompt: 'Wat is het juiste lidwoord voor "voorgerecht"?',
        options: ['het voorgerecht', 'de voorgerecht', 'een voorgerecht'],
        answer: 'het voorgerecht',
        explanation: 'Gerecht is onzijdig, dus "het voorgerecht", "het hoofdgerecht", "het nagerecht".'
      },
      {
        id: 3,
        prompt: 'Welke zin bevat de juiste vervoeging en woordvolgorde met "kunnen"?',
        options: [
          'Wij kunnen hier lekker eten.',
          'Wij kunnen eten hier lekker.',
          'Wij eten kunnen hier lekker.'
        ],
        answer: 'Wij kunnen hier lekker eten.',
        explanation: 'De infinitief "eten" staat achteraan in de zin.'
      },
      {
        id: 4,
        prompt: 'Kies de juiste vorm van "mogen": "_______ u hier roken?"',
        options: ['Mag', 'Moogt', 'Mogen'],
        answer: 'Mag',
        explanation: 'Bij de beleefdheidsvorm "u" is het "u mag" of inversie "mag u".'
      },
      {
        id: 5,
        prompt: 'Welk voorwerp hoort NIET bij het traditionele bestek?',
        options: ['de stoel', 'het mes', 'de vork', 'de lepel'],
        answer: 'de stoel',
        explanation: 'Een stoel is een meubelstuk; het bestek bestaat uit mes, vork en lepel.'
      },
      {
        id: 6,
        prompt: 'Wat betekent de Nederlandse uitdrukking "Laat de rest maar zitten"?',
        options: [
          'Houd het wisselgeld als fooi (keep the change).',
          'Laat de borden op tafel staan.',
          'Ik wil de stoel niet meer gebruiken.'
        ],
        answer: 'Houd het wisselgeld als fooi (keep the change).',
        explanation: 'Dit is de vaste Nederlandse zin om het wisselgeld als fooi aan de bediening te geven.'
      },
      {
        id: 7,
        prompt: 'Wat zeg je in het Nederlands als je honger hebt?',
        options: ['Ik heb honger.', 'Ik ben honger.', 'Ik maak honger.'],
        answer: 'Ik heb honger.',
        explanation: 'In het Nederlands zeg je "Ik heb honger" en "Ik heb dorst" (met het werkwoord hebben).'
      },
      {
        id: 8,
        prompt: 'Wat is het meervoud van "het glas"?',
        options: ['de glazen', 'de glasses', 'de glazes', 'de glasers'],
        answer: 'de glazen',
        explanation: 'Het glas krijgt in het meervoud een lange a met een z: de glazen.'
      },
      {
        id: 9,
        prompt: 'Kies het juiste modale werkwoord: "Wat _______ we vanavond drinken? Zullen we een fles wijn bestellen?"',
        options: ['zullen', 'moeten', 'mogen'],
        answer: 'zullen',
        explanation: '"Zullen we...?" is de standaardconstructie voor een voorstel.'
      },
      {
        id: 10,
        prompt: 'Hoe wens je iemand een fijne maaltijd in het Nederlands?',
        options: ['Eet smakelijk!', 'Goede maaltijd!', 'Veel geluk met eten!'],
        answer: 'Eet smakelijk!',
        explanation: '"Eet smakelijk!" is de traditionele en universele Nederlandse maaltijdwens.'
      }
    ]
  },
  culturalOrPracticalNote: 'Fooi geven in Nederland: Fooi is niet verplicht omdat de service in de prijs zit inbegrepen. Maar bij goede service is het heel gebruikelijk om naar boven af te ronden (5-10%) met de bekende zin: "Laat de rest maar zitten!"'
};
