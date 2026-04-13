"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function ContractsHero() {
  return (
    <section
      className={`relative min-h-screen bg-[#F4F4F4] text-[#1A1A1A] flex flex-col ${inter.className}`}
    >
      {/* 1. TOP MARQUEE (The "Museum Gallery" Header) */}
      <div className="w-full border-b border-[#1A1A1A]/10 py-4 px-8 flex justify-between items-baseline mt-24">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
          Division: General Contracts
        </span>
        <span className="text-[10px] opacity-40 font-mono tracking-tighter">
          REF: MKZ-2026-XC
        </span>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full">
        {/* 2. LEFT PANEL: MASSIVE TEXT / REDUCED WEIGHT */}
        <div className="lg:col-span-7 border-r border-[#1A1A1A]/10 p-8 lg:p-16 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className={`${jakarta.className} text-[12vw] lg:text-[10vw] leading-[0.8] tracking-[-0.06em] uppercase`}
            >
              Execution <br />
              <span className="text-[#961515]">Authority</span>
            </h1>
          </motion.div>

          <div className="max-w-sm space-y-6">
            <p className="text-[14px] leading-relaxed opacity-70 font-light">
              Mokaz Group maintains the industrial threshold. We provide the
              procurement logic and physical execution required for large-scale
              institutional infrastructure.
            </p>
            <div className="flex gap-8">
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-[#1A1A1A] pb-1 hover:text-[#961515] hover:border-[#961515] transition-all">
                Request Dossier
              </button>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity">
                View Indices
              </button>
            </div>
          </div>
        </div>

        {/* 3. RIGHT PANEL: THE LIST (The "Exhibition" Catalog) */}
        <div className="lg:col-span-5 flex flex-col">
          {[
            { id: "01", title: "Institutional Supply Chain", area: "Global" },
            { id: "02", title: "Asset Mobilization", area: "Industrial" },
            { id: "03", title: "Technical Procurement", area: "Sovereign" },
            { id: "04", title: "Project Oversight", area: "Governance" },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
              className="flex-1 border-b border-[#1A1A1A]/10 p-8 flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                  [{item.id}]
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#961515] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  Select Sector
                </span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-light uppercase tracking-tight group-hover:italic transition-all">
                  {item.title}
                </h3>
                <p className="text-[9px] uppercase tracking-widest opacity-30 mt-2">
                  {item.area} Management
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
