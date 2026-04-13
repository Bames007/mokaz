"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  Calculator,
  Landmark,
  HardHat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const services = [
  {
    id: "01",
    title: "Tax Consultancy",
    icon: <Calculator className="text-[#f95c4b]" size={28} />,
    description:
      "End-to-end tax lifecycle management. From TCC applications and VAT filings to Audited Financial Statements and sophisticated tax planning.",
    features: ["TCC Processing", "CIT/VAT Filings", "Tax Audit Support"],
    size: "lg", // Large card
  },
  {
    id: "02",
    title: "Real Estate",
    icon: <Landmark className="text-[#f95c4b]" size={28} />,
    description:
      "Strategic acquisition and portfolio management in high-growth zones.",
    features: ["Property Listings", "Asset Management"],
    size: "sm",
  },
  {
    id: "03",
    title: "General Contracts",
    icon: <HardHat className="text-[#f95c4b]" size={28} />,
    description:
      "Digitized procurement and project milestone tracking for infrastructure.",
    features: ["Project Management", "Vendor Sourcing"],
    size: "sm",
  },
];

export default function ServicesSection() {
  return (
    <section className={`py-24 bg-[#f6f4f1] ${inter.className}`}>
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="mb-16">
          <h2
            className={`${plusJakarta.className} text-[#f95c4b] text-xs font-bold tracking-[0.5em] uppercase mb-4`}
          >
            Our Capabilities
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3
              className={`${plusJakarta.className} text-5xl md:text-7xl leading-none text-[#1a1a1a]`}
            >
              CORE <br />{" "}
              <span className="opacity-20 uppercase">Solutions.</span>
            </h3>
            <p className="max-w-xs text-sm text-zinc-500 font-medium">
              A synchronized ecosystem designed to manage corporate compliance
              and physical assets under one roof.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden bg-white p-10 border border-[#e4ded2] flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#f95c4b] ${
                service.size === "lg"
                  ? "md:col-span-2 lg:col-span-2"
                  : "col-span-1"
              }`}
            >
              {/* Scanning Animation Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#f95c4b] -translate-y-full group-hover:translate-y-[500px] transition-all duration-1000 opacity-20" />

              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-[#f6f4f1] group-hover:bg-[#1a1a1a] transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span
                    className={`${plusJakarta.className} text-4xl opacity-10 group-hover:opacity-100 transition-opacity`}
                  >
                    {service.id}
                  </span>
                </div>

                <h4
                  className={`${plusJakarta.className} text-3xl mb-4 uppercase tracking-tighter`}
                >
                  {service.title}
                </h4>
                <p className="text-zinc-500 mb-8 max-w-md leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]"
                    >
                      <CheckCircle2 size={14} className="text-[#f95c4b]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex items-center gap-4 cursor-pointer group/btn">
                <span className="text-xs font-black uppercase tracking-widest border-b-2 border-[#f95c4b] pb-1">
                  View Detail
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-2 transition-transform text-[#f95c4b]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
