import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import promoData from '../data/promos.json';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!promoData.active) return;

    // 1. Date Range Check
    const now = new Date();
    const start = new Date(promoData.startDate);
    const end = new Date(promoData.endDate);

    if (now < start || now > end) return;

    // 2. Frequency Logic (Local Storage)
    const storageKey = `aespi_promo_${promoData.id}_last_seen`;
    const lastSeen = localStorage.getItem(storageKey);
    const frequencyMs = promoData.frequencyDays * 24 * 60 * 60 * 1000;

    if (lastSeen) {
      const timeSinceLastSeen = now.getTime() - parseInt(lastSeen, 10);
      if (timeSinceLastSeen < frequencyMs) return;
    }

    // 3. Trigger Visibility after Delay
    const delay = promoData.popupDelay ?? 5000;
    const timer = setTimeout(() => {
      setIsVisible(true);
      localStorage.setItem(storageKey, now.getTime().toString());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9998]"
          />

          {/* Popup Container */}
          <div className="fixed inset-0 flex items-center justify-center p-6 z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20 transition-all font-light"
                aria-label="Close promotion"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              <div className="grid md:grid-cols-3">
                {/* Image Section */}
                <div className="relative h-64 md:h-[500px] md:col-span-2 bg-slate-50/50">
                  <img
                    src={promoData.image}
                    alt={promoData.title}
                    className="absolute inset-0 w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent md:hidden" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col justify-center bg-surface md:col-span-1">
                  <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-fit">
                    {promoData.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 leading-tight italic">
                    {promoData.title}
                  </h2>
                  <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm">
                    {promoData.description}
                  </p>
                  
                  <Link
                    to={promoData.ctaLink}
                    onClick={closePopup}
                    className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-1 text-sm"
                  >
                    <span>{promoData.ctaText}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
