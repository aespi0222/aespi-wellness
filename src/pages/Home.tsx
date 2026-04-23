import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
