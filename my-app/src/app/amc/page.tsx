"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Monitor,
  BellRing,
  Wifi,
  Zap,
  Sparkles,
} from "lucide-react";
import { div } from "framer-motion/m";

// =========================
// DATA
// =========================

const detailedServices = [
  {
    id: "cctv",
    title: "Advanced CCTV & Surveillance Solutions",
    desc: "Smart CCTV camera systems with AI monitoring, remote access, and enterprise-grade security solutions.",
    subItems: [
      {
        id: "dome-camera",
        name: "Dome CCTV Camera",
        desc: "Indoor HD surveillance cameras with night vision and wide-angle coverage.",
        img: "/0812c27cd0a6d93af2b56d53c156fb96.jpg",
        icon: <Camera size={16} />,
      },
      {
        id: "bullet-camera",
        name: "Bullet CCTV Camera",
        desc: "Weatherproof outdoor CCTV cameras with long-distance monitoring.",
        img: "/6dcbe28f5d2072dae73bda1bf300242c.jpg",
        icon: <ShieldCheck size={16} />,
      },
      {
        id: "wireless-cctv",
        name: "Wireless CCTV",
        desc: "WiFi-enabled smart cameras with mobile app access.",
        img: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
        icon: <Wifi size={16} />,
      },
       {
        id: "wireless-cctv",
        name: "Wireless CCTV",
        desc: "WiFi-enabled smart cameras with mobile app access.",
        img: "/35b5f7cc65424ed0eec9ca5d6f6a5a86.jpg",
        icon: <Wifi size={16} />,
      },
     
    ],
  },
];

// =========================
// PAGE
// =========================

const CCTVPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#get-started") {
        setIsModalOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-32 pb-24">
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0057FF]/10 border border-[#0057FF]/20 text-[#0057FF] text-xs font-bold mb-6">
          <Sparkles size={14} />
          Smart CCTV Surveillance
        </div>
      </motion.div>

      <h1 className="text-5xl md:text-6xl font-black text-[#0A1628] dark:text-white leading-tight">
        Secure Your <br />
        Business With <br />
        <span className="text-[#0057FF]">Smart CCTV</span>
      </h1>

      <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
        Professional CCTV camera installation with AI monitoring,
        remote mobile access, cloud backup, and enterprise-grade
        security systems.
      </p>

      <p className="mt-4 text-slate-500 dark:text-slate-400">
        ✔ HD Night Vision | ✔ Remote Access | ✔ Motion Detection |
        ✔ 24/7 Monitoring
      </p>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-10">

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 bg-[#0057FF] text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20"
        >
          Get Started
          <ArrowRight size={18} />
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="/#contact"
          className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold flex items-center gap-2 shadow-lg text-[#0A1628] dark:text-white"
        >
          Contact Us
          <ArrowUpRight size={18} />
        </motion.a>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >

      <div className="rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative">

        <Image
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1471&auto=format&fit=crop"
          width={1000}
          height={700}
          className="w-full h-[560px] object-cover"
          alt="CCTV Security"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* TOP BADGE */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase">
              Live Monitoring
            </p>

            <h4 className="text-sm font-black text-slate-900">
              24/7 Active Surveillance
            </h4>
          </div>

        </div>

        {/* BOTTOM CARD */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5">

          <div className="flex items-center justify-between gap-4 flex-wrap">

            <div>
              <p className="text-white/70 text-sm">
                AI Powered Security System
              </p>

              <h3 className="text-white text-2xl font-black mt-1">
                Smart CCTV Protection
              </h3>
            </div>

            <div className="flex gap-3">

              <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-2xl">
                <p className="text-white text-lg font-black">4K</p>
                <span className="text-white/60 text-xs">
                  Ultra HD
                </span>
              </div>

              <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-2xl">
                <p className="text-white text-lg font-black">365</p>
                <span className="text-white/60 text-xs">
                  Days Backup
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
        className="hidden lg:block absolute -bottom-10 -left-10 w-52 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl"
      >

        <Image
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1471&auto=format&fit=crop"
          width={200}
          height={200}
          alt="Security Camera"
          className="w-full h-52 object-cover"
        />

      </motion.div>

    </motion.div>

  </div>
</section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          

          {detailedServices.map((service) => (
            <div key={service.id} className="space-y-10">
              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-500 mt-3 max-w-2xl">
                  {service.desc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
               {service.subItems.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
    }}
    className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500"
  >
    {/* Image Section */}
    <div className="relative h-[260px] overflow-hidden">

      <Image
        src={item.img}
        alt={item.name}
        fill
        loading="lazy"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Top Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Floating Badge */}
      <div className="absolute top-5 left-5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
          <div className="text-blue-600">
            {React.cloneElement(item.icon, { size: 16 })}
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
            Premium Service
          </span>
        </div>
      </div>

      {/* Number */}
      <div className="absolute top-5 right-5">
        <span className="text-5xl font-black text-white/70">
          0{index + 1}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">

      {/* Small Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-600">
          Smart Solution
        </span>
      </div>

      {/* Title */}
      <h4 className="text-2xl font-black text-slate-900 leading-tight">
        {item.name}
      </h4>

      {/* Description */}
      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
        {item.desc}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mt-5">

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Fast Service
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Expert Team
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Trusted Support
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <button
          onClick={() => {
            openModal();
            window.location.hash = "get-started";
          }}
          className="flex-1 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300"
        >
          Hire Now
          <ArrowRight size={16} />
        </button>

        <Link
          href={`/amc/${item.id}`}
          className="flex-1 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold flex items-center justify-center transition-all duration-300"
        >
          Know More
        </Link>

      </div>
    </div>

    {/* Hover Border Glow */}
    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none" />
  </motion.div>
))}
              </div>

              {/* FEATURES */}
            

<div className="grid md:grid-cols-3 gap-6 pt-8">

  <div className="rounded-3xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-[#0D1728]">
    <div className="w-14 h-14 rounded-2xl bg-[#0057FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
      <BellRing size={28} />
    </div>

    <h4 className="text-xl font-black text-[#0A1628] dark:text-white">
      Motion Detection Alerts
    </h4>

    <p className="text-slate-500 dark:text-slate-400 mt-2">
      Instant security notifications directly on your mobile app.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-[#0D1728]">
    <div className="w-14 h-14 rounded-2xl bg-[#0057FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
      <Wifi size={28} />
    </div>

    <h4 className="text-xl font-black text-[#0A1628] dark:text-white">
      Remote Access
    </h4>

    <p className="text-slate-500 dark:text-slate-400 mt-2">
      Access your CCTV footage anytime from anywhere securely.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-[#0D1728]">
    <div className="w-14 h-14 rounded-2xl bg-[#0057FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
      <ShieldCheck size={28} />
    </div>

    <h4 className="text-xl font-black text-[#0A1628] dark:text-white">
      Enterprise Security
    </h4>

    <p className="text-slate-500 dark:text-slate-400 mt-2">
      Advanced AI surveillance for commercial and industrial use.
    </p>
  </div>

</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      
    </div>
  );
};

export default CCTVPage;