// app/services/page.jsx
import PageHero from "@/components/PageHero";
import ServicesFAQ from "@/components/ServicesFAQ";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Inbox, MessageSquare, Settings2, Monitor, Wand2 } from "lucide-react";

export const metadata = {
  title: "Services We Offer | Syntra Digital Solutions",
  description:
    "Explore Syntras services: executive and virtual assistance, customer service support, operations and systems, and web design.",
};

export default function ServicesPage() {
  return (
    <main className="space-y-10">
      <PageHero
        title="Services We Offer"
        subtitle="Support that keeps your work moving, from assistance and support to operations and web."
      />
      {/* Download brochure */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex justify-center">
          <a
            href="/Syntra_Digital_Professional_Brochure.pdf"
            download
            className="btn-primary px-6 py-3 text-base flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Brochure (PDF)
          </a>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
            Our Core Services
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Virtual Assistance */}
          <article className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6 sm:p-7 md:p-8 text-left shadow-sm shadow-black/40 flex flex-col">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Inbox className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">
              Virtual Assistance
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              Reliable support for day-to-day operations.
            </p>
            <p className="mt-4 text-[11px] sm:text-xs font-semibold text-[var(--syntra-text-muted)] uppercase tracking-wide">
              Includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
              <li>Inbox triage and basic filtering</li>
              <li>Scheduling and calendar coordination</li>
              <li>Document preparation and small admin tasks</li>
              <li>Client follow-ups and simple communication</li>
            </ul>
          </article>

          {/* Customer Support */}
          <article className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6 sm:p-7 md:p-8 text-left shadow-sm shadow-black/40 flex flex-col">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <MessageSquare className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">
              Customer Support
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              Professional communication that keeps your clients cared for.
            </p>
            <p className="mt-4 text-[11px] sm:text-xs font-semibold text-[var(--syntra-text-muted)] uppercase tracking-wide">
              Includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
              <li>Support inbox monitoring</li>
              <li>Friendly, on-brand responses</li>
              <li>Light troubleshooting and simple FAQs</li>
            </ul>
          </article>

          {/* Systems & Workflows */}
          <article className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6 sm:p-7 md:p-8 text-left shadow-sm shadow-black/40 flex flex-col">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Settings2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">
              Systems &amp; Workflows
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              Simple, organized structures that make work easier.
            </p>
            <p className="mt-4 text-[11px] sm:text-xs font-semibold text-[var(--syntra-text-muted)] uppercase tracking-wide">
              Includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
              <li>Light CRM updates and data hygiene</li>
              <li>Standard operating procedures (SOPs)</li>
              <li>Workflow mapping for key processes</li>
              <li>Basic automations that reduce manual steps</li>
            </ul>
          </article>

          {/* Website Support */}
          <article className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6 sm:p-7 md:p-8 text-left shadow-sm shadow-black/40 flex flex-col">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Monitor className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">
              Website Support
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              Clean, purposeful updates to keep your online presence polished.
            </p>
            <p className="mt-4 text-[11px] sm:text-xs font-semibold text-[var(--syntra-text-muted)] uppercase tracking-wide">
              Includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
              <li>Content and copy updates</li>
              <li>Small design refinements</li>
              <li>Landing page tweaks and light builds</li>
            </ul>
          </article>

          {/* One-Time Projects */}
          <article className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6 sm:p-7 md:p-8 text-left shadow-sm shadow-black/40 flex flex-col md:col-span-2">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Wand2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">
              One-Time Projects
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              Quick, focused solutions for specific needs.
            </p>
            <p className="mt-4 text-[11px] sm:text-xs font-semibold text-[var(--syntra-text-muted)] uppercase tracking-wide">
              Includes
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
              <li>Inbox cleanups and resets</li>
              <li>Light CRM and data cleanups</li>
              <li>SOP documentation for recurring tasks</li>
              <li>Website refreshes and workspace setup</li>
            </ul>
          </article>
        </div>
      </section>
      <TestimonialsSection />
      <ServicesFAQ />
    </main>
  );
}
