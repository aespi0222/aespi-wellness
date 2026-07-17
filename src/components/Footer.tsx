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
            <p className="text-white/80 max-w-sm mb-6 leading-relaxed font-medium text-sm">
              AESPI is a premium longevity and healthy ageing collective. We help adults and seniors stay active, independent, and resilient through science-backed wellness technologies.
            </p>
            <div className="mb-8">
              <a 
                href="/community-healthy-ageing-access-programme" 
                className="text-accent hover:text-white text-sm transition-colors font-serif italic border-b border-accent/20 hover:border-white/40 pb-0.5"
              >
                Community Healthy Ageing Access Programme
              </a>
            </div>
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
            <h4 className="font-serif text-xl mb-6 text-white font-bold">Technologies</h4>
            <ul className="space-y-4 text-white/80 font-medium text-sm">
              <li><a href="/bixeps" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" /> BIXEPS Muscle Activation</a></li>
              <li><a href="/powerplate" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" /> Power Plate Vibration</a></li>
              <li><a href="/h2-hydrogen" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" /> Molecular Hydrogen Therapy</a></li>
              <li><a href="/body-composition" className="hover:text-accent transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" /> Body Composition Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white font-bold">Quick Links</h4>
            <ul className="space-y-4 text-white/80 font-medium text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Home & Vision</a></li>
              <li><a href="/#longevity" className="hover:text-accent transition-colors">Longevity Strategy</a></li>
              <li><a href="/#who-we-serve" className="hover:text-accent transition-colors">Who We Serve</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Healthy Ageing Blog</a></li>
              <li><a href="/#contact" className="hover:text-accent transition-colors">Contact & Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-white/80 text-sm font-medium">
              <li className="leading-relaxed">{BRAND.address}</li>
              <li>
                <a 
                  href={BRAND.phoneUrl} 
                  className="hover:text-accent transition-colors"
                >
                  Call or WhatsApp: {BRAND.whatsapp}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${BRAND.email}`} 
                  className="hover:text-accent transition-colors"
                >
                  Email: {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-medium">
          <p>© {new Date().getFullYear()} {BRAND.name} PTE. LTD. All rights reserved.</p>
          <p>Science-Backed Healthy Ageing Solutions in Singapore</p>
        </div>
      </div>
    </footer>
  );
}
