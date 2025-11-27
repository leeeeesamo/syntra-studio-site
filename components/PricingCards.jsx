import React from "react";
import { Circle, Layers, Star } from "lucide-react";

export default function PricingCards() {
  const plans = [
    {
      name: "Essential Support",
      tone: "For lighter weeks and focused support.",
      priceLine: "Starting at $825/mo",
      featured: false,
      icon: Circle,
      items: [
        "Weekday inbox monitoring with basic triage",
        "Light scheduling and calendar support",
        "Simple customer support replies for straightforward requests",
        "Light website text updates and small content tweaks",
      ],
    },
    {
      name: "Standard Support",
      tone: "For steady weekly support and active operations.",
      priceLine: "Starting at $1,450/mo",
      featured: true,
      icon: Layers,
      items: [
        "Priority inbox monitoring and clear triage",
        "Scheduling, coordination, and reminders for key meetings",
        "Customer support inbox as a primary response channel",
        "Website content updates and simple landing page builds",
        "Core process documentation, simple workflows, and light automations",
      ],
    },
    {
      name: "Premium Support",
      tone: "For high-volume weeks and leaders who need full support.",
      priceLine: "Starting at $2,200/mo",
      featured: false,
      icon: Star,
      items: [
        "Priority inbox support with proactive follow-through",
        "Scheduling, coordination, and follow-ups across projects",
        "Customer support inbox with simple workflows and summaries",
        "Website updates, light refreshes, and landing pages",
        "Ongoing SOPs, workflow refinement, and light automations",
        "Weekly planning touchpoints and simple recaps",
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-3">
          Ongoing Support Packages
        </h2>
        <p className="text-sm sm:text-base text-[var(--syntra-text-muted)]">
          Three levels of support designed for different workloads. All focus on steady, reliable help
          — not deep CRM management or marketing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className="h-full rounded-2xl border border-[var(--syntra-border-soft)] bg-black/25 shadow-sm shadow-black/40 p-6 sm:p-7 md:p-8 flex flex-col"
            >
              <div className="flex-1 flex flex-col">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
                  <Icon className="w-5 h-5 text-[var(--syntra-text-muted)]" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--syntra-heading)] mb-1">
                  {plan.name}
                </h3>
              <p className="text-xs sm:text-sm text-[var(--syntra-text-muted)] mb-4">
                {plan.tone}
              </p>

              <p className="text-sm font-medium text-[var(--syntra-text-muted)] uppercase tracking-wide">
                {"Starting at"}
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] mb-4">
                {plan.priceLine.replace("Starting at ", "")}
              </p>

                <ul className="mt-2 space-y-2.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
