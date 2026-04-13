"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Syne, Inter } from "next/font/google";
import { ArrowUpRight, ShieldCheck, Zap, Globe, Plus } from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function MokazAbout() {
  // Fixed TS: transition is a tuple, ease uses numbers [0,1]
  const fadeUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className={`relative py-20 md:py-32 bg-[#F5F2ED] ${inter.className} ${syne.variable}`}
    >
      {/* 1. MAIN GRID CONTAINER */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* HEADER AREA: Flex column on mobile, row on desktop to avoid overlaps */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 md:mb-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#961515]" />
              <span className="text-[#961515] text-[10px] font-black uppercase tracking-[0.4em]">
                Section 02
              </span>
            </div>
            <h2
              className={`${syne.className} text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] uppercase tracking-tighter leading-[0.95]`}
            >
              Building Modern <br className="hidden md:block" />
              <span className="text-[#1A1A1A]/30">Monuments.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:max-w-sm lg:pt-10"
          >
            <p className="text-[#1A1A1A]/60 text-sm md:text-base leading-relaxed mb-6">
              Mokaz provides institutional-grade real estate solutions. We
              bridge the gap between architectural vision and financial
              precision.
            </p>
            <div className="flex items-center gap-3 group cursor-pointer border-b border-[#1A1A1A]/10 pb-2 w-fit">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">
                View Portfolio
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </div>
          </motion.div>
        </div>

        {/* 2. VALUES GRID: Simplified for mobile stacking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-y border-[#1A1A1A]/10 py-16 mb-24">
          {[
            {
              icon: <ShieldCheck size={20} />,
              title: "Quality",
              desc: "Institutional standards in every brick.",
            },
            {
              icon: <Zap size={20} />,
              title: "Edge",
              desc: "Sustainability meets aggressive tech.",
            },
            {
              icon: <Globe size={20} />,
              title: "Global",
              desc: "Assets spanning across major capitals.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-4"
            >
              <div className="text-[#961515]">{item.icon}</div>
              <div className="space-y-2">
                <h3
                  className={`${syne.className} text-lg uppercase tracking-tight text-[#1A1A1A]`}
                >
                  {item.title}
                </h3>
                <p className="text-[#1A1A1A]/40 text-[10px] leading-relaxed uppercase tracking-wider font-bold">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. LOWER SECTION: Image and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* IMAGE BLOCK */}
          <div className="lg:col-span-7 relative group rounded-xl overflow-hidden shadow-xl">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1 }}
              className="aspect-video bg-[#1A1A1A]"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
                alt="Architecture"
              />
            </motion.div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
              <p className={`${syne.className} text-5xl md:text-6xl`}>12+</p>
              <p className="text-[9px] uppercase tracking-[0.4em] font-black opacity-60">
                Cities Conquered
              </p>
            </div>
          </div>

          {/* STATS & CTA */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            <h4
              className={`${syne.className} text-3xl md:text-4xl text-[#1A1A1A] uppercase tracking-tighter leading-tight`}
            >
              Calculated Method. <br />
              <span className="text-[#961515]">Absolute Delivery.</span>
            </h4>

            <div className="grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/5 pt-8">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-1">
                  Since
                </p>
                <p className="text-xl font-bold text-[#1A1A1A]">2018</p>
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-1">
                  AUM
                </p>
                <p className="text-xl font-bold text-[#1A1A1A]">$1.4B+</p>
              </div>
            </div>

            <motion.button
              whileHover={{
                backgroundColor: "#961515",
                borderColor: "#961515",
                color: "#F5F2ED",
              }}
              className="w-full p-4 border border-[#1A1A1A]/20 rounded-full flex justify-between items-center transition-all group mt-4"
            >
              <span className="text-[10px] uppercase tracking-widest font-black">
                Private Inquiry
              </span>
              <Plus
                size={16}
                className="group-hover:rotate-90 transition-transform"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
