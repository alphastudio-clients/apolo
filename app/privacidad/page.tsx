import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import CookiePrefsLink from "@/components/CookiePrefsLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | Apolo Centro Capilar",
  description: "Qué datos recolecta el sitio de Apolo, para qué los usamos y cómo contactarnos.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function Privacidad() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link href="/" aria-label="Apolo, inicio"><Logo /></Link>
          <Link href="/" className="btn btn-ghost">Volver al inicio</Link>
        </div>
      </header>

      <main>
        <section>
          <div className="wrap legal">
            <span className="eyebrow">Política de privacidad</span>
            <h1>Tus datos, en claro</h1>
            <p className="legal-date">Última actualización: [PENDIENTE: fecha de publicación]</p>

            <h2>Quiénes somos</h2>
            <p>
              Apolo · Centro Capilar y Estético ({site.url.replace("https://", "")}). Responsable de este sitio:
              [PENDIENTE: razón social y CUIT del titular]. Podés escribirnos a{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>Qué datos recolectamos</h2>
            <ul>
              <li>
                <b>Lo que nos escribís por WhatsApp.</b> Cuando tocás un botón de WhatsApp se abre una conversación
                con nosotros, con un mensaje prearmado. Lo que escribas ahí (nombre, consulta, fotos si nos las
                mandás) lo recibimos nosotros y lo usamos para responderte y coordinar tu turno.
              </li>
              <li>
                <b>La autoevaluación.</b> Si la completás, guardamos tu nombre, teléfono, email (opcional) y tus
                respuestas, para contactarte con una recomendación.
              </li>
              <li>
                <b>Cookies de medición.</b> Si las aceptás, usamos Google Tag Manager, Google Analytics y Google Ads
                para saber cuántas personas visitan el sitio, de dónde llegan y si nuestros anuncios funcionan. Estas
                herramientas guardan cookies e identificadores en tu navegador. No les enviamos tu nombre, teléfono
                ni tus respuestas de la autoevaluación.
              </li>
            </ul>

            <h2>Para qué los usamos</h2>
            <p>
              Para responder tus consultas, coordinar turnos, mejorar el sitio y medir nuestros anuncios.
              <b> No vendemos ni alquilamos tus datos</b> a terceros.
            </p>

            <h2>Cookies: vos decidís</h2>
            <p>
              Hasta que aceptes, las cookies de medición y publicidad están desactivadas. Podés cambiar tu elección
              cuando quieras: <CookiePrefsLink />.
            </p>

            <h2>Tus derechos</h2>
            <p>
              Podés pedirnos acceder a tus datos, corregirlos o que los eliminemos escribiendo a{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. En Argentina, la Agencia de Acceso a la Información
              Pública es el órgano de control de la Ley 25.326 de protección de datos personales.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
