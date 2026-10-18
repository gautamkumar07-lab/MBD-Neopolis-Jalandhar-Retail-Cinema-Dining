import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StoreDirectory } from './components/StoreDirectory';
import { FloorGuide } from './components/FloorGuide';
import { GigabiteSection } from './components/GigabiteSection';
import { CinemaSection } from './components/CinemaSection';
import { EventsSection } from './components/EventsSection';
import { BusinessResearchSection } from './components/BusinessResearchSection';
import { ContactSection } from './components/ContactSection';
import { StoreDetailModal } from './components/StoreDetailModal';
import { VisitPlannerDrawer } from './components/VisitPlannerDrawer';
import { Footer } from './components/Footer';
import { Store, STORES_DIRECTORY } from './data/mallData';

export default function App() {
  const [activeTab, setActiveTab] = useState('directory');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [savedStoreIds, setSavedStoreIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mbd_neopolis_saved_stores');
      return saved ? JSON.parse(saved) : ['shoppers-stop', 'pvr-cinemas', 'decathlon'];
    } catch {
      return ['shoppers-stop', 'pvr-cinemas', 'decathlon'];
    }
  });
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('mbd_neopolis_saved_stores', JSON.stringify(savedStoreIds));
    } catch {}
  }, [savedStoreIds]);

  const handleToggleSaveStore = (storeId: string) => {
    setSavedStoreIds((prev) =>
      prev.includes(storeId) ? prev.filter((id) => id !== storeId) : [...prev, storeId]
    );
  };

  const handleClearAllSaved = () => {
    setSavedStoreIds([]);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedStoreCount={savedStoreIds.length}
        onOpenPlanner={() => setIsPlannerOpen(true)}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreDirectory={() => scrollToSection('directory')}
          onExploreFloors={() => scrollToSection('floors')}
          onViewGigabite={() => scrollToSection('gigabite')}
        />

        {/* Store Directory with Live Search and Filters */}
        <StoreDirectory
          onSelectStore={(store) => setSelectedStore(store)}
          savedStoreIds={savedStoreIds}
          onToggleSaveStore={handleToggleSaveStore}
        />

        {/* Floor-by-Floor Interactive Guide */}
        <FloorGuide onSelectStore={(store) => setSelectedStore(store)} />

        {/* Gigabite Food Lounge 20,000+ sq ft Spotlight */}
        <GigabiteSection
          onSelectStore={(store) => setSelectedStore(store)}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* PVR Multiplex & Gold Class Cinema Feature */}
        <CinemaSection onSelectStore={(store) => setSelectedStore(store)} />

        {/* Documented Historical Mall Events Archive */}
        <EventsSection />

        {/* Website-Based Business Research, Comparison & Audit */}
        <BusinessResearchSection />

        {/* Official Coordinates & Inquiry / Careers Portal */}
        <ContactSection />
      </main>

      {/* Footnote & Navigation Footer */}
      <Footer
        onNavClick={scrollToSection}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Interactive Store Detail Modal */}
      <StoreDetailModal
        store={selectedStore}
        onClose={() => setSelectedStore(null)}
        isSaved={selectedStore ? savedStoreIds.includes(selectedStore.id) : false}
        onToggleSave={handleToggleSaveStore}
      />

      {/* Saved Itinerary / Visit Planner Drawer */}
      <VisitPlannerDrawer
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        savedStoreIds={savedStoreIds}
        onToggleSaveStore={handleToggleSaveStore}
        onClearAll={handleClearAllSaved}
        onSelectStore={(store) => setSelectedStore(store)}
      />
    </div>
  );
}
