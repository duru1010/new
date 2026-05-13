// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Network, 
//   Wifi, 
//   ShieldCheck, 
//   Globe, 
//   Cpu, 
//   Workflow, 
//   Radio, 
//   Server,
//   ArrowRight,
//   Database,
//   Unplug
// } from 'lucide-react';

// const NetworkingPage = () => {
//   const coreServices = [
//     {
//       title: "Structured Cabling",
//       desc: "Neat, labeled, and certified Cat6/Fiber installations that eliminate downtime and cable clutter.",
//       icon: <Unplug size={28} />,
//       gradient: "from-indigo-600 to-violet-500"
//     },
//     {
//       title: "Enterprise Wi-Fi",
//       desc: "High-density wireless solutions for offices and warehouses with seamless roaming and zero dead zones.",
//       icon: <Wifi size={28} />,
//       gradient: "from-slate-800 to-indigo-950"
//     },
//     {
//       title: "Network Security",
//       desc: "Fortinet & Sophos firewall integration to protect your data from ransomware and external threats.",
//       icon: <ShieldCheck size={28} />,
//       gradient: "from-violet-600 to-indigo-400"
//     },
//     {
//       title: "VPN & Remote Work",
//       desc: "Secure site-to-site VPNs and remote access solutions for a modern, hybrid workforce.",
//       icon: <Globe size={28} />,
//       gradient: "from-indigo-500 via-purple-500 to-violet-700"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      
//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-40 pb-20 overflow-hidden">
//         {/* Purple Data Grid Background */}
//         <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]" 
//              style={{ backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-3/5 text-center lg:text-left">
//               <motion.div 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-indigo-500/20"
//               >
//                 <Network size={16} /> Fast. Secure. Scalable.
//               </motion.div>
              
//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8"
//               >
//                 Reliable <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400">
//                   Infrastructure.
//                 </span>
//               </motion.h1>

//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-lg text-slate-500 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
//               >
//                 We build the backbone of your business. From high-speed fiber optics to certified server racks, Softlink ensures your network never skips a beat.
//               </motion.p>

//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-4"
//               >
//                 <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/30 transition-all flex items-center gap-3 active:scale-95">
//                   Free Site Audit <ArrowRight size={20} />
//                 </button>
//                 <button className="px-10 py-5 border-2 border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-black hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
//                   Our Portfolio
//                 </button>
//               </motion.div>
//             </div>

//             {/* Technical Illustration */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-2/5 relative"
//             >
//               <div className="relative p-8 bg-indigo-50 dark:bg-slate-900/50 rounded-[3rem] border border-indigo-100 dark:border-white/10 backdrop-blur-3xl overflow-hidden">
//                 <div className="flex flex-col gap-6">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-white/5">
//                       <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
//                         <Server size={24} />
//                       </div>
//                       <div className="flex-1 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
//                         <motion.div 
//                           animate={{ x: ['-100%', '100%'] }}
//                           transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
//                           className="w-1/3 h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICE CARDS --- */}
//       <section className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {coreServices.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl transition-all hover:border-indigo-500/50"
//               >
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-8 shadow-lg`}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h3>
//                 <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
//                   {service.desc}
//                 </p>
//                 <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 rounded-full" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- TECHNICAL SPECS SECTION --- */}
//       <section className="py-24 bg-slate-900 text-white overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-20">
//             <div className="lg:w-1/2">
//               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
//                 Structured <br /> Cabling Standards.
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-indigo-600"><Database size={20}/></div>
//                   <div>
//                     <h4 className="font-bold text-xl text-white">Fiber Optic Backbone</h4>
//                     <p className="text-slate-400 text-sm">OM3/OM4 Multi-mode and Single-mode fiber for lightning-fast data transfer between server rooms.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-violet-600"><Cpu size={20}/></div>
//                   <div>
//                     <h4 className="font-bold text-xl text-white">Certified Cat6A/Cat7</h4>
//                     <p className="text-slate-400 text-sm">Rigorous testing and certification for 10Gbps copper networking solutions.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-indigo-500/50"><Workflow size={20}/></div>
//                   <div>
//                     <h4 className="font-bold text-xl text-white">Rack Management</h4>
//                     <p className="text-slate-400 text-sm">Organized patch panels, cable trays, and UPS systems for a clean, professional server environment.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
//                <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 text-center">
//                   <span className="text-5xl font-black text-indigo-400">10G</span>
//                   <span className="text-xs uppercase font-bold tracking-widest mt-2 opacity-60">Ready Speed</span>
//                </div>
//                <div className="aspect-square rounded-[2rem] bg-indigo-600 flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-indigo-500/20">
//                   <span className="text-5xl font-black text-white">99.9%</span>
//                   <span className="text-xs uppercase font-bold tracking-widest mt-2 text-indigo-100">Uptime Goal</span>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FINAL CTA --- */}
//       <section className="py-24 text-center">
//         <div className="container mx-auto px-6">
//           <motion.div 
//             whileHover={{ scale: 1.01 }}
//             className="p-12 rounded-[3.5rem] bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-white/5 inline-block w-full max-w-4xl shadow-xl"
//           >
//             <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Need a Network Audit?</h3>
//             <p className="text-slate-500 dark:text-slate-300 mb-8 max-w-lg mx-auto">Our experts analyze your current cabling and provide a roadmap for 10G speeds and enhanced security.</p>
//             <button className="px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold hover:shadow-2xl transition-all shadow-indigo-500/30">
//               Schedule Free Site Visit
//             </button>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default NetworkingPage;




// "use client";

// import React, { useState , useEffect } from "react";

// import { motion } from "framer-motion";
// import {
//   Network,
//   Wifi,
//   ShieldCheck,
//   Globe,
//   Workflow,
//   Server,
//   ArrowRight,
//   Database,
//   Unplug,
//   Monitor,
//   PhoneCall,
//   Camera,
//   UserCheck,
//   HardDrive,
//   Router,
//   Cpu,
// } from "lucide-react";


// const NetworkingPage = () => {
//   // --- CORE SERVICES ---
//   const coreServices = [
//     {
//       title: "Structured Cabling",
//       desc: "Professional Cat6 & Fiber structured cabling solutions for Offices, SMEs, Clinics and Institutes.",
//       icon: <Unplug size={28} />,
//       gradient: "from-indigo-600 to-violet-500",
//     },
//     {
//       title: "Enterprise Wi-Fi & NAS",
//       desc: "High-speed wireless infrastructure with NAS storage and centralized backup solutions.",
//       icon: <Wifi size={28} />,
//       gradient: "from-slate-800 to-indigo-950",
//     },
//     {
//       title: "Network Security",
//       desc: "Firewall integration, surveillance systems and secure remote connectivity for businesses.",
//       icon: <ShieldCheck size={28} />,
//       gradient: "from-violet-600 to-indigo-400",
//     },
//     {
//       title: "VPN & Remote Access",
//       desc: "Secure remote access and VPN deployment for hybrid workplaces and teams.",
//       icon: <Globe size={28} />,
//       gradient: "from-indigo-500 via-purple-500 to-violet-700",
//     },
//   ];

//   // --- SERVICE CATALOG ---
//   const detailedServices = [
//     {
//       title: "Wired & Wireless Networking",
//       desc: "Complete networking setup solutions for Offices, SMEs, Shops, Clinics and Institutes.",
//       color: "bg-indigo-600",
//       subItems: [
//         {
//           name: "LAN Network Setup",
//           img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
//           icon: <Network size={16} />,
//         },
//         {
//           name: "WiFi Installation",
//           img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600",
//           icon: <Wifi size={16} />,
//         },
//         {
//           name: "Router Configuration",
//           img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600",
//           icon: <Router size={16} />,
//         },
//         {
//           name: "Structured Cabling",
//           img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
//           icon: <Unplug size={16} />,
//         },
//       ],
//     },

//     {
//       title: "NAS & Server Solutions",
//       desc: "Secure storage, backup and centralized server infrastructure for businesses.",
//       color: "bg-violet-600",
//       subItems: [
//         {
//           name: "NAS Storage Setup",
//           img: "https://images.unsplash.com/photo-1628527302488-348f9e201083?auto=format&fit=crop&q=80&w=600",
//           icon: <Database size={16} />,
//         },
//         {
//           name: "Server Installation",
//           img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
//           icon: <Server size={16} />,
//         },
//         {
//           name: "Cloud Backup Systems",
//           img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
//           icon: <HardDrive size={16} />,
//         },
//         {
//           name: "Remote Access VPN",
//           img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
//           icon: <Globe size={16} />,
//         },
//       ],
//     },

//     {
//       title: "Office Communication Systems",
//       desc: "Modern office communication and collaboration infrastructure setup.",
//       color: "bg-purple-600",
//       subItems: [
//         {
//           name: "IP PBX Systems",
//           img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
//           icon: <PhoneCall size={16} />,
//         },
//         {
//           name: "Intercom Solutions",
//           img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600",
//           icon: <Workflow size={16} />,
//         },
//         {
//           name: "Conference Setup",
//           img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600",
//           icon: <Monitor size={16} />,
//         },
//         {
//           name: "Projector Systems",
//           img: "https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=600",
//           icon: <Cpu size={16} />,
//         },
//       ],
//     },

//     {
//       title: "Security & Monitoring",
//       desc: "Advanced surveillance and attendance monitoring solutions for modern workplaces.",
//       color: "bg-blue-600",
//       subItems: [
//         {
//           name: "CCTV Installation",
//           img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=600",
//           icon: <Camera size={16} />,
//         },
//         {
//           name: "Remote CCTV Monitoring",
//           img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
//           icon: <ShieldCheck size={16} />,
//         },
//         {
//           name: "Attendance Machines",
//           img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600",
//           icon: <UserCheck size={16} />,
//         },
//         {
//           name: "Security Network Setup",
//           img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
//           icon: <ShieldCheck size={16} />,
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* HERO SECTION */}
//       <section className="relative pt-40 pb-20 overflow-hidden">
//         <div
//           className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]"
//           style={{
//             backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-3/5 text-center lg:text-left">
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-indigo-500/20"
//               >
//                 <Network size={16} />
//                 Elite IT & Networking Partner
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8"
//               >
//                 Smart Tech for <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400">
//                   Modern SMEs.
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-lg text-slate-500 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
//               >
//                 We set up Wired, Wireless networks and NAS solutions for
//                 Offices, Companies, Institutes, Shops and Clinics. We also
//                 provide Routers, IP PBX Systems, Projectors, CCTV Cameras and
//                 Attendance Machines.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap justify-center lg:justify-start gap-4"
//               >
//                 <button className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-2xl shadow-indigo-500/30 transition-all flex items-center gap-3">
//                   Get a Setup Quote <ArrowRight size={20} />
//                 </button>

//                 <button className="px-10 py-5 border-2 border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-black hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
//                   Browse Solutions
//                 </button>
//               </motion.div>
//             </div>

//             {/* HERO CARD */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-2/5 relative"
//             >
//               <div className="relative p-8 bg-indigo-50 dark:bg-slate-900/50 rounded-[3rem] border border-indigo-100 dark:border-white/10 backdrop-blur-3xl overflow-hidden">
//                 <div className="flex flex-col gap-6">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-white/5"
//                     >
//                       <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
//                         <Server size={24} />
//                       </div>

//                       <div className="flex-1 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
//                         <motion.div
//                           animate={{ x: ["-100%", "100%"] }}
//                           transition={{
//                             duration: 2.5,
//                             repeat: Infinity,
//                             ease: "linear",
//                             delay: i * 0.4,
//                           }}
//                           className="w-1/3 h-full bg-indigo-500"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CORE SERVICES */}
//       <section className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
//               Network Solutions
//             </h2>

//             <p className="text-slate-500 dark:text-slate-400 text-lg">
//               Customized infrastructure for Offices, Clinics, Shops and SMEs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {coreServices.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
//               >
//                 <div
//                   className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6`}
//                 >
//                   {service.icon}
//                 </div>

//                 <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
//                   {service.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICE CATALOG */}
//       <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
//               Explore Our{" "}
//               <span className="text-purple-600">Tech Universe.</span>
//             </h2>

//             <p className="text-slate-500 dark:text-slate-400 text-lg">
//               Professional networking, communication and surveillance solutions
//               for modern businesses.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-20">
//             {detailedServices.map((service, sIndex) => (
//               <div key={sIndex}>
//                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
//                   <div className="max-w-xl">
//                     <div
//                       className={`w-12 h-1.5 ${service.color} mb-6 rounded-full`}
//                     />

//                     <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
//                       {service.title}
//                     </h3>

//                     <p className="text-slate-500 dark:text-slate-400">
//                       {service.desc}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {service.subItems.map((item, iIndex) => (
//                     <motion.div
//                       key={iIndex}
//                       whileHover={{ y: -8 }}
//                       className="relative group h-96 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-white/5"
//                     >
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
//                       />

//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

//                       <div className="absolute bottom-0 left-0 right-0 p-6">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className="p-2 bg-purple-600 rounded-lg text-white">
//                             {item.icon}
//                           </span>

//                           <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">
//                             Premium Solution
//                           </span>
//                         </div>

//                         <h4 className="text-xl font-bold text-white tracking-tight mb-4">
//                           {item.name}
//                         </h4>

//                         <button className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300">
//                           Check Availability
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TECH SECTION */}
//       <section className="py-24 bg-slate-900 text-white overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-20">
//             <div className="lg:w-1/2">
//               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
//                 Enterprise <br /> Grade Deployment.
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-indigo-600">
//                     <Database size={20} />
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-xl text-white">
//                       Secure NAS Configuration
//                     </h4>

//                     <p className="text-slate-400 text-sm">
//                       RAID data protection and automated cloud sync for Offices
//                       and Clinics.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-violet-600">
//                     <UserCheck size={20} />
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-xl text-white">
//                       Attendance Systems
//                     </h4>

//                     <p className="text-slate-400 text-sm">
//                       Biometric attendance and centralized monitoring solutions.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-2 rounded-lg bg-indigo-500/50">
//                     <HardDrive size={20} />
//                   </div>

//                   <div>
//                     <h4 className="font-bold text-xl text-white">
//                       Quality Hardware
//                     </h4>

//                     <p className="text-slate-400 text-sm">
//                       High-performance networking infrastructure with enterprise
//                       reliability.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
//               <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8 text-center">
//                 <span className="text-5xl font-black text-indigo-400">
//                   10G
//                 </span>

//                 <span className="text-xs uppercase font-bold tracking-widest mt-2 opacity-60">
//                   Fibre Ready
//                 </span>
//               </div>

//               <div className="aspect-square rounded-[2rem] bg-indigo-600 flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-indigo-500/20">
//                 <span className="text-5xl font-black text-white">WiFi6</span>

//                 <span className="text-xs uppercase font-bold tracking-widest mt-2 text-indigo-100">
//                   Smart Access
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 text-center">
//         <div className="container mx-auto px-6">
//           <motion.div
//             whileHover={{ scale: 1.01 }}
//             className="p-12 rounded-[3.5rem] bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-white/5 inline-block w-full max-w-4xl shadow-xl"
//           >
//             <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
//               Modernize Your Workspace?
//             </h3>

//             <p className="text-slate-500 dark:text-slate-300 mb-8 max-w-lg mx-auto">
//               From structured cabling to enterprise networking, we provide
//               complete IT infrastructure solutions for your business growth.
//             </p>

//             <button className="px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold hover:shadow-2xl transition-all shadow-indigo-500/30">
//               Schedule Site Visit
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NetworkingPage;


"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Network,
  Wifi,
  ShieldCheck,
  Globe,
  Workflow,
  Server,
  ArrowRight,
  Database,
  Unplug,
  Monitor,
  PhoneCall,
  Camera,
  UserCheck,
  HardDrive,
  Router,
  Cpu,
} from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- MODAL ---
const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("");

  if (!isOpen) return null;

  // return (
  //   <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
  //       <motion.div 
  //           initial={{ opacity: 0, scale: 0.95 }}
  //           animate={{ opacity: 1, scale: 1 }}
  //           className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 max-w-lg w-full shadow-2xl border border-slate-200 dark:border-white/10"
  //       >
  //           <div className="flex justify-between items-center mb-6">
  //               <h3 className="text-2xl font-black dark:text-white">Get Started</h3>
  //               <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-white">✕</button>
  //           </div>
  //           <p className="text-slate-500 dark:text-slate-400 mb-4">Request a quote for your networking setup.</p>
  //           {/* Modal Content Logic Here */}
  //       </motion.div>
  //   </div>
  // );
};

const NetworkingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#get-started") {
        setIsModalOpen(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // --- CORE SERVICES ---
  const coreServices = [
    {
      title: "Structured Cabling",
      desc: "Professional Cat6 & Fiber structured cabling solutions for Offices, SMEs, Clinics and Institutes.",
      icon: <Unplug size={28} />,
      gradient: "from-indigo-600 to-violet-500",
    },
    {
      title: "Enterprise Wi-Fi & NAS",
      desc: "High-speed wireless infrastructure with NAS storage and centralized backup solutions.",
      icon: <Wifi size={28} />,
      gradient: "from-slate-800 to-indigo-950",
    },
    {
      title: "Network Security",
      desc: "Firewall integration, surveillance systems and secure remote connectivity for businesses.",
      icon: <ShieldCheck size={28} />,
      gradient: "from-violet-600 to-indigo-400",
    },
    {
      title: "VPN & Remote Access",
      desc: "Secure remote access and VPN deployment for hybrid workplaces and teams.",
      icon: <Globe size={28} />,
      gradient: "from-indigo-500 via-purple-500 to-violet-700",
    },
  ];

  // --- SERVICE CATALOG ---
  const detailedServices = [
    {
      title: "Wired & Wireless Networking",
      desc: "Complete networking setup solutions for Offices, SMEs, Shops, Clinics and Institutes.",
      color: "bg-indigo-600",
      subItems: [
        { name: "LAN Network Setup", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600", icon: <Network size={16} /> },
        { name: "WiFi Installation", img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600", icon: <Wifi size={16} /> },
        { name: "Router Configuration", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600", icon: <Router size={16} /> },
        { name: "Structured Cabling", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600", icon: <Unplug size={16} /> },
      ],
    },
    {
      title: "NAS & Server Solutions",
      desc: "Secure storage, backup and centralized server infrastructure for businesses.",
      color: "bg-violet-600",
      subItems: [
        { name: "NAS Storage Setup", img: "https://images.unsplash.com/photo-1628527302488-348f9e201083?auto=format&fit=crop&q=80&w=600", icon: <Database size={16} /> },
        { name: "Server Installation", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600", icon: <Server size={16} /> },
        { name: "Cloud Backup Systems", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", icon: <HardDrive size={16} /> },
        { name: "Remote Access VPN", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600", icon: <Globe size={16} /> },
      ],
    },
    {
        title: "Office Communication Systems",
        desc: "Modern office communication and collaboration infrastructure setup.",
        color: "bg-purple-600",
        subItems: [
          { name: "IP PBX Systems", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600", icon: <PhoneCall size={16} /> },
          { name: "Intercom Solutions", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600", icon: <Workflow size={16} /> },
          { name: "Conference Setup", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600", icon: <Monitor size={16} /> },
          { name: "Projector Systems", img: "https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&fit=crop&q=80&w=600", icon: <Cpu size={16} /> },
        ],
      },
      {
        title: "Security & Monitoring",
        desc: "Advanced surveillance and attendance monitoring solutions for modern workplaces.",
        color: "bg-blue-600",
        subItems: [
          { name: "CCTV Installation", img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=600", icon: <Camera size={16} /> },
          { name: "Remote CCTV Monitoring", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", icon: <ShieldCheck size={16} /> },
          { name: "Attendance Machines", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600", icon: <UserCheck size={16} /> },
          { name: "Security Network Setup", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600", icon: <ShieldCheck size={16} /> },
        ],
      },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden">
  {/* Updated radial gradient to Electric Blue (#0070f3) */}
  <div 
    className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.1]" 
    style={{ backgroundImage: `radial-gradient(#0070f3 1px, transparent 1px)`, backgroundSize: "40px 40px" }} 
  />
  
  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-3/5 text-center lg:text-left">
        {/* Badge: Electric Blue theme */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/20"
        >
          <Network size={16} /> Elite IT & Networking Partner
        </motion.div>

        {/* Heading: Electric Blue to Sky Blue gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8"
        >
          Smart Tech for <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400">
            Modern SMEs.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="text-lg text-slate-500 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          We set up Wired, Wireless networks and NAS solutions for Offices, Companies, Institutes, Shops and Clinics.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }} 
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          {/* Button: Electric Blue with Sky Blue glow */}
          <button 
            onClick={openModal} 
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-2xl shadow-blue-500/30 transition-all flex items-center gap-3"
          >
            Get a Setup Quote <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Decorative Side Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="lg:w-2/5 relative"
      >
        <div className="relative p-8 bg-sky-50 dark:bg-slate-900/50 rounded-[3rem] border border-sky-100 dark:border-white/10 backdrop-blur-3xl overflow-hidden">
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-white/5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Server size={24} />
                </div>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }} 
                    className="w-1/3 h-full bg-blue-500" 
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

      {/* CORE SERVICES */}
      <section className="py-24 relative">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
      Network Solutions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
      {coreServices.map((service, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="group relative bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
        >
          {/* Updated gradient to use Electric Blue and Sky Blue scales */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* SERVICE CATALOG */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-20">
            {detailedServices.map((service, sIndex) => (
              <div key={sIndex}>
                <div className="max-w-xl mb-10">
                  <div className={`w-12 h-1.5 ${service.color} mb-6 rounded-full`} />
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{service.desc}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.subItems.map((item, iIndex) => (
                    <motion.div key={iIndex} whileHover={{ y: -8 }} className="relative group h-96 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-white/5">
                      <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                       <div className="flex items-center gap-2 mb-2">
  {/* Changed bg-purple-600 to bg-blue-600 for the Electric Blue look */}
  <span className="p-2 bg-blue-600 rounded-lg text-white">
    {item.icon}
  </span>
</div>
                        <h4 className="text-xl font-bold text-white mb-4">{item.name}</h4>
                        {/* Find this section in your "SERVICE CATALOG" map */}
<button
  onClick={() => {
    // This opens the modal immediately
    openModal(); 
    
    // Optional: Update the hash for URL tracking
    window.location.hash = "get-started";
    
    // Smooth scroll to top so the modal is centered in view
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
>
  Hire Now <ArrowRight size={16} />
</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Enterprise Grade Deployment.</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-indigo-600"><Database size={20} /></div>
                            <div><h4 className="font-bold text-xl">Secure NAS Configuration</h4><p className="text-slate-400 text-sm">RAID protection and automated sync.</p></div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center p-8">
                        <span className="text-5xl font-black text-indigo-400">10G</span>
                        <span className="text-xs uppercase font-bold tracking-widest mt-2 opacity-60">Fibre Ready</span>
                    </div>
                    <div className="aspect-square rounded-[2rem] bg-indigo-600 flex flex-col items-center justify-center p-8 shadow-2xl">
                        <span className="text-5xl font-black text-white">WiFi6</span>
                        <span className="text-xs uppercase font-bold mt-2">Smart Access</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div whileHover={{ scale: 1.01 }} className="p-12 rounded-[3.5rem] bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-white/5 inline-block w-full max-w-4xl shadow-xl">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Modernize Your Workspace?</h3>
            <button onClick={openModal} className="px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all">Schedule Site Visit</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NetworkingPage;