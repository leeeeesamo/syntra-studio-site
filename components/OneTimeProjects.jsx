import React from "react";

export default function OneTimeProjects() {
  const projects = [
    {
      name: "Inbox Cleanup",
      priceLine: "Starting at $450",
      description: "Sort, organize, and reset your inbox.",
      items: [
        "Archive and label older threads so current messages stand out",
        "Set up simple folders and rules for future messages",
        "Create light templates for common replies",
      ],
    },
    {
      name: "Website Refresh",
      priceLine: "Starting at $850",
      description: "Polish what's already working.",
      items: [
        "Update content on key pages",
        "Tune up a landing or services page",
        "Make light design tweaks for clarity and flow",
      ],
    },
    {
      name: "Workspace Setup",
      priceLine: "Starting at $600",
      description: "Bring structure to your everyday tools.",
      items: [
        "Organize shared folders, docs, and resources",
        "Define simple recurring-task checklists",
        "Add light automations or reminders inside existing tools",
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-3">
          One-Time Projects
        </h2>
        <p className="text-sm sm:text-base text-[var(--syntra-text-muted)]">
          Ideal for a reset, cleanup, or focused sprint to get one part of your operations back on track.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="h-full rounded-2xl border border-[var(--syntra-border-soft)] bg-black/25 p-6 sm:p-7 md:p-8 flex flex-col shadow-sm shadow-black/40"
          >
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-[var(--syntra-heading)]">
                {project.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[var(--syntra-text-muted)]">
                {project.description}
              </p>

              <p className="mt-4 text-base font-semibold text-[var(--syntra-heading)]">
                {project.priceLine}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm text-[var(--syntra-text-muted)] list-disc list-inside">
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
