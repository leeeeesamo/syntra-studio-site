export default function ComparisonChart() {
  const headers = ["Essential", "Standard", "Premium"];

  const rows = [
    {
      label: "Inbox management",
      values: ["Weekday monitoring", "Weekday monitoring + triage", "Priority monitoring + triage"],
    },
    {
      label: "Scheduling & coordination",
      values: ["Basic scheduling", "Scheduling + coordination", "Scheduling, coordination, and follow-ups"],
    },
    {
      label: "Customer support inbox",
      values: ["Light responses", "Primary support inbox", "Primary inbox + simple workflows"],
    },
    {
      label: "Website updates",
      values: ["Light text updates", "Text + content updates", "Content, landing pages, and light refreshes"],
    },
    {
      label: "Documentation / SOPs",
      values: ["Simple checklists", "Key process outlines", "Ongoing SOP and process documentation"],
    },
    {
      label: "Workflow setup",
      values: ["Basic workflow review", "Setup for core workflows", "Setup and refinement for key workflows"],
    },
    {
      label: "Light automations",
      values: ["Simple reminders", "Select automations for key tasks", "Broader light automations across workflows"],
    },
    {
      label: "Project follow-ups",
      values: ["End-of-project check-ins", "Check-ins and task follow-through", "Proactive follow-ups and summaries"],
    },
    {
      label: "Weekly planning",
      values: ["End-of-week recap", "End-of-week recap + priorities", "Weekly planning support and priorities"],
    },
  ];

  return (
    <section className="mt-10">
      <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 overflow-hidden">
        <div className="px-6 py-5 border-b border-[var(--syntra-border-soft)]">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] text-center">
            Compare Support Levels
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--syntra-text-muted)] text-center max-w-2xl mx-auto">
            See what's included in each level so you can choose the right fit for your workload and
            pace.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-black/40 text-[var(--syntra-text-main)]">
                <th className="px-4 sm:px-6 py-3 border-b border-[var(--syntra-border-soft)] font-medium">
                  Support Area
                </th>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-3 border-b border-[var(--syntra-border-soft)] font-semibold text-center"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={rowIndex % 2 === 0 ? "bg-black/10" : "bg-black/20"}
                >
                  <td className="px-4 sm:px-6 py-3 border-t border-[var(--syntra-border-soft)] align-top text-[var(--syntra-text-main)]">
                    {row.label}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 sm:px-6 py-3 border-t border-[var(--syntra-border-soft)] text-[var(--syntra-text-muted)] text-center align-top"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
