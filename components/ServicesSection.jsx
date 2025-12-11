'use client';

import { motion } from 'framer-motion';
import { Inbox, MessageSquare, Settings2, Monitor, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/ui-utils';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const services = [
  {
    title: 'Executive & Virtual Assistance',
    href: '/services/executive-assistance',
    body: 'Reliable, proactive support for scheduling, inboxes, client follow-ups, documents, and day-to-day operational needs — all handled with clarity and care.',
    icon: Inbox,
    gradient: 'from-emerald-400 to-blue-500',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Customer Service Support',
    href: '/services/customer-service-support',
    body: 'Compassionate, organized customer support experiences that help your clients feel heard, valued, and taken care of.',
    icon: MessageSquare,
    gradient: 'from-blue-400 to-indigo-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Operations & Systems Support',
    href: '/services/operations-systems-support',
    body: 'Smooth internal processes, clear workflows, and simple systems that help your team communicate better and operate efficiently.',
    icon: Settings2,
    gradient: 'from-indigo-400 to-purple-500',
    iconColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Web Design & Digital Presence',
    href: '/services/web-design-digital-presence',
    body: 'Thoughtfully designed websites and digital touchpoints that elevate your brand, build trust, and support business growth.',
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
            "relative h-full bg-slate-900/80 backdrop-blur-sm rounded-[calc(0.5rem-1px)] p-6 sm:p-8 flex flex-col",
            "transition-all duration-300 group-hover:bg-slate-900/90"
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
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.body}
              </p>
            </div>
            
            {/* Learn more link */}
            <div className="mt-auto pt-5 border-t border-slate-800">
              <div className="inline-flex items-center text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
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

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate-900/50 via-brand-slate-900/80 to-brand-slate-950/90" />
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
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.span 
            className="section-subtitle"
            variants={fadeInUp}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            How We Can Help
          </motion.h2>
          <motion.p 
            className="section-description"
            variants={fadeInUp}
          >
            Comprehensive support services designed to help your business run smoothly and grow sustainably.
          </motion.p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
