// SyntraStudioLaunchDeck.jsx
export default function SyntraStudioLaunchDeck() {
  return (
    <div className="w-full font-sans text-[var(--syntra-text-main)] max-w-6xl mx-auto">
      {/* Section 1 — Who We Are & Our Edge */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
            Who We Are
          </h2>
          <p className="mt-2 text-xl sm:text-2xl text-[var(--syntra-text-muted)]">
            About Syntra Digital Solutions
          </p>
          <p className="text-lg leading-relaxed text-[var(--syntra-text-muted)] mt-6">
            At <strong className="text-[var(--syntra-heading)]">Syntra Digital Solutions</strong>,
            we believe reliability should be intentional — <em>Reliable by Design.</em> We envision
            a future where technology and human connection work hand in hand to make business feel effortless.
          </p>
          <p className="text-lg leading-relaxed text-[var(--syntra-text-muted)] mt-4">
            Every system, service, and design we create is built with purpose — blending innovation
            with genuine care to help businesses operate smoothly and scale confidently.
          </p>
        </div>

        <div className="mt-10 max-w-5xl mx-auto text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] mb-2 text-center">
            Our Edge
          </h3>
          <p className="text-base sm:text-lg text-[var(--syntra-text-muted)] mb-6 text-center">
            What Sets Us Apart
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
              <span className="text-2xl">✨</span>
              <div>
                <h3 className="font-semibold text-[var(--syntra-heading)]">Reliable Systems + Human Touch</h3>
                <p className="text-sm text-[var(--syntra-text-muted)]">Technology paired with genuine care.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
              <span className="text-2xl">🧩</span>
              <div>
                <h3 className="font-semibold text-[var(--syntra-heading)]">Thoughtful Processes</h3>
                <p className="text-sm text-[var(--syntra-text-muted)]">Documented workflows that scale.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-semibold text-[var(--syntra-heading)]">Seamless Integration</h3>
                <p className="text-sm text-[var(--syntra-text-muted)]">We work within your existing tools.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-black/30">
              <span className="text-2xl">🎨</span>
              <div>
                <h3 className="font-semibold text-[var(--syntra-heading)]">Modern Design</h3>
                <p className="text-sm text-[var(--syntra-text-muted)]">Aesthetic clarity meets function.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What you can expect working together */}
      <section className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 sm:p-12 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--syntra-heading)]">
          What you can expect working together.
        </h2>
        <ul className="mt-6 space-y-3 text-lg text-[var(--syntra-text-muted)] max-w-3xl mx-auto text-left">
          <li>Clear communication and predictable follow-through.</li>
          <li>Systems and structure that keep you organized.</li>
          <li>A warm, human approach to support.</li>
          <li>Web design that's clean, functional, and client-friendly.</li>
        </ul>
        <div className="mt-5 max-w-3xl mx-auto text-left">
          <a
            href="/services"
            className="text-sm text-[var(--syntra-text-main)] underline-offset-2 hover:underline"
          >
            Explore the full list of services →
          </a>
        </div>
      </section>

    </div>
  );
}
