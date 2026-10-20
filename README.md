# TAUNUSWERK · Web-Applikation

Moderne, responsive Web-Applikation und Multi-Page-Website im **Glassmorphism- & Pastel-Aesthetic-Design** für die Marke **Taunuswerk**.

---

## 🎨 Design-System & UI
- **Stil:** Mobile-App-UI, Transluzentes Milchglas ("Frosted Glass", `backdrop-filter: blur(20px)`), subtile Lichtkanten (`border: 1px solid rgba(255, 255, 255, 0.8)`).
- **Farbwelt:** Helles Gradient-Backdrop (Warm Chalk `#F8FAFC`, Pastell-Pfirsich `#FCE7F3`, Lavendel `#EDE9FE`, Eisblau `#E0F2FE`) mit animierten Radial-Blur Orbs.
- **Akzente & Glows:** Sunrise-Pastell (`#FB923C` bis `#F43F5E`), Sky-Blue (`#38BDF8`), diffuse Schatten und Inset-Lichtreflexe.
- **Typografie:** Plus Jakarta Sans mit optimalem Kontrast (`#0F172A` Slate-Navy für Headlines, `#334155` für Fließtext, typografische Regeln mit `text-wrap: balance` & `text-wrap: pretty`).

---

## 🧭 Seiten & Routing
- **Startseite (`/`):**
  - Layered Hero mit schwebenden Frosted-Glass-Cards
  - Flaggschiff-Bereich **"Das Konzept-Werk" (500 € Festpreis)** mit 3 Bento-Phasen
  - **Leistungs-Dock** (Bento-Grid mit 4 Disziplinen)
  - **Showcase Case Study** (15 Min. Call → 7 Tage → Erfolg)
  - **Das Kollektiv-Versprechen** (Fester Ansprechpartner + Spezialistennetzwerk)
  - Interaktives **Anfrage-Formular / Funnel** mit nativer `<dialog closedby="any">` Bestätigung
- **Detailseiten:**
  - `http://localhost:3000/standort-kampagnen` – Standort- & Kampagnen-Marketing
  - `http://localhost:3000/content-video` – Content & Social Video Engine
  - `http://localhost:3000/creative-audio` – Creative Media & AI-Audio
  - `http://localhost:3000/digital-hubs` – Digital Hubs & Rapid Prototyping
  - `http://localhost:3000/ueber-uns` – Über uns (Stratege an der Werkbank)
- **Rechtliches:** Impressum & Datenschutz als Frosted-Glass-Modal.

---

## 🚀 Entwicklung & Start

### Lokalen Entwicklungsserver starten:
```bash
npm run dev
```
Die Anwendung ist anschließend unter `http://localhost:3000` erreichbar.

### Produktions-Build erstellen:
```bash
npm run build
```
Die optimierten statischen Dateien befinden sich im Ordner `dist/`.
