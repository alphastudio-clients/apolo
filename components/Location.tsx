import { site, waLink } from "@/lib/site";
import { IconPin, IconClock, IconWhatsapp, IconMail, IconInstagram } from "./icons";

export default function Location() {
  return (
    <section id="ubicacion">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Dónde estamos</span>
          <h2>Dos sucursales para atenderte</h2>
          <p>Nuestra casa central en el Microcentro porteño y, muy pronto, nuestra nueva sucursal en Tandil.</p>
        </div>
        <div className="loc-inner">
          <div className="loc-info">
            <span className="eyebrow" style={{ marginBottom: 16 }}>Casa central · Microcentro</span>
            <div className="row"><div className="ico"><IconPin /></div><div><h4>Ubicación</h4><p>{site.address}</p></div></div>
            <div className="row"><div className="ico"><IconClock /></div><div><h4>Horarios</h4><p>{site.hours}</p></div></div>
            <div className="row"><div className="ico"><IconWhatsapp /></div><div><h4>WhatsApp</h4><p>{site.whatsappDisplay} · turnos y consultas</p></div></div>
            <div className="row"><div className="ico"><IconMail /></div><div><h4>Email</h4><p>{site.email}</p></div></div>
            <div className="row"><div className="ico"><IconInstagram /></div><div><h4>Instagram</h4><p>{site.instagram.join(" · ")}</p></div></div>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa" style={{ marginTop: 22, width: "100%" }}>Escribinos por WhatsApp</a>
          </div>
          <div className="map">
            <iframe src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`} loading="lazy" title="Ubicación Apolo Microcentro" />
          </div>
        </div>

        {/* Nueva sucursal · Tandil */}
        <div className="card cta-card" style={{ marginTop: 26, textAlign: "center", alignItems: "center" }}>
          <span className="eyebrow">Nueva sucursal</span>
          <h3 style={{ marginTop: 10 }}>Muy pronto en Tandil</h3>
          <p style={{ maxWidth: 560 }}>
            Estamos cargando la ubicación de nuestra nueva sucursal en Tandil. Consultá disponibilidad y
            turnos por WhatsApp.
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--navy-2)", fontWeight: 600, margin: "4px 0 18px" }}>
            <IconPin /> Ubicación cargando…
          </p>
          <a
            href={waLink(undefined, site.tandil.whatsappNumber)}
            target="_blank"
            rel="noopener"
            className="btn btn-wa"
          >
            WhatsApp Tandil · {site.tandil.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
