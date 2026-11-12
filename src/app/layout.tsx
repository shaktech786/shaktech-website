import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import StructuredData from "@/components/structured-data";
import ClientWidgets from "@/components/client-widgets";
import ErrorBoundary from "@/components/error-boundary";
import WebVitals from "@/components/web-vitals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "ShakTech Labs | One-Person Software Studio";
const description =
  "One engineer directing AI agents to design, build and run complete products at the pace of a full team. 12+ products built solo by Shakeel Bhamani.";

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
          <div className="pt-16">
            {children}
          </div>
        </ErrorBoundary>
        <ClientWidgets />
        <WebVitals />
      </body>
    </html>
  );
}
