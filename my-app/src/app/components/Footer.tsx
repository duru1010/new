"use client";

import React from "react";
import { motion } from "framer-motion";


import {
  Globe,
  Send,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Our Partners", href: "#partners" },
      { name: "Contact", href: "#contact" },
    ],

    Solutions: [
      { name: "IT Infrastructure", href: "#" },
      { name: "Security Systems", href: "#" },
      { name: "Networking", href: "#" },
      { name: "Cloud Services", href: "#" },
    ],

    Support: [
      {
        name: "Get a Quotation",
        href: "/dashboard/quotations",
        isNew: true,
      },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  // ✅ FIXED SOCIAL ICONS
 const socialLinks = [
  {
    icon: <Globe size={18} />,
    href: "https://facebook.com",
  },

  {
    icon: <Send size={18} />,
    href: "https://twitter.com",
  },

 
];
  return (
    <footer className="bg-white dark:bg-[#0A1628] border-t border-slate-100 dark:border-white/5 pt-20 pb-10 transition-colors duration-700 overflow-hidden">
      
      <div className="container mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* LEFT */}
          <div className="lg:col-span-4 space-y-6">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="relative">

                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />

                <img
                  src="/SoftLink Logo Black-01.png"
                  alt="Softlink Logo"
                  className="relative w-24 h-24 object-contain"
                />
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed max-w-sm text-[15px]">
              Empowering businesses with cutting-edge IT infrastructure,
              networking, security systems, cloud solutions, and professional
              technology services since 2012.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">

              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group relative w-11 h-11 rounded-2xl bg-slate-100 dark:bg-[#1A3A6B]/20 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-[#0057FF] hover:to-[#3B82F6] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <span className="relative z-10">
                    {social.icon}
                  </span>
                </motion.a>
              ))}

            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>

                {/* TITLE */}
                <h4 className="text-[#0A1628] dark:text-[#4DA6FF] font-black mb-6 uppercase tracking-[0.25em] text-[11px]">
                  {title}
                </h4>

                {/* LINKS */}
                <ul className="space-y-4">

                  {links.map((link: any) => (
                    <li key={link.name}>

                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#0057FF] dark:hover:text-[#4DA6FF] transition-all duration-300 text-sm font-medium"
                      >
                        <span>{link.name}</span>

                        {/* NEW TAG */}
                        {link.isNew && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#0057FF] dark:bg-[#0057FF]/20 dark:text-[#4DA6FF] text-[9px] font-black uppercase tracking-wide">
                            New
                          </span>
                        )}

                        {/* ARROW */}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                         
                        </span>
                      </a>

                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">

          {/* COPYRIGHT */}
          <p className="text-slate-400 dark:text-slate-500 text-xs tracking-wide">
            © {currentYear} Softlink Computers. All rights reserved.
          </p>

          {/* STATUS */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">

            <div className="relative flex items-center justify-center">

              <div className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping" />

              <div className="relative w-2.5 h-2.5 rounded-full bg-green-500" />

            </div>

            <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
              System Status : Active
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;