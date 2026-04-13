"use client";

import React from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  RefreshCw,
  Scale,
  Landmark,
  CheckCircle2,
  AlertCircle,
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

export default function TaxCompliance() {
  const certifications = [
    {
      agency: "FIRS",
      title: "Federal Inland Revenue Service",
      status: "Active",
      validUntil: "2026",
      id: "M-FIRS-8820",
    },
    {
      agency: "CAC",
      title: "Corporate Affairs Commission",
      status: "Verified",
      validUntil: "Life",
      id: "RC-1928374",
    },
    {
      agency: "PENCOM",
      title: "National Pension Commission",
      status: "Active",
      validUntil: "2026",
      id: "P-COM-991",
    },
  ];

  return (
    <section
      className={`py-20 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#961515]">
              <Lock size={14} />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                Governance Hub
              </span>
            </div>
            <h2 className="font-jakarta text-4xl md:text-6xl text-[#1A1A1A] tracking-tighter leading-[1]">
              Compliance <br />{" "}
              <span className="text-[#961515]">Protocol.</span>
            </h2>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl border border-[#1A1A1A]/5 flex items-center gap-4">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full blur-[4px] opacity-60" />
            </div>
            <p className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-widest">
              Live Registry Status:{" "}
              <span className="text-green-600">Secure</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: STATUS CARDS */}
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-[#1A1A1A]/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck size={48} />
                  </div>
                  <p className="text-[#961515] font-black text-xl mb-1">
                    {cert.agency}
                  </p>
                  <h4 className="text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-tight mb-4">
                    {cert.title}
                  </h4>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-green-500" />{" "}
                      Status: {cert.status}
                    </p>
                    <p className="text-[9px] font-bold text-[#1A1A1A]/30 uppercase tracking-widest">
                      UID: {cert.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* LARGE AUDIT PANEL */}
            <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#961515]">
                    <Scale size={24} />
                  </div>
                  <h3 className="font-jakarta text-3xl tracking-tighter">
                    Audit & Assurance <br /> Standards
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our financial transparency protocols are aligned with IFRS
                    standards. Every fiscal quarter, Mokaz undergoes internal
                    audit reviews to ensure capital integrity and tax
                    efficiency.
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#961515] hover:text-white transition-colors">
                    Request Audit Summary <RefreshCw size={14} />
                  </button>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">
                    Compliance Checklist
                  </p>
                  {[
                    "AML/KYC Verified Transactions",
                    "Asset-Backed Guarantee Ratios",
                    "Quarterly FIRS Tax Remittance",
                    "Staff Pension Fund Compliance",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                    >
                      <FileCheck2 size={16} className="text-[#961515]" />
                      <span className="text-xs font-medium text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DECORATIVE BACKGROUND */}
              <Landmark className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-12" />
            </div>
          </div>

          {/* RIGHT: REGULATORY SIDEBAR */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#961515] p-8 rounded-[2.5rem] text-white">
              <AlertCircle size={32} className="mb-6 opacity-40" />
              <h3 className="font-jakarta text-2xl tracking-tighter mb-4">
                TCC Validation
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Verify your Tax Clearance Certificate status through our
                encrypted gateway. All validations are synced with federal
                databases in real-time.
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="CERTIFICATE NUMBER"
                  className="w-full bg-white/10 border border-white/20 py-4 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white placeholder:text-white/30 focus:bg-white/20 outline-none transition-all"
                />
                <button className="w-full py-4 bg-white text-[#961515] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all">
                  Instant Verification
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-[#1A1A1A]/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/30 mb-6">
                Security Partners
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-[#F5F2ED] rounded-xl flex items-center justify-center grayscale opacity-50 font-black text-[10px] text-[#1A1A1A]">
                  SECURED
                </div>
                <div className="h-12 bg-[#F5F2ED] rounded-xl flex items-center justify-center grayscale opacity-50 font-black text-[10px] text-[#1A1A1A]">
                  ENCRYPTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
