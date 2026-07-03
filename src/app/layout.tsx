import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Segun Odunlade — Senior FP&A | Finance Systems Builder",
  description:
    "Senior FP&A professional specializing in finance automation, commission systems, AI agents, and EPM solutions. Building intelligent infrastructure for modern finance teams.",
  keywords: [
    "FP&A",
    "Financial Planning & Analysis",
    "Commission System",
    "Anaplan",
    "Finance Automation",
    "AI Agent",
    "EPM",
  ],
  openGraph: {
    title: "Segun Odunlade — Senior FP&A | Finance Systems Builder",
    description:
      "Senior FP&A professional building intelligent finance infrastructure — commission platforms, AI agents, and EPM solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
