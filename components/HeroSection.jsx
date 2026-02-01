'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const floatingOrbs = [
  {
    sizeRem: 16,
    x: '15%',
    y: '20%',
    opacity: 0.12,
    dx: '-8%',
    dy: '10%',
    duration: 22
  },
  {
    sizeRem: 22,
    x: '70%',
    y: '18%',
    opacity: 0.1,
    dx: '12%',
    dy: '-6%',
    duration: 28
  },
  {
    sizeRem: 14,
    x: '55%',
    y: '55%',
    opacity: 0.11,
    dx: '-10%',
    dy: '-12%',
    duration: 26
  },
  {
    sizeRem: 20,
    x: '25%',
    y: '70%',
    opacity: 0.09,
    dx: '10%',
    dy: '-8%',
    duration: 30
  },
  {
    sizeRem: 18,
    x: '82%',
    y: '68%',
    opacity: 0.1,
    dx: '-6%',
    dy: '8%',
    duration: 24
  }
];

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
          {floatingOrbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              initial={{
                width: `${orb.sizeRem}rem`,
                height: `${orb.sizeRem}rem`,
                left: orb.x,
                top: orb.y,
                opacity: orb.opacity,
                x: 0,
                y: 0
              }}
              animate={{
                x: [0, orb.dx, 0],
                y: [0, orb.dy, 0],
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
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
          <motion.span
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6"
          >
            Reliable by Design
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
              Systems that support your business - not slow it down.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Syntra Digital partners with service-based businesses to build and maintain dependable websites and operational systems that actually support day-to-day work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            From strategy and implementation to ongoing systems support, we focus on building infrastructure you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <Link href="/contact" className="btn-primary">
              Start with a Systems Review
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
