"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

// Expanded database array to create a completely seamless scrolling infinite loop loop
const testimonials = [
  {
    name: "Amit Sharma",
    role: "IT Manager, Mumbai",
    text: "Softlink transformed our entire office setup with fast networking and reliable support. Truly professional service.",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "Business Owner, Pune",
    text: "Their CCTV installation and monitoring system is top-notch. We feel much more secure now.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    text: "Excellent service for software licensing and IT rental. Very smooth experience and quick response time.",
    rating: 5,
  },
  {
    name: "Sneha Nair",
    role: "Operations Head",
    text: "Exceptional speed on data center migrating layout structures. Complete zero downtime achieved.",
    rating: 5,
  },
  {
    name: "Aniket Joshi",
    role: "CTO, Tech Solutions",
    text: "The infrastructure upgrading they conducted handled our scaling perfectly. Highly skilled engineers.",
    rating: 5,
  },
  {
    name: "Ritu Kapoor",
    role: "Director, HR Agency",
    text: "Unbeatable support desk assistance. They resolved our server anomalies within minutes.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-[#F8FAFC] dark:bg-[#030712] overflow-hidden transition-colors duration-300">
      
      {/* 🌐 MODERN TECH GRID BACKGROUND (Aceternity Aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* 🔵 HIGH-END BACKGROUND AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen dark:mix-blend-normal">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Clients Say</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base md:text-lg">
            Real feedback from businesses we empower
          </p>
        </div>

        {/* 🚀 AUTOMATIC SCROLL SLIDER WINDOW */}
        {/* Uses a linear gradient mask to smoothly fade cards away at the extreme top and bottom edges */}
        <div className="relative h-[600px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,#000_8%,#000_92%,transparent_100%)]">
          
          {/* 4-COLUMN ROW GRID DESKTOP CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full w-full">
            
            {Array.from({ length: 4 }).map((_, colIdx) => (
              <div 
                key={colIdx} 
                // hover:[animation-play-state:paused] tells the browser to freeze scrolling when hovering over a card
                className="flex flex-col gap-6 animate-vertical-marquee hover:[animation-play-state:paused]"
                style={{
                  // Stagger velocities between alternating columns for organic movement
                  animationDuration: colIdx % 2 === 0 ? "28s" : "22s",
                  // Delay column entrance timings to completely offset linear alignments
                  animationDelay: `${colIdx * -3}s`
                }}
              >
                {/* Double the elements array to allow continuous looping seamlessly */}
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full p-6 md:p-8 rounded-3xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/80 shadow-[0_15px_35px_rgba(0,0,0,0.02)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden relative transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/30 dark:hover:border-blue-400/30 group"
                  >
                    {/* Floating Background Quote Emblem */}
                    <Quote className="absolute right-6 top-6 w-16 h-16 text-slate-200/30 dark:text-slate-800/15 transform pointer-events-none font-bold group-hover:rotate-6 transition-transform duration-500" />

                    {/* Star Component */}
                    <div className="flex gap-0.5 mb-4 relative z-10">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Testimonial Quote String Content */}
                    <p className="relative z-10 text-sm md:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-6">
                      “{item.text}”
                    </p>

                    {/* Footer Credentials */}
                    <div className="relative z-10 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-2">
                      <div className="truncate">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm tracking-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {item.role}
                        </p>
                      </div>
                      <div className="shrink-0 px-2.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                        Verified
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;