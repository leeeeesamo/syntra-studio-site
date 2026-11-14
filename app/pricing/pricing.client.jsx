'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';
import PageContainer from '@/components/PageContainer';
import SectionHeader from '@/components/SectionHeader';
import MiniHero from '@/components/MiniHero';

const plans = [
  {
    name: 'Systems & Operations Foundation',
    description:
      'Strategy-first review and planning to align tools, workflows, and priorities before implementation.',
    price: 'Starting at $1,500 – $3,000',
    period: '',
    features: [
      'Systems & workflow review',
      'Findings + recommendations',
      'Prioritized action plan'
    ],
    notIncluded: [],
    gradient: 'from-slate-600 to-slate-700',
    popular: false
  },
  {
    name: 'Website & Backend Implementation',
    description:
      'Design and build dependable systems tailored to how your business operates and how work flows day-to-day.',
    price: 'Starting at $3,000+',
    period: '',
    features: [
      'Website design/rebuild (as needed)',
      'Backend workflows + integrations',
      'Testing, deployment, documentation'
    ],
    notIncluded: [],
    gradient: 'from-blue-500 to-blue-600',
    popular: true
  },
  {
    name: 'Ongoing Systems Support (Optional)',
    description:
      'Structured support to keep systems stable and improving over time - without internal overhead.',
    price: 'Starting at $500 – $2,500/month',
    period: '',
    features: [
      'Maintenance + troubleshooting',
      'Enhancements/optimization',
      'Periodic check-ins'
    ],
    notIncluded: [],
    gradient: 'from-purple-500 to-purple-600',
    popular: false
  }
];

const PricingCard = ({ plan, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      className={cn(
        "relative h-full",
        plan.popular && "md:-mt-4"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
            Most Popular
          </div>
        </div>
      )}
      
      <motion.div 
        className={cn(
          "relative h-full rounded-2xl p-px overflow-hidden transition-all duration-500",
          "bg-gradient-to-br",
          plan.gradient,
          plan.popular && "shadow-2xl shadow-blue-500/20"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className={cn(
          "relative h-full bg-slate-900 rounded-[calc(0.5rem-1px)] p-6 sm:p-8 flex flex-col",
          plan.popular ? "bg-slate-900/95" : "bg-slate-900/90"
        )}>
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
            
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-slate-400 text-sm">{plan.period}</span>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex-1">
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
              
              {plan.notIncluded.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border border-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-500 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <motion.div className="mt-auto">
            <a
              href="/contact"
              className={cn(
                "w-full inline-flex items-center justify-center rounded-full font-medium text-sm px-6 py-3 transition-all duration-300",
                plan.popular 
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5" 
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              )}
            >
              Request a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function PricingClient() {
  return (
    <PageContainer>
      <main className="overflow-hidden">
      {/* Hero Section */}
      <MiniHero
        variant="neon-top-bottom"
        title="Simple pricing ranges — scoped to your business"
        subtitle="We provide clear pricing ranges to help you plan confidently. Final quotes are based on your goals, system complexity, and the amount of implementation required."
        position="center 70%"
      />

      {/* Pricing Plans */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <SectionHeader
            title="Pricing transparency"
            description="We don't upsell unnecessary work - our goal is to build what you actually need. You'll get a clear scope before any project begins."
          />
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <SectionHeader
            kicker="GET STARTED"
            title="Ready to get started?"
            description="Request a consultation and we'll recommend the right starting point based on your current systems and goals."
            icon={ArrowRight}
          />
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="btn-primary"
            >
              Request a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://calendar.app.google/ksQAmHgw43DNEvyx9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Schedule a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    </PageContainer>
  );
}
