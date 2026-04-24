import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Shield, Zap, Brain, Heart, CheckCircle2, ArrowLeft, Droplets, Activity, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';

export function H2Hydrogen() {
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();

  // Handle ?book=true query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('book') === 'true') {
      setShowBooking(true);
    }
  }, [location]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showBooking) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showBooking]);

  const handleBookTrial = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBooking(true);
  };

  return (
    <div className="pt-32 pb-20">
      <SEO 
        title="Molecular Hydrogen Therapy - Cellular Rejuvenation" 
        description="Discover the benefits of Molecular Hydrogen (H2) inhalation at AESPI. Reduce oxidative stress, inflammation, and improve sleep with the smallest therapeutic molecule."
        canonical="/h2-hydrogen"
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Molecular Hydrogen (H₂): <span className="text-secondary italic">Recover Faster</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A gentle, cellular-level therapy that supports healthy aging. H₂ helps seniors reduce inflammation, 
                improve sleep quality, and boost daily energy levels through a simple, relaxing inhalation process.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBookTrial}
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/25 transition-all text-center min-w-[180px]"
                >
                  Book Your Trial
                </button>
                <Link
                  to="/#contact"
                  className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center min-w-[180px]"
                >
                  General Enquiry
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/hydrogen.png"
                  alt="Molecular Hydrogen Therapy - Relaxation"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20">
                <p className="text-3xl font-bold text-primary">H₂</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Smallest Molecule</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Molecular Hydrogen? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Molecular Hydrogen?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Molecular Hydrogen (H₂) is a tasteless, odorless gas that has emerged as a powerful therapeutic medical gas. 
                As the smallest molecule in the universe, it possesses unique properties that allow it to penetrate deep into 
                cells and even the blood-brain barrier.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Unlike traditional antioxidants, H₂ is a <strong>selective antioxidant</strong>. It specifically targets the most 
                harmful free radicals in your body while leaving beneficial ones intact, helping to reduce oxidative stress 
                and inflammation at their source.
              </p>
              <div className="flex items-center gap-4 text-secondary font-bold">
                <Droplets size={24} />
                <span>Pure, natural, and zero-waste cellular support.</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Smallest Molecule", desc: "Effortlessly reaches every cell and organ in the body, including the brain." },
                { title: "Selective Action", desc: "Only neutralizes toxic radicals, preserving beneficial ones for cell signaling." },
                { title: "Zero Side Effects", desc: "Converts harmful radicals into pure, hydrating water with no toxic by-products." },
                { title: "Science-Backed", desc: "Supported by over 1,000 peer-reviewed medical studies globally." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">The Science of Selective Antioxidants</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Oxidative stress is caused by Reactive Oxygen Species (ROS). While some ROS are beneficial for cell signaling, 
                the <strong>Hydroxyl Radical (•OH)</strong> is highly toxic and causes significant cellular damage.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Molecular Hydrogen (H₂) is a <strong>selective antioxidant</strong>. It specifically targets and neutralizes only the 
                most harmful radicals (•OH), converting them into harmless water (H₂O) without interfering with essential biological processes.
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
                <h4 className="text-secondary font-bold mb-4 flex items-center gap-2">
                  <Activity size={20} /> The Chemical Reaction
                </h4>
                <div className="flex items-center justify-center gap-4 py-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-secondary/20">H₂</div>
                    <span className="text-xs mt-2 text-slate-400">Hydrogen</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-500">+</div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-accent/20">2•OH</div>
                    <span className="text-xs mt-2 text-slate-400">Hydroxyl Radicals</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-500">→</div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">2H₂O</div>
                    <span className="text-xs mt-2 text-slate-400">Pure Water</span>
                  </div>
                </div>
                <p className="text-center text-sm text-slate-400 italic">
                  H₂ neutralizes toxic radicals into pure water, hydrating your cells while removing waste.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/10">
                <img
                  src="/images/berries.png"
                  alt="Antioxidant Rich Berries"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              
              {/* Floating Data Points */}
              <div className="absolute top-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-xs font-bold text-secondary uppercase mb-1">Selectivity</p>
                <p className="text-sm text-slate-900 font-medium leading-tight">Targets only the most harmful free radicals.</p>
              </div>
              <div className="absolute bottom-10 -right-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-xs font-bold text-primary uppercase mb-1">By-product</p>
                <p className="text-sm text-slate-900 font-medium leading-tight">Zero waste—converts toxins into water.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Inhalation Process */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">The H₂ Inhalation Process</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our molecular hydrogen therapy is a simple, non-invasive process that you can enjoy while relaxing, 
                reading, or even taking a light nap.
              </p>

              <div className="space-y-10">
                {[
                  {
                    icon: <Heart className="text-secondary" />,
                    title: "1. Comfortable Setup",
                    desc: "You'll be seated in a comfortable, reclining chair in a quiet, peaceful environment designed for maximum relaxation."
                  },
                  {
                    icon: <Wind className="text-secondary" />,
                    title: "2. Gentle Delivery",
                    desc: "A personal nasal cannula is used to deliver the hydrogen gas. For hygiene purposes, all trial users are required to purchase a new cannula at $10 (one-time purchase)."
                  },
                  {
                    icon: <Activity className="text-secondary" />,
                    title: "3. Relax & Breathe",
                    desc: "Simply breathe normally for 30 to 60 minutes. The gas is odorless and tasteless, making the experience completely effortless."
                  },
                  {
                    icon: <Zap className="text-secondary" />,
                    title: "4. Immediate Return",
                    desc: "There is no downtime. After your session, you can immediately resume your daily activities, often feeling more energized and clear-headed."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shadow-md border border-slate-100">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative bg-slate-900 p-8 rounded-[40px] shadow-2xl border-8 border-slate-800">
                <div className="absolute top-0 right-0 p-8">
                  <Droplets className="text-secondary opacity-20" size={120} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Session Protocol</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">30m</div>
                    <p className="text-slate-300 font-medium text-sm">Standard recovery session</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">60m</div>
                    <p className="text-slate-300 font-medium text-sm">Deep cellular rejuvenation</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2-3x</div>
                    <p className="text-slate-300 font-medium text-sm">Recommended sessions per week</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-secondary/10 rounded-3xl border border-secondary/20">
                  <p className="text-sm text-secondary font-medium leading-relaxed italic">
                    "The most relaxing part of my week. I feel the difference in my energy levels almost immediately."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">The Benefits of H₂ Wellness</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap size={20} />, title: "Increase Fitness", desc: "Boost energy levels and physical performance." },
                  { icon: <Activity size={20} />, title: "Faster Recovery", desc: "Reduce muscle fatigue and inflammation after exercise." },
                  { icon: <Brain size={20} />, title: "Cognitive Support", desc: "Protect brain cells and support mental clarity." },
                  { icon: <Heart size={20} />, title: "Metabolic Health", desc: "Help balance metabolic processes and support gut health." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-secondary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Safety</p>
                    <p className="text-lg font-bold text-slate-900">100% Safe & Natural</p>
                  </div>
                  <div className="bg-secondary p-6 rounded-3xl shadow-lg text-white">
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Bioavailability</p>
                    <p className="text-lg font-bold">Superior Absorption</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-primary p-6 rounded-3xl shadow-lg text-white">
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Anti-Aging</p>
                    <p className="text-lg font-bold">Cellular Rejuvenation</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Effect</p>
                    <p className="text-lg font-bold">Anti-Inflammatory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Can Benefit from H₂ Therapy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Molecular Hydrogen is a versatile therapy that supports health and performance across all stages of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seniors",
                desc: "Reduce chronic inflammation, improve sleep quality, and support healthy cognitive aging through gentle cellular support."
              },
              {
                title: "Athletes",
                desc: "Accelerate muscle recovery, reduce blood lactate levels, and improve endurance during intense training cycles."
              },
              {
                title: "Chronic Pain Sufferers",
                desc: "Manage inflammation-related pain in joints and muscles without the side effects of traditional medications."
              },
              {
                title: "Busy Professionals",
                desc: "Combat the effects of stress and mental fatigue while improving focus and daily energy levels."
              },
              {
                title: "Post-Surgery Patients",
                desc: "Support the body's natural healing processes and reduce oxidative stress during the recovery phase."
              },
              {
                title: "Health Enthusiasts",
                desc: "Incorporate a powerful anti-aging tool into your wellness routine to protect against cellular damage."
              }
            ].map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-secondary mb-3">{target.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Media */}
      <ResourceSection serviceId="h2" />

      {/* Testimonials */}
      <Testimonials />

      {/* Booking Modal */}
      <AnimatePresence>
        {showBooking && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBooking(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden h-[95vh] md:max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setShowBooking(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-12 pb-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Book Your H₂ Trial</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">
                  <Activity size={14} className="text-secondary" />
                  Note: $10 nasal cannula purchase required
                </div>
              </div>

              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="min-h-[700px] w-full bg-slate-50 pb-20">
                  <iframe
                    src="https://calendly.com/aespisp/60min?hide_event_type_details=1&hide_gdpr_banner=1"
                    width="100%"
                    height="100%"
                    className="w-full min-h-[700px]"
                    frameBorder="0"
                    title="Select a Date & Time - Calendly"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Power of H₂</h2>
          <p className="text-white/80 text-lg mb-10">
            Rejuvenate your body from the inside out with our molecular hydrogen wellness sessions. 
            Safe, effective, and backed by science.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleBookTrial}
              className="inline-block bg-white text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl"
            >
              Book Trial Session
            </button>
            <Link
              to="/#contact"
              className="inline-block bg-secondary-dark border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all shadow-xl"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
