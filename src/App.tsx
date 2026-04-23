/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Bixeps } from './pages/Bixeps';
import { H2Hydrogen } from './pages/H2Hydrogen';
import { PowerPlate } from './pages/PowerPlate';
import { BodyComposition } from './pages/BodyComposition';
import { MessageCircle } from 'lucide-react';
import { BRAND } from './constants';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { ScrollToHash } from './components/ScrollToHash';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const bannerMessage = process.env.VITE_BANNER_MESSAGE;

  return (
    <Router>
      <GoogleAnalytics />
      <ScrollToHash />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary">
        {bannerMessage && (
          <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium sticky top-0 z-[60] shadow-md">
            {bannerMessage}
          </div>
        )}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bixeps" element={<Bixeps />} />
            <Route path="/h2-hydrogen" element={<H2Hydrogen />} />
            <Route path="/powerplate" element={<PowerPlate />} />
            <Route path="/body-composition" element={<BodyComposition />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />

        {/* Sticky WhatsApp Button */}
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </div>
    </Router>
  );
}
