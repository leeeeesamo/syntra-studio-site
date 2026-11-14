import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import MiniHero from "@/components/MiniHero";

export const metadata = {
  title: "Saxon Performance Automotive — Case Study | Syntra Digital Services",
  description:
    "How Syntra Digital Services helped Saxon Performance Automotive build a clean, professional website that brings in new customers.",
  openGraph: {
    title: "Saxon Performance Automotive — Case Study | Syntra Digital Services",
    description:
      "From a basic presence to a lead-generating website. A real client project by Syntra Digital Services.",
    url: "https://syntradigitalservices.com/case-studies/saxon",
  },
};

export default function SaxonCaseStudyPage() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        {/* Hero */}
        <MiniHero
          variant="neon-nodes"
          badge="Case Study"
          title="Saxon Performance Automotive"
          subtitle="From a basic presence to a clean, lead-generating website"
          position="center 62%"
        />

        {/* The situation */}
        <section className="py-14 md:py-20 border-t border-slate-800/50">
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
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
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
        <section className="py-14 md:py-20 border-t border-slate-800/50">
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
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
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
        <section className="py-14 md:py-20 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-8">
              Client feedback
            </p>
            <blockquote className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-light italic mb-6">
              &ldquo;Working with Syntra Digital Services was one of the best decisions we made.
              They turned our vision into a clean, professional site that&rsquo;s already
              bringing in new customers.&rdquo;
            </blockquote>
            <p className="text-slate-400 text-sm font-medium">
              &mdash; Saxon Performance Automotive
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
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
