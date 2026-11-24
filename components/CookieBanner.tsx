"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { hasConsentChoice, setConsent } from "@/lib/track";

/** Banner simple de cookies. Todo está denegado hasta que la persona acepta (Consent Mode v2). */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasConsentChoice()) setShow(true);
    const open = () => setShow(true);
    window.addEventListener("apolo:cookies", open);
    return () => window.removeEventListener("apolo:cookies", open);
  }, []);

  if (!show) return null;

  function choose(granted: boolean) {
    setConsent(granted);
    setShow(false);
  }

  return (
    <div className="cookie" role="dialog" aria-label="Preferencias de cookies">
      <p>
        Usamos cookies para medir cuántas personas nos visitan y mejorar nuestros anuncios.
        Si no querés, no pasa nada: el sitio funciona igual.{" "}
        <Link href="/privacidad">Más info</Link>
      </p>
      <div className="cookie-btns">
        <button type="button" className="btn btn-ghost" onClick={() => choose(false)}>Rechazar</button>
        <button type="button" className="btn btn-primary" onClick={() => choose(true)}>Aceptar</button>
      </div>
    </div>
  );
}
