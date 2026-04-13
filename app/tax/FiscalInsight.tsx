"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";

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

export default function FiscalInsights() {
  const posts = [
    {
      date: "APR 12, 2026",
      title: "New FIRS Amendments for Multi-Trade Entities",
      category: "TAX POLICY",
      author: "Mokaz Treasury",
    },
    {
      date: "MAR 28, 2026",
      title: "Real Estate ROI Forecast: The Guzape Expansion",
      category: "MARKET ANALYSIS",
      author: "Asset Dept.",
    },
  ];

  return (
    <section
      className={`py-20 bg-white ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#961515]">
              <Newspaper size={14} />
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                Intelligence
              </span>
            </div>
            <h2 className="font-jakarta text-4xl text-[#1A1A1A] tracking-tighter">
              Fiscal <span className="text-[#961515]">Insights.</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#961515] transition-colors">
            View All Reports <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#F5F2ED] p-8 md:p-12 rounded-[2.5rem] border border-transparent group-hover:border-[#961515]/20 transition-all">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-[9px] font-black text-[#961515] bg-[#961515]/5 px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] text-[#1A1A1A]/30 font-bold uppercase tracking-widest">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-8 group-hover:text-[#961515] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between border-t border-[#1A1A1A]/5 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-black text-[8px]">
                      M
                    </div>
                    <span className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                      {post.author}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[#1A1A1A]/20 group-hover:text-[#961515] transition-all"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
