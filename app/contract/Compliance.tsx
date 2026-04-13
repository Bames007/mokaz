"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Globe, Lock } from "lucide-react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

const credentials = [
  {
    icon: <ShieldCheck size={20} />,
    title: "ISO 9001:2015",
    detail: "Quality Management Systems Certified",
  },
  {
    icon: <Lock size={20} />,
    title: "AML Compliance",
    detail: "Rigorous Anti-Money Laundering Protocols",
  },
  {
    icon: <FileText size={20} />,
    title: "Dossier Access",
    detail: "Full Transparency for State Audits",
  },
  {
    icon: <Globe size={20} />,
    title: "Incoterms 2026",
    detail: "Standardized Global Shipping Logic",
  },
];

export default function ComplianceDossier() {
  return (
    <section
      className={`bg-white py-24 lg:py-40 px-6 border-b border-[#1A1A1A] ${inter.className}`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: THE BLUEPRINT LABEL */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#961515] mb-6">
                Security Layer
              </p>
              <h2
                className={`${jakarta.className} text-4xl lg:text-5xl tracking-tighter uppercase text-[#1A1A1A] mb-8`}
              >
                Sovereign <br /> Assurance.
              </h2>
              <div className="p-6 border-l-2 border-[#1A1A1A] bg-[#F9F8F6]">
                <p className="text-xs leading-relaxed text-[#1A1A1A]/60 font-medium">
                  Mokaz Group operates under strict international regulatory
                  frameworks. Every contract is an audited event, ensuring total
                  asset protection.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE CREDENTIALS GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "#F9F8F6" }}
                className="bg-white p-10 lg:p-14 flex flex-col justify-between h-[280px]"
              >
                <div className="text-[#961515] mb-8">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-[#1A1A1A] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold leading-loose">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
