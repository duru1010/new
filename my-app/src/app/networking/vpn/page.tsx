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
  const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        quantity: "",
        duration: "",
        city: "",
        computerType: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
    
      // ================= HANDLE INPUT =================
    
      const handleChange = (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      // ================= HANDLE SUBMIT =================
    
      const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
      ) => {
        e.preventDefault();
    
        setLoading(true);
    
        try {
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
    
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              mobile: formData.mobile,
              service: formData.computerType,
    
              message: `
    Rental Duration: ${formData.duration}
    
    Requirement City: ${formData.city}
    
    Project Requirements:
    ${formData.message}
              `,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            alert("Quotation Request Sent Successfully!");
    
            setFormData({
              fullName: "",
              mobile: "",
              email: "",
              quantity: "",
              duration: "",
              city: "",
              computerType: "",
              message: "",
            });
    
            setIsModalOpen(false);
          } else {
            alert(data.error || "Failed to send request");
          }
        } catch (error) {
          console.error(error);
          alert("Something went wrong!");
        } finally {
          setLoading(false);
        }
      };
 
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
                                  Computer Rental Form
                                </div>
              
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                                  Request a
                                  <br />
                                  Quick Quotation.
                                </h2>
              
                                <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                                  Fill your rental requirement details and our team will
                                  contact you shortly.
                                </p>
                              </div>
                            </div>
              
                            {/* FORM */}
                            <form
                              onSubmit={handleSubmit}
                              className="p-8 md:p-12"
                            >
                              <div className="grid lg:grid-cols-2 gap-8">
                                {/* LEFT */}
                                <div className="space-y-6">
                                  <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
              
                                  <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
              
                                  <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
              
                                  <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity Required"
                      min="1"
                      required
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                                </div>
              
                                {/* RIGHT */}
                                <div className="space-y-6">
                                  <select
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >
                                    <option value="">Select Rental Duration</option>
                                    <option>1 Day</option>
                                    <option>1 Week</option>
                                    <option>1 Month</option>
                                    <option>6 Months</option>
                                    <option>1 Year</option>
                                  </select>
              
                                  <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Requirement City"
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
              
                                  <select
                                    name="computerType"
                                    value={formData.computerType}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >
                                    <option value="">Select  Requirment  type</option>
                                    <option>ATC  Basic Home</option>
                                    <option>ATC  Premium Home</option>
                                    <option>ATC  Business</option>
                                    <option>ATC  Enterprise</option>
                                  </select>
                                </div>
                              </div>
              
                              {/* TEXTAREA */}
                              <div className="mt-8">
                                <textarea
                                  rows={6}
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder="Describe your project requirements, quantity, RAM, SSD, graphics card, rental duration etc..."
                                  required
                                  className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />
                              </div>
              
                              {/* BUTTON */}
                              <div className="flex flex-wrap gap-4 mt-10">
                                <button
                                  type="submit"
                                  disabled={loading}
                                  className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all disabled:opacity-50"
                                >
                                  {loading ? "Sending..." : "Submit Quotation"}
                                </button>
                              </div>
                            </form>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

    </div>
  );
}