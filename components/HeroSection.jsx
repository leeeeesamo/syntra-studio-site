'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Hero background image */}
        <div className="absolute inset-0 bg-[url('/brand-assets/hero-banner.png')] bg-cover bg-center bg-no-repeat" />

        {/* Lighter overlay gradient to make hero image pop more */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-950/30 to-slate-950/40" />

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
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white drop-shadow-md"
          >
            Reliable by Design.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-white/90 drop-shadow-md"
          >
            Custom website design and development built for performance, clarity, and long-term reliability.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="btn-primary"
            >
              Start Your Project
            </a>
            <a
              href="https://leeeeesamo.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
