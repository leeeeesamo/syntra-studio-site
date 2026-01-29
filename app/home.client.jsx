'use client';

import { lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// Lazy load components
const HeroSection = lazy(() => import('@/components/HeroSection'));
const WhoWeBuildForSection = lazy(() => import('@/components/WhoWeBuildForSection'));
const WhySyntraSection = lazy(() => import('@/components/WhySyntraSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const FinalCTASection = lazy(() => import('@/components/FinalCTASection'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
  </div>
);

// Section wrapper with intersection observer for scroll animations
const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <section 
      id={id}
      className={`relative overflow-hidden ${className}`}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default function HomeClient() {
  return (
    <main className="overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <SectionWrapper id="who-we-build-for">
          <WhoWeBuildForSection />
        </SectionWrapper>
        <SectionWrapper id="why-syntra" className="bg-slate-950">
          <WhySyntraSection />
        </SectionWrapper>
        <SectionWrapper id="selected-work">
          <TestimonialsSection />
        </SectionWrapper>
        <SectionWrapper id="contact" className="bg-gradient-to-b from-slate-950 to-slate-900">
          <FinalCTASection />
        </SectionWrapper>
      </Suspense>
    </main>
  );
}
