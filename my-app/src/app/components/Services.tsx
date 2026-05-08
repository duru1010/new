"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Network, 
  Server, 
  Cpu, 
  HardDrive 
} from 'lucide-react';

const services = [
  {
    title: "CCTV & Security",
    description: "Advanced surveillance systems with AI-driven monitoring and remote access.",
    icon: <Shield className="w-8 h-8" />,
    className: "md:col-span-2",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Networking",
    description: "Robust enterprise infrastructure and high-speed wireless solutions.",
    icon: <Network className="w-8 h-8" />,
    className: "md:col-span-1",
    gradient: "from-indigo-600 to-purple-500"
  },
  {
    title: "IT Support (AMC)",
    description: "Annual Maintenance Contracts to keep your business running 24/7 without glitches.",
    icon: <Server className="w-8 h-8" />,
    className: "md:col-span-1",
    gradient: "from-emerald-600 to-teal-500"
  },
  {
    title: "Hardware Sales",
    description: "High-performance laptops, workstations, and server components from top brands.",
    icon: <Cpu className="w-8 h-8" />,
    className: "md:col-span-2",
    gradient: "from-orange-600 to-red-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-[#020617]">
      
      {/* --- HIGH VISIBILITY ANIMATED DOTS --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            backgroundPosition: ["0px 0px", "40px 40px"] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0"
          style={{
            // Using a more visible dot color (Slate-300 for light, Blue-500 for dark)
            backgroundImage: `radial-gradient(circle, var(--dot-color, #cbd5e1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* CSS Variable for the dots to change per theme */}
        <style jsx>{`
          div { --dot-color: #cbd5e1; }
          :global(.dark) div { --dot-color: #1e293b; }
        `}</style>

        {/* Global Fade mask to prevent harsh edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#020617] dark:via-transparent dark:to-[#020617] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 mb-6"
          >
            <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-[10px]">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Infrastructure <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Perfected.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, className, gradient, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-[2.5rem] p-8 
        bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl 
        border border-slate-200 dark:border-white/10 
        shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Background Hover Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
      
      {/* Icon */}
      <div className="relative mb-8">
        <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${gradient} rounded-full`} />
        <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Icon */}
      <div className="absolute bottom-6 right-8 opacity-10 group-hover:opacity-30 transition-all duration-700">
        <HardDrive size={50} strokeWidth={1} className="text-slate-900 dark:text-white" />
      </div>
    </motion.div>
  );
};

export default Services;