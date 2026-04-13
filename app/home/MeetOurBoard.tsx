"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { BarChart3, Mail, ArrowUpRight, X } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const LinkedInIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const boardMembers = [
  {
    id: 1,
    name: "Dr. Aliyu Musa",
    role: "Chairman",
    expertise: "Fiscal Policy",
    bio: "Former FIRS director with 25+ years in corporate restructuring.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Jenkins, MBA",
    role: "Director",
    expertise: "Real Estate",
    bio: "Pioneered luxury portfolio expansion across Abuja and Dubai.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Engr. Ken Adams",
    role: "COO",
    expertise: "Operations",
    bio: "Expert in digitizing milestone tracking for general contracts.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Ibrahim Bello",
    role: "Director",
    expertise: "Audit & Risk",
    bio: "Ensuring all TCC processes exceed global regulatory standards.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function MeetOurBoard() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section
      className={`py-12 md:py-32 bg-[#f6f4f1] relative overflow-hidden ${inter.className}`}
    >
      {/* Dynamic Watermark */}
      <div className="absolute top-0 right-[-10%] opacity-[0.03] pointer-events-none select-none">
        <h2
          className={`${plusJakarta.className} text-[40vw] lg:text-[20vw] leading-none uppercase`}
        >
          Board
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16 md:mb-24">
          <div className="w-full md:w-2/3">
            <span className="inline-block px-3 py-1 rounded-full border border-[#f95c4b] text-[#f95c4b] text-[9px] font-bold uppercase tracking-[0.3em] mb-4">
              Mokaz Leadership
            </span>
            <h3
              className={`${plusJakarta.className} text-4xl sm:text-6xl md:text-8xl leading-[0.9] text-[#1a1a1a] tracking-tightest`}
            >
              THE MINDS <br />
              <span className="opacity-20 uppercase tracking-tighter">
                OF STRATEGY.
              </span>
            </h3>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {boardMembers.map((member, i) => {
            const isOpened = activeCard === member.id;

            return (
              <motion.div
                key={member.id}
                onClick={() => toggleCard(member.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative h-[480px] md:h-[550px] cursor-pointer overflow-hidden bg-white border ${
                  isOpened ? "border-[#f95c4b]" : "border-[#e4ded2]"
                } transition-colors duration-500 ${i % 2 !== 0 ? "lg:mt-12" : ""}`}
              >
                {/* Image Base - Grayscale REMOVED on mobile/tablet via lg: utility */}
                <div
                  className={`absolute inset-0 transition-all duration-700 lg:grayscale group-hover:grayscale-0 ${isOpened ? "grayscale-0 scale-105" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent opacity-90 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Visible Info (Bottom) */}
                <div
                  className={`absolute bottom-0 left-0 w-full p-8 z-20 transition-all duration-500 ease-in-out ${isOpened ? "translate-y-12 opacity-0" : "translate-y-0 opacity-100"}`}
                >
                  <p className="text-[#f95c4b] text-[9px] font-bold uppercase tracking-[0.3em] mb-2">
                    {member.role}
                  </p>
                  <h4
                    className={`${plusJakarta.className} text-xl md:text-2xl text-white leading-none uppercase tracking-tighter`}
                  >
                    {member.name}
                  </h4>
                  <div className="mt-4 flex items-center gap-2 text-white/50 text-[10px] uppercase font-bold tracking-widest">
                    <span>Explore Bio</span>
                    <ArrowUpRight size={12} className="text-[#f95c4b]" />
                  </div>
                </div>

                {/* Tapped/Active Bio Overlay */}
                <motion.div
                  initial={false}
                  animate={{ y: isOpened ? 0 : "101%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[#f95c4b] p-8 md:p-10 flex flex-col justify-between z-30 shadow-2xl"
                >
                  <div className="relative">
                    <div className="flex justify-between items-start mb-10">
                      <BarChart3 className="text-white" size={28} />
                      <div className="bg-white/10 p-2 rounded-full text-white">
                        <X size={16} />
                      </div>
                    </div>

                    <h4
                      className={`${plusJakarta.className} text-3xl text-white leading-[0.9] uppercase mb-4 tracking-tighter`}
                    >
                      {member.name}
                    </h4>
                    <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-4">
                      Expertise: {member.expertise}
                    </p>
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="text-white transition-transform hover:scale-110"
                    >
                      <LinkedInIcon size={24} />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="text-white transition-transform hover:scale-110"
                    >
                      <Mail size={24} />
                    </a>
                    <span className="ml-auto text-white/40 text-[9px] font-bold uppercase tracking-widest">
                      Close Detail
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
