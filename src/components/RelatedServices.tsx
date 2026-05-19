import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '@/src/constants';

export function RelatedServices() {
  const location = useLocation();
  const currentPath = location.pathname;

  const related = SERVICES.filter(service => service.link !== currentPath);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-serif text-slate-900 mb-2 italic">Explore Synergy</h2>
            <p className="text-slate-500 font-light">Combine our technologies for optimal longevity results.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {related.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-widest block mb-2">{service.subtitle}</span>
                    <h3 className="text-xl font-serif text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 text-sm font-light line-clamp-1 pr-4">{service.description}</p>
                  <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
