"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Video,
  Zap,
  ArrowRight,
  Wrench,
  Monitor,
  Package,
  X,
  Laptop,
  Router,
  Camera,
} from "lucide-react";

// ✅ TYPES
interface CheckAvailabilityProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- MODAL SUB-COMPONENT ---
const CheckAvailability: React.FC<CheckAvailabilityProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("");

  const categories = [
    {
      id: "laptop",
      label: "Laptops",
      icon: <Laptop size={20} />,
    },
    {
      id: "desktop",
      label: "Desktops",
      icon: <Monitor size={20} />,
    },
    {
      id: "network",
      label: "Networking",
      icon: <Router size={20} />,
    },
    {
      id: "cctv",
      label: "CCTV Systems",
      icon: <Camera size={20} />,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-[101] p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Check Availability
                </h3>

                <p className="text-sm text-slate-500">
                  Step {step} of 2
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="dark:text-white" />
              </button>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedType(cat.id)}
                      className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-3 ${
                        selectedType === cat.id
                          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600"
                          : "border-slate-100 dark:border-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {cat.icon}

                      <span className="font-bold text-sm">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  disabled={!selectedType}
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-indigo-600 disabled:opacity-50 text-white rounded-2xl font-bold mt-8"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl px-4 py-4 dark:text-white outline-none"
                />

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-slate-500 font-bold"
                >
                  Go Back
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- MAIN PAGE COMPONENT ---
const RepairRentalPage = () => {
  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);

  const features = [
    {
      icon: <Wrench size={24} />,
      title: "Expert Hardware Repair",
      desc:
        "Comprehensive diagnostic and repair services for any desktop or laptop brand with genuine parts.",
    },
    {
      icon: <Monitor size={24} />,
      title: "Premium Rental Kits",
      desc:
        "Flexible rental options for high-end laptops, workstations, and full office infrastructure.",
    },
    {
      icon: <Video size={24} />,
      title: "CCTV Installation",
      desc:
        "Advanced surveillance setup with AI-driven monitoring to protect your workspace.",
    },
    {
      icon: <Package size={24} />,
      title: "Networking Hardware",
      desc:
        "Quick access to enterprise-grade routers, switches, and high-speed networking accessories.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
              >
                <Zap size={14} />
                Full IT Support Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8"
              >
                Repair & Rental <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                  Services.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg"
              >
                Softlink provides professional repair for all
                desktop and laptop brands, along with high-quality
                rental solutions for IT hardware, networking,
                and security.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-indigo-500/30 transition-all flex items-center gap-2"
                >
                  Check Availability
                  <ArrowRight size={18} />
                </button>

                <button className="px-8 py-4 border border-slate-200 dark:border-white/10 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Our Pricing
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="/1c568e7a37d7969b9ec210f09872e17e.jpg"
                  alt="IT Repair Service"
                  className="w-full object-cover h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Service Status
                    </p>

                    <p className="font-black text-slate-900 dark:text-white">
                      Certified Technicians
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
              Integrated IT Solutions
            </h2>

            <p className="text-slate-500 dark:text-slate-400">
              Reliable hardware maintenance and scalable rental
              plans for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {f.title}
                </h4>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <CheckAvailability
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default RepairRentalPage;