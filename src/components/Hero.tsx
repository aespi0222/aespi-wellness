import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Zap, Shield } from 'lucide-react';
import { BRAND } from '@/src/constants';
import { TrialChoiceModal } from './TrialChoiceModal';

export function Hero() {
  const [showTrialChoice, setShowTrialChoice] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      <TrialChoiceModal 
        isOpen={showTrialChoice} 
        onClose={() => setShowTrialChoice(false)} 
      />
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] transform translate-x-20 -rotate-6" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Activity size={14} />
            Active Aging & Longevity Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Vibrant Longevity <span className="text-primary italic">Starts Here</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            At {BRAND.name}, we empower seniors to maintain independence and vitality through science-backed, non-invasive therapies. 
            Experience gentle muscle activation and cellular rejuvenation designed for your golden years.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowTrialChoice(true)}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Book a Trial Now <ArrowRight size={18} />
            </button>
            <a
              href="#services"
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-primary">10/20</span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Minute Sessions</span>
            </div>
            <div className="flex flex-col gap-1 border-x border-slate-200 px-6">
              <span className="text-2xl font-bold text-primary">Once</span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">A Week</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-primary">100%</span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Non-Invasive</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="/images/Hero.jpg"
              alt="Muscle Activation Wellness - Active Aging"
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">Active Aging</p>
              <p className="text-sm font-bold text-slate-900">Vibrant Living</p>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">Gentle & Safe</p>
              <p className="text-sm font-bold text-slate-900">Non-Invasive</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
