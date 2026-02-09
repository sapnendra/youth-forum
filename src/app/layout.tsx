import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BACE - Bhaktivedanta Academic and Cultural Education",
  description:
    "A Vedic hostel and youth development platform for college students. Where education meets character, and clarity meets purpose.",
  keywords: [
    "BACE",
    "Vedic education",
    "hostel",
    "college students",
    "ISKCON",
    "character development",
    "youth development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
