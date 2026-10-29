import React, { useState } from 'react';
import { DAYS_OF_WEEK, MONTHS, SEASONS, OPDRACHT_10, ExerciseItem } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { Calendar, Volume2, CheckCircle2, XCircle, ArrowRight, HelpCircle } from 'lucide-react';

interface CalendarSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'days' | 'months_seasons' | 'opdracht10'>('opdracht10');

  // Days relative reference anchor: "Donderdag" (like Edit & Susy in the dialog)
  const [selectedAnchorDayIndex, setSelectedAnchorDayIndex] = useState<number>(3); // 3 = donderdag

  // Opdracht 10 states
  const [opdrachtAnswers, setOpdrachtAnswers] = useState<Record<number, string>>({});
  const [opdrachtChecked, setOpdrachtChecked] = useState<Record<number, boolean>>({});
  const [opdrachtResults, setOpdrachtResults] = useState<Record<number, boolean>>({});

  const handleSelectOpdrachtAnswer = (id: number, val: string) => {
    setOpdrachtAnswers(prev => ({ ...prev, [id]: val }));
    setOpdrachtChecked(prev => ({ ...prev, [id]: false }));
  };

  const checkAnswer = (item: ExerciseItem) => {
    const user = (opdrachtAnswers[item.id] || '').trim().toLowerCase();
    const correct = item.answer.toLowerCase();

    let isMatch = false;
    if (item.id === 1) {
      isMatch = user === 'op / om' || user === 'op, om' || user === 'op om';
    } else {
      isMatch = user === correct;
    }

    setOpdrachtChecked(prev => ({ ...prev, [item.id]: true }));
    setOpdrachtResults(prev => ({ ...prev, [item.id]: isMatch }));
    if (isMatch && onRecordExerciseCompletion) {
      onRecordExerciseCompletion(`opdracht10_${item.id}`);
    }
  };

  const correctOpdrachtCount = Object.values(opdrachtResults).filter(Boolean).length;

  const getRelativeDay = (offset: number) => {
    const idx = (selectedAnchorDayIndex + offset + 7) % 7;
    return DAYS_OF_WEEK[idx];
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>2.10 & 2.11 Tijd & Kalender</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Dagen, Maanden, Seizoenen & Preposities
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              Leer de tijdsaanduidingen en beheers de gouden voorzetselregels: <strong className="text-stone-800">OP</strong> voor dagen/data, <strong className="text-stone-800">OM</strong> voor kloktijden, en <strong className="text-stone-800">IN</strong> voor maanden/seizoenen/jaren.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('opdracht10')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'opdracht10'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 10 (op / om / in)
            </button>
            <button
              onClick={() => setActiveTab('days')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'days'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Dagen van de week (2.10)
            </button>
            <button
              onClick={() => setActiveTab('months_seasons')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'months_seasons'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Maanden & Seizoenen (2.11)
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Opdracht 10 (Prepositions op, om, in) */}
      {activeTab === 'opdracht10' && (
        <div className="space-y-6">
          {/* Rules Reminder Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                1. OP
              </span>
              <h4 className="text-sm font-bold text-emerald-950 mt-1">Dagen & Data</h4>
              <p className="text-xs text-emerald-800/80 mt-1">
                • <strong>op</strong> maandag<br />
                • <strong>op</strong> 12 augustus<br />
                • <strong>op</strong> welke datum
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
              <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                2. OM
              </span>
              <h4 className="text-sm font-bold text-amber-950 mt-1">Kloktijd</h4>
              <p className="text-xs text-amber-800/80 mt-1">
                • <strong>om</strong> 9.00 uur<br />
                • <strong>om</strong> kwart voor tien<br />
                • <strong>om</strong> half elf
              </p>
            </div>

            <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl">
              <span className="text-xs font-black text-sky-800 uppercase tracking-wider">
                3. IN
              </span>
              <h4 className="text-sm font-bold text-sky-950 mt-1">Maand, Seizoen & Jaar</h4>
              <p className="text-xs text-sky-800/80 mt-1">
                • <strong>in</strong> januari<br />
                • <strong>in</strong> de zomer<br />
                • <strong>in</strong> 2017
              </p>
            </div>
          </div>

          {/* Opdracht 10 Exercise List */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Opdracht 10: Een prepositie invullen (op, om of in)
                </h3>
                <p className="text-xs text-stone-500">
                  Kies de juiste prepositie voor elke zin uit het boek.
                </p>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-amber-600">
                  {correctOpdrachtCount} / {OPDRACHT_10.length}
                </span>
                <p className="text-[10px] text-stone-400 font-semibold uppercase">juist</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {OPDRACHT_10.map((item) => {
                const isChecked = opdrachtChecked[item.id];
                const isCorrect = opdrachtResults[item.id];
                const selectedVal = opdrachtAnswers[item.id];

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/70 border-emerald-300'
                          : 'bg-rose-50/70 border-rose-300'
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {item.id}
                        </span>
                        <div>
                          <p className="font-semibold text-stone-900 text-sm sm:text-base">
                            {item.prompt}
                          </p>
                          <p className="text-xs text-stone-500 italic mt-0.5">
                            {item.subPrompt}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => speakDutch(item.prompt.replace(/\[.*?\]/g, '...').replace(/_+/g, '...'), audioSpeed)}
                        className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 shrink-0"
                        title="Beluister zin"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Multiple choice options */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {item.options?.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectOpdrachtAnswer(item.id, opt)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            selectedVal === opt
                              ? 'bg-stone-900 text-white shadow-2xs'
                              : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}

                      <button
                        disabled={!selectedVal}
                        onClick={() => checkAnswer(item)}
                        className="ml-auto px-4 py-1.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-xl shadow-2xs transition-all cursor-pointer"
                      >
                        Controleer
                      </button>
                    </div>

                    {isChecked && (
                      <div className="mt-2.5 pt-2 border-t border-stone-200/60 text-xs">
                        {isCorrect ? (
                          <p className="text-emerald-800 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Uitstekend! {item.explanation}
                          </p>
                        ) : (
                          <p className="text-rose-800 font-semibold">
                            Helaas niet juist. {item.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Days of the week (2.10) */}
      {activeTab === 'days' && (
        <div className="space-y-6">
          {/* Days Timeline */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              De dagen van de week
            </h3>
            <p className="text-xs text-stone-500">
              Klik op een dag om de uitspraak te horen.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {DAYS_OF_WEEK.map((day, idx) => (
                <button
                  key={day.dutch}
                  onClick={() => {
                    setSelectedAnchorDayIndex(idx);
                    speakDutch(day.dutch, audioSpeed);
                  }}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedAnchorDayIndex === idx
                      ? 'bg-amber-100 border-amber-400 ring-2 ring-amber-300/50 shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200'
                  }`}
                >
                  <p className="text-xs font-bold text-stone-900 capitalize">{day.dutch}</p>
                  <p className="text-[11px] text-stone-500">{day.english}</p>
                </button>
              ))}
            </div>

            {/* Relative day calculator based on textbook (Page 40) */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                Relatieve tijdsaanduidingen (t.o.v. vandaag = {DAYS_OF_WEEK[selectedAnchorDayIndex].dutch})
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <p className="text-stone-400 font-bold uppercase text-[10px]">Eergisteren was het</p>
                  <p className="font-extrabold text-stone-800 capitalize mt-1">
                    {getRelativeDay(-2).dutch}
                  </p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <p className="text-stone-400 font-bold uppercase text-[10px]">Gisteren was het</p>
                  <p className="font-extrabold text-stone-800 capitalize mt-1">
                    {getRelativeDay(-1).dutch}
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border-2 border-amber-300">
                  <p className="text-amber-700 font-extrabold uppercase text-[10px]">→ Vandaag is het</p>
                  <p className="font-black text-amber-950 capitalize mt-1 text-sm">
                    {getRelativeDay(0).dutch}
                  </p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <p className="text-stone-400 font-bold uppercase text-[10px]">Morgen is het</p>
                  <p className="font-extrabold text-stone-800 capitalize mt-1">
                    {getRelativeDay(1).dutch}
                  </p>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <p className="text-stone-400 font-bold uppercase text-[10px]">Overmorgen is het</p>
                  <p className="font-extrabold text-stone-800 capitalize mt-1">
                    {getRelativeDay(2).dutch}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Months & Seasons (2.11) */}
      {activeTab === 'months_seasons' && (
        <div className="space-y-6">
          {/* Seasons */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              De 4 Seizoenen (Seasons)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SEASONS.map((season) => (
                <div
                  key={season.dutch}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{season.dutch}</h4>
                    <p className="text-xs text-stone-500 italic">{season.english}</p>
                    <p className="text-[11px] text-amber-700 font-semibold mt-1">
                      in {season.dutch}
                    </p>
                  </div>
                  <button
                    onClick={() => speakDutch(season.dutch, audioSpeed)}
                    className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-600 border border-stone-200 shadow-2xs"
                    title="Beluister"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Months */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              De 12 Maanden (Months)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {MONTHS.map((month, idx) => (
                <div
                  key={month.dutch}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-stone-400">
                      Maand {idx + 1}
                    </span>
                    <h4 className="font-bold text-stone-900 text-sm capitalize">{month.dutch}</h4>
                    <p className="text-xs text-stone-500">{month.english}</p>
                  </div>
                  <button
                    onClick={() => speakDutch(month.dutch, audioSpeed)}
                    className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200"
                    title="Beluister maand"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
