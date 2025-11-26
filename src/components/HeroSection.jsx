'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] bg-clip-text text-transparent"
      >
        Reliable by Design.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg sm:text-xl text-[var(--syntra-text-muted)] max-w-2xl"
      >
        Virtual assistance, customer support, marketing, and web design — handled
        with structure, care, and clear communication.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <Button href="/services">Explore Services</Button>
        <Button href="/contact" variant="outline">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
}
