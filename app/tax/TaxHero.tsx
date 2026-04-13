"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Calculator,
  Landmark,
  X,
  User,
  Phone,
  Hash,
  FileSearch,
} from "lucide-react";
import TaxCalculator from "./TaxCalculator";

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

export default function TaxHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className={`relative min-h-screen pt-32 pb-20 bg-[#F5F2ED] overflow-hidden ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A1A]/5 border border-[#1A1A1A]/10"
            >
              <Calculator size={14} className="text-[#961515]" />
              <span className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-[0.25em]">
                Institutional Tax Engine
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-jakarta text-5xl md:text-8xl text-[#1A1A1A] leading-[0.85] tracking-tighter"
            >
              Strategic <span className="text-[#961515]">Tax</span> <br />
              Governance.
            </motion.h1>

            <motion.p className="text-[#1A1A1A]/70 text-lg max-w-xl leading-relaxed">
              Precision-engineered TCC processing and audited financial
              statements for Mokaz Multitrade LTD. Digitizing compliance at
              scale.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-10 py-5 rounded-xl font-bold flex items-center gap-3 hover:bg-[#961515] transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
              >
                Inquire for TCC <ArrowRight size={18} />
              </button>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-10 border-t border-[#1A1A1A]/10">
              {[
                { icon: <ShieldCheck size={20} />, label: "Encrypted Filing" },
                { icon: <FileSearch size={20} />, label: "Audit Tracking" },
                { icon: <Landmark size={20} />, label: "FIRS Registry" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="text-[#961515] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]/40">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT: CALCULATOR */}
          <div className="lg:col-span-5">
            <TaxCalculator />
          </div>
        </div>
      </div>

      {/* MODAL WITH HIGH-CONTRAST INPUTS */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-[#1A1A1A]/20 hover:text-[#961515] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-10 text-center md:text-left">
                <h3 className="font-jakarta text-3xl text-[#1A1A1A] tracking-tighter mb-2">
                  Internal Inquiry
                </h3>
                <p className="text-[10px] text-[#1A1A1A]/40 font-black uppercase tracking-[0.3em]">
                  Authorized Document Request
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User
                      size={14}
                      className="absolute left-4 top-[1.15rem] text-[#1A1A1A]/30"
                    />
                    <input
                      type="text"
                      placeholder="FULL NAME"
                      className="w-full bg-[#F9F9F9] py-4 pl-12 pr-4 rounded-xl text-[11px] font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 border border-[#1A1A1A]/10 outline-none focus:bg-white focus:border-[#961515] transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone
                      size={14}
                      className="absolute left-4 top-[1.15rem] text-[#1A1A1A]/30"
                    />
                    <input
                      type="tel"
                      placeholder="PHONE"
                      className="w-full bg-[#F9F9F9] py-4 pl-12 pr-4 rounded-xl text-[11px] font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 border border-[#1A1A1A]/10 outline-none focus:bg-white focus:border-[#961515] transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Hash
                    size={14}
                    className="absolute left-4 top-[1.15rem] text-[#1A1A1A]/30"
                  />
                  <select className="w-full bg-[#F9F9F9] py-4 pl-12 pr-10 rounded-xl text-[11px] font-bold text-[#1A1A1A] border border-[#1A1A1A]/10 outline-none focus:bg-white focus:border-[#961515] appearance-none cursor-pointer">
                    <option>SELECT FILING TYPE</option>
                    <option>TCC APPLICATION</option>
                    <option>VAT/PIT FILING</option>
                    <option>AUDITED STATEMENTS</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  placeholder="ADDITIONAL COMPLIANCE DETAILS"
                  className="w-full bg-[#F9F9F9] py-4 px-6 rounded-xl text-[11px] font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 border border-[#1A1A1A]/10 outline-none focus:bg-white focus:border-[#961515] transition-all resize-none"
                ></textarea>

                <button className="w-full py-5 bg-[#1A1A1A] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#961515] transition-all duration-300 shadow-xl shadow-[#961515]/10 active:scale-[0.98]">
                  Submit to Treasury
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
