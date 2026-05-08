"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, CheckCircle, Clock, Shield, Zap } from 'lucide-react';

const stats = [
  { label: "Satisfied Clients", value: 500, suffix: "+", icon: <Users size={20}/>, color: "from-blue-500 to-cyan-400" },
  { label: "Expert Engineers", value: 25, suffix: "+", icon: <Award size={20}/>, color: "from-indigo-500 to-purple-400" },
  { label: "Successful Projects", value: 1200, suffix: "+", icon: <CheckCircle size={20}/>, color: "from-emerald-500 to-teal-400" },
  { label: "Uptime Support", value: 99, suffix: "%", icon: <Zap size={20}/>, color: "from-orange-500 to-red-400" },
];

const Features = () => {
  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- LEFT SIDE: ANIMATED IMAGE STACK --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative Background Glow */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="relative group overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/0d377e8e49df986439e89f3d835d1439.jpg" 
                alt="Datacenter Infrastructure"
                className="w-full h-[500px] object-cover transition duration-700 group-hover:rotate-1"
              />
              {/* Glass Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                >
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Current Focus</p>
                  <h4 className="text-white text-xl font-bold">Enterprise Cloud & Security Hosting</h4>
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-5 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-100 dark:border-white/5 hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Verified Provider</p>
                <p className="text-sm font-bold dark:text-white">ISO 27001 Certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: STATS CONTENT --- */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h3 className="text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Why Choose Softlink?</h3>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
                Empowering businesses with <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">reliable tech stacks.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} delay={i * 0.1} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, suffix, icon, color, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 group"
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg`}>
        {icon}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-black dark:text-white text-slate-900 tracking-tighter">
          {isInView ? <Counter from={0} to={value} /> : 0}
        </span>
        <span className="text-xl font-bold text-blue-500">{suffix}</span>
      </div>
      <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
        {label}
      </p>
    </motion.div>
  );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = React.useState(from);
  React.useEffect(() => {
    if (count < to) {
      const timeout = setTimeout(() => setCount(count + Math.ceil(to / 50)), 30);
      return () => clearTimeout(timeout);
    }
  }, [count, to]);
  return <>{count > to ? to : count}</>;
};

export default Features;