// app/services/customer-service-support/page.jsx
import Button from "@/components/Button";

export const metadata = {
  title: "Customer Service Support | Syntra Digital Solutions",
  description:
    "Customer service support across email, chat, and phone with calm, documented processes and consistent quality.",
};

export default function CustomerServiceSupportPage() {
  return (
    <main className="space-y-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="section-eyebrow">Services</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[var(--syntra-heading)]">
          Customer Service Support
        </h1>
        <p className="mt-6 text-lg text-[var(--syntra-text-muted)] max-w-3xl">
          Calm, empathetic support across email, chat, and phonewith processes that make it easy to keep quality consistent.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">What this can include</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Inbox and ticket queue management.</li>
            <li>Chat support coverage during defined hours.</li>
            <li>Creating and updating canned responses and macros.</li>
            <li>Light QA on customer conversations.</li>
            <li>Documenting workflows so anyone on the team can step in.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">Great fit if</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Response times or backlogs are slipping.</li>
            <li>You want a consistent tone and standard across channels.</li>
            <li>Your team is juggling support alongside other responsibilities.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--syntra-heading)] mb-3">
            See how support could feel for your customers.
          </h2>
          <p className="text-sm text-[var(--syntra-text-muted)] mb-6 max-w-2xl mx-auto">
            Tell us about your current support setup, channels, and volume. Well respond with a few ways Syntra could help.
          </p>
          <Button href="/contact">Talk about customer support</Button>
        </div>
      </section>
    </main>
  );
}
