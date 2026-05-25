"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  Wifi,
  ArrowRight,
  CheckCircle2,
  Star,
  Camera,
  Smartphone,
  BellRing,
  HardDrive,
  Monitor,
  Cloud,
  ShieldCheck,
  Zap,
  RadioTower,
} from "lucide-react";

export default function WirelessCCTVPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wirelessCatalog = [
  {
    title: "2MP Wireless CCTV",
    price: "₹3,499",
    originalPrice: "₹4,499",
    discount: 20,
    badge: "WiFi CCTV",
    image: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
    resolution: "Full HD 1080P",
    feature: "WiFi Connectivity",
    rating: "4.8",
    reviewCount: 180,
  },
  {
    title: "4MP Smart WiFi Camera",
    price: "₹6,499",
    originalPrice: "₹7,999",
    discount: 18,
    badge: "Best Seller",
    image: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
    resolution: "2K Ultra HD",
    feature: "AI Motion Detection",
    rating: "4.9",
    reviewCount: 245,
  },
  {
    title: "360° Wireless PTZ",
    price: "₹8,999",
    originalPrice: "₹10,999",
    discount: 22,
    badge: "Premium",
    image: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
    resolution: "360° Rotation",
    feature: "Auto Human Tracking",
    rating: "4.7",
    reviewCount: 165,
  },
  {
    title: "Dual Antenna CCTV",
    price: "₹12,999",
    originalPrice: "₹15,999",
    discount: 25,
    badge: "4K Ultra",
    image: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
    resolution: "4K Ultra HD",
    feature: "Long Range WiFi",
    rating: "5.0",
    reviewCount: 120,
  },
];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={14} />
              Wireless CCTV Camera
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Smart
              <br />
              <span className="text-blue-600">Wireless CCTV</span>
              <br />
              Monitoring
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
              Advanced wireless CCTV cameras with mobile connectivity,
              cloud backup, AI detection, real-time alerts, and remote
              live viewing for smart home and business security.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center gap-2 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 border border-slate-300 rounded-2xl font-black text-slate-700 hover:bg-slate-100 transition-all duration-300">
                Download Catalog
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="flex items-center gap-4 border border-slate-200 rounded-3xl p-5">
                <Smartphone className="text-blue-600" size={34} />

                <div>
                  <h4 className="font-black text-slate-900">
                    Mobile Access
                  </h4>

                  <p className="text-sm text-slate-500">
                    View live CCTV footage from your phone.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-slate-200 rounded-3xl p-5">
                <Wifi className="text-blue-600" size={34} />

                <div>
                  <h4 className="font-black text-slate-900">
                    Wireless Setup
                  </h4>

                  <p className="text-sm text-slate-500">
                    Easy installation without cable clutter.
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
            <div className="rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl relative">
              <Image
                src="/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg"
                width={1200}
                height={800}
                alt="Wireless CCTV"
                className="w-full h-[620px] object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* LIVE BADGE */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">
                    Wireless Monitoring
                  </p>

                  <h4 className="text-sm font-black text-slate-900">
                    Smart AI Surveillance
                  </h4>
                </div>
              </div>

              {/* BOTTOM CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-white/70 text-sm">
                      Wireless Security Camera
                    </p>

                    <h3 className="text-white text-3xl font-black mt-1">
                      Smart Cloud Protection
                    </h3>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-white/10 border border-white/20 px-5 py-4 rounded-2xl">
                      <p className="text-white text-xl font-black">WiFi</p>

                      <span className="text-white/60 text-xs">
                        Enabled
                      </span>
                    </div>

                    <div className="bg-white/10 border border-white/20 px-5 py-4 rounded-2xl">
                      <p className="text-white text-xl font-black">24/7</p>

                      <span className="text-white/60 text-xs">
                        Live Access
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
                src="/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg"
                width={300}
                height={300}
                alt="Wireless CCTV"
                className="w-full h-52 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATALOG */}
       <section
                    id="catalog-grid"
                    className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                  >
  <div className="container mx-auto px-6">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
      <div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Wireless CCTV Cameras
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Smart wireless surveillance cameras with AI security and remote access.
        </p>
      </div>

      <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
        {wirelessCatalog.length} Cameras Available
      </div>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {wirelessCatalog.map((camera, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
        >
          {/* IMAGE */}
          <div className="relative h-[260px] overflow-hidden">
            <img
              src={camera.image}
              alt={camera.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* BADGE */}
            <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
              <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg bg-blue-600">
                {camera.badge}
              </span>
            </div>

            {/* PRICE */}
            <div className="absolute top-5 right-5 bg-white/95 text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg">
              {camera.price}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 flex flex-col min-h-[480px]">

            {/* TITLE */}
            <div className="min-h-[80px] mb-5">
              <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                {camera.title}
              </h3>
            </div>

            {/* RATINGS */}
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                {camera.rating}
                <span>★</span>
              </div>

              <span className="text-sm text-slate-500 font-semibold">
                ({camera.reviewCount} Reviews)
              </span>
            </div>

            {/* PRICE SECTION */}
            <div className="mb-6">
              <div className="flex items-center gap-3 flex-wrap">

                <span className="text-3xl font-black text-slate-900">
                  {camera.price}
                </span>

                <span className="text-base text-slate-400 line-through">
                  {camera.originalPrice}
                </span>
              </div>

              {/* OFFER BADGES */}
              <div className="mt-4 flex items-center gap-2 flex-wrap">

                <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
                  {camera.discount}% OFF
                </span>

                <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                  Best Seller
                </span>
              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  className="text-blue-600"
                />

                <span className="text-sm text-slate-600 font-medium">
                  {camera.resolution}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Zap
                  size={18}
                  className="text-blue-600"
                />

                <span className="text-sm text-slate-600 font-medium">
                  {camera.feature}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-sm text-slate-600">
                  Remote Mobile Monitoring
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-sm text-slate-600">
                  Cloud Storage Support
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                Get Quote
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* FEATURES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="rounded-[2rem] border border-slate-200 p-8">
              <BellRing className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Smart Alerts
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                AI-powered motion detection notifications instantly.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <Cloud className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Cloud Recording
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Secure cloud storage with encrypted data backup.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <Monitor className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Live Streaming
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Access real-time CCTV footage from anywhere.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <RadioTower className="text-blue-600 mb-5" size={38} />

              <h3 className="text-2xl font-black text-slate-900">
                Wireless Connectivity
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Strong WiFi range with seamless connectivity.
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
                Wireless CCTV Solution
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Upgrade To
                <br />
                Smart Wireless Security.
              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-relaxed">
                Protect your home, office, warehouse, and retail store with
                smart wireless CCTV monitoring systems.
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
                src="/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg"
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
              className="max-w-5xl mx-auto bg-white rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl"
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
                    Wireless CCTV Inquiry
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                    Request a
                    <br />
                    Quick Quote.
                  </h2>

                  <p className="text-blue-100 text-lg max-w-2xl">
                    Fill your wireless CCTV requirement details and our
                    expert team will contact you shortly.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 border"
                    />

                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 border"
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 border"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 border"
                    />
                  </div>

                  <div className="space-y-6">
                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 border">
                      <option>Select Wireless CCTV</option>
                      <option>2MP Wireless CCTV</option>
                      <option>4MP Smart WiFi Camera</option>
                      <option>360° Wireless PTZ</option>
                      <option>Dual Antenna CCTV</option>
                    </select>

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 border">
                      <option>Installation Area</option>
                      <option>Home</option>
                      <option>Office</option>
                      <option>Retail Store</option>
                      <option>Warehouse</option>
                    </select>

                    <input
                      type="text"
                      placeholder="City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 border"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 border">
                      <option>Select Requirement</option>
                      <option>New Installation</option>
                      <option>Upgrade</option>
                      <option>AMC Support</option>
                      <option>Maintenance</option>
                    </select>
                  </div>
                </div>

                <textarea
                  rows={6}
                  placeholder="Describe your requirement..."
                  className="w-full mt-8 p-5 rounded-[2rem] bg-slate-100 border"
                />

                <button className="mt-10 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black">
                  Submit Inquiry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}