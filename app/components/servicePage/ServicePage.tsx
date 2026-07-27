import Script from "next/script";

import HeroService from "@/app/components/heroService/HeroService";
import BenefitsSummary from "@/app/components/benefitsSummary/BenefitsSummary";
import PersyaratanDokumen from "@/app/components/persyaratanDokumen/PersyaratanDokumen";
import AlurProses from "@/app/components/alurProses/AlurProses";
import Estimasi from "@/app/components/estimasi/Estimasi";
import FaqMini from "@/app/components/faqMini/FaqMini";
import CtaClosingService from "@/app/components/ctaClosingService/CtaClosingService";

import { buildServiceJsonLd } from "@/app/lib/services/json-ld";
import type { ServiceData } from "@/app/lib/services/types";

export default function ServicePage({ data }: { data: ServiceData }) {
  const jsonLd = buildServiceJsonLd(data);

  return (
    <>
      <Script
        id={`jsonld-${data.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          badgeText={data.hero.badgeText}
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage={data.waMessage}
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: data.breadcrumbLabel, href: `/layanan/${data.slug}` },
          ]}
          highlights={data.hero.highlights}
        />

        <BenefitsSummary
          heading={data.benefits.heading}
          subheading={data.benefits.subheading}
          items={data.benefits.items}
        />

        <PersyaratanDokumen
          heading={data.requirements.heading}
          subheading={data.requirements.subheading}
          items={data.requirements.items}
        />

        <AlurProses
          heading={data.process.heading}
          subheading={data.process.subheading}
          steps={data.process.steps}
        />

        <Estimasi
          heading={data.estimate.heading}
          subheading={data.estimate.subheading}
          points={data.estimate.points}
        />

        <FaqMini
          kickerText={data.faq.kickerText}
          title={data.faq.title}
          subtitle={data.faq.subtitle}
          waMessage={data.waMessage}
          faqs={data.faq.items}
        />

        <CtaClosingService
          heading={data.cta.heading}
          subheading={data.cta.subheading}
          waMessage={data.waMessage}
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}
