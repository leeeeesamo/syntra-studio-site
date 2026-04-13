'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HowWeWorkSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 mb-6"
              variants={fadeInUp}
            >
              How we help businesses improve their websites and systems
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              We partner with service businesses to build websites that generate leads,
              set up backend tools that reduce manual work, and create systems that
              deliver real, measurable business outcomes — not just a nice-looking page.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Every engagement starts with understanding your business, identifying
              what&rsquo;s not working, and building practical solutions that make a
              difference from day one.
            </motion.p>

            <motion.div
              className="flex items-center justify-center"
              variants={fadeInUp}
            >
              <Link
                href="/work-with-us"
                className="btn-primary"
              >
                Learn how we work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
