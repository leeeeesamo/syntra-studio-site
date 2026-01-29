'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';

const testimonials = [
  {
    quote: "Working with Syntra Digital was a game-changer for our business. They delivered a beautiful, fast website that perfectly represents our brand.",
    name: "Sarah Johnson",
    role: "Small Business Owner"
  },
  {
    quote: "Professional, responsive, and incredibly talented. They took our vision and turned it into something beyond our expectations.",
    name: "Michael Chen",
    role: "Startup Founder"
  },
  {
    quote: "The attention to detail and commitment to performance is unmatched. Our new website has already increased our conversion rates significantly.",
    name: "Emily Rodriguez",
    role: "E-commerce Manager"
  }
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
    className="h-full"
  >
    <motion.div 
      className="group h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Star Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-slate-300 leading-relaxed mb-6 text-lg">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Client Info */}
      <div className="border-t border-slate-800 pt-6">
        <div className="font-semibold text-white mb-1">
          {testimonial.name}
        </div>
        <div className="text-slate-400 text-sm">
          {testimonial.role}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
      </div>
      
      <div className="container">
        <SectionHeader
          kicker="TESTIMONIALS"
          title="What Clients Say"
          description="Real feedback from businesses we've helped succeed online."
          icon={Star}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
