import React, { useState } from 'react';
import { POSSESSIVE_PRONOUNS, OPDRACHT_4, ExerciseItem } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { CheckCircle2, Volume2, HelpCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface PossessivesSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const PossessivesSection: React.FC<PossessivesSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'opdracht4' | 'chart'>('opdracht4');

  // Opdracht 4 states
  const [opdrachtAnswers, setOpdrachtAnswers] = useState<Record<number, string>>({});
  const [opdrachtChecked, setOpdrachtChecked] = useState<Record<number, boolean>>({});
  const [opdrachtResults, setOpdrachtResults] = useState<Record<number, boolean>>({});

  const handleSelectAnswer = (id: number, val: string) => {
    setOpdrachtAnswers(prev => ({ ...prev, [id]: val }));
    setOpdrachtChecked(prev => ({ ...prev, [id]: false }));
  };

  const checkAnswer = (item: ExerciseItem) => {
    const userVal = (opdrachtAnswers[item.id] || '').trim().toLowerCase();
    const isCorrect = item.acceptableAnswers?.some(acc => acc.toLowerCase() === userVal) || false;

    setOpdrachtChecked(prev => ({ ...prev, [item.id]: true }));
    setOpdrachtResults(prev => ({ ...prev, [item.id]: isCorrect }));
    if (isCorrect && onRecordExerciseCompletion) {
      onRecordExerciseCompletion(`opdracht4_${item.id}`);
    }
  };

  const correctCount = Object.values(opdrachtResults).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>2.8 Possessief Pronomen</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Bezittelijk Voornaamwoord (Mijn, Jouw, Ons / Onze...)
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              Beheers het bezit in het Nederlands. Let speciaal op: <strong className="text-stone-800">ons</strong> voor het-woorden (ons adres, ons kind) en <strong className="text-stone-800">onze</strong> voor de-woorden en meervoud (onze cursus, onze boeken)!
            </p>
          </div>

          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('opdracht4')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'opdracht4'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 4 Oefenen
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'chart'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Grammatica Schema (2.8)
            </button>
          </div>
        </div>
      </div>

      {/* Special Notice Banner: Ons vs Onze */}
      <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-950 space-y-1">
          <p className="font-bold">
            Belangrijke valkuil voor anderstaligen: "Ons" of "Onze"?
          </p>
          <p className="text-amber-900/90 leading-relaxed">
            Als het onderwerp <em>wij / we</em> is, kijk je naar het zelfstandig naamwoord dat erachter staat:
            <br />
            • Bij een <strong>HET-woord</strong> gebruik je <strong>ons</strong>: <em>ons huis, ons adres, ons kind, ons gezin</em>.
            <br />
            • Bij een <strong>DE-woord of MEERVOUD</strong> gebruik je <strong>onze</strong>: <em>onze les, onze cursus, onze familie, onze kinderen</em>.
          </p>
        </div>
      </div>

      {/* Tab 1: Opdracht 4 */}
      {activeTab === 'opdracht4' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Opdracht 4: Vul een possessief pronomen in
              </h3>
              <p className="text-xs text-stone-500">
                Kies het juiste bezittelijk voornaamwoord voor elke zin uit het boek.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-amber-600">
                {correctCount} / {OPDRACHT_4.length}
              </span>
              <p className="text-[10px] text-stone-400 font-semibold uppercase">juist</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {OPDRACHT_4.map((item) => {
              const isChecked = opdrachtChecked[item.id];
              const isCorrect = opdrachtResults[item.id];
              const selectedVal = opdrachtAnswers[item.id];

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
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {item.id}
                        </span>
                        <div>
                          <p className="font-bold text-stone-900 text-sm">
                            {item.prompt}
                          </p>
                          <p className="text-[11px] text-stone-500 italic mt-0.5">
                            {item.subPrompt}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const full = item.prompt.replace(/_+/g, item.answer);
                          speakDutch(full, audioSpeed);
                        }}
                        className="p-1 text-stone-400 hover:text-stone-700 rounded shrink-0"
                        title="Beluister zin"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="mt-3 pt-2 border-t border-stone-200/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.options?.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectAnswer(item.id, opt)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            selectedVal?.toLowerCase() === opt.toLowerCase()
                              ? 'bg-stone-900 text-white shadow-xs'
                              : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                      <button
                        disabled={!selectedVal}
                        onClick={() => checkAnswer(item)}
                        className="ml-auto px-3 py-1 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-lg transition-all cursor-pointer"
                      >
                        Controleer
                      </button>
                    </div>

                    {isChecked && (
                      <div className="mt-2 text-xs">
                        {isCorrect ? (
                          <p className="text-emerald-800 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Prima!
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
      )}

      {/* Tab 2: Chart Schema */}
      {activeTab === 'chart' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-stone-900">
            Overzichtstabel Possessief Pronomen (Boek pagina 38)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
              <thead className="bg-stone-100 text-stone-800 font-bold">
                <tr>
                  <th className="p-3 border-b border-stone-200">Subject (Onderwerp)</th>
                  <th className="p-3 border-b border-stone-200 bg-amber-100/70 text-amber-950">Possessief Pronomen</th>
                  <th className="p-3 border-b border-stone-200">Voorbeeld uit de les</th>
                  <th className="p-3 border-b border-stone-200">Uitleg</th>
                  <th className="p-3 border-b border-stone-200">Luister</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-medium">
                {POSSESSIVE_PRONOUNS.map((row) => (
                  <tr key={row.subject} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-bold text-stone-900">{row.subject}</td>
                    <td className="p-3 font-extrabold text-amber-900 bg-amber-50/40 text-sm">
                      {row.possessive}
                    </td>
                    <td className="p-3 text-stone-800 font-medium">{row.example}</td>
                    <td className="p-3 text-stone-500">{row.note}</td>
                    <td className="p-3">
                      <button
                        onClick={() => speakDutch(row.example, audioSpeed)}
                        className="p-1 rounded text-stone-400 hover:text-stone-900 hover:bg-stone-200"
                        title="Beluister voorbeeld"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
