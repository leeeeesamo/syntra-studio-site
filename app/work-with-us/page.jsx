import PageHero from "@/components/PageHero";
import PickYourPriorities from "@/components/PickYourPriorities";
import ComparisonChart from "@/components/ComparisonChart";

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
    <main className="space-y-12">
      <PageHero
        title="Ways to Work With Syntra"
        subtitle="Choose the level of support that fits your workload, pace, and priorities."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[var(--syntra-text-muted)] leading-relaxed">
            Syntra Digital offers structured, reliable support for the work that keeps your business
            moving — from inbox and scheduling to customer communication, website updates, and
            day-to-day operations. Choose a support level that matches your current season, and we'll
            keep things organized behind the scenes.
          </p>
        </div>

        {/* Packages */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
              Ongoing Support Packages
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
              Three levels of support designed for different workloads. All packages focus on steady,
              reliable help — not deep CRM management or marketing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Essential */}
            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">Essential Support</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">For lighter weeks and focused support.</p>
              <p className="mt-4 text-2xl font-semibold text-[var(--syntra-heading)]">Starting at $800/mo</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Weekday inbox monitoring with basic triage</li>
                <li>Light scheduling and calendar coordination</li>
                <li>Customer support inbox responses for simple requests</li>
                <li>Light website text updates and content tweaks</li>
                <li>Basic checklists and simple process notes</li>
              </ul>
            </div>

            {/* Standard */}
            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/30 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">Standard Support</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">For steady weekly support and active operations.</p>
              <p className="mt-4 text-2xl font-semibold text-[var(--syntra-heading)]">Starting at $1,400/mo</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Priority inbox monitoring and clear triage</li>
                <li>Scheduling, coordination, and reminders for key meetings</li>
                <li>Customer support inbox as a primary point of response</li>
                <li>Website content updates and simple landing page builds</li>
                <li>Key process documentation and simple SOPs</li>
                <li>Workflow setup for core day-to-day tasks</li>
                <li>Light automations for reminders and simple handoffs</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-[var(--syntra-heading)]">Premium Support</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">For high-volume weeks and leaders who need full support.</p>
              <p className="mt-4 text-2xl font-semibold text-[var(--syntra-heading)]">Starting at $2,200/mo</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Priority inbox support with proactive triage and follow-through</li>
                <li>Scheduling, coordination, and follow-ups across projects</li>
                <li>Customer support inbox with simple workflows and summaries</li>
                <li>Website updates, light refreshes, and landing pages</li>
                <li>Ongoing SOPs and documentation for key processes</li>
                <li>Workflow setup and refinement for major client or internal flows</li>
                <li>Light automations that keep small tasks moving</li>
                <li>Weekly planning touchpoints and simple recaps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* One-time projects */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
              One-Time Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
              Perfect for cleanup, reset, or a focused sprint to get one area of your operations back on
              track.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">Inbox Cleanup</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">Sort, organize, and reset your inbox.</p>
              <p className="mt-3 text-base font-semibold text-[var(--syntra-heading)]">Starting at $450</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Archive and label old threads so you can see what's current</li>
                <li>Simple rules and folders for future messages</li>
                <li>Light templates for common replies</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">Website Refresh</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">Polish what's already working.</p>
              <p className="mt-3 text-base font-semibold text-[var(--syntra-heading)]">Starting at $850</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Content and layout updates to key pages</li>
                <li>Simple landing page or services page tune-up</li>
                <li>Light design adjustments for clarity and flow</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">Workspace Setup</h3>
              <p className="mt-1 text-sm text-[var(--syntra-text-muted)]">Bring structure to your everyday tools.</p>
              <p className="mt-3 text-base font-semibold text-[var(--syntra-heading)]">Starting at $600</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--syntra-text-muted)]">
                <li>Organized folders, docs, and shared resources</li>
                <li>Simple task lists and workflows for recurring work</li>
                <li>Light automations or reminders inside existing tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pick Your Priorities */}
        <PickYourPriorities priorities={priorities} />

        {/* Comparison Chart */}
        <ComparisonChart />

        {/* Services Guide Download */}
        <section className="mt-10">
          <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)]">
              Download the Services Guide
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
              Want to review everything in one place? Download the full Services Guide with package
              details, example scenarios, and next steps.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="/documents/Syntra_Digital_Services_Guide_Brand.pdf"
                download
                className="btn-primary px-6 py-3 text-sm sm:text-base flex items-center gap-2"
              >
                <span>Download Services Guide (PDF)</span>
              </a>
            </div>
          </div>
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
