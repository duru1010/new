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

export default function SoftlinkFullExperience() {
  const [selectedService, setSelectedService] = useState<null | typeof catalog[0]>(null);

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

                  <button
                    onClick={() => setSelectedService(item)}
                    className="p-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[2rem] overflow-hidden flex"
            >

              {/* LEFT */}
              <div className="w-5/12 bg-blue-600 text-white p-8">
                <button onClick={() => setSelectedService(null)}>
                  <X />
                </button>

                <h3 className="text-2xl font-black mt-6">
                  {selectedService.title}
                </h3>

                <p className="text-sm mt-4 opacity-80">
                  Deployment ready service configuration.
                </p>

                <div className="mt-10">
                  <p className="text-xs uppercase opacity-70">Base Price</p>
                  <p className="text-3xl font-black">₹{selectedService.price}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-7/12 p-8 space-y-4">

                <h3 className="text-xl font-black uppercase">Deploy Request</h3>

                <input className="w-full p-3 border rounded-xl" placeholder="Contact Name" />

                <div className="grid grid-cols-2 gap-3">
                  <input type="date" className="p-3 border rounded-xl" />
                  <select className="p-3 border rounded-xl">
                    <option>Morning</option>
                    <option>Evening</option>
                  </select>
                </div>

                <textarea className="w-full p-3 border rounded-xl" rows={3} placeholder="Details" />

                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase">
                  Initialize Deployment
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}