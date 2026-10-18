import React, { useState, useMemo } from 'react';
import { Search, Phone, Bookmark, BookmarkCheck, Copy, Check, Eye, X, Filter } from 'lucide-react';
import { Store, STORES_DIRECTORY } from '../data/mallData';

interface StoreDirectoryProps {
  onSelectStore: (store: Store) => void;
  savedStoreIds: string[];
  onToggleSaveStore: (storeId: string) => void;
}

export const StoreDirectory: React.FC<StoreDirectoryProps> = ({
  onSelectStore,
  savedStoreIds,
  onToggleSaveStore,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFloor, setSelectedFloor] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const list = Array.from(new Set(STORES_DIRECTORY.map((s) => s.category)));
    return ['ALL', ...list];
  }, []);

  const floors = [
    { code: 'ALL', label: 'All Levels' },
    { code: 'LGF', label: 'Lower Ground' },
    { code: 'GF', label: 'Ground Floor' },
    { code: 'FF', label: 'First Floor' },
    { code: 'SF', label: 'Second Floor' },
    { code: 'TF', label: 'Food Court & Entertainment' },
  ];

  const filteredStores = useMemo(() => {
    return STORES_DIRECTORY.filter((store) => {
      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.shopNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFloor = selectedFloor === 'ALL' || store.floorCode === selectedFloor;
      const matchesCategory = selectedCategory === 'ALL' || store.category === selectedCategory;

      return matchesSearch && matchesFloor && matchesCategory;
    });
  }, [searchQuery, selectedFloor, selectedCategory]);

  const handleCopyPhone = (storeId: string, phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedId(storeId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="directory" className="py-16 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
              Verified Website Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
              Mall Store & Tenant Directory
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Browse official retail stores, anchors, food court outlets, and entertainment zones with published shop codes and contact numbers.
            </p>
          </div>
          <div className="text-xs text-neutral-500 whitespace-nowrap">
            Showing <span className="font-semibold text-neutral-900 tabular-nums">{filteredStores.length}</span> of{' '}
            <span className="font-semibold text-neutral-900 tabular-nums">{STORES_DIRECTORY.length}</span> verified listings
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stores by brand, shop number (e.g. G-1, Anchor GF), or category..."
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Floor Level Filter Tabs */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-neutral-500 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-neutral-400" />
              <span>Select Floor Level:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {floors.map((fl) => (
                <button
                  key={fl.code}
                  onClick={() => setSelectedFloor(fl.code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedFloor === fl.code
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {fl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills (Interactive Segmented controls) */}
          <div className="space-y-2 pt-1 border-t border-neutral-100">
            <div className="text-xs font-medium text-neutral-500">Filter by Category:</div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-100 text-amber-900 font-semibold border border-amber-300'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-transparent'
                  }`}
                >
                  {cat === 'ALL' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Store Grid */}
        {filteredStores.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-neutral-200 p-8">
            <p className="text-base font-semibold text-neutral-800">No stores found matching your filters</p>
            <p className="text-xs text-neutral-500 mt-1">Try adjusting your search terms or clearing selected filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFloor('ALL');
                setSelectedCategory('ALL');
              }}
              className="mt-4 px-4 py-2 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStores.map((store) => {
              const isSaved = savedStoreIds.includes(store.id);
              const isCopied = copiedId === store.id;

              return (
                <div
                  key={store.id}
                  onClick={() => onSelectStore(store)}
                  className="group bg-white rounded-2xl border border-neutral-200/90 hover:border-amber-400/80 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer card-3d relative overflow-hidden"
                >
                  {/* Subtle 3D Top Sheen */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Unboxed clean metadata line */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-2 font-mono">
                      <span className="font-semibold text-amber-800 bg-amber-50/90 border border-amber-200/60 px-2 py-0.5 rounded-md shadow-xs">
                        {store.shopNumber}
                      </span>
                      <span>{store.floor}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-800 transition-colors font-display">
                        {store.name}
                      </h3>
                      {store.isAnchor && (
                        <span className="text-[11px] font-medium text-neutral-600 uppercase tracking-wider bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
                          Anchor
                        </span>
                      )}
                    </div>

                    <div className="text-xs text-neutral-500 mt-1 font-medium">
                      {store.category}
                    </div>

                    <p className="text-xs text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
                      {store.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {store.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-neutral-500 bg-neutral-50 border border-neutral-200/80 px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <a
                        href={`tel:${store.phone.replace(/[^0-9+]/g, '')}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors tabular-nums"
                        title={`Call ${store.phone}`}
                      >
                        <Phone className="w-3 h-3 text-neutral-500" />
                        <span>{store.phone}</span>
                      </a>

                      <button
                        onClick={(e) => handleCopyPhone(store.id, store.phone, e)}
                        className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                        title="Copy phone number"
                        aria-label={`Copy phone for ${store.name}`}
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSaveStore(store.id);
                        }}
                        className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                          isSaved
                            ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                            : 'text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100'
                        }`}
                        title={isSaved ? 'Remove from visit list' : 'Add to visit list'}
                        aria-label="Save store to visit list"
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-4 h-4 text-amber-600" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onSelectStore(store)}
                        className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                        title="View details"
                        aria-label="View store details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
