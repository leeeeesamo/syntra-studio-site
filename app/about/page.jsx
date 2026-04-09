import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "About Syntra Digital | Birmingham, AL Web & Systems Studio",
  description:
    "Syntra Digital helps service businesses in Birmingham, Alabama and beyond build reliable websites and streamlined operations. Learn about our approach.",
  openGraph: {
    title: "About Syntra Digital | Birmingham, AL Web & Systems Studio",
    description:
      "Syntra Digital helps service businesses build reliable websites and streamlined operations.",
    url: "https://syntrasolutions.digital/about",
  },
};

export default function AboutPage() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-950/80 to-slate-950" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
          </div>
          <div className="container relative z-10 text-center max-w-3xl mx-auto py-20">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Building what businesses actually need
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Syntra Digital is a web and operations studio based in Birmingham, Alabama,
              focused on helping service businesses work smarter with better tools and clearer processes.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What we do
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                We build websites and backend infrastructure for service-based businesses — the kind
                of companies where the work happens in the field, at the office, or directly with clients.
                Plumbers, consultants, contractors, professional firms, and growing local teams.
              </p>
              <p>
                Most of these businesses don&rsquo;t need flashy software. They need a website that
                clearly communicates what they do, tools that reduce manual work, and a setup that
                doesn&rsquo;t break when things get busy.
              </p>
              <p>
                That&rsquo;s what we focus on: practical, reliable digital infrastructure that supports
                the way you already work — and helps you do more of it.
              </p>
            </div>
          </div>
        </section>

        {/* Founder / Credibility */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Who&rsquo;s behind it
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Syntra Digital was founded with a straightforward goal: help businesses get more
                from their technology without the complexity, jargon, or overhead of a traditional agency.
              </p>
              <p>
                The work is led by someone with a background in IT infrastructure, technical operations,
                and workflow design — not just web design. That means every project is approached with
                an understanding of how real businesses operate day-to-day, not just how they look online.
              </p>
              <p>
                Based in Birmingham, Alabama, we work with local businesses and remote clients alike.
                Every engagement starts with a conversation, not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              How we think about the work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Clarity over complexity",
                  desc: "Simple, well-structured solutions that are easy to understand and maintain.",
                },
                {
                  title: "Reliability first",
                  desc: "We build things that work consistently — not just on launch day, but months later.",
                },
                {
                  title: "Honest communication",
                  desc: "No upsells, no jargon. We tell you what we think and why.",
                },
                {
                  title: "Built to last",
                  desc: "Every decision considers long-term maintainability, not just short-term speed.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-5"
                >
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to see if we&rsquo;re a good fit?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8">
              Start with a quick conversation — no commitment, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link
                href="/website-check/"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Or get a free website review →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
