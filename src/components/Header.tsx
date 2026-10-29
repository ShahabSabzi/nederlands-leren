import React from 'react';
import {
  Volume2,
  BookOpen,
  Clock,
  Calendar,
  Users,
  SpellCheck,
  CheckCircle2,
  Award,
  Layers,
  Library,
  Trophy,
  ListChecks,
  Globe2,
} from 'lucide-react';
import { CustomLessonData } from '../types/lesson';

export type PrimaryMode = 'lessons' | 'vocab_flashcards' | 'grammar';

export type TabType =
  | 'dialogue'
  | 'vocab'
  | 'family'
  | 'clock'
  | 'calendar'
  | 'sentence_structure'
  | 'possessives'
  | 'pronunciation'
  | 'master_test'
  | 'extra_oefeningen'
  | 'reflectie';

/** Chapter 2 has hand-built sections, so it gets the sub-navigation bar. */
export const HAND_BUILT_CHAPTER_ID = 'hoofdstuk_2';

interface HeaderProps {
  lessons: CustomLessonData[];
  primaryMode: PrimaryMode;
  onSelectPrimaryMode: (mode: PrimaryMode) => void;
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  audioSpeed: number;
  onChangeSpeed: (speed: number) => void;
  completedCount: number;
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
}

const CHAPTER_TABS: { id: TabType; label: string; icon: React.ElementType }[] = [
  { id: 'dialogue', label: 'Dialoog', icon: BookOpen },
  { id: 'vocab', label: 'Woordenlijst', icon: SpellCheck },
  { id: 'family', label: 'Familie & Uiterlijk', icon: Users },
  { id: 'clock', label: 'De Klok', icon: Clock },
  { id: 'calendar', label: 'Dagen & Tijd', icon: Calendar },
  { id: 'sentence_structure', label: 'Zinsbouw & Vraagwoorden', icon: SpellCheck },
  { id: 'possessives', label: 'Bezittelijke Voornaamwoorden', icon: CheckCircle2 },
  { id: 'pronunciation', label: 'Uitspraak a – aa', icon: Volume2 },
  { id: 'master_test', label: 'Eindtoets', icon: Award },
  { id: 'extra_oefeningen', label: 'Extra oefeningen', icon: ListChecks },
  { id: 'reflectie', label: 'Reflectie & Cultuur', icon: Globe2 },
];

const MODE_BUTTONS: { id: PrimaryMode; label: string; icon: React.ElementType }[] = [
  { id: 'lessons', label: 'Lessen', icon: BookOpen },
  { id: 'vocab_flashcards', label: 'Woorden', icon: Layers },
  { id: 'grammar', label: 'Grammatica', icon: Library },
];

export const Header: React.FC<HeaderProps> = ({
  lessons,
  primaryMode,
  onSelectPrimaryMode,
  currentTab,
  onSelectTab,
  audioSpeed,
  onChangeSpeed,
  completedCount,
  activeLessonId,
  onSelectLesson,
}) => {
  const showChapterTabs = primaryMode === 'lessons' && activeLessonId === HAND_BUILT_CHAPTER_ID;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="icons/icon-192.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl shadow-xs"
            />
            <div className="leading-tight">
              <h1 className="text-base font-black tracking-tight text-stone-900">Nederlands Leren</h1>
              <p className="hidden text-[11px] font-medium text-stone-500 sm:block">Nederlands in gang · hoofdstuk 1 t/m 18</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div role="tablist" aria-label="Onderdelen" className="flex items-center gap-1 rounded-xl border border-stone-200 bg-stone-100 p-1">
              {MODE_BUTTONS.map((mode) => {
                const Icon = mode.icon;
                const isActive = primaryMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onSelectPrimaryMode(mode.id)}
                    className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-extrabold transition-all ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'text-stone-600 hover:bg-stone-200/60 hover:text-stone-900'
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>

            {primaryMode === 'lessons' && (
              <select
                value={activeLessonId}
                onChange={(e) => onSelectLesson(e.target.value)}
                aria-label="Kies een hoofdstuk"
                className="max-w-[220px] cursor-pointer truncate rounded-xl border border-stone-300 bg-stone-50 px-2.5 py-1.5 text-xs font-bold text-stone-900 shadow-2xs hover:bg-stone-100 focus:ring-2 focus:ring-amber-500 focus:outline-hidden sm:max-w-xs sm:text-sm"
              >
                {lessons.map((lesson) => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.chapterNumber}: {lesson.chapterTitle}
                  </option>
                ))}
              </select>
            )}

            <div className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-100 px-2.5 py-1.5 text-xs text-stone-800">
              <Volume2 className="h-3.5 w-3.5 text-stone-600" aria-hidden="true" />
              <select
                aria-label="Spreeksnelheid"
                value={audioSpeed}
                onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
                className="cursor-pointer bg-transparent text-xs font-semibold text-stone-800 focus:outline-hidden"
              >
                <option value="0.75">Langzaam (0.75x)</option>
                <option value="0.85">Normaal (0.85x)</option>
                <option value="1">Snel (1.0x)</option>
              </select>
            </div>

            <div
              className="flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-900"
              title="Aantal oefeningen dat je goed hebt gemaakt"
            >
              <Trophy className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
              <span>{completedCount} goed</span>
            </div>
          </div>
        </div>

        {showChapterTabs && (
          <nav aria-label="Onderdelen van hoofdstuk 2" className="flex gap-1 overflow-x-auto border-t border-stone-100 py-1.5">
            {CHAPTER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
