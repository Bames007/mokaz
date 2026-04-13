"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const stats = [
  {
    label: "Active Contracts",
    value: "42",
    unit: "Units",
    detail: "Global Tier-1",
  },
  {
    label: "Execution Rate",
    value: "99.8",
    unit: "%",
    detail: "Verified Audit",
  },
  {
    label: "Capital Flow",
    value: "1.2",
    unit: "B+",
    detail: "Annual Sourcing",
  },
  { label: "Port Access", value: "12", unit: "Hubs", detail: "4 Continents" },
];

export default function ContractStats() {
  return (
    <section
      className={`bg-white py-24 border-b border-[#1A1A1A] ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        {/* DATA HEADER */}
        <div className="flex justify-between items-end mb-12 border-b border-[#1A1A1A]/10 pb-6">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#961515]">
              System Metrics
            </p>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40">
              Operational Performance Index 2026
            </h3>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[9px] font-mono text-[#1A1A1A]/30 uppercase italic">
              *Data synced: Real-time Institutional Ledger
            </p>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 group hover:bg-[#F9F8F6] transition-colors"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 mb-8 group-hover:text-[#961515] transition-colors">
                {stat.label}
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`${jakarta.className} text-5xl lg:text-6xl tracking-tighter text-[#1A1A1A]`}
                >
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-[#961515]">
                  {stat.unit}
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A1A1A]/5">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                  Status: {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ARCHITECTURAL FOOTER */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">
              All metrics verified by MKZ-Internal Audit
            </span>
          </div>
          <div className="md:col-span-2 md:text-right">
            <p className="text-[10px] leading-relaxed text-[#1A1A1A]/30 italic max-w-md ml-auto">
              Figures represent consolidated performance across the Mokaz
              Logistics and Sovereign Procurement divisions for the fiscal year
              2025-2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
