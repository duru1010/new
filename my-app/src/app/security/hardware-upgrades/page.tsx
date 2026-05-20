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

export default function HardwareUpgradePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ================= HARDWARE UPGRADE DATA =================

  const upgradeProducts = [
    {
      title: "RAM Upgrade",
      price: "Starting ₹999",
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

  // ================= WHY CHOOSE US =================

  const whyChoose = [
    {
      icon: <Cpu size={20} />,
      title: "Latest Hardware",
      desc: "We provide genuine latest generation hardware components.",
    },

    {
      icon: <ShieldCheck size={20} />,
      title: "Warranty Support",
      desc: "All hardware upgrades come with reliable warranty support.",
    },

    {
      icon: <Package size={20} />,
      title: "Bulk Upgrade Solutions",
      desc: "Upgrade office and corporate systems in bulk easily.",
    },

    {
      icon: <Headphones size={20} />,
      title: "Expert Support",
      desc: "Professional installation with quick customer support.",
    },
  ];

  // ================= SERVICES =================

  const upgradeServices = [
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

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 dark:text-white mb-6">
                Hardware
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
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

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPGRADE PRODUCTS ================= */}

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Hardware Upgrade
              <span className="text-blue-600"> Solutions.</span>
            </h2>

            <p className="max-w-3xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
              Upgrade your computer performance with advanced hardware
              solutions for gaming, office work, editing and business
              productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {upgradeProducts.map((item, index) => (
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

      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
                Hardware
                <span className="text-blue-600"> Upgrade Services.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {upgradeServices.map((service, index) => (
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
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=1400"
                alt="Hardware Upgrade"
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
                  <X size={22} />
                </button>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-[0.25em] mb-6">
                    Hardware Upgrade Form
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                    Request a
                    <br />
                    Quick Quotation.
                  </h2>

                  <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                    Fill your upgrade requirement details and our team will
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
                      <option>Select Upgrade Type</option>
                      <option>RAM Upgrade</option>
                      <option>SSD Upgrade</option>
                      <option>Graphics Card Upgrade</option>
                      <option>Processor Upgrade</option>
                      <option>Gaming PC Upgrade</option>
                      <option>Complete Hardware Upgrade</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Requirement City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Device Type</option>
                      <option>Desktop Computer</option>
                      <option>Gaming PC</option>
                      <option>Laptop</option>
                      <option>Workstation</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your upgrade requirements, current system specs, RAM, SSD, graphics card, processor etc..."
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