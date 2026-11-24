import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { site } from "@/lib/site";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";
import { CONSENT_KEY, GTM_ID } from "@/lib/track";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: "Apolo · Centro Capilar y Estético · Microcentro, Buenos Aires",
  description:
    "Apolo Centro Capilar y Estético en Microcentro, Buenos Aires. Implante capilar, tratamientos anticaída, depilación láser, despigmentantes, peeling, anti-acné y más. Turnos por WhatsApp.",
  keywords: [
    "centro capilar", "implante capilar", "estética", "depilación láser",
    "Microcentro", "Buenos Aires", "Apolo", "tratamiento anticaída", "PRP",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Apolo · Centro Capilar y Estético",
    description: "Tratamientos capilares y estéticos con criterio profesional en el Microcentro porteño.",
    siteName: "Apolo",
    images: [{ url: "/og-apolo.png", width: 1200, height: 630, alt: "Apolo · Centro Capilar y Estético" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apolo · Centro Capilar y Estético",
    description: "Tratamientos capilares y estéticos con criterio profesional en el Microcentro porteño.",
    images: ["/og-apolo.png"],
  },
  robots: { index: true, follow: true },
};

/**
 * Google Tag Manager + Consent Mode v2, en UN solo script para garantizar el orden:
 *  1) define dataLayer y gtag
 *  2) consentimiento por defecto: TODO denegado
 *  3) si la persona ya había aceptado antes, lo restaura
 *  4) recién ahí carga GTM
 * GA4 y la etiqueta de Google Ads se configuran DENTRO de GTM, no acá.
 */
const gtmBootstrap = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Script id="gtm-consent-bootstrap" strategy="beforeInteractive">{gtmBootstrap}</Script>
        <StructuredData />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
