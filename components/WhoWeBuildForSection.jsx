'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const fitItems = [
  'Service-based businesses',
  'Professional firms',
  'Small teams ready to improve operations',
  'Owners who value structure and reliability'
];

export default function WhoWeBuildForSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
      </div>

      <div className="container">
        <SectionHeader title="Who we work with" />

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {fitItems.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="flex items-start gap-3 text-slate-300 text-base bg-slate-900/40 border border-slate-800/70 rounded-xl p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm sm:text-base text-slate-400 text-center"
          >
            If you're looking for quick fixes or one-off tasks, we may not be the right fit - and that's okay.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
