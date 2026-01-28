'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const items = [
  {
    title: 'Clean, Performant Code',
    description:
      'We write efficient, maintainable code that ensures fast load times and smooth user experiences.',
  },
  {
    title: 'Responsive Design First',
    description:
      'Every website we build works flawlessly across all devices, from mobile to desktop.',
  },
  {
    title: 'Modern Web Standards',
    description:
      'We use current technologies and best practices to build websites that last.',
  },
  {
    title: 'Website Maintenance',
    description:
      'Reliable ongoing support, updates, and improvements to keep your site running smoothly.',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="section-title"
          >
            Built for Performance
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="section-description max-w-2xl mx-auto"
          >
            Modern web development practices that ensure your website is fast,
            reliable, and built to last.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="
                card
                p-8
                text-left
                hover:border-blue-500/30
                hover:shadow-lg
                hover:shadow-blue-500/10
              "
            >
              <h3 className="text-xl font-medium mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
