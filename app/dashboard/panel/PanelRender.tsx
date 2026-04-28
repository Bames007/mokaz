"use client";

import React from "react";
import { HomePanel } from "./TaxPanels/HomePanel";
import { CompaniesPanel } from "./TaxPanels/CompaniesPanel";

interface Props {
  activePanel: string;
  companies: any[];
  onCreateApp: (data: any) => void;
}

export default function PanelRenderSystem({
  activePanel,
  companies,
  onCreateApp,
}: Props) {
  switch (activePanel) {
    case "home":
      return <HomePanel onCreateApp={onCreateApp} />;
    case "companies":
      return <CompaniesPanel />;
    default:
      return (
        <div className="p-20 text-center font-bold opacity-20">
          PANEL NOT INITIALIZED
        </div>
      );
  }
}
