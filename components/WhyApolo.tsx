const items = [
  { n: "01", h: "Diagnóstico primero", p: "Evaluamos antes de proponer. Nada de fórmulas genéricas." },
  { n: "02", h: "Resultados naturales", p: "Buscamos que se vea bien, no que se note." },
  { n: "03", h: "Espacio privado", p: "Atención cuidada, discreta y respetuosa." },
  { n: "04", h: "Todo en un lugar", p: "Capilar y estética en el mismo centro del Microcentro." },
];

export default function WhyApolo() {
  return (
    <section id="porque" style={{ paddingTop: 24 }}>
      <div className="wrap">
        <div className="why">
          <div className="why-inner">
            <div>
              <span className="eyebrow">Por qué elegir Apolo</span>
              <h2>Criterio profesional, resultados que se notan</h2>
              <p className="lead">
                No hacemos tratamientos en serie. Cada persona tiene una evaluación previa, un plan
                a medida y un seguimiento real. Ese es el estándar Apolo.
              </p>
            </div>
            <div className="why-grid">
              {items.map((i) => (
                <div className="why-item" key={i.n}>
                  <div className="n">{i.n}</div>
                  <h4>{i.h}</h4>
                  <p>{i.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
