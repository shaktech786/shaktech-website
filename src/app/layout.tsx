import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import EventBanner from "@/components/event-banner";
import StructuredData from "@/components/structured-data";
import ClientWidgets from "@/components/client-widgets";
import ErrorBoundary from "@/components/error-boundary";
import WebVitals from "@/components/web-vitals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "ShakTech Labs | Product Engineering Studio";
const description =
  "A founder-led product studio: a Staff Engineer directing AI agents to design, build and run complete products at a fixed price. 12+ products shipped by Shakeel Bhamani.";

export const metadata: Metadata = {
  metadataBase: new URL('https://shak-tech.com'),
  title: {
    default: title,
    template: "%s | ShakTech Labs",
  },
  description,
  authors: [{ name: "Shakeel Bhamani" }],
  creator: "Shakeel Bhamani",
  alternates: { canonical: "/" },
  icons: {
    icon: "/shaktech_logo.png",
    shortcut: "/shaktech_logo.png",
    apple: "/shaktech_logo.png",
  },
  openGraph: {
    title,
    description,
    url: "https://shak-tech.com",
    siteName: "ShakTech Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Re-render hourly so the event banner takes itself down when it expires.
export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${display.variable} font-sans antialiased min-h-screen bg-gray-950 text-gray-100`}
      >
        <StructuredData type="person" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Navigation />
        <ErrorBoundary>
          <div className="pt-16">
            <EventBanner />
            {children}
          </div>
        </ErrorBoundary>
        <ClientWidgets />
        <WebVitals />
      </body>
    </html>
  );
}
