"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  LayoutGrid,
  X,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  rating?: number;
  reviewCount?: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  tag?: "Trending" | "Hot Deal" | "Super Deals";
  badge?: string;
  stockStatus?: string;
  imageUrl: string;
}

export default function MicrosoftCatalogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
 

   const [formData, setFormData] = useState({
              fullName: "",
              mobile: "",
              email: "",
              quantity: "",
              duration: "",
              city: "",
              computerType: "",
              message: "",
            });
          
            const [loading, setLoading] = useState(false);
          
            // ================= HANDLE INPUT =================
          
            const handleChange = (
              e: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
              >
            ) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            };
          
            // ================= HANDLE SUBMIT =================
          
            const handleSubmit = async (
              e: React.FormEvent<HTMLFormElement>
            ) => {
              e.preventDefault();
          
              setLoading(true);
          
              try {
                const response = await fetch("/api/send-email", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
          
                  body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobile,
                    service: formData.computerType,
          
                    message: `
          Rental Duration: ${formData.duration}
          
          Requirement City: ${formData.city}
          
          Project Requirements:
          ${formData.message}
                    `,
                  }),
                });
          
                const data = await response.json();
          
                if (data.success) {
                  alert("Quotation Request Sent Successfully!");
          
                  setFormData({
                    fullName: "",
                    mobile: "",
                    email: "",
                    quantity: "",
                    duration: "",
                    city: "",
                    computerType: "",
                    message: "",
                  });
          
                  setIsModalOpen(false);
                } else {
                  alert(data.error || "Failed to send request");
                }
              } catch (error) {
                console.error(error);
                alert("Something went wrong!");
              } finally {
                setLoading(false);
              }
            };
  const products: Product[] = [
    {
      id: 1,
      title:
        "MICROSOFT Office 2024 Professional Plus Lifetime (Update Incl.)",
      rating: 4.6,
      reviewCount: 10,
      currentPrice: 1150,
      originalPrice: 2599,
      discount: 55,
      badge: "Bank Offer",
      imageUrl:
        "/2721d5099fb2a0dbef54e982c3ddfab9.jpg",
    },
    {
      id: 2,
      title: "MICROSOFT Office 365 Lifetime 5 Devices License Mac Win",
      currentPrice: 1758,
      originalPrice: 3899,
      discount: 54,
      stockStatus: "Only few left",
      imageUrl:
        "/8e3a7a9d2a1e252bef687f099a44a2d0.jpg",
    },
    {
      id: 3,
      title:
        "MICROSOFT Office 2024 Professional Plus, One Time Purchase",
      currentPrice: 1215,
      originalPrice: 2599,
      discount: 53,
      badge: "Bank Offer",
      imageUrl:
        "/2721d5099fb2a0dbef54e982c3ddfab9.jpg",
    },
    {
      id: 4,
      title: "MICROSOFT Windows 7 Pro Retail License 64 Bit",
      rating: 4.2,
      reviewCount: 85,
      currentPrice: 4063,
      originalPrice: 9990,
      discount: 59,
      stockStatus: "Only 5 left",
      imageUrl:
        "/8796d98b512a516312f886fb865e265a.jpg",
    },
    {
      id: 5,
      title:
        "MICROSOFT Office 365 5 User & 100 GB Storage { PC-MAC-Android }",
      rating: 4.4,
      reviewCount: 33,
      currentPrice: 1052,
      originalPrice: 2699,
      discount: 61,
      tag: "Trending",
      stockStatus: "Only few left",
      imageUrl:
        "/8e3a7a9d2a1e252bef687f099a44a2d0.jpg",
    },
    {
      id: 6,
      title: "MICROSOFT M365 Personal - 1 Year",
      rating: 3.8,
      reviewCount: 152,
      currentPrice: 3999,
      originalPrice: 4899,
      discount: 18,
      tag: "Hot Deal",
      imageUrl:
        "/32f5ac39cac1d73774ebd737e670e3ce.jpg",
    },
    {
      id: 7,
      title:
        "MICROSOFT Office Professional Plus 2021 (Lifetime Validity)",
      rating: 4.4,
      reviewCount: 869,
      currentPrice: 1404,
      originalPrice: 6699,
      discount: 79,
      stockStatus: "Only few left",
      imageUrl:
        "/2721d5099fb2a0dbef54e982c3ddfab9.jpg",
    },
    {
      id: 8,
      title:
        "MICROSOFT Windows 10 Pro License Key Unlimited Re-installation",
      currentPrice: 498,
      originalPrice: 3499,
      discount: 85,
      stockStatus: "Only few left",
      imageUrl:
        "/8e3a7a9d2a1e252bef687f099a44a2d0.jpg",
    },
    {
      id: 9,
      title:
        "MICROSOFT Windows 11 Pro Retail License Key Lifetime Validity",
      rating: 3.3,
      reviewCount: 3,
      currentPrice: 1849,
      originalPrice: 4499,
      discount: 58,
      stockStatus: "Only few left",
      imageUrl:
        "/2721d5099fb2a0dbef54e982c3ddfab9.jpg",
    },
  ];

  const handleOpenModal = (productTitle?: string) => {
    if (productTitle) {
      setSelectedProduct(productTitle);
    } else {
      setSelectedProduct("General Enterprise Inquiries");
    }
    setIsModalOpen(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-100/50 via-white to-transparent overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Hero Content */}
      <div className="space-y-6">

      
      
        {/* Animated Badge 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
             Volume Software Provisioning
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Infrastructure With{" "}
          <span className="text-[#0057FF]">Genuine Licenses</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
          Deploy authentic Microsoft workplace applications and operating systems flawlessly.
          Access comprehensive multi-device configurations, custom volume tier discounts,
          and official lifetime cloud upgrade support tailored precisely for small businesses
          or global enterprise backbones.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => handleOpenModal()}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            Request  Quote
            <ArrowRight size={16} />
          </button>

          <a
            href="#catalog-grid"
            className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all flex items-center gap-2"
          >
            <LayoutGrid size={16} />
            Browse Catalog
          </a>
        </div>

      </div>

      {/* Hero Image */}
      <div className="relative lg:ml-4">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 blur-3xl opacity-10 rounded-full" />

        <div className="relative rounded-3xl border border-blue-100 shadow-xl bg-white p-3 overflow-hidden">
          <img
            src="/9f65e0094e0172fd3bccd9fc3306d514.jpg"
            alt="Enterprise Dashboard"
            className="w-full h-[360px] object-cover rounded-2xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CATALOG */}
      <section
        id="catalog-grid"
        className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Microsoft Product Infrastructure Catalog
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Review official lifetime activation tokens and retail system
              distribution licenses.
            </p>
          </div>

          <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
            Matrix Slots: {products.length} Items Available
          </div>
        </div>

        {/* Grid */}
        {/* GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {products.map((product) => (
    <div
      key={product.id}
      className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
    >
      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">

        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">

          {product.tag && (
            <span
              className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg ${
                product.tag === "Trending"
                  ? "bg-cyan-500"
                  : product.tag === "Hot Deal"
                  ? "bg-blue-600"
                  : "bg-indigo-600"
              }`}
            >
              {product.tag}
            </span>
          )}

          {product.stockStatus && (
            <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              {product.stockStatus}
            </span>
          )}
        </div>

        {/* PRICE BADGE */}
        <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg border border-white">
          {formatCurrency(product.currentPrice)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col min-h-[360px]">

        {/* TITLE */}
        <div className="min-h-[92px] mb-5">
          <h3 className="text-lg leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
            {product.title}
          </h3>
        </div>

        {/* RATINGS */}
        <div className="flex items-center gap-3 mb-6">
          {product.rating ? (
            <>
              <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                {product.rating}
                <span>★</span>
              </div>

              <span className="text-sm text-slate-500 font-semibold">
                ({product.reviewCount} Reviews)
              </span>
            </>
          ) : (
            <span className="text-sm text-slate-400 italic">
              Standard License Edition
            </span>
          )}
        </div>

        {/* PRICE SECTION */}
        <div className="mb-8">
          <div className="flex items-center gap-3 flex-wrap">

            <span className="text-3xl font-black text-slate-900">
              {formatCurrency(product.currentPrice)}
            </span>

            <span className="text-base text-slate-400 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          </div>

          {/* OFFER BADGES */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">

            <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
              {product.discount}% OFF
            </span>

            {product.badge && (
              <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-auto">
          <button
            onClick={() => handleOpenModal(product.title)}
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

      {/* MODAL */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-all duration-300 ${
          isModalOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <div className="w-full max-w-xl bg-white rounded-2xl border border-blue-100 shadow-2xl overflow-hidden relative z-10 transition-all transform duration-300">

          {/* Close */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-20"
          >
            <X size={16} />
          </button>

          {/* Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <div className="text-[10px] font-extrabold tracking-widest uppercase bg-white/20 inline-block px-2 py-0.5 rounded mb-2">
              Procurement Request
            </div>

            <h3 className="text-xl font-black tracking-tight">
              Request Volume Quote Matrix
            </h3>

            <p className="text-blue-100 text-xs mt-1 leading-snug">
              Complete your organizational context details below.
            </p>
          </div>

          {/* Form */}
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
                                                      Computer Rental Form
                                                    </div>
                                  
                                                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                                                      Request a
                                                      <br />
                                                      Quick Quotation.
                                                    </h2>
                                  
                                                    <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
                                                      Fill your rental requirement details and our team will
                                                      contact you shortly.
                                                    </p>
                                                  </div>
                                                </div>
                                  
                                                {/* FORM */}
                                                <form
                                                  onSubmit={handleSubmit}
                                                  className="p-8 md:p-12"
                                                >
                                                  <div className="grid lg:grid-cols-2 gap-8">
                                                    {/* LEFT */}
                                                    <div className="space-y-6">
                                                      <input
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        placeholder="Full Name"
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      />
                                  
                                                      <input
                                                        type="tel"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        placeholder="Mobile Number"
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      />
                                  
                                                      <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email Address"
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      />
                                  
                                                      <input
                                          type="number"
                                          name="quantity"
                                          value={formData.quantity}
                                          onChange={handleChange}
                                          placeholder="Quantity Required"
                                          min="1"
                                          required
                                          className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                                    </div>
                                  
                                                    {/* RIGHT */}
                                                    <div className="space-y-6">
                                                      <select
                                                        name="duration"
                                                        value={formData.duration}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      >
                                                        <option value="">Select Rental Duration</option>
                                                        <option>1 Day</option>
                                                        <option>1 Week</option>
                                                        <option>1 Month</option>
                                                        <option>6 Months</option>
                                                        <option>1 Year</option>
                                                      </select>
                                  
                                                      <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        placeholder="Requirement City"
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      />
                                  
                                                      <select
                                                        name="computerType"
                                                        value={formData.computerType}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full h-14 px-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      >
                                                        <option value="">Select  Requirment  type</option>
                                                        <option>Microsoft Office 365</option>
                                                        <option>Microsoft Teams</option>
                                                        <option>Microsoft Power Platform</option>
                                                        <option>Microsoft Dynamics 365</option>
                                                      </select>
                                                    </div>
                                                  </div>
                                  
                                                  {/* TEXTAREA */}
                                                  <div className="mt-8">
                                                    <textarea
                                                      rows={6}
                                                      name="message"
                                                      value={formData.message}
                                                      onChange={handleChange}
                                                      placeholder="Describe your project requirements, quantity, RAM, SSD, graphics card, rental duration etc..."
                                                      required
                                                      className="w-full p-5 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                    />
                                                  </div>
                                  
                                                  {/* BUTTON */}
                                                  <div className="flex flex-wrap gap-4 mt-10">
                                                    <button
                                                      type="submit"
                                                      disabled={loading}
                                                      className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all disabled:opacity-50"
                                                    >
                                                      {loading ? "Sending..." : "Submit Quotation"}
                                                    </button>
                                                  </div>
                                                </form>
                                              </motion.div>
                                            </motion.div>
                                          )}
                                        </AnimatePresence>

        </div>
      </div>
    </div>
  );
}