"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Calendar,
  Clock,
  User,
  Activity,
  MousePointer2
} from "lucide-react";

// --- DATA: CATALOG ITEMS ---
const catalog = [
  {
    id: "vpn",
    title: "Secure Tunnel VPN",
    category: "Connectivity",
    desc: "High-performance encrypted bridging designed for zero-latency remote access. Our proprietary tunneling protocol bypasses congestion while maintaining end-to-end military-grade security.",
    price: "4,999",
    features: ["Zero-Knowledge Architecture", "Multi-Regional Exit Nodes", "Real-time Packet Inspection"]
  },
  {
    id: "fiber",
    title: "Dedicated Leased Line",
    category: "Infrastructure",
    desc: "1:1 Symmetrical fiber for enterprise-grade uptime. Engineered for mission-critical operations requiring maximum throughput.",
    price: "12,499",
    features: ["99.9% SLA", "24/7 Monitoring", "Low Latency"]
  },
  {
    id: "cloud",
    title: "Hybrid Cloud Access",
    category: "Remote Access",
    desc: "Seamless bridging between on-prem and cloud assets. Scale your infrastructure dynamically without hardware bottlenecks.",
    price: "8,999",
    features: ["Multi-Cloud Sync", "Auto-Scaling", "IAM Integration"]
  }
];

export default function SoftlinkFullExperience() {
  const [selectedService, setSelectedService] = useState<null | typeof catalog[0]>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 min-h-screen flex items-center pt-20 pb-32 px-6">
        {/* Ambient Background Blur */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-400/10 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 dark:text-sky-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Activity size={14} className="animate-pulse" />
              Hyper-V Connect Active
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 italic uppercase tracking-tighter">
              Link <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600">
                Beyond.
              </span>
            </h1>
            
            {/* UPDATED HERO DESCRIPTION */}
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg mb-12 leading-relaxed font-medium">
              Softlink deploys next-generation network architecture designed to eliminate bottlenecks. 
              By combining <span className="text-blue-600 font-bold">multi-gigabit throughput</span> with 
              intelligent traffic routing, we provide a foundation that is secure by design and 
              infinitely scalable for global enterprise operations.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl transition-all flex items-center gap-3 uppercase italic tracking-widest text-sm"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services <Zap size={18} fill="currentColor" />
              </motion.button>
              
              <button className="group px-10 py-5 bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 font-bold rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                Our Network <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 z-20 p-5 bg-white dark:bg-slate-900 border border-blue-500/30 rounded-3xl shadow-2xl"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-500">
                     <MousePointer2 size={24} />
                  </div>
                  <div>
                     <div className="text-[10px] font-black uppercase text-slate-400">Ping Response</div>
                     <div className="text-xl font-black italic text-blue-600">0.02ms</div>
                  </div>
               </div>
            </motion.div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-[3.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-[3.2rem] border border-white/10 shadow-2xl overflow-hidden">
                <Image 
                  src="/6c2eff44f96749131de56c6f9140b19c.jpg" 
                  alt="Cyber Infrastructure" 
                  width={600} 
                  height={800} 
                  className="rounded-[2.5rem] object-cover aspect-[4/5] scale-110 group-hover:scale-100 transition-transform duration-[2s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CATALOG SECTION ================= */}
      <section id="catalog" className="relative z-10 py-32 px-6 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                Service <span className="text-blue-600">Catalog</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                Next-generation networking solutions engineered for Softlink's high-speed infrastructure.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {catalog.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-black italic uppercase mb-4 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-3 mb-10">
                    {item.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-xs font-bold">
                        <CheckCircle2 size={14} className="text-blue-600" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Starts at</span>
                      <span className="text-2xl font-black italic">₹{item.price}</span>
                    </div>
                    <button
                      onClick={() => setSelectedService(item)}
                      className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Network size={120} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOOKING MODAL ================= */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
            >
              {/* Sidebar Summary */}
              <div className="md:w-5/12 bg-blue-600 p-12 text-white flex flex-col justify-between">
                <div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="mb-8 p-2 hover:bg-white/10 rounded-full transition-colors inline-block md:hidden"
                  >
                    <X size={24} />
                  </button>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">Review Deployment</h4>
                  <h3 className="text-4xl font-black italic uppercase leading-none mb-6">
                    {selectedService.title}
                  </h3>
                  <div className="space-y-4 opacity-80">
                    <p className="text-sm font-medium">
                      {selectedService.id === 'vpn' 
                        ? "Auto-provisioning ready. Secure tunnel keys will be generated upon confirmation."
                        : "Site survey required. Our technicians will contact you for a technical assessment."}
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 mt-8">
                   <div className="flex justify-between items-end">
                      <span className="text-xs font-bold uppercase opacity-60">Est. Base</span>
                      <span className="text-3xl font-black italic">₹{selectedService.price}</span>
                   </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="md:w-7/12 p-12 relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-2 text-slate-400 hover:text-blue-600 transition-colors hidden md:block"
                >
                  <X size={24} />
                </button>

                <h3 className="text-2xl font-black italic uppercase mb-8">Deploy Request</h3>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Authorized Contact" className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm" />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <select className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-sm appearance-none">
                        <option>Morning (09:00 - 12:00)</option>
                        <option>Afternoon (14:00 - 17:00)</option>
                      </select>
                    </div>
                  </div>

                  <textarea rows={3} placeholder="Site Details / Special Port Requests" className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold" />

                  <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 hover:scale-[1.02] transition-all uppercase tracking-widest italic flex items-center justify-center gap-3">
                    Initialize Deployment <Zap size={18} fill="currentColor" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-20 text-center border-t border-slate-200 dark:border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Softlink Dynamics • © 2026</p>
      </footer>
    </div>
  );
}