'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen -mt-24 pt-24 flex flex-col justify-center items-center text-center px-8 overflow-hidden">
      {/* Hero Banner Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: 'url(/brand-assets/hero-banner.png)',
        }}
      >
        {/* Stronger, deeper overlay so the mesh is more subtle */}
        <div className="absolute inset-0 bg-[var(--syntra-deep-bg)]/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[var(--syntra-text-main)] drop-shadow-lg"
        >
          Reliable by Design.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-[var(--syntra-text-main)] max-w-2xl mx-auto"
        >
          Virtual assistance, customer support, and web design — delivered with
          structure, care, and clear communication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Button href="/services">Explore Services</Button>
        </motion.div>
      </div>
    </section>
  );
}
