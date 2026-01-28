// app/websites/page.jsx
'use client';

import { motion } from 'framer-motion';
import { Monitor, Zap, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/ui-utils';

const services = [
  {
    title: 'Custom Website Design',
    description: 'Tailored websites built with clean code, modern design principles, and focus on performance and user experience.',
    icon: Monitor,
    features: ['Responsive design', 'Modern UI/UX', 'Brand alignment', 'SEO optimization'],
    gradient: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast load times, smooth interactions, and technical optimization for search engines and user experience.',
    icon: Zap,
    features: ['Speed optimization', 'Core Web Vitals', 'Image optimization', 'Caching strategies'],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Responsive Development',
    description: 'Flawless functionality across all devices and screen sizes, ensuring your website works perfectly everywhere.',
    icon: Shield,
    features: ['Mobile-first approach', 'Cross-browser compatibility', 'Touch-friendly interfaces', 'Consistent experience'],
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    title: 'Ongoing Support',
    description: 'Reliable maintenance, updates, and technical support to keep your website running smoothly and securely.',
    icon: Users,
    features: ['Regular updates', 'Security monitoring', 'Performance tracking', 'Technical support'],
    gradient: 'from-purple-400 to-pink-500'
  }
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
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
      className="h-full"
    >
      <motion.div 
        className="group h-full flex flex-col"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div className={cn(
          "relative h-full rounded-2xl p-px overflow-hidden",
          "bg-gradient-to-br",
          service.gradient,
          "transition-all duration-500"
        )}>
          <div className={cn(
            "relative h-full bg-slate-900/80 backdrop-blur-sm rounded-[calc(0.5rem-1px)] p-6 sm:p-8 flex flex-col",
            "transition-all duration-300 group-hover:bg-slate-900/90"
          )}>
            {/* Icon with subtle background */}
            <div className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6",
              "bg-gradient-to-br",
              service.gradient,
              "text-white shadow-lg"
            )}>
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Learn more link */}
            <div className="mt-auto pt-5 border-t border-slate-800">
              <div className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            
            {/* Hover effect */}
            <div className={cn(
              "absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100",
              "bg-gradient-to-br",
              service.gradient,
              "transition-opacity duration-500",
              "mix-blend-overlay"
            )} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function WebsitesPage() {
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

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
        </div>
        
        <div className="container">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              <Monitor className="h-4 w-4" />
              <span>Our Services</span>
            </motion.span>
            
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-4"
              variants={fadeInUp}
            >
              What We Build
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-400"
              variants={fadeInUp}
            >
              Professional web design and development services focused on performance, reliability, and clean execution.
            </motion.p>
          </motion.div>
          
          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
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
  );
}
