import Link from "next/link";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Saxon Performance Automotive — Case Study | Syntra Digital",
  description:
    "How Syntra Digital helped Saxon Performance Automotive build a clean, professional website that brings in new customers.",
  openGraph: {
    title: "Saxon Performance Automotive — Case Study | Syntra Digital",
    description:
      "From a basic presence to a lead-generating website. A real client project by Syntra Digital.",
    url: "https://syntrasolutions.digital/case-studies/saxon",
  },
};

export default function SaxonCaseStudyPage() {
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
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">
              Case Study
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Saxon Performance Automotive
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              From a basic presence to a clean, lead-generating website
            </p>
          </div>
        </section>

        {/* The situation */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The situation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Saxon Performance Automotive needed a professional online presence that
              clearly communicated their services and made it easy for customers to
              reach them. Like many small service businesses, their existing setup
              wasn&rsquo;t doing much to support growth.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The problem
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Their website wasn&rsquo;t structured to bring in leads or clearly
              explain what they offer. Potential customers didn&rsquo;t have a clear
              path to understand services or take action, which meant missed
              opportunities.
            </p>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Our approach
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We focused on building a clean, straightforward site that reflects the
              business professionally and makes it easy for customers to take the next
              step. This included clarifying messaging, simplifying the structure, and
              ensuring the site works reliably across devices.
            </p>
          </div>
        </section>

        {/* The result */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The result
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              The new site provides a clear, professional presence and is already
              helping bring in new customers. It&rsquo;s easier for visitors to
              understand the services offered and take action, giving the business a
              stronger foundation moving forward.
            </p>
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

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want to see similar results?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10">
              Start with a free website review or get in touch to talk about your goals.
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
