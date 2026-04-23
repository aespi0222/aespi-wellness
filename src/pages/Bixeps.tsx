import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Shield, Activity, TrendingUp, Users, CheckCircle2, ArrowLeft, Cpu, Microscope, Settings, Layers, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';

export function Bixeps() {
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
        title="BIXEPS Pro Muscle Activation Technology" 
        description="Learn about BIXEPS Pro at AESPI Wellness Studio. Patented Magnetic Mitohormesis for non-invasive muscle activation, strength improvement, and senior mobility in Singapore."
        canonical="/bixeps"
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
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
                BIXEPS Pro: <span className="text-primary italic">Igniting Muscles</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A patented muscle activation technology designed to help seniors maintain strength and independence. 
                Experience the power of Magnetic Mitohormesis to improve balance and prevent muscle loss without physical strain.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleBookTrial}
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/25 transition-all min-w-[180px]"
                  >
                    Book a Trial Now
                  </button>
                </div>
                <p className="text-sm text-slate-400 font-medium italic">
                  *Trial: $50 (includes BIXEPS & Body Composition Analysis). Redeemable when you join the BIXEPS program.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 40px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img
                  src="/images/bixeps.jpg"
                  alt="BIXEPS Pro Technology - Muscle Activation"
                  className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Decorative Pulse Rings */}
              <motion.div 
                animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 border-2 border-primary/30 rounded-[40px] -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is BIXEPS Pro? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is BIXEPS Pro?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                BIXEPS Pro is the advanced, high-performance version of our muscle activation technology, and it is the <strong>exclusive standard used at AESPI Wellness Studio</strong>.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Developed through a collaboration between the <strong>National University of Singapore (NUS)</strong> 
                and <strong>ETH Zurich</strong>, BIXEPS Pro uses patented <strong>Magnetic Mitohormesis</strong> to stimulate muscles at a cellular level.
              </p>
              <div className="flex items-center gap-4 text-primary font-bold">
                <CheckCircle2 size={24} />
                <span>Safe, painless, and effective for all ages.</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Non-Invasive", desc: "No needles, no skin contact, and no pain involved." },
                { title: "Time-Efficient", desc: "Get a full muscle activation session in just 10-20 minutes." },
                { title: "Science-Backed", desc: "Rooted in decades of research from world-leading universities." },
                { title: "Effortless", desc: "No need to change clothes or break a sweat." }
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

      {/* The Science & Process */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Science & Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              BIXEPS bridges the gap between physical inactivity and cellular wellness through a sophisticated biological interface.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-10">
                {[
                  {
                    icon: <Zap className="text-primary" />,
                    title: "1. Magnetic Stimulation",
                    desc: "BIXEPS delivers precise, low-frequency magnetic pulses that penetrate deep into muscle tissues. Unlike electrical stimulation, it doesn't require skin contact and is completely painless."
                  },
                  {
                    icon: <Shield className="text-primary" />,
                    title: "2. Mitohormesis Effect",
                    desc: "The pulses trigger 'mitohormesis'—a biological response where mild cellular stress stimulates mitochondria to become more efficient and resilient."
                  },
                  {
                    icon: <Activity className="text-primary" />,
                    title: "3. Myokine Release",
                    desc: "Activated muscles release 'myokines'—beneficial proteins that communicate with other organs to improve metabolism, reduce inflammation, and support brain health."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-100">
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
            >
              <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">The 10-Minute Protocol</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">01</div>
                    <p className="text-slate-700 font-medium text-sm">Sit comfortably in your everyday clothes.</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">02</div>
                    <p className="text-slate-700 font-medium text-sm">Place your leg or arm into the BIXEPS device.</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">03</div>
                    <p className="text-slate-700 font-medium text-sm">Relax for 10 or 20 minutes while the device works.</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">04</div>
                    <p className="text-slate-700 font-medium text-sm">No sweat, no pain—resume your day immediately.</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                  <p className="text-sm text-primary font-medium leading-relaxed italic">
                    "It's like giving your muscles a high-intensity workout while you read a book or check your emails."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Comprehensive Health Benefits</h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "Enhanced Mobility & Balance", 
                    desc: "Clinical observations show that seniors report significantly better balance and leg strength after just 12 sessions, reducing the risk of falls." 
                  },
                  { 
                    title: "Metabolic Transformation", 
                    desc: "By activating muscle mitochondria, BIXEPS helps increase your resting metabolic rate, assisting in weight management and blood sugar regulation." 
                  },
                  { 
                    title: "Accelerated Sports Recovery", 
                    desc: "Athletes use BIXEPS to flush out toxins and reduce muscle soreness (DOMS) without the need for additional physical strain or 'active recovery' sessions." 
                  },
                  { 
                    title: "Anti-Inflammatory Support", 
                    desc: "The release of myokines helps combat systemic inflammation, which is linked to various chronic conditions and age-related decline." 
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary p-8 rounded-[40px] text-white flex flex-col justify-center items-center text-center shadow-xl">
                <TrendingUp size={40} className="mb-4 text-secondary" />
                <p className="text-3xl font-bold mb-1">85%</p>
                <p className="text-xs font-medium uppercase tracking-wider opacity-80">Reported Better Balance</p>
              </div>
              <div className="bg-white p-8 rounded-[40px] text-slate-900 flex flex-col justify-center items-center text-center shadow-xl border border-slate-100">
                <Users size={40} className="mb-4 text-primary" />
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Non-Invasive & Safe</p>
              </div>
              <div className="bg-white p-8 rounded-[40px] text-slate-900 flex flex-col justify-center items-center text-center shadow-xl border border-slate-100">
                <Activity size={40} className="mb-4 text-accent" />
                <p className="text-3xl font-bold mb-1">1-3x</p>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Weekly Protocol</p>
              </div>
              <div className="bg-accent p-8 rounded-[40px] text-white flex flex-col justify-center items-center text-center shadow-xl">
                <Zap size={40} className="mb-4 text-white" />
                <p className="text-3xl font-bold mb-1">10/20m</p>
                <p className="text-xs font-medium uppercase tracking-wider opacity-80">Quick Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Can Benefit from BIXEPS?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you're looking to maintain independence as you age or seeking a competitive edge in sports, BIXEPS is designed for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seniors",
                desc: "Maintain muscle mass (prevent sarcopenia), improve balance, and stay active longer with zero-impact stimulation."
              },
              {
                title: "Busy Professionals",
                desc: "Get the metabolic benefits of exercise in just 10 or 20 minutes a week—no sweat, no change of clothes required."
              },
              {
                title: "Athletes",
                desc: "Enhance recovery between training sessions and maintain muscle activation during injury rehabilitation."
              },
              {
                title: "Post-Surgery Patients",
                desc: "Safely stimulate muscles when physical movement is restricted, preventing atrophy and speeding up recovery."
              },
              {
                title: "Chronic Pain Sufferers",
                desc: "Improve joint health and reduce pain by strengthening the supporting muscle structures without strain."
              },
              {
                title: "Health Enthusiasts",
                desc: "Complement your existing fitness routine with cellular-level muscle optimization and metabolic boosting."
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
                <h4 className="text-lg font-bold text-primary mb-3">{target.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">BIXEPS vs BIXEPS Pro</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the right level of muscle activation for your specific health and performance goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BIXEPS Standard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings size={120} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-600 mb-6">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">BIXEPS</h3>
                <p className="text-primary font-bold mb-6">Standard Wellness</p>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                  Ideal for general health maintenance, metabolic boosting, and senior mobility support.
                </p>
                <ul className="space-y-4">
                  {[
                    "10-20 Minute Sessions",
                    "Once a Week Protocol",
                    "General Muscle Activation",
                    "Metabolic Support",
                    "Balance Improvement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={18} className="text-slate-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* BIXEPS Pro */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[40px] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={120} className="text-primary" />
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">BIXEPS Pro</h3>
                <p className="text-secondary-light font-bold mb-6">Performance & Recovery</p>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Enhanced intensity for athletes, post-rehab patients, and intensive recovery needs.
                </p>
                <ul className="space-y-4">
                  {[
                    "10-20 Minute Sessions",
                    "1-3x a Week Protocol",
                    "Deep-Tissue Activation",
                    "Accelerated Recovery",
                    "Peak Performance Optimization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-100">
                      <CheckCircle2 size={18} className="text-secondary-light shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex items-center gap-3">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                    Professional Grade
                  </span>
                  <span className="inline-block px-4 py-1 rounded-full bg-secondary-light/20 border border-secondary-light/30 text-secondary-light text-[10px] font-bold uppercase tracking-widest">
                    Used at AESPI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Media */}
      <ResourceSection serviceId="bixeps" />

      {/* Testimonials */}
      <Testimonials serviceFilter="BIXEPS Pro" />

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
              className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setShowBooking(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 pb-6 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Book Your BIXEPS Pro Trial</h2>
                <p className="text-slate-500 text-sm mb-4">Experience the future of muscle activation at Vision Exchange.</p>
                
                <div className="inline-flex flex-col items-center gap-1 px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-primary font-bold">Trial Session: $50</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Includes BIXEPS + Body Composition Analysis</p>
                  <p className="text-[10px] text-secondary font-bold">Full fee redeemable when you join the BIXEPS program</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="min-h-[600px] w-full bg-slate-50">
                  <iframe
                    src="https://calendly.com/aespisp/60min?hide_event_type_details=1&hide_gdpr_banner=1"
                    width="100%"
                    height="700"
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
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Ignite Your Muscles with BIXEPS Pro?</h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of others who have improved their mobility and strength with BIXEPS Pro. 
            Book your trial session today at our Vision Exchange studio.
          </p>
          <div className="mb-10 inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-white font-bold">Trial Session: $50 (Redeemable)</p>
            <p className="text-xs text-white/70">Consists of BIXEPS + Body composition analysis</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleBookTrial}
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl"
            >
              Book My Trial Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
