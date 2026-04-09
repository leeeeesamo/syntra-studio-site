'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import PageContainer from '@/components/PageContainer';

const serviceAreas = [
  {
    title: 'Systems & Operations Foundation',
    description:
      'A strategy-first review designed to bring clarity to how your business operates today and define a practical path forward. We assess your current tools, workflows, and pain points — then map out what needs to change and in what order.',
    includes: [
      'Systems and workflow review',
      'Findings and clear recommendations',
      'Prioritized action plan',
    ],
  },
  {
    title: 'Website & Backend Implementation',
    description:
      'We design and build websites and backend systems tailored to how your business actually works. This goes beyond a surface-level site — we create dependable infrastructure that supports day-to-day operations and helps bring in new business.',
    includes: [
      'Website design or rebuild',
      'Backend workflows and integrations',
      'Testing, deployment, and documentation',
    ],
  },
  {
    title: 'Ongoing Systems Support',
    description:
      'Structured, responsive support to keep your systems stable and improving over time — without the need for in-house IT resources. We handle maintenance, troubleshooting, and incremental improvements so you can focus on your business.',
    includes: [
      'Maintenance and troubleshooting',
      'Enhancements and optimization',
      'Periodic strategy check-ins',
    ],
  },
];

const outcomes = [
  { title: 'Stronger online presence', desc: 'A website that clearly communicates what you do and helps convert visitors into leads.' },
  { title: 'Less manual work', desc: 'Automated workflows and streamlined tools that reduce repetitive tasks.' },
  { title: 'Smoother internal operations', desc: 'Cleaner processes and better-organized systems your team can actually use.' },
  { title: 'Easier-to-manage tools', desc: 'Simple, reliable setups you can maintain without needing a developer on call.' },
];

const processSteps = [
  {
    step: '01',
    title: 'Understand your business',
    desc: 'We start by learning how your business runs — your tools, your team, your workflows, and where things slow down. No assumptions, no templates.',
  },
  {
    step: '02',
    title: 'Identify what\u2019s not working',
    desc: 'We pinpoint the specific gaps, inefficiencies, and missed opportunities. You get a clear picture of what\u2019s holding things back and what to prioritize.',
  },
  {
    step: '03',
    title: 'Build and refine',
    desc: 'We design, implement, and improve — with your input at every step. Nothing ships until it works the way your business needs it to.',
  },
];

const supportExamples = [
  'Website messaging improvements',
  'Landing pages',
  'Lead and contact forms',
  'Workflow cleanup',
  'Process simplification',
  'CRM or tracking setup',
  'Lightweight automation',
  'Ongoing updates and support',
];

export default function ServicesClient() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/90" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
            </div>
          </div>

          <div className="container relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center max-w-4xl mx-auto py-24"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                  Practical websites and tools that support your business
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                We help service businesses improve how their website and internal tools
                function day-to-day — so you spend less time on busywork and more time
                on the work that matters.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* What we help you improve */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
              >
                What we help you improve
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-12"
              >
                Every engagement is focused on practical outcomes that make your business easier to run and more effective online.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6"
                  >
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core service areas */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
              >
                Core service areas
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-12"
              >
                Our services are structured around three clear phases — so you always know where you are and what comes next.
              </motion.p>
              <div className="space-y-8">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6 sm:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:gap-10">
                      <div className="md:flex-1 mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{area.description}</p>
                      </div>
                      <div className="md:w-64 flex-shrink-0">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Includes</p>
                        <ul className="space-y-2">
                          {area.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeInUp} className="mt-10 text-center">
                <Link
                  href="/pricing"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View pricing ranges &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center"
              >
                How it works
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {processSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6"
                  >
                    <span className="text-3xl font-bold text-blue-400/30 select-none mb-3 block">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What support can include */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
              >
                What support can include
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-400 text-base sm:text-lg text-center max-w-2xl mx-auto mb-12"
              >
                Every business is different. Here are examples of the kinds of work we handle across our service areas.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {supportExamples.map((item) => (
                  <div
                    key={item}
                    className="bg-slate-900/40 border border-slate-800/70 rounded-lg px-4 py-3 text-center"
                  >
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                variants={fadeInUp}
              >
                Ready to improve how your business runs online?
              </motion.h2>

              <motion.p
                className="text-slate-400 text-base sm:text-lg mb-10"
                variants={fadeInUp}
              >
                Start with a free website review or get in touch to talk about your goals.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={fadeInUp}
              >
                <Link href="/website-check/" className="btn-primary">
                  Get Free Website Review
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Or get in touch &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
