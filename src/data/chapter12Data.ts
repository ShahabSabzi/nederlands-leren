import { CustomLessonData } from '../types/lesson';

export const CHAPTER_12_DATA: CustomLessonData = {
  id: 'hoofdstuk_12',
  chapterNumber: 'Hoofdstuk 12',
  chapterTitle: 'Naar de Evenementenhal',
  description: 'De weg vragen en wijzen in het openbaar vervoer (station, tram, hal, verdieping), routeaanwijzingen (rechtdoor, linksaf, de hoek om, oversteken, trap op/af), en SCHEIDBARE WERKWOORDEN (instappen, overstappen, uitstappen, aankomen, meenemen, doorlopen, afslaan).',
  language: 'Nederlands',
  createdAt: 1727750000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Kirsten',
      dutch: 'Goedemorgen meneer, mag ik u iets vragen? Bent u hier bekend? Weet u waar de Evenementenhal is?',
      english: 'Good morning sir, may I ask you something? Are you familiar with this area? Do you know where the Events Hall is?',
      notes: '"Bent u hier bekend?" is the polite Dutch way to ask someone if they know the area.',
      keyWords: ['mag ik u iets vragen', 'bekend', 'Evenementenhal']
    },
    {
      id: 2,
      speaker: 'Voorbijganger',
      dutch: 'Nee, sorry, ik woon hier niet. Dat kunt u beter aan die buschauffeur vragen.',
      english: 'No, sorry, I don\'t live here. You\'d better ask that bus driver.',
      notes: '"Dat kunt u beter aan... vragen" = You\'d better ask...',
      keyWords: ['buschauffeur']
    },
    {
      id: 3,
      speaker: 'Kirsten',
      dutch: 'Goedemorgen, ik moet naar de Evenementenhal. Kan ik dat lopen of is dat te ver?',
      english: 'Good morning, I have to go to the Events Hall. Can I walk that or is it too far?',
      notes: '"Kan ik dat lopen?" = Can I walk that?',
      keyWords: ['lopen', 'te ver']
    },
    {
      id: 4,
      speaker: 'Buschauffeur',
      dutch: 'Het is zeker een uur lopen vanaf hier. U kunt beter met de tram gaan, lijn 25. U hebt geluk, daar komt hij net aan, u kunt direct instappen.',
      english: 'It is certainly an hour\'s walk from here. You\'d better take the tram, line 25. You are in luck, here it comes right now, you can get on straight away.',
      notes: 'Separable verbs: "aankomen" -> "komt aan", "instappen" -> "kunt instappen".',
      keyWords: ['zeker een uur', 'vanaf hier', 'de tram', 'lijn 25', 'geluk', 'komt aan', 'instappen']
    },
    {
      id: 5,
      speaker: 'Kirsten',
      dutch: 'Stopt de tram bij de Evenementenhal of moet ik nog een stuk lopen?',
      english: 'Does the tram stop at the Events Hall or do I still have to walk a bit?',
      notes: '"een stuk lopen" = to walk a stretch / walk a bit.',
      keyWords: ['stopt de tram', 'stuk lopen']
    },
    {
      id: 6,
      speaker: 'Buschauffeur',
      dutch: 'De tram stopt tegenover de ingang van de Evenementenhal, u hoeft alleen maar de straat over te steken.',
      english: 'The tram stops opposite the entrance to the Events Hall, you only have to cross the street.',
      notes: '"oversteken" -> "over te steken". "tegenover" = opposite. "de ingang" = entrance.',
      keyWords: ['tegenover de ingang', 'straat oversteken']
    },
    {
      id: 7,
      speaker: 'Kirsten',
      dutch: 'Dank u wel! En waar moet ik uitstappen?',
      english: 'Thank you! And where should I get off?',
      notes: 'Separable verb: "uitstappen".',
      keyWords: ['waar moet ik uitstappen']
    },
    {
      id: 8,
      speaker: 'Buschauffeur',
      dutch: 'Bij de vijfde halte, die heet "Europaplein". Als u uitstapt, ziet u het grote glazen gebouw direct aan uw linkerhand.',
      english: 'At the fifth stop, which is called "Europaplein". When you get off, you\'ll see the large glass building right on your left.',
      notes: '"aan uw linkerhand" = on your left-hand side.',
      keyWords: ['vijfde halte', 'aan uw linkerhand']
    },
    {
      id: 9,
      speaker: 'Kirsten',
      dutch: 'Goedemiddag mevrouw, ik heb hier een conferentie van logopedisten. Waar moet ik zijn?',
      english: 'Good afternoon madam, I have a speech therapy conference here. Where do I need to be?',
      notes: '"Waar moet ik zijn?" = Where do I need to be / where is it?',
      keyWords: ['conferentie', 'waar moet ik zijn']
    },
    {
      id: 10,
      speaker: 'Receptioniste',
      dutch: 'Die conferentie is op de tweede verdieping in zaal B. U loopt rechtdoor, gaat de hoek om en neemt de roltrap naar boven. Daar wijst een bordje u de weg.',
      english: 'That conference is on the second floor in hall B. You walk straight on, turn the corner and take the escalator upstairs. A sign there will show you the way.',
      notes: 'Directions inside building: rechtdoor, de hoek om, roltrap naar boven, tweede verdieping.',
      keyWords: ['tweede verdieping', 'zaal B', 'rechtdoor', 'de hoek om', 'roltrap']
    }
  ],
  vocabulary: [
    {
      id: 'instappen',
      dutch: 'instappen',
      english: 'to get on / to board (bus, tram, train)',
      category: 'vervoer',
      partOfSpeech: 'verb',
      exampleSentence: 'Iedereen stapt rustig in bij de halte.',
      exampleEnglish: 'Everyone boards quietly at the stop.'
    },
    {
      id: 'uitstappen',
      dutch: 'uitstappen',
      english: 'to get off / to disembark',
      category: 'vervoer',
      partOfSpeech: 'verb',
      exampleSentence: 'Bij het Centraal Station stappen veel reizigers uit.',
      exampleEnglish: 'At Central Station many travellers get off.'
    },
    {
      id: 'overstappen',
      dutch: 'overstappen (op...)',
      english: 'to transfer / change (train, bus, metro)',
      category: 'vervoer',
      partOfSpeech: 'verb',
      exampleSentence: 'In Utrecht moet u overstappen op spoor 5.',
      exampleEnglish: 'In Utrecht you need to transfer at track 5.'
    },
    {
      id: 'oversteken',
      dutch: 'oversteken',
      english: 'to cross (a street, bridge, square)',
      category: 'verkeer',
      partOfSpeech: 'verb',
      exampleSentence: 'Kijk goed links en rechts voor je de straat oversteekt.',
      exampleEnglish: 'Look carefully left and right before you cross the street.'
    },
    {
      id: 'aankomen',
      dutch: 'aankomen',
      english: 'to arrive',
      category: 'verkeer',
      partOfSpeech: 'verb',
      exampleSentence: 'De trein komt over vijf minuten aan op spoor 3.',
      exampleEnglish: 'The train arrives in five minutes on platform 3.'
    },
    {
      id: 'vertrekken',
      dutch: 'vertrekken',
      english: 'to depart / to leave',
      category: 'verkeer',
      partOfSpeech: 'verb',
      exampleSentence: 'De bus vertrekt precies om tien over half negen.',
      exampleEnglish: 'The bus departs exactly at eight forty.'
    },
    {
      id: 'meenemen',
      dutch: 'meenemen',
      english: 'to take along / bring with',
      category: 'werkwoord',
      partOfSpeech: 'verb',
      exampleSentence: 'Neem je een paraplu mee? Het gaat zo regenen.',
      exampleEnglish: 'Are you taking an umbrella with you? It is going to rain soon.'
    },
    {
      id: 'doorlopen',
      dutch: 'doorlopen',
      english: 'to continue walking / walk straight on',
      category: 'beweging',
      partOfSpeech: 'verb',
      exampleSentence: 'U loopt gewoon door tot het einde van de gang.',
      exampleEnglish: 'You just keep walking until the end of the hallway.'
    },
    {
      id: 'afslaan',
      dutch: 'afslaan (linksaf / rechtsaf)',
      english: 'to turn (left / right)',
      category: 'beweging',
      partOfSpeech: 'verb',
      exampleSentence: 'Bij het verkeerslicht slaat u rechtsaf.',
      exampleEnglish: 'At the traffic lights you turn right.'
    },
    {
      id: 'de_halte',
      dutch: 'de halte',
      english: 'stop (bus stop / tram stop)',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de haltes',
      exampleSentence: 'We wachten bij de bushalte op lijn 12.',
      exampleEnglish: 'We are waiting at the bus stop for line 12.'
    },
    {
      id: 'het_station',
      dutch: 'het station',
      english: 'station / railway station',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de stations',
      exampleSentence: 'Het station ligt op tien minuten loopafstand.',
      exampleEnglish: 'The station is ten minutes\' walking distance.'
    },
    {
      id: 'het_spoor',
      dutch: 'het spoor / het perron',
      english: 'track / platform',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de sporen / de perrons',
      exampleSentence: 'De intercity naar Den Haag vertrekt vanaf spoor 4b.',
      exampleEnglish: 'The intercity to The Hague departs from track 4b.'
    },
    {
      id: 'de_tram',
      dutch: 'de tram',
      english: 'tram',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de trams',
      exampleSentence: 'In Amsterdam reizen veel mensen met de tram.',
      exampleEnglish: 'In Amsterdam many people travel by tram.'
    },
    {
      id: 'de_buschauffeur',
      dutch: 'de buschauffeur',
      english: 'bus driver',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de buschauffeurs',
      exampleSentence: 'U kunt een kaartje kopen bij de buschauffeur.',
      exampleEnglish: 'You can buy a ticket from the bus driver.'
    },
    {
      id: 'de_ingang',
      dutch: 'de ingang',
      english: 'entrance',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ingangen',
      exampleSentence: 'De hoofdingang van het museum bevindt zich aan de voorzijde.',
      exampleEnglish: 'The main entrance of the museum is located at the front.'
    },
    {
      id: 'de_uitgang',
      dutch: 'de uitgang (de nooduitgang)',
      english: 'exit (emergency exit)',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de uitgangen',
      exampleSentence: 'Volg de groene bordjes naar de dichtstbijzijnde uitgang.',
      exampleEnglish: 'Follow the green signs to the nearest exit.'
    },
    {
      id: 'de_verdieping',
      dutch: 'de verdieping / de etage',
      english: 'floor / storey',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de verdiepingen',
      exampleSentence: 'Het kantoor bevindt zich op de derde verdieping.',
      exampleEnglish: 'The office is situated on the third floor.'
    },
    {
      id: 'de_begane_grond',
      dutch: 'de begane grond',
      english: 'ground floor',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'De receptie en garderobe zijn op de begane grond.',
      exampleEnglish: 'The reception and cloakroom are on the ground floor.'
    },
    {
      id: 'de_lift',
      dutch: 'de lift',
      english: 'lift / elevator',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de liften',
      exampleSentence: 'Als u slecht ter been bent, kunt u de lift nemen.',
      exampleEnglish: 'If you have difficulty walking, you can take the lift.'
    },
    {
      id: 'de_roltrap',
      dutch: 'de roltrap',
      english: 'escalator',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de roltrappen',
      exampleSentence: 'Neem de roltrap naar boven naar zaal 4.',
      exampleEnglish: 'Take the escalator upstairs to hall 4.'
    },
    {
      id: 'de_trap',
      dutch: 'de trap (trap op / trap af)',
      english: 'stairs (upstairs / downstairs)',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de trappen',
      exampleSentence: 'We gaan met de trap naar beneden.',
      exampleEnglish: 'We are taking the stairs downstairs.'
    },
    {
      id: 'de_gang',
      dutch: 'de gang',
      english: 'corridor / hallway',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de gangen',
      exampleSentence: 'Aan het einde van de gang vindt u de toiletten.',
      exampleEnglish: 'At the end of the corridor you will find the restrooms.'
    },
    {
      id: 'de_zaal',
      dutch: 'de zaal',
      english: 'hall / auditorium / large room',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zalen',
      exampleSentence: 'De lezing vindt plaats in zaal C op de eerste etage.',
      exampleEnglish: 'The lecture takes place in room C on the first floor.'
    },
    {
      id: 'het_kruispunt',
      dutch: 'het kruispunt',
      english: 'crossroads / intersection',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de kruispunten',
      exampleSentence: 'Bij het kruispunt moet u goed uitkijken voor fietsers.',
      exampleEnglish: 'At the crossroads you must watch out carefully for cyclists.'
    },
    {
      id: 'het_verkeerslicht',
      dutch: 'het verkeerslicht / het stoplicht',
      english: 'traffic light',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de verkeerslichten',
      exampleSentence: 'Wacht voor het rode verkeerslicht tot het groen wordt.',
      exampleEnglish: 'Wait in front of the red traffic light until it turns green.'
    },
    {
      id: 'de_hoek',
      dutch: 'de hoek (de hoek om)',
      english: 'corner (around the corner)',
      category: 'richting',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de hoeken',
      exampleSentence: 'Als u de hoek omgaat, ziet u de bakkerij.',
      exampleEnglish: 'When you turn around the corner, you see the bakery.'
    },
    {
      id: 'rechtdoor',
      dutch: 'rechtdoor',
      english: 'straight ahead / straight on',
      category: 'richting',
      partOfSpeech: 'adverb',
      exampleSentence: 'Loop vijfhonderd meter rechtdoor langs de gracht.',
      exampleEnglish: 'Walk five hundred metres straight ahead along the canal.'
    },
    {
      id: 'linksaf',
      dutch: 'linksaf',
      english: 'to the left',
      category: 'richting',
      partOfSpeech: 'adverb',
      exampleSentence: 'Bij de rotonde gaat u de eerste afslag linksaf.',
      exampleEnglish: 'At the roundabout you take the first exit to the left.'
    },
    {
      id: 'rechtsaf',
      dutch: 'rechtsaf',
      english: 'to the right',
      category: 'richting',
      partOfSpeech: 'adverb',
      exampleSentence: 'Sla na de kerk rechtsaf de Kerkstraat in.',
      exampleEnglish: 'Turn right after the church into Kerkstraat.'
    },
    {
      id: 'tegenover',
      dutch: 'tegenover',
      english: 'opposite / across from',
      category: 'richting',
      partOfSpeech: 'preposition',
      exampleSentence: 'De apotheek ligt recht tegenover de supermarkt.',
      exampleEnglish: 'The pharmacy is right opposite the supermarket.'
    },
    {
      id: 'aan_uw_linkerhand',
      dutch: 'aan uw linkerhand / rechterhand',
      english: 'on your left-hand / right-hand side',
      category: 'richting',
      partOfSpeech: 'phrase',
      exampleSentence: 'Het museum bevindt zich direct aan uw linkerhand.',
      exampleEnglish: 'The museum is situated right on your left-hand side.'
    },
    {
      id: 'bekend_zijn',
      dutch: 'bekend zijn (hier bekend zijn)',
      english: 'to be familiar (with this area)',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Pardon mevrouw, bent u hier een beetje bekend?',
      exampleEnglish: 'Excuse me madam, are you familiar around here?'
    },
    {
      id: 'de_weg_wijzen',
      dutch: 'de weg vragen / de weg wijzen',
      english: 'to ask directions / to give directions',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Kunt u mij alstublieft de weg wijzen naar het theater?',
      exampleEnglish: 'Could you please show me the way to the theatre?'
    },
    {
      id: 'de_routebeschrijving',
      dutch: 'de routebeschrijving',
      english: 'directions / route description',
      category: 'verkeer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de routebeschrijvingen',
      exampleSentence: 'Ik stuur je de routebeschrijving via WhatsApp.',
      exampleEnglish: 'I will send you the directions via WhatsApp.'
    },
    {
      id: 'het_openbaar_vervoer',
      dutch: 'het openbaar vervoer (het ov)',
      english: 'public transport (public transit)',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Nederland heeft een uitstekend netwerk van openbaar vervoer.',
      exampleEnglish: 'The Netherlands has an excellent public transport network.'
    },
    {
      id: 'de_ov_chipkaart',
      dutch: 'de ov-chipkaart',
      english: 'public transport smart card',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ov-chipkaarten',
      exampleSentence: 'Vergeet niet om in en uit te checken met je ov-chipkaart.',
      exampleEnglish: 'Don\'t forget to check in and out with your transit card.'
    },
    {
      id: 'inchecken',
      dutch: 'inchecken / uitchecken',
      english: 'to check in / to check out',
      category: 'vervoer',
      partOfSpeech: 'verb',
      exampleSentence: 'Houd je pas tegen de kaartlezer om in te checken.',
      exampleEnglish: 'Hold your card against the reader to check in.'
    },
    {
      id: 'de_vertraging',
      dutch: 'de vertraging',
      english: 'delay',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de vertragingen',
      exampleSentence: 'De trein heeft wegens een wisselstoring tien minuten vertraging.',
      exampleEnglish: 'The train has a ten-minute delay due to a switch malfunction.'
    },
    {
      id: 'de_kaartjesautomaat',
      dutch: 'de kaartjesautomaat',
      english: 'ticket machine',
      category: 'vervoer',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kaartjesautomaten',
      exampleSentence: 'U kunt een treinkaartje pinnen bij de gele automaat.',
      exampleEnglish: 'You can buy a train ticket with debit card at the yellow machine.'
    },
    {
      id: 'te_ver',
      dutch: 'te ver / dichtbij',
      english: 'too far / close by',
      category: 'afstand',
      partOfSpeech: 'adjective',
      exampleSentence: 'Is het te ver om te lopen, of is het dichtbij?',
      exampleEnglish: 'Is it too far to walk, or is it close by?'
    }
  ],
  grammarPoints: [
    {
      id: 'scheidbare_werkwoorden',
      title: '12.1 Scheidbare Werkwoorden (Separable Verbs)',
      summary: 'Werkwoorden waarvan het voorvoegsel losraakt en achteraan de zin staat.',
      ruleExplanation: `Veel Nederlandse werkwoorden bestaan uit een voorvoegsel en een basiswerkwoord:
• in + stappen = instappen
• uit + stappen = uitstappen
• over + steken = oversteken
• aan + komen = aankomen
• mee + nemen = meenemen

1. In de tegenwoordige tijd (hoofdzin):
Het werkwoord splitst zich. De vervoegde vorm staat op positie 2, en het voorvoegsel gaat helemaal naar het EINDE van de zin:
• "Ik STAP bij de volgende halte UIT."
• "De trein KOMT over vijf minuten AAN."
• "Zij STEEKT de drukke straat OVER."

2. Met een modaal hulpwerkwoord (moeten, kunnen, willen, zullen):
Het scheidbare werkwoord blijft één geheel en staat als infinitief achteraan:
• "U kunt direct INSTAPPEN."
• "Waar moet ik UITSTAPPEN?"
• "U hoeft alleen de straat OVER TE STEKEN."`,
      examples: [
        {
          dutch: 'Waar stapt u uit? - Ik stap bij het Europaplein uit.',
          english: 'Where do you get off? - I get off at Europaplein.',
          note: 'Vervoeging "stap... uit".'
        },
        {
          dutch: 'De buschauffeur roept de volgende halte om.',
          english: 'The bus driver announces the next stop.',
          note: 'Omroepen -> roept... om.'
        },
        {
          dutch: 'U kunt hier overstappen op metrolijn 52.',
          english: 'You can transfer here to metro line 52.',
          note: 'Met hulpwerkwoord "kunt" blijft "overstappen" heel.'
        }
      ],
      tables: [
        {
          headers: ['Infinitief', 'Tegenwoordige tijd (hoofdzin)', 'Met modaal hulpwerkwoord'],
          rows: [
            ['instappen', 'Ik stap in de tram in.', 'Ik wil direct instappen.'],
            ['uitstappen', 'Zij stapt bij het station uit.', 'Zij moet hier uitstappen.'],
            ['overstappen', 'Wij stappen in Utrecht over.', 'Wij moeten op spoor 4 overstappen.'],
            ['oversteken', 'Hij steekt het plein over.', 'Hij kan veilig oversteken.'],
            ['meenemen', 'Neem jij een paraplu mee?', 'Wil je een paraplu meenemen?']
          ]
        }
      ]
    },
    {
      id: 'de_weg_vragen_en_wijzen',
      title: '12.2 De Weg Vragen en Wijzen',
      summary: 'Standaardformuleringen voor routebeschrijvingen en aanwijzingen.',
      ruleExplanation: `Handige zinnen om de weg te vragen:
• "Pardon, mag ik u iets vragen? Weet u waar het station is?"
• "Bent u hier bekend?"
• "Hoe kom ik bij het museum?"
• "Kan ik dat lopen of is het te ver?"
• "Waar moet ik zijn?"

Routeaanwijzingen begrijpen en geven:
• rechtdoor lopen (walk straight on)
• de eerste / tweede straat linksaf / rechtsaf (first/second street left/right)
• de hoek omgaan (go around the corner)
• de brug overgaan / de straat oversteken (cross bridge / street)
• aan uw linkerhand / rechterhand (on your left / right)
• tegenover het postkantoor (opposite the post office)`,
      examples: [
        {
          dutch: 'Ga bij het stoplicht linksaf en loop dan 200 meter rechtdoor.',
          english: 'Turn left at the traffic light and then walk 200 metres straight on.',
          note: 'Imperatief aanwijzing.'
        },
        {
          dutch: 'U vindt het kantoor direct tegenover de bushalte.',
          english: 'You will find the office right opposite the bus stop.',
          note: 'Plaatsaanduiding.'
        }
      ]
    },
    {
      id: 'verdiepingen_in_gebouwen',
      title: '12.3 Verdiepingen en Oriëntatie in Gebouwen',
      summary: 'Verdiepingen, etages, liften en trappen in Nederlandse openbare gebouwen.',
      ruleExplanation: `In Nederland is de telling van verdiepingen als volgt:
• begane grond (BG) = ground floor (0)
• eerste verdieping / etage = 1st floor (één trap omhoog)
• tweede verdieping = 2nd floor
• souterrain / kelder = basement (-1)

Hoe beweeg je je door het gebouw?
• met de trap naar boven / naar beneden
• met de lift naar de derde verdieping
• met de roltrap naar de Evenementenhal
• aan het einde van de gang linksaf`,
      examples: [
        {
          dutch: 'De garderobe is op de begane grond, de conferentiezalen zijn op de eerste verdieping.',
          english: 'The cloakroom is on the ground floor, the conference halls are on the first floor.',
          note: 'Etage-aanduiding.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_scheidbaar',
      title: 'Opdracht 1: Vervoeg het scheidbare werkwoord',
      instruction: 'Zet de delen van het scheidbare werkwoord op de juiste plek.',
      items: [
        {
          id: 1,
          prompt: 'uitstappen -> Kirsten _______ bij de halte Europaplein _______.',
          answer: 'stapt ... uit',
          options: ['stapt ... uit', 'uitstapt', 'stapt uit ...'],
          explanation: 'In een gewone hoofdzin: "Kirsten stapt ... uit".'
        },
        {
          id: 2,
          prompt: 'aankomen -> De sneltrein _______ om tien over drie _______.',
          answer: 'komt ... aan',
          options: ['komt ... aan', 'aankomt', 'komt aan ...'],
          explanation: 'Vervoeging van aankomen: "komt ... aan".'
        },
        {
          id: 3,
          prompt: 'meenemen -> _______ jij je studentenkaart en laptop _______?',
          answer: 'Neem ... mee',
          options: ['Neem ... mee', 'Meeneem ...', 'Neemt mee ...'],
          explanation: 'Inversievraag: "Neem jij ... mee?".'
        },
        {
          id: 4,
          prompt: 'oversteken -> De voetgangers _______ het drukke kruispunt _______.',
          answer: 'steken ... over',
          options: ['steken ... over', 'oversteken', 'steekt over ...'],
          explanation: 'Meervoud: voetgangers steken ... over.'
        },
        {
          id: 5,
          prompt: 'overstappen (met modaal werkwoord) -> U moet op station Amersfoort _______ .',
          answer: 'overstappen',
          options: ['overstappen', 'stapt over', 'over te stappen'],
          explanation: 'Na het modale werkwoord "moet" komt de volledige infinitief achteraan: "overstappen".'
        }
      ]
    },
    {
      id: 'opdracht_2_route_aanwijzingen',
      title: 'Opdracht 2: Route en richting',
      instruction: 'Kies het juiste woord voor de routebeschrijving.',
      items: [
        {
          id: 1,
          prompt: 'U loopt 300 meter _______ tot aan de grote gracht.',
          answer: 'rechtdoor',
          options: ['rechtdoor', 'linksaf', 'tegenover'],
          explanation: 'Rechtdoor betekent in een rechte lijn vooruit.'
        },
        {
          id: 2,
          prompt: 'Bij het rode bakstenen museum slaat u _______ de Nieuwstraat in.',
          answer: 'rechtsaf',
          options: ['rechtsaf', 'te ver', 'op tijd'],
          explanation: 'Afslaan doe je linksaf of rechtsaf.'
        },
        {
          id: 3,
          prompt: 'De halte van de bus bevindt zich direct _______ het stadhuis.',
          answer: 'tegenover',
          options: ['tegenover', 'rechtdoor', 'sinds'],
          explanation: 'Tegenover betekent aan de overkant van de straat.'
        },
        {
          id: 4,
          prompt: 'Als u het station uitloopt, ziet u de fietsenstalling aan uw _______ .',
          answer: 'linkerhand',
          options: ['linkerhand', 'buitenkant', 'voorkeur'],
          explanation: 'Aan uw linkerhand = aan de linkerkant.'
        }
      ]
    },
    {
      id: 'opdracht_3_gebouw_oriëntatie',
      title: 'Opdracht 3: In het gebouw',
      instruction: 'Welke term hoort bij de situatie?',
      items: [
        {
          id: 1,
          prompt: 'Als je een gebouw binnenkomt via de straat, ben je op de:',
          answer: 'begane grond',
          options: ['begane grond', 'eerste verdieping', 'zolder'],
          explanation: 'Straatniveau is in Nederland de begane grond.'
        },
        {
          id: 2,
          prompt: 'Een bewegende trap die je automatisch omhoog brengt heet een:',
          answer: 'roltrap',
          options: ['roltrap', 'lift', 'wissel'],
          explanation: 'Een bewegende trap is een roltrap.'
        },
        {
          id: 3,
          prompt: 'Zaal 14 bevindt zich helemaal aan het einde van de lange:',
          answer: 'gang',
          options: ['gang', 'halte', 'perron'],
          explanation: 'Een corridor in een gebouw noem je een gang.'
        }
      ]
    }
  ],
  readingText: {
    title: '12.8 Tekst: Reizen met het OV in Nederland',
    subtitle: 'Over treinen, trams, de gele automaten en inchecken met de OV-chipkaart (Blz. 182)',
    content: `Het Nederlandse openbaar vervoer behoort tot de modernste en drukst bereden netwerken ter wereld. Bijna elke stad en elk dorp is bereikbaar per trein of streekbus.

Het centrale betalingssysteem in het hele land is de OV-chipkaart (en tegenwoordig ook OVpay via je betaalpas of mobiele telefoon). Het principe is eenvoudig maar strikt: je moet ALTIJD inchecken bij het betreden van het station of het voertuig, en ALTIJD uitchecken wanneer je je reis beëindigt. Vergeet je uit te checken bij de NS-trein? Dan kost dat automatisch een instaptarief van € 20,-!

Op grote stations vind je poortjes die alleen opengaan wanneer je incheckt. In trams en stadsbussen bevinden de kaartlezers zich bij de deuren. 

Wanneer je met de trein reist, kun je via de NS-app live zien vanaf welk spoor je trein vertrekt en of er vertraging is. Moet je overstappen? De app toont precies hoeveel minuten overstaptijd je hebt en naar welk perron je moet lopen. Reizigers die graag rustig werken kunnen kiezen voor de "stiltecoupé", herkenbaar aan het woord "STILTE" en het pictogram op het raam.`,
    vocabularyNotes: [
      { word: 'druk bereden', translation: 'heavily travelled / busy' },
      { word: 'het instaptarief', translation: 'boarding fare / default penalty charge' },
      { word: 'de poortjes', translation: 'gates / turnstiles at station' },
      { word: 'de stiltecoupé', translation: 'quiet carriage in Dutch trains' },
      { word: 'de wisselstoring', translation: 'points / railway switch failure' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat gebeurt er als je vergeet uit te checken in de Nederlandse trein?',
        answer: 'Je betaalt automatisch het volledige instaptarief van € 20,-',
        options: [
          'Je betaalt automatisch het volledige instaptarief van € 20,-',
          'Je OV-kaart wordt meteen geblokkeerd door de politie',
          'Er gebeurt niets, de reis is gratis'
        ],
        explanation: 'Bij de NS wordt een borg van € 20,- ingehouden als je niet uitcheckt.'
      },
      {
        id: 2,
        prompt: 'Wat is een "stiltecoupé" in een Nederlandse intercitytrein?',
        answer: 'Een speciaal treinstel waar reizigers stil moeten zijn om te lezen of werken',
        options: [
          'Een speciaal treinstel waar reizigers stil moeten zijn om te lezen of werken',
          'Een coupé waar geen muziek gespeeld mag worden door muzikanten',
          'Een ruimte die alleen bedoeld is voor baby\'s'
        ],
        explanation: 'In de stiltecoupé wordt van iedereen absolute stilte verwacht.'
      },
      {
        id: 3,
        prompt: 'Waar bevinden zich de kaartlezers in trams en stadsbussen?',
        answer: 'Direct bij de in- en uitstapdeuren in het voertuig',
        options: [
          'Direct bij de in- en uitstapdeuren in het voertuig',
          'Alleen bij de bestuurder voorin op zijn dashboard',
          'Buiten op het trottoir bij de haltepaal'
        ],
        explanation: 'In bussen en trams check je in en uit bij de lezers naast de deuren.'
      }
    ]
  },
  pronunciation: {
    title: '12.9 Uitspraak: De klinkers "oe", "uu" en "oo"',
    soundFocus: 'Klinkers: "oe" (hoek, boek) vs "uu" (uur, buur) vs "oo" (spoor, rood)',
    explanation: 'De klinker "uu" [y] (in "uur", "minuut", "buurman") maak je door je lippen sterk te tuiten alsof je een kaarsje uitblaast, terwijl je tong vooraan staat. Vergelijk dit met "oe" [u] (in "hoek", "boek", "stoel") waarbij je tong naar achteren gaat, en "oo" [o:] (in "spoor", "groot", "rood").',
    wordList: [
      'uur', 'boer', 'boor', 'buur', 'moer', 'muur', 'hoek', 'doek', 'duur', 'spoor', 'groep', 'vroeg'
    ],
    minimalPairs: [
      { word1: 'buur', word2: 'boer', contrast: 'uu vs oe' },
      { word1: 'muur', word2: 'moer', contrast: 'uu vs oe' },
      { word1: 'duur', word2: 'door', contrast: 'uu vs oo' },
      { word1: 'boer', word2: 'boor', contrast: 'oe vs oo' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 12: Naar de Evenementenhal',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is de correcte zin met het scheidbare werkwoord "uitstappen"?',
        options: [
          'Ik stap bij het Centraal Station uit.',
          'Ik uitstap bij het Centraal Station.',
          'Ik stap uit bij het Centraal Station binnen.'
        ],
        answer: 'Ik stap bij het Centraal Station uit.',
        explanation: 'In een hoofdzin staat de persoonsvorm op positie 2 en het voorvoegsel "uit" helemaal achteraan.'
      },
      {
        id: 2,
        prompt: 'Wat is de correcte zin met het modale werkwoord "moeten" en "overstappen"?',
        options: [
          'U moet in Utrecht op spoor 7 overstappen.',
          'U moet in Utrecht op spoor 7 stapt over.',
          'U overstapt moet in Utrecht op spoor 7.'
        ],
        answer: 'U moet in Utrecht op spoor 7 overstappen.',
        explanation: 'Na een modaal werkwoord ("moet") staat de volledige infinitief ("overstappen") achteraan.'
      },
      {
        id: 3,
        prompt: 'Welke verdieping bevindt zich op straatniveau?',
        options: ['de begane grond', 'de eerste verdieping', 'het souterrain', 'de tweede etage'],
        answer: 'de begane grond',
        explanation: 'Straatniveau is in Nederland altijd de begane grond.'
      },
      {
        id: 4,
        prompt: 'Wat betekent: "Het theater ligt tegenover het museum"?',
        options: [
          'Het theater ligt aan de overkant van de straat tegenover het museum.',
          'Het theater is gevestigd in de kelder van het museum.',
          'Het theater ligt twintig kilometer buiten de stad.'
        ],
        answer: 'Het theater ligt aan de overkant van de straat tegenover het museum.',
        explanation: '"Tegenover" betekent direct aan de overzijde (opposite).'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "verkeerslicht"?',
        options: ['het verkeerslicht', 'de verkeerslicht', 'een verkeerslicht (geen lidwoord mogelijk)'],
        answer: 'het verkeerslicht',
        explanation: 'Licht is onzijdig (het licht), dus ook samenstellingen: het verkeerslicht / het stoplicht.'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "halte"?',
        options: ['de halte', 'het halte', 'beide kunnen'],
        answer: 'de halte',
        explanation: 'Halte is een de-woord: de bushalte, de tramhalte.'
      },
      {
        id: 7,
        prompt: 'Vervoeg in de tegenwoordige tijd: "De buschauffeur _______ (aankomen) bij het station."',
        options: ['komt ... aan', 'aankomt', 'komt aanrijden aan'],
        answer: 'komt ... aan',
        explanation: 'Aankomen splitst: "komt bij het station aan".'
      },
      {
        id: 8,
        prompt: 'Wat moet je doen als je met de trein reist in Nederland?',
        options: [
          'Zowel inchecken bij vertrek als uitchecken bij aankomst.',
          'Alleen inchecken bij vertrek; uitchecken is niet nodig.',
          'Geen van beide als je een betaalpas hebt.'
        ],
        answer: 'Zowel inchecken bij vertrek als uitchecken bij aankomst.',
        explanation: 'In- én uitchecken is verplicht bij elke reis.'
      },
      {
        id: 9,
        prompt: 'Wat betekent "Bent u hier bekend?"',
        options: [
          'Are you familiar with this neighbourhood / area?',
          'Are you a famous celebrity?',
          'Are you looking for someone famous?'
        ],
        answer: 'Are you familiar with this neighbourhood / area?',
        explanation: '"Hier bekend zijn" betekent de buurt of de stad goed kennen.'
      },
      {
        id: 10,
        prompt: 'Wat is een "roltrap"?',
        options: [
          'An escalator (moving staircase).',
          'A wheelchair ramp.',
          'A revolving door.'
        ],
        answer: 'An escalator (moving staircase).',
        explanation: 'Een roltrap is een bewegende trap (escalator).'
      }
    ]
  },
  culturalOrPracticalNote: 'Reizen met het openbaar vervoer: In Nederland check je altijd in én uit met je ov-chipkaart of bankpas. Let op bij het overstappen van NS-trein naar bijvoorbeeld een Arriva- of Blauwnet-trein: dan moet je eerst "omchecken" bij de speciale paaltjes op het perron!'
};
