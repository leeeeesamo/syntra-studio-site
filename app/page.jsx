// app/page.jsx
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { CheckCircle2, ListChecks, Link2, LayoutTemplate, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <main className="space-y-12 md:space-y-16">
      <HeroSection />
      <ServicesSection />

      {/* Our Edge - Differentiators */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
            Our Edge
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[var(--syntra-text-muted)]">
            What Sets Us Apart
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-[var(--syntra-border-soft)]">
              <CheckCircle2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--syntra-heading)]">Reliable Systems + Human Touch</h3>
              <p className="text-sm text-[var(--syntra-text-muted)]">Technology paired with genuine care.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-[var(--syntra-border-soft)]">
              <ListChecks className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--syntra-heading)]">Thoughtful Processes</h3>
              <p className="text-sm text-[var(--syntra-text-muted)]">Documented workflows that scale.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-[var(--syntra-border-soft)]">
              <Link2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--syntra-heading)]">Seamless Integration</h3>
              <p className="text-sm text-[var(--syntra-text-muted)]">We work within your existing tools.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-[var(--syntra-border-soft)]">
              <LayoutTemplate className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--syntra-heading)]">Modern Design</h3>
              <p className="text-sm text-[var(--syntra-text-muted)]">Aesthetic clarity meets function.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
      </section>

      {/* How we work - Three pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            How we work
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[var(--syntra-text-muted)]">
            Our work is built on three pillars.
          </p>
          <div className="section-divider" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <ListChecks className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-[var(--syntra-heading)]">
              Structure
            </h3>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              We bring order to the moving parts of your business — inboxes,
              workflows, support systems, and day-to-day operations. Everything
              has a place, a process, and a rhythm that makes your work feel
              lighter and more predictable.
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <MessageSquare className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-[var(--syntra-heading)]">
              Clear Communication
            </h3>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              You'll never have to chase updates or wonder what's happening behind
              the scenes. We prioritize transparent, timely communication so you
              always know where things stand and what comes next.
            </p>
          </div>

          <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 text-left">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
              <CheckCircle2 className="w-5 h-5 text-[var(--syntra-text-muted)]" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-[var(--syntra-heading)]">
              Genuine Care
            </h3>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)] leading-relaxed">
              We treat your business like it's our own. That means thoughtful
              decision-making, professional client interactions, and support that
              goes beyond checking boxes. Reliability and care are at the center
              of every task we take on.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
      </section>

      <HowItWorksSection />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 sm:p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-[var(--syntra-text-muted)] mb-6 max-w-xl mx-auto">
            Let's discuss how Syntra can help your business run beautifully.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="btn-primary px-8 py-3 text-base"
            >
              Book a Discovery Call
            </a>
            <a
              href="/Syntra_Digital_Professional_Brochure.pdf"
              download
              className="btn-outline px-8 py-3 text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
