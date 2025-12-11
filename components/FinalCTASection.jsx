'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Zap } from 'lucide-react';
import Button from './Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const benefits = [
  'No-pressure consultation',
  'Customized solutions',
  'Transparent pricing',
  'Ongoing support'
];

export default function FinalCTASection() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Glowing card */}
            <motion.div 
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 overflow-hidden border border-slate-800/50"
              variants={fadeInUp}
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
                  variants={fadeInUp}
                >
                  <Zap className="h-4 w-4" />
                  <span>Let's Get Started</span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100 mb-6"
                  variants={fadeInUp}
                >
                  Ready to Transform Your Business?
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-slate-400 max-w-2xl mx-auto mb-8"
                  variants={fadeInUp}
                >
                  Let's discuss how we can help streamline your operations, support your team, and help your business thrive.
                </motion.p>
                
                {/* Benefits */}
                <motion.ul 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-md mx-auto"
                  variants={staggerContainer}
                >
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={benefit}
                      variants={fadeInUp}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  variants={fadeInUp}
                >
                  <Button 
                    href="/contact"
                    size="lg"
                    className="group px-8 py-5 text-base font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    href="/services"
                    variant="ghost"
                    size="lg"
                    className="px-6 py-5 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50"
                  >
                    Explore Our Services
                  </Button>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-slate-500 mt-6"
                  variants={fadeInUp}
                >
                  No pressure. No obligation. Just a friendly chat to see if we're a good fit.
                </motion.p>
                
                {/* Trust indicators */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-slate-800/50"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-slate-700 border-2 border-slate-800" />
                      ))}
                    </div>
                    <span>Trusted by 40+ businesses</span>
                  </div>
                  <div className="h-4 w-px bg-slate-800/50" />
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span>5.0 from 24+ reviews</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/20 blur-2xl"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-blue-500/20 blur-2xl"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
