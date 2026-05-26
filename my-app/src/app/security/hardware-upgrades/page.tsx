"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Headphones,
  Package,
  Wrench,
  Settings2,
  X,
} from "lucide-react";


export default function ComputerRentalPage() {
  // ================= STATES =================

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
  // ================= HARDWARE UPGRADE DATA =================

  const upgradeProducts = [
  {
    title: "RAM Upgrade",
    price: "Starting ₹999",
    originalPrice: "₹1499",
    discount: 35,
    rating: 4.8,
    reviewCount: 124,
    badge: "Best Seller",
    tag: "Trending",
    specs: [
      "DDR3 / DDR4 / DDR5 RAM",
      "4GB to 64GB Upgrade",
      "High-Speed Performance",
      "Gaming & Editing Ready",
      "Laptop & Desktop Support",
      "Fast Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "SSD Upgrade",
    price: "Starting ₹1499",
    originalPrice: "₹2499",
    discount: 40,
    rating: 4.9,
    reviewCount: 189,
    badge: "Fast Upgrade",
    tag: "Hot Deal",
    specs: [
      "SATA & NVMe SSD",
      "128GB to 2TB Options",
      "Ultra Fast Boot Speed",
      "Data Migration Support",
      "Laptop & Desktop Compatible",
      "Brand Warranty",
    ],
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Graphics Card Upgrade",
    price: "Request Quote",
    originalPrice: "₹5999",
    discount: 20,
    rating: 4.7,
    reviewCount: 88,
    badge: "Gaming Ready",
    tag: "Trending",
    specs: [
      "NVIDIA RTX Series",
      "AMD Radeon GPUs",
      "Gaming Performance",
      "4K Video Editing Support",
      "Custom Power Supply Setup",
      "Professional Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Processor Upgrade",
    price: "Request Quote",
    originalPrice: "₹7999",
    discount: 25,
    rating: 4.6,
    reviewCount: 75,
    badge: "Performance Boost",
    tag: "Popular",
    specs: [
      "Intel Core i3 / i5 / i7 / i9",
      "AMD Ryzen Upgrade",
      "Motherboard Compatibility",
      "Thermal Paste Installation",
      "Performance Optimization",
      "BIOS Configuration",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Gaming PC Upgrade",
    price: "Custom Pricing",
    originalPrice: "₹12999",
    discount: 30,
    rating: 5.0,
    reviewCount: 210,
    badge: "Ultimate Gaming",
    tag: "Hot Deal",
    specs: [
      "RGB Cabinet Setup",
      "Liquid Cooling Support",
      "High-End GPU Installation",
      "Gaming SSD Upgrade",
      "Cable Management",
      "Performance Tuning",
    ],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=1200",
  },

  {
    title: "Complete Hardware Upgrade",
    price: "Custom Pricing",
    originalPrice: "₹15999",
    discount: 45,
    rating: 4.9,
    reviewCount: 156,
    badge: "Full Setup",
    tag: "Trending",
    specs: [
      "RAM + SSD + CPU Upgrade",
      "Custom Configuration",
      "Office & Corporate Setup",
      "Bulk Upgrade Support",
      "Data Backup Available",
      "On-Site Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=1200",
  },
];

const upgradeServices: string[] = [
    "RAM Upgrade",
    "SSD Installation",
    "NVMe SSD Upgrade",
    "Processor Upgrade",
    "Graphics Card Installation",
    "Motherboard Upgrade",
    "Power Supply Replacement",
    "Cooling Fan Installation",
    "Liquid Cooling Setup",
    "Gaming PC Optimization",
    "Data Backup & Migration",
    "Performance Tuning",
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
                <Settings2 size={15} />
                Hardware Upgrade Services
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-[#0A1628] dark:text-white mb-6">
  Hardware
  <span className="text-[#0057FF]">
    {" "}
    Upgrade.
  </span>
</h1>

              <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Upgrade your computer or laptop performance with premium
                hardware solutions.
                <br />
                <br />
                We provide professional RAM upgrades, SSD installation,
                graphics card upgrades, processor replacement and complete
                gaming PC customization services.
                <br />
                <br />
                Whether you need faster boot speed, better gaming
                performance, smoother editing or office productivity, our
                expert team delivers reliable hardware upgrade solutions.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs flex items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  Upgrade Hardware
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
                  { value: "5000+", label: "Upgrades" },
                  { value: "24/7", label: "Support" },
                  { value: "100%", label: "Genuine Parts" },
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
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1400"
                  alt="Hardware Upgrade"
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
                      Professional Upgrade Service
                    </p>

                    <p className="text-xs md:text-sm text-slate-500">
                      RAM • SSD • GPU • CPU
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}

      

      {/* ================= UPGRADE PRODUCTS ================= */}

      {/* ================= UPGRADE PRODUCTS ================= */}

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
      {upgradeProducts.length} Upgrade Services Available
    </div>
  </div>

  {/* GRID */}
  {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {upgradeProducts.map((item, index) => (
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

      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-tight">
          Hardware
          <span className="text-blue-600"> Upgrade </span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
           {upgradeServices.map((service: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                <Wrench
                  size={18}
                  className="text-blue-600 flex-shrink-0"
                />
              </div>

              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[650px] w-full rounded-[3rem] overflow-hidden border-[10px] border-white dark:border-slate-800 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=1400"
          alt="Hardware Upgrade"
          fill
          priority
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
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center"
          >
            ✕
          </button>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Request a Quick Quotation.
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* LEFT */}
            <div className="space-y-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
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
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
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
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
              />

              <select
                name="computerType"
                value={formData.computerType}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900"
                required
              >
                <option value="">Select Upgrade Type</option>
                <option>RAM Upgrade</option>
                <option>SSD Upgrade</option>
                <option>Graphics Card Upgrade</option>
                <option>Processor Upgrade</option>
                <option>Gaming PC Upgrade</option>
                <option>Complete Hardware Upgrade</option>
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
              placeholder="Describe your requirements..."
              className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900"
              required
            />
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black"
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

