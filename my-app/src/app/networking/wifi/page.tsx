"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, ArrowRight, Zap, ShieldCheck, Gamepad2, Briefcase, CheckCircle2, X } from "lucide-react";

// ================= DATA =================
const descriptions = {
  hero: `Experience ultra-fast fiber-optic internet designed for modern homes and businesses. 99.9% uptime with advanced security.`,
  home: `Perfect for everyday use — browse, stream HD/4K videos, and connect multiple devices without buffering.`,
  gaming: `Low-latency connectivity optimized for competitive gaming. Reduced ping and stable connections.`,
  business: `Enterprise-grade internet built for productivity. Supports heavy workloads and cloud applications.`,
  security: `Advanced secure WiFi with built-in protection against threats and encrypted connectivity.`,
};

const plansBySpeed = {
  "100 Mbps": [
    { title: "ACT Basic Home", speed: "100 Mbps", data: "Unlimited", router: "Free Router", price: "799", tag: "Popular", desc: descriptions.home, icon: <Wifi className="text-blue-500" /> },
    { title: "ACT Home Boost", speed: "100 Mbps", data: "Unlimited", router: "AI Router", price: "849", tag: "New", desc: descriptions.business, icon: <Zap className="text-yellow-500" /> },
    { title: "ACT Secure Home", speed: "100 Mbps", data: "Unlimited", router: "Free Router", price: "999", tag: "Security", desc: descriptions.security, icon: <ShieldCheck className="text-emerald-500" /> },
  ],
  "200 Mbps": [
    { title: "ACT Storm Basic", speed: "200 Mbps", data: "Unlimited", router: "Free Router", price: "1199", tag: "Value", desc: descriptions.home, icon: <Wifi className="text-blue-500" /> },
    { title: "ACT Gaming Pro", speed: "200 Mbps", data: "Unlimited", router: "Gaming Router", price: "1499", tag: "Pro Gamer", desc: descriptions.gaming, icon: <Gamepad2 className="text-purple-500" /> },
    { title: "ACT Storm Mesh", speed: "200 Mbps", data: "Unlimited", router: "Mesh Router", price: "1299", tag: "Best Seller", desc: descriptions.home, icon: <Zap className="text-orange-500" /> },
  ],
  // Add other speeds similarly...
};

// ================= COMPONENT =================
export default function EnhancedWifiPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState("100 Mbps");

  const speedFilters = Object.keys(plansBySpeed);
  const filteredPlans = plansBySpeed[selectedSpeed as keyof typeof plansBySpeed] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen Fiber Connectivity
            </div>

            <h3 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#0A1628] dark:text-white">
  Speeds that <br />
  <span className="text-[#0057FF]">
    Move with You.
  </span>
</h3>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {descriptions.hero}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center gap-3 transition-all hover:shadow-2xl hover:shadow-blue-500/40"
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c"
                alt="High speed wifi"
                width={800}
                height={600}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reliability</p>
                <p className="text-lg font-black">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-6 py-12 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl font-black italic tracking-tighter uppercase">Choose Your Speed</h2>
          <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto max-w-full">
            {speedFilters.map((speed) => (
              <button
                key={speed}
                onClick={() => setSelectedSpeed(speed)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  selectedSpeed === speed
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan, i) => (
              <motion.div
                key={plan.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-3xl hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-4">
                    {plan.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                    {plan.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight">{plan.title}</h3>
                
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-blue-600">₹{plan.price}</span>
                  <span className="text-slate-400 font-medium">/month</span>
                </div>

                <div className="my-6 space-y-3 border-y border-slate-100 dark:border-slate-800 py-6">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Zap size={16} className="text-blue-500" />
                    <span>Up to {plan.speed} Speed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span>{plan.data} Data Usage</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Wifi size={16} className="text-blue-500" />
                    <span>{plan.router} Included</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 h-12 line-clamp-2">
                  {plan.desc}
                </p>

               <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all"
                  >
                    Request Quote
                  </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL (Re-styled) */}
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