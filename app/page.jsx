// app/page.jsx
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
