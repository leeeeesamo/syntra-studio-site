import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main className="pt-24 space-y-24">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ContactForm />
      </section>
    </main>
  );
}
