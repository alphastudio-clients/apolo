"use client";
import { useState } from "react";
import Logo from "./Logo";
import { openBooking } from "./BookingModal";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque", label: "Por qué Apolo" },
  { href: "#evaluacion", label: "Evaluación" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" aria-label="Inicio"><Logo /></a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#evaluacion" className="btn btn-ghost">Autoevaluación</a>
          <button type="button" className="btn btn-primary" onClick={openBooking}>Reservar turno</button>
        </div>
        <button className="burger" aria-label="Menú" onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <button type="button" className="btn btn-primary" onClick={() => { setOpen(false); openBooking(); }}>
          Reservar turno
        </button>
      </div>
    </header>
  );
}
