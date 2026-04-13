"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EngagementTerminal({ isOpen, onClose }: TerminalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm z-[200]"
          />

          {/* SLIDE-OUT PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 h-full w-full max-w-xl bg-white z-[210] shadow-2xl flex flex-col ${inter.className}`}
          >
            {/* TERMINAL HEADER */}
            <div className="p-8 border-b border-[#1A1A1A]/10 flex justify-between items-center bg-[#F9F8F6]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#961515] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                  Engagement Terminal / 01
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* FORM CONTENT */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12">
              <div className="mb-12">
                <h2
                  className={`${jakarta.className} text-4xl uppercase tracking-tighter text-[#1A1A1A] mb-4`}
                >
                  Initiate <br /> Procurement.
                </h2>
                <p className="text-sm text-[#1A1A1A]/50 leading-relaxed font-medium">
                  Complete the institutional intake form below. A Mokaz sector
                  specialist will review the technical parameters of your
                  request.
                </p>
              </div>

              <form className="space-y-10">
                {/* INPUT GROUP */}
                <div className="space-y-8">
                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 group-focus-within:text-[#961515] transition-colors">
                      Lead Contact Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alexander Pierce"
                      className="w-full bg-transparent border-b-2 border-[#1A1A1A]/10 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:border-[#1A1A1A] outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 group-focus-within:text-[#961515] transition-colors">
                      Corporate/State Entity
                    </label>
                    <input
                      type="text"
                      placeholder="Organization Name"
                      className="w-full bg-transparent border-b-2 border-[#1A1A1A]/10 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:border-[#1A1A1A] outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 group-focus-within:text-[#961515] transition-colors">
                      Project Sector
                    </label>
                    <select className="w-full bg-transparent border-b-2 border-[#1A1A1A]/10 py-3 text-[#1A1A1A] focus:border-[#1A1A1A] outline-none transition-all font-semibold appearance-none">
                      <option>Sovereign Infrastructure</option>
                      <option>Cross-Border Logistics</option>
                      <option>Technical Sourcing</option>
                    </select>
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 group-focus-within:text-[#961515] transition-colors">
                      Project Brief
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Define the scope and scale of the requirement..."
                      className="w-full bg-transparent border-b-2 border-[#1A1A1A]/10 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:border-[#1A1A1A] outline-none transition-all font-semibold resize-none"
                    />
                  </div>
                </div>

                {/* SUBMIT */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1A1A1A] text-white py-6 flex items-center justify-center gap-4 group transition-colors hover:bg-[#961515]"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">
                    Transmit Data
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </motion.button>
              </form>
            </div>

            {/* TERMINAL FOOTER */}
            <div className="p-8 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
              <div className="flex items-center gap-4 text-[#1A1A1A]/40">
                <ShieldCheck size={20} strokeWidth={1} />
                <p className="text-[9px] uppercase tracking-widest leading-relaxed">
                  Encryption active. Data handled under <br />
                  <span className="text-[#1A1A1A] font-bold">
                    MKZ-Compliance Standards V.2.0
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
