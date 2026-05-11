"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Video, 
  Smartphone, 
  Zap, 
  Lock, 
  Eye, 
  Bell, 
  ArrowRight
} from 'lucide-react';

const CCTVPage = () => {
  const features = [
    {
      icon: <Video size={24} />,
      title: "4K Ultra HD Surveillance",
      desc: "Crystal clear resolution with high-frame-rate recording to capture every detail."
    },
    {
      icon: <Eye size={24} />,
      title: "Smart Night Vision",
      desc: "Advanced infrared and thermal imaging for 24/7 visibility in total darkness."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Remote Live View",
      desc: "Access your camera feeds from anywhere in the world via our secure mobile app."
    },
    {
      icon: <Bell size={24} />,
      title: "AI Motion Alerts",
      desc: "Get instant notifications for human or vehicle detection, reducing false alarms."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#333333] transition-colors duration-500">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Teal Ambient Background Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#25C1C5]/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25C1C5]/10 text-[#25C1C5] text-xs font-bold uppercase tracking-widest mb-6 border border-[#25C1C5]/20"
              >
                <Lock size={14} /> AI-Powered Security
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-[#333333] dark:text-white leading-[1.1] tracking-tighter mb-8"
              >
                Eyes Everywhere. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25C1C5] to-slate-500">
                  Total Protection.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg"
              >
                Softlink provides enterprise-grade CCTV solutions that blend AI technology with robust hardware to keep your business and family safe 24/7.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-[#25C1C5] hover:bg-[#1eb0b4] text-white rounded-2xl font-bold shadow-xl shadow-[#25C1C5]/30 transition-all flex items-center gap-2">
                  Request a Quote <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  View Demo
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-[#4a4a4a] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Security Camera" 
                  className="w-full object-cover h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/40 to-transparent" />
              </div>
              
              {/* Floating Status Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-[#4a4a4a] p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25C1C5]/10 text-[#25C1C5] rounded-full flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">System Status</p>
                    <p className="font-black text-[#333333] dark:text-white">Active Protection</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-slate-50 dark:bg-[#4a4a4a]/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#333333] dark:text-white mb-6 tracking-tighter">
              Advanced Security Features
            </h2>
            <p className="text-slate-500 dark:text-slate-400">Industry-leading hardware paired with smart software analytics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-[#333333] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25C1C5] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold text-[#333333] dark:text-white mb-3">{f.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSTALLATION PROCESS --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#25C1C5] dark:bg-[#25C1C5]/90 rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-[#25C1C5]/20">
            <div className="absolute top-0 right-0 p-20 opacity-10">
              <ShieldCheck size={400} />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Professional <br/> Setup in 3 Steps</h2>
                <div className="space-y-8 mt-10">
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black">1</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Site Survey</h4>
                      <p className="opacity-80 text-sm">We analyze your property to identify critical blind spots.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black">2</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Custom Design</h4>
                      <p className="opacity-80 text-sm">We select the right cameras and local/cloud storage architecture.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black">3</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Expert Installation</h4>
                      <p className="opacity-80 text-sm">Clean wiring and secure mobile configuration by certified pros.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4 text-center">Free Consultation</h4>
                <p className="text-center opacity-80 text-sm mb-8">Get a tailored estimate for your security needs.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:bg-white/20 placeholder:text-white/60" />
                  <input type="tel" placeholder="Phone" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:bg-white/20 placeholder:text-white/60" />
                  <button className="w-full bg-white text-[#25C1C5] font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CCTVPage;