"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });

// Replace these with actual partner/regulatory body names or SVG icons
const partners = [
  "Federal Inland Revenue",
  "Real Estate Regulatory",
  "Ministry of Works",
  "Global Audit Partners",
  "Infrastructure Board",
  "Fiscal Policy Council",
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-[#f6f4f1] overflow-hidden border-b border-[#e4ded2]">
      <div className="container mx-auto px-6 mb-8 text-center lg:text-left">
        <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-[0.4em]">
          Operating within global standards
        </span>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners].map((partner, i) => (
            <span
              key={i}
              className={`${plusJakarta.className} text-2xl md:text-4xl mx-12 text-[#1a1a1a] opacity-10 hover:opacity-100 transition-opacity cursor-default uppercase tracking-tighter`}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation Style */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
