"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const stats = [
  {
    label: "Assets Managed",
    value: 250,
    suffix: "M+",
    sub: "Verified Portfolios",
  },
  {
    label: "Tax Compliance",
    value: 99.8,
    suffix: "%",
    sub: "Audited Excellence",
  },
  { label: "Contracts", value: 150, suffix: "+", sub: "Federal & State" },
  { label: "Strategy", value: 25, suffix: "+", sub: "Years Experience" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Number(latest.toFixed(1))),
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function MetricsCounter() {
  return (
    <section className={`py-12 md:py-24 bg-[#f6f4f1] ${inter.className}`}>
      <div className="container mx-auto px-6">
        {/* HEADER AREA */}
        <div className="flex items-center gap-4 mb-12 opacity-50">
          <div className="h-px flex-1 bg-[#1a1a1a]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] whitespace-nowrap">
            Performance Index
          </span>
          <div className="h-px w-12 bg-[#1a1a1a]" />
        </div>

        {/* METRICS GRID - Optimized for Mobile Scroll & iPad Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x no-scrollbar">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] md:min-w-0 flex-shrink-0 snap-center group"
            >
              <div className="bg-white p-8 md:p-10 border border-[#e4ded2] relative overflow-hidden transition-all duration-500 hover:border-[#f95c4b] hover:shadow-xl hover:shadow-[#f95c4b]/5">
                {/* Micro-Interaction Background Element */}
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-[#1a1a1a]/[0.02] select-none group-hover:text-[#f95c4b]/5 transition-colors">
                  0{i + 1}
                </div>

                <h4
                  className={`${plusJakarta.className} text-5xl md:text-6xl text-[#1a1a1a] tracking-tightest mb-4 flex items-baseline gap-1 group-hover:translate-x-1 transition-transform`}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h4>

                <div className="space-y-1 relative z-10">
                  <p className="text-[#f95c4b] text-[10px] font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                  <p className="text-zinc-400 text-[9px] uppercase tracking-widest leading-none">
                    {stat.sub}
                  </p>
                </div>

                {/* Animated Bottom Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f95c4b] origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
