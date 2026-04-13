"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter, Syne } from "next/font/google";
import {
  BarChart3,
  Globe2,
  LineChart,
  ArrowUpRight,
  Fingerprint,
  Cpu,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
});

const services = [
  {
    id: "01",
    title: "Capital Strategy",
    desc: "Optimizing asset liquidity through algorithmic market analysis and institutional debt restructuring.",
    icon: <BarChart3 size={24} />,
    tags: ["Liquidity", "Risk-Mitigation", "LTV Mastery"],
  },
  {
    id: "02",
    title: "Asset Tokenization",
    desc: "Fragmenting high-value real estate into digital shares for global institutional distribution.",
    icon: <Cpu size={24} />,
    tags: ["Blockchain", "256-bit", "Securitized"],
  },
  {
    id: "03",
    title: "Portfolio Yield",
    desc: "Maximizing NOI through automated management protocols and predictive maintenance AI.",
    icon: <LineChart size={24} />,
    tags: ["AI-Driven", "Yield Optima", "SaaS"],
  },
  {
    id: "04",
    title: "Global Acquisition",
    desc: "Exclusive off-market access to Tier-1 commercial assets across Tokyo, Dubai, and London.",
    icon: <Globe2 size={24} />,
    tags: ["Off-Market", "Tier-1", "Exclusive"],
  },
];

export default function MokazServices() {
  return (
    <section
      className={`py-16 md:py-32 bg-[#F5F2ED] ${inter.className} ${jakarta.variable} ${syne.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#961515]" />
              <span className="text-[#961515] text-[10px] font-black uppercase tracking-[0.4em]">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-jakarta text-4xl md:text-6xl text-[#1A1A1A] leading-[0.85] tracking-tighter uppercase">
              Operational <br />
              <span className="text-[#1A1A1A]/20">Excellence.</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-4 border-l border-[#1A1A1A]/10 pl-6 h-fit py-2">
            <Fingerprint className="text-[#961515]" size={32} />
            <p className="text-[10px] text-[#1A1A1A]/50 font-bold uppercase tracking-widest leading-relaxed">
              Proprietary methods / <br /> Verified 2026 stack
            </p>
          </div>
        </div>

        {/* SERVICES GRID: Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/5 border border-[#1A1A1A]/5 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#F5F2ED] hover:bg-white p-8 md:p-10 transition-all duration-500 cursor-default"
            >
              {/* Service Number ID */}
              <span className="absolute top-8 right-8 text-[10px] font-black text-[#1A1A1A]/10 group-hover:text-[#961515]/20 transition-colors">
                // {service.id}
              </span>

              <div className="space-y-6 relative z-10">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#1A1A1A]/5 shadow-sm flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#961515] group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg]">
                  {service.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="font-jakarta text-xl uppercase tracking-tighter text-[#1A1A1A] font-extrabold">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 leading-relaxed min-h-[60px]">
                    {service.desc}
                  </p>
                </div>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-[#1A1A1A]/5 text-[#1A1A1A]/40 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Reveal Arrow */}
                <div className="pt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#961515]">
                    Deep Dive
                  </span>
                  <ArrowUpRight size={14} className="text-[#961515]" />
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#961515] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* TRUST FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-[#1A1A1A]/5"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#F5F2ED] bg-[#D1D1D1] overflow-hidden"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 15}`}
                  alt="Expert"
                  className="grayscale contrast-125"
                />
              </div>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 text-center md:text-left">
            Consult with our{" "}
            <span className="text-[#1A1A1A]">certified technical advisors</span>{" "}
            regarding asset integration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
