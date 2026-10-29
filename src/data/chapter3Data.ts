import { CustomLessonData } from '../types/lesson';

export const CHAPTER_3_DATA: CustomLessonData = {
  id: 'hoofdstuk_3',
  chapterNumber: 'Hoofdstuk 3',
  chapterTitle: 'In het café',
  description: 'Drankjes bestellen in een café ("Doe mij maar een biertje"), verjaardag vieren en feliciteren ("Proost!"), afrekenen ("Mag ik de rekening?"), lidwoorden (de vs het) en diminutieven (altijd het-woorden), zinsbouw met inversie (tijd/plaats voorop), en rangtelwoorden (1e t/m 100e).',
  language: 'Nederlands',
  createdAt: 1727650000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Susy',
      dutch: 'Hoi Edit. Gefeliciteerd met je verjaardag!',
      english: 'Hi Edit. Happy birthday! / Congratulations on your birthday!',
      notes: '"Gefeliciteerd met..." is standard Dutch for congratulations on something.',
      keyWords: ['gefeliciteerd', 'verjaardag']
    },
    {
      id: 2,
      speaker: 'Edit',
      dutch: 'Dank je wel. Dit is mijn broer Andres.',
      english: 'Thank you very much. This is my brother Andres.',
      notes: '"Dank je wel" is informal thank you.',
      keyWords: ['dank je wel', 'mijn broer']
    },
    {
      id: 3,
      speaker: 'Susy',
      dutch: 'Dag, ik ben Susy. Prettig met je kennis te maken.',
      english: 'Hello, I am Susy. Pleased to meet you.',
      notes: '"Prettig met je kennis te maken" = pleased to meet you.',
      keyWords: ['prettig', 'kennis te maken']
    },
    {
      id: 4,
      speaker: 'Andres',
      dutch: 'Hoi. Hoe kennen jullie elkaar eigenlijk?',
      english: 'Hi. How do you guys actually know each other?',
      notes: '"elkaar" = each other. "eigenlijk" = actually.',
      keyWords: ['kennen', 'elkaar', 'eigenlijk']
    },
    {
      id: 5,
      speaker: 'Susy',
      dutch: 'Van de cursus Nederlands.',
      english: 'From the Dutch course.',
      notes: 'Short conversational answer.',
      keyWords: ['cursus']
    },
    {
      id: 6,
      speaker: 'Edit',
      dutch: 'Wat willen jullie drinken? Ik trakteer.',
      english: 'What do you guys want to drink? It\'s my treat / I\'m buying.',
      notes: '"Ik trakteer" = It is my treat (standard in Dutch when celebrating).',
      keyWords: ['drinken', 'trakteren']
    },
    {
      id: 7,
      speaker: 'Andres',
      dutch: 'Ik wil graag cola.',
      english: 'I would like cola.',
      notes: '"Ik wil graag..." is polite ordering.',
      keyWords: ['graag', 'cola']
    },
    {
      id: 8,
      speaker: 'Susy',
      dutch: 'Doe mij maar een biertje.',
      english: 'Make mine a beer / Just give me a beer.',
      notes: '"Doe mij maar..." is very common informal Dutch when ordering.',
      keyWords: ['doe mij maar', 'biertje']
    },
    {
      id: 9,
      speaker: 'Edit',
      dutch: 'Ik neem rode wijn. Ik roep de ober. Mag ik bestellen?',
      english: 'I\'ll take red wine. I\'ll call the waiter. May I order?',
      notes: '"nemen" = to take. "de ober" = waiter.',
      keyWords: ['rode wijn', 'ober', 'bestellen']
    },
    {
      id: 10,
      speaker: 'Ober',
      dutch: 'Zegt u het maar.',
      english: 'What can I get you? / Go ahead.',
      notes: 'Idiomatic greeting by Dutch waiters/shop staff: "Zegt u het maar".',
      keyWords: ['zegt u het maar']
    },
    {
      id: 11,
      speaker: 'Edit',
      dutch: 'Een cola, een rode wijn en een biertje alstublieft.',
      english: 'A cola, a red wine and a beer please.',
      notes: '"alstublieft" = please.',
      keyWords: ['alstublieft']
    },
    {
      id: 12,
      speaker: 'Ober',
      dutch: 'Een Franse, Spaanse of Zuid-Afrikaanse wijn?',
      english: 'A French, Spanish or South African wine?',
      notes: 'National adjectives for wine.',
      keyWords: ['Franse', 'Spaanse', 'Zuid-Afrikaanse']
    },
    {
      id: 13,
      speaker: 'Edit',
      dutch: 'Hm, ik weet het niet. Doe de Spaanse maar.',
      english: 'Hm, I don\'t know. Make it the Spanish one.',
      notes: '"Doe ... maar" confirms choice.',
      keyWords: ['weten', 'Spaanse']
    },
    {
      id: 14,
      speaker: 'Susy en Andres',
      dutch: 'Nou, Edit. Proost. Op je verjaardag!',
      english: 'Well, Edit. Cheers! To your birthday!',
      notes: '"Proost!" = Cheers! "Op..." = To...',
      keyWords: ['proost', 'op je verjaardag']
    },
    {
      id: 15,
      speaker: 'Edit',
      dutch: 'Zullen we nog een keer bestellen?',
      english: 'Shall we order once more / another round?',
      notes: '"Zullen we..." = Shall we... (proposal).',
      keyWords: ['zullen we', 'nog een keer']
    },
    {
      id: 16,
      speaker: 'Andres',
      dutch: 'Nu wil ik ook een biertje. Dit rondje betaal ik. Wat wil jij, Edit?',
      english: 'Now I want a beer too. I will pay for this round. What do you want, Edit?',
      notes: 'Inversion: "Nu" (Pos 1) -> "wil" (Verb, Pos 2) -> "ik" (Subject). "het rondje" = round of drinks.',
      keyWords: ['nu wil ik', 'dit rondje', 'betalen']
    },
    {
      id: 17,
      speaker: 'Edit',
      dutch: 'Ober, mogen we afrekenen? Alles samen? Nee, ik ben jarig, daarom betaal ik het eerste rondje. Het tweede rondje betaalt hij.',
      english: 'Waiter, may we settle the bill? Everything together? No, it\'s my birthday, that is why I pay the first round. The second round he pays.',
      notes: '"afrekenen" = settle the bill. "daarom" (that\'s why) triggers inversion: "daarom betaal ik".',
      keyWords: ['afrekenen', 'alles samen', 'daarom', 'eerste rondje', 'tweede rondje']
    }
  ],
  vocabulary: [
    // Complete Woordenlijst 3.2 (Book page 48)
    { id: 'ch3_vieren', dutch: 'vieren (viert)', english: 'to celebrate', category: 'feest', partOfSpeech: 'verb', exampleSentence: 'Edit viert haar verjaardag in het café.', exampleEnglish: 'Edit celebrates her birthday in the pub.' },
    { id: 'ch3_de_verjaardag', dutch: 'de verjaardag', english: 'birthday', category: 'feest', partOfSpeech: 'noun', article: 'de', plural: 'de verjaardagen', exampleSentence: 'Gefeliciteerd met je verjaardag!', exampleEnglish: 'Congratulations on your birthday!' },
    { id: 'ch3_het_cafe', dutch: 'het café', english: 'café / pub / bar', category: 'horeca', partOfSpeech: 'noun', article: 'het', plural: 'de cafés', exampleSentence: 'We ontmoeten elkaar in het café.', exampleEnglish: 'We meet each other in the café.' },
    { id: 'ch3_samen', dutch: 'samen', english: 'together', category: 'sociaal', partOfSpeech: 'adverb', exampleSentence: 'Zullen we samen iets drinken?', exampleEnglish: 'Shall we drink something together?' },
    { id: 'ch3_gefeliciteerd', dutch: 'gefeliciteerd', english: 'congratulations / happy birthday', category: 'feest', partOfSpeech: 'phrase', exampleSentence: 'Van harte gefeliciteerd met je diploma!', exampleEnglish: 'Warm congratulations on your degree!' },
    { id: 'ch3_dank_je_wel', dutch: 'dank je wel / dank u wel', english: 'thank you very much', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Dank je wel voor het leuke cadeau.', exampleEnglish: 'Thank you very much for the nice present.' },
    { id: 'ch3_dit_is', dutch: 'dit is', english: 'this is', category: 'basis', partOfSpeech: 'phrase', exampleSentence: 'Dit is mijn vriend Andres.', exampleEnglish: 'This is my friend Andres.' },
    { id: 'ch3_kennen', dutch: 'kennen (ken, kent, kennen)', english: 'to know (people or places)', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ken jij de buurman van Edit?', exampleEnglish: 'Do you know Edit\'s neighbour?' },
    { id: 'ch3_elkaar', dutch: 'elkaar', english: 'each other / one another', category: 'grammatica', partOfSpeech: 'pronoun', exampleSentence: 'Hoe kennen jullie elkaar eigenlijk?', exampleEnglish: 'How do you actually know each other?' },
    { id: 'ch3_drinken', dutch: 'drinken (drink, drinkt, drinken)', english: 'to drink', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Wat wil je drinken?', exampleEnglish: 'What do you want to drink?' },
    { id: 'ch3_trakteren', dutch: 'trakteren (ik trakteer)', english: 'to treat / buy a round', category: 'feest', partOfSpeech: 'verb', exampleSentence: 'Ik ben jarig, dus ik trakteer!', exampleEnglish: 'It\'s my birthday, so I\'m treating!' },
    { id: 'ch3_graag_willen', dutch: 'graag willen (wil graag)', english: 'would like', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik wil graag een kopje thee.', exampleEnglish: 'I would like a cup of tea.' },
    { id: 'ch3_de_cola', dutch: 'de cola', english: 'cola / coke', category: 'drankjes', partOfSpeech: 'noun', article: 'de', exampleSentence: 'Voor mij graag een cola met ijs.', exampleEnglish: 'For me a coke with ice please.' },
    { id: 'ch3_het_bier', dutch: 'het bier (het biertje)', english: 'beer (glass of beer)', category: 'drankjes', partOfSpeech: 'noun', article: 'het', plural: 'de bieren / biertjes', exampleSentence: 'Doe mij maar een lekker koud biertje.', exampleEnglish: 'Make mine a nice cold beer.' },
    { id: 'ch3_nemen', dutch: 'nemen (neem, neemt, nemen)', english: 'to take / have (food or drink)', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik neem rode wijn.', exampleEnglish: 'I\'ll take red wine.' },
    { id: 'ch3_rood', dutch: 'rood (rode)', english: 'red', category: 'kleuren', partOfSpeech: 'adjective', exampleSentence: 'Zij drinkt graag rode wijn.', exampleEnglish: 'She likes drinking red wine.' },
    { id: 'ch3_de_wijn', dutch: 'de wijn', english: 'wine', category: 'drankjes', partOfSpeech: 'noun', article: 'de', plural: 'de wijnen', exampleSentence: 'De Spaanse wijn is heerlijk.', exampleEnglish: 'The Spanish wine is delicious.' },
    { id: 'ch3_roepen', dutch: 'roepen (roep, roept, roepen)', english: 'to call (waiter/someone)', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Ik roep even de ober.', exampleEnglish: 'I\'ll call the waiter for a moment.' },
    { id: 'ch3_de_ober', dutch: 'de ober', english: 'waiter', category: 'horeca', partOfSpeech: 'noun', article: 'de', plural: 'de obers', exampleSentence: 'De ober brengt de drankjes.', exampleEnglish: 'The waiter brings the drinks.' },
    { id: 'ch3_mogen', dutch: 'mogen (mag, mogen)', english: 'may / to be allowed', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Mag ik bestellen?', exampleEnglish: 'May I order?' },
    { id: 'ch3_bestellen', dutch: 'bestellen', english: 'to order', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'We gaan nu bestellen.', exampleEnglish: 'We are going to order now.' },
    { id: 'ch3_alstublieft', dutch: 'alstublieft / alsjeblieft', english: 'please / here you are', category: 'beleefdheid', partOfSpeech: 'phrase', exampleSentence: 'Een biertje, alstublieft.', exampleEnglish: 'A beer, please.' },
    { id: 'ch3_frans', dutch: 'Frans (Franse)', english: 'French', category: 'nationaliteit', partOfSpeech: 'adjective', exampleSentence: 'Hij kiest een Franse wijn.', exampleEnglish: 'He chooses a French wine.' },
    { id: 'ch3_spaans', dutch: 'Spaans (Spaanse)', english: 'Spanish', category: 'nationaliteit', partOfSpeech: 'adjective', exampleSentence: 'Doe de Spaanse wijn maar.', exampleEnglish: 'Make it the Spanish wine.' },
    { id: 'ch3_zuid_afrikaans', dutch: 'Zuid-Afrikaans', english: 'South African', category: 'nationaliteit', partOfSpeech: 'adjective', exampleSentence: 'Hebt u Zuid-Afrikaanse wijn?', exampleEnglish: 'Do you have South African wine?' },
    { id: 'ch3_nou', dutch: 'nou', english: 'well / well then', category: 'conversatie', partOfSpeech: 'adverb', exampleSentence: 'Nou, laten we proosten!', exampleEnglish: 'Well, let\'s make a toast!' },
    { id: 'ch3_proost', dutch: 'proost!', english: 'cheers!', category: 'feest', partOfSpeech: 'phrase', exampleSentence: 'Proost op je verjaardag!', exampleEnglish: 'Cheers to your birthday!' },
    { id: 'ch3_bedankt', dutch: 'bedankt', english: 'thanks / thank you', category: 'conversatie', partOfSpeech: 'phrase', exampleSentence: 'Bedankt voor het rondje!', exampleEnglish: 'Thanks for the round!' },
    { id: 'ch3_het_poosje', dutch: 'het poosje', english: 'short while', category: 'tijd', partOfSpeech: 'noun', article: 'het', exampleSentence: 'Een poosje later bestellen we nog een keer.', exampleEnglish: 'A short while later we order once more.' },
    { id: 'ch3_later', dutch: 'later (laat)', english: 'later', category: 'tijd', partOfSpeech: 'adverb', exampleSentence: 'We zien elkaar later vandaag.', exampleEnglish: 'We see each other later today.' },
    { id: 'ch3_zullen', dutch: 'zullen (zal, zult, zullen)', english: 'shall / will', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Zullen we nog een drankje nemen?', exampleEnglish: 'Shall we have another drink?' },
    { id: 'ch3_nog_een_keer', dutch: 'nog een keer', english: 'once more / again', category: 'tijd', partOfSpeech: 'phrase', exampleSentence: 'Kun je dat nog een keer zeggen?', exampleEnglish: 'Can you say that once more?' },
    { id: 'ch3_het_idee', dutch: 'het idee', english: 'idea', category: 'denken', partOfSpeech: 'noun', article: 'het', plural: 'de ideeën', exampleSentence: 'Dat is een uitstekend idee!', exampleEnglish: 'That is an excellent idea!' },
    { id: 'ch3_hetzelfde', dutch: 'hetzelfde', english: 'the same (thing)', category: 'beschrijving', partOfSpeech: 'pronoun', exampleSentence: 'Willen jullie hetzelfde?', exampleEnglish: 'Do you guys want the same?' },
    { id: 'ch3_het_rondje', dutch: 'het rondje', english: 'round of drinks', category: 'horeca', partOfSpeech: 'noun', article: 'het', plural: 'de rondjes', exampleSentence: 'Dit rondje betaal ik.', exampleEnglish: 'I am paying for this round.' },
    { id: 'ch3_betalen', dutch: 'betalen (betaal, betaalt, betalen)', english: 'to pay', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Mag ik met pin betalen?', exampleEnglish: 'May I pay with card?' },
    { id: 'ch3_geven', dutch: 'geven (geef, geeft, geven)', english: 'to give', category: 'werkwoorden', partOfSpeech: 'verb', exampleSentence: 'Geef mij nog maar een glas water.', exampleEnglish: 'Give me another glass of water.' },
    { id: 'ch3_het_glas', dutch: 'het glas', english: 'glass', category: 'horeca', partOfSpeech: 'noun', article: 'het', plural: 'de glazen', exampleSentence: 'Een glas witte wijn, alstublieft.', exampleEnglish: 'A glass of white wine, please.' },
    { id: 'ch3_afrekenen', dutch: 'afrekenen', english: 'to pay / settle the bill', category: 'horeca', partOfSpeech: 'verb', exampleSentence: 'Ober, mogen we afrekenen?', exampleEnglish: 'Waiter, may we settle the bill?' },
    { id: 'ch3_alles_samen', dutch: 'alles samen (of apart)', english: 'all together (or separate)', category: 'horeca', partOfSpeech: 'phrase', exampleSentence: 'Wilt u alles samen betalen of apart?', exampleEnglish: 'Would you like to pay all together or separately?' },
    { id: 'ch3_daarom', dutch: 'daarom', english: 'therefore / that is why', category: 'grammatica', partOfSpeech: 'adverb', exampleSentence: 'Ik ben jarig, daarom betaal ik.', exampleEnglish: 'It\'s my birthday, that is why I pay.' },
    { id: 'ch3_eerste', dutch: 'eerste (1e)', english: 'first', category: 'getallen', partOfSpeech: 'adjective', exampleSentence: 'Dit is ons eerste rondje.', exampleEnglish: 'This is our first round.' },
    { id: 'ch3_tweede', dutch: 'tweede (2e)', english: 'second', category: 'getallen', partOfSpeech: 'adjective', exampleSentence: 'Het tweede rondje betaalt hij.', exampleEnglish: 'The second round he pays.' }
  ],
  grammarPoints: [
    {
      id: 'hoofdzin_met_inversie',
      title: '3.7 Hoofdzin met Inversie (V2-Regel)',
      summary: 'Inversie treedt op als een ander zinsdeel (zoals tijd, plaats of daarom) op positie 1 staat.',
      ruleExplanation: `In een gewone Nederlandse hoofdzin staat het onderwerp op de eerste plaats:
[Onderwerp] + [Persoonsvorm (werkwoord)] + [Rest van de zin]
• "Ik wil nu een cola."
• "Dit rondje betaalt hij."

INVERSIEREGEL:
Als een ANDER element (tijd, plaats, lijdend voorwerp of voegwoordelijk bijwoord zoals 'daarom') op de eerste plaats staat, wisselen persoonsvorm en onderwerp van plaats:
[Ander element (1)] + [PERSOONSVORM (2)] + [ONDERWERP (3)] + [Rest]

Voorbeelden uit het boek:
• "Nu (1) wil (2) ik (3) ook een biertje."
• "Dit rondje (1) betaal (2) ik (3)."
• "Daarom (1) betaal (2) ik (3) het eerste rondje."
• "Zondag (1) is (2) Joyce (3) jarig."
• "In de kantine (1) drinken (2) we (3) koffie."
• "Om 11.00 uur (1) hebben (2) we (3) pauze."
• "Morgen (1) beginnen (2) we (3) met tekst 3."`,
      examples: [
        { dutch: 'Nu wil ik ook een biertje.', english: 'Now I want a beer too.', note: '"Nu" staat voorop -> persoonsvorm "wil" op plaats 2 -> onderwerp "ik" volgt.' },
        { dutch: 'Donderdag is Joyce jarig.', english: 'On Thursday it is Joyce\'s birthday.', note: 'Tijd voorop veroorzaakt inversie van werkwoord en onderwerp.' },
        { dutch: 'Daarom betaal ik het rondje.', english: 'That is why I pay for the round.', note: '"Daarom" veroorzaakt inversie.' }
      ]
    },
    {
      id: 'de_het_en_diminutieven',
      title: '3.6 Artikelen (De vs Het) & Diminutieven (Verkleinwoorden)',
      summary: 'Wanneer gebruik je de of het, en waarom alle verkleinwoorden altijd "het" zijn.',
      ruleExplanation: `1. Lidwoorden (Definiet & Indefiniet):
• De-woorden: de cursus -> een cursus (meervoud: de cursussen)
• Het-woorden: het café -> een café (meervoud: de cafés)

2. Diminutieven (Verkleinwoorden):
In het Nederlands maakt men heel veel verkleinwoorden (meestal door -je, -tje of -pje achter het woord te zetten):
• het bier -> het biertje
• de ronde -> het rondje
• het kopje (van de kop)
• het zusje (van de zus)

GOUDEN REGELS:
• ELK verkleinwoord in het enkelvoud is ALTIJD een HET-woord! (het biertje, het rondje, het koekje)
• ELK meervoud in het Nederlands krijgt ALTIJD het lidwoord DE! (de cursussen, de cafés, de biertjes, de rondjes)`,
      examples: [
        { dutch: 'Doe mij maar een biertje.', english: 'Give me a beer.', note: '"het biertje" is onzijdig (het-woord).' },
        { dutch: 'De biertjes staan op tafel.', english: 'The beers are on the table.', note: 'In het meervoud krijgt elk woord "de"!' }
      ]
    },
    {
      id: 'rangtelwoorden',
      title: '3.8 Rangtelwoorden (1e t/m 100e)',
      summary: 'Eerste, tweede, derde, vierde, tiende...',
      ruleExplanation: `Rangtelwoorden (ordinal numbers) gebruik je voor volgorde en datums:
• 1e eerste, 2e tweede, 3e derde, 4e vierde, 5e vijfde, 6e zesde, 7e zevende, 8e achtste (let op: met s!), 9e negende, 10e tiende
• 11e elfde, 12e twaalfde, 13e dertiende, 14e veertiende, 15e vijftiende, 20e twintigste (vanaf 20 op -ste!)
• 21e eenentwintigste, 100e honderdste

Let op het achtervoegsel:
• t/m 19: meestal +-de (behalve eerste, achtste)
• vanaf 20: altijd +-ste (twintigste, dertigste, honderdste)`,
      examples: [
        { dutch: 'Edit betaalt het eerste rondje.', english: 'Edit pays the first round.', note: 'Rangtelwoord: eerste.' },
        { dutch: 'Maandag is de eerste dag van de week.', english: 'Monday is the first day of the week.', note: 'Volgorde in de kalender.' }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_cafe',
      title: 'Opdracht 1: Begripsvragen dialoog in het café',
      instruction: 'Kies het goede vervolg: a of b (blz. 48).',
      items: [
        {
          id: 1,
          prompt: 'Edit, Andres en Susy zijn...',
          answer: 'a: in een café.',
          options: ['a: in een café.', 'b: in de les.'],
          explanation: 'Ze vieren Edits verjaardag gezellig in het café.'
        },
        {
          id: 2,
          prompt: 'Andres is...',
          answer: 'b: de broer van Edit.',
          options: ['a: de zus van Edit.', 'b: de broer van Edit.'],
          explanation: 'Edit stelt hem voor: "Dit is mijn broer Andres."'
        },
        {
          id: 3,
          prompt: 'Edit en Susy kennen elkaar...',
          answer: 'a: van de cursus.',
          options: ['a: van de cursus.', 'b: van het werk.'],
          explanation: 'Susy antwoordt op Andres\' vraag: "Van de cursus Nederlands."'
        },
        {
          id: 4,
          prompt: 'Edit is jarig en zij geeft...',
          answer: 'a: een rondje.',
          options: ['a: een rondje.', 'b: een glas wijn.'],
          explanation: 'Omdat ze jarig is, trakteert Edit en betaalt ze het eerste rondje.'
        },
        {
          id: 5,
          prompt: 'Andres betaalt...',
          answer: 'b: het tweede rondje.',
          options: ['a: alles.', 'b: het tweede rondje.'],
          explanation: 'Andres zegt: "Dit rondje betaal ik." en Edit bevestigt dat hij het tweede rondje betaalt.'
        }
      ]
    },
    {
      id: 'opdracht_5_de_het',
      title: 'Opdracht 5: Kies bij elk woord "de" of "het"',
      instruction: 'Kies het juiste lidwoord (blz. 51).',
      items: [
        { id: 1, prompt: '_______ café', answer: 'het', options: ['het', 'de'], explanation: 'Het is "het café".' },
        { id: 2, prompt: '_______ biertje', answer: 'het', options: ['het', 'de'], explanation: 'Elk verkleinwoord (diminutief) krijgt "het": het biertje.' },
        { id: 3, prompt: '_______ rondje', answer: 'het', options: ['het', 'de'], explanation: 'Verkleinwoord: "het rondje".' },
        { id: 4, prompt: '_______ cursus', answer: 'de', options: ['de', 'het'], explanation: 'Het is "de cursus".' },
        { id: 5, prompt: '_______ adres', answer: 'het', options: ['het', 'de'], explanation: 'Het is "het adres".' },
        { id: 6, prompt: '_______ wijn', answer: 'de', options: ['de', 'het'], explanation: 'Het is "de wijn".' },
        { id: 7, prompt: '_______ glas', answer: 'het', options: ['het', 'de'], explanation: 'Het is "het glas".' },
        { id: 8, prompt: '_______ rekening', answer: 'de', options: ['de', 'het'], explanation: 'Woorden op -ing zijn de-woorden: de rekening.' },
        { id: 9, prompt: '_______ ober', answer: 'de', options: ['de', 'het'], explanation: 'Beroepen van personen: "de ober".' },
        { id: 10, prompt: '_______ idee', answer: 'het', options: ['het', 'de'], explanation: 'Het is "het idee".' }
      ]
    },
    {
      id: 'opdracht_6_inversie_compleet',
      title: 'Opdracht 6: Hoofdzin met inversie maken',
      instruction: 'Zet het cursieve tijd- of plaatswoord voorop en pas de persoonsvorm aan (blz. 52).',
      items: [
        {
          id: 1,
          prompt: 'Joyce is donderdag jarig. -> Begin met "Donderdag":',
          answer: 'Donderdag is Joyce jarig.',
          acceptableAnswers: ['Donderdag is Joyce jarig', 'Donderdag is Joyce jarig.'],
          explanation: 'Inversie: Donderdag (1) is (2) Joyce (3) jarig.'
        },
        {
          id: 2,
          prompt: 'We drinken koffie in de kantine. -> Begin met "In de kantine":',
          answer: 'In de kantine drinken we koffie.',
          acceptableAnswers: ['In de kantine drinken we koffie', 'In de kantine drinken we koffie.'],
          explanation: 'Inversie: In de kantine (1) drinken (2) we (3) koffie.'
        },
        {
          id: 3,
          prompt: 'Ze wonen in de winter in Barcelona. -> Begin met "In de winter":',
          answer: 'In de winter wonen ze in Barcelona.',
          acceptableAnswers: ['In de winter wonen ze in Barcelona', 'In de winter wonen ze in Barcelona.'],
          explanation: 'Inversie: In de winter (1) wonen (2) ze (3) in Barcelona.'
        },
        {
          id: 4,
          prompt: 'We gaan na de pauze verder. -> Begin met "Na de pauze":',
          answer: 'Na de pauze gaan we verder.',
          acceptableAnswers: ['Na de pauze gaan we verder', 'Na de pauze gaan we verder.'],
          explanation: 'Inversie: Na de pauze (1) gaan (2) we (3) verder.'
        },
        {
          id: 5,
          prompt: 'Eddy geeft vandaag les. -> Begin met "Vandaag":',
          answer: 'Vandaag geeft Eddy les.',
          acceptableAnswers: ['Vandaag geeft Eddy les', 'Vandaag geeft Eddy les.'],
          explanation: 'Inversie: Vandaag (1) geeft (2) Eddy (3) les.'
        },
        {
          id: 6,
          prompt: 'We beginnen morgen met tekst 3. -> Begin met "Morgen":',
          answer: 'Morgen beginnen we met tekst 3.',
          acceptableAnswers: ['Morgen beginnen we met tekst 3', 'Morgen beginnen we met tekst 3.'],
          explanation: 'Inversie: Morgen (1) beginnen (2) we (3) met tekst 3.'
        }
      ]
    }
  ],
  readingText: {
    title: '3.9 Tekst: Het Terras aan de Gracht',
    subtitle: 'Koffiedrinken en bootjes kijken in Utrecht (Blz. 54)',
    content: `Bij goed weer kun je op het terras zitten. Je drinkt dan lekker buiten een kopje koffie, een biertje of een frisdrank. 
In de zomer zit je aan de gracht en kijk je naar de boten in het water. 

In veel Nederlandse steden zoals Utrecht, Amsterdam en Groningen hebben cafés terrassen direct aan het water of op de historische werven. Als de zon schijnt, zitten de terrassen direct vol met studenten en levensgenieters.`,
    vocabularyNotes: [
      { word: 'het terras', translation: 'outdoor terrace / patio' },
      { word: 'de gracht', translation: 'city canal' },
      { word: 'de boten', translation: 'boats' }
    ]
  },
  pronunciation: {
    title: '3.10 Uitspraak: o – oo & Klemtoon',
    soundFocus: 'Korte o [ɔ] versus lange oo [o:] en woordaccent',
    explanation: 'De korte o klinkt als in "kopje" of "stoppen" (in gesloten lettergreep). De lange oo klinkt als in "rood", "wonen" of "proost". Let ook op de klemtoon bij meerlettergrepige woorden!',
    wordList: [
      'blond', 'donker', 'welkom', 'stoppen', 'koffie', 'kopje', 'morgen', 'nog',
      'hoor', 'voor', 'ook', 'woon', 'voorjaar', 'zomer', 'docent', 'komen', 'zo'
    ],
    minimalPairs: [
      { word1: 'kopje', word2: 'kopen', contrast: 'korte o vs lange o in open lettergreep' },
      { word1: 'stoppen', word2: 'stoom', contrast: 'korte o vs dubbele oo' },
      { word1: 'donker', word2: 'docent', contrast: 'korte o vs lange o' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 3: In het café',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is de informele manier om een drankje te bestellen?',
        answer: 'Doe mij maar een biertje.',
        options: [
          'Doe mij maar een biertje.',
          'Ik beveel een biertje aan.',
          'U moet mij een biertje geven.',
          'Hier is een biertje.'
        ],
        explanation: '"Doe mij maar..." is de typisch Nederlandse informele bestelvorm.'
      },
      {
        id: 2,
        prompt: 'Maak de zin met inversie: "Nu (willen) ik ook een biertje."',
        answer: 'Nu wil ik ook een biertje.',
        options: [
          'Nu wil ik ook een biertje.',
          'Nu ik wil ook een biertje.',
          'Nu willen ik een biertje.',
          'Nu een biertje wil ik.'
        ],
        explanation: 'Inversie: persoonsvorm "wil" op positie 2, direct gevolgd door onderwerp "ik".'
      },
      {
        id: 3,
        prompt: 'Welk lidwoord krijgt het verkleinwoord "biertje"?',
        answer: 'het',
        options: ['het', 'de'],
        explanation: 'Alle verkleinwoorden in het enkelvoud krijgen ALTIJD "het".'
      },
      {
        id: 4,
        prompt: 'Wat betekent de uitdrukking: "Ik trakteer"?',
        answer: 'Ik betaal de rekening / het rondje voor iedereen.',
        options: [
          'Ik betaal de rekening / het rondje voor iedereen.',
          'Ik drink geen alcohol.',
          'Ik wil graag naar huis.',
          'Ik vind het café niet leuk.'
        ],
        explanation: '"Trakteren" betekent dat jij de consumpties voor je gezelschap betaalt.'
      },
      {
        id: 5,
        prompt: 'Welk rangtelwoord hoort bij het getal 8?',
        answer: 'achtste',
        options: ['achtste', 'achtde', 'achtsteer', 'achtend'],
        explanation: 'Het rangtelwoord van 8 is "achtste" (met -ste).'
      },
      {
        id: 6,
        prompt: 'Wat zegt de ober als hij naar je bestelling vraagt?',
        answer: 'Zegt u het maar.',
        options: ['Zegt u het maar.', 'Wat moet u?', 'Ik luister niet.', 'Waarom bent u hier?'],
        explanation: '"Zegt u het maar" is de vaste beleefde vraag van een ober of winkelier.'
      },
      {
        id: 7,
        prompt: 'Wat zeg je als je wilt proosten?',
        answer: 'Proost!',
        options: ['Proost!', 'Alsjeblieft!', 'Eet smakelijk!', 'Pardon!'],
        explanation: '"Proost!" is de Nederlandse toost.'
      },
      {
        id: 8,
        prompt: 'Wat is het juiste meervoud van "het café"?',
        answer: 'de cafés',
        options: ['de cafés', 'de caféen', 'het cafés', 'de cafesten'],
        explanation: 'Café krijgt in het meervoud een -s met apostrof: de cafés.'
      },
      {
        id: 9,
        prompt: 'Kies het goede voegwoordelijk bijwoord: "Ik ben jarig, _______ betaal ik het eerste rondje."',
        answer: 'daarom',
        options: ['daarom', 'maar', 'en', 'als'],
        explanation: '"Daarom" (that\'s why) geeft de reden aan en veroorzaakt inversie ("betaal ik").'
      },
      {
        id: 10,
        prompt: 'Hoe vraag je de rekening aan de ober?',
        answer: 'Mag ik de rekening, alstublieft?',
        options: [
          'Mag ik de rekening, alstublieft?',
          'Heb ik geld nodig?',
          'Waarom is het café open?',
          'Wat kost de ober?'
        ],
        explanation: '"Mag ik de rekening, alstublieft?" is de correcte en beleefde manier om af te rekenen.'
      }
    ]
  },
  culturalOrPracticalNote: 'Trakteren & Rondjes geven in het café: Als je in Nederland jarig bent, trakteer je zelf op je eerste rondje of taart. Vrienden betalen daarna om de beurt een "rondje".'
};
