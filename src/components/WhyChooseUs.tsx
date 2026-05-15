import { motion } from 'motion/react';
import { ShieldCheck, Zap, Microscope, HeartPulse, Clock, Award } from 'lucide-react';

const REASONS = [
  {
    icon: <Microscope className="text-primary" />,
    title: "Biological Resilience",
    description: "Our technologies are curated from world-class research to strengthen your biological foundation, helping you stay resilient against the challenges of ageing."
  },
  {
    icon: <ShieldCheck className="text-primary" />,
    title: "Non-Invasive Precision",
    description: "We prioritize gentle, precise interventions. No surgery, no strain—just advanced science working in harmony with your body."
  },
  {
    icon: <Award className="text-primary" />,
    title: "Sustained Independence",
    description: "Maintaining strength and stability is the ultimate luxury. Our ecosystem is designed to keep you mobile, confident, and independent."
  },
  {
    icon: <HeartPulse className="text-primary" />,
    title: "Cellular Rejuvenation",
    description: "Longevity starts at the cellular level. We target inflammation and oxidative stress to rejuvenate your system from the inside out."
  },
  {
    icon: <Clock className="text-primary" />,
    title: "Longevity-First Efficiency",
    description: "Maximum biological impact with minimal time commitment. Our protocols are designed for the high-performing individual who values health span."
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Stability & Confidence",
    description: "Enhance your proprioception and motor control. Rediscover the confidence of a body that responds with power and precision."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[.3em] mb-4 block">The Value</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">Why Longevity Seekers <br /><span className="italic text-primary">Choose AESPI</span></h2>
            <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">
              We integrate non-invasive technologies that empower you to take control of your health span. 
              Stay active, independent, and resilient through science-led wellness.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[60px] bg-slate-900 relative overflow-hidden group transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left max-w-xl">
              <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">Ready to architecture your <span className="italic text-secondary">biological health span?</span></h4>
              <p className="text-white/60 text-lg font-light">Book a strategic consultation or trial session at our Vision Exchange centre.</p>
            </div>
            <a
              href="#contact"
              className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-50 transition-all whitespace-nowrap transform group-hover:scale-105 active:scale-95"
            >
              Get Started Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
