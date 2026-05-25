



"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  BadgeCheck,
  Wrench,
} from "lucide-react";

export default function ComputerRentalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ================= COMPUTER RENTAL DATA =================
const rentalProducts = [
  {
    title: "Core i5 Computer on Rent",
    price: "₹1,999",
    originalPrice: "₹2,999",
    discount: 35,
    rating: 4.8,
    reviewCount: 124,
    badge: "Best Seller",
    tag: "Trending",
    stockStatus: "Available",
    specs: [
      "Intel Core i5 Processor",
      "4 - 8 GB RAM",
      "250 GB - 500 GB HDD",
      "10/100 MBPS LAN CARD",
      "Logitech Keyboard & Mouse",
      '18.5" TFT Screen',
    ],
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Core i7 Computer on Rent",
    price: "₹2,999",
    originalPrice: "₹4,499",
    discount: 40,
    rating: 4.9,
    reviewCount: 210,
    badge: "Premium",
    tag: "Hot Deal",
    stockStatus: "Limited",
    specs: [
      "Intel Core i7 Processor",
      "8 - 16 GB RAM",
      "500 GB - 1 TB HDD",
      "Graphics Card",
      "Logitech Keyboard & Mouse",
      '21.5" TFT Screen',
    ],
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Dual Core Computer on Rent",
    price: "₹999",
    originalPrice: "₹1,499",
    discount: 25,
    rating: 4.5,
    reviewCount: 86,
    badge: "Budget",
    tag: "Popular",
    stockStatus: "Available",
    specs: [
      "Intel Dual Core Processor",
      "2 - 4 GB RAM",
      "160 GB - 250 GB HDD",
      "LAN Card",
      "Logitech Keyboard & Mouse",
      '18" TFT Screen',
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Core i3 Computer on Rent",
    price: "₹1,499",
    originalPrice: "₹2,199",
    discount: 30,
    rating: 4.6,
    reviewCount: 102,
    badge: "Office Use",
    tag: "Trending",
    stockStatus: "Available",
    specs: [
      "Intel Core i3 Processor",
      "4 - 8 GB RAM",
      "160 GB - 250 GB HDD",
      "LAN Card",
      "Logitech Keyboard & Mouse",
      '18" TFT Screen',
    ],
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Gaming Computer on Rent",
    price: "₹5,999",
    originalPrice: "₹8,999",
    discount: 45,
    rating: 5.0,
    reviewCount: 320,
    badge: "Gaming Beast",
    tag: "Hot Deal",
    stockStatus: "Limited",
    specs: [
      "High Performance CPU",
      "16 - 32 GB RAM",
      "RTX Graphics Card",
      "1 TB SSD",
      "RGB Gaming Setup",
      "Editing & Gaming Ready",
    ],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Customized Desktop Rental",
    price: "Custom Pricing",
    originalPrice: "₹12,999",
    discount: 20,
    rating: 4.7,
    reviewCount: 65,
    badge: "Enterprise",
    tag: "Custom",
    stockStatus: "Available",
    specs: [
      "Custom RAM & SSD",
      "Intel / AMD Processor",
      "Business Ready Setup",
      "Bulk Quantity Available",
      "Corporate Rental",
      "Flexible Duration",
    ],
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=1200",
  },
];

  // ================= REPAIR SERVICES =================

  const repairServices = [
    "Motherboard Repair",
    "SMPS Replacement",
    "RAM Upgrade",
    "SSD Installation",
    "Windows Installation",
    "Data Recovery",
    "Virus Removal",
    "Desktop Cleaning Service",
    "Overheating Fix",
    "Graphics Card Installation",
    "Power Supply Repair",
    "Gaming PC Repair",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-180px] right-[-120px] w-[420px] h-[420px] bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-180px] left-[-120px] w-[420px] h-[420px] bg-cyan-500/20 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* BACK BUTTON */}
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8"
          >
            <ArrowLeft size={18} />
            Back To Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-[11px] font-black uppercase tracking-[0.2em] mb-6"
              >
                <Monitor size={15} />
                Computer Rental Services
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-[#0A1628] dark:text-white mb-6">
                Computer
                <span className="text-[#0057FF]"> On Rent.</span>
              </h1>

              <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                The Computer offers great performance and speed for all your
                important projects.
                <br />
                <br />
                We provide high-quality Desktop Computers on Rent with
                customized configurations for business, corporate training,
                events, gaming, editing and project requirements.
                <br />
                <br />
                From Dual Core Computers to ultra-fast Core i7
                high-performance desktops, we provide reliable and
                cost-effective Computer Rental Solutions with flexible daily,
                weekly, monthly & yearly rental plans.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs flex items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  Rent Computer
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-4 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-black uppercase tracking-wider text-xs hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  Quick Quote
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5000+", label: "Desktops" },
                  { value: "24/7", label: "Support" },
                  { value: "1000+", label: "Bulk Orders" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm"
                  >
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                      {item.value}
                    </h3>

                    <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-slate-500 mt-2">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative h-[420px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/5ffe989386ff0cae1e3339805ba81431.jpg"
                  alt="Computer Rental"
                  fill
                  className="object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-2xl border border-slate-200 dark:border-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                    <BadgeCheck size={22} />
                  </div>

                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-sm md:text-base">
                      Trusted Rental Service
                    </p>

                    <p className="text-xs md:text-sm text-slate-500">
                      Dell • HP • Lenovo • Asus
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= RENTAL PRODUCTS ================= */}

      <section
        id="catalog-grid"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Computer Rental Catalog
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Explore our desktop rental solutions for business, gaming,
              editing, office and corporate requirements.
            </p>
          </div>

          <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
            Matrix Slots: {rentalProducts.length} Items Available
          </div>
        </div>

        {/* GRID */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {rentalProducts.map((product, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
    >
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">

        {/* Product Image */}
        <img
          src={product.image}























          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">

          {product.tag && (
            <span
              className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg ${
                product.tag === "Trending"
                  ? "bg-cyan-500"
                  : product.tag === "Hot Deal"
                  ? "bg-blue-600"
                  : "bg-indigo-600"
              }`}
            >
              {product.tag}
            </span>
          )}

          {product.stockStatus && (
            <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              {product.stockStatus}
            </span>
          )}
        </div>

        {/* PRICE BADGE */}
        <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg border border-white">
          {product.price}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col min-h-[420px]">

        {/* TITLE */}
        <div className="min-h-[92px] mb-5">
          <h3 className="text-lg leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
            {product.title}
          </h3>
        </div>

        {/* RATINGS */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            {product.rating}
            <span>★</span>
          </div>

          <span className="text-sm text-slate-500 font-semibold">
            ({product.reviewCount} Reviews)
          </span>
        </div>

        {/* PRICE SECTION */}
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap">

            <span className="text-3xl font-black text-slate-900">
              {product.price}
            </span>

            <span className="text-base text-slate-400 line-through">
              {product.originalPrice}
            </span>
          </div>

          {/* OFFER BADGES */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">

            <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
              {product.discount}% OFF
            </span>

            {product.badge && (
              <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* SPECS */}
        <div className="space-y-2 mb-8">
          {product.specs.map((spec, i) => (
            <div
              key={i}
              className="text-sm text-slate-600 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              {spec}
            </div>
          ))}
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
    </div>
  ))}
</div>
      </section>

      {/* ================= REPAIR SERVICES ================= */}

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
                Computer
                <span className="text-blue-600"> Repair </span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {repairServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5"
                  >
                    <Wrench
                      size={18}
                      className="text-blue-600 flex-shrink-0"
                    />

                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[650px] rounded-[3rem] overflow-hidden border-[10px] border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="/5ffe989386ff0cae1e3339805ba81431.jpg"
                alt="Computer Repair"
                fill
                className="object-cover"
              />
            </div>
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
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* LEFT */}
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-6">
                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Rental Duration</option>
                      <option>1 Day</option>
                      <option>1 Week</option>
                      <option>1 Month</option>
                      <option>6 Months</option>
                      <option>1 Year</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Requirement City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Computer Type</option>
                      <option>Core i3 Computer</option>
                      <option>Core i5 Computer</option>
                      <option>Core i7 Computer</option>
                      <option>Gaming Computer</option>
                      <option>Customized Desktop</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your project requirements, quantity, RAM, SSD, graphics card, rental duration etc..."
                    className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all">
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
