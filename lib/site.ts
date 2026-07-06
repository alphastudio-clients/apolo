// Datos centrales del sitio. Cambiá acá el WhatsApp, mail, etc. y se actualiza en todo el sitio.
export const site = {
  name: "Apolo",
  tagline: "Centro Capilar y Estético",
  city: "Microcentro, Buenos Aires",
  whatsappNumber: "5491173658969", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 11 7365 8969",
  email: "info@apolocentrocapilar.com",
  hours: "Lunes a viernes · 9 a 19 hs",
  instagram: ["@apolo.centrocapilar", "@apolo.centroestetico"],
  address: "Microcentro, Ciudad Autónoma de Buenos Aires, Argentina",
  mapQuery: "Microcentro,Buenos+Aires,Argentina",
  url: "https://apolo-ochre.vercel.app", // cambiar por el dominio propio cuando lo tengan (ej: apolocentrocapilar.com)
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
