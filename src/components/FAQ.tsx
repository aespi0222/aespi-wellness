import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const FAQS = [
  {
    question: "Who is AESPI?",
    answer: "AESPI is a Singapore healthy ageing and longevity studio that helps adults and seniors improve mobility, strength, balance, recovery, and overall wellbeing through science-backed, non-invasive wellness technologies."
  },
  {
    question: "What does AESPI specialize in?",
    answer: "AESPI specializes in healthy ageing solutions focused on muscle health, mobility, balance, recovery, sleep optimization, and longevity support for adults over 40 and seniors."
  },
  {
    question: "How does AESPI support healthy ageing?",
    answer: "AESPI combines non-invasive technologies such as BIXEPS muscle activation, Power Plate whole body vibration training, and molecular hydrogen therapy to support strength, recovery, movement, and active ageing."
  },
  {
    question: "Who are AESPI’s programs suitable for?",
    answer: "AESPI’s programs are suitable for adults over 40, seniors, individuals with reduced mobility, people seeking low-impact wellness solutions, and those looking to maintain independence and physical function as they age."
  },
  {
    question: "Can seniors benefit from AESPI programs?",
    answer: "Yes. AESPI’s programs are designed to be senior-friendly, low impact, and easy to use while supporting mobility, balance, strength, and recovery."
  },
  {
    question: "What are non-invasive wellness technologies?",
    answer: "Non-invasive wellness technologies are therapies or devices designed to support health and wellbeing without surgery, injections, or intensive physical strain."
  },
  {
    question: "How can adults maintain mobility as they age?",
    answer: "Maintaining mobility involves regular movement, muscle activation, balance training, recovery support, and healthy lifestyle habits that help preserve strength and flexibility over time."
  },
  {
    question: "What causes muscle loss after 50?",
    answer: "Age-related muscle loss, also known as sarcopenia, can occur due to reduced physical activity, hormonal changes, inflammation, and decreased muscle protein synthesis."
  },
  {
    question: "How can seniors improve strength and balance safely?",
    answer: "Seniors can improve strength and balance through low-impact training, muscle activation, vibration training, and consistent movement routines that are appropriate for their fitness level."
  },
  {
    question: "What is the AESPI Longevity Program?",
    answer: "The AESPI Longevity Program combines muscle activation, whole body vibration training, and molecular hydrogen therapy to support mobility, strength, recovery, and healthy ageing."
  },
  {
    question: "Are AESPI programs suitable for people who cannot exercise intensely?",
    answer: "Yes. AESPI’s technologies are designed to support people who may prefer lower-impact alternatives or additional support alongside conventional exercise."
  },
  {
    question: "Can AESPI help support active ageing?",
    answer: "AESPI’s programs are designed to help adults and seniors remain active, mobile, and independent as they age."
  },
  {
    question: "Is AESPI suitable for older adults with joint discomfort?",
    answer: "Many AESPI programs are low impact and designed to minimize excessive strain on the joints while supporting movement and muscle conditioning."
  },
  {
    question: "Where is AESPI located in Singapore?",
    answer: "AESPI is located at Vision Exchange in Jurong East, Singapore."
  },
  {
    question: "Do I need prior fitness experience to join AESPI programs?",
    answer: "No prior fitness experience is required. AESPI’s programs are beginner-friendly and suitable for a wide range of fitness levels."
  },
  {
    question: "What technologies does AESPI use?",
    answer: "AESPI uses technologies including BIXEPS muscle activation, Power Plate whole body vibration training, molecular hydrogen therapy, and body composition analysis as part of its healthy ageing programs."
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
