# Skarp Smed & Mek

Första design- och utvecklingsversionen av webbplatsen för **Skarp Smed & Mek**, driven av **FA Lucas Skarp** i Götene.

## Mål

Webbplatsen är byggd för att göra fyra saker direkt tydliga:

1. Vem företaget är.
2. Vad Lucas erbjuder.
3. Var verksamheten utgår från och vilket område han arbetar i.
4. Hur en potentiell kund går vidare med en offertförfrågan.

SEO-strukturen prioriterar separata tjänstesidor för specialtillverkning, svets/smide, maskinreparation/mek och inhyrd svetskompetens.

## Tech stack

- React
- TypeScript
- Vite
- react-router-dom
- Handbyggd CSS
- Ingen tung UI-ram
- Backend ingår inte i denna första version

## Struktur

```text
skarp-smed-mek/
├── README.md
├── .gitignore
├── vercel.json
├── tests/
└── frontend/
    ├── public/
    │   ├── images/
    │   ├── media/
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   ├── llms.txt
    │   └── 404.html
    └── src/
        ├── components/
        ├── content/
        ├── pages/
        └── styles/
```

## Routes

- `/`
- `/om-oss`
- `/tjanster`
- `/tjanster/specialtillverkning-metall`
- `/tjanster/smed-svets`
- `/tjanster/maskinreparation-mek`
- `/tjanster/inhyrd-svetskompetens`
- `/projekt`
- `/kontakt`
- `/integritet`
- `/404`

## Installation

```bash
cd frontend
npm install
npm run dev
```

Build:

```bash
npm run build
```

Kontroll:

```bash
npm test
```

## Environment variables

Kopiera `.env.example` till `.env.local` vid behov.

- `VITE_SITE_URL`: slutlig produktionsdomän för canonical/OG. Om den saknas används browserns aktuella origin.
- `VITE_API_BASE_URL`: används först när offertformuläret kopplas till backend.

## Hero-media

`frontend/public/media/hero-welding-loop.mp4` är en **egen genererad, varumärkesanpassad placeholder-loop** för konceptfasen. Den kombineras i hero-sektionen med en tillfällig svetsbild för att skapa rörelse utan att utge sig för att vara Lucas verkliga verkstad.

Byt helst ut hero-bilden eller hela videon mot Lucas egna högkvalitativa verkstadsklipp när sådant material finns.

## Tillfälliga bilder

Första designversionen använder tydligt markerade tillfälliga bilder från Wikimedia Commons/äldre Unsplash-material där licensinformationen är spårbar. De ska **inte** presenteras som Lucas egna projekt.

Kända källor i prototypen:

- `Welder in a workshop (Unsplash)` – Uğur Gürcüoğlu, publicerad 2016 och markerad CC0 på Wikimedia Commons.
- `Welder at work (Unsplash)` – Chetan Menaria, publicerad 2014 och markerad CC0 på Wikimedia Commons.
- U.S. Navy machine repair shop image – public domain enligt Wikimedia Commons.

Innan produktion bör `src/content/siteContent.ts`, `services.ts` och `projects.ts` uppdateras så att Lucas egna bilder används lokalt under `public/images/`.

## Viktiga placeholders före lansering

Följande uppgifter har inte lämnats och har därför **inte hittats på**:

- Telefonnummer
- E-post
- Exakt företagsadress
- Organisationsnummer
- Öppettider
- Verifierade recensioner
- Slutlig domän
- Sociala medieprofiler

`sitemap.xml` och `robots.txt` använder därför `domain-placeholder.invalid` tills riktig domän är vald.

Kontaktformuläret är visuellt färdigt men kör endast ett demo-meddelande. Koppla det till en riktig backend/e-posttjänst innan publicering.

## Google Business / lokal SEO

När Google Business Profile är skapad bör exakt NAP-information återanvändas konsekvent i:

- `siteContent.ts`
- kontakt-sidan
- footer
- schema.org-data
- Google Business Profile
- framtida lokala landningssidor

Skapa inte tunna stads-sidor enbart för sökord. Bygg bara lokala sidor när det finns verklig relevans och innehåll.

## Vercel

Root `vercel.json` installerar och bygger frontend från `frontend/` och skickar okända SPA-routes till `index.html`.

## MediaMagnet-credit

Footer innehåller MediaMagnet-credit och länkar till:

`https://mediamagnet-three.vercel.app`

`mediamagnet_logo_with_text_vit.png` i den här prototypen är en enkel temporär ordmärkning. Ersätt den med MediaMagnets riktiga vita logofil före kundlansering.
