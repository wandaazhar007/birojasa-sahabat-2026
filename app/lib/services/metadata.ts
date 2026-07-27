import type { Metadata } from "next";
import { ogImage, siteName, siteUrl } from "./site-config";
import type { ServiceData } from "./types";

export function buildServiceMetadata(data: ServiceData): Metadata {
  const canonical = `${siteUrl}/layanan/${data.slug}`;
  // Root layout applies a "%s | {siteName}" title template, so the plain
  // `title` here must stay unsuffixed. OpenGraph/Twitter titles aren't
  // templated, so they need the suffix spelled out explicitly.
  const fullTitle = `${data.pageTitle} | ${siteName}`;

  return {
    metadataBase: new URL(siteUrl),
    title: data.pageTitle,
    description: data.pageDescription,
    keywords: data.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: canonical,
      siteName,
      title: fullTitle,
      description: data.pageDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: data.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: data.pageDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
