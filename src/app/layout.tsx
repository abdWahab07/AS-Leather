import type { Metadata } from "next";
import { Geist, Geist_Mono, Satisfy, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  fallback: ["cursive"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  title: "AS-Leather - Premium Leather Goods",
  description: "Premium leather goods crafted with excellence. Discover our collection of high-quality leather jackets, bags, and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} ${bodoniModa.variable} antialiased`}
      >
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
