"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Syne, Inter } from "next/font/google";
import {
  MapPin,
  ArrowUpRight,
  Shield,
  Zap,
  Circle,
  X,
  Maximize2,
  Layers,
} from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const properties = [
  {
    id: "01",
    title: "Obsidian Arch",
    location: "Tokyo, JP",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    size: "lg:col-span-2 lg:row-span-2", // Big feature card
    tag: "Flagship",
    specs: { size: "12,500m²", floors: "3", established: "2024" },
  },
  {
    id: "02",
    title: "Elysian",
    location: "Dubai, UAE",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    size: "lg:col-span-1 lg:row-span-1",
    tag: "Commercial",
    specs: { size: "45,000m²", floors: "110", established: "2023" },
  },
  {
    id: "03",
    title: "Nordic Brut",
    location: "Oslo, NO",
    img: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=2070&auto=format&fit=crop",
    size: "lg:col-span-1 lg:row-span-1",
    tag: "Private",
    specs: { size: "8,900m²", floors: "4", established: "2025" },
  },
  {
    id: "04",
    title: "The Helix",
    location: "London, UK",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    // FIXED: Spanned 2 columns instead of 2 rows to avoid elongation
    size: "lg:col-span-2 lg:row-span-1",
    tag: "Innovation",
    specs: { size: "22,100m²", floors: "14", established: "2026" },
  },
  {
    id: "05",
    title: "Vera Plaza",
    location: "Berlin, DE",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    // Wide card now complements the tall ones
    size: "lg:col-span-1 lg:row-span-2", // Tall card
    tag: "Retail",
    specs: { size: "62,000m²", floors: "6", established: "2024" },
  },
  {
    id: "06",
    title: "Crest House",
    location: "Malibu, US",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070&auto=format&fit=crop",
    size: "lg:col-span-1 lg:row-span-1",
    tag: "Residential",
    specs: { size: "4,100m²", floors: "2", established: "2022" },
  },
  {
    id: "07",
    title: "Neo HQ",
    location: "Seoul, KR",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    size: "lg:col-span-1 lg:row-span-1",
    tag: "Corporate",
    specs: { size: "72,000m²", floors: "45", established: "2025" },
  },
];

export default function MokazBentoPortfolio() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  return (
    <section
      className={`py-16 md:py-32 bg-[#F5F2ED] ${inter.className} ${syne.variable}`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* HEADER: Clean Spacing */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#961515]" />
              <span className="text-[#961515] text-[10px] font-black uppercase tracking-[0.4em]">
                Asset Collection // 2026 Archive
              </span>
            </div>
            <h2
              className={`${syne.className} text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tighter leading-[0.9]`}
            >
              Titanium <br />{" "}
              <span className="text-[#1A1A1A]/20">Collection.</span>
            </h2>
          </motion.div>
          <p className="text-[#1A1A1A]/40 text-[9px] uppercase font-bold tracking-[0.3em] text-right hidden lg:block leading-relaxed max-w-[150px]">
            Institutional quality / verified data points
          </p>
        </div>

        {/* BENTO GRID: Balanced aspects for mobile and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-5 md:gap-7">
          {properties.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.03,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedProperty(item)}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-[#1A1A1A]/5 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${item.size}`}
            >
              {/* IMAGE: No Grayscale on mobile for legibility */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 sm:grayscale group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* OVERLAY: Clean data display */}
              <div className="relative z-10 h-full p-6 lg:p-7 flex flex-col justify-between items-start text-white">
                <div className="flex w-full justify-between items-start gap-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-black uppercase tracking-widest text-center">
                    {item.tag}
                  </span>
                  <Maximize2
                    size={16}
                    className="text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="w-full space-y-2">
                  <h3
                    className={`${syne.className} text-xl md:text-2xl uppercase tracking-tighter leading-tight group-hover:text-[#961515] transition-colors`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-60">
                    <MapPin size={10} className="text-[#961515]" />
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em]">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* METADATA FOOTER: Subtle Tags */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Institutional Grade", icon: <Shield size={14} /> },
            { label: "High Efficiency", icon: <Maximize2 size={14} /> },
            { label: "Verified Data", icon: <Circle size={14} /> },
            { label: "Global Reach", icon: <Layers size={14} /> },
          ].map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-[#1A1A1A]/5"
            >
              <span className="text-[#961515]">{tag.icon}</span>
              <span className="text-[8px] font-black uppercase tracking-widest text-[#1A1A1A]/50">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BRIEF MODAL: Institutional Data Display */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#F5F2ED] rounded-3xl overflow-hidden shadow-3xl"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 z-[110] p-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#961515] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto">
                  <img
                    src={selectedProperty.img}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2ED] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="md:col-span-7 p-8 md:p-10 space-y-6">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/30 mb-2">
                      Asset {selectedProperty.id} / Verified
                    </p>
                    <h3
                      className={`${syne.className} text-4xl text-[#1A1A1A] uppercase tracking-tighter`}
                    >
                      {selectedProperty.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60 font-medium tracking-tight mt-1">
                      {selectedProperty.location}
                    </p>
                  </div>

                  <div className="h-px w-full bg-[#1A1A1A]/10" />

                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2">
                    {[
                      {
                        label: "Site Area",
                        value: selectedProperty.specs.size,
                      },
                      {
                        label: "Elevation",
                        value: `${selectedProperty.specs.floors} Floors`,
                      },
                      {
                        label: "Established",
                        value: selectedProperty.specs.established,
                      },
                      { label: "Institutional", value: "Grade A+" },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-1">
                          {spec.label}
                        </p>
                        <p className="text-sm font-bold text-[#1A1A1A] tracking-tight">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 flex items-center justify-between p-4 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#961515] group transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Access Private Brief
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/40 group-hover:text-white group-hover:scale-125 transition-all"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
