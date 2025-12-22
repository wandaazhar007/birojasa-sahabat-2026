// app/layout.tsx
import type { Metadata } from "next";
import "./styles/_globals.scss";

import Navbar from "./components/navbar/Navbar"; // (akan kita buat di step selanjutnya)

const siteName = "Biro Jasa Sahabat";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

const ogImagePath = "/images/og-birojasa-sahabat.jpg"; // 1200x630

const defaultDescription =
  "Biro Jasa Sahabat membantu pengurusan STNK dan kelengkapan surat kendaraan dengan proses yang jelas, transparan, aman, dan cepat. Konsultasi gratis via WhatsApp, tanpa ribet dan tanpa perlu antre.";

const keywords: string[] = [
  "biro jasa stnk",
  "jasa pengurusan stnk",
  "biro jasa stnk ciputat",
  "jasa stnk tangerang selatan",
  "perpanjang stnk tahunan",
  "perpanjang stnk 5 tahunan",
  "balik nama kendaraan",
  "mutasi masuk kendaraan",
  "ganti nomor plat",
  "ubah bentuk warna kendaraan",
  "stnk hilang",
  "stnk rusak",
  "plat custom",
  "jemput berkas",
  "jemput antar dokumen",
  "konsultasi stnk",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biro Jasa STNK Terpercaya | Biro Jasa Sahabat",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: siteUrl,
    title: "Biro Jasa STNK Terpercaya | Biro Jasa Sahabat",
    description: defaultDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Biro Jasa Sahabat — Biro Jasa STNK Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biro Jasa STNK Terpercaya | Biro Jasa Sahabat",
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    telephone: "+6281318927898",
    image: `${siteUrl}${ogImagePath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah, Ciputat",
      addressLocality: "South Tangerang City",
      addressRegion: "Banten",
      postalCode: "15414",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Ciputat" },
      { "@type": "AdministrativeArea", name: "Tangerang Selatan" },
      { "@type": "AdministrativeArea", name: "Banten" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+6281318927898",
        contactType: "customer service",
        availableLanguage: ["id"],
      },
    ],
    sameAs: ["https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6"],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="id">
      <body>
        {/* Sitewide JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}