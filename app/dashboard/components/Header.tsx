"use client";

import React from "react";
import { Bell, Search, ShieldCheck } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });

interface HeaderProps {
  user: { name: string; email: string } | null;
}

export default function MokazHeader({ user }: HeaderProps) {
  // Get first digit/letter of the name
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "M";

  return (
    <header className="h-20 lg:h-24 bg-[#F5F2ED]/80 backdrop-blur-md border-b border-[#1A1A1A]/5 px-4 lg:px-10 flex items-center justify-between sticky top-0 z-40">
      {/* LEFT: SEARCH (Hidden on mobile, shows on LG) */}
      <div className="hidden lg:flex items-center bg-white border border-[#1A1A1A]/5 px-6 py-3 rounded-2xl w-full max-w-md shadow-sm">
        <Search size={16} className="text-[#1A1A1A]/20" />
        <input
          type="text"
          placeholder="QUERY REGISTRY DATA..."
          className="bg-transparent border-none outline-none ml-4 text-[10px] font-black tracking-widest w-full text-[#1A1A1A] placeholder:text-[#1A1A1A]/20"
        />
      </div>

      {/* LEFT: MOBILE LOGO INDICATOR (Only shows on mobile) */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
          <span className="text-[#961515] text-[10px] font-black">M</span>
        </div>
      </div>

      {/* RIGHT: USER OPTIONS */}
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Search Icon for Mobile (since bar is hidden) */}
        <button className="lg:hidden p-2 text-[#1A1A1A]/20">
          <Search size={20} />
        </button>

        <button className="relative text-[#1A1A1A]/20 hover:text-[#961515] transition-colors p-2">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#961515] rounded-full border-2 border-[#F5F2ED]" />
        </button>

        <div className="flex items-center gap-3 lg:gap-5 lg:pl-8 lg:border-l lg:border-[#1A1A1A]/10">
          {/* USER TEXT: Hidden on mobile to prevent clutter */}
          <div className="hidden sm:block text-right">
            <p
              className={`${jakarta.className} text-[11px] text-[#1A1A1A] uppercase tracking-tighter`}
            >
              {user?.name || "Unauthorized"}
            </p>
            <div className="flex items-center justify-end gap-1.5">
              <ShieldCheck size={10} className="text-[#961515]" />
              <p className="text-[8px] font-black text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
                Registry Admin
              </p>
            </div>
          </div>

          {/* AVATAR: Slightly smaller on mobile */}
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1A1A1A] rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl shadow-black/10 border-2 border-white group cursor-pointer hover:border-[#961515] transition-all">
            <span
              className={`${jakarta.className} text-[#961515] text-base lg:text-lg`}
            >
              {userInitial}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
