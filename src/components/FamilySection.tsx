import React, { useState } from 'react';
import { VOCABULARY_LIST, VocabWord } from '../data/chapterData';
import { speakDutch } from '../utils/speech';
import { Users, Volume2, Sparkles, User, HelpCircle, Heart, ArrowRight } from 'lucide-react';

interface FamilySectionProps {
  audioSpeed: number;
  onRecordExerciseCompletion?: (exerciseId: string) => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({
  audioSpeed,
  onRecordExerciseCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'family_tree' | 'describing' | 'practice'>('family_tree');

  // Interactive Person Builder State
  const [personGender, setPersonGender] = useState<'hij' | 'zij'>('hij');
  const [personAge, setPersonAge] = useState<'jonger' | 'ouder'>('jonger');
  const [personHeight, setPersonHeight] = useState<'lang' | 'langer' | 'klein'>('langer');
  const [personHairLength, setPersonHairLength] = useState<'kort' | 'lang'>('kort');
  const [personHairColor, setPersonHairColor] = useState<'blond' | 'donker'>('blond');
  const [personHasGlasses, setPersonHasGlasses] = useState<boolean>(true);

  // Computed description text
  const subjectName = personGender === 'hij' ? 'Hij' : 'Ze';
  const descriptionDutch = `${subjectName} is ${personAge} en ${personHeight}. ${subjectName} heeft ${personHairLength}, ${personHairColor} haar${personHasGlasses ? ` en een bril.` : '.'}`;

  const familyWords = VOCABULARY_LIST.filter(w => w.category === 'family');

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>2.3 & 2.4 Familierelaties & Beschrijven van Mensen</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
              Familie & Uiterlijk
            </h2>
            <p className="text-xs text-stone-500 mt-0.5 max-w-2xl">
              Leer het verschil tussen <strong className="text-stone-800">het gezin</strong> (ouders + kinderen) en <strong className="text-stone-800">de familie</strong> (opa, oma, ooms, tantes). Oefen met het beschrijven van personen: haar, lengte en leeftijd.
            </p>
          </div>

          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setActiveTab('family_tree')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'family_tree'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Stamboom & Relaties (2.3)
            </button>
            <button
              onClick={() => setActiveTab('describing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'describing'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Personen Beschrijven (2.4)
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'practice'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Opdracht 2 (Spreekvragen)
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Family Tree & Vocabulary */}
      {activeTab === 'family_tree' && (
        <div className="space-y-6">
          {/* Important Cultural & Linguistic distinction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-2xl">
              <h4 className="font-extrabold text-amber-950 text-sm flex items-center gap-1.5">
                <span>🏡 Het Gezin</span>
                <span className="text-xs font-normal text-amber-800">(household / nuclear family)</span>
              </h4>
              <p className="text-xs text-amber-900/90 mt-1">
                Bestaat uit de ouders en de thuiswonende kinderen:
                <br />
                <strong>de vader, de moeder, de zoon, de dochter, de broer, de zus, het kind</strong>.
              </p>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-4 rounded-2xl">
              <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                <span>🌳 De Familie</span>
                <span className="text-xs font-normal text-stone-600">(extended relatives)</span>
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                De hele familie met aangetrouwde en verdere verwanten:
                <br />
                <strong>de opa, de oma, de oom, de tante, de neef, de nicht, de zwager, de schoonzus</strong>.
              </p>
            </div>
          </div>

          {/* Family Relations Grid */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900">
              Alle Familiewoorden uit Hoofdstuk 2
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {familyWords.map((word) => (
                <div
                  key={word.id}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-300 transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      {word.article && (
                        <span className={`text-[10px] font-bold px-1 rounded uppercase ${
                          word.article === 'het' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {word.article}
                        </span>
                      )}
                      <h4 className="font-bold text-stone-900 text-sm">{word.dutch}</h4>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5">{word.english}</p>
                    {word.tip && (
                      <p className="text-[11px] text-amber-800 mt-1 italic">
                        💡 {word.tip}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const phrase = word.article ? `${word.article} ${word.dutch}` : word.dutch;
                      speakDutch(phrase, audioSpeed);
                    }}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-200 shrink-0"
                    title="Beluister woord"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Describing People (2.4) */}
      {activeTab === 'describing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Person Generator */}
          <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-5">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Interactieve Persoon-Beschrijver (2.4)
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Stel een persoon samen en leer de grammatica van eigenschappen & vergelijkingen.
              </p>
            </div>

            {/* Gender / Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase">Persoon:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPersonGender('hij')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personGender === 'hij' ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  Hij (man)
                </button>
                <button
                  onClick={() => setPersonGender('zij')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personGender === 'zij' ? 'bg-stone-900 text-white shadow-xs' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  Ze / Zij (vrouw)
                </button>
              </div>
            </div>

            {/* Age comparative */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase">Leeftijd:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPersonAge('jonger')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personAge === 'jonger' ? 'bg-amber-500 text-stone-950 font-bold shadow-xs' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  jonger (younger)
                </button>
                <button
                  onClick={() => setPersonAge('ouder')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personAge === 'ouder' ? 'bg-amber-500 text-stone-950 font-bold shadow-xs' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  ouder (older)
                </button>
              </div>
            </div>

            {/* Height */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase">Lengte:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPersonHeight('lang')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personHeight === 'lang' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  lang (tall)
                </button>
                <button
                  onClick={() => setPersonHeight('langer')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personHeight === 'langer' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  langer (taller)
                </button>
                <button
                  onClick={() => setPersonHeight('klein')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    personHeight === 'klein' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  klein (short)
                </button>
              </div>
            </div>

            {/* Hair */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase">Haar:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPersonHairLength('kort')}
                  className={`py-2 rounded-xl text-xs font-bold ${
                    personHairLength === 'kort' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  kort haar (short)
                </button>
                <button
                  onClick={() => setPersonHairLength('lang')}
                  className={`py-2 rounded-xl text-xs font-bold ${
                    personHairLength === 'lang' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  lang haar (long)
                </button>
                <button
                  onClick={() => setPersonHairColor('blond')}
                  className={`py-2 rounded-xl text-xs font-bold ${
                    personHairColor === 'blond' ? 'bg-amber-100 text-amber-950 border border-amber-300' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  blond
                </button>
                <button
                  onClick={() => setPersonHairColor('donker')}
                  className={`py-2 rounded-xl text-xs font-bold ${
                    personHairColor === 'donker' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  donker (dark)
                </button>
              </div>
            </div>

            {/* Glasses */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-800">Heeft een bril (glasses)?</span>
              <button
                onClick={() => setPersonHasGlasses(!personHasGlasses)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  personHasGlasses ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-700'
                }`}
              >
                {personHasGlasses ? 'Ja' : 'Nee'}
              </button>
            </div>
          </div>

          {/* Right: Output Description & Dialogue Matches */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Gegenereerde Nederlandse beschrijving
              </span>
              <p className="text-xl font-bold text-amber-950 leading-relaxed">
                "{descriptionDutch}"
              </p>

              <button
                onClick={() => speakDutch(descriptionDutch, audioSpeed)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Spreek beschrijving uit</span>
              </button>
            </div>

            {/* Textbook Examples from 2.4 */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Voorbeelden uit het boek (Pagina 35)
              </h4>
              <div className="space-y-2">
                {[
                  { nl: 'Hij is jonger.', en: 'He is younger.' },
                  { nl: 'Ik ben ouder.', en: 'I am older.' },
                  { nl: 'Hij is lang.', en: 'He is tall.' },
                  { nl: 'Ze is klein.', en: 'She is short / small.' },
                  { nl: 'Ze heeft kort, blond haar.', en: 'She has short, blonde hair.' },
                  { nl: 'Ik heb lang, donker haar.', en: 'I have long, dark hair.' },
                  { nl: 'Hij heeft een bril.', en: 'He wears glasses.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <div>
                      <p className="font-bold text-stone-900">{item.nl}</p>
                      <p className="text-stone-500 italic text-[11px]">{item.en}</p>
                    </div>
                    <button
                      onClick={() => speakDutch(item.nl, audioSpeed)}
                      className="p-1 rounded text-stone-400 hover:text-stone-900"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Opdracht 2 Practice Questions */}
      {activeTab === 'practice' && (
        <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-stone-900">
            Opdracht 2: Fantaseer en beschrijf een familie
          </h3>
          <p className="text-xs text-stone-500">
            In het boek bekijk je foto's van families en beantwoord je de volgende vragen. Oefen hier met handige antwoordmodellen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {[
              {
                section: 'A. Beschrijf hoe hij / zij eruitziet',
                q: 'Hoe ziet hij of zij eruit?',
                answer: 'Hij is lang en heeft kort, donker haar. Hij heeft ook een bril.'
              },
              {
                section: 'B.1 Naam van de persoon',
                q: 'Hoe heet hij / zij?',
                answer: 'Hij heet Thomas / Ze heet Lisa.'
              },
              {
                section: 'B.2 Leeftijd van de persoon',
                q: 'Hoe oud is hij / zij?',
                answer: 'Hij is 28 jaar oud / Ze is 24 jaar oud.'
              },
              {
                section: 'C.1 Werk / Bezigheid',
                q: 'Wat doen ze?',
                answer: 'Zijn vader werkt op kantoor en zijn moeder is docente.'
              },
              {
                section: 'C.2 Woonplaats',
                q: 'Waar wonen ze?',
                answer: 'Ze wonen in Utrecht / Ze wonen in Amsterdam.'
              },
              {
                section: 'C.3 Locatie op de foto',
                q: 'Waar zijn ze nu (op de foto)?',
                answer: 'Ze zijn op vakantie in Indonesië / Ze zijn in het park.'
              },
            ].map((card, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  {card.section}
                </span>
                <p className="text-sm font-bold text-stone-900">{card.q}</p>
                <div className="pt-2 border-t border-stone-200 text-xs">
                  <p className="text-stone-500 font-medium">Voorbeeld reactie:</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="font-semibold text-stone-800">"{card.answer}"</p>
                    <button
                      onClick={() => speakDutch(card.answer, audioSpeed)}
                      className="p-1 text-stone-400 hover:text-stone-800"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
