/* eslint-disable @next/next/no-img-element */
/**
 * Logo de Apolo para el navbar (fondo claro) → usa la versión navy transparente.
 * Variantes disponibles en /public:
 *   apolo-logo-navy.png      wordmark completo, azul (fondos claros)
 *   apolo-logo-blanco.png    wordmark completo, blanco (fondos oscuros)
 *   apolo-isotipo-navy.png   solo la lira, azul
 *   apolo-isotipo-blanco.png solo la lira, blanco
 *   *-fondoazul.png          originales con fondo azul (para redes / og:image)
 */
export default function Logo() {
  return (
    <span className="logo">
      <img src="/apolo-logo-navy.png" alt="Apolo · Centro Capilar y Estético" className="logo-img" />
    </span>
  );
}
