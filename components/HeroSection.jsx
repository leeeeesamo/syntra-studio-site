'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/90" />
        
        {/* Abstract gradient mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-blue-400/5" />
        </div>
        
        {/* Floating elements with subtle animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-emerald-400/10"
              initial={{
                width: `${Math.random() * 20 + 10}rem`,
                height: `${Math.random() * 20 + 10}rem`,
                x: `${Math.random() * 80 + 10}%`,
                y: `${Math.random() * 80 + 10}%`,
                opacity: 0.1
              }}
              animate={{
                x: `${Math.random() * 30 - 15}%`,
                y: `${Math.random() * 30 - 15}%`,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Decorative accent shape */}
        <motion.div 
          className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Now serving visionary businesses</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100/90">
              Support That Helps Your Business Grow
            </span>
            <span className="block mt-4 text-emerald-400">— Without the Overwhelm</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            You deserve systems that run smoothly, customers who feel taken care of, and a digital presence that reflects the quality of your work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="btn btn-primary group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn btn-outline group"
            >
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-slate-800"
          >
            <p className="text-sm text-slate-400 mb-6">Trusted by innovative businesses worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              {['Client Logo 1', 'Client Logo 2', 'Client Logo 3', 'Client Logo 4'].map((client, i) => (
                <motion.div 
                  key={i} 
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-sm text-slate-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-slate-400 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
