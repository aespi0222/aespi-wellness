import { motion } from 'motion/react';
import { FileText, ExternalLink, Newspaper } from 'lucide-react';
import { RESEARCH, PRESS } from '../constants';

interface ResourceSectionProps {
  serviceId: string;
}

export function ResourceSection({ serviceId }: ResourceSectionProps) {
  const serviceResearch = RESEARCH.filter(r => r.serviceId === serviceId);
  const servicePress = PRESS.filter(p => p.serviceId === serviceId);

  if (serviceResearch.length === 0 && servicePress.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research & Media</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore the clinical evidence and press coverage behind our technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Clinical Papers */}
          {serviceResearch.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-primary" size={24} />
                Clinical Papers
              </h3>
              <div className="space-y-4">
                {serviceResearch.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="block p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{item.source}</p>
                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ExternalLink size={18} className="text-slate-300 group-hover:text-primary flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* Press Articles */}
          {servicePress.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Newspaper className="text-secondary" size={24} />
                In the Press
              </h3>
              <div className="space-y-4">
                {servicePress.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="block p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{item.source} • {item.date}</p>
                        <h4 className="font-bold text-slate-900 group-hover:text-secondary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ExternalLink size={18} className="text-slate-300 group-hover:text-secondary flex-shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
