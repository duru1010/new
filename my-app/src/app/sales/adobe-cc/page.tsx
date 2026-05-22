"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Database,
  Lock,
  Crown,
  Zap,
  Briefcase,
  Globe,
  Laptop,
  Server,
  Shield,
  Wifi,
  Cloud,
  Fingerprint,
  X,
  Sparkles,
} from "lucide-react";

export default function QuickHealPage() {
  const [billing, setBilling] = useState("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);
const plans = [
  {
    name: "Adobe Photoshop Starter",
    badge: "Starter",
    priceMonthly: "₹799",
    priceYearly: "₹8,999",
    desc: "Perfect for beginners and basic photo editing projects.",
    color: "from-blue-500 to-blue-700",
    features: [
      "Photo Editing Tools",
      "Basic Retouching",
      "Layer Support",
      "AI Generative Fill",
      "Cloud Storage",
    ],
  },

  {
    name: "Adobe Photoshop Pro",
    badge: "Popular",
    priceMonthly: "₹1,499",
    priceYearly: "₹15,999",
    desc: "Professional editing suite for designers, photographers and creators.",
    color: "from-blue-600 to-cyan-500",
    popular: true,
    features: [
      "Advanced Retouching",
      "AI Image Generation",
      "Premium Filters",
      "RAW File Editing",
      "Multi Device Access",
    ],
  },

  {
    name: "Adobe Creative Cloud",
    badge: "Creative",
    priceMonthly: "₹2,499",
    priceYearly: "₹26,999",
    desc: "Complete Adobe creative suite with Photoshop, Illustrator and more.",
    color: "from-cyan-500 to-blue-700",
    features: [
      "Photoshop Included",
      "Illustrator Included",
      "Premiere Pro Included",
      "Cloud Sync",
      "Adobe Fonts Access",
    ],
  },

  {
    name: "Adobe Photoshop Business",
    badge: "Business",
    priceMonthly: "₹3,499",
    priceYearly: "₹36,999",
    desc: "Business-ready creative tools for agencies and design teams.",
    color: "from-blue-500 to-sky-500",
    features: [
      "Team Collaboration",
      "Enterprise Storage",
      "Admin Console",
      "Shared Libraries",
      "Commercial Licensing",
    ],
  },

  {
    name: "Adobe Photoshop Enterprise",
    badge: "Enterprise",
    priceMonthly: "₹5,999",
    priceYearly: "₹64,999",
    desc: "Enterprise-grade Adobe creative ecosystem with advanced management.",
    color: "from-blue-700 to-cyan-400",
    features: [
      "Enterprise Security",
      "Creative Cloud Suite",
      "Advanced Asset Management",
      "Priority Support",
      "Unlimited Collaboration",
    ],
  },

  {
    name: "Adobe Photoshop AI Studio",
    badge: "AI Powered",
    priceMonthly: "₹4,499",
    priceYearly: "₹48,999",
    desc: "AI-powered image editing and design workflow for modern creators.",
    color: "from-sky-500 to-blue-800",
    features: [
      "AI Generative Fill",
      "AI Background Removal",
      "Smart Object Editing",
      "AI Design Suggestions",
      "Ultra HD Export",
    ],
  },
];
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Real-Time Protection",
      desc: "Detect and block malware, spyware and ransomware instantly.",
    },

    {
      icon: <Lock size={24} />,
      title: "Safe Banking",
      desc: "Secure online banking and financial transactions with advanced encryption.",
    },

    {
      icon: <Globe size={24} />,
      title: "Web Security",
      desc: "Protect your devices from malicious websites and phishing attacks.",
    },

    {
      icon: <Fingerprint size={24} />,
      title: "Identity Protection",
      desc: "Protect sensitive business and customer information from cyber threats.",
    },

    {
      icon: <Server size={24} />,
      title: "Enterprise Security",
      desc: "Centralized management for enterprise-wide cybersecurity monitoring.",
    },

    {
      icon: <Cloud size={24} />,
      title: "Cloud Backup",
      desc: "Secure cloud backup and recovery solutions for critical data.",
    },
  ];

  const catalog = [
    {
      title: "Endpoint Security",
      icon: <Laptop size={26} />,
      items: [
        "Antivirus Protection",
        "Ransomware Security",
        "Device Optimization",
        "Firewall Protection",
        "USB Protection",
      ],
    },

    {
      title: "Network Security",
      icon: <Wifi size={26} />,
      items: [
        "WiFi Protection",
        "Network Monitoring",
        "Threat Detection",
        "Safe Browsing",
        "Secure Connectivity",
      ],
    },

    {
      title: "Data Protection",
      icon: <Database size={26} />,
      items: [
        "Data Encryption",
        "Cloud Backup",
        "File Recovery",
        "Privacy Protection",
        "Secure File Access",
      ],
    },

    {
      title: "Business Security",
      icon: <Briefcase size={26} />,
      items: [
        "Business Endpoint Security",
        "Multi User Access",
        "Admin Dashboard",
        "Threat Reports",
        "Remote Management",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F4F9FF] dark:bg-[#07111F] text-slate-900 dark:text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-40 pb-24 overflow-hidden">
  {/* BG EFFECTS */}
  

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      {/* LEFT */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold mb-8 backdrop-blur-xl"
        >
          <Sparkles size={16} />
          Adobe Certified Creative Suite
        </motion.div>

       <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-8 text-[#0A1628] dark:text-white"
>
  Adobe
  <span className="block text-[#0057FF]">
    Photoshop Suite
  </span>
</motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
        >
          Create stunning graphics, professional photo edits and AI-powered
          digital artwork with Adobe Photoshop creative solutions.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-cyan-500 text-white font-bold flex items-center gap-2 transition-all duration-300 shadow-2xl shadow-blue-500/40 hover:scale-105"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          <Link
            href="#plans"
            className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 hover:border-blue-500 font-bold transition-all backdrop-blur-xl"
          >
            View Plans
          </Link>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { value: "4K+", label: "Creative Assets" },
            { value: "24/7", label: "Cloud Sync" },
            { value: "50K+", label: "Designers" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-5 rounded-[2rem] bg-white/80 dark:bg-[#0D1728]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-black">
                {item.value}
              </h3>

              <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-500 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-30 rounded-full" />

        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src="/3b68ecaac42370efe5a73a830219f9a5.jpg"
            alt="Adobe Photoshop"
            width={900}
            height={700}
            className="w-full h-[520px] object-cover"
          />
        </div>

        {/* FLOATING CARD */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -bottom-8 -left-5 bg-white dark:bg-[#0D1728] rounded-[2rem] p-5 shadow-2xl border border-slate-200 dark:border-white/10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-blue-500/40">
              <Sparkles size={24} />
            </div>

            <div>
              <p className="font-black text-slate-900 dark:text-white">
                AI Creative Tools
              </p>

              <p className="text-sm text-blue-500">
                Editing • Retouching • Design
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>



        <section id="plans" className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Choose Your Protection
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  Flexible Quick Heal plans for individuals, startups and enterprises.
                </p>
              </div>

              {/* TOGGLE */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-2xl">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "monthly"
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "yearly"
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`relative rounded-[2.5rem] overflow-hidden border hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] transition-all duration-500 ${
                    plan.popular
                      ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                      : "border-slate-200 dark:border-white/10"
                  } bg-white/80 dark:bg-[#0D1728]/80 backdrop-blur-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <Crown size={14} />
                      Most Popular
                    </div>
                  )}


                  <div className="p-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-bold mb-6">
                      <Zap size={14} />
                      {plan.badge}
                    </div>

                    <h3 className="text-3xl font-black leading-tight mb-4">
                      {plan.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                      {plan.desc}
                    </p>

                    <div className="mb-8">
                      <span className="text-5xl font-black">
                        {billing === "monthly"
                          ? plan.priceMonthly
                          : plan.priceYearly}
                      </span>

                      <span className="text-slate-500 ml-2 font-medium">
                        / {billing === "monthly" ? "month" : "year"}
                      </span>
                    </div>

                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                            <Check size={14} />
                          </div>

                          <span className="text-slate-700 dark:text-slate-200 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-cyan-500 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-2xl shadow-blue-500/30"
                    >
                      Get Protected
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Advanced Cyber Protection
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Enterprise-grade antivirus, ransomware protection and business
                cybersecurity solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-8 rounded-[2rem] bg-white/80 dark:bg-[#0D1728]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/40">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS */}
        
      </div>

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
              className="max-w-5xl mx-auto bg-white dark:bg-[#0D1728] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              {/* HEADER */}
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 px-10 py-12">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
                >
                  <X size={22} />
                </button>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-[0.25em] mb-6">
                    Quick Heal Inquiry
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                    Request a
                    <br />
                    Security Quote.
                  </h2>

                  <p className="text-cyan-100 text-lg max-w-2xl leading-relaxed">
                    Fill your cybersecurity requirements and our experts will
                    contact you shortly.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
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

                  <div className="space-y-6">
                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Plan</option>
                      <option>Quick Heal Basic</option>
                      <option>Quick Heal Total Security</option>
                      <option>Quick Heal Enterprise</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Business City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Requirement</option>
                      <option>Antivirus Protection</option>
                      <option>Endpoint Security</option>
                      <option>Cloud Security</option>
                      <option>Enterprise Security</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your cybersecurity requirement..."
                    className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}