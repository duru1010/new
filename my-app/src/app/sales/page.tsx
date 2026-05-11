"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Cpu, 
  Monitor, 
  HardDrive, 
  Server, 
  ArrowUpRight,
  Star,
  Check,
  Key,
  ShieldCheck,
  Terminal,
  Zap
} from 'lucide-react';

const HardwarePage = () => {
  const products = [
    { name: "Business Laptops", category: "Computing", brand: "HP, Dell, Lenovo", icon: <Monitor /> },
    { name: "High-End Workstations", category: "Performance", brand: "HP Z-Series", icon: <Cpu /> },
    { name: "Enterprise Servers", category: "Infrastructure", brand: "Dell PowerEdge", icon: <Server /> },
    { name: "Network Storage", category: "Data", brand: "Synology / QNAP", icon: <HardDrive /> }
  ];

  const licenseBrands = [
    { name: "Microsoft 365", desc: "Office, Windows & Azure", icon: <Terminal className="text-blue-500" /> },
    { name: "Tally Prime", desc: "Business & Accounting", icon: <Zap className="text-yellow-500" /> },
    { name: "Quick Heal", desc: "Total Security & Antivirus", icon: <ShieldCheck className="text-red-500" /> },
    { name: "Adobe CC", desc: "Creative Cloud Licenses", icon: <Star className="text-purple-500" /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-40 pb-20 transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* HERO */}
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            <ShoppingBag size={16} /> Enterprise IT Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-8"
          >
            Hardware & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400">
              Licensing.
            </span>
          </motion.h1>
        </div>

        {/* HARDWARE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 overflow-hidden group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-indigo-600 flex items-center justify-center mb-10 shadow-lg border border-slate-100 dark:border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {p.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 mb-3">{p.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300">{p.brand}</p>
            </motion.div>
          ))}
        </div>

        {/* --- DEDICATED LICENSES SECTION --- */}
        <section className="mb-24">
          <div className="bg-indigo-50 dark:bg-slate-900 rounded-[3.5rem] p-8 md:p-16 border border-indigo-100 dark:border-white/5 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-20 opacity-5 dark:opacity-10 pointer-events-none">
              <Key size={400} className="text-indigo-600 rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="max-w-2xl mb-12">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Official Software Licenses</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  We provide <span className="font-bold text-indigo-600">Microsoft, Tally, Quick-Heal & other</span> Software licenses at reasonable prices, ensuring your business stays compliant and secure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {licenseBrands.map((brand, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-indigo-50 dark:border-white/5 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 text-2xl">
                      {brand.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{brand.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{brand.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-indigo-500/30 mx-auto md:mx-0"
              >
                Get License Quote <ArrowUpRight size={20} />
              </motion.button>
            </div>
          </div>
        </section>

        {/* WHY BUY FROM US? */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-8 md:p-20 border border-slate-100 dark:border-white/5">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">The Softlink <br/> Advantage</h2>
            <div className="space-y-6">
              {[
                { t: "Seamless Activation", d: "Don't worry about keys and logins. We handle the activation and deployment for you." },
                { t: "Warranty Advocacy", d: "If it breaks, we handle the manufacturer claim process entirely for you." },
                { t: "Authorized Partner", d: "100% genuine software and hardware backed by authorized GST invoices." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <h5 className="font-bold dark:text-white text-slate-900">{item.t}</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-[3rem] rotate-3 absolute inset-0 opacity-10" />
            <div className="relative bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 text-indigo-600 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xl italic font-medium text-slate-700 dark:text-slate-300 mb-6">
                "Softlink helped us set up our design studio with licensed software and high-end hardware. Their support is truly top-notch."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div>
                  <p className="font-bold dark:text-white text-slate-900">Rahul Mehta</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Creative Director, Pune</p>
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