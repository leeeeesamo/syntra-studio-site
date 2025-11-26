import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--syntra-heading)] mb-6">
          Let’s talk about what you need handled.
        </h1>
        <p className="text-[var(--syntra-text-muted)] mb-10 max-w-2xl">
          Share a bit about your workload, business, or upcoming projects. I’ll
          respond with specific ways Syntra can step in and take things off
          your plate.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
