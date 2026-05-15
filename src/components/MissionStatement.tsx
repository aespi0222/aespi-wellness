import { motion } from 'motion/react';

export function MissionStatement() {
  return (
    <section className="py-32 bg-primary overflow-hidden relative">
      {/* Decorative refined patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B45309_0%,_transparent_70%)] opacity-10" 
      />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.2] text-balance">
            “Helping adults and seniors stay <span className="italic text-secondary">active, independent, and resilient</span> through science-backed wellness technologies.”
          </h2>
          <div className="w-24 h-px bg-white/20 mx-auto" />
          <p className="text-white/60 text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Longevity is not a dream—it's a deliberate architecture of biological resilience. We help you build it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
