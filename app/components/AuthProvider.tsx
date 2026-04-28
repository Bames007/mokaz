"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// Hardcoded users
const USERS = [
  { email: "ionlygetbigger@gmail.com", name: "Musty", password: "1234567890" },
  {
    email: "abdulmokas@gmail.com",
    name: "Abdul Mokas",
    password: "1234567890",
  },
  {
    email: "eddybames007@gmail.com",
    name: "Eddy Bassey",
    password: "1234567890",
  },
];

export interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Restore user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("mokaz-user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const found = USERS.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      const loggedIn = { email: found.email, name: found.name };
      setUser(loggedIn);
      localStorage.setItem("mokaz-user", JSON.stringify(loggedIn));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("mokaz-user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
