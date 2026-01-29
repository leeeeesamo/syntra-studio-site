'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Wrench, Store } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const targetClients = [
  {
    title: 'Small Businesses',
    description: 'Local service providers, retailers, and professional firms needing a strong online presence.',
    icon: Building2,
    gradient: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Service Providers',
    description: 'Consultants, agencies, and freelancers who need to showcase their expertise and attract clients.',
    icon: Users,
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Growing Teams',
    description: 'Companies scaling their operations and requiring reliable, maintainable web solutions.',
    icon: Wrench,
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    title: 'E-commerce Brands',
    description: 'Online stores and product-based businesses ready to optimize their digital storefront.',
    icon: Store,
    gradient: 'from-purple-400 to-pink-500'
  }
];

const ClientCard = ({ client, index }) => {
  const Icon = client.icon;
  
  return (
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
        {/* Icon with gradient background */}
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6 bg-gradient-to-br ${client.gradient} text-white shadow-lg`}>
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {client.title}
        </h3>
        <p className="text-slate-300 leading-relaxed">
          {client.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function WhoWeBuildForSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950/90" />
      </div>
      
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4"
            variants={fadeInUp}
          >
            <Building2 className="h-4 w-4" />
            <span>Ideal Clients</span>
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90 mb-4"
            variants={fadeInUp}
          >
            Who We Build For
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400"
            variants={fadeInUp}
          >
            We partner with businesses and teams that value quality, performance, and long-term success.
          </motion.p>
        </motion.div>
        
        {/* Client Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {targetClients.map((client, index) => (
            <ClientCard 
              key={client.title} 
              client={client} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
