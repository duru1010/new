"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, UserCheck, HardDrive } from 'lucide-react';

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
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#0A1628] transition-colors duration-700">
      
      {/* Background Large Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05] select-none text-[#0A1628] dark:text-white">
        <h1 className="text-[15rem] md:text-[20rem] font-black leading-none mt-20 -ml-20">
          SOFTLINK
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-[#0057FF]" />
            <span className="text-[#0057FF] dark:text-[#4DA6FF] font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-[#0A1628] dark:text-white"
          >
            Trusted Partner for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#4DA6FF]">
              IT Infrastructure & Security.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
            >
              Since 2012, Softlink Computers has pioneered digital transformation in Pune City. 
              Owned and operated by <strong className="text-[#0057FF] dark:text-[#4DA6FF] font-bold">Nagesh Salunke</strong>, 
              we are deeply focused on providing expert technical support alongside hardware and networking excellence.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-500 dark:text-slate-400 mb-10"
            >
              From the supply of all types of Computers, Laptops, and high-end accessories to robust server architectures, 
              we strive to accomplish and surpass our customers’ business goals with 100% reliability.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-8 rounded-[2.5rem] bg-[#F0F4FF] dark:bg-[#1A3A6B]/20 border border-slate-100 dark:border-white/5">
                <div className="text-[#0057FF]"><Target size={32} /></div>
                <div>
                  <h4 className="font-bold text-[#0A1628] dark:text-white text-lg">Our Mission</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">High-quality, cost-effective tech with specialized hardware support.</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-8 rounded-[2.5rem] bg-[#0057FF] dark:bg-[#0057FF]/90 border border-white/5 shadow-xl shadow-[#0057FF]/20">
                <div className="text-white"><HardDrive size={32} /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Our Edge</h4>
                  <p className="text-sm text-blue-50 dark:text-blue-50">Comprehensive networking solutions tailored for Pune's growing businesses.</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-white/10">
              <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">Preferred Partner Of</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:invert-0 dark:hover:opacity-100">
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

          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white dark:border-[#1A3A6B]"
            >
              <img 
                src="/03e03551e4a38636a3bbd8e8a340a7f1.jpg" 
                alt="Softlink Tech Team" 
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0057FF] rounded-full flex items-center justify-center text-white shadow-xl">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Nagesh Salunke</h5>
                    <p className="text-white/70 text-xs">Proprietor & Visionary</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 md:right-0 p-8 bg-[#0057FF] rounded-[2.5rem] shadow-2xl text-white z-20"
            >
              <p className="text-5xl font-black leading-none mb-1">14+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Years In<br/>Service</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;