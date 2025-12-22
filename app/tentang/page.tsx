// app/tentang/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroAbout from "../components/heroAbout/HeroAbout";
import BrandStory from "../components/brandStory/BrandStory";
import VisiMisi from "../components/visiMisi/VisiMisi";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

const siteName = "Birojasa Sahabat";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const pageTitle = `Tentang Birojasa Sahabat — Aman, Transparan, dan Proses Jelas`;
const pageDescription =
  "Kenali Birojasa Sahabat: biro jasa pengurusan STNK & berkas kendaraan untuk orang sibuk. Proses jelas, komunikasi responsif, berkas aman, dan biaya transparan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "tentang biro jasa sahabat",
    "biro jasa STNK terpercaya",
    "jasa pengurusan STNK",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "jemput antar berkas",
    "proses pengurusan STNK",
    "berkas aman",
    "biaya transparan",
  ],
  alternates: {
    canonical: `${siteUrl}/tentang`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteUrl}/tentang`,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Birojasa Sahabat — Tentang Kami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TentangPage() {
  const aboutUrl = `${siteUrl}/tentang`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${aboutUrl}#about`,
    url: aboutUrl,
    name: "Tentang Birojasa Sahabat",
    description: pageDescription,
    about: {
      "@type": "ProfessionalService",
      name: siteName,
      url: siteUrl,
      telephone: "+6281318927898",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah",
        addressLocality: "Ciputat",
        addressRegion: "Banten",
        postalCode: "15414",
        addressCountry: "ID",
      },
      areaServed: ["Jabodetabek", "Ciputat", "Tangerang Selatan"],
    },
  };

  return (
    <>
      <Script
        id="jsonld-tentang-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroAbout />
      <BrandStory />
      <VisiMisi />
    </>
  );
}