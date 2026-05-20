"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Shield, Cpu, ArrowRight, Activity, 
  Check, Globe, Layers, CloudLightning, 
  Headphones, MousePointer2, Smartphone,
  Link,
  ArrowLeft
} from "lucide-react";

// ================= THEME CONSTANTS =================
const COLORS = {
  sky: "#0EA5E9",
  electric: "#2563EB",
  navy: "#020617",
};

const plans = [
  { 
    id: 1, 
    title: "Sky Lite", 
    speed: "150 Mbps", 
    price: "699", 
    tag: "Essential",
    features: ["Dual-Band Router", "Unlimited Data", "24/7 Support"]
  },
  { 
    id: 2, 
    title: "Electric Pro", 
    speed: "400 Mbps", 
    price: "1299", 
    tag: "Most Popular",
    features: ["WiFi 6 Router", "Zero Latency Gaming", "Priority Support"]
  },
  { 
    id: 3, 
    title: "Thunderbolt", 
    speed: "1 Gbps", 
    price: "2499", 
    tag: "Ultra Performance",
    features: ["Mesh Setup Incl.", "Static IP", "Enterprise Security"]
  }
];

export default function VoltFiberUltra() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Animation variants for staggered list items
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white selection:bg-sky-500/30">
        <Link
            href="/networking"
            className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8"
          >
            <ArrowLeft size={18} />
            Back To Services
          </Link>
      {/* --- VOID BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-sky-500/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-blue-600/10 blur-[160px] rounded-full" />
      </div>
     
      {/* --- GLASS NAVIGATION --- */}
      
      {/* --- HERO: KINETIC ENERGY --- */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Network Online: 99.9% Uptime
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black leading-[0.9] mb-8 italic uppercase tracking-tighter">
              Pure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 drop-shadow-sm">
                Velocity.
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg mb-12 leading-relaxed font-medium">
              We’ve rebuilt the internet from the silicon up. Experience the raw power of symmetrical fiber with zero interference.
            </p>

            <div className="flex flex-wrap gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all flex items-center gap-3"
              >
                Start Surge <ArrowRight size={22} strokeWidth={3} />
              </motion.button>
              <button className="px-10 py-5 bg-white dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-white/10 font-bold rounded-2xl hover:bg-slate-100 transition-all">
                Compare Technology
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full animate-pulse" />
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-[3.2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-slate-900 p-3 rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
                  alt="Fiber Matrix" 
                  width={800} 
                  height={600} 
                  className="rounded-[2.5rem] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES: THE BENTO GRID --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bento Card 1: Main Highlighting */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2.5rem] p-12 text-white relative overflow-hidden group shadow-2xl shadow-blue-500/20"
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-6 italic leading-none">1:1 Symmetrical <br/>DNA Architecture</h2>
                <p className="text-blue-100 max-w-sm text-lg opacity-80 mb-8 font-medium">
                  Upload at the exact same speed you download. Perfect for creators, 4K streamers, and heavy cloud users.
                </p>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs font-bold uppercase tracking-widest italic">8K Ready</div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs font-bold uppercase tracking-widest italic">Zero Jitter</div>
                </div>
              </div>
              <Activity className="absolute bottom-[-20px] right-[-20px] size-64 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </motion.div>

            {/* Bento Card 2: Support */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-sky-100 dark:bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-600">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3 italic">The Human <br/>Response</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Talk to local experts in under 60 seconds. No scripts, just solutions.</p>
              </div>
            </motion.div>

            {/* Bento Card 3: Mobile Access */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-sky-50 dark:bg-slate-800/40 border border-sky-100 dark:border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative"
            >
              <Smartphone size={120} className="absolute top-[-20px] right-[-30px] text-sky-200/50 dark:text-white/5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-3 italic">Command <br/>Center App</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manage your network, guest access, and security from any device.</p>
              </div>
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center shadow-sm">
                <Zap className="text-yellow-500" />
              </div>
            </motion.div>

            {/* Bento Card 4: Security */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row gap-10 items-center border border-white/5"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4 italic">Core-Level Shield</h3>
                <p className="text-slate-400 text-md leading-relaxed">Advanced DDoS mitigation and encrypted packet inspection are standard on every plan. No extra cost.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-2">
                    <Shield className="text-sky-400" />
                    <span className="text-[10px] font-black tracking-widest uppercase">AES-256</span>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-2">
                    <Globe className="text-blue-400" />
                    <span className="text-[10px] font-black tracking-widest uppercase">SafeDNS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING: THE NEON CARDS --- */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-black text-white italic tracking-tighter mb-4">CHOOSE YOUR SPEED</h2>
              <p className="text-slate-400 font-medium">No contracts. No hardware fees. Just high-voltage fiber.</p>
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-2 rounded-full bg-white text-black font-black text-xs uppercase italic">Monthly</div>
              <div className="px-4 py-2 rounded-full bg-white/5 text-slate-500 font-black text-xs uppercase italic">Annual (Save 15%)</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative p-10 rounded-[3rem] transition-all duration-700 cursor-pointer overflow-hidden ${
                  hoveredCard === idx 
                  ? "bg-slate-900 -translate-y-4 shadow-3xl shadow-blue-500/20" 
                  : "bg-white/5 border border-white/10"
                }`}
              >
                {/* Neon Glow on Hover */}
                {hoveredCard === idx && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-500 animate-pulse" />
                )}

                <div className="mb-10">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-sky-400 italic bg-sky-400/10 px-3 py-1 rounded-md">
                    {plan.tag}
                    </span>
                    <h3 className="text-3xl font-black text-white mt-6 italic uppercase">{plan.title}</h3>
                    <div className="text-sky-500 font-black text-xl italic mt-1">{plan.speed}</div>
                </div>
                
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-6xl font-black text-white tracking-tighter italic">₹{plan.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-xs">/ month</span>
                </div>

                <div className="space-y-5 mb-12">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-4 text-sm font-bold text-slate-300">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center text-white">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest italic transition-all ${
                    hoveredCard === idx 
                    ? "bg-white text-black scale-105" 
                    : "bg-white/10 text-slate-400"
                  }`}
                >
                  Configure_Node
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COVERAGE MODAL --- */}
      <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md overflow-y-auto py-10 px-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-5xl mx-auto bg-white dark:bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
                >
                  {/* HEADER */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-10 py-12">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
                    >
                      ✕
                    </button>
          
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-[0.25em] mb-6">
                        Laptop Rental Form
                      </div>
          
                      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                        Request a
                        <br />
                        Quick Quotation.
                      </h2>
          
                      <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                        Fill your rental requirement details and our team will contact
                        you.
                      </p>
                    </div>
                  </div>
          
                  {/* FORM */}
                  <div className="p-8 md:p-12">
                    <div className="mb-10">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                        ABOUT YOUR RENTAL REQUIREMENTS?
                      </h3>
          
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Be sure to tell us any other need or specifications required!
                      </p>
                    </div>
          
                    <div className="grid lg:grid-cols-2 gap-8">
                      
                      {/* LEFT */}
                      <div className="space-y-6">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border"
                        />
          
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border"
                        />
          
                        <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border">
                          <option>Select Company Type</option>
                          <option>Individual</option>
                          <option>Startup</option>
                          <option>Corporate Company</option>
                          <option>Institute</option>
                        </select>
          
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border"
                        />
          
                        <input
                          type="email"
                          placeholder="Email ID"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border"
                        />
                      </div>
          
                      {/* RIGHT */}
                      <div className="space-y-6">
          
                        {/* 🔥 DROPDOWN ADDED HERE */}
                        <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border">
                          <option>Select Product / Service</option>
                          <option>Cat6 Cabling</option>
                          <option>Cat6A Setup</option>
                          <option>Fiber Optic Setup</option>
                          <option>Server Rack Setup</option>
                          <option>Enterprise Networking</option>
                          <option>WiFi & NAS Setup</option>
                        </select>
          
                        <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border">
                          <option>Select Duration</option>
                          <option>1 Day</option>
                          <option>1 Week</option>
                          <option>1 Month</option>
                          <option>1 Year</option>
                        </select>
          
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border"
                        />
          
                        <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border">
                          <option>Select Requirement Type</option>
                          <option>Installation</option>
                          <option>Maintenance</option>
                          <option>Upgrade</option>
                        </select>
                      </div>
                    </div>
          
                    <textarea
                      rows={6}
                      placeholder="Describe your requirement..."
                      className="w-full mt-8 p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border"
                    />
          
                    <div className="mt-10">
                      <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black">
                        Submit Quotation
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

      
    </div>
  );
}

// Icon component for modal close since it was missing in imports
function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}