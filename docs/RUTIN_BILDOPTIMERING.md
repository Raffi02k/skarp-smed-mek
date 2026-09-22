# Rutin & Checklista: Projektrensning & Bildoptimering

*Generell guide för prestandaoptimering, städning och filhantering i webbprojekt.*

---

## 1. Sammanfattning

Denna rutin beskriver ett standardiserat tillvägagångssätt för att städa upp webbprojekt och optimera mediagenerering. Genom att regelbundet ta bort överflödiga filer, rensa virtuella miljöer/dubbletter samt konvertera tung media till moderna format (t.ex. WebP/AVIF) säkras snabba laddningstider, effektiv lagring och optimal prestanda.

---

## 2. Åtgärder & Riktlinjer

### Identifiering och rensning av tunga filer

- **Dubblettmappar och oanvända resurser:** Kontrollera rotstrukturen och `assets/`/`public/`-mappar efter kopierade eller inaktuella filer och raderade resurser som inte längre refereras i källkoden.
- **Okomprimerade bildfiler:** Identifiera alla råa PNG- och JPEG-filer. Ersätt dem med komprimerade WebP/AVIF-motsvarigheter och radera originalen från produktionsbygget.
- **Virtuella miljöer & temporära filer:** Säkerställ att `.venv`, `node_modules`, build-cacher och lokala loggar inte av misstag inkluderas i versionshanteringen eller distribueringen (verifiera `.gitignore`).

### Riktlinjer för bildoptimering (PNG/JPEG ➔ WebP/AVIF)

Bilder bör konverteras till moderna webbformat med kontrollerad komprimering för att uppnå bästa balans mellan skärpa och filstorlek:

- **Storformats- & Hero-bilder (t.ex. >1920px bredd):**
  - Konvertera till WebP (rekommenderad målstorlek: **< 500 KB**).
  - Använd maximalt 2000px bredd för Retina-stöd.
- **Standard- & Innehållsbilder (t.ex. 800px – 1200px bredd):**
  - Konvertera till WebP (rekommenderad målstorlek: **< 250 KB**).
- **Uppdatering av källkod:**
  - Säkerställ att bildkomponenter eller CSS/HTML-referenser uppdateras till de nya bildsökvägarna (eller använder `<picture>`-taggar för fallback).

---

## 3. Checklista & Prestandamål

| Område / Kriterium | Målvärde / Riktlinje | Metod / Åtgärd | Status |
| :--- | :--- | :--- | :---: |
| **Total repostorlek** | < 100 MB totalt | Rensa `.venv`, obehövliga assets och `node_modules`-cache | `[x]` Godkänd (~7.7 MB repo) |
| **Initial laddningsstorlek (Hero)** | < 1 MB sammanlagt | Komprimera startbilder och media till WebP/AVIF | `[x]` Godkänd (~565 KB inkl. video) |
| **Bildleverans & Status** | 200 OK med korrekt MIME-typ | Verifiera NGINX/CDN-headers för `image/webp` | `[x]` Godkänd (`vercel.json` konfigurerad) |

---

## 4. Verifiering i produktion

Innan ett projekt lanseras eller när en städning slutförs ska följande verifieras i skarpt läge:

1. **Lighthouse / PageSpeed-test:**
   - Kör audit och kontrollera att *"Properly size images"* och *"Serve images in next-gen formats"* är godkända.
2. **Nätverksinspektion:**
   - Kontrollera i DevTools (Network-fliken) att bildresurser returnerar statuskod **200 OK** samt korrekta `Content-Type`-headers (t.ex. `image/webp`).
