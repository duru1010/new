"use client";
import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (name: string, props = { size: 18 }) => {
    const IconComponent = (Lucide as any)[name] || (Lucide as any)[`${name}Icon`] || Lucide.HelpCircle;
    return <IconComponent {...props} />;
  };

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
      // ADDED: Quotation Link with a "New" badge logic
      { name: "Get a Quotation", href: "/dashboard/quotations", isNew: true }, 
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: getIcon('Facebook'), href: "#" },
    { icon: getIcon('Twitter'), href: "#" },
    { icon: getIcon('Linkedin'), href: "#" },
    { icon: getIcon('Instagram'), href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-[#333333] border-t border-slate-100 dark:border-white/5 pt-20 pb-10 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#25C1C5] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#25C1C5]/20">
                {getIcon('Cpu', { size: 24 })}
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#333333] dark:text-white">
                SOFTLINK
              </span>
            </div>
            
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge IT infrastructure and professional security solutions since 2012.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#4a4a4a] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#25C1C5] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[#333333] dark:text-[#25C1C5] font-bold mb-6 uppercase tracking-widest text-[10px]">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link: any) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-[#25C1C5] transition-colors flex items-center group gap-1 text-sm font-medium">
                        {link.name}
                        {link.isNew && (
                          <span className="ml-2 px-1.5 py-0.5 bg-[#25C1C5]/10 text-[#25C1C5] text-[8px] font-black rounded uppercase">
                            New
                          </span>
                        )}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                           {getIcon('ArrowUpRight', { size: 14 })}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            © {currentYear} Softlink Computers. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#25C1C5] animate-pulse" />
            <p className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-wide">
              System Status: Active
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;