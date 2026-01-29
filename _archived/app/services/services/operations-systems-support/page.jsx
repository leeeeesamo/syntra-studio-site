// app/services/operations-systems-support/page.jsx
import Button from "@/components/Button";

export const metadata = {
  title: "Operations & Systems Support | Syntra Digital Solutions",
  description:
    "Operations and systems support for documenting workflows, reporting, and keeping back-office work moving.",
};

export default function OperationsSystemsSupportPage() {
  return (
    <main className="space-y-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="section-eyebrow">Services</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[var(--syntra-heading)]">
          Operations & Systems Support
        </h1>
        <p className="mt-6 text-lg text-[var(--syntra-text-muted)] max-w-3xl">
          Back-office operations, documentation, and reporting that keep your work movingwithout you having to chase it.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">What this can include</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Documenting recurring workflows and checklists.</li>
            <li>Light reporting on key metrics and status updates.</li>
            <li>Coordinating handoffs between team members or vendors.</li>
            <li>Keeping internal tools and records organized and current.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">Great fit if</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Youre keeping track of tasks in your head or scattered notes.</li>
            <li>Projects slow down because no one owns the follow-through.</li>
            <li>You want more visibility into whats happening week to week.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--syntra-heading)] mb-3">
            Put structure behind the way your work runs.
          </h2>
          <p className="text-sm text-[var(--syntra-text-muted)] mb-6 max-w-2xl mx-auto">
            Share what systems you have today and where things tend to get stuck. Well outline a clearer way forward.
          </p>
          <Button href="/contact">Talk about operations</Button>
        </div>
      </section>
    </main>
  );
}
