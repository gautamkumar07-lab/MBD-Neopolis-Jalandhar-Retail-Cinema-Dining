import React, { useState } from 'react';
import { Film, Phone, Copy, Check, Sparkles, Armchair, Volume2, Clapperboard, Star, BellRing, UtensilsCrossed, Monitor } from 'lucide-react';
import { STORES_DIRECTORY, Store } from '../data/mallData';

interface CinemaSectionProps {
  onSelectStore: (store: Store) => void;
}

export const CinemaSection: React.FC<CinemaSectionProps> = ({ onSelectStore }) => {
  const [copied, setCopied] = useState(false);
  const [reclineAngle, setReclineAngle] = useState<'standard' | 'relax' | 'full'>('relax');
  const [activePerk, setActivePerk] = useState<string>('recline');

  const pvrStore = STORES_DIRECTORY.find((s) => s.id === 'pvr-cinemas') || STORES_DIRECTORY[2];

  const handleCopy = () => {
    navigator.clipboard.writeText('9311565544');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const perks = [
    { id: 'recline', title: '160° Plush Recliner', desc: 'Push-button motorized leather lounger with ergonomic lumbar support.' },
    { id: 'service', title: 'In-Theater Dining', desc: 'Dedicated butler service delivering gourmet popcorn, hot snacks, and mocktails.' },
    { id: 'sound', title: 'Dolby Surround 7.1', desc: 'Precision cinema audio calibration with crystal-clear vocal clarity.' },
    { id: 'lounge', title: 'Exclusive VIP Lounge', desc: 'Private lounge entry prior to screening with dedicated ticket concierges.' }
  ];

  return (
    <section id="cinema" className="py-16 bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cinema Imagery with 3D Depth */}
          <div className="lg:col-span-6 order-2 lg:order-1 perspective-1000">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group card-3d-dark">
              <img
                src="/src/assets/images/pvr_gold_class_cinema_1792312738761.jpg"
                alt="PVR Gold Class Multiplex at MBD Neopolis Jalandhar"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-transparent flex items-end p-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Gold Class Luxury Screening Room</span>
                  </div>
                  <div className="text-white font-bold text-lg font-display">
                    PVR Cinemas · Anchor First Floor
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 3D Gold Class Seat Recline Simulator */}
            <div className="mt-4 bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl">
              <div className="flex items-center justify-between text-xs mb-2.5">
                <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                  <Armchair className="w-4 h-4 text-amber-400" />
                  <span>Interactive 3D Recliner Experience:</span>
                </span>
                <span className="font-mono text-amber-400">
                  {reclineAngle === 'standard' ? '110° Standard' : reclineAngle === 'relax' ? '135° Relax Lounge' : '160° Full Gold Sleep'}
                </span>
              </div>

              {/* 3D Visualizer representation of seat pitch */}
              <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex items-center justify-center h-24 preserve-3d">
                <div
                  className="w-36 h-12 bg-amber-500/20 border-2 border-amber-400 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg"
                  style={{
                    transform:
                      reclineAngle === 'standard'
                        ? 'rotateX(0deg) scale(0.95)'
                        : reclineAngle === 'relax'
                        ? 'rotateX(30deg) scale(1)'
                        : 'rotateX(60deg) scale(1.08)',
                    boxShadow: '0 10px 25px rgba(245, 158, 11, 0.25)',
                  }}
                >
                  <span className="text-xs font-bold text-amber-300 font-display">
                    PVR VIP RECLINER
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <button
                  onClick={() => setReclineAngle('standard')}
                  className={`py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    reclineAngle === 'standard' ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Standard 110°
                </button>
                <button
                  onClick={() => setReclineAngle('relax')}
                  className={`py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    reclineAngle === 'relax' ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Relax 135°
                </button>
                <button
                  onClick={() => setReclineAngle('full')}
                  className={`py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    reclineAngle === 'full' ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  Full 160° Sleeper
                </button>
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>Entertainment Anchor</span>
              <span aria-hidden="true">·</span>
              <span>First Floor Anchor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-balance leading-tight">
              PVR Multiplex with Gold Class
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              MBD Neopolis Jalandhar houses a state-of-the-art four-screen multiplex operated by PVR, renowned for its flagship VIP <strong className="text-white font-semibold">Gold Class seating</strong>. Featuring lavish push-back leather recliners, dedicated lounge service, and cutting-edge acoustic fidelity.
            </p>

            {/* Spec Cards with 3D Depth */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="card-3d-dark bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Film className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">4 Screens</span>
                </div>
                <div className="text-sm font-bold text-white">Full Digital Projection</div>
                <div className="text-xs text-neutral-400 mt-0.5">Bollywood, Hollywood & Punjabi cinema</div>
              </div>

              <div className="card-3d-dark bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Armchair className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Gold Class</span>
                </div>
                <div className="text-sm font-bold text-white">Ultra-Plush Recliners</div>
                <div className="text-xs text-neutral-400 mt-0.5">VIP lounge & at-seat hospitality</div>
              </div>
            </div>

            {/* Interactive Perks List */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {perks.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setActivePerk(p.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activePerk === p.id
                      ? 'bg-neutral-800 border-amber-400/80'
                      : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-300">{p.title}</div>
                  <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Direct Contact & Booking Helpline */}
            <div className="bg-neutral-900/90 border border-neutral-800 p-5 rounded-2xl space-y-3">
              <div className="text-xs text-neutral-400">
                Official PVR Multiplex Box Office Desk (MBD Neopolis Jalandhar):
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-lg font-bold text-amber-400 font-mono tabular-nums flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>9311565544</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:9311565544"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    Call Box Office
                  </a>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-2 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
