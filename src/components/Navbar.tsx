import React, { useState } from 'react';
import { Bookmark, MapPin, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedStoreCount: number;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedStoreCount,
  onOpenPlanner,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'directory', label: 'Store Directory' },
    { id: 'floors', label: 'Floor Guide' },
    { id: 'gigabite', label: 'Gigabite Food Court' },
    { id: 'cinema', label: 'PVR Gold Class' },
    { id: 'events', label: 'Mall Events' },
    { id: 'research', label: 'Business Research' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 text-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('directory')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                  MBD NEOPOLIS
                </span>
                <span className="text-xs font-medium text-amber-400 tracking-wider">
                  JALANDHAR
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-normal hidden sm:block">
                BMC Chowk · Main G.T. Road
              </p>
            </button>
          </div>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 text-[13px] ${
                  activeTab === link.id
                    ? 'text-amber-400 border-amber-400 font-semibold'
                    : 'text-neutral-300 border-transparent hover:text-white hover:border-neutral-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary action + Visit List planner button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPlanner}
              className="relative p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              title="View your saved visit list"
              aria-label="View your saved visit list"
            >
              <Bookmark className="w-5 h-5" />
              {savedStoreCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-950 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center tabular-nums">
                  {savedStoreCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Leasing & Help</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === link.id
                  ? 'bg-neutral-800 text-amber-400 font-semibold'
                  : 'text-neutral-300 hover:bg-neutral-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Leasing & Inquiries</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
