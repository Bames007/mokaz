"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import RealEstateHero from "./Hero";
import { ArrowUpRight, ShieldCheck, Landmark, Key, Home } from "lucide-react";
import MokazAbout from "./About";
import MokazProperties from "./MokazProperties";
import MokazScheduler from "./Bookings";
import MokazServices from "./MokazScheduler";
import MokazHeader from "./Header";
import MokazFooter from "./Footer";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RealEstatePage() {
  return (
    <main
      className={`bg-[#f6f4f1] min-h-screen ${inter.className} overflow-x-hidden`}
    >
      {/* 1. THE CINEMATIC HERO */}
      <MokazHeader />
      <RealEstateHero />
      <MokazAbout />
      <MokazServices />
      <MokazProperties />
      <MokazScheduler />
      <MokazFooter />
    </main>
  );
}
