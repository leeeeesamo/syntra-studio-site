'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function SectionHeader({ 
  kicker, 
  title, 
  description, 
  icon: Icon,
  className = "" 
}) {
  return (
    <motion.div 
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {kicker && Icon && (
        <motion.span 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          <Icon className="h-4 w-4" />
          <span>{kicker.toUpperCase()}</span>
        </motion.span>
      )}
      
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-6"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-lg text-slate-400"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
