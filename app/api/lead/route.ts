import { NextResponse } from "next/server";

/**
 * Endpoint que recibe los leads del calificador.
 *
 * Guarda / reenvía el lead según las variables de entorno configuradas (todas opcionales).
 * Configuralas en Vercel → Project → Settings → Environment Variables.
 *
 *   LEAD_WEBHOOK_URL   → URL de un webhook (Google Apps Script, Make, Zapier, n8n...).
 *                        Se le hace POST con el JSON del lead. Es la opción más simple
 *                        para mandar los datos a un Google Sheet.
 *   RESEND_API_KEY     → API key de Resend para enviar el lead por email.
 *   LEAD_EMAIL_TO      → email destino (por defecto info@apolocentrocapilar.com).
 *   LEAD_EMAIL_FROM    → remitente verificado en Resend (por defecto onboarding@resend.dev).
 *
 * Si no hay nada configurado, igual responde OK y deja el lead en los logs de Vercel,
 * así el sitio funciona desde el primer deploy. El WhatsApp del cliente funciona siempre.
 */

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  interes?: string;
  tiempo?: string;
  experiencia?: string;
  cuando?: string;
  score?: number;
  clasificacion?: string;
  fecha?: string;
};

export async function POST(req: Request) {
  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  if (!lead?.name || !lead?.phone) {
    return NextResponse.json({ ok: false, error: "Faltan nombre o teléfono" }, { status: 400 });
  }

  // Siempre queda registrado en los logs de la función (Vercel → Logs)
  console.log("[LEAD]", JSON.stringify(lead));

  const tasks: Promise<unknown>[] = [];

  // 1) Webhook (ideal para Google Sheet vía Apps Script / Make / Zapier)
  if (process.env.LEAD_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((e) => console.error("webhook error", e))
    );
  }

  // 2) Email por Resend
  if (process.env.RESEND_API_KEY) {
    const to = process.env.LEAD_EMAIL_TO || "info@apolocentrocapilar.com";
    const from = process.env.LEAD_EMAIL_FROM || "Apolo Web <onboarding@resend.dev>";
    const html = `
      <h2>Nuevo lead — ${lead.clasificacion || ""}</h2>
      <ul>
        <li><b>Nombre:</b> ${lead.name}</li>
        <li><b>WhatsApp:</b> ${lead.phone}</li>
        <li><b>Email:</b> ${lead.email || "-"}</li>
        <li><b>Interés:</b> ${lead.interes || "-"}</li>
        <li><b>Tiempo:</b> ${lead.tiempo || "-"}</li>
        <li><b>Experiencia:</b> ${lead.experiencia || "-"}</li>
        <li><b>Cuándo comenzar:</b> ${lead.cuando || "-"}</li>
        <li><b>Fecha:</b> ${lead.fecha || "-"}</li>
      </ul>`;
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({ from, to, subject: `Nuevo lead Apolo — ${lead.name}`, html }),
      }).catch((e) => console.error("resend error", e))
    );
  }

  await Promise.allSettled(tasks);

  return NextResponse.json({ ok: true });
}
