import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { MissionStatement } from '../components/MissionStatement';
import { Services } from '../components/Services';
import { WhoWeServe } from '../components/WhoWeServe';
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
      <MissionStatement />
      <Services />
      <WhoWeServe />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
