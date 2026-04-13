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
  { name: "Compliance", href: "#compliance" },
  { name: "Onboarding", href: "#onboarding" },
  { name: "Insights", href: "#insights" },
];

export default function MokazHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect 1: Handle Scroll (Constant Dependency Array)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Array stays size 0

  // Effect 2: Handle Body Scroll Lock (Constant Dependency Array)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]); // Array stays size 1

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#F5F2ED]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3"
            : "bg-transparent py-6"
        } ${inter.className}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LEFT: BACK BUTTON + BRAND TEXT */}
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

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 hover:text-[#961515] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#onboarding"
              className="bg-[#1A1A1A] text-white px-6 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-[#961515] transition-all flex items-center gap-2 rounded-sm"
            >
              <ShieldCheck size={14} /> Start Audit
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden relative z-[130] w-10 h-10 flex items-center justify-end text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY (SIDEBAR) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm z-[110] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#F5F2ED] shadow-2xl p-8 pt-24 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <p className="text-[#961515] text-[9px] font-black uppercase tracking-[0.3em] mb-6 px-2">
                  Portal Navigation
                </p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`${plusJakarta.className} text-2xl uppercase tracking-tighter text-[#1A1A1A] flex items-center justify-between py-4 px-2 border-b border-[#1A1A1A]/5 group active:text-[#961515]`}
                    >
                      {link.name}
                      <ArrowRight
                        size={20}
                        className="text-[#961515] opacity-50"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="p-6 bg-[#1A1A1A] text-white rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest text-[#961515] font-black mb-2">
                    Verification Protocol
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed mb-6">
                    Ready to initiate your institutional asset audit?
                  </p>
                  <Link
                    href="#onboarding"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter border-t border-white/10 pt-4 group text-white"
                  >
                    Initiate Portal{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-[#961515]"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
