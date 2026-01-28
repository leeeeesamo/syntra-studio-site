// app/services/web-design-digital-presence/page.jsx
import Button from "@/components/Button";

export const metadata = {
  title: "Web Design & Digital Presence | Syntra Digital Solutions",
  description:
    "Web design and digital presence services for simple, modern marketing sites and clear client touchpoints.",
};

export default function WebDesignDigitalPresencePage() {
  return (
    <main className="space-y-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="section-eyebrow">Services</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[var(--syntra-heading)]">
          Web Design & Digital Presence
        </h1>
        <p className="mt-6 text-lg text-[var(--syntra-text-muted)] max-w-3xl">
          Clean, responsive websites and simple digital touchpoints that make it easy for clients to work with you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">What this can include</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Designing and building simple, modern marketing sites.</li>
            <li>Refining site structure and key pages (home, services, contact).</li>
            <li>Polishing copy for clarity and professionalism.</li>
            <li>Light ongoing updates and tweaks once the site is live.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">Great fit if</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Your current site feels outdated or doesnt reflect your work.</li>
            <li>You need a web presence that supports sales and onboarding.</li>
            <li>Youd like a partner who can handle the details without overcomplicating things.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--syntra-heading)] mb-3">
            Explore what a refreshed site could look like.
          </h2>
          <p className="text-sm text-[var(--syntra-text-muted)] mb-6 max-w-2xl mx-auto">
            Share your current site or brand materials, and well suggest a clear, right-sized path forward.
          </p>
          <Button href="/contact">Talk about your website</Button>
        </div>
      </section>
    </main>
  );
}
