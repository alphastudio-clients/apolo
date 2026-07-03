/**
 * APOLO — Recepción de leads en Google Sheets
 * =================================================================
 * Este script recibe los leads del calificador de la web (POST desde
 * /api/lead) y los agrega como filas en la planilla.
 *
 * CÓMO INSTALARLO (una sola vez):
 *  1. Creá una Google Sheet nueva (sheets.new). Ponele nombre, ej: "Apolo · Leads".
 *  2. Menú: Extensiones → Apps Script.
 *  3. Borrá el contenido de ejemplo y pegá TODO este archivo. Guardá (Ctrl+S).
 *  4. Botón "Implementar" (Deploy) → "Nueva implementación".
 *       - Tipo: "Aplicación web" (Web app).
 *       - Ejecutar como: "Yo" (tu cuenta).
 *       - Quién tiene acceso: "Cualquiera" (Anyone).
 *       - Implementar → autorizá los permisos con tu cuenta de Google.
 *  5. Copiá la "URL de la aplicación web" (termina en /exec).
 *  6. En Vercel → Settings → Environment Variables:
 *       LEAD_WEBHOOK_URL = (esa URL /exec)
 *     Guardá y hacé Redeploy.
 *
 * Listo: cada autoevaluación completada aparece en la planilla.
 *
 * NOTA: si más adelante cambiás el código, tenés que crear una
 * "Nueva implementación" (o gestionar la existente) para que tome los cambios.
 */

var SHEET_NAME = "Leads";
var HEADERS = [
  "Fecha", "Nombre", "WhatsApp", "Email",
  "Interés", "Tiempo", "Experiencia", "Cuándo comenzar",
  "Clasificación", "Score",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Encabezados la primera vez
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    var fecha = data.fecha ? new Date(data.fecha) : new Date();
    sheet.appendRow([
      fecha,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.interes || "",
      data.tiempo || "",
      data.experiencia || "",
      data.cuando || "",
      data.clasificacion || "",
      (data.score !== undefined && data.score !== null) ? data.score : "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Para probar en el navegador que el endpoint está vivo
function doGet() {
  return ContentService.createTextOutput("Apolo lead endpoint OK");
}
