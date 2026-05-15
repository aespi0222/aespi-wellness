import { motion } from 'motion/react';
import { BRAND } from '@/src/constants';

export function About() {
  return (
    <section id="longevity" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-5"
        >
          <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
            <img
              src="/images/about.JPG"
              alt="AESPI Vision Exchange - Longevity & Mobility"
              className="w-full h-[650px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="md:col-span-7"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.25em] rounded-full mb-8">
            The AESPI Methodology
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            Building the Foundation for <br /> <span className="italic text-primary text-secondary">Healthy Ageing</span>
          </h2>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
            At AESPI, we are architects of longevity. We believe true wellness isn't just the absence of illness, but the <span className="font-medium text-slate-900">presence of biological resilience</span>. We curate a synchronized ecosystem of science-backed technologies to help you navigate the second half of life with power, grace, and independence.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="space-y-3">
              <h4 className="font-bold text-primary uppercase text-[10px] tracking-[0.2em] opacity-60">The Strategy</h4>
              <p className="text-lg font-serif text-slate-900 italic">To integrate non-invasive clinical technologies into a high-performance routine.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-primary uppercase text-[10px] tracking-[0.2em] opacity-60">The Purpose</h4>
              <p className="text-lg font-serif text-slate-900 italic">To restore the freedom of movement and the clarity of cognitive health.</p>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
            <div className="flex -space-x-4">
              {[
                "/images/avatar-1.jpeg",
                "/images/avatar-2.jpg",
                "/images/avatar-3.jpg",
                "/images/avatar-4.jpg"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="AESPI Client"
                  className="w-14 h-14 rounded-full border-[3px] border-white shadow-xl object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-slate-900 tracking-tight">Trusted by 500+ Clients</p>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-none">Improving Lives at Vision Exchange</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
