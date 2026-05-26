"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Shield, Cpu, ArrowRight, Activity, 
  Check, Globe, Layers, CloudLightning, 
  Headphones, MousePointer2, Smartphone,
  Link,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

// ================= THEME CONSTANTS =================
const COLORS = {
  sky: "#0EA5E9",
  electric: "#2563EB",
  navy: "#020617",
};

const recoveryProducts = [
  {
    title: "Cat6 Enterprise Cabling",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tag: "Trending",
    rating: "4.9",
    reviewCount: 120,
    price: "₹12,999",
    originalPrice: "₹16,999",
    discount: 20,
    badge: "Best Seller",
    specs: [
      "High-speed structured cabling",
      "Enterprise-grade installation",
      "Future-ready bandwidth",
    ],
  },
  {
    title: "Fiber Optic Infrastructure",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    tag: "Hot Deal",
    rating: "4.8",
    reviewCount: 98,
    price: "₹24,999",
    originalPrice: "₹31,999",
    discount: 25,
    badge: "Premium",
    specs: [
      "Ultra-fast fiber backbone",
      "Low latency architecture",
      "Long distance reliability",
    ],
  },
  {
    title: "Enterprise WiFi Setup",
    image:
      "https://images.unsplash.com/photo-1520869562399-e772f042f422",
    tag: "Popular",
    rating: "4.7",
    reviewCount: 87,
    price: "₹18,999",
    originalPrice: "₹22,999",
    discount: 15,
    badge: "Recommended",
    specs: [
      "Seamless roaming",
      "WiFi 6 compatibility",
      "Secure network coverage",
    ],
  },
  {
    title: "Enterprise WiFi Setup",
    image:
      "https://images.unsplash.com/photo-1520869562399-e772f042f422",
    tag: "Popular",
    rating: "4.7",
    reviewCount: 87,
    price: "₹18,999",
    originalPrice: "₹22,999",
    discount: 15,
    badge: "Recommended",
    specs: [
      "Seamless roaming",
      "WiFi 6 compatibility",
      "Secure network coverage",
    ],
  },
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Network Online: 99.9% Uptime
            </div>
            
           <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#0A1628] dark:text-white">
  Pure  
  <span className="text-[#0057FF]">
   Velocity
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
                Get Started <ArrowRight size={22} strokeWidth={3} />
              </motion.button>
              
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


       <section
         id="catalog-grid"
         className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
       >
         {/* Header */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
           <div>
             <h2 className="text-3xl font-black text-slate-900 tracking-tight">
               Hardware Upgrade Catalog
             </h2>
       
             <p className="mt-2 text-sm text-slate-500">
               Professional upgrade solutions for gaming, office, editing and
               high-performance systems.
             </p>
           </div>
       
           <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
             {recoveryProducts.length} Upgrade Services Available
           </div>
         </div>
       
         {/* GRID */}
         {/* GRID */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {recoveryProducts.map((item, index) => (
           <div
             key={index}
             className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
           >
             {/* IMAGE */}
             <div className="relative h-[260px] overflow-hidden">
               <img
                 src={item.image}
                 alt={item.title}
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
       
               {/* Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
       
               {/* TOP BADGES */}
               <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                 {item.tag && (
                   <span
                     className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg ${
                       item.tag === "Trending"
                         ? "bg-cyan-500"
                         : item.tag === "Hot Deal"
                         ? "bg-blue-600"
                         : "bg-indigo-600"
                     }`}
                   >
                     {item.tag}
                   </span>
                 )}
               </div>
       
               {/* PRICE BADGE */}
               <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg border border-white">
                 {item.price}
               </div>
             </div>
       
             {/* CONTENT */}
             <div className="p-8 flex flex-col min-h-[420px]">
               {/* TITLE */}
               <div className="min-h-[80px] mb-5">
                 <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                   {item.title}
                 </h3>
               </div>
       
               {/* RATINGS */}
               <div className="flex items-center gap-3 mb-6">
                 <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                   {item.rating}
                   <span>★</span>
                 </div>
       
                 <span className="text-sm text-slate-500 font-semibold">
                   ({item.reviewCount} Reviews)
                 </span>
               </div>
       
               {/* PRICE SECTION */}
               <div className="mb-6">
                 <div className="flex items-center gap-3 flex-wrap">
                   <span className="text-lg font-black text-slate-900">
                     {item.price}
                   </span>
       
                   <span className="text-sm text-slate-400 line-through">
                     {item.originalPrice}
                   </span>
                 </div>
       
                 {/* OFFER BADGES */}
                 <div className="mt-4 flex items-center gap-2 flex-wrap">
                   <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
                     {item.discount}% OFF
                   </span>
       
                   {item.badge && (
                     <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                       {item.badge}
                     </span>
                   )}
                 </div>
               </div>
       
               {/* SPECS */}
               <div className="space-y-3 mb-8">
                 {item.specs.map((spec, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle2
                       size={16}
                       className="text-blue-600 mt-1 flex-shrink-0"
                     />
       
                     <span className="text-slate-600 text-sm leading-relaxed">
                       {spec}
                     </span>
                   </div>
                 ))}
               </div>
       
               {/* BUTTON */}
               <div className="mt-auto">
                 <button
                   onClick={() => setIsModalOpen(true)}
                   className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                 >
                   Request Quote
                   <ArrowRight size={16} />
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
       </section>
       

      {/* --- FEATURES: THE BENTO GRID --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bento Card 1: Main Highlighting */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-12 text-white relative overflow-hidden group shadow-2xl shadow-blue-500/20"
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
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600">
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
              className="bg-blue-50 dark:bg-slate-800/40 border border-blue-100 dark:border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative"
            >
              <Smartphone size={120} className="absolute top-[-20px] right-[-30px] text-blue-200/50 dark:text-white/5" />
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
                    <Shield className="text-blue-400" />
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

                         <input
        type="number"
        name="quantity"
       
        placeholder="Quantity Required"
        min="1"
        required
        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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