import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Mission | Syntra Digital Solutions",
  description:
    "We make professional support feel effortless — combining modern systems, meaningful design, and dedicated people to help businesses work with confidence, focus, and ease.",
};

export default function MissionPage() {
  return (
    <main className="space-y-12 md:space-y-16">
      <PageHero
        title="Our Mission"
        subtitle="Our purpose and how we show up for clients."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 space-y-14 text-center">
        {/* Our Mission (inline) */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed text-[var(--syntra-text-muted)]">
            At Syntra Digital, our mission is to support the people behind the work. We partner with
            business owners, teams, and service-based professionals to bring structure, clarity, and ease
            back into their day-to-day operations.
            <br />
            <br />
            We build organized systems, establish clear communication, and create thoughtful digital
            solutions that help you stay grounded and focused. Our approach is practical, supportive, and
            always centered around making work feel more manageable—never overwhelming.
            <br />
            <br />
            Everything we deliver is crafted with intention and built to last. Every system, every
            workflow, every design choice reflects our commitment to being Reliable by Design.
          </p>
        </div>
        {/* Our Core Principles + How We Bring Our Mission to Life (two-column cards) */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Our Core Principles - left card */}
          <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-8 md:p-10 text-left">
            <p className="section-eyebrow text-center text-lg sm:text-xl font-semibold">
              Our Core Principles
            </p>
            <div className="section-divider" />
            <ul className="mt-6 space-y-3 text-sm sm:text-base text-[var(--syntra-text-muted)] leading-relaxed">
              <li>Work should feel organized, not chaotic.</li>
              <li>Communication should be clear and respectful.</li>
              <li>Support should be dependable, not reactive.</li>
              <li>Design should elevate, not confuse.</li>
              <li>Systems should simplify, not complicate.</li>
            </ul>
            <p className="mt-4 text-sm sm:text-base text-[var(--syntra-text-muted)]">
              These principles shape every interaction, workflow, and project — ensuring a consistent,
              grounded experience for the people we serve.
            </p>
          </div>

          {/* How We Bring Our Mission to Life - right card */}
          <div className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-8 md:p-10 text-left">
            <p className="section-eyebrow text-center text-lg sm:text-xl font-semibold">
              How We Bring Our Mission to Life
            </p>
            <div className="section-divider" />
            <div className="mt-6 space-y-3 text-sm sm:text-base text-[var(--syntra-text-muted)] leading-relaxed">
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Structure First:</span>{" "}
                We create organized workflows and operational frameworks that help work feel predictable
                and manageable — giving every client a stronger foundation.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Human-Centered Support:</span>{" "}
                Behind every message, update, and task is someone fully invested in helping your business
                run smoothly. Care and consideration guide everything we do.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Thoughtful Digital Design:</span>{" "}
                From a clean website to intuitive processes, your digital presence and internal systems
                deserve a polished, user-friendly experience that supports your goals.
              </p>
              <p>
                <span className="font-semibold text-[var(--syntra-heading)]">Consistent Communication:</span>{" "}
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
