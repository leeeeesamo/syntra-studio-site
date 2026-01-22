'use client';

import { motion } from 'framer-motion';
import { Globe, Code, Palette, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/ui-utils';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const websiteServices = [
  {
    title: 'Custom Website Design',
    body: 'Beautiful, responsive designs that capture your brand essence and engage your visitors with intuitive user experiences.',
    icon: Palette,
    gradient: 'from-emerald-400 to-blue-500',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Website Development',
    body: 'Clean, fast, and secure code built with modern technologies to ensure your website performs flawlessly across all devices.',
    icon: Code,
    gradient: 'from-blue-400 to-indigo-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'E-commerce Solutions',
    body: 'Complete online stores with seamless checkout, inventory management, and customer engagement tools to drive sales.',
    icon: Globe,
    gradient: 'from-indigo-400 to-purple-500',
    iconColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Performance Optimization',
    body: 'Lightning-fast loading speeds and smooth interactions that keep visitors engaged and improve search rankings.',
    icon: Zap,
    gradient: 'from-purple-400 to-pink-500',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
];

export default function WebsiteCreationSection() {
  return (
    <section id="website-creation" className="section relative overflow-hidden bg-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
      </div>
      
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4"
          >
            Website Creation Services
          </motion.span>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100/90 mb-4"
          >
            Build Your Digital Presence
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-400 mb-12"
          >
            Professional website creation services that help your business stand out online and convert visitors into customers.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {websiteServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                service.bgColor,
                service.borderColor,
                "border"
              )}>
                <service.icon className={cn("w-6 h-6", service.iconColor)} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-4 leading-relaxed">
                {service.body}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
