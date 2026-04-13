"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter, Syne } from "next/font/google";
import {
  Calendar,
  Clock,
  Globe,
  CheckCircle2,
  ArrowRight,
  User,
  Building2,
  Mail,
} from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
});

export default function MokazScheduler() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  const dates = [
    { day: "Mon", date: "14" },
    { day: "Tue", date: "15" },
    { day: "Wed", date: "16" },
    { day: "Thu", date: "17" },
    { day: "Fri", date: "18" },
  ];

  const times = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  return (
    <section
      className={`py-12 md:py-32 bg-[#F5F2ED] ${inter.className} ${jakarta.variable} ${syne.variable}`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: INFO SECTION (Stacks on mobile) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#961515]" />
                <span className="text-[#961515] text-[10px] font-black uppercase tracking-[0.4em]">
                  Consultation
                </span>
              </div>
              <h2 className="font-jakarta text-3xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight mb-6">
                Secure Your <br />
                <span className="text-[#1A1A1A]/30">Private Briefing.</span>
              </h2>
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed max-w-sm">
                Connect with our capital markets team to discuss institutional
                opportunities and portfolio tailoring.
              </p>
            </motion.div>

            <div className="space-y-3">
              {[
                { icon: <Globe size={14} />, text: "All Global Timezones" },
                {
                  icon: <CheckCircle2 size={14} />,
                  text: "Senior Partner Access",
                },
                {
                  icon: <Clock size={14} />,
                  text: "30-Min Strategic Overview",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1A1A1A]/5 bg-white/40 backdrop-blur-sm"
                >
                  <div className="text-[#961515]">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/70">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SCHEDULER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#1A1A1A]/5 relative overflow-hidden"
          >
            <div className="space-y-8 md:space-y-10 relative z-10">
              {/* DATE PICKER (Responsive Grid) */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] font-bold">
                    Select Date
                  </h4>
                  <span className="text-[9px] text-[#1A1A1A]/40 font-bold uppercase tracking-widest">
                    April 2026
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2 md:gap-3">
                  {dates.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(i)}
                      className={`flex flex-col items-center py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 ${
                        selectedDate === i
                          ? "bg-[#1A1A1A] text-white shadow-lg scale-105"
                          : "bg-[#F5F2ED] text-[#1A1A1A]/40 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A]"
                      }`}
                    >
                      <span className="text-[8px] md:text-[9px] uppercase font-black mb-1">
                        {item.day}
                      </span>
                      <span className="text-base md:text-lg font-bold tracking-tighter">
                        {item.date}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* TIME PICKER (2 cols mobile, 4 cols desktop) */}
              <div>
                <h4 className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] font-bold mb-6">
                  Select Slot
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 rounded-xl text-[9px] md:text-[10px] font-bold border transition-all duration-300 ${
                        selectedTime === time
                          ? "border-[#961515] bg-[#961515]/5 text-[#961515]"
                          : "border-[#1A1A1A]/5 bg-[#F5F2ED] text-[#1A1A1A]/60 hover:border-[#1A1A1A]/20"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* IMPROVED INPUTS (Full visibility) */}
              <div className="space-y-4">
                <h4 className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] font-bold mb-2">
                  Identification
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Building2
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/30 group-focus-within:text-[#961515] transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="ORGANIZATION"
                      className="w-full bg-[#F5F2ED] border border-transparent focus:border-[#1A1A1A]/10 rounded-xl py-4 pl-11 pr-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:bg-white focus:ring-1 focus:ring-[#961515]/20 outline-none transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <Mail
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A1A1A]/30 group-focus-within:text-[#961515] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="OFFICIAL EMAIL"
                      className="w-full bg-[#F5F2ED] border border-transparent focus:border-[#1A1A1A]/10 rounded-xl py-4 pl-11 pr-4 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:bg-white focus:ring-1 focus:ring-[#961515]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1A1A1A] text-white py-4 md:py-5 rounded-2xl flex items-center justify-center gap-4 transition-all group shadow-xl shadow-black/10"
              >
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                  Confirm Schedule
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#961515] group-hover:translate-x-2 transition-transform duration-300"
                />
              </motion.button>

              <p className="text-center text-[8px] md:text-[9px] text-[#1A1A1A]/30 uppercase font-black tracking-widest leading-relaxed">
                By confirming, you agree to the <br className="md:hidden" />{" "}
                Mokaz private data protocol.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
