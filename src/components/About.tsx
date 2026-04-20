import { motion } from 'motion/react';
import { BRAND } from '@/src/constants';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="/images/about.JPG"
              alt="AESPI Wellness Studio - Active Aging"
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Empowering <span className="text-primary italic">Active Aging</span> at AESPI
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            At AESPI Wellness Studio, we are dedicated to helping seniors maintain their independence and vitality. 
            Our mission is to provide gentle, non-invasive therapies that improve muscle health, balance, and overall quality of life.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-primary mb-2">Our Vision</h4>
              <p className="text-sm text-slate-500">To be the leading partner in senior wellness and active aging in Singapore.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-primary mb-2">Our Commitment</h4>
              <p className="text-sm text-slate-500">Providing safe, effective, and compassionate care for every senior client.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[
                "/images/avatar-1.jpeg",
                "/images/avatar-2.jpg",
                "/images/avatar-3.jpg",
                "/images/avatar-4.jpg"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Trusted by 500+ Clients</p>
              <p className="text-xs text-slate-500 font-medium">Improving lives every day</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
