"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Plus, Minus, Send, MapPin, Mail, Phone } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

const faqs = [
  {
    q: "What is the standard tender verification period?",
    a: "Our institutional intake undergoes a 72-hour internal audit before being moved to the strategic mobilization phase. This ensures all sovereign compliance benchmarks are met.",
  },
  {
    q: "Do you handle cross-border maritime logistics?",
    a: "Yes. Mokaz Group maintains Tier-1 access to major industrial hubs across four continents, utilizing Incoterms 2026 standards for all global asset transfers.",
  },
  {
    q: "What documentation is required for project initiation?",
    a: "Initial engagement requires a formal Letter of Intent (LOI) and corporate/state credentials. All data is processed via our secure MKZ-Audit protocols.",
  },
];

export default function FAQContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`bg-white py-24 lg:py-40 px-6 border-t border-[#1A1A1A] ${inter.className}`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* LEFT: THE INQUIRY TERMINAL (CONTACT) */}
          <div className="lg:col-span-5">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#961515] mb-6">
              Engagement Office
            </p>
            <h2
              className={`${jakarta.className} text-4xl lg:text-5xl tracking-tighter uppercase text-[#1A1A1A] mb-12`}
            >
              Direct <br /> Inquiry.
            </h2>

            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-6 items-start">
                  <MapPin size={18} className="text-[#961515] mt-1" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] mb-2">
                      Abuja Headquarters
                    </p>
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed font-medium">
                      Ahmadu Bello Way, Wuse II, <br /> Abuja, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <Mail size={18} className="text-[#961515] mt-1" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] mb-2">
                      Strategic Sourcing
                    </p>
                    <p className="text-sm text-[#1A1A1A]/60 font-medium">
                      contracts@mokazgroup.com
                    </p>
                  </div>
                </div>
              </div>

              {/* MINI CTA BOX */}
              <div className="p-8 bg-[#F9F8F6] border-l-4 border-[#1A1A1A] mt-12">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">
                  Urgent Procurement?
                </p>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#961515] hover:text-[#1A1A1A] transition-colors">
                  Call Logistics Command <Phone size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: THE INSTITUTIONAL RECORD (FAQ) */}
          <div className="lg:col-span-7">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]/40 mb-6">
              Information Archive
            </p>
            <div className="border-t border-[#1A1A1A]">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#1A1A1A]/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 flex justify-between items-center text-left group"
                  >
                    <span className="text-lg lg:text-xl font-bold uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#961515] transition-colors pr-8">
                      {faq.q}
                    </span>
                    <div className="text-[#1A1A1A]/20 group-hover:text-[#1A1A1A]">
                      {openIndex === i ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 text-[15px] lg:text-[17px] leading-relaxed text-[#1A1A1A]/70 max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* SYSTEM FOOTER */}
            <div className="mt-16 flex items-center justify-between">
              <div className="text-[9px] font-mono text-[#1A1A1A]/30 uppercase tracking-[0.2em]">
                Registry-Entry: MKZ-LOG-099
              </div>
              <div className="h-px flex-1 mx-8 bg-[#1A1A1A]/10 hidden md:block" />
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] flex items-center gap-3">
                Download PDF Dossier <Send size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
