"use client";
import { openBooking } from "./BookingModal";
import { IconWhatsappGlyph } from "./icons";

export default function WhatsAppFab() {
  return (
    <button type="button" className="fab" aria-label="Reservar turno por WhatsApp" onClick={openBooking}>
      <IconWhatsappGlyph className="" />
    </button>
  );
}
