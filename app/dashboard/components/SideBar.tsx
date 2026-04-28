"use client";

import React from "react";
import {
  Landmark,
  Building2,
  Briefcase,
  ShoppingBag,
  LogOut,
  Home,
  History,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Michroma, Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  activePanel: string;
  setActivePanel: (id: string) => void;
}

export default function MokazSidebar({
  activeTab,
  setActiveTab,
  activePanel,
  setActivePanel,
}: SidebarProps) {
  const router = useRouter();

  const sectors = [
    { id: "tax", label: "Tax Governance", icon: <Landmark size={18} /> },
    { id: "realestate", label: "Real Estate", icon: <Building2 size={18} /> },
    {
      id: "contracts",
      label: "General Contract",
      icon: <Briefcase size={18} />,
    },
    { id: "ecommerce", label: "E-Commerce", icon: <ShoppingBag size={18} /> },
  ];

  const subPanels = [
    { id: "home", label: "Home", icon: <Home size={14} /> },
    { id: "companies", label: "Companies", icon: <Building2 size={14} /> },
    { id: "audit", label: "Audit History", icon: <History size={14} /> },
    { id: "complaints", label: "Complaints", icon: <AlertCircle size={14} /> },
    { id: "tax-registry", label: "Tax Registry", icon: <FileText size={14} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("mokaz_session");
    router.push("/login");
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-80 bg-white border-r border-[#1A1A1A]/5 h-screen p-8 sticky top-0 z-50">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center rotate-2 shadow-lg shadow-[#961515]/10">
            <span
              className={`${michroma.className} text-[#961515] text-xs -rotate-2`}
            >
              M
            </span>
          </div>
          <div className="flex flex-col">
            <h2
              className={`${jakarta.className} text-xs uppercase font-black text-[#1A1A1A] leading-none`}
            >
              Mokaz <span className="text-[#961515]">HQ</span>
            </h2>
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#1A1A1A]/30 mt-1 font-black">
              Institutional Node
            </span>
          </div>
        </div>

        {/* Sectors */}
        <nav className="space-y-1 mb-8">
          <p className="text-[8px] font-black text-[#1A1A1A]/20 uppercase tracking-[0.3em] mb-4 ml-4">
            Primary Sectors
          </p>
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                activeTab === s.id
                  ? "bg-[#1A1A1A] text-white shadow-xl shadow-black/10"
                  : "text-[#1A1A1A]/40 hover:bg-[#1A1A1A]/5"
              }`}
            >
              <span className={activeTab === s.id ? "text-[#961515]" : ""}>
                {s.icon}
              </span>
              <span
                className={`${jakarta.className} text-[9px] uppercase tracking-widest`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Dynamic Panels */}
        <nav className="flex-grow pt-6 border-t border-[#1A1A1A]/5 space-y-1">
          <p className="text-[8px] font-black text-[#1A1A1A]/20 uppercase tracking-[0.3em] mb-4 ml-4">
            Management Panels
          </p>
          {subPanels.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePanel(p.id)}
              className={`w-full flex items-center gap-4 px-5 py-3 rounded-lg transition-all ${
                activePanel === p.id
                  ? "text-[#961515] bg-[#961515]/5"
                  : "text-[#1A1A1A]/60 hover:translate-x-1"
              }`}
            >
              {p.icon}
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {p.label}
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-5 py-4 mt-auto text-[#1A1A1A]/30 hover:text-[#961515] transition-all text-[9px] font-black uppercase tracking-[0.2em]"
        >
          <LogOut size={16} /> Terminate Session
        </button>
      </aside>

      {/* MOBILE RESPONSIVE UI */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] flex flex-col gap-3">
        <div className="bg-white/80 backdrop-blur-md border border-[#1A1A1A]/5 p-2 rounded-2xl flex gap-2 overflow-x-auto no-scrollbar shadow-xl">
          {subPanels.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePanel(p.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap text-[8px] font-black uppercase tracking-widest transition-all ${
                activePanel === p.id
                  ? "bg-[#961515] text-white"
                  : "bg-[#1A1A1A]/5 text-[#1A1A1A]/40"
              }`}
            >
              {p.icon} {p.label}
            </button>
          ))}
        </div>

        <div className="bg-[#1A1A1A] rounded-[2.5rem] p-3 flex items-center justify-around shadow-2xl border border-white/10">
          {sectors.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`p-4 rounded-2xl transition-all ${activeTab === s.id ? "bg-[#961515] text-white" : "text-white/20"}`}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
