"use client";

import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  History,
  AlertCircle,
  FileText,
  Download,
  CheckCircle2,
  Clock,
  Search,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });

export default function TaxPanelRenderer({
  activePanel,
}: {
  activePanel: string;
}) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* --- OVERVIEW PANEL --- */}
      {activePanel === "home" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#1A1A1A] text-white p-12 rounded-[3rem] flex flex-col justify-between h-80 shadow-2xl relative overflow-hidden">
              <h3 className="text-8xl font-black tracking-tighter leading-none italic opacity-10 absolute -right-4 -top-4">
                MOKAZ
              </h3>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-[#961515]">
                  System Integrity
                </p>
                <h4 className={`${jakarta.className} text-5xl leading-tight`}>
                  All filing protocols <br /> are currently{" "}
                  <span className="text-[#961515]">Active.</span>
                </h4>
              </div>
              <div className="flex gap-4 relative z-10">
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest uppercase">
                  Encryption: AES-256
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest uppercase">
                  Node: Abuja HQ
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border border-[#1A1A1A]/5 shadow-sm flex flex-col justify-center text-center">
              <div className="w-16 h-16 bg-[#F5F2ED] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#961515]">
                <ShieldCheck size={32} />
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]/40 mb-1">
                Audit Score
              </p>
              <h5 className="text-4xl font-black text-[#1A1A1A]">98.2%</h5>
              <p className="text-[8px] font-bold text-green-600 mt-2 tracking-tighter uppercase">
                Protocol Verified
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-[#1A1A1A]/5">
              <h6 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Recent Alerts
              </h6>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#F5F2ED] rounded-2xl">
                  <Clock size={16} className="text-[#961515]" />
                  <span className="text-[10px] font-bold">
                    Annual TCC Filing due in 4 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- COMPANIES PANEL --- */}
      {activePanel === "companies" && (
        <div className="bg-white rounded-[3rem] p-10 border border-[#1A1A1A]/5 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2
                className={`${jakarta.className} text-2xl uppercase tracking-tighter`}
              >
                Active Entities
              </h2>
              <p className="text-[10px] text-[#1A1A1A]/40 font-bold uppercase tracking-widest mt-1">
                Institutional Portfolio
              </p>
            </div>
            <span className="text-[9px] font-black bg-[#961515]/10 text-[#961515] px-4 py-2 rounded-full">
              3 REGISTERED
            </span>
          </div>
          <div className="space-y-4">
            {[
              "Mokaz Multitrade LTD",
              "Bassey Tech Ventures",
              "Musty Global Logistics",
            ].map((name, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-6 bg-[#F5F2ED]/50 rounded-2xl border border-transparent hover:border-[#1A1A1A]/10 hover:bg-white transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1A1A1A] block">
                      {name}
                    </span>
                    <span className="text-[8px] font-black text-[#1A1A1A]/30 tracking-widest uppercase">
                      Sector: Multitrade / Tech
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[#1A1A1A]/20 group-hover:text-[#961515] transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- AUDIT HISTORY PANEL --- */}
      {activePanel === "audit" && (
        <div className="bg-white rounded-[3rem] p-10 border border-[#1A1A1A]/5 shadow-sm">
          <h2
            className={`${jakarta.className} text-2xl uppercase tracking-tighter mb-8`}
          >
            Audit Log
          </h2>
          <div className="overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[9px] font-black text-[#1A1A1A]/30 uppercase tracking-[0.2em] border-b border-[#1A1A1A]/5">
                  <th className="pb-4">Reference</th>
                  <th className="pb-4">Operation</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {[
                  {
                    ref: "AUD-992-01",
                    op: "Yearly Filing Update",
                    status: "Success",
                    time: "28 Apr 2026",
                  },
                  {
                    ref: "AUD-881-04",
                    op: "New Entity Registration",
                    status: "Success",
                    time: "15 Mar 2026",
                  },
                  {
                    ref: "AUD-442-09",
                    op: "Key Exchange protocol",
                    status: "Success",
                    time: "10 Jan 2026",
                  },
                ].map((log, i) => (
                  <tr key={i} className="text-[11px] font-bold text-[#1A1A1A]">
                    <td className="py-5 font-mono">{log.ref}</td>
                    <td className="py-5">{log.op}</td>
                    <td className="py-5">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle2 size={12} />{" "}
                        <span className="text-[8px] font-black uppercase tracking-widest">
                          Verified
                        </span>
                      </div>
                    </td>
                    <td className="py-5 text-right text-[#1A1A1A]/40 uppercase text-[9px] tracking-widest">
                      {log.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- COMPLAINTS PANEL --- */}
      {activePanel === "complaints" && (
        <div className="flex flex-col items-center justify-center h-96 text-[#1A1A1A]/20 bg-white rounded-[3rem] border border-dashed border-[#1A1A1A]/10">
          <div className="w-20 h-20 bg-[#F5F2ED] rounded-full flex items-center justify-center mb-6">
            <AlertCircle size={32} className="opacity-20" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">
            Zero Active Complaints
          </p>
          <button className="px-6 py-3 bg-[#1A1A1A] text-white rounded-xl text-[9px] font-black uppercase tracking-widest mt-4 hover:bg-[#961515] transition-colors">
            File Report
          </button>
        </div>
      )}

      {/* --- TAX REGISTRY PANEL --- */}
      {activePanel === "tax-registry" && (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-[3rem] p-10 border border-[#1A1A1A]/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <h2
                className={`${jakarta.className} text-2xl uppercase tracking-tighter`}
              >
                Certificate Archive
              </h2>
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/30"
                />
                <input
                  type="text"
                  placeholder="SEARCH REGISTRY..."
                  className="bg-[#F5F2ED] text-[9px] font-bold px-12 py-4 rounded-xl outline-none w-full md:w-64 focus:ring-1 ring-[#961515]/20 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "2024 Tax Clearance Certificate", size: "2.4MB" },
                { name: "VAT Registration Confirmation", size: "1.1MB" },
                { name: "WHT Exemption Letter", size: "0.8MB" },
                { name: "Incorporation Protocol", size: "4.7MB" },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 bg-[#F5F2ED]/50 rounded-2xl border border-white hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-lg text-[#961515]">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#1A1A1A]">
                        {doc.name}
                      </p>
                      <p className="text-[8px] font-black text-[#1A1A1A]/30 uppercase tracking-widest">
                        {doc.size} • PDF
                      </p>
                    </div>
                  </div>
                  <button className="p-3 bg-white rounded-xl text-[#1A1A1A]/20 hover:text-[#961515] transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
