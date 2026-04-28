"use client";

import React, { useState, useRef, useMemo } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  Building2,
  ArrowLeft,
  History,
  CheckCircle2,
  CloudUpload,
  Save,
  ChevronRight,
  Search,
  FileText,
  Clock,
  ShieldCheck,
  FileCheck,
  Download,
  Send,
  BellRing,
  ThumbsUp,
  ThumbsDown,
  Lock,
  Eye,
} from "lucide-react";

import { MOCK_COMPANIES, Company } from "../../companyData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AuditReportPDF } from "../../AuditReport";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const CompaniesPanel = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const fiscalYears = useMemo(() => {
    const years = [];
    for (let y = 2026; y >= 2018; y--) years.push(y.toString());
    return years;
  }, []);

  const [activeYear, setActiveYear] = useState(fiscalYears[0]);
  const [stagedFiles, setStagedFiles] = useState<{
    [key: string]: File | null;
  }>({
    "Bank Statement": null,
    "Tax Computation": null,
    "Audited Financials": null,
  });

  const [alertDialog, setAlertDialog] = useState<{
    show: boolean;
    title: string;
    message: string;
    type: "success" | "error" | "info";
  }>({
    show: false,
    title: "",
    message: "",
    type: "info",
  });

  const showAlert = (
    title: string,
    message: string,
    type: "success" | "error" | "info" = "info",
  ) => {
    setAlertDialog({ show: true, title, message, type });
  };

  const filteredCompanies = useMemo(() => {
    return (MOCK_COMPANIES || []).filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.id.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // --- INTERNAL COMPONENTS ---

  const AuditActionForm = ({
    stageIndex,
    onDecision,
  }: {
    stageIndex: number;
    onDecision: (s: string, r: string, rej: string) => void;
  }) => {
    const [remarks, setRemarks] = useState("");
    const [rejection, setRejection] = useState("");
    const isPast = (selectedCompany?.currentStage || 1) > stageIndex + 1;

    if (isPast)
      return (
        <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-center gap-4">
          <Lock size={18} className="text-slate-400" />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
            Audit Stage Finalized & Locked
          </p>
        </div>
      );

    return (
      <div className="mt-8 pt-8 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">
              Internal Audit Notes
            </label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 h-24 outline-none focus:ring-2 focus:ring-slate-950 transition-all"
              placeholder="Confidential auditor notes..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-red-600 uppercase ml-1">
              Discrepancy Report (Visible to Taxpayer)
            </label>
            <textarea
              value={rejection}
              onChange={(e) => setRejection(e.target.value)}
              className="w-full bg-white border border-red-100 rounded-xl p-4 text-sm text-slate-900 h-24 outline-none focus:border-red-500 transition-all"
              placeholder="Reason for rejection or query..."
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onDecision("Approved", remarks, rejection)}
            className="flex-1 bg-slate-950 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
          >
            <ThumbsUp size={16} /> Clear Stage
          </button>
          <button
            onClick={() => onDecision("Rejected", remarks, rejection)}
            className="flex-1 bg-white border border-red-600 text-red-600 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <ThumbsDown size={16} /> Issue Query
          </button>
        </div>
      </div>
    );
  };

  if (selectedCompany) {
    const isStageTwoPassed = selectedCompany.currentStage > 2;

    return (
      <div className={`${inter.className} pb-20 px-4 max-w-6xl mx-auto`}>
        {/* Header Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-4">
          <button
            onClick={() => setSelectedCompany(null)}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-950 transition-all group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Taxpayer List
          </button>
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() =>
                showAlert("Notice", "Taxpayer has been notified.", "success")
              }
              className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-700 px-5 py-3 rounded-xl text-[11px] font-bold uppercase hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              <BellRing size={14} className="mr-2" /> Notify
            </button>
            <PDFDownloadLink
              document={<AuditReportPDF company={selectedCompany} />}
              fileName={`Audit_${selectedCompany.id}.pdf`}
            >
              <button className="flex-1 md:flex-none bg-red-700 text-white px-5 py-3 rounded-xl text-[11px] font-bold uppercase hover:bg-red-800 transition-all flex items-center justify-center">
                <FileText size={14} className="mr-2" /> Export Certificate
              </button>
            </PDFDownloadLink>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Tracking */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <h3
                className={`${plusJakarta.className} text-sm uppercase tracking-widest mb-8 text-slate-400 flex items-center gap-2`}
              >
                <History size={16} /> Audit Timeline
              </h3>
              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
                {selectedCompany.auditTrail.map((log, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className="w-full text-left relative pl-10 transition-all"
                  >
                    <div
                      className={`absolute left-0 top-0.5 w-6 h-6 rounded-lg border-2 border-slate-900 flex items-center justify-center transition-all ${
                        log.status === "completed"
                          ? "bg-emerald-500"
                          : log.status === "current"
                            ? "bg-white text-slate-950"
                            : "bg-slate-800 text-slate-600"
                      } ${activeTab === i ? "ring-4 ring-emerald-500/20" : ""}`}
                    >
                      {log.status === "completed" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                    </div>
                    <p
                      className={`text-[11px] font-bold uppercase tracking-tight ${activeTab === i ? "text-emerald-400" : "text-slate-300"}`}
                    >
                      {log.stage}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 font-medium">
                      {log.timestamp}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2
                    className={`${plusJakarta.className} text-2xl text-slate-950 uppercase`}
                  >
                    {selectedCompany.auditTrail[activeTab]?.stage}
                  </h2>
                  <p className="text-[10px] font-bold text-red-700 uppercase tracking-widest mt-2">
                    Compliance Review Phase 0{activeTab + 1}
                  </p>
                </div>
                <ShieldCheck size={32} className="text-slate-100" />
              </div>

              {activeTab === 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { l: "Registered Email", v: selectedCompany.email },
                    { l: "RC / Tax ID", v: selectedCompany.id },
                    { l: "Filing Date", v: selectedCompany.createdAt },
                    { l: "Status", v: "COMPLIANT" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-5 rounded-2xl border border-slate-100"
                    >
                      <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">
                        {item.l}
                      </p>
                      <p className="text-xs font-bold text-slate-900 uppercase">
                        {item.v}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-2">
                  {isStageTwoPassed ? (
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 mb-4 text-emerald-600">
                        <Eye size={16} />
                        <span className="text-[10px] font-bold uppercase">
                          Archived Returns (Read-Only)
                        </span>
                      </div>
                      {[
                        "Bank Statement",
                        "Tax Computation",
                        "Audited Financials",
                      ].map((t) => (
                        <div
                          key={t}
                          className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100"
                        >
                          <div className="flex items-center gap-3">
                            <FileCheck size={16} className="text-emerald-500" />
                            <p className="text-xs font-bold text-slate-900 uppercase">
                              {t}
                            </p>
                          </div>
                          <Download
                            size={18}
                            className="text-slate-300 hover:text-slate-950 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-end mb-6">
                        <p className="text-[11px] font-bold text-slate-900 uppercase">
                          Schedule of Filings
                        </p>
                        <select
                          value={activeYear}
                          onChange={(e) => setActiveYear(e.target.value)}
                          className="bg-slate-100 border border-slate-200 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold outline-none focus:ring-2 focus:ring-slate-950"
                        >
                          {fiscalYears.map((y) => (
                            <option key={y} value={y}>
                              {y} FY
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                        {[
                          "Bank Statement",
                          "Tax Computation",
                          "Audited Financials",
                        ].map((type) => (
                          <UploadCard
                            key={type}
                            type={type}
                            file={stagedFiles[type]}
                            onFileSelect={(f) =>
                              setStagedFiles((p) => ({ ...p, [type]: f }))
                            }
                          />
                        ))}
                      </div>
                      <div className="flex gap-3 mb-8">
                        <button
                          onClick={() =>
                            showAlert(
                              "Saved",
                              `FY ${activeYear} data staged.`,
                              "success",
                            )
                          }
                          className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl text-[10px] font-bold uppercase hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                        >
                          <Save size={16} /> Save Progress
                        </button>
                        <button
                          onClick={() =>
                            showAlert(
                              "Success",
                              "Documentation submitted for audit.",
                              "success",
                            )
                          }
                          className="flex-1 bg-slate-950 text-white py-4 rounded-xl text-[10px] font-bold uppercase hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                          <Send size={16} /> Submit Returns
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab >= 2 && (
                <div className="py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-center mb-8">
                  <ShieldCheck
                    className="mx-auto text-slate-200 mb-4"
                    size={48}
                  />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Awaiting Verification Review
                  </p>
                </div>
              )}

              <AuditActionForm
                stageIndex={activeTab}
                onDecision={(status, rem, rej) => {
                  if (status === "Rejected" && !rej)
                    return showAlert(
                      "Required",
                      "Please provide a reason for the discrepancy.",
                      "error",
                    );
                  showAlert(
                    "Updated",
                    "Audit record has been synchronized.",
                    "success",
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 px-4 max-w-6xl mx-auto pt-10 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2
            className={`${plusJakarta.className} text-3xl text-slate-950 uppercase tracking-tight`}
          >
            Taxpayer Registry
          </h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">
            Internal Compliance & Audit Management
          </p>
        </div>
        <div className="relative w-full md:w-80 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-slate-950 transition-colors"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name or TIN..."
            className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-xs font-medium outline-none focus:ring-2 focus:ring-slate-950 shadow-sm transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-5">Corporate Taxpayer</th>
                <th className="px-8 py-5">Audit Status</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredCompanies.map((co) => (
                <tr
                  key={co.id}
                  onClick={() => setSelectedCompany(co)}
                  className="group hover:bg-slate-50 cursor-pointer transition-all"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-950 uppercase">
                          {co.name}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">
                          {co.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500"
                          style={{ width: `${(co.currentStage / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        Phase 0{co.currentStage}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <ChevronRight
                      size={20}
                      className="inline text-slate-200 group-hover:text-slate-950 transition-all"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UploadCard = ({
  type,
  file,
  onFileSelect,
}: {
  type: string;
  file: File | null;
  onFileSelect: (f: File) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => inputRef.current?.click()}
      className={`p-6 rounded-2xl border border-dashed transition-all cursor-pointer flex flex-col items-center text-center group ${file ? "border-emerald-500 bg-emerald-50/30" : "border-slate-200 bg-slate-50 hover:border-slate-400"}`}
    >
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        accept=".pdf"
        onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
      />
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${file ? "bg-emerald-500 text-white shadow-lg" : "bg-white text-slate-300 group-hover:text-slate-950 shadow-sm"}`}
      >
        {file ? <CheckCircle2 size={18} /> : <CloudUpload size={18} />}
      </div>
      <p className="text-[10px] font-bold uppercase text-slate-950 mb-1 leading-tight">
        {type}
      </p>
      <p className="text-[9px] font-medium text-slate-400 uppercase truncate w-full px-2">
        {file ? file.name : "Attach PDF"}
      </p>
    </div>
  );
};
