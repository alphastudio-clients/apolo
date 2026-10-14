"use client";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { IconWhatsappGlyph, IconPin } from "./icons";

/** Abre el selector de sucursal desde cualquier botón. */
export function openBooking() {
  window.dispatchEvent(new CustomEvent("apolo:book"));
}

const MSG = "Hola Apolo! Quiero reservar un turno";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
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
          <a
            href={waLink(`${MSG} en la sucursal Microcentro.`)}
            target="_blank"
            rel="noopener"
            className="branch-opt"
            onClick={() => setOpen(false)}
          >
            <span className="branch-ic"><IconPin /></span>
            <span className="branch-txt">
              <strong>Microcentro</strong>
              <small>Av. Córdoba 612 · CABA</small>
            </span>
            <span className="branch-wa"><IconWhatsappGlyph className="" /></span>
          </a>

          <a
            href={waLink(`${MSG} en la sucursal Tandil.`, site.tandil.whatsappNumber)}
            target="_blank"
            rel="noopener"
            className="branch-opt"
            onClick={() => setOpen(false)}
          >
            <span className="branch-ic"><IconPin /></span>
            <span className="branch-txt">
              <strong>Tandil</strong>
              <small>Nueva sucursal · ubicación cargando</small>
            </span>
            <span className="branch-wa"><IconWhatsappGlyph className="" /></span>
          </a>
        </div>
      </div>
    </div>
  );
}
