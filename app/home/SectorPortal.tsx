"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, Landmark, Building2, Gavel } from "lucide-react";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const sectors = [
  {
    id: "tax",
    title: "Tax Consultancy",
    subtitle: "Fiscal Strategy & Optimization",
    href: "/tax",
    icon: <Landmark size={32} />,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop",
    color: "#f95c4b",
  },
  {
    id: "realestate",
    title: "Real Estate",
    subtitle: "High-Value Asset Portfolios",
    href: "/realestate",
    icon: <Building2 size={32} />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    color: "#e4ded2",
  },
  {
    id: "contracts",
    title: "General Contracts",
    subtitle: "Procurement & Infrastructure",
    href: "/contracts",
    icon: <Gavel size={32} />,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
    color: "#1a1a1a",
  },
];

export default function SectorPortal() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  return (
    <section
      className={`py-24 bg-[#1a1a1a] overflow-hidden ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2
            className={`${plusJakarta.className} text-[#f95c4b] text-xs font-bold tracking-[0.5em] uppercase mb-4`}
          >
            Our Specializations
          </h2>
          <h3
            className={`${plusJakarta.className} text-4xl md:text-6xl text-white tracking-tighter`}
          >
            SELECT YOUR <span className="text-zinc-600 italic">SECTOR.</span>
          </h3>
        </div>

        <div className="flex flex-col border-t border-zinc-800">
          {sectors.map((sector) => (
            <Link key={sector.id} href={sector.href} className="group relative">
              <motion.div
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
                className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-16 border-b border-zinc-800 transition-colors duration-500 group-hover:border-[#f95c4b]"
              >
                {/* Text Content */}
                <div className="relative z-20 flex items-center gap-8">
                  <span className="hidden md:block text-zinc-700 group-hover:text-[#f95c4b] transition-colors duration-300 font-mono text-sm">
                    {sector.id.toUpperCase()}
                  </span>
                  <div>
                    <h4
                      className={`${plusJakarta.className} text-4xl md:text-7xl lg:text-8xl text-white group-hover:text-[#f95c4b] transition-all duration-500 tracking-tighter`}
                    >
                      {sector.title}
                    </h4>
                    <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors mt-2 font-medium tracking-widest uppercase text-[10px] md:text-xs">
                      {sector.subtitle}
                    </p>
                  </div>
                </div>

                {/* Icon & Arrow */}
                <div className="relative z-20 mt-8 md:mt-0 flex items-center gap-6">
                  <div className="text-[#f95c4b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                    {sector.icon}
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-[#f95c4b] group-hover:border-[#f95c4b] transition-all duration-500">
                    <ArrowRight
                      className="text-white group-hover:rotate-[-45deg] transition-transform duration-500"
                      size={24}
                    />
                  </div>
                </div>

                {/* Background Image Reveal (Desktop Only) */}
                <AnimatePresence>
                  {hoveredSector === sector.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
                    >
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover grayscale brightness-50"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Background (Static Hint) */}
                <div className="absolute inset-0 md:hidden bg-gradient-to-r from-zinc-900/50 to-transparent z-10 pointer-events-none" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-zinc-500 max-w-sm text-sm">
            Each sector is led by dedicated specialists ensuring regulatory
            excellence and verified audited outcomes.
          </p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-white font-bold text-xs uppercase tracking-widest">
              View All Insights
            </span>
            <div className="h-px w-12 bg-zinc-700 group-hover:w-20 group-hover:bg-[#f95c4b] transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
