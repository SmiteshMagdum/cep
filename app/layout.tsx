import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter  = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Basic",
  description: "coding awareness program for school children",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scrollbar-none">
      <NavBar />  
      {children}
      </body>
    </html>
  );
}
