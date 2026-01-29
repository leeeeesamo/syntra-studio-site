'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const benefits = [
  'Starter Website — Starting at $1,200',
  'Standard Website — Starting at $2,000',
  'Premium Website — Starting at $3,000',
  'Custom solutions for your needs'
];

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
              Ready to Build Your Website?
            </motion.h2>

            <motion.p
              className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
              variants={fadeInUp}
            >
              Let&apos;s discuss how we can create a professional website that represents your business and helps you achieve your goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="btn-primary"
              >
                Request a Quote
              </Link>

              <Link
                href="/faq"
                className="btn-outline"
              >
                View FAQ
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
