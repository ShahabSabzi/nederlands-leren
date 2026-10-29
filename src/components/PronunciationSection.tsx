import React, { useState } from 'react';
import { PRONUNCIATION_PAIRS, PRONUNCIATION_WORDS_A } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { Volume2, CheckCircle2, XCircle, Info, Sparkles, AlertCircle, PhoneCall } from 'lucide-react';

interface PronunciationSectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const PronunciationSection: React.FC<PronunciationSectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'rules_pairs' | 'opdracht15' | 'culture_112'>('rules_pairs');

  // Opdracht 15 quiz items: Are the two sounds the same (+) or different (-)?
  const opdr15Items = [
    { id: 1, word1: 'acht', word2: 'jaar', answer: 'different', sound1: 'short a', sound2: 'long aa' },
    { id: 2, word1: 'dag', word2: 'was', answer: 'same', sound1: 'short a', sound2: 'short a' },
    { id: 3, word1: 'naam', word2: 'vader', answer: 'same', sound1: 'long aa', sound2: 'long aa (open)' },
    { id: 4, word1: 'kantine', word2: 'maken', answer: 'different', sound1: 'short a (kan-)', sound2: 'long aa (ma-)' },
    { id: 5, word1: 'half', word2: 'maand', answer: 'different', sound1: 'short a', sound2: 'long aa' },
    { id: 6, word1: 'dag', word2: 'dagen', answer: 'different', sound1: 'short a (closed)', sound2: 'long aa (open da-)' },
    { id: 7, word1: 'jarig', word2: 'vader', answer: 'same', sound1: 'long aa (ja-)', sound2: 'long aa (va-)' }
  ];

  const [opdr15Answers, setOpdr15Answers] = useState<Record<number, 'same' | 'different'>>({});
  const [opdr15Checked, setOpdr15Checked] = useState<Record<number, boolean>>({});

  // 112 emergency text question state
  const [opdr13Choice, setOpdr13Choice] = useState<string | null>(null);
  const [opdr13Checked, setOpdr13Checked] = useState<boolean>(false);

  const handleOpdr15Select = (id: number, val: 'same' | 'different') => {
    setOpdr15Answers(prev => ({ ...prev, [id]: val }));
    setOpdr15Checked(prev => ({ ...prev, [id]: false }));
  };

  const checkOpdr15Item = (item: typeof opdr15Items[0]) => {
    setOpdr15Checked(prev => ({ ...prev, [item.id]: true }));
    if (opdr15Answers[item.id] === item.answer && onRecordExerciseCompletion) {
      onRecordExerciseCompletion(`opdr15_${item.id}`);
    }
  };

  const handlePlayPair = (w1: string, w2: string) => {
    speakDutch(w1, audioSpeed, () => {
      setTimeout(() => {
        speakDutch(w2, audioSpeed);
      }, 400);
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Volume2 className="w-4 h-4" />
              <span>2.12 & 2.13 Uitspraak, Tekst & Cultuur</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Uitspraak van a – aa & Extra Context
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              Hoor het cruciale verschil tussen de korte <strong>/ɑ/</strong> (zoals in <em>dag, kantine, acht</em>) en de lange <strong>/a:/</strong> (zoals in <em>jaar, vader, dagen</em>).
            </p>
          </div>

          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('rules_pairs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'rules_pairs'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Klankregels & Paren (2.13)
            </button>
            <button
              onClick={() => setActiveTab('opdracht15')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'opdracht15'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 15 (Klanktrainer)
            </button>
            <button
              onClick={() => setActiveTab('culture_112')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'culture_112'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cultuur & 1-1-2 Tekst
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Rules & Minimal Pairs */}
      {activeTab === 'rules_pairs' && (
        <div className="space-y-6">
          {/* Syllable Rule Explanation Box */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>De Regel van Open en Gesloten Lettergrepen</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-amber-950/90 leading-relaxed">
              <div className="p-3.5 bg-white/80 rounded-2xl border border-amber-200/60 space-y-1">
                <span className="font-extrabold text-amber-900 uppercase">1. Gesloten Lettergreep (eindigt op medeklinker):</span>
                <p>
                  • Een enkele <strong>a</strong> is KORT [ɑ]: <em>dag, bad, acht, kan-ti-ne</em>.
                  <br />
                  • Om een lange klank te maken in een gesloten lettergreep schrijf je dubbele <strong>aa</strong>: <em>jaar, naam, plaats, maand</em>.
                </p>
              </div>

              <div className="p-3.5 bg-white/80 rounded-2xl border border-amber-200/60 space-y-1">
                <span className="font-extrabold text-amber-900 uppercase">2. Open Lettergreep (eindigt op klinker):</span>
                <p>
                  • Een enkele <strong>a</strong> is automatisch LANG [a:]:
                  <br />
                  <em>da-gen</em> (dagen), <em>va-der</em> (vader), <em>ja-rig</em> (jarig), <em>ma-ken</em> (maken).
                </p>
              </div>
            </div>
          </div>

          {/* Minimal Pairs Contrast Cards */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              Minimale Paren: Luister en Vergelijk Korte vs Lange a
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {PRONUNCIATION_PAIRS.map((pair, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Short Word */}
                      <button
                        onClick={() => speakDutch(pair.shortWord, audioSpeed)}
                        className="p-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-left transition-all group"
                      >
                        <span className="text-[10px] font-bold text-stone-400 block uppercase">Korte a</span>
                        <span className="text-lg font-bold text-stone-900 group-hover:text-amber-700">
                          {pair.shortWord}
                        </span>
                      </button>

                      <span className="text-xs font-bold text-stone-400">vs</span>

                      {/* Long Word */}
                      <button
                        onClick={() => speakDutch(pair.longWord, audioSpeed)}
                        className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-left transition-all group"
                      >
                        <span className="text-[10px] font-bold text-amber-800 block uppercase">Lange aa</span>
                        <span className="text-lg font-bold text-amber-950 group-hover:text-amber-700">
                          {pair.longWord}
                        </span>
                      </button>
                    </div>

                    <button
                      onClick={() => handlePlayPair(pair.shortWord, pair.longWord)}
                      className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                      title="Speel beide achter elkaar af"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Vergelijk</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-600 bg-white/70 p-2 rounded-xl border border-stone-200/60">
                    💡 {pair.ruleExplanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Opdracht 15 Klanktrainer */}
      {activeTab === 'opdracht15' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4 max-w-2xl mx-auto">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Opdracht 15: Hoor je dezelfde klank (+) of is de klank anders (-)?
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Beluister de twee woorden. Hebben beide woorden dezelfde klank (korte a & korte a, of lange aa & lange aa), of is de klank anders?
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {opdr15Items.map((item) => {
              const isChecked = opdr15Checked[item.id];
              const userChoice = opdr15Answers[item.id];
              const isCorrect = userChoice === item.answer;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isChecked
                      ? isCorrect
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-rose-50/70 border-rose-300'
                      : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {item.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-stone-900">{item.word1}</span>
                        <span className="text-stone-400 text-xs">—</span>
                        <span className="text-base font-bold text-stone-900">{item.word2}</span>
                      </div>
                      <button
                        onClick={() => handlePlayPair(item.word1, item.word2)}
                        className="p-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 ml-1 transition-colors"
                        title="Speel paar af"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpdr15Select(item.id, 'same')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          userChoice === 'same'
                            ? 'bg-stone-900 text-white shadow-xs'
                            : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                        }`}
                      >
                        + Dezelfde klank
                      </button>
                      <button
                        onClick={() => handleOpdr15Select(item.id, 'different')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          userChoice === 'different'
                            ? 'bg-stone-900 text-white shadow-xs'
                            : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                        }`}
                      >
                        - Anders
                      </button>
                      <button
                        disabled={!userChoice}
                        onClick={() => checkOpdr15Item(item)}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-xl shadow-2xs transition-all cursor-pointer"
                      >
                        Check
                      </button>
                    </div>
                  </div>

                  {isChecked && (
                    <div className="mt-2.5 pt-2 border-t border-stone-200/60 text-xs">
                      {isCorrect ? (
                        <p className="text-emerald-800 font-bold">
                          ✓ Correct! ({item.word1}: {item.sound1}, {item.word2}: {item.sound2})
                        </p>
                      ) : (
                        <p className="text-rose-800 font-semibold">
                          ✗ Niet juist. {item.word1} is {item.sound1}, maar {item.word2} is {item.sound2}.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Culture & 1-1-2 Text */}
      {activeTab === 'culture_112' && (
        <div className="space-y-6">
          {/* Opdracht 13: 112 emergency */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs max-w-xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Opdracht 13: Tekstbegrip in het dagelijks leven (Pagina 42)
            </span>

            {/* Poster graphic mimic */}
            <div className="p-6 bg-red-600 text-white rounded-2xl text-center space-y-2 shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <PhoneCall className="w-8 h-8" />
                <h3 className="text-4xl font-black tracking-wider">1-1-2</h3>
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-red-100">
                Als elke seconde telt
              </p>
            </div>

            <p className="text-sm font-bold text-stone-900">
              Wat is dit?
            </p>

            <div className="space-y-2">
              {[
                { id: 'a', text: 'a) een adres' },
                { id: 'b', text: 'b) een postcode' },
                { id: 'c', text: 'c) een telefoonnummer (noodnummer)' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setOpdr13Choice(opt.id);
                    setOpdr13Checked(false);
                  }}
                  className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    opdr13Choice === opt.id
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            <button
              disabled={!opdr13Choice}
              onClick={() => {
                setOpdr13Checked(true);
                if (opdr13Choice === 'c' && onRecordExerciseCompletion) {
                  onRecordExerciseCompletion('opdr13_112');
                }
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-stone-950 font-bold text-xs rounded-xl transition-all shadow-xs cursor-pointer"
            >
              Controleer antwoord
            </button>

            {opdr13Checked && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900">
                {opdr13Choice === 'c' ? (
                  <p className="font-bold">
                    ✓ Helemaal juist! 1-1-2 is het alarmnummer / alarmtelefoonnummer voor politie, brandweer en ambulance in heel Nederland en de EU.
                  </p>
                ) : (
                  <p className="text-rose-800 font-bold">
                    Helaas niet juist. 112 is een alarmtelefoonnummer (optie c).
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Dutch culture note from page 44 */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl max-w-xl mx-auto space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              🇳🇱 Cultuurnoot uit het boek (Pagina 44)
            </h4>
            <p className="text-sm font-medium text-amber-950">
              "Een vrouw in Nederland krijgt gemiddeld 1,7 kinderen."
            </p>
            <p className="text-xs text-amber-900/80">
              Vraag voor jezelf: Hoeveel kinderen krijgt een vrouw gemiddeld in jouw land?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
