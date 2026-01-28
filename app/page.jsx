// app/page.jsx
'use client';

import { lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// Lazy load components
const HeroSection = lazy(() => import('@/components/HeroSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const DifferentiatorsSection = lazy(() => import('@/components/DifferentiatorsSection'));
const ProcessSection = lazy(() => import('@/components/ProcessSection'));
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px 0px -100px 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

// Preload above-the-fold content
const PreloadResources = () => {
  useEffect(() => {
    // Preload hero background images
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    
    preloadImage('/grid-pattern.svg');
    
    // Add any other critical assets to preload
  }, []);
  
  return null;
};

export default function HomePage() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const smoothScroll = (e) => {
        const targetId = e.target.getAttribute('href');
        if (targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      };

      // Add smooth scroll to all anchor links
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
      });

      return () => {
        anchorLinks.forEach(link => {
          link.removeEventListener('click', smoothScroll);
        });
      };
    }
  }, []);

  return (
    <main className="overflow-hidden">
      <PreloadResources />
      
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        
        <SectionWrapper id="services">
          <ServicesSection />
        </SectionWrapper>
        
        <SectionWrapper id="differentiators" className="bg-slate-950">
          <DifferentiatorsSection />
        </SectionWrapper>
        
        <SectionWrapper id="process">
          <ProcessSection />
        </SectionWrapper>
        
        <SectionWrapper id="contact" className="bg-gradient-to-b from-slate-950 to-slate-900">
          <FinalCTASection />
        </SectionWrapper>
      </Suspense>
      
      {/* Add subtle cursor follower */}
      <div className="fixed top-0 left-0 w-4 h-4 rounded-full bg-emerald-400/30 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference" 
           style={{ transform: 'translate(-50%, -50%)' }} />
    </main>
  );
}
