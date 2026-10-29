import { DialogueLine, VocabWord, ExerciseItem } from '../data/chapterData';

export interface GrammarPoint {
  id: string;
  title: string;
  summary: string;
  ruleExplanation: string;
  examples: {
    dutch: string;
    english: string;
    note?: string;
  }[];
  tables?: {
    headers: string[];
    rows: string[][];
  }[];
}

export interface ExerciseGroup {
  id: string;
  title: string;
  instruction: string;
  items: ExerciseItem[];
}

export interface ReadingText {
  title: string;
  subtitle?: string;
  content: string;
  vocabularyNotes?: { word: string; translation: string }[];
  questions?: ExerciseItem[];
}

export interface PronunciationSectionData {
  title: string;
  soundFocus: string;
  ruleExplanation?: string;
  explanation?: string;
  wordList: string[];
  minimalPairs?: {
    word1: string;
    word2: string;
    contrast?: string;
  }[];
}

export interface ChapterExam {
  title: string;
  passingScore?: number;
  questions: ExerciseItem[];
}

export interface CustomLessonData {
  id: string;
  chapterNumber: string;
  chapterTitle: string;
  description: string;
  language?: string;
  createdAt: number;
  dialogue: DialogueLine[];
  vocabulary: VocabWord[];
  grammarPoints?: GrammarPoint[];
  exercises?: ExerciseGroup[];
  readingText?: ReadingText;
  pronunciation?: PronunciationSectionData;
  exam?: ChapterExam;
  culturalOrPracticalNote?: string;
}
