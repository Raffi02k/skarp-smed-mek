import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'
import '../styles/legal.css'

export default function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Integritet & GDPR | Skarp Smed & Mek"
        description="Information om hur Skarp Smed & Mek och FA Lucas Skarp hanterar dina personuppgifter med transparens och säkerhet enligt GDPR."
        path="/integritet"
      />

      <section className="legal-page-wrap shell">
        {/* Top Header Kicker (Screenshot 1) */}
        <div className="legal-header-kicker">
          <div className="legal-kicker-left">
            <span className="legal-badge-pill">Integritet</span>
            <span className="legal-badge-pill">GDPR</span>
          </div>
          <span className="legal-update-date">Senast uppdaterad {new Date().getFullYear()}</span>
        </div>

        <p className="eyebrow">INTEGRITET & GDPR</p>
        <h1 className="legal-main-title">Era uppgifter, i trygga händer</h1>
        <p className="legal-main-intro">
          Vi tror på transparens, även när det gäller data. Här förklarar vi vad vi samlar in, varför, och vilka rättigheter du har när du kontaktar Skarp Smed & Mek.
        </p>

        {/* 4 Fact Cards (Screenshot 1) */}
        <div className="legal-fact-cards">
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M16 14h.01"></path>
              </svg>
            </span>
            <span className="legal-fact-lbl">Ansvarig</span>
            <span className="legal-fact-val">{siteContent.legalName} / {siteContent.brandName}</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </span>
            <span className="legal-fact-lbl">Laglig grund</span>
            <span className="legal-fact-val">Berättigat intresse & avtal</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>
            <span className="legal-fact-lbl">Lagringstid</span>
            <span className="legal-fact-val">Upp till 24 månader</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <span className="legal-fact-lbl">Kontakt</span>
            <span className="legal-fact-val">info@skarpsmedmek.se</span>
          </div>
        </div>

        {/* Section: Vilka uppgifter vi samlar in (Screenshot 2) */}
        <div className="legal-data-section">
          <div className="legal-data-heading">
            <p className="eyebrow">VILKA UPPGIFTER VI SAMLAR IN</p>
            <h2>Aldrig mer än vad som behövs för att svara dig</h2>
          </div>

          <div className="legal-data-grid">
            <div className="legal-data-card">
              <div className="legal-data-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="legal-data-content">
                <h3>Namn & företagsnamn</h3>
                <p>För att veta vem vi pratar med och kunna återkoppla rätt till er verksamhet eller privatperson.</p>
              </div>
            </div>

            <div className="legal-data-card">
              <div className="legal-data-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="legal-data-content">
                <h3>E-postadress</h3>
                <p>För att besvara din förfrågan, skicka skisser och leverera tydliga offerter.</p>
              </div>
            </div>

            <div className="legal-data-card">
              <div className="legal-data-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="legal-data-content">
                <h3>Ditt meddelande & ritning</h3>
                <p>För att förstå vad du behöver hjälp med inom smide, svetsning eller maskinreparation.</p>
              </div>
            </div>

            <div className="legal-data-card">
              <div className="legal-data-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="legal-data-content">
                <h3>Telefonnummer</h3>
                <p>Endast när du ber oss ringa upp dig eller för snabb avstämning inför montage och leverans.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Numbered Articles (Screenshot 3) */}
        <div className="legal-articles-list">
          <article className="legal-article-row">
            <span className="legal-article-num">01</span>
            <div className="legal-article-body">
              <h2>Vilka vi är</h2>
              <p>
                {siteContent.brandName} drivs av den enskilda firman {siteContent.legalName}, med säte i {siteContent.city}, {siteContent.region}. Vi är personuppgiftsansvariga för de uppgifter du lämnar till oss via kontaktformulär, e-post eller telefon.
              </p>
              <p>
                Har du frågor gällande hur dina personuppgifter hanteras är du alltid välkommen att kontakta oss via hemsidans kontaktformulär eller telefon.
              </p>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">02</span>
            <div className="legal-article-body">
              <h2>Varför vi behandlar uppgifterna</h2>
              <p>
                Vi behandlar uppgifterna för att besvara din förfrågan, ta fram och lämna offerter och, om vi inleder ett samarbete, för att kunna tillverka, leverera och montera beställda produkter samt utföra mekaniska reparationer.
              </p>
              <p>
                Den lagliga grunden för detta är vårt <strong>berättigade intresse</strong> av att besvara förfrågningar och kommunicera med potentiella kunder, samt <strong>fullgörande av avtal</strong> när ett uppdrag beställs.
              </p>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">03</span>
            <div className="legal-article-body">
              <h2>Hur länge vi sparar dem</h2>
              <p>
                Förfrågningar som inte leder till ett aktivt samarbete raderas senast 24 månader efter senaste kontakt.
              </p>
              <p>
                Uppgifter kopplade till ingångna avtal, orderbekräftelser och fakturering sparas i enlighet med gällande lagstiftning, inklusive bokföringslagen (vanligtvis 7 år).
              </p>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">04</span>
            <div className="legal-article-body">
              <h2>Vilka som har tillgång</h2>
              <p>
                Endast personer inom {siteContent.brandName} som behöver uppgifterna i sitt arbete har tillgång till dem. Vi säljer aldrig dina personuppgifter till tredje part.
              </p>
              <p>
                Tekniska underleverantörer (såsom webbhotell och e-posttjänster) kan hantera data på vårt uppdrag via personuppgiftsbiträdesavtal som säkerställer samma höga skyddsnivå.
              </p>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">05</span>
            <div className="legal-article-body">
              <h2>Dina rättigheter</h2>
              <p>
                Enligt GDPR (Dataskyddsförordningen) har du rätt att:
              </p>
              <ul>
                <li>Begära registerutdrag över vilka personuppgifter vi behandlar om dig.</li>
                <li>Begära rättelse av felaktiga eller ofullständiga uppgifter.</li>
                <li>Begära radering (»rätten att bli bortglömd«) under vissa förutsättningar.</li>
                <li>Göra invändningar mot behandlingen eller begära begränsning.</li>
              </ul>
              <p>
                Om du vill utöva någon av dina rättigheter, kontakta oss via kontaktformuläret så återkopplar vi skyndsamt.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
