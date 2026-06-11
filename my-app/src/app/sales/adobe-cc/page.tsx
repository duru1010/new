"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Shield,
  Lock,
  Globe,
  Fingerprint,
  Server,
  Cloud,
  Briefcase,
  Database,
  Wifi,
  Laptop,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";

export default function QuickHealPage() {
  const [billing, setBilling] = useState("yearly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const plans = [
    {
      id: 1,
      title: "Adobe Photoshop Starter",
      tag: "Starter",
      badge: "Starter",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200",
      rating: "4.6",
      reviewCount: 84,
      currentPrice: 799,
      originalPrice: 1199,
      discount: 33,
      monthlyPrice: "₹799",
      yearlyPrice: "₹8,999",
      desc: "Perfect for beginners and basic photo editing projects.",
      specs: [
        "Photo Editing Tools",
        "Basic Retouching",
        "Layer Support",
        "AI Generative Fill",
        "Cloud Storage",
      ],
    },

    {
      id: 2,
      title: "Adobe Photoshop Pro",
      tag: "Trending",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200",
      rating: "4.9",
      reviewCount: 215,
      currentPrice: 1499,
      originalPrice: 1999,
      discount: 25,
      monthlyPrice: "₹1,499",
      yearlyPrice: "₹15,999",
      desc: "Professional editing suite for designers and creators.",
      specs: [
        "Advanced Retouching",
        "AI Image Generation",
        "Premium Filters",
        "RAW File Editing",
        "Multi Device Access",
      ],
    },

    {
      id: 3,
      title: "Adobe Creative Cloud",
      tag: "Creative",
      badge: "Creative Suite",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200",
      rating: "4.8",
      reviewCount: 142,
      currentPrice: 2499,
      originalPrice: 3299,
      discount: 24,
      monthlyPrice: "₹2,499",
      yearlyPrice: "₹26,999",
      desc: "Complete Adobe creative suite.",
      specs: [
        "Photoshop Included",
        "Illustrator Included",
        "Premiere Pro Included",
        "Cloud Sync",
        "Adobe Fonts Access",
      ],
    },

    {
      id: 4,
      title: "Adobe Photoshop Business",
      tag: "Business",
      badge: "Business",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200",
      rating: "4.7",
      reviewCount: 96,
      currentPrice: 3499,
      originalPrice: 4499,
      discount: 22,
      monthlyPrice: "₹3,499",
      yearlyPrice: "₹36,999",
      desc: "Business-ready creative tools for agencies.",
      specs: [
        "Team Collaboration",
        "Enterprise Storage",
        "Admin Console",
        "Shared Libraries",
        "Commercial Licensing",
      ],
    },

    {
      id: 5,
      title: "Adobe Photoshop Enterprise",
      tag: "Enterprise",
      badge: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200",
      rating: "5.0",
      reviewCount: 58,
      currentPrice: 5999,
      originalPrice: 7499,
      discount: 20,
      monthlyPrice: "₹5,999",
      yearlyPrice: "₹64,999",
      desc: "Enterprise-grade Adobe ecosystem.",
      specs: [
        "Enterprise Security",
        "Creative Cloud Suite",
        "Advanced Asset Management",
        "Priority Support",
        "Unlimited Collaboration",
      ],
    },

    {
      id: 6,
      title: "Adobe Photoshop AI Studio",
      tag: "Hot Deal",
      badge: "AI Powered",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200",
      rating: "4.9",
      reviewCount: 174,
      currentPrice: 4499,
      originalPrice: 5799,
      discount: 22,
      monthlyPrice: "₹4,499",
      yearlyPrice: "₹48,999",
      desc: "AI-powered image editing workflow.",
      specs: [
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
      desc: "Detect and block malware instantly.",
    },

    {
      icon: <Lock size={24} />,
      title: "Safe Banking",
      desc: "Secure financial transactions with encryption.",
    },

    {
      icon: <Globe size={24} />,
      title: "Web Security",
      desc: "Protection from malicious websites.",
    },

    {
      icon: <Fingerprint size={24} />,
      title: "Identity Protection",
      desc: "Protect sensitive business information.",
    },

    {
      icon: <Server size={24} />,
      title: "Enterprise Security",
      desc: "Centralized enterprise monitoring.",
    },

    {
      icon: <Cloud size={24} />,
      title: "Cloud Backup",
      desc: "Secure backup and recovery solutions.",
    },
  ];
 

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
    <>
      <div className="min-h-screen bg-[#F4F9FF] dark:bg-[#07111F] text-slate-900 dark:text-white overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold mb-8"
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
                  Create stunning graphics, professional edits and AI-powered
                  artwork with Adobe Photoshop.
                </motion.p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-cyan-500 text-white font-bold flex items-center gap-2 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </button>

                  <Link
                    href="#catalog-grid"
                    className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-white/10 font-bold"
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
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/3b68ecaac42370efe5a73a830219f9a5.jpg"
                    alt="Adobe Photoshop"
                    width={900}
                    height={700}
                    className="w-full h-[520px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section
          id="catalog-grid"
          className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-blue-100 pb-6 mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Adobe Product Catalog
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Professional creative tools and AI-powered design solutions.
              </p>
            </div>

            <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide shadow-sm uppercase self-start">
              {plans.length} Plans Available
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-lg bg-blue-600">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 bg-white/95 text-blue-600 font-black text-xs px-4 py-2 rounded-full shadow-lg">
                    {plan.monthlyPrice}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col min-h-[420px]">

                  <div className="min-h-[80px] mb-5">
                    <h3 className="text-xl leading-7 font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {plan.title}
                    </h3>
                  </div>
                    <div className="flex items-center gap-3 mb-6">
          {plan.rating ? (
            <>
              <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                {plan.rating}
                <span>★</span>
              </div>

              <span className="text-sm text-slate-500 font-semibold">
                ({plan.reviewCount} Reviews)
              </span>
            </>
          ) : (
            <span className="text-sm text-slate-400 italic">
              Standard License Edition
            </span>
          )}
        </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* PRICE */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-3xl font-black text-slate-900">
                        {plan.monthlyPrice}
                      </span>

                      <span className="text-base text-slate-400 line-through">
                        ₹{plan.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="space-y-3 mb-8">
                    {plan.specs.map((spec, i) => (
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
                      onClick={handleOpenModal}
                      className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -12 }}
                  className="p-8 rounded-[2rem] bg-white border border-slate-200 shadow-lg"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
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
                                               <option>Adobe Premiere Pro</option>
                                               <option>Adobe After Effects</option>
                                               <option>Adobe Photoshop</option>
                                               <option>Adobe Illustrator</option>
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
    </>
  );
}