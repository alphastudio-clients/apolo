"use client";
import { useEffect, useState } from "react";
import WhatsAppLink from "./WhatsAppLink";
import { IconWhatsappGlyph, IconPin } from "./icons";

/** Abre el selector de sucursal desde cualquier botón. `origen` = dónde estaba el botón (nav, flotante...). */
export function openBooking(origen: string = "nav") {
  window.dispatchEvent(new CustomEvent("apolo:book", { detail: origen }));
}

const MSG = "Hola Apolo! Quiero reservar un turno";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [origen, setOrigen] = useState("nav");

  useEffect(() => {
    const show = (e: Event) => {
      setOrigen(String((e as CustomEvent).detail || "nav"));
      setOpen(true);
    };
    window.addEventListener("apolo:book", show);
    return () => window.removeEventListener("apolo:book", show);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
        <span className="eyebrow">Reservar turno</span>
        <h3 className="modal-title">¿En qué sucursal?</h3>
        <p className="modal-sub">Elegí la sucursal y te derivamos al WhatsApp correspondiente.</p>

        <div className="branch-opts">
          <WhatsAppLink
            sede="microcentro"
            ubicacion={origen}
            text={`${MSG} en la sucursal Microcentro.`}
            className="branch-opt"
            onClick={() => setOpen(false)}
          >
            <span className="branch-ic"><IconPin /></span>
            <span className="branch-txt">
              <strong>Microcentro</strong>
              <small>Av. Córdoba 612 · CABA</small>
            </span>
            <span className="branch-wa"><IconWhatsappGlyph className="" /></span>
          </WhatsAppLink>

          <WhatsAppLink
            sede="tandil"
            ubicacion={origen}
            text={`${MSG} en la sucursal Tandil.`}
            className="branch-opt"
            onClick={() => setOpen(false)}
          >
            <span className="branch-ic"><IconPin /></span>
            <span className="branch-txt">
              <strong>Tandil</strong>
              <small>Nueva sucursal · ubicación cargando</small>
            </span>
            <span className="branch-wa"><IconWhatsappGlyph className="" /></span>
          </WhatsAppLink>
        </div>
      </div>
    </div>
  );
}
