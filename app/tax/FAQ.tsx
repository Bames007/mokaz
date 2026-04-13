"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Plus, Minus, MessageSquare } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-jakarta",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export default function TrustFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the typical lead time for TCC processing?",
      a: "For Mokaz-managed accounts, TCC verification usually takes 7-14 business days, depending on the status of your PIT/VAT remittances and FIRS portal updates.",
    },
    {
      q: "Are your Real Estate assets internally audited?",
      a: "Yes. Every asset in our portfolio undergoes a rigorous title verification and structural audit before being listed for institutional investment.",
    },
    {
      q: "How does Mokaz handle multi-state tax compliance?",
      a: "We operate a centralized tax engine that reconciles filings across FIRS and various State Internal Revenue Services (LIRS, etc.) to ensure zero overlap or penalties.",
    },
  ];

  return (
    <section
      className={`py-20 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#961515] mb-4">
            <MessageSquare size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              Concierge Desk
            </span>
          </div>
          <h2 className="font-jakarta text-4xl text-[#1A1A1A] tracking-tighter">
            Knowledge <span className="text-[#961515]">Base.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#1A1A1A]/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-[#1A1A1A] tracking-tight">
                  {faq.q}
                </span>
                <div className="text-[#961515]">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 text-sm text-[#1A1A1A]/60 leading-relaxed border-t border-[#F5F2ED] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#1A1A1A] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-medium text-sm">
            Have a more complex institutional inquiry?
          </p>
          <button className="bg-[#961515] text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
            Speak to a Consultant
          </button>
        </div>
      </div>
    </section>
  );
}
