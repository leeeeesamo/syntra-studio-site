'use client';

import { motion } from 'framer-motion';
import { Compass, Layers, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const differentiators = [
  {
    title: 'Strategy before implementation',
    description: 'We take time to understand how your business actually works before building anything.',
    icon: Compass
  },
  {
    title: 'Built for day-to-day use',
    description: 'Everything we design is meant to support real workflows - not just look good.',
    icon: Layers
  },
  {
    title: 'Reliable, maintainable systems',
    description: 'Our focus is long-term stability, not quick fixes or fragile setups.',
    icon: ShieldCheck
  }
];

const DifferentiatorCard = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
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
};

export default function WhySyntraSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container">
        <SectionHeader title="A calm, systems-first approach" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {differentiators.map((item, index) => (
            <DifferentiatorCard 
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
