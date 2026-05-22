"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Laptop,
  Cpu,
  Monitor,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  BadgeCheck,
  Headphones,
  Package,
} from "lucide-react";

export default function LaptopRepairRentalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rentalProducts = [
    {
      title: "Core i9 Laptop on Rent",
      price: "Request Quote",
      specs: [
        "Core i9",
        "10th / 11th / 12th / 13th Gen",
        "16 GB RAM",
        "Up to 1 TB SSD",
        "RTX 3060 6 GB Graphics",
        '16" FHD / Web Cam / WiFi',
      ],
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Gaming Laptop on Rent",
      price: "₹6999 / Month",
      specs: [
        "Core i9 11th Gen",
        "16 GB RAM",
        "512 GB SSD",
        "RTX 2070 8GB",
        '15.6" FHD Display',
        "Dell / Asus / Lenovo",
      ],
      image:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Core i7 Laptop on Rent",
      price: "₹3999 / Month",
      specs: [
        "Core i7",
        "16 GB RAM",
        "512 GB SSD",
        "RTX 3060 6 GB",
        '16" QHD Display',
        "WiFi + Webcam",
      ],
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Core i5 Laptop on Rent",
      price: "₹1890 / Month",
      specs: [
        "Core i5",
        "16 GB RAM",
        "256 GB SSD",
        "RTX 2050 4 GB",
        '14" HD Display',
        "Webcam + WiFi",
      ],
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Core i3 Laptop on Rent",
      price: "₹1000 / Month",
      specs: [
        "Core i3 Processor",
        "4-8 GB RAM",
        "250 GB HDD",
        "LAN Card",
        '14"-15" Screen',
        "WiFi + Webcam",
      ],
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "AMD Ryzen 5 Laptop",
      price: "Request Quote",
      specs: [
        "Ryzen 5 Processor",
        "8-16 GB RAM",
        "512GB SSD - 1TB SSD",
        "Radeon Graphics",
        '16.1" FHD Screen',
        "Webcam + WiFi",
      ],
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const repairServices = [
    "Laptop Screen Replacement",
    "Motherboard Repair",
    "Keyboard Replacement",
    "Battery Replacement",
    "Charging Port Repair",
    "SSD & RAM Upgrade",
    "Windows Installation",
    "Data Recovery",
    "Virus Removal",
    "Laptop Cleaning Service",
    "Overheating Issue Fix",
    "Gaming Laptop Repair",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-hidden">
      {/* HERO */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
  {/* BACKGROUND BLUR */}
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
      {/* LEFT CONTENT */}
      <div>
        {/* TAG */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-[11px] font-black uppercase tracking-[0.2em] mb-6"
        >
          <Laptop size={15} />
          Laptop Rental & Repair
        </motion.div>

        {/* HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-[#0A1628] dark:text-white mb-6">
  Get Laptop{" "}
  <span className="text-[#0057FF]">
    On Rent.
  </span>
</h1>

        {/* DESCRIPTION */}
        <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
          Boost your Business Success and establish a strong online
          presence swiftly with premium Laptop Rentals from{" "}
          <span className="font-bold text-blue-600">softlink</span>.
          <br />
          <br />
          We specialize in offering a diverse range of high-quality
          laptops on rent including leading brands like Dell, HP, Asus,
          Apple, Lenovo, and more.
          <br />
          <br />
          Our extensive inventory includes everything from Dual Core
          laptops to ultra-fast Core Ultra 9 & high-performance
          workstation configurations.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            Rent Laptop
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-7 py-4 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-black uppercase tracking-wider text-xs hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            Repair Service
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "10K+", label: "Laptops" },
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

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* IMAGE CARD */}
        <div className="relative h-[420px] md:h-[500px] rounded-[2.5rem] overflow-hidden border-[8px] border-white dark:border-slate-800 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1400"
            alt="Laptop Rental"
            fill
            className="object-cover"
          />
        </div>

        {/* FLOATING CARD */}
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
                Dell • HP • Lenovo • Apple
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* WHY RENT */}
      

      {/* RENTAL PRODUCTS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rentalProducts.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <span className="text-blue-600 font-black text-sm">
                      {item.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-blue-600"
                        />

                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all"
                  >
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR SERVICES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
                Laptop
                <span className="text-blue-600"> Repair Services.</span>
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
                src="/1c568e7a37d7969b9ec210f09872e17e.jpg"
                alt="Laptop Repair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTATION / LEAD FORM MODAL */}
     {/* QUOTATION / LEAD FORM MODAL */}
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
          {/* SECTION TITLE */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
              ABOUT YOUR RENTAL REQUIREMENTS?
            </h3>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Be sure to tell us any other need or specifications required!
              Also, please describe your event or project so that we can
              recommend the best rental equipment and service to fit your
              needs!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  Full Name *
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  What best describes You / Company? *
                </label>

                <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Company Type</option>
                  <option>Individual</option>
                  <option>Startup</option>
                  <option>Corporate Company</option>
                  <option>College / Institute</option>
                  <option>Event Organizer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  E-Mail ID *
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  Rental Duration *
                </label>

                <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Duration</option>
                  <option>1 Day</option>
                  <option>1 Week</option>
                  <option>1 Month</option>
                  <option>6 Months</option>
                  <option>1 Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  Requirement City *
                </label>

                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                  Product Configuration
                </label>

                <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Laptop</option>
                  <option>Core i3 Laptop</option>
                  <option>Core i5 Laptop</option>
                  <option>Core i7 Laptop</option>
                  <option>Core i9 Laptop</option>
                  <option>Gaming Laptop</option>
                  <option>MacBook</option>
                  <option>Workstation</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
              Additional Requirement / Specifications
            </label>

            <textarea
              rows={6}
              placeholder="Describe your project, rental duration, preferred specs, RAM, SSD, graphics card, quantity etc..."
              className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* BUTTONS */}
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