// app/layanan/perpanjang-stnk-tahunan/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroService from "@/app/components/heroService/HeroService";
import BenefitsSummary from "@/app/components/benefitsSummary/BenefitsSummary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

const siteName = "Birojasa Sahabat";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const canonical = `${siteUrl}/layanan/perpanjang-stnk-tahunan`;

const pageTitle = `Jasa Perpanjang STNK Tahunan | ${siteName}`;
const pageDescription =
  "Jasa perpanjang STNK tahunan dengan persyaratan jelas (STNK asli, KTP asli, surat kuasa) dan alur proses transparan. Birojasa Sahabat bantu kamu tanpa antre & bolak-balik. Konsultasi gratis via WhatsApp +6281318927898.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa perpanjang STNK tahunan",
    "perpanjang STNK tahunan",
    "syarat perpanjang STNK tahunan",
    "cara perpanjang STNK tahunan",
    "biro jasa STNK",
    "biro jasa perpanjang STNK",
    "tanpa antre perpanjang STNK",
    "urus STNK cepat",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "jasa STNK Jabodetabek",
    "konsultasi gratis WhatsApp",
  ],
  alternates: { canonical },
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
        alt: "Birojasa Sahabat — Jasa Perpanjang STNK Tahunan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function PerpanjangStnkTahunanPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal perpanjang STNK tahunan.";
  const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(
    waMessage
  )}`;

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
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: waHref,
            servicePhone: "+6281318927898",
            availableLanguage: ["id"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Layanan", item: `${siteUrl}/layanan` },
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

      <main>
        <HeroService
          title="Jasa Perpanjang STNK Tahunan"
          subtitle="Tanpa antre & bolak-balik—kami bantu cek persyaratan berkas, jelaskan alur, dan dampingi prosesnya dengan komunikasi yang rapi."
          description="Cocok untuk kamu yang ingin proses yang jelas dan aman. Mulai dari chat WhatsApp dulu—kami arahkan berkas yang dibutuhkan sesuai kondisi dokumen dan area."
          badgeText="Layanan STNK"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal perpanjang STNK tahunan."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Perpanjang STNK Tahunan", href: "/layanan/perpanjang-stnk-tahunan" },
          ]}
          highlights={[
            {
              title: "Persyaratan jelas",
              description: "STNK asli, KTP asli, dan surat kuasa—kami bantu cek dari awal.",
            },
            {
              title: "Transparan & rapi",
              description: "Alur proses dijelaskan, status di-update, tidak bikin bingung.",
            },
            {
              title: "Berkas aman",
              description: "Penanganan dokumen tertib dan komunikasi responsif.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat perpanjang STNK tahunan"
          subheading="Biar kamu nggak bingung dan nggak capek bolak-balik—ini yang kamu dapat saat proses bareng Birojasa Sahabat."
          items={[
            {
              title: "Tidak perlu antre & bolak-balik",
              description:
                "Kamu tinggal konsultasi, kami arahkan persyaratan dari awal dan bantu jalankan prosesnya dengan rapi.",
            },
            {
              title: "Persyaratan berkas jelas",
              description:
                "Untuk STNK tahunan, umumnya: STNK asli, KTP asli, dan surat kuasa (jika diwakilkan).",
            },
            {
              title: "Biaya & langkah transparan",
              description:
                "Kami jelaskan alur dan komponen prosesnya sejak awal supaya tidak ada kejutan yang bikin ragu.",
            },
            {
              title: "Berkas ditangani dengan aman",
              description:
                "Dokumen penting ditangani tertib. Komunikasi status juga jelas supaya kamu tenang.",
            },
            {
              title: "Update progress responsif",
              description:
                "Kamu bisa tanya kapan saja via WhatsApp, dan kami bantu pantau progres secara informatif.",
            },
          ]}
        />

        {/* NEXT SECTIONS (step berikutnya):
            - Persyaratan dokumen (detail)
            - Alur proses
            - Estimasi
            - FAQ mini
            - CTA closing
        */}
      </main>
    </>
  );
}