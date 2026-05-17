import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Services />
      <Experience />
      <BeforeAfter />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
