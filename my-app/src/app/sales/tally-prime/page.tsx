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
  Receipt,
  FileBarChart,
  Users,
  Crown,
  Zap,
  Lock,
  Briefcase,
  Calculator,
  Wallet,
  BarChart3,
  X,
} from "lucide-react";

export default function TallyPrimePage() {
  const [billing, setBilling] = useState("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Tally Prime Silver",
      badge: "Lite",
      priceMonthly: "₹750",
      priceYearly: "₹9,000",
      desc: "Single-user accounting solution for startups and small businesses.",
      color: "from-[#00BFFF] to-[#0080FF]",
      features: [
        "Single User Access",
        "GST Billing",
        "Inventory Management",
        "Accounting Reports",
        "Invoice Generation",
      ],
    },

    {
      name: "Tally Prime Gold",
      badge: "Prime",
      priceMonthly: "₹1,850",
      priceYearly: "₹21,600",
      desc: "Multi-user business accounting solution for growing enterprises.",
      color: "from-[#0080FF] to-[#005BFF]",
      popular: true,
      features: [
        "Multi User Access",
        "Advanced GST Reports",
        "Payroll Management",
        "Remote Access",
        "Business Analytics",
      ],
    },

    {
      name: "Tally Prime Enterprise",
      badge: "Mega",
      priceMonthly: "₹3,250",
      priceYearly: "₹38,000",
      desc: "Enterprise-grade accounting and inventory management platform.",
      color: "from-[#005BFF] to-[#003CFF]",
      features: [
        "Enterprise Security",
        "Branch Management",
        "Cloud Backup",
        "Advanced Reporting",
        "Priority Support",
      ],
    },
  ];

  const catalog = [
    {
      title: "Accounting Solutions",
      icon: <Calculator size={26} />,
      items: [
        "GST Billing",
        "Accounting Management",
        "Purchase & Sales",
        "Cash Flow Tracking",
        "Financial Statements",
      ],
    },

    {
      title: "Inventory Management",
      icon: <Database size={26} />,
      items: [
        "Stock Management",
        "Warehouse Tracking",
        "Batch Management",
        "Barcode Integration",
        "Inventory Reports",
      ],
    },

    {
      title: "Business Reports",
      icon: <BarChart3 size={26} />,
      items: [
        "Profit & Loss",
        "Balance Sheet",
        "GST Reports",
        "Tax Filing Reports",
        "Business Analytics",
      ],
    },

    {
      title: "Enterprise Features",
      icon: <ShieldCheck size={26} />,
      items: [
        "Data Security",
        "Remote Access",
        "User Permissions",
        "Cloud Backup",
        "Multi Branch Support",
      ],
    },
  ];

  const features = [
    {
      icon: <Receipt size={24} />,
      title: "GST Billing",
      desc: "Create GST invoices and tax-compliant billing instantly.",
    },

    {
      icon: <Wallet size={24} />,
      title: "Accounting",
      desc: "Manage ledgers, vouchers and complete accounting workflows.",
    },

    {
      icon: <Database size={24} />,
      title: "Inventory",
      desc: "Track inventory, warehouses and stock movement efficiently.",
    },

    {
      icon: <Users size={24} />,
      title: "Multi User Access",
      desc: "Allow multiple users to access and manage business data.",
    },

    {
      icon: <FileBarChart size={24} />,
      title: "Business Reports",
      desc: "Generate financial reports and business performance insights.",
    },

    {
      icon: <Lock size={24} />,
      title: "Secure Data",
      desc: "Enterprise-grade security and reliable business data protection.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#F8FBFF] dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 via-[#0080FF]/10 to-[#005BFF]/10" />

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0080FF]/20 blur-3xl rounded-full" />

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00BFFF]/20 blur-3xl rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* LEFT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 text-[#0080FF] text-sm font-bold mb-8 backdrop-blur-xl"
                >
                  <Briefcase size={16} />
                  Tally Certified Solutions
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-8"
                >
                  Tally
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#0080FF] to-[#005BFF]">
                    Prime Solutions
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
                >
                  Simplify your business accounting, GST billing, inventory
                  management and financial reporting with next-generation
                  Tally Prime solutions.
                </motion.p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 rounded-2xl bg-[#0080FF] hover:bg-[#005BFF] text-white font-bold flex items-center gap-2 transition-all duration-300 shadow-2xl shadow-[#0080FF]/40 hover:scale-105"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>

                  <Link
                    href="#plans"
                    className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 hover:border-[#0080FF] font-bold transition-all backdrop-blur-xl"
                  >
                    View Plans
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-[#005BFF] blur-3xl opacity-30 rounded-full" />

                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/236f93c5ddd54154df210333050523bd.jpg"
                    alt="Tally Prime"
                    width={900}
                    height={700}
                    className="w-full h-[520px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Powerful Business Management
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Complete accounting, inventory and GST management software
                designed for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="p-8 rounded-[2rem] bg-white/80 dark:bg-[#071028]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(0,128,255,0.2)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00BFFF] to-[#005BFF] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#0080FF]/40">
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
        <section className="py-24 bg-slate-50 dark:bg-[#071028]/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Tally Prime Catalog
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Explore accounting, GST billing and enterprise management
                features included in Tally Prime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {catalog.map((cat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2.5rem] bg-white/80 dark:bg-[#071028]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-[0_0_50px_rgba(0,128,255,0.25)] transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00BFFF] to-[#005BFF] text-white flex items-center justify-center shadow-xl shadow-[#0080FF]/40">
                      {cat.icon}
                    </div>

                    <h3 className="text-3xl font-black">{cat.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#0080FF]/10 text-[#0080FF] flex items-center justify-center shrink-0">
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
                  Flexible Tally Prime plans for startups, SMEs and enterprises.
                </p>
              </div>

              {/* TOGGLE */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-2xl">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "monthly"
                      ? "bg-[#0080FF] text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Monthly
                </button>

                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    billing === "yearly"
                      ? "bg-[#0080FF] text-white"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* PLAN CARDS */}
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className={`relative rounded-[2.5rem] overflow-hidden border hover:shadow-[0_0_50px_rgba(0,128,255,0.35)] transition-all duration-500 ${
                    plan.popular
                      ? "border-[#0080FF] shadow-2xl shadow-[#0080FF]/20"
                      : "border-slate-200 dark:border-white/10"
                  } bg-white/80 dark:bg-[#071028]/80 backdrop-blur-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#005BFF] text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
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
                          <div className="w-6 h-6 rounded-full bg-[#0080FF]/10 text-[#0080FF] flex items-center justify-center shrink-0">
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
                      className="w-full py-4 rounded-2xl bg-[#0080FF] hover:bg-[#005BFF] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-2xl shadow-[#0080FF]/30"
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
              className="max-w-5xl mx-auto bg-white dark:bg-[#071028] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              {/* HEADER */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#00BFFF] via-[#0080FF] to-[#005BFF] px-10 py-12">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
                >
                  <X size={22} />
                </button>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-[0.25em] mb-6">
                    Tally Prime Inquiry
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                    Request a
                    <br />
                    Tally Prime Quote.
                  </h2>

                  <p className="text-cyan-100 text-lg max-w-2xl leading-relaxed">
                    Fill your business requirement details and our team will
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
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-6">
                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]">
                      <option>Select Plan</option>
                      <option>Tally Prime Silver</option>
                      <option>Tally Prime Gold</option>
                      <option>Tally Prime Enterprise</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Business City"
                      className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]"
                    />

                    <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF]">
                      <option>Select Requirement</option>
                      <option>New Tally Setup</option>
                      <option>GST Billing</option>
                      <option>Inventory Management</option>
                      <option>Multi User Setup</option>
                    </select>
                  </div>
                </div>

                {/* TEXTAREA */}
                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your business requirement..."
                    className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0080FF] resize-none"
                  />
                </div>

                {/* BUTTON */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00BFFF] to-[#005BFF] text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-[#0080FF]/40 hover:scale-105 transition-all duration-300">
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