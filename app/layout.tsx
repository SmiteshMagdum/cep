import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Learn Basic",
  description: "coding awareness program for school children",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} font-sans text-[16px] leading-relaxed`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
