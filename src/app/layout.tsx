import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/constants/siteConfig";
import { JsonLd } from "@/components/JsonLd";
import { isValidGaId } from "@/lib/analytics";
import { seasonBootScript } from "@/lib/season";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seoTitle,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creatorName, url: siteConfig.url }],
  creator: siteConfig.creatorName,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    creator: "@YuzumaruWorks",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: seasonBootScript }} />
      </head>
      <body className={`${zenMaruGothic.variable} font-sans antialiased`}>
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
        {isValidGaId(siteConfig.googleAnalyticsId) ? (
          <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
        ) : null}
      </body>
    </html>
  );
}
