import { BRAND } from '@/src/constants';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={BRAND.logo} 
                alt={BRAND.name} 
                className="h-32 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
              AESPI is a premium longevity and healthy ageing collective. We help adults and seniors stay active, independent, and resilient through science-backed wellness technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href={BRAND.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                title="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={BRAND.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                title="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={BRAND.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                title="Follow us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="/" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="#longevity" className="hover:text-white transition-colors">Strategy</a></li>
              <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#who-we-serve" className="hover:text-white transition-colors">Focus Groups</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="leading-relaxed">{BRAND.address}</li>
              <li>
                <a 
                  href={BRAND.phoneUrl} 
                  className="hover:text-white transition-colors"
                >
                  Call or WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${BRAND.email}`} 
                  className="hover:text-white transition-colors"
                >
                  Email: {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND.name} PTE. LTD. All rights reserved.</p>
          <p>Designed for a Better You</p>
        </div>
      </div>
    </footer>
  );
}
