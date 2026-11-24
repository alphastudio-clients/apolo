"use client";
import { openCookiePrefs } from "@/lib/track";

export default function CookiePrefsLink() {
  return (
    <button type="button" onClick={openCookiePrefs} style={{ background: "none", border: "none", color: "inherit", font: "inherit", cursor: "pointer", textDecoration: "underline", padding: 0 }}>
      Preferencias de cookies
    </button>
  );
}
