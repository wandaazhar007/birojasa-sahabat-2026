// app/perpanjang-stnk-tahunan/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

const siteName = "Birojasa Sahabat";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

// NOTE:
// Blueprint kamu mencantumkan path /layanan/perpanjang-stnk-tahunan/.
// Kalau kamu memang ingin konsisten dengan blueprint, pindahkan folder ini ke:
// app/layanan/perpanjang-stnk-tahunan/page.tsx
const canonical = `${siteUrl}/perpanjang-stnk-tahunan`;

const pageTitle = `Perpanjang STNK Tahunan | ${siteName}`;
const pageDescription =
  "Cek syarat perpanjang STNK tahunan (STNK asli, KTP asli, surat kuasa) dan alur proses yang jelas. Birojasa Sahabat bantu tanpa antre & bolak-balik. Konsultasi gratis via WhatsApp +6281318927898.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    // target keyword dari blueprint
    "syarat perpanjang STNK tahunan",
    "jasa perpanjang STNK",
    // variasi intent
    "jasa perpanjang STNK tahunan",
    "perpanjang STNK tahunan tanpa antre",
    "biro jasa STNK",
    "biro jasa perpanjang STNK",
    // local SEO
    "jasa perpanjang STNK Ciputat",
    "jasa perpanjang STNK Tangerang Selatan",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "jasa STNK Jabodetabek",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: canonical,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Birojasa Sahabat — Perpanjang STNK Tahunan",
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

export default function PerpanjangStnkTahunanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal perpanjang STNK tahunan.";
  const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#birojasa-sahabat`,
        name: siteName,
        url: siteUrl,
        telephone: "+6281318927898",
        hasMap: "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah",
          addressLocality: "Ciputat",
          addressRegion: "Banten",
          postalCode: "15414",
          addressCountry: "ID",
        },
        areaServed: ["Ciputat", "Tangerang Selatan", "Jabodetabek"],
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Jasa Perpanjang STNK Tahunan — Cepat & Tanpa Ribet",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#birojasa-sahabat` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Perpanjang STNK Tahunan",
        serviceType: "Perpanjang STNK Tahunan",
        url: canonical,
        description:
          "Layanan bantuan perpanjang STNK tahunan dengan persyaratan jelas, komunikasi status yang responsif, dan proses yang rapi agar tidak perlu antre dan bolak-balik.",
        provider: { "@id": `${siteUrl}#birojasa-sahabat` },
        areaServed: ["Ciputat", "Tangerang Selatan", "Jabodetabek"],
        audience: {
          "@type": "Audience",
          audienceType: "Pemilik kendaraan yang ingin perpanjang STNK tahunan",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: `${siteUrl}/layanan`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Perpanjang STNK Tahunan",
            item: canonical,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-perpanjang-stnk-tahunan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NOTE: halaman ini nanti akan kamu isi dengan section-section components */}
      <main>
        <header>
          <h1>Jasa Perpanjang STNK Tahunan — Cepat &amp; Tanpa Ribet</h1>
          <p>
            Cek syarat dan alur perpanjang STNK tahunan dengan jelas. Kalau kamu ingin yang praktis,
            tinggal chat—kami bantu arahkan berkas yang dibutuhkan dan langkah berikutnya.
          </p>

          <p>
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              Konsultasi gratis via WhatsApp
            </a>
          </p>
        </header>
      </main>
    </>
  );
}