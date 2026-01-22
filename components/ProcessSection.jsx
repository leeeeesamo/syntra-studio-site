'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutTemplate, CheckCircle, ChevronRight, Code } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';

const steps = [
  {
    title: 'Plan',
    description: 'We learn about your business, goals, and technical requirements to create a solid project foundation.',
    icon: Search,
    gradient: 'from-blue-400 to-blue-500',
    duration: '1-2 weeks',
    details: [
      'Project consultation',
      'Requirements gathering',
      'Technical assessment',
      'Project proposal'
    ]
  },
  {
    title: 'Design',
    description: 'We create wireframes and designs that align with your brand and focus on user experience.',
    icon: LayoutTemplate,
    gradient: 'from-blue-400 to-indigo-500',
    duration: '2-3 weeks',
    details: [
      'Wireframing & design',
      'UI/UX planning',
      'Brand alignment',
      'Design approval'
    ]
  },
  {
    title: 'Build',
    description: 'We develop your website with clean code, modern technologies, and focus on performance.',
    icon: Code,
    gradient: 'from-indigo-400 to-purple-500',
    duration: '2-3 weeks',
    details: [
      'Frontend development',
      'Backend integration',
      'Performance optimization',
      'Quality assurance'
    ]
  },
  {
    title: 'Launch',
    description: 'We deploy your website and provide ongoing support to ensure it runs smoothly.',
    icon: CheckCircle,
    gradient: 'from-purple-400 to-pink-500',
    duration: '1 week',
    details: [
      'Testing & QA',
      'Deployment',
      'Performance monitoring',
      'Launch support'
    ]
  }
];

const ProcessStep = ({ step, index, isActive, onClick }) => {
  const Icon = step.icon;

  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer transition-all duration-300",
        isActive ? "md:flex-[1.2]" : "md:flex-1"
      )}
      onClick={onClick}
      initial={false}
      animate={{
        paddingTop: isActive ? '1.5rem' : '3rem',
      }}
      transition={{ duration: 0.4, type: 'spring', bounce: 0.1 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      aria-pressed={isActive}
    >
      {/* Step connector line */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 h-0.5 w-16 bg-gradient-to-r from-slate-800 to-slate-700 -z-10" />
      )}

      <motion.div
        className={cn(
          "h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800",
          "transition-all duration-300",
          isActive
            ? "shadow-xl shadow-blue-500/10 border-slate-700"
            : "hover:border-slate-700 hover:bg-slate-900/70"
        )}
        whileHover={!isActive ? { y: -5 } : {}}
      >
        {/* Step number */}
        <div className="flex items-center justify-between mb-6">
          <div className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg",
            `bg-gradient-to-br ${step.gradient} text-white`
          )}>
            {index + 1}
          </div>
          <div className={cn(
            "text-xs font-medium px-3 py-1 rounded-full",
            isActive ? "bg-blue-500/10 text-blue-400" : "bg-slate-800/50 text-slate-400"
          )}>
            {step.duration}
          </div>
        </div>

        {/* Step content */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className={`p-2.5 rounded-lg ${isActive ? 'bg-blue-500/10' : 'bg-slate-800/50'} mt-1`}>
              <Icon className={cn(
                "h-5 w-5",
                isActive ? 'text-blue-400' : 'text-slate-400',
                "transition-colors duration-300"
              )} />
            </div>
            <h3 className={cn(
              "text-xl font-semibold",
              isActive ? "text-white" : "text-slate-300",
              "transition-colors duration-300"
            )}>
              {step.title}
            </h3>
          </div>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pl-11 space-y-4">
                  <p className="text-slate-400">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {step.details.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-lg transition-colors bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.span className="section-subtitle" variants={fadeInUp}>
            Our Development Process
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Clear Steps to Success
          </motion.h2>
          <motion.p className="section-description" variants={fadeInUp}>
            We follow a structured approach to deliver websites on time and to specification.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mt-16 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Mobile step indicators */}
          <div className="md:hidden flex justify-center gap-2 mb-8">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeStep ? 'bg-blue-400 w-8' : 'bg-slate-700'}`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {/* Process steps */}
          <div className="flex flex-col md:flex-row gap-6">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="mt-8 flex justify-between md:hidden">
            <button
              type="button"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-400 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-400 disabled:opacity-30"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
