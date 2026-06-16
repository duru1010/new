"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Camera,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  Eye,
  Wifi,
  HardDrive,
  BellRing,
  Monitor,
  Clock3,
  Zap,
} from "lucide-react";

export default function DomeCCTVPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
        
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
 const catalogItems = [
  {
    id: 1,
    title: "2MP Dome Camera",
    badge: "Budget",
    price: "₹2,499",
    originalPrice: "₹3,199",
    discount: 18,
    rating: "4.6",
    reviewCount: 142,
    image: "/35641e264d658c6f9b0fa84a8f65503d.jpg",
    resolution: "Full HD 1080P",
    feature: "Night Vision",
    popular: false,
  },

  {
    id: 2,
    title: "4MP Smart Dome",
    badge: "Popular",
    price: "₹4,999",
    originalPrice: "₹6,299",
    discount: 22,
    rating: "4.8",
    reviewCount: 268,
    image: "/35641e264d658c6f9b0fa84a8f65503d.jpg",
    resolution: "2K Ultra HD",
    feature: "AI Motion Detection",
    popular: true,
  },

  {
    id: 3,
    title: "Wireless Dome CCTV",
    badge: "Wireless",
    price: "₹6,499",
    originalPrice: "₹7,999",
    discount: 20,
    rating: "4.9",
    reviewCount: 198,
    image: "/35641e264d658c6f9b0fa84a8f65503d.jpg",
    resolution: "4MP WiFi",
    feature: "Mobile Access",
    popular: false,
  },

  {
    id: 4,
    title: "PTZ Dome Camera",
    badge: "Premium",
    price: "₹9,999",
    originalPrice: "₹12,499",
    discount: 25,
    rating: "5.0",
    reviewCount: 96,
    image: "/35641e264d658c6f9b0fa84a8f65503d.jpg",
    resolution: "360° Rotation",
    feature: "Auto Tracking",
    popular: true,
  },
];
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e36414]/10 border border-[#e36414]/20 text-[#e36414] text-[11px] font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={14} />
              Dome CCTV Camera
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Smart Indoor
              <br />
              <span className="bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] bg-clip-text text-transparent">Dome CCTV</span>
              <br />
              Surveillance
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
              Advanced Dome CCTV cameras with AI monitoring, night vision,
              remote mobile access, motion detection, and crystal-clear HD
              recording for homes, offices, retail stores, and enterprises.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20"
              >
                Get Quote
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 border border-slate-300 rounded-2xl font-black text-slate-700 hover:bg-slate-100 transition-all duration-300">
                Download Catalog
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="flex items-center gap-4 border border-slate-200 rounded-3xl p-5">
                <Eye className="text-blue-600" size={34} />

                <div>
                  <h4 className="font-black text-slate-900">
                    Night Vision
                  </h4>

                  <p className="text-sm text-slate-500">
                    Crystal clear recording in darkness.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-slate-200 rounded-3xl p-5">
                <Wifi className="text-blue-600" size={34} />

                <div>
                  <h4 className="font-black text-slate-900">
                    Remote Access
                  </h4>

                  <p className="text-sm text-slate-500">
                    Monitor from anywhere using mobile app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* MAIN IMAGE */}
            <div className="rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl relative">
              <Image
                src="/0812c27cd0a6d93af2b56d53c156fb96.jpg"
                width={1200}
                height={800}
                alt="Dome CCTV"
                className="w-full h-[620px] object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* LIVE BADGE */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Live Monitoring
                  </p>

                  <h4 className="text-sm font-black text-slate-900">
                    AI Powered Security
                  </h4>
                </div>
              </div>

              {/* BOTTOM CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-white/70 text-sm">
                      Dome Camera System
                    </p>

                    <h3 className="text-white text-3xl font-black mt-1">
                      Smart 360° Protection
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-white/10 border border-white/20 px-5 py-4 rounded-2xl">
                      <p className="text-white text-xl font-black">4K</p>
                      <span className="text-white/60 text-xs">
                        Ultra HD
                      </span>
                    </div>

                    <div className="bg-white/10 border border-white/20 px-5 py-4 rounded-2xl">
                      <p className="text-white text-xl font-black">24/7</p>
                      <span className="text-white/60 text-xs">
                        Recording
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING IMAGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden lg:block absolute -bottom-10 -left-10 w-52 rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <Image
                src="/0812c27cd0a6d93af2b56d53c156fb96.jpg"
                width={300}
                height={300}
                alt="Dome CCTV"
                className="w-full h-52 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATALOG */}
    <section className="py-24 bg-cyan-50/30">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-cyan-100 pb-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              Dome CCTV Collection
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl">
              Smart dome surveillance cameras with AI tracking, ultra HD recording
              and advanced night security.
            </p>
          </div>

          <div className="mt-5 md:mt-0 bg-cyan-50 border border-cyan-100 text-[#3b71ca] px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-sm">
            {catalogItems.length} Cameras Available
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogItems.map((camera, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={camera.image}
                  alt={camera.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b71ca]/40 via-transparent to-transparent" />

                {/* BADGE */}
                <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg bg-[#3b71ca]">
                    CCTV Camera
                  </span>
                </div>

                {/* PRICE FLOATER */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-[#3b71ca] font-black text-xs px-4 py-2 rounded-full shadow-md border border-cyan-50/50">
                  {camera.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col min-h-[420px]">
                
                {/* TITLE */}
                <div className="min-h-[56px] mb-4">
                  <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-[#3b71ca] transition-colors duration-300 line-clamp-2">
                    {camera.title}
                  </h3>
                </div>

                {/* RATINGS */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-[#3b71ca] text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    4.8
                    <span>★</span>
                  </div>
                  <span className="text-sm text-slate-500 font-semibold">
                    (180 Reviews)
                  </span>
                </div>

                {/* PRICE & DISCOUNT SECTION */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-3xl font-black text-slate-900">
                      {camera.price}
                    </span>
                    <span className="text-base text-slate-400 line-through">
                      {camera.originalPrice}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
                      {camera.discount}% OFF
                    </span>
                    {camera.badge && (
                      <span className="bg-cyan-50 text-[#00b4ed] text-xs font-black px-3 py-1 rounded-full border border-cyan-100/70">
                        {camera.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* SPECS/FEATURES */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#00b4ed]" />
                    <span className="text-sm text-slate-600 font-medium">
                      {camera.resolution}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-[#00b4ed]" />
                    <span className="text-sm text-slate-600 font-medium">
                      {camera.feature}
                    </span>
                  </div>
                </div>
                
                {/* BUTTON */}
                <div className="mt-auto">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] hover:opacity-95 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#3b71ca]/10 hover:shadow-[#00b4ed]/30"
                  >
                    Get Quote
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* FEATURES */}
       <section
        id="catalog-grid"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="rounded-[2rem] border border-slate-200 p-8">
              <BellRing className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Motion Detection
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Smart AI-powered motion alerts for suspicious activity.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <HardDrive className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Cloud Storage
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Secure backup with cloud recording and remote access.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <Monitor className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Live Monitoring
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Watch real-time footage from anywhere using mobile devices.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <Clock3 className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                24/7 Recording
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Continuous recording with intelligent event tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[3rem] overflow-hidden relative bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-14 md:p-20">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-[0.25em] mb-6">
                CCTV Security Solution
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Protect Your
                <br />
                Property Today.
              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-relaxed">
                Get professional CCTV installation and surveillance
                solutions with advanced AI security systems.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-10 px-10 py-5 rounded-2xl bg-white text-blue-600 font-black flex items-center gap-2 hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="absolute inset-0 opacity-20">
              <Image
                src="/cctv-pattern.jpg"
                fill
                alt="pattern"
                className="object-cover"
              />
            </div>
          </div>
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
                                                                              <option>2MP Dome CCTV</option>
                                                                              <option>4MP Dome CCTV</option>
                                                                              <option>6MP Dome CCTV</option>
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