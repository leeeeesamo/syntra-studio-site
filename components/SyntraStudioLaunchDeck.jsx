export default function SyntraStudioLaunchDeck() {
  return (
    <div className="w-full bg-gradient-to-br from-[#f9fafb] to-[#eef1f7] text-[#1a1b3a] font-sans">
      {/* Slide 1 — Title */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-10">
        <h1 className="text-6xl font-bold mb-4">Reliable by Design.</h1>
        <p className="text-2xl text-gray-700">Where structure meets sincerity — and business runs beautifully.</p>
      </section>

      {/* Slide 2 — About */}
      <section className="h-screen flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold mb-6">About Syntra Studio</h2>
        <p className="text-xl leading-relaxed max-w-4xl">
          At <strong>Syntra Studio</strong>, we believe reliability should be intentional — <em>Reliable by Design.</em> We envision a future where technology and human connection work hand in hand to make business feel effortless.
          Every system, service, and design we create is built with purpose — blending innovation with genuine care to help businesses operate smoothly and scale confidently.
        </p>
      </section>

      {/* Slide 3 — Mission */}
      <section className="h-screen bg-[#101c57] text-white flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
        <p className="text-xl leading-relaxed max-w-3xl">
          We make professional support feel effortless — combining modern systems, meaningful design, and dedicated people to help businesses work with confidence, focus, and ease.
        </p>
      </section>

      {/* Slide 4 — Services */}
      <section className="h-screen flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold mb-10">Our Services</h2>
        <ul className="grid grid-cols-2 gap-10 text-xl">
          <li><strong>Executive & Virtual Assistance</strong><br />Professional, proactive support for founders and executives.</li>
          <li><strong>Customer Service Support</strong><br />Reliable, empathetic communication through email, chat, and phone.</li>
          <li><strong>Marketing & Operations Support</strong><br />Keep operations aligned and marketing consistent.</li>
          <li><strong>Web Design & Digital Presence</strong><br />Modern, performance-driven websites that reflect brand purpose.</li>
        </ul>
      </section>

      {/* Slide 5 — Differentiators */}
      <section className="h-screen bg-[#e5e7eb] flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold mb-8">What Sets Us Apart</h2>
        <ul className="text-xl space-y-4">
          <li>✨ Reliable systems + human touch</li>
          <li>🧩 Thoughtful processes and documentation</li>
          <li>🤝 Seamless integration with your workflows</li>
          <li>🎨 Modern creative design aesthetic with functional clarity</li>
        </ul>
      </section>

      {/* Slide 6 — Roadmap */}
      <section className="h-screen flex flex-col justify-center px-20">
        <h2 className="text-4xl font-semibold mb-6">Launch Roadmap</h2>
        <p className="text-lg text-gray-700 mb-6">A 9-month journey to reach $25k MRR through structured onboarding, repeatable systems, and scalable partnerships.</p>
        <ul className="grid grid-cols-3 gap-6 text-xl">
          <li><strong>Month 1–3:</strong><br />Build foundation, launch site, secure first 3 clients.</li>
          <li><strong>Month 4–6:</strong><br />Standardize delivery, create SOPs, expand partnerships.</li>
          <li><strong>Month 7–9:</strong><br />Marketing push, pricing optimization, scale to $25k MRR.</li>
        </ul>
      </section>

      {/* Slide 7 — Why Syntra */}
      <section className="h-screen bg-[#101c57] text-white flex flex-col justify-center items-center text-center px-10">
        <h2 className="text-5xl font-semibold mb-6">Why Syntra Studio</h2>
        <p className="text-2xl max-w-3xl leading-relaxed">
          Because reliability isn’t just a value — it’s the foundation of everything we design.
        </p>
      </section>

      {/* Slide 8 — Call to Action */}
      <section className="h-screen flex flex-col justify-center items-center px-10">
        <h2 className="text-4xl font-semibold mb-6">Next Steps</h2>
        <p className="text-xl mb-6">Ready to make your business run beautifully?</p>
        <div className="space-x-6">
          <button className="bg-[#101c57] text-white px-6 py-3 rounded-2xl text-lg">Book a Discovery Call</button>
          <button className="border-2 border-[#101c57] text-[#101c57] px-6 py-3 rounded-2xl text-lg">Download Our Brochure</button>
        </div>
      </section>
    </div>
  );
}
