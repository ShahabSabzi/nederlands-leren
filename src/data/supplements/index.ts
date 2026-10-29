import { LessonSupplement } from './types';
import { CHAPTER_01_SUPPLEMENT } from './chapter01';
import { CHAPTER_03_SUPPLEMENT } from './chapter03';
import { CHAPTER_04_SUPPLEMENT } from './chapter04';
import { CHAPTER_05_SUPPLEMENT } from './chapter05';
import { CHAPTER_06_SUPPLEMENT } from './chapter06';
import { CHAPTER_07_SUPPLEMENT } from './chapter07';
import { CHAPTER_08_SUPPLEMENT } from './chapter08';
import { CHAPTER_09_SUPPLEMENT } from './chapter09';
import { CHAPTER_10_SUPPLEMENT } from './chapter10';
import { CHAPTER_11_SUPPLEMENT } from './chapter11';
import { CHAPTER_12_SUPPLEMENT } from './chapter12';
import { CHAPTER_13_SUPPLEMENT } from './chapter13';
import { CHAPTER_14_SUPPLEMENT } from './chapter14';
import { CHAPTER_15_SUPPLEMENT } from './chapter15';
import { CHAPTER_16_SUPPLEMENT } from './chapter16';
import { CHAPTER_17_SUPPLEMENT } from './chapter17';
import { CHAPTER_18_SUPPLEMENT } from './chapter18';

/** Keyed by lesson id. Chapter 2 is built by hand and has its own component. */
export const LESSON_SUPPLEMENTS: Record<string, LessonSupplement> = {
  hoofdstuk_1: CHAPTER_01_SUPPLEMENT,
  hoofdstuk_3: CHAPTER_03_SUPPLEMENT,
  hoofdstuk_4: CHAPTER_04_SUPPLEMENT,
  hoofdstuk_5: CHAPTER_05_SUPPLEMENT,
  hoofdstuk_6: CHAPTER_06_SUPPLEMENT,
  hoofdstuk_7: CHAPTER_07_SUPPLEMENT,
  hoofdstuk_8: CHAPTER_08_SUPPLEMENT,
  hoofdstuk_9: CHAPTER_09_SUPPLEMENT,
  hoofdstuk_10: CHAPTER_10_SUPPLEMENT,
  hoofdstuk_11: CHAPTER_11_SUPPLEMENT,
  hoofdstuk_12: CHAPTER_12_SUPPLEMENT,
  hoofdstuk_13: CHAPTER_13_SUPPLEMENT,
  hoofdstuk_14: CHAPTER_14_SUPPLEMENT,
  hoofdstuk_15: CHAPTER_15_SUPPLEMENT,
  hoofdstuk_16: CHAPTER_16_SUPPLEMENT,
  hoofdstuk_17: CHAPTER_17_SUPPLEMENT,
  hoofdstuk_18: CHAPTER_18_SUPPLEMENT,
};
