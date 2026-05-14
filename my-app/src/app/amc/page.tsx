"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Camera,
  HardDrive,
  ShoppingBag,
  ArrowUpRight,
  Video,
  MonitorPlay,
  Activity
} from 'lucide-react';

const AMCPage = () => {
  const plans = [
    { 
      name: "Residential", 
      desc: "Perfect for home security maintenance, including semi-annual physical cleaning.",
      features: ["Bi-Annual Maintenance", "App Config Support", "24hr Response"]
    },
    { 
      name: "Business Pro", 
      desc: "Comprehensive coverage for retail and offices with zero-downtime parts replacement.",
      features: ["Parts Included", "Backup HDD Support", "4hr Response", "Remote Access Setup"],
      highlight: true
    },
    { 
      name: "Industrial", 
      desc: "Maximum security for large warehouses with dedicated on-call site engineers.",
      features: ["Priority 1 Support", "Network Audit", "Full System Overhaul"]
    }
  ];

  const products = [
    {
      title: "4K AI PTZ Camera",
      desc: "Full 360° pan-tilt-zoom with AI human tracking and 100m night vision.",
      img: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=800&auto=format&fit=crop",
      icon: <Video className="w-5 h-5" />,
      tags: ["4K Resolution", "AI Tracking"]
    },
    {
      title: "Smart Dome IP Cam",
      desc: "Vandal-proof dome cameras with built-in microphone and SD card slot.",
      img: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?q=80&w=800&auto=format&fit=crop",
      icon: <Camera className="w-5 h-5" />,
      tags: ["PoE", "Two-way Audio"]
    },
    {
      title: "Enterprise NVR",
      desc: "32-Channel network video recorder with H.265+ compression technology.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      icon: <MonitorPlay className="w-5 h-5" />,
      tags: ["Remote Live", "8-SATA Bays"]
    },
    {
      title: "Surveillance Storage",
      desc: "Optimized 24/7 read/write drives for continuous HD recording cycles.",
      img: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=800&auto=format&fit=crop",
      icon: <HardDrive className="w-5 h-5" />,
      tags: ["WD Purple", "Skyhawk"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-40 pb-20 transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-600/20">
              <Sparkles size={14} className="animate-pulse" /> Surveillance Elite 2026
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8">
              Watch. <span className="text-blue-600">Protect.</span> <br />
              <span className="text-sky-400">Secure.</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl">
              Professional CCTV installation and zero-worry maintenance contracts. We keep your eyes on the business so you can focus on the growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/40 flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
                Browse Cameras <ShoppingBag size={20} />
              </button>
              <button className="px-10 py-5 bg-white dark:bg-slate-900/50 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-sky-900/30 rounded-2xl font-black shadow-xl transition-transform hover:scale-105 active:scale-95">
                AMC Quotation
              </button>
            </div>
          </motion.div>

          {/* Visual Engagement Image with Overlay Cards */}
          <div className="lg:w-1/2 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                alt="Security Hub"
                className="w-full h-[520px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Info Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 md:right-0 p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-blue-900/30 z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-500/20 text-blue-500 rounded-lg"><Activity size={20}/></div>
                <span className="text-xs font-black dark:text-white">Live Status</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold">512 Cameras Online</p>
            </motion.div>

            {/* Floating Info Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-6 -left-6 p-6 bg-gradient-to-br from-blue-600 to-sky-400 text-white rounded-3xl shadow-2xl z-20"
            >
              <h4 className="text-2xl font-black">24/7</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-90">Recording Guaranteed</p>
            </motion.div>
          </div>
        </div>

        {/* --- EXCLUSIVE CCTV CATALOG --- */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
              Camera <span className="text-blue-600">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-blue-900/10 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="h-52 overflow-hidden relative">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl text-blue-600 shadow-xl">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{product.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {product.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-sky-400 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:rotate-45 transition-transform">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Support <span className="text-blue-600">Packages</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-1 rounded-[3rem] ${plan.highlight ? 'bg-gradient-to-b from-blue-600 to-sky-400 shadow-2xl shadow-blue-500/20' : 'bg-slate-200 dark:bg-slate-800'}`}
              >
                <div className="bg-white dark:bg-slate-950 rounded-[2.9rem] p-10 h-full flex flex-col">
                  {plan.highlight && (
                    <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest w-fit mb-6">
                      Popular Choice
                    </span>
                  )}
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{plan.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 flex-grow">{plan.desc}</p>
                  
                  <div className="space-y-4 mb-10">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white'}`}>
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AMCPage;