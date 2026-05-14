// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link'; // Import Link
// import { 
//   Shield, 
//   Network, 
//   Server, 
//   Cpu, 
//   HardDrive 
// } from 'lucide-react';

// const services = [
//   {
//     title: "CCTV & Security",
//     description: "Advanced surveillance systems with AI-driven monitoring and remote access.",
//     icon: <Shield className="w-8 h-8" />,
//     className: "md:col-span-2",
//     gradient: "from-blue-600 to-cyan-500",
//     href: "/security" // Paths now match your Navbar
//   },
//   {
//     title: "Networking",
//     description: "Robust enterprise infrastructure and high-speed wireless solutions.",
//     icon: <Network className="w-8 h-8" />,
//     className: "md:col-span-1",
//     gradient: "from-indigo-600 to-purple-500",
//     href: "/networking"
//   },
//   {
//     title: "IT Support (AMC)",
//     description: "Annual Maintenance Contracts to keep your business running 24/7 without glitches.",
//     icon: <Server className="w-8 h-8" />,
//     className: "md:col-span-1",
//     gradient: "from-emerald-600 to-teal-500",
//     href: "/amc"
//   },
//   {
//     title: "Hardware Sales",
//     description: "High-performance laptops, workstations, and server components from top brands.",
//     icon: <Cpu className="w-8 h-8" />,
//     className: "md:col-span-2",
//     gradient: "from-orange-600 to-red-500",
//     href: "/sales"
//   }
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-[#020617]">
//       {/* Background Dots Animation... (kept your existing logic) */}
//       <div className="absolute inset-0 z-0">
//         <motion.div 
//           animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle, var(--dot-color, #cbd5e1) 1.5px, transparent 1.5px)`,
//             backgroundSize: '40px 40px',
//           }}
//         />
//         <style jsx>{`
//           div { --dot-color: #cbd5e1; }
//           :global(.dark) div { --dot-color: #1e293b; }
//         `}</style>
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#020617] dark:via-transparent dark:to-[#020617] pointer-events-none" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-center mb-16 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white"
//           >
//             Infrastructure <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Perfected.</span>
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ServiceCard = ({ title, description, icon, className, gradient, index, href }: any) => {
//   return (
//     <Link href={href} className={className}> {/* Wrap Card in Link */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: index * 0.1 }}
//         viewport={{ once: true }}
//         whileHover={{ y: -10 }}
//         className={`group relative overflow-hidden rounded-[2.5rem] p-8 h-full cursor-pointer
//           bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl 
//           border border-slate-200 dark:border-white/10 
//           shadow-xl hover:shadow-2xl transition-all duration-500`}
//       >
//         <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
        
//         <div className="relative mb-8">
//           <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${gradient} rounded-full`} />
//           <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
//             {icon}
//           </div>
//         </div>

//         <div className="relative z-10">
//           <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
//             {title}
//           </h3>
//           <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         <div className="absolute bottom-6 right-8 opacity-10 group-hover:opacity-30 transition-all duration-700">
//           <HardDrive size={50} strokeWidth={1} className="text-slate-900 dark:text-white" />
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default Services;








"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Network, 
  Wrench,
  Key,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "Repair & Rental",
    description: "Expert maintenance for desktops and laptops. High-performance workstations available for flexible rental.",
    icon: <Wrench className="w-6 h-6" />,
    image: "/1c568e7a37d7969b9ec210f09872e17e.jpg",
    href: "/security",
    tags: ["Hardware", "Support"]
  },
  {
    title: "Networking",
    description: "Wired and Wireless setups with secure NAS configurations for offices, clinics, and institutes.",
    icon: <Network className="w-6 h-6" />,
    image: "/a17e926721d214ed38986aa592f425ca.jpg",
    href: "/networking",
    tags: ["Infrastructure", "Security"]
  },
  {
    title: "Software Licenses",
    description: "Authorized provider for Microsoft, Tally, and Quick-Heal. Genuine licenses at enterprise rates.",
    icon: <Key className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    href: "/sales",
    tags: ["Compliance", "Software"]
  },
 {
    title: "CCTV & Security Solutions",
    description: "End-to-end surveillance setup with remote monitoring, DVR/NVR configuration, and AI-enabled motion detection for homes and offices.",
    icon: <Key className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1471&auto=format&fit=crop",
    href: "/amc",
    tags: ["Security", "Infrastructure"]
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-[#F0F4FF] dark:bg-[#0A1628] transition-colors duration-700">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0A1628] dark:text-white leading-none mb-4">
              Our Core <span className="text-[#0057FF]">Expertise.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Comprehensive IT infrastructure and support services designed for growth.
            </p>
          </div>
          <Link href="/all-services" className="text-[#0057FF] font-bold flex items-center gap-2 hover:underline">
            View All Services <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* 3-Card Grid Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full flex flex-col bg-white dark:bg-[#1A3A6B] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#0057FF]/10 group-hover:-translate-y-2">
                  
                  {/* Image Header */}
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#0A1628]/90 backdrop-blur-md p-2 rounded-xl text-[#0057FF] shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-[#0057FF]/5 dark:bg-[#4DA6FF]/10 text-[#0057FF] dark:text-[#4DA6FF] rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-black text-[#0A1628] dark:text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-[#0057FF] transition-colors">
                        Discover Service
                      </span>
                      <CheckCircle2 size={18} className="text-[#4DA6FF]/40 group-hover:text-[#0057FF] transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;