// app/contact/page.jsx
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Syntra Digital",
  description:
    "Get in touch with Syntra Digital to discuss your web design and development project. Let's build something amazing together.",
};

export default function ContactPage() {
  return (
    <main className="space-y-12">
      <PageHero
        title="Get in Touch"
        subtitle="Share your website project details — we'll reply with how we can help bring your vision to life."
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactForm />
      </section>
    </main>
  );
}
