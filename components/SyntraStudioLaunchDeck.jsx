// SyntraStudioLaunchDeck.jsx
export default function SyntraStudioLaunchDeck() {
  return (
    <div className="w-full font-sans text-[var(--syntra-text-main)]">
      
      {/* Slide 1 — Title */}
      <section className="py-32 flex flex-col justify-center items-center text-center px-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] bg-clip-text text-transparent">
          Reliable by Design.
        </h1>
        <p className="text-xl sm:text-2xl text-[var(--syntra-text-muted)] max-w-2xl">
          Where structure meets sincerity — and business runs beautifully.
        </p>
      </section>

      {/* Slide 2 — About */}
      <section className="py-32 px-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-[var(--syntra-heading)] mb-6">
          About Syntra Studio
        </h2>
        <p className="text-xl leading-relaxed text-[var(--syntra-text-muted)]">
          At <strong className="text-[var(--syntra-heading)]">Syntra Studio</strong>, 
          we believe reliability should be intentional — 
          <em> Reliable by Design.</em> We envision a future where technology and 
          human connection work hand in hand to make business feel effortless.
          <br /><br />
          Every system, service, and design we create is built with purpose — blending innovation 
          with genuine care to help businesses operate smoothly and scale confidently.
        </p>
      </section>

      {/* Slide 3 — Mission */}
      <section className="py-32 px-10 bg-[var(--syntra-deep-bg)] text-white max-w-full">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl text-gray-200">
            We make professional support feel effortless — combining modern systems, 
            meaningful design, and dedicated people to help businesses work with 
            confidence, focus, and ease.
          </p>
        </div>
      </section>

      {/* Slide 4 — Services */}
      <section className="py-32 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-[var(--syntra-heading)]">
          Our Services
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-lg sm:text-xl text-[var(--syntra-text-muted)]">
          <li>
            <strong className="text-[var(--syntra-heading)]">Executive & Virtual Assistance</strong><br />
            Professional, proactive support for founders and executives.
          </li>
          <li>
            <strong className="text-[var(--syntra-heading)]">Customer Service Support</strong><br />
            Reliable, empathetic communication through email, chat, and phone.
          </li>
          <li>
            <strong className="text-[var(--syntra-heading)]">Marketing & Operations Support</strong><br />
            Keep operations aligned and marketing consistent.
          </li>
          <li>
            <strong className="text-[var(--syntra-heading)]">Web Design & Digital Presence</strong><br />
            Modern, performance-driven websites that reflect brand purpose.
          </li>
        </ul>
      </section>

      {/* Slide 5 — Differentiators */}
      <section className="py-32 px-10 bg-black/20 max-w-full">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-[var(--syntra-heading)] mb-8">
            What Sets Us Apart
          </h2>
          <ul className="text-xl text-[var(--syntra-text-muted)] space-y-4">
            <li>✨ Reliable systems + human touch</li>
            <li>🧩 Thoughtful processes and documentation</li>
            <li>🤝 Seamless integration with your workflows</li>
            <li>🎨 Modern design aesthetic with functional clarity</li>
          </ul>
        </div>
      </section>

      {/* Slide 6 — Roadmap */}
      <section classname="py-32 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-[var(--syntra-heading)]">
          Launch Roadmap
        </h2>
        <p className="text-lg text-[var(--syntra-text-muted)] mb-6 max-w-3xl">
          A 9-month journey to reach $25k MRR through structured onboarding, 
          repeatable systems, and scalable partnerships.
        </p>
        <ul className="grid sm:grid-cols-3 gap-6 text-lg sm:text-xl text-[var(--syntra-text-muted)]">
          <li>
            <strong className="text-[var(--syntra-heading)]">Month 1–3:</strong><br />
            Build foundation, launch site, secure first 3 clients.
          </li>
          <li>
            <strong className="text-[var(--syntra-heading)]">Month 4–6:</strong><br />
            Standardize delivery, SOPs, expand partnerships.
          </li>
          <li>
            <strong className="text-[var(--syntra-heading)]">Month 7–9:</strong><br />
            Marketing push, pricing optimization, scale to $25k MRR.
          </li>
        </ul>
      </section>

      {/* Slide 7 — Why Syntra */}
      <section className="py-32 px-10 bg-[var(--syntra-deep-bg)] text-white text-center max-w-full">
        <h2 className="text-5xl font-semibold mb-6">Why Syntra Studio</h2>
        <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
          Because reliability isn’t just a value — it’s the foundation of 
          everything we design.
        </p>
      </section>

      {/* Slide 8 — Call to Action */}
      <section className="py-32 px-10 text-center max-w-full">
        <h2 className="text-4xl font-semibold text-[var(--syntra-heading)] mb-6">
          Next Steps
        </h2>
        <p className="text-xl text-[var(--syntra-text-muted)] mb-10">
          Ready to make your business run beautifully?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/contact"
            className="btn-primary px-8 py-4 text-lg"
          >
            Book a Discovery Call
          </a>
          <a
            href="/brand-assets/Syntra-Brochure.pdf"
            className="btn-outline px-8 py-4 text-lg"
          >
            Download Our Brochure
          </a>
        </div>
      </section>
    </div>
  );
}
