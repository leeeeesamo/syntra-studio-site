'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Collective",
    quote: "Syntra completely transformed how I manage my day-to-day. What used to take me hours now gets handled seamlessly. I finally have time to focus on growing my business.",
    initials: "SM",
    rating: 5,
    gradient: 'from-emerald-400 to-blue-500',
  },
  {
    name: "David Chen",
    role: "CEO, NorthPoint Consulting",
    quote: "The level of professionalism and attention to detail is exceptional. Syntra feels like an extension of my own team — reliable, proactive, and always a step ahead.",
    initials: "DC",
    rating: 5,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Velvet Studios",
    quote: "From inbox management to campaign coordination, Syntra handles it all with care. Their communication is clear, and nothing ever falls through the cracks.",
    initials: "ER",
    rating: 5,
    gradient: 'from-indigo-400 to-purple-500',
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="h-full"
    >
      <div className="group h-full flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
        {/* Quote icon */}
        <div className={`mb-4 text-${testimonial.gradient.split(' ')[0].split('-')[1]}-400`}>
          <Quote className="h-6 w-6 opacity-70" />
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
            />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-slate-300 text-base leading-relaxed mb-6 flex-1">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-slate-800 group-hover:border-slate-700 transition-colors">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}>
            {testimonial.initials}
          </div>
          <div>
            <p className="font-medium text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-slate-400">
              {testimonial.role}
            </p>
          </div>
        </div>
        
        {/* Hover effect */}
        <div className={`absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${testimonial.gradient} transition-opacity duration-500 mix-blend-overlay`} />
      </div>
    </motion.article>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-5" />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
      
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.span 
            className="section-subtitle"
            variants={fadeInUp}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="section-description"
            variants={fadeInUp}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Projects Completed' },
            { value: '40+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 mb-2">
                {stat.value}
              </div>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
