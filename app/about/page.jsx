import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "About Syntra Digital | Web Design & Business Tools — Birmingham, AL",
  description:
    "Syntra Digital builds reliable websites and business tools for service companies. Based in Birmingham, Alabama — founded on real IT and operations experience.",
  openGraph: {
    title: "About Syntra Digital | Web Design & Business Tools — Birmingham, AL",
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
          <div className="container relative z-10 text-center max-w-3xl mx-auto py-20">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">
              About Syntra Digital
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Built on real experience, not just good design
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Syntra Digital is a web and business technology studio based in Birmingham, Alabama.
              We help service companies build websites and tools that actually make their day-to-day work easier.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What we do
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                We design and build websites, internal tools, and digital workflows for service-based
                businesses — the kind of companies where real work happens in the field, at the office,
                or face-to-face with clients. Contractors, consultants, professional firms, home service
                providers, and growing local teams.
              </p>
              <p>
                Most of these businesses don&rsquo;t need a flashy app or an enterprise platform. They
                need a clear, professional website that communicates what they do, a setup that reduces
                busywork, and tools that don&rsquo;t break when things get busy.
              </p>
              <p>
                That&rsquo;s our focus — practical, reliable digital infrastructure that supports the
                way you already work, and makes it easier to grow.
              </p>
            </div>
          </div>
        </section>

        {/* Why it exists */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Syntra exists
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Too many small businesses get stuck with websites that were thrown together quickly, tools
                that don&rsquo;t talk to each other, and processes held together by email and guesswork.
                They know something needs to change, but they don&rsquo;t have time to figure it out
                — and they don&rsquo;t trust most agencies to really understand how they work.
              </p>
              <p>
                Syntra Digital was started to close that gap. We bring a technical, operations-first
                perspective to web design and business tooling — so you end up with something that
                actually fits your workflow, not just a nice-looking template.
              </p>
            </div>
          </div>
        </section>

        {/* Founder / Credibility */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Who&rsquo;s behind it
            </h2>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Syntra Digital is led by someone with hands-on experience in IT infrastructure, technical
                operations, and workflow design — not just web development. Years of working with real
                business technology (networking, servers, support escalation, documentation, process
                improvement) shaped how we approach every project.
              </p>
              <p>
                That means we don&rsquo;t just think about how a site looks. We think about how it fits
                into the way you run your business — how customers find you, how requests get handled,
                and how your team stays organized behind the scenes.
              </p>
              <p>
                Based in Birmingham, Alabama, we work with local and remote clients alike. Every
                engagement starts with a conversation about your goals, not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* Why businesses choose Syntra */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Why businesses choose Syntra
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Technical depth, not just design skills",
                  desc: "Our background in IT and operations means we understand what goes on behind the scenes of a business — not just what shows up on screen.",
                },
                {
                  title: "We build things that last",
                  desc: "Every project is built with long-term reliability in mind. No fragile setups, no shortcuts that break six months later.",
                },
                {
                  title: "Straightforward communication",
                  desc: "No jargon, no upsells. We explain what we recommend, why it matters, and what it costs — clearly.",
                },
                {
                  title: "Focused on your actual workflow",
                  desc: "We start by understanding how your business runs day-to-day, then build around that — not the other way around.",
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

        {/* What we value */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What we value
            </h2>
            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              <div>
                <h3 className="text-white font-semibold mb-1">Clarity over complexity</h3>
                <p>
                  We keep things simple on purpose. Clean code, clear communication, and
                  straightforward solutions that are easy to maintain and grow with.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Reliability over novelty</h3>
                <p>
                  We use proven, well-supported tools and frameworks. The goal is stability you
                  can count on — not chasing trends that will need replacing in a year.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Honesty over hype</h3>
                <p>
                  If something isn&rsquo;t the right fit, we&rsquo;ll say so. We&rsquo;d rather
                  build trust through transparency than overpromise and underdeliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client feedback */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Client feedback
            </h2>
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6 sm:p-8">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                We&rsquo;re currently building a stronger library of client testimonials and case
                studies. In the meantime, our work is grounded in real-world IT, operations, and
                implementation experience — and every project is built to the same standard we&rsquo;d
                hold ourselves to.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                If you&rsquo;d like to hear more about past work or see examples relevant to your
                business, we&rsquo;re happy to walk you through it during an introductory call.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-slate-800/50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to see if we&rsquo;re a good fit?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8">
              Start with a quick conversation — no commitment, no pressure. Tell us about your
              business and we&rsquo;ll share how we can help.
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
