import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Bookmark, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Printer, 
  Eye, 
  Filter,
  Check,
  List
} from 'lucide-react';
import { speakDutch } from '../utils/speech';
import { CustomLessonData, GrammarPoint } from '../types/lesson';
import { getAllGrammarPoints, EnrichedGrammarPoint } from '../utils/allContentAggregator';

interface GlobalGrammarSectionProps {
  customLessons: CustomLessonData[];
  audioSpeed: number;
}

const STORAGE_STUDIED_GRAMMAR_KEY = 'nig_grammar_studied';

export const GlobalGrammarSection: React.FC<GlobalGrammarSectionProps> = ({
  customLessons,
  audioSpeed,
}) => {
  const allGrammar = useMemo(() => getAllGrammarPoints(customLessons), [customLessons]);

  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);

  // Studied topics tracking
  const [studiedTopics, setStudiedTopics] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_STUDIED_GRAMMAR_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggleStudied = (topicKey: string) => {
    setStudiedTopics(prev => {
      const next = new Set(prev);
      if (next.has(topicKey)) {
        next.delete(topicKey);
      } else {
        next.add(topicKey);
      }
      try {
        localStorage.setItem(STORAGE_STUDIED_GRAMMAR_KEY, JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Unique chapters list for quick navigation chips
  const chaptersList = useMemo(() => {
    const map = new Map<string, { id: string; number: string; title: string; count: number; index: number }>();
    allGrammar.forEach(g => {
      if (!map.has(g.lessonId)) {
        map.set(g.lessonId, {
          id: g.lessonId,
          number: g.chapterNumber,
          title: g.chapterTitle,
          count: 1,
          index: g.lessonIndex
        });
      } else {
        map.get(g.lessonId)!.count += 1;
      }
    });
    return Array.from(map.values()).sort((a, b) => a.index - b.index);
  }, [allGrammar]);

  // Filter grammar points
  const filteredGrammar = useMemo(() => {
    return allGrammar.filter(gp => {
      if (selectedChapterId !== 'all' && gp.lessonId !== selectedChapterId) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = gp.title.toLowerCase().includes(query);
        const matchesSummary = gp.summary.toLowerCase().includes(query);
        const matchesExplanation = gp.ruleExplanation.toLowerCase().includes(query);
        const matchesExamples = gp.examples.some(
          ex => ex.dutch.toLowerCase().includes(query) || ex.english.toLowerCase().includes(query)
        );

        if (!matchesTitle && !matchesSummary && !matchesExplanation && !matchesExamples) {
          return false;
        }
      }

      return true;
    });
  }, [allGrammar, selectedChapterId, searchQuery]);

  const playDutchText = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakDutch(text, audioSpeed);
  };

  // Quick jump to topic
  const scrollToTopic = (id: string) => {
    setActiveTopicId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalStudied = studiedTopics.size;
  const progressPercent = allGrammar.length > 0 ? Math.round((totalStudied / allGrammar.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                Grammatica Handboek
              </span>
              <span className="text-xs text-stone-400">
                Nederlands in gang · Alle lessen A1–A2
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Compleet Grammatica Overzicht
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm">
              Lees en bestudeer de grammaticale regels per les: zinsbouw, inversie, werkwoordstijden (o.t.t., perfectum, imperfectum), het kofschip, adjectieven, voornaamwoorden en voegwoorden.
            </p>
          </div>

          {/* Quick Progress Badge */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shrink-0 flex items-center gap-4">
            <div>
              <div className="text-2xl font-black text-amber-400">{allGrammar.length}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Grammatica Onderwerpen</div>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div>
              <div className="text-2xl font-black text-emerald-400">{totalStudied}</div>
              <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Gelezen ({progressPercent}%)</div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
          <span className="text-xs text-stone-300 font-medium whitespace-nowrap">Voortgang grammaticastudie:</span>
          <div className="flex-1 bg-stone-700/60 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-emerald-300">{progressPercent}%</span>
        </div>
      </div>

      {/* Chapter Selection Bar & Live Search */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Search bar and Quick stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek grammaticaregel (bijv. 'kofschip', 'inversie', 'perfectum', 'er')..."
              className="w-full text-xs font-medium text-stone-900 bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
              >
                ×
              </button>
            )}
          </div>

          <div className="text-xs text-stone-500 font-medium flex items-center gap-2">
            <span>Toont <strong>{filteredGrammar.length}</strong> onderwerpen</span>
            {selectedChapterId !== 'all' && (
              <button
                onClick={() => setSelectedChapterId('all')}
                className="text-amber-800 font-bold hover:underline cursor-pointer"
              >
                Toon alle hoofdstukken
              </button>
            )}
          </div>
        </div>

        {/* Chapter Chips Horizontal Scroller */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
            Kies een Hoofdstuk om te lezen:
          </label>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedChapterId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedChapterId === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              Alle lessen ({allGrammar.length})
            </button>

            {chaptersList.map((chap) => {
              const isSelected = selectedChapterId === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => setSelectedChapterId(chap.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span>{chap.number}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-amber-600 text-stone-950' : 'bg-stone-200 text-stone-600'}`}>
                    {chap.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Table of Contents Sticky Sidebar on Desktop */}
        <div className="hidden lg:block lg:col-span-1 bg-white rounded-2xl border border-stone-200 p-4 sticky top-20 max-h-[85vh] overflow-y-auto shadow-xs">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
            <List className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-stone-800">
              Inhoudsopgave
            </span>
          </div>

          <div className="space-y-1">
            {filteredGrammar.map((gp) => {
              const key = `${gp.lessonId}_${gp.id}`;
              const isStudied = studiedTopics.has(key);
              const isActive = activeTopicId === key;

              return (
                <button
                  key={key}
                  onClick={() => scrollToTopic(key)}
                  className={`w-full text-left p-2 rounded-xl text-xs font-semibold transition-all flex items-start gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-100 text-amber-950 font-bold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  <span className="text-[10px] text-amber-800 bg-amber-50 px-1 rounded shrink-0 mt-0.5">
                    {gp.chapterNumber}
                  </span>
                  <span className="truncate flex-1">{gp.title.replace(/^\d+\.\s*/, '')}</span>
                  {isStudied && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRAMMAR POINTS LIST */}
        <div className="lg:col-span-3 space-y-6">
          {filteredGrammar.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-3">
              <BookOpen className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="text-base font-bold text-stone-800">Geen grammatica gevonden</h3>
              <p className="text-xs text-stone-500">
                Er zijn geen grammaticale regels die overeenkomen met je zoekopdracht "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSelectedChapterId('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 cursor-pointer"
              >
                Reset zoekopdracht
              </button>
            </div>
          ) : (
            filteredGrammar.map((gp) => {
              const topicKey = `${gp.lessonId}_${gp.id}`;
              const isStudied = studiedTopics.has(topicKey);

              return (
                <article
                  key={topicKey}
                  id={topicKey}
                  className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6 transition-all hover:border-stone-300"
                >
                  {/* Topic Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                          {gp.chapterNumber}: {gp.chapterTitle}
                        </span>
                        {isStudied && (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3" /> Gelezen
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                        {gp.title}
                      </h2>

                      <p className="text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60 inline-block">
                        💡 <strong>Kernregel:</strong> {gp.summary}
                      </p>
                    </div>

                    {/* Studied Toggle Button */}
                    <button
                      onClick={() => toggleStudied(topicKey)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                        isStudied
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                      }`}
                      title={isStudied ? 'Gemarkeerd als gelezen' : 'Markeer als gelezen'}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${isStudied ? 'text-emerald-700' : 'text-stone-400'}`} />
                      <span>{isStudied ? 'Gelezen' : 'Markeer gelezen'}</span>
                    </button>
                  </div>

                  {/* Rule Explanation Content */}
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 font-normal whitespace-pre-line bg-stone-50/60 p-5 rounded-2xl border border-stone-100">
                    {gp.ruleExplanation}
                  </div>

                  {/* Conjugation / Rule Tables if available */}
                  {gp.tables && gp.tables.length > 0 && (
                    <div className="space-y-4">
                      {gp.tables.map((table, tIdx) => (
                        <div key={tIdx} className="overflow-x-auto rounded-2xl border border-stone-200 shadow-2xs">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-stone-900 text-white font-extrabold text-[11px] uppercase tracking-wider">
                                {table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-2.5 px-3.5 border-r border-stone-800 last:border-r-0">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100">
                              {table.rows.map((row, rIdx) => (
                                <tr 
                                  key={rIdx}
                                  className={rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70 hover:bg-amber-50/30'}
                                >
                                  {row.map((cell, cIdx) => (
                                    <td 
                                      key={cIdx} 
                                      className="py-2.5 px-3.5 border-r border-stone-100 last:border-r-0 font-medium text-stone-800"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Authentic Examples with Speech Pronunciation */}
                  {gp.examples && gp.examples.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500">
                          Voorbeeldzinnen & Uitspraak
                        </span>
                        <span className="text-[11px] text-stone-400">
                          (Klik op luidspreker voor audio)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {gp.examples.map((ex, exIdx) => (
                          <div 
                            key={exIdx}
                            className="bg-amber-50/50 hover:bg-amber-50 border border-amber-200/80 rounded-2xl p-4 transition-all group relative space-y-1"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <p className="text-xs sm:text-sm font-bold text-stone-900">
                                {ex.dutch}
                              </p>
                              <button
                                onClick={(e) => playDutchText(ex.dutch, e)}
                                className="p-1.5 rounded-full bg-white group-hover:bg-amber-500 text-stone-700 group-hover:text-stone-950 border border-stone-200 transition-colors shrink-0 cursor-pointer shadow-2xs"
                                title="Beluister Nederlandse zin"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <p className="text-xs text-stone-600 font-medium">
                              {ex.english}
                            </p>

                            {ex.note && (
                              <p className="text-[11px] text-amber-800 font-semibold pt-1">
                                📌 {ex.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
