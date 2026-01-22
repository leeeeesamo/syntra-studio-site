// app/about/page.jsx
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Syntra Digital | Syntra Digital Solutions",
  description:
    "Learn more about Syntra Digital Solutions and the reliability-first approach behind our virtual assistance, support, and digital services.",
};

export default function AboutPage() {
  return (
    <main className="space-y-12 md:space-y-16">
      <PageHero
        title="About Syntra Digital"
        subtitle="Learn more about who we are and how we help businesses thrive."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
      </section>

      {/* Fit + What we take off your plate */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Who we're a great fit for - left */}
          <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-8 md:p-10 text-left">
            <p className="section-eyebrow text-center text-lg sm:text-xl font-semibold">
              Who we're a great fit for
            </p>
            <div className="section-divider" />
            <div className="mt-6 space-y-4 text-[var(--syntra-text-muted)] leading-relaxed text-base">
              <p>
                Solo founders who need a reliable right hand — someone who keeps the
                inbox, schedule, and client communication steady even on the busiest
                weeks.
              </p>
              <p>
                Small teams that have outgrown DIY systems — and are ready for
                organized operations, clear processes, and dependable support.
              </p>
              <p>
                Service-based businesses that want a polished client experience —
                from first touch to final delivery, handled with structure and care.
              </p>
              <p>
                Entrepreneurs who want to operate with more clarity and less chaos —
                and need consistent support that scales with their growth.
              </p>
            </div>
          </div>

          {/* What we take off your plate - right */}
          <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-8 md:p-10 text-left">
            <p className="section-eyebrow text-center text-lg sm:text-xl font-semibold">
              What we take off your plate
            </p>
            <div className="section-divider" />

            <ul className="mt-6 space-y-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Inbox triage, client responses, and communication follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>CRM updates, appointment scheduling, and task management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Support inbox monitoring and helpdesk replies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Website updates, landing page tweaks, and content changes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Document creation, proposals, intake forms, and process templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Light project coordination and keeping small tasks moving forward</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-[var(--syntra-gradient-start)]">✓</span>
                <span>Vendor communication, service requests, and basic admin support</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/services"
                className="text-sm text-[var(--syntra-text-main)] underline-offset-2 hover:underline"
              >
                → Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What you can expect working together */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
            What you can expect working together.
          </h2>
          <ul className="mt-6 space-y-3 text-lg text-[var(--syntra-text-muted)] max-w-3xl mx-auto text-left">
            <li>Clear communication and predictable follow-through.</li>
            <li>Systems and structure that keep you organized.</li>
            <li>A warm, human approach to support.</li>
            <li>Web design that's clean, functional, and client-friendly.</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
