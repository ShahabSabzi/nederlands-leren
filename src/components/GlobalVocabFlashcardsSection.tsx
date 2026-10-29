import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  Volume2, 
  RotateCw, 
  Check, 
  X, 
  Star, 
  Shuffle, 
  Search, 
  Layers, 
  Table, 
  GraduationCap, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  ArrowUpDown, 
  HelpCircle,
  BookOpen,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { speakDutch } from '../utils/speech';
import { CustomLessonData } from '../types/lesson';
import { getAllVocabularyWords, EnrichedVocabWord } from '../utils/allContentAggregator';

interface GlobalVocabFlashcardsSectionProps {
  customLessons: CustomLessonData[];
  audioSpeed: number;
}

type ViewMode = 'flashcards' | 'table' | 'quiz';
type StatusFilter = 'all' | 'starred' | 'review' | 'mastered';
type CardDirection = 'nl_to_en' | 'en_to_nl';

const STORAGE_FAVORITES_KEY = 'nig_vocab_favorites';
const STORAGE_MASTERED_KEY = 'nig_vocab_mastered';
const STORAGE_REVIEW_KEY = 'nig_vocab_review';

export const GlobalVocabFlashcardsSection: React.FC<GlobalVocabFlashcardsSectionProps> = ({
  customLessons,
  audioSpeed,
}) => {
  const allWords = useMemo(() => getAllVocabularyWords(customLessons), [customLessons]);

  // View state
  const [viewMode, setViewMode] = useState<ViewMode>('flashcards');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all');
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'chapter' | 'alphabetical' | 'random'>('chapter');

  // Persistence sets
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_FAVORITES_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [masteredWords, setMasteredWords] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_MASTERED_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [reviewWords, setReviewWords] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_REVIEW_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardDirection, setCardDirection] = useState<CardDirection>('nl_to_en');
  const [showHint, setShowHint] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [quizAnswerChecked, setQuizAnswerChecked] = useState(false);

  // Sync persistence
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_MASTERED_KEY, JSON.stringify(Array.from(masteredWords)));
    } catch (e) {
      console.error(e);
    }
  }, [masteredWords]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_REVIEW_KEY, JSON.stringify(Array.from(reviewWords)));
    } catch (e) {
      console.error(e);
    }
  }, [reviewWords]);

  // Unique list of lessons for dropdown
  const lessonOptions = useMemo(() => {
    const map = new Map<string, { id: string; title: string; number: string; index: number }>();
    allWords.forEach(w => {
      if (!map.has(w.lessonId)) {
        map.set(w.lessonId, {
          id: w.lessonId,
          title: w.chapterTitle,
          number: w.chapterNumber,
          index: w.lessonIndex
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => a.index - b.index);
  }, [allWords]);

  // Filter and sort words
  const filteredWords = useMemo(() => {
    return allWords.filter(word => {
      const wordKey = `${word.lessonId}_${word.id || word.dutch}`;

      // Lesson filter
      if (selectedLessonId !== 'all' && word.lessonId !== selectedLessonId) {
        return false;
      }

      // Part of speech filter
      if (selectedPartOfSpeech !== 'all') {
        if (selectedPartOfSpeech === 'noun' && word.partOfSpeech !== 'noun') return false;
        if (selectedPartOfSpeech === 'verb' && word.partOfSpeech !== 'verb') return false;
        if (selectedPartOfSpeech === 'adjective' && word.partOfSpeech !== 'adjective') return false;
        if (selectedPartOfSpeech === 'phrase' && word.partOfSpeech !== 'phrase') return false;
        if (selectedPartOfSpeech === 'other' && ['noun', 'verb', 'adjective', 'phrase'].includes(word.partOfSpeech)) return false;
      }

      // Status filter
      if (selectedStatus === 'starred' && !favorites.has(wordKey)) return false;
      if (selectedStatus === 'mastered' && !masteredWords.has(wordKey)) return false;
      if (selectedStatus === 'review' && !reviewWords.has(wordKey)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesDutch = word.dutch.toLowerCase().includes(query);
        const matchesEnglish = word.english.toLowerCase().includes(query);
        const matchesArticle = word.article ? word.article.toLowerCase() === query : false;
        const matchesExample = word.exampleSentence ? word.exampleSentence.toLowerCase().includes(query) : false;
        if (!matchesDutch && !matchesEnglish && !matchesArticle && !matchesExample) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.dutch.localeCompare(b.dutch);
      }
      if (sortBy === 'chapter') {
        if (a.lessonIndex !== b.lessonIndex) return a.lessonIndex - b.lessonIndex;
        return a.dutch.localeCompare(b.dutch);
      }
      // 'random' handled separately via shuffle or keep current order
      return 0;
    });
  }, [allWords, selectedLessonId, selectedPartOfSpeech, selectedStatus, searchQuery, sortBy, favorites, masteredWords, reviewWords]);

  // Keep index within bounds
  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  }, [selectedLessonId, selectedPartOfSpeech, selectedStatus, searchQuery, sortBy]);

  const currentWord: EnrichedVocabWord | undefined = filteredWords[currentCardIndex];
  const currentWordKey = currentWord ? `${currentWord.lessonId}_${currentWord.id || currentWord.dutch}` : '';

  // Auto-play audio when card changes if enabled and in NL mode
  useEffect(() => {
    if (viewMode === 'flashcards' && currentWord && autoPlayAudio && !isFlipped && cardDirection === 'nl_to_en') {
      const fullUtterance = currentWord.article ? `${currentWord.article} ${currentWord.dutch}` : currentWord.dutch;
      speakDutch(fullUtterance, audioSpeed);
    }
  }, [currentCardIndex, viewMode, autoPlayAudio, cardDirection]);

  // Toggle favorite
  const toggleFavorite = (wordKey: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(wordKey)) {
        next.delete(wordKey);
      } else {
        next.add(wordKey);
      }
      return next;
    });
  };

  // Mark as Mastered
  const markMastered = (wordKey: string) => {
    setMasteredWords(prev => new Set(prev).add(wordKey));
    setReviewWords(prev => {
      const next = new Set(prev);
      next.delete(wordKey);
      return next;
    });
    handleNextCard();
  };

  // Mark as Review
  const markReview = (wordKey: string) => {
    setReviewWords(prev => new Set(prev).add(wordKey));
    setMasteredWords(prev => {
      const next = new Set(prev);
      next.delete(wordKey);
      return next;
    });
    handleNextCard();
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentCardIndex < filteredWords.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    } else {
      setCurrentCardIndex(filteredWords.length - 1);
    }
  };

  const handleShuffle = () => {
    setSortBy('random');
    // Fisher-Yates shuffle on current filtered set
    filteredWords.sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation for flashcards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'flashcards' || !currentWord) return;
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      } else if (e.key === '1') {
        e.preventDefault();
        markReview(currentWordKey);
      } else if (e.key === '2') {
        e.preventDefault();
        markMastered(currentWordKey);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        toggleFavorite(currentWordKey);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentWord, currentWordKey, filteredWords.length]);

  // Quiz Options generation
  const currentQuizWord = filteredWords[quizIndex];
  const quizOptions = useMemo(() => {
    if (!currentQuizWord) return [];
    const correct = currentQuizWord.english;
    const pool = allWords
      .map(w => w.english)
      .filter(eng => eng !== correct && eng.trim().length > 0);
    
    // Unique options
    const uniquePool = Array.from(new Set(pool)).sort(() => Math.random() - 0.5);
    const distractors = uniquePool.slice(0, 3);
    const combined = [correct, ...distractors].sort(() => Math.random() - 0.5);
    return combined;
  }, [currentQuizWord, allWords]);

  const handleSelectQuizOption = (option: string) => {
    if (quizAnswerChecked) return;
    setQuizSelectedOption(option);
    setQuizAnswerChecked(true);
    if (currentQuizWord && option === currentQuizWord.english) {
      setQuizScore(prev => prev + 1);
      setMasteredWords(prev => new Set(prev).add(`${currentQuizWord.lessonId}_${currentQuizWord.id || currentQuizWord.dutch}`));
    } else if (currentQuizWord) {
      setReviewWords(prev => new Set(prev).add(`${currentQuizWord.lessonId}_${currentQuizWord.id || currentQuizWord.dutch}`));
    }
  };

  const handleNextQuizQuestion = () => {
    setQuizAnswerChecked(false);
    setQuizSelectedOption(null);
    if (quizIndex < filteredWords.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setQuizIndex(0);
      setQuizScore(0);
    }
  };

  // Play audio for a word
  const playWordAudio = (word: EnrichedVocabWord, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const spokenText = word.article ? `${word.article} ${word.dutch}` : word.dutch;
    speakDutch(spokenText, audioSpeed);
  };

  const playSentenceAudio = (sentence: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakDutch(sentence, audioSpeed);
  };

  const totalMasteredCount = masteredWords.size;
  const totalReviewCount = reviewWords.size;
  const totalStarredCount = favorites.size;
  const overallProgressPercent = allWords.length > 0 ? Math.round((totalMasteredCount / allWords.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                Woordenlijst & Flitskaarten
              </span>
              <span className="text-xs text-stone-400">
                Alle {allWords.length} woorden uit Hoofdstuk 1 t/m 18
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Woordenschat Oefencentrum
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm">
              Oefen actieve herinnering met interactieve flitskaarten, zoek in het complete woordenboek, of test je kennis met de woordquiz.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-3 shrink-0">
            <div className="p-2 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-400">{allWords.length}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Woorden</div>
            </div>
            <div className="p-2 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">{totalMasteredCount}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Gekend ({overallProgressPercent}%)</div>
            </div>
            <div className="p-2 text-center">
              <div className="text-xl sm:text-2xl font-black text-rose-400">{totalReviewCount}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Oefenen</div>
            </div>
            <div className="p-2 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-300">{totalStarredCount}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Favorieten</div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
          <span className="text-xs text-stone-300 font-medium whitespace-nowrap">Totale beheersing:</span>
          <div className="flex-1 bg-stone-700/60 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${overallProgressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-emerald-300">{overallProgressPercent}%</span>
        </div>
      </div>

      {/* Control & Filter Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-4">
        {/* View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
            <button
              onClick={() => setViewMode('flashcards')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'flashcards'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Flitskaarten</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Table className="w-4 h-4 text-amber-400" />
              <span>Woordenlijst Tabel</span>
            </button>
            <button
              onClick={() => {
                setViewMode('quiz');
                setQuizIndex(0);
                setQuizScore(0);
                setQuizAnswerChecked(false);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                viewMode === 'quiz'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Woorden Quiz</span>
            </button>
          </div>

          {/* Quick Filter Info */}
          <div className="text-xs text-stone-500 font-medium">
            <span className="font-bold text-stone-800">{filteredWords.length}</span> woorden geselecteerd
          </div>
        </div>

        {/* Filter Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Lesson selector */}
          <div>
            <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1">
              Les / Hoofdstuk
            </label>
            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(e.target.value)}
              className="w-full text-xs font-bold text-stone-900 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              <option value="all">Alle Lessen (Hoofdstuk 1 – 18)</option>
              {lessonOptions.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.number}: {lesson.title}
                </option>
              ))}
            </select>
          </div>

          {/* Part of Speech */}
          <div>
            <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1">
              Woordsoort
            </label>
            <select
              value={selectedPartOfSpeech}
              onChange={(e) => setSelectedPartOfSpeech(e.target.value)}
              className="w-full text-xs font-bold text-stone-900 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              <option value="all">Alle Woordsoorten</option>
              <option value="noun">Zelfstandig naamwoord (de / het)</option>
              <option value="verb">Werkwoord (infinitief)</option>
              <option value="adjective">Bijvoeglijk naamwoord</option>
              <option value="phrase">Uitdrukking & Zin</option>
              <option value="other">Overig (voorzetsels, etc.)</option>
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1">
              Leerstatus
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as StatusFilter)}
              className="w-full text-xs font-bold text-stone-900 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            >
              <option value="all">Alle Status</option>
              <option value="starred">⭐ Alleen Favorieten ({favorites.size})</option>
              <option value="review">🔄 Alleen Nog Oefenen ({reviewWords.size})</option>
              <option value="mastered">✅ Alleen Gekend ({masteredWords.size})</option>
            </select>
          </div>

          {/* Search box */}
          <div>
            <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1">
              Zoeken
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek woord of vertaling..."
                className="w-full text-xs font-medium text-stone-900 bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: FLASHCARDS */}
      {viewMode === 'flashcards' && (
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredWords.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3">
              <HelpCircle className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="text-base font-bold text-stone-800">Geen woorden gevonden</h3>
              <p className="text-xs text-stone-500">
                Probeer de filters te verruimen of zoek op een andere term.
              </p>
              <button
                onClick={() => {
                  setSelectedLessonId('all');
                  setSelectedPartOfSpeech('all');
                  setSelectedStatus('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 cursor-pointer"
              >
                Reset alle filters
              </button>
            </div>
          ) : currentWord && (
            <>
              {/* Card Meta & Action Bar */}
              <div className="flex items-center justify-between text-xs text-stone-600 px-2">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900">
                    Kaart {currentCardIndex + 1}
                  </span>
                  <span>van</span>
                  <span className="font-bold">{filteredWords.length}</span>
                  <span className="text-stone-300">|</span>
                  <span className="text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    {currentWord.chapterNumber}: {currentWord.chapterTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Direction Switcher */}
                  <button
                    onClick={() => setCardDirection(prev => prev === 'nl_to_en' ? 'en_to_nl' : 'nl_to_en')}
                    className="flex items-center gap-1 px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-bold text-[11px] transition-colors cursor-pointer"
                    title="Wissel oefenrichting"
                  >
                    <ArrowUpDown className="w-3 h-3 text-stone-500" />
                    <span>{cardDirection === 'nl_to_en' ? 'NL ➔ EN' : 'EN ➔ NL'}</span>
                  </button>

                  {/* Shuffle Button */}
                  <button
                    onClick={handleShuffle}
                    className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors cursor-pointer"
                    title="Willekeurig schudden"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                  </button>

                  {/* Auto audio toggle */}
                  <button
                    onClick={() => setAutoPlayAudio(prev => !prev)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors cursor-pointer ${
                      autoPlayAudio ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-500'
                    }`}
                    title="Automatisch uitspreken"
                  >
                    <Volume2 className="w-3 h-3" />
                    <span className="hidden sm:inline">Audio auto</span>
                  </button>
                </div>
              </div>

              {/* Progress Bar for Card Deck */}
              <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-200"
                  style={{ width: `${Math.round(((currentCardIndex + 1) / filteredWords.length) * 100)}%` }}
                />
              </div>

              {/* THE FLASHCARD CONTAINER */}
              <div 
                onClick={() => setIsFlipped(prev => !prev)}
                className={`w-full min-h-[340px] sm:min-h-[380px] bg-white rounded-3xl p-6 sm:p-10 border-2 cursor-pointer shadow-md transition-all duration-300 relative flex flex-col justify-between select-none ${
                  isFlipped 
                    ? 'border-amber-400 bg-amber-50/20 shadow-amber-500/10' 
                    : 'border-stone-200 hover:border-amber-300'
                }`}
              >
                {/* Top card bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Article badge */}
                    {currentWord.article && (
                      <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-lg ${
                        currentWord.article === 'het'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {currentWord.article}
                      </span>
                    )}

                    {/* Part of Speech */}
                    <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg capitalize">
                      {currentWord.partOfSpeech}
                    </span>

                    {/* Status badges */}
                    {masteredWords.has(currentWordKey) && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Gekend
                      </span>
                    )}
                    {reviewWords.has(currentWordKey) && (
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200 flex items-center gap-1">
                        <RotateCw className="w-3 h-3" /> Oefenen
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio speech button */}
                    <button
                      onClick={(e) => playWordAudio(currentWord, e)}
                      className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-xs transition-transform active:scale-95 cursor-pointer"
                      title="Beluister Nederlandse uitspraak"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {/* Star button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(currentWordKey);
                      }}
                      className={`p-2 rounded-full transition-colors cursor-pointer ${
                        favorites.has(currentWordKey)
                          ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                          : 'text-stone-300 hover:text-amber-400 hover:bg-stone-100'
                      }`}
                      title="Markeer als favoriet"
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>

                {/* Card Center Content */}
                <div className="my-auto py-8 text-center space-y-4">
                  {!isFlipped ? (
                    /* FRONT OF CARD */
                    cardDirection === 'nl_to_en' ? (
                      <div>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
                          {currentWord.article && <span className="text-stone-400 font-semibold mr-2">{currentWord.article}</span>}
                          {currentWord.dutch}
                        </div>
                        {currentWord.plural && (
                          <div className="text-xs sm:text-sm text-stone-500 font-medium mt-2">
                            meervoud: <span className="font-bold text-stone-700">+{currentWord.plural}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="text-xs uppercase font-extrabold tracking-wider text-stone-400 mb-1">Engels</div>
                        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight">
                          {currentWord.english}
                        </div>
                      </div>
                    )
                  ) : (
                    /* BACK OF CARD */
                    cardDirection === 'nl_to_en' ? (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div>
                          <div className="text-xs uppercase font-extrabold tracking-wider text-amber-700 mb-1">Vertaling</div>
                          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900">
                            {currentWord.english}
                          </div>
                        </div>

                        {/* Plural information if available */}
                        {currentWord.plural && (
                          <div className="text-xs text-stone-600 bg-stone-100/70 inline-block px-3 py-1.5 rounded-xl">
                            Meervoud: <span className="font-bold text-stone-900">de {currentWord.plural}</span>
                          </div>
                        )}

                        {/* Example sentence */}
                        {currentWord.exampleSentence && (
                          <div className="max-w-xl mx-auto bg-amber-500/10 border border-amber-200/80 rounded-2xl p-4 text-left space-y-1 mt-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                                Voorbeeldzin
                              </span>
                              <button
                                onClick={(e) => playSentenceAudio(currentWord.exampleSentence!, e)}
                                className="p-1 text-amber-800 hover:text-amber-950 cursor-pointer"
                                title="Luister voorbeeldzin"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-xs sm:text-sm font-bold text-stone-900">
                              {currentWord.exampleSentence}
                            </p>
                            {currentWord.exampleEnglish && (
                              <p className="text-xs text-stone-600 italic">
                                {currentWord.exampleEnglish}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Tip / Note */}
                        {currentWord.tip && (
                          <div className="text-xs text-amber-900 bg-amber-100/60 px-3 py-1.5 rounded-xl max-w-md mx-auto">
                            💡 {currentWord.tip}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div>
                          <div className="text-xs uppercase font-extrabold tracking-wider text-amber-700 mb-1">Nederlands</div>
                          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900">
                            {currentWord.article && <span className="text-stone-400 font-semibold mr-2">{currentWord.article}</span>}
                            {currentWord.dutch}
                          </div>
                          {currentWord.plural && (
                            <div className="text-xs text-stone-500 mt-1">
                              Meervoud: de {currentWord.plural}
                            </div>
                          )}
                        </div>

                        {currentWord.exampleSentence && (
                          <div className="max-w-xl mx-auto bg-stone-100 rounded-2xl p-4 text-left space-y-1 mt-3">
                            <p className="text-xs sm:text-sm font-bold text-stone-900">
                              {currentWord.exampleSentence}
                            </p>
                            {currentWord.exampleEnglish && (
                              <p className="text-xs text-stone-600 italic">
                                {currentWord.exampleEnglish}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>

                {/* Card Bottom Hint & Flip indicator */}
                <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline">Druk op spatiebalk of klik om te draaien</span>
                    <span className="sm:hidden">Tik om te draaien</span>
                  </div>

                  <div className="flex items-center gap-1 text-stone-500 font-medium">
                    <RotateCw className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isFlipped ? 'Voorkant' : 'Achterkant'}</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS (Practice grading) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => markReview(currentWordKey)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-extrabold text-sm transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <X className="w-4 h-4 text-rose-500" />
                  <span>Nog oefenen (1)</span>
                </button>

                <button
                  onClick={() => markMastered(currentWordKey)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-extrabold text-sm transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Gekend! (2)</span>
                </button>
              </div>

              {/* Bottom Navigation arrows */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevCard}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorige</span>
                </button>

                <button
                  onClick={() => {
                    setFavorites(new Set());
                    setMasteredWords(new Set());
                    setReviewWords(new Set());
                  }}
                  className="text-stone-400 hover:text-stone-600 text-[11px] underline cursor-pointer"
                >
                  Reset voortgang
                </button>

                <button
                  onClick={handleNextCard}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Volgende</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* VIEW MODE 2: FULL WORD LIST TABLE */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Volledige Woordenlijst ({filteredWords.length} woorden)
              </h3>
              <p className="text-xs text-stone-500">
                Klik op het luidsprekericoon om de uitspraak direct te beluisteren.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const csvContent = filteredWords
                    .map(w => `"${w.chapterNumber}","${w.article || ''} ${w.dutch}","${w.english}","${w.partOfSpeech}","${w.exampleSentence || ''}"`)
                    .join('\n');
                  const blob = new Blob([`"Hoofdstuk","Nederlands","Engels","Woordsoort","Voorbeeldzin"\n` + csvContent], { type: 'text/csv' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `nederlands_in_gang_woorden_${selectedLessonId}.csv`;
                  a.click();
                }}
                className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Exporteer CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 text-[11px] font-extrabold uppercase tracking-wider text-stone-500 border-b border-stone-200">
                  <th className="py-3 px-4 w-12 text-center">Audio</th>
                  <th className="py-3 px-4">Nederlands</th>
                  <th className="py-3 px-4">Engelse Vertaling</th>
                  <th className="py-3 px-4 hidden md:table-cell">Woordsoort</th>
                  <th className="py-3 px-4 hidden sm:table-cell">Les</th>
                  <th className="py-3 px-4 hidden lg:table-cell">Voorbeeldzin</th>
                  <th className="py-3 px-4 text-center w-20">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs">
                {filteredWords.map((word) => {
                  const key = `${word.lessonId}_${word.id || word.dutch}`;
                  const isFav = favorites.has(key);
                  const isMastered = masteredWords.has(key);

                  return (
                    <tr 
                      key={key}
                      className="hover:bg-amber-50/40 transition-colors group"
                    >
                      {/* Audio Play Button */}
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={(e) => playWordAudio(word, e)}
                          className="p-1.5 rounded-full bg-stone-100 group-hover:bg-amber-500 text-stone-700 group-hover:text-stone-950 transition-colors cursor-pointer"
                          title="Beluister"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>

                      {/* Dutch Word + Article */}
                      <td className="py-3 px-4 font-bold text-stone-900">
                        <div className="flex items-center gap-1.5">
                          {word.article && (
                            <span className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded ${
                              word.article === 'het'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {word.article}
                            </span>
                          )}
                          <span className="text-sm font-extrabold">{word.dutch}</span>
                        </div>
                        {word.plural && (
                          <div className="text-[11px] text-stone-400 font-normal">
                            mv: +{word.plural}
                          </div>
                        )}
                      </td>

                      {/* English Translation */}
                      <td className="py-3 px-4 font-medium text-stone-800">
                        {word.english}
                        {word.tip && (
                          <div className="text-[11px] text-amber-700 italic">
                            💡 {word.tip}
                          </div>
                        )}
                      </td>

                      {/* Part of Speech */}
                      <td className="py-3 px-4 text-stone-500 hidden md:table-cell">
                        <span className="px-2 py-0.5 bg-stone-100 rounded-md font-medium text-[11px]">
                          {word.partOfSpeech}
                        </span>
                      </td>

                      {/* Lesson */}
                      <td className="py-3 px-4 text-stone-600 hidden sm:table-cell">
                        <span className="text-[11px] font-bold text-stone-700">
                          {word.chapterNumber}
                        </span>
                      </td>

                      {/* Example sentence */}
                      <td className="py-3 px-4 text-stone-600 hidden lg:table-cell max-w-xs truncate">
                        {word.exampleSentence ? (
                          <button
                            onClick={() => playSentenceAudio(word.exampleSentence!)}
                            className="text-left hover:text-amber-800 flex items-center gap-1 cursor-pointer group/sent"
                            title="Klik om voorbeeldzin te beluisteren"
                          >
                            <Volume2 className="w-3 h-3 text-stone-400 group-hover/sent:text-amber-600 shrink-0" />
                            <span className="truncate">{word.exampleSentence}</span>
                          </button>
                        ) : (
                          <span className="text-stone-300">—</span>
                        )}
                      </td>

                      {/* Star and Status */}
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => toggleFavorite(key)}
                            className={`p-1 rounded-md transition-colors cursor-pointer ${
                              isFav ? 'text-amber-500' : 'text-stone-300 hover:text-amber-400'
                            }`}
                            title="Favoriet"
                          >
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </button>
                          <button
                            onClick={() => isMastered ? markReview(key) : markMastered(key)}
                            className={`p-1 rounded-md transition-colors cursor-pointer ${
                              isMastered ? 'text-emerald-600' : 'text-stone-300 hover:text-emerald-500'
                            }`}
                            title={isMastered ? 'Gemarkeerd als gekend' : 'Markeer als gekend'}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW MODE 3: VOCABULARY QUIZ */}
      {viewMode === 'quiz' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {filteredWords.length < 4 ? (
            <div className="bg-white rounded-3xl p-8 text-center border border-stone-200">
              <p className="text-xs text-stone-600">Selecteer minstens 4 woorden via de filters om de quiz te spelen.</p>
            </div>
          ) : currentQuizWord && (
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Quiz Header */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
                    Vraag {quizIndex + 1} van {Math.min(filteredWords.length, 25)}
                  </span>
                  <h3 className="text-base font-bold text-stone-900">Wat is de juiste betekenis?</h3>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl text-xs font-bold text-emerald-800">
                  Score: {quizScore}
                </div>
              </div>

              {/* Question Word Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  {currentQuizWord.article && (
                    <span className="text-xs font-black uppercase px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                      {currentQuizWord.article}
                    </span>
                  )}
                  <span className="text-2xl sm:text-3xl font-black text-stone-900">
                    {currentQuizWord.dutch}
                  </span>
                  <button
                    onClick={() => playWordAudio(currentQuizWord)}
                    className="p-2 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-xs cursor-pointer"
                    title="Luister uitspraak"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-stone-500 font-medium">
                  {currentQuizWord.chapterNumber}: {currentQuizWord.chapterTitle} · {currentQuizWord.partOfSpeech}
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizOptions.map((option, idx) => {
                  const isSelected = quizSelectedOption === option;
                  const isCorrect = option === currentQuizWord.english;

                  let btnStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200';
                  if (quizAnswerChecked) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                    } else {
                      btnStyle = 'bg-stone-100 text-stone-400 border-stone-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={quizAnswerChecked}
                      onClick={() => handleSelectQuizOption(option)}
                      className={`p-4 rounded-2xl border-2 text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {quizAnswerChecked && isCorrect && <Check className="w-4 h-4 text-white" />}
                        {quizAnswerChecked && isSelected && !isCorrect && <X className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback and next button */}
              {quizAnswerChecked && (
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs">
                    {quizSelectedOption === currentQuizWord.english ? (
                      <span className="font-extrabold text-emerald-600">Uitstekend! Dat klopt helemaal.</span>
                    ) : (
                      <span className="font-extrabold text-rose-600">
                        Helaas! Het juiste antwoord is: <strong>{currentQuizWord.english}</strong>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleNextQuizQuestion}
                    className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs cursor-pointer shadow-xs"
                  >
                    Volgende vraag →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
