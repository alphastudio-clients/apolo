import { site } from "@/lib/site";
import { IconPin, IconWhatsapp, IconClock, IconUsers } from "./icons";

export default function TrustBar() {
  return (
    <div className="trust">
      <div className="wrap trust-inner">
        <span><IconPin /> Microcentro · Tandil</span>
        <span><IconWhatsapp /> Turnos por WhatsApp</span>
        <span><IconClock /> {site.hoursShort}</span>
        <span><IconUsers /> Atención para todo público</span>
      </div>
    </div>
  );
}
