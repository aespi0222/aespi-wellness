import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  serviceFilter?: string;
}

export function Testimonials({ serviceFilter }: TestimonialsProps) {
  const filteredTestimonials = serviceFilter
    ? TESTIMONIALS.filter(t => t.service === serviceFilter)
    : TESTIMONIALS;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  if (filteredTestimonials.length === 0) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      filter: 'blur(10px)'
    })
  };

  return (
    <section className="py-32 bg-white overflow-hidden relative" id="testimonials">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]"
          >
            Voice of Resilience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mt-6 text-slate-900"
          >
            Transformation <span className="italic text-primary">Stories</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative min-h-[450px] md:min-h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute w-full"
              >
                <div className="flex flex-col items-center text-center space-y-12">
                  <div className="w-20 h-20 glass rounded-full flex items-center justify-center text-secondary border-secondary/10">
                    <Quote size={32} strokeWidth={1} />
                  </div>
                  
                  <blockquote className="text-2xl md:text-4xl font-serif text-slate-800 leading-tight tracking-tight italic max-w-3xl">
                    "{filteredTestimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="pt-8 border-t border-slate-100 w-full max-w-xs space-y-2">
                    <h4 className="font-bold text-slate-900 text-lg tracking-tight">
                      {filteredTestimonials[currentIndex].name}
                      {filteredTestimonials[currentIndex].age && <span className="text-slate-400 font-light ml-2">age {filteredTestimonials[currentIndex].age}</span>}
                    </h4>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                      {filteredTestimonials[currentIndex].service} Optimization
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 glass rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all pointer-events-auto group"
            >
              <ChevronLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 glass rounded-full flex items-center justify-center text-slate-400 hover:text-primary transition-all pointer-events-auto group"
            >
              <ChevronRight size={24} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-700 ${
                  index === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
