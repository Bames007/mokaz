"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const stats = [
  { label: "Tax Compliance", value: "100%" },
  { label: "Asset Valuation", value: "4.8B+" },
  { label: "Active Mandates", value: "120+" },
];

export default function About() {
  return (
    <section
      className={`py-20 md:py-40 bg-[#f6f4f1] overflow-hidden ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        {/* 1. THE HOOK: Fluid Type & Staggered Reveal */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <h2
              className={`${plusJakarta.className} text-[#f95c4b] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-10`}
            >
              The Mokaz Philosophy
            </h2>
            <h3
              className={`${plusJakarta.className} text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] text-[#1a1a1a] tracking-tightest uppercase`}
            >
              Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#f95c4b] to-[#1a1a1a] bg-[length:200%_auto] animate-text-shimmer">
                Consultancy.
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 lg:pt-24"
          >
            <p className="text-lg md:text-xl text-[#1a1a1a]/70 leading-relaxed font-medium">
              We operate at the core of regulatory precision. Mokaz was
              engineered to bridge the gap between complex tax mandates and
              high-stakes physical asset acquisition.
            </p>
          </motion.div>
        </div>

        {/* 2. STATS STRIP: Dynamic Border Animation */}
        <div className="relative mb-24 md:mb-40">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            className="absolute top-0 left-0 h-px bg-[#1a1a1a]/10"
          />
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]/10 py-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 py-8 sm:py-0 sm:px-12 first:pl-0 last:pr-0"
              >
                <p
                  className={`${plusJakarta.className} text-5xl md:text-7xl text-[#1a1a1a] tracking-tighter`}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f95c4b] mt-4">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            className="absolute bottom-0 left-0 h-px bg-[#1a1a1a]/10"
          />
        </div>

        {/* 3. FEATURE CARDS: Architectural Stacking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/5 border border-[#1a1a1a]/5">
          {[
            {
              num: "01",
              title: "Regulatory Fortress",
              desc: "From TCC processing to Audited Financial Statements, we transform compliance into a strategic shield.",
            },
            {
              num: "02",
              title: "Asset Orchestration",
              desc: "A centralized framework to track property inquiries and manage real estate portfolios with institutional rigor.",
            },
            {
              num: "03",
              title: "Project Precision",
              desc: "Digital milestone tracking for general contracts, ensuring every vendor and project remains within the grid.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: "#1a1a1a", color: "#f6f4f1" }}
              className="bg-[#f6f4f1] p-10 md:p-14 transition-colors duration-500 group cursor-pointer flex flex-col min-h-[400px]"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[10px] font-bold text-[#f95c4b] font-mono tracking-widest">
                  {card.num}
                </span>
                <ArrowUpRight
                  size={24}
                  className="text-[#f95c4b] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <div className="mt-auto">
                <h4
                  className={`${plusJakarta.className} text-2xl md:text-3xl font-extrabold mb-6 uppercase tracking-tighter`}
                >
                  {card.title}
                </h4>
                <p className="text-sm md:text-base opacity-60 leading-relaxed mb-8 group-hover:opacity-80">
                  {card.desc}
                </p>
                <div className="h-px w-8 bg-[#f95c4b] group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes text-shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .animate-text-shimmer {
          animation: text-shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
