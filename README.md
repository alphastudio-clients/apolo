# Apolo · Landing (Next.js)

Landing one-page de **Apolo · Centro Capilar y Estético** (Microcentro, Buenos Aires).
Construida con **Next.js (App Router) + TypeScript**, lista para desplegar en **Vercel**.

> Nota: este proyecto es la **landing comercial**. No confundir con la carpeta
> `../ApoloCentroCapilar/`, que es el *brief estratégico de marca de Alpha Studio*.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:4021

## Estructura

```
app/
  layout.tsx        Fuentes (Inter + Cormorant), metadatos y SEO
  page.tsx          Ensambla las secciones
  globals.css       Estilos (paleta azul/blanco)
  api/lead/route.ts Recibe y guarda/reenvía los leads del calificador
components/          Nav, Hero, TrustBar, Services, WhyApolo, Qualifier, Location, Faq, Footer...
lib/site.ts         Datos centrales (WhatsApp, email, horarios, stats). Editar acá.
public/             Assets (poner el logo acá)
```

## Cambiar datos de contacto

Editá `lib/site.ts` (WhatsApp, email, horarios, dirección, stats). Se actualiza en todo el sitio.

## Logo

Cuando esté el logo, ponelo en `public/` (ej: `public/logo.svg`) y editá `components/Logo.tsx`
reemplazando el SVG placeholder por `<img src="/logo.svg" alt="Apolo" />`.

## Leads (calificador)

El formulario del calificador hace `POST /api/lead`. Según las variables de entorno
(ver `.env.example`) el lead se puede:

- enviar a un **webhook** (Google Sheet vía Apps Script, Make, Zapier…) → `LEAD_WEBHOOK_URL`
- enviar por **email** con Resend → `RESEND_API_KEY`

Sin variables configuradas, el lead queda en los **logs de Vercel** y el WhatsApp funciona igual.

## Deploy en Vercel

1. Subir la carpeta a un repo (GitHub).
2. Importar el repo en Vercel (detecta Next.js automáticamente).
3. Cargar las variables de entorno si se usan.
4. Deploy.
