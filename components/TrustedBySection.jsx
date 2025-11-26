export default function TrustedBySection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] px-6 py-6 sm:px-8 sm:py-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="section-eyebrow font-semibold mb-1 sm:mb-0 text-center sm:text-left">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm text-[var(--syntra-text-muted)]">
          <span className="flex items-center gap-2">
            <span className="text-[var(--syntra-gradient-start)]">✔</span>
            <span>Startups</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--syntra-gradient-start)]">✔</span>
            <span>Real estate professionals</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--syntra-gradient-start)]">✔</span>
            <span>Service-based businesses</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--syntra-gradient-start)]">✔</span>
            <span>Solo founders &amp; coaches</span>
          </span>
        </div>
      </div>
    </section>
  );
}
