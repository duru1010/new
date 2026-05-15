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
} from "lucide-react";

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-bold mb-6">
              <Zap size={14} />
              Smart CCTV Surveillance
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Secure Your <br />
              Business With <br />
              <span className="text-blue-600">Smart CCTV</span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Professional CCTV camera installation with AI monitoring,
              remote mobile access, cloud backup, and enterprise-grade
              security systems.
            </p>

            <p className="mt-4 text-slate-500">
              ✔ HD Night Vision | ✔ Remote Access | ✔ Motion Detection |
              ✔ 24/7 Monitoring
            </p>

            
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
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
              className="hidden lg:block absolute -bottom-10 -left-10 w-52 rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1471&auto=format&fit=crop"
                width={300}
                height={300}
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900">
              CCTV Product Catalog
            </h2>

            <p className="text-slate-500 mt-4">
              Explore our advanced CCTV surveillance systems designed for
              offices, homes, industries, retail stores, and enterprises.
            </p>
          </div>

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
                {service.subItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -12 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="relative h-[420px] rounded-[2rem] overflow-hidden group shadow-xl"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="flex items-center gap-2 text-blue-300 mb-3">
                        {item.icon}

                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                          Security Solution
                        </span>
                      </div>

                      <h4 className="text-2xl font-black text-white">
                        {item.name}
                      </h4>

                      <p className="text-sm text-white/70 mt-2 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="mt-5 flex flex-col gap-3 opacity-100 md:opacity-0 md:translate-y-5 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                        <button
                          onClick={() => {
                            openModal();
                            window.location.hash = "get-started";
                          }}
                          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Hire Now <ArrowRight size={16} />
                        </button>

                        <Link
                          href={`/amc/${item.id}`}
                          className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                        >
                         Know More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FEATURES */}
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="rounded-3xl border border-slate-200 p-6">
                  <BellRing className="text-blue-600 mb-4" size={34} />

                  <h4 className="text-xl font-black text-slate-900">
                    Motion Detection Alerts
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Instant security notifications directly on your mobile app.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <Wifi className="text-blue-600 mb-4" size={34} />

                  <h4 className="text-xl font-black text-slate-900">
                    Remote Access
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Access your CCTV footage anytime from anywhere securely.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 p-6">
                  <ShieldCheck className="text-blue-600 mb-4" size={34} />

                  <h4 className="text-xl font-black text-slate-900">
                    Enterprise Security
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Advanced AI surveillance for commercial and industrial
                    use.
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