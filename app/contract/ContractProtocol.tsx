"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Define the interface for the trigger props
interface ProtocolProps {
  onOpenTerminal: () => void;
}

const stages = [
  {
    id: "01",
    title: "Institutional Intake",
    desc: "Formal submission of procurement requirements and tender specifications.",
  },
  {
    id: "02",
    title: "Validation & Audit",
    desc: "Rigorous verification of supply corridors and compliance standards.",
  },
  {
    id: "03",
    title: "Strategic Mobilization",
    desc: "Coordination of physical assets and logistical deployment.",
  },
  {
    id: "04",
    title: "Final Handover",
    desc: "Completion of the contract cycle with full documentation and audit logs.",
  },
];

export default function ContractProtocol({ onOpenTerminal }: ProtocolProps) {
  return (
    <section
      className={`bg-[#F9F8F6] py-24 lg:py-40 px-6 border-b border-[#1A1A1A] ${inter.className}`}
    >
      <div className="container mx-auto">
        {/* HEADER: High Contrast */}
        <div className="mb-20">
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#961515] mb-4">
            Standard Operating Procedure
          </p>
          <h2
            className={`${jakarta.className} text-4xl lg:text-7xl tracking-tighter uppercase text-[#1A1A1A] leading-[0.85]`}
          >
            The Protocol.
          </h2>
        </div>

        {/* STAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[12px] font-mono font-bold text-[#961515]">
                  [{stage.id}]
                </span>
                <div className="flex-1 h-px bg-[#1A1A1A]/20 hidden lg:block" />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-4 group-hover:text-[#961515] transition-colors">
                {stage.title}
              </h3>

              {/* BODY TEXT: Increased contrast to 80% opacity for legibility */}
              <p className="text-[15px] text-[#1A1A1A]/80 leading-relaxed font-medium mb-8">
                {stage.desc}
              </p>

              {/* ACTION TRIGGER: Only on the final stage or as a general footer */}
              {i === stages.length - 1 && (
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={onOpenTerminal}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1"
                >
                  Start Intake <ArrowRight size={12} />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* OPTIONAL: LARGE CENTERED TRIGGER FOR MOBILE */}
        <div className="mt-20 lg:hidden">
          <button
            onClick={onOpenTerminal}
            className="w-full bg-[#1A1A1A] text-white py-6 text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4"
          >
            Initialize Engagement <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
