import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Segun Odunlade — FP&A Leader, Founder & Finance Systems Builder",
  description:
    "Segun Odunlade is a senior FP&A professional, founder of PaidLens, and builder of commission, planning, automation, and AI systems for modern finance teams.",
  keywords: [
    "FP&A",
    "Financial Planning & Analysis",
    "Commission System",
    "Anaplan",
    "Finance Automation",
    "AI Agent",
    "EPM",
    "PaidLens",
    "Founder",
  ],
  openGraph: {
    title: "Segun Odunlade — FP&A Leader, Founder & Finance Systems Builder",
    description:
      "Finance operator, product founder, and systems builder creating trusted finance infrastructure.",
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
