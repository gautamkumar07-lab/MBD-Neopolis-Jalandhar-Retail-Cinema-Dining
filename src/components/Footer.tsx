import React from 'react';
import { MapPin, Phone, Building2, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenContact }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white tracking-tight font-display">
                MBD NEOPOLIS
              </span>
              <span className="text-xs text-amber-400 font-semibold">JALANDHAR</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Premier mixed-use retail and entertainment development on Main G.T. Road, BMC Chowk, Jalandhar, adjacent to the Radisson Hotel.
            </p>
            <div className="text-[11px] text-neutral-500 pt-1">
              Owned & Managed by MBD Group
            </div>
          </div>

          {/* Col 2: Quick Jump Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mall Exploration
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('directory')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Store Directory (21+ Outlets)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('floors')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Floor-by-Floor Level Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('gigabite')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Gigabite Food Lounge (20,000+ sq ft)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('cinema')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  PVR Cinemas & Gold Class
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('events')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Historical Events Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Business */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Business Intelligence
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavClick('research')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Jalandhar vs Ludhiana Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('research')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  MBD Group Corporate Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('research')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Website Limitations & Notes
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Leasing & Marketing Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Verified Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Desk & Address
            </h4>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>BMC Chowk, Jalandhar 144 001, Punjab</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono tabular-nums">+91 181 4305000</span>
              </div>
              <div className="text-[11px] text-neutral-400 pt-1">
                Leasing Desk: <span className="font-mono tabular-nums text-white">+91 80547 15018</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} MBD Neopolis Jalandhar. Information synthesized solely from published records at mbdneopolis.com.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-600">Radisson Hotel Adjacency · GT Road Corridors</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
