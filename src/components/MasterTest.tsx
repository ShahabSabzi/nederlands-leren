import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, CheckSquare, Sparkles } from 'lucide-react';
import { speakDutch } from '../utils/speech';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const TEST_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Woordenschat & Dialoog',
    question: 'Wat bedoelt Edit met "Morgen ben ik jarig"?',
    options: ['Morgen ga ik op reis.', 'Morgen vier ik mijn verjaardag.', 'Morgen heb ik een cursus.', 'Morgen is het weekend.'],
    correctAnswer: 'Morgen vier ik mijn verjaardag.',
    explanation: '"Jarig zijn" betekent dat het je verjaardag is.'
  },
  {
    id: 2,
    category: 'De Klok',
    question: 'Hoe laat is het als het 11:30 is in het Nederlands?',
    options: ['Het is half elf.', 'Het is half twaalf.', 'Het is dertig over elf.', 'Het is twaalf uur.'],
    correctAnswer: 'Het is half twaalf.',
    explanation: 'Het Nederlands telt vóóruit naar het komende hele uur: 11:30 is "half twaalf".'
  },
  {
    id: 3,
    category: 'De Klok',
    question: 'Hoe zeg je 11:20 in het Nederlands?',
    options: ['Het is tien voor half twaalf.', 'Het is twintig voor twaalf.', 'Het is tien over half elf.', 'Het is kwart over elf.'],
    correctAnswer: 'Het is tien voor half twaalf.',
    explanation: 'Rond het halve uur telt het Nederlands t.o.v. half twaalf: 10 minuten vóór half twaalf.'
  },
  {
    id: 4,
    category: 'Vraagwoorden',
    question: 'Welk vraagwoord past in: "_______ woont Astrid? — In de Brugstraat."',
    options: ['Wie', 'Waar', 'Wat', 'Hoeveel'],
    correctAnswer: 'Waar',
    explanation: '"Waar" vraagt naar een locatie of plaats.'
  },
  {
    id: 5,
    category: 'Vraagwoorden',
    question: 'Welk vraagwoord past in: "_______ heet jouw zus? — Sandra."',
    options: ['Wie', 'Hoe', 'Wat', 'Welke'],
    correctAnswer: 'Hoe',
    explanation: 'Bij namen vragen we altijd: "Hoe heet...?".'
  },
  {
    id: 6,
    category: 'Possessief Pronomen',
    question: 'Vul in: "Wij wonen in Zwolle. _______ adres is Rozenstraat 8."',
    options: ['Ons', 'Onze', 'Hun', 'Mijn'],
    correctAnswer: 'Ons',
    explanation: '"Het adres" is een HET-woord. Bij "wij" gebruiken we daarom "ons", niet "onze".'
  },
  {
    id: 7,
    category: 'Possessief Pronomen',
    question: 'Vul in: "Wij komen uit Polen en _______ cursus begint maandag."',
    options: ['ons', 'onze', 'hun', 'jullie'],
    correctAnswer: 'onze',
    explanation: '"Cursus" is een DE-woord (de cursus), dus gebruiken we "onze".'
  },
  {
    id: 8,
    category: 'Preposities van Tijd',
    question: 'Welke preposities passen in: "De cursus begint _______ maandag 8 april _______ 9.00 uur."',
    options: ['op / om', 'in / om', 'om / op', 'in / in'],
    correctAnswer: 'op / om',
    explanation: 'Dagen en data krijgen "op", exacte kloktijden krijgen "om".'
  },
  {
    id: 9,
    category: 'Preposities van Tijd',
    question: 'Vul in: "Ik ben _______ de zomer jarig."',
    options: ['op', 'om', 'in', 'aan'],
    correctAnswer: 'in',
    explanation: 'Voor seizoenen en maanden gebruiken we altijd "in".'
  },
  {
    id: 10,
    category: 'Grammatica (V2-Regel)',
    question: 'Welke zin heeft de JUISTE woordvolgorde met inversie?',
    options: [
      'Morgen ik ben jarig.',
      'Morgen ben ik jarig.',
      'Morgen jarig ben ik.',
      'Ik morgen ben jarig.'
    ],
    correctAnswer: 'Morgen ben ik jarig.',
    explanation: 'Als een tijdsbepaling ("Morgen") op positie 1 staat, moet het werkwoord ("ben") op positie 2 staan, vóór het onderwerp ("ik").'
  },
  {
    id: 11,
    category: 'Familierelaties',
    question: 'Wat is het verschil tussen "het gezin" en "de familie"?',
    options: [
      '"Het gezin" is hetzelfde als "de familie".',
      '"Het gezin" zijn ouders met kinderen; "de familie" omvat ook grootouders, ooms en tantes.',
      '"Het gezin" is alleen voor getrouwde mensen.',
      '"De familie" betekent alleen broers en zussen.'
    ],
    correctAnswer: '"Het gezin" zijn ouders met kinderen; "de familie" omvat ook grootouders, ooms en tantes.',
    explanation: '"Het gezin" is de directe leefeenheid (nuclear family), terwijl "de familie" alle verwanten betreft.'
  },
  {
    id: 12,
    category: 'Uitspraak',
    question: 'Waarom klinkt de "a" in "dagen" en "vader" lang [aa]?',
    options: [
      'Omdat het een gesloten lettergreep is.',
      'Omdat de lettergreep open is (eindigt op een klinker: da-gen, va-der).',
      'Omdat er een medeklinker volgt.',
      'Het is een toeval.'
    ],
    correctAnswer: 'Omdat de lettergreep open is (eindigt op een klinker: da-gen, va-der).',
    explanation: 'In een open lettergreep klinkt een enkele "a" altijd lang [a:].'
  }
];

interface MasterTestProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const MasterTest: React.FC<MasterTestProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Self assessment checks from page 45
  const [reflectionChecks, setReflectionChecks] = useState<Record<number, boolean>>({});

  const handleSelectAnswer = (qId: number, option: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    TEST_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (onRecordExerciseCompletion) {
      onRecordExerciseCompletion('master_test_completed');
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const toggleCheck = (id: number) => {
    setReflectionChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const score = calculateScore();
  const percentage = Math.round((score / TEST_QUESTIONS.length) * 100);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Eindtoets & Zelfreflectie</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Meester-Examen Hoofdstuk 2
        </h2>
        <p className="text-stone-300 text-sm max-w-2xl">
          Test je complete kennis van Hoofdstuk 2: woordenschat van de kantine, het Nederlandse kloksysteem, vraagwoorden, bezittelijke voornaamwoorden, preposities en uitspraakregels.
        </p>

        {isSubmitted && (
          <div className="mt-4 pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-stone-950 font-black text-2xl flex items-center justify-center shadow-md">
                {score}/{TEST_QUESTIONS.length}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {percentage >= 80 ? '🎉 Gefeliciteerd! Uitstekend gedaan!' : '👍 Goed geprobeerd! Bekijk de feedback hieronder.'}
                </h3>
                <p className="text-xs text-stone-400">
                  Je hebt {percentage}% van de vragen juist beantwoord.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Opnieuw proberen</span>
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {TEST_QUESTIONS.map((q, idx) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-3xl border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-50/70 border-emerald-300'
                    : 'bg-rose-50/70 border-rose-300'
                  : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    {q.category} · Vraag {idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 mt-1.5">
                    {q.question}
                  </h4>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                {q.options.map((opt) => {
                  const isSelected = userAnswer === opt;
                  const isThisCorrect = opt === q.correctAnswer;

                  let style = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                  if (isSubmitted) {
                    if (isThisCorrect) {
                      style = 'bg-emerald-100/80 text-emerald-950 border-emerald-400 font-bold';
                    } else if (isSelected && !isThisCorrect) {
                      style = 'bg-rose-100/80 text-rose-950 border-rose-400 line-through';
                    }
                  } else if (isSelected) {
                    style = 'bg-stone-900 text-white font-bold border-stone-900 shadow-xs';
                  }

                  return (
                    <button
                      key={opt}
                      disabled={isSubmitted}
                      onClick={() => handleSelectAnswer(q.id, opt)}
                      className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {isSubmitted && (
                <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs">
                  <p className="font-bold text-stone-900">Uitleg:</p>
                  <p className="text-stone-600 mt-0.5">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit button */}
      {!isSubmitted && (
        <div className="p-4 bg-white rounded-3xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500 font-medium">
            Beantwoord: {Object.keys(selectedAnswers).length} van de {TEST_QUESTIONS.length} vragen
          </p>
          <button
            disabled={Object.keys(selectedAnswers).length === 0}
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-extrabold text-sm rounded-xl transition-all shadow-xs cursor-pointer"
          >
            Lever examen in & Bekijk resultaten
          </button>
        </div>
      )}

      {/* Page 45 Reflectie Checklist */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-wider">
          <CheckSquare className="w-4 h-4 text-amber-600" />
          <span>Reflectie (Pagina 45 uit het boek)</span>
        </div>
        <h3 className="text-xl font-bold text-stone-900">
          Kun je dit nu allemaal zelfstandig?
        </h3>
        <p className="text-xs text-stone-500">
          Vink af wat je na deze les beheerst:
        </p>

        <div className="space-y-2.5 pt-2">
          {[
            { id: 1, text: '1. Kun je de dialoog aan het begin van dit hoofdstuk nu begrijpen?' },
            { id: 2, text: '2. Kun je een persoon beschrijven (haar, lengte, bril)?' },
            { id: 3, text: '3. Kun je over jouw familie vertellen (gezin vs familie)?' },
            { id: 4, text: '4. Kun je vragen en zeggen hoe laat het is (half twaalf, tien voor half)?' },
            { id: 5, text: '5. Kun je de dagen van de week noemen (vandaag, morgen, eergisteren)?' },
            { id: 6, text: '6. Kun je de maanden en seizoenen van het jaar noemen?' },
          ].map((item) => (
            <label
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer select-none ${
                reflectionChecks[item.id]
                  ? 'bg-amber-50/70 border-amber-300'
                  : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
              }`}
            >
              <input
                type="checkbox"
                checked={!!reflectionChecks[item.id]}
                onChange={() => {}}
                className="w-4 h-4 accent-amber-600 rounded"
              />
              <span className={`text-xs sm:text-sm font-medium ${
                reflectionChecks[item.id] ? 'text-amber-950 font-bold' : 'text-stone-800'
              }`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
