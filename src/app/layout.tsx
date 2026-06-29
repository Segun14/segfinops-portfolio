import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Segun Odunlade — FP&A Engineer & Finance Technologist",
  description: "I build intelligent finance systems. Commission platforms, AI agents, EPM solutions, and data automation for modern FP&A teams.",
  keywords: ["FP&A", "Finance Engineer", "Commission System", "Anaplan", "AI Agent", "Financial Planning"],
  openGraph: {
    title: "Segun Odunlade — FP&A Engineer",
    description: "I build intelligent finance systems that save finance teams thousands of hours.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
