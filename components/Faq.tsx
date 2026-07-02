"use client";
import { useState } from "react";

const faqs = [
  { q: "¿La primera evaluación tiene costo?", a: "La evaluación inicial nos permite entender tu caso antes de recomendarte un tratamiento. Escribinos por WhatsApp y te contamos las condiciones vigentes." },
  { q: "¿Atienden a hombres y mujeres?", a: "Sí. Apolo es un espacio respetuoso y abierto a todo público. Atendemos a todas las personas que quieran cuidar su cabello, su piel y su cuerpo." },
  { q: "¿Cómo saco un turno?", a: "El canal principal es WhatsApp. Podés hacer la autoevaluación de esta página o escribirnos directamente al número de contacto." },
  { q: "¿Dónde queda el centro?", a: "Estamos en el Microcentro de la Ciudad de Buenos Aires, con fácil acceso en transporte público." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" style={{ background: "var(--blue-soft)" }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2>Lo que más nos consultan</h2>
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} type="button">
                {f.q} <span className="plus">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
