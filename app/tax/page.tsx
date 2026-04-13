"use client";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import TaxHero from "./TaxHero";
import TaxAbout from "./TaxAbout";
import TaxServices from "./TaxServices";
import TaxCompliance from "./TaxCompliance";
import ProjectPortfolio from "./AssetTacking";
import TrustFAQ from "./FAQ";
import OnboardingProcess from "./OnboardingProcess";
import FiscalInsights from "./FiscalInsight";
import InstitutionalFootprint from "./Footprint";
import TaxBoard from "./TaxBoard";
import TaxContact from "./TaxContact";
import MokazFooter from "../realestate/Footer";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function TaxPage() {
  return (
    <main
      className={`bg-[#f6f4f1] min-h-screen ${inter.className} overflow-x-hidden`}
    >
      <TaxHero />
      <TaxAbout />
      <TaxServices />
      <TaxCompliance />
      <OnboardingProcess />
      <FiscalInsights />
      <ProjectPortfolio />
      <TaxBoard />
      <InstitutionalFootprint />
      <TrustFAQ />
      <TaxContact />
      <MokazFooter />
    </main>
  );
}
