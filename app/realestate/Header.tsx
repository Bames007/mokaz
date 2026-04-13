"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowLeft, Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

export default function MokazHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Book", href: "#book" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] bg-[#F5F2ED]/90 backdrop-blur-md border-b border-[#1A1A1A]/5 ${inter.className}`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT: BACK BUTTON */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#1A1A1A]/40 hover:text-[#961515] transition-colors flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-[#961515]/30 transition-all bg-white/50">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </div>
          <span className="text-[10px] uppercase font-black tracking-[0.2em] hidden lg:block">
            Mokaz Group
          </span>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase font-black tracking-[0.2em] text-[#1A1A1A]/60 hover:text-[#961515] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT: LOGO & MOBILE TOGGLE */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`${jakarta.className} text-xl tracking-tighter text-[#1A1A1A]`}
          >
            MOKAZ<span className="text-[#961515]">.</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-[#F5F2ED] border-b border-[#1A1A1A]/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase font-black tracking-[0.4em] text-[#1A1A1A] hover:text-[#961515] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
