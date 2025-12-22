import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar  from "@/app/components/navbar";
import Navbar from "@/app/components/navbar";


export const metadata: Metadata = {
  title: "Juanico DevSolutions",
  description: "",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
      <NavBar/>
      {children}
      </body>
    </html>
  );
}
