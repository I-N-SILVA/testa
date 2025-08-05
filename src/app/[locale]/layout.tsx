import { type Metadata } from "next";
import React from "react";
import "../../global.css";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";

import Providers from "src/components/Providers";
import { routing } from "src/i18n/routing";
import { Footer } from "@/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plyaz.net';
  const currentUrl = `${baseUrl}/${locale}`;
  
  // Generate alternate language URLs
  const alternateLanguages: Record<string, string> = {};
  routing.locales.forEach((supportedLocale) => {
    alternateLanguages[supportedLocale] = `${baseUrl}/${supportedLocale}`;
  });

  return {
    title: "Plyaz - The Future of Sports Investment | Tokenize Athletes",
    description: "Revolutionary sports investment platform. Support athletes, join fantasy leagues, and own exclusive NFTs. Connect fans with talent through blockchain technology.",
    keywords: [
      "sports investment",
      "athlete tokenization", 
      "fantasy sports",
      "NFTs",
      "fan engagement",
      "blockchain sports",
      "Web3 sports",
      "athlete funding",
      "sports ecosystem"
    ],
    authors: [{ name: "Plyaz", url: "https://plyaz.net" }],
    creator: "Plyaz",
    publisher: "Plyaz",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title: "Plyaz - The Future of Sports Investment",
      description: "Revolutionary sports investment platform connecting fans with talent through blockchain technology. Support athletes, join fantasy leagues, and own exclusive NFTs.",
      url: currentUrl,
      siteName: "Plyaz",
      images: [
        {
          url: "/hero_image.png",
          width: 1200,
          height: 630,
          alt: "Plyaz - The Future of Sports Investment Platform",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Plyaz - The Future of Sports Investment",
      description: "Revolutionary sports investment platform connecting fans with talent through blockchain technology.",
      images: ["/hero_image.png"],
      creator: "@plyaz_official",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plyaz.net';
  
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Plyaz",
              "url": baseUrl,
              "logo": `${baseUrl}/assets/svgs/plyaz-logo-full-light-mode.svg`,
              "description": "Revolutionary sports investment platform connecting fans with talent through blockchain technology.",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/plyaz_official",
                "https://instagram.com/plyaz_official",
                "https://linkedin.com/company/plyaz"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "help@plyaz.co.uk",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body>
        <Providers messages={messages} locale={locale}>
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
