/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Header, HAND_BUILT_CHAPTER_ID, PrimaryMode, TabType } from './components/Header';
import { DialogueViewer } from './components/DialogueViewer';
import { VocabSection } from './components/VocabSection';
import { ClockSection } from './components/ClockSection';
import { CalendarSection } from './components/CalendarSection';
import { SentenceStructureSection } from './components/SentenceStructureSection';
import { PossessivesSection } from './components/PossessivesSection';
import { FamilySection } from './components/FamilySection';
import { PronunciationSection } from './components/PronunciationSection';
import { MasterTest } from './components/MasterTest';
import { DynamicLessonViewer } from './components/DynamicLessonViewer';
import { GlobalVocabFlashcardsSection } from './components/GlobalVocabFlashcardsSection';
import { GlobalGrammarSection } from './components/GlobalGrammarSection';
import { BUILT_IN_LESSONS } from './data/allBuiltInLessons';

const COMPLETED_KEY = 'nederlands-leren:completed';
const SPEED_KEY = 'nederlands-leren:speed';
const DEFAULT_SPEED = 0.85;

/** Reads a value from localStorage. Falls back when storage is blocked or the data is corrupt. */
function readStorage<T>(key: string, fallback: T, parse: (raw: string) => T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : parse(raw);
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage can be full or blocked (private browsing). Progress still works for this session.
  }
}

export default function App() {
  const [primaryMode, setPrimaryMode] = useState<PrimaryMode>('lessons');
  const [currentTab, setCurrentTab] = useState<TabType>('dialogue');
  const [activeLessonId, setActiveLessonId] = useState<string>(HAND_BUILT_CHAPTER_ID);
  const [audioSpeed, setAudioSpeed] = useState<number>(() =>
    readStorage(SPEED_KEY, DEFAULT_SPEED, (raw) => {
      const value = parseFloat(raw);
      return Number.isFinite(value) ? value : DEFAULT_SPEED;
    })
  );
  const [completedIds, setCompletedIds] = useState<Set<string>>(() =>
    readStorage(COMPLETED_KEY, new Set<string>(), (raw) => new Set<string>(JSON.parse(raw)))
  );

  useEffect(() => {
    writeStorage(SPEED_KEY, String(audioSpeed));
  }, [audioSpeed]);

  useEffect(() => {
    writeStorage(COMPLETED_KEY, JSON.stringify([...completedIds]));
  }, [completedIds]);

  const handleRecordCompletion = (id: string) => {
    setCompletedIds((prev) => {
      if (prev.has(id)) return prev;
      return new Set([...prev, id]);
    });
  };

  const selectedLesson = BUILT_IN_LESSONS.find((lesson) => lesson.id === activeLessonId);
  const showHandBuiltChapter = activeLessonId === HAND_BUILT_CHAPTER_ID;

  // Keep the page title in sync with the chapter the reader is viewing.
  useEffect(() => {
    const title =
      primaryMode === 'lessons' && selectedLesson
        ? `${selectedLesson.chapterNumber}: ${selectedLesson.chapterTitle}`
        : primaryMode === 'vocab_flashcards'
          ? 'Woorden'
          : 'Grammatica';
    document.title = `${title} · Nederlands Leren`;
  }, [primaryMode, selectedLesson]);

  return (
    <div className="flex min-h-screen flex-col bg-stone-100/70 font-sans text-stone-900">
      <Header
        lessons={BUILT_IN_LESSONS}
        primaryMode={primaryMode}
        onSelectPrimaryMode={setPrimaryMode}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        audioSpeed={audioSpeed}
        onChangeSpeed={setAudioSpeed}
        completedCount={completedIds.size}
        activeLessonId={activeLessonId}
        onSelectLesson={setActiveLessonId}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {primaryMode === 'vocab_flashcards' && (
          <GlobalVocabFlashcardsSection customLessons={BUILT_IN_LESSONS} audioSpeed={audioSpeed} />
        )}

        {primaryMode === 'grammar' && (
          <GlobalGrammarSection customLessons={BUILT_IN_LESSONS} audioSpeed={audioSpeed} />
        )}

        {primaryMode === 'lessons' && (
          <>
            {!showHandBuiltChapter && selectedLesson && (
              <DynamicLessonViewer
                key={selectedLesson.id}
                lesson={selectedLesson}
                audioSpeed={audioSpeed}
                onRecordExerciseCompletion={handleRecordCompletion}
              />
            )}

            {showHandBuiltChapter && (
              <>
                {currentTab === 'dialogue' && (
                  <DialogueViewer audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'vocab' && (
                  <VocabSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'family' && (
                  <FamilySection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'clock' && (
                  <ClockSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'calendar' && (
                  <CalendarSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'sentence_structure' && (
                  <SentenceStructureSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'possessives' && (
                  <PossessivesSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'pronunciation' && (
                  <PronunciationSection audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
                {currentTab === 'master_test' && (
                  <MasterTest audioSpeed={audioSpeed} onRecordExerciseCompletion={handleRecordCompletion} />
                )}
              </>
            )}
          </>
        )}
      </main>

      <footer className="mt-auto border-t border-stone-200 bg-white/80 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-stone-500 sm:flex-row sm:px-6 lg:px-8">
          <span>Nederlands Leren · gebaseerd op Nederlands in gang (A1–A2)</span>
          <span>Voortgang en instellingen worden op dit apparaat bewaard.</span>
        </div>
      </footer>
    </div>
  );
}
