import { DialogueLine, VocabWord } from '../chapterData';
import { ExerciseGroup, GrammarPoint, PronunciationSectionData, ReflectionData } from '../../types/lesson';

/**
 * Extra content added on top of a chapter's base data.
 * Dialogue lines get new ids after the last base line.
 * Vocabulary words with a Dutch word already in the chapter are skipped.
 * Exercise groups are added after the base groups.
 * Pronunciation replaces the base section when provided.
 */
export interface LessonSupplement {
  dialogue?: Omit<DialogueLine, 'id'>[];
  vocabulary?: VocabWord[];
  grammarPoints?: GrammarPoint[];
  exercises?: ExerciseGroup[];
  pronunciation?: PronunciationSectionData;
  reflection?: ReflectionData;
}

/** Short helper to write a vocabulary entry in one line. */
export function word(
  dutch: string,
  english: string,
  category: string,
  partOfSpeech: VocabWord['partOfSpeech'],
  article?: 'de' | 'het'
): VocabWord {
  const id = dutch.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  return { id: `${id}`, dutch, english, category, partOfSpeech, ...(article ? { article } : {}) };
}
