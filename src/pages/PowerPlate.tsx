import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Activity, Zap, Shield, TrendingUp, Users, CheckCircle2, ArrowLeft, Dumbbell, Heart, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';

export function PowerPlate() {
  return (
    <div className="pt-32 pb-20">
      <SEO 
        title="Functional Movement & Stability Strategy" 
        description="Master your biological balance. Precision whole-body vibration training enhances bone density and motor control at AESPI Wellness Studio Singapore."
        canonical="/powerplate"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-accent/10 to-transparent" />
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
              <span className="inline-block px-4 py-1.5 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-[.25em] rounded-full mb-8">
                Foundation: Functional Movement
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-slate-900 mb-8 leading-[1.1]">
                Master Your <br /> <span className="italic text-accent">Biological Balance.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl">
                Precision stability for active living. Whole-body vibration training enhances bone density and motor control, providing seniors a <span className="font-medium text-slate-900 underline decoration-secondary/30 decoration-4 underline-offset-4">safe environment</span> to build confidence in every step.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-5">
                  <Link
                    to="/#contact"
                    className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all transform hover:-translate-y-0.5"
                  >
                    Discuss Your Movement Plan
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium italic">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Tri-axial vibration used by professional medical collectives
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
                  src="/images/powerplate.jpg"
                  alt="Functional Movement Stability"
                  className="w-full h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20">
                <p className="text-3xl font-serif text-accent italic leading-none mb-1">Stability</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bone Density Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Protocol: Functional Movement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 italic">Pillar 03: <br />Functional Movement Protocol</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-6">
                Stability is the ultimate luxury of ageing. At AESPI, we utilise <strong>Whole Body Vibration (WBV)</strong> via Power Plate to enhance proprioception and skeletal integrity.
              </p>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                By creating a high-frequency harmonic vibration, the platform triggers up to 50 involuntary muscle contractions per second. This rapid neuromuscular feedback loop builds confidence in movement and supports bone mineral density without the risks of heavy resistance training.
              </p>
              <div className="flex items-center gap-4 text-primary font-bold">
                <Timer size={24} />
                <span className="font-serif">Maximum biological impact for movement efficiency.</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "PrecisionWave™", desc: "Patented harmonic vibration for maximum safety and efficacy." },
                { title: "Low Impact", desc: "Gentle on joints while providing intense muscle stimulation." },
                { title: "Versatile", desc: "Suitable for elite athletes, seniors, and everyone in between." },
                { title: "Proven", desc: "Backed by decades of research and used by pro sports teams." }
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">The Science of Acceleration Training</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Power Plate uses <strong>Whole Body Vibration (WBV)</strong> to create instability in the human body. 
                As the plate vibrates, your muscles must automatically contract and relax to maintain balance.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                This is based on Newton's Second Law of Motion: <strong>Force = Mass × Acceleration</strong>. 
                By increasing the acceleration (vibration), Power Plate increases the force on your muscles 
                without the need for heavy weights, making it incredibly safe for seniors.
              </p>
              
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20">
                <h4 className="text-accent font-bold mb-4 flex items-center gap-2">
                  <Zap size={20} /> PrecisionWave™ Technology
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm text-slate-300">Tri-planar vibration (up/down, front/back, side/side) for natural movement.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm text-slate-300">Consistent harmonic frequency ensures safe and predictable muscle response.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm text-slate-300">Triggers 30-50 involuntary muscle contractions every single second.</p>
                  </div>
                </div>
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
                  src="/images/Power Plate chair.jpg"
                  alt="Power Plate Acceleration Training"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              
              <div className="absolute top-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-xs font-bold text-accent uppercase mb-1">Acceleration</p>
                <p className="text-sm text-slate-900 font-medium leading-tight">Increases force without adding heavy loads.</p>
              </div>
              <div className="absolute bottom-10 -right-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <p className="text-xs font-bold text-primary uppercase mb-1">Muscle Fiber</p>
                <p className="text-sm text-slate-900 font-medium leading-tight">Activates up to 95% of muscle fibers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence & Research */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Clinical Evidence & Research</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Power Plate is a MDD Class IIa medical device and is backed by over 200 clinical studies. 
                It is used by leading medical institutions and professional sports teams worldwide to 
                improve patient outcomes and athletic performance.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-accent mb-2">Bone Mineral Density</h4>
                  <p className="text-sm text-slate-500">Studies have shown that WBV training can increase bone mineral density in postmenopausal women, helping to combat osteoporosis safely.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-accent mb-2">Balance & Fall Prevention</h4>
                  <p className="text-sm text-slate-500">Clinical research indicates significant improvements in postural stability and leg strength in seniors, directly reducing the risk of falls.</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 p-8 rounded-3xl border border-accent/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-white text-xl">200+</div>
                  <h4 className="font-bold text-xl text-slate-900">Clinical Studies</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Extensive research validates Power Plate's effectiveness in improving strength, flexibility, and bone health.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary/5 p-8 rounded-3xl border border-primary/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-xl">MDD</div>
                  <h4 className="font-bold text-xl text-slate-900">Medical Device</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Certified as a Class IIa medical device, ensuring the highest standards of safety and therapeutic efficacy.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Protocol */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">The Power Plate Protocol</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A standard Power Plate session is designed to be highly efficient, delivering the results 
                of a 60-minute traditional workout in just 15 to 20 minutes.
              </p>

              <div className="space-y-10">
                {[
                  {
                    icon: <Activity className="text-accent" />,
                    title: "1. Warm-Up (2-3 mins)",
                    desc: "Gentle vibration increases blood flow and prepares your muscles and joints for movement, reducing the risk of injury."
                  },
                  {
                    icon: <Dumbbell className="text-accent" />,
                    title: "2. Strength & Balance (10 mins)",
                    desc: "Perform simple functional movements like squats or lunges on the plate. The vibration intensifies the work, activating more muscle fibers."
                  },
                  {
                    icon: <Zap className="text-accent" />,
                    title: "3. Massage & Recovery (3 mins)",
                    desc: "Finish with a relaxing vibration massage to flush out toxins, reduce muscle soreness, and promote lymphatic drainage."
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
              className="order-1 lg:order-2"
            >
              <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Session Efficiency</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">15m</div>
                    <p className="text-slate-700 font-medium text-sm">Total session time</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">5.8x</div>
                    <p className="text-slate-700 font-medium text-sm">More muscle activation than ground training</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2-3x</div>
                    <p className="text-slate-700 font-medium text-sm">Recommended sessions per week</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-accent/5 rounded-3xl border border-accent/10">
                  <p className="text-sm text-accent font-medium leading-relaxed italic">
                    "I can fit a full-body workout into my lunch break and still have time to spare. It's incredibly effective."
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Power Plate Benefits</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Unlock a wide range of health and fitness benefits with consistent Power Plate training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp />, title: "Boost Strength", desc: "Increase muscle power and core stability." },
              { icon: <Activity />, title: "Better Flexibility", desc: "Improve range of motion and reduce stiffness." },
              { icon: <Shield />, title: "Build Bone Density", desc: "Support skeletal health through mechanical loading." },
              { icon: <Heart />, title: "Weight Loss", desc: "Enhance metabolism and burn more calories." },
              { icon: <Zap />, title: "Improves Recovery", desc: "Boost circulation and lymphatic drainage." },
              { icon: <Users />, title: "Fall Prevention", desc: "Enhance balance and coordination for seniors." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Can Benefit from Power Plate?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Power Plate is a versatile tool that can be adapted for any fitness level or health goal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seniors",
                desc: "Safely improve balance, bone density, and mobility to maintain independence and prevent falls."
              },
              {
                title: "Athletes",
                desc: "Enhance explosive power, improve flexibility, and accelerate recovery between intense training sessions."
              },
              {
                title: "Busy Professionals",
                desc: "Get the metabolic and strength benefits of a long workout in just 15 minutes—no sweat required for basic protocols."
              },
              {
                title: "Rehab Patients",
                desc: "Gently stimulate muscles and improve circulation during recovery from injury or surgery without high-impact stress."
              },
              {
                title: "Weight Loss Seekers",
                desc: "Boost your metabolism and burn more calories by intensifying every movement through vibration."
              },
              {
                title: "Health Enthusiasts",
                desc: "Add a new dimension to your fitness routine with cellular-level muscle activation and lymphatic support."
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
                <h4 className="text-lg font-bold text-accent mb-3">{target.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Media */}
      <ResourceSection serviceId="powerplate" />

      {/* FAQ Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4 italic">Frequently Asked Questions About Power Plate</h2>
            <p className="text-slate-500 font-light">Discover how whole body vibration training supports balance, mobility, and strength.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is Power Plate?",
                a: "Power Plate is a whole body vibration training system designed to stimulate muscles through multidirectional vibrations. It is used worldwide in fitness, rehabilitation, wellness, and active ageing programs."
              },
              {
                q: "How does Power Plate work?",
                a: "The platform produces precise vibrations that cause muscles to contract rapidly and reflexively. This increases muscle engagement during exercises and movement training."
              },
              {
                q: "What are the benefits of Power Plate?",
                a: "Power Plate training may support muscle activation, balance and stability, flexibility, circulation, core strength, and recovery and mobility."
              },
              {
                q: "Is Power Plate suitable for seniors?",
                a: "Yes. Power Plate is widely used for older adults to support balance, mobility, coordination, and muscle conditioning under supervised guidance."
              },
              {
                q: "Is Power Plate difficult to use?",
                a: "No. Sessions can be customised for beginners, seniors, and active individuals. Exercises may range from simple standing positions to guided movement routines."
              },
              {
                q: "How long is a Power Plate session?",
                a: "Sessions are typically short and efficient, often lasting between 10 to 20 minutes."
              },
              {
                q: "Is Power Plate a workout?",
                a: "Yes. Power Plate enhances muscle activation during exercise and movement training. Even simple exercises may feel more effective due to the vibration technology."
              },
              {
                q: "What does vibration training feel like?",
                a: "Users typically feel gentle but powerful vibrations throughout the body. Most sessions are comfortable and energising."
              },
              {
                q: "Can Power Plate help with balance?",
                a: "Yes. Whole body vibration training is commonly used to support balance, coordination, and lower-body stability."
              },
              {
                q: "Can Power Plate help with flexibility?",
                a: "Many users report improved flexibility and reduced muscle tightness after sessions."
              },
              {
                q: "Is Power Plate suitable for rehabilitation?",
                a: "Power Plate is often incorporated into rehabilitation and recovery programs under professional guidance. Users with medical conditions should seek medical advice first."
              },
              {
                q: "Who should avoid Power Plate?",
                a: "Power Plate may not be suitable for pregnant individuals, users with certain medical implants, individuals with acute injuries or medical conditions, or anyone advised against vibration therapy by their doctor."
              },
              {
                q: "Can I combine Power Plate with BIXEPS?",
                a: "Yes. Many AESPI clients combine Power Plate with BIXEPS for a more comprehensive muscle activation and mobility program."
              },
              {
                q: "Can beginners use Power Plate?",
                a: "Absolutely. Programs can be adjusted according to fitness level, mobility, and goals."
              },
              {
                q: "Why is Power Plate popular for healthy ageing?",
                a: "Power Plate allows efficient muscle activation and movement training with lower perceived exertion, making it attractive for individuals seeking safe and time-efficient wellness solutions."
              },
              {
                q: "Do I need special clothing?",
                a: "Comfortable exercise attire and stable footwear are recommended."
              },
              {
                q: "How often should I use Power Plate?",
                a: "Frequency depends on goals and physical condition. Many users start with 1–3 sessions weekly."
              },
              {
                q: "Is Power Plate the same as cheap vibration machines?",
                a: "No. Power Plate uses patented precision vibration technology designed for controlled performance, comfort, and safety."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 md:p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <h4 className="text-xl font-serif text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Master your biological balance.</h2>
          <p className="text-white/80 text-lg font-light mb-10 max-w-2xl mx-auto">
            Discover why precision movement is the preferred choice for longevity seekers and health professionals worldwide.
          </p>
          <Link
            to="/#contact"
            className="bg-white text-accent px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-[0_20px_50px_-20px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
          >
            Enhance My Movement
          </Link>
        </div>
      </section>
    </div>
  );
}
