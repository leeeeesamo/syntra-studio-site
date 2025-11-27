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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Inbox className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
              Virtual Assistance
            </h3>
            <p className="mt-2 text-sm text-[var(--syntra-text-muted)]">
              Reliable support for day-to-day operations.
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <span className="font-medium text-[var(--syntra-heading)]">Includes:</span> inbox triage,
              scheduling, document prep, and client follow-ups.
            </p>
          </article>

          <article className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <MessageSquare className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
              Customer Support
            </h3>
            <p className="mt-2 text-sm text-[var(--syntra-text-muted)]">
              Professional communication that keeps your clients cared for.
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <span className="font-medium text-[var(--syntra-heading)]">Includes:</span> support inbox
              monitoring, responses, and light troubleshooting.
            </p>
          </article>

          <article className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Settings2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
              Systems &amp; Workflows
            </h3>
            <p className="mt-2 text-sm text-[var(--syntra-text-muted)]">
              Simple, organized structures that make work easier.
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <span className="font-medium text-[var(--syntra-heading)]">Includes:</span> CRM updates, SOPs,
              workflows, and basic automations.
            </p>
          </article>

          <article className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Monitor className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
              Website Support
            </h3>
            <p className="mt-2 text-sm text-[var(--syntra-text-muted)]">
              Clean, purposeful updates to keep your online presence polished.
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <span className="font-medium text-[var(--syntra-heading)]">Includes:</span> content changes,
              small design updates, landing pages, and light builds.
            </p>
          </article>

          <article className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left md:col-span-2">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <Wand2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
              One-Time Projects
            </h3>
            <p className="mt-2 text-sm text-[var(--syntra-text-muted)]">
              Quick, focused solutions for specific needs.
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              <span className="font-medium text-[var(--syntra-heading)]">Includes:</span> inbox cleanups, CRM
              cleanups, SOP documentation, website refreshes, and workspace setup.
            </p>
          </article>
        </div>
      </section>
      <TestimonialsSection />
      <ServicesFAQ />
    </main>
  );
}
