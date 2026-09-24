import { openingHours, siteConfig } from "@/data/site";

export function restaurantJsonLd() {
  const { address, social, baseUrl } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.seo.description,
    url: baseUrl,
    image: `${baseUrl}/images/casa-janelas.jpg`,
    telephone: siteConfig.phone.tel,
    servesCuisine: "Culinária Mineira",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: address.geo.lat, longitude: address.geo.lng },
    hasMap: social.googleMaps,
    sameAs: [social.instagram, social.googleMaps],
    openingHoursSpecification: openingHours
      .filter((d) => d.open)
      .map((d) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: d.schemaDay,
        opens: d.open,
        closes: d.close,
      })),
  };
}
