'use client';

import { motion } from 'framer-motion';
import { Search, LayoutTemplate, Code, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    title: 'Plan',
    subtitle: 'Discovery & Strategy',
    description: 'We learn about your business, goals, scope, and timeline to create a solid project foundation.',
    icon: Search,
    duration: '1-2 weeks',
    deliverables: [
      'Project consultation',
      'Requirements gathering', 
      'Technical assessment',
      'Project proposal & timeline'
    ]
  },
  {
    title: 'Design',
    subtitle: 'Layout & Structure',
    description: 'We create wireframes, visuals, copy, and structure that align with your brand and focus on user experience.',
    icon: LayoutTemplate,
    duration: '2-3 weeks',
    deliverables: [
      'Wireframing & design',
      'UI/UX planning',
      'Content structure',
      'Brand alignment'
    ]
  },
  {
    title: 'Build',
    subtitle: 'Development & Performance',
    description: 'We hand-code your website with modern technologies, focusing on performance and clean code.',
    icon: Code,
    duration: '2-3 weeks',
    deliverables: [
      'Frontend development',
      'Performance optimization',
      'Quality assurance',
      'Cross-device testing'
    ]
  },
  {
    title: 'Launch',
    subtitle: 'Testing & Support',
    description: 'We handle testing, deployment, and provide ongoing support to ensure your website runs smoothly.',
    icon: Rocket,
    duration: '1 week',
    deliverables: [
      'Final testing & QA',
      'Deployment & setup',
      'Performance monitoring',
      'Ongoing support'
    ]
  }
];

export default function ProcessSection() {
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
          variants={staggerContainer}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="card text-center group"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-300" />
                <div className="relative bg-slate-800/50 rounded-full w-16 h-16 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                  {step.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Duration Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                  {step.duration}
                </div>

                {/* Deliverables */}
                <div className="mt-4 pt-4 border-t border-slate-800/50">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Deliverables</p>
                  <ul className="space-y-1 text-left">
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-slate-400 mb-6">Ready to start your project?</p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
