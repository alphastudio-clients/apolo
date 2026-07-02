import { site, waLink } from "@/lib/site";
import { IconPin, IconClock, IconWhatsapp, IconMail, IconInstagram } from "./icons";

export default function Location() {
  return (
    <section id="ubicacion">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Dónde estamos</span>
          <h2>En pleno Microcentro porteño</h2>
          <p>Nos encontrás en el corazón de Buenos Aires, con fácil acceso en subte y colectivo.</p>
        </div>
        <div className="loc-inner">
          <div className="loc-info">
            <div className="row"><div className="ico"><IconPin /></div><div><h4>Ubicación</h4><p>{site.address}</p></div></div>
            <div className="row"><div className="ico"><IconClock /></div><div><h4>Horarios</h4><p>{site.hours}</p></div></div>
            <div className="row"><div className="ico"><IconWhatsapp /></div><div><h4>WhatsApp</h4><p>{site.whatsappDisplay} · turnos y consultas</p></div></div>
            <div className="row"><div className="ico"><IconMail /></div><div><h4>Email</h4><p>{site.email}</p></div></div>
            <div className="row"><div className="ico"><IconInstagram /></div><div><h4>Instagram</h4><p>{site.instagram.join(" · ")}</p></div></div>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa" style={{ marginTop: 22, width: "100%" }}>Escribinos por WhatsApp</a>
          </div>
          <div className="map">
            <iframe src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`} loading="lazy" title="Ubicación Apolo" />
          </div>
        </div>
      </div>
    </section>
  );
}
