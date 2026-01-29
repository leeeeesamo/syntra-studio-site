import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Ways to Work With Syntra | Syntra Digital Solutions",
  description:
    "Explore Syntra Digital's support packages, one-time projects, and flexible ways to work together.",
};

export default function WorkWithUsPage() {
  return (
    <main className="space-y-0">
      <PageHero
        title="Ways to Work With Syntra"
        subtitle="Choose the level of support that fits your workload, pace, and priorities."
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg text-[var(--syntra-text-muted)] leading-relaxed">
            Syntra Digital offers structured, reliable support for the work that keeps your business
            moving — from inbox and scheduling to customer communication, website updates, and
            day-to-day operations. Choose a support level that matches your current season, and we'll
            keep things organized behind the scenes.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--syntra-border-soft)]/80 max-w-xs mx-auto" />

        {/* Pricing placeholder */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] mb-8">
            Support Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)] mb-2">Starter</h3>
              <p className="text-3xl font-bold text-blue-400 mb-4">$1,200<span className="text-base text-[var(--syntra-text-muted)]">/month</span></p>
              <p className="text-sm text-[var(--syntra-text-muted)]">Perfect for small businesses needing basic support</p>
            </div>
            <div className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)] mb-2">Standard</h3>
              <p className="text-3xl font-bold text-blue-400 mb-4">$2,000<span className="text-base text-[var(--syntra-text-muted)]">/month</span></p>
              <p className="text-sm text-[var(--syntra-text-muted)]">Ideal for growing businesses with regular needs</p>
            </div>
            <div className="rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] p-6">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)] mb-2">Premium</h3>
              <p className="text-3xl font-bold text-blue-400 mb-4">$3,500<span className="text-base text-[var(--syntra-text-muted)]">/month</span></p>
              <p className="text-sm text-[var(--syntra-text-muted)]">Comprehensive support for established businesses</p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto rounded-2xl bg-black/25 border border-[var(--syntra-border-soft)] px-6 py-6 sm:px-8 sm:py-7 text-center shadow-sm shadow-black/40">
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--syntra-heading)] mb-2">
            Onboarding Retainer
          </h2>
          <p className="text-sm sm:text-base text-[var(--syntra-text-muted)] leading-relaxed">
            All new clients begin with a one-time $300 onboarding retainer. This retainer is applied toward Month 1 and covers account setup, inbox/calendar connection, workspace organization, and onboarding preparation.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-[var(--syntra-border-soft)]/80 max-w-xs mx-auto" />

        {/* Services Guide Download */}
        <section className="mt-4 text-center">
          <a
            href="/documents/Syntra_Digital_Services_Guide_Brand.pdf"
            download
            className="btn-primary px-6 py-3 text-sm sm:text-base inline-flex items-center gap-2"
          >
            <span>Download Services Guide (PDF)</span>
          </a>
        </section>

        {/* CTA */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)]">
            Ready to talk through the details?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
            If you're not sure which package is the best fit, we can walk through your workload
            together and outline a clear starting point.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/contact"
              className="btn-primary px-6 py-3 text-sm sm:text-base"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
