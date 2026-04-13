"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function MokazFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-[#F5F2ED] text-[#1A1A1A] py-16 border-t border-[#1A1A1A]/5 ${inter.className}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          {/* BRAND BLOCK */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className={`${jakarta.className} text-2xl tracking-tighter`}>
              MOKAZ<span className="text-[#961515]">.</span>
            </h2>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#1A1A1A]/30">
              © {currentYear} ALL RIGHTS RESERVED
            </p>
          </div>

          {/* EBCOM TECHNOLOGIES SECTION */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]/20">
              Systems Architecture
            </span>
            <a
              href="https://ebcomtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-b border-transparent hover:border-[#961515]/20 pb-1 transition-all"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-[#961515] transition-colors">
                Ebcom Technologies
              </span>
              <ArrowUpRight
                size={14}
                className="text-[#961515] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>

          {/* SECURITY & COMPLIANCE */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/50 border border-[#1A1A1A]/5 shadow-sm">
              <ShieldCheck size={14} className="text-[#961515]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 italic">
                Verified Asset Protection
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
