import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import RemoveNetlifyBadge from "@/components/RemoveNetlifyBadge";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benchmarkglobal.edu.np"),
  title: "Benchmark Global | #1 Study Abroad Consultancy in Nepal",
  description:
    "Benchmark Global helps students achieve their dream of studying abroad with expert counseling, visa assistance, scholarship guidance, and university admission support. 98% visa success rate.",
  keywords: [
    "study abroad Nepal",
    "education consultancy Kathmandu",
    "Australia student visa",
    "UK university admission",
    "Canada study permit",
    "scholarship guidance Nepal",
    "Benchmark Global Consultants",
  ],
  authors: [{ name: "Benchmark Global Consultants" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benchmarkglobal.edu.np",
    siteName: "Benchmark Global",
    title: "Benchmark Global | #1 Study Abroad Consultancy in Nepal",
    description:
      "Expert study abroad guidance for students in Nepal. 10,000+ students placed, 98% visa approval rate.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <RemoveNetlifyBadge />
        {children}
      </body>
    </html>
  );
}
