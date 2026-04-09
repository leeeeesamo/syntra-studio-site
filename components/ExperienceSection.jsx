'use client';

import { motion } from 'framer-motion';
import { Server, Workflow, Wrench } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const highlights = [
  {
    title: 'Technical operations background',
    description: 'Hands-on experience with IT infrastructure, networking, and the tools businesses depend on every day.',
    icon: Server,
  },
  {
    title: 'Real business workflow experience',
    description: 'We understand how service teams actually work — scheduling, communication, documentation, and follow-up.',
    icon: Workflow,
  },
  {
    title: 'Focus on reliability and maintainability',
    description: 'Every project is built to hold up over time, not just pass a quick launch check.',
    icon: Wrench,
  },
];

export default function ExperienceSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container">
        <SectionHeader title="Built on real-world experience" />

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-lg text-slate-300 leading-relaxed"
            variants={fadeInUp}
          >
            Syntra Digital didn&rsquo;t start in a design studio — it grew out of years working
            in IT, infrastructure, and technical operations. That background shapes every project
            we take on, because we know what it takes to keep business tools running day after day.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
