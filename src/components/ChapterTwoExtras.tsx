import React, { useState } from 'react';
import { Calendar, CheckCircle2, Volume2, XCircle, PenLine, MessageCircle, Users } from 'lucide-react';
import { speakDutch } from '../utils/speech';

interface ChoiceItem {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

/** Closing pages of chapter 2: culture, a practical task and a self-check. */
export const CHAPTER_TWO_REFLECTION = {
  culture: 'Het gemiddelde aantal kinderen per vrouw in Nederland is volgens de cursus ongeveer 1,7. Vergelijk dat met het aantal in jouw land.',
  practice: 'Vraag iemand hoe laat het is. Antwoord met een volledige zin, zoals "Het is kwart over drie."',
  reflectionQuestions: [
    'Kun je de dialoog aan het begin van dit hoofdstuk begrijpen?',
    'Kun je een persoon beschrijven?',
    'Kun je over je familie vertellen?',
    'Kun je vragen en zeggen hoe laat het is?',
    'Kun je de dagen van de week noemen?',
    'Kun je de maanden en seizoenen van het jaar noemen?',
  ],
};

interface ChapterTwoExtrasProps {
  audioSpeed: number;
  onRecordExerciseCompletion: (id: string) => void;
}

/** One multiple choice question. Records a completion the first time it is answered correctly. */
const ChoiceQuestion: React.FC<{
  item: ChoiceItem;
  onCorrect: (id: string) => void;
}> = ({ item, onCorrect }) => {
  const [picked, setPicked] = useState<string | null>(null);
  const isCorrect = picked === item.answer;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-2xs">
      <p className="mb-3 text-sm font-bold text-stone-900">{item.prompt}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {item.options.map((option) => {
          const isPicked = picked === option;
          const tone =
            picked === null
              ? 'border-stone-200 bg-stone-50 text-stone-800 hover:bg-stone-100'
              : option === item.answer
                ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                : isPicked
                  ? 'border-rose-300 bg-rose-50 text-rose-900'
                  : 'border-stone-200 bg-stone-50 text-stone-500';
          return (
            <button
              key={option}
              type="button"
              disabled={picked !== null}
              onClick={() => {
                setPicked(option);
                if (option === item.answer) onCorrect(item.id);
              }}
              className={`cursor-pointer rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors disabled:cursor-default ${tone}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className={`mt-3 flex items-start gap-2 text-xs ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
          {isCorrect ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />}
          <span>{item.explanation}</span>
        </p>
      )}
    </div>
  );
};

const DAYS_ITEMS: ChoiceItem[] = [
  { id: 'ch2_dag_1', prompt: 'Gisteren was het woensdag. Welke dag is het vandaag?', options: ['maandag', 'dinsdag', 'donderdag', 'vrijdag'], answer: 'donderdag', explanation: 'Gisteren was woensdag, dus vandaag is het donderdag.' },
  { id: 'ch2_dag_2', prompt: 'Morgen is het vrijdag. Welke dag was het eergisteren?', options: ['dinsdag', 'woensdag', 'zaterdag', 'zondag'], answer: 'dinsdag', explanation: 'Morgen vrijdag, vandaag donderdag, gisteren woensdag, eergisteren dinsdag.' },
  { id: 'ch2_dag_3', prompt: 'Overmorgen is het zaterdag. Welke dag is het morgen?', options: ['donderdag', 'vrijdag', 'zondag', 'maandag'], answer: 'vrijdag', explanation: 'Overmorgen zaterdag, dus morgen is het vrijdag.' },
];

const MONTH_ITEMS: ChoiceItem[] = [
  { id: 'ch2_maand_1', prompt: 'Welke maand komt na maart?', options: ['februari', 'april', 'mei', 'juni'], answer: 'april', explanation: 'Na maart komt april.' },
  { id: 'ch2_maand_2', prompt: 'In welk seizoen is het in december meestal koud?', options: ['de winter', 'de lente', 'de zomer', 'de herfst'], answer: 'de winter', explanation: 'December valt in de winter.' },
  { id: 'ch2_maand_3', prompt: 'Welk seizoen begint in maart?', options: ['de lente', 'de herfst', 'de winter', 'de zomer'], answer: 'de lente', explanation: 'De lente, ook het voorjaar, begint in maart.' },
];

const VOWEL_ITEMS: ChoiceItem[] = [
  { id: 'ch2_vocaal_1', prompt: 'Nina heeft dezelfde eerste klinker (i) als welke persoon?', options: ['Linde', 'Ben', 'Roos', 'Vera'], answer: 'Linde', explanation: 'Nina en Linde beginnen allebei met de klinker i.' },
  { id: 'ch2_vocaal_2', prompt: 'Roos heeft dezelfde eerste klinker (o) als welke persoon?', options: ['Jos', 'Ben', 'Els', 'Tim'], answer: 'Jos', explanation: 'Roos en Jos beginnen allebei met de klinker o.' },
  { id: 'ch2_vocaal_3', prompt: 'Vera heeft dezelfde eerste klinker (e) als welke persoon?', options: ['Petra', 'Daan', 'Boris', 'Lotte'], answer: 'Petra', explanation: 'Vera en Petra beginnen allebei met de klinker e.' },
];

const LISTEN_WORDS = [
  'acht', 'wat', 'ander', 'was', 'straks', 'dag', 'half', 'kantine', 'land', 'lang',
  'jaar', 'plaats', 'maand', 'naar', 'naam', 'dagen', 'jarig', 'ja', 'vader', 'maken',
];

const WRITING_PROMPTS = {
  A: 'Schrijf een korte tekst bij een foto van opdracht 2. Beschrijf de persoon en vertel wat hij of zij doet.',
  B: 'Schrijf een korte tekst bij een foto van je familie. Beschrijf drie familieleden en vertel waar ze wonen.',
};

export const ChapterTwoExtras: React.FC<ChapterTwoExtrasProps> = ({ audioSpeed, onRecordExerciseCompletion }) => {
  const [writingChoice, setWritingChoice] = useState<'A' | 'B'>('A');
  const [writingText, setWritingText] = useState<string>(() => {
    try {
      return window.localStorage.getItem('nederlands-leren:writing:hoofdstuk_2') || '';
    } catch {
      return '';
    }
  });

  const saveWriting = (value: string) => {
    setWritingText(value);
    try {
      window.localStorage.setItem('nederlands-leren:writing:hoofdstuk_2', value);
    } catch {
      // Storage blocked. The text stays on screen for this session.
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <Calendar className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 6-7: De dagen van de week</h3>
        </div>
        <p className="mb-4 text-xs text-stone-500">De dagen: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag. Gisteren, vandaag en morgen helpen je om de dag te vinden.</p>
        <div className="space-y-3">
          {DAYS_ITEMS.map((item) => (
            <ChoiceQuestion key={item.id} item={item} onCorrect={onRecordExerciseCompletion} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <Calendar className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 8-9: Maanden en seizoenen</h3>
        </div>
        <p className="mb-4 text-xs text-stone-500">Het jaar: januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december. Seizoenen: de winter, de lente (het voorjaar), de zomer, de herfst (het najaar).</p>
        <div className="space-y-3">
          {MONTH_ITEMS.map((item) => (
            <ChoiceQuestion key={item.id} item={item} onCorrect={onRecordExerciseCompletion} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <Users className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 11: Interviewen</h3>
        </div>
        <p className="mb-3 text-sm text-stone-700">Werk in tweetallen. Bedenk vragen voor een interview. Gebruik twee soorten vragen: de ja/nee-vraag en de vraagwoordvraag.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-stone-50 p-4 text-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">Ja/nee-vraag</p>
            <p className="text-stone-800">Woon je al lang in Utrecht?</p>
            <p className="text-stone-800">Heb je broers of zussen?</p>
          </div>
          <div className="rounded-2xl bg-stone-50 p-4 text-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">Vraagwoordvraag</p>
            <p className="text-stone-800">Waar woon je?</p>
            <p className="text-stone-800">Hoe heet je zus?</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-stone-500">Interview daarna een ander tweetal met dezelfde vragen.</p>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <PenLine className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 12: Een tekst schrijven</h3>
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          {(['A', 'B'] as const).map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => setWritingChoice(choice)}
              className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-bold ${
                writingChoice === choice ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Opdracht {choice}
            </button>
          ))}
        </div>
        <p className="mb-3 text-sm text-stone-700">{WRITING_PROMPTS[writingChoice]}</p>
        <textarea
          value={writingText}
          onChange={(e) => saveWriting(e.target.value)}
          rows={6}
          aria-label="Eigen tekst schrijven"
          placeholder="Schrijf hier je tekst in het Nederlands..."
          className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
        />
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <Users className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 14: Vocalen bij het datingbureau</h3>
        </div>
        <p className="mb-4 text-sm text-stone-700">Het datingbureau koppelt mensen met dezelfde eerste klinker. Ben, Daan, Els, Nina, Boris, Diederik, Marcel, Petra, Roos, Jos, Lotte, Vera, Sara, Linde, Tim en Walter zoeken een partner.</p>
        <div className="space-y-3">
          {VOWEL_ITEMS.map((item) => (
            <ChoiceQuestion key={item.id} item={item} onCorrect={onRecordExerciseCompletion} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-black text-stone-900">
          <Volume2 className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Opdracht 16: Luister en herhaal</h3>
        </div>
        <p className="mb-4 text-sm text-stone-700">Klik op een woord om het te horen. Herhaal het hardop. Let op de lange en korte klinkers, zoals in "maan" en "man".</p>
        <div className="flex flex-wrap gap-2">
          {LISTEN_WORDS.map((word) => (
            <button
              key={word}
              type="button"
              onClick={() => speakDutch(word, audioSpeed)}
              className="cursor-pointer rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm font-semibold text-stone-800 hover:bg-amber-50"
            >
              {word}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs text-stone-600">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span>Tip: herhaal de dialoog in het tabblad Dialoog. Luister eerst en zeg daarna de zinnen na.</span>
        </div>
      </section>
    </div>
  );
};
