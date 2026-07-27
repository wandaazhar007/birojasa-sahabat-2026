export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://birojasa-sahabat.com";

export const siteName = "Biro Jasa Sahabat";
export const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;
export const phoneNumber = "+6281318927898";
export const waNumber = "6281318927898";

export const businessAddress = {
  streetAddress: "Jl. Suka Bakti 1 No.30, RT.4/RW.5, Serua Indah",
  addressLocality: "Ciputat",
  addressRegion: "Banten",
  postalCode: "15414",
  addressCountry: "ID",
};

export const areaServed = ["Ciputat", "Tangerang Selatan", "Jabodetabek"];
export const mapsUrl = "https://maps.app.goo.gl/QTkL6nb7D7fuAxmz6";

export function waHref(message: string) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}
