// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShieldCheck,
//   Video,
//   Zap,
//   ArrowRight,
//   Wrench,
//   Monitor,
//   Package,
//   X,
//   Laptop,
//   Router,
//   Camera,
// } from "lucide-react";

// // ✅ TYPES
// interface CheckAvailabilityProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // --- MODAL SUB-COMPONENT ---
// const CheckAvailability: React.FC<CheckAvailabilityProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedType, setSelectedType] = useState<string>("");

//   const categories = [
//     {
//       id: "laptop",
//       label: "Laptops",
//       icon: <Laptop size={20} />,
//     },
//     {
//       id: "desktop",
//       label: "Desktops",
//       icon: <Monitor size={20} />,
//     },
//     {
//       id: "network",
//       label: "Networking",
//       icon: <Router size={20} />,
//     },
//     {
//       id: "cctv",
//       label: "CCTV Systems",
//       icon: <Camera size={20} />,
//     },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
//           />

//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{
//               type: "spring",
//               damping: 25,
//               stiffness: 200,
//             }}
//             className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[101] p-8 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white">
//                   Check Availability
//                 </h3>

//                 <p className="text-sm text-slate-500">
//                   Step {step} of 2
//                 </p>
//               </div>

//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
//               >
//                 <X className="dark:text-white" />
//               </button>
//             </div>

//             {step === 1 ? (
//               <div className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat.id}
//                       onClick={() => setSelectedType(cat.id)}
//                       className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
//                         selectedType === cat.id
//                           ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600"
//                           : "border-slate-100 dark:border-slate-800 dark:text-slate-400"
//                       }`}
//                     >
//                       {cat.icon}

//                       <span className="font-bold text-sm">
//                         {cat.label}
//                       </span>
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   disabled={!selectedType}
//                   onClick={() => setStep(2)}
//                   className="w-full py-4 bg-indigo-600 disabled:opacity-50 text-white rounded-2xl font-bold mt-8"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none"
//                 />

//                 <button
//                   onClick={() => setStep(1)}
//                   className="w-full text-slate-500 font-bold"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const RepairRentalPage = () => {
//   const [isModalOpen, setIsModalOpen] =
//     useState<boolean>(false);

//   const features = [
//     {
//       icon: <Wrench size={24} />,
//       title: "Expert Hardware Repair",
//       desc:
//         "Comprehensive diagnostic and repair services for any desktop or laptop brand with genuine parts.",
//     },
//     {
//       icon: <Monitor size={24} />,
//       title: "Premium Rental Kits",
//       desc:
//         "Flexible rental options for high-end laptops, workstations, and full office infrastructure.",
//     },
//     {
//       icon: <Video size={24} />,
//       title: "CCTV Installation",
//       desc:
//         "Advanced surveillance setup with AI-driven monitoring to protect your workspace.",
//     },
//     {
//       icon: <Package size={24} />,
//       title: "Networking Hardware",
//       desc:
//         "Quick access to enterprise-grade routers, switches, and high-speed networking accessories.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* HERO SECTION */}
//       <section className="relative pt-40 pb-20 overflow-hidden">
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.05, 0.15, 0.05],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//             }}
//             className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-[120px]"
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
//               >
//                 <Zap size={14} />
//                 Full IT Support Solutions
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
//               >
//                 Repair & Rental <br />

//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
//                   Services.
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg"
//               >
//                 Softlink provides professional repair for all
//                 desktop and laptop brands, along with high-quality
//                 rental solutions for IT hardware, networking,
//                 and security.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-indigo-500/30 transition-all flex items-center gap-2"
//                 >
//                   Check Availability
//                   <ArrowRight size={18} />
//                 </button>

//                 <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
//                   Our Pricing
//                 </button>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 relative"
//             >
//               <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
//                 <img
//                   src="/1c568e7a37d7969b9ec210f09872e17e.jpg"
//                   alt="IT Repair Service"
//                   className="w-full object-cover h-[500px]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//               </div>

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//                 className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center">
//                     <ShieldCheck size={24} />
//                   </div>

//                   <div>
//                     <p className="text-xs font-bold text-slate-400 uppercase">
//                       Service Status
//                     </p>

//                     <p className="font-black text-slate-900 dark:text-white">
//                       Certified Technicians
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-20">
//             <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
//               Integrated IT Solutions
//             </h2>

//             <p className="text-slate-500 dark:text-slate-400">
//               Reliable hardware maintenance and scalable rental
//               plans for modern businesses.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -10 }}
//                 className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   {f.icon}
//                 </div>

//                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//                   {f.title}
//                 </h4>

//                 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}
//       <CheckAvailability
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default RepairRentalPage;













// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShieldCheck,
//   Video,
//   Zap,
//   ArrowRight,
//   Wrench,
//   Monitor,
//   Package,
//   X,
//   Laptop,
//   Router,
//   Camera,
//   Cpu,
//   HardDrive,
//   Server,
//   Shield
// } from "lucide-react";

// // --- TYPES ---
// interface CheckAvailabilityProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // --- MODAL SUB-COMPONENT ---
// const CheckAvailability: React.FC<CheckAvailabilityProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedType, setSelectedType] = useState<string>("");

//   const categories = [
//     {
//       id: "laptop",
//       label: "Laptops",
//       icon: <Laptop size={20} />,
//     },
//     {
//       id: "desktop",
//       label: "Desktops",
//       icon: <Monitor size={20} />,
//     },
//     {
//       id: "network",
//       label: "Networking",
//       icon: <Router size={20} />,
//     },
//     {
//       id: "cctv",
//       label: "CCTV Systems",
//       icon: <Camera size={20} />,
//     },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
//           />

//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{
//               type: "spring",
//               damping: 25,
//               stiffness: 200,
//             }}
//             className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[101] p-8 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white">
//                   Check Availability
//                 </h3>

//                 <p className="text-sm text-slate-500">
//                   Step {step} of 2
//                 </p>
//               </div>

//               <button
//                 onClick={onClose}
//                 className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
//               >
//                 <X className="dark:text-white" />
//               </button>
//             </div>

//             {step === 1 ? (
//               <div className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat.id}
//                       onClick={() => setSelectedType(cat.id)}
//                       className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
//                         selectedType === cat.id
//                           ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600"
//                           : "border-slate-100 dark:border-slate-800 dark:text-slate-400"
//                       }`}
//                     >
//                       {cat.icon}

//                       <span className="font-bold text-sm">
//                         {cat.label}
//                       </span>
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   disabled={!selectedType}
//                   onClick={() => setStep(2)}
//                   className="w-full py-4 bg-indigo-600 disabled:opacity-50 text-white rounded-2xl font-bold mt-8"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none"
//                 />

//                 <button
//                   onClick={() => setStep(1)}
//                   className="w-full text-slate-500 font-bold"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- SERVICE CATALOG COMPONENT ---
// const detailedServices = [
//   {
//     title: "Expert Hardware Repair",
//     desc: "Comprehensive diagnostic and repair services for any desktop or laptop brand with genuine parts.",
//     icon: <Wrench className="w-6 h-6" />,
//     image: "https://images.unsplash.com/photo-1597852074816-d933c4d2b988?q=80&w=1000&auto=format&fit=crop",
//     types: [
//       { name: "Chip-level Repair", icon: <Cpu size={14} /> },
//       { name: "Screen Replacement", icon: <Monitor size={14} /> },
//       { name: "Data Recovery", icon: <HardDrive size={14} /> },
//       { name: "OS Troubleshooting", icon: <Laptop size={14} /> }
//     ],
//   },
//   {
//     title: "Premium Rental Kits",
//     desc: "Flexible rental options for high-end laptops, workstations, and full office infrastructure.",
//     icon: <Monitor className="w-6 h-6" />,
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
//     types: [
//       { name: "Gaming Laptops", icon: <Zap size={14} /> },
//       { name: "Workstations", icon: <Server size={14} /> },
//       { name: "Projectors", icon: <Video size={14} /> },
//       { name: "Full Office Setup", icon: <Package size={14} /> }
//     ],
//   },
//   {
//     title: "CCTV Installation",
//     desc: "Advanced surveillance setup with AI-driven monitoring to protect your workspace.",
//     icon: <Video className="w-6 h-6" />,
//     image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=1000&auto=format&fit=crop",
//     types: [
//       { name: "IP Cameras", icon: <Camera size={14} /> },
//       { name: "Night Vision", icon: <Shield size={14} /> },
//       { name: "Remote Monitoring", icon: <Monitor size={14} /> },
//       { name: "DVR/NVR Storage", icon: <HardDrive size={14} /> }
//     ],
//   },
//   {
//     title: "Networking Hardware",
//     desc: "Quick access to enterprise-grade routers, switches, and high-speed networking accessories.",
//     icon: <Package className="w-6 h-6" />,
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
//     types: [
//       { name: "Wired/Wireless Routers", icon: <Router size={14} /> },
//       { name: "Network Switches", icon: <Server size={14} /> },
//       { name: "NAS Storage", icon: <Package size={14} /> },
//       { name: "Cat6/Fiber Cabling", icon: <Zap size={14} /> }
//     ],
//   }
// ];

// const ServiceCatalog = () => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950">
//       <div className="container mx-auto px-6">
//         <div className="max-w-2xl mb-16">
//           <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
//             Full Service <span className="text-purple-600">Inventory.</span>
//           </h2>
//           <p className="text-slate-500 dark:text-slate-400">
//             Browse our specialized tech services and equipment types available for immediate support or rental.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {detailedServices.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex flex-col md:flex-row bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm"
//             >
//               {/* Visual Side */}
//               <div className="w-full md:w-2/5 relative h-64 md:h-auto">
//                 <img 
//                   src={service.image} 
//                   alt={service.title} 
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/60 to-transparent" />
//                 <div className="absolute bottom-6 left-6 text-white bg-white/20 backdrop-blur-md p-3 rounded-2xl">
//                   {service.icon}
//                 </div>
//               </div>

//               {/* Data Side */}
//               <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
//                   {service.desc}
//                 </p>

//                 {/* Sub-Types Grid */}
//                 <div className="grid grid-cols-2 gap-3 mt-auto">
//                   {service.types.map((type, tIndex) => (
//                     <div 
//                       key={tIndex} 
//                       className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 shadow-sm"
//                     >
//                       <span className="text-purple-500">{type.icon}</span>
//                       <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
//                         {type.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const RepairRentalPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const features = [
//     {
//       icon: <Wrench size={24} />,
//       title: "Expert Hardware Repair",
//       desc: "Comprehensive diagnostic and repair services for any desktop or laptop brand with genuine parts.",
//     },
//     {
//       icon: <Monitor size={24} />,
//       title: "Premium Rental Kits",
//       desc: "Flexible rental options for high-end laptops, workstations, and full office infrastructure.",
//     },
//     {
//       icon: <Video size={24} />,
//       title: "CCTV Installation",
//       desc: "Advanced surveillance setup with AI-driven monitoring to protect your workspace.",
//     },
//     {
//       icon: <Package size={24} />,
//       title: "Networking Hardware",
//       desc: "Quick access to enterprise-grade routers, switches, and high-speed networking accessories.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* HERO SECTION */}
//       <section className="relative pt-40 pb-20 overflow-hidden">
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.05, 0.15, 0.05],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//             }}
//             className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-[120px]"
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
//               >
//                 <Zap size={14} />
//                 Full IT Support Solutions
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
//               >
//                 Repair & Rental <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
//                   Services.
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg"
//               >
//                 Softlink provides professional repair for all
//                 desktop and laptop brands, along with high-quality
//                 rental solutions for IT hardware, networking,
//                 and security.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-indigo-500/30 transition-all flex items-center gap-2"
//                 >
//                   Check Availability
//                   <ArrowRight size={18} />
//                 </button>

//                 <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
//                   Our Pricing
//                 </button>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 relative"
//             >
//               <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
//                 <img
//                   src="/1c568e7a37d7969b9ec210f09872e17e.jpg"
//                   alt="IT Repair Service"
//                   className="w-full object-cover h-[500px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
//               </div>

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                 }}
//                 className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center">
//                     <ShieldCheck size={24} />
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold text-slate-400 uppercase">
//                       Service Status
//                     </p>
//                     <p className="font-black text-slate-900 dark:text-white">
//                       Certified Technicians
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       {/* <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
//         <div className="container mx-auto px-6">
//           <div className="text-center max-w-2xl mx-auto mb-20">
//             <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
//               Integrated IT Solutions
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400">
//               Reliable hardware maintenance and scalable rental
//               plans for modern businesses.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -10 }}
//                 className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                   {f.icon}
//                 </div>
//                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//                   {f.title}
//                 </h4>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* DETAILED SERVICE CATALOG */}
//       <ServiceCatalog />

//       {/* MODAL */}
//       <CheckAvailability
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default RepairRentalPage;



// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShieldCheck,
//   Video,
//   Zap,
//   ArrowRight,
//   Monitor,
//   Package,
//   X,
//   Laptop,
//   Router,
//   Camera,
//   Cpu,
//   HardDrive,
//   Server,
//   Shield,
// } from "lucide-react";

// // --- TYPES ---
// interface CheckAvailabilityProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
// const openNavbarModal = () => {
//   setShowForm(true);

//   // optional: close mobile menu
//   setIsOpen(false);

//   // smooth scroll to top
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// // --- MODAL (AVAILABILITY DRAWER) ---
// const CheckAvailability: React.FC<CheckAvailabilityProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedType, setSelectedType] = useState<string>("");

//   const categories = [
//     { id: "laptop", label: "Laptops", icon: <Laptop size={20} /> },
//     { id: "desktop", label: "Desktops", icon: <Monitor size={20} /> },
//     { id: "network", label: "Networking", icon: <Router size={20} /> },
//     { id: "cctv", label: "CCTV Systems", icon: <Camera size={20} /> },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
//           />
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[101] p-8 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white">Check Availability</h3>
//                 <p className="text-sm text-slate-500">Step {step} of 2</p>
//               </div>
//               <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
//                 <X className="dark:text-white" />
//               </button>
//             </div>
//             {step === 1 ? (
//               <div className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat.id}
//                       onClick={() => setSelectedType(cat.id)}
//                       className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
//                         selectedType === cat.id
//                           ? "border-purple-600 bg-purple-50 dark:bg-purple-500/10 text-purple-600"
//                           : "border-slate-100 dark:border-slate-800 dark:text-slate-400"
//                       }`}
//                     >
//                       {cat.icon}
//                       <span className="font-bold text-sm">{cat.label}</span>
//                     </button>
//                   ))}
//                 </div>
//                 <button
//                   disabled={!selectedType}
//                   onClick={() => setStep(2)}
//                   className="w-full py-4 bg-purple-600 disabled:opacity-50 text-white rounded-2xl font-bold mt-8 shadow-lg shadow-purple-200"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none border border-transparent focus:border-purple-500 transition-all"
//                 />
//                 <button onClick={() => setStep(1)} className="w-full text-slate-500 font-bold hover:text-purple-600 transition-colors">
//                   Go Back
//                 </button>
//               </div>
//             )}
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- DATA ---
// const detailedServices = [
//   {
//     title: "Desktop & Laptop Repair Services",
//     desc: "Professional repair and maintenance services for all desktop computers and laptops using genuine hardware components.",
//     color: "bg-purple-600",
//     subItems: [
//       { name: "Desktop Repair", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400", icon: <Monitor size={14} /> },
//       { name: "Laptop Repair", img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=400", icon: <Laptop size={14} /> },
//       { name: "Hardware Upgrades", img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400", icon: <Cpu size={14} /> },
//       { name: "Data Recovery", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", icon: <HardDrive size={14} /> },
//     ],
//   },
//   {
//     title: "Computer & Laptop Rental",
//     desc: "Affordable computer and laptop rental solutions for offices, businesses, training centers and temporary projects.",
//     color: "bg-indigo-600",
//     subItems: [
//       { name: "Gaming PC Rental", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400", icon: <Zap size={14} /> },
//       { name: "Office Laptop Rental", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400", icon: <Laptop size={14} /> },
//       { name: "Workstation Rental", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400", icon: <Server size={14} /> },
//       { name: "Bulk System Rental", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400", icon: <Package size={14} /> },
//     ],
//   },
//   {
//     title: "Networking Repair & Installation",
//     desc: "Complete networking setup, troubleshooting and repair services for homes, offices and enterprises.",
//     color: "bg-blue-600",
//     subItems: [
//       { name: "WiFi Installation", img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400", icon: <Router size={14} /> },
//       { name: "Router Configuration", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", icon: <Router size={14} /> },
//       { name: "Server Networking", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400", icon: <Server size={14} /> },
//       { name: "Structured Cabling", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400", icon: <Zap size={14} /> },
//     ],
//   },
//   {
//     title: "CCTV Repair & Rental Solutions",
//     desc: "Advanced CCTV installation, repair and rental solutions with 24/7 security monitoring support.",
//     color: "bg-violet-600",
//     subItems: [
//       { name: "CCTV Installation", img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=400", icon: <Camera size={14} /> },
//       { name: "Security Camera Repair", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", icon: <Shield size={14} /> },
//       { name: "Night Vision CCTV", img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&q=80&w=400", icon: <Video size={14} /> },
//       { name: "CCTV Rental Setup", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400", icon: <ShieldCheck size={14} /> },
//     ],
//   },
// ];

// // --- SERVICE CATALOG COMPONENT ---
// const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ openModal }) => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
//           >
//             Explore Our <span className="text-purple-600">Tech Universe.</span>
//           </motion.h2>
//           <p className="text-slate-500 dark:text-slate-400 text-lg">
//             A comprehensive breakdown of our specialized services and the hardware we master.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-20">
//           {detailedServices.map((service, sIndex) => (
//             <div key={sIndex} className="relative">
//               <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
//                 <div className="max-w-xl">
//                   <div className={`w-12 h-1.5 ${service.color} mb-6 rounded-full`} />
//                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-slate-500 dark:text-slate-400">{service.desc}</p>
//                 </div>
//                 <div className="hidden md:block h-px flex-grow mx-10 bg-slate-100 dark:bg-white/5 mb-4" />
//                 <button className="flex items-center gap-2 font-bold text-purple-600 whitespace-nowrap mb-2 group">
//                   View Full Specs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {service.subItems.map((item, iIndex) => (
//                   <motion.div
//                     key={iIndex}
//                     whileHover={{ y: -8 }}
//                     className="relative group h-96 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-white/5"
//                   >
//                     <img 
//                       src={item.img} 
//                       alt={item.name} 
//                       className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="p-2 bg-purple-600 rounded-lg text-white">
//                           {item.icon}
//                         </span>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">
//                           Verified Service
//                         </span>
//                       </div>
//                       <h4 className="text-xl font-bold text-white tracking-tight mb-4">
//                         {item.name}
//                       </h4>

//                       <button
//   onClick={openNavbarModal}
//   className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
// >
//   Hire Now <ArrowRight size={16} />
// </button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// const RepairRentalPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
//       {/* HERO SECTION */}
//       <section className="relative pt-40 pb-20 overflow-hidden">
//         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
//             transition={{ duration: 10, repeat: Infinity }}
//             className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[120px]"
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20"
//               >
//                 <Zap size={14} />
//                 Full IT Support Solutions
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
//               >
//                 Tech Repair & <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
//                   Rental Hub.
//                 </span>
//               </motion.h1>

//               <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
//                 Professional repair for all major brands, plus elite-tier rental solutions for IT hardware, security, and networking.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold shadow-xl shadow-purple-500/30 transition-all flex items-center gap-2"
//                 >
//                   Check Availability <ArrowRight size={18} />
//                 </button>
//                 <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
//                   Our Pricing
//                 </button>
//               </div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="lg:w-1/2 relative"
//             >
//               <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
//                   alt="Workstation"
//                   className="w-full object-cover h-[500px]"
//                 />
//               </div>
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center">
//                     <ShieldCheck size={24} />
//                   </div>
//                   <div>
//                     <p className="text-xs font-bold text-slate-400 uppercase">Service Status</p>
//                     <p className="font-black text-slate-900 dark:text-white">Certified Technicians</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* DETAILED SERVICE CATALOG - Passing the toggle function here */}
//       <ServiceCatalog openModal={() => setIsModalOpen(true)} />

//       {/* MODAL (Drawer) */}
//       <CheckAvailability isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default RepairRentalPage;








"use client";

import React, { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Video,
  Zap,
  ArrowRight,
  Monitor,
  Package,
  X,
  Laptop,
  Router,
  Camera,
  Cpu,
  HardDrive,
  Server,
  Shield,
} from "lucide-react";

// --- TYPES ---
interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceCatalogProps {
  openModal: () => void;
}

// --- MODAL ---
const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] =
    useState<string>("");


  const categories = [
    { id: "laptop", label: "Laptops", icon: <Laptop size={20} /> },
    { id: "desktop", label: "Desktops", icon: <Monitor size={20} /> },
    { id: "network", label: "Networking", icon: <Router size={20} /> },
    { id: "cctv", label: "CCTV Systems", icon: <Camera size={20} /> },
  ];
  

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[101] p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Check Availability
                </h3>

                <p className="text-sm text-slate-500">
                  Step {step} of 2
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="dark:text-white" />
              </button>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedType(cat.id)}
                      className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                        selectedType === cat.id
                          ? "border-purple-600 bg-purple-50 dark:bg-purple-500/10 text-purple-600"
                          : "border-slate-100 dark:border-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {cat.icon}

                      <span className="font-bold text-sm">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedType}
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-purple-600 disabled:opacity-50 text-white rounded-2xl font-bold mt-8 shadow-lg shadow-purple-200"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none border border-transparent focus:border-purple-500 transition-all"
                />

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-slate-500 font-bold hover:text-purple-600 transition-colors"
                >
                  Go Back
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- DATA ---
const detailedServices = [
  {
    title: "Desktop & Laptop Repair Services",
    desc: "Professional repair and maintenance services for all desktop computers and laptops using genuine hardware components.",
    color: "bg-purple-600",
    subItems: [
      {
        name: "Desktop Repair",
        img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400",
        icon: <Monitor size={14} />,
      },
      {
        name: "Laptop Repair",
        img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
        icon: <Laptop size={14} />,
      },
      {
        name: "Hardware Upgrades",
        img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400",
        icon: <Cpu size={14} />,
      },
      {
        name: "Data Recovery",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
        icon: <HardDrive size={14} />,
      },
    ],
  },
  {
    title: "Computer & Laptop Rental",
    desc: "Affordable computer and laptop rental solutions for offices, businesses, training centers and temporary projects.",
    color: "bg-indigo-600",
    subItems: [
      {
        name: "Gaming PC Rental",
        img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400",
        icon: <Zap size={14} />,
      },
      {
        name: "Office Laptop Rental",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400",
        icon: <Laptop size={14} />,
      },
      {
        name: "Workstation Rental",
        img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400",
        icon: <Server size={14} />,
      },
      {
        name: "Bulk System Rental",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
        icon: <Package size={14} />,
      },
    ],
  },
  {
    title: "Networking Repair & Installation",
    desc: "Complete networking setup, troubleshooting and repair services for homes, offices and enterprises.",
    color: "bg-blue-600",
    subItems: [
      {
        name: "WiFi Installation",
        img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400",
        icon: <Router size={14} />,
      },
      {
        name: "Router Configuration",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
        icon: <Router size={14} />,
      },
      {
        name: "Server Networking",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
        icon: <Server size={14} />,
      },
      {
        name: "Structured Cabling",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
        icon: <Zap size={14} />,
      },
    ],
  },
  {
    title: "CCTV Repair & Rental Solutions",
    desc: "Advanced CCTV installation, repair and rental solutions with 24/7 security monitoring support.",
    color: "bg-violet-600",
    subItems: [
      {
        name: "CCTV Installation",
        img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=400",
        icon: <Camera size={14} />,
      },
      {
        name: "Security Camera Repair",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
        icon: <Shield size={14} />,
      },
      {
        name: "Night Vision CCTV",
        img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&q=80&w=400",
        icon: <Video size={14} />,
      },
      {
        name: "CCTV Rental Setup",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
        icon: <ShieldCheck size={14} />,
      },
    ],
  },
];

// --- SERVICE CATALOG COMPONENT ---
const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
  openModal,
}) => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
          >
            Explore Our{" "}
            <span className="text-purple-600">
              Tech Universe.
            </span>
          </motion.h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg">
            A comprehensive breakdown of our specialized
            services and the hardware we master.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {detailedServices.map((service, sIndex) => (
            <div key={sIndex} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div className="max-w-xl">
                  <div
                    className={`w-12 h-1.5 ${service.color} mb-6 rounded-full`}
                  />

                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400">
                    {service.desc}
                  </p>
                </div>

                <div className="hidden md:block h-px flex-grow mx-10 bg-slate-100 dark:bg-white/5 mb-4" />

                <button className="flex items-center gap-2 font-bold text-purple-600 whitespace-nowrap mb-2 group">
                  View Full Specs{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.subItems.map((item, iIndex) => (
                  <motion.div
                    key={iIndex}
                    whileHover={{ y: -8 }}
                    className="relative group h-96 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-white/5"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-2 bg-purple-600 rounded-lg text-white">
                          {item.icon}
                        </span>

                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-300">
                          Verified Service
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-white tracking-tight mb-4">
                        {item.name}
                      </h4>

                        <button
                        onClick={() => {
                          window.location.hash =
                            "get-started";

                          openModal();

                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                      >
                        Hire Now{" "}
                        <ArrowRight size={16} />
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
  );
};
const RepairRentalPage = () => {
  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);

  const openNavbarModal = () => {
    setIsModalOpen(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash === "#get-started"
      ) {
        setIsModalOpen(true);

        window.history.replaceState(
          null,
          "",
          window.location.pathname
        );
      }
    };

    handleHashChange();

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-purple-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20"
              >
                <Zap size={14} />
                Full IT Support Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
              >
                Tech Repair & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                  Rental Hub.
                </span>
              </motion.h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
                Professional repair for all major brands,
                plus elite-tier rental solutions for IT
                hardware, security, and networking.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openNavbarModal}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold shadow-xl shadow-purple-500/30 transition-all flex items-center gap-2"
                >
                  Check Availability{" "}
                  <ArrowRight size={18} />
                </button>

                <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Our Pricing
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
                  alt="Workstation"
                  className="w-full object-cover h-[500px]"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Service Status
                    </p>

                    <p className="font-black text-slate-900 dark:text-white">
                      Certified Technicians
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE CATALOG */}
      <ServiceCatalog
        openModal={openNavbarModal}
      />

      {/* MODAL */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      />
    </div>
  );
};

export default RepairRentalPage;