import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afro Arc | Universe-Building Studio",
  description:
    "Afro Arc is a premium multimedia universe-building studio focused on mythic storytelling, future culture, and cinematic world design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
