'use client';

import { motion } from 'framer-motion';
import { Search, LayoutTemplate, Code, Rocket, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    title: 'Plan',
    description: 'We learn about your business and goals to create a solid foundation.',
    icon: Search
  },
  {
    title: 'Design',
    description: 'We create layouts and visuals that align with your brand and users.',
    icon: LayoutTemplate
  },
  {
    title: 'Build',
    description: 'We develop your website with clean code and focus on performance.',
    icon: Code
  },
  {
    title: 'Launch',
    description: 'We deploy your website and provide ongoing support for success.',
    icon: Rocket
  }
];

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  
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
      className="text-center group"
    >
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
        {/* Step Number */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-300" />
          <div className="relative bg-slate-800/50 rounded-full w-12 h-12 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-colors duration-300 mx-auto">
            <Icon className="w-5 h-5 text-blue-400" />
          </div>
          <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-400"
          >
            Our streamlined process takes your project from concept to launch in four clear steps.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <StepCard 
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="/websites"
            className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors group"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
