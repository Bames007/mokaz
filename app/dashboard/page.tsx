"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MokazSidebar from "./components/SideBar";
import MokazHeader from "./components/Header";
import PanelRenderSystem from "./panel/PanelRender";
import { ShieldAlert } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [activeSector, setActiveSector] = useState("tax");
  const [activePanel, setActivePanel] = useState("home");

  // State for the logged-in user
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  const [companies, setCompanies] = useState([
    {
      id: "MOK-772",
      name: "Mokaz Multitrade LTD",
      stage: 2,
      email: "info@mokaz.com",
      createdBy: "System Admin",
      createdAt: "12 Oct 2025",
    },
  ]);

  useEffect(() => {
    // 1. Get session from storage
    const session = localStorage.getItem("mokaz_session");

    if (!session) {
      // 2. No session? Kick back to login
      router.push("/");
    } else {
      try {
        const parsedUser = JSON.parse(session);
        setUser(parsedUser);
      } catch (e) {
        router.push("/");
      }
    }
  }, [router]);

  const handleCreateApplication = (newData: any) => {
    // PULLS THE NAME FROM YOUR LOGIN (Musty, Abdul, or Eddy)
    const creatorName = user?.name || "Unauthorized User";

    const newEntry = {
      id: `MOK-${Math.floor(100 + Math.random() * 900)}`,
      ...newData,
      stage: 2,
      createdBy: creatorName,
      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setCompanies((prev) => [newEntry, ...prev]);

    setTimeout(() => {
      setActivePanel("companies");
    }, 2200);
  };

  // --- LOADER: PREVENTS THE "NULL" ERROR ---
  if (!user) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F5F2ED]">
        <ShieldAlert size={40} className="text-[#961515] animate-pulse mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
          Decrypting Personnel Data...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F5F2ED] overflow-x-hidden">
      <MokazSidebar
        activeTab={activeSector}
        setActiveTab={setActiveSector}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Pass the verified user to the header */}
        <MokazHeader user={user} />

        <div className="flex-1 p-4 lg:p-10">
          {activeSector === "tax" ? (
            <PanelRenderSystem
              activePanel={activePanel}
              companies={companies}
              onCreateApp={handleCreateApplication}
            />
          ) : (
            <div className="h-[70vh] flex flex-col items-center justify-center border-2 border-dashed border-black/10 rounded-[3rem] text-center">
              <h3 className="text-xs font-black uppercase tracking-widest opacity-20">
                Node Offline
              </h3>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
