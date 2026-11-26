import { site } from "@/lib/site";
import WhatsAppLink, { TelLink } from "./WhatsAppLink";
import { IconPin, IconClock, IconWhatsapp, IconMail, IconInstagram, IconPhone } from "./icons";

export default function Location() {
  return (
    <section id="ubicacion">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Dónde estamos</span>
          <h2>Dos sucursales para atenderte</h2>
          <p>Nuestra casa central en el Microcentro porteño y nuestra sucursal en Tandil.</p>
        </div>
        <div className="loc-inner">
          <div className="loc-info">
            <span className="eyebrow" style={{ marginBottom: 16 }}>Casa central · Microcentro</span>
            <div className="row"><div className="ico"><IconPin /></div><div><h4>Ubicación</h4><p>{site.address}</p></div></div>
            <div className="row"><div className="ico"><IconClock /></div><div><h4>Horarios</h4><p>{site.hours}</p></div></div>
            <div className="row"><div className="ico"><IconWhatsapp /></div><div><h4>WhatsApp</h4><p>{site.whatsappDisplay} · turnos y consultas</p></div></div>
            <div className="row"><div className="ico"><IconPhone /></div><div><h4>Teléfono</h4><p>
              {site.phoneTel
                ? <TelLink tel={site.phoneTel} sede="microcentro" ubicacion="ubicacion">{site.phoneDisplay || site.phoneTel}</TelLink>
                : site.whatsappDisplay}
            </p></div></div>
            <div className="row"><div className="ico"><IconMail /></div><div><h4>Email</h4><p>{site.email}</p></div></div>
            <div className="row"><div className="ico"><IconInstagram /></div><div><h4>Instagram</h4><p>{site.instagram.join(" · ")}</p></div></div>
            <WhatsAppLink sede="microcentro" ubicacion="ubicacion" className="btn btn-wa" style={{ marginTop: 22, width: "100%" }}>Escribinos por WhatsApp</WhatsAppLink>
          </div>
          <div className="map">
            <iframe src={`https://www.google.com/maps?q=${site.mapQuery}&output=embed`} loading="lazy" title="Ubicación Apolo Microcentro" />
          </div>
        </div>

        {/* Sucursal Tandil */}
        <div className="loc-inner" style={{ marginTop: 44 }}>
          <div className="loc-info">
            <span className="eyebrow" style={{ marginBottom: 16 }}>Sucursal Tandil</span>
            <div className="row"><div className="ico"><IconPin /></div><div><h4>Ubicación</h4><p>{site.tandil.address}</p></div></div>
            <div className="row"><div className="ico"><IconClock /></div><div><h4>Horarios</h4><p>{site.hours}</p></div></div>
            <div className="row"><div className="ico"><IconWhatsapp /></div><div><h4>WhatsApp</h4><p>{site.tandil.whatsappDisplay} · turnos y consultas</p></div></div>
            <WhatsAppLink sede="tandil" ubicacion="ubicacion" className="btn btn-wa" style={{ marginTop: 22, width: "100%" }}>
              WhatsApp Tandil · {site.tandil.whatsappDisplay}
            </WhatsAppLink>
          </div>
          <div className="map">
            <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(site.tandil.address + ", Argentina")}&output=embed`} loading="lazy" title="Ubicación Apolo Tandil" />
          </div>
        </div>
      </div>
    </section>
  );
}
