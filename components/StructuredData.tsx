import { site } from "@/lib/site";

/**
 * Datos estructurados (JSON-LD) para Google.
 * Describe el negocio local + los tratamientos, para que Apolo aparezca cuando
 * alguien busca "implante capilar", "depilación láser microcentro", etc.
 */
const servicios = [
  "Implante capilar FUE", "Tratamiento anticaída", "Mesoterapia capilar",
  "Plasma rico en plaquetas (PRP)", "Exosomas", "Evaluación y tricoscopía",
  "Depilación láser", "Masajes", "Exfoliación corporal",
  "Despigmentante corporal", "Despigmentante zona íntima", "Despigmentante facial",
  "Tratamiento anti-acné", "Ultrahidratación facial", "Peeling químico",
];

export default function StructuredData() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: "AR",
  };
  if (site.streetAddress) address.streetAddress = site.streetAddress;
  if (site.postalCode) address.postalCode = site.postalCode;

  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Apolo · Centro Capilar y Estético",
    description:
      "Centro capilar y estético en el Microcentro de Buenos Aires: implante capilar FUE, tratamientos anticaída, PRP, exosomas, depilación láser, despigmentantes, peeling y más.",
    url: site.url,
    image: `${site.url}/apolo-logo-fondoazul.png`,
    logo: `${site.url}/apolo-logo-fondoazul.png`,
    telephone: site.whatsappDisplay,
    email: site.email,
    priceRange: "$$",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`,
    areaServed: { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: site.social,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos",
      itemListElement: servicios.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
