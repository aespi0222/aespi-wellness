import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { BRAND } from '@/src/constants';
import { TrialChoiceModal } from './TrialChoiceModal';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'BIXEPS Pro', href: '/bixeps' },
  { name: 'Molecular Hydrogen', href: '/h2-hydrogen' },
  { name: 'Power Plate', href: '/powerplate' },
  { name: 'Body Composition', href: '/body-composition' },
  { name: 'Why Choose Us', href: '/#why-choose-us' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTrialChoice, setShowTrialChoice] = useState(false);
  const location = useLocation();

  useEffect(() => {
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

  const bannerMessage = import.meta.env.VITE_BANNER_MESSAGE;

  return (
    <>
      {bannerMessage && bannerMessage.trim() !== "" && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-white py-2.5 px-4 text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={BRAND.logo} 
            alt={BRAND.name} 
            className="h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.href ? "text-primary" : "text-slate-600 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setShowTrialChoice(true)}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            Book a Trial
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === link.href ? "text-primary" : "text-slate-700 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-3">
              <a 
                href={BRAND.phoneUrl} 
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
              >
                <Phone size={16} /> Call or WhatsApp: {BRAND.whatsapp}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors">
                <Mail size={16} /> {BRAND.email}
              </a>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setShowTrialChoice(true);
              }}
              className="bg-primary text-white text-center py-3 rounded-xl font-bold mt-2"
            >
              Book a Trial
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
