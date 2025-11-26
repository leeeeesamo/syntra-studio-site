import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Mission | Syntra Digital Solutions",
  description:
    "We make professional support feel effortless — combining modern systems, meaningful design, and dedicated people to help businesses work with confidence, focus, and ease.",
};

export default function MissionPage() {
  return (
    <main className="space-y-8">
      <PageHero
        title="Our Mission"
        subtitle="Our purpose and how we show up for clients."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 space-y-10 text-center">
        {/* Our Mission (inline) */}
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow mb-2 text-base sm:text-lg font-semibold">Our Purpose</p>
          <p className="text-xl leading-relaxed text-[var(--syntra-text-muted)]">
            To bring clarity, structure, and thoughtful design to the people who keep work moving. We
            support businesses and professionals with strong organizational skills, dependable
            communication, and reliable digital tools — so they can show up with confidence, stay
            focused on what matters, and operate without overwhelm.
          </p>
        </div>

        {/* Our Core Principles */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-3">Our Core Principles</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-[var(--syntra-text-muted)] text-left">
            <li>Work should feel organized, not chaotic.</li>
            <li>Communication should be clear and respectful.</li>
            <li>Support should be dependable, not reactive.</li>
            <li>Design should elevate, not confuse.</li>
            <li>Systems should simplify, not complicate.</li>
          </ul>
          <p className="mt-4 text-sm sm:text-base text-[var(--syntra-text-muted)] text-left">
            These principles shape every interaction, workflow, and project — ensuring a consistent,
            grounded experience for the people we serve.
          </p>
        </div>

        {/* How We Bring Our Mission to Life */}
        <div className="max-w-3xl mx-auto mt-4">
          <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 sm:p-10 text-left">
            <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)] mb-4 text-center">
              How We Bring Our Mission to Life
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Structure First:</span>
                {" "}
                We create organized workflows and operational frameworks that help work feel predictable
                and manageable — giving every client a stronger foundation.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Human-Centered Support:</span>
                {" "}
                Behind every message, update, and task is someone fully invested in helping your business
                run smoothly. Care and consideration guide everything we do.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Thoughtful Digital Design:</span>
                {" "}
                From a clean website to intuitive processes, your digital presence and internal systems
                deserve a polished, user-friendly experience that supports your goals.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Consistent Communication:</span>
                {" "}
                We believe reliability is built through clarity. That means quick responses, proactive
                updates, and steady follow-through — every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
