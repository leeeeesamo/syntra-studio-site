// app/websites/page.jsx
'use client';

import { motion } from 'framer-motion';
import { Monitor, Zap, Shield, Users, ArrowRight, CheckCircle, Search, LayoutTemplate, Code, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';
import PageContainer from '@/components/PageContainer';
import ServicesSection from '@/components/ServicesSection';

const differentiators = [
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

const processSteps = [
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

export default function WebsitesPage() {
  return (
    <PageContainer>
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
                Website Design & Development
              </span>
              <span className="block mt-4 text-blue-400">— Built for Performance</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Professional websites built for performance, reliability, and clean execution. 
              Your digital presence should work as hard as you do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section - Using original Home styling */}
      <ServicesSection />

      {/* Built for Performance Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
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
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-4"
            >
              Built for Performance
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
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
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
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

      {/* Clear Steps to Success Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="container">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              <Rocket className="h-4 w-4" />
              <span>Our Development Process</span>
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-4"
              variants={fadeInUp}
            >
              Clear Steps to Success
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-400"
              variants={fadeInUp}
            >
              We follow a structured approach to deliver websites on time and to specification.
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 text-center group"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
              variants={fadeInUp}
            >
              Ready to Get Started?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-400 mb-8"
              variants={fadeInUp}
            >
              Let's discuss your project and create a website that represents your business perfectly.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <a
                href="https://portfolio.syntra-studio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
    </PageContainer>
  );
}
