'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

export default function InPracticeSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/70 to-slate-950/90" />
      </div>

      <div className="container">
        <SectionHeader title="What this looks like in practice" />

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Before / After card */}
          <motion.div
            variants={fadeInUp}
            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden"
          >
            <div className="p-6 sm:p-8 border-b border-slate-800/70">
              <p className="text-sm text-blue-300 uppercase tracking-wider font-medium mb-2">
                Example: Local service company
              </p>
              <p className="text-slate-300 leading-relaxed">
                A growing service business had an outdated website, no clear way for customers to request
                work, and relied on spreadsheets and phone calls to manage scheduling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Before */}
              <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-slate-800/70">
                <p className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-4">Before</p>
                <ul className="space-y-3 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400/60 mt-0.5">•</span>
                    Website hadn&rsquo;t been updated in years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400/60 mt-0.5">•</span>
                    No online contact form or booking flow
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400/60 mt-0.5">•</span>
                    Client info scattered across emails and notes
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-green-400/80 uppercase tracking-wider mb-4">After</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400/60 mt-0.5">•</span>
                    Clean, fast website with clear calls to action
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400/60 mt-0.5">•</span>
                    Simple intake form that sends requests to the right place
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400/60 mt-0.5">•</span>
                    Organized workflow that reduced missed follow-ups
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-5 bg-slate-900/30 border-t border-slate-800/70 flex items-center gap-2 text-sm text-slate-400">
              <ArrowRight className="h-4 w-4 text-blue-400" />
              <span>
                Result: fewer missed inquiries, faster response times, and a professional
                online presence that matched the quality of their work.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
