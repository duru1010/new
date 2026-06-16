


// "use client";

// import React, { useState, useEffect } from "react";
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
// interface GetStartedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface ServiceCatalogProps {
//   openModal: () => void;
// }

// // --- MODAL ---
// const GetStartedModal: React.FC<GetStartedModalProps> = ({
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
//                           ? "border-[#0057FF] bg-[#0057FF]/5 dark:bg-[#0057FF]/10 text-[#0057FF]"
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
//                   style={{ backgroundColor: "#0057FF" }}
//                   className="w-full py-4 disabled:opacity-50 text-white rounded-2xl font-bold mt-8 shadow-lg shadow-blue-200"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none border border-transparent focus:border-[#0057FF] transition-all"
//                 />

//                 <button
//                   onClick={() => setStep(1)}
//                   className="w-full text-slate-500 font-bold hover:text-[#0057FF] transition-colors"
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

// // --- DATA ---
// const detailedServices = [
//   {
//     title: "Desktop & Laptop Repair Services",
//     desc: "Professional repair and maintenance services for all desktop computers and laptops using genuine hardware components.",
//     color: "bg-[#0057FF]",
//     subItems: [
//       {
//         name: "Desktop Repair",
//         img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400",
//         icon: <Monitor size={14} />,
//       },
//       {
//         name: "Laptop Repair",
//         img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=400",
//         icon: <Laptop size={14} />,
//       },
//       {
//         name: "Hardware Upgrades",
//         img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400",
//         icon: <Cpu size={14} />,
//       },
//       {
//         name: "Data Recovery",
//         img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
//         icon: <HardDrive size={14} />,
//       },
//     ],
//   },
//   {
//     title: "Computer & Laptop Rental",
//     desc: "Affordable computer and laptop rental solutions for offices, businesses, training centers and temporary projects.",
//     color: "bg-[#4DA6FF]",
//     subItems: [
//       {
//         name: "Gaming PC Rental",
//         img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400",
//         icon: <Zap size={14} />,
//       },
//       {
//         name: "Office Laptop Rental",
//         img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400",
//         icon: <Laptop size={14} />,
//       },
//       {
//         name: "Workstation Rental",
//         img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400",
//         icon: <Server size={14} />,
//       },
//       {
//         name: "Bulk System Rental",
//         img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
//         icon: <Package size={14} />,
//       },
//     ],
//   },
//   {
//     title: "Networking Repair & Installation",
//     desc: "Complete networking setup, troubleshooting and repair services for homes, offices and enterprises.",
//     color: "bg-[#0057FF]",
//     subItems: [
//       {
//         name: "WiFi Installation",
//         img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400",
//         icon: <Router size={14} />,
//       },
//       {
//         name: "Router Configuration",
//         img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
//         icon: <Router size={14} />,
//       },
//       {
//         name: "Server Networking",
//         img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
//         icon: <Server size={14} />,
//       },
//       {
//         name: "Structured Cabling",
//         img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
//         icon: <Zap size={14} />,
//       },
//     ],
//   },
//   {
//     title: "CCTV Repair & Rental Solutions",
//     desc: "Advanced CCTV installation, repair and rental solutions with 24/7 security monitoring support.",
//     color: "bg-[#4DA6FF]",
//     subItems: [
//       {
//         name: "CCTV Installation",
//         img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=400",
//         icon: <Camera size={14} />,
//       },
//       {
//         name: "Security Camera Repair",
//         img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
//         icon: <Shield size={14} />,
//       },
//       {
//         name: "Night Vision CCTV",
//         img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&q=80&w=400",
//         icon: <Video size={14} />,
//       },
//       {
//         name: "CCTV Rental Setup",
//         img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
//         icon: <ShieldCheck size={14} />,
//       },
//     ],
//   },
// ];

// // --- SERVICE CATALOG COMPONENT ---
// const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
//   openModal,
// }) => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
//           >
//             Explore Our{" "}
//             <span className="text-[#0057FF]">
//               Tech Universe.
//             </span>
//           </motion.h2>

//           <p className="text-slate-500 dark:text-slate-400 text-lg">
//             A comprehensive breakdown of our specialized
//             services and the hardware we master.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-20">
//           {detailedServices.map((service, sIndex) => (
//             <div key={sIndex} className="relative">
//               <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
//                 <div className="max-w-xl">
//                   <div
//                     className={`w-12 h-1.5 ${service.color} mb-6 rounded-full`}
//                   />

//                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
//                     {service.title}
//                   </h3>

//                   <p className="text-slate-500 dark:text-slate-400">
//                     {service.desc}
//                   </p>
//                 </div>

//                 <div className="hidden md:block h-px flex-grow mx-10 bg-slate-100 dark:bg-white/5 mb-4" />

//                 <button className="flex items-center gap-2 font-bold text-[#0057FF] whitespace-nowrap mb-2 group">
//                   View Full Specs{" "}
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
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
//                         <span className="p-2 bg-[#0057FF] rounded-lg text-white">
//                           {item.icon}
//                         </span>

//                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">
//                           Verified Service
//                         </span>
//                       </div>

//                       <h4 className="text-xl font-bold text-white tracking-tight mb-4">
//                         {item.name}
//                       </h4>

//                       <button
//                         onClick={() => {
//                           window.location.hash = "get-started";
//                           openModal();
//                           window.scrollTo({
//                             top: 0,
//                             behavior: "smooth",
//                           });
//                         }}
//                         className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
//                       >
//                         Hire Now <ArrowRight size={16} />
//                       </button>
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

// const RepairRentalPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const openNavbarModal = () => {
//     setIsModalOpen(true);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     const handleHashChange = () => {
//       if (window.location.hash === "#get-started") {
//         setIsModalOpen(true);
//         window.history.replaceState(null, "", window.location.pathname);
//       }
//     };

//     handleHashChange();
//     window.addEventListener("hashchange", handleHashChange);
//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

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
//             transition={{ duration: 10, repeat: Infinity }}
//             className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#0057FF]/20 rounded-full blur-[120px]"
//           />
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             <div className="lg:w-1/2">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057FF]/10 text-[#0057FF] dark:text-[#4DA6FF] text-xs font-bold uppercase tracking-widest mb-6 border border-[#0057FF]/20"
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
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#4DA6FF]">
//                   Rental Hub.
//                 </span>
//               </motion.h1>

//               <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
//                 Professional repair for all major brands,
//                 plus elite-tier rental solutions for IT
//                 hardware, security, and networking.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <button
//                   onClick={openNavbarModal}
//                   style={{ backgroundColor: "#0057FF" }}
//                   className="px-8 py-4 hover:bg-[#0046CC] text-white rounded-2xl font-bold shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2"
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
//                   <div className="w-12 h-12 bg-[#0057FF]/10 text-[#0057FF] rounded-full flex items-center justify-center">
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

//       {/* SERVICE CATALOG */}
//       <ServiceCatalog openModal={openNavbarModal} />

//       {/* MODAL */}
//       <GetStartedModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default RepairRentalPage;









// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ShieldCheck,
//   Video,
//   Zap,
//   ArrowRight,
//   ArrowLeft,
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
//   Star,
//   CheckCircle2,
//   Clock
// } from "lucide-react";

// // --- TYPES ---
// interface GetStartedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface ServiceCatalogProps {
//   openModal: () => void;
//   onSelect: (id: string) => void;
// }

// // --- MODAL ---
// const GetStartedModal: React.FC<GetStartedModalProps> = ({
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
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200]"
//           />

//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[201] p-8 overflow-y-auto"
//           >
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 <h3 className="text-2xl font-black text-slate-900 dark:text-white">
//                   Check Availability
//                 </h3>
//                 <p className="text-sm text-slate-500">Step {step} of 2</p>
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
//                           ? "border-[#0057FF] bg-[#0057FF]/5 dark:bg-[#0057FF]/10 text-[#0057FF]"
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
//                   style={{ backgroundColor: "#0057FF" }}
//                   className="w-full py-4 disabled:opacity-50 text-white rounded-2xl font-bold mt-8 shadow-lg shadow-blue-200"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none border border-transparent focus:border-[#0057FF] transition-all"
//                 />
//                 <button
//                   onClick={() => setStep(1)}
//                   className="w-full text-slate-500 font-bold hover:text-[#0057FF] transition-colors"
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

// // --- DATA ---
// const detailedServices = [
//   {
//     id: "computing",
//     title: "Desktop & Laptop Repair Services",
//     desc: "Professional repair and maintenance services for all desktop computers and laptops using genuine hardware components.",
//     color: "bg-[#0057FF]",
//     subItems: [
//       { id: "desktop-repair", name: "Desktop Repair", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400", icon: <Monitor size={14} /> },
//       { id: "laptop-repair", name: "Laptop Repair", img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&q=80&w=400", icon: <Laptop size={14} /> },
//       { id: "hardware-upgrades", name: "Hardware Upgrades", img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=400", icon: <Cpu size={14} /> },
//       { id: "data-recovery", name: "Data Recovery", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", icon: <HardDrive size={14} /> },
//     ],
//   },
//   {
//     id: "rental",
//     title: "Computer & Laptop Rental",
//     desc: "Affordable computer and laptop rental solutions for offices, businesses, training centers and temporary projects.",
//     color: "bg-[#4DA6FF]",
//     subItems: [
//       { id: "gaming-pc-rental", name: "Gaming PC Rental", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400", icon: <Zap size={14} /> },
//       { id: "office-laptop-rental", name: "Office Laptop Rental", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400", icon: <Laptop size={14} /> },
//       { id: "workstation-rental", name: "Workstation Rental", img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400", icon: <Server size={14} /> },
//       { id: "bulk-system-rental", name: "Bulk System Rental", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400", icon: <Package size={14} /> },
//     ],
//   },
//   {
//     id: "networking",
//     title: "Networking Repair & Installation",
//     desc: "Complete networking setup, troubleshooting and repair services for homes, offices and enterprises.",
//     color: "bg-[#0057FF]",
//     subItems: [
//       { id: "wifi-installation", name: "WiFi Installation", img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400", icon: <Router size={14} /> },
//       { id: "router-config", name: "Router Configuration", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", icon: <Router size={14} /> },
//       { id: "server-networking", name: "Server Networking", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400", icon: <Server size={14} /> },
//       { id: "structured-cabling", name: "Structured Cabling", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400", icon: <Zap size={14} /> },
//     ],
//   },
//   {
//     id: "cctv",
//     title: "CCTV Repair & Rental Solutions",
//     desc: "Advanced CCTV installation, repair and rental solutions with 24/7 security monitoring support.",
//     color: "bg-[#4DA6FF]",
//     subItems: [
//       { id: "cctv-installation", name: "CCTV Installation", img: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=400", icon: <Camera size={14} /> },
//       { id: "camera-repair", name: "Security Camera Repair", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", icon: <Shield size={14} /> },
//       { id: "night-vision", name: "Night Vision CCTV", img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&q=80&w=400", icon: <Video size={14} /> },
//       { id: "cctv-rental", name: "CCTV Rental Setup", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400", icon: <ShieldCheck size={14} /> },
//     ],
//   },
// ];

// // --- SERVICE CATALOG COMPONENT ---
// const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ openModal, onSelect }) => {
//   return (
//     <section className="py-24 bg-white dark:bg-slate-950">
//       <div className="container mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6"
//           >
//             Explore Our <span className="text-[#0057FF]">Tech Universe.</span>
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
//                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{service.title}</h3>
//                   <p className="text-slate-500 dark:text-slate-400">{service.desc}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {service.subItems.map((item, iIndex) => (
//                   <motion.div
//                     key={iIndex}
//                     whileHover={{ y: -8 }}
//                     className="relative group h-96 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-white/5"
//                   >
//                     <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <div className="flex items-center gap-2 mb-2">
//                         <span className="p-2 bg-[#0057FF] rounded-lg text-white">{item.icon}</span>
//                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Verified Service</span>
//                       </div>
//                       <h4 className="text-xl font-bold text-white tracking-tight mb-4">{item.name}</h4>
//                       <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
//                         <button
//                           onClick={() => { openModal(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
//                           className="w-full py-3 bg-[#0057FF] text-white rounded-xl font-bold text-sm"
//                         >
//                           Hire Now
//                         </button>
//                         <button
//                           onClick={() => onSelect(item.id)}
//                           className="w-full py-3 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm"
//                         >
//                           Know More
//                         </button>
//                       </div>
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

// // --- DETAIL VIEW ---
// const DetailView = ({ serviceId, onBack, openModal }: { serviceId: string; onBack: () => void; openModal: () => void }) => (
//   <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="py-24 bg-white dark:bg-slate-950 min-h-screen">
//     <div className="container mx-auto px-6">
//       <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-black uppercase text-xs tracking-widest mb-12 hover:text-[#0057FF] transition-colors group">
//         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
//       </button>
//       <div className="flex flex-col lg:flex-row items-center gap-16">
//         <div className="lg:w-1/2">
//           <div className="flex text-yellow-400 mb-6 gap-1">
//             {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
//           </div>
//           <h2 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8 capitalize">
//             {serviceId.replace(/-/g, " ")} <br /> <span className="text-[#0057FF]">Specialist.</span>
//           </h2>
//           <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
//             Professional solutions for {serviceId.replace(/-/g, " ")}. Every project is handled by certified engineers using OEM parts and rigorous testing standards.
//           </p>
//           <div className="grid grid-cols-2 gap-4 mb-12">
//             {[
//               { i: <Clock className="text-blue-500" />, t: "Rapid Turnaround", s: "24-48 Hours" },
//               { i: <ShieldCheck className="text-green-500" />, t: "Certified Quality", s: "Service Warranty" },
//               { i: <Cpu className="text-purple-500" />, t: "Hardware Spec", s: "Grade-A Components" },
//               { i: <CheckCircle2 className="text-blue-500" />, t: "Expert Support", s: "24/7 Assistance" },
//             ].map((item, idx) => (
//               <div key={idx} className="p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5">
//                 <div className="mb-3">{item.i}</div>
//                 <p className="font-black text-xs uppercase dark:text-white mb-1">{item.t}</p>
//                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.s}</p>
//               </div>
//             ))}
//           </div>
//           <button onClick={openModal} className="px-10 py-6 bg-[#0057FF] text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-600/30 flex items-center gap-3">
//             Book Now <ArrowRight size={18} />
//           </button>
//         </div>
//         <div className="lg:w-1/2">
//           <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] border-[12px] border-white dark:border-slate-800 shadow-2xl" alt="Service Detail" />
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const RepairRentalPage = () => {
//   const [view, setView] = useState<"catalog" | string>("catalog");
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [view]);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
//       <AnimatePresence mode="wait">
//         {view === "catalog" ? (
//           <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <section className="relative pt-40 pb-20 overflow-hidden">
//               <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//                 <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[#0057FF]/20 rounded-full blur-[120px]" />
//               </div>
//               <div className="container mx-auto px-6 relative z-10">
//                 <div className="flex flex-col lg:flex-row items-center gap-16">
//                   <div className="lg:w-1/2">
//                     <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057FF]/10 text-[#0057FF] dark:text-[#4DA6FF] text-xs font-bold uppercase tracking-widest mb-6 border border-[#0057FF]/20"><Zap size={14} />Full IT Support Solutions</motion.div>
//                     <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8">Tech Repair & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#4DA6FF]">Rental Hub.</span></motion.h1>
//                     <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">Professional repair for all major brands, plus elite-tier rental solutions for IT hardware, security, and networking.</p>
//                     <div className="flex flex-wrap gap-4">
//                       <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-[#0057FF] hover:bg-[#0046CC] text-white rounded-2xl font-bold shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2">Check Availability <ArrowRight size={18} /></button>
//                       <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">Our Pricing</button>
//                     </div>
//                   </div>
//                   <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative">
//                     <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
//                       <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000" alt="Workstation" className="w-full object-cover h-[500px]" />
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </section>
//             <ServiceCatalog openModal={() => setIsModalOpen(true)} onSelect={(id) => setView(id)} />
//           </motion.div>
//         ) : (
//           <DetailView key="detail" serviceId={view} onBack={() => setView("catalog")} openModal={() => setIsModalOpen(true)} />
//         )}
//       </AnimatePresence>

//       <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default RepairRentalPage;




// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import {
//   Zap,
//   ArrowRight,
//   ArrowUpRight,
//   Monitor,
//   Laptop,
//   Cpu,
//   HardDrive,
// } from "lucide-react";

// // =========================
// // MODAL
// // =========================

// interface GetStartedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const GetStartedModal: React.FC<GetStartedModalProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <></>
//   );
// };

// // =========================
// // DATA
// // =========================

// const detailedServices = [
//   {
//     id: "computing",
//     title: "Device Repair & Rental Solutions",
//     desc: "Professional laptop and desktop repair services along with flexible device rental solutions for businesses, students, and enterprises.",
//     subItems: [
//       {
//         id: "desktop-repair",
//         name: "Desktop Repair",
//         desc: "Hardware fixing, OS issues, upgrades & performance tuning.",
//         img: "/867ff681b4d51e76a0e5a3b9b13b9c17.jpg",
//         icon: <Monitor size={16} />,
//       },
//       {
//         id: "laptop-repair",
//         name: "Laptop Repair",
//         desc: "Screen, battery, motherboard and software repair solutions.",
//         img: "/5ffe989386ff0cae1e3339805ba81431.jpg",
//         icon: <Laptop size={16} />,
//       },
//       {
//         id: "hardware-upgrades",
//         name: "Hardware Upgrades",
//         desc: "RAM, SSD, GPU upgrades for better performance & speed.",
//         img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
//         icon: <Cpu size={16} />,
//       },
//       {
//         id: "data-recovery",
//         name: "Data Recovery",
//         desc: "Recover lost, deleted or corrupted data securely.",
//         img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
//         icon: <HardDrive size={16} />,
//       },
//     ],
//   },
// ];

// // =========================
// // PAGE (FIXED)
// // =========================

// const HardwarePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleHashChange = () => {
//       if (window.location.hash === "#get-started") {
//         setIsModalOpen(true);
//         window.history.replaceState(null, "", window.location.pathname);
//       }
//     };
//     handleHashChange();
//     window.addEventListener("hashchange", handleHashChange);
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950">

//       {/* HERO */}
//       <section className="relative pt-32 pb-20">
//         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-xs font-bold mb-6">
//               <Zap size={14} />
//               Repair & Rental Services
//             </div>

//             <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
//               Smart Device <br />
//               <span className="text-blue-600">Repair & Rental</span>
//               <br />
//               Solutions
//             </h1>

//             <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
//               We provide professional laptop & desktop repair services along
//               with flexible rental solutions for short-term and long-term use.
//             </p>

//             <p className="mt-4 text-slate-500">
//               ✔ Fast Repair Service | ✔ Affordable Rentals | ✔ On-site Support | ✔ Quality Guaranteed
//             </p>

//             <button
//   onClick={() => {
//     openModal();
//     window.location.hash = "get-started";
//   }}
//   className="px-7 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-2"
// >
//   Get Service <ArrowRight size={18} />
// </button>
//           </div>

//           <div className="rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
//             <Image
//               src="/668c0b235856c81c1d06148db126f2b0.jpg"
//               width={1000}
//               height={700}
//               className="w-full h-[520px] object-cover"
//               alt="repair"
//               priority
//             />
//           </div>

//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">

//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <h2 className="text-4xl font-black text-slate-900 dark:text-white">
//               Repair & Rental Services
//             </h2>
//             <p className="text-slate-500 mt-4">
//               Choose from our professional device repair and rental solutions
//             </p>
//           </div>

//           {detailedServices.map((service) => (
//             <div key={service.id} className="space-y-10">

//               <div>
//                 <h3 className="text-3xl font-black text-slate-900 dark:text-white">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-500 mt-3 max-w-2xl">
//                   {service.desc}
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

//                 {service.subItems.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     whileHover={{ y: -12, scale: 1.03 }}
//                     transition={{ type: "spring", stiffness: 260, damping: 18 }}
//                     className="relative h-[380px] rounded-3xl overflow-hidden group shadow-lg"
//                   >

//                     <Image
//                       src={item.img}
//                       alt={item.name}
//                       fill
//                       loading="lazy"
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-0" />

//                     <div className="absolute bottom-0 left-0 w-full p-5">

//                       <div className="flex items-center gap-2 text-blue-300 mb-2">
//                         {item.icon}
//                         <span className="text-[10px] font-bold uppercase tracking-widest">
//                           Premium Service
//                         </span>
//                       </div>

//                       <h4 className="text-xl font-black text-white">
//                         {item.name}
//                       </h4>

//                       <p className="text-xs text-white/70 mt-1 line-clamp-2">
//                         {item.desc}
//                       </p>

//                       <div className="mt-4 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 space-y-2">

//                        <button
//                                                      onClick={() => {
//                                                        openModal();
//                                                        window.location.hash = "get-started";
//                                                      }}
//                                                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
//                                                    >
//                                                      Hire Now <ArrowRight size={16} />
//                                                    </button>

//                         <Link
//                           href={`/security/${item.id}`}
//                           className="w-full py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white flex items-center justify-center"
//                         >
//                           Know More
//                         </Link>

//                       </div>

//                     </div>
//                   </motion.div>
//                 ))}

//               </div>

//           <motion.div whileHover={{ scale: 1.02 }}>
//   <a
//     href="/#contact"
//     className="mt-10 inline-flex px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold items-center gap-2"
//   >
//     Contact For Bulk Rental / Repair <ArrowUpRight size={18} />
//   </a>
// </motion.div>

//             </div>
//           ))}

//         </div>
//       </section>

//       <GetStartedModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// }
// export default HardwarePage;








"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, motion } from "framer-motion";

import {
  Zap,
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Laptop,
  Cpu,
  HardDrive,
  ShieldCheck,
  Star,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Home,
} from "lucide-react";

// =========================
// MODAL
// =========================

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;


};

// =========================
// DATA
// =========================

const detailedServices = [
  {
    id: "computing",
    title: "Device Repair & Rental Solutions",
    desc: "Professional laptop and desktop repair services along with flexible device rental solutions for businesses, students, and enterprises.",
    subItems: [
      {
        id: "desktop-repair",
        name: "Desktop Repair",
        desc: "Hardware fixing, OS issues, upgrades & performance tuning.",
        img: "/867ff681b4d51e76a0e5a3b9b13b9c17.jpg",
        icon: <Monitor size={16} />,
      },
      {
        id: "laptop-repair",
        name: "Laptop Repair",
        desc: "Screen, battery, motherboard and software repair solutions.",
        img: "/5ffe989386ff0cae1e3339805ba81431.jpg",
        icon: <Laptop size={16} />,
      },
      {
        id: "hardware-upgrades",
        name: "Hardware Upgrades",
        desc: "RAM, SSD, GPU upgrades for better performance & speed.",
        img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
        icon: <Cpu size={16} />,
      },
      {
        id: "data-recovery",
        name: "Data Recovery",
        desc: "Recover lost, deleted or corrupted data securely.",
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        icon: <HardDrive size={16} />,
      },
    ],
  },
];

// =========================
// PAGE
// =========================

const HardwarePage = () => {
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

    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FBFF] dark:bg-slate-950 overflow-hidden">
     
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="absolute inset-0 [background-image:radial-gradient(#dbeafe_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#e36414]/10 border border-[#e36414]/20 text-[#e36414] text-xs font-bold mb-6">
  <Sparkles size={14} />
  Trusted Repair & Rental Services
</div>

            <h1 className="text-5xl md:text-6xl font-black text-[#0A1628] dark:text-white leading-[1] tracking-tight">
  Smart Device <br />
  <span className="bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] bg-clip-text text-transparent">
    Repair & Rental
  </span>
  <br />
  Solutions
</h1>

            <p className="mt-7 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
              We provide professional laptop & desktop repair services along
              with flexible rental solutions for short-term and long-term use.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md border border-slate-100">
                <ShieldCheck className="text-blue-600" size={20} />
                <span className="font-semibold text-sm">
                  Trusted Support
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md border border-slate-100">
                <Zap className="text-yellow-500" size={20} />
                <span className="font-semibold text-sm">
                  Fast Delivery
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md border border-slate-100">
                <Star className="text-indigo-500" size={20} />
                <span className="font-semibold text-sm">
                  Premium Quality
                </span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-md border border-slate-100">
                <Cpu className="text-cyan-500" size={20} />
                <span className="font-semibold text-sm">
                  Latest Hardware
                </span>
              </div>

            </div>

            {/* POINTS */}
           

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  openModal();
                  window.location.hash = "get-started";
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20"
              >
                Get Service <ArrowRight size={18} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/#contact"
                className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold flex items-center gap-2 shadow-lg"
              >
                Contact Us <ArrowUpRight size={18} />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full" />

            <div className="relative rounded-[2.5rem] overflow-hidden border-[10px] border-white dark:border-slate-800 shadow-[0_20px_80px_rgba(37,99,235,0.25)]">
              <Image
                src="/d180a616ed782721668672cb41c96bc1.jpg"
                width={1000}
                height={700}
                className="w-full h-[560px] object-cover hover:scale-105 transition-transform duration-700"
                alt="repair"
                priority
              />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700"
            >
              <p className="text-sm text-slate-500 font-medium">
                Active Clients
              </p>

              <h4 className="text-3xl font-black text-blue-600">
                1,000+
              </h4>
            </motion.div>

          </motion.div>

        </div>
      </section>
      

      {/* SERVICES */}
      <section className="py-24 relative">

        <div className="container mx-auto px-6">

          

          {detailedServices.map((service) => (
            <div key={service.id} className="space-y-10">

              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-slate-500 mt-3 max-w-2xl">
                  {service.desc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

           {service.subItems.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      type: "spring",
    }}
    className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500"
  >
    {/* Image Section */}
    <div className="relative h-[260px] overflow-hidden">

      <Image
        src={item.img}
        alt={item.name}
        fill
        loading="lazy"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Top Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Floating Badge */}
      <div className="absolute top-5 left-5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
          <div className="text-blue-600">
            {React.cloneElement(item.icon, { size: 16 })}
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">
            Premium Service
          </span>
        </div>
      </div>

      {/* Number */}
      <div className="absolute top-5 right-5">
        <span className="text-5xl font-black text-white/70">
          0{index + 1}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">

      {/* Small Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-600">
          Smart Solution
        </span>
      </div>

      {/* Title */}
      <h4 className="text-2xl font-black text-slate-900 leading-tight">
        {item.name}
      </h4>

      {/* Description */}
      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
        {item.desc}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mt-5">

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Fast Service
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Expert Team
        </span>

        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">
          Trusted Support
        </span>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        <button
          onClick={() => {
            openModal();
            window.location.hash = "get-started";
          }}
          className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] hover:from-[#2a5db0] hover:to-[#0096c7] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300"
        >
          Hire Now
          <ArrowRight size={16} />
        </button>

        <Link
          href={`/security/${item.id}`}
          className="flex-1 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold flex items-center justify-center transition-all duration-300"
        >
          Know More
        </Link>

      </div>
    </div>

    {/* Hover Border Glow */}
    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none" />
  </motion.div>
))}

              </div>

              {/* CONTACT CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-6"
              >
                <a
                  href="/#contact"
                  className="inline-flex px-8 py-4 bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] text-white rounded-2xl font-bold items-center gap-2 shadow-xl shadow-blue-500/20"
                >
                  Contact For Bulk Rental / Repair
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>

            </div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default HardwarePage;