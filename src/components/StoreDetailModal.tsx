import React, { useState } from 'react';
import { X, Phone, Copy, Check, MapPin, Clock, Bookmark, BookmarkCheck, Share2, Sparkles, AlertCircle } from 'lucide-react';
import { Store } from '../data/mallData';

interface StoreDetailModalProps {
  store: Store | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (storeId: string) => void;
}

export const StoreDetailModal: React.FC<StoreDetailModalProps> = ({
  store,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  if (!store) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${store.name} at MBD Neopolis Jalandhar`,
        text: `Check out ${store.name} (${store.shopNumber}, ${store.floor}) at MBD Neopolis Jalandhar. Phone: ${store.phone}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${store.name} - Shop ${store.shopNumber}, ${store.floor}, MBD Neopolis Jalandhar. Phone: ${store.phone}`);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.45)] border border-neutral-300 transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="store-title"
      >
        {/* Header Bar */}
        <div className="bg-neutral-900 text-white px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
              <span>{store.shopNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{store.floor}</span>
            </div>
            <h3 id="store-title" className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
              {store.name}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">{store.category}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close store details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200/80 text-xs">
            <div>
              <span className="text-neutral-500 block">Location Code</span>
              <span className="font-semibold text-neutral-900 font-mono mt-0.5 block">{store.shopNumber}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Mall Level</span>
              <span className="font-semibold text-neutral-900 mt-0.5 block">{store.floor}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Operating Hours</span>
              <span className="font-semibold text-neutral-900 mt-0.5 block flex items-center gap-1">
                <Clock className="w-3 h-3 text-neutral-400" />
                <span>{store.timings || '11:00 AM – 9:30 PM'}</span>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block">Directory Status</span>
              <span className="font-semibold text-neutral-900 mt-0.5 block">Official Published Listing</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
              Store Profile & Offerings
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {store.description}
            </p>
          </div>

          {/* Category Tags */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              Tags & Specialties
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {store.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Numbers Callout */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-2">
              Official Store Contact
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-neutral-900 font-mono tabular-nums flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>{store.phone}</span>
                </div>
                {store.secondaryPhone && (
                  <div className="text-xs text-neutral-600 font-mono tabular-nums mt-1">
                    Alt: {store.secondaryPhone}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${store.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  Call Now
                </a>
                <button
                  onClick={() => handleCopy(store.phone)}
                  className="px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
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

          {/* Directory Verification Note */}
          <div className="text-[11px] text-neutral-500 bg-neutral-100/60 p-3 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <p>
              This listing is sourced directly from the published MBD Neopolis Jalandhar floor-wise directory. Store telephone lines and operating hours may vary on public holidays.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleSave(store.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              isSaved
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-white text-neutral-800 border border-neutral-300 hover:bg-neutral-100'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-700" />
                <span>Saved in Visit List</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4 text-neutral-500" />
                <span>Add to Visit List</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
              title="Share store info"
            >
              {shared ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
