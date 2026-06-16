// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   ShoppingBag,
//   Cpu,
//   Monitor,
//   HardDrive,
//   Server,
//   ArrowUpRight,
//   Star,
//   Check,
//   Key,
//   ShieldCheck,
//   Terminal,
//   Zap,
//   Globe,
//   Database,
//   Cloud,
//   FileCode2,
//   Lock,
//   Briefcase,
// } from "lucide-react";

// interface GetStartedModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // --- MODAL ---
// const GetStartedModal: React.FC<GetStartedModalProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   const [step, setStep] = useState<number>(1);
//   const [selectedType, setSelectedType] = useState<string>("");

//   if (!isOpen) return null;
// const HardwarePage = () => {


//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
//     const openModal = () => {
//       setIsModalOpen(true);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     };
  
//     useEffect(() => {
//       const handleHashChange = () => {
//         if (window.location.hash === "#get-started") {
//           setIsModalOpen(true);
//           window.history.replaceState(null, "", window.location.pathname);
//         }
//       };
//       handleHashChange();
//       window.addEventListener("hashchange", handleHashChange);
//       return () => window.removeEventListener("hashchange", handleHashChange);
//     }, []);
//   // --- HARDWARE PRODUCTS ---
//   const products = [
//     {
//       name: "Business Laptops",
//       category: "Computing",
//       brand: "HP, Dell, Lenovo",
//       icon: <Monitor />,
//     },
//     {
//       name: "High-End Workstations",
//       category: "Performance",
//       brand: "HP Z-Series",
//       icon: <Cpu />,
//     },
//     {
//       name: "Enterprise Servers",
//       category: "Infrastructure",
//       brand: "Dell PowerEdge",
//       icon: <Server />,
//     },
//     {
//       name: "Network Storage",
//       category: "Data",
//       brand: "Synology / QNAP",
//       icon: <HardDrive />,
//     },
//   ];

//   // --- SOFTWARE LICENSE BRANDS ---
//   const licenseBrands = [
//     {
//       name: "Microsoft 365",
//       desc: "Office, Windows & Azure",
//       icon: <Terminal className="text-blue-500" />,
//     },
//     {
//       name: "Tally Prime",
//       desc: "Business & Accounting",
//       icon: <Zap className="text-yellow-500" />,
//     },
//     {
//       name: "Quick Heal",
//       desc: "Total Security & Antivirus",
//       icon: <ShieldCheck className="text-red-500" />,
//     },
//     {
//       name: "Adobe CC",
//       desc: "Creative Cloud Licenses",
//       icon: <Star className="text-purple-500" />,
//     },
//   ];

//   // --- LICENSE CATALOG ---
//   const softwareCatalog = [
//     {
//       title: "Microsoft Solutions",
//       desc: "Official Microsoft licenses for business productivity and security.",
//       color: "from-blue-600 to-indigo-500",
//       items: [
//         {
//           name: "Microsoft 365",
//           icon: <Briefcase size={18} />,
//           tag: "Business Productivity",
//         },
//         {
//           name: "Windows 11 Pro",
//           icon: <Monitor size={18} />,
//           tag: "Professional OS",
//         },
//         {
//           name: "Windows Server",
//           icon: <Server size={18} />,
//           tag: "Enterprise Server",
//         },
//         {
//           name: "Azure Cloud",
//           icon: <Cloud size={18} />,
//           tag: "Cloud Services",
//         },
//       ],
//     },

//     {
//       title: "Business & Accounting",
//       desc: "Accounting and GST billing solutions for SMEs and enterprises.",
//       color: "from-yellow-500 to-orange-500",
//       items: [
//         {
//           name: "Tally Prime",
//           icon: <Database size={18} />,
//           tag: "Accounting Software",
//         },
//         {
//           name: "Tally ERP Upgrade",
//           icon: <FileCode2 size={18} />,
//           tag: "Business Upgrade",
//         },
//         {
//           name: "GST Billing Solutions",
//           icon: <Briefcase size={18} />,
//           tag: "SME Ready",
//         },
//         {
//           name: "Multi-User Licenses",
//           icon: <Globe size={18} />,
//           tag: "Enterprise Access",
//         },
//       ],
//     },

//     {
//       title: "Security & Protection",
//       desc: "Advanced antivirus and endpoint protection software licenses.",
//       color: "from-red-500 to-pink-500",
//       items: [
//         {
//           name: "Quick Heal Total Security",
//           icon: <ShieldCheck size={18} />,
//           tag: "Virus Protection",
//         },
//         {
//           name: "Endpoint Security",
//           icon: <Lock size={18} />,
//           tag: "Business Security",
//         },
//         {
//           name: "Internet Security",
//           icon: <Globe size={18} />,
//           tag: "Safe Browsing",
//         },
//         {
//           name: "Network Protection",
//           icon: <Server size={18} />,
//           tag: "Office Network",
//         },
//       ],
//     },

//     {
//       title: "Creative & Professional",
//       desc: "Creative tools and premium software for professionals and studios.",
//       color: "from-violet-600 to-purple-500",
//       items: [
//         {
//           name: "Adobe Photoshop",
//           icon: <Star size={18} />,
//           tag: "Photo Editing",
//         },
//         {
//           name: "Adobe Premiere Pro",
//           icon: <Cpu size={18} />,
//           tag: "Video Production",
//         },
//         {
//           name: "Adobe Illustrator",
//           icon: <FileCode2 size={18} />,
//           tag: "Vector Design",
//         },
//         {
//           name: "Creative Cloud Suite",
//           icon: <Cloud size={18} />,
//           tag: "All-in-One",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-950 pt-40 pb-20 transition-colors duration-500">
//       <div className="container mx-auto px-6">
        
//         {/* HERO */}
//         <div className="max-w-4xl mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.3em] text-xs mb-4"
//           >
//             <ShoppingBag size={16} /> Enterprise IT Solutions
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-8"
//           >
//             Hardware & <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-400">
//               Licensing.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-3xl"
//           >
//             We provide premium IT hardware and genuine software licenses
//             including Microsoft, Tally, Quick-Heal, Adobe and other
//             enterprise-grade solutions at reasonable prices.
//           </motion.p>
//         </div>

//         {/* HARDWARE GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
//           {products.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 overflow-hidden group shadow-sm hover:shadow-xl transition-all"
//             >
//               <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-indigo-600 flex items-center justify-center mb-10 shadow-lg border border-slate-100 dark:border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
//                 {p.icon}
//               </div>

//               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                 {p.category}
//               </span>

//               <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 mb-3">
//                 {p.name}
//               </h3>

//               <p className="text-sm text-slate-500 dark:text-slate-300">
//                 {p.brand}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* SOFTWARE LICENSE SECTION */}
//         <section className="mb-24">
//           <div className="bg-indigo-50 dark:bg-slate-900 rounded-[3.5rem] p-8 md:p-16 border border-indigo-100 dark:border-white/5 relative overflow-hidden">
            
//             {/* Background Decoration */}
//             <div className="absolute top-0 right-0 p-20 opacity-5 dark:opacity-10 pointer-events-none">
//               <Key size={400} className="text-indigo-600 rotate-12" />
//             </div>

//             <div className="relative z-10">
//               <div className="max-w-2xl mb-12">
//                 <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
//                   Official Software Licenses
//                 </h2>

//                 <p className="text-lg text-slate-600 dark:text-slate-400">
//                   We provide{" "}
//                   <span className="font-bold text-indigo-600">
//                     Microsoft, Tally, Quick-Heal & other
//                   </span>{" "}
//                   software licenses at reasonable prices for businesses,
//                   institutes and professionals.
//                 </p>
//               </div>

//               {/* LICENSE BRANDS */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
//                 {licenseBrands.map((brand, idx) => (
//                   <motion.div
//                     key={idx}
//                     whileHover={{ scale: 1.05 }}
//                     className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-indigo-50 dark:border-white/5 flex flex-col items-center text-center"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 text-2xl">
//                       {brand.icon}
//                     </div>

//                     <h4 className="font-bold text-slate-900 dark:text-white">
//                       {brand.name}
//                     </h4>

//                     <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
//                       {brand.desc}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* LICENSE CATALOG */}
//               <div className="grid grid-cols-1 gap-16">
//                 {softwareCatalog.map((service, sIndex) => (
//                   <div key={sIndex}>
//                     <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
//                       <div className="max-w-2xl">
//                         <div
//                           className={`w-16 h-1.5 bg-gradient-to-r ${service.color} rounded-full mb-6`}
//                         />

//                         <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
//                           {service.title}
//                         </h3>

//                         <p className="text-slate-500 dark:text-slate-400">
//                           {service.desc}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                       {service.items.map((item, iIndex) => (
//                         <motion.div
//                           key={iIndex}
//                           whileHover={{ y: -8 }}
//                           className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all overflow-hidden"
//                         >
//                           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/5 to-purple-500/10" />

//                           <div className="relative z-10">
//                             <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-slate-900 text-indigo-600 flex items-center justify-center mb-6">
//                               {item.icon}
//                             </div>

//                             <span className="text-[10px] uppercase tracking-widest font-black text-indigo-500">
//                               {item.tag}
//                             </span>

//                             <h4 className="text-xl font-black text-slate-900 dark:text-white mt-3 mb-6">
//                               {item.name}
//                             </h4>

//                            <button
//   onClick={() => {
//     // This opens the modal immediately
//     openModal(); 
    
//     // Optional: Update the hash for URL tracking
//     window.location.hash = "get-started";
    
//     // Smooth scroll to top so the modal is centered in view
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }}
//   className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
// >
//   Hire Now <ArrowRight size={16} />
// </button>
            
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="mt-16 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-indigo-500/30"
//               >
//                 Contact For Bulk Licensing <ArrowUpRight size={20} />
//               </motion.button>
//             </div>
//           </div>
//         </section>

//         {/* WHY BUY FROM US */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] p-8 md:p-20 border border-slate-100 dark:border-white/5">
          
//           <div>
//             <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
//               The Softlink <br /> Advantage
//             </h2>

//             <div className="space-y-6">
//               {[
//                 {
//                   t: "Seamless Activation",
//                   d: "We handle software activation, deployment and installation support.",
//                 },
//                 {
//                   t: "Warranty Assistance",
//                   d: "Complete support for hardware warranty and replacement claims.",
//                 },
//                 {
//                   t: "100% Genuine Products",
//                   d: "Authorized licenses and original hardware with GST invoices.",
//                 },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex gap-4">
//                   <div className="mt-1 w-6 h-6 rounded-full bg-indigo-600/10 text-indigo-600 flex items-center justify-center shrink-0">
//                     <Check size={14} />
//                   </div>

//                   <div>
//                     <h5 className="font-bold dark:text-white text-slate-900">
//                       {item.t}
//                     </h5>

//                     <p className="text-sm text-slate-500 dark:text-slate-300">
//                       {item.d}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="aspect-square bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-[3rem] rotate-3 absolute inset-0 opacity-10" />

//             <div className="relative bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-2xl">
//               <div className="flex items-center gap-2 text-indigo-600 mb-6">
//                 {[1, 2, 3, 4, 5].map((s) => (
//                   <Star key={s} size={16} fill="currentColor" />
//                 ))}
//               </div>

//               <p className="text-xl italic font-medium text-slate-700 dark:text-slate-300 mb-6">
//                 "Softlink helped us deploy licensed software and enterprise
//                 hardware for our office setup. Their support and pricing were
//                 excellent."
//               </p>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700" />

//                 <div>
//                   <p className="font-bold dark:text-white text-slate-900">
//                     Rahul Mehta
//                   </p>

//                   <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">
//                     Creative Director, Pune
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HardwarePage;

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  ShoppingBag,
  ArrowRight,
  Star,
  Check,
  ArrowUpRight,
  X,
} from "lucide-react";

// ---------------- MODAL TYPES ----------------
interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------- MODAL ----------------
const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<string>("");

  if (!isOpen) return null;

  return (
    <></>
  );
};

// ---------------- PAGE ----------------
const HardwarePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#get-started") {
        setIsModalOpen(true);

        window.history.replaceState(
          null,
          "",
          window.location.pathname
        );
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () =>
      window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // ---------------- SERVICES ----------------
  const detailedServices = [
  {
    id: "sales",
    title: "Microsoft & Software Sales Solutions",
    desc:
      "Professional Microsoft licensing, cloud solutions and software sales services for businesses, institutes and enterprises.",

    subItems: [
      {
        id: "microsoft-365",
        name: "Microsoft ",
        desc: "Business productivity, Teams, Outlook and Office solutions.",
        img: "/9f65e0094e0172fd3bccd9fc3306d514.jpg",
      
      },

      {
        id: "quick-heal",
        name: "Antivirus & Security",
        desc: "Enterprise-grade antivirus and security solutions.",
        img: "/1c1914f4c03275e69d4d81e45a5cb480.jpg",
    
      },

      {
        id: "tally-prime",
        name: "Telly Prime",
        desc: "Streaming and entertainment solutions for businesses.",
        img: "/236f93c5ddd54154df210333050523bd.jpg",
        
      },

      {
        id: "adobe-cc",
        name: "Adobe Creative Cloud",
        desc: "Professional design and creative tools for businesses.",
        img: "/3b68ecaac42370efe5a73a830219f9a5.jpg",
      
      },
    ],
  },
];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-40 pb-20 transition-colors duration-500">

      <div className="container mx-auto px-6">

        {/* HERO */}
        <div className="max-w-4xl mb-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#e36414]/10 border border-[#e36414]/20 text-[#e36414] text-xs font-bold mb-6">
  <ShoppingBag size={14} />
  Software Sales & Licensing
</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-8"
          >
            Hardware & <br />

            <span className="bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] bg-clip-text text-transparent">
              Licensing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-3xl"
          >
            We provide premium IT hardware and genuine software licenses
            including Microsoft, Tally, Quick-Heal, Adobe and other
            enterprise-grade solutions at reasonable prices.
          </motion.p>

          {/* HERO BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                openModal();
                window.location.hash = "get-started";
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] text-white rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-[#3b71ca]/20"
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
        </div>

        {/* SOFTWARE LICENSE SECTION */}
      <section className="py-24 relative">
  <div className="container mx-auto px-6">
    {detailedServices.map((service) => (
      <div key={service.id} className="space-y-10">

        {/* HEADER */}
        <div>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white">
            {service.title}
          </h3>

          <p className="text-slate-500 mt-3 max-w-2xl">
            {service.desc}
          </p>
        </div>

        {/* CARDS */}
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
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b71ca]/30 via-transparent to-transparent" />

                {/* BADGE */}
                <div className="absolute top-5 left-5">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-cyan-50/50">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#3b71ca]">
                      Premium Service
                    </span>
                  </div>
                </div>

                {/* NUMBER */}
                <div className="absolute top-5 right-5">
                  <span className="text-5xl font-black text-white/60 drop-shadow-sm">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* LABEL */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#00b4ed] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#3b71ca]">
                    Smart Solution
                  </span>
                </div>

                {/* TITLE */}
                <h4 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-[#3b71ca] transition-colors duration-300">
                  {item.name}
                </h4>

                {/* DESC */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
                    Fast Service
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
                    Expert Team
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
                    Trusted Support
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      openModal();
                      window.location.hash = "get-started";
                    }}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] hover:opacity-95 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#3b71ca]/10"
                  >
                    Hire Now
                    <ArrowRight size={16} />
                  </button>

                  <Link
                    href={`/sales/${item.id}`}
                    className="flex-1 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:text-[#3b71ca] hover:border-[#3b71ca]/30 text-slate-900 font-bold flex items-center justify-center transition-all duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>

              {/* BORDER OVERLAY ON HOVER */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#00b4ed]/40 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="pt-6"
        >
          <a
            href="/#contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] hover:opacity-95 text-white rounded-2xl font-bold items-center gap-2 shadow-xl shadow-[#3b71ca]/20 transition-all duration-300"
          >
            Contact For Bulk Rental / Repair
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    ))}
  </div>
</section>

        {/* ADVANTAGE SECTION */}
        
      </div>

      {/* MODAL */}
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default HardwarePage;