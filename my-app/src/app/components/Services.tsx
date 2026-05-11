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
  Shield, 
  Network, 
  Server, 
  Cpu, 
  HardDrive 
} from 'lucide-react';

const services = [
  {
    title: "CCTV & Security",
    description: "Advanced surveillance systems with AI-driven monitoring and remote access.",
    icon: <Shield className="w-8 h-8" />,
    className: "md:col-span-2",
    href: "/security"
  },
  {
    title: "Networking",
    description: "Robust enterprise infrastructure and high-speed wireless solutions.",
    icon: <Network className="w-8 h-8" />,
    className: "md:col-span-1",
    href: "/networking"
  },
  {
    title: "IT Support (AMC)",
    description: "Annual Maintenance Contracts to keep your business running 24/7 without glitches.",
    icon: <Server className="w-8 h-8" />,
    className: "md:col-span-1",
    href: "/amc"
  },
  {
    title: "Hardware Sales",
    description: "High-performance laptops, workstations, and server components from top brands.",
    icon: <Cpu className="w-8 h-8" />,
    className: "md:col-span-2",
    href: "/sales"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-[#333333] transition-colors duration-700">
      
      {/* Background Dots Animation using Brand Colors */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, var(--dot-color, #cbd5e1) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <style jsx>{`
          div { --dot-color: #e2e8f0; }
          :global(.dark) div { --dot-color: #4a4a4a; }
        `}</style>
        {/* Soft edge masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#333333] dark:via-transparent dark:to-[#333333] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-[#333333] dark:text-white"
          >
            What We Do <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25C1C5] to-[#49D1D5]">For Your Business.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, className, index, href }: any) => {
  return (
    <Link href={href} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className={`group relative overflow-hidden rounded-[2.5rem] p-8 h-full cursor-pointer
          bg-white/70 dark:bg-[#333333]/40 backdrop-blur-xl 
          border border-slate-200 dark:border-[#25C1C5]/20 
          shadow-xl hover:shadow-2xl transition-all duration-500`}
      >
        {/* Hover Gradient Overlay - Brand Teal */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-[#25C1C5]" />
        
        <div className="relative mb-8">
          {/* Icon Glow */}
          <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[#25C1C5] rounded-full" />
          <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-[#333333] dark:text-white group-hover:bg-[#25C1C5] group-hover:text-white transition-all duration-500">
            {icon}
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4 text-[#333333] dark:text-white group-hover:text-[#25C1C5] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative Background Icon */}
        <div className="absolute bottom-6 right-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
          <HardDrive size={80} strokeWidth={1} className="text-[#333333] dark:text-[#25C1C5]" />
        </div>
      </motion.div>
    </Link>
  );
};

export default Services;