import { motion } from 'motion/react';
import { HeartPulse, ArrowRight, Shield, Activity, Sparkles } from 'lucide-react';

export function CommunityImpact() {
  return (
    <section id="community-impact" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] bg-primary text-white p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Ambient subtle warm-gold light glow in backgrounds */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visionary Branding & Heading */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-[11px] font-bold text-accent uppercase tracking-[.25em] mb-6">
                <Sparkles size={12} /> Social Impact Initiative
              </span>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Healthy Ageing Should Be <br />
                <span className="italic text-accent font-extrabold">Accessible To Everyone</span>
              </h2>
              
              <p className="text-white mb-8 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                At AESPI, we believe every senior deserves the opportunity to remain strong, mobile, and independent as they age. As part of our commitment to healthy ageing, we reserve a limited number of community-access places each month for eligible seniors through our Community Healthy Ageing Access Programme.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur border border-slate-800/80 px-5 py-3.5 rounded-2xl">
                  <Shield size={20} className="text-accent shrink-0" />
                  <span className="text-sm text-white font-bold font-serif">CHAS Support Included</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur border border-slate-800/80 px-5 py-3.5 rounded-2xl">
                  <Activity size={20} className="text-accent shrink-0" />
                  <span className="text-sm text-white font-bold font-serif">Mobility & Autonomy Focused</span>
                </div>
              </div>

              <a
                href="/community-healthy-ageing-access-programme"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-white/5 group"
              >
                Learn More
                <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right Column: Key Metric Highlight Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-[32px] bg-slate-900/40 backdrop-blur border border-slate-800/80 shadow-inner">
                <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <HeartPulse size={24} />
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4 font-bold leading-snug">
                  Supporting Senior <br />
                  <span className="italic text-accent font-bold">Vitality & Independence</span>
                </h3>
                
                <p className="text-white text-sm leading-relaxed font-medium mb-6">
                  Our Community Access Programme offers guided wellness sessions using medical-grade technologies under precise professional care—empowering seniors to maintain their personal freedom.
                </p>
                
                <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6">
                  <div>
                    <h5 className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">Target Areas</h5>
                    <p className="text-xs text-white font-bold">Strength, Balance, Mobility</p>
                  </div>
                  <div className="w-px h-8 bg-slate-800" />
                  <div>
                    <h5 className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1">Eligible</h5>
                    <p className="text-xs text-white font-bold">CHAS Blue & Orange</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
