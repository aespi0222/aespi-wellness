import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND } from '@/src/constants';
import { db, collection, addDoc, serverTimestamp, handleFirestoreError, OperationType } from '@/src/firebase';

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 border border-red-200 rounded-2xl text-center">
          <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-4">We encountered an error. Please refresh the page or contact us directly.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-all"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submission triggered");
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const data = Object.fromEntries(formData.entries());
      
      // 1. Save to Firestore FIRST (Reliable backup)
      console.log("Saving to Firestore...");
      try {
        await addDoc(collection(db, 'inquiries'), {
          name: data.name,
          email: data.email,
          service: data.subject,
          message: data.message,
          status: 'new',
          createdAt: serverTimestamp()
        });
        console.log("Firestore save successful");
      } catch (fsError) {
        console.error("Firestore Error:", fsError);
        // We continue anyway to try Formspree
      }

      // 2. Send to Formspree via Server Proxy
      console.log("Sending to Server Proxy for Formspree ID:", BRAND.formspreeId);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          formId: BRAND.formspreeId,
          ...data
        })
      });

      console.log("Proxy Response Status:", response.status);

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const responseData = await response.json();
        console.error("Proxy Error Details:", responseData);
        setSubmitError(responseData.error || `Submission failed (${response.status}). Please verify your Form ID.`);
      }
    } catch (error) {
      console.error("Submission Exception:", error);
      const msg = error instanceof Error ? error.message : "Unknown error";
      setSubmitError(`Connection failed: ${msg}. Please try again or contact us via WhatsApp.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ErrorBoundary>
      <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Journey</h2>
            <p className="text-slate-600 mb-12 max-w-md">
              Have questions about our senior-focused wellness sessions or want to book a trial? 
              Our consultants are here to help you maintain your independence and vitality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{BRAND.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Contact Us</h4>
                  <a 
                    href={BRAND.phoneUrl} 
                    className="text-slate-500 text-sm block hover:text-primary transition-colors"
                  >
                    Call or WhatsApp: {BRAND.whatsapp}
                  </a>
                  <a 
                    href={`mailto:${BRAND.email}`} 
                    className="text-slate-500 text-sm block hover:text-primary transition-colors"
                  >
                    Email: {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Opening Hours</h4>
                  {BRAND.openingHours.map((item) => (
                    <p key={item.day} className="text-slate-500 text-sm">
                      <span className="font-medium text-slate-700">{item.day}:</span> {item.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a 
                  href={BRAND.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={BRAND.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={BRAND.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                  title="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                      <select 
                        name="subject"
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Book a Trial</option>
                        <option>BIXEPS Pro Wellness</option>
                        <option>Molecular Hydrogen</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white h-[450px] relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.753303867623!2d103.7423983!3d1.3238611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106263539829%3A0x6769938096f4236e!2sAESPI%20-%20BIXEPS%40Jurong%20East!5e0!3m2!1sen!2ssg!4v1712535400000!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AESPI - BIXEPS Pro@Jurong East Location Map"
          />
        </motion.div>
      </div>
    </section>
    </ErrorBoundary>
  );
}
