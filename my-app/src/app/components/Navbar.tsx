

// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Menu, X, Sun, Moon, Laptop, ChevronDown, 
//   Shield, Network, Settings, ShoppingBag, 
//   Send, User, MessageSquare, Loader2, Phone 
// } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
// const [otp, setOtp] = useState("");
// const [generatedOtp, setGeneratedOtp] = useState("");
// const [otpSent, setOtpSent] = useState(false);
// const [otpVerified, setOtpVerified] = useState(false);
// const [isSendingOtp, setIsSendingOtp] = useState(false);
//   // Form State
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobile: '',
//     service: 'CCTV & Security',
//     message: ''
//   });

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const root = window.document.documentElement;
//     if (savedTheme === 'light') {
//       setIsDarkMode(false);
//       root.classList.remove('dark');
//     } else {
//       setIsDarkMode(true);
//       root.classList.add('dark');
//     }

//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//       setIsDarkMode(false);
//     } else {
//       root.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//       setIsDarkMode(true);
//     }
//   };

//   const services = [
//     { name: 'CCTV & Security', icon: <Shield size={16} />, href: '/security' },
//     { name: 'Networking', icon: <Network size={16} />, href: '/networking' },
//     { name: 'Licenses', icon: <ShoppingBag size={16} />, href: '/sales' },
//   ];

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleHashCheck = () => {
//       if (window.location.hash === '#get-started') {
//         setShowForm(true);
//         window.history.replaceState(null, "", window.location.pathname);
//       }
//     };
//     handleHashCheck();
//     window.addEventListener('hashchange', handleHashCheck);
//     return () => window.removeEventListener('hashchange', handleHashCheck);
//   }, []);

//   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('/api/project-request', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert("Request sent successfully!");
//         setShowForm(false);
//         setFormData({ fullName: '', mobile: '', service: 'CCTV & Security', message: '' });
//       } else {
//         throw new Error();
//       }
//     } catch (err) {
//       alert("Failed to send request. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
// const sendOtp = async () => {
//   if (!formData.mobile || formData.mobile.length < 10) {
//     alert("Enter valid mobile number");
//     return;
//   }

//   setIsSendingOtp(true);

//   try {
//     const newOtp = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     setGeneratedOtp(newOtp);

//     const response = await fetch("/api/send-otp", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         mobile: formData.mobile,
//         otp: newOtp,
//       }),
//     });

//     if (response.ok) {
//       setOtpSent(true);
//       alert("OTP Sent Successfully");
//     } else {
//       alert("Failed to send OTP");
//     }
//   } catch (error) {
//     console.log(error);
//     alert("Something went wrong");
//   } finally {
//     setIsSendingOtp(false);
//   }
// };

// const verifyOtp = () => {
//   if (otp === generatedOtp) {
//     setOtpVerified(true);
//     alert("OTP Verified Successfully");
//   } else {
//     alert("Invalid OTP");
//   }
// };
//   return (
//     <>
//       <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}>
//         <div className="max-w-7xl mx-auto">
//           <motion.div className={`relative flex items-center justify-between py-3 px-6 transition-all duration-500 ${
//             isScrolled ? 'rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl' 
//             : 'bg-transparent border-b border-slate-200 dark:border-white/5'}`}>
            
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="bg-slate-900 dark:bg-slate-800 p-1.5 rounded-xl shadow-lg flex items-center justify-center border border-white/10">
//                 <img 
//                   src="/softlink_logowht01-1024x293 (1).png" 
//                   alt="Softlink Logo" 
//                   className="h-10 w-10 object-contain" 
//                 />
//               </div>

//               <div className="flex flex-col leading-none">
//                 <span className="text-lg font-black dark:text-white text-slate-900">SOFTLINK</span>
//                 <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.4em] uppercase">Computers</span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   {link.name}
//                 </a>
//               ))}
              
//               <div className="relative group">
//                 <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
//                 </button>
//                 <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
//                   <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-2">
//                     {services.map((s) => (
//                       <a key={s.name} href={s.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium dark:text-slate-300 text-slate-600 transition-all">
//                         <div className="text-indigo-600 dark:text-indigo-400">{s.icon}</div>
//                         {s.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               <button onClick={toggleTheme} className="relative w-12 h-7 bg-slate-200 dark:bg-white/10 rounded-full p-1 transition-colors hidden sm:block">
//                 <motion.div animate={{ x: isDarkMode ? 20 : 0 }} className="w-5 h-5 bg-white dark:bg-indigo-600 rounded-full flex items-center justify-center shadow-md">
//                   {isDarkMode ? <Moon size={10} className="text-white" /> : <Sun size={10} className="text-orange-500" />}
//                 </motion.div>
//               </button>

//               <button 
//                 onClick={() => setShowForm(true)}
//                 className="hidden md:block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
//               >
//                 Get Started
//               </button>

//               <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg dark:text-white text-slate-900 bg-slate-100 dark:bg-white/10">
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, x: '100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '100%' }}
//             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//             className="fixed inset-0 z-[150] md:hidden bg-white dark:bg-slate-950 flex flex-col"
//           >
//             <div className="flex items-center justify-between p-6 border-b dark:border-white/5">
//               <span className="text-xl font-black dark:text-white text-slate-900">SOFTLINK</span>
//               <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-white/10 dark:text-white"><X size={24} /></button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-4">
//               {navLinks.map((link) => (
//                 <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-bold dark:text-white text-slate-900">
//                   {link.name}
//                 </a>
//               ))}

//               <div className="space-y-4">
//                 <button 
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   className="flex items-center justify-between w-full text-2xl font-bold dark:text-white text-slate-900"
//                 >
//                   Services <ChevronDown size={24} className={`${mobileServicesOpen ? 'rotate-180' : ''} transition-transform`} />
//                 </button>
//                 <AnimatePresence>
//                   {mobileServicesOpen && (
//                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-2">
//                       {services.map((s) => (
//                         <a key={s.name} href={s.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-lg dark:text-slate-300">
//                           <div className="text-indigo-600 dark:text-indigo-400">{s.icon}</div> {s.name}
//                         </a>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             <div className="p-6 space-y-4 border-t dark:border-white/5">
//               <button onClick={() => { setShowForm(true); setIsOpen(false); }} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg">
//                 Get Started
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Form Modal */}
//       <AnimatePresence>
//         {showForm && (
//             <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowForm(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
//             <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10">
//               <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400"><X size={24} /></button>
//               <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-6">Start Your Project</h3>
              
//               <form className="space-y-4" onSubmit={handleFormSubmit}>
//                 <div className="relative">
//                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//                   <input 
//                     required
//                     type="text" 
//                     placeholder="Full Name" 
//                     value={formData.fullName}
//                     onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                     className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600" 
//                   />
//                 </div>

//                 <div className="space-y-3">
//   <div className="relative">
//     <Phone
//       className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//       size={18}
//     />

//     <input
//       required
//       type="tel"
//       placeholder="Mobile Number"
//       value={formData.mobile}
//       onChange={(e) =>
//         setFormData({
//           ...formData,
//           mobile: e.target.value,
//         })
//       }
//       className="w-full pl-12 pr-32 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//     />

//     <button
//       type="button"
//       onClick={sendOtp}
//       disabled={isSendingOtp || otpVerified}
//       className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold disabled:opacity-50"
//     >
//       {otpVerified
//         ? "Verified"
//         : isSendingOtp
//         ? "Sending..."
//         : "Send OTP"}
//     </button>
//   </div>

//   {otpSent && !otpVerified && (
//     <div className="flex gap-2">
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//       />

//       <button
//         type="button"
//         onClick={verifyOtp}
//         className="px-5 py-3 rounded-2xl bg-green-600 text-white font-bold"
//       >
//         Verify
//       </button>
//     </div>
//   )}

//   {otpVerified && (
//     <p className="text-green-500 text-sm font-semibold">
//       Mobile Number Verified Successfully
//     </p>
//   )}
// </div>
                
//                 <select 
//                   className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//                   value={formData.service}
//                   onChange={(e) => setFormData({...formData, service: e.target.value})}
//                 >
//                   {services.map(s => <option key={s.name} value={s.name} className="dark:bg-slate-900">{s.name}</option>)}
//                 </select>

//                 <div className="relative">
//                   <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
//                   <textarea 
//                     required
//                     rows={3} 
//                     placeholder="Message" 
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600" 
//                   />
//                 </div>

//                <button 
//   type="submit"
//   disabled={isSubmitting || !otpVerified}
//   className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
// >
//   {isSubmitting ? (
//     <>Processing <Loader2 className="animate-spin" size={18} /></>
//   ) : (
//     <>Send Request <Send size={18} /></>
//   )}
// </button>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   ChevronDown,
//   Shield,
//   Network,
//   ShoppingBag,
//   Send,
//   User,
//   MessageSquare,
//   Loader2,
//   Phone,
//   Mail,
// } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   // OTP STATES
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [isSendingOtp, setIsSendingOtp] = useState(false);

//   // FORM STATE
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     service: "CCTV & Security",
//     message: "",
//   });

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const root = window.document.documentElement;

//     if (savedTheme === "light") {
//       setIsDarkMode(false);
//       root.classList.remove("dark");
//     } else {
//       setIsDarkMode(true);
//       root.classList.add("dark");
//     }

//     const handleScroll = () => setIsScrolled(window.scrollY > 20);

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const root = window.document.documentElement;

//     if (isDarkMode) {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   const services = [
//     {
//       name: "Retal & Repair",
//       icon: <Shield size={16} />,
//       href: "/security",
//     },
//     {
//       name: "Networking",
//       icon: <Network size={16} />,
//       href: "/networking",
//     },
//     {
//       name: "Licenses",
//       icon: <ShoppingBag size={16} />,
//       href: "/sales",
//     },
//   ];

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleHashCheck = () => {
//       if (window.location.hash === "#get-started") {
//         setShowForm(true);
//         window.history.replaceState(null, "", window.location.pathname);
//       }
//     };

//     handleHashCheck();

//     window.addEventListener("hashchange", handleHashCheck);

//     return () =>
//       window.removeEventListener("hashchange", handleHashCheck);
//   }, []);

//   const sendOtp = async () => {
//     // 1. Validate Email instead of Mobile
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     setIsSendingOtp(true);

//     try {
//       const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
//       setGeneratedOtp(newOtp);

//       const response = await fetch("/api/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email, // Passing email to backend
//           otp: newOtp,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setOtpSent(true);
//         alert("OTP Sent to your email successfully");
//         console.log("OTP Debug:", newOtp);
//       } else {
//         alert(data.error || "Failed to send OTP");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong with the email service");
//     } finally {
//       setIsSendingOtp(false);
//     }
//   };

//   const verifyOtp = () => {
//   if (otp.trim() === generatedOtp.trim()) {
//     setOtpVerified(true);
//     alert("OTP Verified Successfully");
//   } else {
//     setOtpVerified(false);
//     alert("Invalid OTP");
//   }
// };

//   // FORM SUBMIT
//   const handleFormSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     if (!otpVerified) {
//       alert("Please verify OTP first");
//       return;
//     }

//     setIsSubmitting(true);

//    try {
//   setIsSubmitting(true);

//   const response = await fetch("/api/project-request", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData), // formData now includes 'email'
//   });

//   const data = await response.json();

//   if (response.ok) {
//     alert("Request sent successfully!");
//     setShowForm(false);
    
//     // Reset form including the new email field
//     setFormData({
//       fullName: "",
//       email: "", 
//       mobile: "",
//       service: "CCTV & Security",
//       message: "",
//     });

//     setOtp("");
//     setGeneratedOtp("");
//     setOtpSent(false);
//     setOtpVerified(false);
//   } else {
//     // This will now show the actual error from the backend (like "Auth failed")
//     alert(data.error || "Failed to send request");
//   }
// } catch (err) {
//   console.error("Frontend Error:", err);
//   alert("Network error. Please try again.");
// } finally {
//   setIsSubmitting(false);
// }
//   };

//   return (
//     <>
//       <nav
//         className={`fixed w-full z-[100] transition-all duration-500 ${
//           isScrolled ? "top-4 px-4" : "top-0 px-0"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className={`relative flex items-center justify-between py-3 px-6 transition-all duration-500 ${
//               isScrolled
//                 ? "rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl"
//                 : "bg-transparent border-b border-slate-200 dark:border-white/5"
//             }`}
//           >
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="bg-slate-900 dark:bg-slate-800 p-1.5 rounded-xl shadow-lg flex items-center justify-center border border-white/10">
//                 <img
//                   src="/softlink_logowht01-1024x293 (1).png"
//                   alt="Softlink Logo"
//                   className="h-10 w-10 object-contain"
//                 />
//               </div>

//               <div className="flex flex-col leading-none">
//                 <span className="text-lg font-black dark:text-white text-slate-900">
//                   SOFTLINK
//                 </span>

//                 <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.4em] uppercase">
//                   Computers
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}

//               <div className="relative group">
//                 <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Services{" "}
//                   <ChevronDown
//                     size={14}
//                     className="group-hover:rotate-180 transition-transform"
//                   />
//                 </button>

//                 <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
//                   <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-2">
//                     {services.map((s) => (
//                       <a
//                         key={s.name}
//                         href={s.href}
//                         className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium dark:text-slate-300 text-slate-600 transition-all"
//                       >
//                         <div className="text-indigo-600 dark:text-indigo-400">
//                           {s.icon}
//                         </div>

//                         {s.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={toggleTheme}
//                 className="relative w-12 h-7 bg-slate-200 dark:bg-white/10 rounded-full p-1 transition-colors hidden sm:block"
//               >
//                 <motion.div
//                   animate={{ x: isDarkMode ? 20 : 0 }}
//                   className="w-5 h-5 bg-white dark:bg-indigo-600 rounded-full flex items-center justify-center shadow-md"
//                 >
//                   {isDarkMode ? (
//                     <Moon size={10} className="text-white" />
//                   ) : (
//                     <Sun size={10} className="text-orange-500" />
//                   )}
//                 </motion.div>
//               </button>

//               <button
//                 onClick={() => setShowForm(true)}
//                 className="hidden md:block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
//               >
//                 Get Started
//               </button>

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-lg dark:text-white text-slate-900 bg-slate-100 dark:bg-white/10"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{
//               type: "spring",
//               damping: 25,
//               stiffness: 200,
//             }}
//             className="fixed inset-0 z-[150] md:hidden bg-white dark:bg-slate-950 flex flex-col"
//           >
//             <div className="flex items-center justify-between p-6 border-b dark:border-white/5">
//               <span className="text-xl font-black dark:text-white text-slate-900">
//                 SOFTLINK
//               </span>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 rounded-full bg-slate-100 dark:bg-white/10 dark:text-white"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block text-2xl font-bold dark:text-white text-slate-900"
//                 >
//                   {link.name}
//                 </a>
//               ))}

//               <div className="space-y-4">
//                 <button
//                   onClick={() =>
//                     setMobileServicesOpen(!mobileServicesOpen)
//                   }
//                   className="flex items-center justify-between w-full text-2xl font-bold dark:text-white text-slate-900"
//                 >
//                   Services{" "}
//                   <ChevronDown
//                     size={24}
//                     className={`${
//                       mobileServicesOpen ? "rotate-180" : ""
//                     } transition-transform`}
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {mobileServicesOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       className="overflow-hidden space-y-2"
//                     >
//                       {services.map((s) => (
//                         <a
//                           key={s.name}
//                           href={s.href}
//                           onClick={() => setIsOpen(false)}
//                           className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-lg dark:text-slate-300"
//                         >
//                           <div className="text-indigo-600 dark:text-indigo-400">
//                             {s.icon}
//                           </div>

//                           {s.name}
//                         </a>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             <div className="p-6 space-y-4 border-t dark:border-white/5">
//               <button
//                 onClick={() => {
//                   setShowForm(true);
//                   setIsOpen(false);
//                 }}
//                 className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg"
//               >
//                 Get Started
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* FORM MODAL */}
      
//         <AnimatePresence>
//   {showForm && (
//     <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setShowForm(false)}
//         className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
//       />

//       {/* Modal Container */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 20 }}
//         className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10"
//       >
//         <button
//           onClick={() => setShowForm(false)}
//           className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
//         >
//           <X size={24} />
//         </button>

//         <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-6">
//           Start Your Project
//         </h3>

//         <form className="space-y-4" onSubmit={handleFormSubmit}>
          
//           {/* FULL NAME */}
//           <div className="relative">
//             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//             <input
//               required
//               type="text"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//             />
//           </div>

//           {/* EMAIL ADDRESS + OTP TRIGGER */}
//           <div className="space-y-3">
//             <div className="relative">
//               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//               <input
//                 required
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full pl-12 pr-32 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//               />
//               <button
//                 type="button"
//                 onClick={sendOtp}
//                 disabled={isSendingOtp || otpVerified || !formData.email}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold disabled:opacity-50 disabled:bg-slate-400"
//               >
//                 {otpVerified ? "Verified" : isSendingOtp ? "Sending..." : "Send OTP"}
//               </button>
//             </div>

//             {/* OTP VERIFICATION INPUT */}
//             {otpSent && !otpVerified && (
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Enter 6-digit OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//                 />
//                 <button
//                   type="button"
//                   onClick={verifyOtp}
//                   className="px-5 py-3 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors"
//                 >
//                   Verify
//                 </button>
//               </div>
//             )}

//             {otpVerified && (
//               <p className="text-green-500 text-xs font-semibold px-2">
//                 ✓ Email Address Verified Successfully
//               </p>
//             )}
//           </div>

//           {/* MOBILE NUMBER */}
//           <div className="relative">
//             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//             <input
//               required
//               type="tel"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//               className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//             />
//           </div>

//           {/* SERVICE SELECT */}
//           <select
//             className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600 appearance-none"
//             value={formData.service}
//             onChange={(e) => setFormData({ ...formData, service: e.target.value })}
//           >
//             {services.map((s) => (
//               <option key={s.name} value={s.name} className="dark:bg-slate-900">
//                 {s.name}
//               </option>
//             ))}
//           </select>

//           {/* MESSAGE */}
//           <div className="relative">
//             <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
//             <textarea
//               required
//               rows={3}
//               placeholder="Message"
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border dark:border-white/10 dark:text-white outline-none focus:ring-2 ring-indigo-600"
//             />
//           </div>

//           {/* FINAL SUBMIT BUTTON */}
//           <button
//             type="submit"
//             disabled={isSubmitting || !otpVerified}
//             className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
//               otpVerified
//                 ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
//                 : "bg-slate-300 dark:bg-slate-700 cursor-not-allowed text-slate-500"
//             }`}
//           >
//             {isSubmitting ? (
//               <>Processing <Loader2 className="animate-spin" size={18} /></>
//             ) : (
//               <>Send Request <Send size={18} /></>
//             )}
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   )}
// </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;







// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   ChevronDown,
//   Shield,
//   Network,
//   ShoppingBag,
//   Send,
//   User,
//   MessageSquare,
//   Loader2,
//   Phone,
//   Mail,
//   Building2,
// } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   // OTP STATES
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [isSendingOtp, setIsSendingOtp] = useState(false);

//   // FORM STATE
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     category: [] as string[],
//     duration: "",
//     company: "",
//     contactPerson: "",
//     mobile: "",
//     email: "",
//     city: "",
//     message: "",
//     captcha: "",
//   });

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const root = window.document.documentElement;

//     if (savedTheme === "light") {
//       setIsDarkMode(false);
//       root.classList.remove("dark");
//     } else {
//       setIsDarkMode(true);
//       root.classList.add("dark");
//     }

//     const handleScroll = () => setIsScrolled(window.scrollY > 20);

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const root = window.document.documentElement;

//     if (isDarkMode) {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   const services = [
//     {
//       name: "Rental & Repair",
//       icon: <Shield size={16} />,
//       href: "/security",
//     },
//     {
//       name: "Networking",
//       icon: <Network size={16} />,
//       href: "/networking",
//     },
//     {
//       name: "Licenses",
//       icon: <ShoppingBag size={16} />,
//       href: "/sales",
//     },
//   ];

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "#about" },
//     { name: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleHashCheck = () => {
//       if (window.location.hash === "#get-started") {
//         setShowForm(true);
//         window.history.replaceState(null, "", window.location.pathname);
//       }
//     };

//     handleHashCheck();

//     window.addEventListener("hashchange", handleHashCheck);

//     return () =>
//       window.removeEventListener("hashchange", handleHashCheck);
//   }, []);

//   const sendOtp = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email || !emailRegex.test(formData.email)) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     setIsSendingOtp(true);

//     try {
//       const newOtp = Math.floor(
//         100000 + Math.random() * 900000
//       ).toString();

//       setGeneratedOtp(newOtp);

//       const response = await fetch("/api/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           otp: newOtp,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setOtpSent(true);
//         alert("OTP Sent Successfully");
//       } else {
//         alert(data.error || "Failed to send OTP");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     } finally {
//       setIsSendingOtp(false);
//     }
//   };

//   const verifyOtp = () => {
//     if (otp.trim() === generatedOtp.trim()) {
//       setOtpVerified(true);
//       alert("OTP Verified Successfully");
//     } else {
//       setOtpVerified(false);
//       alert("Invalid OTP");
//     }
//   };

//   const handleFormSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     if (!otpVerified) {
//       alert("Please verify OTP first");
//       return;
//     }

//     if (formData.captcha !== "X7P2Q") {
//       alert("Invalid Captcha");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const response = await fetch("/api/project-request", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Request sent successfully!");

//         setShowForm(false);

//         setFormData({
//           category: [],
//           duration: "",
//           company: "",
//           contactPerson: "",
//           mobile: "",
//           email: "",
//           city: "",
//           message: "",
//           captcha: "",
//         });

//         setOtp("");
//         setGeneratedOtp("");
//         setOtpSent(false);
//         setOtpVerified(false);
//       } else {
//         alert(data.error || "Failed to send request");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Network error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <nav
//         className={`fixed w-full z-[100] transition-all duration-500 ${
//           isScrolled ? "top-4 px-4" : "top-0 px-0"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className={`relative flex items-center justify-between py-3 px-6 transition-all duration-500 ${
//               isScrolled
//                 ? "rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl"
//                 : "bg-transparent border-b border-slate-200 dark:border-white/5"
//             }`}
//           >
//             {/* LOGO */}
//             <div className="flex items-center gap-3">
//               <div className="bg-slate-900 dark:bg-slate-800 p-1.5 rounded-xl shadow-lg flex items-center justify-center border border-white/10">
//                 <img
//                   src="/softlink_logowht01-1024x293 (1).png"
//                   alt="Softlink Logo"
//                   className="h-10 w-10 object-contain"
//                 />
//               </div>

//               <div className="flex flex-col leading-none">
//                 <span className="text-lg font-black dark:text-white text-slate-900">
//                   SOFTLINK
//                 </span>

//                 <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.4em] uppercase">
//                   Computers
//                 </span>
//               </div>
//             </div>

//             {/* DESKTOP NAV */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}

//               <div className="relative group">
//                 <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold dark:text-slate-300 text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//                   Services
//                   <ChevronDown
//                     size={14}
//                     className="group-hover:rotate-180 transition-transform"
//                   />
//                 </button>

//                 <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
//                   <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-2">
//                     {services.map((s) => (
//                       <a
//                         key={s.name}
//                         href={s.href}
//                         className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-sm font-medium dark:text-slate-300 text-slate-600 transition-all"
//                       >
//                         <div className="text-indigo-600 dark:text-indigo-400">
//                           {s.icon}
//                         </div>

//                         {s.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={toggleTheme}
//                 className="relative w-12 h-7 bg-slate-200 dark:bg-white/10 rounded-full p-1 transition-colors hidden sm:block"
//               >
//                 <motion.div
//                   animate={{ x: isDarkMode ? 20 : 0 }}
//                   className="w-5 h-5 bg-white dark:bg-indigo-600 rounded-full flex items-center justify-center shadow-md"
//                 >
//                   {isDarkMode ? (
//                     <Moon size={10} className="text-white" />
//                   ) : (
//                     <Sun size={10} className="text-orange-500" />
//                   )}
//                 </motion.div>
//               </button>

//               <button
//                 onClick={() => setShowForm(true)}
//                 className="hidden md:block px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
//               >
//                 Get Started
//               </button>

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-lg dark:text-white text-slate-900 bg-slate-100 dark:bg-white/10"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </nav>

//       {/* FORM MODAL */}
//       {/* FORM MODAL */}
// <AnimatePresence>
//   {showForm && (
//     <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4">
//       {/* BACKDROP */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setShowForm(false)}
//         className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
//       />

//       {/* MODAL */}
//       <motion.div
//         initial={{ scale: 0.95, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.95, opacity: 0, y: 20 }}
//         transition={{ duration: 0.25 }}
//         className="
//           relative 
//           w-full 
//           max-w-7xl
//           h-[95vh]
//           bg-white 
//           dark:bg-slate-900 
//           rounded-[2rem] 
//           shadow-2xl 
//           border 
//           border-slate-200 
//           dark:border-white/10 
//           overflow-hidden
//           flex
//           flex-col
//         "
//       >
//         {/* HEADER */}
//         <div className="sticky top-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-5 sm:px-8 py-5">
//           <button
//             onClick={() => setShowForm(false)}
//             className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
//           >
//             <X size={24} />
//           </button>

//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-3 border border-indigo-500/20">
//             <ShoppingBag size={15} />
//             Rental Quote Request
//           </div>

//           <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">
//             Get Rental Pricing
//           </h3>

//           <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
//             Please fill the below form to receive your customized rental quotation.
//           </p>
//         </div>

//         {/* SCROLL AREA */}
//         <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
//           <form
//             className="grid grid-cols-1 lg:grid-cols-2 gap-5"
//             onSubmit={handleFormSubmit}
//           >
//             {/* LEFT COLUMN */}
//             <div className="space-y-5">
              
//               {/* MULTI CATEGORY */}
//               {/* CATEGORY MULTI SELECT CHECKBOX */}
// <div>
//   <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">
//     Select Categories *
//   </label>

//   <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[260px] overflow-y-auto pr-2">
//     {[
//       "Desktop Repair",
//       "Laptop Repair",
//       "Computer Hardware",
//       "Laptop Sales",
//       "Networking",
//       "Networking Hardware",
//       "Accessories",
//       "CCTV Cameras",
//       "Wired Networking",
//       "Wireless Networking",
//       "NAS Storage",
//       "Office Networking",
//       "Routers",
//       "Projectors",
//       "IP PBX Systems",
//       "Attendance Machines",
//       "Microsoft Licenses",
//       "Tally Licenses",
//       "Quick-Heal Licenses",
//       "Software Licenses",
//     ].map((category) => (
//       <label
//         key={category}
//         className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer hover:border-indigo-500 transition-all"
//       >
//         <input
//           type="checkbox"
//           checked={formData.category.includes(category)}
//           onChange={(e) => {
//             if (e.target.checked) {
//               setFormData({
//                 ...formData,
//                 category: [...formData.category, category],
//               });
//             } else {
//               setFormData({
//                 ...formData,
//                 category: formData.category.filter(
//                   (item) => item !== category
//                 ),
//               });
//             }
//           }}
//           className="mt-1 h-4 w-4 accent-indigo-600"
//         />

//         <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
//           {category}
//         </span>
//       </label>
//     ))}
//   </div>
// </div>

//               {/* DURATION */}
//               <div>
//                 <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">
//                   Rental Duration *
//                 </label>

//                 <select
//                   required
//                   value={formData.duration}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       duration: e.target.value,
//                     })
//                   }
//                   className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                 >
//                   <option value="">Select Duration</option>
//                   <option value="1 Day">1 Day</option>
//                   <option value="3 Days">3 Days</option>
//                   <option value="1 Week">1 Week</option>
//                   <option value="15 Days">15 Days</option>
//                   <option value="1 Month">1 Month</option>
//                   <option value="3 Months">3 Months</option>
//                   <option value="6 Months">6 Months</option>
//                   <option value="1 Year">1 Year</option>
//                 </select>
//               </div>

//               {/* COMPANY */}
//               <div className="relative">
//                 <Building2
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   size={18}
//                 />

//                 <input
//                   required
//                   type="text"
//                   placeholder="Company Name"
//                   value={formData.company}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       company: e.target.value,
//                     })
//                   }
//                   className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                 />
//               </div>

//               {/* CONTACT PERSON */}
//               <div className="relative">
//                 <User
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   size={18}
//                 />

//                 <input
//                   required
//                   type="text"
//                   placeholder="Contact Person"
//                   value={formData.contactPerson}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       contactPerson: e.target.value,
//                     })
//                   }
//                   className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                 />
//               </div>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="space-y-5">
              
//               {/* MOBILE */}
//               <div className="relative">
//                 <Phone
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                   size={18}
//                 />

//                 <input
//                   required
//                   type="tel"
//                   placeholder="Tel / Mobile Number"
//                   value={formData.mobile}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       mobile: e.target.value,
//                     })
//                   }
//                   className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                 />
//               </div>

//               {/* EMAIL */}
//               <div className="space-y-3">
//                 <div className="relative">
//                   <Mail
//                     className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                     size={18}
//                   />

//                   <input
//                     required
//                     type="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         email: e.target.value,
//                       })
//                     }
//                     className="w-full pl-12 pr-32 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                   />

//                   <button
//                     type="button"
//                     onClick={sendOtp}
//                     disabled={
//                       isSendingOtp ||
//                       otpVerified ||
//                       !formData.email
//                     }
//                     className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
//                   >
//                     {otpVerified
//                       ? "Verified"
//                       : isSendingOtp
//                       ? "Sending..."
//                       : "Send OTP"}
//                   </button>
//                 </div>

//                 {/* OTP */}
//                 {otpSent && !otpVerified && (
//                   <div className="flex flex-col sm:flex-row gap-2">
//                     <input
//                       type="text"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                     />

//                     <button
//                       type="button"
//                       onClick={verifyOtp}
//                       className="px-5 py-3 rounded-2xl bg-green-600 text-white font-bold"
//                     >
//                       Verify
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* CITY */}
//               <select
//                 required
//                 value={formData.city}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     city: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//               >
//                 <option value="">Select City</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Pune">Pune</option>
//                 <option value="Nashik">Nashik</option>
//                 <option value="Nagpur">Nagpur</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Bangalore">Bangalore</option>
//               </select>

//               {/* MESSAGE */}
//               <div className="relative">
//                 <MessageSquare
//                   className="absolute left-4 top-4 text-slate-400"
//                   size={18}
//                 />

//                 <textarea
//                   required
//                   rows={5}
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       message: e.target.value,
//                     })
//                   }
//                   className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:text-white"
//                 />
//               </div>

//               {/* CAPTCHA */}
//               <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
//                 <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
//                   Please enter the characters displayed:
//                 </p>

//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//                   <div className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-lg font-black tracking-[0.3em] text-indigo-600">
//                     X7P2Q
//                   </div>

//                   <input
//                     type="text"
//                     placeholder="Enter Captcha"
//                     value={formData.captcha}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         captcha: e.target.value,
//                       })
//                     }
//                     className="flex-1 w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 dark:text-white"
//                   />
//                 </div>
//               </div>

//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/20 transition-all"
//               >
//                 {isSubmitting ? (
//                   <>
//                     Processing...
//                     <Loader2 className="animate-spin" size={18} />
//                   </>
//                 ) : (
//                   <>
//                     Submit Rental Request
//                     <Send size={18} />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   )}
// </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;







"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Network,
  ShoppingBag,
  User,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  // FORM STATE
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    category: [] as string[],
    duration: "",
    company: "",
    contactPerson: "",
    mobile: "",
    email: "",
    city: "",
    message: "",
    captcha: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const root = window.document.documentElement;

    if (savedTheme === "light") {
      setIsDarkMode(false);
      root.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      root.classList.add("dark");
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const services = [
    {
      name: "Rental & Repair",
      icon: <Shield size={16} />,
      href: "/security",
    },
    {
      name: "Networking",
      icon: <Network size={16} />,
      href: "/networking",
    },
    {
      name: "Licenses",
      icon: <ShoppingBag size={16} />,
      href: "/sales",
    },
    {
      name: "CCTV & Security",
      icon: <Shield size={16} />,
      href: "/amc",
    },
  ];

  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === "#get-started") {
        setShowForm(true);
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    handleHashCheck();

    window.addEventListener("hashchange", handleHashCheck);

    return () =>
      window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  const sendOtp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSendingOtp(true);

    try {
      const newOtp = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      setGeneratedOtp(newOtp);

      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: newOtp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOtpSent(true);
        alert("OTP Sent Successfully");
      } else {
        alert(data.error || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const verifyOtp = () => {
    if (otp.trim() === generatedOtp.trim()) {
      setOtpVerified(true);
      alert("OTP Verified Successfully");
    } else {
      setOtpVerified(false);
      alert("Invalid OTP");
    }
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!otpVerified) {
      alert("Please verify OTP first");
      return;
    }

    if (formData.captcha !== "X7P2Q") {
      alert("Invalid Captcha");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/project-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Request sent successfully!");

        setShowForm(false);

        setFormData({
          category: [],
          duration: "",
          company: "",
          contactPerson: "",
          mobile: "",
          email: "",
          city: "",
          message: "",
          captcha: "",
        });

        setOtp("");
        setGeneratedOtp("");
        setOtpSent(false);
        setOtpVerified(false);
      } else {
        alert(data.error || "Failed to send request");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
       className="fixed w-full z-[100] top-3 px-2 sm:px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className={`relative flex items-center justify-between py-3 px-4 sm:px-6 ${
             "rounded-full bg-blue-600 backdrop-blur-xl border border-blue-500 shadow-xl"
            }`}
          >
            {/* LOGO */}
            <div className="lg:col-span-4 space-y-6">
  <div className="flex items-center gap-2 sm:gap-3">

    <Link href="/" className="inline-block">
      <img
        src="/softlink_logowht01-1024x293 (1).png"
        alt="Softlink Logo"
        className="w-30 h-15 object-contain cursor-pointer"
      />
    </Link>

  </div>
</div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-1">
              

              {/* SERVICES DROPDOWN */}
              {/* DESKTOP NAV */}
<div className="hidden md:flex items-center space-x-1">
  <a
    href="/"
    className="px-4 py-2 text-sm font-bold text-white hover:text-blue-100 transition-colors"
  >
    Home
  </a>

  <a
    href="/aboutus"
    className="px-4 py-2 text-sm font-bold text-white hover:text-blue-100 transition-colors"
  >
    AboutUs
  </a>

  {/* SERVICES DROPDOWN */}
  <div className="relative group">
    <a
      href="/services"
      className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-white hover:text-blue-100 transition-colors"
    >
      Services
      <ChevronDown
        size={14}
        className="group-hover:rotate-180 transition-transform"
      />
    </a>

    <div className="absolute top-full left-0 w-64 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-2">
        {services.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-sky-50 dark:hover:bg-white/5 text-sm font-medium dark:text-slate-300 text-slate-600 transition-all"
          >
            <span>{s.name}</span>

            <div className="text-blue-600 dark:text-blue-400">
              {s.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>

  <a
    href="/contact"
    className="px-4 py-2 text-sm font-bold text-white hover:text-blue-100 transition-colors"
  >
    Contact
  </a>
</div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* GET QUOTATION */}
              <button
                onClick={() => setShowForm(true)}
                className="hidden md:block px-6 py-2.5 bg-white hover:bg-blue-50 text-blue-600 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
              >
                Get Quotation
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-white bg-blue-500"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </motion.div>

          {/* MOBILE MENU */}
         <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="md:hidden mt-3 bg-blue-600 rounded-3xl border border-blue-500 shadow-2xl overflow-hidden"
    >
      <div className="p-4 space-y-2">

        {/* HOME */}
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/10"
        >
          Home
        </a>

        {/* ABOUT */}
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/10"
        >
          About Us
        </a>

        {/* SERVICES */}
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/10"
        >
          Services
          <ChevronDown
            size={16}
            className={`transition-transform ${
              mobileServicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* SERVICES DROPDOWN */}
        <AnimatePresence>
          {mobileServicesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 pl-2 pt-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/10 text-sm font-medium text-white"
                  >
                    <span>{service.name}</span>
                    <div className="text-white">{service.icon}</div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTACT */}
        <a
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="block px-4 py-3 rounded-2xl text-sm font-bold text-white hover:bg-white/10"
        >
          Contact
        </a>

        {/* GET QUOTATION (NEW ADDED ITEM) */}
        <button
          onClick={() => {
            setShowForm(true);
            setIsOpen(false);
          }}
          className="w-full px-4 py-3 rounded-2xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition"
        >
          Get Quotation
        </button>

        {/* THEME TOGGLE */}
        

      </div>
    </motion.div>
  )}
</AnimatePresence>
        </div>
      </nav>

      {/* FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4">
            {/* BACKDROP */}
             <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          setShowForm(false);
          setIsCategoryOpen(false); // ✅ close dropdown also
        }}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
      />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="
                relative
                w-full
                max-w-4xl
                h-[95vh]
                bg-white
                dark:bg-slate-900
                rounded-[2rem]
                shadow-2xl
                border
                border-slate-200
                dark:border-white/10
                overflow-hidden
                flex
                flex-col
              "
            >
              {/* HEADER */}
              <div className="sticky top-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-5 sm:px-8 py-5">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-3 border border-indigo-500/20">
                  <ShoppingBag size={15} />
                   Quote Request
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2">
                  Get Rental Pricing
                </h3>

                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
                  Please fill the below form to receive your customized rental quotation.
                </p>
              </div>

              {/* SCROLL AREA */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
                <form
  className="flex flex-col gap-6"
  onSubmit={handleFormSubmit}
>
  {/* CATEGORY - LINKEDIN STYLE MULTI SELECT */}
   <div>
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">
                Select Categories *
              </label>

              {/* SELECT BUTTON */}
              <button
                type="button"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-left text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {formData.category.length > 0
                  ? `${formData.category.length} category selected`
                  : "Click to select categories"}
              </button>

              {/* SELECTED CHIPS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.category.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          category: prev.category.filter((c) => c !== item),
                        }))
                      }
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* DROPDOWN */}
              {isCategoryOpen && (
                <div className="relative z-50 mt-3 border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-white/5 max-h-[220px] overflow-y-auto">

                  {[
                    "Desktop Repair",
                    "Laptop Repair",
                    "Computer Hardware",
                    "Laptop Sales",
                    "Networking",
                    "Networking Hardware",
                    "Accessories",
                    "CCTV Cameras",
                    "Wired Networking",
                    "Wireless Networking",
                    "NAS Storage",
                    "Office Networking",
                    "Routers",
                    "Projectors",
                    "IP PBX Systems",
                    "Attendance Machines",
                    "Microsoft Licenses",
                    "Tally Licenses",
                    "Quick-Heal Licenses",
                    "Software Licenses",
                  ].map((category) => {
                    const selected = formData.category.includes(category);

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            category: selected
                              ? prev.category.filter((c) => c !== category)
                              : [...prev.category, category],
                          }));
                        }}
                        className={`w-full text-left px-4 py-3 text-sm border-b border-slate-200/50 dark:border-white/5 transition-all ${
                          selected
                            ? "bg-indigo-600 text-white font-bold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-white/5"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

  {/* DURATION */}
  <div>
    <label className="text-sm font-bold mb-2 block">
      Rental Duration *
    </label>

    <select
      required
      value={formData.duration}
      onChange={(e) =>
        setFormData({ ...formData, duration: e.target.value })
      }
      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
    >
      <option value="">Select Duration</option>
      <option value="1 Day">1 Day</option>
      <option value="3 Days">3 Days</option>
      <option value="1 Week">1 Week</option>
      <option value="15 Days">15 Days</option>
      <option value="1 Month">1 Month</option>
      <option value="3 Months">3 Months</option>
      <option value="6 Months">6 Months</option>
      <option value="1 Year">1 Year</option>
    </select>
  </div>

  {/* COMPANY */}
  <div className="relative">
    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
    <input
      required
      placeholder="Company Name"
      value={formData.company}
      onChange={(e) =>
        setFormData({ ...formData, company: e.target.value })
      }
      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border"
    />
  </div>

  {/* CONTACT PERSON */}
  <div className="relative">
    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
    <input
      required
      placeholder="Contact Person"
      value={formData.contactPerson}
      onChange={(e) =>
        setFormData({ ...formData, contactPerson: e.target.value })
      }
      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border"
    />
  </div>

  {/* MOBILE */}
  <div className="relative">
    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
    <input
      required
      placeholder="Mobile Number"
      value={formData.mobile}
      onChange={(e) =>
        setFormData({ ...formData, mobile: e.target.value })
      }
      className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border"
    />
  </div>

  {/* EMAIL + OTP */}
  <div className="relative">
    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

    <input
      required
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      className="w-full pl-12 pr-28 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border"
    />

    <button
      type="button"
      onClick={sendOtp}
      className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-indigo-600 text-white text-xs rounded-xl"
    >
      Send OTP
    </button>
  </div>

  {/* OTP INPUT */}
  {otpSent && !otpVerified && (
    <div className="flex gap-2">
      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="flex-1 px-4 py-3 rounded-2xl border"
      />
      <button
        type="button"
        onClick={verifyOtp}
        className="px-5 py-3 bg-green-600 text-white rounded-2xl"
      >
        Verify
      </button>
    </div>
  )}

  {/* CITY */}
  <select
    required
    value={formData.city}
    onChange={(e) =>
      setFormData({ ...formData, city: e.target.value })
    }
    className="w-full px-4 py-3 rounded-2xl border"
  >
    <option value="">Select City</option>
    <option value="411001 - Pune GPO">411001 - Pune GPO</option>
    <option value="411002 - Rasta Peth">411002 - Rasta Peth</option>
    <option value="411003 - Khadki">411003 - Khadki</option>
    <option value="411004 - Deccan Gymkhana">411004 - Deccan Gymkhana</option>
    <option value="411005 - Shivajinagar">411005 - Shivajinagar</option>
    <option value="411006 - Yerwada">411006 - Yerwada</option>
    <option value="411007 - Aundh">411007 - Aundh</option>
    <option value="411008 - Baner">411008 - Baner</option>
    <option value="411009 - Kothrud">411009 - Kothrud</option>
    <option value="411011 - Swargate">411011 - Swargate</option>
    <option value="411014 - Viman Nagar">411014 - Viman Nagar</option>
    <option value="411015 - Hadapsar">411015 - Hadapsar</option>
  </select>

  {/* MESSAGE */}
  <textarea
    rows={5}
    placeholder="Message"
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    className="w-full px-4 py-3 rounded-2xl border"
  />

  {/* CAPTCHA */}
  <div className="p-4 border rounded-2xl">
    <p className="text-sm mb-2">Enter Captcha</p>

    <div className="flex gap-3 items-center">
      <div className="px-4 py-2 bg-white dark:bg-slate-800 font-bold">
        X7P2Q
      </div>

      <input
        value={formData.captcha}
        onChange={(e) =>
          setFormData({ ...formData, captcha: e.target.value })
        }
        className="flex-1 px-4 py-2 border rounded-xl"
      />
    </div>
  </div>

  {/* SUBMIT */}
  <button
    type="submit"
    className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl"
  >
    Submit Rental Request
  </button>
</form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;