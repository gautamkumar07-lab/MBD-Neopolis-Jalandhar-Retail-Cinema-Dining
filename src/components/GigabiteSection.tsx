import React, { useState } from 'react';
import { Utensils, Wine, Coffee, Compass, Phone, Sparkles, Check, Clock, ChevronRight } from 'lucide-react';
import { Store, STORES_DIRECTORY } from '../data/mallData';

interface GigabiteSectionProps {
  onSelectStore: (store: Store) => void;
  onOpenContact: () => void;
}

export const GigabiteSection: React.FC<GigabiteSectionProps> = ({
  onSelectStore,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'global' | 'express' | 'beverages'>('all');

  const foodCourtOutlets = STORES_DIRECTORY.filter((s) => s.floorCode === 'TF' && s.category === 'Food Court & Dining');

  return (
    <section id="gigabite" className="py-16 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Narrative & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Owned & Operated by MBD Group</span>
              <span aria-hidden="true">·</span>
              <span>Double-Height Atrium</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance leading-tight">
              Gigabite Food Lounge & Bar
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Spanning over <strong className="text-white font-semibold">20,000 square feet</strong> at MBD Neopolis Jalandhar, Gigabite elevates the mall dining experience into an expansive culinary promenade. Designed with double-height volume and welcoming architectural ambience, it unites world flavors, authentic Indian recipes, a contemporary bar, and Gigabite Express fast bites.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700/60">
                <div className="text-xl font-bold text-amber-400 tabular-nums">20,000+ sq. ft.</div>
                <div className="text-xs text-neutral-400 mt-0.5">Expansive dining space</div>
              </div>

              <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700/60">
                <div className="text-xl font-bold text-amber-400">Bar & Lounge</div>
                <div className="text-xs text-neutral-400 mt-0.5">Craft cocktails & beverages</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                Inquire for Food Lounge Events
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl">
              <img
                src="/src/assets/images/gigabite_food_court_1792312738669.jpg"
                alt="Gigabite Food Lounge MBD Neopolis Jalandhar"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs text-neutral-300">
                  <div className="font-semibold text-white text-sm">Gigabite Architectural Dining Hub</div>
                  <div>MBD Neopolis Jalandhar · Double-Height Ceiling & Multi-Cuisine Counters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Food Outlets Published Directory */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                Published Food Court Outlets
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Directory listings transcribed from the official Jalandhar food court section.
              </p>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              Top Floor Level · FCD & FCW Counters
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodCourtOutlets.map((outlet) => (
              <div
                key={outlet.id}
                onClick={() => onSelectStore(outlet)}
                className="card-3d-dark bg-neutral-800/90 rounded-2xl p-5 border border-neutral-700/70 hover:border-amber-400 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                    <span className="text-amber-400 font-semibold bg-neutral-900 px-2 py-0.5 rounded">
                      {outlet.shopNumber}
                    </span>
                    <span>Gigabite Hub</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                    {outlet.name}
                  </h4>

                  <p className="text-xs text-neutral-300 mt-2 line-clamp-2">
                    {outlet.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-700/60 flex items-center justify-between">
                  <a
                    href={`tel:${outlet.phone.replace(/[^0-9+]/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>{outlet.phone}</span>
                  </a>

                  <span className="text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
