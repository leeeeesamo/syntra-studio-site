'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Shield, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const differentiators = [
  {
    title: 'Performance-First',
    description: 'We build websites that load fast and rank well, focusing on Core Web Vitals and user experience from day one.',
    icon: Zap
  },
  {
    title: 'Clean Code Standards',
    description: 'Maintainable, well-documented code that scales with your business and makes future updates simple.',
    icon: Code
  },
  {
    title: 'Long-Term Reliability',
    description: 'We build websites that last, using modern best practices and proven technologies.',
    icon: Shield
  },
  {
    title: 'Clarity & Communication',
    description: 'No jargon, no surprises. We explain everything clearly and keep you informed at every step.',
    icon: Sparkles
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container">
        <SectionHeader
          kicker="WHY SYNTRA"
          title="Why Syntra Digital"
          description="We're different because we focus on what matters: performance, reliability, and clear communication."
          icon={Sparkles}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
