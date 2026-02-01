'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';
import PageContainer from '@/components/PageContainer';
import SectionHeader from '@/components/SectionHeader';

const faqs = [
  {
    question: 'Do you start with a Systems Review?',
    answer: 'Most engagements start with our Systems & Operations Foundation. It is a strategy-first review that helps us understand how your business operates today, identify gaps, and define the right order of improvements before we build anything.'
  },
  {
    question: 'What affects pricing the most?',
    answer: 'Scope and complexity. The biggest drivers are how many systems need to connect (forms, CRMs, scheduling, automation), the amount of custom workflow logic required, and how much existing structure we are working with. You will get a clear scope before any project begins.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. Ongoing Systems Support is available for businesses that want stability and improvements over time without internal overhead. Support typically includes maintenance, troubleshooting, incremental enhancements, and periodic check-ins.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'It depends on scope and complexity. The Systems & Operations Foundation is typically the fastest way to get clarity, and implementation timelines are set after that review. Most builds fall in the 6-12 week range once scope is confirmed.'
  },
  {
    question: 'Do you work with existing tools (CRM/scheduling/etc.)?',
    answer: 'Yes. We often integrate with the tools you already use (or help you select better-fit ones). During the Systems & Operations Foundation, we review your current stack and identify what to keep, what to adjust, and what to replace.'
  },
  {
    question: 'Do you only build websites?',
    answer: 'No. Websites are often part of the work, but our focus is dependable systems that support day-to-day operations. That can include backend workflows, integrations, automations, and maintaining the systems that keep your business running.'
  },
  {
    question: 'Will I be locked into a retainer?',
    answer: 'No. Ongoing Systems Support is optional. Some clients prefer a structured monthly plan; others only engage for the Systems & Operations Foundation and an implementation project.'
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
          </div>
          <h3 className="text-lg font-medium text-white pr-4">
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pl-20">
          <p className="text-slate-300 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function FAQClient() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
                  Frequently Asked Questions
                </span>
                <span className="block mt-4 text-blue-400">— Everything You Need to Know</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Find answers to common questions about our process, pricing ranges, and what it looks like to build and maintain dependable systems.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
          </div>
          
          <div className="container">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openItems.includes(index)}
                    onToggle={toggleItem}
                  />
                ))}
              </div>
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
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
              >
                Still Have Questions?
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-400 mb-8"
              >
                We're here to help. Get in touch and we'll be happy to answer any questions about your project.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={fadeInUp}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:opacity-90 transition-opacity"
                >
                  Request a Consultation
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                  View Pricing
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
