import { site } from "@/lib/site";
import { IconCheck } from "./icons";

const perks = [
  "Diagnóstico y evaluación inicial",
  "Plan de tratamiento a tu medida",
  "Atención profesional y privada",
  "Turnos por WhatsApp, sin demoras",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <span className="eyebrow">Centro Capilar y Estético · Buenos Aires</span>
          <h1>Cuidar tu imagen<br />con criterio <span className="accent">profesional</span></h1>
          <p className="lead">
            Tratamientos capilares y estéticos con diagnóstico previo, tecnología y resultados
            naturales. Acompañamos tu cabello, tu piel y tu cuerpo en el corazón del Microcentro porteño.
          </p>
          <div className="hero-cta">
            <a href="#evaluacion" className="btn btn-primary">Realizar autoevaluación</a>
            <a href="#servicios" className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>Ver servicios</a>
          </div>
          <div className="hero-stats">
            {site.stats.map((s) => (
              <div key={s.label}><div className="num">{s.num}</div><div className="lbl">{s.label}</div></div>
            ))}
          </div>
        </div>
        <div className="hero-card">
          <h3>Reservá tu evaluación</h3>
          <p className="sub">Respondé unas preguntas breves y definimos juntos el tratamiento adecuado para tu caso.</p>
          <div className="mini-list">
            {perks.map((p) => (
              <div className="item" key={p}><span className="tick"><IconCheck /></span> {p}</div>
            ))}
          </div>
          <a href="#evaluacion" className="btn btn-primary">Comenzar autoevaluación</a>
        </div>
      </div>
    </section>
  );
}
