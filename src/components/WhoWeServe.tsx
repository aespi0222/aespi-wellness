import { motion } from 'motion/react';
import { Users, Heart, ShieldPlus, Sparkles } from 'lucide-react';

const AUDIENCES = [
  {
    icon: Users,
    title: "Active Seniors",
    description: "Proactively maintaining independence, stability, and functional muscle strength for a vibrant lifestyle.",
    color: "bg-blue-500",
  },
  {
    icon: Heart,
    title: "Dedicated Caregivers",
    description: "Supporting loved ones with non-invasive technology to improve their daily comfort and mobility.",
    color: "bg-rose-500",
  },
  {
    icon: ShieldPlus,
    title: "Recovery Seekers",
    description: "Accelerating post-rehab progress and reducing inflammation through science-backed cellular support.",
    color: "bg-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Longevity Seekers",
    description: "Adults 45+ investing in biological resilience and preventive health optimization.",
    color: "bg-amber-500",
  }
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-slate-900 mb-6"
          >
            The Longevity <span className="italic text-primary">Collective</span>
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Curated technology for those who value autonomy, resilience, and science-led wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 rounded-[32px] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] transition-all group"
            >
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <audience.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">{audience.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
