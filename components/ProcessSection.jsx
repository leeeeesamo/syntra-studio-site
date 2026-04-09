'use client';

import { motion } from 'framer-motion';
import { Layers, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    title: 'Discovery & Planning',
    description: 'We assess your current setup, identify gaps, and map out a clear plan forward.',
    icon: Layers
  },
  {
    title: 'Website & Backend Implementation',
    description: 'We design and build dependable websites and tools tailored to your operations.',
    icon: LayoutTemplate
  },
  {
    title: 'Ongoing Support (Optional)',
    description: 'For businesses that want continued stability, we provide structured ongoing support.',
    icon: ShieldCheck
  }
];

export default function ProcessSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container">
        <SectionHeader title="Our process" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-400" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
