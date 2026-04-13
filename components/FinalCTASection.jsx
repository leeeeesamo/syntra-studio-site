'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function FinalCTASection() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

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
              Ready to build something that works?
            </motion.h2>

            <motion.p
              className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Tell us about your business and get clarity on what's working, what could improve, and where to start.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request a Consultation
              </Link>
              <Link
                href="/work-with-us"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Learn how we work &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
