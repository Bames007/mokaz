"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const milestones = [
  { year: "2014", event: "Logistics Foundation" },
  { year: "2018", event: "Sovereign Protocols" },
  { year: "2022", event: "Industrial Expansion" },
  { year: "2026", event: "Audit Integration" },
];

export default function ContractsAbout() {
  return (
    <section
      className={`relative bg-[#FFFFFF] py-16 lg:py-32 px-6 lg:px-12 border-t border-[#1A1A1A] ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: TWO-COLUMN ARCHITECTURAL SPLIT */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-24 lg:mb-40">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#961515] mb-6">
                Institutional Pedigree
              </p>
              {/* Heading size is now clamp-responsive */}
              <h2
                className={`${jakarta.className} text-[clamp(2.5rem,8vw,5rem)] tracking-tighter leading-[0.85] uppercase text-[#1A1A1A]`}
              >
                The Logic <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px #1A1A1A" }}
                >
                  of Execution
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[16px] lg:text-[18px] leading-snug text-[#1A1A1A] font-medium"
            >
              Mokaz Group operates as a silent partner in large-scale
              procurement. Our methodology prioritizes the{" "}
              <span className="text-[#961515]">mathematical certainty</span> of
              the supply chain.
            </motion.p>
          </div>
        </div>

        {/* BOTTOM SECTION: THE DATA GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#1A1A1A] pt-12 gap-12">
          {/* THE MANIFESTO BODY */}
          <div className="lg:col-span-7 pr-0 lg:pr-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px] leading-relaxed text-[#1A1A1A]/80">
              <p>
                We believe that general contracting is a discipline of
                integrity. By stripping away bureaucratic layers, we create
                high-speed corridors between industrial manufacturing and
                institutional requirement.
              </p>
              <p>
                Every project is governed by a strict audit-ready framework. In
                our world, compliance is not a hurdle—it is the baseline for
                every asset we mobilize globally.
              </p>
            </div>
          </div>

          {/* THE COMPACT TIMELINE */}
          <div className="lg:col-span-5 border-l-0 lg:border-l border-[#1A1A1A]/10 lg:pl-12">
            <div className="space-y-6">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#1A1A1A]/5 pb-4"
                >
                  <span className="text-[10px] font-bold font-mono text-[#961515] uppercase tracking-tighter italic">
                    {item.year} —
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE-ONLY CTA BUTTON */}
      <div className="mt-16 lg:hidden">
        <button className="w-full bg-[#1A1A1A] text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em]">
          Review Credentials
        </button>
      </div>
    </section>
  );
}
