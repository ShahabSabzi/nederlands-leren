import { CustomLessonData } from '../types/lesson';

export const CHAPTER_9_DATA: CustomLessonData = {
  id: 'hoofdstuk_9',
  chapterNumber: 'Hoofdstuk 9',
  chapterTitle: 'Bij de huisarts',
  description: 'Klachten en pijn beschrijven bij de dokter ("Wat is er aan de hand?"), lichaamsdelen, dagdelen (\'s ochtends, gisteravond), beterschap wensen, en de kernregel van het Nederlands: HET PERFECTUM (voltooid verleden tijd met hebben/zijn en \'t kofschip).',
  language: 'Nederlands',
  createdAt: 1727720000000,
  dialogue: [
    {
      id: 1,
      speaker: 'Meneer Smit',
      dutch: 'Goedemorgen dokter.',
      english: 'Good morning doctor.',
      notes: 'Standaard begroeting bij de huisartsenpraktijk.',
      keyWords: ['dokter']
    },
    {
      id: 2,
      speaker: 'Huisarts',
      dutch: 'Goedemorgen meneer Smit, wat is er aan de hand?',
      english: 'Good morning Mr Smit, what is the matter? / what\'s wrong?',
      notes: '"Wat is er aan de hand?" is de standaard openingsvraag van Nederlandse artsen.',
      keyWords: ['wat is er aan de hand']
    },
    {
      id: 3,
      speaker: 'Meneer Smit',
      dutch: 'Zoals u ziet, zit ik onder de rode bultjes. Ze zitten op mijn armen, benen, buik en rug, alleen niet op mijn gezicht. Ze jeuken verschrikkelijk. Ik heb van alles geprobeerd, maar niets heeft geholpen.',
      english: 'As you can see, I am covered in red spots/rash. They are on my arms, legs, stomach and back, only not on my face. They itch terribly. I have tried everything, but nothing has helped.',
      notes: 'Lichaamsdelen: armen, benen, buik, rug, gezicht. "jeuken" = to itch. Perfectum: "geprobeerd", "geholpen".',
      keyWords: ['bultjes', 'armen', 'benen', 'buik', 'rug', 'jeuken', 'geprobeerd', 'geholpen']
    },
    {
      id: 4,
      speaker: 'Huisarts',
      dutch: 'Wanneer is dat begonnen? Sinds wanneer hebt u ze?',
      english: 'When did that start? Since when have you had them?',
      notes: '"begonnen" (zijn + begonnen). Vragen naar beginpunt van klachten.',
      keyWords: ['wanneer', 'begonnen', 'sinds wanneer']
    },
    {
      id: 5,
      speaker: 'Meneer Smit',
      dutch: 'Sinds gisteravond.',
      english: 'Since yesterday evening / last night.',
      notes: 'Tijdsbepaling: gisteravond (\'s avonds).',
      keyWords: ['gisteravond']
    },
    {
      id: 6,
      speaker: 'Huisarts',
      dutch: 'Kunt u vertellen wat u gisteren hebt gedaan?',
      english: 'Can you tell me what you did yesterday?',
      notes: 'Perfectumvraag met hulpwerkwoord hebben: "wat hebt u gedaan?".',
      keyWords: ['vertellen', 'gedaan']
    },
    {
      id: 7,
      speaker: 'Meneer Smit',
      dutch: 'Ik heb gisteren in de tuin gewerkt. Het was mooi weer, dus ik heb een T-shirt gedragen. \'s Middags ben ik naar een biologische boerderij gefietst.',
      english: 'I worked in the garden yesterday. The weather was nice, so I wore a T-shirt. In the afternoon I cycled to an organic farm.',
      notes: 'gewerkt (hebben), gedragen (hebben), gefietst (zijn: beweging met richting!).',
      keyWords: ['gewerkt', 'gedragen', 'gefietst', 'boerderij']
    },
    {
      id: 8,
      speaker: 'Huisarts',
      dutch: 'En wat hebt u daar gedaan?',
      english: 'And what did you do there?',
      notes: 'Navraag naar mogelijke allergenen.',
      keyWords: ['gedaan']
    },
    {
      id: 9,
      speaker: 'Meneer Smit',
      dutch: 'Ik heb aardbeien geplukt en meteen een paar opgegeten. Ze waren heerlijk rijp.',
      english: 'I picked strawberries and immediately ate a few. They were deliciously ripe.',
      notes: '"geplukt" (plukken -> stam pluk eindigt op k -> \'t kofschip -> geplukt). "opgegeten" = eaten up.',
      keyWords: ['aardbeien', 'gegeten', 'rijp', 'geplukt']
    },
    {
      id: 10,
      speaker: 'Huisarts',
      dutch: 'Het lijkt op een allergische reactie. Ik geef u een zalf mee tegen de jeuk, anders krabt u uw huid kapot. Sterkte!',
      english: 'It looks like an allergic reaction. I\'ll give you an ointment for the itch, otherwise you\'ll scratch your skin broken. Wishing you strength!',
      notes: '"de zalf" = ointment. "Sterkte!" = Wishing you strength / beterschap.',
      keyWords: ['allergische reactie', 'zalf', 'jeuk', 'krabben', 'sterkte']
    },
    {
      id: 11,
      speaker: 'Meneer Smit',
      dutch: 'Bedankt dokter, tot ziens.',
      english: 'Thank you doctor, goodbye.',
      notes: 'Beleefd afronden van het consult.',
      keyWords: ['bedankt', 'tot ziens']
    }
  ],
  vocabulary: [
    {
      id: 'de_huisarts',
      dutch: 'de huisarts',
      english: 'general practitioner (GP) / family doctor',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de huisartsen',
      exampleSentence: 'In Nederland schrijf je je eerst in bij een lokale huisarts.',
      exampleEnglish: 'In the Netherlands you first register with a local GP.'
    },
    {
      id: 'de_praktijk',
      dutch: 'de huisartsenpraktijk',
      english: 'GP surgery / medical clinic',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de praktijken',
      exampleSentence: 'De praktijk is geopend van acht tot vijf uur.',
      exampleEnglish: 'The surgery is open from eight to five o\'clock.'
    },
    {
      id: 'de_assistente',
      dutch: 'de doktersassistente',
      english: 'doctor\'s assistant / medical receptionist',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de assistentes',
      exampleSentence: 'De assistente plant de afspraken in en geeft medisch advies.',
      exampleEnglish: 'The assistant schedules appointments and gives medical advice.'
    },
    {
      id: 'de_apotheek',
      dutch: 'de apotheek',
      english: 'pharmacy / chemist',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de apotheken',
      exampleSentence: 'Met het recept haal je de zalf op bij de apotheek.',
      exampleEnglish: 'With the prescription you collect the ointment from the pharmacy.'
    },
    {
      id: 'het_recept',
      dutch: 'het recept',
      english: 'prescription (also: cooking recipe)',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de recepten',
      exampleSentence: 'De arts stuurt het recept digitaal naar de apotheek.',
      exampleEnglish: 'The doctor sends the prescription digitally to the pharmacy.'
    },
    {
      id: 'het_medicijn',
      dutch: 'het medicijn (het geneesmiddel)',
      english: 'medicine / medication',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de medicijnen',
      exampleSentence: 'Neem dit medicijn tweemaal daags in met water.',
      exampleEnglish: 'Take this medicine twice daily with water.'
    },
    {
      id: 'de_pil',
      dutch: 'de pil (het tablet)',
      english: 'pill / tablet',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de pillen / tabletten',
      exampleSentence: 'Slik \'s ochtends één pil na het ontbijt.',
      exampleEnglish: 'Swallow one pill in the morning after breakfast.'
    },
    {
      id: 'de_zalf',
      dutch: 'de zalf',
      english: 'ointment / medicinal cream',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de zalven',
      exampleSentence: 'Smeer een dun laagje zalf op de rode bultjes.',
      exampleEnglish: 'Rub a thin layer of ointment onto the red spots.'
    },
    {
      id: 'het_verband',
      dutch: 'het verband (de pleister)',
      english: 'bandage (plaster / band-aid)',
      category: 'gezondheid',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de verbanden',
      exampleSentence: 'Plak een pleister op de kleine snijwond.',
      exampleEnglish: 'Stick a plaster on the small cut.'
    },
    {
      id: 'het_lichaamsdeel',
      dutch: 'het lichaamsdeel',
      english: 'body part',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de lichaamsdelen',
      exampleSentence: 'Welke lichaamsdelen doen pijn?',
      exampleEnglish: 'Which body parts hurt?'
    },
    {
      id: 'het_hoofd',
      dutch: 'het hoofd',
      english: 'head',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de hoofden',
      exampleSentence: 'Ik stootte net mijn hoofd tegen het lage kozijn.',
      exampleEnglish: 'I just bumped my head against the low door frame.'
    },
    {
      id: 'het_oog',
      dutch: 'het oog (ogen)',
      english: 'eye (eyes)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de ogen',
      exampleSentence: 'Mijn ogen branden van de hooikoorts.',
      exampleEnglish: 'My eyes burn from hay fever.'
    },
    {
      id: 'het_oor',
      dutch: 'het oor (oren)',
      english: 'ear (ears)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de oren',
      exampleSentence: 'Het kind heeft oorpijn en huilt veel.',
      exampleEnglish: 'The child has an earache and cries a lot.'
    },
    {
      id: 'de_neus',
      dutch: 'de neus',
      english: 'nose',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de neuzen',
      exampleSentence: 'Mijn neus zit helemaal verstopt door de verkoudheid.',
      exampleEnglish: 'My nose is completely blocked from the cold.'
    },
    {
      id: 'de_keel',
      dutch: 'de keel',
      english: 'throat',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de kelen',
      exampleSentence: 'Ik heb keelpijn en kan moeilijk praten.',
      exampleEnglish: 'I have a sore throat and can barely speak.'
    },
    {
      id: 'de_arm',
      dutch: 'de arm (armen)',
      english: 'arm (arms)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de armen',
      exampleSentence: 'Er zitten tientallen bultjes op mijn rechterarm.',
      exampleEnglish: 'There are dozens of spots on my right arm.'
    },
    {
      id: 'de_hand',
      dutch: 'de hand (handen)',
      english: 'hand (hands)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de handen',
      exampleSentence: 'Was je handen grondig met water en zeep.',
      exampleEnglish: 'Wash your hands thoroughly with water and soap.'
    },
    {
      id: 'het_been',
      dutch: 'het been (benen)',
      english: 'leg (legs)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'het',
      plural: 'de benen',
      exampleSentence: 'Na de marathon deden mijn benen ontzettend zeer.',
      exampleEnglish: 'After the marathon my legs ached terribly.'
    },
    {
      id: 'de_voet',
      dutch: 'de voet (voeten)',
      english: 'foot (feet)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de voeten',
      exampleSentence: 'Ik loop graag op blote voeten in het zand.',
      exampleEnglish: 'I like walking barefoot in the sand.'
    },
    {
      id: 'de_buik',
      dutch: 'de buik',
      english: 'stomach / belly',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de buiken',
      exampleSentence: 'Zij heeft buikpijn na het eten van bedorven kaas.',
      exampleEnglish: 'She has stomach ache after eating spoiled cheese.'
    },
    {
      id: 'de_rug',
      dutch: 'de rug',
      english: 'back',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de ruggen',
      exampleSentence: 'Veel kantoormensen hebben last van hun onderrug.',
      exampleEnglish: 'Many office workers suffer from lower back pain.'
    },
    {
      id: 'de_knie',
      dutch: 'de knie (knieën)',
      english: 'knee (knees)',
      category: 'lichaam',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de knieën',
      exampleSentence: 'Bij het voetballen blesseerde hij zijn linkerknie.',
      exampleEnglish: 'During football he injured his left knee.'
    },
    {
      id: 'wat_is_er_aan_de_hand',
      dutch: 'wat is er aan de hand?',
      english: 'what is the matter? / what\'s wrong?',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'De dokter vraagt vriendelijk: "Wat is er aan de hand?"',
      exampleEnglish: 'The doctor asks kindly: "What is the matter?"'
    },
    {
      id: 'waar_hebt_u_last_van',
      dutch: 'waar hebt u last van?',
      english: 'what is bothering you? / what are your symptoms?',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Waar hebt u precies last van sinds gisteren?',
      exampleEnglish: 'What exactly has been bothering you since yesterday?'
    },
    {
      id: 'pijn_hebben',
      dutch: 'pijn hebben / pijn doen',
      english: 'to have pain / to hurt',
      category: 'klachten',
      partOfSpeech: 'phrase',
      exampleSentence: 'Mijn schouder doet veel pijn als ik beweeg.',
      exampleEnglish: 'My shoulder hurts a lot when I move.'
    },
    {
      id: 'de_koorts',
      dutch: 'de koorts (verhoging)',
      english: 'fever (temperature)',
      category: 'klachten',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'Hij heeft 39 graden koorts en ligt op bed.',
      exampleEnglish: 'He has 39 degrees fever and is lying in bed.'
    },
    {
      id: 'verkouden_zijn',
      dutch: 'verkouden zijn',
      english: 'to have a cold',
      category: 'klachten',
      partOfSpeech: 'phrase',
      exampleSentence: 'In de herfst is bijna iedereen wel eens verkouden.',
      exampleEnglish: 'In autumn almost everyone catches a cold sometimes.'
    },
    {
      id: 'de_griep',
      dutch: 'de griep',
      english: 'flu / influenza',
      category: 'klachten',
      partOfSpeech: 'noun',
      article: 'de',
      exampleSentence: 'Met echte griep voel je je een hele week hondsberoerd.',
      exampleEnglish: 'With real flu you feel terrible for a whole week.'
    },
    {
      id: 'hoesten',
      dutch: 'hoesten',
      english: 'to cough',
      category: 'klachten',
      partOfSpeech: 'verb',
      exampleSentence: 'Zij hoest al twee weken onophoudelijk.',
      exampleEnglish: 'She has been coughing non-stop for two weeks.'
    },
    {
      id: 'niezen',
      dutch: 'niezen',
      english: 'to sneeze',
      category: 'klachten',
      partOfSpeech: 'verb',
      exampleSentence: 'Gezondheid! riep hij toen ze moest niezen.',
      exampleEnglish: '"Bless you!" he exclaimed when she had to sneeze.'
    },
    {
      id: 'jeuken',
      dutch: 'jeuken',
      english: 'to itch',
      category: 'klachten',
      partOfSpeech: 'verb',
      exampleSentence: 'Muggenbulten jeuken verschrikkelijk.',
      exampleEnglish: 'Mosquito bites itch terribly.'
    },
    {
      id: 'krabben',
      dutch: 'krabben',
      english: 'to scratch',
      category: 'klachten',
      partOfSpeech: 'verb',
      exampleSentence: 'Probeer niet aan de uitslag te krabben.',
      exampleEnglish: 'Try not to scratch at the rash.'
    },
    {
      id: 'de_allergie',
      dutch: 'de allergie (allergisch zijn voor)',
      english: 'allergy (to be allergic to)',
      category: 'klachten',
      partOfSpeech: 'noun',
      article: 'de',
      plural: 'de allergieën',
      exampleSentence: 'Ik ben allergisch voor noten en kattenharen.',
      exampleEnglish: 'I am allergic to nuts and cat hair.'
    },
    {
      id: 'beterschap',
      dutch: 'beterschap! / sterkte!',
      english: 'get well soon! / hang in there!',
      category: 'conversatie',
      partOfSpeech: 'phrase',
      exampleSentence: 'Van harte beterschap, doe het rustig aan!',
      exampleEnglish: 'Get well soon, take it easy!'
    },
    {
      id: 'afspraak_maken',
      dutch: 'een afspraak maken',
      english: 'to make an appointment',
      category: 'gezondheid',
      partOfSpeech: 'phrase',
      exampleSentence: 'Ik bel de assistente om een afspraak te maken voor morgen.',
      exampleEnglish: 'I call the assistant to book an appointment for tomorrow.'
    },
    {
      id: 'zich_voelen',
      dutch: 'zich voelen (goed / slecht / ziek)',
      english: 'to feel (well / bad / sick)',
      category: 'werkwoorden',
      partOfSpeech: 'verb',
      exampleSentence: 'Hoe voel je je vandaag? - Ik voel me gelukkig al veel beter.',
      exampleEnglish: 'How do you feel today? - I fortunately feel much better.'
    },
    {
      id: 'duizelig',
      dutch: 'duizelig',
      english: 'dizzy / lightheaded',
      category: 'klachten',
      partOfSpeech: 'adjective',
      exampleSentence: 'Toen ik te snel opstond, werd ik ineens duizelig.',
      exampleEnglish: 'When I stood up too quickly, I suddenly felt dizzy.'
    },
    {
      id: 'moe',
      dutch: 'moe (uitgeput)',
      english: 'tired / exhausted',
      category: 'klachten',
      partOfSpeech: 'adjective',
      exampleSentence: 'Na een week ziek zijn ben ik nog erg slap en moe.',
      exampleEnglish: 'After a week of illness I am still very weak and tired.'
    },
    {
      id: 'gisteravond',
      dutch: 'gisteravond (\'s avonds)',
      english: 'yesterday evening / last night',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Gisteravond begon de koorts ineens op te lopen.',
      exampleEnglish: 'Last night the fever suddenly started to rise.'
    },
    {
      id: 'vannacht',
      dutch: 'vannacht',
      english: 'tonight / last night (during the night)',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: 'Vannacht heb ik bijna niet geslapen door de hoest.',
      exampleEnglish: 'Last night I hardly slept due to the cough.'
    },
    {
      id: 's_ochtends',
      dutch: '\'s ochtends (de ochtend)',
      english: 'in the morning (the morning)',
      category: 'tijd',
      partOfSpeech: 'adverb',
      exampleSentence: '\'s Ochtends voel ik me vaak stijf in mijn spieren.',
      exampleEnglish: 'In the morning I often feel stiff in my muscles.'
    }
  ],
  grammarPoints: [
    {
      id: 'perfectum_regelmatig',
      title: '9.7 Het Perfectum: Regelmatige Werkwoorden (\'t kofschip)',
      summary: 'Voltooid verleden tijd: hebben/zijn + ge- + stam + t / d.',
      ruleExplanation: `Het Perfectum gebruik je voor acties die in het verleden hebben plaatsgevonden en zijn afgerond.

Bouwformule:
[Persoonsvorm van HEBBEN of ZIJN] ... [GE- + STAM + T of D]

De beroemde regel van \'T KOFSCHIP (of SOFT KETCHUP):
Kijk naar de LAATSTE LETTER VAN DE WERKWOORDSTAM (infinitief minus -en):
1. Is het een s, f, t, k, ch of p? -> Participium eindigt op -T!
   • wer-ken -> stam werK (k) -> ge-werk-T ("Ik heb gewerkt")
   • fiet-sen -> stam fietS (s) -> ge-fiet-s-T ("Ik ben gefietst")
   • ko-ken -> stam kooK (k) -> ge-kook-T
   • pra-ten -> stam praaT (t) -> ge-praa-T (geen dubbele t!)

2. Is het een ANDERE letter? -> Participium eindigt op -D!
   • spe-len -> stam speeL (l) -> ge-speel-D ("Ik heb gespeeld")
   • wo-nen -> stam wooN (n) -> ge-woon-D
   • hu-ren -> stam huuR (r) -> ge-huur-D
   • pro-be-ren -> stam pro-beer (r) -> ge-probeer-D

Let op: werkwoorden die beginnen met be-, ge-, her-, ver-, ont- krijgen GEEN extra ge-!
• betalen -> betaald (NIET ge-betaald)
• vertellen -> verteld (NIET ge-verteld)`,
      examples: [
        {
          dutch: 'Ik heb gisteren in de tuin gewerkt.',
          english: 'I worked in the garden yesterday.',
          note: 'werken -> stam werk (k in kofschip) -> gewerkt.'
        },
        {
          dutch: 'Wat heb je gisteravond verteld?',
          english: 'What did you tell yesterday evening?',
          note: 'Voorvoegsel "ver-" -> geen ge-: verteld.'
        }
      ]
    },
    {
      id: 'hebben_vs_zijn_perfectum',
      title: '9.8 Hulpwerkwoord in het Perfectum: Hebben vs Zijn',
      summary: 'Wanneer gebruik je "hebben" en wanneer "zijn"?',
      ruleExplanation: `Het grootste deel van de Nederlandse werkwoorden vormt het perfectum met HEBBEN.

Je gebruikt ZIJN bij:
1. Werkwoorden van beweging met een RICHTING of BESTEMMING:
   • fietsen naar... : "Ik BEN naar de dokter gefietst."
   • gaan : "Zij IS naar huis gegaan."
   • komen : "Wie IS er op bezoek gekomen?"
   • lopen naar... : "Wij ZIJN naar de apotheek gelopen."

2. Verandering van toestand:
   • beginnen : "De koorts IS gisteravond begonnen."
   • stoppen : "De regen IS gestopt."
   • worden : "Zij IS dokter geworden."
   • sterven / overlijden : "Hij IS vorig jaar overleden."

3. Vaste uitzonderingen (altijd ZIJN!):
   • zijn : "Ik BEN gisteren ziek GEWEEST."
   • blijven : "Wij ZIJN het hele weekend thuis GEBLEVEN."`,
      examples: [
        {
          dutch: 'Ik ben vanmorgen naar de dokter gefietst.',
          english: 'I cycled to the doctor this morning.',
          note: 'Beweging met bestemming (naar de dokter) -> zijn.'
        },
        {
          dutch: 'Ik ben het hele weekend thuisgebleven.',
          english: 'I stayed at home the whole weekend.',
          note: 'Blijven combineert altijd met zijn.'
        }
      ]
    },
    {
      id: 'onregelmatige_participia',
      title: '9.9 Veelgebruikte Onregelmatige Participia',
      summary: 'Sterke werkwoorden die van klinker veranderen in het verleden.',
      ruleExplanation: `Veel hoogfrequente werkwoorden zijn onregelmatig in het perfectum (vaak met klinkerverandering en -en op het eind):
• doen -> gedaan ("Wat heb je gedaan?")
• eten -> gegeten ("Ik heb aardbeien gegeten.")
• drinken -> gedronken ("Hij heeft een kop thee gedronken.")
• zien -> gezien ("Heb je die bultjes gezien?")
• hebben -> gehad ("Ik heb hoofdpijn gehad.")
• zijn -> geweest ("Zij is ziek geweest.")
• gaan -> gegaan ("We zijn naar huis gegaan.")
• nemen -> genomen ("Ik heb een paracetamol genomen.")
• slapen -> geslapen ("Ik heb slecht geslapen.")`,
      examples: [
        {
          dutch: 'Wat heb je vanochtend gegeten?',
          english: 'What did you eat this morning?',
          note: 'eten -> gegeten.'
        },
        {
          dutch: 'Ik heb twee paracetamols ingenomen.',
          english: 'I took two paracetamols.',
          note: 'innemen -> ingenomen.'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'opdracht_1_begrip',
      title: 'Opdracht 1: Begrip van het doktersgesprek',
      instruction: 'Zijn de beweringen WAAR of NIET WAAR volgens de tekst?',
      items: [
        {
          id: 1,
          prompt: 'Meneer Smit heeft rode bultjes op zijn hele gezicht.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: De bultjes zitten op zijn armen, benen, buik en rug, "alleen niet op mijn gezicht".'
        },
        {
          id: 2,
          prompt: 'De klachten van meneer Smit zijn gisteravond begonnen.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Meneer Smit antwoordt: "Sinds gisteravond."'
        },
        {
          id: 3,
          prompt: 'Meneer Smit heeft gisteren aardbeien geplukt op een biologische boerderij.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Hij fietste naar een boerderij en plukte daar verse aardbeien.'
        },
        {
          id: 4,
          prompt: 'De huisarts denkt aan een bacteriële longontsteking.',
          answer: 'niet waar',
          options: ['waar', 'niet waar'],
          explanation: 'Niet waar: De arts stelt vast: "Het lijkt op een allergische reactie."'
        },
        {
          id: 5,
          prompt: 'De huisarts schrijft een zalf voor tegen de jeuk.',
          answer: 'waar',
          options: ['waar', 'niet waar'],
          explanation: 'Waar: Hij geeft een zalf mee om het krabben te voorkomen.'
        }
      ]
    },
    {
      id: 'opdracht_2_kofschip',
      title: 'Opdracht 2: \'T Kofschip regel: -t of -d?',
      instruction: 'Eindigt het regelmatige participium op een -t of op een -d?',
      items: [
        {
          id: 1,
          prompt: 'werken -> stam wer-k (k) -> ge-werk-_______',
          answer: 't',
          options: ['t', 'd'],
          explanation: 'De letter k zit in \'t koFschip, dus het krijgt een -t (gewerkt).'
        },
        {
          id: 2,
          prompt: 'wonen -> stam woo-n (n) -> ge-woon-_______',
          answer: 'd',
          options: ['d', 't'],
          explanation: 'De letter n zit niet in \'t kofschip, dus het krijgt een -d (gewoond).'
        },
        {
          id: 3,
          prompt: 'fietsen -> stam fiet-s (s) -> ge-fiet-s-_______',
          answer: 't',
          options: ['t', 'd'],
          explanation: 'De letter s zit in \'t kofschip, dus het krijgt een -t (gefietst).'
        },
        {
          id: 4,
          prompt: 'huren -> stam huu-r (r) -> ge-huur-_______',
          answer: 'd',
          options: ['d', 't'],
          explanation: 'De letter r zit niet in \'t kofschip, dus een -d (gehuurd).'
        },
        {
          id: 5,
          prompt: 'proeven -> infinitief proeven, stam proef (f van kofschip!) -> ge-proef-_______',
          answer: 't',
          options: ['t', 'd'],
          explanation: 'Kijk naar de klank van de stam proef (f), f zit in kofschip -> geproefd? Let op: de oorspronkelijke letter van de stam bij proeven is v -> geproefd met een d!'
        }
      ]
    },
    {
      id: 'opdracht_3_hebben_vs_zijn',
      title: 'Opdracht 3: Hebben of Zijn in het Perfectum?',
      instruction: 'Kies het juiste hulpwerkwoord.',
      items: [
        {
          id: 1,
          prompt: 'Gisteren _______ ik de hele dag in de tuin gewerkt.',
          answer: 'heb',
          options: ['heb', 'ben'],
          explanation: 'werken combineert met hebben: "ik heb gewerkt".'
        },
        {
          id: 2,
          prompt: 'Meneer Smit _______ naar de biologische boerderij gefietst.',
          answer: 'is',
          options: ['is', 'heeft'],
          explanation: 'fietsen naar een specifieke plek is een gerichte beweging -> zijn.'
        },
        {
          id: 3,
          prompt: 'Wanneer _______ de pijn precies begonnen?',
          answer: 'is',
          options: ['is', 'heeft'],
          explanation: 'beginnen drukt een verandering van toestand uit en neemt altijd zijn.'
        },
        {
          id: 4,
          prompt: 'Ik _______ het hele weekend thuisgebleven omdat ik ziek was.',
          answer: 'ben',
          options: ['ben', 'heb'],
          explanation: 'blijven combineert in het Nederlands altijd met zijn: "ik ben gebleven".'
        },
        {
          id: 5,
          prompt: 'Wat _______ jij vanochtend als ontbijt gegeten?',
          answer: 'heb',
          options: ['heb', 'ben'],
          explanation: 'eten combineert met hebben: "wat heb je gegeten?".'
        }
      ]
    },
    {
      id: 'opdracht_4_lichaamsdelen',
      title: 'Opdracht 4: Welk lichaamsdeel hoort bij de klacht?',
      instruction: 'Koppel het lichaamsdeel aan de juiste pijn of functie.',
      items: [
        {
          id: 1,
          prompt: 'Ik kan bijna niet slikken als ik water drink. Waar heb ik last van?',
          answer: 'keelpijn (in de keel)',
          options: ['keelpijn (in de keel)', 'rugpijn (in de rug)', 'voetpijn (aan de voeten)'],
          explanation: 'Slikken doe je met je keel.'
        },
        {
          id: 2,
          prompt: 'Na te veel tillen van zware verhuisdozen doet mijn _______ erg zeer.',
          answer: 'rug',
          options: ['rug', 'neus', 'oor'],
          explanation: 'Zwaar tillen belast vooral de rugspieren.'
        },
        {
          id: 3,
          prompt: 'Mijn schoenen zijn te klein; ik heb blaren op mijn _______.',
          answer: 'voeten',
          options: ['voeten', 'ogen', 'handen'],
          explanation: 'Schoenen draag je aan je voeten.'
        },
        {
          id: 4,
          prompt: 'Door de felle zon en te weinig slaap klopt het in mijn _______.',
          answer: 'hoofd (hoofdpijn)',
          options: ['hoofd (hoofdpijn)', 'knie', 'elleboog'],
          explanation: 'Kloppende pijn door vermoeidheid zit in het hoofd.'
        }
      ]
    },
    {
      id: 'opdracht_5_conversatie',
      title: 'Opdracht 5: Wat zeg je bij de dokter en de apotheek?',
      instruction: 'Kies de juiste Nederlandse formule.',
      items: [
        {
          id: 1,
          prompt: 'Je collega vertelt dat hij ziek thuiszit met 39 graden koorts. Wat wens je hem?',
          answer: 'Van harte beterschap!',
          options: ['Van harte beterschap!', 'Eet smakelijk!', 'Gefeliciteerd!'],
          explanation: '"Beterschap!" wens je aan iemand die ziek is.'
        },
        {
          id: 2,
          prompt: 'Je belt de huisartsenpraktijk. Wat zeg je als eerste tegen de assistente?',
          answer: 'Goedemorgen, ik wil graag een afspraak maken met de dokter.',
          options: [
            'Goedemorgen, ik wil graag een afspraak maken met de dokter.',
            'Mag ik de menukaart bekijken?',
            'Laat de rest maar zitten.'
          ],
          explanation: 'Zo vraag je netjes om een afspraak bij de praktijk.'
        },
        {
          id: 3,
          prompt: 'De apothekersassistent geeft je een doosje tabletten. Wat vraag je over het gebruik?',
          answer: 'Hoe vaak per dag moet ik deze tabletten innemen?',
          options: [
            'Hoe vaak per dag moet ik deze tabletten innemen?',
            'Welke maat spijkerbroek is dit?',
            'Is dit appartement gemeubileerd?'
          ],
          explanation: 'Zo informeer je naar de dosering van medicijnen.'
        }
      ]
    }
  ],
  readingText: {
    title: '9.9 Tekst: De Nederlandse Huisarts',
    subtitle: 'Over de poortwachtersrol, triage en "Neem maar twee paracetamols" (Blz. 134)',
    content: `In het Nederlandse gezondheidszorgsysteem vervult de huisarts de cruciale rol van poortwachter. Dat betekent dat je niet rechtstreeks een afspraak kunt maken bij een specialist in het ziekenhuis (zoals een cardioloog, dermatoloog of kno-arts). Je hebt altijd eerst een officiële doorverwijzing (een verwijsbrief) van je eigen huisarts nodig.

Wanneer je belt naar de praktijk, krijg je eerst de doktersassistente aan de lijn. Zij is medisch opgeleid en doet de zogeheten triage: ze stelt gerichte vragen over je symptomen om te bepalen hoe dringend de situatie is. Vaak kan de assistente zelf al nuttig advies geven bij eenvoudige klachten zoals verkoudheid of blaasontsteking.

Buitenlanders verbazen zich er soms over dat Nederlandse artsen heel terughoudend zijn met het voorschrijven van zware medicatie en antibiotica. Het bekende stereotype advies luidt dan ook: "Neem een paar dagen rust, drink veel water, neem zo nodig twee paracetamols en bel terug als het na vijf dagen nog niet over is." Het lichaam krijgt eerst de kans om zelf op natuurlijke wijze te genezen.`,
    vocabularyNotes: [
      { word: 'de poortwachter', translation: 'gatekeeper (preventing unnecessary hospital care)' },
      { word: 'de verwijsbrief', translation: 'referral letter from GP to medical specialist' },
      { word: 'de triage', translation: 'medical urgency assessment over phone' },
      { word: 'terughoudend', translation: 'restrained / cautious' },
      { word: 'paracetamol', translation: 'common painkiller / acetaminophen' }
    ],
    questions: [
      {
        id: 1,
        prompt: 'Wat houdt de rol van de huisarts als "poortwachter" in?',
        answer: 'Je kunt alleen naar een ziekenhuisspecialist met een verwijsbrief van je huisarts',
        options: [
          'Je kunt alleen naar een ziekenhuisspecialist met een verwijsbrief van je huisarts',
          'De huisarts bewaakt \'s nachts het ziekenhuishek',
          'De huisarts verkoopt kaartjes voor de apotheek'
        ],
        explanation: 'De huisarts beoordeelt eerst of doorverwijzing naar een specialist nodig is.'
      },
      {
        id: 2,
        prompt: 'Wat doet de doktersassistente als je de praktijk opbelt?',
        answer: 'Ze stelt vragen over je klachten om de ernst te bepalen (triage)',
        options: [
          'Ze stelt vragen over je klachten om de ernst te bepalen (triage)',
          'Ze verbindt je direct door naar de ambulance',
          'Ze stuurt je meteen een rekening van honderd euro'
        ],
        explanation: 'De assistente doet medische triage en schat in of en hoe snel je gezien moet worden.'
      },
      {
        id: 3,
        prompt: 'Waarom schrijven Nederlandse huisartsen niet direct zware antibiotica voor?',
        answer: 'Ze laten het lichaam liever eerst zelf herstellen om resistentie te voorkomen',
        options: [
          'Ze laten het lichaam liever eerst zelf herstellen om resistentie te voorkomen',
          'Omdat antibiotica niet bestaan in Nederland',
          'Omdat alleen apothekers medicijnen mogen voorschrijven'
        ],
        explanation: 'Nederlandse artsen zijn internationaal bekend om een terughoudend antibioticabeleid.'
      }
    ]
  },
  pronunciation: {
    title: '9.10 Uitspraak: oe – oo – o',
    soundFocus: 'Klinkers: "oe" (voet) vs "oo" (oor, hoofd) vs "o" (kort)',
    explanation: 'De Nederlandse "oe" klinkt als in het Engelse "boot" of "cool" (mond gerond). Vergelijk met de lange "oo" (zoals in "oor", "hoofd", "boos"), die een pure gesloten o-klank is zonder glide in het Standaardnederlands, en de korte open "o" (zoals in "dok", "mond").',
    wordList: [
      'voet', 'boot', 'hoesten', 'oosten', 'bloed', 'bloot', 'koorts', 'kort', 'mond', 'moed', 'hoofd', 'zoek'
    ],
    minimalPairs: [
      { word1: 'voet', word2: 'boot', contrast: 'oe vs oo' },
      { word1: 'hoesten', word2: 'oosten', contrast: 'oe vs oo' },
      { word1: 'bloed', word2: 'bloot', contrast: 'oe vs oo' }
    ]
  },
  exam: {
    title: 'Eindtoets Hoofdstuk 9: Bij de huisarts',
    passingScore: 70,
    questions: [
      {
        id: 1,
        prompt: 'Wat is het juiste lidwoord voor "lichaamsdeel"?',
        options: ['het lichaamsdeel', 'de lichaamsdeel', 'een lichaamsdeel'],
        answer: 'het lichaamsdeel',
        explanation: 'Deel is een het-woord: het lichaamsdeel.'
      },
      {
        id: 2,
        prompt: 'Wat is het meervoud van "het oog"?',
        options: ['de ogen', 'de oogs', 'de oger', 'de ogens'],
        answer: 'de ogen',
        explanation: 'Het oog -> de ogen.'
      },
      {
        id: 3,
        prompt: 'Voltooi het perfectum volgens \'t kofschip: "Zij heeft gisteren een lekkere appeltaart _______ (bakken)."',
        options: ['gebakken', 'gebakt', 'gebakde'],
        answer: 'gebakken',
        explanation: 'Bakken is een sterk werkwoord: bakken -> bakte -> gebakken.'
      },
      {
        id: 4,
        prompt: 'Voltooi volgens \'t kofschip: "Peter heeft zijn kleren gewassen en zijn kamer _______ (verven)."',
        options: ['geverfd', 'geverft', 'geveerd'],
        answer: 'geverfd',
        explanation: 'Verven heeft als stam verv- (v). De v zit niet in \'t kofschip -> geverfd (met een d).'
      },
      {
        id: 5,
        prompt: 'Welk hulpwerkwoord hoort bij: "Mijn collega _______ gisteren met de bus naar Amsterdam gegaan."',
        options: ['is', 'heeft', 'was'],
        answer: 'is',
        explanation: 'Gaan is een beweging met richting en vormt het perfectum altijd met zijn: hij is gegaan.'
      },
      {
        id: 6,
        prompt: 'Welk hulpwerkwoord hoort bij: "De dokter _______ mij een recept meegegeven."',
        options: ['heeft', 'is', 'was'],
        answer: 'heeft',
        explanation: 'Meegeven vormt het perfectum met hebben: heeft meegegeven.'
      },
      {
        id: 7,
        prompt: 'Wat vraag je als je een afspraak wilt maken bij de huisartsenpraktijk?',
        options: [
          'Kan ik een afspraak maken voor het spreekuur?',
          'Mag ik twee kilo appels bestellen?',
          'Waar zijn de paskamers?'
        ],
        answer: 'Kan ik een afspraak maken voor het spreekuur?',
        explanation: 'Zo reserveer je een plekje op het spreekuur van de huisarts.'
      },
      {
        id: 8,
        prompt: 'Wat wens je een zieke vriend of collega?',
        options: ['Beterschap!', 'Gefeliciteerd!', 'Smakelijk eten!'],
        answer: 'Beterschap!',
        explanation: '"Beterschap!" betekent "get well soon".'
      },
      {
        id: 9,
        prompt: 'Wat betekent de medische triage door de doktersassistente?',
        options: [
          'Het beoordelen van de urgentie van je klachten via de telefoon.',
          'Het schilderen van de wachtkamer.',
          'Het uitdelen van gratis pleisters.'
        ],
        answer: 'Het beoordelen van de urgentie van je klachten via de telefoon.',
        explanation: 'Triage is het inschatten van de ernst en spoed van de situatie.'
      },
      {
        id: 10,
        prompt: 'Kies het juiste hulpwerkwoord: "Wij _______ vorig weekend thuisgebleven."',
        options: ['zijn', 'hebben', 'hadden'],
        answer: 'zijn',
        explanation: 'Blijven vormt het perfectum ALTIJD met zijn: wij zijn gebleven.'
      }
    ]
  },
  culturalOrPracticalNote: 'De Huisarts in Nederland: De huisarts is de poortwachter van de Nederlandse gezondheidszorg. Je kunt niet zomaar naar een specialist in het ziekenhuis; je hebt altijd eerst een verwijsbriefje van je huisarts nodig. De assistente vraagt altijd telefonisch vooraf wat je klachten zijn!'
};
