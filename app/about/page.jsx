import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';

export default function AboutPage() {
  return (
    <main className="space-y-20">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
