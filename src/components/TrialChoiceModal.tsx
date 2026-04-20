import { motion, AnimatePresence } from 'motion/react';
import { X, Activity, Wind, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TrialChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialChoiceModal({ isOpen, onClose }: TrialChoiceModalProps) {
  const navigate = useNavigate();

  const handleSelection = (path: string) => {
    onClose();
    navigate(`${path}?book=true`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Trial Experience</h2>
              <p className="text-slate-500">Select the service you'd like to try at AESPI Wellness Studio</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* BIXEPS Choice */}
              <button
                onClick={() => handleSelection('/bixeps')}
                className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[32px] text-left hover:bg-primary hover:border-primary transition-all shadow-sm hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-primary group-hover:text-white mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">BIXEPS Pro</h3>
                <p className="text-sm text-slate-500 group-hover:text-white/80 mb-6 leading-relaxed">
                  Magnetic muscle activation to build strength and improve balance.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-primary group-hover:text-white uppercase tracking-widest">$50 per trial</span>
                  <ArrowRight size={18} className="text-primary group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </button>

              {/* Molecular Hydrogen Choice */}
              <button
                onClick={() => handleSelection('/h2-hydrogen')}
                className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[32px] text-left hover:bg-secondary hover:border-secondary transition-all shadow-sm hover:shadow-xl hover:shadow-secondary/20"
              >
                <div className="w-12 h-12 bg-secondary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center text-secondary group-hover:text-white mb-6">
                  <Wind size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">Molecular Hydrogen</h3>
                <p className="text-sm text-slate-500 group-hover:text-white/80 mb-6 leading-relaxed">
                  Cellular recovery therapy for reduced inflammation and better energy.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-secondary group-hover:text-white uppercase tracking-widest">Trial available</span>
                  <ArrowRight size={18} className="text-secondary group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-10">
              Not sure? <a href="/#contact" onClick={onClose} className="text-primary font-bold hover:underline">Contact us</a> for a recommendation.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
