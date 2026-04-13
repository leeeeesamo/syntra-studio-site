import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Work With Us | Syntra Digital",
  description:
    "Partner with Syntra Digital to improve your website, streamline operations, and build reliable systems. See how we work and what to expect.",
  openGraph: {
    title: "Work With Us | Syntra Digital",
    description:
      "Partner with Syntra Digital to improve your website, streamline operations, and build reliable systems.",
    url: "https://syntrasolutions.digital/work-with-us",
  },
  alternates: {
    canonical: "https://syntrasolutions.digital/work-with-us",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Syntra Digital",
  url: "https://syntrasolutions.digital",
  description:
    "Syntra Digital builds reliable websites and business tools for service companies — founded on real IT and operations experience.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "Business Systems Consulting",
    "Workflow Automation",
  ],
  priceRange: "$$$",
};

const whoIsThisFor = [
  "Service businesses that rely on their website to bring in customers",
  "Teams spending too much time on repetitive, manual tasks",
  "Business owners who want clearer communication with their customers online",
  "Companies that have outgrown their current website or tools",
  "Anyone who needs reliable digital infrastructure without managing it themselves",
];

const whatWeDo = [
  {
    title: "Systems & Operations Foundation",
    desc: "We start with a strategy-first review of your tools, workflows, and pain points. You get a clear picture of what needs to change, in what order, and why — before anything gets built.",
  },
  {
    title: "Website & Backend Implementation",
    desc: "We design and build websites and backend systems tailored to how your business actually works. Fast, professional, and structured to generate leads and support day-to-day operations.",
  },
  {
    title: "Ongoing Systems Support",
    desc: "Structured, responsive support to keep everything running smoothly over time. We handle maintenance, troubleshooting, and incremental improvements — without the need for in-house IT.",
  },
];

const process = [
  {
    step: "01",
    title: "Audit",
    desc: "We learn how your business runs, review your current tools and website, and identify what\u2019s working and what isn\u2019t. No assumptions, no templates — just an honest assessment.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Based on the findings, we design and implement solutions tailored to your business. Whether it\u2019s a full website rebuild, workflow improvements, or backend integrations — we build what you actually need.",
  },
  {
    step: "03",
    title: "Optimize",
    desc: "Once things are live, we refine. We track results, identify opportunities, and make targeted improvements so your systems keep getting better over time.",
  },
  {
    step: "04",
    title: "Support",
    desc: "We provide ongoing, structured support so you never have to worry about things breaking or falling behind. Updates, fixes, and improvements — handled proactively.",
  },
];

const differentiators = [
  {
    title: "Real technical experience",
    desc: "Founded on a background in IT infrastructure and technical operations — not just web design. We understand how businesses actually run.",
  },
  {
    title: "Strategy before execution",
    desc: "We don\u2019t jump straight to building. We start with a clear review so every decision is grounded in your actual needs and priorities.",
  },
  {
    title: "No jargon, no upsells",
    desc: "We explain what we recommend and why. You\u2019ll always know what you\u2019re getting, what it costs, and what it will do for your business.",
  },
  {
    title: "Built to last",
    desc: "No fragile setups or shortcuts. Everything we build is designed for long-term reliability and easy maintenance.",
  },
];

const expectedResults = [
  "A professional website that clearly communicates what you do and converts visitors into leads",
  "Less time spent on manual, repetitive work",
  "Cleaner internal workflows that keep your team organized",
  "Reliable tools that work without constant attention",
  "A stronger online presence that supports long-term growth",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most website builds take 4\u20138 weeks depending on scope. A Systems & Operations Foundation review is usually completed in 1\u20132 weeks. We\u2019ll give you a realistic timeline before work begins.",
  },
  {
    q: "Do I need to know exactly what I want before starting?",
    a: "Not at all. That\u2019s what the initial review is for. We help you figure out what makes sense for your business before anything gets built.",
  },
  {
    q: "What if I already have a website?",
    a: "We can work with what you have. Whether it\u2019s a redesign, a rebuild, or targeted improvements — we\u2019ll recommend the best path based on your current setup.",
  },
  {
    q: "How much does it cost?",
    a: "Our Systems & Operations Foundation starts at $1,500\u2013$3,000. Website & Backend Implementation starts at $3,000+. Ongoing support starts at $500\u2013$2,500/month. Final pricing is based on your specific needs.",
  },
  {
    q: "What makes Syntra Digital different from other agencies?",
    a: "We combine real IT and operations experience with web development. We focus on practical results — not flashy presentations. And we only build what your business actually needs.",
  },
];

export default function WorkWithUsPage() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-slate-950" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
          </div>
          <div className="container relative z-10 text-center max-w-4xl mx-auto py-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Improve your website and systems — with a team that gets it
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Syntra Digital partners with service businesses to build websites that bring in
              customers, streamline tools that reduce manual work, and create systems that
              run reliably — so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/website-check/" className="btn-primary">
                Get Free Website Review
              </Link>
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Or get in touch &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Who is this for */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              Who this is for
            </h2>
            <p className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-10">
              We work best with businesses that are ready to invest in doing things right —
              not just putting up a quick page and hoping for the best.
            </p>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {whoIsThisFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-base">
                  <span className="text-blue-400 mt-1.5 flex-shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              What we do
            </h2>
            <p className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-12">
              Our services are structured around three clear areas — each designed to solve
              real problems and deliver measurable results.
            </p>
            <div className="space-y-6">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6 sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                View pricing ranges &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Our process */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
              Our process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6"
                >
                  <span className="text-3xl font-bold text-blue-400/30 select-none mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Syntra Digital */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              Why Syntra Digital
            </h2>
            <p className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-12">
              We combine real technical and operations experience with clean, modern web development.
              Here&rsquo;s what sets us apart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected results */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              What you can expect
            </h2>
            <p className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-10">
              When you work with Syntra Digital, you get practical improvements that
              directly impact how your business runs and grows.
            </p>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {expectedResults.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-base">
                  <span className="text-blue-400 mt-1.5 flex-shrink-0">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-8">
              Client feedback
            </p>
            <blockquote className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-light italic mb-6">
              &ldquo;Working with Syntra Digital was one of the best decisions we made.
              They turned our vision into a clean, professional site that&rsquo;s already
              bringing in new customers.&rdquo;
            </blockquote>
            <p className="text-slate-400 text-sm font-medium">
              &mdash; Saxon Performance Automotive
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-slate-800/50 pb-6"
                >
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10">
              Start with a free website review to see where you stand — or reach out directly
              and we&rsquo;ll find the right starting point for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/website-check/" className="btn-primary">
                Get Free Website Review
              </Link>
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Or get in touch &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
