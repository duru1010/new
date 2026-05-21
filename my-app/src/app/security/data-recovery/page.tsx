"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Headphones,
  Package,
  Wrench,
  Database,
  ServerCrash,
  FileSearch,
  Laptop,
} from "lucide-react";

export default function DataRecoveryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ================= DATA RECOVERY SERVICES =================

  const recoveryProducts = [
    {
      title: "Hard Disk Data Recovery",
      price: "Starting ₹1499",
      specs: [
        "HDD Recovery Support",
        "Deleted File Recovery",
        "Corrupted Disk Repair",
        "Partition Recovery",
        "Desktop & Laptop HDD",
        "Fast Recovery Process",
      ],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },

    {
      title: "SSD Data Recovery",
      price: "Starting ₹2499",
      specs: [
        "NVMe SSD Recovery",
        "SATA SSD Recovery",
        "Corrupted SSD Repair",
        "Data Backup Support",
        "High Success Rate",
        "Professional Recovery",
      ],
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1200",
    },

    {
      title: "Laptop Data Recovery",
      price: "Request Quote",
      specs: [
        "Windows Laptop Recovery",
        "MacBook Data Recovery",
        "Formatted Drive Recovery",
        "Blue Screen Error Fix",
        "System Crash Recovery",
        "Quick Diagnostic",
      ],
      image:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=1200",
    },

    {
      title: "Pen Drive Recovery",
      price: "Starting ₹999",
      specs: [
        "USB Drive Recovery",
        "Deleted Photo Recovery",
        "Virus Affected Recovery",
        "Corrupted File Repair",
        "Document Recovery",
        "Secure Recovery",
      ],
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1200",
    },

    {
      title: "Server Data Recovery",
      price: "Custom Pricing",
      specs: [
        "RAID Recovery",
        "NAS Server Recovery",
        "Business Critical Data",
        "Enterprise Backup Support",
        "Secure Data Handling",
        "Emergency Recovery",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    },

    {
      title: "Complete Data Recovery",
      price: "Custom Pricing",
      specs: [
        "All Storage Device Support",
        "Photo & Video Recovery",
        "Office Data Recovery",
        "Business File Recovery",
        "Encrypted Drive Support",
        "Data Backup Solutions",
      ],
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  // ================= WHY CHOOSE =================

  // ================= RECOVERY SERVICES =================

  const recoveryServices = [
    "Deleted File Recovery",
    "Formatted Drive Recovery",
    "Corrupted HDD Repair",
    "SSD Data Recovery",
    "Laptop Data Recovery",
    "Server Recovery",
    "Pen Drive Recovery",
    "Photo Recovery",
    "Video Recovery",
    "Virus Affected Data Recovery",
    "RAID Recovery",
    "Backup Solutions",
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
                <Database size={15} />
                Data Recovery Services
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 dark:text-white mb-6">
                Data
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  {" "}
                  Recovery.
                </span>
              </h1>

              <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Recover your important files, business documents, photos,
                videos and office data with professional recovery solutions.
                <br />
                <br />
                We provide secure and reliable data recovery services for
                Hard Disk Drives, SSDs, laptops, pen drives, RAID servers
                and damaged storage devices.
                <br />
                <br />
                Whether your data is deleted, formatted, corrupted or lost
                due to system crash, our expert team helps recover your
                valuable information quickly and securely.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs flex items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  Recover Data
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
                  { value: "10K+", label: "Files Recovered" },
                  { value: "24/7", label: "Support" },
                  { value: "99%", label: "Recovery Success" },
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
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400"
                  alt="Data Recovery"
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
                      Secure Recovery Service
                    </p>

                    <p className="text-xs md:text-sm text-slate-500">
                      HDD • SSD • RAID • USB
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}

      

      {/* ================= RECOVERY PRODUCTS ================= */}

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {recoveryProducts.map((item, index) => (
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

      {/* ================= RECOVERY SERVICES ================= */}

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
                Data
                <span className="text-blue-600"> Recovery Services.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {recoveryServices.map((service, index) => (
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400"
                alt="Data Recovery"
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
                    Data Recovery Form
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                    Request a
                    <br />
                    Recovery Quote.
                  </h2>

                  <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                    Fill your data recovery requirement details and our team
                    will contact you shortly.
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
                      <option>Select Device Type</option>
                      <option>Hard Disk Drive</option>
                      <option>SSD Drive</option>
                      <option>Laptop</option>
                      <option>Pen Drive</option>
                      <option>Server / RAID</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Requirement City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Recovery Type</option>
                      <option>Deleted File Recovery</option>
                      <option>Formatted Drive Recovery</option>
                      <option>Corrupted Disk Recovery</option>
                      <option>Server Recovery</option>
                      <option>Photo / Video Recovery</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your issue, device type, deleted files, formatted drive, crash issue etc..."
                    className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all">
                    Submit Recovery Request
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