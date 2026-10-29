import React, { useState, useEffect } from 'react';
import { DIALOGUE_DATA, OPDRACHT_1, DialogueLine, ExerciseItem } from '../data/chapterData';
import { speakDutch, stopSpeaking } from '../utils/speech';
import { Volume2, Play, Pause, RotateCcw, Check, HelpCircle, User, Coffee, CheckCircle2, ChevronRight, Eye, EyeOff } from 'lucide-react';

interface DialogueViewerProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const DialogueViewer: React.FC<DialogueViewerProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'text' | 'roleplay' | 'opdracht1'>('text');
  const [showTranslations, setShowTranslations] = useState<boolean>(true);
  const [activePlayingId, setActivePlayingId] = useState<number | null>(null);
  const [isPlayingFull, setIsPlayingFull] = useState<boolean>(false);
  const [roleplayRole, setRoleplayRole] = useState<'Susy' | 'Edit'>('Susy');
  const [roleplayRevealed, setRoleplayRevealed] = useState<Record<number, boolean>>({});

  // Opdracht 1 states
  const [opdrachtAnswers, setOpdrachtAnswers] = useState<Record<number, string>>({});
  const [opdrachtChecked, setOpdrachtChecked] = useState<Record<number, boolean>>({});
  const [opdrachtResults, setOpdrachtResults] = useState<Record<number, boolean>>({});
  const [showOpdrachtHints, setShowOpdrachtHints] = useState<Record<number, boolean>>({});

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handlePlayLine = (line: DialogueLine) => {
    setActivePlayingId(line.id);
    speakDutch(line.dutch, audioSpeed, () => {
      setActivePlayingId(null);
    });
  };

  const handlePlayFullDialogue = () => {
    if (isPlayingFull) {
      stopSpeaking();
      setIsPlayingFull(false);
      setActivePlayingId(null);
      return;
    }

    setIsPlayingFull(true);
    let index = 0;

    const playNext = () => {
      if (index >= DIALOGUE_DATA.length) {
        setIsPlayingFull(false);
        setActivePlayingId(null);
        return;
      }

      const current = DIALOGUE_DATA[index];
      setActivePlayingId(current.id);
      index++;

      speakDutch(current.dutch, audioSpeed, () => {
        setTimeout(playNext, 600);
      });
    };

    playNext();
  };

  const checkOpdrachtAnswer = (item: ExerciseItem) => {
    const userVal = (opdrachtAnswers[item.id] || '').trim().toLowerCase();
    if (!userVal) return;

    const isMatch = item.acceptableAnswers?.some(acceptable => {
      const cleanAcc = acceptable.toLowerCase().replace(/[.,!?;:]/g, '').trim();
      const cleanUser = userVal.replace(/[.,!?;:]/g, '').trim();
      return cleanUser === cleanAcc || cleanUser.includes(cleanAcc) || cleanAcc.includes(cleanUser);
    }) || false;

    setOpdrachtChecked(prev => ({ ...prev, [item.id]: true }));
    setOpdrachtResults(prev => ({ ...prev, [item.id]: isMatch }));
    if (isMatch && onRecordExerciseCompletion) {
      onRecordExerciseCompletion(`opdracht1_${item.id}`);
    }
  };

  const toggleHint = (id: number) => {
    setShowOpdrachtHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const correctCount = Object.values(opdrachtResults).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Intro Context Card */}
      <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Coffee className="w-4 h-4" />
              <span>2.1 Tekst & Dialoog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Susy en Edit in de kantine
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-2xl">
              "Susy en Edit hebben pauze en zitten in de kantine." Leer hoe je een informeel gesprek voert over de verjaardag, familie, uiterlijk en de tijd.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayFullDialogue}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs ${
                isPlayingFull
                  ? 'bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold'
                  : 'bg-white hover:bg-stone-100 text-stone-900'
              }`}
            >
              {isPlayingFull ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlayingFull ? 'Pauzeer audio' : 'Luister hele dialoog'}</span>
            </button>
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium transition-colors"
              title="Vertaling in- of uitschakelen"
            >
              {showTranslations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span className="hidden sm:inline">{showTranslations ? 'Verberg vertaling' : 'Toon vertaling'}</span>
            </button>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex gap-2 mt-6 border-t border-stone-800 pt-4">
          <button
            onClick={() => setActiveSubTab('text')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSubTab === 'text'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            Volledige dialoog
          </button>
          <button
            onClick={() => setActiveSubTab('roleplay')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSubTab === 'roleplay'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            Rollenspel & Spreken
          </button>
          <button
            onClick={() => setActiveSubTab('opdracht1')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeSubTab === 'opdracht1'
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <span>Opdracht 1: Begripsvragen</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-stone-700 text-stone-200">
              {correctCount}/11
            </span>
          </button>
        </div>
      </div>

      {/* Main Tab 1: Full Dialogue */}
      {activeSubTab === 'text' && (
        <div className="space-y-3">
          {DIALOGUE_DATA.map((line) => {
            const isSusy = line.speaker === 'Susy';
            const isPlaying = activePlayingId === line.id;

            return (
              <div
                key={line.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  isPlaying
                    ? 'bg-amber-50/90 border-amber-300 ring-2 ring-amber-400/30 shadow-md'
                    : 'bg-white border-stone-200/80 hover:border-stone-300 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Speaker Avatar */}
                    <div
                      className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center font-bold text-xs shadow-xs ${
                        isSusy
                          ? 'bg-teal-100 text-teal-900 border border-teal-200'
                          : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                      }`}
                    >
                      {isSusy ? 'Su' : 'Ed'}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isSusy ? 'text-teal-800' : 'text-indigo-800'}`}>
                          {line.speaker}
                        </span>
                        <span className="text-[11px] text-stone-400">regel {line.id}</span>
                      </div>

                      {/* Dutch sentence */}
                      <p className="text-base sm:text-lg font-medium text-stone-900 leading-snug">
                        {line.dutch}
                      </p>

                      {/* English Translation */}
                      {showTranslations && (
                        <p className="text-xs sm:text-sm text-stone-500 italic">
                          {line.english}
                        </p>
                      )}

                      {/* Linguistic Note */}
                      {line.notes && (
                        <p className="text-xs text-stone-600 bg-stone-50 border border-stone-200/60 rounded-md px-2.5 py-1 mt-1.5 inline-block">
                          💡 <span className="font-semibold text-stone-700">Grammatica / Uitleg:</span> {line.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Play audio button */}
                  <button
                    onClick={() => handlePlayLine(line)}
                    className={`p-2 rounded-xl border shrink-0 transition-colors ${
                      isPlaying
                        ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                    title="Beluister deze zin"
                    aria-label={`Beluister zin: ${line.dutch}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sub Tab 2: Roleplay Mode */}
      {activeSubTab === 'roleplay' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-amber-950">
                Rollenspel: Oefen je spreekvaardigheid
              </h3>
              <p className="text-xs text-amber-900/80 mt-1">
                Kies een rol. Probeer de zin zelf hardop in het Nederlands uit te spreken voordat je op "Toon zin" klikt of naar de audio luistert!
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-amber-200">
              <button
                onClick={() => setRoleplayRole('Susy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  roleplayRole === 'Susy'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Ik speel Susy
              </button>
              <button
                onClick={() => setRoleplayRole('Edit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  roleplayRole === 'Edit'
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Ik speel Edit
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {DIALOGUE_DATA.map((line) => {
              const isMyTurn = line.speaker === roleplayRole;
              const isRevealed = roleplayRevealed[line.id];

              return (
                <div
                  key={line.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isMyTurn
                      ? 'bg-white border-amber-300 ring-2 ring-amber-200/50 shadow-sm'
                      : 'bg-stone-50 border-stone-200 opacity-80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                            isMyTurn
                              ? 'bg-amber-600 text-white'
                              : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {isMyTurn ? `JOUW BEURT (${line.speaker})` : line.speaker}
                        </span>
                        <span className="text-xs text-stone-500">{line.english}</span>
                      </div>

                      {isMyTurn ? (
                        <div className="space-y-2">
                          {isRevealed ? (
                            <p className="text-lg font-bold text-stone-900">
                              {line.dutch}
                            </p>
                          ) : (
                            <div className="bg-stone-100 rounded-xl p-3 border border-dashed border-stone-300">
                              <p className="text-xs text-stone-500 font-medium italic">
                                💬 Zeg jouw regel hardop in het Nederlands...
                              </p>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                setRoleplayRevealed(prev => ({
                                  ...prev,
                                  [line.id]: !prev[line.id]
                                }))
                              }
                              className="text-xs font-semibold text-stone-700 hover:text-stone-950 underline cursor-pointer"
                            >
                              {isRevealed ? 'Verberg zin' : 'Toon Nederlandse tekst'}
                            </button>
                            <span className="text-stone-300">·</span>
                            <button
                              onClick={() => handlePlayLine(line)}
                              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                            >
                              <Volume2 className="w-3.5 h-3.5" /> Beluister voorbeeld
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <p className="text-base font-medium text-stone-800">
                            {line.dutch}
                          </p>
                          <button
                            onClick={() => handlePlayLine(line)}
                            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                            title="Speel af"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sub Tab 3: Opdracht 1 Begripsvragen */}
      {activeSubTab === 'opdracht1' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Opdracht 1: Geef een reactie op de vragen
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Beantwoord de 11 vragen over de kantine-tekst. Typ een antwoord in het Nederlands of bekijk de hints.
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-amber-600">
                  {correctCount} / {OPDRACHT_1.length}
                </span>
                <p className="text-[11px] text-stone-400 font-medium">goed beantwoord</p>
              </div>
            </div>

            <div className="space-y-5">
              {OPDRACHT_1.map((item) => {
                const isChecked = opdrachtChecked[item.id];
                const isCorrect = opdrachtResults[item.id];
                const showHint = showOpdrachtHints[item.id];

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/70 border-emerald-300'
                          : 'bg-rose-50/70 border-rose-300'
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {item.id}
                        </span>
                        <div>
                          <p className="font-semibold text-stone-900 text-sm sm:text-base">
                            {item.prompt}
                          </p>
                          {item.context && (
                            <p className="text-xs text-stone-500 italic mt-0.5">
                              Context: {item.context}
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => speakDutch(item.prompt, audioSpeed)}
                        className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
                        title="Lees vraag voor"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Answer Input */}
                    <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <input
                        type="text"
                        placeholder="Typ hier je antwoord..."
                        value={opdrachtAnswers[item.id] || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          setOpdrachtAnswers(prev => ({ ...prev, [item.id]: val }));
                          setOpdrachtChecked(prev => ({ ...prev, [item.id]: false }));
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') checkOpdrachtAnswer(item);
                        }}
                        className="flex-1 bg-white border border-stone-300 px-3.5 py-2 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-2xs"
                      />
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => checkOpdrachtAnswer(item)}
                          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-all shadow-2xs cursor-pointer"
                        >
                          Controleer
                        </button>
                        <button
                          onClick={() => toggleHint(item.id)}
                          className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 font-medium text-xs rounded-xl transition-all cursor-pointer"
                          title="Toon hint of juist antwoord"
                        >
                          {showHint ? 'Verberg' : 'Antwoord'}
                        </button>
                      </div>
                    </div>

                    {/* Feedback result */}
                    {isChecked && (
                      <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Heel goed! Juist beantwoord.
                          </span>
                        ) : (
                          <span className="text-rose-700">
                            Nog niet helemaal goed. Probeer het opnieuw of bekijk het antwoord hieronder.
                          </span>
                        )}
                      </div>
                    )}

                    {/* Hint / Explanation */}
                    {showHint && (
                      <div className="mt-3 p-3 bg-amber-100/70 border border-amber-300/80 rounded-xl text-xs space-y-1">
                        <p className="text-amber-950 font-bold">
                          Juist antwoord uit het boek: <span className="font-extrabold">{item.answer}</span>
                        </p>
                        <p className="text-amber-900/80">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
