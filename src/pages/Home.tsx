import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { MissionStatement } from '../components/MissionStatement';
import { Services } from '../components/Services';
import { WhoWeServe } from '../components/WhoWeServe';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { FAQ, FAQS } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO additionalSchema={[faqSchema]} />
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
