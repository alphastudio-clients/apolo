import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
