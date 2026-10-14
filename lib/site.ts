// Datos centrales del sitio. Cambiá acá el WhatsApp, mail, etc. y se actualiza en todo el sitio.
export const site = {
  name: "Apolo",
  tagline: "Centro Capilar y Estético",
  city: "Microcentro, Buenos Aires",
  whatsappNumber: "5491173658969", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 11 7365 8969",
  email: "info@apolocentrocapilar.com",
  hours: "Lunes a viernes · 9 a 18 hs",
  instagram: ["@apolo.centrocapilar"],
  // Sucursal nueva en Tandil (ubicación por confirmar)
  tandil: {
    whatsappNumber: "5492494241535", // internacional sin + ni espacios
    whatsappDisplay: "+54 9 249 424-1535",
  },
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
  // Reseñas de Google (dato real, verificable)
  googleReviews: {
    rating: "5,0",
    count: 113,
    url: "https://maps.app.goo.gl/QdQpBrUXZba7hiGd6", // ver el perfil / las reseñas
    reviewUrl: "https://g.page/r/CXrkbnlyjQy0EBM/review", // dejar una reseña (link directo)
  },
  // Testimonios. Los marcados como ejemplo se REEMPLAZAN por reseñas reales de Google.
  // Cuando tengas las reales: poné name/text reales y cambiá `ejemplo: true` por `ejemplo: false`.
  reviews: [
    { name: "Reseña de ejemplo", text: "Pegá acá una reseña real de Google. Nombre del paciente + el texto tal cual lo dejó.", stars: 5, ejemplo: true },
    { name: "Reseña de ejemplo", text: "Pegá acá otra reseña real. Mostrá experiencias de capilar y de estética para cubrir las dos áreas.", stars: 5, ejemplo: true },
    { name: "Reseña de ejemplo", text: "Pegá acá una tercera reseña real. Las que hablan de resultados naturales y atención suelen convertir mejor.", stars: 5, ejemplo: true },
  ],
};

export function waLink(text?: string, number: string = site.whatsappNumber) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
