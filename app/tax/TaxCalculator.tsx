"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ChevronRight } from "lucide-react";

export default function TaxCalculator() {
  const [amount, setAmount] = useState<number>(5000000);
  const [rate, setRate] = useState<number>(15);

  const tax = (amount * (rate / 100)).toLocaleString();
  const net = (amount - amount * (rate / 100)).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#1A1A1A]/5"
    >
      <div className="flex items-center gap-3 mb-10 pb-6 border-b border-[#1A1A1A]/5">
        <Calculator size={22} className="text-[#961515]" />
        <h3 className="font-bold text-[#1A1A1A] tracking-tighter text-xl">
          Tax Calculator
        </h3>
      </div>

      <div className="space-y-8">
        <div className="space-y-3 group">
          <label className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]/30 group-focus-within:text-[#961515]">
            Gross Value (₦)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-[#F9F9F9] py-5 px-6 rounded-xl font-bold text-[#1A1A1A] text-2xl border border-transparent focus:border-[#961515]/20 focus:bg-white transition-all outline-none"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]/30">
              Tax Coefficient
            </label>
            <span className="text-xl font-black text-[#961515]">{rate}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-1 bg-[#F5F2ED] rounded-lg appearance-none cursor-pointer accent-[#961515]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl text-white">
            <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-2">
              Estimated Tax
            </p>
            <motion.p
              key={tax}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-black tracking-tighter"
            >
              ₦{tax}
            </motion.p>
          </div>
          <div className="bg-[#F5F2ED] p-6 rounded-2xl text-[#1A1A1A]">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#1A1A1A]/40 mb-2">
              Net Revenue
            </p>
            <motion.p
              key={net}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-black tracking-tighter"
            >
              ₦{net}
            </motion.p>
          </div>
        </div>

        <button className="w-full py-4 flex items-center justify-center gap-2 group text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40 hover:text-[#961515] transition-colors">
          Download PDF Forecast{" "}
          <ChevronRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}
