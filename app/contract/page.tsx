"use client";

import { Inter } from "next/font/google";
import ContractsHero from "./ContractHero";
import ContractsAbout from "./ContractAbout";
import ContractServices from "./ContractServices";
import MeetOurBoard from "../home/MeetOurBoard";
import ContractStats from "./ContractStats";
import ContractProtocol from "./ContractProtocol";
import { useState } from "react";
import EngagementTerminal from "./TerminalProps";
import GlobalNexus from "./GlobalNexus";
import ComplianceDossier from "./Compliance";
import FAQContact from "./ContractFAQ";
import MokazFooter from "../realestate/Footer";
import MokazHeader from "./ContractHeader";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RealEstatePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={`bg-[#f6f4f1] min-h-screen ${inter.className} overflow-x-hidden scroll-smooth`}
      style={{ scrollPaddingTop: "80px" }} // Prevents header from covering section titles
    >
      <MokazHeader />

      <div id="home">
        <ContractsHero />
      </div>
      <ContractsAbout />

      {/* These IDs must match the header hrefs exactly */}
      <div id="services">
        <ContractServices />
      </div>
      <div id="stats">
        <ContractStats />
      </div>
      <div id="compliance">
        <ComplianceDossier />
      </div>
      <div id="protocol">
        <ContractProtocol onOpenTerminal={() => setIsOpen(true)} />
      </div>

      <EngagementTerminal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <GlobalNexus />
      <MeetOurBoard />

      <div id="faq">
        <FAQContact />
      </div>

      <MokazFooter />
    </main>
  );
}
