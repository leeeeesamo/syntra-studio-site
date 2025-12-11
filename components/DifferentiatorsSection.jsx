'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ListChecks, Link2, LayoutTemplate, Sparkles, Zap, Users, Shield } from 'lucide-react';
import { cn } from '@/lib/ui-utils';

const differentiators = [
  {
    title: 'Reliable Systems + Human Touch',
    description: 'We build processes that make your days easier — with warmth, patience, and partnership.',
    icon: CheckCircle2,
    gradient: 'from-emerald-400/90 to-blue-400/90',
    highlight: 'Human-Centric Approach',
    highlightIcon: Users,
    features: ['Personalized solutions', 'Empathetic support', 'Dedicated account manager']
  },
  {
    title: 'Thoughtful, Consistent Processes',
    description: 'No chaos, no guesswork. Just simple systems designed to support long-term growth.',
    icon: ListChecks,
    gradient: 'from-blue-400/90 to-indigo-400/90',
    highlight: 'Process Excellence',
    highlightIcon: Sparkles,
    features: ['Documented workflows', 'Efficient systems', 'Continuous improvement']
  },
  {
    title: 'Seamless Team Integration',
    description: 'We adapt to your rhythm, tools, and communication style so everything feels organized and collaborative.',
    icon: Link2,
    gradient: 'from-indigo-400/90 to-purple-400/90',
    highlight: 'Team Alignment',
    highlightIcon: Users,
    features: ['Slack integration', 'Regular check-ins', 'Collaborative tools']
  },
  {
    title: 'Modern, Polished Digital Design',
    description: 'Your brand deserves to look as professional as the work you deliver.',
    icon: LayoutTemplate,
    gradient: 'from-purple-400/90 to-pink-400/90',
    highlight: 'Design Excellence',
    highlightIcon: Shield,
    features: ['Responsive design', 'Brand consistency', 'User-focused UI/UX']
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const DifferentiatorCard = ({ item, index }) => {
  const Icon = item.icon;
  const HighlightIcon = item.highlightIcon;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-full"
      aria-labelledby={`card-${index}-title`}
    >
      {/* Glow effect on hover */}
      <motion.div 
        className={cn(
          "absolute -inset-0.5 rounded-3xl opacity-0 blur-xl transition-all duration-500",
          "bg-gradient-to-r",
          item.gradient,
          "group-hover:opacity-30"
        )}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
      
      <div 
        className={cn(
          "relative h-full rounded-3xl p-0.5 overflow-hidden",
          "bg-gradient-to-br",
          item.gradient,
          "transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-500/10"
        )}
      >
        <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-950/90 rounded-[calc(1.5rem-1px)] p-8 flex flex-col">
          {/* Header with icon and highlight */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-xl",
                "bg-gradient-to-br",
                item.gradient,
                "text-white shadow-lg"
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <HighlightIcon className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span className="text-xs font-medium text-emerald-300">{item.highlight}</span>
            </motion.div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 
              id={`card-${index}-title`}
              className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300"
            >
              {item.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              {item.description}
            </p>
            
            {/* Features list */}
            <ul className="space-y-2 mt-4">
              {item.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center gap-2 text-slate-400 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-emerald-400/5 blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-blue-400/5 blur-xl group-hover:scale-110 transition-transform duration-500" />
          
          {/* Hover arrow */}
          <motion.div 
            className="absolute bottom-6 right-6 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ x: 5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function DifferentiatorsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      aria-labelledby="differentiators-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>
      
      <div className="container">
        {/* Section header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-4"
            variants={fadeInUp}
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            <span>Why Choose Us</span>
          </motion.span>
          
          <motion.h2 
            id="differentiators-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100/90 mb-4"
            variants={fadeInUp}
          >
            Built for Modern Businesses
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-400"
            variants={fadeInUp}
          >
            We combine human expertise with efficient systems to deliver exceptional support.
          </motion.p>
        </motion.div>
        
        {/* Differentiators grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <AnimatePresence>
            {differentiators.map((item, index) => (
              <DifferentiatorCard 
                key={item.title} 
                item={item} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
