"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';

const ContactUs = () => {
  const addresses = [
    {
      title: "Main Office",
      location: "L-1 Amrutganga Housing Society, Flat No.308, 3rd floor, Manikbaug, Sinhagad road, Vadgaon, Pune – 411041",
      link: "https://maps.google.com/?q=Amrutganga+Housing+Society+Pune"
    },
    {
      title: "Branch Office",
      location: "Shop no. 2A & 2B, 216, Shree Alok Society, Behind Sai Mobile Shopee, Near Lokmanya Nagar Post Office, Navi Peth, Pune 411030",
      link: "https://maps.google.com/?q=Shree+Alok+Society+Pune"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#F0F4FF] dark:bg-[#0A1628] transition-colors duration-700 overflow-hidden">
      {/* Branded Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#0057FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-[#4DA6FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057FF]/10 text-[#0057FF] dark:text-[#4DA6FF] text-sm font-bold mb-4"
            >
              <Send size={16} />
              <span className="uppercase tracking-widest">Get In Touch</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#0A1628] dark:text-white mb-6 tracking-tighter leading-tight"
            >
              Connect With Experts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#4DA6FF]">
                For Your IT Needs.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Quick Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Phone Card */}
              <motion.a 
                href="tel:+919881099456"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-[#1A3A6B]/20 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0057FF] flex items-center justify-center text-white shadow-lg shadow-[#0057FF]/30">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-[#0A1628] dark:text-white font-bold group-hover:text-[#0057FF] transition-colors">+91 98810 99456</p>
                  <p className="text-[#0A1628] dark:text-white font-bold group-hover:text-[#0057FF] transition-colors">+91 80075 00737</p>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a 
                href="mailto:info@softinkcomputers.co.in"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-[#1A3A6B]/20 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0A1628] dark:bg-[#0057FF] flex items-center justify-center text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-[#0A1628] dark:text-white font-bold group-hover:text-[#0057FF] transition-colors truncate">info@softinkcomputers.co.in</p>
                </div>
              </motion.a>

              {/* Hours Card */}
              <div className="flex items-center gap-5 p-6 rounded-3xl bg-slate-100/50 dark:bg-[#1A3A6B]/10 border border-transparent dark:border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-[#1A3A6B]/40 flex items-center justify-center text-slate-600 dark:text-[#4DA6FF]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Working Hours</p>
                  <p className="text-[#0A1628] dark:text-white font-bold">Mon - Sat: 10AM - 7PM</p>
                </div>
              </div>
            </div>

            {/* Right Column: Addresses */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((addr, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-[#1A3A6B]/20 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5 flex flex-col justify-between overflow-hidden transition-all hover:border-[#0057FF]/30">
                    {/* Background Icon Decor */}
                    <MapPin className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-50 dark:text-white/5 group-hover:text-[#0057FF]/10 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#0057FF]/10 flex items-center justify-center text-[#0057FF] mb-6">
                        <MapPin size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-[#0A1628] dark:text-white mb-4">{addr.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                        {addr.location}
                      </p>
                    </div>

                    <motion.a
                      href={addr.link}
                      target="_blank"
                      whileHover={{ gap: '12px' }}
                      className="relative z-10 inline-flex items-center gap-2 text-[#0057FF] dark:text-[#4DA6FF] font-bold text-sm uppercase tracking-widest"
                    >
                      Get Directions <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}

              {/* Branded CTA */}
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;