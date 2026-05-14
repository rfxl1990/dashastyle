# DashaStyle Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eine freche, selbstbewusste Single-Page-Website für Daschas Styling-Beratung plus eine statische Styling-Tipps-Seite bauen.

**Architecture:** Pures HTML/CSS/JS ohne Framework. Zwei HTML-Seiten (Hauptseite + Tipps) plus Impressum/Datenschutz. CSS mit Custom Properties für konsistentes Theming. Minimales JS für Navigation, FAQ-Accordion und Smooth Scrolling.

**Tech Stack:** HTML5, CSS3 (Custom Properties, Grid, Flexbox), Vanilla JS, Cal.com Widget, WhatsApp API Link

---

## File Structure

```
DashaStyle/
├── index.html                 # Hauptseite (Single Page mit allen Sektionen)
├── tipps.html                 # Styling-Tipps Seite
├── impressum.html             # Impressum (rechtlich Pflicht)
├── datenschutz.html           # Datenschutzerklärung (DSGVO)
├── css/
│   └── style.css              # Alle Styles (Custom Properties, Layout, Komponenten)
├── js/
│   └── main.js                # Navigation, FAQ Accordion, Smooth Scroll, Mobile Menu
└── images/
    ├── hero-before-after.webp # KI-generiertes Vorher/Nachher-Bild (vom User bereitgestellt)
    ├── dascha.webp             # Portrait von Dascha (vom User bereitgestellt)
    └── placeholder.svg         # Platzhalter-Grafik für fehlende Bilder
```

**Hinweis zu Bildern:** `hero-before-after.webp` und `dascha.webp` werden vom User separat erstellt/bereitgestellt. Der Code verwendet Platzhalter bis die echten Bilder da sind.

---

## Task 1: Projekt-Scaffolding & Base Styles

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`
- Create: `images/placeholder.svg`

- [ ] **Step 1: Verzeichnisse anlegen**

```bash
mkdir -p css js images
```

- [ ] **Step 2: Platzhalter-SVG erstellen**

Create `images/placeholder.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="#1a1a1a">
  <rect width="800" height="600" fill="#2a2a2a"/>
  <text x="400" y="300" text-anchor="middle" fill="#666" font-family="sans-serif" font-size="24">Bild kommt noch</text>
</svg>
```

- [ ] **Step 3: CSS-Grundgerüst mit Custom Properties erstellen**

Create `css/style.css`:
```css
/* ============================================
   DashaStyle – Custom Properties & Base Styles
   ============================================ */

:root {
  /* Farben – Frech & Selbstbewusst */
  --color-bg: #0e0e0e;
  --color-bg-elevated: #1a1a1a;
  --color-bg-card: #222222;
  --color-text: #f5f5f5;
  --color-text-muted: #999999;
  --color-accent: #ff5733;
  --color-accent-hover: #ff7a5c;
  --color-highlight: #ffd700;
  --color-whatsapp: #25d366;
  --color-border: #333333;

  /* Typografie */
  --font-heading: 'Inter', 'Helvetica Neue', sans-serif;
  --font-body: 'Inter', 'Helvetica Neue', sans-serif;
  --font-size-hero: clamp(2.5rem, 6vw, 4.5rem);
  --font-size-h2: clamp(1.8rem, 4vw, 3rem);
  --font-size-h3: clamp(1.2rem, 2.5vw, 1.5rem);
  --font-size-body: 1.05rem;
  --font-size-small: 0.9rem;

  /* Spacing */
  --section-padding: clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem);
  --container-max: 1200px;
  --gap: 2rem;

  /* Effekte */
  --radius: 12px;
  --radius-sm: 8px;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  --transition: 0.3s ease;
}

/* Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition);
}

a:hover {
  color: var(--color-accent-hover);
}

/* Container */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
}

/* Section Base */
section {
  padding: var(--section-padding);
}

section:nth-child(even) {
  background-color: var(--color-bg-elevated);
}

/* Headings */
h1, h2, h3 {
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--font-size-h2);
  margin-bottom: 1.5rem;
}

h3 {
  font-size: var(--font-size-h3);
  margin-bottom: 1rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 87, 51, 0.4);
}

.btn-whatsapp {
  background: var(--color-whatsapp);
  color: #fff;
}

.btn-whatsapp:hover {
  background: #20bd5a;
  color: #fff;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-border);
}

.btn-outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

- [ ] **Step 4: HTML-Grundgerüst erstellen**

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Styling-Beratung für Männer – Ich mache aus deinem fragwürdigen Kleidungsgeschmack einen Look, der sitzt. Komplett-Styling oder Sprechstunde buchen.">
  <title>DashaStyle – Dein Style-Upgrade</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="nav">
    <div class="nav__inner container">
      <a href="#" class="nav__logo">Dascha<span>Style</span></a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links" id="nav-links">
        <li><a href="#problem">Warum ich?</a></li>
        <li><a href="#about">Über mich</a></li>
        <li><a href="#angebote">Angebote</a></li>
        <li><a href="#galerie">Ergebnisse</a></li>
        <li><a href="#buchung" class="btn btn-primary btn--nav">Termin buchen</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <!-- Sektionen werden in den folgenden Tasks eingefügt -->
  </main>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 5: Leere JS-Datei erstellen**

Create `js/main.js`:
```js
// DashaStyle – Main JS
// Navigation, FAQ Accordion, Smooth Scroll, Mobile Menu
```

- [ ] **Step 6: Navigation Styles hinzufügen**

Append to `css/style.css`:
```css
/* ============================================
   Navigation
   ============================================ */

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(14, 14, 14, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav__logo {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: -0.03em;
}

.nav__logo span {
  color: var(--color-accent);
}

.nav__logo:hover {
  color: var(--color-text);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav__links a {
  color: var(--color-text-muted);
  font-size: var(--font-size-small);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color var(--transition);
}

.nav__links a:hover {
  color: var(--color-text);
}

.btn--nav {
  padding: 0.6rem 1.5rem;
  font-size: var(--font-size-small);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all var(--transition);
}
```

- [ ] **Step 7: Navigation JS (Mobile Menu + Scroll-Effekt)**

Replace content of `js/main.js`:
```js
// ============================================
// DashaStyle – Main JS
// ============================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
    navToggle.classList.toggle('nav__toggle--active');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      navToggle.classList.remove('nav__toggle--active');
    });
  });
}

// Navbar background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});
```

- [ ] **Step 8: Mobile Navigation Styles**

Append to `css/style.css`:
```css
/* Mobile Navigation */
@media (max-width: 768px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    background: rgba(14, 14, 14, 0.98);
    backdrop-filter: blur(12px);
    transform: translateX(100%);
    transition: transform var(--transition);
  }

  .nav__links--open {
    transform: translateX(0);
  }

  .nav__links a {
    font-size: 1.2rem;
  }

  .nav__toggle--active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav__toggle--active span:nth-child(2) {
    opacity: 0;
  }

  .nav__toggle--active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}

.nav--scrolled {
  background: rgba(14, 14, 14, 0.98);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}
```

- [ ] **Step 9: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Dunkle Seite mit fixierter Navigation oben, Logo "DashaStyle" links, Links rechts. Auf Mobile: Hamburger-Menü.

```bash
git add index.html css/style.css js/main.js images/placeholder.svg
git commit -m "feat: project scaffolding with base styles and navigation"
```

---

## Task 2: Hero Section

**Files:**
- Modify: `index.html` (innerhalb `<main>`)
- Modify: `css/style.css` (Hero Styles anhängen)

- [ ] **Step 1: Hero HTML einfügen**

In `index.html`, innerhalb von `<main>` einfügen:
```html
<!-- Hero -->
<section class="hero" id="hero">
  <div class="container">
    <div class="hero__content">
      <p class="hero__tagline">Styling-Beratung für Männer</p>
      <h1 class="hero__title">Ich weiß, dass du keine Ahnung hast.<br><span>Genau dafür bin ich da.</span></h1>
      <p class="hero__subtitle">Ich bin Dascha – und ich mache aus deinem fragwürdigen Kleidungsgeschmack einen Look, für den du Komplimente bekommst.</p>
      <div class="hero__ctas">
        <a href="#buchung" class="btn btn-primary">Termin buchen</a>
        <a href="#angebote" class="btn btn-outline">Was ich anbiete</a>
      </div>
    </div>
    <div class="hero__image">
      <div class="hero__before-after">
        <img src="images/hero-before-after.webp" alt="Vorher-Nachher Transformation: Von planlos zu stylisch" onerror="this.src='images/placeholder.svg'">
        <div class="hero__labels">
          <span class="hero__label hero__label--before">Vorher</span>
          <span class="hero__label hero__label--after">Nachher</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Hero CSS hinzufügen**

Append to `css/style.css`:
```css
/* ============================================
   Hero Section
   ============================================ */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
  background: var(--color-bg);
  overflow: hidden;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero__tagline {
  display: inline-block;
  color: var(--color-accent);
  font-size: var(--font-size-small);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.hero__title {
  font-size: var(--font-size-hero);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero__title span {
  color: var(--color-accent);
}

.hero__subtitle {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  max-width: 500px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.hero__ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__before-after {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero__labels {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}

.hero__label {
  flex: 1;
  text-align: center;
  padding: 0.75rem;
  font-weight: 800;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__label--before {
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-text-muted);
}

.hero__label--after {
  background: rgba(255, 87, 51, 0.9);
  color: #fff;
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__ctas {
    justify-content: center;
  }
}
```

- [ ] **Step 3: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Vollbild-Hero mit Headline links, Vorher/Nachher-Bild rechts (Platzhalter falls noch kein echtes Bild). Zwei Buttons. Auf Mobile: Einspaltig, zentriert.

```bash
git add index.html css/style.css
git commit -m "feat: hero section with before/after image and CTA"
```

---

## Task 3: Problem-Sektion & Über Dascha

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Problem-Sektion HTML**

In `index.html`, nach der Hero-Section einfügen:
```html
<!-- Problem -->
<section class="problem" id="problem">
  <div class="container">
    <h2>Kommt dir das bekannt vor?</h2>
    <div class="problem__grid">
      <div class="problem__card">
        <span class="problem__icon">👕</span>
        <h3>Der Schrank ist voll, aber nichts passt zusammen</h3>
        <p>Du kaufst Klamotten nach Gefühl – und das Gefühl hat dich bisher nicht gut beraten.</p>
      </div>
      <div class="problem__card">
        <span class="problem__icon">🤷</span>
        <h3>"Zieh dich mal ordentlich an"</h3>
        <p>Deine Freundin, deine Mutter, dein Spiegelbild – alle sagen es dir. Aber niemand sagt dir wie.</p>
      </div>
      <div class="problem__card">
        <span class="problem__icon">🛒</span>
        <h3>Online shoppen ist ein Albtraum</h3>
        <p>Du scrollst durch 500 Jacken und weißt bei keiner, ob sie zu dir passt. Am Ende kaufst du wieder ein schwarzes T-Shirt.</p>
      </div>
    </div>
    <p class="problem__closer">Keine Sorge – <strong>genau dafür gibt es mich.</strong></p>
  </div>
</section>
```

- [ ] **Step 2: Problem-Sektion CSS**

Append to `css/style.css`:
```css
/* ============================================
   Problem Section
   ============================================ */

.problem {
  text-align: center;
}

.problem h2 {
  margin-bottom: 3rem;
}

.problem__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--gap);
  margin-bottom: 3rem;
}

.problem__card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  transition: transform var(--transition), border-color var(--transition);
}

.problem__card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.problem__icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1.5rem;
}

.problem__card h3 {
  margin-bottom: 0.75rem;
}

.problem__card p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.problem__closer {
  font-size: 1.3rem;
  color: var(--color-text-muted);
}

.problem__closer strong {
  color: var(--color-accent);
}
```

- [ ] **Step 3: Über Dascha HTML**

In `index.html`, nach der Problem-Section einfügen:
```html
<!-- Über Dascha -->
<section class="about" id="about">
  <div class="container">
    <div class="about__grid">
      <div class="about__image">
        <img src="images/dascha.webp" alt="Dascha – Deine Styling-Beraterin" onerror="this.src='images/placeholder.svg'">
      </div>
      <div class="about__content">
        <h2>Hey, ich bin Dascha.</h2>
        <p>Ich helfe Männern, die beim Thema Klamotten überfordert sind – und das ohne Modezeitschriften-Gelaber oder Luxus-Attitüde.</p>
        <p>Ich sage dir ehrlich, was geht und was nicht. Kein Bullshit, kein Drumherumreden. Dafür ein Style, der zu <strong>dir</strong> passt – nicht zu irgendeinem Instagram-Model.</p>
        <p>Ob Komplett-Transformation oder schnelle Tipps – nach unserer Session weißt du, was du kaufen sollst, was du wegwerfen kannst und warum du nie wieder Cargo-Shorts tragen wirst.</p>
        <a href="#buchung" class="btn btn-primary">Lass uns loslegen</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Über Dascha CSS**

Append to `css/style.css`:
```css
/* ============================================
   About Section
   ============================================ */

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.about__image img {
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  aspect-ratio: 3 / 4;
  object-fit: cover;
  width: 100%;
}

.about__content p {
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
}

.about__content strong {
  color: var(--color-text);
}

.about__content .btn {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about__image img {
    max-width: 320px;
    margin: 0 auto;
  }
}
```

- [ ] **Step 5: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Nach dem Hero eine Problem-Sektion mit 3 Karten und eine Über-Dascha-Sektion mit Bild links und Text rechts.

```bash
git add index.html css/style.css
git commit -m "feat: problem section and about Dascha section"
```

---

## Task 4: Angebote (Pricing Cards)

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Angebote HTML**

In `index.html`, nach der About-Section einfügen:
```html
<!-- Angebote -->
<section class="pricing" id="angebote">
  <div class="container">
    <h2>Was ich für dich tun kann</h2>
    <p class="pricing__subtitle">Zwei Wege zu deinem neuen Style – such dir aus, was passt.</p>
    <div class="pricing__grid">

      <div class="pricing__card">
        <div class="pricing__header">
          <h3>Sprechstunde</h3>
          <p class="pricing__tagline">Für den schnellen Style-Check</p>
        </div>
        <div class="pricing__price">
          <span class="pricing__amount">70€</span>
        </div>
        <ul class="pricing__features">
          <li>60 Minuten 1:1 Beratung</li>
          <li>Analyse deines aktuellen Styles</li>
          <li>Konkrete Tipps was zu dir passt</li>
          <li>Shopping-Empfehlungen zum Mitnehmen</li>
        </ul>
        <a href="#buchung" class="btn btn-outline">Sprechstunde buchen</a>
      </div>

      <div class="pricing__card pricing__card--featured">
        <div class="pricing__badge">Beliebteste Wahl</div>
        <div class="pricing__header">
          <h3>Komplett-Styling</h3>
          <p class="pricing__tagline">Die volle Transformation</p>
        </div>
        <div class="pricing__price">
          <span class="pricing__amount">400€</span>
        </div>
        <ul class="pricing__features">
          <li>Kleiderschrank-Audit – was bleibt, was geht</li>
          <li>Persönlicher Style-Guide für dich</li>
          <li>Gemeinsame Shopping-Tour</li>
          <li>3 komplette Outfits zusammengestellt</li>
          <li>Nachbetreuung per WhatsApp (2 Wochen)</li>
        </ul>
        <a href="#buchung" class="btn btn-primary">Komplett-Styling buchen</a>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Angebote CSS**

Append to `css/style.css`:
```css
/* ============================================
   Pricing Section
   ============================================ */

.pricing {
  text-align: center;
}

.pricing__subtitle {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin-bottom: 3rem;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--gap);
  max-width: 800px;
  margin: 0 auto;
}

.pricing__card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform var(--transition);
}

.pricing__card:hover {
  transform: translateY(-4px);
}

.pricing__card--featured {
  border-color: var(--color-accent);
  box-shadow: 0 0 40px rgba(255, 87, 51, 0.15);
}

.pricing__badge {
  position: absolute;
  top: -14px;
  background: var(--color-accent);
  color: #fff;
  padding: 0.4rem 1.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pricing__header {
  margin-bottom: 1.5rem;
}

.pricing__tagline {
  color: var(--color-text-muted);
  font-size: var(--font-size-small);
  margin-top: 0.5rem;
}

.pricing__price {
  margin-bottom: 2rem;
}

.pricing__amount {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--color-text);
}

.pricing__card--featured .pricing__amount {
  color: var(--color-accent);
}

.pricing__features {
  list-style: none;
  text-align: left;
  margin-bottom: 2.5rem;
  width: 100%;
}

.pricing__features li {
  padding: 0.6rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border);
}

.pricing__features li:last-child {
  border-bottom: none;
}

.pricing__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
}

.pricing__card .btn {
  margin-top: auto;
  width: 100%;
  justify-content: center;
}
```

- [ ] **Step 3: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Zwei Pricing-Karten nebeneinander. Rechte Karte (Komplett-Styling) ist hervorgehoben mit Akzent-Border und "Beliebteste Wahl"-Badge.

```bash
git add index.html css/style.css
git commit -m "feat: pricing section with two service tiers"
```

---

## Task 5: Vorher/Nachher-Galerie & Testimonials

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Galerie HTML**

In `index.html`, nach der Pricing-Section einfügen:
```html
<!-- Vorher/Nachher Galerie -->
<section class="gallery" id="galerie">
  <div class="container">
    <h2>Die Ergebnisse sprechen für sich</h2>
    <p class="gallery__subtitle">Echte Transformationen. Echte Männer. Null Filter.</p>
    <div class="gallery__grid">
      <div class="gallery__item">
        <img src="images/placeholder.svg" alt="Transformation 1">
        <div class="gallery__labels">
          <span class="gallery__label gallery__label--before">Vorher</span>
          <span class="gallery__label gallery__label--after">Nachher</span>
        </div>
      </div>
      <div class="gallery__item">
        <img src="images/placeholder.svg" alt="Transformation 2">
        <div class="gallery__labels">
          <span class="gallery__label gallery__label--before">Vorher</span>
          <span class="gallery__label gallery__label--after">Nachher</span>
        </div>
      </div>
      <div class="gallery__item">
        <img src="images/placeholder.svg" alt="Transformation 3">
        <div class="gallery__labels">
          <span class="gallery__label gallery__label--before">Vorher</span>
          <span class="gallery__label gallery__label--after">Nachher</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Galerie CSS**

Append to `css/style.css`:
```css
/* ============================================
   Gallery Section
   ============================================ */

.gallery {
  text-align: center;
}

.gallery__subtitle {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin-bottom: 3rem;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--gap);
}

.gallery__item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform var(--transition);
}

.gallery__item:hover {
  transform: scale(1.02);
}

.gallery__item img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.gallery__labels {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}

.gallery__label {
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.gallery__label--before {
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-text-muted);
}

.gallery__label--after {
  background: rgba(255, 87, 51, 0.9);
  color: #fff;
}
```

- [ ] **Step 3: Testimonials HTML**

In `index.html`, nach der Gallery-Section einfügen:
```html
<!-- Testimonials -->
<section class="testimonials" id="testimonials">
  <div class="container">
    <h2>Was meine Kunden sagen</h2>
    <div class="testimonials__grid">
      <blockquote class="testimonial">
        <p class="testimonial__text">"Ich hab mich noch nie so gut angezogen gefühlt. Dascha hat mir in 2 Stunden mehr beigebracht als 30 Jahre Selbstversuche."</p>
        <footer class="testimonial__author">
          <strong>Markus, 32</strong>
          <span>Komplett-Styling</span>
        </footer>
      </blockquote>
      <blockquote class="testimonial">
        <p class="testimonial__text">"Endlich weiß ich, was zusammenpasst. Die Shopping-Tipps waren Gold wert – ich hab direkt 3 Outfits bestellt."</p>
        <footer class="testimonial__author">
          <strong>Tim, 28</strong>
          <span>Sprechstunde</span>
        </footer>
      </blockquote>
      <blockquote class="testimonial">
        <p class="testimonial__text">"Meine Freundin hat mich gefragt, ob ich einen neuen Job habe. Nee, nur einen neuen Style. Danke Dascha!"</p>
        <footer class="testimonial__author">
          <strong>Jan, 35</strong>
          <span>Komplett-Styling</span>
        </footer>
      </blockquote>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Testimonials CSS**

Append to `css/style.css`:
```css
/* ============================================
   Testimonials Section
   ============================================ */

.testimonials {
  text-align: center;
}

.testimonials h2 {
  margin-bottom: 3rem;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--gap);
}

.testimonial {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  text-align: left;
  transition: border-color var(--transition);
}

.testimonial:hover {
  border-color: var(--color-accent);
}

.testimonial__text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial__author {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.testimonial__author strong {
  color: var(--color-text);
}

.testimonial__author span {
  color: var(--color-accent);
  font-size: var(--font-size-small);
  font-weight: 600;
}
```

- [ ] **Step 5: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Galerie mit 3 Platzhalter-Bildern in einem Grid, darunter 3 Testimonial-Karten mit Zitaten.

```bash
git add index.html css/style.css
git commit -m "feat: gallery and testimonials sections"
```

---

## Task 6: Buchungs-Sektion (Cal.com + WhatsApp)

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Buchungs-Sektion HTML**

In `index.html`, nach der Testimonials-Section einfügen:
```html
<!-- Buchung -->
<section class="booking" id="buchung">
  <div class="container">
    <h2>Bereit für dein Style-Upgrade?</h2>
    <p class="booking__subtitle">Such dir einen Termin aus – oder schreib mir direkt auf WhatsApp, wenn du erstmal quatschen willst.</p>
    <div class="booking__grid">
      <div class="booking__calendar">
        <!-- Cal.com Widget – ersetze DEIN_CALCOM_LINK mit dem echten Link -->
        <div class="booking__placeholder" id="cal-embed">
          <p>Hier kommt der Cal.com Kalender hin.</p>
          <p class="booking__setup-hint">Ersetze diesen Bereich mit dem Cal.com Embed-Code:<br>
          <code>&lt;cal-inline calLink="dascha/styling"&gt;&lt;/cal-inline&gt;</code></p>
        </div>
      </div>
      <div class="booking__whatsapp">
        <div class="booking__whatsapp-card">
          <h3>Lieber erstmal schreiben?</h3>
          <p>Kein Problem – schreib mir auf WhatsApp. Ich antworte meistens innerhalb von ein paar Stunden.</p>
          <a href="https://wa.me/49XXXXXXXXXXX?text=Hey%20Dascha%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Styling-Beratung!" class="btn btn-whatsapp" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp öffnen
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Buchungs-Sektion CSS**

Append to `css/style.css`:
```css
/* ============================================
   Booking Section
   ============================================ */

.booking {
  text-align: center;
}

.booking__subtitle {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.booking__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
  text-align: left;
}

.booking__placeholder {
  background: var(--color-bg-card);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius);
  padding: 4rem 2rem;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-text-muted);
}

.booking__setup-hint {
  font-size: var(--font-size-small);
  color: var(--color-text-muted);
}

.booking__setup-hint code {
  display: inline-block;
  background: var(--color-bg);
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.booking__whatsapp-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
}

.booking__whatsapp-card h3 {
  margin-bottom: 1rem;
}

.booking__whatsapp-card p {
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.booking__whatsapp-card .btn {
  width: 100%;
  justify-content: center;
}

@media (max-width: 768px) {
  .booking__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: Buchungs-Sektion mit Platzhalter für Cal.com-Kalender links und WhatsApp-Karte rechts.

```bash
git add index.html css/style.css
git commit -m "feat: booking section with Cal.com placeholder and WhatsApp button"
```

---

## Task 7: FAQ Accordion & Footer

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: FAQ HTML**

In `index.html`, nach der Booking-Section einfügen:
```html
<!-- FAQ -->
<section class="faq" id="faq">
  <div class="container">
    <h2>Häufige Fragen</h2>
    <div class="faq__list">

      <details class="faq__item">
        <summary class="faq__question">Was passiert beim Komplett-Styling?</summary>
        <div class="faq__answer">
          <p>Ich komme zu dir nach Hause, wir gehen zusammen deinen Kleiderschrank durch und sortieren aus, was nicht mehr geht. Dann erstelle ich einen persönlichen Style-Guide für dich und wir gehen zusammen shoppen. Am Ende hast du mindestens 3 komplette Outfits und weißt genau, was du in Zukunft kaufen sollst.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Was ist der Unterschied zur Sprechstunde?</summary>
        <div class="faq__answer">
          <p>Die Sprechstunde ist eine 60-minütige Beratung – online oder vor Ort. Ich analysiere deinen aktuellen Style, gebe dir konkrete Tipps und eine Shopping-Liste. Perfekt, wenn du einen Startpunkt brauchst, aber noch nicht bereit für die volle Transformation bist.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Muss ich etwas vorbereiten?</summary>
        <div class="faq__answer">
          <p>Nö. Komm einfach so wie du bist – das ist ja der Punkt. Wenn du magst, kannst du vorher ein paar Fotos von Outfits sammeln, die dir gefallen. Aber das ist kein Muss.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Ist das Ganze auch was für Männer, die gar keine Ahnung haben?</summary>
        <div class="faq__answer">
          <p>Gerade für die! Je weniger du weißt, desto mehr kann ich dir helfen. Die meisten meiner Kunden starten bei Null – und genau das macht die Transformation so krass.</p>
        </div>
      </details>

      <details class="faq__item">
        <summary class="faq__question">Wo finden die Termine statt?</summary>
        <div class="faq__answer">
          <p>Die Sprechstunde geht auch online per Video-Call. Das Komplett-Styling findet bei dir vor Ort statt – inklusive gemeinsamer Shopping-Tour in deiner Stadt.</p>
        </div>
      </details>

    </div>
  </div>
</section>
```

- [ ] **Step 2: FAQ CSS**

Append to `css/style.css`:
```css
/* ============================================
   FAQ Section
   ============================================ */

.faq {
  text-align: center;
}

.faq h2 {
  margin-bottom: 3rem;
}

.faq__list {
  max-width: 750px;
  margin: 0 auto;
  text-align: left;
}

.faq__item {
  border-bottom: 1px solid var(--color-border);
}

.faq__question {
  padding: 1.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color var(--transition);
}

.faq__question::-webkit-details-marker {
  display: none;
}

.faq__question::after {
  content: '+';
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-accent);
  transition: transform var(--transition);
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq__item[open] .faq__question::after {
  content: '−';
}

.faq__question:hover {
  color: var(--color-accent);
}

.faq__answer {
  padding-bottom: 1.5rem;
}

.faq__answer p {
  color: var(--color-text-muted);
  line-height: 1.8;
}
```

- [ ] **Step 3: Footer HTML**

In `index.html`, nach `</main>` und vor `<script>` einfügen:
```html
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="#" class="nav__logo">Dascha<span>Style</span></a>
        <p>Styling-Beratung für Männer, die endlich gut aussehen wollen.</p>
      </div>
      <div class="footer__links">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#problem">Warum ich?</a></li>
          <li><a href="#about">Über mich</a></li>
          <li><a href="#angebote">Angebote</a></li>
          <li><a href="#buchung">Termin buchen</a></li>
        </ul>
      </div>
      <div class="footer__links">
        <h4>Mehr</h4>
        <ul>
          <li><a href="tipps.html">Styling-Tipps</a></li>
          <li><a href="impressum.html">Impressum</a></li>
          <li><a href="datenschutz.html">Datenschutz</a></li>
        </ul>
      </div>
      <div class="footer__links">
        <h4>Social Media</h4>
        <ul>
          <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="#" target="_blank" rel="noopener">TikTok</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 DashaStyle. Alle Rechte vorbehalten.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Footer CSS**

Append to `css/style.css`:
```css
/* ============================================
   Footer
   ============================================ */

.footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 2rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer__brand p {
  color: var(--color-text-muted);
  margin-top: 1rem;
  max-width: 280px;
  line-height: 1.6;
}

.footer__links h4 {
  font-size: var(--font-size-small);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.footer__links ul {
  list-style: none;
}

.footer__links li {
  margin-bottom: 0.5rem;
}

.footer__links a {
  color: var(--color-text-muted);
  font-size: var(--font-size-small);
  transition: color var(--transition);
}

.footer__links a:hover {
  color: var(--color-accent);
}

.footer__bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
  text-align: center;
}

.footer__bottom p {
  color: var(--color-text-muted);
  font-size: var(--font-size-small);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 5: Im Browser prüfen & committen**

```bash
open index.html
```

Erwartet: FAQ-Sektion mit aufklappbaren Fragen (native `<details>`), darunter ein 4-spaltiger Footer mit Links.

```bash
git add index.html css/style.css
git commit -m "feat: FAQ accordion and footer"
```

---

## Task 8: Styling-Tipps Seite

**Files:**
- Create: `tipps.html`
- Modify: `css/style.css`

- [ ] **Step 1: Tipps-Seite HTML erstellen**

Create `tipps.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Kostenlose Styling-Tipps für Männer – von den Basics bis zu Farben und Anlässen. Von Dascha, deiner Styling-Beraterin.">
  <title>Styling-Tipps für Männer – DashaStyle</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="nav">
    <div class="nav__inner container">
      <a href="index.html" class="nav__logo">Dascha<span>Style</span></a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links" id="nav-links">
        <li><a href="index.html#angebote">Angebote</a></li>
        <li><a href="index.html#about">Über mich</a></li>
        <li><a href="index.html#buchung" class="btn btn-primary btn--nav">Termin buchen</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <!-- Tipps Hero -->
    <section class="tipps-hero">
      <div class="container">
        <h1>Styling-Tipps für Männer</h1>
        <p class="tipps-hero__subtitle">Kostenlos. Ehrlich. Ohne Modezeitschriften-Gelaber.</p>
      </div>
    </section>

    <!-- Basics -->
    <section class="tipps-section" id="basics">
      <div class="container">
        <h2>Die Basics</h2>
        <p class="tipps-section__intro">Wenn du nur eine Sache mitnimmst: <strong>Passform schlägt alles.</strong> Ein 20€-Shirt das sitzt sieht besser aus als ein 200€-Teil das schlabbert.</p>
        <div class="tipps__grid">
          <div class="tipp-card">
            <h3>Passform ist König</h3>
            <p>Schulternähte auf den Schultern. Ärmel enden am Handgelenk. T-Shirt endet auf Gürtelhöhe. Hose ohne Stoffwurst am Knöchel. So einfach ist das.</p>
          </div>
          <div class="tipp-card">
            <h3>Weniger ist mehr</h3>
            <p>10 Teile die zusammenpassen sind besser als 50 Zufallskäufe. Bau dir eine Capsule Wardrobe – wenige, vielseitige Stücke die alle miteinander funktionieren.</p>
          </div>
          <div class="tipp-card">
            <h3>Investiere in Schuhe</h3>
            <p>Schuhe sind das Erste, was Leute an deinem Outfit bemerken. Ein Paar saubere, minimalistische Sneaker und ein Paar schicke Lederschuhe decken 90% aller Situationen ab.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Farben -->
    <section class="tipps-section" id="farben">
      <div class="container">
        <h2>Farben</h2>
        <p class="tipps-section__intro">Die einfachste Regel: <strong>Wenn du unsicher bist, bleib bei neutralen Farben.</strong> Die kann man fast nicht falsch kombinieren.</p>
        <div class="tipps__grid">
          <div class="tipp-card">
            <h3>Die sichere Basis</h3>
            <p>Schwarz, Weiß, Grau, Navy, Beige und Olivgrün. Mit diesen sechs Farben baust du ein komplettes Outfit, das immer funktioniert.</p>
          </div>
          <div class="tipp-card">
            <h3>Ein Akzent reicht</h3>
            <p>Du willst Farbe? Dann eine. Ein burgunderfarbener Hoodie zu schwarzer Hose und weißen Sneakern. Nicht drei knallige Farben gleichzeitig.</p>
          </div>
          <div class="tipp-card">
            <h3>Finger weg von Neon</h3>
            <p>Es gibt genau null Situationen, in denen ein neongelbes T-Shirt die richtige Wahl ist. Außer du läufst einen Marathon. Und selbst dann.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Anlässe -->
    <section class="tipps-section" id="anlaesse">
      <div class="container">
        <h2>Anlässe</h2>
        <p class="tipps-section__intro"><strong>Der Trick: Lieber leicht overdressed als underdressed.</strong> Niemand wurde jemals kritisiert, weil er zu gut angezogen war.</p>
        <div class="tipps__grid">
          <div class="tipp-card">
            <h3>Erstes Date</h3>
            <p>Gut sitzende dunkle Jeans oder Chino, cleanes T-Shirt oder Hemd (Ärmel hochkrempeln!), saubere Sneaker oder Chelsea Boots. Schlicht, aber durchdacht.</p>
          </div>
          <div class="tipp-card">
            <h3>Business Casual</h3>
            <p>Chino + Hemd + Sakko. Keine Krawatte. Saubere Lederschuhe. Fertig. Das funktioniert in 95% aller Büros und bei jedem Geschäftsessen.</p>
          </div>
          <div class="tipp-card">
            <h3>Freizeit / Wochenende</h3>
            <p>Gut sitzende Jogginghose (nicht die ausgeleierte vom Sport!) oder Chino-Shorts im Sommer. Dazu ein Premium-Basic-Tee und cleane Sneaker.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="tipps-cta">
      <div class="container">
        <h2>Tipps gelesen, aber immer noch unsicher?</h2>
        <p>Kein Wunder – Style lernt man nicht aus Artikeln. Buch dir einen Termin und ich zeig dir persönlich, was zu dir passt.</p>
        <a href="index.html#buchung" class="btn btn-primary">Termin buchen</a>
      </div>
    </section>
  </main>

  <!-- Footer (gleich wie Hauptseite) -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="index.html" class="nav__logo">Dascha<span>Style</span></a>
          <p>Styling-Beratung für Männer, die endlich gut aussehen wollen.</p>
        </div>
        <div class="footer__links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html#problem">Warum ich?</a></li>
            <li><a href="index.html#about">Über mich</a></li>
            <li><a href="index.html#angebote">Angebote</a></li>
            <li><a href="index.html#buchung">Termin buchen</a></li>
          </ul>
        </div>
        <div class="footer__links">
          <h4>Mehr</h4>
          <ul>
            <li><a href="tipps.html">Styling-Tipps</a></li>
            <li><a href="impressum.html">Impressum</a></li>
            <li><a href="datenschutz.html">Datenschutz</a></li>
          </ul>
        </div>
        <div class="footer__links">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 DashaStyle. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Tipps-Seite CSS**

Append to `css/style.css`:
```css
/* ============================================
   Tipps Page
   ============================================ */

.tipps-hero {
  padding: calc(72px + 4rem) 0 4rem;
  text-align: center;
  background: var(--color-bg);
}

.tipps-hero h1 {
  font-size: var(--font-size-h2);
  margin-bottom: 1rem;
}

.tipps-hero__subtitle {
  color: var(--color-text-muted);
  font-size: 1.15rem;
}

.tipps-section {
  padding: var(--section-padding);
}

.tipps-section__intro {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  line-height: 1.7;
}

.tipps-section__intro strong {
  color: var(--color-text);
}

.tipps__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--gap);
}

.tipp-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem;
  transition: border-color var(--transition);
}

.tipp-card:hover {
  border-color: var(--color-accent);
}

.tipp-card h3 {
  margin-bottom: 0.75rem;
}

.tipp-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.tipps-cta {
  text-align: center;
  padding: var(--section-padding);
  background: var(--color-bg-elevated);
}

.tipps-cta p {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin-bottom: 2rem;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}
```

- [ ] **Step 3: Im Browser prüfen & committen**

```bash
open tipps.html
```

Erwartet: Separate Seite mit Navigation, 3 Kategorien (Basics, Farben, Anlässe), je 3 Tipp-Karten pro Kategorie, CTA am Ende.

```bash
git add tipps.html css/style.css
git commit -m "feat: static styling tips page with three categories"
```

---

## Task 9: Impressum & Datenschutz

**Files:**
- Create: `impressum.html`
- Create: `datenschutz.html`

- [ ] **Step 1: Impressum-Seite erstellen**

Create `impressum.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Impressum – DashaStyle</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav class="nav" id="nav">
    <div class="nav__inner container">
      <a href="index.html" class="nav__logo">Dascha<span>Style</span></a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links" id="nav-links">
        <li><a href="index.html">Startseite</a></li>
        <li><a href="index.html#buchung" class="btn btn-primary btn--nav">Termin buchen</a></li>
      </ul>
    </div>
  </nav>

  <main class="legal-page">
    <div class="container">
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        <strong>[Vollständiger Name]</strong><br>
        [Straße und Hausnummer]<br>
        [PLZ Ort]
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: [E-Mail-Adresse]<br>
        Telefon: [Telefonnummer]
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>[USt-IdNr. oder „Kleinunternehmer gemäß § 19 UStG"]</p>

      <h2>Streitschlichtung</h2>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>. Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </div>
  </main>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Datenschutz-Seite erstellen**

Create `datenschutz.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Datenschutzerklärung – DashaStyle</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <nav class="nav" id="nav">
    <div class="nav__inner container">
      <a href="index.html" class="nav__logo">Dascha<span>Style</span></a>
      <button class="nav__toggle" id="nav-toggle" aria-label="Menü öffnen">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__links" id="nav-links">
        <li><a href="index.html">Startseite</a></li>
        <li><a href="index.html#buchung" class="btn btn-primary btn--nav">Termin buchen</a></li>
      </ul>
    </div>
  </nav>

  <main class="legal-page">
    <div class="container">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortliche Stelle</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br>
      <strong>[Vollständiger Name]</strong><br>
      [Adresse]<br>
      E-Mail: [E-Mail-Adresse]</p>

      <h2>2. Hosting</h2>
      <p>Diese Website wird bei [Netlify/GitHub Pages] gehostet. Der Hoster erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website von der die Anforderung kommt und Informationen zu Browser und Betriebssystem. Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).</p>

      <h2>3. Terminbuchung</h2>
      <p>Für die Terminbuchung nutze ich [Cal.com/Calendly]. Wenn du einen Termin buchst, werden dein Name und deine E-Mail-Adresse an [Cal.com/Calendly] übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Weitere Informationen findest du in der Datenschutzerklärung von [Cal.com/Calendly].</p>

      <h2>4. WhatsApp-Kontakt</h2>
      <p>Wenn du mich über den WhatsApp-Button kontaktierst, wird eine Verbindung zu WhatsApp (Meta Platforms Ireland Ltd.) hergestellt. Es gelten die Datenschutzbestimmungen von WhatsApp. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktives Klicken).</p>

      <h2>5. Google Fonts</h2>
      <p>Diese Website nutzt Google Fonts. Beim Aufrufen der Seite wird eine Verbindung zu Google-Servern hergestellt. Dabei wird Ihre IP-Adresse an Google übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen Darstellung).</p>

      <h2>6. Deine Rechte</h2>
      <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner Daten. Du hast außerdem das Recht auf Datenübertragbarkeit und das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Bei Fragen erreichst du mich unter [E-Mail-Adresse].</p>
    </div>
  </main>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Legal-Page CSS**

Append to `css/style.css`:
```css
/* ============================================
   Legal Pages (Impressum, Datenschutz)
   ============================================ */

.legal-page {
  padding-top: calc(72px + 4rem);
  padding-bottom: 4rem;
}

.legal-page .container {
  max-width: 750px;
}

.legal-page h1 {
  font-size: var(--font-size-h2);
  margin-bottom: 2rem;
}

.legal-page h2 {
  font-size: var(--font-size-h3);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.legal-page p {
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.legal-page a {
  text-decoration: underline;
}
```

- [ ] **Step 4: Im Browser prüfen & committen**

```bash
open impressum.html && open datenschutz.html
```

Erwartet: Minimale Seiten mit Navigation, Rechtstexten (Platzhalter in eckigen Klammern für echte Daten), sauber lesbar.

```bash
git add impressum.html datenschutz.html css/style.css
git commit -m "feat: impressum and datenschutz pages"
```

---

## Task 10: .gitignore & Projekt aufräumen

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: .gitignore erstellen**

Create `.gitignore`:
```
.DS_Store
.superpowers/
*.log
.env
node_modules/
```

- [ ] **Step 2: Committen**

```bash
git add .gitignore
git commit -m "chore: add .gitignore"
```

---

## Zusammenfassung

| Task | Was wird gebaut | Geschätzter Umfang |
|------|-----------------|--------------------|
| 1 | Scaffolding, Base CSS, Navigation | Grundgerüst |
| 2 | Hero Section mit Vorher/Nachher | Hauptelement |
| 3 | Problem + Über Dascha Sektionen | Content |
| 4 | Pricing Cards (2 Pakete) | Conversion |
| 5 | Galerie + Testimonials | Social Proof |
| 6 | Cal.com Embed + WhatsApp | Buchung |
| 7 | FAQ Accordion + Footer | Support |
| 8 | Styling-Tipps Seite | Extra Page |
| 9 | Impressum + Datenschutz | Rechtliches |
| 10 | .gitignore + Aufräumen | Housekeeping |
