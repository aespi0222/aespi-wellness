import { motion } from 'motion/react';
import { Check, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/src/constants';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Gentle Care for Active Aging
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl"
          >
            We provide non-invasive, science-backed therapies designed to help seniors maintain strength, 
            improve balance, and enhance overall vitality with minimal physical strain.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-primary transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-white/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 rounded-2xl overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:text-accent transition-colors">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  {service.link.startsWith('http') ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/50 rounded-full text-slate-400 group-hover:text-white group-hover:bg-white/20 transition-all"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  ) : (
                    <Link
                      to={service.link}
                      className="p-2 bg-white/50 rounded-full text-slate-400 group-hover:text-white group-hover:bg-white/20 transition-all"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.subtitle}
                </p>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-slate-500 group-hover:text-white/70 transition-colors">
                      <Check size={14} className="text-primary group-hover:text-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {service.link.startsWith('http') ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white transition-colors"
                  >
                    {service.cta} <ArrowRight size={16} />
                  </a>
                ) : (
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-white transition-colors"
                  >
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
