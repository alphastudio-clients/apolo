import { site, type Review } from "@/lib/site";
import Stars from "./Stars";

export default function Testimonios({
  reviews = site.reviews,
  title = "Lo que dicen nuestros pacientes",
  subtitle = "Cientos de personas confiaron en Apolo y nos calificaron con la máxima puntuación en Google.",
}: { reviews?: Review[]; title?: string; subtitle?: string } = {}) {
  const g = site.googleReviews;
  return (
    <section id="opiniones" className="tst-sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Opiniones reales</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="g-rating">
          <div className="g-num">{g.rating}</div>
          <div className="g-mid">
            <Stars n={5} />
            <p className="g-meta">{g.countLabel} reseñas en Google</p>
          </div>
          <div className="g-cta">
            <a href={g.url} target="_blank" rel="noopener" className="btn btn-primary">Ver reseñas en Google</a>
            <a href={g.reviewUrl} target="_blank" rel="noopener" className="btn btn-ghost">Dejá tu reseña</a>
          </div>
        </div>

        <div className="tst-grid">
          {reviews.map((r, i) => (
            <div className={`tst-card${r.ejemplo ? " is-ex" : ""}`} key={i}>
              {r.ejemplo && <span className="tst-ex">Ejemplo</span>}
              <Stars n={r.stars} />
              <p className="tst-text">“{r.text}”</p>
              <p className="tst-author">{r.name}<span className="tst-date"> · {r.date}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
