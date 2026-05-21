"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Globe,
  MessageSquare,
  Building2,
  User,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    mobile: "",
    service: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      setFormData({
        fullName: "",
        company: "",
        email: "",
        mobile: "",
        service: "",
        city: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f9ff] dark:bg-[#060b16] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] border border-blue-200 dark:border-blue-500/20 mb-8">
                <MessageSquare size={14} />
                Contact Softlink Solutions
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[#13204e] dark:text-white mb-8">
                Let’s Build
                <span className="block text-blue-600">
                  Smarter IT
                </span>
                Solutions.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                Connect with our experts for IT infrastructure,
                networking, CCTV surveillance, software licensing,
                repairs, rentals, and enterprise solutions.
              </p>

              <div className="flex flex-wrap gap-6">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="font-black text-[#13204e] dark:text-white">
                      Trusted Service
                    </p>

                    <p className="text-sm text-slate-500">
                      Professional Support
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                    <Headphones size={22} />
                  </div>

                  <div>
                    <p className="font-black text-[#13204e] dark:text-white">
                      24/7 Assistance
                    </p>

                    <p className="text-sm text-slate-500">
                      Fast Response Team
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="relative bg-white dark:bg-[#0e1626] p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

                <h3 className="text-3xl font-black text-[#13204e] dark:text-white mb-3">
                  Quick Contact
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mb-8">
                  Reach us instantly using the information below.
                </p>

                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Phone size={22} />
                    </div>

                    <div>
                      <p className="font-black text-lg dark:text-white">
                        Call Us
                      </p>

                      <p className="text-slate-500">
                        +91 9876543210
                      </p>

                      <p className="text-slate-500">
                        +91 9988776655
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>

                    <div>
                      <p className="font-black text-lg dark:text-white">
                        Email Address
                      </p>

                      <p className="text-slate-500">
                        info@softlinksolutions.in
                      </p>

                      <p className="text-slate-500">
                        support@softlinksolutions.in
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <p className="font-black text-lg dark:text-white">
                        Office Address
                      </p>

                      <p className="text-slate-500 leading-relaxed">
                        Softlink Solutions,
                        <br />
                        Nashik, Maharashtra,
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Clock size={22} />
                    </div>

                    <div>
                      <p className="font-black text-lg dark:text-white">
                        Working Hours
                      </p>

                      <p className="text-slate-500">
                        Monday - Saturday
                      </p>

                      <p className="text-slate-500">
                        9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* CONTACT + LOCATION SECTION */}
      <section className="pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT - CONTACT FORM */}
            <motion.form
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-[#0e1626] p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl"
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                <Send size={14} />
                Send Message
              </div>

              <h2 className="text-4xl font-black text-[#13204e] dark:text-white mb-8">
                Get In Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Building2
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                  />
                </div>

                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mobile: e.target.value,
                      })
                    }
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              <div className="mt-5">
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="">Select Service</option>
                  <option>Networking Solutions</option>
                  <option>CCTV Installation</option>
                  <option>Software Licensing</option>
                  <option>Laptop/Desktop Repair</option>
                  <option>AMC Support</option>
                  <option>Cloud Services</option>
                </select>
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-5">
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#060b16] dark:text-white outline-none resize-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full py-5 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-60 shadow-2xl shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

            </motion.form>

            {/* RIGHT - LOCATION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#0e1626] rounded-[3rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl sticky top-28"
            >

              {/* CONTENT */}
              <div className="p-10">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
                  <Globe size={14} />
                  Our Location
                </div>

                <h2 className="text-4xl font-black text-[#13204e] dark:text-white mb-4">
                  Visit Our Office
                </h2>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Softlink Solutions provides complete IT infrastructure,
                  CCTV surveillance, networking, cloud solutions,
                  software licensing, rentals, and technical support
                  services across Nashik and surrounding regions.
                </p>

                {/* INFO */}
                

              </div>

              {/* MAP */}
              <div className="w-full h-[350px]">
                <iframe
                  title="Softlink Solutions Location"
                  src="https://www.google.com/maps?q=Nashik,Maharashtra,India&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              className="bg-white dark:bg-[#0e1626] p-10 rounded-[3rem] max-w-md w-full text-center shadow-2xl"
            >

              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2
                  size={50}
                  className="text-green-500"
                />
              </div>

              <h2 className="text-3xl font-black dark:text-white mb-3">
                Message Sent!
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Thank you for contacting us. Our team will
                get back to you shortly.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all"
              >
                Done
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}