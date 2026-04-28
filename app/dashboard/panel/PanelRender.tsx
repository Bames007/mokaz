"use client";

import React, { useState } from "react";
import { HomePanel } from "./TaxPanels/HomePanel";
import { CompaniesPanel } from "./TaxPanels/CompaniesPanel";
import { AuditLogsPanel } from "./TaxPanels/AuditLogPanel";

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
  // We need a shared state to know which company to show logs for
  // Defaulting to the first company for demonstration
  const [focusedCompany, setFocusedCompany] = useState(companies[0]);

  switch (activePanel) {
    case "home":
      return <HomePanel onCreateApp={onCreateApp} />;

    case "companies":
      return <CompaniesPanel />;

    case "audit":
      // Error fix: Ensure a company object is passed to the Audit Panel
      if (!focusedCompany) {
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="text-[10px] font-black opacity-40 uppercase tracking-[0.3em]">
              No Taxpayer Selected
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Please select a company from the Registry first.
            </p>
          </div>
        );
      }
      return <AuditLogsPanel company={focusedCompany} />;

    default:
      return (
        <div className="flex items-center justify-center h-full text-[10px] font-black opacity-20 uppercase tracking-[0.5em]">
          Panel Not Initialized
        </div>
      );
  }
}
