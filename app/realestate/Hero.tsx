"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Syne, Inter } from "next/font/google";
import { Home, Leaf, ArrowRight, Star, Plus } from "lucide-react";

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

export default function MokazHero() {
  const { scrollY } = useScroll();

  // High-end Parallax: Elements move at different speeds as you scroll
  const yHouse = useTransform(scrollY, [0, 500], [0, -50]);
  const yEstate = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityEstate = useTransform(scrollY, [0, 300], [0.1, 0]);

  // Variants for staggered entrance
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className={`relative min-h-screen bg-[#F5F2ED] flex flex-col items-center overflow-hidden ${inter.className} ${syne.variable}`}
    >
      {/* 1. ATMOSPHERIC TEXTURE */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* 2. NAVIGATION BAR */}
      {/* <header className="relative z-[70] w-full p-8 md:px-12 flex justify-between items-center">
        <motion.nav
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/40"
        >
          {["Home", "Properties", "Contact"].map((item) => (
            <motion.a
              variants={itemVars}
              key={item}
              href="#"
              className="hover:text-[#1A1A1A] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1A1A1A] group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <span
            className={`${syne.className} text-xl tracking-[0.05em] text-[#1A1A1A]`}
          >
            MOKAZ
          </span>
          <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:rotate-90 duration-500">
            <div className="w-2.5 h-2.5 bg-[#EFF63E] rounded-full" />
          </div>
        </motion.div>
      </header> */}

      {/* 3. HERO CONTENT STACK */}
      <div className="flex-1 relative w-full flex flex-col items-center pt-8 md:pt-16">
        {/* Subtle HUD crosshair icons for the "Editorial" look */}
        <div className="absolute top-1/4 left-10 opacity-10">
          <Plus size={12} />
        </div>
        <div className="absolute top-1/4 right-10 opacity-10">
          <Plus size={12} />
        </div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.8em" }}
          transition={{ duration: 1.5 }}
          className="text-[10px] font-bold text-[#1A1A1A]/30 uppercase mb-8 z-[60]"
        >
          Transforming Home Living
        </motion.p>

        {/* LAYER: REAL (Floating over house) */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="z-50 relative"
        >
          <h1
            className={`${syne.className} text-[10vw] leading-none text-[#1A1A1A] uppercase tracking-tighter select-none pointer-events-none`}
          >
            REAL
          </h1>
        </motion.div>

        {/* LAYER: ESTATE (Deep Background - Parallax) */}
        <motion.h1
          style={{ y: yEstate, opacity: opacityEstate }}
          className={`${syne.className} absolute top-[28%] text-[15vw] leading-none text-[#1A1A1A] uppercase tracking-tighter z-10 select-none pointer-events-none font-black`}
        >
          ESTATE
        </motion.h1>

        {/* LAYER: THE BUILDING (Middle) */}
        <motion.div
          style={{ y: yHouse }}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 z-40 flex justify-center items-end pointer-events-none"
        >
          <div className="w-full max-w-[650px] px-8">
            <img
              src="/home.png"
              alt="Mokaz Landmark"
              className="w-full h-auto object-contain drop-shadow-[0_-50px_100px_rgba(0,0,0,0.12)]"
            />
          </div>
        </motion.div>
      </div>

      {/* 4. FOOTER HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 w-full px-8 md:px-16 z-[70] flex justify-between items-end"
      >
        {/* Left Side: Dynamic Button */}
        <div className="flex flex-col items-start gap-6">
          <p className="text-[10px] text-[#1A1A1A]/40 max-w-[150px] font-medium leading-relaxed uppercase tracking-widest">
            Institutional quality for the modern era.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#801212" }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 bg-[#961515] text-[#F5F2ED] pl-8 pr-3 py-3 rounded-full shadow-xl shadow-black/10 transition-colors duration-300"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Start Brief
            </span>
            <div className="w-10 h-10 rounded-full bg-[#F5F2ED] flex items-center justify-center text-[#961515] group-hover:bg-white transition-colors">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </motion.button>
        </div>

        {/* Right Side: Glassmorphism Tags */}
        <div className="flex flex-col items-end gap-6">
          <div className="flex flex-wrap justify-end gap-3">
            {[
              { icon: <Home size={14} />, label: "Modern" },
              { icon: <Star size={14} />, label: "Luxury" },
              { icon: <Leaf size={14} />, label: "Eco" },
            ].map((tag, idx) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="flex items-center gap-2.5 px-5 py-2.5 bg-white/40 backdrop-blur-xl border border-white/40 rounded-full text-[9px] font-bold text-[#1A1A1A] uppercase tracking-widest shadow-sm hover:bg-white/80 transition-colors cursor-default"
              >
                <span className="text-[#1A1A1A]/40">{tag.icon}</span>
                {tag.label}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]"
          >
            Explore Portfolio
            <div className="flex items-center">
              <div className="w-8 h-[2px] bg-[#1A1A1A]/10 group-hover:bg-[#1A1A1A] transition-colors" />
              <ArrowRight
                size={12}
                className="opacity-0 group-hover:opacity-100 -ml-2 transition-all"
              />
            </div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
