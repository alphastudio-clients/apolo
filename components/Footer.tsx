import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/apolo-logo-blanco.png" alt="Apolo" className="foot-logo-img" />
            <p style={{ maxWidth: 320 }}>
              Centro capilar y estético con criterio profesional. Dos sucursales: Microcentro (CABA) y Tandil.
            </p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <h4>Navegación</h4>
            <a href="#servicios">Servicios</a>
            <a href="#porque">Por qué Apolo</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#evaluacion">Autoevaluación</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <div>
            <h4>Sucursal Microcentro</h4>
            <p>{site.streetAddress} · CABA</p>
            <p>{site.hours}</p>
            <a href={waLink(undefined, site.whatsappNumber)} target="_blank" rel="noopener">
              WhatsApp: {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <h4>Sucursal Tandil</h4>
            <p>Nueva sucursal · ubicación próximamente</p>
            <a href={waLink(undefined, site.tandil.whatsappNumber)} target="_blank" rel="noopener">
              WhatsApp: {site.tandil.whatsappDisplay}
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Apolo · Centro Capilar y Estético</span>
          <span>Hecho por <a href="https://www.instagram.com/nahuelcontent/" target="_blank" rel="noopener">@nahuelcontent</a></span>
        </div>
      </div>
    </footer>
  );
}
