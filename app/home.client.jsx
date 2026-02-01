'use client';

import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load components
const HeroSection = lazy(() => import('@/components/HeroSection'));
const ProblemSection = lazy(() => import('@/components/ProblemSection'));
const WhySyntraSection = lazy(() => import('@/components/WhySyntraSection'));
const ProcessSection = lazy(() => import('@/components/ProcessSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const WhoWeBuildForSection = lazy(() => import('@/components/WhoWeBuildForSection'));
const FinalCTASection = lazy(() => import('@/components/FinalCTASection'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
  </div>
);

export default function HomeClient() {
  return (
    <main className="overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <ProblemSection />
        <WhySyntraSection />
        <ProcessSection />
        <ServicesSection />
        <WhoWeBuildForSection />
        <FinalCTASection />
      </Suspense>
    </main>
  );
}
