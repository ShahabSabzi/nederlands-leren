import { CustomLessonData } from '../types/lesson';

export const CHAPTER_16_DATA: CustomLessonData = {
  id: 'hoofdstuk_16',
  chapterNumber: 'Hoofdstuk 16',
  chapterTitle: 'Naar de bioscoop',
  description: 'Naar de bioscoop gaan, kaartjes kopen bij de kassa of kiosk, aanvangstijden en vertoningen ("Draait er nog een film?"), ondertiteling vs nasynchronisatie ("Is de film ondertiteld?"), NEVENSCHIKKENDE VOEGWOORDEN (en, of, maar, want, dus), TRAPPEN VAN VERGELIJKING (leuk - leuker - leukst, goed - beter - best, graag - liever - liefst), en het Nederlandse Kijkwijzer-systeem.',
  language: 'Nederlands',
  createdAt: 1727790000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Amira',
      dutch: 'Goedenavond, mag ik een kaartje voor "Alles is liefde"?',
      english: 'Good evening, may I have a ticket for "Alles is liefde" (All is love)?',
      notes: '"Alles is liefde" is a classic Dutch romantic comedy film.',
      keyWords: ['kaartje', 'Alles is liefde']
    },
    {
      id: 2,
      speaker: 'Caissière',
      dutch: 'Goedenavond! Voor wanneer wilt u reserveren?',
      english: 'Good evening! For when would you like to book?',
      notes: '"reserveren" = to reserve / book in advance.',
      keyWords: ['reserveren']
    },
    {
      id: 3,
      speaker: 'Amira',
      dutch: 'Nee, ik wil niet reserveren voor morgen. Ik wil graag een kaartje voor vandaag, voor de voorstelling van 20.15 uur.',
      english: 'No, I don\'t want to book for tomorrow. I would like a ticket for today, for the 20:15 screening.',
      notes: '"de voorstelling" = screening / show / performance.',
      keyWords: ['voorstelling van 20.15 uur']
    },
    {
      id: 4,
      speaker: 'Caissière',
      dutch: 'Het spijt me, maar "Alles is liefde" is al om 19.45 uur begonnen. U mag eventueel nog naar binnen, maar de zaal is donker.',
      english: 'I\'m sorry, but "Alles is liefde" already started at 19:45. You may possibly still go inside, but the hall is dark.',
      notes: '"naar binnen mogen" = to be allowed inside.',
      keyWords: ['al begonnen', 'naar binnen', 'donker']
    },
    {
      id: 5,
      speaker: 'Amira',
      dutch: 'Wat stom! Ik heb verkeerd op de website gekeken. Het is nu al acht uur, dus de film is al een kwartier bezig. Nee, dat wil ik niet, want ik heb het begin gemist. Draaien er vanavond nog andere goede films?',
      english: 'How silly of me! I looked wrongly on the website. It is already eight o\'clock now, so the film has been on for fifteen minutes. No, I don\'t want that, because I missed the beginning. Are other good films showing tonight?',
      notes: 'Coordinating conjunctions: "dus" (so) and "want" (because). "draaien" = to be showing/screening.',
      keyWords: ['wat stom', 'verkeerd gekeken', 'dus', 'want', 'begin gemist', 'draaien er andere films']
    },
    {
      id: 6,
      speaker: 'Caissière',
      dutch: 'Jazeker. Om 20.45 uur draait "Zomerhitte" in zaal 3 en om 21.15 uur de natuurdocumentaire "De Nieuwe Wildernis" in zaal 1. Welke heeft uw voorkeur?',
      english: 'Certainly. At 20:45 "Zomerhitte" is showing in hall 3 and at 21:15 the nature documentary "De Nieuwe Wildernis" in hall 1. Which one do you prefer?',
      notes: '"de voorkeur hebben" = to have preference.',
      keyWords: ['Zomerhitte', 'De Nieuwe Wildernis', 'voorkeur']
    },
    {
      id: 7,
      speaker: 'Amira',
      dutch: 'Is "Zomerhitte" Nederlands gesproken of ondertiteld? Mijn Nederlands is redelijk, maar als ze heel snel praten vind ik ondertiteling wel fijn.',
      english: 'Is "Zomerhitte" spoken in Dutch or subtitled? My Dutch is decent, but when they talk very fast I do appreciate subtitles.',
      notes: '"Nederlands gesproken" vs "ondertiteld" (subtitled).',
      keyWords: ['Nederlands gesproken', 'ondertiteld', 'ondertiteling']
    },
    {
      id: 8,
      speaker: 'Caissière',
      dutch: 'Het is een originele Nederlandse speelfilm, dus Nederlands gesproken zonder ondertitels. Maar het verhaal is heel makkelijk te volgen en de acteurs spreken heel duidelijk!',
      english: 'It is an original Dutch feature film, so Dutch spoken without subtitles. But the story is very easy to follow and the actors speak very clearly!',
      notes: '"de speelfilm" = feature film.',
      keyWords: ['originele speelfilm', 'makkelijk te volgen', 'duidelijk']
    },
    {
      id: 9,
      speaker: 'Amira',
      dutch: 'Oké, doe die dan maar! Krijg ik als student eigenlijk korting op het bioscoopkaartje?',
      english: 'Okay, give me that one then! Do I actually get a discount on the cinema ticket as a student?',
      notes: '"studentenkorting" = student discount.',
      keyWords: ['studentenkorting', 'bioscoopkaartje']
    },
    {
      id: 10,
      speaker: 'Caissière',
      dutch: 'Jazeker, op vertoon van je collegekaart krijg je twee euro korting. Dat wordt dan € 9,50. Wilt u daar nog popcorn of een drankje bij?',
      english: 'Certainly, upon showing your student ID you get two euros discount. That will be € 9.50. Would you like popcorn or a drink with that?',
      notes: '"op vertoon van" = upon presentation of.',
      keyWords: ['collegekaart', 'korting', 'popcorn']
    }
  ],
  vocabulary: [
    {
      id: 'de_bioscoop',
      dutch: 'de bioscoop (de cinema / het filmhuis)',
      english: 'cinema / movie theatre (arthouse cinema)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bioscopen',
      exampleSentence: 'Zullen we zaterdagavond gezellig naar de bioscoop gaan?',
      exampleEnglish: 'Shall we go to the cinema on Saturday night?'
    },
    {
      id: 'de_film',
      dutch: 'de film (de speelfilm / documentaire)',
      english: 'film / movie (feature film / documentary)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de films',
      exampleSentence: 'Welke film draait er vanavond in zaal 4?',
      exampleEnglish: 'Which movie is showing tonight in screen 4?'
    },
    {
      id: 'het_kaartje',
      dutch: 'het bioscoopkaartje (het ticket)',
      english: 'cinema ticket',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kaartjes',
      exampleSentence: 'Je kunt je bioscoopkaartje ook vooraf online bestellen.',
      exampleEnglish: 'You can also order your cinema ticket online beforehand.'
    },
    {
      id: 'de_voorstelling',
      dutch: 'de voorstelling',
      english: 'screening / showing / performance',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de voorstellingen',
      exampleSentence: 'De laatste voorstelling begint om tien over half tien.',
      exampleEnglish: 'The last screening starts at 21:40.'
    },
    {
      id: 'de_zaal',
      dutch: 'de filmzaal',
      english: 'auditorium / screening room',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zalen',
      exampleSentence: 'De filmzaal beschikt over comfortabele pluche fauteuils.',
      exampleEnglish: 'The screening room features comfortable plush armchairs.'
    },
    {
      id: 'reserveren',
      dutch: 'reserveren (de reservering)',
      english: 'to book / reserve (reservation)',
      category: 'administratie',
      partOfSpeech: 'verb',
      exampleSentence: 'Voor populaire premières moet je ruim op tijd reserveren.',
      exampleEnglish: 'For popular premieres you have to reserve well in advance.'
    },
    {
      id: 'de_kassa',
      dutch: 'de kassa (de caissière)',
      english: 'box office / checkout (cashier)',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kassa\'s',
      exampleSentence: 'Haal je gereserveerde kaartjes uiterlijk een kwartier van tevoren af bij de kassa.',
      exampleEnglish: 'Collect your reserved tickets at least fifteen minutes in advance at the box office.'
    },
    {
      id: 'draaien',
      dutch: 'draaien (de film draait)',
      english: 'to show / screen (the movie is playing)',
      category: 'film',
      partOfSpeech: 'verb',
      exampleSentence: 'Die nieuwe actiefilm draait al drie weken in alle steden.',
      exampleEnglish: 'That new action movie has been playing in all cities for three weeks.'
    },
    {
      id: 'de_ondertiteling',
      dutch: 'de ondertiteling (ondertiteld)',
      english: 'subtitles (subtitled)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ondertitels',
      exampleSentence: 'Buitenlandse films worden in Nederland altijd ondertiteld.',
      exampleEnglish: 'Foreign movies are always subtitled in the Netherlands.'
    },
    {
      id: 'nasynchroniseren',
      dutch: 'nasynchroniseren (nagesynchroniseerd)',
      english: 'to dub (dubbed into Dutch)',
      category: 'film',
      partOfSpeech: 'verb',
      exampleSentence: 'Alleen animatiefilms voor jonge kinderen worden nagesynchroniseerd.',
      exampleEnglish: 'Only animated films for young children are dubbed.'
    },
    {
      id: 'de_acteur',
      dutch: 'de acteur / de actrice',
      english: 'actor / actress',
      category: 'mensen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de acteurs / de actrices',
      exampleSentence: 'De hoofdrol wordt gespeeld door een bekende Nederlandse acteur.',
      exampleEnglish: 'The lead role is played by a well-known Dutch actor.'
    },
    {
      id: 'de_regisseur',
      dutch: 'de regisseur',
      english: 'director',
      category: 'mensen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de regisseurs',
      exampleSentence: 'Paul Verhoeven is een van de beroemdste Nederlandse regisseurs.',
      exampleEnglish: 'Paul Verhoeven is one of the most famous Dutch directors.'
    },
    {
      id: 'het_verhaal',
      dutch: 'het verhaal (de plot)',
      english: 'story / plot',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de verhalen',
      exampleSentence: 'Het verhaal speelt zich af in het zeventiende-eeuwse Amsterdam.',
      exampleEnglish: 'The story takes place in seventeenth-century Amsterdam.'
    },
    {
      id: 'het_genre',
      dutch: 'het genre',
      english: 'genre',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de genres',
      exampleSentence: 'Wat is jouw favoriete genre: comedy, thriller of sciencefiction?',
      exampleEnglish: 'What is your favourite genre: comedy, thriller or sci-fi?'
    },
    {
      id: 'de_komedie',
      dutch: 'de komedie (de romantische komedie)',
      english: 'comedy (romantic comedy)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de komedies',
      exampleSentence: 'We hebben enorm gelachen tijdens de komedie.',
      exampleEnglish: 'We laughed immensely during the comedy.'
    },
    {
      id: 'de_spanning',
      dutch: 'de spanning (spannend)',
      english: 'suspense / excitement (thrilling / exciting)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'De Scandinavische detectivefilm zat vol nagelbijtende spanning.',
      exampleEnglish: 'The Scandinavian detective movie was full of nail-biting suspense.'
    },
    {
      id: 'saai',
      dutch: 'saai (langdradig)',
      english: 'boring / tedious',
      category: 'mening',
      partOfSpeech: 'adjective',
      exampleSentence: 'Ik vond het eerste uur nogal saai en langdradig.',
      exampleEnglish: 'I found the first hour quite boring and tedious.'
    },
    {
      id: 'de_popcorn',
      dutch: 'de popcorn (zoet of zout)',
      english: 'popcorn (sweet or salted)',
      category: 'eten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Eet jij in de bioscoop het liefst zoete of zoute popcorn?',
      exampleEnglish: 'Do you prefer sweet or salted popcorn in the cinema?'
    },
    {
      id: 'de_rij_in_zaal',
      dutch: 'de rij (rij 8, stoel 12)',
      english: 'row (row 8, seat 12)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de rijen',
      exampleSentence: 'Onze gereserveerde plaatsen zijn op rij 7 in het midden.',
      exampleEnglish: 'Our reserved seats are in row 7 in the middle.'
    },
    {
      id: 'het_scherm',
      dutch: 'het bioscoopscherm (het doek)',
      english: 'cinema screen',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de schermen',
      exampleSentence: 'De beelden op het gigantische IMAX-scherm waren adembenemend.',
      exampleEnglish: 'The images on the gigantic IMAX screen were breathtaking.'
    },
    {
      id: 'de_kijkwijzer',
      dutch: 'de Kijkwijzer',
      english: 'Kijkwijzer (Dutch age/content rating system)',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Volgens de Kijkwijzer is deze film niet geschikt voor kinderen onder de 16 jaar.',
      exampleEnglish: 'According to Kijkwijzer, this film is not suitable for children under 16.'
    },
    {
      id: 'geschikt',
      dutch: 'geschikt voor (alle leeftijden)',
      english: 'suitable for (all ages)',
      category: 'algemeen',
      partOfSpeech: 'adjective',
      exampleSentence: 'De film is goedgekeurd voor alle leeftijden (AL).',
      exampleEnglish: 'The film is approved for all ages (AL).'
    },
    {
      id: 'het_geweld',
      dutch: 'het geweld (gewelddadig)',
      english: 'violence (violent)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Het pictogram van een vuist waarschuwt voor fysiek geweld.',
      exampleEnglish: 'The icon of a fist warns of physical violence.'
    },
    {
      id: 'de_angst',
      dutch: 'de angst (beangstigend / griezelig)',
      english: 'fear / fright (scary / creepy)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de angsten',
      exampleSentence: 'Het spinnenweb-pictogram waarschuwt voor angstaanjagende scènes.',
      exampleEnglish: 'The spiderweb icon warns of scary scenes.'
    },
    {
      id: 'de_korting',
      dutch: 'de studentenkorting (de CJP-pas)',
      english: 'student discount (youth cultural card)',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kortingen',
      exampleSentence: 'Met een studentenpas of CJP-kaart krijg je fijne korting.',
      exampleEnglish: 'With a student ID or CJP card you get a nice discount.'
    },
    {
      id: 'verkeerd',
      dutch: 'verkeerd gekeken',
      english: 'looked wrongly / misread',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Sorry, ik had verkeerd op de klok gekeken!',
      exampleEnglish: 'Sorry, I had misread the clock!'
    },
    {
      id: 'wat_stom',
      dutch: 'wat stom! (van mij)',
      english: 'how silly / stupid of me!',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ben ik mijn pasje vergeten? Wat stom!',
      exampleEnglish: 'Did I forget my card? How silly of me!'
    },
    {
      id: 'de_voorkeur',
      dutch: 'de voorkeur geven aan...',
      english: 'to prefer / give preference to...',
      category: 'mening',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik geef de voorkeur aan Europese arthousefilms boven Hollywood-blockbusters.',
      exampleEnglish: 'I prefer European arthouse films over Hollywood blockbusters.'
    },
    {
      id: 'liever',
      dutch: 'liever (graag - liever - liefst)',
      english: 'rather / preferably (gladly - rather - most gladly)',
      category: 'grammatica',
      partOfSpeech: 'adverb',
      exampleSentence: 'Drink je liever cola of bruiswater?',
      exampleEnglish: 'Would you rather drink cola or sparkling water?'
    },
    {
      id: 'beter',
      dutch: 'beter (goed - beter - best)',
      english: 'better (good - better - best)',
      category: 'grammatica',
      partOfSpeech: 'adjective',
      exampleSentence: 'Zijn tweede film was nog veel beter dan zijn debuut.',
      exampleEnglish: 'His second film was much better than his debut.'
    },
    {
      id: 'meer',
      dutch: 'meer (veel - meer - meest)',
      english: 'more (much - more - most)',
      category: 'grammatica',
      partOfSpeech: 'adverb',
      exampleSentence: 'Er waren gisteren veel meer bezoekers dan vorige week.',
      exampleEnglish: 'There were many more visitors yesterday than last week.'
    },
    {
      id: 'het_filmfestival',
      dutch: 'het Internationaal Film Festival Rotterdam (IFFR)',
      english: 'International Film Festival Rotterdam',
      category: 'cultuur',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de filmfestivals',
      exampleSentence: 'In januari trekt het IFFR tienduizenden filmliefhebbers naar Rotterdam.',
      exampleEnglish: 'In January IFFR draws tens of thousands of film lovers to Rotterdam.'
    },
    {
      id: 'de_pauze',
      dutch: 'de pauze (zonder pauze)',
      english: 'interval / intermission (without intermission)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de pauzes',
      exampleSentence: 'Tegenwoordig vertonen de meeste bioscopen lange films zonder pauze.',
      exampleEnglish: 'Nowadays most cinemas show long movies without an intermission.'
    },
    {
      id: 'de_reclame',
      dutch: 'de reclame (de trailers)',
      english: 'commercials / adverts (trailers)',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de reclames',
      exampleSentence: 'Vóór de hoofdfilm draaien er tien minuten reclame en trailers.',
      exampleEnglish: 'Before the main feature there are ten minutes of commercials and trailers.'
    },
    {
      id: 'de_geluidseffecten',
      dutch: 'het geluid (Dolby Atmos)',
      english: 'sound / sound system',
      category: 'film',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de geluiden',
      exampleSentence: 'Het indrukwekkende surroundsysteem zorgt voor geweldig geluid.',
      exampleEnglish: 'The impressive surround system provides magnificent sound.'
    },
    {
      id: 'huilen',
      dutch: 'huilen van ontroering',
      english: 'to cry / weep from emotion',
      category: 'gevoel',
      partOfSpeech: 'verb',
      exampleSentence: 'Het einde van de dramafilm was zo droevig dat iedereen moest huilen.',
      exampleEnglish: 'The ending of the drama was so sad that everyone had to weep.'
    },
    {
      id: 'lachen',
      dutch: 'in een deuk liggen (hard lachen)',
      english: 'to laugh out loud / crack up',
      category: 'gevoel',
      partOfSpeech: 'verb',
      exampleSentence: 'Het hele publiek lag in een deuk om de grappige dialogen.',
      exampleEnglish: 'The entire audience cracked up over the hilarious dialogue.'
    },
    {
      id: 'de_recensie',
      dutch: 'de recensie (de filmrecensie)',
      english: 'review (film review)',
      category: 'media',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de recensies',
      exampleSentence: 'De recensent in de krant gaf de film vier sterren.',
      exampleEnglish: 'The reviewer in the newspaper gave the film four stars.'
    },
    {
      id: 'de_sterren',
      dutch: 'vijf sterren krijgen',
      english: 'to receive five stars',
      category: 'mening',
      partOfSpeech: 'phrase',
      exampleSentence: 'De historische speelfilm kreeg unaniem lovende recensies.',
      exampleEnglish: 'The historical feature film received unanimously glowing reviews.'
    },
    {
      id: 'afrekenen',
      dutch: 'afrekenen (betalen met pin)',
      english: 'to settle the bill / pay at counter',
      category: 'geld',
      partOfSpeech: 'verb',
      exampleSentence: 'U kunt contactloos afrekenen bij de pinautomaat.',
      exampleEnglish: 'You can pay contactless at the payment terminal.'
    }
  ],
  grammarPoints: [
    {
      id: 'nevenschikkende_voegwoorden',
      title: '16.1 Nevenschikkende Voegwoorden (EN, MAAR, WANT, OF, DUS)',
      summary: 'Voegwoorden die twee hoofdzinnen verbinden ZONDER de woordvolgorde te veranderen.',
      ruleExplanation: `Nevenschikkende voegwoorden verbinden twee gelijkwaardige hoofdzinnen.
De woordvolgorde verandert NIET: beide zinnen behouden de normale hoofdzinvolgorde (S + V + ...):

De vijf nevenschikkende voegwoorden:
• EN (and): "Ik koop een kaartje EN ik haal een cola."
• MAAR (but): "Ik wil naar binnen, MAAR de film is al begonnen."
• WANT (because / for): "Ik ga niet naar binnen, WANT ik heb het begin gemist."
• OF (or): "Gaan we naar de bioscoop OF blijven we thuis?"
• DUS (so / therefore): "De film draait al twintig minuten, DUS we zijn te laat."

Let op het cruciale verschil tussen WANT en OMDAT:
• WANT verbindt twee HOOFDZINNEN (normale woordvolgorde):
  "Ik ga vroeg naar bed, WANT ik BEN (V) moe (normale volgorde)."
• OMDAT maakt een BIJZIN (alle werkwoorden naar achteren!):
  "Ik ga vroeg naar bed, OMDAT ik moe BEN (V achteraan)."`,
      examples: [
        {
          dutch: 'Zij koopt popcorn en hij bestelt frisdrank.',
          english: 'She buys popcorn and he orders a soda.',
          note: 'Nevenschikking met "en".'
        },
        {
          dutch: 'We rennen snel naar zaal 2, want de voorstelling begint.',
          english: 'We run quickly to room 2, because the screening is starting.',
          note: 'Nevenschikking met "want": normale volgorde.'
        },
        {
          dutch: 'Het regent pijpenstelen, dus we nemen de tram.',
          english: 'It\'s raining cats and dogs, so we take the tram.',
          note: 'Nevenschikking met "dus".'
        }
      ],
      tables: [
        {
          headers: ['Voegwoord', 'Betekenis', 'Voorbeeldzin met normale woordvolgorde'],
          rows: [
            ['en', 'and', 'Ik zie een poster EN ik herken de acteur.'],
            ['maar', 'but', 'Ik wil de film zien, MAAR er zijn geen stoelen meer.'],
            ['want', 'because (hoofdzin)', 'We kiezen zaal 1, WANT die zaal heeft airco.'],
            ['of', 'or', 'Kopen we zoete popcorn OF wil je liever zoute?'],
            ['dus', 'so / therefore', 'We hebben korting, DUS we betalen minder.']
          ]
        }
      ]
    },
    {
      id: 'trappen_van_vergelijking',
      title: '16.2 Trappen van Vergelijking (Comparatief & Superlatief)',
      summary: 'Vergelijkingen maken met -er en -st, plus onregelmatige vormen.',
      ruleExplanation: `1. Regelmatige vorming:
• Positief: leuk -> Comparatief: leukER -> Superlatief: het leukST
• klein -> kleiner -> het kleinst
• spannend -> spannender -> het spannendst

Let op bij vergelijkingen met "DAN" en "EVEN... ALS":
• "Film A is spannender DAN film B." (comparatief + dan)
• "Zaal 1 is EVEN groot ALS zaal 2." (positief + even ... als)

2. Belangrijke onregelmatige trappen:
• goed -> BETER -> het BEST
• veel -> MEER -> het MEEST
• weinig -> MINDER -> het MINST
• graag -> LIEVER -> het LIEFST ("Ik kijk graag drama, maar ik zie liever comedy.")`,
      examples: [
        {
          dutch: 'Welke film vind jij leuker: Zomerhitte of Alles is liefde?',
          english: 'Which movie do you find more enjoyable: Zomerhitte or Alles is liefde?',
          note: 'Comparatief leuker.'
        },
        {
          dutch: 'Ik drink het liefst verse muntthee bij de film.',
          english: 'I most prefer to drink fresh mint tea with the movie.',
          note: 'Superlatief liefst.'
        }
      ]
    },
    {
      id: 'kijkwijzer_systeem',
      title: '16.3 Het Nederlandse Kijkwijzersysteem',
      summary: 'Classificatie van bioscoopfilms en televisieprogramma\'s.',
      ruleExplanation: `In Nederland geeft het Kijkwijzer-systeem aan voor welke leeftijd een film geschikt is en welke elementen erin voorkomen:

Leeftijdscategorieën:
• AL: Alle Leeftijden (all ages)
• 6 / 9 / 12 / 14 / 16 / 18: Niet geschikt voor kinderen onder die leeftijd.
Let op: Voor films met een 16+- of 18+-keuring mag een bioscoop wettelijk GEEN jongere bezoekers toelaten!

Inhoudspictogrammen:
• Vuist = geweld
• Spinnenweb = angst / spanning
• Twee poppetjes = seks
• Spuit = drugs en alcoholmisbruik
• Schreeuwend poppetje = grof taalgebruik
• Voetje = discriminatie`,
      examples: [
        {
          dutch: 'Voor een film met Kijkwijzer 16 moet je aan de kassa je ID-bewijs tonen.',
          english: 'For a film rated 16 you have to show your ID at the ticket desk.',
          note: 'Strikte wettelijke leeftijdsgrens.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_nevenschikking',
      title: 'Opdracht 1: Kies het juiste voegwoord (en, maar, want, dus)',
      instruction: 'Welk voegwoord past logisch in de zin?',
      items: [
        {
          id: 1,
          prompt: 'Ik ga niet meer naar binnen, _______ de film is al twintig minuten bezig.',
          answer: 'want',
          options: ['want', 'maar', 'dus', 'of'],
          explanation: '"Want" geeft de reden aan: ik ga niet naar binnen, want het is al begonnen.'
        },
        {
          id: 2,
          prompt: 'De zaal is helemaal uitverkocht, _______ we moeten een andere voorstelling kiezen.',
          answer: 'dus',
          options: ['dus', 'want', 'maar', 'en'],
          explanation: '"Dus" geeft het gevolg aan: uitverkocht, dus we moeten een andere kiezen.'
        },
        {
          id: 3,
          prompt: 'Amira wilde naar "Alles is liefde", _______ die draait pas weer morgen.',
          answer: 'maar',
          options: ['maar', 'en', 'dus', 'of'],
          explanation: '"Maar" geeft een tegenstelling aan.'
        },
        {
          id: 4,
          prompt: 'Kies je voor zoete popcorn _______ eet je liever tortillachips met kaassaus?',
          answer: 'of',
          options: ['of', 'en', 'dus', 'want'],
          explanation: '"Of" geeft een keuze / alternatief aan.'
        }
      ]
    },
    {
      id: 'opdracht_2_trappen_van_vergelijking',
      title: 'Opdracht 2: Comparatief en Superlatief',
      instruction: 'Vul de juiste vorm in.',
      items: [
        {
          id: 1,
          prompt: 'goed -> Dit vervolg is nog veel _______ dan het eerste deel.',
          answer: 'beter',
          options: ['beter', 'goedst', 'goeder'],
          explanation: 'Goed -> onregelmatig comparatief: beter.'
        },
        {
          id: 2,
          prompt: 'graag -> Ik ga graag naar de bioscoop, maar ik blijf vanavond _______ thuis.',
          answer: 'liever',
          options: ['liever', 'graagst', 'graager'],
          explanation: 'Graag -> liever -> liefst.'
        },
        {
          id: 3,
          prompt: 'spannend -> Van alle thrillers vond ik deze het _______ .',
          answer: 'spannendst',
          options: ['spannendst', 'spannender', 'meest spannend'],
          explanation: 'Superlatief met het: het spannendst.'
        },
        {
          id: 4,
          prompt: 'veel -> In het weekend zijn er altijd veel _______ bezoekers dan op maandag.',
          answer: 'meer',
          options: ['meer', 'meest', 'veeler'],
          explanation: 'Veel -> meer -> meest.'
        }
      ]
    },
    {
      id: 'opdracht_3_kijkwijzer_en_film',
      title: 'Opdracht 3: Bioscoop en Kijkwijzer',
      instruction: 'Welke stelling is waar?',
      items: [
        {
          id: 1,
          prompt: 'Worden buitenlandse speelfilms in Nederlandse bioscopen nagesynchroniseerd?',
          answer: 'Nee, ze worden vrijwel altijd vertoond in de originele taal met Nederlandse ondertitels.',
          options: [
            'Nee, ze worden vrijwel altijd vertoond in de originele taal met Nederlandse ondertitels.',
            'Ja, alle films worden nagesynchroniseerd door Nederlandse stemacteurs.',
            'Nee, buitenlandse films worden zonder enig geluid vertoond.'
          ],
          explanation: 'Nederland heeft een sterke traditie van ondertitelen ipv nasynchroniseren.'
        },
        {
          id: 2,
          prompt: 'Mag een 14-jarige jongere naar een bioscoopfilm met het Kijkwijzer-icoon 16+?',
          answer: 'Nee, voor 16+ geldt een strikt wettelijk verbod voor jongeren onder de 16.',
          options: [
            'Nee, voor 16+ geldt een strikt wettelijk verbod voor jongeren onder de 16.',
            'Ja, mits hij een handtekening van zijn school heeft.',
            'Ja, als hij zoete popcorn koopt.'
          ],
          explanation: 'De 16+- en 18+-classificaties zijn wettelijk bindend in de bioscoop.'
        }
      ]
    }
  ],
  readingText: {
    title: '16.8 Tekst: De Nederlandse Bioscoop- en Filmcultuur',
    subtitle: 'Over ondertitels in plaats van dubbing, filmhuizen en het IFFR (Blz. 240)',
    content: `Voor filmliefhebbers uit landen als Duitsland, Frankrijk, Spanje of Italië is een bioscoopbezoek in Nederland een verademing: in Nederland worden buitenlandse films namelijk vrijwel nooit nagesynchroniseerd (gedubd)! 

Vanaf het allereerste begin van de geluidsfilm koos Nederland voor ondertiteling. Alleen animatiefilms en kinderproducties voor jonge kinderen die nog niet snel genoeg kunnen lezen, worden nagesynchroniseerd met Nederlandse stemacteurs. Daardoor horen Nederlanders van jongs af aan authentiek Engels, Frans of Spaans, wat sterk bijdraagt aan de hoge Engelse taalvaardigheid in Nederland.

Naast grote multiplexbioscopen zoals Pathé, kent bijna elke Nederlandse stad een zogeheten "filmhuis" (arthouse bioscoop). In deze gezellige, kleinschalige theaters draaien kwaliteitsfilms, onafhankelijke documentaires en wereldcinema. Na afloop drink je een biologisch speciaalbiertje of een glas wijn in het bijbehorende bioscoopcafé.

Daarnaast is Rotterdam elke winter het decor van het prestigieuze International Film Festival Rotterdam (IFFR), een van de toonaangevende onafhankelijke filmfestivals ter wereld, waar honderden regisseurs en tienduizenden filmliefhebbers samenkomen.`,
    vocabularyNotes: [
      { word: 'de verademing', translation: 'a relief / breath of fresh air' },
      { word: 'nasynchroniseren', translation: 'to dub / replace audio with voice actors' },
      { word: 'het filmhuis', translation: 'arthouse cinema' },
      { word: 'kleinschalig', translation: 'small-scale / boutique' },
      { word: 'toonaangevend', translation: 'leading / prominent' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Waarom worden buitenlandse speelfilms in Nederland met ondertitels vertoond?',
        answer: 'Omdat Nederlanders traditioneel de voorkeur geven aan de originele stemmen en taal',
        options: [
          'Omdat Nederlanders traditioneel de voorkeur geven aan de originele stemmen en taal',
          'Omdat er in Nederland geen stemacteurs wonen',
          'Omdat ondertitels duurder zijn dan nasynchronisatie'
        ],
        explanation: 'Nederland heeft altijd de voorkeur gegeven aan de originele audiotrack met ondertitels.'
      },
      {
        id: 2,
        prompt: 'Welke categorie films wordt in Nederland wél nagesynchroniseerd?',
        answer: 'Animatiefilms en kinderfilms voor jonge kinderen die nog niet kunnen lezen',
        options: [
          'Animatiefilms en kinderfilms voor jonge kinderen die nog niet kunnen lezen',
          'Actiefilms met veel explosies',
          'Franse en Italiaanse kookprogramma\'s'
        ],
        explanation: 'Alleen producties voor jonge kinderen worden van Nederlandse stemmen voorzien.'
      },
      {
        id: 3,
        prompt: 'Wat typeert een Nederlands "filmhuis"?',
        answer: 'Een kleinschalig theater met onafhankelijke kwaliteitsfilms, documentaires en een gezellig café',
        options: [
          'Een kleinschalig theater met onafhankelijke kwaliteitsfilms, documentaires en een gezellig café',
          'Een drive-in bioscoop waar je alleen met de auto mag komen',
          'Een studio waar alleen maar reclamespotjes worden gemaakt'
        ],
        explanation: 'Een filmhuis richt zich op arthouse cinema, documentaires en ontmoeting.'
      }
    ]
  },
  pronunciation: {
    title: '16.9 Uitspraak: De tweeklanken "ou/au" vs "ui"',
    soundFocus: 'Tweeklanken: "ou/au" (hout, koud, blauw) vs "ui" (huis, luid, uit)',
    explanation: 'De tweeklank "ou" of "au" [ɑu] (in "koud", "hout", "blauw", "auto") begint met een open a-mond en glijdt naar een ronde u. Vergelijk dit met "ui" [œy] (in "huis", "tuin", "luisteren", "buiten"), die veel meer naar voren in de mond gevormd wordt. Luister goed naar het paar "koud" (cold) en "kuit" (calf).',
    wordList: [
      'koud', 'kuit', 'hout', 'huid', 'bout', 'buit', 'rauw', 'ruw', 'blauw', 'bruin', 'auto', 'oud'
    ],
    minimalPairs: [
      { word1: 'koud', word2: 'kuit', contrast: 'ou vs ui' },
      { word1: 'hout', word2: 'huid', contrast: 'ou vs ui' },
      { word1: 'bout', word2: 'buit', contrast: 'ou vs ui' },
      { word1: 'blauw', word2: 'bruin', contrast: 'au vs ui' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 16: Naar de bioscoop',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Welke zin met het nevenschikkende voegwoord "want" heeft de juiste woordvolgorde?',
        options: [
          'Ik ga niet naar de film, want ik ben te moe.',
          'Ik ga niet naar de film, want ik te moe ben.',
          'Ik ga niet naar de film, want ben ik te moe.'
        ],
        answer: 'Ik ga niet naar de film, want ik ben te moe.',
        explanation: 'Na "want" behoudt de zin de normale hoofdzinvolgorde: onderwerp + persoonsvorm.'
      },
      {
        id: 2,
        prompt: 'Welke zin met "dus" is correct?',
        options: [
          'De film is al begonnen, dus we moeten een andere film kiezen.',
          'De film is al begonnen, dus we een andere film kiezen moeten.',
          'De film is al begonnen, dus moeten we een andere film gekozen.'
        ],
        answer: 'De film is al begonnen, dus we moeten een andere film kiezen.',
        explanation: '"Dus" verbindt twee gewone hoofdzinnen.'
      },
      {
        id: 3,
        prompt: 'Wat is de comparatief van het onregelmatige woord "graag"?',
        options: ['liever', 'graager', 'beter', 'meest'],
        answer: 'liever',
        explanation: 'De trappen van graag zijn: graag - liever - het liefst.'
      },
      {
        id: 4,
        prompt: 'Wat is de superlatief van "goed"?',
        options: ['het best', 'het goedst', 'het betere', 'het leukst'],
        answer: 'het best',
        explanation: 'De trappen van goed zijn: goed - beter - het best.'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "bioscoop"?',
        options: ['de bioscoop', 'het bioscoop', 'beide kunnen'],
        answer: 'de bioscoop',
        explanation: 'Bioscoop is een de-woord: de bioscoop (de bioscopen).'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "verhaal"?',
        options: ['het verhaal', 'de verhaal', 'een verhaal (geen lidwoord mogelijk)'],
        answer: 'het verhaal',
        explanation: 'Verhaal is onzijdig: het verhaal (de verhalen).'
      },
      {
        id: 7,
        prompt: 'Wat betekent het als een film in Nederland "ondertiteld" is?',
        options: [
          'De film behoudt de originele audio en heeft Nederlandse vertalingstekst onderaan het scherm.',
          'De film is nagesynchroniseerd met Nederlandse stemmen.',
          'De film heeft geen enkel geluid en alleen muziek.'
        ],
        answer: 'De film behoudt de originele audio en heeft Nederlandse vertalingstekst onderaan het scherm.',
        explanation: 'Ondertiteld betekent dat de vertaling als tekst onderin beeld meeloopt.'
      },
      {
        id: 8,
        prompt: 'Wat geeft het Kijkwijzer-symbool van een "spinnenweb" aan?',
        options: [
          'Angst / beangstigende scènes.',
          'Discriminatie van minderheden.',
          'Overmatig alcoholgebruik.'
        ],
        answer: 'Angst / beangstigende scènes.',
        explanation: 'Het spinnenweb-icoon waarschuwt voor enge of angstaanjagende scènes.'
      },
      {
        id: 9,
        prompt: 'Wat betekent: "Wat stom van mij!"?',
        options: [
          'How silly / foolish of me!',
          'How smart of me!',
          'What a great movie!'
        ],
        answer: 'How silly / foolish of me!',
        explanation: '"Wat stom van me" zeg je als je zelf een domme fout of vergissing hebt gemaakt.'
      },
      {
        id: 10,
        prompt: 'Wat is een "filmhuis" in Nederland?',
        options: [
          'Een arthouse theater voor onafhankelijke films, documentaires en wereldcinema.',
          'Een winkel waar je dvd\'s kunt kopen.',
          'Het woonhuis van een beroemde filmacteur.'
        ],
        answer: 'Een arthouse theater voor onafhankelijke films, documentaires en wereldcinema.',
        explanation: 'Een filmhuis toont niet-commerciële kwaliteitsfilms en cultuurcinema.'
      }
    ]
  },
  culturalOrPracticalNote: 'Bioscoopcultuur in Nederland: In Nederland worden buitenlandse films niet nagesynchroniseerd, maar altijd vertoond in de originele taal met Nederlandse ondertitels (behalve kinderanimatiefilms). Let op: aan de bioscoopkassa moet je bij films met de classificatie 16+ verplicht een identiteitsbewijs tonen!'
};
