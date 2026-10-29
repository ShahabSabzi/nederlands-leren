import { CustomLessonData } from '../types/lesson';

export const CHAPTER_18_DATA: CustomLessonData = {
  id: 'hoofdstuk_18',
  chapterNumber: 'Hoofdstuk 18',
  chapterTitle: 'Bij de politie',
  description: 'Aangifte doen van diefstal bij de politie, een gebeurtenis in het verleden chronologisch beschrijven, bankpassen laten blokkeren, signalement van een dader geven (lengte, kleding, uiterlijk), en DE HOOFDPIJLER VAN DE NEDERLANDSE GRAMMATICA: ONDERSCHIKKENDE VOEGWOORDEN EN BIJZINNEN (omdat, als, toen, terwijl, voordat, nadat, hoewel, zodat, zodra - alle werkwoorden naar het einde!).',
  language: 'Nederlands',
  createdAt: 1727810000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Sam',
      dutch: 'Goedemiddag agent, mijn portemonnee is zojuist gestolen. Ik wil graag direct aangifte doen.',
      english: 'Good afternoon officer, my wallet was just stolen. I would like to file an official police report right away.',
      notes: '"aangifte doen" = to file a police report. "zojuist" = just a moment ago.',
      keyWords: ['portemonnee gestolen', 'aangifte doen', 'zojuist']
    },
    {
      id: 2,
      speaker: 'Politieagent',
      dutch: 'Wat vervelend voor u. Dat kan uiteraard. U kunt tegenwoordig ook online aangifte doen, maar we kunnen het hier meteen aan het loket opnemen. Wat is er precies gebeurd?',
      english: 'How unfortunate for you. That is certainly possible. Nowadays you can also file a report online, but we can take it down here at the desk right away. What happened exactly?',
      notes: '"Wat is er precies gebeurd?" is the standard question.',
      keyWords: ['online aangifte', 'aan het loket', 'wat is er gebeurd']
    },
    {
      id: 3,
      speaker: 'Sam',
      dutch: 'Ik zat met een collega op een terrasje aan de Oude Gracht. Toen ik wilde afrekenen, lag mijn portemonnee niet meer op tafel. Ik heb overal onder de stoelen gezocht, maar hij was spoorloos verdwenen.',
      english: 'I was sitting with a colleague on a terrace along the Oude Gracht. When I wanted to pay, my wallet was no longer on the table. I searched everywhere under the chairs, but it had vanished without a trace.',
      notes: 'Subordinate clause with "toen" (in the past): "Toen ik wilde afrekenen (verbs at end), lag mijn portemonnee (inversion) niet meer op tafel".',
      keyWords: ['op een terrasje', 'toen ik wilde afrekenen', 'spoorloos verdwenen']
    },
    {
      id: 4,
      speaker: 'Politieagent',
      dutch: 'Weet u zeker dat uw portemonnee niet in uw jaszak of rugtas zat?',
      english: 'Are you sure that your wallet wasn\'t in your coat pocket or backpack?',
      notes: 'Subordinate clause with "dat": "dat uw portemonnee niet in uw jaszak zat".',
      keyWords: ['weet u zeker dat', 'jaszak', 'rugtas']
    },
    {
      id: 5,
      speaker: 'Sam',
      dutch: 'Ja, honderd procent zeker. Ik herinner het me zo goed omdat ik net een nieuwe leren portemonnee had gekocht. Mijn bankpas, creditcard, rijbewijs en ongeveer zeventig euro contant geld zaten erin.',
      english: 'Yes, one hundred percent certain. I remember it so well because I had just bought a new leather wallet. My debit card, credit card, driving licence and about seventy euros in cash were inside.',
      notes: 'Subordinate clause: "omdat ik ... had gekocht". Pronominal adverb: "erin".',
      keyWords: ['honderd procent zeker', 'omdat ik had gekocht', 'bankpas', 'creditcard', 'rijbewijs', 'contant geld']
    },
    {
      id: 6,
      speaker: 'Politieagent',
      dutch: 'Hebt u uw bankpassen en creditcard al laten blokkeren bij de bank?',
      english: 'Have you already had your debit cards and credit card blocked with the bank?',
      notes: '"laten blokkeren" = to have blocked.',
      keyWords: ['passen laten blokkeren']
    },
    {
      id: 7,
      speaker: 'Sam',
      dutch: 'Ja, zodra ik merkte dat mijn portemonnee weg was, heb ik meteen de alarmlijn van mijn bank gebeld. Ze zijn allebei direct geblokkeerd.',
      english: 'Yes, as soon as I noticed that my wallet was gone, I immediately called my bank\'s emergency helpline. They were both blocked right away.',
      notes: 'Subordinate clause with "zodra" (as soon as): "zodra ik merkte dat..., heb ik gebeld".',
      keyWords: ['zodra ik merkte', 'alarmlijn gebeld', 'geblokkeerd']
    },
    {
      id: 8,
      speaker: 'Politieagent',
      dutch: 'Heel verstandig gehandeld. Hebt u misschien een verdacht persoon gezien op het terras?',
      english: 'Very sensible action. Did you perhaps see a suspicious person on the terrace?',
      notes: '"verdacht persoon" = suspicious person.',
      keyWords: ['verstandig gehandeld', 'verdacht persoon']
    },
    {
      id: 9,
      speaker: 'Sam',
      dutch: 'Terwijl wij aan het praten waren, kwam er een jonge man langs die om kleingeld vroeg. Hij had een donkerblauwe hoodie aan, was ongeveer een meter tachtig lang en droeg een opvallende witte pet.',
      english: 'While we were talking, a young man came by asking for change. He was wearing a dark blue hoodie, was about 1.80m tall and wore a distinctive white cap.',
      notes: 'Subordinate clause: "Terwijl wij aan het praten waren...". Relative clause: "die om kleingeld vroeg". Describing physical appearance (signalement).',
      keyWords: ['terwijl wij aan het praten waren', 'om kleingeld vroeg', 'hoodie', 'signalement']
    },
    {
      id: 10,
      speaker: 'Politieagent',
      dutch: 'Dat is een heel duidelijk signalement. Ik print het proces-verbaal voor u uit. Dat hebt u nodig voor uw verzekering.',
      english: 'That is a very clear description. I\'ll print out the official police report for you. You will need that for your insurance.',
      notes: '"het proces-verbaal" = official police report. "de verzekering" = insurance.',
      keyWords: ['duidelijk signalement', 'proces-verbaal', 'verzekering']
    }
  ],
  vocabulary: [
    {
      id: 'de_politie',
      dutch: 'de politie (het politiebureau)',
      english: 'police (police station)',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Bij noodgevallen bel je 112, voor niet-spoedeisende zaken 0900-8844.',
      exampleEnglish: 'For emergencies you call 112, for non-urgent matters 0900-8844.'
    },
    {
      id: 'de_politieagent',
      dutch: 'de politieagent (de agente / de agent)',
      english: 'police officer',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de politieagenten',
      exampleSentence: 'De vriendelijke agent noteerde alle gegevens in het dossier.',
      exampleEnglish: 'The friendly officer recorded all details in the file.'
    },
    {
      id: 'de_wijkagent',
      dutch: 'de wijkagent',
      english: 'neighbourhood / community police officer',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de wijkagenten',
      exampleSentence: 'Onze wijkagent fietst dagelijks door de buurt en kent iedereen.',
      exampleEnglish: 'Our community officer cycles through the neighbourhood daily and knows everyone.'
    },
    {
      id: 'aangifte_doen',
      dutch: 'aangifte doen (van diefstal)',
      english: 'to report a crime / file a police report',
      category: 'recht',
      partOfSpeech: 'phrase',
      exampleSentence: 'U moet altijd aangifte doen als uw paspoort of fiets gestolen is.',
      exampleEnglish: 'You must always file a police report if your passport or bicycle is stolen.'
    },
    {
      id: 'het_proces_verbaal',
      dutch: 'het proces-verbaal (het aangiftebewijs)',
      english: 'official police report / statement',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de processen-verbaal',
      exampleSentence: 'De verzekeringsmaatschappij vraagt om een kopie van het proces-verbaal.',
      exampleEnglish: 'The insurance company requests a copy of the official police report.'
    },
    {
      id: 'de_diefstal',
      dutch: 'de diefstal (stelen, gestolen)',
      english: 'theft (to steal, stolen)',
      category: 'misdaad',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de diefstallen',
      exampleSentence: 'Fietsendiefstal en zakkenrollerij komen helaas vaak voor.',
      exampleEnglish: 'Bicycle theft and pickpocketing unfortunately occur frequently.'
    },
    {
      id: 'de_dief',
      dutch: 'de dief / de zakkenroller',
      english: 'thief / pickpocket',
      category: 'misdaad',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de dieven / de zakkenrollers',
      exampleSentence: 'De zakkenroller sloeg toe in de drukke tram.',
      exampleEnglish: 'The pickpocket struck in the crowded tram.'
    },
    {
      id: 'de_dader',
      dutch: 'de dader (de verdachte)',
      english: 'perpetrator / culprit (suspect)',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de daders / de verdachten',
      exampleSentence: 'De politie heeft de verdachte binnen een uur aangehouden.',
      exampleEnglish: 'The police arrested the suspect within an hour.'
    },
    {
      id: 'het_slachtoffer',
      dutch: 'het slachtoffer',
      english: 'victim',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de slachtoffers',
      exampleSentence: 'Slachtofferhulp biedt ondersteuning na een traumatische ervaring.',
      exampleEnglish: 'Victim Support provides assistance after a traumatic experience.'
    },
    {
      id: 'het_signalement',
      dutch: 'het signalement (de beschrijving)',
      english: 'physical description of suspect',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de signalementen',
      exampleSentence: 'Kunt u een gedetailleerd signalement van de dader geven?',
      exampleEnglish: 'Can you provide a detailed description of the perpetrator?'
    },
    {
      id: 'de_portemonnee',
      dutch: 'de portemonnee (de beurs)',
      english: 'wallet / purse',
      category: 'voorwerpen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de portemonnees',
      exampleSentence: 'Mijn leren portemonnee zat in de binnenzak van mijn jas.',
      exampleEnglish: 'My leather wallet was in the inside pocket of my coat.'
    },
    {
      id: 'de_bankpas',
      dutch: 'de bankpas (de pinpas / creditcard)',
      english: 'debit card (bank card / credit card)',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de bankpassen',
      exampleSentence: 'Laat je bankpas onmiddellijk blokkeren bij diefstal of verlies.',
      exampleEnglish: 'Have your debit card blocked immediately in case of theft or loss.'
    },
    {
      id: 'blokkeren',
      dutch: 'blokkeren (laten blokkeren)',
      english: 'to block / freeze (to have blocked)',
      category: 'veiligheid',
      partOfSpeech: 'verb',
      exampleSentence: 'Via de mobiel-bankieren-app kun je je pas direct blokkeren.',
      exampleEnglish: 'Via the mobile banking app you can freeze your card directly.'
    },
    {
      id: 'het_rijbewijs',
      dutch: 'het rijbewijs',
      english: 'driving licence',
      category: 'documenten',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de rijbewijzen',
      exampleSentence: 'Voor een nieuw rijbewijs moet u een afspraak maken bij de gemeente.',
      exampleEnglish: 'For a replacement driving licence you must make an appointment at city hall.'
    },
    {
      id: 'het_identiteitsbewijs',
      dutch: 'het identiteitsbewijs (de ID-kaart / het paspoort)',
      english: 'identity document (ID card / passport)',
      category: 'documenten',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de identiteitsbewijzen',
      exampleSentence: 'In Nederland geldt een wettelijke identificatieplicht vanaf 14 jaar.',
      exampleEnglish: 'In the Netherlands a legal identification requirement applies from age 14.'
    },
    {
      id: 'het_contant_geld',
      dutch: 'het contant geld (het cash geld)',
      english: 'cash money',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Veel Nederlandse winkels accepteren alleen nog pin en geen contant geld.',
      exampleEnglish: 'Many Dutch stores only accept card payments and no cash.'
    },
    {
      id: 'het_kleingeld',
      dutch: 'het kleingeld (munten)',
      english: 'loose change / coins',
      category: 'geld',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Heb je misschien wat kleingeld voor het winkelwagentje?',
      exampleEnglish: 'Do you perhaps have some change for the shopping trolley?'
    },
    {
      id: 'spoorloos',
      dutch: 'spoorloos verdwenen',
      english: 'vanished without a trace',
      category: 'beschrijving',
      partOfSpeech: 'phrase',
      exampleSentence: 'Mijn fiets was binnen tien minuten spoorloos verdwenen.',
      exampleEnglish: 'My bicycle had vanished without a trace within ten minutes.'
    },
    {
      id: 'verdacht',
      dutch: 'verdacht (de verdachte situatie)',
      english: 'suspicious (suspicious situation)',
      category: 'veiligheid',
      partOfSpeech: 'adjective',
      exampleSentence: 'Bij een verdachte situatie belt u direct 112.',
      exampleEnglish: 'In a suspicious situation you call 112 immediately.'
    },
    {
      id: 'de_getuige',
      dutch: 'de getuige (de getuigenverklaring)',
      english: 'witness (witness statement)',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de getuigen',
      exampleSentence: 'Een alerte getuige zag de dief wegrennen en belde de politie.',
      exampleEnglish: 'An alert witness saw the thief run away and called the police.'
    },
    {
      id: 'de_verzekering',
      dutch: 'de verzekering (de inboedelverzekering)',
      english: 'insurance (home contents insurance)',
      category: 'administratie',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de verzekeringen',
      exampleSentence: 'Dekt uw verzekering schade en diefstal buiten de deur?',
      exampleEnglish: 'Does your insurance cover damage and theft outside the home?'
    },
    {
      id: 'de_hoodie',
      dutch: 'de hoodie (de capuchontrui)',
      english: 'hoodie (hooded jumper)',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de hoodies',
      exampleSentence: 'De jongeman droeg een zwarte hoodie met opgetrokken capuchon.',
      exampleEnglish: 'The young man was wearing a black hoodie with the hood pulled up.'
    },
    {
      id: 'de_pet',
      dutch: 'de pet (de muts)',
      english: 'cap (beanie / woolly hat)',
      category: 'kleding',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de petten / de mutsen',
      exampleSentence: 'Hij had een witte honkbalpet op zijn hoofd.',
      exampleEnglish: 'He had a white baseball cap on his head.'
    },
    {
      id: 'de_lengte',
      dutch: 'de lengte (ongeveer 1 meter 80)',
      english: 'height (about 1.80m)',
      category: 'uiterlijk',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Wat was de geschatte lengte van de verdachte persoon?',
      exampleEnglish: 'What was the estimated height of the suspicious person?'
    },
    {
      id: 'het_postuur',
      dutch: 'het postuur (slank, gezet, gespierd)',
      english: 'build / physique (slender, stout, muscular)',
      category: 'uiterlijk',
      partOfSpeech: 'noun',
      article: 'het',
      plural: '-',
      exampleSentence: 'Hij had een normaal postuur en kort donker krullend haar.',
      exampleEnglish: 'He had an average build and short dark curly hair.'
    },
    {
      id: 'het_litteken',
      dutch: 'het litteken (de tatoeage)',
      english: 'scar (tattoo)',
      category: 'uiterlijk',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de littekens / de tatoeages',
      exampleSentence: 'De man had een opvallend litteken op zijn linkerwang.',
      exampleEnglish: 'The man had a distinctive scar on his left cheek.'
    },
    {
      id: 'de_alarmlijn',
      dutch: 'de alarmlijn (het noodnummer 112)',
      english: 'emergency helpline (emergency number 112)',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de alarmlijnen',
      exampleSentence: 'Bel bij brand, ongeval of heterdaad misdrijf direct 112.',
      exampleEnglish: 'In case of fire, accident or crime in progress call 112 immediately.'
    },
    {
      id: 'geen_spoed',
      dutch: 'geen spoed, wel politie (0900-8844)',
      english: 'no emergency, but police needed (national non-emergency line)',
      category: 'veiligheid',
      partOfSpeech: 'phrase',
      exampleSentence: 'Voor overlast of diefstal achteraf bel je 0900-8844.',
      exampleEnglish: 'For nuisance or after-the-fact theft you dial 0900-8844.'
    },
    {
      id: 'het_noodgeval',
      dutch: 'het noodgeval (de noodsituatie)',
      english: 'emergency (emergency situation)',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de noodgevallen',
      exampleSentence: 'In een noodgeval telt elke seconde.',
      exampleEnglish: 'In an emergency every second counts.'
    },
    {
      id: 'het_loket',
      dutch: 'het loket (aan het loket)',
      english: 'counter / window / service desk',
      category: 'gebouw',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de loketten',
      exampleSentence: 'U kunt zich melden bij het loket voor burgerzaken.',
      exampleEnglish: 'You can report to the civic service desk.'
    },
    {
      id: 'de_rits',
      dutch: 'de rits (de ritssluiting)',
      english: 'zipper / zip',
      category: 'voorwerpen',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ritsen',
      exampleSentence: 'De rits van mijn rugzak was kapotgegaan.',
      exampleEnglish: 'The zip of my backpack had broken.'
    },
    {
      id: 'verstandig',
      dutch: 'verstandig (verstandig handelen)',
      english: 'sensible / wise (to act sensibly)',
      category: 'mening',
      partOfSpeech: 'adjective',
      exampleSentence: 'Het is verstandig om altijd een kopie van je paspoort te bewaren.',
      exampleEnglish: 'It is sensible to always keep a copy of your passport.'
    },
    {
      id: 'de_zakkenrollerij',
      dutch: 'de zakkenrollerij',
      english: 'pickpocketing',
      category: 'misdaad',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Borden op het station waarschuwen voor zakkenrollers.',
      exampleEnglish: 'Signs at the station warn against pickpockets.'
    },
    {
      id: 'het_verlies',
      dutch: 'het verlies (verliezen, verloren)',
      english: 'loss (to lose, lost)',
      category: 'gebeurtenis',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de verliezen',
      exampleSentence: 'Heb je het verloren of is het gestolen?',
      exampleEnglish: 'Did you lose it or was it stolen?'
    },
    {
      id: 'verloren_en_gevonden',
      dutch: 'verloren en gevonden voorwerpen',
      english: 'lost and found property',
      category: 'veiligheid',
      partOfSpeech: 'phrase',
      exampleSentence: 'Kijk op de website iLost of uw verloren tas gevonden is.',
      exampleEnglish: 'Check the iLost website to see if your lost bag has been found.'
    },
    {
      id: 'de_identificatieplicht',
      dutch: 'de identificatieplicht',
      english: 'compulsory identification (obligation to carry ID)',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'De politie mag naar je identiteitsbewijs vragen bij een controle.',
      exampleEnglish: 'The police may ask for your ID card during an inspection.'
    },
    {
      id: 'noteren',
      dutch: 'noteren (de gegevens noteren)',
      english: 'to note down / record (record details)',
      category: 'administratie',
      partOfSpeech: 'verb',
      exampleSentence: 'Mag ik uw burgerservicenummer (BSN) even noteren?',
      exampleEnglish: 'May I note down your Citizen Service Number (BSN)?'
    },
    {
      id: 'het_dossier',
      dutch: 'het politiedossier (het dossiernummer)',
      english: 'police file / case (case reference number)',
      category: 'recht',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de dossiers',
      exampleSentence: 'Bewaar het dossiernummer goed voor contact met de recherche.',
      exampleEnglish: 'Keep the case file number safely for contacting the detectives.'
    },
    {
      id: 'de_veiligheid',
      dutch: 'de openbare orde en veiligheid',
      english: 'public order and safety',
      category: 'veiligheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: '-',
      exampleSentence: 'Nederland scoort hoog op internationale ranglijsten van veiligheid.',
      exampleEnglish: 'The Netherlands scores high on international rankings of safety.'
    },
    {
      id: 'aangehouden',
      dutch: 'aangehouden worden (arresteren)',
      english: 'to be detained / arrested',
      category: 'recht',
      partOfSpeech: 'verb',
      exampleSentence: 'De inbreker werd op heterdaad aangehouden door surveillanten.',
      exampleEnglish: 'The burglar was caught in the act and arrested by patrol officers.'
    }
  ],
  grammarPoints: [
    {
      id: 'onderschikkende_voegwoorden_en_bijzinnen',
      title: '18.1 Onderschikkende Voegwoorden & Bijzinvolgorde',
      summary: 'De gouden regel van de Nederlandse zinsbouw: in een bijzin staan ALLE werkwoorden achteraan!',
      ruleExplanation: `Een onderschikkend voegwoord leidt een BIJZIN in.
In elke Nederlandse bijzin verhuizen ALLE WERKWOORDEN (persoonsvorm + infinitieven/deelwoorden) naar het ALLERLAATSTE van de zin!

De belangrijkste onderschikkende voegwoorden:
• OMDAT (reden / reason): "Hij belt de politie, OMDAT zijn fiets GESTOLEN IS."
• ALS / WANNEER (voorwaarde of tijd): "ALS je je pasje verliest, MOET je direct BELLEN."
• TOEN (eenmalig in het verleden / when in past): "TOEN ik wilde afrekenen, LAG mijn beurs er niet meer."
• TERWIJL (tijd / gelijktijdigheid): "TERWIJL wij koffie dronken, WERD er ingebroken."
• VOORDAT / VOOR (tijd): "Blokkeer je pas VOORDAT de dief geld OPNEMT."
• NADAT (tijd / voltooid): "NADAT hij aangifte had gedaan, GING hij naar huis."
• HOEWEL (tegenstelling): "HOEWEL het terras vol zat, HEEFT niemand iets GEZIEN."
• ZODAT (gevolg): "Hij deed het slot dicht, ZODAT niemand de deur KON OPENEN."
• ZODRA (tijd / as soon as): "ZODRA ik het merkte, HEB ik de bank GEBELD."

INVERSIE BIJ BIJZIN VOORAAN:
Als de bijzin VOOR de hoofdzin staat, telt de hele bijzin als positie 1.
De hoofdzin MOET dan direct beginnen met de persoonsvorm (inversie: V + S):
• [Toen ik wilde betalen] (Positie 1 - bijzin), MERKTE (V) IK (S) dat de portemonnee weg was!
• [Omdat het regende] (Positie 1), BLEVEN (V) WE (S) binnen.`,
      examples: [
        {
          dutch: 'Toen de agent arriveerde, was de dief al gevlucht.',
          english: 'When the officer arrived, the thief had already fled.',
          note: 'Bijzin vooraan ("Toen...") -> inversie in hoofdzin ("was de dief...").'
        },
        {
          dutch: 'Ik weet zeker dat ik de voordeur op slot heb gedaan.',
          english: 'I know for sure that I locked the front door.',
          note: 'Bijzin met "dat": alle werkwoorden ("heb gedaan") achteraan.'
        },
        {
          dutch: 'Hoewel hij een bril droeg, herkende de getuige zijn gezicht.',
          english: 'Although he wore glasses, the witness recognized his face.',
          note: 'Bijzin met "hoewel".'
        }
      ],
      tables: [
        {
          headers: ['Type voegwoord', 'Voegwoorden', 'Gedrag van het werkwoord'],
          rows: [
            ['Nevenschikkend (Ch 16)', 'en, maar, want, of, dus', 'Normale hoofdzinvolgorde (S + V)'],
            ['Onderschikkend (Ch 18)', 'omdat, als, toen, terwijl, hoewel, zodat, zodra', 'ALLE werkwoorden aan het EINDE van de bijzin!'],
            ['Bijzin vooraan', '[Bijzin met werkwoord achteraan], ...', 'Direct vervolgd door persoonsvorm + onderwerp (inversie)!']
          ]
        }
      ]
    },
    {
      id: 'toen_vs_als',
      title: '18.2 Het Verschil Tussen "TOEN" en "ALS / WANNEER"',
      summary: 'Wanneer gebruik je "toen" en wanneer "als"?',
      ruleExplanation: `In het Engels gebruik je vaak "when", maar in het Nederlands moet je strikt kiezen:

1. TOEN:
Alleen voor een EENMALIGE gebeurtenis of periode in het VERLEDEN:
• "TOEN ik vanmorgen wakker werd, scheen de zon." (Once, this morning)
• "TOEN ik kind was, woonden we in Den Haag." (One period in past)
• "TOEN Sam wilde afrekenen, was de portemonnee weg."

2. ALS / WANNEER:
• Voor de TEGENWOORDIGE TIJD of TOEKOMST:
  "ALS ik vanavond thuis ben, bel ik je." (future)
• Voor een HERHAALDE handeling in het verleden (whenever):
  "Altijd ALS hij naar de stad ging, nam hij de fiets." (repeatedly)`,
      examples: [
        {
          dutch: 'Toen ik twintig jaar was, haalde ik mijn rijbewijs.',
          english: 'When I was twenty years old, I got my driving licence.',
          note: 'Eenmalig in het verleden -> toen.'
        },
        {
          dutch: 'Als je in nood bent, moet je meteen 112 bellen.',
          english: 'When you are in an emergency, you must call 112 immediately.',
          note: 'Algemene regel / voorwaarde -> als.'
        }
      ]
    },
    {
      id: 'noodnummers_en_veiligheid',
      title: '18.3 Politie, Noodnummers en Aangifte in Nederland',
      summary: 'Het verschil tussen 112 en 0900-8844 en het doen van aangifte.',
      ruleExplanation: `In Nederland zijn er twee landelijke politienummers:
• 112: UITSLUITEND voor spoed, acuut levensgevaar, heterdaad misdrijf of zware ongevallen. (Ambulance, brandweer, politie).
• 0900-8844: "Geen spoed, wel politie". Voor diefstal achteraf, overlast, verdachte situaties zonder direct geweld, afspraken maken op het politiebureau.

Aangifte doen:
• Bij verlies of diefstal van documenten (paspoort, ID-kaart) meld je dit ook bij de gemeente.
• Bij diefstal van een fiets of portemonnee kun je vaak digitaal aangifte doen via www.politie.nl met DigiD.
• Je ontvangt altijd een proces-verbaal voor je verzekering.`,
      examples: [
        {
          dutch: 'Zie je een inbreker op heterdaad over de schutting klimmen? Bel direct 112!',
          english: 'Do you see a burglar climbing over the fence in the act? Call 112 right away!',
          note: 'Heterdaad -> 112.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_bijzin_werkwoord_achteraan',
      title: 'Opdracht 1: Werkwoorden aan het einde van de bijzin',
      instruction: 'Zet het werkwoord op de juiste plek in de bijzin.',
      items: [
        {
          id: 1,
          prompt: 'omdat -> Sam deed gisteren aangifte, omdat zijn portemonnee _______ .',
          answer: 'gestolen was',
          options: ['gestolen was', 'was gestolen geworden', 'was gestolen'],
          explanation: 'In de bijzin staan alle werkwoorden helemaal achteraan: "gestolen was / was gestolen".'
        },
        {
          id: 2,
          prompt: 'terwijl -> Terwijl wij gezellig op het terras _______ , sloeg de zakkenroller toe.',
          answer: 'zaten te praten',
          options: ['zaten te praten', 'praten zaten', 'zaten pratend'],
          explanation: 'Werkwoorden achteraan: "terwijl wij op het terras zaten te praten".'
        },
        {
          id: 3,
          prompt: 'zodra -> Bel direct je bank, zodra je het verlies _______ .',
          answer: 'bemerkt',
          options: ['bemerkt', 'bemerken zult', 'bemerkt hebt'],
          explanation: 'Persoonsvorm "bemerkt" staat aan het einde van de bijzin.'
        },
        {
          id: 4,
          prompt: 'hoewel -> Hoewel de ober overal zocht, _______ hij de portemonnee nergens.',
          answer: 'vond',
          options: ['vond', 'vindt', 'gevonden'],
          explanation: 'Inversie in de hoofdzin na de bijzin: "vond hij".'
        }
      ]
    },
    {
      id: 'opdracht_2_toen_of_als',
      title: 'Opdracht 2: Kies tussen "Toen" of "Als"',
      instruction: 'Welk voegwoord is correct?',
      items: [
        {
          id: 1,
          prompt: '_______ ik gisteravond thuis aankwam, ontdekte ik dat mijn sleutels weg waren.',
          answer: 'Toen',
          options: ['Toen', 'Als', 'Wanneer'],
          explanation: 'Eenmalige gebeurtenis in het verleden (gisteravond) -> Toen.'
        },
        {
          id: 2,
          prompt: '_______ je ooit je pasje verliest, moet je direct de alarmlijn bellen.',
          answer: 'Als',
          options: ['Als', 'Toen', 'Nadat'],
          explanation: 'Voorwaarde in heden/toekomst -> Als.'
        },
        {
          id: 3,
          prompt: '_______ Sam vroeger klein was, wilde hij altijd politieagent worden.',
          answer: 'Toen',
          options: ['Toen', 'Als', 'Zodra'],
          explanation: 'Vaste periode in het verleden -> Toen.'
        }
      ]
    },
    {
      id: 'opdracht_3_veiligheid_en_politie',
      title: 'Opdracht 3: Veiligheid en instanties',
      instruction: 'Welk telefoonnummer of welke term hoort bij de situatie?',
      items: [
        {
          id: 1,
          prompt: 'Je ziet een brand in de keuken van de buren. Welk nummer bel je onmiddellijk?',
          answer: '112 (alarmnummer)',
          options: ['112 (alarmnummer)', '0900-8844', '14020'],
          explanation: 'Bij levensbedreigende situaties of brand bel je altijd direct 112.'
        },
        {
          id: 2,
          prompt: 'Je merkt \'s ochtends dat je fiets \'s nachts uit de voortuin is meegenomen. Welk nummer bel je?',
          answer: '0900-8844 (geen spoed, wel politie)',
          options: ['0900-8844 (geen spoed, wel politie)', '112', '911'],
          explanation: 'Geen heterdaad/geen direct gevaar -> 0900-8844 of online aangifte.'
        },
        {
          id: 3,
          prompt: 'Het officiële politierapport dat je nodig hebt voor de schadeclaim bij je verzekering heet:',
          answer: 'het proces-verbaal',
          options: ['het proces-verbaal', 'het ov-ticket', 'het signalement'],
          explanation: 'Het proces-verbaal is het officiële politierapport.'
        }
      ]
    }
  ],
  readingText: {
    title: '18.8 Tekst: Veiligheid, de Politie en de Wijkagent in Nederland',
    subtitle: 'Over 112, buurtpreventie via WhatsApp en het oplossen van misdrijven (Blz. 270)',
    content: `De Nederlandse politie heeft een bijzondere filosofie die sterk leunt op nabijheid, de-escalatie en samenwerking met burgers. Het gezicht van de politie in de wijk is de "wijkagent". Elke buurt of dorpskern heeft een eigen wijkagent die bereikbaar is via sociale media, een wekelijks inloopspreekuur houdt en op de fiets patrouilleert. De wijkagent weet wat er speelt, van burenruzies tot verdachte jeugdgroepjes.

Daarnaast zijn burgers in Nederland zeer actief betrokken bij de veiligheid via zogeheten "Buurtpreventie WhatsApp-groepen". In duizenden straten hangen officiële witte borden met een groen oog en het WhatsApp-logo. Als buurtbewoners een verdacht persoon zien rondsluipen bij auto's of huizen, waarschuwen ze elkaar in de groepsapp en belt iemand direct 112.

Voor het doen van aangifte van veelvoorkomende criminaliteit, zoals fietsendiefstal, vernieling of diefstal van een portemonnee, hoef je tegenwoordig vaak niet meer fysiek naar het bureau. Met je DigiD log je in op www.politie.nl en doe je binnen tien minuten digitaal aangifte. Binnen 24 uur ontvang je het officiële proces-verbaal in je inbox.`,
    vocabularyNotes: [
      { word: 'de-escalatie', translation: 'de-escalation / calming tension' },
      { word: 'het inloopspreekuur', translation: 'walk-in consultation hour' },
      { word: 'de buurtpreventie', translation: 'neighbourhood crime prevention' },
      { word: 'rondsluipen', translation: 'to prowl / sneak around' },
      { word: 'DigiD', translation: 'Dutch digital identity login system' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat is de rol van de Nederlandse "wijkagent"?',
        answer: 'Een vaste contactpersoon van de politie in de buurt die zichtbaar surveilleert en overlegt met bewoners',
        options: [
          'Een vaste contactpersoon van de politie in de buurt die zichtbaar surveilleert en overlegt met bewoners',
          'Een beveiliger die alleen bankgebouwen bewaakt',
          'Een advocaat die verdachten verdedigt in de rechtbank'
        ],
        explanation: 'De wijkagent is de spil tussen buurtbewoners en de politieleiding.'
      },
      {
        id: 2,
        prompt: 'Hoe waarschuwen buurtbewoners in Nederlandse wijken elkaar voor verdachte situaties?',
        answer: 'Via lokale Buurtpreventie WhatsApp-groepen',
        options: [
          'Via lokale Buurtpreventie WhatsApp-groepen',
          'Met rooksignalen en trommels',
          'Door brieven per post te sturen'
        ],
        explanation: 'Buurt WhatsApp-groepen zijn wijdverspreid in heel Nederland.'
      },
      {
        id: 3,
        prompt: 'Hoe kun je tegenwoordig snel aangifte doen van fietsendiefstal?',
        answer: 'Online via de website van de politie met je DigiD',
        options: [
          'Online via de website van de politie met je DigiD',
          'Uitsluitend door in een lange rij bij de rechtbank te staan',
          'Door een briefje in een openbare brievenbus te gooien'
        ],
        explanation: 'Online aangifte met DigiD is de snelste methode.'
      }
    ]
  },
  pronunciation: {
    title: '18.9 Uitspraak: Zinsritme en Intonatie bij Complexe Zinnen',
    soundFocus: 'Zinsmelodie: stijgende intonatie bij de bijzin, dalende intonatie bij het slot',
    explanation: 'Wanneer je een samengestelde zin uitspreekt met een bijzin ("Toen ik op het terras zat, / werd mijn portemonnee gestolen."), stijgt je stem aan het einde van de bijzin om aan te geven dat de zin nog niet klaar is. Aan het einde van de hoofdzin daalt je stem tot een rustige toon. Dit ritme is essentieel voor natuurlijk klinkend A2-Nederlands!',
    wordList: [
      'aangifte', 'politiebureau', 'proces-verbaal', 'signalement', 'identiteitsbewijs', 'onderschikking', 'verzekering'
    ],
    minimalPairs: [
      { word1: 'Toen ik kwam (stijgend)', word2: 'ging hij weg (dalend)', contrast: 'stijgende vs dalende intonatie' },
      { word1: 'Omdat het regende (stijgend)', word2: 'bleven we binnen (dalend)', contrast: 'voorwaarde vs gevolg intonatie' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 18: Bij de politie (A2 Eindexamen)',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Welke zin met het onderschikkende voegwoord "omdat" heeft de juiste bijzinvolgorde?',
        options: [
          'Sam ging naar de politie, omdat zijn tas gestolen was.',
          'Sam ging naar de politie, omdat was zijn tas gestolen.',
          'Sam ging naar de politie, omdat zijn tas was gestolen geworden.'
        ],
        answer: 'Sam ging naar de politie, omdat zijn tas gestolen was.',
        explanation: 'In een bijzin met "omdat" staan alle werkwoorden ("gestolen was") helemaal achteraan.'
      },
      {
        id: 2,
        prompt: 'Kies de juiste hoofdzin na de bijzin (inversie!): "Toen Sam wilde betalen, _______ ."',
        options: [
          'merkte hij dat zijn portemonnee weg was',
          'hij merkte dat zijn portemonnee weg was',
          'merkte hij dat weg was zijn portemonnee'
        ],
        answer: 'merkte hij dat zijn portemonnee weg was',
        explanation: 'Als de bijzin vooraan staat, begint de hoofdzin met persoonsvorm + onderwerp: "merkte hij...".'
      },
      {
        id: 3,
        prompt: 'Kies tussen "toen" en "als": "_______ ik vanmorgen opstond, was het buiten al licht."',
        options: ['Toen', 'Als', 'Wanneer'],
        answer: 'Toen',
        explanation: 'Eenmalige gebeurtenis in het verleden (vanmorgen) vereist "Toen".'
      },
      {
        id: 4,
        prompt: 'Wat is het juiste landelijke politietelefoonnummer voor GEEN SPOED?',
        options: ['0900-8844', '112', '911', '0800-7000'],
        answer: '0900-8844',
        explanation: '0900-8844 is het nummer voor "geen spoed, wel politie".'
      },
      {
        id: 5,
        prompt: 'Wat is het juiste lidwoord voor "politiebureau"?',
        options: ['het politiebureau', 'de politiebureau', 'beide kunnen'],
        answer: 'het politiebureau',
        explanation: 'Bureau is onzijdig: het bureau, dus het politiebureau.'
      },
      {
        id: 6,
        prompt: 'Wat is het juiste lidwoord voor "proces-verbaal"?',
        options: ['het proces-verbaal', 'de proces-verbaal', 'een proces-verbaal (geen lidwoord mogelijk)'],
        answer: 'het proces-verbaal',
        explanation: 'Proces is onzijdig: het proces, het proces-verbaal.'
      },
      {
        id: 7,
        prompt: 'Wat moet je als eerste doen zodra je ontdekt dat je bankpas gestolen is?',
        options: [
          'Direct contact opnemen met de alarmlijn van de bank om de pas te laten blokkeren.',
          'Wachten tot het einde van de maand om het rekeningoverzicht te bekijken.',
          'Een nieuwe portemonnee kopen in de winkel.'
        ],
        answer: 'Direct contact opnemen met de alarmlijn van de bank om de pas te laten blokkeren.',
        explanation: 'Onmiddellijk blokkeren voorkomt misbruik en diefstal van je bankrekening.'
      },
      {
        id: 8,
        prompt: 'Wat is een "signalement"?',
        options: [
          'Een gedetailleerde persoonsbeschrijving van een dader of vermist persoon (lengte, kleding, uiterlijk).',
          'Een verkeersbord langs de snelweg.',
          'Een boete voor te hard rijden.'
        ],
        answer: 'Een gedetailleerde persoonsbeschrijving van een dader of vermist persoon (lengte, kleding, uiterlijk).',
        explanation: 'Een signalement is de uiterlijke persoonsbeschrijving voor de politie.'
      },
      {
        id: 9,
        prompt: 'Vanaf welke leeftijd geldt in Nederland de wettelijke identificatieplicht (altijd ID bij je hebben)?',
        options: ['Vanaf 14 jaar', 'Vanaf 18 jaar', 'Vanaf 21 jaar'],
        answer: 'Vanaf 14 jaar',
        explanation: 'In Nederland moet iedereen vanaf 14 jaar een geldig identiteitsbewijs kunnen tonen.'
      },
      {
        id: 10,
        prompt: 'Wat is de rol van een "wijkagent" in een Nederlandse buurt?',
        options: [
          'Een aanspreekpunt voor buurtbewoners dat patrouilleert en bemiddelt bij problemen in de wijk.',
          'Een douanebeambte op de luchthaven.',
          'Een rechercheur die alleen moordzaken onderzoekt.'
        ],
        answer: 'Een aanspreekpunt voor buurtbewoners dat patrouilleert en bemiddelt bij problemen in de wijk.',
        explanation: 'De wijkagent zorgt voor veiligheid en contact binnen de wijk.'
      }
    ]
  },
  culturalOrPracticalNote: 'Veiligheid en politie in Nederland: Nederland is een veilig land. Voor noodgevallen (levensgevaar, heterdaad) bel je 112. Voor diefstal achteraf of niet-spoedeisende zaken bel je 0900-8844 ("geen spoed, wel politie") of doe je eenvoudig digitaal aangifte met DigiD op politie.nl. Let op: vanaf 14 jaar geldt in Nederland een wettelijke identificatieplicht (ID-kaart, paspoort of rijbewijs)!'
};
