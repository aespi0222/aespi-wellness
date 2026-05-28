import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Shield, Activity, TrendingUp, Users, CheckCircle2, ArrowLeft, Cpu, Microscope, Settings, Layers, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';
import { RelatedServices } from '../components/RelatedServices';

export function Bixeps() {
  const [showBooking, setShowBooking] = useState(false);
  const location = useLocation();

  const faqs = [
    {
      q: "What is BIXEPS?",
      a: "BIXEPS is a non-invasive muscle activation technology designed to support muscle conditioning, mobility, and healthy ageing through magnetic stimulation."
    },
    {
      q: "How does BIXEPS work?",
      a: "BIXEPS uses pulsed magnetic fields to stimulate muscles and trigger muscle contractions without requiring strenuous physical exercise."
    },
    {
      q: "Is BIXEPS scientifically backed?",
      a: "BIXEPS is based on research involving muscle stimulation, mitochondria, and muscle conditioning technologies developed with scientific collaboration and clinical research foundations."
    },
    {
      q: "Who developed BIXEPS?",
      a: "BIXEPS was developed through research collaborations involving scientists and researchers from institutions including the National University of Singapore (NUS) and ETH Zurich."
    },
    {
      q: "What does BIXEPS stand for?",
      a: "BIXEPS refers to a muscle activation and conditioning technology focused on improving muscle health and supporting healthy ageing."
    },
    {
      q: "Is BIXEPS safe for seniors?",
      a: "BIXEPS is designed to be non-invasive and low impact, making it suitable for many seniors and older adults seeking support for mobility and muscle health."
    },
    {
      q: "Can BIXEPS replace exercise?",
      a: "BIXEPS is not intended to fully replace exercise, but it may support muscle activation and complement an active lifestyle, especially for individuals with limited mobility or lower exercise tolerance."
    },
    {
      q: "Can BIXEPS help older adults maintain muscle health?",
      a: "BIXEPS is designed to support muscle activation and conditioning, which may help older adults maintain muscle function and mobility as they age."
    },
    {
      q: "What is muscle activation therapy?",
      a: "Muscle activation therapy refers to techniques or technologies that stimulate muscles to contract and engage, helping support strength, circulation, and physical function."
    },
    {
      q: "How long is a BIXEPS session?",
      a: "A typical BIXEPS session lasts about 10 minutes per leg, depending on the program and treatment plan."
    },
    {
      q: "Why does BIXEPS only require 10 minutes per leg?",
      a: "BIXEPS uses low intensity magnetic stimulation technology designed to efficiently activate muscles within a relatively short session duration."
    },
    {
      q: "Can BIXEPS help people with limited mobility?",
      a: "BIXEPS may be suitable for individuals with limited mobility who are looking for low-impact ways to support muscle activation and movement."
    },
    {
      q: "Does BIXEPS help with muscle loss after 50?",
      a: "Age-related muscle loss, also known as sarcopenia, becomes more common after 50. BIXEPS is designed to support muscle conditioning and healthy ageing."
    },
    {
      q: "Is BIXEPS suitable for osteoporosis support?",
      a: "Muscle health plays an important role in supporting mobility and physical function. BIXEPS may complement healthy ageing and movement-focused programs for older adults."
    },
    {
      q: "Can BIXEPS help improve walking confidence?",
      a: "Supporting muscle activation and lower limb conditioning may help older adults maintain movement and confidence in daily activities."
    },
    {
      q: "Is BIXEPS painful?",
      a: "Most users describe BIXEPS as a strong muscle contraction sensation rather than pain. Session intensity can be adjusted based on comfort level."
    },
    {
      q: "Can I wear clothes during BIXEPS?",
      a: "Yes. BIXEPS is typically performed over comfortable clothing without the need for changing or undressing."
    },
    {
      q: "How many BIXEPS sessions are recommended?",
      a: "The recommended number of sessions depends on individual goals, mobility levels, and program plans. Many users begin with a structured multi-session program."
    },
    {
      q: "Can BIXEPS be combined with Power Plate?",
      a: "Yes. BIXEPS and Power Plate are commonly combined as part of a healthy ageing and mobility support program."
    },
    {
      q: "What are myokines and why are they important?",
      a: "Myokines are signaling molecules released by muscles during muscle activity. They are associated with communication between muscles and other parts of the body."
    },
    {
      q: "How does BIXEPS support healthy ageing?",
      a: "BIXEPS is designed to support muscle activation, mobility, movement, and physical conditioning, which are important components of healthy ageing."
    },
    {
      q: "Can seniors use BIXEPS without gym workouts?",
      a: "Yes. BIXEPS is designed to support muscle activation without requiring strenuous gym-based exercise."
    },
    {
      q: "What is magnetic muscle stimulation?",
      a: "Magnetic muscle stimulation uses electromagnetic fields to stimulate nerves and muscles, causing muscle contractions without invasive procedures."
    },
    {
      q: "Is BIXEPS suitable for frail older adults?",
      a: "Because BIXEPS is low impact and non-invasive, it may be suitable for older adults seeking gentle muscle activation support. Individual suitability should always be assessed appropriately."
    },
    {
      q: "Can BIXEPS support balance and mobility?",
      a: "Healthy muscle activation and lower limb conditioning may help support mobility, balance, and daily movement in older adults."
    },
    {
      q: "Is BIXEPS suitable for beginners?",
      a: "Yes. BIXEPS is beginner-friendly and does not require prior fitness experience."
    },
    {
      q: "What should I expect during my first BIXEPS session?",
      a: "During a BIXEPS session, users typically sit comfortably while the device delivers magnetic stimulation to the muscles, producing visible muscle contractions."
    },
    {
      q: "Is BIXEPS suitable for adults over 40?",
      a: "Yes. BIXEPS is commonly used by adults over 40 who want to support muscle health, movement, and healthy ageing."
    },
    {
      q: "Can BIXEPS support active ageing?",
      a: "BIXEPS is designed to support mobility, movement, and muscle conditioning as part of an active ageing lifestyle."
    },
    {
      q: "Where can I try BIXEPS in Singapore?",
      a: "AESPI offers BIXEPS sessions at its healthy ageing and longevity studio located in Jurong East, Singapore."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BIXEPS Muscle Resilience Activation",
    "description": "Non-invasive muscle activation technology for seniors to prevent sarcopenia and improve mobility in Singapore.",
    "provider": {
      "@type": "WellnessCenter",
      "name": "AESPI Wellness Studio"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "BIXEPS Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Introductory BIXEPS Trial"
          },
          "price": "50.00",
          "priceCurrency": "SGD"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

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
        title="BIXEPS Singapore | Muscle Strength & Mobility for Seniors | AESPI" 
        description="Experience BIXEPS in Singapore at AESPI. Our non-invasive muscle activation technology helps seniors improve mobility, prevent sarcopenia, and stay active."
        canonical="/bixeps"
        additionalSchema={[serviceSchema, faqSchema]}
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-primary/10 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-4 transition-all group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to healthy ageing strategy
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[.25em] rounded-full mb-8">
                BIXEPS Singapore: Muscle Resilience
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-slate-900 mb-8 leading-[1.1]">
                BIXEPS Singapore: <br /> <span className="italic text-primary">Biological Strength.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl">
                Maintain independence through patented BIXEPS mobility support. Our non-invasive technology helps seniors in Singapore prevent sarcopenia and improve balance <span className="font-medium text-slate-900 underline decoration-secondary/30 decoration-4 underline-offset-4">without physical strain</span>. Complement your protocol with <Link to="/h2-hydrogen" className="text-primary hover:underline font-bold">Molecular Hydrogen recovery</Link> for optimal results.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-5">
                  <button
                    onClick={handleBookTrial}
                    className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Start Recovery Protocol
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Trial includes BIXEPS & Body Composition Analysis
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
                  src="/images/bixeps.jpg"
                  alt="BIXEPS Singapore: Muscle Resilience Activation for Seniors at Jurong East"
                  className="w-full h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Biological Result</p>
                <p className="text-lg font-serif text-slate-900">85% Improvement in Balance</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Protocol: Muscle Resilience Activation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 italic">BIXEPS for Seniors: <br />Muscle Resilience Activation</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-6">
                Biological strength is the legacy of a healthy ageing lifestyle. At AESPI Singapore, we utilise <strong>Muscle Resilience Activation</strong> (powered by BIXEPS Pro) as our primary protocol for sarcopenia prevention and <Link to="/#longevity" className="text-primary hover:underline font-bold">longevity strategy</Link>.
              </p>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                Developed through a collaboration between the <strong>National University of Singapore (NUS)</strong> 
                and <strong>ETH Zurich</strong>, this technology uses patented <strong>Magnetic Mitohormesis</strong> to stimulate muscles at a cellular level, providing BIXEPS mobility support and the benefits of exercise without the physical load.
              </p>
              <div className="flex items-center gap-4 text-primary font-bold">
                <CheckCircle2 size={24} />
                <span className="font-serif">Safe, painless, and effective for sustained autonomy.</span>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Trusted BIXEPS Singapore Provider</h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "BIXEPS Mobility Support & Balance", 
                    desc: "Clinical observations show that seniors in Singapore report significantly better balance and leg strength after just 12 sessions, reducing the risk of falls." 
                  },
                  { 
                    title: "Metabolic Health for Longevity", 
                    desc: <>By activating muscle mitochondria, BIXEPS helps increase your resting metabolic rate, assisting in weight management and blood sugar regulation in line with <Link to="/#longevity" className="text-primary hover:underline font-bold">healthy ageing goals</Link>.</>
                  },
                  { 
                    title: "BIXEPS for Sports Recovery", 
                    desc: <>Athletes in Singapore use BIXEPS to flush out toxins and reduce muscle soreness (DOMS) without the need for additional physical strain. Combine with <Link to="/powerplate" className="text-primary hover:underline font-bold">Power Plate vibration</Link> for enhanced circulation.</>
                  },
                  { 
                    title: "Anti-Inflammatory Support", 
                    desc: <>The release of myokines helps combat systemic inflammation, a key component of the <Link to="/#technologies" className="text-primary hover:underline font-bold">AESPI longevity ecosystem</Link>.</>
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <div className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</div>
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
                <p className="text-secondary-light font-bold mb-4">The Professional Standard</p>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed italic">
                  "Everything in BIXEPS, and more."
                </p>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  BIXEPS Pro builds upon the foundational technology with higher-flux density and targeted protocols used exclusively in professional wellness environments.
                </p>
                <ul className="space-y-4">
                  {[
                    "Everything in Standard BIXEPS",
                    "Professional-Only Intensity Levels",
                    "Higher Magnetic Flux Density",
                    "Studio-Supervised Protocols",
                    "Weekly High-Frequency Recovery"
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

      {/* FAQ Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 italic">Frequently Asked Questions About BIXEPS</h2>
            <p className="text-slate-500 font-light">Everything you need to know about BIXEPS muscle resilience activation.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 md:p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <h4 className="text-xl font-serif text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              className="relative w-full max-w-4xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden h-[95vh] md:max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setShowBooking(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-6 md:p-12 pb-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Book Your BIXEPS Pro Trial</h2>
                <p className="text-slate-500 text-xs md:text-sm mb-4">Experience the future of muscle activation at Vision Exchange.</p>
                
                <div className="inline-flex flex-col items-center gap-1 px-4 py-2 md:px-6 md:py-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-primary font-bold text-sm md:text-base">Trial Session: $50</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Includes BIXEPS + Body Composition Analysis</p>
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

      {/* Related Services */}
      <RelatedServices />

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Ready to architecture your physical independence in Singapore?</h2>
          <p className="text-white/80 text-lg font-light mb-10 max-w-2xl mx-auto">
            Join the community of longevity-focused individuals who have reclaimed their mobility and strength. 
            Experience our BIXEPS mobility support protocol at AESPI Jurong East.
          </p>
          <div className="mb-12 flex flex-col md:flex-row justify-center gap-6">
            <div className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <p className="text-white font-bold text-lg mb-1">Introductory Protocol: $50</p>
              <p className="text-xs text-white/70 uppercase tracking-widest font-black">Resilience Activation + Longevity Biometrics</p>
            </div>
            <Link 
              to="/body-composition"
              className="px-8 py-4 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-white/90 text-sm flex flex-col justify-center hover:bg-white/10 transition-all"
            >
              <p className="font-bold">Pair with Biometrics Analysis</p>
              <p className="text-[10px] uppercase tracking-widest">Understand your baseline →</p>
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleBookTrial}
              className="group bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-[0_20px_50px_-20_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              Start BIXEPS Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
