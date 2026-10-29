import React, { useState } from 'react';
import { CustomLessonData } from '../types/lesson';
import { speakDutch } from '../utils/speech';
import { isAnswerCorrect } from '../utils/answers';
import { Volume2, BookOpen, SpellCheck, CheckCircle2, Award, Sparkles, Eye, EyeOff, HelpCircle, Layers, Check, X, RotateCcw, AlertCircle } from 'lucide-react';

interface DynamicLessonViewerProps {
  lesson: CustomLessonData;
  audioSpeed: number;
  onRecordExerciseCompletion?: (id: string) => void;
}

export const DynamicLessonViewer: React.FC<DynamicLessonViewerProps> = ({
  lesson,
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'dialogue' | 'vocab' | 'grammar' | 'exercises' | 'clothes' | 'reading' | 'pronunciation' | 'exam'>('dialogue');
  const [showTranslations, setShowTranslations] = useState<boolean>(true);

  // Exam state
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  // Reading questions state
  const [readingAnswers, setReadingAnswers] = useState<Record<number, string>>({});
  const [readingChecked, setReadingChecked] = useState<Record<number, boolean>>({});

  // Clothing & Colour interactive trainer state
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string; isHetInflected: boolean }>({
    name: 'rood',
    hex: '#ef4444',
    isHetInflected: false
  });
  const [selectedPattern, setSelectedPattern] = useState<string>('effen');
  const [selectedGarment, setSelectedGarment] = useState<{ name: string; article: 'de' | 'het'; english: string; isPlural?: boolean }>({
    name: 'spijkerbroek',
    article: 'de',
    english: 'jeans'
  });

  // Exercise states
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [exerciseChecked, setExerciseChecked] = useState<Record<string, boolean>>({});
  const [exerciseResults, setExerciseResults] = useState<Record<string, boolean>>({});

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCheckExercise = (uniqueKey: string, correctAns: string, acceptable: string[] = []) => {
    const isMatch = isAnswerCorrect(exerciseAnswers[uniqueKey] || '', correctAns, acceptable);

    setExerciseChecked(prev => ({ ...prev, [uniqueKey]: true }));
    setExerciseResults(prev => ({ ...prev, [uniqueKey]: isMatch }));
    if (isMatch) {
      onRecordExerciseCompletion?.(`${lesson.id}_${uniqueKey}`);
    }
  };

  const currentFlashcard = lesson.vocabulary[flashcardIndex];

  // Calculate exam score if submitted
  const examQuestions = lesson.exam?.questions || [];
  const correctExamCount = examQuestions.filter(q =>
    isAnswerCorrect(examAnswers[q.id] || '', q.answer, q.acceptableAnswers || [])
  ).length;
  const examScorePercent = examQuestions.length > 0 ? Math.round((correctExamCount / examQuestions.length) * 100) : 0;
  const passingScore = lesson.exam?.passingScore || 70;
  const hasPassedExam = examScorePercent >= passingScore;

  return (
    <div className="space-y-6">
      {/* Lesson Banner */}
      <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="whitespace-nowrap text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                {lesson.chapterNumber}
              </span>
              <span className="text-xs text-stone-400">
                Nederlands in gang · Volledige lesstof
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lesson.chapterTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-2xl">
              {lesson.description}
            </p>
          </div>

        </div>

        {/* Sub Tabs */}
        <div className="flex items-center gap-2 pt-4 border-t border-stone-800 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('dialogue')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'dialogue'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            💬 Dialoog & Audio ({lesson.dialogue.length})
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'vocab'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            📚 Woorden ({lesson.vocabulary.length})
          </button>
          {lesson.grammarPoints && lesson.grammarPoints.length > 0 && (
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'grammar'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              📐 Grammatica ({lesson.grammarPoints.length})
            </button>
          )}
          {lesson.exercises && lesson.exercises.length > 0 && (
            <button
              onClick={() => setActiveTab('exercises')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'exercises'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              ✏️ Oefeningen ({lesson.exercises.reduce((sum, g) => sum + g.items.length, 0)})
            </button>
          )}
          {lesson.readingText && (
            <button
              onClick={() => setActiveTab('reading')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'reading'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              📖 Leesvaardigheid & Tekst
            </button>
          )}
          {lesson.pronunciation && (
            <button
              onClick={() => setActiveTab('pronunciation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'pronunciation'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              🗣️ Uitspraak
            </button>
          )}
          {lesson.exam && (
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              🏆 Eindtoets ({lesson.exam.questions.length})
            </button>
          )}
          {(lesson.id === 'hoofdstuk_7' || lesson.vocabulary.some(v => v.category === 'kleuren' || v.category === 'kleding')) && (
            <button
              onClick={() => setActiveTab('clothes')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'clothes'
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              👗 Kleuren & Kleding
            </button>
          )}
        </div>
      </div>

      {/* Tab 1: Dialogue */}
      {activeTab === 'dialogue' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs">
            <h3 className="text-sm font-bold text-stone-900">
              Tekst & Uitspraak
            </h3>
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
            >
              {showTranslations ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showTranslations ? 'Verberg Engels' : 'Toon Engels'}</span>
            </button>
          </div>

          <div className="space-y-3">
            {lesson.dialogue.map((line, idx) => (
              <div
                key={line.id || idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  {line.speaker && (
                    <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {line.speaker}
                    </span>
                  )}
                  <p className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {line.dutch}
                  </p>
                  {showTranslations && line.english && (
                    <p className="text-xs sm:text-sm text-stone-500 italic">
                      {line.english}
                    </p>
                  )}
                  {line.notes && (
                    <p className="text-xs text-stone-600 bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1 mt-1 inline-block">
                      💡 {line.notes}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => speakDutch(line.dutch, audioSpeed)}
                  className="p-2 rounded-xl bg-stone-50 hover:bg-amber-100 text-stone-700 hover:text-amber-950 border border-stone-200 transition-colors shrink-0 cursor-pointer"
                  title="Beluister uitspraak"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Vocabulary */}
      {activeTab === 'vocab' && (
        <div className="space-y-6">
          {/* Flashcard Trainer */}
          {lesson.vocabulary.length > 0 && currentFlashcard && (
            <div className="max-w-xl mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 px-2">
                <span>Flitskaart {flashcardIndex + 1} van {lesson.vocabulary.length}</span>
                <span className="text-amber-800 font-bold">Klik om om te draaien</span>
              </div>

              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[220px] bg-white rounded-3xl border-2 border-stone-200 hover:border-amber-400 p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-md relative select-none"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const phrase = currentFlashcard.article ? `${currentFlashcard.article} ${currentFlashcard.dutch}` : currentFlashcard.dutch;
                    speakDutch(phrase, audioSpeed);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                {!isFlipped ? (
                  <div className="space-y-2">
                    {currentFlashcard.article && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded uppercase bg-amber-100 text-amber-900">
                        {currentFlashcard.article}
                      </span>
                    )}
                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">
                      {currentFlashcard.dutch}
                    </h3>
                    <p className="text-xs text-stone-400 italic">
                      (Tik om vertaling te zien)
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-950">
                      {currentFlashcard.english}
                    </h3>
                    {currentFlashcard.exampleSentence && (
                      <p className="text-xs text-stone-600 bg-stone-50 p-2 rounded-xl border border-stone-200">
                        "{currentFlashcard.exampleSentence}"
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex(prev => (prev - 1 + lesson.vocabulary.length) % lesson.vocabulary.length);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs cursor-pointer"
                >
                  Vorige kaart
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex(prev => (prev + 1) % lesson.vocabulary.length);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs cursor-pointer"
                >
                  Volgende kaart
                </button>
              </div>
            </div>
          )}

          {/* Full List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lesson.vocabulary.map((w, idx) => (
              <div
                key={w.id || idx}
                className="bg-white p-4 rounded-2xl border border-stone-200 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    {w.article && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase bg-amber-100 text-amber-900">
                        {w.article}
                      </span>
                    )}
                    <h4 className="text-base font-bold text-stone-900">{w.dutch}</h4>
                  </div>
                  <p className="text-xs text-stone-600 font-medium mt-0.5">{w.english}</p>
                  {w.exampleSentence && (
                    <p className="text-[11px] text-stone-400 italic mt-1">
                      "{w.exampleSentence}"
                    </p>
                  )}
                </div>

                <button
                  onClick={() => {
                    const text = w.article ? `${w.article} ${w.dutch}` : w.dutch;
                    speakDutch(text, audioSpeed);
                  }}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Grammar */}
      {activeTab === 'grammar' && lesson.grammarPoints && (
        <div className="space-y-4">
          {lesson.grammarPoints.map((gp, idx) => (
            <div key={gp.id || idx} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
                Grammaticapunt {idx + 1}
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                {gp.title}
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                {gp.ruleExplanation || gp.summary}
              </p>

              {gp.examples && gp.examples.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Voorbeelden:
                  </h4>
                  {gp.examples.map((ex, exIdx) => (
                    <div key={exIdx} className="flex items-center justify-between p-3 rounded-xl bg-amber-50/50 border border-amber-200/70 text-xs">
                      <div>
                        <p className="font-bold text-stone-900">{ex.dutch}</p>
                        <p className="text-stone-500 italic mt-0.5">{ex.english}</p>
                        {ex.note && <p className="text-[11px] text-amber-800 mt-1">💡 {ex.note}</p>}
                      </div>
                      <button
                        onClick={() => speakDutch(ex.dutch, audioSpeed)}
                        className="p-1 rounded text-stone-400 hover:text-stone-900"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {gp.tables && gp.tables.length > 0 && (
                <div className="space-y-3 pt-2">
                  {gp.tables.map((table, tIdx) => (
                    <div key={tIdx} className="overflow-x-auto rounded-2xl border border-stone-200">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                          <tr>
                            {table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-2.5 px-3 whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 bg-white">
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-amber-50/40 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-2 px-3 text-stone-800">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Exercises */}
      {activeTab === 'exercises' && lesson.exercises && (
        <div className="space-y-6">
          {lesson.exercises.map((group, gIdx) => (
            <div key={group.id || gIdx} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
              <div>
                <h3 className="text-base font-bold text-stone-900">{group.title}</h3>
                <p className="text-xs text-stone-500 mt-0.5">{group.instruction}</p>
              </div>

              <div className="space-y-3 pt-2">
                {group.items.map((item) => {
                  const key = `${group.id}_${item.id}`;
                  const isChecked = exerciseChecked[key];
                  const isCorrect = exerciseResults[key];
                  const userVal = exerciseAnswers[key] || '';

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
                        <div className="space-y-1">
                          <p className="font-bold text-stone-900 text-sm">
                            {item.prompt}
                          </p>
                          {item.subPrompt && (
                            <p className="text-xs text-stone-500 italic">
                              {item.subPrompt}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => speakDutch(item.prompt.replace(/_+/g, item.answer), audioSpeed)}
                          className="p-1.5 rounded text-stone-400 hover:text-stone-800"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Options or text input */}
                      {item.options && item.options.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => {
                                setExerciseAnswers(prev => ({ ...prev, [key]: opt }));
                                setExerciseChecked(prev => ({ ...prev, [key]: false }));
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                userVal.toLowerCase() === opt.toLowerCase()
                                  ? 'bg-stone-900 text-white shadow-2xs'
                                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                          <button
                            disabled={!userVal}
                            onClick={() => handleCheckExercise(key, item.answer, item.acceptableAnswers)}
                            className="ml-auto px-4 py-1.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-xl shadow-2xs cursor-pointer"
                          >
                            Controleer
                          </button>
                        </div>
                      ) : (
                        <div className="mt-3 flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="Typ je antwoord..."
                            value={userVal}
                            onChange={(e) => {
                              const val = e.target.value;
                              setExerciseAnswers(prev => ({ ...prev, [key]: val }));
                              setExerciseChecked(prev => ({ ...prev, [key]: false }));
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleCheckExercise(key, item.answer, item.acceptableAnswers);
                            }}
                            className="flex-1 bg-white border border-stone-300 px-3 py-1.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                          />
                          <button
                            disabled={!userVal}
                            onClick={() => handleCheckExercise(key, item.answer, item.acceptableAnswers)}
                            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl cursor-pointer"
                          >
                            Controleer
                          </button>
                        </div>
                      )}

                      {isChecked && (
                        <div className="mt-2.5 pt-2 border-t border-stone-200/60 text-xs">
                          {isCorrect ? (
                            <p className="text-emerald-800 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Helemaal juist!
                            </p>
                          ) : (
                            <p className="text-rose-800 font-semibold">
                              Niet juist. Het juiste antwoord is: <strong>{item.answer}</strong>.
                            </p>
                          )}
                          {item.explanation && (
                            <p className="text-stone-600 text-[11px] mt-0.5">{item.explanation}</p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Clothes & Colours Interactive Trainer (Hoofdstuk 7) */}
      {activeTab === 'clothes' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
                7.3 & 7.4 Kleding & Kleuren Trainer
              </span>
              <h3 className="text-lg font-bold text-stone-900 mt-1">
                Interactieve Outfit & Adjectief Bouwer
              </h3>
              <p className="text-xs text-stone-500">
                Kies een kledingstuk, kleur en patroon. De app berekent automatisch de juiste Nederlandse adjectief-uitgang (-e of geen -e) en spreekt de zin uit!
              </p>
            </div>

            {/* Generated Outfit Phrase Card */}
            {(() => {
              const isHet = selectedGarment.article === 'het';
              const isPlural = selectedGarment.isPlural;
              
              // Adjective inflection logic
              let colorAdj = selectedColor.name;
              if (colorAdj === 'oranje' || colorAdj === 'roze') {
                // Invariable
              } else if (isHet) {
                // het-woord with 'een' gets NO -e!
                colorAdj = selectedColor.name;
              } else {
                // de-woord or plural gets -e (with Dutch vowel spelling: rood -> rode, geel -> gele, wit -> witte)
                if (colorAdj === 'rood') colorAdj = 'rode';
                else if (colorAdj === 'geel') colorAdj = 'gele';
                else if (colorAdj === 'wit') colorAdj = 'witte';
                else if (colorAdj === 'bruin') colorAdj = 'bruine';
                else if (colorAdj === 'grijs') colorAdj = 'grijze';
                else colorAdj = colorAdj + 'e';
              }

              let patternAdj = selectedPattern;
              if (selectedPattern !== 'effen') {
                if (isHet) {
                  patternAdj = selectedPattern;
                } else {
                  patternAdj = selectedPattern + 'e';
                }
              }

              const determiner = isPlural ? '' : 'een';
              const patternText = selectedPattern !== 'effen' ? `${patternAdj} ` : '';
              const fullDutchPhrase = isPlural 
                ? `${colorAdj} ${patternText}${selectedGarment.name}`.trim()
                : `${determiner} ${patternText}${colorAdj} ${selectedGarment.name}`.trim();

              return (
                <div className="p-6 rounded-2xl bg-amber-50/80 border-2 border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                      {isPlural ? 'Meervoud' : `${selectedGarment.article}-woord`} {isHet ? '· Geen -e na \'een\'!' : '· Krijgt altijd -e!'}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-stone-900 capitalize">
                      {fullDutchPhrase}
                    </h4>
                    <p className="text-xs text-stone-600">
                      Engels: {selectedPattern !== 'effen' ? `${selectedPattern} ` : ''}{selectedColor.name} {selectedGarment.english}
                    </p>
                  </div>

                  <button
                    onClick={() => speakDutch(fullDutchPhrase, audioSpeed)}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-amber-400" />
                    <span>Beluister Uitspraak</span>
                  </button>
                </div>
              );
            })()}

            {/* Step 1: Pick Clothing item */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                1. Kies een kledingstuk (7.4):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {[
                  { name: 'spijkerbroek', article: 'de' as const, english: 'jeans' },
                  { name: 'broek', article: 'de' as const, english: 'trousers' },
                  { name: 'T-shirt', article: 'het' as const, english: 'T-shirt' },
                  { name: 'trui', article: 'de' as const, english: 'jumper' },
                  { name: 'bloes', article: 'de' as const, english: 'blouse' },
                  { name: 'overhemd', article: 'het' as const, english: 'shirt' },
                  { name: 'rok', article: 'de' as const, english: 'skirt' },
                  { name: 'jurk', article: 'de' as const, english: 'dress' },
                  { name: 'jas', article: 'de' as const, english: 'coat' },
                  { name: 'pak', article: 'het' as const, english: 'suit' },
                  { name: 'schoenen', article: 'de' as const, english: 'shoes', isPlural: true },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedGarment(item)}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                      selectedGarment.name === item.name
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <span className="text-[10px] opacity-70 block font-mono">
                      {item.isPlural ? 'mv.' : item.article}
                    </span>
                    <strong className="block truncate">{item.name}</strong>
                    <span className="text-[10px] opacity-60 block truncate">{item.english}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Pick Color */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                2. Kies een kleur (7.3):
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'wit', hex: '#f8fafc', isHetInflected: false },
                  { name: 'zwart', hex: '#18181b', isHetInflected: false },
                  { name: 'grijs', hex: '#64748b', isHetInflected: false },
                  { name: 'rood', hex: '#dc2626', isHetInflected: false },
                  { name: 'blauw', hex: '#2563eb', isHetInflected: false },
                  { name: 'donkerblauw', hex: '#1e3a8a', isHetInflected: false },
                  { name: 'geel', hex: '#eab308', isHetInflected: false },
                  { name: 'groen', hex: '#16a34a', isHetInflected: false },
                  { name: 'lichtgroen', hex: '#86efac', isHetInflected: false },
                  { name: 'bruin', hex: '#78350f', isHetInflected: false },
                  { name: 'paars', hex: '#9333ea', isHetInflected: false },
                  { name: 'roze', hex: '#ec4899', isHetInflected: false },
                  { name: 'oranje', hex: '#f97316', isHetInflected: false },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      selectedColor.name === c.name
                        ? 'border-stone-900 ring-2 ring-amber-500 bg-stone-100'
                        : 'border-stone-200 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Pick Pattern */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                3. Kies een patroon (7.3):
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'effen', label: 'Effen (solid)' },
                  { name: 'geruit', label: 'Geruit (checkered)' },
                  { name: 'gestreept', label: 'Gestreept (striped)' },
                  { name: 'gebloemd', label: 'Gebloemd (flowered)' },
                ].map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPattern(p.name)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedPattern === p.name
                        ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-2xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Reading (Leesvaardigheid & Tekst) */}
      {activeTab === 'reading' && lesson.readingText && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded">
                  Leestekst & Begrip
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                  {lesson.readingText.title}
                </h3>
                {lesson.readingText.subtitle && (
                  <p className="text-xs text-stone-500 mt-0.5 font-medium">
                    {lesson.readingText.subtitle}
                  </p>
                )}
              </div>

              <button
                onClick={() => speakDutch(lesson.readingText?.content || '', audioSpeed)}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer shrink-0 self-start sm:self-auto"
              >
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Lees Hardop Voor</span>
              </button>
            </div>

            {/* Reading Content */}
            <div className="prose prose-stone max-w-none space-y-3">
              {lesson.readingText.content.split('\n\n').map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-stone-800 text-sm sm:text-base leading-relaxed bg-stone-50/60 p-4 rounded-2xl border border-stone-200/60"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Vocabulary notes / Glossary */}
            {lesson.readingText.vocabularyNotes && lesson.readingText.vocabularyNotes.length > 0 && (
              <div className="pt-4 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Woordenhulp bij deze tekst:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {lesson.readingText.vocabularyNotes.map((vn, vnIdx) => (
                    <div
                      key={vnIdx}
                      className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-xs"
                    >
                      <div>
                        <strong className="text-amber-950 block">{vn.word}</strong>
                        <span className="text-stone-600">{vn.translation}</span>
                      </div>
                      <button
                        onClick={() => speakDutch(vn.word, audioSpeed)}
                        className="p-1 rounded text-stone-400 hover:text-stone-900"
                        title="Beluister"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reading Comprehension Questions */}
            {lesson.readingText.questions && lesson.readingText.questions.length > 0 && (
              <div className="pt-6 border-t border-stone-200 space-y-4">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Begripsvragen bij de tekst:</span>
                </h4>
                <div className="space-y-3">
                  {lesson.readingText.questions.map((q) => {
                    const isChecked = readingChecked[q.id];
                    const userVal = readingAnswers[q.id] || '';
                    const isCorrect = userVal.trim().toLowerCase() === q.answer.trim().toLowerCase() ||
                      (q.acceptableAnswers || []).some(a => a.trim().toLowerCase() === userVal.trim().toLowerCase());

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          isChecked
                            ? isCorrect
                              ? 'bg-emerald-50/70 border-emerald-300'
                              : 'bg-rose-50/70 border-rose-300'
                            : 'bg-stone-50 border-stone-200'
                        }`}
                      >
                        <p className="font-bold text-stone-900 text-xs sm:text-sm">{q.prompt}</p>

                        {q.options && q.options.length > 0 ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => {
                                  setReadingAnswers(prev => ({ ...prev, [q.id]: opt }));
                                  setReadingChecked(prev => ({ ...prev, [q.id]: true }));
                                }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                  userVal.toLowerCase() === opt.toLowerCase()
                                    ? isChecked
                                      ? isCorrect
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-rose-600 text-white'
                                      : 'bg-stone-900 text-white'
                                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-3 flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="Typ je antwoord..."
                              value={userVal}
                              onChange={(e) => {
                                setReadingAnswers(prev => ({ ...prev, [q.id]: e.target.value }));
                                setReadingChecked(prev => ({ ...prev, [q.id]: false }));
                              }}
                              className="flex-1 bg-white border border-stone-300 px-3 py-1.5 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                            />
                            <button
                              disabled={!userVal}
                              onClick={() => setReadingChecked(prev => ({ ...prev, [q.id]: true }))}
                              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl cursor-pointer"
                            >
                              Controleer
                            </button>
                          </div>
                        )}

                        {isChecked && (
                          <div className="mt-2.5 pt-2 border-t border-stone-200/60 text-xs">
                            {isCorrect ? (
                              <p className="text-emerald-800 font-bold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Goed begrepen!
                              </p>
                            ) : (
                              <p className="text-rose-800 font-semibold">
                                Niet juist. Het juiste antwoord is: <strong>{q.answer}</strong>.
                              </p>
                            )}
                            {q.explanation && (
                              <p className="text-stone-600 text-[11px] mt-0.5">{q.explanation}</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab: Pronunciation (Uitspraak) */}
      {activeTab === 'pronunciation' && lesson.pronunciation && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded">
                Uitspraaktraining · {lesson.pronunciation.soundFocus}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                {lesson.pronunciation.title}
              </h3>
            </div>

            {/* Explanation box */}
            <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-2xl space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>Uitleg & Regels</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                {lesson.pronunciation.ruleExplanation || lesson.pronunciation.explanation}
              </p>
            </div>

            {/* Word List Drill */}
            {lesson.pronunciation.wordList && lesson.pronunciation.wordList.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Oefenwoorden (Tik om te luisteren):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                  {lesson.pronunciation.wordList.map((word, wIdx) => (
                    <button
                      key={wIdx}
                      onClick={() => speakDutch(word, audioSpeed)}
                      className="p-3 bg-stone-50 hover:bg-amber-50 hover:border-amber-300 border border-stone-200 rounded-xl flex items-center justify-between text-left transition-all group cursor-pointer"
                    >
                      <span className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-950 truncate">
                        {word}
                      </span>
                      <Volume2 className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 shrink-0 ml-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Minimal Pairs Drill */}
            {lesson.pronunciation.minimalPairs && lesson.pronunciation.minimalPairs.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Klankcontrasten (Minimale paren - luister naar het verschil):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {lesson.pronunciation.minimalPairs.map((pair, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2.5"
                    >
                      {pair.contrast && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                          {pair.contrast}
                        </span>
                      )}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => speakDutch(pair.word1, audioSpeed)}
                          className="p-2.5 bg-white hover:bg-amber-50 hover:border-amber-300 border border-stone-200 rounded-xl flex items-center justify-between transition-all cursor-pointer"
                        >
                          <span className="font-bold text-xs sm:text-sm text-stone-900">{pair.word1}</span>
                          <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                        </button>
                        <button
                          onClick={() => speakDutch(pair.word2, audioSpeed)}
                          className="p-2.5 bg-white hover:bg-amber-50 hover:border-amber-300 border border-stone-200 rounded-xl flex items-center justify-between transition-all cursor-pointer"
                        >
                          <span className="font-bold text-xs sm:text-sm text-stone-900">{pair.word2}</span>
                          <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab: Exam (Eindtoets / Master Quiz) */}
      {activeTab === 'exam' && lesson.exam && (
        <div className="space-y-6">
          {/* Result Banner after submission */}
          {examSubmitted ? (
            <div
              className={`p-6 sm:p-8 rounded-3xl border-2 transition-all ${
                hasPassedExam
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                  : 'bg-amber-50 border-amber-400 text-amber-950'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      hasPassedExam ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                    }`}
                  >
                    {hasPassedExam ? <Award className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black">
                      {hasPassedExam ? 'Gefeliciteerd! Toets Gehaald! 🎉' : 'Nog even oefenen!'}
                    </h3>
                    <p className="text-xs sm:text-sm mt-0.5 opacity-90">
                      Je score: <strong>{correctExamCount} / {examQuestions.length}</strong> ({examScorePercent}%)
                      · Slagingsnorm: {passingScore}%
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setExamSubmitted(false);
                    setExamAnswers({});
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <RotateCcw className="w-4 h-4 text-amber-400" />
                  <span>Toets Opnieuw Doen</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded">
                  Eindtoets
                </span>
                <h3 className="text-xl font-black text-stone-900 mt-1">
                  {lesson.exam.title}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Beantwoord alle {examQuestions.length} vragen om te testen of je de lesstof van {lesson.chapterNumber} beheerst.
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-stone-600 block">
                  Voortgang: {Object.keys(examAnswers).length} / {examQuestions.length} beantwoord
                </span>
                <span className="text-[11px] text-amber-700 font-bold block">
                  Norm: {passingScore}% goed
                </span>
              </div>
            </div>
          )}

          {/* Exam Questions List */}
          <div className="space-y-4">
            {examQuestions.map((q, idx) => {
              const userVal = examAnswers[q.id] || '';
              const cleanUser = userVal.trim().toLowerCase();
              const cleanCorrect = q.answer.trim().toLowerCase();
              const acceptable = (q.acceptableAnswers || []).map(a => a.trim().toLowerCase());
              const isCorrect = cleanUser === cleanCorrect || acceptable.includes(cleanUser);

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-3xl border transition-all space-y-3 ${
                    examSubmitted
                      ? isCorrect
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-rose-50/60 border-rose-300'
                      : 'bg-white border-stone-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">
                          Vraag {idx + 1} van {examQuestions.length}
                        </span>
                        {examSubmitted && (
                          <span
                            className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                              isCorrect
                                ? 'bg-emerald-200 text-emerald-950'
                                : 'bg-rose-200 text-rose-950'
                            }`}
                          >
                            {isCorrect ? 'Correct ✓' : 'Fout ✗'}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-stone-900">{q.prompt}</h4>
                      {q.subPrompt && (
                        <p className="text-xs text-stone-500 italic">{q.subPrompt}</p>
                      )}
                    </div>

                    <button
                      onClick={() => speakDutch(q.prompt, audioSpeed)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Options */}
                  {q.options && q.options.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {q.options.map((opt) => {
                        const isSelected = userVal.toLowerCase() === opt.toLowerCase();
                        const isThisOptionCorrect = opt.toLowerCase() === q.answer.toLowerCase();

                        let optStyles = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                        if (examSubmitted) {
                          if (isThisOptionCorrect) {
                            optStyles = 'bg-emerald-500 text-white font-extrabold border-emerald-600 shadow-xs';
                          } else if (isSelected && !isCorrect) {
                            optStyles = 'bg-rose-500 text-white font-extrabold border-rose-600 shadow-xs';
                          } else {
                            optStyles = 'bg-stone-50 text-stone-400 border-stone-200 opacity-60';
                          }
                        } else if (isSelected) {
                          optStyles = 'bg-stone-900 text-white font-bold border-stone-900 shadow-2xs';
                        }

                        return (
                          <button
                            key={opt}
                            disabled={examSubmitted}
                            onClick={() => setExamAnswers(prev => ({ ...prev, [q.id]: opt }))}
                            className={`p-3 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between cursor-pointer ${optStyles}`}
                          >
                            <span>{opt}</span>
                            {examSubmitted && isThisOptionCorrect && <Check className="w-4 h-4 text-white shrink-0 ml-1" />}
                            {examSubmitted && isSelected && !isCorrect && <X className="w-4 h-4 text-white shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="pt-2">
                      <input
                        type="text"
                        disabled={examSubmitted}
                        placeholder="Typ je antwoord..."
                        value={userVal}
                        onChange={(e) => setExamAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                        className="w-full bg-stone-50 border border-stone-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                      />
                    </div>
                  )}

                  {/* Explanation after submission */}
                  {examSubmitted && (
                    <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs space-y-1">
                      <p className="font-bold text-stone-800">
                        Juist antwoord: <span className="text-emerald-700">{q.answer}</span>
                      </p>
                      {q.explanation && (
                        <p className="text-stone-600 text-[11px] leading-relaxed">
                          💡 {q.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Exam Button */}
          {!examSubmitted && (
            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-600 font-medium">
                {Object.keys(examAnswers).length === examQuestions.length
                  ? 'Alle vragen zijn beantwoord! Klaar om in te leveren?'
                  : `Let op: Je hebt ${Object.keys(examAnswers).length} van de ${examQuestions.length} vragen ingevuld.`}
              </span>
              <button
                disabled={Object.keys(examAnswers).length === 0}
                onClick={() => setExamSubmitted(true)}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-black text-sm rounded-2xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Toets Inleveren & Beoordelen</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Cultural note */}
      {lesson.culturalOrPracticalNote && (
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-3xl text-xs space-y-1">
          <p className="font-extrabold text-amber-950 uppercase tracking-wider">
            💡 Praktische tip / Cultuurnoot
          </p>
          <p className="text-amber-900 leading-relaxed">
            {lesson.culturalOrPracticalNote}
          </p>
        </div>
      )}
    </div>
  );
};
