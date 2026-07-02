"use client";
import { useState, type ReactNode } from "react";
import {
  IconSprout, IconShield, IconSyringe, IconDroplet, IconSearch, IconWhatsapp,
  IconZap, IconHands, IconRefresh, IconTarget, IconShieldHeart, IconFace, IconCircleCheck, IconSun,
} from "./icons";

type Service = { icon: ReactNode; title: string; desc: string; tag?: string };

const capilar: Service[] = [
  { icon: <IconSprout />, title: "Implante capilar FUE", desc: "Restauración capilar con técnica FUE, folículo por folículo, para resultados permanentes y naturales.", tag: "Destacado" },
  { icon: <IconShield />, title: "Tratamiento anticaída", desc: "Abordaje farmacológico personalizado para frenar la caída y fortalecer el cabello existente." },
  { icon: <IconSyringe />, title: "Mesoterapia capilar", desc: "Microinyecciones de vitaminas y activos que nutren el folículo y estimulan el crecimiento." },
  { icon: <IconDroplet />, title: "Plasma rico en plaquetas (PRP)", desc: "Regeneración con tus propios factores de crecimiento para densificar y revitalizar el cuero cabelludo." },
  { icon: <IconSearch />, title: "Evaluación y tricoscopía", desc: "Diagnóstico digital del cuero cabelludo para definir el tratamiento exacto que necesitás." },
];

const estetico: Service[] = [
  { icon: <IconZap />, title: "Depilación láser", desc: "Un proceso, no una sesión: reducción progresiva y duradera del vello en rostro y cuerpo.", tag: "Popular" },
  { icon: <IconHands />, title: "Masajes", desc: "Un momento para frenar: masajes descontracturantes y relajantes para tu bienestar." },
  { icon: <IconRefresh />, title: "Exfoliación corporal", desc: "Renová la piel eliminando células muertas y recuperando suavidad y luminosidad." },
  { icon: <IconTarget />, title: "Despigmentante corporal", desc: "Unificá el tono de la piel y tratá manchas en distintas zonas del cuerpo." },
  { icon: <IconShieldHeart />, title: "Despigmentante zona íntima", desc: "Cuidado íntimo para una piel más pareja y radiante, con total privacidad." },
  { icon: <IconFace />, title: "Despigmentante facial", desc: "Tratamiento para manchas y tono desparejo del rostro." },
  { icon: <IconCircleCheck />, title: "Tratamiento anti-acné", desc: "Protocolo para controlar el acné, calmar la piel y mejorar su textura." },
  { icon: <IconDroplet />, title: "Ultrahidratación facial", desc: "Cuando la piel pide agua: hidratación profunda para un rostro luminoso." },
  { icon: <IconSun />, title: "Peeling químico", desc: "Renovación facial que mejora textura, manchas y luminosidad de la piel." },
];

function Card({ s }: { s: Service }) {
  return (
    <div className="card">
      {s.tag && <span className="tag">{s.tag}</span>}
      <div className="ico">{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </div>
  );
}

export default function Services() {
  const [cat, setCat] = useState<"capilar" | "estetico">("capilar");
  return (
    <section id="servicios">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Todo lo que hacemos en Apolo</span>
          <h2>Dos áreas, un mismo estándar de excelencia</h2>
          <p>Reunimos el cuidado capilar y la estética corporal y facial en un solo lugar. Elegí el área y conocé cada tratamiento.</p>
        </div>

        <div className="tabs">
          <button className={`tab${cat === "capilar" ? " active" : ""}`} onClick={() => setCat("capilar")}>Centro Capilar</button>
          <button className={`tab${cat === "estetico" ? " active" : ""}`} onClick={() => setCat("estetico")}>Sector Estético</button>
        </div>

        {cat === "capilar" ? (
          <div className="grid">
            {capilar.map((s) => <Card key={s.title} s={s} />)}
            <div className="card cta-card">
              <div className="ico" style={{ background: "#fff" }}><IconWhatsapp /></div>
              <h3>¿No sabés cuál elegir?</h3>
              <p>Hacé la autoevaluación y te orientamos por dónde empezar.</p>
              <a href="#evaluacion" className="btn btn-ghost" style={{ marginTop: 16 }}>Ir a la autoevaluación</a>
            </div>
          </div>
        ) : (
          <div className="grid">
            {estetico.map((s) => <Card key={s.title} s={s} />)}
          </div>
        )}
      </div>
    </section>
  );
}
