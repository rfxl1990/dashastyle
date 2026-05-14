# DashaStyle – Website Spec

## Überblick
Website für Daschas Styling-Beratung für Männer. Zielgruppe: Männer um 30, haben Geld aber keinen Modegeschmack. Dascha bietet 1:1-Beratungen an.

## Stimmung & Tonalität
- **Frech & Selbstbewusst** – Direkte Ansprache, Humor, Selbstironie
- **Ich-Perspektive** – Dascha spricht selbst, keine "Wir"-Form
- Beispielton: "Ich weiß, dass du keine Ahnung hast – und genau dafür bin ich da."
- Mutige Farben, starke Kontraste, dynamisches Layout

## Seitenstruktur

### Seite 1: Hauptseite (Single Page)

1. **Hero Section**
   - KI-generiertes Vorher/Nachher-Bild (Split-Screen)
   - Vorher: Schlecht gekleideter aber normaler Typ (Cringe-Grafik-Shirt, schlecht sitzende Jeans, veraltete Sneaker, kaltes Licht, unsichere Körpersprache)
   - Nachher: Gleicher Typ, casual cool gestylt (Premium-Basics, Layering mit Overshirt, getaperte Hose, cleane Sneaker, Accessoires, warmes Licht, selbstbewusste Haltung)
   - Starker Spruch in Daschas Stimme
   - CTA-Button "Termin buchen"

2. **Problem-Sektion**
   - Zielgruppe abholen und ansprechen
   - "Du stehst vor dem Schrank und hast keine Ahnung?"
   - Typische Schmerzpunkte benennen

3. **Über Dascha**
   - Wer ist sie, warum kann sie helfen
   - Sympathie und Vertrauen aufbauen
   - Persönlich, in Ich-Form

4. **Angebote**
   - Zwei Pakete nebeneinander:
     - **Komplett-Styling:** 400€ – Vollständige Style-Transformation
     - **Sprechstunde:** 70€ – Tipps und Beratung
   - Klare Beschreibung was jeweils enthalten ist

5. **Vorher/Nachher-Galerie**
   - Weitere Transformationen als Social Proof
   - Dramatischer Kontrast zwischen vorher und nachher

6. **Testimonials**
   - Kundenstimmen / Bewertungen

7. **Buchung**
   - Cal.com oder Calendly Widget (eingebettet)
   - WhatsApp-Button als zusätzliche Kontaktoption
   - Beide Pakete direkt buchbar

8. **FAQ**
   - Häufige Fragen ("Was passiert beim Komplett-Styling?", "Muss ich etwas mitbringen?", etc.)

9. **Footer**
   - Impressum, Datenschutz
   - Social Media Links

### Seite 2: Styling-Tipps

- Statische Tipps-Sammlung (kein CMS)
- Kategorien z.B. "Basics", "Farben", "Anlässe"
- Wird manuell aktualisiert
- Kann später zu Blog erweitert werden

## Tech-Stack

- **Frontend:** Pures HTML/CSS/JS – kein Framework, keine Build-Tools
- **Hosting:** Netlify oder GitHub Pages (kostenlos)
- **Buchungssystem:** Cal.com oder Calendly (eingebettetes Widget)
- **Kontakt:** WhatsApp-Button (öffnet Chat mit Dascha)
- **Bilder:** KI-generiert für Hero, echte Fotos können später nachgereicht werden

## Hero-Bild Prompt (Artlist / KI-Bildgenerierung)

> Photorealistic split-screen portrait of the exact same young man, age 30, european, short brown hair, light stubble. LEFT SIDE labeled "BEFORE": poorly dressed, wearing a wrinkled oversized novelty t-shirt with a cringe graphic print, ill-fitting baggy jeans that are too long and bunching at the ankles, chunky outdated running shoes, bad color combinations, hands in pockets, uncomfortable body language, unflattering overhead fluorescent lighting. RIGHT SIDE labeled "AFTER": same man, same face, transformed into a stylish effortlessly cool look — wearing a fitted premium blank tee in off-white, layered with an open textured overshirt in olive green, well-tapered slim cargo pants in beige, clean white minimal leather sneakers, subtle accessories (thin silver bracelet, quality watch), relaxed confident stance with one hand adjusting his collar, warm golden-hour studio lighting that makes the outfit pop. The contrast between left and right should be dramatic and immediately obvious. Professional fashion photography, full body shot, neutral backdrop, magazine editorial quality.

## Rechtliches
- Impressum (Pflicht in Deutschland)
- Datenschutzerklärung (Pflicht, DSGVO)
- Cookie-Banner falls externe Services (Calendly) Cookies setzen
