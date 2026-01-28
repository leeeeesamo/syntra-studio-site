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
                href="/process"
                className="btn-outline"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-slate-800/50"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-slate-700 border-2 border-slate-800" />
                  ))}
                </div>
                <span>Trusted by 40+ businesses</span>
              </div>

              <div className="h-4 w-px bg-slate-800/50" />

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>5.0 from 24+ reviews</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
