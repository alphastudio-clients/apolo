import { site } from "@/lib/site";
import { IconPin, IconWhatsapp, IconClock, IconUsers } from "./icons";

export default function TrustBar() {
  return (
    <div className="trust">
      <div className="wrap trust-inner">
        <span><IconPin /> {site.city}</span>
        <span><IconWhatsapp /> Turnos por WhatsApp</span>
        <span><IconClock /> Lun a Vie · 9 a 19 hs</span>
        <span><IconUsers /> Atención para todo público</span>
      </div>
    </div>
  );
}
