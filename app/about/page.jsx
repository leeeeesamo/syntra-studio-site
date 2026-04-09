import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "About Syntra Digital | Web Design & Business Tools",
  description:
    "Syntra Digital builds reliable websites and business tools for service companies — founded on real IT and operations experience.",
  openGraph: {
    title: "About Syntra Digital | Web Design & Business Tools",
    description:
      "Reliable websites and business tools for service companies. Founded on real IT and operations experience.",
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
          <div className="container relative z-10 text-center max-w-[44rem] mx-auto py-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Built with experience. Designed to last.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              We help service companies build websites and tools that make
              day-to-day work easier — backed by real technical and operations experience.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What we do
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                We design and build websites, internal tools, and digital workflows for
                service-based businesses — contractors, consultants, professional firms,
                home service providers, and growing teams.
              </p>
              <p>
                Most don&rsquo;t need a flashy app or enterprise platform. They need a
                professional website, a setup that reduces busywork, and tools that
                hold up when things get busy.
              </p>
              <p>
                That&rsquo;s our focus — practical, reliable infrastructure that supports
                the way you already work.
              </p>
            </div>
          </div>
        </section>

        {/* Why it exists */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Syntra exists
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Too many small businesses get stuck with websites thrown together quickly,
                tools that don&rsquo;t connect, and processes held together by email and
                guesswork. They know something needs to change but don&rsquo;t trust most
                agencies to really understand how they work.
              </p>
              <p>
                We started Syntra to close that gap — bringing a technical, operations-first
                perspective to web design and business tooling so you get something that
                fits your workflow, not just a template.
              </p>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Who we are
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Syntra Digital is led by someone with hands-on experience in IT infrastructure,
                technical operations, and workflow design — not just web development. That
                background shapes how we approach every project.
              </p>
              <p>
                We don&rsquo;t just think about how a site looks. We think about how it fits
                into the way you run your business — how customers find you, how requests
                get handled, and how your team stays organized.
              </p>
              <p>
                Every engagement starts with a conversation about your goals, not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* Why businesses choose us */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              Why businesses choose us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Technical depth",
                  desc: "We understand how businesses actually run — not just how they look online.",
                },
                {
                  title: "Built to last",
                  desc: "No fragile setups or shortcuts. Everything is made for long-term reliability.",
                },
                {
                  title: "Clear communication",
                  desc: "No jargon, no upsells. We explain what we recommend and why.",
                },
                {
                  title: "Workflow-first approach",
                  desc: "We build around how you work — not the other way around.",
                },
              ].map((item) => (
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

        {/* What we value */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
              What we value
            </h2>
            <div className="space-y-8 text-slate-300 text-base sm:text-lg leading-relaxed">
              <div>
                <h3 className="text-white font-semibold mb-1">Clarity over complexity</h3>
                <p>
                  Clean code, clear communication, and straightforward solutions
                  you can maintain and grow with.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Reliability over novelty</h3>
                <p>
                  Proven tools and frameworks that deliver stability — not
                  trends that need replacing in a year.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Honesty over hype</h3>
                <p>
                  We&rsquo;d rather build trust through transparency than
                  overpromise and underdeliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client feedback */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
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

        {/* CTA */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Let&rsquo;s see if this is a good fit.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10">
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
                Or get a free website review &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
