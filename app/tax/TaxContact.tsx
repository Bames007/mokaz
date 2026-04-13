"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  Mail,
  MapPin,
  PhoneCall,
  ArrowUpRight,
  ShieldCheck,
  MessageSquare,
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

export default function TaxContact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={`bg-[#F5F2ED] pt-24 ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl pb-12 border-b border-[#1A1A1A]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 items-start mb-24 relative group">
          {/* BACKGROUND DECORATION (NIGERIA MAP SVG) - Visible on Hover */}
          <div className="absolute inset-0 z-0 flex justify-center items-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full scale-[2]"
              fill="currentColor"
            >
              <path d="M78.6,35.7c-0.6-1-1.7-1.8-3-2.1c-0.6-0.1-1.2-0.2-1.8-0.2c-1.1,0-2.1,0.3-3,0.8c-1.3,0.7-2.3,1.9-2.7,3.3..." />{" "}
              {/* Dummy Path */}
            </svg>
          </div>

          {/* COL 1: CONCIERGE & INQUIRY */}
          <div className="lg:col-span-1 space-y-6 z-10">
            <h2
              className={`${jakarta.className} text-4xl tracking-tighter text-[#1A1A1A]`}
            >
              MOKAZ<span className="text-[#961515]">.</span>
            </h2>
            <div className="bg-white p-6 rounded-2xl border border-[#1A1A1A]/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/30 mb-4">
                Request Consultation
              </p>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-6">
                Start your TCC review or property portfolio audit. Our internal
                concierge is available.
              </p>
              <button className="w-full py-4 bg-[#961515] text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1A1A1A] transition-all">
                Submit Inquiry <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* COL 2: DIRECT LINES */}
          <div className="space-y-12 z-10 pt-4 md:pt-16">
            <a
              href="tel:+234800MOKAZTAX"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#961515] group-hover:border-[#961515] transition-colors">
                <PhoneCall
                  size={18}
                  className="text-[#1A1A1A] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.4em]">
                  Direct Treasury
                </p>
                <p className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                  +234 (0) 800 MOKAZ TAX
                </p>
              </div>
            </a>
            <a
              href="mailto:registry@mokaz.co"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#961515] group-hover:border-[#961515] transition-colors">
                <Mail
                  size={18}
                  className="text-[#1A1A1A] group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-[9px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.4em]">
                  Official Registry
                </p>
                <p className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                  registry@mokaz.co
                </p>
              </div>
            </a>
          </div>

          {/* COL 3: OPERATIONAL HQ */}
          <div className="space-y-6 z-10 pt-4 md:pt-16">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-[#961515] mt-1 shrink-0" />
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.4em]">
                  Headquarters
                </p>
                <p className="text-xl font-bold tracking-tight text-[#1A1A1A]">
                  FCT, Abuja, Nigeria.
                </p>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed pt-2">
                  Registered Address: RC-RC-1928374
                  <br /> Authorized Fiscal Personnel Hub
                </p>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#961515] group"
            >
              Request On-Site Consultation{" "}
              <MessageSquare
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
