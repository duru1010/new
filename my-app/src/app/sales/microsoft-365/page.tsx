"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Check,
  ShieldCheck,
  Cloud,
  Users,
  Monitor,
  Star,
  Mail,
  Calendar,
  FileText,
  Video,
  Database,
  Lock,
  Zap,
  Crown,
} from "lucide-react";

export default function Microsoft365Page() {
  const [billing, setBilling] = useState("monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Microsoft 365 Business Basic",
      badge: "Lite",
      priceMonthly: "₹145",
      priceYearly: "₹1,499",
      desc: "Professional cloud productivity for startups and small teams.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Business Email",
        "Microsoft Teams",
        "1TB OneDrive Storage",
        "Web & Mobile Office Apps",
        "SharePoint Access",
      ],
    },
    {
      name: "Microsoft 365 Business Standard",
      badge: "Prime",
      priceMonthly: "₹660",
      priceYearly: "₹6,999",
      desc: "Complete productivity suite for growing businesses.",
      color: "from-indigo-600 to-violet-500",
      popular: true,
      features: [
        "Desktop Office Apps",
        "Teams & Outlook",
        "Exchange Email Hosting",
        "Office Collaboration",
        "Premium Security",
      ],
    },
    {
      name: "Microsoft 365 Business Premium",
      badge: "Mega",
      priceMonthly: "₹1,250",
      priceYearly: "₹13,499",
      desc: "Advanced security, device management and productivity.",
      color: "from-purple-600 to-pink-500",
      features: [
        "Advanced Threat Protection",
        "Device Management",
        "Enterprise-grade Security",
        "Full Desktop Apps",
        "Cloud Backup & Protection",
      ],
    },
  ];

  const catalog = [
    {
      title: "Office Applications",
      icon: <Monitor size={26} />,
      items: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Outlook",
        "Microsoft OneNote",
      ],
    },
    {
      title: "Cloud Services",
      icon: <Cloud size={26} />,
      items: [
        "OneDrive Cloud Storage",
        "SharePoint",
        "Exchange Online",
        "Microsoft Azure Integration",
        "Cloud Security",
      ],
    },
    {
      title: "Collaboration Tools",
      icon: <Users size={26} />,
      items: [
        "Microsoft Teams",
        "Video Meetings",
        "Live Collaboration",
        "Shared Workspaces",
        "Business Communication",
      ],
    },
    {
      title: "Security & Protection",
      icon: <ShieldCheck size={26} />,
      items: [
        "Advanced Security",
        "Multi-Factor Authentication",
        "Data Encryption",
        "Threat Protection",
        "Endpoint Security",
      ],
    },
  ];

  const features = [
    {
      icon: <Mail size={24} />,
      title: "Business Email",
      desc: "Professional custom email hosting with Outlook integration.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Smart Scheduling",
      desc: "Manage meetings, calendars and tasks across your organization.",
    },
    {
      icon: <Video size={24} />,
      title: "Teams Meetings",
      desc: "HD meetings, webinars and team collaboration tools.",
    },
    {
      icon: <FileText size={24} />,
      title: "Office Apps",
      desc: "Premium Word, Excel and PowerPoint applications.",
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Storage",
      desc: "Secure OneDrive storage with automatic backup.",
    },
    {
      icon: <Lock size={24} />,
      title: "Enterprise Security",
      desc: "Advanced protection against threats and cyber attacks.",
    },
  ];

  // Additional overview items requested in the ecosystem description
  const ecosystemOverview = [
    {
      name: "Azure",
      desc: "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges."
    },
    {
      name: "Dynamics 365",
      desc: "Dynamics 365 is a set of intelligent cloud-based business applications combining CRM, ERP, and Mixed Reality with Microsoft Power Platform."
    },
    {
      name: "Microsoft 365",
      desc: "The productivity cloud that brings together best-in-class Office apps, intelligent cloud services, and advanced security to help you achieve more."
    },
    {
      name: "Office & Office 365",
      desc: "Get the latest Office desktop and mobile apps, plus integrated collaboration services, coupled with advanced compliance features and full IT power."
    },
    {
      name: "Power Platform",
      desc: "Accelerate innovation and deploy impactful solutions faster with Microsoft Power Platform."
    },
    {
      name: "SQL Server",
      desc: "Build intelligent, mission-critical applications using a scalable, hybrid database platform."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-500/10 to-purple-500/10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-bold mb-8"
                >
                  <Cloud size={16} />
                  Microsoft Certified Solutions
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-8"
                >
                  Microsoft
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                    365 Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-6"
                >
                  The productivity cloud that brings together best-in-class Office apps, intelligent cloud services, and advanced security to help you achieve more. Empower your business with Microsoft 365 productivity tools, cloud collaboration, enterprise-grade security and professional business email solutions.
                </motion.p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2 transition-all"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>

                  <Link
                    href="#plans"
                    className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 hover:border-indigo-500 font-bold transition-all"
                  >
                    View Plans
                  </Link>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 rounded-full" />

                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/9f65e0094e0172fd3bccd9fc3306d514.jpg"
                    alt="Microsoft 365"
                    width={900}
                    height={700}
                    className="w-full h-[520px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM INTEGRATION OVERVIEW */}
        <section className="py-16 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-white/5">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase block mb-2">Connected Ecosystem</span>
              <h2 className="text-3xl font-black tracking-tight">The Microsoft Enterprise Platform</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemOverview.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-sm">
                  <h4 className="font-black text-xl mb-2 text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                  <button onClick={() => setIsModalOpen(true)} className="text-xs font-bold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 hover:underline">
                    Learn more <ArrowRight size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Everything Your Business Needs
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Secure cloud productivity, communication and collaboration tools
                designed for modern organizations. Get the latest Office desktop and mobile apps, plus integrated collaboration services, coupled with advanced compliance features and full IT power.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6">
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

        {/* CATALOG */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
          <div className="container mx-auto px-6">

            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Microsoft 365 Catalog
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Explore productivity apps, collaboration platforms and enterprise
                cloud solutions included in Microsoft 365. Accelerate innovation and deploy impactful solutions faster with Microsoft Power Platform and hybrid data architectures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {catalog.map((cat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center">
                      {cat.icon}
                    </div>

                    <h3 className="text-3xl font-black">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900"
                      >
                        <div className="w-6 h-6 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0">
                          <Check size={14} />
                        </div>

                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section id="plans" className="py-24">
          <div className="container mx-auto px-6">

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Choose Your Plan
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                  Flexible Microsoft 365 plans designed for startups, SMEs and
                  enterprise organizations to build intelligent, mission-critical operations.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-2xl">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "monthly"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "yearly"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`relative rounded-[2.5rem] overflow-hidden border ${
                    plan.popular
                      ? "border-indigo-500 shadow-2xl"
                      : "border-slate-200 dark:border-white/10"
                  } bg-white dark:bg-slate-900`}
                >
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                      <Crown size={14} />
                      Most Popular
                    </div>
                  )}

                  <div className={`h-2 bg-gradient-to-r ${plan.color}`} />

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
                          <div className="w-6 h-6 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0">
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
                      className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                    Microsoft Ecosystem Inquiry
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                    Request a
                    <br />
                    Custom Cloud Quote.
                  </h2>

                  <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                    Fill your cloud requirement details regarding Microsoft 365, Azure, Dynamics 365, Power Platform or SQL Server, and our team will contact you shortly.
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
                      <option>Select Core Platform</option>
                      <option>Microsoft 365 (Basic/Standard/Premium)</option>
                      <option>Microsoft Azure Cloud Services</option>
                      <option>Dynamics 365 (CRM/ERP)</option>
                      <option>Power Platform Innovation</option>
                      <option>SQL Server Hybrid Databases</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Requirement City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select Requirement</option>
                      <option>New Setup & Licensing Deployment</option>
                      <option>Ecosystem Cloud Migration</option>
                      <option>Teams & Cross-App Integration</option>
                      <option>Custom Database & Analytics Architecture</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your enterprise or small business requirement across the Microsoft Cloud suite..."
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
    </>
  );
}