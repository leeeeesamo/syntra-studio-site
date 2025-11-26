// app/contact/page.jsx
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-6">
          Let’s talk about what you need handled.
        </h1>

        <p className="text-[var(--syntra-text-muted)] mb-10 max-w-2xl">
          Share what you’re working on — I’ll reply with ways Syntra can help.
        </p>

        <ContactForm />
      </section>
    </main>
  );
}
