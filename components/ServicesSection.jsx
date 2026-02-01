'use client';

import { motion } from 'framer-motion';
import { Compass, LayoutTemplate, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/ui-utils';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    title: 'Systems & Operations Foundation',
    href: '/services',
    body: 'Strategic review and planning to align tools, workflows, and priorities before implementation.',
    icon: Compass,
    gradient: 'from-blue-400 to-blue-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Website & Backend Implementation',
    href: '/services',
    body: 'Design and build dependable systems tailored to your operations and daily workflows.',
    icon: LayoutTemplate,
    gradient: 'from-blue-400 to-indigo-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Ongoing Systems Support',
    href: '/services',
    body: 'Structured, responsive support to keep systems stable and improving over time.',
    icon: ShieldCheck,
    gradient: 'from-indigo-400 to-purple-500',
    iconColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
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
        className="h-full"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Link
          href={service.href}
          className="group h-full flex flex-col"
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
              <div className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6",
                service.bgColor,
                service.borderColor,
                "border transition-colors duration-300"
              )}>
                <Icon className={cn("h-5 w-5", service.iconColor)} strokeWidth={1.75} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 font-medium">
                  {service.body}
                </p>
              </div>
              
              <div className={cn(
                "absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100",
                "bg-gradient-to-br",
                service.gradient,
                "transition-opacity duration-500",
                "mix-blend-overlay"
              )} />
            </div>
          </div>
        </Link>
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
          title="How Syntra can help"
          description="We offer structured services designed to bring clarity, reliability, and efficiency to your operations."
        />
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
