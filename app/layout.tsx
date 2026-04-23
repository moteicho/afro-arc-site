import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afroarc.com"),
  title: {
    default: "Afro Arc | Universe-Building Studio",
    template: "%s | Afro Arc",
  },
  description:
    "Afro Arc is a premium multimedia universe-building studio focused on mythic storytelling, future culture, and cinematic world design.",
  openGraph: {
    title: "Afro Arc | Universe-Building Studio",
    description:
      "Enter a cinematic universe where ancestral memory meets future myth.",
    url: "https://www.afroarc.com",
    siteName: "Afro Arc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afro Arc | Universe-Building Studio",
    description:
      "Premium worldbuilding across story, animation, sound, and interactive media.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
