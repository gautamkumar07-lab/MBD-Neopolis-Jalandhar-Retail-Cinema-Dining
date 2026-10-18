import React, { useState } from 'react';
import { X, Bookmark, Trash2, Phone, Copy, Check, MapPin, Share2, Layers, ArrowRight } from 'lucide-react';
import { STORES_DIRECTORY, Store } from '../data/mallData';

interface VisitPlannerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedStoreIds: string[];
  onToggleSaveStore: (storeId: string) => void;
  onClearAll: () => void;
  onSelectStore: (store: Store) => void;
}

export const VisitPlannerDrawer: React.FC<VisitPlannerDrawerProps> = ({
  isOpen,
  onClose,
  savedStoreIds,
  onToggleSaveStore,
  onClearAll,
  onSelectStore,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const savedStores = STORES_DIRECTORY.filter((s) => savedStoreIds.includes(s.id));

  // Group by floor
  const floorOrder = ['LGF', 'GF', 'FF', 'SF', 'TF'];
  const groupedByFloor: { [key: string]: Store[] } = {};
  savedStores.forEach((store) => {
    if (!groupedByFloor[store.floorCode]) {
      groupedByFloor[store.floorCode] = [];
    }
    groupedByFloor[store.floorCode].push(store);
  });

  const handleCopyItinerary = () => {
    let text = `My MBD Neopolis Jalandhar Mall Itinerary (${savedStores.length} stores):\n\n`;
    floorOrder.forEach((fCode) => {
      const stores = groupedByFloor[fCode];
      if (stores && stores.length > 0) {
        text += `• ${stores[0].floor}:\n`;
        stores.forEach((s) => {
          text += `  - ${s.name} (${s.shopNumber}) | Tel: ${s.phone}\n`;
        });
      }
    });
    text += `\nLocation: MBD Neopolis, BMC Chowk, Jalandhar (Next to Radisson Hotel)`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/60 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-neutral-200">
          {/* Drawer Header */}
          <div className="p-5 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-base font-bold font-display text-white">
                  My Mall Visit Itinerary
                </h3>
                <p className="text-xs text-neutral-400">
                  {savedStores.length} {savedStores.length === 1 ? 'store pinned' : 'stores pinned'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close visit planner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {savedStores.length === 0 ? (
              <div className="text-center py-16 px-4">
                <Bookmark className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-neutral-800">Your itinerary is empty</h4>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Click the bookmark icon on any store in the directory or floor guide to organize your shopping trip.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  Browse Store Directory
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Actions Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs">
                  <button
                    onClick={handleCopyItinerary}
                    className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 font-medium cursor-pointer"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Itinerary Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Copy Itinerary</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onClearAll}
                    className="text-neutral-400 hover:text-red-600 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                </div>

                {/* Grouped by floor */}
                {floorOrder.map((fCode) => {
                  const storesInFloor = groupedByFloor[fCode];
                  if (!storesInFloor || storesInFloor.length === 0) return null;

                  return (
                    <div key={fCode} className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5 text-amber-600" />
                        <span>{storesInFloor[0].floor}</span>
                        <span className="text-neutral-400 font-normal">({storesInFloor.length})</span>
                      </div>

                      <div className="space-y-2">
                        {storesInFloor.map((store) => (
                          <div
                            key={store.id}
                            className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors flex items-center justify-between gap-3"
                          >
                            <div
                              onClick={() => {
                                onSelectStore(store);
                                onClose();
                              }}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
                                <span className="font-semibold text-amber-800 bg-amber-50 px-1 rounded">
                                  {store.shopNumber}
                                </span>
                                <span>{store.category}</span>
                              </div>
                              <h5 className="text-sm font-bold text-neutral-900 mt-0.5 hover:text-amber-700 transition-colors">
                                {store.name}
                              </h5>
                              <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-1 font-mono">
                                <Phone className="w-3 h-3 text-neutral-400" />
                                <span>{store.phone}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => onToggleSaveStore(store.id)}
                              className="p-1.5 text-neutral-400 hover:text-red-600 rounded-md transition-colors cursor-pointer"
                              title="Remove from itinerary"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {savedStores.length > 0 && (
            <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs">
              <div className="text-neutral-500">
                MBD Neopolis · BMC Chowk
              </div>
              <button
                onClick={handleCopyItinerary}
                className="px-4 py-2 font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                Copy Itinerary Summary
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
