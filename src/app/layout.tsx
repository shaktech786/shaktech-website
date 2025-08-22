import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import StructuredData from "@/components/structured-data";
import ClientWidgets from "@/components/client-widgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShakTech - AI-First Software Delivery",
  description: "Empathetic AI Software Delivery where human creativity meets AI acceleration. Led by Shakeel Bhamani, Lead Software Consultant and TEDx Speaker.",
  keywords: ["AI Software Development", "AI-First Development", "Software Consulting", "Thoughtworks", "TEDx Speaker", "Shakeel Bhamani"],
  authors: [{ name: "Shakeel Bhamani" }],
  creator: "Shakeel Bhamani",
  openGraph: {
    title: "ShakTech - AI-First Software Delivery",
    description: "Empathetic AI Software Delivery where human creativity meets AI acceleration.",
    url: "https://shak-tech.com",
    siteName: "ShakTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShakTech - AI-First Software Delivery",
    description: "Empathetic AI Software Delivery where human creativity meets AI acceleration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-primary-950 text-gray-100`}>
        <StructuredData type="person" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Navigation />
        {children}
        <ClientWidgets />
      </body>
    </html>
  );
}
