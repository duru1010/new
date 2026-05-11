"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, Laptop, ChevronDown, 
  Shield, Network, Settings, ShoppingBag, 
  Send, User, MessageSquare 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const root = window.document.documentElement;
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      root.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      root.classList.add('dark');
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const services = [
    { name: 'CCTV & Security', icon: <Shield size={16} />, href: '/security' },
    { name: 'Networking', icon: <Network size={16} />, href: '/networking' },
    { name: 'IT Support (AMC)', icon: <Settings size={16} />, href: '/amc' },
    { name: 'Hardware Sales', icon: <ShoppingBag size={16} />, href: '/sales' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#get-started') {
        setShowForm(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div className={`relative flex items-center justify-between py-3 px-6 transition-all duration-500 ${
            isScrolled ? 'rounded-full bg-white/90 dark:bg-[#333333]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl' 
            : 'bg-transparent border-b border-slate-200 dark:border-white/5'}`}>
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-[#333333] dark:bg-[#4a4a4a] p-1.5 rounded-xl shadow-lg flex items-center justify-center border border-white/10">
                <img 
                  src="/softlink_logowht01-1024x293 (1).png" 
                  alt="Softlink Logo" 
                  className="h-10  w-10 object-contain" 
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg font-black dark:text-white text-[#333333]">SOFTLINK</span>
                <span className="text-[8px] font-bold text-[#25C1C5] tracking-[0.4em] uppercase">Computers</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-[#25C1C5] transition-colors">
                  {link.name}
                </a>
              ))}
              
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-[#25C1C5] transition-colors">
                  Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white dark:bg-[#333333] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-2">
                    {services.map((s) => (
                      <a key={s.name} href={s.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium dark:text-slate-300 text-slate-600 transition-all">
                        <div className="text-[#25C1C5]">{s.icon}</div>
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="relative w-12 h-7 bg-slate-200 dark:bg-white/10 rounded-full p-1 transition-colors hidden sm:block">
                <motion.div animate={{ x: isDarkMode ? 20 : 0 }} className="w-5 h-5 bg-white dark:bg-[#25C1C5] rounded-full flex items-center justify-center shadow-md">
                  {isDarkMode ? <Moon size={10} className="text-white" /> : <Sun size={10} className="text-orange-500" />}
                </motion.div>
              </button>

              <button 
                onClick={() => setShowForm(true)}
                className="hidden md:block px-6 py-2.5 bg-[#25C1C5] hover:bg-[#1eb0b4] text-white rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
              >
                Get Started
              </button>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg dark:text-white text-slate-900 bg-slate-100 dark:bg-white/10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] md:hidden bg-white dark:bg-[#333333] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b dark:border-white/5">
              <span className="text-xl font-black dark:text-white text-[#333333]">SOFTLINK</span>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-white/10 dark:text-white"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-bold dark:text-white text-[#333333]">
                  {link.name}
                </a>
              ))}

              <div className="space-y-4">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-bold dark:text-white text-[#333333]"
                >
                  Services <ChevronDown size={24} className={`${mobileServicesOpen ? 'rotate-180' : ''} transition-transform`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-2">
                      {services.map((s) => (
                        <a key={s.name} href={s.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-lg dark:text-slate-300">
                          <div className="text-[#25C1C5]">{s.icon}</div> {s.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-6 space-y-4 border-t dark:border-white/5">
              <button onClick={() => { setShowForm(true); setIsOpen(false); }} className="w-full py-4 bg-[#25C1C5] text-white rounded-2xl font-black text-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowForm(false)} className="absolute inset-0 bg-[#333333]/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white dark:bg-[#333333] rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10">
              <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400"><X size={24} /></button>
              <h3 className="text-2xl font-black dark:text-white text-[#333333] mb-6">Start Your Project</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-[#25C1C5]" /></div>
                <select className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none">
                  {services.map(s => <option key={s.name}>{s.name}</option>)}
                </select>
                <div className="relative"><MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} /><textarea rows={3} placeholder="Message" className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-[#25C1C5]" /></div>
                <button className="w-full py-4 bg-[#25C1C5] hover:bg-[#1eb0b4] text-white rounded-2xl font-bold flex items-center justify-center gap-2">Send Request <Send size={18} /></button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;