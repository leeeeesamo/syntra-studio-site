'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';
import PageContainer from '@/components/PageContainer';
import SectionHeader from '@/components/SectionHeader';
import MiniHero from '@/components/MiniHero';

const websitePlans = [
  {
    name: 'Professional Business Website',
    description:
      'A polished, multi-page website built to present your business professionally and capture leads.',
    price: 'Starting at $2,500',
    period: '',
    features: [
      'Professional multi-page website',
      'Responsive desktop and mobile design',
      'Custom branding and layout',
      'Core business and service pages',
      'Contact forms and lead capture',
      'Foundational on-page SEO',
      'Analytics integration',
      'Testing and launch support'
    ],
    notIncluded: [],
    gradient: 'from-blue-500 to-blue-600',
    popular: true
  },
  {
    name: 'Advanced Website & Integrations',
    description:
      'A website with advanced functionality for businesses that need more than an informational presence.',
    price: 'Starting at $3,500',
    period: '',
    features: [
      'Custom website functionality',
      'Advanced lead capture',
      'CRM integrations',
      'Automated form workflows',
      'Client-facing features',
      'Third-party API integrations',
      'Business workflow integrations',
      'Custom dashboards or admin tools'
    ],
    notIncluded: [],
    gradient: 'from-purple-500 to-purple-600',
    popular: false
  }
];

const carePlan = {
  name: 'Website Care Plan',
  description:
    'Recurring website maintenance focused on reliability, routine technical checks, and ongoing website health.',
  price: 'Starting at $175/month',
  period: '',
  features: [
    'Website availability and uptime checks',
    'Routine website health review',
    'HTTPS and security configuration review',
    'Dependency and update checks',
    'SEO metadata and broken-link checks',
    'Contact form, navigation, and functionality testing',
    'Desktop and mobile performance review',
    'Backup status verification where supported',
    'Monthly maintenance summary'
  ],
  notIncluded: [],
  gradient: 'from-cyan-500 to-blue-600',
  popular: false
};

const systemsPlans = [
  {
    name: 'Custom Backend Systems & Integrations',
    description:
      'Custom backend functionality, workflow automation, and business system integrations built around how you operate.',
    price: 'Starting at $3,000',
    period: '',
    features: [
      'Custom backend functionality',
      'Workflow automation',
      'CRM and operational tools',
      'Internal administrative systems',
      'Data workflows',
      'Customer portals',
      'Specialized digital tools'
    ],
    notIncluded: [],
    gradient: 'from-slate-600 to-slate-700',
    popular: false
  },
  {
    name: 'Systems & Operations Assessment',
    description:
      'An evaluation of your existing tools, digital systems, workflow inefficiencies, and opportunities for improvement.',
    price: 'Custom Quote',
    period: '',
    features: [
      'Current-system assessment',
      'Workflow and operational review',
      'Technical recommendations',
      'Prioritized improvement roadmap',
      'Implementation scope recommendations'
    ],
    notIncluded: [],
    gradient: 'from-slate-600 to-slate-700',
    popular: false
  },
  {
    name: 'Ongoing Technical & Systems Support',
    description:
      'Broader technical and operational support for businesses that need ongoing systems assistance.',
    price: 'Custom Monthly Agreement',
    period: '',
    features: [
      'Integrations maintenance',
      'Technical troubleshooting',
      'Periodic improvements',
      'Support scoped to your needs'
    ],
    notIncluded: [],
    gradient: 'from-slate-600 to-slate-700',
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
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">{plan.price}</span>
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
              href="/contact/"
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
        title="Simple, transparent pricing — built around your business."
        subtitle="From professional websites and dependable maintenance to custom systems and integrations, Syntra Digital Solutions offers practical solutions tailored to your goals and project requirements."
        position="center 70%"
      />

      {/* Website Design & Development */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container">
          <SectionHeader
            kicker="WEBSITES"
            title="Website Design & Development"
            description="Professional websites and advanced web experiences for small businesses. Final deliverables, page count, revisions, and responsibilities are defined in your individual project proposal."
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {websitePlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Website Maintenance & Support */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#0B1020] to-slate-900">
        <div className="container">
          <SectionHeader
            kicker="MAINTENANCE"
            title="Website Maintenance & Support"
            description="Recurring care to keep your website healthy, secure, and performing well."
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <PricingCard plan={carePlan} index={0} />
            <div className="hidden md:flex flex-col justify-center rounded-2xl border border-white/10 bg-[var(--syntra-surface)] p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">What's not included</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• New pages or major content updates</li>
                <li>• Redesigns and custom integrations</li>
                <li>• Paid third-party subscriptions</li>
                <li>• Extensive troubleshooting</li>
              </ul>
              <p className="mt-4 text-sm text-slate-400">
                These are quoted separately unless included in a written agreement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Systems & Technical Solutions */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="container">
          <SectionHeader
            kicker="SYSTEMS"
            title="Business Systems & Technical Solutions"
            description="Custom backend systems, integrations, and ongoing technical support — separate from standard website design."
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {systemsPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#0B1020] to-slate-900">
        <div className="container">
          <SectionHeader
            title="Pricing transparency"
            description="Prices shown are starting rates, not guaranteed final quotes. Each project receives a defined scope and written proposal. Final pricing depends on project requirements and complexity."
          />
          <div className="max-w-3xl mx-auto mt-8 grid gap-3 sm:grid-cols-2 text-sm text-slate-400">
            <p>• Hosting, domain registration, paid software, and third-party subscriptions may be additional.</p>
            <p>• Additional features, revisions, and development outside the agreed scope are quoted separately.</p>
            <p>• Included revisions are defined in each project's scope.</p>
            <p>• Smaller limited-scope requests may receive individual quotes.</p>
            <p>• Payment schedules and deposit requirements are established in individual project agreements.</p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#0B1020] to-slate-900">
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
              href="/contact/"
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
