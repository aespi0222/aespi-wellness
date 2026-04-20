import { motion } from 'motion/react';
import { Activity, Zap, Shield, TrendingUp, Users, CheckCircle2, ArrowLeft, Dumbbell, Heart, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Testimonials } from '../components/Testimonials';
import { ResourceSection } from '../components/ResourceSection';

export function PowerPlate() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                <Dumbbell size={14} />
                Whole Body Vibration Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Power Plate: <span className="text-accent italic">Move Better</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A low-impact vibration technology that helps seniors improve bone density, balance, and circulation. 
                Experience a total-body workout that is gentle on your joints and easy on your schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Enquire Now
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
                  src="/images/powerplate.jpg"
                  alt="Power Plate Training - Whole Body Vibration"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20">
                <p className="text-3xl font-bold text-accent">3D</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Vibration Tech</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Power Plate? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is Power Plate?</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Power Plate is the global leader in whole-body vibration technology. 
                It uses PrecisionWave™ Technology—a high-fidelity harmonic vibration system that triggers 
                up to 50 muscle contractions per second.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                This rapid contraction and relaxation of muscles leads to increased strength, 
                improved circulation, and enhanced recovery, all in a fraction of the time 
                of traditional workouts.
              </p>
              <div className="flex items-center gap-4 text-primary font-bold">
                <Timer size={24} />
                <span>Get a 60-minute workout in just 15 minutes.</span>
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

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Feel the Vibration</h2>
          <p className="text-white/80 text-lg mb-10">
            Discover why Power Plate is the preferred choice for health professionals and elite athletes worldwide. 
            Book your session at AESPI today.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-accent px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
