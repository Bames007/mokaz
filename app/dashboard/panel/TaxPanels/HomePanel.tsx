"use client";

import React, { useState } from "react";
import {
  Plus,
  Building2,
  FileCheck,
  Clock,
  Upload,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export const HomePanel = ({
  onCreateApp,
}: {
  onCreateApp: (data: any) => void;
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setShowSuccess(true);
    setTimeout(() => {
      onCreateApp(formData); // This sends data to the main Dashboard state
      setShowSuccess(false);
      setIsCreating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 pb-12 relative">
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl text-center max-w-sm animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-black">Protocol Initiated</h3>
            <p className="text-sm text-black/50 mt-2 font-medium">
              Company has been added to the Tax Registry. Redirecting to
              Documentation...
            </p>
          </div>
        </div>
      )}

      {/* STATS STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "Active Tax Files",
            value: "24",
            icon: <Building2 />,
            color: "text-blue-700 bg-blue-50",
          },
          {
            label: "Completed Audits",
            value: "12",
            icon: <FileCheck />,
            color: "text-green-700 bg-green-50",
          },
          {
            label: "Pending Reviews",
            value: "08",
            icon: <Clock />,
            color: "text-[#961515] bg-red-50",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}
            >
              {stat.icon}
            </div>
            <p className="text-xs font-bold text-black/60">{stat.label}</p>
            <h4 className="text-3xl font-extrabold text-black mt-1">
              {stat.value}
            </h4>
          </div>
        ))}
      </div>

      {!isCreating ? (
        <div className="bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-16 text-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Start a new <span className="text-[#961515]">Tax Governance</span>{" "}
            Application.
          </h2>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-[#961515] hover:bg-red-700 px-8 py-4 rounded-xl flex items-center gap-3 text-xs font-bold transition-all shadow-lg"
          >
            Add New Company <Plus size={18} />
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-[2.5rem] border border-black/10 shadow-xl overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="p-6 bg-gray-50 border-b border-black/5 flex justify-between items-center">
            <h3 className="font-bold text-black uppercase tracking-tight">
              Stage 1: Registry Entry
            </h3>
            <button
              onClick={() => setIsCreating(false)}
              className="text-xs font-bold text-black/40"
            >
              Close
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold text-black/70">
                Company Name
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-50 border border-black/10 p-4 rounded-xl outline-none focus:border-[#961515] font-semibold text-black"
                placeholder="Mokaz Global Ltd"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-black/70">
                Corporate Email
              </label>
              <input
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-50 border border-black/10 p-4 rounded-xl outline-none font-semibold text-black"
                placeholder="admin@mokaz.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-black/70">
                NRS Acknowledgment
              </label>
              <div className="w-full bg-gray-50 border-2 border-dashed border-black/10 p-4 rounded-xl flex items-center gap-3 text-black/40 font-bold text-xs cursor-pointer">
                <Upload size={16} /> Upload PDF
              </div>
            </div>
            <button
              type="submit"
              className="md:col-span-2 bg-black text-white py-5 rounded-xl text-xs font-bold hover:bg-[#961515] transition-all flex items-center justify-center gap-2 mt-4"
            >
              Submit & Proceed <ArrowRight size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
