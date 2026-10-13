// Datos centrales del sitio. Cambiá acá el WhatsApp, mail, etc. y se actualiza en todo el sitio.
export const site = {
  name: "Apolo",
  tagline: "Centro Capilar y Estético",
  city: "Microcentro, Buenos Aires",
  whatsappNumber: "5491173658969", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 11 7365 8969",
  email: "info@apolocentrocapilar.com",
  hours: "Lunes a viernes · 9 a 18 hs",
  instagram: ["@apolo.centrocapilar", "@apolo.centroestetico"],
  // Perfiles oficiales (para SEO/datos estructurados "sameAs")
  social: [
    "https://www.instagram.com/apolo.centrocapilar/",
    "https://www.instagram.com/apolo.centroestetico/",
    "https://www.tiktok.com/@apolo.centroestetico",
  ],
  address: "Av. Córdoba 612, San Nicolás · Microcentro, CABA",
  streetAddress: "Av. Córdoba 612",
  addressLocality: "Ciudad Autónoma de Buenos Aires",
  addressRegion: "CABA",
  postalCode: "C1054AAS",
  geo: { lat: -34.5988576, lng: -58.3755861 },
  mapQuery: "-34.5988576,-58.3755861",
  url: "https://apolocentro.com.ar", // dominio oficial
  stats: [
    { num: "+2.000", label: "Tratamientos realizados" },
    { num: "2", label: "Áreas: capilar y estética" },
    { num: "100%", label: "Atención personalizada" },
  ],
};

export function waLink(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
