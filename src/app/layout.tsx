import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/data/constants";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${PROFILE.name} | Portfolio`,
  description: `${PROFILE.tagline}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`} suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
