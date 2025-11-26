import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';

export default function ServicesPage() {
  return (
    <main className="space-y-20">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesSection />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>
    </main>
  );
}
