import { CustomLessonData } from '../types/lesson';

export const CHAPTER_8_DATA: CustomLessonData = {
  id: 'hoofdstuk_8',
  chapterNumber: 'Hoofdstuk 8',
  chapterTitle: 'Bij de makelaar',
  description: 'Woonruimte zoeken (appartement, boven-/benedenwoning), meubels en kamers in huis, huur en oppervlakte, negatie met "geen" vs "niet", "moeten" vs "hoeven niet", en voorzetsels van plaats (boven, onder, naast, tegenover, tussen).',
  language: 'Nederlands',
  createdAt: 1727710000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Makelaar',
      dutch: 'Dus u zoekt woonruimte in de stad. Voor hoeveel personen?',
      english: 'So you are looking for accommodation in the city. For how many people?',
      notes: '"de woonruimte" = accommodation/living space.',
      keyWords: ['woonruimte', 'de stad', 'hoeveel personen']
    },
    {
      id: 2,
      speaker: 'Patricia',
      dutch: 'Twee. Voor mezelf en mijn vriend. Wij gaan samenwonen.',
      english: 'Two. For myself and my boyfriend. We are going to live together.',
      notes: '"samenwonen" = to live together / cohabit.',
      keyWords: ['mezelf', 'samenwonen']
    },
    {
      id: 3,
      speaker: 'Makelaar',
      dutch: 'Zoekt u een bepaald type woning? Met een tuin? Of een bovenwoning? Of een appartement?',
      english: 'Are you looking for a specific type of home? With a garden? Or an upstairs flat? Or an apartment?',
      notes: '"de bovenwoning" = upstairs apartment, "de benedenwoning" = ground-floor apartment.',
      keyWords: ['type woning', 'tuin', 'bovenwoning', 'appartement']
    },
    {
      id: 4,
      speaker: 'Patricia',
      dutch: 'Ik heb geen idee. Wat zijn de mogelijkheden?',
      english: 'I have no idea. What are the possibilities / options?',
      notes: '"geen idee" (ontkenning met geen vóór onbepaald znw). "de mogelijkheden" = options.',
      keyWords: ['geen idee', 'mogelijkheden']
    },
    {
      id: 5,
      speaker: 'Makelaar',
      dutch: 'Ik zie op uw formulier de maximale huurprijs. Ik zal u een paar woningen laten zien op de computer. Dit is een leuke bovenwoning op de derde verdieping, in een oude buurt, niet ver van het centrum.',
      english: 'I see on your form the maximum rent price. I will show you a few homes on the computer. This is a nice upstairs flat on the third floor, in an old neighbourhood, not far from the city centre.',
      notes: '"de verdieping" = floor/storey. "derde verdieping" = 3rd floor. "laten zien" = to show.',
      keyWords: ['huurprijs', 'laten zien', 'derde verdieping', 'oude buurt', 'centrum']
    },
    {
      id: 6,
      speaker: 'Makelaar',
      dutch: 'De woning heeft een woonkamer van 35 vierkante meter, een open keuken, twee ruime slaapkamers en een balkon op het westen. In de gang is de wc en een eenvoudige badkamer, met alleen een douche.',
      english: 'The home has a living room of 35 square metres, an open-plan kitchen, two spacious bedrooms and a west-facing balcony. In the hallway is the toilet and a simple bathroom with only a shower.',
      notes: 'Kamers: de woonkamer, de slaapkamer, de keuken, de badkamer, de gang.',
      keyWords: ['woonkamer', 'vierkante meter', 'slaapkamers', 'balkon', 'badkamer']
    },
    {
      id: 7,
      speaker: 'Patricia',
      dutch: 'O, wij hoeven geen bad. Dat gebruiken we toch niet. Hebt u nog meer geschikte huizen te huur?',
      english: 'Oh, we don\'t need a bath. We won\'t use that anyway. Do you have any more suitable houses for rent?',
      notes: '"hoeven geen..." = do not need... (ontkenning van moeten!). "te huur" = for rent / to let.',
      keyWords: ['hoeven geen bad', 'toch niet', 'te huur', 'geschikte huizen']
    },
    {
      id: 8,
      speaker: 'Makelaar',
      dutch: 'Ja, dit huisje is erg leuk voor twee personen. Het is wat duurder want we verhuren dit gemeubileerd, dus met kasten, bedden, een tafel, stoelen, een bureau en een bank.',
      english: 'Yes, this little house is very nice for two people. It is somewhat more expensive because we rent this out furnished, so with wardrobes, beds, a table, chairs, a desk and a sofa.',
      notes: 'Meubels: de kast, het bed, de tafel, de stoel, het bureau, de bank.',
      keyWords: ['duurder', 'gemeubileerd', 'kasten', 'bedden', 'tafel', 'stoelen', 'bureau', 'bank']
    },
    {
      id: 9,
      speaker: 'Makelaar',
      dutch: 'Het grote voordeel is dat u zelf niets hoeft te kopen. Het is een zonnige benedenwoning met een kleine achtertuin. Hoe klinkt dat?',
      english: 'The big advantage is that you don\'t have to buy anything yourself. It\'s a sunny ground-floor flat with a small back garden. How does that sound?',
      notes: '"het voordeel" = advantage. "Dat lijkt me fantastisch" = That sounds fantastic to me.',
      keyWords: ['het voordeel', 'niets', 'zonnige kamer', 'benedenwoning', 'lijkt me']
    },
    {
      id: 10,
      speaker: 'Patricia',
      dutch: 'Ja, het is duurder, dat is waar. Ik wil dit even met mijn vriend overleggen. Ik bel u zo snel mogelijk voor een nieuwe afspraak.',
      english: 'Yes, it is more expensive, that is true. I want to discuss this with my boyfriend for a moment. I will call you as soon as possible for a new appointment.',
      notes: '"overleggen" = to discuss/consult. "zo snel mogelijk" = as soon as possible (ASAP).',
      keyWords: ['overleggen', 'bellen', 'zo snel mogelijk', 'afspraak']
    }
  ],
  vocabulary: [
    {
      id: 'de_makelaar',
      dutch: 'de makelaar',
      english: 'estate agent / realtor',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de makelaars',
      exampleSentence: 'De makelaar helpt ons bij het vinden van een huurhuis.',
      exampleEnglish: 'The estate agent helps us find a rental house.'
    },
    {
      id: 'de_woonruimte',
      dutch: 'de woonruimte',
      english: 'living accommodation / housing',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'In de Randstad is woonruimte heel schaars.',
      exampleEnglish: 'In the Randstad housing is very scarce.'
    },
    {
      id: 'samenwonen',
      dutch: 'samenwonen',
      english: 'to live together / cohabit',
      category: 'wonen',
      partOfSpeech: 'verb',
      exampleSentence: 'Patricia en haar vriend gaan volgende maand samenwonen.',
      exampleEnglish: 'Patricia and her boyfriend are going to live together next month.'
    },
    {
      id: 'het_appartement',
      dutch: 'het appartement',
      english: 'apartment / flat',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de appartementen',
      exampleSentence: 'Zij wonen in een modern appartement met lift.',
      exampleEnglish: 'They live in a modern apartment with a lift.'
    },
    {
      id: 'de_bovenwoning',
      dutch: 'de bovenwoning',
      english: 'upstairs flat / upper-floor apartment',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bovenwoningen',
      exampleSentence: 'De bovenwoning heeft een steile trap naar de voordeur.',
      exampleEnglish: 'The upstairs flat has a steep staircase to the front door.'
    },
    {
      id: 'de_benedenwoning',
      dutch: 'de benedenwoning',
      english: 'ground-floor flat / apartment with garden',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de benedenwoningen',
      exampleSentence: 'Oudere mensen huren vaak een benedenwoning zonder trappen.',
      exampleEnglish: 'Elderly people often rent a ground-floor flat without stairs.'
    },
    {
      id: 'de_verdieping',
      dutch: 'de verdieping (de etage)',
      english: 'floor / storey',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de verdiepingen',
      exampleSentence: 'Ons kantoor zit op de tweede verdieping.',
      exampleEnglish: 'Our office is on the second floor.'
    },
    {
      id: 'de_begane_grond',
      dutch: 'de begane grond',
      english: 'ground floor',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'De fietsenstalling is op de begane grond.',
      exampleEnglish: 'The bicycle storage is on the ground floor.'
    },
    {
      id: 'de_lift',
      dutch: 'de lift',
      english: 'lift / elevator',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de liften',
      exampleSentence: 'Neem je de trap of ga je met de lift?',
      exampleEnglish: 'Are you taking the stairs or going by lift?'
    },
    {
      id: 'de_oppervlakte',
      dutch: 'de oppervlakte',
      english: 'surface area / floor area',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de oppervlaktes',
      exampleSentence: 'De totale oppervlakte van de flat is 75 vierkante meter.',
      exampleEnglish: 'The total floor area of the flat is 75 square metres.'
    },
    {
      id: 'de_vierkante_meter',
      dutch: 'de vierkante meter (m²)',
      english: 'square metre',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vierkante meters',
      exampleSentence: 'De woonkamer is 30 vierkante meter groot.',
      exampleEnglish: 'The living room is 30 square metres in size.'
    },
    {
      id: 'gemeubileerd',
      dutch: 'gemeubileerd',
      english: 'furnished',
      category: 'wonen',
      partOfSpeech: 'adjective',
      exampleSentence: 'Het appartement wordt volledig gemeubileerd verhuurd.',
      exampleEnglish: 'The apartment is rented out fully furnished.'
    },
    {
      id: 'kaal',
      dutch: 'kaal (zonder vloer of gordijnen)',
      english: 'bare / unfurnished (no flooring or curtains)',
      category: 'wonen',
      partOfSpeech: 'adjective',
      exampleSentence: 'Een kale woning moet je zelf verven en stofferen.',
      exampleEnglish: 'A bare home you have to paint and carpet yourself.'
    },
    {
      id: 'gestoffeerd',
      dutch: 'gestoffeerd (met vloer en gordijnen)',
      english: 'semi-furnished / with flooring & curtains',
      category: 'wonen',
      partOfSpeech: 'adjective',
      exampleSentence: 'Gestoffeerd betekent met laminaat en raambekleding.',
      exampleEnglish: 'Semi-furnished means with laminate flooring and window coverings.'
    },
    {
      id: 'de_huurprijs',
      dutch: 'de huurprijs',
      english: 'rent / rental price',
      category: 'financieel',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de huurprijzen',
      exampleSentence: 'De huurprijs is 950 euro per maand exclusief gas en licht.',
      exampleEnglish: 'The rent is 950 euros per month excluding gas and electricity.'
    },
    {
      id: 'de_borg',
      dutch: 'de borg (de waarborgsom)',
      english: 'deposit / security deposit',
      category: 'financieel',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'Je betaalt één maand huur als borg vooraf.',
      exampleEnglish: 'You pay one month\'s rent as deposit in advance.'
    },
    {
      id: 'inclusief_exclusief',
      dutch: 'inclusief vs exclusief (g/w/l)',
      english: 'inclusive vs exclusive (gas/water/electricity)',
      category: 'financieel',
      partOfSpeech: 'phrase',
      exampleSentence: 'Is de huur inclusief of exclusief servicekosten?',
      exampleEnglish: 'Is the rent inclusive or exclusive of service costs?'
    },
    {
      id: 'de_woonkamer',
      dutch: 'de woonkamer',
      english: 'living room',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de woonkamers',
      exampleSentence: 'De woonkamer heeft grote ramen met veel licht.',
      exampleEnglish: 'The living room has large windows with lots of light.'
    },
    {
      id: 'de_slaapkamer',
      dutch: 'de slaapkamer',
      english: 'bedroom',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de slaapkamers',
      exampleSentence: 'In de grote slaapkamer past een tweepersoonsbed.',
      exampleEnglish: 'In the master bedroom fits a double bed.'
    },
    {
      id: 'de_keuken',
      dutch: 'de keuken (open keuken)',
      english: 'kitchen (open-plan kitchen)',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de keukens',
      exampleSentence: 'De open keuken grenst direct aan de woonkamer.',
      exampleEnglish: 'The open-plan kitchen borders directly on the living room.'
    },
    {
      id: 'de_badkamer',
      dutch: 'de badkamer',
      english: 'bathroom',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de badkamers',
      exampleSentence: 'De badkamer heeft een inloopdouche en een wastafel.',
      exampleEnglish: 'The bathroom has a walk-in shower and a washbasin.'
    },
    {
      id: 'het_toilet',
      dutch: 'het toilet (de wc)',
      english: 'toilet / restroom',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de toiletten',
      exampleSentence: 'In Nederlandse huizen is het toilet vaak apart van de badkamer.',
      exampleEnglish: 'In Dutch houses the toilet is often separate from the bathroom.'
    },
    {
      id: 'de_gang',
      dutch: 'de gang / de hal',
      english: 'hallway / corridor',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de gangen',
      exampleSentence: 'In de gang hangt de kapstok voor de jassen.',
      exampleEnglish: 'In the hallway hangs the coat rack for jackets.'
    },
    {
      id: 'het_balkon',
      dutch: 'het balkon',
      english: 'balcony',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de balkons',
      exampleSentence: 'Op het balkon drinken we \'s ochtends koffie in de zon.',
      exampleEnglish: 'On the balcony we drink coffee in the sun in the morning.'
    },
    {
      id: 'de_tuin',
      dutch: 'de tuin (de achtertuin)',
      english: 'garden (back garden)',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de tuinen',
      exampleSentence: 'Kinderen kunnen veilig spelen in de omheinde tuin.',
      exampleEnglish: 'Children can play safely in the fenced garden.'
    },
    {
      id: 'de_zolder',
      dutch: 'de zolder',
      english: 'attic / loft',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zolders',
      exampleSentence: 'Op zolder bewaren we oude koffers en boeken.',
      exampleEnglish: 'In the attic we store old suitcases and books.'
    },
    {
      id: 'de_kelder',
      dutch: 'de kelder',
      english: 'basement / cellar',
      category: 'kamers',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kelders',
      exampleSentence: 'In de kelder is het altijd koel.',
      exampleEnglish: 'In the basement it is always cool.'
    },
    {
      id: 'de_kast',
      dutch: 'de kast (kledingkast, boekenkast)',
      english: 'cupboard / wardrobe / bookcase',
      category: 'meubels',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kasten',
      exampleSentence: 'Al mijn kleren hangen netjes in de kledingkast.',
      exampleEnglish: 'All my clothes hang neatly in the wardrobe.'
    },
    {
      id: 'het_bed',
      dutch: 'het bed',
      english: 'bed',
      category: 'meubels',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bedden',
      exampleSentence: 'Het bed is comfortabel en lekker breed.',
      exampleEnglish: 'The bed is comfortable and nice and wide.'
    },
    {
      id: 'de_bank',
      dutch: 'de bank',
      english: 'sofa / couch (also: bank)',
      category: 'meubels',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de banken',
      exampleSentence: 'We kijken televisie vanaf de zachte bank.',
      exampleEnglish: 'We watch television from the soft couch.'
    },
    {
      id: 'het_bureau',
      dutch: 'het bureau',
      english: 'desk / office',
      category: 'meubels',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de bureaus',
      exampleSentence: 'Op mijn bureau staat een computer en een bureaulamp.',
      exampleEnglish: 'On my desk sits a computer and a desk lamp.'
    },
    {
      id: 'de_stoel',
      dutch: 'de stoel',
      english: 'chair',
      category: 'meubels',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de stoelen',
      exampleSentence: 'Rond de eettafel staan vier houten stoelen.',
      exampleEnglish: 'Around the dining table stand four wooden chairs.'
    },
    {
      id: 'de_koelkast',
      dutch: 'de koelkast',
      english: 'fridge / refrigerator',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de koelkasten',
      exampleSentence: 'Zet de melk en kaas direct in de koelkast.',
      exampleEnglish: 'Put the milk and cheese straight into the fridge.'
    },
    {
      id: 'de_wasmachine',
      dutch: 'de wasmachine',
      english: 'washing machine',
      category: 'apparaten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de wasmachines',
      exampleSentence: 'Er is een aansluiting voor een wasmachine in de badkamer.',
      exampleEnglish: 'There is a connection for a washing machine in the bathroom.'
    },
    {
      id: 'het_gordijn',
      dutch: 'het gordijn',
      english: 'curtain',
      category: 'inrichting',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de gordijnen',
      exampleSentence: 'Doe \'s avonds de gordijnen dicht tegen inkijk.',
      exampleEnglish: 'Close the curtains in the evening against onlookers.'
    },
    {
      id: 'de_sleutel',
      dutch: 'de sleutel',
      english: 'key',
      category: 'wonen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de sleutels',
      exampleSentence: 'De sleuteloverdracht vindt plaats bij de notaris of makelaar.',
      exampleEnglish: 'The handover of keys takes place at the notary or estate agent.'
    },
    {
      id: 'overleggen',
      dutch: 'overleggen',
      english: 'to discuss / consult',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Ik moet eerst even met mijn partner overleggen.',
      exampleEnglish: 'I must consult with my partner first.'
    },
    {
      id: 'verhuizen',
      dutch: 'verhuizen',
      english: 'to move house',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Wij gaan volgende maand naar Utrecht verhuizen.',
      exampleEnglish: 'We are going to move house to Utrecht next month.'
    },
    {
      id: 'huren',
      dutch: 'huren',
      english: 'to rent / lease (as tenant)',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij huren een kamer in het centrum.',
      exampleEnglish: 'They rent a room in the city centre.'
    },
    {
      id: 'verhuren',
      dutch: 'verhuren',
      english: 'to let / rent out (as landlord)',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'De eigenaar verhuurt het pand aan studenten.',
      exampleEnglish: 'The owner rents out the premises to students.'
    },
    {
      id: 'zo_snel_mogelijk',
      dutch: 'zo snel mogelijk',
      english: 'as soon as possible',
      category: 'tijd',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik stuur u het contract zo snel mogelijk per e-mail.',
      exampleEnglish: 'I will send you the contract as soon as possible by email.'
    }
  ],
  grammarPoints: [
    {
      id: 'negatie_geen_vs_niet',
      title: '8.6 Negatie: Geen vs Niet',
      summary: 'De gouden regels voor ontkenning in het Nederlands.',
      ruleExplanation: `1. Gebruik GEEN bij:
• Zelfstandige naamwoorden met het onbepaalde lidwoord "een":
  - "Heb je een balkon?" -> "Nee, ik heb GEEN balkon."
  - "Heeft het huis een tuin?" -> "Nee, het heeft GEEN tuin."
• Zelfstandige naamwoorden zonder lidwoord (indefiniet / niet-telbaar):
  - "Heb je tijd?" -> "Nee, ik heb GEEN tijd."
  - "Ik heb GEEN suiker meer."
  - "Zij hebben GEEN kinderen."

2. Gebruik NIET bij:
• Werkwoorden: "Dat gebruiken we toch NIET." / "Ik rook NIET."
• Bijvoeglijke naamwoorden: "De woning is NIET groot." / "Het is NIET ver."
• Bepaalde zelfstandige naamwoorden (met de / het / bezittelijk vnw / aanwijzend vnw):
  - "Ken je die makelaar?" -> "Nee, ik ken die makelaar NIET."
  - "Is dit jouw kamer?" -> "Nee, dit is mijn kamer NIET."
• Bijvoeglijke bepalingen van plaats en voorzetsels:
  - "Zij woont NIET in Amsterdam."
  - "Het boek ligt NIET op tafel."`,
      examples: [
        {
          dutch: 'Ik heb geen auto, dus ik ga met de trein.',
          english: 'I don\'t have a car, so I go by train.',
          note: '"een auto" wordt ontkend met "geen auto".'
        },
        {
          dutch: 'Het appartement is helaas niet gemeubileerd.',
          english: 'The apartment is unfortunately not furnished.',
          note: '"gemeubileerd" is een bijvoeglijk naamwoord -> ontken met "niet".'
        }
      ]
    },
    {
      id: 'moeten_vs_hoeven_niet',
      title: '8.7 Moeten vs Hoeven niet (Verplichting vs Geen noodzaak)',
      summary: 'De ontkenning van "moeten" is in het Nederlands ALTIJD "hoeven niet"!',
      ruleExplanation: `In veel talen (zoals het Engels: "must not") betekent de ontkenning van moeten een verbod.
In het Nederlands is dat heel anders:

1. Verplichting (positief): MOETEN
• "Je MOET je huur op tijd betalen." (verplichting)

2. Geen verplichting / niet nodig (negatief): HOEVEN NIET (+ TE + infinitief)
• "Je HOEFT deze maand NIET te betalen." (het is niet nodig / you don't have to)
• "Wij HOEVEN GEEN bad." (we don't need a bath)
• "Je HOEFT NIET te koken vanavond, we gaan uit eten!"

3. Verbod: MAG NIET (van mogen!)
• "Je MAG hier NIET roken." (verboden / you must not)`,
      examples: [
        {
          dutch: 'Je hoeft je schoenen niet uit te trekken.',
          english: 'You don\'t have to take off your shoes.',
          note: 'Geen verplichting: hoeven ... niet te ...'
        },
        {
          dutch: 'U hoeft vandaag niets te betalen.',
          english: 'You don\'t have to pay anything today.',
          note: 'Ontkenning van moeten met "niets".'
        }
      ]
    },
    {
      id: 'voorzetsels_van_plaats',
      title: '8.8 Voorzetsels van plaats (Prepositions of Place)',
      summary: 'Boven, onder, naast, tussen, tegenover, voor, achter.',
      ruleExplanation: `Om de ligging van kamers en meubels aan te geven gebruik je deze voorzetsels:
• Op: "Het boek ligt op tafel."
• In: "De wasmachine staat in de badkamer."
• Boven: "De slaapkamer is boven de woonkamer." (zonder contact)
• Onder: "De kelder ligt onder het huis."
• Naast: "De garage staat naast de woning." (direct ernaast)
• Tegenover: "De supermarkt ligt tegenover het station." (aan de andere kant van de straat)
• Tussen: "Het bureau staat tussen de kast en het raam." (in het midden van twee objecten)
• Voor vs Achter: "De voortuin ligt voor het huis; de schuur staat achter de tuin."`,
      examples: [
        {
          dutch: 'De badkamer bevindt zich naast de slaapkamer.',
          english: 'The bathroom is situated next to the bedroom.',
          note: '"Naast" geeft aan dat ze aan elkaar grenzen.'
        },
        {
          dutch: 'Er staat een bakkerij tegenover onze voordeur.',
          english: 'There is a bakery across from our front door.',
          note: '"Tegenover" = opposite / across the street.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_begrip',
      title: 'Opdracht 1: Begrip van het makelaarsgesprek',
      instruction: 'Zijn de beweringen WAAR of NIET WAAR volgens de tekst?',
      items: [
        {
          id: 1,
          prompt: 'Patricia zoekt woonruimte voor zichzelf en twee vrienden.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Ze zoekt voor twee personen (haarzelf en haar vriend, ze gaan samenwonen).'
        },
        {
          id: 2,
          prompt: 'De eerste bovenwoning ligt op de derde verdieping.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: De makelaar toont een bovenwoning op de derde verdieping.'
        },
        {
          id: 3,
          prompt: 'Patricia en haar vriend willen per se een bad in de badkamer.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Patricia zegt: "Wij hoeven geen bad. Dat gebruiken we toch niet."'
        },
        {
          id: 4,
          prompt: 'Het tweede huisje is gemeubileerd verhuurd.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Het heeft al bedden, kasten, tafel, stoelen en een bank.'
        },
        {
          id: 5,
          prompt: 'Patricia tekent direct het huurcontract bij de makelaar.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: Ze wil dit eerst even met haar vriend overleggen en belt later terug.'
        }
      ]
    },
    {
      id: 'opdracht_2_geen_vs_niet',
      title: 'Opdracht 2: Kies tussen "geen" en "niet"',
      instruction: 'Kies het juiste woord voor de ontkenning.',
      items: [
        {
          id: 1,
          prompt: 'Is de woning ver van het centrum? - Nee, het is _______ ver.',
          answer: 'niet',
          options: ['niet', 'geen'],
          explanation: '"ver" is een bijvoeglijk naamwoord, dus gebruik "niet".'
        },
        {
          id: 2,
          prompt: 'Heeft het appartement een balkon? - Nee, er is _______ balkon.',
          answer: 'geen',
          options: ['geen', 'niet'],
          explanation: '"een balkon" ontken je met "geen balkon".'
        },
        {
          id: 3,
          prompt: 'Is de huurprijs hoog? - De huurprijs is _______ hoog.',
          answer: 'niet',
          options: ['niet', 'geen'],
          explanation: '"hoog" is een bijvoeglijk naamwoord, dus "niet hoog".'
        },
        {
          id: 4,
          prompt: 'Hebben jullie een auto? - Wij hebben _______ auto.',
          answer: 'geen',
          options: ['geen', 'niet'],
          explanation: '"een auto" ontken je met "geen auto".'
        },
        {
          id: 5,
          prompt: 'Woon je in Utrecht? - Nee, ik woon _______ in Utrecht.',
          answer: 'niet',
          options: ['niet', 'geen'],
          explanation: 'Voorzetselbepaling van plaats (in Utrecht) ontken je met "niet".'
        },
        {
          id: 6,
          prompt: 'Heb je tijd om mee te gaan? - Sorry, ik heb _______ tijd.',
          answer: 'geen',
          options: ['geen', 'niet'],
          explanation: '"tijd" is een niet-telbaar zelfstandig naamwoord zonder lidwoord -> "geen tijd".'
        }
      ]
    },
    {
      id: 'opdracht_3_moeten_vs_hoeven',
      title: 'Opdracht 3: Moeten vs Hoeven niet',
      instruction: 'Kies de juiste betekenis van de zin.',
      items: [
        {
          id: 1,
          prompt: 'Wat betekent: "Je hoeft de trap niet schoon te maken"?',
          answer: 'Het is niet verplicht / niet nodig.',
          options: [
            'Het is niet verplicht / niet nodig.',
            'Het is ten strengste verboden.',
            'Je moet het direct doen.'
          ],
          explanation: '"Hoeven niet" betekent "not having to" (geen verplichting).'
        },
        {
          id: 2,
          prompt: 'Vul in: "Het huis is gemeubileerd, dus we _______ geen nieuwe meubels te kopen."',
          answer: 'hoeven',
          options: ['hoeven', 'moeten', 'mogen'],
          explanation: 'Geen noodzaak met "geen": "hoeven geen meubels te kopen".'
        },
        {
          id: 3,
          prompt: 'Vul in: "Als huurder _______ je elke maand vóór de eerste de huur overmaken."',
          answer: 'moet',
          options: ['moet', 'hoeft', 'mag'],
          explanation: 'Een contractuele plicht: "je moet betalen".'
        }
      ]
    },
    {
      id: 'opdracht_4_voorzetsels',
      title: 'Opdracht 4: Voorzetsels van plaats in huis',
      instruction: 'Welk voorzetsel geeft de juiste positie weer?',
      items: [
        {
          id: 1,
          prompt: 'Het bureau staat precies _______ de kledingkast en het raam in.',
          answer: 'tussen',
          options: ['tussen', 'onder', 'boven'],
          explanation: 'Tussen twee voorwerpen in gebruik je "tussen".'
        },
        {
          id: 2,
          prompt: 'De supermarkt ligt direct aan de overkant van de straat, _______ ons appartement.',
          answer: 'tegenover',
          options: ['tegenover', 'onder', 'in'],
          explanation: 'Aan de overkant van de straat is "tegenover".'
        },
        {
          id: 3,
          prompt: 'De buren wonen op de verdieping direct _______ ons; we horen hun voetstappen op het plafond.',
          answer: 'boven',
          options: ['boven', 'onder', 'naast'],
          explanation: 'Boven je hoofd op een hogere verdieping is "boven".'
        },
        {
          id: 4,
          prompt: 'De auto staat geparkeerd in de garage _______ het huis.',
          answer: 'naast',
          options: ['naast', 'tussen', 'over'],
          explanation: 'Grenzend aan de zijkant van het huis is "naast".'
        }
      ]
    },
    {
      id: 'opdracht_5_kamers_meubels',
      title: 'Opdracht 5: Waar vind je wat in huis?',
      instruction: 'In welke kamer staat dit object gewoonlijk?',
      items: [
        {
          id: 1,
          prompt: 'Waar bewaar je melk, boter en groenten koel?',
          answer: 'in de koelkast in de keuken',
          options: [
            'in de koelkast in de keuken',
            'op het balkon in de regen',
            'in de kledingkast in de slaapkamer'
          ],
          explanation: 'De koelkast staat in de keuken.'
        },
        {
          id: 2,
          prompt: 'Waar staat een comfortabel bed met kussens en dekbed?',
          answer: 'in de slaapkamer',
          options: ['in de slaapkamer', 'in de gang', 'in het toilet'],
          explanation: 'Slapen doe je in de slaapkamer.'
        },
        {
          id: 3,
          prompt: 'Waar hang je je natte jas op als je binnenkomt?',
          answer: 'aan de kapstok in de gang',
          options: [
            'aan de kapstok in de gang',
            'onder het tapijt',
            'in de koelkast'
          ],
          explanation: 'Jassen hangen aan de kapstok in de gang.'
        }
      ]
    }
  ],
  readingText: {
    title: '8.9 Tekst: Wonen in Nederland',
    subtitle: 'Over kamers zoeken, Kamernet, hospiteeravonden en huurrechten (Blz. 120)',
    content: `Wie in Nederland gaat studeren of werken, ontdekt al snel dat er een groot tekort is aan betaalbare woonruimte. Veel jongeren beginnen hun zoektocht op websites zoals Kamernet of reageren op oproepen in sociale media groepen. Een kamer in een studentenhuis kost tegenwoordig gemiddeld tussen de 450 en 750 euro per maand, afhankelijk van de stad.

Bijzonder aan het Nederlandse studentenleven is het fenomeen "hospiteren" (of de "hospiteeravond"). Wanneer er een kamer vrijkomt in een studentenhuis, nodigen de zittende bewoners tien tot twintig kandidaten uit voor een gezamenlijke avond. Iedereen stelt zich voor, drinkt een biertje of thee, en probeert een goede indruk achter te laten. Aan het einde van de avond kiezen de huisgenoten samen de leukste nieuwe kandidaat.

Voor starters en stellen die een zelfstandig appartement zoeken via een makelaar, gelden vaak strenge inkomenseisen. Veel verhuurders eisen dat het bruto maandsalaris minstens drie tot vier keer de kale huurprijs bedraagt. Gelukkig hebben huurders in Nederland ook sterke wettelijke bescherming: de huurbaas mag niet zomaar de huur opzeggen en moet zich houden aan maximale huurverhogingen.`,
    vocabularyNotes: [
      { word: 'het tekort', translation: 'shortage / deficit' },
      { word: 'hospiteren', translation: 'interviewing for a student room' },
      { word: 'zelfstandig appartement', translation: 'self-contained flat' },
      { word: 'de inkomenseis', translation: 'income requirement' },
      { word: 'de huurbaas', translation: 'landlord' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat is een "hospiteeravond"?',
        answer: 'Een avond waarop bewoners van een studentenhuis een nieuwe huisgenoot kiezen',
        options: [
          'Een avond waarop bewoners van een studentenhuis een nieuwe huisgenoot kiezen',
          'Een officieel examen over Nederlandse wetgeving',
          'Een feestje bij de makelaar op kantoor'
        ],
        explanation: 'Hospiteren is het traditionele kennismakingsgesprek met potentiële studentenhuisgenoten.'
      },
      {
        id: 2,
        prompt: 'Welke eis stellen veel verhuurders aan starters die een appartement willen huren?',
        answer: 'Een bruto maandsalaris van 3 tot 4 keer de huur',
        options: [
          'Een bruto maandsalaris van 3 tot 4 keer de huur',
          'Dat de huurder minimaal 5 fietsen bezit',
          'Dat de huurder alle meubels zelf timmert'
        ],
        explanation: 'De inkomenseis ligt in Nederland vaak op 3 tot 4 maal de maandhuur.'
      },
      {
        id: 3,
        prompt: 'Hebben huurders in Nederland goede bescherming volgens de wet?',
        answer: 'Ja, huurders hebben sterke huurbescherming tegen willekeurige opzegging',
        options: [
          'Ja, huurders hebben sterke huurbescherming tegen willekeurige opzegging',
          'Nee, een verhuurder mag je binnen 24 uur zonder reden op straat zetten',
          'Alleen als ze in Amsterdam wonen'
        ],
        explanation: 'In Nederland zijn huurrechten en huurbescherming wettelijk heel strikt geregeld.'
      }
    ]
  },
  pronunciation: {
    title: '8.10 Uitspraak: g/ch – h',
    soundFocus: 'Harde schraapklank "g / ch" vs zachte "h"',
    explanation: 'De Nederlandse "g" en "ch" worden achter in de keel geschraapt (stemloos of stemhebbend keelgeluid). De "h" is een zachte ademstoot zonder schrapen. Veel studenten verwarren "huur" met "guur", of "haar" met "gaar".',
    wordList: [
      'huur', 'guur', 'haar', 'gaar', 'hal', 'gal', 'hoek', 'goed', 'huis', 'gang', 'horen', 'graag'
    ],
    minimalPairs: [
      { word1: 'huur', word2: 'guur', contrast: 'h vs g' },
      { word1: 'haar', word2: 'gaar', contrast: 'h vs g' },
      { word1: 'hal', word2: 'gal', contrast: 'h vs g' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 8: Bij de makelaar',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is het juiste lidwoord voor "woonkamer"?',
        options: ['de woonkamer', 'het woonkamer', 'een woonkamer'],
        answer: 'de woonkamer',
        explanation: 'Kamer is een de-woord: de woonkamer, de slaapkamer, de badkamer.'
      },
      {
        id: 2,
        prompt: 'Wat is het juiste lidwoord voor "appartement"?',
        options: ['het appartement', 'de appartement', 'een appartement'],
        answer: 'het appartement',
        explanation: 'Appartement is onzijdig: het appartement.'
      },
      {
        id: 3,
        prompt: 'Kies het juiste woord: "Heeft het huis een tuin? - Nee, er is _______ tuin."',
        options: ['geen', 'niet', 'niets'],
        answer: 'geen',
        explanation: 'Een zelfstandig naamwoord met "een" ontken je met "geen".'
      },
      {
        id: 4,
        prompt: 'Kies het juiste woord: "Woon je ver van het station? - Nee, ik woon _______ ver."',
        options: ['niet', 'geen', 'geens'],
        answer: 'niet',
        explanation: '"ver" is een bijvoeglijk naamwoord, dus ontken je met "niet".'
      },
      {
        id: 5,
        prompt: 'Wat betekent: "Je hoeft morgen niet vroeg op te staan"?',
        options: [
          'Het is niet verplicht / niet nodig om vroeg op te staan.',
          'Je mag absoluut niet opstaan.',
          'Je moet verplicht vroeg opstaan.'
        ],
        answer: 'Het is niet verplicht / niet nodig om vroeg op te staan.',
        explanation: '"Hoeven niet" betekent dat er geen noodzaak of verplichting is.'
      },
      {
        id: 6,
        prompt: 'Wat betekent een "gemeubileerde" woning?',
        options: [
          'Een woning met meubels zoals bedden, tafels en kasten inbegrepen.',
          'Een lege woning zonder vloer of gordijnen.',
          'Een woning die uitsluitend te koop staat.'
        ],
        answer: 'Een woning met meubels zoals bedden, tafels en kasten inbegrepen.',
        explanation: 'Gemeubileerd betekent voorzien van meubilair.'
      },
      {
        id: 7,
        prompt: 'Welk voorzetsel gebruik je als iets aan de overzijde van de straat ligt?',
        options: ['tegenover', 'tussen', 'onder', 'op'],
        answer: 'tegenover',
        explanation: '"Tegenover" betekent aan de overkant.'
      },
      {
        id: 8,
        prompt: 'Wat is het meervoud van "de kast"?',
        options: ['de kasten', 'de kaster', 'de kasts', 'de kaste'],
        answer: 'de kasten',
        explanation: 'Het meervoud van de kast is de kasten.'
      },
      {
        id: 9,
        prompt: 'Wat betekent "hospiteren" in Nederland?',
        options: [
          'Kennismaken in een studentenhuis om een kamer te bemachtigen.',
          'In een ziekenhuis verblijven.',
          'Een huis kopen op een veiling.'
        ],
        answer: 'Kennismaken in een studentenhuis om een kamer te bemachtigen.',
        explanation: 'Hospiteren is de Nederlandse selectieprocedure voor een studentenkamer.'
      },
      {
        id: 10,
        prompt: 'Waar bevindt zich gewoonlijk "de begane grond"?',
        options: [
          'Op het straatniveau (de nulde etage / ground floor).',
          'Boven op het dak.',
          'In de ondergrondse metrotunnel.'
        ],
        answer: 'Op het straatniveau (de nulde etage / ground floor).',
        explanation: 'De begane grond is de verdieping op straatniveau.'
      }
    ]
  },
  culturalOrPracticalNote: 'Wonen in Nederland: De woningmarkt in Nederlandse steden is heel krap. Veel studenten en starters huren een bovenwoning (zonder lift!) of delen een woning. Een "gemeubileerde" woning huren is handig voor nieuwkomers omdat je zelf geen meubels hoeft aan te schaffen.'
};
