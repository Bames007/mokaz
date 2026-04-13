"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Link2 } from "lucide-react";

export default function InstitutionalFootprint() {
  const partners = [
    "FIRS PORTAL",
    "LIRS REGISTRY",
    "CAC NIGERIA",
    "PENCOM",
    "SECURED GATEWAY",
  ];

  return (
    <section className="py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-3">
            <Link2 size={16} className="text-[#961515]" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
              Interfaced Registry Network
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {partners.map((p, i) => (
              <span
                key={i}
                className="text-[11px] font-black text-white/50 hover:text-[#961515] transition-colors cursor-default tracking-widest"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
