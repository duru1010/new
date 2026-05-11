"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Wifi, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Workflow, 
  Radio, 
  Server,
  ArrowRight,
  Database,
  Unplug
} from 'lucide-react';

const NetworkingPage = () => {
  const coreServices = [
    {
      title: "Structured Cabling",
      desc: "Neat, labeled, and certified Cat6/Fiber installations that eliminate downtime and cable clutter.",
      icon: <Unplug size={28} />,
      gradient: "from-[#25C1C5] to-[#1eb0b4]"
    },
    {
      title: "Enterprise Wi-Fi",
      desc: "High-density wireless solutions for offices and warehouses with seamless roaming and zero dead zones.",
      icon: <Wifi size={28} />,
      gradient: "from-slate-700 to-slate-900"
    },
    {
      title: "Network Security",
      desc: "Fortinet & Sophos firewall integration to protect your data from ransomware and external threats.",
      icon: <ShieldCheck size={28} />,
      gradient: "from-emerald-600 to-[#25C1C5]"
    },
    {
      title: "VPN & Remote Work",
      desc: "Secure site-to-site VPNs and remote access solutions for a modern, hybrid workforce.",
      icon: <Globe size={28} />,
      gradient: "from-[#25C1C5] via-slate-600 to-slate-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#333333] transition-colors duration-500">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Teal Data Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]" 
             style={{ backgroundImage: `radial-gradient(#25C1C5 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25C1C5]/10 text-[#25C1C5] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[#25C1C5]/20"
              >
                <Network size={16} /> Fast. Secure. Scalable.
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-8xl font-black text-[#333333] dark:text-white leading-[0.95] tracking-tighter mb-8"
              >
                Reliable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25C1C5] via-[#1eb0b4] to-slate-400">
                  Infrastructure.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-500 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                We build the backbone of your business. From high-speed fiber optics to certified server racks, Softlink ensures your network never skips a beat.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <button className="px-10 py-5 bg-[#25C1C5] hover:bg-[#1eb0b4] text-white rounded-2xl font-black shadow-2xl shadow-[#25C1C5]/30 transition-all flex items-center gap-3 active:scale-95">
                  Free Site Audit <ArrowRight size={20} />
                </button>
                <button className="px-10 py-5 border-2 border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-black hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Our Portfolio
                </button>
              </motion.div>
            </div>

            {/* Technical Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative p-8 bg-slate-100 dark:bg-[#4a4a4a] rounded-[3rem] border border-slate-200 dark:border-white/10 backdrop-blur-3xl overflow-hidden">
                <div className="flex flex-col gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-[#333333] rounded-2xl shadow-lg border border-slate-100 dark:border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-[#25C1C5]/10 text-[#25C1C5] flex items-center justify-center">
                        <Server size={24} />
                      </div>
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                          className="w-1/3 h-full bg-[#25C1C5] shadow-[0_0_15px_#25C1C5]" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICE CARDS --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-[#333333] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl transition-all hover:border-[#25C1C5]/50"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-[#333333] dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#25C1C5] to-[#1eb0b4] transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS SECTION --- */}
      <section className="py-24 bg-[#333333] dark:bg-[#1a1a1a] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                Structured <br /> Cabling Standards.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#25C1C5]"><Database size={20}/></div>
                  <div>
                    <h4 className="font-bold text-xl">Fiber Optic Backbone</h4>
                    <p className="text-slate-400 text-sm">OM3/OM4 Multi-mode and Single-mode fiber for lightning-fast data transfer between server rooms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-600"><Cpu size={20}/></div>
                  <div>
                    <h4 className="font-bold text-xl">Certified Cat6A/Cat7</h4>
                    <p className="text-slate-400 text-sm">Rigorous testing and certification for 10Gbps copper networking solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#25C1C5]/50"><Workflow size={20}/></div>
                  <div>
                    <h4 className="font-bold text-xl">Rack Management</h4>
                    <p className="text-slate-400 text-sm">Organized patch panels, cable trays, and UPS systems for a clean, professional server environment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-5xl font-black text-[#25C1C5]">10G</span>
                  <span className="text-xs uppercase font-bold tracking-widest mt-2 opacity-60">Ready Speed</span>
               </div>
               <div className="aspect-square rounded-[2rem] bg-[#25C1C5] flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-[#25C1C5]/20">
                  <span className="text-5xl font-black">99.9%</span>
                  <span className="text-xs uppercase font-bold tracking-widest mt-2">Uptime Goal</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-12 rounded-[3.5rem] bg-slate-50 dark:bg-[#4a4a4a] border border-slate-200 dark:border-white/5 inline-block w-full max-w-4xl shadow-xl"
          >
            <h3 className="text-3xl font-black text-[#333333] dark:text-white mb-4">Need a Network Audit?</h3>
            <p className="text-slate-500 dark:text-slate-300 mb-8 max-w-lg mx-auto">Our experts analyze your current cabling and provide a roadmap for 10G speeds and enhanced security.</p>
            <button className="px-12 py-5 bg-[#25C1C5] hover:bg-[#1eb0b4] text-white rounded-2xl font-bold hover:shadow-2xl transition-all shadow-[#25C1C5]/30">
              Schedule Free Site Visit
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default NetworkingPage;