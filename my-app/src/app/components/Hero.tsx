// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Laptop, ShieldCheck, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-700">
      
//       {/* --- SMOOTH ANIMATED BACKGROUND --- */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Base Static Grid */}
//         <div 
//           className="absolute inset-0 h-full w-full 
//           [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] 
//           dark:[background-image:radial-gradient(#1e293b_1px,transparent_1px)] 
//           [background-size:40px_40px] 
//           [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" 
//         />
        
//         {/* Smooth Drifting Layer (Primary) */}
//         <motion.div 
//           animate={{ 
//             backgroundPosition: ["0px 0px", "40px 40px"] 
//           }}
//           transition={{ 
//             duration: 8, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//           className="absolute inset-0 opacity-40 dark:opacity-60"
//           style={{
//             backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />

//         {/* Subtle Glow Pulse (Dark Mode Only) */}
//         <motion.div 
//           animate={{ opacity: [0.05, 0.15, 0.05] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_50%_50%,#1d4ed8_0%,transparent_50%)]"
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
//           {/* Version Badge */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }}
//             className="px-4 py-1.5 rounded-full bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-blue-500/20 mb-8 backdrop-blur-sm"
//           >
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-400">
//               Softlink v2.0
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.85]"
//           >
//             Infrastructure <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800 dark:from-cyan-300 dark:to-blue-600">
//               Perfected.
//             </span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ delay: 0.4 }}
//             className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
//           >
//             High-end IT hardware and networking solutions designed for 
//             performance, security, and the future of business.
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ delay: 0.6 }} 
//             className="flex flex-col sm:flex-row gap-4"
//           >
//            <button 
//   onClick={() => window.location.hash = 'get-started'}
//   className="group px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-2xl shadow-blue-500/20"
// >
//   Get Started 
//   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
// </button>
//             <button 
//   onClick={() => {
//     const element = document.getElementById('products');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // Fallback: if section doesn't exist, just go to top
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }}
//   className="px-10 py-4 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
// >
//   Our Products
// </button>
//           </motion.div>
//         </div>

//         {/* Floating Interactive Elements */}
//         <div className="hidden lg:block">
//            <FloatingTag icon={<ShieldCheck size={16}/>} text="Security" top="15%" left="10%" delay={1} />
//            <FloatingTag icon={<Zap size={16}/>} text="Networking" top="70%" left="5%" delay={1.4} />
//            <FloatingTag icon={<Laptop size={16}/>} text="IT Sales" top="30%" right="8%" delay={1.8} />
//         </div>
//       </div>
//     </section>
//   );
// };

// const FloatingTag = ({ icon, text, top, left, right, delay }: any) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }} 
//     animate={{ 
//       opacity: 1, 
//       y: [0, -15, 0],
//     }} 
//     transition={{ 
//       opacity: { delay, duration: 1 },
//       y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
//     }}
//     style={{ top, left, right }} 
//     className="absolute flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-blue-500/5"
//   >
//     <div className="text-blue-600 dark:text-cyan-400">{icon}</div>
//     <span className="text-[10px] font-bold dark:text-slate-100 text-slate-800 uppercase tracking-[0.2em]">{text}</span>
//   </motion.div>
// );

// export default Hero;


"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#333333] transition-colors duration-700">
      
      {/* --- BRANDED ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Static Grid */}
        <div 
          className="absolute inset-0 h-full w-full 
          [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] 
          dark:[background-image:radial-gradient(#4a4a4a_1px,transparent_1px)] 
          [background-size:40px_40px] 
          [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" 
        />
        
        {/* Softlink Teal Drifting Layer */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0px 0px", "40px 40px"] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-30 dark:opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #25C1C5 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Brand Glow Pulse (Dark Mode Only) */}
        <motion.div 
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_50%_50%,#25C1C5_0%,transparent_55%)]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Version Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-slate-100/50 dark:bg-[#25C1C5]/10 border border-slate-200 dark:border-[#25C1C5]/30 mb-8 backdrop-blur-sm"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#25C1C5]">
              Softlink v2.0
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-[#333333] dark:text-white mb-8 leading-[0.85]"
          >
            Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#25C1C5] to-[#1a8a8d] dark:from-[#25C1C5] dark:to-[#49D1D5]">
              Perfected.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            High-end IT hardware and networking solutions designed for 
            performance, security, and the future of business.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6 }} 
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => window.location.hash = 'get-started'}
              className="group px-10 py-4 bg-[#25C1C5] text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-[#25C1C5]/20 hover:bg-[#1eb0b4]"
            >
              Get Started 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <motion.a
  href="/dashboard/quotations" // Replace with your WhatsApp link or mailto:info@softlink.com
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block"
>
  <button 
    className="px-10 py-4 border border-slate-200 dark:border-white/20 text-[#333333] dark:text-white rounded-full font-bold hover:bg-[#25C1C5] hover:text-white hover:border-[#25C1C5] transition-all duration-300"
  >
    Get Quotation
  </button>
</motion.a>
          </motion.div>
        </div>

        {/* Floating Branded Tags */}
        <div className="hidden lg:block">
           <FloatingTag icon={<ShieldCheck size={16}/>} text="Security" top="15%" left="10%" delay={1} />
           <FloatingTag icon={<Zap size={16}/>} text="Networking" top="70%" left="5%" delay={1.4} />
           <FloatingTag icon={<Laptop size={16}/>} text="IT Sales" top="30%" right="8%" delay={1.8} />
        </div>
      </div>
    </section>
  );
};

const FloatingTag = ({ icon, text, top, left, right, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ 
      opacity: 1, 
      y: [0, -15, 0],
    }} 
    transition={{ 
      opacity: { delay, duration: 1 },
      y: { repeat: Infinity, duration: 6, ease: "easeInOut" } 
    }}
    style={{ top, left, right }} 
    className="absolute flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-[#333333]/80 backdrop-blur-xl border border-slate-200 dark:border-[#25C1C5]/30 rounded-2xl shadow-2xl shadow-[#25C1C5]/5"
  >
    <div className="text-[#25C1C5]">{icon}</div>
    <span className="text-[10px] font-bold dark:text-slate-100 text-[#333333] uppercase tracking-[0.2em]">{text}</span>
  </motion.div>
);

export default Hero;