"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, Fingerprint } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Hero() {
  return (
    <section
      className={`relative min-h-[100svh] flex flex-col justify-center bg-[#f6f4f1] overflow-hidden ${inter.className}`}
    >
      {/* 1. ARCHITECTURAL GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
            backgroundSize: "clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* 2. HEADLINE - Fixed Mobile Scaling */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-[#f95c4b]" />
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#1a1a1a]/60">
                Institutional Multitrade Authority
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${plusJakarta.className} text-[clamp(2.5rem,9vw,6rem)] leading-[0.85] tracking-tightest text-[#1a1a1a] uppercase`}
              >
                Architecting <br />
                <span className="text-[#f95c4b]">Certainty.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-base md:text-xl text-[#1a1a1a]/70 max-w-lg leading-snug"
            >
              The nexus of fiscal integrity and high-velocity physical trade.
              <span className="block mt-2 text-[#1a1a1a] font-semibold italic">
                Precise. Institutional. Scalable.
              </span>
            </motion.p>
          </div>

          {/* 3. THE COMMAND CENTER (Right-hand Tab) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full lg:w-auto lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:pr-6"
          >
            <div className="bg-[#1a1a1a] group flex flex-col lg:flex-row shadow-2xl border-l-4 border-[#f95c4b]">
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between gap-12 mb-8">
                  <h3
                    className={`${plusJakarta.className} text-white text-xl uppercase tracking-tighter`}
                  >
                    Secure <br /> Portal
                  </h3>
                  <Fingerprint
                    size={28}
                    className="text-white/20 group-hover:text-[#f95c4b] transition-colors"
                  />
                </div>

                <div className="space-y-2 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-[10px] text-white tracking-widest uppercase font-bold">
                    <div className="w-1 h-1 bg-[#f95c4b] rounded-full" /> TCC
                    Status: Active
                  </div>
                </div>

                <button className="flex items-center gap-4 text-[#f95c4b] text-[10px] font-bold uppercase tracking-[0.3em] group/btn">
                  Authenticate
                  <div className="w-8 h-8 bg-[#f95c4b] text-[#1a1a1a] flex items-center justify-center rounded-full group-hover/btn:bg-white transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. SECTOR NAV - RESTORED DOUBLE LINE HOVER */}
        <div className="mt-20 lg:mt-32 border-t border-[#1a1a1a]/5 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
            {["Tax Strategy", "Real Estate", "Contracting"].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[10px] font-bold text-[#f95c4b] font-mono">
                    0{i + 1}
                  </span>
                  <h4
                    className={`${plusJakarta.className} text-lg md:text-xl font-extrabold text-[#1a1a1a] uppercase tracking-tighter group-hover:text-[#f95c4b] transition-colors`}
                  >
                    {sector}
                  </h4>
                </div>

                {/* Double-Line Micro-Interaction */}
                <div className="relative h-[2px] w-full bg-[#1a1a1a]/5 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-4 bg-[#1a1a1a] group-hover:w-full transition-all duration-500 ease-in-out" />
                  <div className="absolute top-0 left-0 h-full w-0 bg-[#f95c4b] group-hover:w-full transition-all duration-700 delay-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
