"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, Box, Truck, ShieldAlert, Microscope } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  {
    id: "01",
    title: "Sovereign Procurement",
    desc: "End-to-end material sourcing for government-scale infrastructure. We handle the tender logic and the fulfillment chain with absolute transparency.",
    icon: <Box size={22} />,
  },
  {
    id: "02",
    title: "Industrial Logistics",
    desc: "Precision mobilization of high-value assets and heavy machinery across borders. Real-time tracking integrated with institutional audit requirements.",
    icon: <Truck size={22} />,
  },
  {
    id: "03",
    title: "Technical Auditing",
    desc: "Pre-contract and post-delivery verification protocols. Ensuring every unit delivered meets ISO and institutional compliance standards.",
    icon: <ShieldAlert size={22} />,
  },
  {
    id: "04",
    title: "Strategic Sourcing",
    desc: "Global manufacturer-direct corridors. We eliminate the middleman to provide the highest efficiency in large-scale hardware acquisition.",
    icon: <Microscope size={22} />,
  },
];

export default function ContractServices() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="services"
      className={`py-24 lg:py-40 bg-white border-t border-[#1A1A1A] ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        {/* SECTION HEADER: High contrast black/red split */}
        <div className="mb-16 lg:mb-32 max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#961515] mb-6">
            Core Capabilities
          </p>
          <h2
            className={`${jakarta.className} text-[clamp(2.5rem,7vw,5rem)] tracking-tighter uppercase text-[#1A1A1A] leading-[0.9]`}
          >
            The Framework <br /> of{" "}
            <span className="text-[#1A1A1A]/40 italic font-light">
              Delivery.
            </span>
          </h2>
        </div>

        {/* INTERACTIVE GRID: Using slightly darker borders for structure */}
        <div className="flex flex-col gap-px bg-[#1A1A1A]/20 border-y border-[#1A1A1A]/20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              onClick={() =>
                setExpanded(expanded === service.id ? null : service.id)
              }
              onMouseEnter={() => setExpanded(service.id)}
              onMouseLeave={() => setExpanded(null)}
              className="relative overflow-hidden bg-white cursor-pointer group"
            >
              {/* MAIN ROW */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 lg:p-14 transition-all z-10 relative">
                {/* ID & TITLE: Pure black text for readability */}
                <div className="flex items-center gap-8 lg:gap-16">
                  <span className="text-[12px] font-mono font-bold text-[#1A1A1A]/40 group-hover:text-[#961515] transition-colors">
                    [{service.id}]
                  </span>
                  <h3
                    className={`${jakarta.className} text-2xl lg:text-4xl tracking-tight uppercase text-[#1A1A1A] group-hover:translate-x-2 transition-transform duration-500`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* ICON & INDICATOR: Thicker border for better contrast */}
                <div className="mt-10 lg:mt-0 flex items-center gap-6">
                  <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#961515]">
                    {service.icon}
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === service.id ? 45 : 0 }}
                    className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all shadow-sm"
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>
              </div>

              {/* EXPANDABLE CONTENT: Deepened background and text weight */}
              <AnimatePresence>
                {expanded === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-[#F7F7F7]"
                  >
                    <div className="p-8 lg:p-14 lg:pl-[164px] border-t border-[#1A1A1A]/10">
                      <p className="text-[18px] lg:text-[22px] text-[#1A1A1A] font-medium max-w-2xl leading-relaxed mb-10">
                        {service.desc}
                      </p>
                      <button className="text-[11px] font-black uppercase tracking-[0.4em] text-[#961515] border-b-2 border-[#961515] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all">
                        Inquire for Project Initiation
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BACKGROUND HOVER ACCENT: Slightly darker than the bone-white bg */}
              <motion.div
                className="absolute inset-0 bg-[#F2F2F2] -z-10 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

        {/* CAPABILITY FOOTNOTE: Improved visibility on small screens */}
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-start gap-8">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/50">
            Standard: <span className="text-[#1A1A1A]">MKZ-SECURE-2026</span>
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/50 max-w-sm lg:text-right">
            Sovereign engagement requires{" "}
            <span className="text-[#1A1A1A]">
              Prior Institutional Verification.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
