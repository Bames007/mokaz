"use client";

import React, { useState, useRef, useMemo } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  CheckCircle2,
  FileText,
  Banknote,
  Calendar,
  Plus,
  User,
  ChevronRight,
  History,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  CreditCard,
  Building2,
  CloudUpload,
  X,
  FileIcon,
  Trash2,
  Eye,
  SendHorizontal,
} from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const years = Array.from({ length: 2025 - 1996 + 1 }, (_, i) =>
  (2025 - i).toString(),
);

const MOCK_COMPANIES = [
  {
    id: "MOK-772",
    name: "Mokaz Multitrade LTD",
    stage: 2,
    createdBy: "Eddy",
    createdAt: "12 Oct 2025",
  },
  {
    id: "MOK-104",
    name: "Apex Solutions Nig.",
    stage: 5,
    createdBy: "Musty",
    createdAt: "14 Oct 2025",
  },
  {
    id: "MOK-291",
    name: "Zenth Global Resources",
    stage: 3,
    createdBy: "Eddy",
    createdAt: "18 Oct 2025",
  },
  {
    id: "MOK-442",
    name: "Sahara Energy Corp",
    stage: 1,
    createdBy: "System Admin",
    createdAt: "20 Oct 2025",
  },
  {
    id: "MOK-881",
    name: "Ironside Logistics",
    stage: 4,
    createdBy: "Eddy",
    createdAt: "22 Oct 2025",
  },
];

export const CompaniesPanel = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState("2025");
  const [vault, setVault] = useState<Record<string, File>>({});

  const STAGES = [
    { id: 1, title: "Registry", icon: <ShieldCheck size={18} /> },
    { id: 2, title: "Documentation", icon: <FileText size={18} /> },
    { id: 3, title: "Field Audit", icon: <History size={18} /> },
    { id: 4, title: "Assessment", icon: <AlertCircle size={18} /> },
    { id: 5, title: "Tax Payment", icon: <CreditCard size={18} /> },
  ];

  // Logic to group uploads by year for the Preview Panel
  const stagedManifest = useMemo(() => {
    const groups: Record<string, { title: string; file: File }[]> = {};
    Object.entries(vault).forEach(([key, file]) => {
      const [year, ...titleParts] = key.split("-");
      const title = titleParts.join("-");
      if (!groups[year]) groups[year] = [];
      groups[year].push({ title, file });
    });
    return groups;
  }, [vault]);

  const handleFileUpload = (title: string, file: File) => {
    setVault((prev) => ({ ...prev, [`${selectedYear}-${title}`]: file }));
  };

  const removeFile = (year: string, title: string) => {
    setVault((prev) => {
      const next = { ...prev };
      delete next[`${year}-${title}`];
      return next;
    });
  };

  if (!selectedCompany) {
    return (
      <div
        className={`${inter.className} space-y-8 animate-in fade-in duration-500`}
      >
        <header className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2
              className={`${plusJakarta.className} text-4xl text-slate-900 tracking-tighter uppercase leading-none`}
            >
              Registry Terminal
            </h2>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.4em] mt-4 border-l-4 border-[#961515] pl-4">
              Authorized Access Only
            </p>
          </div>
        </header>

        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/30 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">Entity Identification</th>
                <th className="px-8 py-6">Audit Progress</th>
                <th className="px-8 py-6">Registrar</th>
                <th className="px-8 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_COMPANIES.map((co) => (
                <tr
                  key={co.id}
                  className="group hover:bg-slate-50 transition-all cursor-pointer"
                  onClick={() => setSelectedCompany(co)}
                >
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-[#961515] group-hover:text-white transition-colors">
                        <Building2 size={18} />
                      </div>
                      <p
                        className={`${plusJakarta.className} text-sm text-slate-900 uppercase`}
                      >
                        {co.name}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-900"
                          style={{ width: `${(co.stage / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase">
                        Stage {co.stage}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-7 text-[11px] font-bold text-slate-600 uppercase">
                    {co.createdBy}
                  </td>
                  <td className="px-8 py-7 text-right">
                    <ChevronRight
                      size={18}
                      className="inline text-slate-300 group-hover:text-[#961515]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${inter.className} space-y-8 animate-in slide-in-from-right-10 duration-500 pb-20`}
    >
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <button
          onClick={() => setSelectedCompany(null)}
          className="group flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 hover:text-[#961515] transition-all"
        >
          <ArrowLeft size={16} /> Exit Entity Record
        </button>
        <div className="flex gap-2">
          <span className="px-4 py-2 bg-slate-100 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-widest">
            UID: {selectedCompany.id}
          </span>
          <span className="px-4 py-2 bg-[#961515]/5 rounded-lg text-[9px] font-black text-[#961515] uppercase tracking-widest">
            Lead: {selectedCompany.createdBy}
          </span>
        </div>
      </header>

      <h2
        className={`${plusJakarta.className} text-5xl text-slate-900 uppercase tracking-tighter leading-none`}
      >
        {selectedCompany.name}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: UPLOAD INTERFACE */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-12 shadow-sm">
            <div className="flex justify-between items-center mb-12">
              <h3
                className={`${plusJakarta.className} text-2xl text-slate-900 uppercase`}
              >
                Upload Node
              </h3>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-900 text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y} Fiscal Year
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Bank Statement", "Schedule of Work", "Audited Account"].map(
                (docName) => (
                  <DocUploadCard
                    key={docName}
                    title={docName}
                    year={selectedYear}
                    file={vault[`${selectedYear}-${docName}`]}
                    onUpload={(file: File) => handleFileUpload(docName, file)}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: COMPLIANCE PREVIEW MANIFEST */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white sticky top-8">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="text-[#961515]" size={20} />
              <h4
                className={`${plusJakarta.className} text-lg uppercase tracking-tight`}
              >
                Audit Preview
              </h4>
            </div>

            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {Object.keys(stagedManifest).length === 0 ? (
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed italic">
                  No documents staged for the current session. Select a year and
                  upload PDFs to begin.
                </p>
              ) : (
                Object.entries(stagedManifest)
                  .sort((a, b) => b[0].localeCompare(a[0]))
                  .map(([year, docs]) => (
                    <div
                      key={year}
                      className="border-l-2 border-[#961515] pl-4 space-y-3"
                    >
                      <p className="text-[10px] font-black text-[#961515] tracking-[0.2em]">
                        {year} FISCAL CYCLE
                      </p>
                      {docs.map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <FileIcon size={12} className="text-slate-500" />
                            <span className="text-[11px] font-bold text-slate-200 uppercase truncate max-w-[150px]">
                              {doc.title}
                            </span>
                          </div>
                          <button
                            onClick={() => removeFile(year, doc.title)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-white"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ))
              )}
            </div>

            <button
              disabled={Object.keys(vault).length === 0}
              className="w-full mt-10 bg-[#961515] hover:bg-red-700 disabled:bg-slate-800 disabled:text-slate-600 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <SendHorizontal size={16} /> Finalize Submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocUploadCard = ({ title, year, file, onUpload }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`p-8 rounded-[2rem] border-2 transition-all flex flex-col items-center text-center ${
        file
          ? "border-[#961515] bg-red-50/5"
          : "border-slate-100 bg-white hover:border-slate-200"
      }`}
    >
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        accept=".pdf"
        onChange={(e) => e.target.files?.[0] && onUpload(e.target.files[0])}
      />

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${file ? "bg-[#961515] text-white" : "bg-slate-50 text-slate-300"}`}
      >
        {file ? <CheckCircle2 size={24} /> : <CloudUpload size={24} />}
      </div>

      <p
        className={`${plusJakarta.className} text-[11px] uppercase text-slate-900 tracking-wider`}
      >
        {title}
      </p>
      <p className="text-[9px] font-black text-slate-400 mt-1 uppercase">
        Staging Year: {year}
      </p>

      {file ? (
        <div className="mt-6 text-[10px] font-bold text-[#961515] bg-white border border-[#961515]/20 px-4 py-2 rounded-lg truncate w-full">
          {file.name}
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-6 bg-slate-900 text-white px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#961515] transition-all"
        >
          Attach PDF
        </button>
      )}
    </div>
  );
};
