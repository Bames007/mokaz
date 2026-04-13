"use client";

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import TaxHero from "./TaxHero";
import TaxAbout from "./TaxAbout";
import TaxServices from "./TaxServices";
import TaxCompliance from "./TaxCompliance";
import OnboardingProcess from "./OnboardingProcess";
import FiscalInsights from "./FiscalInsight";
import ProjectPortfolio from "./AssetTacking";
import TaxBoard from "./TaxBoard";
import InstitutionalFootprint from "./Footprint";
import TrustFAQ from "./FAQ";
import TaxContact from "./TaxContact";
import MokazFooter from "../realestate/Footer";
import TaxHeader from "./TaxHeader";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function TaxPage() {
  return (
    <main
      className={`bg-[#f6f4f1] min-h-screen ${inter.className} overflow-x-hidden`}
    >
      {/* Navigation */}
      <TaxHeader />

      {/* Hero & Identity */}
      <div id="home">
        <TaxHero />
      </div>
      <div id="about">
        <TaxAbout />
      </div>

      {/* Core Solutions */}
      <div id="services">
        <TaxServices />
      </div>

      {/* Governance & Compliance */}
      <div id="compliance">
        <TaxCompliance />
      </div>

      {/* The Protocol / Process */}
      <div id="onboarding">
        <OnboardingProcess />
      </div>

      {/* Intelligence & Evidence */}
      <div id="insights">
        <FiscalInsights />
      </div>
      <div id="portfolio">
        <ProjectPortfolio />
      </div>

      {/* Leadership & Network */}
      <TaxBoard />
      <InstitutionalFootprint />

      {/* Final Conversion & Support */}
      <TrustFAQ />
      <TaxContact />

      {/* Footer */}
      <MokazFooter />
    </main>
  );
}
