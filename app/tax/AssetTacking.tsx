"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  Briefcase,
  MapPin,
  TrendingUp,
  ChevronRight,
  Activity,
} from "lucide-react";

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

export default function ProjectPortfolio() {
  const projects = [
    {
      name: "Abuja Residential Phase II",
      location: "Guzape, FCT",
      status: "85% Completed",
      type: "Real Estate",
      roi: "+14.2%",
    },
    {
      name: "Federal Supply Pipeline",
      location: "Regional Distribution",
      status: "In Progress",
      type: "General Contract",
      roi: "Fixed Margin",
    },
    {
      name: "Mokaz Audit HQ",
      location: "Lagos, NG",
      status: "Operational",
      type: "Infrastructure",
      roi: "Asset-Backed",
    },
  ];

  return (
    <section
      className={`py-20 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#961515] mb-2">
            <Activity size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              Asset Pipeline
            </span>
          </div>
          <h2 className="font-jakarta text-4xl md:text-5xl text-[#1A1A1A] tracking-tighter">
            Active <span className="text-[#961515]">Portfolio.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-[#1A1A1A]/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-[#961515]/30 transition-all"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] flex items-center justify-center text-[#1A1A1A]/40 group-hover:text-[#961515] transition-colors">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg leading-none mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                      <MapPin size={10} /> {project.location}
                    </span>
                    <span className="text-[10px] font-black text-[#961515] uppercase tracking-widest px-2 py-0.5 bg-[#961515]/5 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8 md:gap-16 border-t md:border-t-0 border-[#1A1A1A]/5 pt-4 md:pt-0">
                <div className="text-right">
                  <p className="text-[8px] font-black text-[#1A1A1A]/30 uppercase tracking-widest mb-1">
                    Status
                  </p>
                  <p className="font-bold text-[#1A1A1A] text-sm">
                    {project.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-[#1A1A1A]/30 uppercase tracking-widest mb-1">
                    Project Yield
                  </p>
                  <p className="font-black text-[#1A1A1A] flex items-center gap-1">
                    <TrendingUp size={14} className="text-green-500" />{" "}
                    {project.roi}
                  </p>
                </div>
                <button className="hidden sm:flex w-10 h-10 rounded-full border border-[#1A1A1A]/10 items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
