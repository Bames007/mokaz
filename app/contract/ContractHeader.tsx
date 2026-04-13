"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Menu, X, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { name: "Solutions", href: "#services" },
  { name: "Metrics", href: "#stats" },
  { name: "Compliance", href: "#compliance" },
  { name: "Protocol", href: "#protocol" },
  { name: "Archive", href: "#faq" },
];

export default function MokazHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3"
            : "bg-transparent py-6"
        } ${inter.className}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LEFT: UNIFIED BRAND BUTTON */}
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

          {/* DESKTOP NAV: Slightly Increased Size */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#961515] transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#protocol"
              className="bg-[#1A1A1A] text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#961515] transition-all flex items-center gap-2 shadow-lg active:scale-95"
            >
              <ShieldCheck size={14} className="text-[#961515]" />
              Secure Intake
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden w-11 h-11 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white shadow-xl active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-md z-[110] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] bg-[#F5F2ED] shadow-2xl p-8 pt-24 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#961515] mb-8 px-2 opacity-60">
                Main Registry
              </p>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`${plusJakarta.className} text-xl uppercase tracking-tighter text-[#1A1A1A] py-5 px-2 border-b border-[#1A1A1A]/5 flex justify-between items-center group active:bg-[#1A1A1A]/5`}
                  >
                    {link.name}
                    <ArrowRight
                      size={18}
                      className="text-[#961515] opacity-30"
                    />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <div className="p-8 bg-[#1A1A1A] text-white rounded-none">
                  <p className="text-[9px] uppercase tracking-widest text-[#961515] font-black mb-3">
                    System Access
                  </p>
                  <a
                    href="#protocol"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold uppercase tracking-tight flex items-center justify-between group"
                  >
                    Initialize Onboarding
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform text-[#961515]"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
