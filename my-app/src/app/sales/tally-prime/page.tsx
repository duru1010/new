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
    id: 1,
    name: "Tally Prime Silver",
    badge: "Lite",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200",
    rating: "4.7",
    reviewCount: 124,
    priceMonthly: "₹750",
    priceYearly: "₹9,000",
    originalPrice: "₹11,000",
    discount: 18,
    desc: "Single-user accounting solution for startups and small businesses.",
    color: "from-blue-500 to-blue-700",
    features: [
      "Single User Access",
      "GST Billing",
      "Inventory Management",
      "Accounting Reports",
      "Invoice Generation",
    ],
  },

  {
    id: 2,
    name: "Tally Prime Gold",
    badge: "Prime",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200",
    rating: "4.9",
    reviewCount: 286,
    priceMonthly: "₹1,850",
    priceYearly: "₹21,600",
    originalPrice: "₹26,000",
    discount: 20,
    desc: "Multi-user business accounting solution for growing enterprises.",
    color: "from-blue-600 to-blue-800",
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
    id: 3,
    name: "Tally Prime Enterprise",
    badge: "Mega",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200",
    rating: "5.0",
    reviewCount: 98,
    priceMonthly: "₹3,250",
    priceYearly: "₹38,000",
    originalPrice: "₹45,000",
    discount: 15,
    desc: "Enterprise-grade accounting and inventory management platform.",
    color: "from-blue-700 to-blue-900",
    features: [
      "Enterprise Security",
      "Branch Management",
      "Cloud Backup",
      "Advanced Reporting",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Tally Prime Enterprise",
    badge: "Mega",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200",
    rating: "5.0",
    reviewCount: 98,
    priceMonthly: "₹3,250",
    priceYearly: "₹38,000",
    originalPrice: "₹45,000",
    discount: 15,
    desc: "Enterprise-grade accounting and inventory management platform.",
    color: "from-blue-700 to-blue-900",
    features: [
      "Enterprise Security",
      "Branch Management",
      "Cloud Backup",
      "Advanced Reporting",
      "Priority Support",
    ],
  },
];
  const tallySecurityProducts = [
    {
      title: "Tally Ultimate Security 1 User Lifetime Validity",
      price: "₹25,517",
      oldPrice: "₹27,000",
      discount: "5% OFF",
      image: "/software-service-tss-silver-tally-original-imahgwymvavthgdv.webp",
      tag: "Lifetime",
    },

    {
      title: "Tally Total Security 1 User 1 Year (Renewal)",
      price: "₹5,777",
      oldPrice: "₹6,000",
      discount: "3% OFF",
      image: "/software-service-tss-gold-tally-original-imahgwymvavthgdv.webp",
      tag: "Renewal",
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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">
        {/* HERO */}
       <section className="relative pt-40 pb-24 overflow-hidden">

  {/* Background */}
  

  

  <div className="container mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT */}
      <div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8"
        >
          <Briefcase size={14} />
          Tally Certified Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
  className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8"
>
  Tally
  <span className="block text-[#0057FF]">
    Prime Solutions
  </span>
</motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
        >
          Simplify your business accounting, GST billing, inventory management and financial reporting
          with next-generation Tally Prime solutions.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          <Link
            href="#plans"
            className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 hover:border-blue-600 font-bold transition-all backdrop-blur-xl hover:bg-white/5"
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

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 blur-3xl opacity-25 rounded-full" />

        {/* Image Card */}
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">

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



        {/* SECURITY PRODUCTS */}
        <section
  id="catalog-grid"
  className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
>
  {/* HEADER */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
    <div>
      <h2 className="text-3xl font-black text-slate-900 tracking-tight">
        Tally Prime Plans
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Powerful accounting and GST solutions for businesses of all sizes.
      </p>
    </div>

    <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
      {plans.length} Plans Available
    </div>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {plans.map((plan, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
      >
        {/* IMAGE */}
        <div className="relative h-[260px] overflow-hidden">
          <img
            src={plan.image}
            alt={plan.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* BADGES */}
          <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
            <span
              className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg ${
                plan.popular
                  ? "bg-blue-600"
                  : "bg-indigo-600"
              }`}
            >
              {plan.badge}
            </span>
          </div>

          {/* PRICE BADGE */}
          <div className="absolute top-5 right-5 bg-white/95 text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg">
            {plan.priceMonthly}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col min-h-[450px]">

          {/* TITLE */}
          <div className="min-h-[80px] mb-5">
            <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {plan.name}
            </h3>
          </div>

          {/* RATINGS */}
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              {plan.rating}
              <span>★</span>
            </div>

            <span className="text-sm text-slate-500 font-semibold">
              ({plan.reviewCount} Reviews)
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            {plan.desc}
          </p>

          {/* PRICE */}
          <div className="mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-black text-slate-900">
                {plan.priceMonthly}
              </span>

              <span className="text-base text-slate-400 line-through">
                {plan.originalPrice}
              </span>
            </div>

            {/* OFFER BADGES */}
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
                {plan.discount}% OFF
              </span>

              {plan.popular && (
                <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                  Most Popular
                </span>
              )}
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check
                  size={16}
                  className="text-blue-600 mt-1 flex-shrink-0"
                />

                <span className="text-slate-600 text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
            >
              Get Quote
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
        {/* FEATURES */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Powerful Business Management
              </h3>

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
                  className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all duration-500"
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
              className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-10 py-12">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
                >
                  <X size={22} />
                </button>

                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                  Request a Quote
                </h2>

                <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                  Fill your details and our team will contact you shortly.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
        type="number"
        name="quantity"
       
        placeholder="Quantity Required"
        min="1"
        required
        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

                  <select className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Product</option>
                    <option>
                      Tally Ultimate Security 1 User Lifetime Validity
                    </option>
                    <option>
                      Tally Total Security 1 User 1 Year (Renewal)
                    </option>
                  </select>
                </div>

                <div className="mt-8">
                  <textarea
                    rows={6}
                    placeholder="Describe your requirement..."
                    className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-600/40 hover:scale-105 transition-all duration-300">
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