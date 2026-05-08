"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Moon, Sun } from 'lucide-react';
import { useTheme } from './providers'; // Import the hook from step 1

const partners = ["HP", "Dell", "Cisco", "Hikvision", "Lenovo", "Microsoft"];

const About = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-700">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 shadow-lg border border-slate-200 dark:border-slate-700 transition-all"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Background Large Text Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.07] select-none">
        <h1 className="text-[20rem] font-black leading-none mt-20 -ml-20 text-slate-900 dark:text-white">
          SOFTLINK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-blue-600" />
            <span className="text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Trusted Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300">
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
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
            >
              Since 1999, Softlink Computers has pioneered digital transformation in India. 
              We specialize in end-to-end IT solutions, from robust server architectures 
              to AI-powered surveillance.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5">
                <div className="text-blue-600 dark:text-blue-400"><Target size={32} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Our Mission</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">High-quality, cost-effective tech with zero downtime.</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5">
                <div className="text-indigo-600 dark:text-indigo-400"><Eye size={32} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Our Vision</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Global benchmark for security and networking excellence.</p>
                </div>
              </motion.div>
            </div>

            {/* Trusted Brands Bar */}
            <div className="pt-8 border-t border-slate-100 dark:border-white/10">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6">Preferred Partner Of</p>
              <div className="flex flex-wrap gap-8 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((brand) => (
                  <span key={brand} className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats/Image Area */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white dark:border-slate-800"
            >
              <img 
                src="/1521c7781296d344caf0426669695a5d.jpg" 
                alt="Tech Team" 
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent dark:from-[#020617]/90 dark:via-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-blue-600 rounded-full flex items-center justify-center text-blue-600 dark:text-white shadow-xl">
                    <Award size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Award Winning Agency</h5>
                    <p className="text-white/70 text-xs">Best IT Support Provider 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 md:right-0 p-8 bg-blue-600 dark:bg-indigo-600 rounded-[2.5rem] shadow-2xl text-white z-20"
            >
              <p className="text-5xl font-black leading-none mb-1">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years In<br/>Industry</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;