"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
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

// --- DATA ---
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

export default function EnhancedWifiPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState("100 Mbps");

  const speedFilters = Object.keys(catalog);
  const filteredPlans = catalog[selectedSpeed as keyof typeof catalog] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-6 py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-sky-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
           

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] uppercase tracking-tighter mb-8">
              Data <br />
              <span className="text-blue-600">Recovery.</span>
            </h1>

            <p className="text-slate-500 dark:text-slate-400 max-w-lg font-medium mb-10 leading-relaxed">
              Recover lost, deleted, or corrupted data from HDD, SSD, laptops,
              servers, and storage devices with expert recovery solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              
              <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 font-bold rounded-2xl">
                Quick Quote
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <div className="hidden lg:block">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400"
                alt="Data Recovery"
                width={600}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATALOG ================= */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
              Service <span className="text-blue-600">Catalog</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium">
              Enterprise-grade networking solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {catalog.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 flex flex-col hover:shadow-xl transition-all"
              >

                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">
                  {item.category}
                </span>

                <h3 className="text-2xl font-black italic uppercase mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 size={14} className="text-blue-600" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Starts at</p>
                    <p className="text-2xl font-black text-blue-600">₹{item.price}</p>
                  </div>

                  
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
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