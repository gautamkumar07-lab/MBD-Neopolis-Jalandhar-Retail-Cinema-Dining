import React, { useState } from 'react';
import { Layers, Store as StoreIcon, ArrowRight, Phone, ShieldCheck, Sparkles, Navigation, Box } from 'lucide-react';
import { FLOORS_CONFIG, STORES_DIRECTORY, Store, FloorInfo } from '../data/mallData';
import { Mall3DVisualizer } from './Mall3DVisualizer';

interface FloorGuideProps {
  onSelectStore: (store: Store) => void;
}

export const FloorGuide: React.FC<FloorGuideProps> = ({ onSelectStore }) => {
  const [selectedFloorCode, setSelectedFloorCode] = useState<string>('GF');

  const currentFloor = FLOORS_CONFIG.find((f) => f.code === selectedFloorCode) || FLOORS_CONFIG[1];
  const floorStores = STORES_DIRECTORY.filter((s) => s.floorCode === selectedFloorCode);

  return (
    <section id="floors" className="py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
            Architectural Level Map & Spatial Model
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Interactive 3D Mall Floor Guide
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Explore the four retail levels and top floor entertainment hub in realistic 3D perspective or inspect level-by-level store distributions.
          </p>
        </div>

        {/* 3D Isometric Mall Visualizer */}
        <Mall3DVisualizer
          onSelectStore={onSelectStore}
          selectedFloorCode={selectedFloorCode}
          onSelectFloor={(code) => setSelectedFloorCode(code)}
        />

        {/* 2D Level Selector Bar */}
        <div className="pt-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {FLOORS_CONFIG.map((floor) => {
              const isSelected = floor.code === selectedFloorCode;
              const count = STORES_DIRECTORY.filter((s) => s.floorCode === floor.code).length;

              return (
                <button
                  key={floor.code}
                  onClick={() => setSelectedFloorCode(floor.code)}
                  className={`px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 card-3d ${
                    isSelected
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-md scale-[1.02]'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs font-mono shrink-0 ${
                      isSelected ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-200 text-neutral-800'
                    }`}
                  >
                    {floor.code}
                  </div>
                  <div>
                    <div className="text-sm font-bold font-display leading-tight">{floor.name}</div>
                    <div className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {count} {count === 1 ? 'Store' : 'Stores & Attractions'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Floor Showcase Box */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden shadow-xs">
            {/* Level Header Banner */}
            <div className="bg-neutral-900 text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono uppercase tracking-wider mb-1">
                  <span>Level {currentFloor.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentFloor.name}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {currentFloor.highlight}
                </h3>
                <p className="mt-2 text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  {currentFloor.description}
                </p>
              </div>

              <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700/60 shrink-0 text-xs text-neutral-300 space-y-1.5">
                <div className="text-white font-semibold">Facilities on this Level:</div>
                <div>• Escalator & Glass Elevator Access</div>
                <div>• Central Atrium Visibility</div>
                <div>• Restrooms & Assistance Desks</div>
              </div>
            </div>

            {/* Tenants on this level */}
            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Tenants on {currentFloor.name} ({floorStores.length})</span>
                <span className="text-neutral-400 font-normal">Click any store for details & contact</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {floorStores.map((store) => (
                  <div
                    key={store.id}
                    onClick={() => onSelectStore(store)}
                    className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group card-3d"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono mb-1.5">
                        <span className="font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">
                          {store.shopNumber}
                        </span>
                        <span>{store.category}</span>
                      </div>

                      <h5 className="text-base font-bold text-neutral-900 group-hover:text-amber-800 transition-colors font-display">
                        {store.name}
                      </h5>

                      <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
                        {store.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="font-mono text-neutral-600 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-neutral-400" />
                        {store.phone}
                      </span>
                      <span className="text-amber-700 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
