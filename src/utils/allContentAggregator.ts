import { CustomLessonData, GrammarPoint } from '../types/lesson';
import { VocabWord } from '../data/chapterData';
import { BUILT_IN_LESSONS } from '../data/allBuiltInLessons';

export interface EnrichedVocabWord extends VocabWord {
  lessonId: string;
  chapterNumber: string;
  chapterTitle: string;
  lessonIndex: number;
}

export interface EnrichedGrammarPoint extends GrammarPoint {
  lessonId: string;
  chapterNumber: string;
  chapterTitle: string;
  lessonIndex: number;
  description?: string;
}

/**
 * Aggregates all vocabulary words across all built-in chapters (1-18) and custom lessons
 */
export function getAllVocabularyWords(customLessons: CustomLessonData[] = []): EnrichedVocabWord[] {
  const builtInIds = new Set(BUILT_IN_LESSONS.map((l) => l.id));
  const allLessons: CustomLessonData[] = [
    ...BUILT_IN_LESSONS,
    ...customLessons.filter((l) => !builtInIds.has(l.id))
  ];

  const enrichedWords: EnrichedVocabWord[] = [];
  const seenKeys = new Set<string>();

  allLessons.forEach((lesson, index) => {
    (lesson.vocabulary || []).forEach((word) => {
      // Unique key combining lesson and word id/dutch
      const uniqueKey = `${lesson.id}_${word.id || word.dutch}`;
      if (!seenKeys.has(uniqueKey)) {
        seenKeys.add(uniqueKey);
        enrichedWords.push({
          ...word,
          lessonId: lesson.id,
          chapterNumber: lesson.chapterNumber,
          chapterTitle: lesson.chapterTitle,
          lessonIndex: index + 1
        });
      }
    });
  });

  return enrichedWords;
}

/**
 * Aggregates all grammar topics across all built-in chapters (1-18) and custom lessons
 */
export function getAllGrammarPoints(customLessons: CustomLessonData[] = []): EnrichedGrammarPoint[] {
  const builtInIds = new Set(BUILT_IN_LESSONS.map((l) => l.id));
  const allLessons: CustomLessonData[] = [
    ...BUILT_IN_LESSONS,
    ...customLessons.filter((l) => !builtInIds.has(l.id))
  ];

  const enrichedGrammar: EnrichedGrammarPoint[] = [];

  allLessons.forEach((lesson, index) => {
    (lesson.grammarPoints || []).forEach((gp) => {
      enrichedGrammar.push({
        ...gp,
        lessonId: lesson.id,
        chapterNumber: lesson.chapterNumber,
        chapterTitle: lesson.chapterTitle,
        lessonIndex: index + 1,
        description: lesson.description
      });
    });
  });

  return enrichedGrammar;
}
