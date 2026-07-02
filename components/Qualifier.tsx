"use client";
import { useState } from "react";
import { waLink } from "@/lib/site";
import { IconCheck } from "./icons";

type Opt = { val: string; score?: number };
type Question = { key: string; title: string; label: string; hint: string; opts: Opt[] };

const questions: Question[] = [
  {
    key: "interes", title: "Comencemos", label: "¿Qué te gustaría mejorar?",
    hint: "Elegí el área que más te interesa.",
    opts: [
      { val: "Cabello (caída, densidad, implante)" },
      { val: "Piel / rostro (manchas, acné, hidratación)" },
      { val: "Cuerpo (depilación láser, despigmentante, masajes)" },
      { val: "Todavía no estoy seguro/a" },
    ],
  },
  {
    key: "tiempo", title: "Tu situación", label: "¿Hace cuánto venís con esta inquietud?",
    hint: "Nos ayuda a entender tu caso.",
    opts: [
      { val: "Menos de 6 meses" },
      { val: "Entre 6 meses y 2 años" },
      { val: "Más de 2 años" },
      { val: "Es algo puntual / estético" },
    ],
  },
  {
    key: "experiencia", title: "Tu experiencia", label: "¿Ya realizaste algún tratamiento antes?",
    hint: "Sin problema si es tu primera vez.",
    opts: [
      { val: "Nunca, sería mi primera vez" },
      { val: "Probé cosas por mi cuenta" },
      { val: "Hice tratamientos en otro lugar" },
    ],
  },
  {
    key: "cuando", title: "Tu momento", label: "¿Cuándo te gustaría comenzar?",
    hint: "Esto define con qué prioridad te contactamos.",
    opts: [
      { val: "Lo antes posible", score: 3 },
      { val: "Dentro de este mes", score: 2 },
      { val: "En los próximos meses", score: 1 },
      { val: "Solo estoy informándome", score: 0 },
    ],
  },
];

const TOTAL = questions.length + 1; // + paso de datos

export default function Qualifier() {
  const [step, setStep] = useState(0); // 0..questions.length (último = datos)
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [done, setDone] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "ok" | "err">("idle");
  const [waHref, setWaHref] = useState("#");

  const isDataStep = step === questions.length;
  const q = questions[step];
  const progress = done ? 100 : ((step + 1) / TOTAL) * 100;
  const canNext = isDataStep ? form.name.trim() && form.phone.trim() : !!(q && answers[q.key]);

  function pick(o: Opt) {
    setAnswers((a) => ({ ...a, [q.key]: o.val }));
    if (o.score !== undefined) setScore(o.score);
  }

  async function finish() {
    const hot = score >= 2;
    const lead = {
      ...form,
      ...answers,
      score,
      clasificacion: hot ? "PRIORITARIO" : "INFORMATIVO",
      fecha: new Date().toISOString(),
    };
    // Guardar el lead (no bloquea el WhatsApp si falla)
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      setSaveState(r.ok ? "ok" : "err");
    } catch {
      setSaveState("err");
    }
    const msg =
      `Hola Apolo, soy ${form.name}.\n` +
      `Completé la autoevaluación:\n` +
      `- Quiero mejorar: ${answers.interes || "-"}\n` +
      `- Hace: ${answers.tiempo || "-"}\n` +
      `- Experiencia previa: ${answers.experiencia || "-"}\n` +
      `- Quiero comenzar: ${answers.cuando || "-"}\n` +
      (form.email ? `- Email: ${form.email}\n` : "") +
      `- Mi teléfono: ${form.phone}\n` +
      `Me gustaría coordinar un turno.`;
    setWaHref(waLink(msg));
    setDone(true);
  }

  const hot = score >= 2;

  return (
    <section id="evaluacion" className="quiz-sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Autoevaluación · 30 segundos</span>
          <h2>Encontrá el tratamiento adecuado para vos</h2>
          <p>Respondé unas preguntas breves. Con tus respuestas preparamos una recomendación y coordinamos tu turno por WhatsApp.</p>
        </div>

        <div className="quiz">
          <div className="quiz-top">
            <h3>{done ? (hot ? "Consulta prioritaria" : "Gracias por completar") : isDataStep ? "Casi listo" : q.title}</h3>
            <p>{done ? (hot ? "Te contactamos a la brevedad." : "Te enviamos información para cuando estés listo/a.") : isDataStep ? "Dejanos tus datos de contacto." : q.hint}</p>
            <div className="progress"><div className="bar" style={{ width: `${progress}%` }} /></div>
          </div>

          <div className="quiz-body">
            {!done && !isDataStep && (
              <div className="step">
                <div className="q-label">{q.label}</div>
                <div className="q-hint">{q.hint}</div>
                <div className="opts">
                  {q.opts.map((o) => (
                    <button key={o.val} className={`opt${answers[q.key] === o.val ? " sel" : ""}`} onClick={() => pick(o)} type="button">
                      <span className="dot" /> {o.val}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!done && isDataStep && (
              <div className="step">
                <div className="q-label">¿Dónde te contactamos?</div>
                <div className="q-hint">Dejanos tus datos y te escribimos con tu recomendación.</div>
                <div className="field"><label>Nombre y apellido</label>
                  <input type="text" placeholder="Tu nombre" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                <div className="field"><label>WhatsApp</label>
                  <input type="tel" placeholder="Ej: 11 2345 6789" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                <div className="field"><label>Email (opcional)</label>
                  <input type="email" placeholder="tucorreo@email.com" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <p className="consent">Al continuar aceptás ser contactado/a por Apolo para coordinar tu consulta.</p>
              </div>
            )}

            {done && (
              <div className={`result ${hot ? "hot" : "warm"}`}>
                <div className="badge"><IconCheck /></div>
                <h3>Gracias, {form.name}</h3>
                <p>
                  {hot
                    ? "Según tus respuestas, tu caso es prioritario. Tocá el botón y coordinamos tu turno por WhatsApp ahora mismo."
                    : "Preparamos una recomendación para vos. Escribinos por WhatsApp cuando quieras avanzar y te asesoramos sin compromiso."}
                </p>
                <div className="summary">
                  <b>Interés:</b> {answers.interes || "-"}<br />
                  <b>Tiempo:</b> {answers.tiempo || "-"}<br />
                  <b>Experiencia:</b> {answers.experiencia || "-"}<br />
                  <b>Cuándo comenzar:</b> {answers.cuando || "-"}
                </div>
                <a href={waHref} target="_blank" rel="noopener" className="btn btn-wa">
                  Coordinar mi turno por WhatsApp
                </a>
                {saveState === "ok" && <p className="savenote ok">Tus datos quedaron registrados. Te contactamos pronto.</p>}
                {saveState === "err" && <p className="savenote err">No pudimos registrar el envío, pero podés escribirnos igual por WhatsApp.</p>}
              </div>
            )}

            {!done && (
              <div className="quiz-nav">
                <button className="link-back" style={{ visibility: step > 0 ? "visible" : "hidden" }} onClick={() => setStep((s) => Math.max(0, s - 1))} type="button">← Atrás</button>
                <button className="btn btn-primary" disabled={!canNext} style={{ paddingLeft: 36, paddingRight: 36 }}
                  onClick={() => (isDataStep ? finish() : setStep((s) => s + 1))} type="button">
                  {isDataStep ? "Ver mi recomendación →" : "Siguiente →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
