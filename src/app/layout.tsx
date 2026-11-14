import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  creator: "Benchmark Global Consultants",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benchmarkglobal.edu.np",
    siteName: "Benchmark Global",
    title: "Benchmark Global | #1 Study Abroad Consultancy in Nepal",
    description:
      "Expert study abroad guidance for students in Nepal. 10,000+ students placed, 98% visa approval rate.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benchmark Global - Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benchmark Global | #1 Study Abroad Consultancy",
    description:
      "Expert study abroad guidance. 10,000+ students placed globally.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
