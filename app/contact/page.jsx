// app/contact/page.jsx
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Syntra Digital Solutions",
  description:
    "Get in touch with Syntra Digital Solutions to discuss virtual assistance, customer support, operations, or web design support.",
};

export default function ContactPage() {
  return (
    <main className="space-y-12">
      <PageHero
        title="Get in Touch"
        subtitle="Share what you're working on — we'll reply with ways Syntra can help."
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactForm />
      </section>
    </main>
  );
}
