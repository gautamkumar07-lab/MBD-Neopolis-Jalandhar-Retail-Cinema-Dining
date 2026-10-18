import React, { useState } from 'react';
import { Building2, ShieldCheck, AlertTriangle, FileText, CheckCircle2, ChevronRight, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { LOCATION_COMPARISON, MBD_GROUP_FACTS, RESEARCH_METHODOLOGY_NOTES } from '../data/mallData';

export const BusinessResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'mbdgroup' | 'limitations'>('comparison');

  return (
    <section id="research" className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
              Website-Based Corporate Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
              MBD Neopolis Business & Location Research
            </h2>
            <p className="mt-1 text-sm text-neutral-600 max-w-3xl">
              Rigorous synthesis of published information from mbdneopolis.com, separating Jalandhar specifications from Ludhiana data and analyzing the MBD Group ecosystem.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'comparison'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Jalandhar vs Ludhiana
            </button>
            <button
              onClick={() => setActiveTab('mbdgroup')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'mbdgroup'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              MBD Group Lineage
            </button>
            <button
              onClick={() => setActiveTab('limitations')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'limitations'
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Data Audit & Caveats
            </button>
          </div>
        </div>

        {/* Tab 1: Jalandhar vs Ludhiana Matrix */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-amber-50/80 border border-amber-200/90 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950">
                <strong className="font-semibold">Critical Research Distinction:</strong> The website hosts separate portals for Jalandhar and Ludhiana. Specifications such as the <strong>785,000 sq. ft.</strong> footprint, the <strong>4-acre site</strong>, and the <strong>600+ vehicle parking capacity</strong> are officially documented for Ludhiana and must not be erroneously attributed to the Jalandhar property.
              </div>
            </div>

            <div className="overflow-x-auto border border-neutral-200 rounded-xl shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="p-3.5 font-bold uppercase tracking-wider w-1/4 border-r border-neutral-800">
                      Parameter
                    </th>
                    <th className="p-3.5 font-bold uppercase tracking-wider w-1/3 border-r border-neutral-800 bg-neutral-800 text-amber-300">
                      MBD Neopolis Jalandhar (Primary Focus)
                    </th>
                    <th className="p-3.5 font-bold uppercase tracking-wider w-1/3">
                      MBD Neopolis Ludhiana
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {LOCATION_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="p-3.5 font-bold text-neutral-900 border-r border-neutral-200 bg-neutral-50/50">
                        {row.feature}
                      </td>
                      <td className="p-3.5 font-medium text-neutral-900 border-r border-neutral-200 leading-relaxed bg-amber-50/20">
                        {row.jalandhar}
                        <div className="text-[11px] text-neutral-500 mt-1 italic font-normal">
                          {row.analysis}
                        </div>
                      </td>
                      <td className="p-3.5 text-neutral-700 leading-relaxed">
                        {row.ludhiana}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: MBD Group Lineage */}
        {activeTab === 'mbdgroup' && (
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-2xl">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Corporate Conglomerate Profile
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                The MBD Group Heritage
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                {MBD_GROUP_FACTS.origins} Over the decades, the group diversified from textbook printing into modern ed-tech platforms, mixed-use commercial real estate developments, five-star hospitality partnerships, and specialty food court concepts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MBD_GROUP_FACTS.verticals.map((vert, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs font-mono mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 font-display">
                    {vert.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {vert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Limitations & Research Audit */}
        {activeTab === 'limitations' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {RESEARCH_METHODOLOGY_NOTES.map((note, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <h4 className="text-sm font-bold text-neutral-900">{note.title}</h4>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">{note.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-neutral-200 p-6 rounded-xl space-y-3">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Research Methodology Summary
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                This digital portal strictly utilizes the facts and directory listings published on <strong>mbdneopolis.com</strong>. It intentionally refrains from speculating on unverified annual revenue, leasing rates per square foot, or footfall numbers that are not made publicly available in the source documents.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
