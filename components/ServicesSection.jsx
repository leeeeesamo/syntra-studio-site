'use client';

import { motion } from 'framer-motion';
import { Monitor, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/ui-utils';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    title: 'Custom Website Design',
    href: '/websites',
    body: 'Tailored websites built with clean code, modern design principles, and focus on performance and user experience.',
    icon: Monitor,
    gradient: 'from-blue-400 to-blue-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Performance Optimization',
    href: '/websites',
    body: 'Lightning-fast load times, smooth interactions, and technical optimization for search engines and user experience.',
    icon: Monitor,
    gradient: 'from-blue-400 to-indigo-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Responsive Development',
    href: '/websites',
    body: 'Flawless functionality across all devices and screen sizes, ensuring your website works perfectly everywhere.',
    icon: Monitor,
    gradient: 'from-indigo-400 to-purple-500',
    iconColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Website Maintenance',
    href: '/websites',
    body: 'Reliable maintenance, updates, and technical support to keep your website running smoothly and securely.',
    icon: Monitor,
    gradient: 'from-purple-400 to-pink-500',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
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
            "relative h-full bg-slate-900/90 rounded-[calc(0.5rem-1px)] p-8 sm:p-10 flex flex-col",
            "transition-all duration-300 group-hover:bg-slate-900/95"
          )}>
            {/* Icon with subtle background */}
            <div className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6",
              service.bgColor,
              service.borderColor,
              "border transition-colors duration-300"
            )}>
              <Icon className={cn("h-5 w-5", service.iconColor)} strokeWidth={1.75} />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                {service.body}
              </p>
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

export default function ServicesSection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate-900/50 via-brand-slate-900/80 to-brand-slate-950/90" />
      </div>
      
      <div className="container">
        <SectionHeader
          kicker="WHAT WE BUILD"
          title="What We Build"
          description="Professional web design and development services focused on performance, reliability, and clean execution."
          icon={Monitor}
        />
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
  );
}
