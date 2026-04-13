"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const regions = [
  "Nigeria / Abuja HQ",
  "United Kingdom / London",
  "Singapore / Maritime Hub",
  "Ghana / Accra",
  "UAE / Dubai Terminal",
  "USA / Houston Industrial",
];

export default function GlobalNexus() {
  return (
    <section className="bg-[#1A1A1A] py-12 border-y border-white/10 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center pr-20"
        >
          {[...regions, ...regions].map((region, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="w-1 h-1 bg-[#961515] rounded-full" />
              <span
                className={`${inter.className} text-[10px] font-black uppercase tracking-[0.5em] text-white/40`}
              >
                {region}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
