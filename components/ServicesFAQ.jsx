const faqs = [
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

export default function ServicesFAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--syntra-heading)]">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 mb-10 text-center text-base sm:text-lg text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
        A few details that often help people decide if Syntra is the right fit.
      </p>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-5"
          >
            <h3 className="font-medium text-[var(--syntra-heading)] text-sm sm:text-base mb-2">
              {item.q}
            </h3>
            <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
    </section>
  );
}
