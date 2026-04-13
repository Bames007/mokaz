import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOKAZ MULTITRADE LTD",
  description: "Integrated Tax, Real Estate, and General Contract Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
      // Adding this prevents the "data-qb-installed" extension error
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#f6f4f1] text-[#1a1a1a] font-inter">
        {children}
      </body>
    </html>
  );
}
