import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Activity, PieChart, BarChart3, Info, CheckCircle2, ArrowLeft, ClipboardList, Target, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';

export function BodyComposition() {
  return (
    <div className="pt-32 pb-20">
      <SEO 
        title="Longevity Biometrics & Health Span Analysis" 
        description="Know your biological markers. Medical-grade analysis tracks your health span through muscle-to-fat ratios and sarcopenia risk at AESPI Singapore."
        canonical="/body-composition"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-primary/10 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Strategy
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[.25em] rounded-full mb-8">
                Foundation: Longevity Biometrics
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-slate-900 mb-8 leading-[1.1]">
                Quantify Your <br /> <span className="italic text-primary">Health Span.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl">
                Know your markers for longevity. Medical-grade analysis tracks your muscle-to-fat ratio and biological ageing markers, allowing for a <span className="font-medium text-slate-900 underline decoration-secondary/30 decoration-4 underline-offset-4">precise strategy</span> to pivot your journey as you age.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-5">
                  <Link
                    to="/#contact"
                    className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Analyse My Markers
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Medical-grade InBody analysis used by global clinics
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[48px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white z-10">
                <img
                  src="/images/body-composition.png"
                  alt="Longevity Biometrics Tracking"
                  className="w-full h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20">
                <p className="text-3xl font-serif text-primary italic leading-none mb-1">Precision</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sarcopenia Screening</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What is Body Composition Analysis?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive assessment that breaks down your weight into essential components for a precise understanding of your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PieChart className="text-primary" />,
                title: "Essential Components",
                desc: "Analyzes fat, protein, minerals, and body water for a complete picture."
              },
              {
                icon: <Target className="text-primary" />,
                title: "Beyond BMI",
                desc: "More precise than BMI or simple weight measurements for overall health."
              },
              {
                icon: <TrendingDown className="text-primary" />,
                title: "Track Changes",
                desc: "Reveals changes in fat mass, lean muscle mass, and body fat percentage over time."
              },
              {
                icon: <Info className="text-primary" />,
                title: "Lifestyle Awareness",
                desc: "Facilitates lifestyle adjustments based on your unique physical state."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Analysis Breakdown */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">The Analysis Breakdown</h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: <Activity size={24} />, 
                    title: "Body Composition Analysis", 
                    desc: "Breaks down total weight into lean body mass, fat, and body water." 
                  },
                  { 
                    icon: <BarChart3 size={24} />, 
                    title: "Muscle-Fat Analysis", 
                    desc: "Compares weight, Skeletal Muscle Mass, and Body Fat Mass to healthy averages." 
                  },
                  { 
                    icon: <PieChart size={24} />, 
                    title: "Obesity Analysis", 
                    desc: "Displays BMI and Percent Body Fat for a more accurate health indicator." 
                  },
                  { 
                    icon: <Target size={24} />, 
                    title: "Segmental Lean Analysis", 
                    desc: "Identifies imbalances in specific body parts to prevent injury." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Detailed Result Sheets</h3>
                <p className="text-slate-600 mb-8">
                  Every analysis comes with a comprehensive result sheet. We help you interpret the data to create a personalized plan for your health goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-700">Skeletal Muscle Mass</span>
                    <span className="text-primary font-bold">Accurate</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-700">Percent Body Fat</span>
                    <span className="text-primary font-bold">Precise</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <span className="font-bold text-slate-700">Visceral Fat Level</span>
                    <span className="text-primary font-bold">Critical</span>
                  </div>
                </div>
                <a 
                  href="https://inbodyasia.com/body-composition-result-sheet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-primary font-bold hover:underline"
                >
                  Learn how to read result sheets →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Media */}
      <ResourceSection serviceId="inbody" />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Know Your Body Better</h2>
          <p className="text-white/80 text-lg mb-10">
            Stop guessing and start measuring. Get your medical-grade body composition analysis at AESPI today.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
