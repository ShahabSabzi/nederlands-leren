import { CustomLessonData } from '../types/lesson';
import { CHAPTER_1_DATA } from './chapter1Data';
import { CHAPTER_2_DATA } from './chapter2Data';
import { CHAPTER_3_DATA } from './chapter3Data';
import { CHAPTER_4_DATA } from './chapter4Data';
import { CHAPTER_5_DATA } from './chapter5Data';
import { CHAPTER_6_DATA } from './chapter6Data';
import { CHAPTER_7_DATA } from './chapter7Data';
import { CHAPTER_8_DATA } from './chapter8Data';
import { CHAPTER_9_DATA } from './chapter9Data';
import { CHAPTER_10_DATA } from './chapter10Data';
import { CHAPTER_11_DATA } from './chapter11Data';
import { CHAPTER_12_DATA } from './chapter12Data';
import { CHAPTER_13_DATA } from './chapter13Data';
import { CHAPTER_14_DATA } from './chapter14Data';
import { CHAPTER_15_DATA } from './chapter15Data';
import { CHAPTER_16_DATA } from './chapter16Data';
import { CHAPTER_17_DATA } from './chapter17Data';
import { CHAPTER_18_DATA } from './chapter18Data';
import { LESSON_SUPPLEMENTS } from './supplements';
import { LessonSupplement } from './supplements/types';

/** Adds supplement content to a base chapter without changing the base data. */
function applySupplement(base: CustomLessonData): CustomLessonData {
  const extra = LESSON_SUPPLEMENTS[base.id];
  if (!extra) return base;

  const lastDialogueId = base.dialogue.reduce((max, line) => Math.max(max, line.id), 0);
  const addedDialogue = (extra.dialogue || []).map((line, index) => ({
    ...line,
    id: lastDialogueId + index + 1,
  }));

  const knownWords = new Set(base.vocabulary.map((word) => word.dutch.toLowerCase()));
  const addedVocabulary = (extra.vocabulary || []).filter((word) => {
    const key = word.dutch.toLowerCase();
    if (knownWords.has(key)) return false;
    knownWords.add(key);
    return true;
  });

  return {
    ...base,
    dialogue: [...base.dialogue, ...addedDialogue],
    vocabulary: [...base.vocabulary, ...addedVocabulary],
    grammarPoints: [...(base.grammarPoints || []), ...(extra.grammarPoints || [])],
    exercises: [...(base.exercises || []), ...(extra.exercises || [])],
    pronunciation: extra.pronunciation || base.pronunciation,
    reflection: extra.reflection || base.reflection,
  };
}

const BASE_LESSONS: CustomLessonData[] = [
  CHAPTER_1_DATA,
  CHAPTER_2_DATA,
  CHAPTER_3_DATA,
  CHAPTER_4_DATA,
  CHAPTER_5_DATA,
  CHAPTER_6_DATA,
  CHAPTER_7_DATA,
  CHAPTER_8_DATA,
  CHAPTER_9_DATA,
  CHAPTER_10_DATA,
  CHAPTER_11_DATA,
  CHAPTER_12_DATA,
  CHAPTER_13_DATA,
  CHAPTER_14_DATA,
  CHAPTER_15_DATA,
  CHAPTER_16_DATA,
  CHAPTER_17_DATA,
  CHAPTER_18_DATA,
];

export const BUILT_IN_LESSONS: CustomLessonData[] = BASE_LESSONS.map(applySupplement);
