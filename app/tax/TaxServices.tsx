"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  ShieldCheck,
  BarChart3,
  Building2,
  FileText,
  Globe2,
  Zap,
  ArrowUpRight,
} from "lucide-react";

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

export default function TaxServices() {
  const services = [
    {
      id: "01",
      title: "Tax Infrastructure",
      subtitle: "Regulatory Compliance",
      icon: <ShieldCheck className="text-[#961515]" size={24} />,
      description:
        "Complete digitization of the TCC (Tax Clearance Certificate) application pipeline. We handle automated PIT, VAT filing, and strategic FIRS mediation.",
      features: [
        "FIRS/LIRS Integration",
        "TCC Automated Renewals",
        "Tax Audit Defense",
      ],
    },
    {
      id: "02",
      title: "Real Estate Portfolio",
      subtitle: "Asset Management",
      icon: <Building2 className="text-[#961515]" size={24} />,
      description:
        "Institutional-grade property acquisition and management. We provide detailed ROI analysis, deed verification, and structured facility management.",
      features: [
        "Verified Asset Sourcing",
        "Facility Maintenance",
        "Title Documentation",
      ],
    },
    {
      id: "03",
      title: "General Contracts",
      subtitle: "Strategic Procurement",
      icon: <FileText className="text-[#961515]" size={24} />,
      description:
        "Execution of large-scale government and private sector contracts. We manage the supply chain and project milestones with military precision.",
      features: [
        "Vendor Management",
        "Milestone Tracking",
        "Quality Assurance",
      ],
    },
    {
      id: "04",
      title: "Audit & Assurance",
      subtitle: "Financial Governance",
      icon: <BarChart3 className="text-[#961515]" size={24} />,
      description:
        "Certified audited accounts and financial consulting. We ensure your institutional records are transparent and optimized for global investment.",
      features: ["IFRS Standards", "Risk Management", "Corporate Governance"],
    },
  ];

  return (
    <section
      id="services"
      className={`py-24 bg-[#F5F2ED] ${inter.className} ${jakarta.variable}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADING BLOCK */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-[#961515] mb-4">
              <Zap size={14} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-jakarta text-4xl md:text-7xl text-[#1A1A1A] leading-[1] tracking-tighter">
              Institutional <span className="text-[#961515]">Solutions.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1A1A1A]/50 text-sm max-w-xs leading-relaxed font-medium"
          >
            Integrating specialized multi-trade services into a singular,
            high-performance ecosystem for Mokaz Multitrade LTD.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10 rounded-[2.5rem] overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-14 flex flex-col justify-between group hover:bg-[#1A1A1A] transition-colors duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F2ED] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-jakarta text-4xl text-[#1A1A1A]/5 group-hover:text-white/10 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#961515]">
                    {service.subtitle}
                  </p>
                  <h3 className="font-jakarta text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-white transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 group-hover:text-white/60 text-sm leading-relaxed max-w-sm transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold border border-[#1A1A1A]/10 group-hover:border-white/20 px-3 py-1.5 rounded-full text-[#1A1A1A]/40 group-hover:text-white/40 uppercase tracking-wider transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#961515] transition-colors">
                  Learn More <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-[#1A1A1A]/5 rounded-3xl bg-white/50"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
              <Globe2 size={18} />
            </div>
            <p className="text-xs font-bold text-[#1A1A1A]/70 uppercase tracking-widest">
              Available for Cross-Border Institutional Partnerships 2026
            </p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#961515]" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
