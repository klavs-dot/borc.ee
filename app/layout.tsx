import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import BackgroundGlow from "@/components/BackgroundGlow";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baltic Online Research Company — Consumer & Media Research in the Baltics",
  description:
    "Baltic Online Research Company (BORC) delivers consumer and media research across Latvia, Lithuania and Estonia. Segmentation, brand tracking, NPS, product testing, price sensitivity, qualitative and quantitative research, and advertising research.",
  keywords: [
    "market research Baltics",
    "consumer research Latvia",
    "consumer research Lithuania",
    "consumer research Estonia",
    "brand tracking Baltics",
    "NPS Baltics",
    "qualitative research",
    "quantitative research",
    "advertising research",
    "media research",
    "Baltic Online Research Company",
    "BORC",
  ],
  authors: [{ name: "Baltic Online Research Company" }],
  openGraph: {
    title: "Baltic Online Research Company",
    description:
      "Consumer and media research across Latvia, Lithuania and Estonia.",
    url: "https://borc.ee",
    siteName: "BORC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans grain">
        <BackgroundGlow />
        {children}
      </body>
    </html>
  );
}
