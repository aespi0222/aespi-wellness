import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "We specialize in non-invasive active aging therapies, including BIXEPS Pro (magnetic mitohormesis for muscle activation), Molecular Hydrogen (H₂) Inhalation (for cellular recovery), Power Plate (whole-body vibration for bone density and balance), and Medical-Grade Body Composition Analysis."
  },
  {
    question: "Are the treatments safe for seniors?",
    answer: "Absolutely. All our therapies are 100% non-invasive, gentle, and specifically designed with senior safety and comfort in mind. They require zero physical exertion while delivering maximum physiological benefits, making them ideal for those with mobility challenges or those recovering from inactivity."
  },
  {
    question: "Is BIXEPS like exercise?",
    answer: "BIXEPS is not a replacement for exercise, but it can complement an active lifestyle. It uses patented magnetic stimulation to activate muscles and support mitochondrial function, which is especially useful for individuals who have difficulty exercising due to age, injury, or reduced mobility."
  },
  {
    question: "What does a session feel like?",
    answer: "Most users describe the sensations as very tolerable. For BIXEPS, you might feel a slight warmth or tingling. For Power Plate, you'll feel powerful but gentle vibrations. Molecular Hydrogen inhalation is completely effortless and relaxing. None of our treatments are painful."
  },
  {
    question: "How do I book an appointment?",
    answer: "Booking is easy! You can schedule a trial session directly online using the 'Book a Trial' button, message us on WhatsApp, or fill out the contact form at the bottom of this page. We typically recommend starting with a $50 introductory protocol."
  },
  {
    question: "Where is AESPI located?",
    answer: "AESPI Wellness Studio is located at Vision Exchange in Jurong East, Singapore. We are conveniently situated near the Jurong East MRT station for easy access."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-slate-900 mb-6"
          >
            Insights & <span className="italic text-primary">Answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-light"
          >
            Everything you need to know about navigating your longevity journey with AESPI.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "bg-white rounded-[32px] overflow-hidden transition-all duration-500",
                  isOpen ? "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]" : "hover:bg-white/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-xl md:text-2xl font-serif text-slate-900 pr-12 leading-tight">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500",
                      isOpen ? "bg-primary text-white border-primary rotate-180" : "bg-white text-slate-400 border-slate-100 group-hover:border-primary/20"
                    )}
                  >
                    <ChevronDown size={22} strokeWidth={1.5} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 text-slate-500 leading-relaxed font-light text-lg max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
