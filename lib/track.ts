/**
 * Medición (Google Tag Manager + dataLayer + Consent Mode v2).
 *
 * Todo lo que se manda a Google pasa por acá. Regla: NUNCA mandar datos personales
 * (nombre, teléfono, email, respuestas de la autoevaluación). Solo categorías generales.
 */

export const GTM_ID = "GTM-W259TSQG";
export const CONSENT_KEY = "apolo_consent"; // "granted" | "denied"
const REF_KEY = "apolo_ref";

export type Sede = "microcentro" | "tandil";
export type Area = "cabello" | "piel" | "cuerpo" | "no_seguro";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, string | number | boolean>;

/** Empuja un evento al dataLayer (GTM decide qué hacer con él). */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackWhatsapp(sede: Sede, ubicacion: string) {
  track("whatsapp_click", { sede, ubicacion_boton: ubicacion });
}

export function trackTel(sede: Sede, ubicacion: string) {
  track("tel_click", { sede, ubicacion_boton: ubicacion });
}

export function trackQuizStart() {
  track("autoevaluacion_inicio");
}

/** `area` es solo la categoría general (cabello / piel / cuerpo / no_seguro). */
export function trackQuizComplete(area: Area) {
  track("autoevaluacion_completa", { area });
}

/* ------------------------- Consent Mode v2 ------------------------- */

export function setConsent(granted: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {
    /* modo privado: seguimos igual */
  }
  const v = granted ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

export function hasConsentChoice(): boolean {
  try {
    return !!localStorage.getItem(CONSENT_KEY);
  } catch {
    return false;
  }
}

export function openCookiePrefs() {
  window.dispatchEvent(new CustomEvent("apolo:cookies"));
}

/* ------------------- Origen del lead (gclid / UTM) ------------------- */

const clean = (s: string, max: number) => s.replace(/[^A-Za-z0-9_-]/g, "").slice(0, max);

/**
 * Si la URL trae ?gclid= o ?utm_source=, lo guarda en sessionStorage.
 * Devuelve la referencia corta ("G-test123", "U-google") o "" si no hay.
 * Es idempotente: se puede llamar las veces que haga falta.
 */
export function getRef(): string {
  if (typeof window === "undefined") return "";
  try {
    const q = new URLSearchParams(window.location.search);
    const gclid = q.get("gclid");
    const src = q.get("utm_source");
    if (gclid) sessionStorage.setItem(REF_KEY, `G-${clean(gclid, 8)}`);
    else if (src) sessionStorage.setItem(REF_KEY, `U-${clean(src, 20)}`);
    return sessionStorage.getItem(REF_KEY) || "";
  } catch {
    return "";
  }
}

const DEFAULT_TEXT = "Hola Apolo! Quiero hacer una consulta";

/**
 * Agrega "(ref: ...)" al final del texto prellenado de WhatsApp.
 * Sin ref y sin texto devuelve undefined (el link queda como siempre, sin mensaje).
 */
export function textWithRef(text: string | undefined, ref: string): string | undefined {
  if (!ref) return text;
  return `${text || DEFAULT_TEXT} (ref: ${ref})`;
}
