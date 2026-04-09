'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import PageContainer from '@/components/PageContainer';

const serviceAreas = [
  {
    title: 'Website & Lead Flow',
    description:
      'A professional, fast website designed to clearly communicate what you do and turn visitors into leads.',
  },
  {
    title: 'Tools & Workflow Setup',
    description:
      'Streamlined internal tools, forms, and automations that reduce manual work and keep your team organized.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Structured, responsive support to keep everything running smoothly — without needing in-house IT.',
  },
];

const processSteps = [
  { step: '01', title: 'Understand your business', desc: 'We learn how you work, what tools you use, and where things break down.' },
  { step: '02', title: 'Identify what\u2019s not working', desc: 'We pinpoint the gaps, inefficiencies, and missed opportunities.' },
  { step: '03', title: 'Build and refine', desc: 'We design, implement, and improve — with your input at every step.' },
];

const improvements = [
  'Getting more leads from your website',
  'Reducing manual, repetitive work',
  'Improving internal workflows',
  'Making tools easier to manage',
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
              className="text-center max-w-[44rem] mx-auto py-24"
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
                className="text-lg sm:text-xl text-slate-300 leading-relaxed"
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
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-10"
              >
                What we help you improve
              </motion.h2>
              <motion.ul variants={fadeInUp} className="space-y-4 text-left max-w-sm mx-auto">
                {improvements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-base sm:text-lg">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* Core service areas */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-10"
              >
                Core service areas
              </motion.h2>
              <div className="space-y-8">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/40 border border-slate-800/70 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeInUp} className="mt-8">
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
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold text-white mb-10"
              >
                How it works
              </motion.h2>
              <div className="space-y-8">
                {processSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-5 text-left"
                  >
                    <span className="text-2xl font-bold text-blue-400/40 leading-none mt-1 select-none">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 border-t border-slate-800/50">
          <div className="max-w-[44rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
