import { motion } from 'motion/react';
import { ShieldCheck, Zap, Microscope, HeartPulse, Clock, Award } from 'lucide-react';

const REASONS = [
  {
    icon: <Microscope className="text-primary" />,
    title: "Science-Backed Safety",
    description: "Our core technologies like BIXEPS Pro are developed through research at world-class institutions, ensuring safe and effective care for seniors."
  },
  {
    icon: <ShieldCheck className="text-primary" />,
    title: "Gentle & Non-Invasive",
    description: "We prioritize treatments that are gentle on your body. No surgery, no needles, and no physical strain—perfect for maintaining mobility."
  },
  {
    icon: <Award className="text-primary" />,
    title: "Independence & Vitality",
    description: "Our goal is to help you maintain your independence. Improve balance and strength to stay active in your daily life."
  },
  {
    icon: <HeartPulse className="text-primary" />,
    title: "Cellular Health",
    description: "From muscle activation to molecular hydrogen therapy, we address health at the cellular level to support overall longevity."
  },
  {
    icon: <Clock className="text-primary" />,
    title: "Efficient Sessions",
    description: "Our protocols are designed for maximum benefit in minimal time, offering significant health improvements in just 10-20 minutes."
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Better Balance",
    description: "Many of our senior clients report feeling more stable and confident on their feet after just a few sessions."
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Seniors Choose AESPI?</h2>
            <p className="text-slate-600 max-w-2xl">
              We specialize in non-invasive technologies that help seniors maintain independence, 
              improve mobility, and enjoy a higher quality of life without the strain of traditional exercise.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-[40px] bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to experience the AESPI difference?</h4>
            <p className="text-slate-600 text-sm">Book a consultation or trial session at our Vision Exchange centre today.</p>
          </div>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/25 transition-all whitespace-nowrap"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
