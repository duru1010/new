"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Cpu, 
  Monitor, 
  HardDrive, 
  Server, 
  Printer, 
  ArrowUpRight,
  Star,
  Check
} from 'lucide-react';

const HardwarePage = () => {
  const products = [
    { name: "Business Laptops", category: "Computing", brand: "HP, Dell, Lenovo", icon: <Monitor /> },
    { name: "High-End Workstations", category: "Performance", brand: "HP Z-Series", icon: <Cpu /> },
    { name: "Enterprise Servers", category: "Infrastructure", brand: "Dell PowerEdge", icon: <Server /> },
    { name: "Network Storage", category: "Data", brand: "Synology / QNAP", icon: <HardDrive /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* HERO */}
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            <ShoppingBag size={16} /> Premium IT Hardware
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-8"
          >
            Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Performance.
            </span>
          </motion.h1>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-blue-600" />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 text-blue-600 flex items-center justify-center mb-10 shadow-lg border border-slate-100 dark:border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {p.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 mb-3">{p.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{p.brand}</p>
            </motion.div>
          ))}
        </div>

        {/* WHY BUY FROM US? */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-8 md:p-20 border border-slate-100 dark:border-white/5">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">The Softlink <br/> Retail Advantage</h2>
            <div className="space-y-6">
              {[
                { t: "Pre-Configured", d: "We deliver systems ready to work, with all your apps pre-installed." },
                { t: "Warranty Advocacy", d: "If it breaks, we handle the manufacturer claim for you." },
                { t: "Genuine Only", d: "100% original hardware with authorized GST invoices." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold dark:text-white">{item.t}</h5>
                    <p className="text-sm text-slate-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-[3rem] rotate-3 absolute inset-0 opacity-10" />
            <div className="relative bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 text-orange-500 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xl italic font-medium text-slate-700 dark:text-slate-300 mb-6">
                "Softlink helped us set up our entire design studio with HP Workstations. Their technical advice saved us lakhs in unnecessary hardware costs."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <p className="font-bold dark:text-white">Rahul Mehta</p>
                  <p className="text-xs text-slate-500 uppercase font-bold">Creative Director, Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HardwarePage;