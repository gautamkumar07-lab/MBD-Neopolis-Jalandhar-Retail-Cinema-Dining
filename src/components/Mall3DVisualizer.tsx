import React, { useState } from 'react';
import { Eye, Layers, Sparkles, RotateCw, ZoomIn, Info, Compass, ShieldCheck } from 'lucide-react';
import { FLOORS_CONFIG, STORES_DIRECTORY, Store, FloorInfo } from '../data/mallData';

interface Mall3DVisualizerProps {
  onSelectStore: (store: Store) => void;
  selectedFloorCode: string;
  onSelectFloor: (floorCode: string) => void;
}

export const Mall3DVisualizer: React.FC<Mall3DVisualizerProps> = ({
  onSelectStore,
  selectedFloorCode,
  onSelectFloor,
}) => {
  const [viewMode, setViewMode] = useState<'isometric' | 'exploded' | 'front'>('isometric');
  const [rotateX, setRotateX] = useState<number>(55);
  const [rotateZ, setRotateZ] = useState<number>(-28);
  const [showAtrium, setShowAtrium] = useState<boolean>(true);

  // Floor order from top to bottom
  const floorStack = [...FLOORS_CONFIG].reverse(); // TF, SF, FF, GF, LGF

  const handlePreset = (mode: 'isometric' | 'exploded' | 'front') => {
    setViewMode(mode);
    if (mode === 'isometric') {
      setRotateX(55);
      setRotateZ(-28);
    } else if (mode === 'exploded') {
      setRotateX(58);
      setRotateZ(-32);
    } else if (mode === 'front') {
      setRotateX(25);
      setRotateZ(0);
    }
  };

  const getZSpacing = (index: number) => {
    // 0 is top (TF), 4 is bottom (LGF)
    const reversedIndex = 4 - index;
    if (viewMode === 'exploded') {
      return reversedIndex * 95;
    }
    return reversedIndex * 48;
  };

  return (
    <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Control Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive 3D Spatial Mall Model</span>
            <span aria-hidden="true">·</span>
            <span>4 Retail Levels + Multiplex + Food Court</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            MBD Neopolis 3D Architectural Stack
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-xl">
            Rotate and inspect the layered vertical architecture. Click any 3D floor plate to elevate and inspect stores located on that level.
          </p>
        </div>

        {/* View mode buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => handlePreset('isometric')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'isometric'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              3D Isometric
            </button>
            <button
              onClick={() => handlePreset('exploded')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'exploded'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Exploded Levels
            </button>
            <button
              onClick={() => handlePreset('front')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'front'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Perspective Angle
            </button>
          </div>

          <button
            onClick={() => setShowAtrium(!showAtrium)}
            className={`px-3 py-2 text-xs font-medium rounded-xl border transition-colors cursor-pointer flex items-center gap-1.5 ${
              showAtrium
                ? 'bg-neutral-800 text-amber-300 border-amber-500/50'
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Central Atrium Core</span>
          </button>
        </div>
      </div>

      {/* 3D Interactive Stage */}
      <div className="relative my-8 py-10 min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-visible">
        {/* CSS 3D Viewport */}
        <div
          className="relative w-full max-w-xl h-96 flex items-center justify-center"
          style={{ perspective: '1100px' }}
        >
          {/* Rotating 3D World Container */}
          <div
            className="preserve-3d transition-transform duration-700 ease-out relative w-72 sm:w-96 h-56 sm:h-64"
            style={{
              transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
            }}
          >
            {/* Ground Base / Foundation Plane */}
            <div
              className="absolute inset-0 bg-neutral-900/90 rounded-3xl border-2 border-neutral-800 shadow-2xl"
              style={{
                transform: `translateZ(-20px)`,
                boxShadow: '0 40px 70px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div className="absolute inset-x-0 bottom-2 text-center text-[10px] text-neutral-600 font-mono tracking-widest uppercase">
                G.T. Road / Radisson Hotel Adjacency Substructure
              </div>
            </div>

            {/* Central Open Atrium Glass Column Simulation */}
            {showAtrium && (
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-amber-400/30 bg-amber-400/5 backdrop-blur-xs pointer-events-none"
                style={{
                  transform: `translateZ(100px) scale(0.9)`,
                  boxShadow: '0 0 35px rgba(251, 191, 36, 0.15)',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-[9px] text-amber-300/80 font-mono tracking-wider">
                  ATRIUM CORE
                </div>
              </div>
            )}

            {/* 3D Floor Plates */}
            {floorStack.map((floor, index) => {
              const isSelected = selectedFloorCode === floor.code;
              const storesOnLevel = STORES_DIRECTORY.filter((s) => s.floorCode === floor.code);
              const zHeight = getZSpacing(index) + (isSelected ? 30 : 0);

              return (
                <div
                  key={floor.code}
                  onClick={() => onSelectFloor(floor.code)}
                  className={`absolute inset-0 rounded-2xl cursor-pointer preserve-3d transition-all duration-500 ease-out border ${
                    isSelected
                      ? 'bg-neutral-900/95 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.35)] scale-105'
                      : 'bg-neutral-900/80 hover:bg-neutral-850 border-neutral-700/80 hover:border-neutral-500 shadow-lg'
                  }`}
                  style={{
                    transform: `translateZ(${zHeight}px)`,
                  }}
                >
                  {/* Plate Surface Decor */}
                  <div className="relative w-full h-full p-4 flex flex-col justify-between overflow-hidden rounded-2xl">
                    {/* Top Edge / Floor Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono font-bold text-xs px-2 py-0.5 rounded ${
                            isSelected
                              ? 'bg-amber-400 text-neutral-950 shadow-sm'
                              : 'bg-neutral-800 text-neutral-300'
                          }`}
                        >
                          {floor.code}
                        </span>
                        <span className="text-xs font-bold text-white font-display">
                          {floor.name}
                        </span>
                      </div>

                      <span className="text-[10px] text-amber-400 font-mono">
                        {storesOnLevel.length} tenants
                      </span>
                    </div>

                    {/* Architectural Skylight / Atrium Void Cutout */}
                    <div className="my-auto mx-auto w-24 h-16 rounded-xl border border-dashed border-neutral-700/80 bg-neutral-950/60 flex items-center justify-center">
                      <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider">
                        Atrium Void
                      </span>
                    </div>

                    {/* Anchor highlights preview */}
                    <div className="flex items-center justify-between text-[11px] text-neutral-300 pt-1 border-t border-neutral-800">
                      <span className="truncate max-w-[180px] font-medium text-amber-200">
                        {storesOnLevel
                          .slice(0, 2)
                          .map((s) => s.name)
                          .join(' · ')}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-semibold ${
                          isSelected ? 'text-amber-400' : 'text-neutral-500'
                        }`}
                      >
                        {isSelected ? 'Active Level' : 'Click to View'}
                      </span>
                    </div>
                  </div>

                  {/* 3D Depth Extrusion Edge */}
                  <div
                    className="absolute -bottom-2 inset-x-0 h-2 bg-neutral-950/90 rounded-b-2xl border-x border-b border-neutral-800"
                    style={{ transform: 'rotateX(-90deg) translateZ(-1px)' }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Angle Tuning Sliders */}
        <div className="absolute bottom-2 right-2 bg-neutral-900/90 backdrop-blur-md p-3 rounded-xl border border-neutral-800 text-xs space-y-2 hidden sm:block">
          <div className="text-[11px] font-semibold text-neutral-300 flex items-center gap-1">
            <RotateCw className="w-3 h-3 text-amber-400" />
            <span>3D Orbit Controls</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-neutral-400 w-10">Pitch:</span>
            <input
              type="range"
              min="15"
              max="75"
              value={rotateX}
              onChange={(e) => setRotateX(Number(e.target.value))}
              className="w-24 accent-amber-400 cursor-pointer"
            />
            <span className="font-mono text-[10px] text-amber-400 w-8">{rotateX}°</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-neutral-400 w-10">Yaw:</span>
            <input
              type="range"
              min="-60"
              max="60"
              value={rotateZ}
              onChange={(e) => setRotateZ(Number(e.target.value))}
              className="w-24 accent-amber-400 cursor-pointer"
            />
            <span className="font-mono text-[10px] text-amber-400 w-8">{rotateZ}°</span>
          </div>
        </div>
      </div>

      {/* Selected Floor Tenant Showcase Bar */}
      {(() => {
        const activeFloor = FLOORS_CONFIG.find((f) => f.code === selectedFloorCode) || FLOORS_CONFIG[1];
        const activeStores = STORES_DIRECTORY.filter((s) => s.floorCode === selectedFloorCode);

        return (
          <div className="relative z-10 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-5 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs bg-amber-400 text-neutral-950 px-2.5 py-1 rounded-md">
                  {activeFloor.code}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white font-display">
                  {activeFloor.name} — {activeFloor.highlight}
                </h4>
              </div>
              <span className="text-xs text-neutral-400">
                Click any tenant chip to view verified contact & details:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeStores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => onSelectStore(store)}
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-amber-400 hover:text-neutral-950 border border-neutral-700/80 rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="font-mono font-semibold text-amber-400 group-hover:text-neutral-950">
                    {store.shopNumber}
                  </span>
                  <span className="font-medium text-white group-hover:text-neutral-950">
                    {store.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
};
