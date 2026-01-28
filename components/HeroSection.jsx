'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Hero background image */}
        <div className="absolute inset-0 bg-[url('/brand-assets/hero-banner.png')] bg-cover bg-center bg-no-repeat" />

        {/* Enhanced overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-950/60 to-slate-950/70" />

        {/* Floating elements (kept subtle) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              initial={{
                width: `${Math.random() * 20 + 10}rem`,
                height: `${Math.random() * 20 + 10}rem`,
                x: `${Math.random() * 80 + 10}%`,
                y: `${Math.random() * 80 + 10}%`,
                opacity: 0.12,
              }}
              animate={{
                x: `${Math.random() * 30 - 15}%`,
                y: `${Math.random() * 30 - 15}%`,
                scale: [1, 1.08, 1],
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

        {/* Decorative accent shape (very subtle) */}
        <motion.div
          className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 4, 0],
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
              Reliable by Design
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Custom website design and development built for performance, clarity, and long-term reliability.
          </motion.p>

          {/* Subtle link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="/process"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
            >
              See the process
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
