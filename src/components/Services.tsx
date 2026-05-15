import { motion } from 'motion/react';
import { Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/src/constants';

export function Services() {
  return (
    <section id="technologies" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[.25em] rounded-full mb-6"
            >
              The Science
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight"
            >
              The Longevity <br /> <span className="italic text-secondary">Ecosystem</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-md text-lg font-light leading-relaxed mb-2"
          >
            We integrate science-backed technologies that work synergistically to build muscle resilience, enhance cellular recovery, and optimize functional mobility.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="relative mb-8 rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              <div className="flex-grow flex flex-col px-2">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[.3em] mb-3">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 leading-none">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-3 text-sm font-bold text-primary group-hover:gap-5 transition-all"
                  >
                    {service.cta} <ArrowRight size={18} className="text-secondary" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
