'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

export default function ProblemSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/70 to-slate-950/90" />
      </div>

      <div className="container">
        <SectionHeader title="When your tools can't keep up, everything feels harder than it should." />

        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 leading-relaxed mb-6"
          >
            Many service-based businesses outgrow the tools and processes they started with. The website stops reflecting what you actually offer, manual work piles up, and important details get lost between emails, spreadsheets, and sticky notes. Over time, this creates friction that slows everything down.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 leading-relaxed"
          >
            Syntra exists to bring structure, clarity, and reliability back to how your business runs — starting with the technology you depend on every day.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
