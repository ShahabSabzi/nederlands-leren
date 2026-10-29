import React, { useState } from 'react';
import { CLOCK_EXAMPLES, ClockTimeExample, getDutchTimePhrase } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { Volume2, Clock, CheckCircle2, RefreshCw, HelpCircle, ArrowRight, Compass } from 'lucide-react';

interface ClockSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const ClockSection: React.FC<ClockSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [selectedExample, setSelectedExample] = useState<ClockTimeExample>(CLOCK_EXAMPLES[0]);
  const [customHour, setCustomHour] = useState<number>(11);
  const [customMinute, setCustomMinute] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'learn' | 'interactive' | 'quiz' | 'conversations'>('learn');

  // Quiz State
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswerChecked, setQuizAnswerChecked] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      time: '11:30',
      question: 'Hoe zeg je 11:30 in het Nederlands?',
      options: ['Het is half elf.', 'Het is half twaalf.', 'Het is dertig over elf.', 'Het is kwart voor twaalf.'],
      answer: 'Het is half twaalf.',
      explanation: 'In het Nederlands telt "half" naar het KOMENDE uur: 11:30 is dus "half twaalf" (onderweg naar 12 uur).'
    },
    {
      time: '11:20',
      question: 'Hoe zeg je 11:20 in het Nederlands?',
      options: ['Het is tien voor half twaalf.', 'Het is twintig voor twaalf.', 'Het is tien over half elf.', 'Het is kwart over elf.'],
      answer: 'Het is tien voor half twaalf.',
      explanation: 'Vanaf 20 minuten over het uur telt het Nederlands ten opzichte van het halve uur: 10 minuten VÓÓR half twaalf.'
    },
    {
      time: '11:35',
      question: 'Hoe zeg je 11:35 in het Nederlands?',
      options: ['Het is vijf voor twaalf.', 'Het is vijf over half twaalf.', 'Het is vijf over half elf.', 'Het is vijfendertig over elf.'],
      answer: 'Het is vijf over half twaalf.',
      explanation: '11:35 is 5 minuten NA het halve uur (half twaalf), dus "vijf over half twaalf".'
    },
    {
      time: '11:15',
      question: 'Hoe zeg je 11:15 in het Nederlands?',
      options: ['Het is kwart voor elf.', 'Het is kwart over elf.', 'Het is kwart voor twaalf.', 'Het is vijftien over elf.'],
      answer: 'Het is kwart over elf.',
      explanation: '15 minuten na het hele uur is "kwart over".'
    },
    {
      time: '11:45',
      question: 'Hoe zeg je 11:45 in het Nederlands?',
      options: ['Het is kwart voor elf.', 'Het is kwart over elf.', 'Het is kwart voor twaalf.', 'Het is kwart over twaalf.'],
      answer: 'Het is kwart voor twaalf.',
      explanation: '15 minuten vóór het komende uur (12) is "kwart voor twaalf".'
    },
    {
      time: '11:25',
      question: 'Hoe zeg je 11:25 in het Nederlands?',
      options: ['Het is vijf voor half twaalf.', 'Het is vijf over elf.', 'Het is vijfentwintig over elf.', 'Het is half twaalf.'],
      answer: 'Het is vijf voor half twaalf.',
      explanation: '5 minuten vóór 11:30 (half twaalf) is "vijf voor half twaalf".'
    }
  ];

  const currentQuiz = quizQuestions[quizQuestionIndex];

  const handleCheckQuizAnswer = () => {
    if (!selectedQuizOption) return;
    setQuizAnswerChecked(true);
    if (selectedQuizOption === currentQuiz.answer) {
      setQuizScore(prev => prev + 1);
      if (onRecordExerciseCompletion) {
        onRecordExerciseCompletion(`clock_quiz_${quizQuestionIndex}`);
      }
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedQuizOption(null);
    setQuizAnswerChecked(false);
    setQuizQuestionIndex(prev => (prev + 1) % quizQuestions.length);
  };

  // SVG Clock Hand Angles
  const getHandAngles = (h: number, m: number) => {
    const minuteAngle = m * 6; // 360 / 60
    const hourAngle = (h % 12) * 30 + m * 0.5; // 360 / 12 + extra for minutes
    return { hourAngle, minuteAngle };
  };

  const { dutch: customDutchPhrase, explanation: customExplanation } = getDutchTimePhrase(customHour, customMinute);

  const displayHour = activeTab === 'learn' ? selectedExample.hour : customHour;
  const displayMinute = activeTab === 'learn' ? selectedExample.minute : customMinute;
  const { hourAngle, minuteAngle } = getHandAngles(displayHour, displayMinute);

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>2.9 De Klok & Hoe laat is het?</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Klokkijken in het Nederlands
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              Het Nederlandse kloksysteem is uniek: we rekenen rond het <strong className="text-stone-800 font-bold">halve uur</strong>. Zo is 11:30 niet "half past eleven", maar <strong className="text-stone-800 font-bold">half twaalf</strong> (halverwege naar 12:00)!
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('learn')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'learn'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Overzicht (11.00-11.55)
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'interactive'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Zelf klok instellen
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Klok-Quiz
            </button>
            <button
              onClick={() => setActiveTab('conversations')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'conversations'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 5 (Vragen)
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Clock Display Card */}
      {(activeTab === 'learn' || activeTab === 'interactive') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive Analog Clock Visualizer */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-xs flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <svg className="w-full h-full drop-shadow-sm select-none" viewBox="0 0 200 200">
                {/* Clock Face Circle */}
                <circle cx="100" cy="100" r="94" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="4" />
                <circle cx="100" cy="100" r="90" fill="#ffffff" stroke="#e7e5e4" strokeWidth="1" />

                {/* Shaded visual zones */}
                {/* OVER zone (12 to 3) */}
                <path d="M 100 100 L 100 12 A 88 88 0 0 1 188 100 Z" fill="#ecfdf5" fillOpacity="0.4" />
                {/* VOOR HALF zone (3 to 6) */}
                <path d="M 100 100 L 188 100 A 88 88 0 0 1 100 188 Z" fill="#fffbeb" fillOpacity="0.4" />
                {/* OVER HALF zone (6 to 9) */}
                <path d="M 100 100 L 100 188 A 88 88 0 0 1 12 100 Z" fill="#fff7ed" fillOpacity="0.4" />
                {/* VOOR zone (9 to 12) */}
                <path d="M 100 100 L 12 100 A 88 88 0 0 1 100 12 Z" fill="#eff6ff" fillOpacity="0.4" />

                {/* Clock Hour Numbers */}
                {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 100 + 72 * Math.sin(angle);
                  const y = 100 - 72 * Math.cos(angle);
                  return (
                    <text
                      key={n}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="text-[10px] font-bold fill-stone-700 font-sans"
                    >
                      {n}
                    </text>
                  );
                })}

                {/* Hour Hand */}
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="52"
                  stroke="#1c1917"
                  strokeWidth="5"
                  strokeLinecap="round"
                  transform={`rotate(${hourAngle} 100 100)`}
                  className="transition-transform duration-300"
                />

                {/* Minute Hand */}
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="30"
                  stroke="#d97706"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  transform={`rotate(${minuteAngle} 100 100)`}
                  className="transition-transform duration-300"
                />

                {/* Center Pin */}
                <circle cx="100" cy="100" r="5" fill="#1c1917" />
                <circle cx="100" cy="100" r="2" fill="#d97706" />
              </svg>
            </div>

            {/* Time display box */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 w-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-black text-stone-900 font-mono">
                  {String(displayHour).padStart(2, '0')}:{String(displayMinute).padStart(2, '0')}
                </span>
                <button
                  onClick={() => {
                    const text = activeTab === 'learn' ? selectedExample.dutch : customDutchPhrase;
                    speakDutch(text, audioSpeed);
                  }}
                  className="p-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold transition-all shadow-xs"
                  title="Beluister kloktijd"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-lg font-bold text-amber-950 mt-1">
                {activeTab === 'learn' ? selectedExample.dutch : customDutchPhrase}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                {activeTab === 'learn' ? selectedExample.literalBreakdown : customExplanation}
              </p>
            </div>

            {/* Interactive sliders if in interactive mode */}
            {activeTab === 'interactive' && (
              <div className="w-full space-y-3 pt-2">
                <div className="space-y-1 text-left">
                  <div className="flex justify-between text-xs font-semibold text-stone-700">
                    <span>Uur ({customHour})</span>
                    <span>1 - 12</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={customHour}
                    onChange={(e) => setCustomHour(parseInt(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <div className="flex justify-between text-xs font-semibold text-stone-700">
                    <span>Minuten ({customMinute})</span>
                    <span>stap van 5 min</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="55"
                    step="5"
                    value={customMinute}
                    onChange={(e) => setCustomMinute(parseInt(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: The 12 Textbook Times (Page 39) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-base font-bold text-stone-900">
                {activeTab === 'learn' ? 'De 12 Voorbeelden uit het boek' : 'Snelle tijdkiezers'}
              </h3>
              <span className="text-xs text-stone-500">Klik om te horen & zien</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CLOCK_EXAMPLES.map((ex) => {
                const isSelected = selectedExample.digital === ex.digital && activeTab === 'learn';

                return (
                  <button
                    key={ex.digital}
                    onClick={() => {
                      setSelectedExample(ex);
                      setCustomHour(ex.hour);
                      setCustomMinute(ex.minute);
                      speakDutch(ex.dutch, audioSpeed);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-2 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300/40 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs font-extrabold text-amber-800 bg-amber-100/80 px-1.5 py-0.5 rounded">
                        {ex.digital}
                      </span>
                      <p className="text-xs font-bold text-stone-900 mt-1">
                        {ex.dutch}
                      </p>
                      <p className="text-[11px] text-stone-500 italic">
                        {ex.literalBreakdown}
                      </p>
                    </div>
                    <Volume2 className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-1" />
                  </button>
                );
              })}
            </div>

            {/* Time units breakdown */}
            <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-800">een uur</p>
                <p className="text-[11px] text-stone-500">11.00 - 12.00</p>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-800">een halfuur</p>
                <p className="text-[11px] text-stone-500">11.00 - 11.30</p>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-800">een kwartier</p>
                <p className="text-[11px] text-stone-500">11.00 - 11.15</p>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <p className="font-bold text-stone-800">een minuut</p>
                <p className="text-[11px] text-stone-500">11.00 - 11.01</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Clock Quiz */}
      {activeTab === 'quiz' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs max-w-xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs text-amber-700 font-bold uppercase tracking-wider">
                Vraag {quizQuestionIndex + 1} van {quizQuestions.length}
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                {currentQuiz.question}
              </h3>
            </div>
            <div className="font-mono text-xl font-black bg-stone-100 text-stone-900 px-3 py-1 rounded-xl">
              {currentQuiz.time}
            </div>
          </div>

          <div className="space-y-2.5">
            {currentQuiz.options.map((opt) => {
              const isSelected = selectedQuizOption === opt;
              const isCorrectAnswer = opt === currentQuiz.answer;

              let style = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';
              if (quizAnswerChecked) {
                if (isCorrectAnswer) {
                  style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                } else if (isSelected && !isCorrectAnswer) {
                  style = 'bg-rose-50 border-rose-400 text-rose-950';
                }
              } else if (isSelected) {
                style = 'bg-amber-100 border-amber-500 ring-2 ring-amber-300 font-bold text-amber-950';
              }

              return (
                <button
                  key={opt}
                  disabled={quizAnswerChecked}
                  onClick={() => setSelectedQuizOption(opt)}
                  className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {quizAnswerChecked && isCorrectAnswer && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {quizAnswerChecked && (
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-1">
              <p className="font-bold text-stone-900">Uitleg:</p>
              <p className="text-stone-600">{currentQuiz.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            {!quizAnswerChecked ? (
              <button
                disabled={!selectedQuizOption}
                onClick={handleCheckQuizAnswer}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Controleer antwoord
              </button>
            ) : (
              <button
                onClick={handleNextQuizQuestion}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Volgende vraag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Opdracht 5 Time Conversations */}
      {activeTab === 'conversations' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-6">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Opdracht 5: Vragen over de tijd
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Oefen met de 5 standaardvragen uit het boek over cursustijden, pauzes en afspraken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: 'Hoe laat is het nu?',
                trans: 'What time is it now?',
                sample: 'Het is nu kwart over elf (11:15).'
              },
              {
                q: 'Hoe laat begint de les?',
                trans: 'What time does the lesson begin?',
                sample: 'De les begint om 9.00 uur.'
              },
              {
                q: 'Hoe laat stopt de les?',
                trans: 'What time does the lesson finish?',
                sample: 'De les stopt om 12.30 uur (half één).'
              },
              {
                q: 'Hoe laat hebben we pauze?',
                trans: 'What time do we have a break?',
                sample: 'We hebben pauze om 10.30 uur (half elf).'
              },
              {
                q: 'Hoe laat ga je naar de cursus?',
                trans: 'What time are you going to the course?',
                sample: 'Ik ga om kwart voor negen naar de cursus.'
              },
            ].map((conv, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Vraag {idx + 1}
                  </span>
                  <button
                    onClick={() => speakDutch(conv.q, audioSpeed)}
                    className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                    title="Beluister vraag"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="font-bold text-stone-900 text-sm">{conv.q}</p>
                <p className="text-xs text-stone-500 italic">{conv.trans}</p>
                <div className="mt-2 pt-2 border-t border-stone-200 text-xs text-stone-700">
                  <span className="font-semibold text-stone-900">Voorbeeldantwoord:</span> {conv.sample}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
