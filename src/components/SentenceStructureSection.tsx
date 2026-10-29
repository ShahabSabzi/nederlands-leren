import React, { useState } from 'react';
import { OPDRACHT_3, QUESTION_WORDS, ExerciseItem } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { SpellCheck, Volume2, CheckCircle2, RotateCcw, ArrowRight, HelpCircle, Shuffle } from 'lucide-react';

interface SentenceStructureSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const SentenceStructureSection: React.FC<SentenceStructureSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'opdracht3' | 'v2_rule' | 'questions_overview'>('opdracht3');

  // Opdracht 3 state
  const [opdrachtAnswers, setOpdrachtAnswers] = useState<Record<number, string>>({});
  const [opdrachtChecked, setOpdrachtChecked] = useState<Record<number, boolean>>({});
  const [opdrachtResults, setOpdrachtResults] = useState<Record<number, boolean>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  // V2 Interactive Sentence Builder state
  const [sentenceOrder, setSentenceOrder] = useState<string[]>(['Ik', 'woon', 'nu', 'in Utrecht']);
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  const toggleSentenceInversion = () => {
    if (!isSwapped) {
      // Invert: Nu (time) in pos 1 -> woon (verb) pos 2 -> ik (subject) pos 3 -> in Utrecht pos 4
      setSentenceOrder(['Nu', 'woon', 'ik', 'in Utrecht']);
      setIsSwapped(true);
    } else {
      setSentenceOrder(['Ik', 'woon', 'nu', 'in Utrecht']);
      setIsSwapped(false);
    }
  };

  const handleSelectOpdrachtAnswer = (id: number, val: string) => {
    setOpdrachtAnswers(prev => ({ ...prev, [id]: val }));
    setOpdrachtChecked(prev => ({ ...prev, [id]: false }));
  };

  const checkOpdrachtAnswer = (item: ExerciseItem) => {
    const user = (opdrachtAnswers[item.id] || '').trim().toLowerCase();
    const isCorrect = item.acceptableAnswers?.some(acc => acc.toLowerCase() === user) || false;

    setOpdrachtChecked(prev => ({ ...prev, [item.id]: true }));
    setOpdrachtResults(prev => ({ ...prev, [item.id]: isCorrect }));
    if (isCorrect && onRecordExerciseCompletion) {
      onRecordExerciseCompletion(`opdracht3_${item.id}`);
    }
  };

  const correctCount = Object.values(opdrachtResults).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <SpellCheck className="w-4 h-4" />
              <span>2.5, 2.6 & 2.7 Grammatica & Zinsbouw</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Hoofdzin, V2-Regel & Vraagwoorden
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              In het Nederlands staat de persoonsvorm (finite verb) in een gewone zin <strong className="text-stone-800">altijd op positie 2</strong>. In ja/nee-vragen staat het werkwoord vooraan (positie 1).
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('opdracht3')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'opdracht3'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 3 (Vraagwoorden)
            </button>
            <button
              onClick={() => setActiveTab('v2_rule')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'v2_rule'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              V2-Regel & Inversie (2.5)
            </button>
            <button
              onClick={() => setActiveTab('questions_overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'questions_overview'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Vraagwoorden Gids (2.7)
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Opdracht 3 (Vraagwoordvragen) */}
      {activeTab === 'opdracht3' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Opdracht 3: Vul een vraagwoord in. Kijk naar het antwoord!
                </h3>
                <p className="text-xs text-stone-500">
                  Kies het juiste vraagwoord (Wie, Wat, Waar, Waarom, Hoe, Hoeveel, Welke, ...).
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-amber-600">
                  {correctCount} / {OPDRACHT_3.length}
                </span>
                <p className="text-[10px] text-stone-400 font-semibold uppercase">juist</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {OPDRACHT_3.map((item) => {
                const isChecked = opdrachtChecked[item.id];
                const isCorrect = opdrachtResults[item.id];
                const selectedVal = opdrachtAnswers[item.id] || '';
                const showExp = showExplanation[item.id];

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/70 border-emerald-300'
                          : 'bg-rose-50/70 border-rose-300'
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 text-[11px] font-bold flex items-center justify-center shrink-0">
                            {item.id}
                          </span>
                          <p className="font-bold text-stone-900 text-sm">
                            {item.prompt}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            const fullQuestion = item.prompt.replace(/_+/g, item.answer);
                            speakDutch(fullQuestion, audioSpeed);
                          }}
                          className="p-1 text-stone-400 hover:text-stone-700 rounded"
                          title="Beluister vraag"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Sub prompt showing the answer context */}
                      <p className="text-xs text-amber-900 bg-amber-50/80 border border-amber-200/60 rounded-lg px-2.5 py-1.5 mt-2 font-medium">
                        💬 {item.subPrompt}
                      </p>
                    </div>

                    {/* Options / Answer selection */}
                    <div className="mt-3 pt-2 border-t border-stone-200/60">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.options?.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectOpdrachtAnswer(item.id, opt)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                              selectedVal.toLowerCase() === opt.toLowerCase()
                                ? 'bg-stone-900 text-white shadow-xs'
                                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                        <button
                          disabled={!selectedVal}
                          onClick={() => checkOpdrachtAnswer(item)}
                          className="ml-auto px-3 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-lg transition-all cursor-pointer"
                        >
                          Controleer
                        </button>
                      </div>

                      {isChecked && (
                        <div className="mt-2 text-xs">
                          {isCorrect ? (
                            <p className="text-emerald-800 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Juist!
                            </p>
                          ) : (
                            <p className="text-rose-800 font-semibold">
                              Niet juist. Het juiste woord is: <strong>{item.answer}</strong>.
                            </p>
                          )}
                          <p className="text-stone-600 text-[11px] mt-0.5">{item.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: V2 Rule & Inversion (2.5) */}
      {activeTab === 'v2_rule' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                De Gouden Regel van de Nederlandse Hoofdzin: V2
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-2xl">
                In elke Nederlandse gewone hoofdzin staat de persoonsvorm (het vervoegde werkwoord) op de <strong className="text-stone-800">tweede positie</strong>! Als je begint met tijd ("Morgen", "Nu", "Vandaag"), vindt er <strong className="text-stone-800">inversie</strong> plaats (het onderwerp komt direct achter het werkwoord).
              </p>
            </div>

            {/* Interactive Sentence Demonstration */}
            <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  Interactieve demonstrator
                </span>
                <button
                  onClick={toggleSentenceInversion}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Wissel beginwoord (Inversie testen)</span>
                </button>
              </div>

              {/* The 4 Positions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {sentenceOrder.map((word, idx) => {
                  const isVerb = word.toLowerCase() === 'woon';
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border transition-all ${
                        isVerb
                          ? 'bg-amber-500 text-stone-950 border-amber-600 font-extrabold ring-4 ring-amber-300/40 shadow-sm'
                          : 'bg-white text-stone-900 border-stone-300 font-bold'
                      }`}
                    >
                      <span className={`text-[10px] font-bold block uppercase tracking-wider ${isVerb ? 'text-amber-950' : 'text-stone-400'}`}>
                        Positie {idx + 1} {isVerb && '(WERKWOORD)'}
                      </span>
                      <span className="text-xl mt-1 block font-mono">
                        {word}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs text-amber-950 pt-2 border-t border-amber-200">
                <p>
                  <strong>Resultaat:</strong> "{sentenceOrder.join(' ')}."
                </p>
                <button
                  onClick={() => speakDutch(sentenceOrder.join(' '), audioSpeed)}
                  className="flex items-center gap-1 text-amber-900 font-bold hover:underline cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Beluister zin
                </button>
              </div>
            </div>

            {/* Inversion Comparison Table from Book */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-bold">
                  <tr>
                    <th className="p-3 border-b border-stone-200">Positie 1</th>
                    <th className="p-3 border-b border-stone-200 bg-amber-100/60 text-amber-900">Positie 2 (Werkwoord)</th>
                    <th className="p-3 border-b border-stone-200">Positie 3</th>
                    <th className="p-3 border-b border-stone-200">Rest</th>
                    <th className="p-3 border-b border-stone-200">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-medium">
                  <tr>
                    <td className="p-3 font-bold text-stone-900">Ik</td>
                    <td className="p-3 font-bold text-amber-900 bg-amber-50/40">kom</td>
                    <td className="p-3 text-stone-600">-</td>
                    <td className="p-3 text-stone-600">uit Engeland.</td>
                    <td className="p-3 text-stone-500">Standaard (O-W-R)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-stone-900">Ik</td>
                    <td className="p-3 font-bold text-amber-900 bg-amber-50/40">woon</td>
                    <td className="p-3 text-stone-600">nu</td>
                    <td className="p-3 text-stone-600">in Utrecht.</td>
                    <td className="p-3 text-stone-500">Standaard (O-W-T-P)</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="p-3 font-bold text-stone-900">Morgen (Tijd)</td>
                    <td className="p-3 font-bold text-amber-900 bg-amber-50/60">ben</td>
                    <td className="p-3 font-bold text-indigo-700">ik (Onderwerp)</td>
                    <td className="p-3 text-stone-600">jarig.</td>
                    <td className="p-3 text-amber-800 font-semibold">Inversie!</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="p-3 font-bold text-stone-900">Nu (Tijd)</td>
                    <td className="p-3 font-bold text-amber-900 bg-amber-50/60">woon</td>
                    <td className="p-3 font-bold text-indigo-700">ik (Onderwerp)</td>
                    <td className="p-3 text-stone-600">in Utrecht.</td>
                    <td className="p-3 text-amber-800 font-semibold">Inversie!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Question Words Overview */}
      {activeTab === 'questions_overview' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              De Vraagwoorden in het Nederlands (2.7)
            </h3>
            <p className="text-xs text-stone-500">
              Overzicht van alle vraagwoorden met voorbeeldzinnen en luisterfragmenten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {QUESTION_WORDS.map((qw) => (
                <div
                  key={qw.word}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-stone-900">
                        {qw.word}
                      </span>
                      <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        {qw.meaning}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-medium mt-2">
                      Voorbeeld: "{qw.example}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-200/60 text-[11px] text-stone-500">
                    <span>💡 {qw.tip}</span>
                    <button
                      onClick={() => speakDutch(qw.example, audioSpeed)}
                      className="p-1 rounded text-stone-500 hover:text-stone-900 hover:bg-stone-200"
                      title="Beluister voorbeeldzin"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
