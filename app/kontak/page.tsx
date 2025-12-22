// app/kontak/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

const siteName = "Birojasa Sahabat";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const pageTitle = `Kontak & Lokasi | ${siteName}`;
const pageDescription =
  "Hubungi Biro Jasa Sahabat via WhatsApp +6281318927898. Alamat: Serua Indah, Ciputat. Lihat lokasi di Google Maps dan konsultasi gratis.";

const canonical = `${siteUrl}/kontak`;

const waMessage = "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6281318927898?text=${encodeURIComponent(waMessage)}`;

const mapsHref = "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6";

// Sumber iframe resmi dari BRAND-PROFILE-BIROJASA-SAHABAT.md
const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6532356893217!2d106.7216366!3d-6.3092055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e56ea58af423%3A0xbbcdfa50c6a4400c!2sBiro%20Jasa%20Stnk%20Bpkb%20Sahabat!5e0!3m2!1sen!2sus!4v1766370931730!5m2!1sen!2sus";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "kontak biro jasa stnk",
    "biro jasa stnk ciputat",
    "biro jasa stnk tangerang selatan",
    "alamat biro jasa sahabat",
    "lokasi biro jasa stnk serua indah",
    "konsultasi biro jasa stnk",
    "whatsapp biro jasa stnk",
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
        alt: "Birojasa Sahabat — Kontak & Lokasi",
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

export default function KontakPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#birojasa-sahabat`,
        name: siteName,
        url: siteUrl,
        telephone: "+6281318927898",
        hasMap: mapsHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah",
          addressLocality: "Ciputat",
          addressRegion: "Banten",
          postalCode: "15414",
          addressCountry: "ID",
        },
        areaServed: ["Ciputat", "Tangerang Selatan", "Jabodetabek"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+6281318927898",
            contactType: "customer service",
            availableLanguage: ["id"],
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${canonical}#contact`,
        url: canonical,
        name: "Kontak & Lokasi Biro Jasa Sahabat",
        description: pageDescription,
        mainEntity: { "@id": `${siteUrl}#birojasa-sahabat` },
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-kontak"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NOTE: halaman ini nanti akan kamu isi dengan section-section components */}
      <main>
        <header>
          <h1>Kontak & Lokasi Biro Jasa Sahabat</h1>
          <p>
            Untuk konsultasi layanan pengurusan STNK & berkas kendaraan, silakan hubungi kami melalui
            WhatsApp. Kamu juga bisa cek lokasi kantor kami di Ciputat melalui Google Maps.
          </p>
        </header>

        <section aria-label="Info kontak">
          <h2>Hubungi Kami</h2>
          <ul>
            <li>
              WhatsApp:{" "}
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                +62 813-1892-7898
              </a>
            </li>
            <li>
              Google Maps:{" "}
              <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                Lihat lokasi
              </a>
            </li>
            <li>Jam operasional: Silakan konfirmasi via WhatsApp (jam dapat berubah).</li>
          </ul>
        </section>

        <section aria-label="Alamat">
          <h2>Alamat</h2>
          <address>
            Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah, Ciputat, South Tangerang City, Banten 15414,
            Indonesia
          </address>
        </section>

        <section aria-label="Peta lokasi">
          <h2>Lokasi di Maps</h2>
          <iframe
            src={mapsEmbedSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta lokasi Birojasa Sahabat"
          />
        </section>
      </main>
    </>
  );
}