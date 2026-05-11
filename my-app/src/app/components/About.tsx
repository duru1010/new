"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Moon, Sun } from 'lucide-react';
import { useTheme } from './providers'; 

// Partners list with updated logo paths
const partners = [
  { name: "HP", logo: "/hp.webp" },
  { name: "Acer", logo: "/acer-laptop-logo-8.07.39-PM.webp" },
  { name: "Asus", logo: "/asus-laptop-logo.webp" },
  { name: "iBall", logo: "/iball-laptop-logo.webp" },
  { name: "Intel", logo: "/intel-laptop-logo.png" },
  { name: "Lenovo", logo: "/lenovo-laptop-logo.png" },
  { name: "Microsoft", logo: "/microsoft-laptop-logo.webp" },
  { name: "MSI", logo: "/msi-laptop-logo.webp" },
  { name: "Sony VAIO", logo: "/sony-vaio-laptop-logo.png" }
];

const About = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#333333] transition-colors duration-700">
      
      {/* Theme Toggle Button - Matching Teal Theme */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-[#25C1C5]/10 dark:bg-[#25C1C5]/20 text-[#25C1C5] shadow-lg border border-[#25C1C5]/20 transition-all hover:scale-110"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Background Large Text Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05] select-none">
        <h1 className="text-[15rem] md:text-[20rem] font-black leading-none mt-20 -ml-20 text-[#333333] dark:text-white">
          SOFTLINK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading - Matching Teal Theme */}
        <div className="flex flex-col mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-[#25C1C5]" />
            <span className="text-[#25C1C5] font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-[#333333] dark:text-white"
          >
            Trusted Partner for <br />
            <span className="text-[#25C1C5]">
              IT Infrastructure & Security.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Content Area */}
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
            >
              Since 2012, Softlink Computers has pioneered digital transformation. 
              We specialize in end-to-end IT solutions, from robust server architectures 
              to high-end surveillance and customized WFH setups.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-8 rounded-[2.5rem] bg-slate-50 dark:bg-[#4a4a4a] border border-slate-100 dark:border-white/5">
                <div className="text-[#25C1C5]"><Target size={32} /></div>
                <div>
                  <h4 className="font-bold text-[#333333] dark:text-white text-lg">Our Mission</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">High-quality, cost-effective tech with 100% reliability.</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-8 rounded-[2.5rem] bg-[#333333] dark:bg-[#25C1C5] border border-white/5">
                <div className="text-[#25C1C5] dark:text-white"><Eye size={32} /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Our Vision</h4>
                  <p className="text-sm text-slate-300 dark:text-white/80">Setting the global benchmark for networking excellence.</p>
                </div>
              </motion.div>
            </div>

            {/* Trusted Brands Bar - Gray Accents */}
            <div className="pt-8 border-t border-slate-100 dark:border-white/10">
              <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">Preferred Partner Of</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((brand) => (
                  <motion.div 
                    key={brand.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex justify-center"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-8 md:h-10 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Image Area */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white dark:border-[#4a4a4a]"
            >
              <img 
                src="/1521c7781296d344caf0426669695a5d.jpg" 
                alt="Softlink Tech Team" 
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25C1C5] rounded-full flex items-center justify-center text-white shadow-xl">
                    <Award size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Industry Leader</h5>
                    <p className="text-white/70 text-xs">Premium IT Solutions Provider</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Experience Badge - Matching Teal Theme */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 md:right-0 p-8 bg-[#25C1C5] rounded-[2.5rem] shadow-2xl text-white z-20"
            >
              <p className="text-5xl font-black leading-none mb-1">14+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Years In<br/>Industry</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;