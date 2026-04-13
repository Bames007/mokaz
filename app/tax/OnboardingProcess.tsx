"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  FileStack,
  UserCheck,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
  FileWarning,
  CheckCircle2,
  X,
  ShieldAlert,
  HelpCircle,
  Briefcase,
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

export default function OnboardingProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      title: "Digital Verification",
      phase: "Phase 01",
      desc: "Your journey begins with high-level KYC (Know Your Customer) screening. We use encrypted pipelines to verify corporate identity against the CAC database, ensuring a clean slate for tax processing.",
      icon: <UserCheck size={20} />,
      details: ["Corporate Identity Check", "AML Compliance", "TIN Validation"],
    },
    {
      title: "Document Audit",
      phase: "Phase 02",
      desc: "Our internal treasury team performs a 'Pre-Audit' on your financial statements. This minimizes the risk of FIRS rejection by identifying discrepancies in your VAT or PIT history before official filing.",
      icon: <FileStack size={20} />,
      details: [
        "Fiscal History Review",
        "Liability Assessment",
        "Gap Analysis",
      ],
    },
    {
      title: "Final Certification",
      phase: "Phase 03",
      desc: "Once audited, we facilitate the final remittance. Your Tax Clearance Certificate (TCC) is generated digitally, providing you with the sovereign clearance needed for government contracts and asset acquisition.",
      icon: <ClipboardCheck size={20} />,
      details: [
        "FIRS/LIRS Remittance",
        "Digital TCC Issuance",
        "Audit Trail Delivery",
      ],
    },
  ];

  return (
    <section
      id="onboarding"
      className={`py-24 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT: DETAILED PROCESS EXPLANATION */}
          <div className="lg:col-span-7">
            <div className="mb-16">
              <div className="flex items-center gap-2 text-[#961515] mb-4">
                <ShieldAlert size={14} />
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                  Operational Roadmap
                </span>
              </div>
              <h2 className="font-jakarta text-4xl md:text-6xl text-[#1A1A1A] tracking-tighter leading-[1] mb-6">
                Institutional <br />{" "}
                <span className="text-[#961515]">Onboarding.</span>
              </h2>
              <p className="text-[#1A1A1A]/60 max-w-xl text-lg leading-relaxed">
                We’ve digitized the path to compliance. Below is the
                step-by-step framework Mokaz uses to transition your entity from
                backlog to a fully certified status.
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="group relative flex gap-8">
                  {i !== steps.length - 1 && (
                    <div className="absolute left-[27px] top-14 w-px h-24 bg-[#1A1A1A]/10 group-hover:bg-[#961515]/30 transition-colors" />
                  )}

                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#1A1A1A] text-white flex flex-col items-center justify-center relative z-10">
                    {step.icon}
                  </div>

                  <div className="space-y-4 pb-8">
                    <div>
                      <span className="text-[10px] font-black text-[#961515] uppercase tracking-widest">
                        {step.phase}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#1A1A1A]/60 text-base leading-relaxed max-w-lg">
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.details.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-bold text-[#1A1A1A]/40 border border-[#1A1A1A]/10 px-3 py-1 rounded-full uppercase"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: DOCUMENT LIST & START ACTION */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-[#1A1A1A]/5 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <FileWarning size={20} className="text-[#961515]" />
                  <h4 className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-[0.2em]">
                    Mandatory Checklist
                  </h4>
                </div>

                <div className="space-y-3 mb-10">
                  {[
                    "Corporate Affairs Commission (CAC) Cert",
                    "Current Tax Identification Number (TIN)",
                    "Last 3 Years Financial Statements",
                    "Government Issued Director ID",
                    "Proof of Business Address",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-[#F5F2ED] rounded-xl border border-[#1A1A1A]/5 group hover:bg-white hover:border-[#961515]/20 transition-all"
                    >
                      <CheckCircle2 size={16} className="text-[#961515]" />
                      <span className="text-[11px] font-bold text-[#1A1A1A]/80 uppercase tracking-tight">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* THE START NOW BUTTON */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-6 bg-[#961515] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#1A1A1A] transition-all shadow-xl shadow-[#961515]/10"
                >
                  Start Your Review Now <ArrowRight size={18} />
                </button>

                <p className="mt-6 text-center text-[9px] font-bold text-[#1A1A1A]/30 uppercase tracking-[0.3em]">
                  Encrypted Onboarding Gateway
                </p>
              </div>

              {/* DIRECT ASSISTANCE BLOCK */}
              <div className="bg-[#1A1A1A] rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-[#961515]">
                    <HelpCircle size={18} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                      Technical Support
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Need immediate help?
                  </h4>
                  <p className="text-white/50 text-xs mb-6">
                    Our treasury consultants are available for complex
                    institutional filings.
                  </p>
                  <a
                    href="tel:+234800MOKAZ"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#961515] transition-colors">
                      <PhoneCall size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        Direct Support
                      </p>
                      <p className="text-lg font-bold">
                        +234 (0) 800 MOKAZ TAX
                      </p>
                    </div>
                  </a>
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-5">
                  <Briefcase size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* START NOW MODAL (Data Entry) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-[#1A1A1A]/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#F5F2ED] rounded-[3rem] p-8 md:p-14 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-[#1A1A1A]/40 hover:text-[#961515] transition-colors"
            >
              <X size={28} />
            </button>

            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-[#961515] mb-2">
                <UserCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Application Portal
                </span>
              </div>
              <h3 className="font-jakarta text-4xl text-[#1A1A1A] tracking-tighter">
                Initiate Audit.
              </h3>
              <p className="text-[#1A1A1A]/50 text-sm mt-2">
                Enter your entity details to begin the compliance screening.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="COMPANY/FULL NAME"
                  className="w-full bg-white border border-[#1A1A1A]/5 py-5 px-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] outline-none focus:border-[#961515] transition-all"
                />
                <input
                  type="email"
                  placeholder="OFFICIAL EMAIL"
                  className="w-full bg-white border border-[#1A1A1A]/5 py-5 px-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] outline-none focus:border-[#961515] transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full bg-white border border-[#1A1A1A]/5 py-5 px-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] outline-none focus:border-[#961515] transition-all"
                />
                <select className="w-full bg-white border border-[#1A1A1A]/5 py-5 px-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A]/40 outline-none focus:border-[#961515] appearance-none cursor-pointer">
                  <option>SERVICE TYPE: TCC APPLICATION</option>
                  <option>SERVICE TYPE: PROPERTY AUDIT</option>
                  <option>SERVICE TYPE: GENERAL CONTRACTING</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="BRIEF DESCRIPTION OF CURRENT TAX STATUS"
                className="w-full bg-white border border-[#1A1A1A]/5 py-5 px-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] outline-none focus:border-[#961515] transition-all resize-none"
              ></textarea>

              <div className="flex items-center gap-3 p-4 bg-[#961515]/5 rounded-2xl border border-[#961515]/10 mb-4">
                <ShieldAlert size={18} className="text-[#961515] shrink-0" />
                <p className="text-[10px] font-bold text-[#1A1A1A]/60">
                  By submitting, you authorize Mokaz LTD to perform a
                  preliminary check on your public TIN records.
                </p>
              </div>

              <button className="w-full py-6 bg-[#1A1A1A] text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#961515] transition-all shadow-lg">
                Submit for Verification
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
