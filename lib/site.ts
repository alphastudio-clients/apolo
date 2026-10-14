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
  // Testimonios reales (reseñas de Google). Para sumar más: copiá el formato.
  reviews: [
    { name: "Franco Basilio", date: "hace 3 meses", stars: 5, ejemplo: false, text: "Excelente servicio el que me dieron. Me realicé un transplante hace unos 7 meses aproximadamente y no puedo estar más contento. Me hicieron recuperar la confianza. Estoy muy agradecido con ellos. ¡Recomendadísimo!" },
    { name: "Max Teves", date: "hace un mes", stars: 5, ejemplo: false, text: "¡Increíble espacio! Los chicos te escuchan, te ofrecen sus diferentes opciones, la mejor para cada uno, te acompañan a cada paso que das antes, durante y post tratamiento." },
    { name: "Wilfrido Cortessi", date: "hace 10 meses", stars: 5, ejemplo: false, text: "Súper recomendable, nos recibieron muy bien, la atención impecable, muy buen equipo, todos muy atentos. Me explican todo detalladamente para que no queden dudas, y lo mismo la atención post cirugía." },
    { name: "German Schamber", date: "hace 6 meses", stars: 5, ejemplo: false, text: "Realmente son un equipo muy profesional. Excelente atención y resultados fabulosos. Para quienes tienen miedo, les digo que vale la pena intentarlo." },
    { name: "Angel Gines", date: "hace 6 meses", stars: 5, ejemplo: false, text: "Todo de 10 la experiencia en general. Los chicos, unos genios, siempre muy atentos antes, durante y después, con un trato personalizado impecable. ¡Altamente recomendable!" },
  ],
};

export function waLink(text?: string, number: string = site.whatsappNumber) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
