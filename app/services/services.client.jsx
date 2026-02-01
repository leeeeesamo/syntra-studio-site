'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import PageContainer from '@/components/PageContainer';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    title: 'Systems & Operations Foundation',
    descriptor: 'The starting point for most engagements',
    description:
      'The Systems & Operations Foundation is a strategy-first engagement designed to bring clarity to how your business operates today and define a practical path forward. We assess your current tools, workflows, and pain points, then map out what needs to change - and in what order.',
    includes: [
      'Systems and workflow review',
      'Tool and process assessment',
      'Identification of inefficiencies and risks',
      'High-level process mapping',
      'Clear implementation recommendations',
      'Prioritized action plan'
    ],
    bestFor: [
      'Businesses experiencing operational friction',
      'Teams outgrowing existing tools or processes',
      'Owners who want clarity before investing in changes'
    ],
    pricing: 'Starting at $1,500 - $3,000'
  },
  {
    title: 'Website & Backend Implementation',
    descriptor: 'Turning strategy into dependable infrastructure',
    description:
      'This service focuses on designing and building websites and backend systems that support how your business actually works. We implement the recommendations from the Systems Foundation to create reliable, maintainable infrastructure - not just a surface-level website.',
    includes: [
      'Website design or rebuild',
      'Backend workflows and logic',
      'Forms, integrations, and automations',
      'CRM or data flow setup (as applicable)',
      'Testing, deployment, and documentation'
    ],
    bestFor: [
      'Service businesses needing more than a brochure site',
      'Teams ready to modernize lead handling or operations',
      'Organizations seeking long-term stability in their systems'
    ],
    pricing: 'Starting at $3,000 - $10,000+'
  },
  {
    title: 'Ongoing Systems Support (Optional)',
    descriptor: 'Stability without internal overhead',
    description:
      'For businesses that want continued reliability and improvements over time, ongoing systems support provides structured, responsive assistance without the need for in-house resources.',
    includes: [
      'System monitoring and maintenance',
      'Incremental improvements and optimizations',
      'Troubleshooting and issue resolution',
      'Light automation enhancements',
      'Periodic strategy check-ins'
    ],
    bestFor: [
      'Businesses without internal operations or IT support',
      'Teams that want systems handled proactively',
      'Owners who prefer predictable monthly support'
    ],
    pricing: 'Starting at $500 - $2,500/month'
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-50px' }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
  >
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-3">
          {service.descriptor}
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">
          {service.title}
        </h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm font-medium">
          {service.pricing}
        </div>
      </div>

      <div className="lg:w-1/2 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
            Includes
          </p>
          <ul className="space-y-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
            Best for
          </p>
          <ul className="space-y-2">
            {service.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function ServicesClient() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/90" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/5" />
            </div>
          </div>

          <div className="container relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                  Services built for stability, clarity, and growth
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                Syntra Digital offers structured services designed to help service-based businesses clean up operations, build dependable systems, and maintain long-term reliability. Every engagement is grounded in a clear process, realistic scope, and solutions that support day-to-day work.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/70 to-slate-950/90" />
          </div>

          <div className="container">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container">
            <SectionHeader
              title="Pricing transparency"
              description="We provide clear pricing ranges to help you plan confidently. Final quotes are based on your business needs, system complexity, and project scope. We don't upsell unnecessary work - our goal is to build what you actually need."
            />
          </div>
        </section>

        <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
                variants={fadeInUp}
              >
                Ready to build systems you can rely on?
              </motion.h2>

              <motion.p
                className="text-lg text-slate-400 mb-8"
                variants={fadeInUp}
              >
                Start with a Systems & Operations Foundation to gain clarity and define the right next steps for your business.
              </motion.p>

              <motion.div className="flex items-center justify-center" variants={fadeInUp}>
                <Link href="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
