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
    question: "How much do the sessions cost?",
    answer: "We offer introductory trial sessions so you can experience the benefits firsthand. For ongoing wellness, we provide flexible packages tailored to your specific needs and goals. Please contact us via WhatsApp or book a trial to discuss the best pricing options for you."
  },
  {
    question: "How do I book an appointment?",
    answer: "Booking is easy! You can schedule a trial session directly online using the 'Book a Trial' button, message us on WhatsApp, or fill out the contact form at the bottom of this page. We will get back to you promptly to confirm your slot."
  },
  {
    question: "Are the treatments safe for seniors?",
    answer: "Absolutely. All our therapies are 100% non-invasive, gentle, and specifically designed with senior safety and comfort in mind. They require minimal physical exertion while delivering maximum physiological benefits."
  },
  {
    question: "Do I need to wear sports attire or change clothes?",
    answer: "No special attire is required! Our core treatments like BIXEPS Pro and Molecular Hydrogen are 'no sweat' therapies. You can come in your comfortable everyday clothes and won't need to change or shower afterward."
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
