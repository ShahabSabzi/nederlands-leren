import React, { useState, useMemo } from 'react';
import { VOCABULARY_LIST, VocabWord } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { Volume2, Search, RotateCw, CheckCircle2, XCircle, Sparkles, Filter, Layers, BookCheck, Shuffle } from 'lucide-react';

interface VocabSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const VocabSection: React.FC<VocabSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeMode, setActiveMode] = useState<'list' | 'flashcards' | 'match'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [knownWordIds, setKnownWordIds] = useState<Set<string>>(new Set());

  // Match Game state
  const [matchGameActive, setMatchGameActive] = useState(false);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [selectedDutchId, setSelectedDutchId] = useState<string | null>(null);
  const [selectedEnglishId, setSelectedEnglishId] = useState<string | null>(null);
  const [matchPairs, setMatchPairs] = useState<{ dutch: VocabWord[]; english: VocabWord[] }>({
    dutch: [],
    english: []
  });

  // Filtered words
  const filteredWords = useMemo(() => {
    return VOCABULARY_LIST.filter(word => {
      const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
      const matchesSearch = 
        word.dutch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Flashcard words list
  const flashcardWords = useMemo(() => {
    if (selectedCategory === 'all') return VOCABULARY_LIST;
    return VOCABULARY_LIST.filter(w => w.category === selectedCategory);
  }, [selectedCategory]);

  const currentCard = flashcardWords[flashcardIndex] || flashcardWords[0];

  const handleNextCard = (learned: boolean) => {
    if (currentCard && learned) {
      setKnownWordIds(prev => new Set([...prev, currentCard.id]));
      if (onRecordExerciseCompletion) {
        onRecordExerciseCompletion(`flashcard_${currentCard.id}`);
      }
    }
    setIsCardFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % flashcardWords.length);
  };

  const handleStartMatchGame = () => {
    // Pick 6 random words
    const shuffled = [...VOCABULARY_LIST].sort(() => 0.5 - Math.random()).slice(0, 6);
    const shuffledDutch = [...shuffled].sort(() => 0.5 - Math.random());
    const shuffledEnglish = [...shuffled].sort(() => 0.5 - Math.random());
    setMatchPairs({ dutch: shuffledDutch, english: shuffledEnglish });
    setMatchedIds(new Set());
    setSelectedDutchId(null);
    setSelectedEnglishId(null);
    setMatchGameActive(true);
  };

  const handleSelectDutchMatch = (id: string) => {
    if (matchedIds.has(id)) return;
    const word = VOCABULARY_LIST.find(w => w.id === id);
    if (word) speakDutch(word.dutch, audioSpeed);

    if (selectedEnglishId) {
      // Check match
      if (selectedEnglishId === id) {
        setMatchedIds(prev => new Set([...prev, id]));
        setSelectedDutchId(null);
        setSelectedEnglishId(null);
        if (matchedIds.size + 1 === matchPairs.dutch.length && onRecordExerciseCompletion) {
          onRecordExerciseCompletion('match_game_complete');
        }
      } else {
        setSelectedDutchId(id);
      }
    } else {
      setSelectedDutchId(id);
    }
  };

  const handleSelectEnglishMatch = (id: string) => {
    if (matchedIds.has(id)) return;
    if (selectedDutchId) {
      if (selectedDutchId === id) {
        setMatchedIds(prev => new Set([...prev, id]));
        setSelectedDutchId(null);
        setSelectedEnglishId(null);
        if (matchedIds.size + 1 === matchPairs.dutch.length && onRecordExerciseCompletion) {
          onRecordExerciseCompletion('match_game_complete');
        }
      } else {
        setSelectedEnglishId(id);
      }
    } else {
      setSelectedEnglishId(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controller */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <BookCheck className="w-4 h-4" />
              <span>2.2 & 2.3 Woordenlijst</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Woordenschat & Geheugentraining
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Leer alle woorden uit hoofdstuk 2 met uitspraak, voorbeelden en interactieve flashcards.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveMode('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeMode === 'list'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Woordenboek ({filteredWords.length})
            </button>
            <button
              onClick={() => setActiveMode('flashcards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeMode === 'flashcards'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flitskaarten</span>
            </button>
            <button
              onClick={() => {
                setActiveMode('match');
                if (!matchGameActive) handleStartMatchGame();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeMode === 'match'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Koppelspel</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        {activeMode === 'list' && (
          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Zoek in het Nederlands of Engels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 mr-1" />
              {[
                { id: 'all', label: 'Alles' },
                { id: 'canteen', label: 'Kantine' },
                { id: 'family', label: 'Familie' },
                { id: 'time', label: 'Tijd' },
                { id: 'description', label: 'Uiterlijk' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mode 1: Comprehensive Dictionary Table */}
      {activeMode === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-amber-300 transition-all shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    {word.article && (
                      <span
                        className={`text-[11px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          word.article === 'het'
                            ? 'bg-sky-100 text-sky-800 border border-sky-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {word.article}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {word.dutch}
                    </h3>
                    {word.plural && (
                      <span className="text-xs text-stone-400 font-normal">
                        (mv: {word.plural})
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const phrase = word.article ? `${word.article} ${word.dutch}` : word.dutch;
                      speakDutch(phrase, audioSpeed);
                    }}
                    className="p-1.5 rounded-lg bg-stone-50 hover:bg-amber-100 text-stone-600 hover:text-amber-900 transition-colors shrink-0"
                    title="Uitspraak beluisteren"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                  {word.english}
                </p>

                {word.exampleSentence && (
                  <div className="mt-2.5 pt-2 border-t border-stone-100 text-xs">
                    <p className="text-stone-800 font-medium">"{word.exampleSentence}"</p>
                    {word.exampleEnglish && (
                      <p className="text-stone-400 italic mt-0.5">{word.exampleEnglish}</p>
                    )}
                  </div>
                )}
              </div>

              {word.tip && (
                <div className="mt-2 text-[11px] text-amber-800 bg-amber-50/70 border border-amber-200/60 rounded px-2 py-1">
                  💡 {word.tip}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Mode 2: Interactive Flashcards */}
      {activeMode === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-4">
          {/* Card counter */}
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-2">
            <span>
              Kaart {flashcardIndex + 1} van {flashcardWords.length}
            </span>
            <span>
              Bekend: <strong className="text-emerald-700">{knownWordIds.size}</strong> woorden
            </span>
          </div>

          {/* Flashcard Box */}
          <div
            onClick={() => setIsCardFlipped(!isCardFlipped)}
            className="w-full min-h-[280px] bg-white rounded-3xl border-2 border-stone-200 hover:border-amber-400 p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 shadow-md relative select-none"
          >
            <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-stone-400">
              {isCardFlipped ? 'Betekenis (Engels)' : 'Nederlands (Klik om te draaien)'}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (currentCard) {
                  const phrase = currentCard.article ? `${currentCard.article} ${currentCard.dutch}` : currentCard.dutch;
                  speakDutch(phrase, audioSpeed);
                }
              }}
              className="absolute top-4 right-4 p-2 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 transition-colors"
              title="Beluister uitspraak"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            {!isCardFlipped ? (
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  {currentCard?.article && (
                    <span
                      className={`text-sm font-bold px-2 py-0.5 rounded uppercase ${
                        currentCard.article === 'het'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {currentCard.article}
                    </span>
                  )}
                  <h3 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                    {currentCard?.dutch}
                  </h3>
                </div>
                {currentCard?.plural && (
                  <p className="text-xs text-stone-400">
                    meervoud: {currentCard.plural}
                  </p>
                )}
                <p className="text-xs text-stone-400 italic">
                  (Klik om vertaling te tonen)
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-amber-900">
                  {currentCard?.english}
                </h3>
                {currentCard?.exampleSentence && (
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs max-w-sm">
                    <p className="text-stone-800 font-medium">"{currentCard.exampleSentence}"</p>
                    <p className="text-stone-400 italic mt-0.5">{currentCard.exampleEnglish}</p>
                  </div>
                )}
                {currentCard?.tip && (
                  <p className="text-[11px] text-amber-800 max-w-xs">
                    💡 {currentCard.tip}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Flashcard Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => handleNextCard(false)}
              className="flex-1 py-3 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              <span>Nog een keer oefenen</span>
            </button>
            <button
              onClick={() => handleNextCard(true)}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Ik ken dit woord!</span>
            </button>
          </div>
        </div>
      )}

      {/* Mode 3: Match Game */}
      {activeMode === 'match' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Koppelspel: Verbind de woorden
              </h3>
              <p className="text-xs text-stone-500">
                Klik eerst op een Nederlands woord en daarna op de juiste Engelse betekenis.
              </p>
            </div>
            <button
              onClick={handleStartMatchGame}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Nieuwe set</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Dutch Words Column */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                Nederlands
              </p>
              {matchPairs.dutch.map((word) => {
                const isMatched = matchedIds.has(word.id);
                const isSelected = selectedDutchId === word.id;

                return (
                  <button
                    key={word.id}
                    disabled={isMatched}
                    onClick={() => handleSelectDutchMatch(word.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                      isMatched
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 opacity-60 line-through'
                        : isSelected
                        ? 'bg-amber-100 text-amber-950 border-amber-500 ring-2 ring-amber-300'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    {word.article ? `${word.article} ${word.dutch}` : word.dutch}
                  </button>
                );
              })}
            </div>

            {/* English Words Column */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                Engels
              </p>
              {matchPairs.english.map((word) => {
                const isMatched = matchedIds.has(word.id);
                const isSelected = selectedEnglishId === word.id;

                return (
                  <button
                    key={word.id}
                    disabled={isMatched}
                    onClick={() => handleSelectEnglishMatch(word.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                      isMatched
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300 opacity-60 line-through'
                        : isSelected
                        ? 'bg-amber-100 text-amber-950 border-amber-500 ring-2 ring-amber-300'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    {word.english}
                  </button>
                );
              })}
            </div>
          </div>

          {matchedIds.size === matchPairs.dutch.length && matchPairs.dutch.length > 0 && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-2">
              <p className="text-sm font-bold text-emerald-900">
                🎉 Geweldig! Alle paren zijn gekoppeld!
              </p>
              <button
                onClick={handleStartMatchGame}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                Speel nog een ronde
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
