import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { 
  Heart, 
  ChevronRight, 
  CheckCircle, 
  ChevronDown, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  Send, 
  Activity, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { db, collection, addDoc, serverTimestamp, handleFirestoreError, OperationType } from '../firebase';

export function CommunityProgramme() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    chasCardType: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const faqs = [
    {
      q: "What is the AESPI Community Healthy Ageing Access Programme?",
      a: "This programme is a mission-driven community initiative by AESPI to make premium healthy ageing and longevity technologies accessible to selected eligible Singaporean seniors. It features structured, supervised wellness sessions designed to preserve physical strength, functional balance, and overall physical independence."
    },
    {
      q: "Who is eligible for this-access initiative?",
      a: "This programme is dedicated to Singapore citizens or Permanent Residents aged 60 and above, who currently hold a valid CHAS Blue or CHAS Orange card, and are experiencing challenges in mobility, joint comfort, or muscular strength."
    },
    {
      q: "What is the commitment or fee required?",
      a: "As part of AESPI's social impact charter to support healthy ageing accessibility, successful candidates get access to subsidised sessions, which are reserved in a limited volume each month of the year."
    },
    {
      q: "Are the wellness sessions safe for seniors as they age?",
      a: "Yes. All our technologies are completely non-invasive and gentle. Our BIXEPS muscle activation uses low-intensity magnetic fields with zero physical strain, and Power Plate whole-body vibrations are customized to the comfort levels of each senior. Each session is conducted under the direct physical supervision of our trained wellness consultants."
    },
    {
      q: "How many sessions are included in this programme?",
      a: "Selected participants receive a dedicated series of structured sessions tailored to their current mobility level and biometrics, typically spanning over 10 to 12 weeks, with progress closely monitored via medical-grade body composition markers."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your full name.';
    if (!formData.phone.trim()) errors.phone = 'Please enter your contact number.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.age.trim() || isNaN(Number(formData.age)) || Number(formData.age) < 40) {
      errors.age = 'Eligible applicants are generally aged 60 and above (or over 40 with mobility needs).';
    }
    
    if (!formData.chasCardType) {
      errors.chasCardType = 'Please select your CHAS card type to verify eligibility.';
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Create Document in Firestore
      await addDoc(collection(db, 'community_inquiries'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        age: formData.age,
        chasCardType: formData.chasCardType,
        message: formData.message || '',
        createdAt: serverTimestamp(),
        status: 'new'
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        chasCardType: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission Failed:', error);
      try {
        handleFirestoreError(error, OperationType.CREATE, 'community_inquiries');
      } catch (logError: any) {
        setSubmitError('Our team is online on WhatsApp! If the secure firestore database is temporarily unreachable, please tap the WhatsApp chat button on the bottom right.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Community Healthy Ageing Access Programme | Supporting Active and Independent Ageing"
        description="Learn about AESPI's Community Healthy Ageing Access Programme, designed to support eligible seniors in maintaining strength, mobility and independence through accessible healthy ageing solutions."
        canonical="/community-healthy-ageing-access-programme"
        additionalSchema={[faqSchema]}
      />

      {/* Main Structural Container */}
      <div className="bg-slate-50 min-h-screen pt-32 pb-24 font-sans selection:bg-primary/20 selection:text-primary">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb / Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-semibold mb-8 uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          {/* 1. HERO SECTION */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary tracking-wider uppercase mb-4">
                <Sparkles size={12} /> Community Initiative
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-slate-900 font-light mb-6 leading-tight">
                Community Healthy Ageing <br />
                <span className="italic text-primary font-normal">Access Programme</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                Ensuring Singapore’s eligible seniors have secure access to premium, science-backed wellness support. At AESPI, we are dedicated to helping our seniors preserve muscle health, balance, and independence.
              </p>
            </motion.div>
          </section>

          {/* 2. WHY WE CREATED THIS PROGRAMME */}
          <section className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 mb-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 font-light">
              Why We Created <span className="italic text-primary">This Programme</span>
            </h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-sm md:text-base">
              <p>
                Our core belief at AESPI is that every adult and senior should have the opportunity to live fully, without being limited by mobility constraints, balance concerns, or muscle deterioration. Ageing with dignity means retaining the strength to stand up, walk confidently, and maintain autonomy in daily activities.
              </p>
              <p>
                Premium longevity technology should not belong only to a few. As part of our commitment to healthy ageing and public health span in Singapore, we created the <strong>Community Healthy Ageing Access Programme</strong>. We reserve a dedicated set of sponsored places every month to support selected seniors with advanced muscle conditioning protocols, assisting them as they transition into long-term active physical health.
              </p>
            </div>
            
            {/* Core Values / Pillar Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">
                  <Activity size={18} className="text-primary" />
                </div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Strength</h4>
                <p className="text-[11px] text-slate-400">Muscular support</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">
                  <UserCheck size={18} className="text-primary" />
                </div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobility</h4>
                <p className="text-[11px] text-slate-400">Active movement</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">
                  <Clock size={18} className="text-primary" />
                </div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Recovery</h4>
                <p className="text-[11px] text-slate-400">Systemic vitality</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">
                  <ShieldCheck size={18} className="text-primary" />
                </div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Autonomy</h4>
                <p className="text-[11px] text-slate-400">Pure independence</p>
              </div>
            </div>
          </section>

          {/* 3. WHO MAY BE ELIGIBLE */}
          <section className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 mb-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 font-light">
              Who May Be <span className="italic text-primary">Eligible</span>
            </h2>
            <p className="text-slate-500 font-light mb-8 text-sm md:text-base leading-relaxed">
              To support individuals who need it most, our access programme evaluates candidates based on active citizenship, financial markers, and physical health needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-serif text-lg text-slate-900 mb-4 font-normal">Primary Criteria</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Singapore Citizen or Permanent Resident</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Aged 60 and above preferred</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Holder of **CHAS Blue** or **CHAS Orange** Card</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-serif text-lg text-slate-900 mb-4 font-normal">Health Markers</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Difficulty standing up or climbing steps reliably</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Sarcopenia risk or muscle deterioration challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-600 font-light">Seeking standard non-invasive wellness support</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. WHAT TO EXPECT */}
          <section className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 mb-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 font-light">
              What To <span className="italic text-primary">Expect</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-serif text-primary text-sm font-bold">1</div>
                <div>
                  <h4 className="font-serif text-slate-900 text-lg mb-2">BIXEPS Muscle Activation</h4>
                  <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                    10-minute BIXEPS muscle activation sessions per leg. This utilizes gentle, low-intensity magnetic fields to activate the mitochondria within your muscles, boosting strength and mobility without traditional physical strain.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-serif text-primary text-sm font-bold">2</div>
                <div>
                  <h4 className="font-serif text-slate-900 text-lg mb-2">Power Plate Vibration Support</h4>
                  <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                    Brief, highly targeted Power Plate vibration sessions. This assists with balance pathways, maintains healthy blood circulation, and supports joints in a low-impact framework.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-serif text-primary text-sm font-bold">3</div>
                <div>
                  <h4 className="font-serif text-slate-900 text-lg mb-2">Molecular Hydrogen Therapy</h4>
                  <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                    Gentle, high-purity Molecular Hydrogen therapy. Restores cellular vitality, manages systemic oxidative stress, and bolsters physical recoverability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-serif text-primary text-sm font-bold">4</div>
                <div>
                  <h4 className="font-serif text-slate-900 text-lg mb-2">Biometrics & Supervision</h4>
                  <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                    Medical-grade InBody tracking and alignment of functional muscle health. Direct physical supervision from our professional wellness practitioners to make sure every second of the session is comfortable and safe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <section className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 mb-12 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 font-light">
              Frequently Asked <span className="italic text-primary">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 font-serif text-base text-slate-800 hover:text-primary transition-colors group"
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 transition-transform duration-300 group-hover:text-primary shrink-0 ${activeFaq === idx ? 'rotate-180 text-primary' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed my-3 pl-1">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* 6. ENQUIRE ABOUT COMMUNITY ACCESS */}
          <section id="enquiry-form" className="bg-white rounded-[40px] border-2 border-slate-200 p-8 md:p-12 shadow-lg scroll-mt-24">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold text-secondary uppercase tracking-[.3em] mb-3 block">Official Enrolment Route</span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-950 font-medium">
                Enquire About <span className="italic text-primary">Community Access</span>
              </h2>
              <p className="text-slate-700 text-sm md:text-base font-light mt-3 max-w-lg mx-auto leading-relaxed">
                Fill in the secure form below. Our team will carefully review your information and guide you through the enrolment options.
              </p>
            </div>

            {/* Senior/Caregiver WhatsApp Support Callout (Highly-optimized alternative pathway) */}
            <div className="mb-10 p-6 md:p-8 bg-[#E8F5E9] border-2 border-[#81C784] rounded-3xl text-left shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C8E6C9] border border-[#A5D6A7] rounded-full text-xs font-bold text-[#1B5E20] uppercase tracking-wider mb-3">
                    Fastest Senior Assistance
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-[#1B5E20] font-semibold mb-2">
                    Prefer to use <span className="italic">WhatsApp</span> instead?
                  </h3>
                  <p className="text-[#2E7D32] text-sm md:text-base leading-relaxed font-normal max-w-xl">
                    Many seniors and caregivers find it easiest to message or call us directly. Tap the button to chat with our friendly registration coordinator in Singapore.
                  </p>
                </div>
                <a
                  href="https://wa.me/6591234567?text=Hello%20AESPI%20team,%20I'd%20like%20to%20apply%20for%20the%20Community%20Healthy%20Ageing%20Access%20Programme."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#4CAF50] hover:bg-[#43A047] text-white px-8 py-4.5 rounded-full font-bold text-base shadow-md hover:scale-[1.02] active:scale-95 transition-all shrink-0 w-full md:w-auto"
                >
                  <span className="text-lg">💬</span> Chat On WhatsApp
                </a>
              </div>
            </div>

            {submitError && (
              <div className="mb-6 p-5 bg-red-50 border-2 border-red-200 rounded-2xl text-red-900 text-sm font-normal leading-relaxed">
                {submitError}
              </div>
            )}

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/20">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-serif text-slate-950 mb-3">Thank you for your enquiry</h3>
                <p className="text-slate-700 font-light text-base md:text-lg max-w-md mx-auto leading-relaxed">
                  We have successfully saved your application. Our senior wellness registrar will review your eligibility and reach out to you within 2-3 business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                      Senior's Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Tan Ah Kow (or Caregiver's Name)"
                      className={`w-full px-5 py-4 rounded-2xl border-2 ${formErrors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 placeholder-slate-400`}
                    />
                    {formErrors.name && <p className="text-red-700 text-xs font-bold mt-2">{formErrors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9123 4567"
                      className={`w-full px-5 py-4 rounded-2xl border-2 ${formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 placeholder-slate-400`}
                    />
                    {formErrors.phone && <p className="text-red-700 text-xs font-bold mt-2">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. email@example.com"
                      className={`w-full px-5 py-4 rounded-2xl border-2 ${formErrors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 placeholder-slate-400`}
                    />
                    {formErrors.email && <p className="text-red-700 text-xs font-bold mt-2">{formErrors.email}</p>}
                  </div>

                  {/* Age field */}
                  <div>
                    <label htmlFor="age" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                      Senior's Age *
                    </label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="e.g. 68"
                      className={`w-full px-5 py-4 rounded-2xl border-2 ${formErrors.age ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-white'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 placeholder-slate-400`}
                    />
                    {formErrors.age && <p className="text-red-700 text-xs font-bold mt-2">{formErrors.age}</p>}
                  </div>
                </div>

                {/* CHAS Card Type Dropdown */}
                <div>
                  <label htmlFor="chasCardType" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                    CHAS Card Type *
                  </label>
                  <select
                    id="chasCardType"
                    name="chasCardType"
                    value={formData.chasCardType}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 rounded-2xl border-2 ${formErrors.chasCardType ? 'border-red-500 bg-red-50/20' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 bg-white`}
                  >
                    <option value="">-- Please Select Card Type --</option>
                    <option value="Blue">CHAS Blue Card</option>
                    <option value="Orange">CHAS Orange Card</option>
                    <option value="Other">Other / Not a CHAS Holder</option>
                  </select>
                  {formErrors.chasCardType && <p className="text-red-700 text-xs font-bold mt-2">{formErrors.chasCardType}</p>}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-950 uppercase tracking-wider mb-2.5">
                    Message / Mobility Constraints (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us briefly about any strength limitations, knee/joint support needed, or mobility constraints."
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base font-medium text-slate-950 placeholder-slate-400"
                  />
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-hover hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/15 disabled:opacity-50 disabled:cursor-not-allowed group w-full sm:w-auto cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>Saving Details...</>
                    ) : (
                      <>
                        Submit Enrolment Request 
                        <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    By submitting, your data is securely stored. You consent to let AESPI contact you.
                  </p>
                </div>
              </form>
            )}
          </section>

        </div>
      </div>
    </>
  );
}
export default CommunityProgramme;
