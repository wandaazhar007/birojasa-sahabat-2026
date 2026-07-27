export type Highlight = {
  title: string;
  description: string;
  icon?: any;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon?: any;
};

export type RequirementItem = {
  label: string;
  note?: string;
  icon?: any;
};

export type StepItem = {
  title: string;
  description: string;
  icon?: any;
};

export type EstimasiPoint = {
  title: string;
  description: string;
  icon?: any;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ServiceData = {
  slug: string;
  jsonLdId: string;

  // SEO
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
  ogAlt: string;

  // JSON-LD
  webPageName: string;
  serviceName: string;
  serviceType: string;
  serviceDescription: string;
  audienceType: string;
  breadcrumbLabel: string;

  // shared WhatsApp message for this service
  waMessage: string;

  // HeroService
  hero: {
    title: string;
    subtitle: string;
    description: string;
    badgeText: string;
    highlights: Highlight[];
  };

  // BenefitsSummary
  benefits: {
    heading: string;
    subheading: string;
    items: BenefitItem[];
  };

  // PersyaratanDokumen
  requirements: {
    heading: string;
    subheading: string;
    items: RequirementItem[];
  };

  // AlurProses
  process: {
    heading: string;
    subheading: string;
    steps: StepItem[];
  };

  // Estimasi
  estimate: {
    heading: string;
    subheading: string;
    points: EstimasiPoint[];
  };

  // FaqMini
  faq: {
    kickerText: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };

  // CtaClosingService
  cta: {
    heading: string;
    subheading: string;
  };
};
