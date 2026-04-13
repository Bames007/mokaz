"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Briefcase, Landmark, ShieldCheck, UserCircle2 } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-jakarta",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export default function TaxBoard() {
  const directors = [
    {
      initials: "AO",
      role: "Executive Chair",
      focus: "Institutional Strategy",
      icon: <Briefcase size={18} />,
    },
    {
      initials: "IM",
      role: "Technical Director",
      focus: "Tax & Compliance Engine",
      icon: <ShieldCheck size={18} />,
    },
    {
      initials: "OK",
      role: "Asset Director",
      focus: "Real Estate Portfolios",
      icon: <Landmark size={18} />,
    },
  ];

  return (
    <section
      id="board"
      className={`py-24 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-[#961515] mb-3">
            <UserCircle2 size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              Leadership
            </span>
          </div>
          <h2 className="font-jakarta text-4xl md:text-5xl text-[#1A1A1A] tracking-tighterleading-[1]">
            Governance <span className="text-[#961515]">Architecture.</span>
          </h2>
          <p className="text-[#1A1A1A]/60 mt-4 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            The multi-disciplinary leadership guiding the Mokaz digitization
            engine, ensuring fiscal transparency at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5, borderColor: "rgba(150, 21, 21, 0.2)" }}
              className="bg-white p-10 rounded-[2rem] border border-[#1A1A1A]/5 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl hover:shadow-[#961515]/5"
            >
              <div className="w-24 h-24 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-jakarta text-4xl mb-8 border-4 border-[#F5F2ED] shadow-inner group-hover:scale-110 transition-transform duration-500">
                {director.initials}
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#F5F2ED] flex items-center justify-center text-[#961515] mb-6 group-hover:bg-[#961515]/5 transition-colors">
                {director.icon}
              </div>
              <h3 className="font-jakarta text-xl text-[#1A1A1A] mb-3 tracking-tight">
                {director.role}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/40 group-hover:text-[#961515] transition-colors">
                {director.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
