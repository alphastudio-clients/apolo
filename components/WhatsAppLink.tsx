"use client";
import { useEffect, useState, type MouseEventHandler, type ReactNode } from "react";
import { site, waLink } from "@/lib/site";
import { getRef, textWithRef, trackTel, trackWhatsapp, type Sede } from "@/lib/track";

const NUMBERS: Record<Sede, string> = {
  microcentro: site.whatsappNumber,
  tandil: site.tandil.whatsappNumber,
};

type Props = {
  sede?: Sede;
  /** Dónde está el botón: hero, servicios, ubicacion, flotante, autoevaluacion, footer... */
  ubicacion: string;
  /** Texto prellenado de WhatsApp (se le suma "(ref: ...)" si el visitante vino de Google). */
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
  children: ReactNode;
};

/** Único componente para links a wa.me: mide el clic y agrega la referencia de origen. */
export default function WhatsAppLink({ sede = "microcentro", ubicacion, text, onClick, children, ...rest }: Props) {
  const [ref, setRef] = useState("");
  useEffect(() => setRef(getRef()), []);

  return (
    <a
      {...rest}
      href={waLink(textWithRef(text, ref), NUMBERS[sede])}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        trackWhatsapp(sede, ubicacion);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

/** Link tel: con medición (tel_click). */
export function TelLink({
  tel, sede = "microcentro", ubicacion, children,
}: { tel: string; sede?: Sede; ubicacion: string; children: ReactNode }) {
  return (
    <a href={`tel:${tel}`} onClick={() => trackTel(sede, ubicacion)}>
      {children}
    </a>
  );
}
