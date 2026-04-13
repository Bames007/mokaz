"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  FileText,
  Download,
  Send,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function PartnerSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      className={`py-20 md:py-32 bg-[#1a1a1a] text-[#f6f4f1] overflow-hidden ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: Downloads & Info */}
          <div className="lg:col-span-5">
            <h2
              className={`${plusJakarta.className} text-[#f95c4b] text-xs font-bold tracking-[0.5em] uppercase mb-6`}
            >
              Collaborate With Us
            </h2>
            <h3
              className={`${plusJakarta.className} text-5xl md:text-7xl leading-tight mb-8 tracking-tighter`}
            >
              STRATEGIC <br /> ALLIANCE.
            </h3>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Join our ecosystem of investors, developers, and corporate
              entities. Access institutional-grade opportunities in tax strategy
              and real estate.
            </p>

            {/* Document Grid */}
            <div className="space-y-4">
              {[
                { title: "Company Profile 2026", size: "4.2 MB", type: "PDF" },
                { title: "Partnership Brochure", size: "2.8 MB", type: "PDF" },
                { title: "Service Catalogue", size: "1.5 MB", type: "PDF" },
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#f95c4b] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="text-[#f95c4b]" size={24} />
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide">
                        {doc.title}
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <Download
                    size={18}
                    className="text-zinc-500 group-hover:text-[#f95c4b] transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Interest Form */}
          <div className="lg:col-span-7 bg-[#f6f4f1] p-8 md:p-12 text-[#1a1a1a]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h4
                  className={`${plusJakarta.className} text-3xl mb-2 uppercase`}
                >
                  Interest Received
                </h4>
                <p className="text-zinc-500">
                  A partnership lead will contact you within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:border-[#f95c4b] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Company
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:border-[#f95c4b] outline-none transition-colors"
                      placeholder="Agency Ltd"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Interested Sector
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:border-[#f95c4b] outline-none transition-colors appearance-none cursor-pointer">
                    <option>Tax Consultancy Partnership</option>
                    <option>Real Estate Investment</option>
                    <option>General Contracts / Supply</option>
                    <option>Other Strategic Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Message / Intent
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:border-[#f95c4b] outline-none transition-colors resize-none"
                    placeholder="How can we build together?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-[#1a1a1a] text-[#f6f4f1] py-5 font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#f95c4b] transition-all"
                >
                  Submit Interest{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
