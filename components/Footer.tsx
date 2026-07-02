import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/apolo-logo-blanco.png" alt="Apolo" className="foot-logo-img" />
            <p style={{ maxWidth: 340 }}>
              Centro capilar y estético en el Microcentro de Buenos Aires. Cuidamos tu cabello, tu
              piel y tu cuerpo con criterio profesional.
            </p>
          </div>
          <div>
            <h4>Navegación</h4>
            <a href="#servicios">Servicios</a>
            <a href="#porque">Por qué Apolo</a>
            <a href="#evaluacion">Autoevaluación</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <a href={waLink()} target="_blank" rel="noopener">WhatsApp: {site.whatsappDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.hours}</p>
            <p>{site.city}</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Apolo · Centro Capilar y Estético</span>
          <span>Hecho por Alpha Studio</span>
        </div>
      </div>
    </footer>
  );
}
