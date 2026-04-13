"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "./home/Hero";
import AboutSection from "./home/About";
import ServicesSection from "./home/OurServices";
import MeetOurBoard from "./home/MeetOurBoard";
import PartnerSection from "./home/Partners";
import SectorPortal from "./home/SectorPortal";
import Header from "./home/Header";
import MetricsCounter from "./home/MetricCounter";
import TrustBar from "./home/TrustBar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div
      className={`${plusJakarta.variable} ${inter.variable} font-sans selection:bg-[#f95c4b] selection:text-white`}
    >
      <div className="relative min-h-screen flex flex-col bg-[#f6f4f1] text-[#1a1a1a]">
        {/* BACKGROUND STRUCTURAL GRID */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-6 pointer-events-none opacity-40">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-r border-[#e4ded2] h-full" />
          ))}
        </div>

        {/* HEADER */}
        {/* <nav className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-[#e4ded2] bg-[#f6f4f1]/80 backdrop-blur-md">
          <div className="font-plus-jakarta font-extrabold text-2xl tracking-tighter">
            MOKAZ<span className="text-[#f95c4b]">.</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#f95c4b] transition-colors">
              Tax Consultancy
            </a>
            <a href="#" className="hover:text-[#f95c4b] transition-colors">
              Real Estate
            </a>
            <a href="#" className="hover:text-[#f95c4b] transition-colors">
              Contracts
            </a>
          </div>
          <button className="group flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-2.5 text-xs font-bold rounded-full hover:bg-[#f95c4b] transition-all duration-300">
            CLIENT PORTAL
            <ArrowUpRight
              size={14}
              className="group-hover:rotate-45 transition-transform"
            />
          </button>
        </nav> */}

        <Header />
        <Hero />
        <AboutSection />
        <MetricsCounter />
        <ServicesSection />
        <MeetOurBoard />
        <PartnerSection />
        <TrustBar />
        <SectorPortal />

        {/* FOOTER */}
        <footer className="relative z-10 p-8 border-t border-[#e4ded2] bg-[#f6f4f1] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
            © 2026 MOKAZ MULTITRADE LTD — All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest">
              Privacy
            </span>
            <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest">
              Terms
            </span>
            <div className="flex gap-2 ml-4">
              <div className="w-12 h-[2px] bg-[#1a1a1a]" />
              <div className="w-6 h-[2px] bg-[#f95c4b]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
