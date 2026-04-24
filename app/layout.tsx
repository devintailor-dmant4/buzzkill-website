import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Buzz Kill Mosquito Solutions | Chicagoland Mosquito & Tick Control",
  description:
    "Take back your backyard. EPA-registered, pet-safe mosquito, tick & flea treatments. 21-day protection guaranteed. Serving Buffalo Grove, Schaumburg, Glenview & surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">
        {children}
      </body>
    </html>
  );
}
