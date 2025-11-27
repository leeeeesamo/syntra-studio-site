import PageHero from "@/components/PageHero";
import PickYourPriorities from "@/components/PickYourPriorities";
import PricingCards from "@/components/PricingCards";
import OneTimeProjects from "@/components/OneTimeProjects";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata = {
  title: "Ways to Work With Syntra | Syntra Digital Solutions",
  description:
    "Explore Syntra Digital's support packages, one-time projects, and flexible ways to work together.",
};

const priorities = [
  "Inbox stays under control",
  "Clients get quick, clear responses",
  "Scheduling doesn't slip",
  "Website content stays current",
  "Projects move forward on time",
  "Processes are documented",
];

export default function WorkWithUsPage() {
  return (
    <main className="space-y-0">
      <PageHero
        title="Ways to Work With Syntra"
        subtitle="Choose the level of support that fits your workload, pace, and priorities."
      />
      {/* Download Services Guide (top of page) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex justify-center">
          <a
            href="/documents/Syntra_Digital_Services_Guide_Brand.pdf"
            download
            className="btn-primary px-6 py-3 text-sm sm:text-base flex items-center gap-2"
          >
            <span>Download Services Guide (PDF)</span>
          </a>
        </div>
      </section>

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

        {/* Packages */}
        <PricingCards />

        {/* Divider */}
        <div className="h-px bg-[var(--syntra-border-soft)]/80 max-w-xs mx-auto" />

        {/* One-time projects */}
        <OneTimeProjects />

        {/* Pick Your Priorities */}
        <PickYourPriorities priorities={priorities} />

        {/* Comparison Table */}
        <ComparisonTable />

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
