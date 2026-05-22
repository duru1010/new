"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Database,
  Wifi,
  Laptop,
  Crown,
  Check,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";

export default function AntivirusPage() {
  const [billing, setBilling] = useState("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const antivirusPlans = [
    {
      name: "Bitdefender Total Security",
      badge: "Best Overall",
      priceMonthly: "₹399",
      priceYearly: "₹3,999",
      color: "from-blue-500 to-cyan-400",
      popular: true,
      desc: "Top-rated antivirus with AI threat detection and lightweight performance.",
      features: [
        "AI Malware Detection",
        "Anti-Ransomware Protection",
        "VPN Included",
        "Multi Device Support",
        "Web Attack Protection",
      ],
    },
    {
      name: "Norton 360 Deluxe",
      badge: "Premium",
      priceMonthly: "₹599",
      priceYearly: "₹5,999",
      color: "from-purple-500 to-blue-500",
      desc: "All-in-one security suite for families and professionals.",
      features: [
        "Smart Firewall",
        "Dark Web Monitoring",
        "Cloud Backup",
        "Password Manager",
        "Parental Control",
      ],
    },
    {
      name: "McAfee Total Protection",
      badge: "Family Pack",
      priceMonthly: "₹499",
      priceYearly: "₹4,799",
      color: "from-red-500 to-orange-400",
      desc: "Unlimited devices protection with identity security tools.",
      features: [
        "Unlimited Devices",
        "Identity Protection",
        "Safe Web Browsing",
        "Ransomware Rollback",
        "Performance Boost",
      ],
    },
    {
      name: "Kaspersky Premium",
      badge: "Secure Banking",
      priceMonthly: "₹349",
      priceYearly: "₹3,499",
      color: "from-green-500 to-emerald-400",
      desc: "Strong banking protection and powerful malware defense.",
      features: [
        "Safe Money Banking Mode",
        "VPN Security",
        "Anti Phishing",
        "Privacy Protection",
        "System Optimization",
      ],
    },
    {
      name: "Avast One Essential",
      badge: "Free+Pro",
      priceMonthly: "₹199",
      priceYearly: "₹1,999",
      color: "from-yellow-500 to-orange-400",
      desc: "Lightweight antivirus with strong free protection layer.",
      features: [
        "Free Antivirus",
        "Network Inspector",
        "Firewall Protection",
        "Data Breach Alerts",
        "VPN (Limited)",
      ],
    },
    {
      name: "ESET Internet Security",
      badge: "Lightweight",
      priceMonthly: "₹299",
      priceYearly: "₹2,999",
    
      desc: "Ultra-light antivirus for fast systems and gamers.",
      features: [
        "Low System Usage",
        "Anti-Theft Protection",
        "Network Scanner",
        "Exploit Blocker",
        "Cloud Powered Scan",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F9FF] dark:bg-[#07111F] text-black dark:text-white">

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-[#0A1628] dark:text-white"
        >
          Antivirus
          <span className="block text-[#0057FF]">
            Software Plans
          </span>
        </motion.h1>

        <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl text-lg">
          Choose the best protection for your devices — Windows, Mac & Business security solutions.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
         <button
                     onClick={() => setIsModalOpen(true)}
                     className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-0.5"
                   >
                     Get Started
                     <ArrowRight size={18} />
                   </button>

          
        </div>
      </div>

      {/* RIGHT IMAGE */}
      {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2 }}
  className="relative flex justify-center lg:justify-end"
>
  <div className="absolute inset-0 bg-[#0057FF]/20 blur-3xl rounded-full" />

  <img
    src="/1c1914f4c03275e69d4d81e45a5cb480.jpg"
    alt="Antivirus Protection"
    className="relative z-10 w-[500px] max-w-xl lg:max-w-2xl object-contain -mt-6 lg:-mt-12"
  />
</motion.div>

    </div>
  </div>
</section>

{/* PLANS */}
<section className="py-20">
  <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {antivirusPlans.map((plan, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -10, scale: 1.02 }}
        className={`relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0D1728] border shadow-xl ${
          plan.popular
            ? "border-[#0057FF]"
            : "border-slate-200 dark:border-white/10"
        }`}
      >

        {plan.popular && (
          <div className="absolute top-5 right-5 px-4 py-2 text-xs font-bold bg-[#0057FF] text-white rounded-full flex items-center gap-1">
            <Crown size={14} /> Popular
          </div>
        )}

        <div className="p-8">
          <h3 className="text-2xl font-black mb-2">{plan.name}</h3>

          <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>

          <div className="mb-6">
            <span className="text-4xl font-black">
              {billing === "yearly"
                ? plan.priceYearly
                : plan.priceMonthly}
            </span>

            <span className="text-slate-500 ml-2">
              / {billing === "yearly" ? "year" : "month"}
            </span>
          </div>

          <div className="space-y-3 mb-8">
            {plan.features.map((f, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="text-[#0057FF]" size={16} />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setSelected(plan);
              setIsModalOpen(true);
            }}
            className="w-full py-3 rounded-2xl bg-[#0057FF] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            Get Protection
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    ))}

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
                         Microsoft 365 Inquiry
                       </div>
     
                       <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                         Request a
                         <br />
                         Microsoft 365 Quote.
                       </h2>
     
                       <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                         Fill your Microsoft 365 requirement details and our team
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
                           <option>Select Microsoft Plan</option>
                           <option>Business Basic</option>
                           <option>Business Standard</option>
                           <option>Business Premium</option>
                         </select>
     
                         <input
                           type="text"
                           placeholder="Requirement City"
                           className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         />
     
                         <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                           <option>Select Requirement</option>
                           <option>New Microsoft 365 Setup</option>
                             <option>Microsoft 365 Migration</option>
                           <option>Teams Deployment</option>
                         </select>
                       </div>
                     </div>
     
                     {/* TEXTAREA */}
                     <div className="mt-8">
                       <textarea
                         rows={6}
                         placeholder="Describe your business requirement..."
                         className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                       />
                     </div>
     
                     {/* BUTTON */}
                     <div className="flex flex-wrap gap-4 mt-10">
                       <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all">
                         Submit Inquiry
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