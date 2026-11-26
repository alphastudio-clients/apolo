import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Stars from "@/components/Stars";
import Testimonios from "@/components/Testimonios";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppLink from "@/components/WhatsAppLink";
import { IconCheck, IconPin, IconWhatsappGlyph } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Implante capilar FUE en Buenos Aires | Apolo Centro Capilar",
  description:
    "Implante capilar FUE en el Microcentro porteño, con seguimiento médico de 12 a 18 meses incluido. Consultá tu caso por WhatsApp con Apolo Centro Capilar.",
  alternates: { canonical: "/implante-capilar" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Implante capilar FUE en Buenos Aires | Apolo Centro Capilar",
    description: "Implante capilar FUE con seguimiento médico incluido, en el Microcentro de Buenos Aires.",
    siteName: "Apolo",
    url: "/implante-capilar",
    images: [{ url: "/og-apolo.png", width: 1200, height: 630, alt: "Apolo · Centro Capilar y Estético" }],
  },
};

const MSG = "Hola, vengo de la web y quiero consultar por implante capilar";

const incluye = [
  { h: "La intervención FUE", p: "Técnica FUE, folículo por folículo." },
  { h: "Kit de cuidados", p: "Lo que necesitás para cuidar la zona trasplantada después de la cirugía." },
  { h: "Medicación por 3 meses", p: "Para acompañar tu recuperación durante los primeros meses." },
  { h: "1 mesoterapia y 1 plasma bonificados", p: "Después del implante bonificamos una sesión de cada uno, a partir del primer mes de la intervención." },
];

const pagos = ["Pago de contado", "Transferencia", "Tarjeta en 3 cuotas sin interés"];

const pasos = [
  { n: "01", h: "Evaluación", p: "Analizamos tu caso en una consulta presencial o por videollamada: vemos la zona donante, diseñamos la línea y calculamos cuántas unidades foliculares necesitás. Antes de la cirugía pedimos análisis de laboratorio." },
  { n: "02", h: "Día de la cirugía", p: "Se hace con anestesia local y técnica FUE, folículo por folículo, y dura alrededor de 8 horas. Te vas a tu casa ese mismo día, con el kit de cuidados y la medicación para 3 meses." },
  { n: "03", h: "Post cirugía", p: "Te damos indicaciones de lavado y cuidados para los primeros días. Al mes arrancás con la mesoterapia y el plasma bonificados." },
  { n: "04", h: "Controles mensuales", p: "Son mensuales, con seguimiento médico de 12 meses si el implante es frontal o en zona media, o de 18 meses si es en la coronilla." },
];

// Cuando lleguen las fotos (con consentimiento firmado): subirlas a /public/resultados/ y completar `src`.
// next/image las sirve en WebP y con lazy load.
const resultados: { src?: string; alt: string }[] = [
  { alt: "[PENDIENTE: foto antes/después, paciente 1]" },
  { alt: "[PENDIENTE: foto antes/después, paciente 2]" },
  { alt: "[PENDIENTE: reel o foto de paciente 3]" },
];

const faqs = [
  { q: "¿Duele?", a: "No. La cirugía se hace con anestesia local, así que lo único que se siente es el pinchazo de la anestesia al principio. Los primeros días puede haber alguna molestia leve, que se controla con la medicación que te indicamos." },
  { q: "¿Cuánto dura la cirugía?", a: "La cirugía dura unas 8 horas." },
  { q: "¿Cuándo vuelvo a trabajar?", a: "A los 3 días. Para actividad física intensa te damos el alta normalmente a las 2 semanas, y para sol o pileta, a las 4." },
  { q: "¿Es permanente?", a: "Sí. Los folículos se sacan de la zona donante (nuca y costados), que no se ve afectada por la caída hormonal, así que el pelo implantado se mantiene. El pelo propio que no se implantó puede seguir cayendo, y por eso acompañamos con tratamiento. El pelo nuevo empieza a crecer a los 3 meses. El resultado final se ve al año en la zona frontal y al año y medio en la coronilla." },
  { q: "¿Atienden pacientes del exterior?", a: "Sí. Incluimos hotel por 3 días y 2 noches para 2 personas, y los traslados." },
];

const reviewsImplante = site.reviews.filter((r) => r.tema === "implante");

export default function ImplantePage() {
  const g = site.googleReviews;
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link href="/" aria-label="Apolo, inicio"><Logo /></Link>
          <WhatsAppLink ubicacion="nav" text={MSG} className="btn btn-wa">
            <IconWhatsappGlyph className="" /> Consultá por WhatsApp
          </WhatsAppLink>
        </div>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="hero imp-hero">
          <div className="wrap hero-inner">
            <div>
              <span className="eyebrow">Apolo · Centro Capilar · Microcentro</span>
              <h1>Implante capilar FUE <span className="accent">en el Microcentro</span></h1>
              <p className="lead">
                Evaluamos tu caso antes de proponerte nada, y te acompañamos entre 12 y 18 meses después de la cirugía.
              </p>
              <div className="imp-rating">
                <Stars n={5} />
                <span>{g.rating} · {g.countLabel} reseñas en Google</span>
              </div>
              <div className="hero-cta">
                <WhatsAppLink ubicacion="hero" text={MSG} className="btn btn-wa imp-cta-big">
                  <IconWhatsappGlyph className="" /> Consultá tu caso por WhatsApp
                </WhatsAppLink>
              </div>
            </div>
            <div className="hero-card">
              <h3>Seguimiento médico incluido</h3>
              <p className="sub">No te dejamos solo/a después de la cirugía.</p>
              <div className="imp-big">
                <div><strong>12 meses</strong><span>zona frontal o media</span></div>
                <div><strong>18 meses</strong><span>coronilla</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Qué incluye */}
        <section id="incluye">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Qué incluye</span>
              <h2>Todo el proceso, en un solo valor</h2>
              <p>El implante no termina el día de la cirugía. Esto es lo que te llevás con Apolo.</p>
            </div>

            <div className="imp-feature">
              <div className="imp-feature-ico"><IconCheck /></div>
              <div>
                <h3>Seguimiento médico de 12 o 18 meses</h3>
                <p>
                  12 meses si trabajamos la zona frontal o media, y 18 meses si es la coronilla. Controles mensuales con
                  el equipo de Apolo, para cuidar cómo evoluciona tu cabello.
                </p>
              </div>
            </div>

            <div className="grid imp-incl">
              {incluye.map((i) => (
                <div className="card" key={i.h}>
                  <div className="ico"><IconCheck /></div>
                  <h3>{i.h}</h3>
                  <p>{i.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Formas de pago */}
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="imp-pay">
              <div>
                <span className="eyebrow">Formas de pago</span>
                <h2>Elegí cómo pagarlo</h2>
              </div>
              <ul>
                {pagos.map((p) => (
                  <li key={p}><span className="tick"><IconCheck /></span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Proceso */}
        <section id="proceso" style={{ background: "var(--blue-soft)" }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Cómo es el proceso</span>
              <h2>Cuatro pasos, sin sorpresas</h2>
            </div>
            <div className="imp-steps">
              {pasos.map((s) => (
                <div className="imp-step" key={s.n}>
                  <div className="n">{s.n}</div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Resultados */}
        <section id="resultados">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Resultados</span>
              <h2>Pacientes reales, resultados reales</h2>
              <p>Cada caso es distinto y los resultados dependen de cada persona. Publicamos solo fotos de pacientes que nos dieron su autorización firmada.</p>
            </div>
            <div className="imp-results">
              {resultados.map((r, i) => (
                <div className="imp-result" key={i}>
                  {r.src ? (
                    <Image src={r.src} alt={r.alt} fill sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" style={{ objectFit: "cover" }} />
                  ) : (
                    <span>{r.alt}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Reseñas (solo las que hablan de implante) */}
        <Testimonios
          reviews={reviewsImplante}
          title="Lo que cuentan quienes se operaron"
          subtitle="Opiniones reales de pacientes en Google."
        />

        {/* 7. FAQ */}
        <Faq items={faqs} id="preguntas" />

        {/* 8. Ubicación */}
        <section id="ubicacion">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Dónde estamos</span>
              <h2>Av. Córdoba 612, Microcentro</h2>
              <p>San Nicolás, Ciudad de Buenos Aires.</p>
            </div>
            <div className="map" style={{ minHeight: 360 }}>
              <iframe src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`} loading="lazy" title="Ubicación Apolo Microcentro" />
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <WhatsAppLink ubicacion="ubicacion" text={MSG} className="btn btn-wa imp-cta-big">
                <IconWhatsappGlyph className="" /> Consultá tu caso por WhatsApp
              </WhatsAppLink>
              <p className="imp-addr"><IconPin /> {site.address}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* 9. Botón flotante siempre visible: va directo al WhatsApp con el mensaje de implante */}
      <WhatsAppLink ubicacion="flotante" text={MSG} className="fab" aria-label="Consultar por implante capilar por WhatsApp">
        <IconWhatsappGlyph className="" />
      </WhatsAppLink>
    </>
  );
}
