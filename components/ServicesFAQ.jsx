const workingFaqs = [
  {
    q: "What tools do you typically work in?",
    a: "Email, calendar, and task tools you already use (Google Workspace, Microsoft 365, Slack, Notion, ClickUp, etc.). We adapt to your stack instead of forcing a new one.",
  },
  {
    q: "Do you offer ongoing support or project-based work?",
    a: "Both. Many clients start with a project or trial period, then move into a retainer once we have clear systems in place.",
  },
  {
    q: "What does onboarding look like?",
    a: "We start with a discovery call, map out responsibilities and access, and create a simple plan for the first 30–60 days.",
  },
  {
    q: "Where are you based and what time zone do you work in?",
    a: "Primarily North American business hours, with flexibility depending on client needs.",
  },
];

const pricingFaqs = [
  {
    q: "Why are Syntra's prices lower than some national virtual assistant agencies?",
    a: "We intentionally keep our pricing approachable for small businesses and service-based professionals. Our goal is to provide high-quality support without the inflated overhead you see in large agencies. You receive dedicated, personalized service — not a rotating support team — and you only pay for what you actually need.",
  },
  {
    q: "Are these rates typical for Alabama-based businesses?",
    a: "Yes. Alabama small businesses generally invest $300–$1,500 per month for remote administrative or operational support. Our pricing aligns with local expectations while still reflecting the value of digital, operational, and website-focused support.",
  },
  {
    q: "How do your prices compare to national VA/OBM providers?",
    a: "Most national providers charge between $1,200–$2,500+ for similar monthly support. By comparison, Syntra's packages come in roughly 10–25% below national averages, keeping our services competitive while maintaining strong value and expertise.",
  },
  {
    q: "Do lower prices mean lower quality?",
    a: "Not at all. We operate with lower overhead and streamlined systems, which lets us offer competitive pricing without sacrificing quality. Our focus is on reliability, proactive support, and clear communication — not volume-based agency work.",
  },
  {
    q: "Can your prices increase as my business grows?",
    a: "Only if your workload increases beyond your current package. We review needs together and adjust as your operations evolve, and you'll never be pushed into a higher tier unless it genuinely makes sense for your work level.",
  },
  {
    q: "Do you offer hourly rates?",
    a: "Syntra does not rely on hourly billing, but certain project-based or overflow tasks can be quoted hourly when needed. Our standard model is retainer-based because it gives you predictable monthly support and fewer surprises.",
  },
  {
    q: "What makes Syntra more cost-effective than hiring an employee?",
    a: "With Syntra, you avoid payroll taxes, benefits, and insurance costs, and you don't pay for downtime during slow periods. You get flexible support that scales with your workload and only pay for the services you actually use — not a full-time seat.",
  },
  {
    q: "Do you offer custom packages if none of your tiers fit my budget?",
    a: "Yes. We can create a custom package that fits your needs and stays below your maximum monthly spend. This flexibility helps new or small businesses access high-quality support without stretching their budget.",
  },
  {
    q: "Are these startup-friendly prices permanent?",
    a: "This pricing model was intentionally designed for Syntra's startup phase — approachable, sustainable, and competitive. As client volume, demand, and expertise grow, pricing may adjust in small increments, but early clients benefit from price protection and loyalty-style pricing.",
  },
  {
    q: "How do I know which package is the best value for me?",
    a: "A quick discovery call helps identify where your time is slipping and what tasks need the most support. From there, we recommend the package that gives you the best balance of coverage and affordability — without overselling or overscoping.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--syntra-heading)]">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 mb-10 text-center text-base sm:text-lg text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
        A few details that often help people decide if Syntra is the right fit.
      </p>

      <div className="space-y-8 max-w-3xl mx-auto">
        <div>
          <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--syntra-text-muted)]">
            Working with Syntra
          </h3>
          <div className="mt-3 space-y-3">
            {workingFaqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] px-4 py-3 sm:px-5 sm:py-4"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="font-medium text-[var(--syntra-heading)] text-sm sm:text-base pr-4">
                    {item.q}
                  </h4>
                  <span className="ml-2 text-xs text-[var(--syntra-text-muted)] transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-3">
                  <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--syntra-border-soft)]/60">
          <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--syntra-text-muted)]">
            Pricing &amp; Value
          </h3>
          <div className="mt-3 space-y-3">
            {pricingFaqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] px-4 py-3 sm:px-5 sm:py-4"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="font-medium text-[var(--syntra-heading)] text-sm sm:text-base pr-4">
                    {item.q}
                  </h4>
                  <span className="ml-2 text-xs text-[var(--syntra-text-muted)] transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="mt-3">
                  <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
    </section>
  );
}
