"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-jakarta",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const AUTHORIZED_USERS = {
  "ionlygetbigger@gmail.com": "Musty",
  "abdulmokas@gmail.com": "Abdul Mokas",
  "eddybames007@gmail.com": "Eddy Bassey",
};

const MASTER_PASSWORD = "1234567890";

export default function MokazLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [welcomeUser, setWelcomeUser] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Clear any old session on load
    localStorage.removeItem("mokaz_session");
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const normalizedEmail = email.toLowerCase().trim();
    const name =
      AUTHORIZED_USERS[normalizedEmail as keyof typeof AUTHORIZED_USERS];

    if (name && password === MASTER_PASSWORD) {
      // --- CRITICAL: SESSION STORAGE ---
      const sessionData = {
        name: name,
        email: normalizedEmail,
        timestamp: Date.now(),
      };
      localStorage.setItem("mokaz_session", JSON.stringify(sessionData));
      // --------------------------------

      setWelcomeUser(name);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    } else {
      setError("UNAUTHORIZED: ACCESS DENIED");
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <main
      className={`relative min-h-screen flex items-center justify-center bg-[#F5F2ED] overflow-hidden ${inter.className} ${jakarta.variable}`}
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#961515]" />
      <div className="absolute -top-24 -left-24 opacity-[0.03] pointer-events-none">
        <ShieldCheck size={600} className="text-[#1A1A1A]" />
      </div>

      <div className="container max-w-lg mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {!welcomeUser ? (
            <motion.div
              key="login-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white"
            >
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#1A1A1A] p-2.5 rounded-xl shadow-lg shadow-black/20">
                    <ShieldCheck size={22} className="text-[#961515]" />
                  </div>
                  <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.4em] opacity-40">
                    Mokaz Auth Engine
                  </span>
                </div>

                <h1 className="font-jakarta text-5xl text-[#1A1A1A] leading-[0.85] tracking-tighter mb-6">
                  System <br />
                  <span className="text-[#961515]">Gateway.</span>
                </h1>
                <p className="text-[#1A1A1A]/50 text-sm font-medium">
                  Personnel identification required for encrypted registry
                  access.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative group">
                  <Mail
                    size={16}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/20 group-focus-within:text-[#961515] transition-colors"
                  />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="AUTHORIZED EMAIL"
                    className="w-full bg-[#F9F9F9] py-5 pl-14 pr-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 border border-[#1A1A1A]/5 outline-none focus:bg-white focus:border-[#961515]/30 focus:shadow-xl focus:shadow-[#961515]/5 transition-all"
                  />
                </div>

                <div className="relative group">
                  <Lock
                    size={16}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/20 group-focus-within:text-[#961515] transition-colors"
                  />
                  <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ACCESS KEY"
                    className="w-full bg-[#F9F9F9] py-5 pl-14 pr-6 rounded-2xl text-[11px] font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 border border-[#1A1A1A]/5 outline-none focus:bg-white focus:border-[#961515]/30 focus:shadow-xl focus:shadow-[#961515]/5 transition-all"
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-red-50 text-[#961515] p-4 rounded-xl border border-red-100"
                    >
                      <AlertCircle size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {error}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full mt-4 bg-[#1A1A1A] text-white py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-[#961515] transition-all duration-500 shadow-2xl shadow-black/10 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Establish Connection <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-flex bg-[#961515] p-8 rounded-full text-white shadow-[0_20px_50px_rgba(150,21,21,0.3)] mb-10"
              >
                <ShieldCheck size={64} />
              </motion.div>

              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[#1A1A1A]/30 mb-4">
                Identity Verified
              </p>

              <h2 className="font-jakarta text-7xl text-[#1A1A1A] tracking-tighter leading-none mb-8">
                Hello, <br />
                <span className="text-[#961515]">{welcomeUser}</span>
              </h2>

              <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-1 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="w-full h-full bg-[#961515]"
                  />
                </div>
                <span className="text-[9px] font-black text-[#1A1A1A]/40 uppercase tracking-widest">
                  Syncing Dashboard Data...
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-0 w-full text-center pointer-events-none">
        <p className="text-[10px] font-black text-[#1A1A1A]/10 uppercase tracking-[1em]">
          Mokaz Multitrade LTD • Secure Node
        </p>
      </div>
    </main>
  );
}
