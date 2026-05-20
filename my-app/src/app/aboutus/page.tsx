"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Target, 
  UserCheck, 
  HardDrive, 
  Shield, 
  Cpu, 
  Network, 
  Clock, 
  Award, 
  ThumbsUp 
} from "lucide-react";

// Structured Dataset
const partners = [
  { name: "HP", logo: "/hp.webp" },
  { name: "Acer", logo: "/acer-laptop-logo-8.07.39-PM.webp" },
  { name: "Asus", logo: "/asus-laptop-logo.webp" },
  { name: "iBall", logo: "/iball-laptop-logo.webp" },
  { name: "Intel", logo: "/intel-laptop-logo.png" },
  { name: "Lenovo", logo: "/lenovo-laptop-logo.png" },
  { name: "Microsoft", logo: "/microsoft-laptop-logo.webp" },
  { name: "MSI", logo: "/msi-laptop-logo.webp" },
  { name: "Sony VAIO", logo: "/sony-vaio-laptop-logo.png" },
];

const coreValues = [
  {
    icon: Shield,
    title: "Uncompromising Security",
    desc: "Protecting business data assets and endpoints with next-generation network architecture and active threat prevention.",
  },
  {
    icon: Clock,
    title: "Proactive Up-Time",
    desc: "Minimizing organizational downtime through optimized physical builds and rapid-response local technical support engineering.",
  },
  {
    icon: Award,
    title: "Enterprise Rigor",
    desc: "Deploying high-performance workstations, computing clusters, and storage infrastructure tailored to business scaling demands.",
  },
];

const specializations = [
  {
    icon: Network,
    title: "Network Architecture",
    desc: "End-to-end routing configurations, clean server rack physical deployments, and secure, high-speed office connectivity layouts.",
  },
  {
    icon: Cpu,
    title: "Hardware Lifecycle",
    desc: "Premium direct wholesale supply channels for professional workstations, enterprise laptops, components, and computing units.",
  },
  {
    icon: HardDrive,
    title: "Data System Arrays",
    desc: "Robust localized physical storage engineering (NAS/SAN) and custom cloud backup architectures maximizing fault tolerance.",
  },
];

const timelineEvents = [
  { year: "2012", title: "Inception", desc: "Softlink Computers was founded by Nagesh Salunke to solve regional gaps in elite systems support." },
  { year: "2017", title: "Enterprise Shift", desc: "Expanded core competencies beyond simple sales into complex managed physical layout networks." },
  { year: "2022", title: "Security Protocols", desc: "Inaugurated deep system integration tiers addressing cloud security and localized enterprise threat controls." },
  { year: "Present", title: "Pune IT Bench", desc: "Serving as a trusted technology roadmap architecture partner for growing SMBs operating across Maharashtra." },
];

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-white to-white dark:from-[#0A1628] dark:via-[#0B1B33] dark:to-[#0A1628]">
        {/* Abstract Background Blur Nodes */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0057FF]/10 dark:bg-[#0057FF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Large Aesthetic Watermark Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] select-none pointer-events-none">
          <h1 className="text-[12rem] md:text-[24rem] font-black tracking-tighter">
            SOFTLINK
          </h1>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0057FF] font-bold uppercase tracking-[0.4em] text-xs mb-4 bg-[#0057FF]/10 dark:bg-[#0057FF]/20 px-4 py-1.5 rounded-full inline-block">
              Softlink Computers
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black leading-tight tracking-tight"
          >
            Trusted IT Infrastructure <br />
            <span className="text-[#0057FF] bg-gradient-to-r from-[#0057FF] to-indigo-500 bg-clip-text text-transparent">
              & Security Experts
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Delivering high-performance hardware configurations, complex network architecture, and robust 
            security design solutions since 2012 for physical workspaces across Pune.
          </motion.p>
        </div>
      </section>

      {/* ================= BIOGRAPHY / PROFILE SECTION ================= */}
      <section className="py-24 relative border-t border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT COLUMN: NARRATIVE CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-[#0057FF] uppercase tracking-widest">Our Legacy</h2>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Pioneering Technical Operations Across Pune City
              </motion.h3>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Under the direct engineering leadership of <span className="text-[#0057FF] font-bold">Nagesh Salunke</span>, 
              Softlink Computers has consistently graduated its functional scope. We operate at the intersection of high 
              system durability and modular business growth metrics.
            </p>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              From provisioning high-productivity workspaces with tailored internal hardware specs to executing 
              enterprise deployments inside complex local server frames, we map your workflows down to the last cable node.
            </p>

            {/* TWO-COLUMN QUICK INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.04)" }}
                className="p-6 rounded-3xl bg-[#F0F4FF] dark:bg-white/5 border border-slate-100 dark:border-white/10 transition-all duration-200"
              >
                <Target className="text-[#0057FF] mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  To secure industrial-strength IT configurations combined with efficient operational budgeting and highly responsive onsite tier support.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-[#0057FF] text-white shadow-xl shadow-[#0057FF]/20 dark:shadow-none transition-all duration-200"
              >
                <HardDrive className="mb-4 text-blue-200" size={32} />
                <h4 className="font-bold text-xl mb-2">Our Edge</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  Deep procedural expertise across hardware system parameters, layout configurations, and localized infrastructure protection arrays.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: REFINED IMAGE & FLOATING PROFILE CARD */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0057FF]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] w-full"
              >
                {/* Optimized Next.js Native Image Loader component */}
                <Image
                  src="/03e03551e4a38636a3bbd8e8a340a7f1.jpg"
                  alt="Softlink Computers Technical Management Headshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Suspended Frosted Acrylic Interaction Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/70 dark:bg-[#0A1628]/70 backdrop-blur-xl p-5 rounded-2xl border border-white/40 dark:border-white/15 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-[#0057FF] rounded-xl text-white">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-base">Nagesh Salunke</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs tracking-wider uppercase font-bold">Founder & Managing Director</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                  <ThumbsUp size={12} />
                  Est. 2012
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VALUES STRATEGY SECTION ================= */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B1B33]/40 border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#0057FF] uppercase tracking-widest mb-3">Operational DNA</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Engineered For Performance</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-4">
              We guide every corporate maintenance contract and hardware supply run via absolute metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#0A1628] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0057FF]/10 text-[#0057FF] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{val.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZATION HUB SECTION ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-xs font-bold text-[#0057FF] uppercase tracking-widest">Our Fleet</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Capability Breakdown</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Softlink Computers maps out full hardware supply chains combined with precision internal engineering parameters.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {specializations.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl border border-slate-100 dark:border-white/5 bg-gradient-to-b from-white to-slate-50/50 dark:from-[#0A1628] dark:to-[#0B1B33]/30 hover:border-[#0057FF]/30 dark:hover:border-[#0057FF]/30 transition-all duration-200"
                  >
                    <Icon className="text-[#0057FF] mb-4" size={28} />
                    <h4 className="font-bold text-base mb-2">{spec.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{spec.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ================= TIMELINE CHRONOLOGY SECTION ================= */}
      <section className="py-24 bg-slate-50 dark:bg-[#0B1B33]/40 border-t border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-[#0057FF] uppercase tracking-widest mb-3">Our History</h2>
            <h3 className="text-3xl md:text-4xl font-bold">The Strategic Expansion Timeline</h3>
          </div>

          <div className="grid sm:grid-cols-4 gap-8 relative">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative space-y-3">
                <div className="text-4xl font-black text-[#0057FF]/20 dark:text-[#0057FF]/30 font-mono">
                  {event.year}
                </div>
                <div className="h-1 bg-gradient-to-r from-[#0057FF] to-transparent w-16 rounded-full" />
                <h4 className="font-bold text-lg pt-2">{event.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM PARTNERS SECTION ================= */}
      <section className="py-20 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1628]">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-xs font-bold text-[#0057FF] uppercase tracking-widest mb-3">Alliances</h2>
          <h3 className="text-2xl md:text-3xl font-bold">Authorized Distribution Partners</h3>
          <p className="text-sm text-slate-400 mt-2">Integrating clean hardware builds directly supported by regional tier-1 tech networks.</p>
        </div>

        {/* Global Logo Grayscale-to-Color Responsive Matrix Grid */}
        <div className="container mx-auto px-6 grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-center opacity-60 dark:opacity-40 hover:opacity-100 dark:hover:opacity-90 transition-opacity duration-300">
          {partners.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.12, y: -4 }}
              className="flex justify-center relative h-10 w-full"
            >
              <Image
                src={p.logo}
                alt={`${p.name} hardware distribution alliance - Softlink Computers`}
                fill
                sizes="(max-width: 768px) 33vw, 11vw"
                className="object-contain filter grayscale dark:invert transition-all duration-200 hover:grayscale-0 dark:hover:invert-0"
              />
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}