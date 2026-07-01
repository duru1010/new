"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/aboutu" },
      { name: "Services", href: "/#services" },
      { name: "Contact", href: "/contact" },
    ],

    Solutions: [
      { name: "Rental & Repair", href: "/security" },
      { name: "Software Licenses", href: "/sales" },
      { name: "Networking", href: "/networking" },
      { name: "Security & Surveillance", href: "/amc" },
    ],

    Support: [
      { name: "Help Center", href: "/help-center" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  };

  const socialLinks = [
    { icon: <Globe size={18} />, href: "https://facebook.com" },
    { icon: <Send size={18} />, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-[#0a1420] text-white border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 mb-6">

          {/* LEFT */}
          <div className="lg:col-span-4 space-y-6"> {/* Increased block-level spacing for the main items */}
  
  {/* Grouping Logo and Paragraph tightly together */}
  <div className="space-y-1"> 
    <div className="flex items-center gap-3">
      <img
        src="/Logo Of Softlink C-01.png"
        alt="Softlink Logo"
        className="w-50 h-14 object-contain"
      />
    </div>

    <p className="text-white/80 leading-relaxed max-w-sm text-[15px]">
      Empowering businesses with cutting-edge IT infrastructure,
      networking, security systems, cloud solutions, and professional
      technology services since 2012.
    </p>
  </div>

  {/* SOCIAL ICONS */}
  <div className="flex gap-4 pt-2">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.1 }}
        className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0057FF] transition-all"
      >
        {social.icon}
      </motion.a>
    ))}
  </div>
</div>

          {/* RIGHT LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-black mb-6 uppercase tracking-[0.25em] text-[11px]">
                  {title}
                </h4>

                <ul className="space-y-4">
                  {links.map((link: any) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition flex items-center gap-2 text-sm font-medium"
                      >
                        {link.name}

                        {link.isNew && (
                          <span className="px-2 py-0.5 rounded-full bg-white text-[#0057FF] text-[9px] font-black uppercase">
                            New
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-white/70 text-xs">
            © {currentYear} Softlink Computers. All rights reserved.
          </p>

          

        </div>
      </div>
    </footer>
  );
};

export default Footer;
