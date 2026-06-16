"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";

const ContactUs = () => {
  const addresses = [
    {
      title: "Main Office",
      location:
        "L-1 Amrutganga Housing Society, Flat No.308, 3rd floor, Manikbaug, Sinhagad road, Vadgaon, Pune – 411041",
      map: "https://www.google.com/maps?q=Amrutganga+Housing+Society+Pune&output=embed",
      link: "https://www.google.com/maps/search/?api=1&query=Amrutganga+Housing+Society+Pune",
    },
    {
      title: "Branch Office",
      location:
        "Shop no. 2A & 2B, 216, Shree Alok Society, Behind Sai Mobile Shopee, Near Lokmanya Nagar Post Office, Navi Peth, Pune 411030",
      map: "https://www.google.com/maps?q=Shree+Alok+Society+Pune&output=embed",
      link: "https://www.google.com/maps/search/?api=1&query=Shree+Alok+Society+Pune",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-[#F0F4FF] dark:bg-[#0A1628] overflow-hidden"
    >
      {/* BACKGLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0057FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4DA6FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
         <div className="text-center mb-16">
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e36414]/10 text-[#e36414] text-sm font-bold mb-4"
>
  <Send size={16} />
  Get In Touch
</motion.div>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl md:text-5xl font-black text-[#0A1628] dark:text-white leading-none"
  >
    Connect With Experts <br />
    <span className="bg-gradient-to-r from-[#3b71ca] to-[#00b4ed] bg-clip-text text-transparent">
      For Your IT Needs
    </span>
  </motion.h2>
</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-4 space-y-6">
              <motion.a
                href="tel:+919881099456"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-[#1A3A6B]/20 shadow-xl"
              >
                <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-2xl">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Call Us
                  </p>
                  <p className="font-bold text-[#0A1628] dark:text-white">
                    +91 98810 99456
                  </p>
                  <p className="font-bold text-[#0A1628] dark:text-white">
                    +91 80075 00737
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@softinkcomputers.co.in"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-[#1A3A6B]/20   border-4 border-white dark:border-[#1A3A6B] shadow-xl"
              >
                <div className="w-14 h-14 bg-[#0A1628] text-white flex items-center justify-center rounded-2xl">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Email
                  </p>
                  <p className="font-bold text-[#0A1628] dark:text-white truncate">
                    info@softinkcomputers.co.in
                  </p>
                </div>
              </motion.a>

              <div className="flex items-center gap-5 p-6 rounded-3xl bg-slate-100 dark:bg-[#1A3A6B]/10 border-4 border-white dark:border-[#1A3A6B] ">
                <div className="w-14 h-14 bg-slate-200 dark:bg-[#1A3A6B] flex items-center justify-center rounded-2xl">
                  <Clock />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Working Hours
                  </p>
                  <p className="font-bold text-[#0A1628] dark:text-white">
                    Mon - Sat: 10AM - 7PM
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - MAP CARDS */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {addresses.map((addr, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1A3A6B]/20 border-4 border-white dark:border-[#1A3A6B] shadow-xl"
                >
                  {/* MAP */}
                  <div className="h-56 w-full">
                    <iframe
                      src={addr.map}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 mb-3">
                      <MapPin size={18} />
                      <h4 className="font-bold text-[#0A1628] dark:text-white">
                        {addr.title}
                      </h4>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-5">
                      {addr.location}
                    </p>

                    <a
                      href={addr.link}
                      target="_blank"
                      className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                    >
                      Open in Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;