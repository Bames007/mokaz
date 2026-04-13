"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const navLinks = [
  { name: "Tax Consultancy", href: "/tax" },
  { name: "Real Estate", href: "/realestate" },
  { name: "General Contracts", href: "/contracts" },
  { name: "Executive Board", href: "#board" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-[#f6f4f1]/90 backdrop-blur-md border-b border-[#e4ded2] py-3"
            : "bg-transparent py-5"
        } ${inter.className}`}
      >
        <div className="container mx-auto px-5 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-[130]"
            onClick={() => setIsOpen(false)}
          >
            <h1
              className={`${plusJakarta.className} text-xl md:text-2xl tracking-tighter text-[#1a1a1a]`}
            >
              MOKAZ<span className="text-[#f95c4b]">.</span>
            </h1>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#f95c4b] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1a1a1a] text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#f95c4b] transition-all"
            >
              Partner
            </Link>
          </div>

          {/* MOBILE TOGGLE (Optimized Touch Target) */}
          <button
            className="lg:hidden relative z-[130] w-10 h-10 flex items-center justify-end text-[#1a1a1a]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a1a]/40 backdrop-blur-sm z-[110] lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#f6f4f1] shadow-2xl p-6 pt-24 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-1">
                <p className="text-[#f95c4b] text-[9px] font-bold uppercase tracking-[0.3em] mb-6 px-2">
                  Navigate
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
                      className={`${plusJakarta.className} text-3xl sm:text-4xl uppercase tracking-tighter text-[#1a1a1a] flex items-center justify-between py-4 px-2 border-b border-[#e4ded2]/50 group active:text-[#f95c4b]`}
                    >
                      {link.name}
                      <ArrowRight
                        size={20}
                        className="text-[#f95c4b] opacity-50"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="p-4 bg-[#1a1a1a] text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#f95c4b] font-bold mb-2">
                    Ready to Scale?
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Join our ecosystem of institutional partners.
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tighter border-t border-zinc-800 pt-4 group"
                  >
                    Become a Partner{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
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
