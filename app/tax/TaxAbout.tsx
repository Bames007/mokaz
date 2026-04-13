"use client";

import React from "react";
import { motion } from "framer-motion"; // Re-added for micro-interactions
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { History, Target, Layers, Globe, ShieldCheck, Cpu } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-jakarta",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export default function MokazAbout() {
  const values = [
    {
      icon: <History size={20} />,
      title: "Legacy of Trust",
      description:
        "Founded on the principles of transparent multi-trade, we have evolved from traditional consultancy into a digital-first institutional powerhouse.",
    },
    {
      icon: <Cpu size={20} />,
      title: "Digital Sovereignty",
      description:
        "We are digitizing complex pipelines for TCC applications and property acquisitions to ensure our clients move at global speed.",
    },
    {
      icon: <Target size={20} />,
      title: "Precision Execution",
      description:
        "Whether it is a government contract or a real estate audit, we operate with a zero-margin-for-error philosophy.",
    },
  ];

  return (
    <section
      id="about"
      className={`py-16 md:py-24 bg-[#F5F2ED] overflow-hidden ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* TOP SECTION: THE STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 text-[#961515]">
                <Globe size={14} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  The Narrative
                </span>
              </div>
              <h2 className="font-jakarta text-4xl md:text-6xl text-[#1A1A1A] leading-[1.1] md:leading-[0.95] tracking-tighter">
                Bridging Bureaucracy <br className="hidden md:block" /> &{" "}
                <span className="text-[#961515]">Capital.</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-2xl text-[#1A1A1A]/90 leading-snug md:leading-relaxed font-medium">
                Mokaz Multitrade LTD was born out of a single observation:{" "}
                <span className="text-[#1A1A1A] font-bold underline decoration-[#961515]/30 underline-offset-4">
                  friction between institutional requirements and modern speed.
                </span>
              </p>

              <div className="space-y-4 md:space-y-6 text-[#1A1A1A]/60 text-sm md:text-base leading-relaxed">
                <p>
                  We recognized that business leaders were losing momentum in
                  the gaps between tax compliance, real estate, and contract
                  execution. Mokaz was built to close those gaps.
                </p>
                <p>
                  Today, we serve as a centralized hub—a digital ecosystem where
                  clients verify TCCs, analyze real estate ROI, and track
                  contract milestones under one secure architecture.
                </p>
              </div>

              {/* STATS STRIP */}
              <div className="flex flex-wrap gap-x-8 gap-y-6 pt-8 border-t border-[#1A1A1A]/10">
                {[
                  { val: "100%", lab: "Compliance Rate" },
                  { val: "Digitized", lab: "Workflow" },
                  { val: "Secure", lab: "Sovereignty" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex-1 min-w-[120px]"
                  >
                    <p className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter">
                      {stat.val}
                    </p>
                    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                      {stat.lab}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: CORE VALUES (Staggered Load) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(150, 21, 21, 0.2)" }}
              className="bg-white p-8 md:p-10 rounded-2xl md:rounded-[2rem] border border-[#1A1A1A]/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F5F2ED] flex items-center justify-center text-[#961515] mb-6">
                {value.icon}
              </div>
              <h3 className="font-jakarta text-lg md:text-xl text-[#1A1A1A] mb-3 tracking-tight">
                {value.title}
              </h3>
              <p className="text-xs md:text-sm text-[#1A1A1A]/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 p-8 md:p-12 rounded-2xl md:rounded-[3rem] bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
        >
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-xl md:text-3xl font-jakarta tracking-tighter mb-1">
              Modernize your compliance.
            </h4>
            <p className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
              Mokaz Internal Portal
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto relative z-10 bg-[#961515] text-white px-8 py-4 md:py-5 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-[#b31b1b]"
          >
            Get Started <ShieldCheck size={14} />
          </motion.button>

          <motion.div
            animate={{
              rotate: [12, 15, 12],
              scale: [1.5, 1.55, 1.5],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute right-[-10%] top-[-20%] h-full w-1/3 opacity-5 hidden md:block"
          >
            <Layers className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
