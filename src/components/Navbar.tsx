import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Zap, 
  Home, 
  HeartPulse, 
  Cpu, 
  Users, 
  FileText, 
  MapPin, 
  HelpCircle, 
  ChevronRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { BRAND } from '@/src/constants';
import { TrialChoiceModal } from './TrialChoiceModal';

const NAV_LINKS = [
  { name: 'Home', href: '/', id: 'nav-home', desc: 'Go back to structural main page', icon: Home },
  { name: 'Longevity Strategy', href: '/#longevity', id: 'nav-strategy', desc: 'Our health programs & science', icon: HeartPulse },
  { name: 'Technologies', href: '/#technologies', id: 'nav-tech', desc: 'Medical-grade devices & training', icon: Cpu },
  { name: 'Who We Serve', href: '/#who-we-serve', id: 'nav-users', desc: 'Custom care for adults & seniors', icon: Users },
  { name: 'Blog', href: '/blog', id: 'nav-blog', desc: 'Guides and health articles', icon: FileText },
  { name: 'Location', href: '/#contact', id: 'nav-location', desc: 'Find our center and contact details', icon: MapPin },
  { name: 'Community Access', href: '/community-healthy-ageing-access-programme', id: 'nav-community', desc: 'Subsidised slots for CHAS cardholders', icon: HelpCircle }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
  const [showTrialChoice, setShowTrialChoice] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Ensure clean state without high contrast on load
    document.documentElement.classList.remove('high-contrast');
    localStorage.removeItem('highContrast');

    // Fetch runtime config
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        console.log("AESPI Banner Message Received:", data.bannerMessage);
        if (data.bannerMessage) setBannerMessage(data.bannerMessage);
      })
      .catch(err => console.error("Banner fetch failed:", err));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scroll for home page sections
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {bannerMessage && bannerMessage.trim() !== "" && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-white py-2.5 px-4 text-center text-xs md:text-sm font-black uppercase tracking-[0.15em] flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
          <Zap size={14} className="text-yellow-300 fill-yellow-300 animate-pulse" />
          <span className="drop-shadow-sm">{bannerMessage}</span>
          <Zap size={14} className="text-yellow-300 fill-yellow-300 animate-pulse" />
        </div>
      )}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
          (isScrolled || location.pathname !== '/') ? 'glass py-4 shadow-sm' : 'bg-transparent',
          (bannerMessage && bannerMessage.trim() !== "") ? 'mt-8' : ''
        )}
      >
        <TrialChoiceModal 
          isOpen={showTrialChoice} 
          onClose={() => setShowTrialChoice(false)} 
        />
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img 
              src={BRAND.logo} 
              alt={BRAND.name} 
              className="h-16 w-auto object-contain md:h-20"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav - Keep everything strictly on a single line */}
          <div className="hidden xl:flex items-center gap-4 xl:gap-5 flex-row flex-nowrap shrink">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Technologies') {
                const isTechActive = ['/bixeps', '/powerplate', '/h2-hydrogen', '/body-composition'].includes(location.pathname);
                return (
                  <div 
                    key={link.name}
                    className="relative group shrink-0"
                    onMouseEnter={() => setIsTechDropdownOpen(true)}
                    onMouseLeave={() => setIsTechDropdownOpen(false)}
                  >
                    <button
                      onClick={() => {
                        setIsTechDropdownOpen(!isTechDropdownOpen);
                        const element = document.getElementById('technologies');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={cn(
                        "flex items-center gap-1.5 text-[13px] xl:text-[14px] font-extrabold transition-colors uppercase tracking-wider py-1 px-1.5 xl:px-2 rounded hover:bg-slate-100 whitespace-nowrap text-slate-800 hover:text-black cursor-pointer",
                        isTechActive ? "text-primary border-b-2 border-primary" : ""
                      )}
                    >
                      {link.name}
                      <ChevronDown size={14} className={cn("transition-transform duration-200", isTechDropdownOpen ? "rotate-180 text-primary" : "")} />
                    </button>
                    
                    <AnimatePresence>
                      {isTechDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-64 rounded-2xl bg-white border-2 border-slate-200 shadow-xl py-3 z-50 overflow-hidden"
                        >
                          <Link 
                            to="/bixeps" 
                            className="block px-4 py-2.5 hover:bg-slate-50 transition-colors"
                            onClick={() => setIsTechDropdownOpen(false)}
                          >
                            <p className="text-sm font-extrabold text-slate-900 mb-0.5">BIXEPS Muscle Activation</p>
                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Sarcopenia Prevention</p>
                          </Link>
                          <Link 
                            to="/powerplate" 
                            className="block px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100"
                            onClick={() => setIsTechDropdownOpen(false)}
                          >
                            <p className="text-sm font-extrabold text-slate-900 mb-0.5">Power Plate Vibration</p>
                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Stability & Bone Density</p>
                          </Link>
                          <Link 
                            to="/h2-hydrogen" 
                            className="block px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100"
                            onClick={() => setIsTechDropdownOpen(false)}
                          >
                            <p className="text-sm font-extrabold text-slate-900 mb-0.5">Molecular Hydrogen Therapy</p>
                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Oxidative Stress Recovery</p>
                          </Link>
                          <Link 
                            to="/body-composition" 
                            className="block px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100"
                            onClick={() => setIsTechDropdownOpen(false)}
                          >
                            <p className="text-sm font-extrabold text-slate-900 mb-0.5">Body Composition Analysis</p>
                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Data-Driven Calibration</p>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-[13px] xl:text-[14px] font-extrabold transition-colors uppercase tracking-wider py-1 px-1.5 xl:px-2 rounded hover:bg-slate-100 whitespace-nowrap shrink-0",
                    location.pathname === link.href ? "text-primary border-b-2 border-primary" : "text-slate-800 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setShowTrialChoice(true)}
              className="hidden xl:block bg-primary text-white px-5 py-2.5 rounded-full text-sm font-extrabold hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer border-2 border-transparent whitespace-nowrap"
            >
              Book a Trial
            </button>

            {/* Mobile Toggle Button (Big and easily clickable) */}
            <button
              id="mobile-navigation-toggle"
              className="xl:hidden p-3 border-2 border-slate-300 bg-white text-slate-900 rounded-full h-12 w-12 flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 shadow-md transition-all cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open Navigation Directory"
            >
              {isMobileMenuOpen ? <X size={26} className="text-red-600" /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Full screen overlay optimized for senior thumbs & easy visibility) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-[#F4F1ED] p-6 pt-24 overflow-y-auto flex flex-col justify-between"
            >
              <div className="max-w-md mx-auto w-full space-y-6">
                
                {/* Mobile Menu Action Bar: Title, Close Button */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-slate-950 tracking-wider">AESPI MENU</span>
                  </div>

                  {/* Gigantic close navigation action */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-red-200 bg-red-550 bg-red-50 text-red-700 hover:bg-red-100 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <X size={15} /> Close
                  </button>
                </div>

                {/* Grid of Large Thumb-Friendly Targets (At least 68px tall for comfort and accuracy) */}
                <p className="text-xs font-extrabold text-slate-600 tracking-wider uppercase">Select a section to read:</p>
                
                <div className="flex flex-col gap-3.5">
                  {NAV_LINKS.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        id={link.id}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 border-2 rounded-2xl shadow-sm transition-all active:scale-[0.98] cursor-pointer",
                          location.pathname === link.href ? "border-primary" : "border-slate-300"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 shadow-inner",
                            location.pathname === link.href ? "bg-primary text-white" : "bg-slate-100 text-slate-700"
                          )}>
                            <IconComponent size={24} />
                          </div>
                          <div className="text-left">
                            <span className="block text-base font-extrabold text-slate-950 tracking-tight leading-tight uppercase">
                              {link.name}
                            </span>
                            <span className="block text-xs font-normal text-slate-600 leading-normal mt-0.5">
                              {link.desc}
                            </span>
                          </div>
                        </div>
                        <ChevronRight size={20} className="text-slate-400 shrink-0" />
                      </Link>
                    );
                  })}
                </div>

                <hr className="border-slate-300 my-4" />

                {/* Direct senior helpline panel */}
                <div className="bg-[#E8F5E9] border-2 border-[#81C784] p-5 rounded-3xl space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#C8E6C9] border border-[#A5D6A7] rounded-full text-[10px] font-black text-[#1B5E20] uppercase tracking-widest mb-1.5">
                      Fast Assistance
                    </span>
                    <h4 className="text-lg font-bold text-[#1B5E20] leading-snug">Need Help Navigating?</h4>
                    <p className="text-xs font-light text-[#2E7D32] leading-relaxed">
                      Seniors & Caregivers can dial or WhatsApp us directly. Our registry team is always happy to register you manually over chat.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <a 
                      href={BRAND.phoneUrl} 
                      className="flex items-center justify-center gap-2 bg-white text-slate-950 border-2 border-slate-300 py-3.5 px-4 rounded-xl font-bold text-sm shadow-sm hover:scale-102 active:scale-95 transition-all text-center leading-none"
                    >
                      <Phone size={16} className="text-primary shrink-0" /> Call {BRAND.whatsapp}
                    </a>
                    
                    <a 
                      href={`https://wa.me/6591234567?text=Hello%20AESPI%20team,%20I'd%20like%20to%20apply%20for%20the%20Community%20Healthy%20Ageing%20Access%20Programme.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#4CAF50] text-white border-2 border-[#43A047] py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:bg-[#43A047] active:scale-95 transition-all text-center leading-none"
                    >
                      💬 WhatsApp Setup
                    </a>
                  </div>
                </div>

                {/* Booking call-to-action */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowTrialChoice(true);
                  }}
                  className="w-full bg-primary text-white text-center py-5 rounded-[20px] font-extrabold text-lg shadow-xl tracking-wide uppercase cursor-pointer hover:bg-primary-hover border-2 border-transparent active:scale-[0.98] transition-all"
                >
                  Book a Trial Session
                </button>

                <p className="text-center text-[11px] text-slate-500 font-normal">
                  AESPI Longevity Support Line • {BRAND.email}
                </p>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
