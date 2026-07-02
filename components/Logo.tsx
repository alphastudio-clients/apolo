import { site } from "@/lib/site";

/**
 * Logo de Apolo.
 * Cuando Nahuel suba el logo real, poné el archivo en /public (ej: /public/logo.svg)
 * y reemplazá el bloque de abajo por:
 *   <img src="/logo.svg" alt="Apolo" width={150} height={40} />
 * (o next/image). Por ahora usa un placeholder con la lira + texto.
 */
export default function Logo() {
  return (
    <span className="logo">
      <svg className="lyre" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M50 22c-11 0-19 8-21 19-1 8 0 21 4 33M50 22c11 0 19 8 21 19 1 8 0 21-4 33M42 31v40M50 29v44M58 31v40M36 66l14 8 14-8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 40c-6 4-9 10-9 10M72 40c6 4 9 10 9 10" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      <span>
        <span className="brand">{site.name.toUpperCase()}</span>
        <span className="sub">Centro Capilar · Estético</span>
      </span>
    </span>
  );
}
