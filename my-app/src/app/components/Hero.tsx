

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Laptop, ShieldCheck, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative h-[800px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#333333] transition-colors duration-700">
      
//       {/* --- BRANDED ANIMATED BACKGROUND --- */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Base Static Grid */}
//         <div 
//           className="absolute inset-0 h-full w-full 
//           [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] 
//           dark:[background-image:radial-gradient(#4a4a4a_1px,transparent_1px)] 
//           [background-size:40px_40px] 
//           [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" 
//         />
        
//         {/* Softlink Teal Drifting Layer */}
//         <motion.div 
//           animate={{ 
//             backgroundPosition: ["0px 0px", "40px 40px"] 
//           }}
//           transition={{ 
//             duration: 8, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//           className="absolute inset-0 opacity-30 dark:opacity-40"
//           style={{
//             backgroundImage: 'radial-gradient(circle, #25C1C5 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />

//         {/* Brand Glow Pulse (Dark Mode Only) */}
//         <motion.div 
//           animate={{ opacity: [0.05, 0.12, 0.05] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_50%_50%,#25C1C5_0%,transparent_55%)]"
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
//           {/* Version Badge */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }}
//             className="px-4 py-1.5 rounded-full bg-slate-100/50 dark:bg-[#25C1C5]/10 border border-slate-200 dark:border-[#25C1C5]/30 mb-8 backdrop-blur-sm"
//           >
//             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#25C1C5]">
//               Softlink v2.0
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1 
//             initial={{ opacity: 0, scale: 0.95 }} 
//             animate={{ opacity: 1, scale: 1 }} 
//             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//             className="text-6xl md:text-8xl font-black tracking-tighter text-[#333333] dark:text-white mb-8 leading-[0.85]"
//           >
//             Infrastructure <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#25C1C5] to-[#1a8a8d] dark:from-[#25C1C5] dark:to-[#49D1D5]">
//               Perfected.
//             </span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ delay: 0.4 }}
//             className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed"
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
//             <button 
//               onClick={() => window.location.hash = 'get-started'}
//               className="group px-10 py-4 bg-[#25C1C5] text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl shadow-[#25C1C5]/20 hover:bg-[#1eb0b4]"
//             >
//               Get Started 
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <motion.a
//   href="/dashboard/quotations" // Replace with your WhatsApp link or mailto:info@softlink.com
//   target="_blank"
//   rel="noopener noreferrer"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="inline-block"
// >
//   <button 
//     className="px-10 py-4 border border-slate-200 dark:border-white/20 text-[#333333] dark:text-white rounded-full font-bold hover:bg-[#25C1C5] hover:text-white hover:border-[#25C1C5] transition-all duration-300"
//   >
//     Get Quotation
//   </button>
// </motion.a>
//           </motion.div>
//         </div>

//         {/* Floating Branded Tags */}
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
//     className="absolute flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-[#333333]/80 backdrop-blur-xl border border-slate-200 dark:border-[#25C1C5]/30 rounded-2xl shadow-2xl shadow-[#25C1C5]/5"
//   >
//     <div className="text-[#25C1C5]">{icon}</div>
//     <span className="text-[10px] font-bold dark:text-slate-100 text-[#333333] uppercase tracking-[0.2em]">{text}</span>
//   </motion.div>
// );

// export default Hero;



// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, ShieldCheck, Zap, Cpu, RefreshCw, CheckCircle, MousePointerClick } from 'lucide-react';
// import Link from 'next/link';

// const Hero = () => {
//   const [imageIndex, setImageIndex] = useState(0);

//   const images = [
//     "/b058c545a8c24bd9ec1fbb9d2193ade7.jpg", 
//     "/b5429ffaffaf5dd621a36843ac85c782.jpg", 
//     "/e0b48f31b03a5057a71bf13e5790f771.jpg",
//   ];

//   const handleImageClick = () => {
//     setImageIndex((prev) => (prev === 0 ? 1 : 0));
//   };

//   return (
//     <section className="relative min-h-[900px] lg:h-[850px] w-full flex items-center justify-center overflow-hidden bg-[#F0F4FF] pt-24 pb-12 lg:py-0">
      
//       {/* --- BACKGROUND NODES --- */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 h-full w-full [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent,white)] opacity-100%" />
        
//         <div className="absolute top-[3%] right-[5%] lg:top-[5%] lg:right-[5%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
//           <div className="absolute inset-0 bg-[#0057FF]/20 blur-[60px] lg:blur-[80px] rounded-full animate-pulse" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-[#4DA6FF] rounded-full shadow-[0_0_30px_#4DA6FF]" />
//         </div>

//         <div className="absolute bottom-[3%] left-[5%] lg:bottom-[5%] lg:left-[3%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
//           <div className="absolute inset-0 bg-[#0057FF]/10 blur-[70px] lg:blur-[90px] rounded-full" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 lg:w-3 lg:h-3 bg-[#0057FF] rounded-full shadow-[0_0_25px_#0057FF]" />
//         </div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* --- CONTENT BLOCK --- */}
//           <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
//             <motion.div 
//               initial={{ opacity: 0, y: -10 }} 
//               animate={{ opacity: 1, y: 0 }} 
//               className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057FF]/5 border border-[#4DA6FF]/20 mb-6 lg:mb-8"
//             >
//               <CheckCircle size={14} className="text-[#0057FF]" />
//               <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] text-[#0057FF]">
//                 Trusted by 1,000+ Businesses
//               </span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, y: 30 }} 
//               animate={{ opacity: 1, y: 0 }} 
//               className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0A1628] mb-6 lg:mb-8 leading-[1.1]"
//             >
//               Online Solutions <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] via-[#4DA6FF] to-[#0057FF]">
//                 To Boost Business.
//               </span>
//             </motion.h1>

//             <motion.p className="text-base lg:text-lg text-slate-600 mb-8 lg:mb-10 max-w-lg leading-relaxed font-medium">
//               From high-performance WFH Setups and Software Licenses to 
//               advanced Surveillance Systems, we provide the tech core for your growth.
//             </motion.p>

//             <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
//               {/* Primary Action */}
//                <Link href="/dashboard/quotations" className="w-full sm:w-auto">
//               <button className="group w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-[#0057FF] text-white rounded-2xl font-bold transition-all hover:bg-[#0046CC] hover:shadow-2xl hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-3">
//                 Get Quotation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//               </Link>
              
//               {/* Client Stats */}
//               <div className="hidden sm:flex flex-col items-center lg:items-start px-4 border-l border-slate-200">
//                 <p className="text-[#0A1628] font-bold text-sm">Satisfied Clients</p>
//                 <p className="text-slate-500 text-xs font-medium">Active since 2012</p>
//               </div>
//             </div>
//           </div>

//           {/* --- IMAGE BLOCK WITH INTERACTIVE INDICATORS --- */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="relative flex items-center justify-center order-1 lg:order-2"
//           >
//             <div 
//               onClick={handleImageClick}
//               className="relative z-20 group w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[520px] cursor-pointer"
//             >
//               <div className="absolute -inset-8 pointer-events-none">
//                 <div className="absolute inset-0 bg-[#4DA6FF]/20 rounded-full blur-3xl animate-pulse scale-75" />
//               </div>
              
//               <div className="absolute -inset-4 bg-gradient-to-tr from-[#4DA6FF]/30 to-[#0057FF]/30 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity" />
              
//               <div className="relative aspect-square rounded-[2rem] lg:rounded-[3rem] bg-white border border-slate-100 shadow-2xl overflow-hidden p-2 lg:p-3">
//                 <div className="w-full h-full rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-slate-100 relative">
                  
//                   <AnimatePresence mode="wait">
//                     <motion.img 
//                       key={imageIndex}
//                       initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
//                       animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                       exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
//                       transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
//                       src={images[imageIndex]} 
//                       alt="Business Infrastructure" 
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                   </AnimatePresence>

//                   <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-all duration-500 flex flex-col items-center justify-center gap-4">
//                     <div className="relative">
//                        <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-150 animate-ping opacity-0 group-hover:opacity-100" />
//                        <RefreshCw className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-180" size={48} />
//                     </div>
//                     <span className="text-white font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//                         CLICK TO SWITCH VIEW
//                     </span>
//                   </div>
//                 </div>

//                 <motion.div 
//                     animate={{ scale: [1, 1.1, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                     className="absolute top-6 left-6 z-30 bg-[#0057FF] text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg lg:hidden"
//                 >
//                     <MousePointerClick size={14} />
//                     <span className="text-[10px] font-bold">Tap to interact</span>
//                 </motion.div>
//               </div>
//             </div>

//             <div className="hidden sm:block">
//                <FloatingTag icon={<ShieldCheck size={16}/>} text="Licenses" top="5%" right="-5%" delay={1.2} />
//                <FloatingTag icon={<Zap size={16}/>} text="WFH Ready" bottom="15%" left="-10%" delay={1.5} />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// const FloatingTag = ({ icon, text, top, left, right, delay }: any) => (
//   <motion.div 
//     animate={{ y: [0, -10, 0] }} 
//     transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: delay * 0.3 }}
//     style={{ top, left, right }} 
//     className="absolute z-30 flex items-center gap-2 px-4 py-3 lg:px-6 lg:py-4 bg-white/90 backdrop-blur-md border border-[#4DA6FF]/20 rounded-xl lg:rounded-2xl shadow-xl"
//   >
//     <div className="text-[#0057FF]">{icon}</div>
//     <span className="text-[8px] lg:text-[10px] font-bold text-[#0A1628] uppercase tracking-[0.2em]">{text}</span>
//   </motion.div>
// );

// export default Hero;




"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroSlides = [
    {
      category: "Work From Home",
      title: "Work From Home Setups.",
      subtitle:
        "From high-performance WFH setups and software licenses to advanced surveillance systems, we provide the tech core for your growth.",
      image: "/42b545243714fe4e5a9f43a83e18c144.jpg",
    },
    {
      category: "Networking",
      title: "Smart Networking Infrastructure.",
      subtitle:
        "We build secure, scalable, and high-speed networking systems for modern enterprises.",
      image: "/44ce9146a2561c3d94e8d2e7abd8c537.jpg",
    },
    {
      category: "Security",
      title: "Advanced CCTV & Security Systems.",
      subtitle:
        "AI-powered surveillance and real-time monitoring for complete business protection.",
      image: "/5e8037b9f4f4b90e55640a069fc59ad7.jpg",
    },
    {
      category: "Security",
      title: "Rental & Repair Services.",
      subtitle:
        "Affordable rental, installation, maintenance, and expert repair services for homes, offices, and businesses.",
      image: "/d180a616ed782721668672cb41c96bc1.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ✅ FIXED SCROLL FUNCTION
 const scrollToSection = (id: string) => {
  const el = document.getElementById(id);

  if (!el) {
    console.log("Section not found:", id);
    return;
  }

  const offset = 90; // navbar height
  const top =
    el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    left: 0,
    top: top,
    behavior: "smooth",
  });
};

  return (
    <section className="relative min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#F0F4FF] pt-24 pb-12">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 h-full w-full [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />

        <div className="absolute top-[3%] right-[5%] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
          <div className="absolute inset-0 bg-[#0057FF]/20 blur-[60px] rounded-full animate-pulse" />
        </div>

        <div className="absolute bottom-[3%] left-[5%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]">
          <div className="absolute inset-0 bg-[#0057FF]/10 blur-[70px] rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="max-w-2xl">
          
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="text-blue-600" size={16} />
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              Trusted by 1,000+ Businesses
            </span>
          </div>

          <AnimatePresence mode="wait">
  <motion.h1
    key={`title-${activeIndex}`}
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -80 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="text-5xl md:text-7xl font-black text-[#0A1628] dark:text-white leading-[0.95] tracking-tight mb-6"
  >
    {heroSlides[activeIndex].title.split(" ").slice(0, -2).join(" ")}{" "}

    <span className="text-[#0057FF]">
      {heroSlides[activeIndex].title.split(" ").slice(-2).join(" ")}
    </span>
  </motion.h1>
</AnimatePresence>

{/* SUBTITLE */}
<AnimatePresence mode="wait">
  <motion.p
    key={`subtitle-${activeIndex}`}
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed"
  >
    {heroSlides[activeIndex].subtitle}
  </motion.p>
</AnimatePresence>

          {/* DOTS */}
          <div className="flex gap-3 mt-6">
            {heroSlides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                animate={{
                  width: i === activeIndex ? 28 : 10,
                  backgroundColor: i === activeIndex ? "#2563eb" : "#cbd5e1",
                }}
                className="h-2.5 rounded-full"
              />
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            {/* ✅ FIXED BUTTON */}
            <button
              onClick={() => scrollToSection("services")}
             className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20"
            >
              Get Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
             className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold flex items-center gap-2 shadow-lg"
            >
              Contact Us
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
  <AnimatePresence mode="wait">
    <motion.img
      key={`image-${activeIndex}`}
      src={heroSlides[activeIndex].image}
      alt="hero"
      initial={{ opacity: 0, x: 120, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -120, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full max-w-[520px] aspect-square object-cover rounded-[3rem] shadow-2xl"
    />
  </AnimatePresence>
</div>
      </div>
    </section>
  );
};

export default Hero;