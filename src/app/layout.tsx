import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Segun Odunlade — FP&A Engineer & Builder",
  description:
    "I build the platforms, AI agents, and automation that most finance teams wish they had. Commission portals, intelligent bots, data pipelines.",
  keywords: [
    "FP&A",
    "Finance Engineer",
    "Commission System",
    "Anaplan",
    "AI Agent",
    "Financial Planning",
    "Finance Automation",
  ],
  openGraph: {
    title: "Segun Odunlade — FP&A Engineer & Builder",
    description:
      "I build intelligent finance systems that save finance teams thousands of hours.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
