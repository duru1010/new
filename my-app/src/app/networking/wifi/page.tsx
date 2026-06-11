"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, ArrowRight, Zap, ShieldCheck, Gamepad2, Briefcase, CheckCircle2, X } from "lucide-react";

// ================= DATA =================
const descriptions = {
  hero: `Experience ultra-fast fiber-optic internet designed for modern homes and businesses. 99.9% uptime with advanced security.`,
  home: `Perfect for everyday use — browse, stream HD/4K videos, and connect multiple devices without buffering.`,
  gaming: `Low-latency connectivity optimized for competitive gaming. Reduced ping and stable connections.`,
  business: `Enterprise-grade internet built for productivity. Supports heavy workloads and cloud applications.`,
  security: `Advanced secure WiFi with built-in protection against threats and encrypted connectivity.`,
};
const plansBySpeed = {
  "100 Mbps": [
    {
      title: "ACT Basic Home",
      speed: "100 Mbps",
      data: "Unlimited",
      router: "Free Router",
      price: "₹799",
      originalPrice: "₹999",
      discount: 20,
      rating: "4.7",
      reviewCount: 124,
      badge: "Recommended",
      tag: "Popular",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200",
      specs: [
        "Unlimited Data",
        "Free Dual Band Router",
        "Smooth HD Streaming",
        "Perfect for Home Use",
      ],
    },

    {
      title: "ACT Home Boost",
      speed: "100 Mbps",
      data: "Unlimited",
      router: "AI Router",
      price: "₹849",
      originalPrice: "₹1099",
      discount: 23,
      rating: "4.8",
      reviewCount: 98,
      badge: "AI Router",
      tag: "New",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200",
      specs: [
        "AI Smart Router",
        "Smart Device Optimization",
        "Ultra Stable WiFi",
        "4K Streaming Support",
      ],
    },

    {
      title: "ACT Secure Home",
      speed: "100 Mbps",
      data: "Unlimited",
      router: "Free Router",
      price: "₹999",
      originalPrice: "₹1299",
      discount: 25,
      rating: "4.9",
      reviewCount: 77,
      badge: "Secure",
      tag: "Security",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200",
      specs: [
        "Advanced Security",
        "Parental Controls",
        "Protected Browsing",
        "Secure WiFi Access",
      ],
    },
    {
      title: "ACT Secure Home",
      speed: "100 Mbps",
      data: "Unlimited",
      router: "Free Router",
      price: "₹999",
      originalPrice: "₹1299",
      discount: 25,
      rating: "4.9",
      reviewCount: 77,
      badge: "Secure",
      tag: "Security",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200",
      specs: [
        "Advanced Security",
        "Parental Controls",
        "Protected Browsing",
        "Secure WiFi Access",
      ],
    },
  ],

  "200 Mbps": [
    {
      title: "ACT Storm Basic",
      speed: "200 Mbps",
      data: "Unlimited",
      router: "Free Router",
      price: "₹1199",
      originalPrice: "₹1499",
      discount: 20,
      rating: "4.8",
      reviewCount: 210,
      badge: "Value",
      tag: "Value",
      image:
        "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1200",
      specs: [
        "Ultra Fast Downloads",
        "Unlimited Data",
        "Multi Device Support",
        "HD Video Calls",
      ],
    },

    {
      title: "ACT Gaming Pro",
      speed: "200 Mbps",
      data: "Unlimited",
      router: "Gaming Router",
      price: "₹1499",
      originalPrice: "₹1899",
      discount: 22,
      rating: "4.9",
      reviewCount: 320,
      badge: "Gaming",
      tag: "Pro Gamer",
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200",
      specs: [
        "Low Latency Gaming",
        "Gaming Optimized Router",
        "Zero Lag Experience",
        "Fast Ping Response",
      ],
    },

    {
      title: "ACT Storm Mesh",
      speed: "200 Mbps",
      data: "Unlimited",
      router: "Mesh Router",
      price: "₹1299",
      originalPrice: "₹1599",
      discount: 18,
      rating: "4.8",
      reviewCount: 140,
      badge: "Mesh WiFi",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200",
      specs: [
        "Whole Home Coverage",
        "Mesh Router Included",
        "Dead Zone Removal",
        "Smart Roaming",
      ],
    },

    {
      title: "ACT Storm Mesh",
      speed: "200 Mbps",
      data: "Unlimited",
      router: "Mesh Router",
      price: "₹1299",
      originalPrice: "₹1599",
      discount: 18,
      rating: "4.8",
      reviewCount: 140,
      badge: "Mesh WiFi",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1200",
      specs: [
        "Whole Home Coverage",
        "Mesh Router Included",
        "Dead Zone Removal",
        "Smart Roaming",
      ],
    },
  ],
};

// ================= COMPONENT =================
export default function EnhancedWifiPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState("100 Mbps");

  const speedFilters = Object.keys(plansBySpeed);
  const filteredPlans = plansBySpeed[selectedSpeed as keyof typeof plansBySpeed] || [];
   

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
   
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Next-Gen Fiber Connectivity
            </div>

            <h3 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#0A1628] dark:text-white">
  Speeds that <br />
  <span className="text-[#0057FF]">
    Move with You.
  </span>
</h3>
            <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {descriptions.hero}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center gap-3 transition-all hover:shadow-2xl hover:shadow-blue-500/40"
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c"
                alt="High speed wifi"
                width={800}
                height={600}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <CheckCircle2 size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reliability</p>
                <p className="text-lg font-black">99.9% Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-6 py-12 sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl font-black italic tracking-tighter uppercase">Choose Your Speed</h2>
          <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-x-auto max-w-full">
            {speedFilters.map((speed) => (
              <button
                key={speed}
                onClick={() => setSelectedSpeed(speed)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  selectedSpeed === speed
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS GRID */}
      <section
                    id="catalog-grid"
                    className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                  >
                    {/* Header */}
                    
                    {/* GRID */}
                    {/* GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredPlans.map((item, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                      >
                        {/* IMAGE */}
                        <div className="relative h-[260px] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                  
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                          {/* TOP BADGES */}
                          <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                            {item.tag && (
                              <span
                                className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg ${
                                  item.tag === "Trending"
                                    ? "bg-cyan-500"
                                    : item.tag === "Hot Deal"
                                    ? "bg-blue-600"
                                    : "bg-indigo-600"
                                }`}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                  
                          {/* PRICE BADGE */}
                          <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg border border-white">
                            {item.price}
                          </div>
                        </div>
                  
                        {/* CONTENT */}
                        <div className="p-8 flex flex-col min-h-[420px]">
                          {/* TITLE */}
                          <div className="min-h-[80px] mb-5">
                            <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>
                  
                          {/* RATINGS */}
                          <div className="flex items-center gap-3 mb-6">
                            <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                              {item.rating}
                              <span>★</span>
                            </div>
                  
                            <span className="text-sm text-slate-500 font-semibold">
                              ({item.reviewCount} Reviews)
                            </span>
                          </div>
                  
                          {/* PRICE SECTION */}
                          <div className="mb-6">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="text-lg font-black text-slate-900">
                                {item.price}
                              </span>
                  
                              <span className="text-sm text-slate-400 line-through">
                                {item.originalPrice}
                              </span>
                            </div>
                  
                            {/* OFFER BADGES */}
                            <div className="mt-4 flex items-center gap-2 flex-wrap">
                              <span className="bg-emerald-50 text-emerald-600 text-xs font-black px-3 py-1 rounded-full border border-emerald-100">
                                {item.discount}% OFF
                              </span>
                  
                              {item.badge && (
                                <span className="bg-blue-50 text-blue-700 text-xs font-black px-3 py-1 rounded-full border border-blue-100">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                  
                          {/* SPECS */}
                          <div className="space-y-3 mb-8">
                            {item.specs.map((spec, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2
                                  size={16}
                                  className="text-blue-600 mt-1 flex-shrink-0"
                                />
                  
                                <span className="text-slate-600 text-sm leading-relaxed">
                                  {spec}
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
                              Request Quote
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </section>

      {/* MODAL (Re-styled) */}
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
                                         <option>ATC  Basic Home</option>
                                         <option>ATC  Premium Home</option>
                                         <option>ATC  Business</option>
                                         <option>ATC  Enterprise</option>
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
  );
}