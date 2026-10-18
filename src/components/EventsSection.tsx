import React, { useState, useMemo } from 'react';
import { Calendar, Tag, Search, Info, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { MALL_EVENTS, MallEvent } from '../data/mallData';

export const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Celebration', 'Sports & Fitness', 'Automobile Display', 'Store Launch', 'Community & Culture', 'Entertainment'];
  const years = ['ALL', '2021', '2020', '2019', '2018', 'Historical'];

  const filteredEvents = useMemo(() => {
    return MALL_EVENTS.filter((evt) => {
      const matchesSearch =
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'ALL' || evt.category === selectedCategory;
      const matchesYear =
        selectedYear === 'ALL' ||
        (selectedYear === 'Historical' ? evt.year === 'Historical' || !evt.year : evt.year === selectedYear);

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  return (
    <section id="events" className="py-16 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
              Documented Mall Archive
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
              Mall Events & Community History
            </h2>
            <p className="mt-1 text-sm text-neutral-600 max-w-2xl">
              Chronicle of community celebrations, automobile showcases, store inaugurations, and cultural activities recorded on the official website.
            </p>
          </div>

          {/* Research Transparency Callout */}
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 p-3 rounded-xl max-w-md text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Archive Note:</strong> These represent historical website event records. The website lists these to showcase event capabilities rather than upcoming calendar dates.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search past events by name, theme, or category (e.g. Decathlon, Honda, Anniversary)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 border-t border-neutral-100">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-neutral-500 mr-1">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 text-white font-medium shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat === 'ALL' ? 'All' : cat}
                </button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              <span className="text-xs text-neutral-500 mr-1">Year:</span>
              {years.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer font-mono ${
                    selectedYear === yr
                      ? 'bg-amber-400 text-neutral-950 font-bold'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="card-3d bg-white rounded-2xl border border-neutral-200 p-5 shadow-xs hover:border-amber-400/80 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {evt.category}
                  </span>
                  <span className="font-mono tabular-nums text-neutral-500">
                    {evt.year === 'Historical' ? 'Landmark Event' : evt.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 font-display">
                  {evt.title}
                </h3>

                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {evt.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Published on Website</span>
                </span>
                <span className="text-amber-800 font-medium">Historical Archive</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
