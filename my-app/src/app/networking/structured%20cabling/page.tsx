"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Cable,
  Server,
  ShieldCheck,
  Wifi,
  ArrowRight,
  CheckCircle2,
  Wrench,
  Router,
  Cpu,
  HardDrive,
} from "lucide-react";

export default function StructuredCablingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
  {
    title: "Office Structured Cabling",
    tag: "Popular",
    rating: "4.7",
    reviewCount: 87,
    price: "₹18,999",
    originalPrice: "₹22,999",
    discount: 15,
    badge: "Recommended",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200",
    specs: [
      "Cat6 / Cat6A Installation",
      "LAN Setup for Offices",
      "Neat Cable Management",
      "High-Speed Network Design",
    ],
  },

  {
    title: "Fiber Optic Cabling",
    tag: "Hot Deal",
    rating: "4.9",
    reviewCount: 112,
    price: "₹29,999",
    originalPrice: "₹36,999",
    discount: 20,
    badge: "Enterprise",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200",
    specs: [
      "Single Mode / Multi Mode Fiber",
      "Long Distance Connectivity",
      "High Bandwidth Setup",
      "Low Latency Network",
    ],
  },

  {
    title: "Server Rack Setup",
    tag: "Trending",
    rating: "4.8",
    reviewCount: 95,
    price: "₹24,999",
    originalPrice: "₹30,999",
    discount: 18,
    badge: "Professional",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200",
    specs: [
      "Rack Installation",
      "Patch Panel Setup",
      "Switch Configuration",
      "Server Organization",
    ],
  },

  {
    title: "Network Design & Planning",
    tag: "Premium",
    rating: "4.9",
    reviewCount: 76,
    price: "₹34,999",
    originalPrice: "₹41,999",
    discount: 22,
    badge: "Advanced",
    image:
      "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=1200",
    specs: [
      "Network Architecture",
      "IP Planning",
      "Scalable Design",
      "Security Planning",
    ],
  },
];

  const whyChoose = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure Installation",
      desc: "We ensure safe and reliable network setup.",
    },
    {
      icon: <Network size={20} />,
      title: "High Performance",
      desc: "Optimized cabling for maximum speed.",
    },
    {
      icon: <Wrench size={20} />,
      title: "Expert Engineers",
      desc: "Skilled professionals for installation.",
    },
    {
      icon: <Wifi size={20} />,
      title: "Future Ready",
      desc: "Scalable infrastructure for growth.",
    },
  ];

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
    <div className="min-h-screen bg-white dark:bg-slate-950">

      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
            
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-200 text-blue-600 text-xs font-bold mb-6">
              <Cable size={16} />
              Structured Cabling Solutions
              <div/>
            </div>
            </motion.div>

           <h1 className="text-5xl md:text-6xl font-black text-[#0A1628] dark:text-white leading-tight">
  Smart & Reliable{" "}
  <span className="text-[#0057FF]">Network Cabling</span>
</h1>
            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
  Structured cabling is a standardized system for designing and installing a building’s network wiring so all data, voice, and video communication runs smoothly, efficiently, and in an organized way.

  <br /><br />

  Instead of random or messy cables, it uses a planned layout of cables, connectors, patch panels, and switches to create a reliable network infrastructure.

  <br /><br />

 
</p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              Get Quote <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/1089623ffc67381c6a6ed573c3b72f90.jpg"
              alt="Cabling"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
       <section
              id="catalog-grid"
              className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Header */}
              
              {/* GRID */}
              {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((item, index) => (
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

      {/* WHY CHOOSE */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-4">
                {item.icon}
              </div>

              <h4 className="font-black text-slate-900 dark:text-white">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
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
                                <option>Structured Cabling</option>
                                <option>Network Monitoring</option>
                                <option>Security Auditing</option>
                                <option>Incident Response</option>
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