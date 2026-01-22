import React from "react";

export default function ComparisonTable() {
  const headers = ["Essential", "Standard", "Premium"];

  const rows = [
    {
      label: "Inbox management",
      values: ["Basic checks", "Daily triage", "Priority triage"],
    },
    {
      label: "Scheduling & coordination",
      values: ["Light scheduling", "Scheduling + reminders", "Scheduling + follow-ups"],
    },
    {
      label: "Customer support inbox",
      values: ["Simple replies", "Main inbox", "Inbox + summaries"],
    },
    {
      label: "Website updates",
      values: ["Text edits", "Content updates", "Updates + landing pages"],
    },
    {
      label: "Documentation / SOPs",
      values: ["Simple notes", "Key workflows", "Ongoing SOPs"],
    },
    {
      label: "Workflow setup",
      values: ["Basic setup", "Core workflows", "Key workflows refined"],
    },
    {
      label: "Light automations",
      values: ["Reminders", "Key tasks", "Multiple workflows"],
    },
    {
      label: "Project follow-ups",
      values: ["End-of-project", "Check-ins", "Proactive follow-ups"],
    },
    {
      label: "Weekly planning",
      values: ["Recap", "Recap + priorities", "Planning support"],
    },
  ];

  return (
    <section className="mt-16">
      <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 shadow-sm shadow-black/40 overflow-hidden">
        <div className="px-6 py-6 border-b border-[var(--syntra-border-soft)] text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] mb-2">
            Compare Support Levels
          </h2>
          <p className="text-sm sm:text-base text-[var(--syntra-text-muted)]">
            See what's included in each level at a glance so you can choose the support that matches your
            pace and workload.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-black/40 text-[var(--syntra-text-main)]">
                <th className="px-4 sm:px-6 py-3 border-b border-[var(--syntra-border-soft)] font-medium text-left whitespace-nowrap">
                  Support area
                </th>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-3 border-b border-[var(--syntra-border-soft)] font-semibold text-center whitespace-nowrap"
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
                  className={
                    rowIndex % 2 === 0
                      ? "bg-gradient-to-r from-black/20 via-black/10 to-black/20"
                      : "bg-gradient-to-r from-black/10 via-black/5 to-black/10"
                  }
                >
                  <td className="px-4 sm:px-6 py-4 border-t border-[var(--syntra-border-soft)] align-top font-medium text-[var(--syntra-text-main)] whitespace-nowrap">
                    {row.label}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 sm:px-6 py-4 border-t border-[var(--syntra-border-soft)] text-[var(--syntra-text-muted)] text-center align-top"
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
