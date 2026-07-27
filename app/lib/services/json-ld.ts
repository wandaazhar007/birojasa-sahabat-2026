import {
  areaServed,
  businessAddress,
  mapsUrl,
  phoneNumber,
  siteName,
  siteUrl,
  waHref,
} from "./site-config";
import type { ServiceData } from "./types";

export function buildServiceJsonLd(data: ServiceData) {
  const canonical = `${siteUrl}/layanan/${data.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#birojasa-sahabat`,
        name: siteName,
        url: siteUrl,
        telephone: phoneNumber,
        hasMap: mapsUrl,
        address: {
          "@type": "PostalAddress",
          ...businessAddress,
        },
        areaServed,
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: data.webPageName,
        description: data.pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#birojasa-sahabat` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: data.serviceName,
        serviceType: data.serviceType,
        url: canonical,
        description: data.serviceDescription,
        provider: { "@id": `${siteUrl}#birojasa-sahabat` },
        areaServed,
        audience: {
          "@type": "Audience",
          audienceType: data.audienceType,
        },
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: waHref(data.waMessage),
            servicePhone: phoneNumber,
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
          { "@type": "ListItem", position: 3, name: data.breadcrumbLabel, item: canonical },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "id-ID",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: data.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}
