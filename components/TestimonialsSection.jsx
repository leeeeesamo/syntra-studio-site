'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/ui-utils';

const testimonials = [
  {
    quote: "Working with Syntra Digital Solutions was one of the best decisions we made. They turned our vision into a clean, professional site that's already bringing in new customers.",
    name: "Saxon Performance Automotive"
  },
  {
    quote: "We had a great experience working with Syntra Digital Solutions on our company website. The turnaround time was impressive, and the quality of the finished website exceeded our expectations. The entire process was smooth, professional, and efficient. We're very happy with the results and appreciate how quickly everything came together.",
    name: "Veloce Logistics"
  }
];

const controlClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800/60 text-slate-300 transition-colors duration-200 hover:bg-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 motion-reduce:transition-none";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const current = testimonials[index];

  const go = (direction) =>
    setIndex((i) => (i + direction + count) % count);

  return (
    <section className="py-14 md:py-20 border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-blue-300 mb-8 text-center">
          Client feedback
        </p>

        <div
          aria-live="polite"
          className="rounded-2xl border border-white/10 bg-[var(--syntra-surface)] backdrop-blur-sm p-6 sm:p-10 text-center"
        >
          <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic mb-6">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <p className="text-slate-400 text-sm font-medium">
            &mdash; {current.name}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={controlClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                  i === index
                    ? "bg-blue-400"
                    : "bg-slate-600/60 hover:bg-slate-500"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={controlClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
