import { CustomLessonData } from '../types/lesson';

export const CHAPTER_15_DATA: CustomLessonData = {
  id: 'hoofdstuk_15',
  chapterNumber: 'Hoofdstuk 15',
  chapterTitle: 'In de trein',
  description: 'Reizen met de trein van Schiphol naar Enschede, het Nederlandse landschap beschrijven (polders, weilanden, koeien, windmolens, sloten, het Naardermeer), en ZELFSTANDIGE EN BETREKKELIJKE VOORNAAMWOORDEN ("die" voor de-woorden en personen, "dat" voor het-woorden: "Waar is Lena? Die moest werken.", "De trein die naar Enschede rijdt").',
  language: 'Nederlands',
  createdAt: 1727780000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Tjeerd',
      dutch: 'Hallo Amira, welkom in Nederland! Heb je een goede reis gehad?',
      english: 'Hello Amira, welcome to the Netherlands! Did you have a good journey?',
      notes: '"de reis" = journey/trip.',
      keyWords: ['welkom in Nederland', 'goede reis gehad']
    },
    {
      id: 2,
      speaker: 'Amira',
      dutch: 'Hallo oom Tjeerd. Ja, het ging prima! De vlucht duurde alleen een beetje lang. Waar is tante Lena?',
      english: 'Hello uncle Tjeerd. Yes, it went fine! The flight just took a bit long. Where is aunt Lena?',
      notes: '"duren" = to take / last.',
      keyWords: ['oom', 'duurde lang', 'tante Lena']
    },
    {
      id: 3,
      speaker: 'Tjeerd',
      dutch: 'Die moest helaas werken. Kom, we gaan gauw naar het perron. De intercity vertrekt over een paar minuten van spoor 2 naar Enschede.',
      english: 'She unfortunately had to work. Come on, let\'s go quickly to the platform. The intercity departs in a few minutes from track 2 to Enschede.',
      notes: 'Demonstrative pronoun used for a person: "Die moest werken" (She had to work).',
      keyWords: ['die moest werken', 'intercity', 'perron', 'spoor 2']
    },
    {
      id: 4,
      speaker: 'Amira',
      dutch: 'Kijk eens, oom Tjeerd, daar lopen heel kleine pony\'s in de wei! Het zijn net grote honden, zo klein zijn ze.',
      english: 'Look, uncle Tjeerd, over there are very small ponies in the meadow! They are just like big dogs, so small are they.',
      notes: '"de wei / het weiland" = meadow / field. "net" = just like.',
      keyWords: ['kijk eens', 'pony\'s in de wei', 'net grote honden']
    },
    {
      id: 5,
      speaker: 'Tjeerd',
      dutch: 'Ja, dat zijn shetlandpony\'s. Heb je die in Colombia niet?',
      english: 'Yes, those are Shetland ponies. Don\'t you have those in Colombia?',
      notes: '"dat zijn..." = those are...',
      keyWords: ['shetlandpony\'s', 'heb je die']
    },
    {
      id: 6,
      speaker: 'Amira',
      dutch: 'Misschien wel, maar ik heb ze nog nooit gezien. Wat is het landschap hier toch anders! Het is hier zo plat, geen berg te zien. Dat is een reusachtig verschil met Colombia. Je kunt hier zó ver kijken!',
      english: 'Maybe, but I have never seen them. How different the landscape is here! It is so flat here, not a mountain to be seen. That is a gigantic difference with Colombia. You can look so far here!',
      notes: '"plat" = flat. "de berg" = mountain. "het verschil" = difference.',
      keyWords: ['het landschap', 'plat', 'geen berg', 'reusachtig verschil']
    },
    {
      id: 7,
      speaker: 'Tjeerd',
      dutch: 'Ja, we rijden nu door de polder. Bijna een kwart van Nederland ligt onder de zeespiegel. Zie je al die rechte sloten tussen de weilanden? Die voeren het overtollige water af.',
      english: 'Yes, we are now riding through the polder. Almost a quarter of the Netherlands lies below sea level. Do you see all those straight ditches between the meadows? Those drain the excess water away.',
      notes: '"de polder" = reclaimed land. "de zeespiegel" = sea level. "de sloot" = ditch.',
      keyWords: ['polder', 'zeespiegel', 'sloten', 'weilanden']
    },
    {
      id: 8,
      speaker: 'Amira',
      dutch: 'Fascinerend! En kijk, daar staat zo\'n beroemde historische windmolen naast een rij hypermoderne witte windturbines.',
      english: 'Fascinating! And look, over there stands such a famous historic windmill next to a row of hypermodern white wind turbines.',
      notes: '"de windmolen" = traditional windmill. "de windturbine" = modern wind generator.',
      keyWords: ['historische windmolen', 'windturbines']
    },
    {
      id: 9,
      speaker: 'Conducteur',
      dutch: 'Goedemiddag dames en heren, vervoersbewijzen alstublieft. Mag ik uw ov-chipkaarten of e-tickets even zien?',
      english: 'Good afternoon ladies and gentlemen, tickets please. May I see your transit cards or e-tickets for a moment?',
      notes: '"het vervoersbewijs" = travel document / ticket.',
      keyWords: ['vervoersbewijzen', 'e-tickets', 'conducteur']
    },
    {
      id: 10,
      speaker: 'Tjeerd',
      dutch: 'Alstublieft, twee keer ingecheckt met NS Flex. We reizen door naar Enschede.',
      english: 'Here you go, checked in twice with NS Flex. We are travelling on to Enschede.',
      notes: '"ingecheckt" = checked in.',
      keyWords: ['ingecheckt', 'reizen door']
    }
  ],
  vocabulary: [
    {
      id: 'de_intercity',
      dutch: 'de intercity (de sprinter)',
      english: 'intercity train (express train / local stopping train)',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de intercity\'s',
      exampleSentence: 'De intercity stopt alleen op de grote centrale stations.',
      exampleEnglish: 'The intercity only stops at major central stations.'
    },
    {
      id: 'het_spoor',
      dutch: 'het spoor (spoor 2)',
      english: 'track / platform (track 2)',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de sporen',
      exampleSentence: 'De trein naar Utrecht vertrekt over vier minuten van spoor 5b.',
      exampleEnglish: 'The train to Utrecht departs in four minutes from track 5b.'
    },
    {
      id: 'het_perron',
      dutch: 'het perron',
      english: 'railway platform',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de perrons',
      exampleSentence: 'Honderden reizigers wachten op het tochtige perron.',
      exampleEnglish: 'Hundreds of passengers wait on the draughty platform.'
    },
    {
      id: 'de_conducteur',
      dutch: 'de conducteur (de conductrice)',
      english: 'ticket inspector / train guard',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de conducteurs',
      exampleSentence: 'De conducteur blaast op zijn fluitje voor het vertrek.',
      exampleEnglish: 'The guard blows his whistle before departure.'
    },
    {
      id: 'het_vervoersbewijs',
      dutch: 'het vervoersbewijs (het treinkaartje)',
      english: 'ticket / proof of travel',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de vervoersbewijzen',
      exampleSentence: 'Iedere passagier moet in het bezit zijn van een geldig vervoersbewijs.',
      exampleEnglish: 'Every passenger must be in possession of a valid ticket.'
    },
    {
      id: 'de_reis',
      dutch: 'de reis (een goede reis hebben)',
      english: 'journey / trip (to have a good trip)',
      category: 'reizen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de reizen',
      exampleSentence: 'We wensen u een hele prettige reis met de Nederlandse Spoorwegen.',
      exampleEnglish: 'We wish you a very pleasant journey with Dutch Railways.'
    },
    {
      id: 'de_vlucht',
      dutch: 'de vlucht',
      english: 'flight',
      category: 'reizen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vluchten',
      exampleSentence: 'Haar rechtstreekse vlucht vanuit Bogotá landde op tijd op Schiphol.',
      exampleEnglish: 'Her direct flight from Bogotá landed on time at Schiphol.'
    },
    {
      id: 'het_landschap',
      dutch: 'het landschap',
      english: 'landscape / scenery',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de landschappen',
      exampleSentence: 'Het Hollandse landschap met wolken en water is wereldberoemd.',
      exampleEnglish: 'The Dutch landscape with clouds and water is world famous.'
    },
    {
      id: 'de_polder',
      dutch: 'de polder',
      english: 'polder (land reclaimed from water)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de polders',
      exampleSentence: 'Flevoland is de grootste door mensenhanden gemaakte polder.',
      exampleEnglish: 'Flevoland is the largest man-made polder.'
    },
    {
      id: 'het_weiland',
      dutch: 'het weiland (de wei)',
      english: 'pasture / meadow',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de weilanden',
      exampleSentence: 'In het groene weiland grazen zwart-witte koeien.',
      exampleEnglish: 'In the green pasture black-and-white cows are grazing.'
    },
    {
      id: 'de_koe',
      dutch: 'de koe (de koeien)',
      english: 'cow (cows)',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de koeien',
      exampleSentence: 'Nederlandse melkkoeien produceren melk voor Goudse kaas.',
      exampleEnglish: 'Dutch dairy cows produce milk for Gouda cheese.'
    },
    {
      id: 'de_sloot',
      dutch: 'de sloot',
      english: 'ditch (small drainage canal)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de sloten',
      exampleSentence: 'Tussen alle weilanden ligt een sloot vol eendenkroos.',
      exampleEnglish: 'Between all the pastures lies a ditch full of duckweed.'
    },
    {
      id: 'de_molen',
      dutch: 'de molen (de windmolen)',
      english: 'windmill',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de molens',
      exampleSentence: 'De molens van Kinderdijk pompten vroeger het water weg.',
      exampleEnglish: 'The windmills of Kinderdijk used to pump the water away.'
    },
    {
      id: 'de_windturbine',
      dutch: 'de windturbine (het windmolenpark)',
      english: 'wind turbine (wind farm)',
      category: 'energie',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de windturbines',
      exampleSentence: 'Langs de snelweg en in de Noordzee staan duizenden windturbines.',
      exampleEnglish: 'Along the motorway and in the North Sea stand thousands of wind turbines.'
    },
    {
      id: 'de_dijk',
      dutch: 'de dijk',
      english: 'dike / sea wall / levee',
      category: 'water',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de dijken',
      exampleSentence: 'De Afsluitdijk beschermt Nederland tegen de Noordzee.',
      exampleEnglish: 'The Afsluitdijk protects the Netherlands against the North Sea.'
    },
    {
      id: 'de_zeespiegel',
      dutch: 'de zeespiegel (onder NAP)',
      english: 'sea level (below normal water level)',
      category: 'water',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Het diepste punt van Nederland ligt bijna zeven meter onder de zeespiegel.',
      exampleEnglish: 'The lowest point of the Netherlands lies nearly seven metres below sea level.'
    },
    {
      id: 'plat',
      dutch: 'plat (zo plat als een pannenkoek)',
      english: 'flat (as flat as a pancake)',
      category: 'beschrijving',
      partOfSpeech: 'adjective',
      exampleSentence: 'Nederland is zo plat dat je geen heuvels ziet in het westen.',
      exampleEnglish: 'The Netherlands is so flat that you see no hills in the west.'
    },
    {
      id: 'de_berg',
      dutch: 'de berg (de heuvel)',
      english: 'mountain (hill)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bergen / de heuvels',
      exampleSentence: 'Er zijn geen echte bergen in Nederland, alleen in Zuid-Limburg.',
      exampleEnglish: 'There are no real mountains in the Netherlands, only in South Limburg.'
    },
    {
      id: 'de_pony',
      dutch: 'de pony (de shetlandpony)',
      english: 'pony (Shetland pony)',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de pony\'s',
      exampleSentence: 'Kinderen mogen een ritje maken op de kleine pony.',
      exampleEnglish: 'Children are allowed to take a ride on the small pony.'
    },
    {
      id: 'het_natuurgebied',
      dutch: 'het natuurgebied (het Naardermeer)',
      english: 'nature reserve (Naardermeer)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de natuurgebieden',
      exampleSentence: 'Het Naardermeer was het eerste beschermde natuurgebied van Nederland.',
      exampleEnglish: 'The Naardermeer was the first protected nature reserve in the Netherlands.'
    },
    {
      id: 'de_storing',
      dutch: 'de storing (de wisselstoring, de seinverstoring)',
      english: 'malfunction / outage / breakdown',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de storingen',
      exampleSentence: 'Door een seinverstoring rijden er minder treinen tussen Schiphol en Amsterdam.',
      exampleEnglish: 'Due to a signal failure fewer trains run between Schiphol and Amsterdam.'
    },
    {
      id: 'omroepen',
      dutch: 'omroepen (het omroepbericht)',
      english: 'to announce / broadcast (announcement)',
      category: 'trein',
      partOfSpeech: 'verb',
      exampleSentence: 'De stationschef roept om dat het spoor gewijzigd is.',
      exampleEnglish: 'The station master announces that the platform has changed.'
    },
    {
      id: 'het_raam',
      dutch: 'het raam (uit het raam kijken)',
      english: 'window (to look out the window)',
      category: 'dagelijks',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de ramen',
      exampleSentence: 'Amira kijkt gefascineerd uit het treinraam naar de koeien.',
      exampleEnglish: 'Amira looks fascinated out of the train window at the cows.'
    },
    {
      id: 'de_stoel',
      dutch: 'de stoel (de zitplaats)',
      english: 'seat / chair (seat in train)',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de stoelen',
      exampleSentence: 'Is deze stoel nog vrij, of zit hier al iemand?',
      exampleEnglish: 'Is this seat still free, or is someone already sitting here?'
    },
    {
      id: 'de_eerste_klas',
      dutch: 'de eerste klas / tweede klas',
      english: 'first class / second class',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Met een tweedeklaskaartje mag je niet in de eerste klas zitten.',
      exampleEnglish: 'With a second-class ticket you may not sit in first class.'
    },
    {
      id: 'de_stiltezone',
      dutch: 'de stiltezone (de stiltecoupé)',
      english: 'quiet zone / quiet carriage',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de stiltezones',
      exampleSentence: 'In de stiltezone mag je niet telefoneren of luid praten.',
      exampleEnglish: 'In the quiet zone you may not make phone calls or talk loudly.'
    },
    {
      id: 'de_treinreis',
      dutch: 'de treinreis',
      english: 'train journey',
      category: 'reizen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de treinreizen',
      exampleSentence: 'De treinreis van Amsterdam naar Maastricht duurt ruim twee uur.',
      exampleEnglish: 'The train journey from Amsterdam to Maastricht takes over two hours.'
    },
    {
      id: 'het_eindstation',
      dutch: 'het eindstation (de eindbestemming)',
      english: 'terminal station / final destination',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de eindstations',
      exampleSentence: 'Enschede is het eindstation van deze intercity.',
      exampleEnglish: 'Enschede is the final stop of this intercity.'
    },
    {
      id: 'overstappen_op',
      dutch: 'overstappen op een andere trein',
      english: 'to transfer to another train',
      category: 'trein',
      partOfSpeech: 'verb',
      exampleSentence: 'In Amersfoort kunt u aan de overkant van het perron overstappen.',
      exampleEnglish: 'In Amersfoort you can change trains across the platform.'
    },
    {
      id: 'reusachtig',
      dutch: 'reusachtig (enorm groot)',
      english: 'gigantic / enormous',
      category: 'beschrijving',
      partOfSpeech: 'adjective',
      exampleSentence: 'Er is een reusachtig verschil in temperatuur tussen de seizoenen.',
      exampleEnglish: 'There is a gigantic difference in temperature between the seasons.'
    },
    {
      id: 'fascinerend',
      dutch: 'fascinerend (boeiend)',
      english: 'fascinating / captivating',
      category: 'beschrijving',
      partOfSpeech: 'adjective',
      exampleSentence: 'Ik vind de geschiedenis van de inpoldering echt fascinerend.',
      exampleEnglish: 'I find the history of land reclamation truly fascinating.'
    },
    {
      id: 'de_vluchteling',
      dutch: 'de vogel (de trekvogel)',
      english: 'bird (migratory bird)',
      category: 'dieren',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vogels',
      exampleSentence: 'In de waterrijke polders overwinteren honderdduizenden ganzen.',
      exampleEnglish: 'In the water-rich polders hundreds of thousands of geese spend the winter.'
    },
    {
      id: 'grazen',
      dutch: 'grazen',
      english: 'to graze (pasture)',
      category: 'dieren',
      partOfSpeech: 'verb',
      exampleSentence: 'De schapen en lammetjes grazen rustig op de grasdijk.',
      exampleEnglish: 'The sheep and lambs graze quietly on the grass dike.'
    },
    {
      id: 'de_bagage',
      dutch: 'de bagage (de koffer)',
      english: 'luggage / baggage (suitcase)',
      category: 'reizen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Leg je zware koffer in het bagagerek boven de stoelen.',
      exampleEnglish: 'Put your heavy suitcase in the luggage rack above the seats.'
    },
    {
      id: 'de_spoorwegen',
      dutch: 'de Nederlandse Spoorwegen (de NS)',
      english: 'Dutch Railways (NS)',
      category: 'organisatie',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'De NS vervoert dagelijks meer dan een miljoen reizigers.',
      exampleEnglish: 'NS transports over one million passengers every day.'
    },
    {
      id: 'de_afsluitdijk',
      dutch: 'de waterkering / stormvloedkering',
      english: 'storm surge barrier / flood barrier',
      category: 'water',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de keringen',
      exampleSentence: 'De Oosterscheldekering is een technisch wereldwonder.',
      exampleEnglish: 'The Eastern Scheldt storm barrier is an engineering wonder of the world.'
    },
    {
      id: 'de_zee',
      dutch: 'de zee (de Noordzee)',
      english: 'sea (North Sea)',
      category: 'natuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zeeën',
      exampleSentence: 'Zonder de dijken zou de Noordzee half Nederland overspoelen.',
      exampleEnglish: 'Without the dikes the North Sea would flood half the Netherlands.'
    },
    {
      id: 'het_waterbeheer',
      dutch: 'het waterschap (het waterbeheer)',
      english: 'water board / regional water authority',
      category: 'organisatie',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de waterschappen',
      exampleSentence: 'Het waterschap regelt het waterpeil in de sloten en kanalen.',
      exampleEnglish: 'The water board manages the water level in ditches and canals.'
    },
    {
      id: 'het_overstappen',
      dutch: 'de overstap (een krappe overstap)',
      english: 'transfer / connection (tight connection)',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de overstappen',
      exampleSentence: 'We hebben maar drie minuten voor de overstap naar Groningen.',
      exampleEnglish: 'We have only three minutes for the transfer to Groningen.'
    },
    {
      id: 'de_dienstregeling',
      dutch: 'de dienstregeling',
      english: 'timetable / schedule',
      category: 'trein',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de dienstregelingen',
      exampleSentence: 'Bekijk de actuele dienstregeling in de reisplanner app.',
      exampleEnglish: 'Check the current timetable in the journey planner app.'
    }
  ],
  grammarPoints: [
    {
      id: 'aanwijzende_voornaamwoorden_zelfstandig',
      title: '15.1 Zelfstandig Gebruikte Aanwijzende Voornaamwoorden ("Die" & "Dat")',
      summary: 'Personen en dingen aanduiden zonder het zelfstandig naamwoord te herhalen.',
      ruleExplanation: `In gesproken Nederlands vervangen we een zelfstandig naamwoord of persoon heel vaak door "DIE" of "DAT":

1. DIE gebruik je voor:
• de-woorden: "Wat vind je van de nieuwe roman? - DIE vind ik heel spannend!"
• meervoud: "Zie je die pony's in de wei? - Ja, DIE zijn schattig."
• personen (hij/zij): "Waar is tante Lena? - DIE moest helaas werken." / "Ken je die man? - DIE is mijn leraar."

2. DAT gebruik je voor:
• het-woorden: "Heb je het nieuwe pasje al? - Ja, DAT heb ik gisteren gekregen."
• hele situaties of feiten: "Er is geen berg te zien. DAT is een groot verschil met Colombia."

Let op de zinsstructuur:
Als "die" of "dat" het lijdend voorwerp (object) is en vooraan de zin staat, treedt er INVERSIE op (persoonsvorm voor onderwerp):
• "DIE (object) vind (V) ik (S) erg mooi."
• "DAT (object) weet (V) hij (S) nog niet."`,
      examples: [
        {
          dutch: 'Waar zijn je sleutels? - Die liggen op de keukentafel.',
          english: 'Where are your keys? - Those are lying on the kitchen table.',
          note: 'Meervoud (de sleutels) -> die.'
        },
        {
          dutch: 'Wat vind je van het hotel? - Dat vond ik erg comfortabel.',
          english: 'What do you think of the hotel? - That I found very comfortable.',
          note: 'Het-woord (het hotel) -> dat.'
        },
        {
          dutch: 'Waar is Peter? - Die is naar de markt gegaan.',
          english: 'Where is Peter? - He went to the market.',
          note: 'Persoon aangeduid met "die".'
        }
      ],
      tables: [
        {
          headers: ['Categorie', 'Lidwoord', 'Aanwijzend voornaamwoord', 'Voorbeeld'],
          rows: [
            ['de-woord', 'de trein', 'die', 'Die vertrekt van spoor 2.'],
            ['het-woord', 'het landschap', 'dat', 'Dat is zo plat hier.'],
            ['meervoud', 'de sloten', 'die', 'Die voeren het water af.'],
            ['persoon (m/v)', 'de oom / tante', 'die', 'Die staat op het perron.'],
            ['gehele situatie', 'situatie / feit', 'dat', 'Dat is een verrassing!']
          ]
        }
      ]
    },
    {
      id: 'betrekkelijke_voornaamwoorden_die_en_dat',
      title: '15.2 Betrekkelijke Voornaamwoorden ("Die" en "Dat")',
      summary: 'Relatieve bijzinnen maken om extra informatie te geven over een woord.',
      ruleExplanation: `Een betrekkelijke bijzin geeft extra informatie over een zelfstandig naamwoord (het antecedent):

• Antecedent is een DE-woord of MEERVOUD -> gebruik DIE:
  "De trein DIE naar Enschede rijdt, vertrekt van spoor 2."
  "De koeien DIE in de wei staan, geven veel melk."

• Antecedent is een HET-woord -> gebruik DAT:
  "Het landschap DAT zo plat is, verbaast de toeristen."
  "Het treinkaartje DAT ik online kocht, is 24 uur geldig."

Let op de woordvolgorde in de betrekkelijke bijzin:
Omdat het een bijzin is, staan alle WERKWOORDEN achteraan!
"De man DIE daar op het perron STAAT, is de conducteur."`,
      examples: [
        {
          dutch: 'De vrouw die naast me zat, las een dik boek.',
          english: 'The woman who sat next to me was reading a thick book.',
          note: 'De vrouw -> die.'
        },
        {
          dutch: 'Het dorp dat we net passeerden, heet Weesp.',
          english: 'The village that we just passed is called Weesp.',
          note: 'Het dorp -> dat.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_die_of_dat',
      title: 'Opdracht 1: Kies tussen "Die" of "Dat"',
      instruction: 'Welk aanwijzend of betrekkelijk voornaamwoord is correct?',
      items: [
        {
          id: 1,
          prompt: 'Waar is de conducteur? - _______ loopt door de trein om kaartjes te controleren.',
          answer: 'Die',
          options: ['Die', 'Dat'],
          explanation: 'De conducteur (persoon / de-woord) -> Die.'
        },
        {
          id: 2,
          prompt: 'Wat vind je van het Nederlandse landschap? - _______ vind ik heel bijzonder.',
          answer: 'Dat',
          options: ['Dat', 'Die'],
          explanation: 'Het landschap (het-woord) -> Dat.'
        },
        {
          id: 3,
          prompt: 'De trein _______ naar Schiphol rijdt, heeft tien minuten vertraging.',
          answer: 'die',
          options: ['die', 'dat'],
          explanation: 'De trein (de-woord) -> die.'
        },
        {
          id: 4,
          prompt: 'Het station _______ we net zagen, is gerenoveerd.',
          answer: 'dat',
          options: ['dat', 'die'],
          explanation: 'Het station (het-woord) -> dat.'
        },
        {
          id: 5,
          prompt: 'Kijk naar al die koeien in het weiland! - Ja, _______ grazen heerlijk in de zon.',
          answer: 'die',
          options: ['die', 'dat'],
          explanation: 'Koeien is meervoud -> die.'
        }
      ]
    },
    {
      id: 'opdracht_2_trein_situaties',
      title: 'Opdracht 2: Situaties in de trein',
      instruction: 'Kies het juiste woord om de zin kloppend te maken.',
      items: [
        {
          id: 1,
          prompt: 'In een intercity mag je in de _______ niet luid telefoneren of muziek luisteren.',
          answer: 'stiltezone',
          options: ['stiltezone', 'bagageruimte', 'eerste klas'],
          explanation: 'In de stiltezone (stiltecoupé) moet het stil zijn.'
        },
        {
          id: 2,
          prompt: 'De conducteur vraagt vriendelijk naar je:',
          answer: 'vervoersbewijs',
          options: ['vervoersbewijs', 'landkaart', 'dijk'],
          explanation: 'Vervoersbewijs = kaartje / ticket.'
        },
        {
          id: 3,
          prompt: 'De trein naar Enschede vertrekt over drie minuten van _______ 4b.',
          answer: 'spoor',
          options: ['spoor', 'polder', 'wei'],
          explanation: 'Treinen vertrekken vanaf een spoor (track/platform).'
        }
      ]
    },
    {
      id: 'opdracht_3_landschap_en_natuur',
      title: 'Opdracht 3: Het Nederlandse landschap',
      instruction: 'Welk landschapselement wordt bedoeld?',
      items: [
        {
          id: 1,
          prompt: 'Een stuk land dat vroeger water was en door mensen is drooggemalen noem je een:',
          answer: 'polder',
          options: ['polder', 'berg', 'zee'],
          explanation: 'Drooggemalen land heet een polder.'
        },
        {
          id: 2,
          prompt: 'Een smalle waterweg tussen twee weilanden om overtollig regenwater af te voeren:',
          answer: 'een sloot',
          options: ['een sloot', 'een dijk', 'een duin'],
          explanation: 'Dit is een sloot.'
        },
        {
          id: 3,
          prompt: 'Een zware aarden wal die het land beschermt tegen overstromingen door de zee of rivier:',
          answer: 'de dijk',
          options: ['de dijk', 'het perron', 'de molen'],
          explanation: 'Een dijk beschermt tegen het water.'
        }
      ]
    }
  ],
  readingText: {
    title: '15.8 Tekst: De Polder en de Eeuwige Strijd tegen het Water',
    subtitle: 'Over molens, gemalen, dijken en wonen onder de zeespiegel (Blz. 226)',
    content: `Er is een beroemd gezegde: "God schiep de aarde, maar de Nederlanders schiepen Nederland." Nergens ter wereld is de invloed van de mens op het landschap zo zichtbaar als in het westen en noorden van Nederland.

Zonder duizenden kilometers aan dijken, duinen en waterkeringen zou meer dan de helft van Nederland regelmatig onder water staan, inclusief wereldsteden als Amsterdam, Rotterdam en Den Haag. Een polder is een stuk land dat door dijken is omgeven en waarvan de waterstand kunstmatig wordt geregeld.

Vanaf de vijftiende eeuw gebruikten de Nederlanders windmolens met schepraderen om meren en moerassen leeg te pompen. Beroemde voorbeelden zijn de Beemster en de Schermer. Tegenwoordig zijn de houten windmolens vervangen door hypermoderne elektrische en dieselgemalen die dag en nacht miljarden liters water per dag naar de zee pompen. 

Het beheer van dit ingenieuze systeem is in handen van de "waterschappen" (hoogheemraadschappen). Dit zijn de oudste democratische bestuursorganen van Nederland, daterend uit de dertiende eeuw!`,
    vocabularyNotes: [
      { word: 'droogmalen', translation: 'to drain / pump dry' },
      { word: 'de waterkering', translation: 'flood defense / sea barrier' },
      { word: 'het scheprad', translation: 'scoop wheel' },
      { word: 'het gemaal', translation: 'pumping station' },
      { word: 'het waterschap', translation: 'water board (historic democratic governance)' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat zou er met West-Nederland gebeuren zonder dijken en duinen?',
        answer: 'Meer dan de helft van het land zou regelmatig onder water staan',
        options: [
          'Meer dan de helft van het land zou regelmatig onder water staan',
          'Het zou in een hete woestijn veranderen',
          'Er zouden hoge bergen ontstaan'
        ],
        explanation: 'Een groot deel van Nederland ligt ruim onder de zeespiegel.'
      },
      {
        id: 2,
        prompt: 'Waarmee pompten Nederlanders vanaf de 15e eeuw het water uit de meren?',
        answer: 'Met behulp van windmolens met schepraderen',
        options: [
          'Met behulp van windmolens met schepraderen',
          'Met stoomtreinen op kolen',
          'Met handmatige emmers door soldaten'
        ],
        explanation: 'De molens van Kinderdijk en de Beemster maalden de polders droog.'
      },
      {
        id: 3,
        prompt: 'Wat is een "waterschap" in Nederland?',
        answer: 'Een eeuwenoud democratisch overheidsorgaan dat zorgt voor waterveiligheid en dijken',
        options: [
          'Een eeuwenoud democratisch overheidsorgaan dat zorgt voor waterveiligheid en dijken',
          'Een commercieel bedrijf dat flessen bronwater verkoopt',
          'Een zwemvereniging voor studenten'
        ],
        explanation: 'Waterschappen regelen het waterpeil en de waterveiligheid.'
      }
    ]
  },
  pronunciation: {
    title: '15.9 Uitspraak: Korte "e" vs Lange "ee"',
    soundFocus: 'Klinkers: korte "e" (zet, ben, bed) vs lange "ee" (zee, been, beet)',
    explanation: 'De korte "e" [ɛ] (in "zet", "ben", "bed", "perron") is een open klank. De lange "ee" [e:] (in "zee", "been", "veel", "meenemen") is gesloten en langgerekte, gevormd met gespannen lippen. Luister goed naar het verschil tussen "ben" (I am) en "been" (leg)!',
    wordList: [
      'bed', 'beet', 'ben', 'been', 'zet', 'zee', 'les', 'lees', 'rem', 'raam', 'sloot', 'spoor'
    ],
    minimalPairs: [
      { word1: 'ben', word2: 'been', contrast: 'korte e vs lange ee' },
      { word1: 'zet', word2: 'zee', contrast: 'korte e vs lange ee' },
      { word1: 'bed', word2: 'beet', contrast: 'korte e vs lange ee' },
      { word1: 'les', word2: 'lees', contrast: 'korte e vs lange ee' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 15: In de trein',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Welk aanwijzend voornaamwoord gebruik je voor een de-woord of persoon (bijv. "de trein", "tante Lena")?',
        options: ['die', 'dat', 'het', 'wat'],
        answer: 'die',
        explanation: 'Voor de-woorden en personen gebruik je zelfstandig "die".'
      },
      {
        id: 2,
        prompt: 'Welk aanwijzend voornaamwoord gebruik je voor een het-woord (bijv. "het landschap", "het kaartje")?',
        options: ['dat', 'die', 'wie', 'deze'],
        answer: 'dat',
        explanation: 'Voor het-woorden gebruik je zelfstandig "dat".'
      },
      {
        id: 3,
        prompt: 'Maak de betrekkelijke bijzin: "De reizigers _______ op het perron wachten, stappen zo in."',
        options: ['die', 'dat', 'wat', 'wie'],
        answer: 'die',
        explanation: 'Reizigers is meervoud -> betrekkelijk voornaamwoord "die".'
      },
      {
        id: 4,
        prompt: 'Maak de betrekkelijke bijzin: "Het natuurgebied _______ we passeren, is het Naardermeer."',
        options: ['dat', 'die', 'wat', 'wie'],
        answer: 'dat',
        explanation: 'Het natuurgebied is een het-woord -> "dat".'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "landschap"?',
        options: ['het landschap', 'de landschap', 'beide kunnen'],
        answer: 'het landschap',
        explanation: 'Landschap is onzijdig: het landschap (de landschappen).'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "spoor"?',
        options: ['het spoor', 'de spoor', 'een spoor (geen lidwoord mogelijk)'],
        answer: 'het spoor',
        explanation: 'Spoor is onzijdig: het spoor (spoor 2, spoor 3).'
      },
      {
        id: 7,
        prompt: 'Wat is een "polder"?',
        options: [
          'Een stuk land dat omgeven is door dijken en waarvan de waterstand kunstmatig geregeld wordt.',
          'Een hoge bergrug met dennenbomen.',
          'Een speciaal type sneltrein van de NS.'
        ],
        answer: 'Een stuk land dat omgeven is door dijken en waarvan de waterstand kunstmatig geregeld wordt.',
        explanation: 'Een polder is drooggemaakt land onder zeeniveau of waterpeil.'
      },
      {
        id: 8,
        prompt: 'Wat betekent: "Het landschap is zo plat als een pannenkoek"?',
        options: [
          'Het land is volkomen vlak, zonder bergen of heuvels.',
          'Het land ruikt naar stroop en suiker.',
          'Het land is overal bedekt met gele zonnebloemen.'
        ],
        answer: 'Het land is volkomen vlak, zonder bergen of heuvels.',
        explanation: '"Plat als een pannenkoek" is een bekende Nederlandse uitdrukking voor vlak landschap.'
      },
      {
        id: 9,
        prompt: 'Waarom mag je in de "stiltezone" van de trein niet praten of telefoneren?',
        options: [
          'Zodat reizigers daar in alle rust kunnen werken, studeren of slapen.',
          'Omdat de machinist de reizigers anders niet kan horen roepen.',
          'Omdat de wifi daar anders uitvalt.'
        ],
        answer: 'Zodat reizigers daar in alle rust kunnen werken, studeren of slapen.',
        explanation: 'De stiltezone is speciaal bedoeld voor reizigers die absolute rust wensen.'
      },
      {
        id: 10,
        prompt: 'Wat betekent de mededeling van de conducteur: "Vervoersbewijzen alstublieft"?',
        options: [
          'Tickets / transit cards please.',
          'Passports and visas please.',
          'Baggage receipts please.'
        ],
        answer: 'Tickets / transit cards please.',
        explanation: 'Vervoersbewijzen zijn de treinkaartjes of ov-chipkaarten.'
      }
    ]
  },
  culturalOrPracticalNote: 'Reizen met de NS en het landschap: Nederland heeft een van de drukst bereden spoorwegnetten van Europa. Kijk tijdens de treinreis uit het raam: je ziet de typische Hollandse polders met rechte sloten, grazende zwart-bont koeien, historische molens én moderne windturbines. Let in de trein goed op de borden met "STILTE" als je een rustige werkplek zoekt!'
};
