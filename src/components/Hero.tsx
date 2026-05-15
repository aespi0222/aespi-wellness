import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Zap, Shield } from 'lucide-react';
import { BRAND } from '@/src/constants';
import { TrialChoiceModal } from './TrialChoiceModal';

export function Hero() {
  const [showTrialChoice, setShowTrialChoice] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-surface">
      <TrialChoiceModal 
        isOpen={showTrialChoice} 
        onClose={() => setShowTrialChoice(false)} 
      />
      
      {/* Refined Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-[200px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            The Longevity & Mobility Collective
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-8 text-balance">
            Live <span className="italic text-primary">Stronger.</span> <br /> 
            Age <span className="italic text-secondary">Better.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-light">
            Helping adults and seniors stay active, independent, and resilient through science-backed wellness technologies. Invest in your <span className="font-medium text-slate-900">biological health span</span> today.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button
              onClick={() => setShowTrialChoice(true)}
              className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 hover:shadow-primary/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Your Longevity Journey <ArrowRight size={18} />
            </button>
            <a
              href="#technologies"
              className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all"
            >
              The Ecosystem
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="/images/Hero.jpg"
                alt="AESPI Premium Longevity Experience"
                className="w-full h-[650px] object-cover scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60" />
            </div>
          </div>
          
          {/* Minimal Floating Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-8 glass px-6 py-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
              <Zap size={22} className="fill-secondary/20" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Biological Ageing</p>
              <p className="text-lg font-serif text-slate-900 leading-none">Resilience First</p>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass px-6 py-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
              <Shield size={22} className="fill-primary/5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol Safety</p>
              <p className="text-lg font-serif text-slate-900 leading-none">Science-Backed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
