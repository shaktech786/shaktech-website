import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import StructuredData from "@/components/structured-data";
import ClientWidgets from "@/components/client-widgets";
import ErrorBoundary from "@/components/error-boundary";
import WebVitals from "@/components/web-vitals";
import PerformanceOptimizer from "@/components/performance-optimizer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shak-tech.com'),
  title: "ShakTech - US-Based AI-First Software Delivery",
  description: "US-based AI Software Expert in Atlanta. Georgia Tech educated, Fortune 500 experienced. Clear communication, EST timezone, no offshore delays. Led by Shakeel Bhamani.",
  keywords: ["US-Based AI Developer", "Atlanta Software Consultant", "AI-First Development", "Georgia Tech", "American Software Developer", "TEDx Speaker", "Shakeel Bhamani"],
  authors: [{ name: "Shakeel Bhamani" }],
  creator: "Shakeel Bhamani",
  icons: {
    icon: "/shaktech_logo.png",
    shortcut: "/shaktech_logo.png",
    apple: "/shaktech_logo.png",
  },
  openGraph: {
    title: "ShakTech - US-Based AI-First Software Delivery",
    description: "US-based AI expert in Atlanta. Clear communication, EST timezone, enterprise experience.",
    url: "https://shak-tech.com",
    siteName: "ShakTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShakTech - US-Based AI-First Software Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShakTech - US-Based AI Expert",
    description: "Empathetic AI Software Delivery where human creativity meets AI acceleration.",
    images: ["/og-image.png"],
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-gray-950 text-gray-100`}
      >
        <StructuredData type="person" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Navigation />
        <ErrorBoundary>
          <main className="pt-16 md:pt-16 lg:pt-16">
            {children}
          </main>
        </ErrorBoundary>
        <ClientWidgets />
        <WebVitals />
        <PerformanceOptimizer />
      </body>
    </html>
  );
}
