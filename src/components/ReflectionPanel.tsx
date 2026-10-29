import React, { useEffect, useState } from 'react';
import { CheckCircle2, Globe2, Lightbulb, NotebookPen, Circle } from 'lucide-react';
import { ReflectionData } from '../types/lesson';

interface ReflectionPanelProps {
  /** Unique key for saving notes and checkmarks on this device. */
  lessonKey: string;
  reflection: ReflectionData;
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage blocked or full. The page still works for this session.
  }
}

export const ReflectionPanel: React.FC<ReflectionPanelProps> = ({ lessonKey, reflection }) => {
  const notesKey = `nederlands-leren:notes:${lessonKey}`;
  const checksKey = `nederlands-leren:reflection:${lessonKey}`;

  const [notes, setNotes] = useState<string>(() => readJson<string>(notesKey, ''));
  const [checked, setChecked] = useState<Record<number, boolean>>(() => readJson<Record<number, boolean>>(checksKey, {}));

  useEffect(() => {
    setNotes(readJson<string>(notesKey, ''));
    setChecked(readJson<Record<number, boolean>>(checksKey, {}));
  }, [notesKey, checksKey]);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = { ...prev, [index]: !prev[index] };
      writeJson(checksKey, next);
      return next;
    });
  };

  const saveNotes = (value: string) => {
    setNotes(value);
    writeJson(notesKey, value);
  };

  const doneCount = reflection.reflectionQuestions.filter((_, i) => checked[i]).length;

  return (
    <div className="space-y-6">
      {reflection.culture && (
        <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-black text-stone-900">
            <Globe2 className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <h3>Cultuur</h3>
          </div>
          <p className="text-sm leading-relaxed text-stone-700">{reflection.culture}</p>
        </section>
      )}

      {reflection.practice && (
        <section className="rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2 text-sm font-black text-amber-950">
            <Lightbulb className="h-4 w-4 text-amber-700" aria-hidden="true" />
            <h3>In de praktijk</h3>
          </div>
          <p className="text-sm leading-relaxed text-amber-950">{reflection.practice}</p>
        </section>
      )}

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-black text-stone-900">
          <NotebookPen className="h-4 w-4 text-amber-600" aria-hidden="true" />
          <h3>Eigen vocabulaire</h3>
        </div>
        <p className="mb-3 text-xs text-stone-500">Schrijf woorden op die je erbij wilt leren. Je notities blijven op dit apparaat bewaard.</p>
        <textarea
          value={notes}
          onChange={(e) => saveNotes(e.target.value)}
          rows={5}
          aria-label="Eigen vocabulaire"
          placeholder="Bijvoorbeeld: de markt = the market"
          className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
        />
      </section>

      <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-black text-stone-900">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <h3>Reflectie</h3>
          </div>
          <span className="text-xs font-bold text-stone-500">
            {doneCount} van {reflection.reflectionQuestions.length} beantwoord
          </span>
        </div>
        <ul className="space-y-2">
          {reflection.reflectionQuestions.map((question, index) => {
            const isDone = !!checked[index];
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-pressed={isDone}
                  className={`flex w-full cursor-pointer items-start gap-3 rounded-2xl border p-3 text-left text-sm transition-colors ${
                    isDone ? 'border-emerald-300 bg-emerald-50 text-emerald-950' : 'border-stone-200 bg-stone-50 text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" aria-hidden="true" />
                  )}
                  <span>{question}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
