import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky Ladder",
  description: "Merrick's blog and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inject a pre-processing script to ensure the .dark class is applied before the page loads.*/}
        <ThemeScript />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        {/* Header, Main, and Footer */}
        <div className="flex flex-col min-h-screen w-full bg-white dark:bg-black">
          <Header />

          <main className="w-full flex-grow flex flex-col justify-center items-center overflow-hidden h-auto">
            {children}
          </main>

          <Footer />
        </div>

        {/* Speed Insights and Analytics */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
