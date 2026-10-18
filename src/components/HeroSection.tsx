import React from 'react';
import { MapPin, Film, Utensils, Car, Layers, Store as StoreIcon, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreDirectory: () => void;
  onExploreFloors: () => void;
  onViewGigabite: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDirectory,
  onExploreFloors,
  onViewGigabite,
}) => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden border-b border-neutral-800">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_mbd_neopolis_1792312738069.jpg"
          alt="MBD Neopolis Jalandhar Grand Mall Atrium"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-neutral-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Unboxed clean metadata kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase mb-4">
            <span>BMC Chowk</span>
            <span aria-hidden="true">·</span>
            <span>Main G.T. Road, Jalandhar</span>
            <span aria-hidden="true">·</span>
            <span>Adjacent to Radisson Hotel</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight">
            MBD Neopolis Jalandhar
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed text-balance">
            The premier retail, entertainment, and gourmet food destination in the Doaba heartland. Featuring four levels of curated international brands, a four-screen PVR Gold Class multiplex, and the iconic 20,000+ sq. ft. double-height Gigabite Food Lounge.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreDirectory}
              className="px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/20 cursor-pointer flex items-center gap-2 relative overflow-hidden"
            >
              <StoreIcon className="w-4 h-4" />
              <span>Browse 21+ Stores</span>
            </button>

            <button
              onClick={onExploreFloors}
              className="px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-800/90 hover:bg-neutral-800 hover:text-white border border-neutral-700 hover:border-amber-400/50 rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Explore 3D Floor Stack</span>
            </button>

            <button
              onClick={onViewGigabite}
              className="px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-800/90 hover:bg-neutral-800 hover:text-white border border-neutral-700 hover:border-amber-400/50 rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Utensils className="w-4 h-4 text-amber-400" />
              <span>Gigabite Food Lounge</span>
            </button>
          </div>
        </div>

        {/* 4 Key Pillars Row with 3D Depth */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div
            onClick={onExploreFloors}
            className="card-3d-dark bg-neutral-900/70 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/60 hover:border-amber-400/60 transition-all cursor-pointer flex items-start gap-3.5 group"
          >
            <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 border border-neutral-700/80 shrink-0 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums group-hover:text-amber-300 transition-colors">4 Retail Levels</div>
              <p className="text-xs text-neutral-400 mt-0.5">LGF, Ground, 1st & 2nd floors</p>
            </div>
          </div>

          <div
            onClick={() => {
              const el = document.getElementById('cinema');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="card-3d-dark bg-neutral-900/70 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/60 hover:border-amber-400/60 transition-all cursor-pointer flex items-start gap-3.5 group"
          >
            <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 border border-neutral-700/80 shrink-0 group-hover:scale-110 transition-transform">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums group-hover:text-amber-300 transition-colors">PVR Gold Class</div>
              <p className="text-xs text-neutral-400 mt-0.5">4-Screen luxury multiplex</p>
            </div>
          </div>

          <div
            onClick={onViewGigabite}
            className="card-3d-dark bg-neutral-900/70 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/60 hover:border-amber-400/60 transition-all cursor-pointer flex items-start gap-3.5 group"
          >
            <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 border border-neutral-700/80 shrink-0 group-hover:scale-110 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white tabular-nums group-hover:text-amber-300 transition-colors">20,000+ sq. ft.</div>
              <p className="text-xs text-neutral-400 mt-0.5">Gigabite food lounge & bar</p>
            </div>
          </div>

          <div className="card-3d-dark bg-neutral-900/70 backdrop-blur-md p-4 rounded-2xl border border-neutral-700/60 hover:border-amber-400/60 transition-all flex items-start gap-3.5 group">
            <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 border border-neutral-700/80 shrink-0 group-hover:scale-110 transition-transform">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">Multilevel Parking</div>
              <p className="text-xs text-neutral-400 mt-0.5">Dedicated safe visitor parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
