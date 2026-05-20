"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f4f9ff] dark:bg-[#060b16] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent" />

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] border border-blue-200 dark:border-blue-500/20 mb-8">
              <ShieldCheck size={14} />
              Privacy & Data Protection
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-[#13204e] dark:text-white mb-8">
              Privacy
              <span className="block text-blue-600">
                Policy
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains
              how Softlink Solutions collects, uses, protects, and manages
              your personal information while using our website and services.
            </p>

          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 h-fit"
            >

              <div className="bg-white dark:bg-[#0e1626] rounded-[2rem] p-8 border border-slate-200 dark:border-white/10 shadow-xl">

                <h3 className="text-2xl font-black dark:text-white mb-6">
                  Quick Overview
                </h3>

                <div className="space-y-4">

                  {[
                    "Information Collection",
                    "How We Use Data",
                    "Cookies Policy",
                    "Third-Party Sharing",
                    "Security Protection",
                    "Your Rights",
                    "Policy Updates",
                    "Contact Information",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-600"
                      />

                      <span className="font-medium">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >

              <div className="space-y-8">

                {/* SECTION */}
                <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                      <Database size={26} />
                    </div>

                    <h2 className="text-3xl font-black dark:text-white">
                      Information We Collect
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

                    <p>
                      We may collect personal information when you:
                    </p>

                    <ul className="space-y-3 list-disc pl-6">
                      <li>Submit inquiry or contact forms</li>
                      <li>Request quotations or IT services</li>
                      <li>Subscribe to newsletters or updates</li>
                      <li>Communicate with our support team</li>
                      <li>Use our website and online platforms</li>
                    </ul>

                    <p>
                      The information may include your name, email address,
                      mobile number, company details, location, and service
                      preferences.
                    </p>

                  </div>
                </div>

                {/* SECTION */}
                <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                      <Eye size={26} />
                    </div>

                    <h2 className="text-3xl font-black dark:text-white">
                      How We Use Your Information
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

                    <p>
                      Softlink Solutions uses collected information to:
                    </p>

                    <ul className="space-y-3 list-disc pl-6">
                      <li>Provide requested IT solutions and support</li>
                      <li>Respond to inquiries and customer requests</li>
                      <li>Improve website performance and user experience</li>
                      <li>Send important updates and notifications</li>
                      <li>Generate quotations and invoices</li>
                      <li>Maintain service quality and security</li>
                    </ul>

                  </div>
                </div>

                {/* SECTION */}
                <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center">
                      <Lock size={26} />
                    </div>

                    <h2 className="text-3xl font-black dark:text-white">
                      Data Security
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

                    <p>
                      We implement strong technical and organizational security
                      measures to protect your personal information from:
                    </p>

                    <ul className="space-y-3 list-disc pl-6">
                      <li>Unauthorized access</li>
                      <li>Data loss or misuse</li>
                      <li>Cyber threats and malware</li>
                      <li>Unauthorized disclosure</li>
                    </ul>

                    <p>
                      However, no internet transmission method is 100% secure,
                      and we encourage users to use safe online practices.
                    </p>

                  </div>
                </div>

                {/* SECTION */}
                <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                      <Globe size={26} />
                    </div>

                    <h2 className="text-3xl font-black dark:text-white">
                      Cookies & Tracking
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

                    <p>
                      Our website may use cookies and analytics tools to:
                    </p>

                    <ul className="space-y-3 list-disc pl-6">
                      <li>Improve browsing experience</li>
                      <li>Analyze traffic and visitor behavior</li>
                      <li>Enhance website performance</li>
                      <li>Remember user preferences</li>
                    </ul>

                    <p>
                      You can disable cookies through your browser settings
                      anytime.
                    </p>

                  </div>
                </div>

                {/* SECTION */}
                <div className="bg-white dark:bg-[#0e1626] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl">

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                      <FileText size={26} />
                    </div>

                    <h2 className="text-3xl font-black dark:text-white">
                      Policy Updates
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

                    <p>
                      We reserve the right to update this Privacy Policy
                      periodically to reflect changes in our services,
                      technologies, or legal requirements.
                    </p>

                    <p>
                      Updated versions will be posted on this page with the
                      latest revision date.
                    </p>

                  </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-10 rounded-[2.5rem] text-white shadow-2xl">

                  <h2 className="text-4xl font-black mb-6">
                    Contact Us
                  </h2>

                  <p className="text-white/80 mb-8 max-w-2xl leading-relaxed">
                    If you have any questions regarding this Privacy Policy
                    or your personal data, feel free to contact our team.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Mail size={24} />
                      </div>

                      <div>
                        <p className="font-black text-lg">
                          Email Address
                        </p>

                        <p className="text-white/80">
                          info@softlinksolutions.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Phone size={24} />
                      </div>

                      <div>
                        <p className="font-black text-lg">
                          Phone Number
                        </p>

                        <p className="text-white/80">
                          +91 9876543210
                        </p>
                      </div>
                    </div>

                  </div>

                  <button className="mt-10 inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all">
                    Contact Support
                    <ArrowRight size={20} />
                  </button>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}