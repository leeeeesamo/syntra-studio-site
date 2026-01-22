// app/process/page.jsx
'use client';

import { motion } from 'framer-motion';
import { Search, LayoutTemplate, CheckCircle, ChevronRight, ArrowRight, Clock, Users, Code, ArrowRightIcon } from 'lucide-react';
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
    ],
    deliverables: ['Project brief', 'Technical specifications', 'Timeline estimate', 'Cost breakdown']
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
    ],
    deliverables: ['Design mockups', 'Style guide', 'User flow diagrams', 'Design system']
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
    ],
    deliverables: ['Functional website', 'Staging environment', 'Performance report', 'Documentation']
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
    ],
    deliverables: ['Live website', 'Analytics setup', 'Support plan', 'Training materials']
  }
];

const ProcessStep = ({ step, index }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      className="relative group transition-all duration-300 md:flex-1"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Step connector line */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 h-0.5 w-16 bg-gradient-to-r from-slate-800 to-slate-700 -z-10" />
      )}
      
      <motion.div 
        className="h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        {/* Step number */}
        <div className="flex items-center justify-between mb-8">
          <div className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl",
            `bg-gradient-to-br ${step.gradient} text-white`
          )}>
            {index + 1}
          </div>
          <div className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-400">
            {step.duration}
          </div>
        </div>
        
        {/* Step content */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-slate-800/50">
              <Icon className="h-6 w-6 text-slate-400 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              {step.title}
            </h3>
          </div>
          
          <div className="pl-16 space-y-8">
            <p className="text-slate-400 leading-relaxed text-base">
              {step.description}
            </p>
            
            <div className="space-y-8">
              <div className="pb-6 border-b border-slate-800">
                <h4 className="text-sm font-medium text-blue-400 mb-4">Activities</h4>
                <ul className="space-y-3">
                  {step.details.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-blue-400 mb-4">Deliverables</h4>
                <ul className="space-y-3">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProcessPage() {
  
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/90" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-400/5" />
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
                Our Development Process
              </span>
              <span className="block mt-4 text-blue-400">— Clear Steps to Success</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              We follow a structured approach to deliver websites on time and to specification. 
              No surprises, just results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="section relative overflow-hidden">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="section-title"
            >
              Project Timeline
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="section-description"
            >
              Our streamlined process takes your project from concept to launch in 4 clear phases
            </motion.p>
          </motion.div>

          {/* Timeline Row */}
          <motion.div 
            className="max-w-4xl mx-auto mt-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="text-center p-4 rounded-xl border border-slate-800 bg-slate-900/50"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.duration}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        
        <div className="container">
          <motion.div 
            className="mt-20 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Process steps */}
            <div className="flex flex-col md:flex-row gap-8">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={step.title}
                  step={step}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="section-title"
            >
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="section-description mb-8"
            >
              Let's discuss your requirements and create a timeline that works for your business.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:opacity-90 transition-opacity"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                View Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
