import { waLink } from "@/lib/site";
import { IconWhatsappGlyph } from "./icons";

export default function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noopener" className="fab" aria-label="WhatsApp">
      <IconWhatsappGlyph className="" />
    </a>
  );
}
