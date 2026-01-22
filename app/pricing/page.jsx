// app/pricing/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';

const plans = [
  {
    name: 'Starter Website',
    description: 'Custom website design for small businesses and personal projects',
    price: 'Starting at $1,200',
    period: 'one-time',
    features: [
      'Custom responsive design',
      'Up to 5 pages',
      'Mobile optimization',
      'Performance optimization',
      'Basic SEO setup',
      'Contact form integration',
      '1 month of support'
    ],
    notIncluded: [],
    gradient: 'from-slate-600 to-slate-700',
    popular: false
  },
  {
    name: 'Standard Website',
    description: 'Professional website with advanced features for growing businesses',
    price: 'Starting at $2,000',
    period: 'one-time',
    features: [
      'Everything in Starter Website',
      'Up to 15 pages',
      'CMS integration',
      'Advanced SEO implementation',
      'Analytics setup',
      '3 months of support',
      'Performance monitoring',
      'Security audit'
    ],
    notIncluded: [],
    gradient: 'from-blue-500 to-blue-600',
    popular: true
  },
  {
    name: 'Premium Website',
    description: 'Comprehensive website solution for established businesses',
    price: 'Starting at $3,000',
    period: 'one-time',
    features: [
      'Everything in Standard Website',
      'Unlimited pages',
      'Custom integrations',
      'Advanced security features',
      '6 months of support',
      'Priority support',
      'Dedicated project manager',
      'Custom API development'
    ],
    notIncluded: [],
    gradient: 'from-purple-500 to-purple-600',
    popular: false
  }
];

const addOns = [
  {
    name: 'Ongoing Maintenance',
    description: 'Monthly updates, security patches, and performance monitoring',
    features: [
      'Regular updates',
      'Security monitoring',
      'Performance reports',
      'Email support',
      'Backup management'
    ]
  },
  {
    name: 'Content Updates',
    description: 'Regular content changes and updates to keep your site fresh',
    features: [
      'Content changes',
      'Image updates',
      'Blog post management',
      'Priority response'
    ]
  },
  {
    name: 'SEO Optimization',
    description: 'Ongoing SEO work to improve your search rankings',
    features: [
      'Keyword research',
      'On-page optimization',
      'Content strategy',
      'Monthly reports',
      'Competitor analysis'
    ]
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
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AddOnCard = ({ addOn, index }) => {
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
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">{addOn.name}</h4>
          <p className="text-slate-400 text-sm">{addOn.description}</p>
        </div>
        <div className="p-2 rounded-lg bg-blue-500/10">
          <Zap className="h-5 w-5 text-blue-400" />
        </div>
      </div>
      
      <ul className="space-y-2">
        {addOn.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function PricingPage() {
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
                Transparent Pricing
              </span>
              <span className="block mt-4 text-blue-400">— No Hidden Fees</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Clear, upfront pricing for professional web design and development services. 
              Choose the plan that fits your needs or get a custom quote.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 relative overflow-hidden">
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

      {/* Add-ons */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
              variants={fadeInUp}
            >
              Optional Add-Ons
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-400"
              variants={fadeInUp}
            >
              Professional web design and development with transparent pricing.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {addOns.map((addOn, index) => (
              <AddOnCard 
                key={addOn.name} 
                addOn={addOn} 
                index={index} 
              />
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
              Contact us to discuss your website project and get a detailed quote.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm px-8 py-4 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
