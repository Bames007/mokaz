"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  History,
  Search,
  Filter,
  UserCircle,
  Terminal,
  HardDrive,
  ShieldCheck,
  ExternalLink,
  Hash,
  Calendar,
  Clock,
  ArrowDown,
} from "lucide-react";
import { Company } from "../../companyData";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface AuditLog {
  id: string;
  action: string;
  actor: string;
  timestamp: string;
  details: string;
  type: "system" | "user" | "security";
}

export const AuditLogsPanel = ({ company }: { company: Company }) => {
  const [logSearch, setLogSearch] = useState("");

  // Simulated Audit Logs based on Company History
  const logs: AuditLog[] = [
    {
      id: "LOG-9821-X",
      action: "Stage 02 Cleared",
      actor: "Auditor Smith",
      timestamp: "2026-04-20 14:30",
      details: "All bank statements verified against tax computation.",
      type: "user",
    },
    {
      id: "LOG-9744-S",
      action: "Document Uploaded",
      actor: "Taxpayer Portal",
      timestamp: "2026-04-18 09:12",
      details: "FY 2025 Audited Financials.pdf attached to Stage 02.",
      type: "system",
    },
    {
      id: "LOG-9612-K",
      action: "Security Challenge",
      actor: "System Firewall",
      timestamp: "2026-04-15 22:05",
      details: "IP verification successful for external document fetch.",
      type: "security",
    },
    {
      id: "LOG-9400-A",
      action: "Entity Initialized",
      actor: "System Administrator",
      timestamp: company.createdAt,
      details: "Initial filing received and tax record created.",
      type: "system",
    },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.action.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.id.toLowerCase().includes(logSearch.toLowerCase()),
  );

  return (
    <div className={`${inter.className} animate-in fade-in duration-500`}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h3
            className={`${plusJakarta.className} text-xl text-slate-950 uppercase tracking-tight flex items-center gap-3`}
          >
            <History className="text-emerald-600" size={24} /> Audit Trail &
            System Logs
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Secure Ledger for {company.name} // {company.id}
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
              size={14}
            />
            <input
              type="text"
              placeholder="Filter logs..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-xs outline-none focus:ring-2 focus:ring-slate-950 transition-all"
              onChange={(e) => setLogSearch(e.target.value)}
            />
          </div>
          <button className="bg-white border border-slate-200 p-2 rounded-lg text-slate-500 hover:text-slate-950">
            <ArrowDown size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Summary Stats */}
        <div className="space-y-4">
          <div className="bg-slate-950 rounded-2xl p-6 text-white">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">
              Integrity Hash
            </p>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-between mb-6">
              <code className="text-[10px] text-emerald-400">
                SHA-256: 8f2e...4a12
              </code>
              <ShieldCheck size={14} className="text-emerald-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Total Events</span>
                <span className="font-bold">{logs.length} Entries</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Last Verified</span>
                <span className="font-bold">2 mins ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-900 uppercase mb-4 flex items-center gap-2">
              <Terminal size={14} /> System Activity
            </h4>
            <div className="space-y-3">
              {[
                {
                  label: "Data Integrity",
                  value: "100%",
                  color: "text-emerald-500",
                },
                {
                  label: "Document Sync",
                  value: "Stable",
                  color: "text-blue-500",
                },
                {
                  label: "Access Control",
                  value: "Verified",
                  color: "text-slate-900",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-xs"
                >
                  <span className="text-slate-400 font-medium">
                    {stat.label}
                  </span>
                  <span className={`font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Scrollable Logs */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase">
                Event Timeline
              </span>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">
                  Real-time monitoring active
                </span>
              </div>
            </div>

            <div className="max-h-[500px] overflow-y-auto divide-y divide-slate-50">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-6 hover:bg-slate-50/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          log.type === "security"
                            ? "bg-red-50 text-red-600"
                            : log.type === "user"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {log.type === "security" ? (
                          <ShieldCheck size={20} />
                        ) : log.type === "user" ? (
                          <UserCircle size={20} />
                        ) : (
                          <HardDrive size={20} />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-bold text-slate-950 uppercase">
                            {log.action}
                          </p>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                            {log.id}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                          {log.details}
                        </p>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between gap-1 text-[10px] font-bold uppercase tracking-tight">
                      <div className="flex items-center gap-1 text-slate-950">
                        <Clock size={12} className="text-slate-300" />{" "}
                        {log.timestamp.split(" ")[1]}
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Calendar size={12} className="text-slate-300" />{" "}
                        {log.timestamp.split(" ")[0]}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white" />
                      <span className="text-[10px] font-bold text-slate-400">
                        Initiated by {log.actor}
                      </span>
                    </div>
                    <button className="text-[10px] font-bold text-emerald-600 uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Payload <ExternalLink size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-950 transition-colors">
                Load Archive Records (2024 - 2025)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
