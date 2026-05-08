"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  ShieldCheck, 
  Headphones, 
  Users, 
  Clock, 
  Zap,
  CheckCircle2,
  ClipboardCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AMCPage = () => {
  const plans = [
    { 
      name: "Standard", 
      desc: "Labor-only support for small offices looking for reliable on-call technicians.",
      features: ["Quarterly Maintenance", "Remote Support", "48hr Response"]
    },
    { 
      name: "Comprehensive", 
      desc: "Full coverage including spare parts. Best for critical business operations.",
      features: ["Parts Included", "Unlimited Calls", "4hr Response", "Loaner Systems"],
      highlight: true
    },
    { 
      name: "Enterprise", 
      desc: "Dedicated on-site resident engineer for large-scale infrastructure management.",
      features: ["On-site Engineer", "Network Audit", "Priority 1 Support"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-32 pb-20 transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-100 dark:border-blue-800/50">
              <Sparkles size={14} className="animate-pulse" /> AMC Solutions 2026
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8">
              Zero <span className="text-blue-600">Downtime.</span> <br />
              <span className="text-slate-300 dark:text-slate-700">Total Control.</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              We don't just fix computers; we maintain business continuity. Our AMC packages provide the peace of mind your enterprise deserves.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/40 flex items-center gap-3 group">
                Get a Custom Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-2xl relative z-10"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/30">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-black dark:text-white mb-2">Rapid Response</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">4-Hour emergency response for critical system failures.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 rounded-[2.5rem] bg-slate-900 dark:bg-blue-600 text-white shadow-2xl sm:translate-y-12 relative z-10"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-black mb-2">Certified Techs</h4>
              <p className="text-sm opacity-80">Expert engineers certified by HP, Dell, and Microsoft.</p>
            </motion.div>
          </div>
        </div>

        {/* --- FEATURES GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {[
            { icon: <ClipboardCheck />, title: "Quarterly Audit", text: "Physical deep-cleaning and software optimization every 90 days." },
            { icon: <Headphones />, title: "Remote Helpdesk", text: "Instant screen-sharing support for immediate software troubleshooting." },
            { icon: <Settings />, title: "Asset Management", text: "We track your hardware lifecycle and software license compliance." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-blue-600 flex items-center justify-center mb-8 shadow-md border border-slate-100 dark:border-white/10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- PRICING/PLAN SECTION --- */}
        <section className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Choose Your <span className="text-blue-600">Plan</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-1 rounded-[3rem] ${plan.highlight ? 'bg-gradient-to-b from-blue-600 to-indigo-600 shadow-2xl shadow-blue-600/20' : 'bg-slate-200 dark:bg-white/10'}`}
              >
                <div className="bg-white dark:bg-slate-900 rounded-[2.9rem] p-10 h-full flex flex-col">
                  {plan.highlight && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </span>
                  )}
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{plan.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 flex-grow">{plan.desc}</p>
                  
                  <div className="space-y-4 mb-10">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-2xl font-black transition-all ${plan.highlight ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white'}`}>
                    Select Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- STATS STRIP --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-100 dark:border-white/5"
        >
          {[
            { label: "Active AMCs", val: "500+" },
            { label: "Expert Engineers", val: "25+" },
            { label: "Response Time", val: "4hr" },
            { label: "Client Retention", val: "98%" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-blue-600 mb-2">{stat.val}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default AMCPage;