import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'
import '../styles/legal.css'

export default function AccessibilityPage() {
  return (
    <>
      <PageMeta
        title="Tillgänglighetsredogörelse | Skarp Smed & Mek"
        description="Information om tillgänglighet och användbarhet på Skarp Smed & Meks webbplats enligt WCAG 2.1 riktlinjer."
        path="/tillganglighet"
      />

      <section className="legal-page-wrap shell">
        <div className="legal-header-kicker">
          <div className="legal-kicker-left">
            <span className="legal-badge-pill">Tillgänglighet</span>
            <span className="legal-badge-pill">WCAG 2.1 AA</span>
          </div>
          <span className="legal-update-date">Senast granskad {new Date().getFullYear()}</span>
        </div>

        <p className="eyebrow">TILLGÄNGLIGHETSREDOGÖRELSE</p>
        <h1 className="legal-main-title">En webbplats för alla</h1>
        <p className="legal-main-intro">
          {siteContent.brandName} strävar efter att webbplatsen ska vara tillgänglig, enkel och begriplig för alla besökare, oavsett tekniska hjälpmedel, skärmstorlek eller funktionsförmåga.
        </p>

        {/* Fact Cards */}
        <div className="legal-fact-cards">
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <span className="legal-fact-lbl">Riktlinjer</span>
            <span className="legal-fact-val">WCAG 2.1 Nivå AA</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <line x1="6" y1="8" x2="6" y2="8"></line>
                <line x1="10" y1="8" x2="10" y2="8"></line>
                <line x1="14" y1="8" x2="14" y2="8"></line>
                <line x1="18" y1="8" x2="18" y2="8"></line>
                <line x1="6" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="18" y2="12"></line>
                <line x1="7" y1="16" x2="17" y2="16"></line>
              </svg>
            </span>
            <span className="legal-fact-lbl">Tangentbord</span>
            <span className="legal-fact-val">100% navigerbarhet</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <span className="legal-fact-lbl">Kontrast</span>
            <span className="legal-fact-val">Anpassad färgsättning</span>
          </div>
          <div className="legal-fact-card">
            <span className="legal-fact-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </span>
            <span className="legal-fact-lbl">Responsivitet</span>
            <span className="legal-fact-val">Mobil, surfplatta & desktop</span>
          </div>
        </div>

        {/* Numbered Articles */}
        <div className="legal-articles-list">
          <article className="legal-article-row">
            <span className="legal-article-num">01</span>
            <div className="legal-article-body">
              <h2>Vad vi har gjort för ökad tillgänglighet</h2>
              <p>
                Webbplatsen är utvecklad med modern webbstandard och semantisk HTML5 i grunden. Vi har lagt särskild vikt vid följande områden:
              </p>
              <ul>
                <li><strong>Tangentbordsnavigering:</strong> Alla interaktiva länkar, formulärfält och knappar kan nås och användas enbart med tangentbordet via Tab, Enter och Mellanslag.</li>
                <li><strong>Fokusmarkeringar:</strong> Tydliga visuella fokusramar visas när man navigerar med tangentbordet.</li>
                <li><strong>Skärmläsarstöd:</strong> Korrekt användning av ARIA-attribut, rubriknivåer och alternativa texter för bilder och ikoner.</li>
                <li><strong>Skip link:</strong> En direktlänk för att hoppa över sidhuvudet och gå direkt till huvudinnehållet finns tillgänglig för skärmläsare och tangentbordsanvändare.</li>
                <li><strong>Färgkontraster:</strong> Text och interaktiva element uppfyller kraven på kontrastförhållande mot bakgrunden för god läsbarhet.</li>
              </ul>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">02</span>
            <div className="legal-article-body">
              <h2>Teknisk kompatibilitet</h2>
              <p>
                Webbplatsen fungerar i moderna versioner av vanliga webbläsare såsom Chrome, Safari, Firefox och Edge på såväl mobila enheter som datorer. Webbplatsen anpassar sig automatiskt till skärmens upplösning och textstorleksinställningar.
              </p>
            </div>
          </article>

          <article className="legal-article-row">
            <span className="legal-article-num">03</span>
            <div className="legal-article-body">
              <h2>Återkoppling och kontakt</h2>
              <p>
                Vi arbetar kontinuerligt med att förbättra tillgängligheten på sajten. Om du stöter på problem, saknar information i något specifikt format eller har förslag på förbättringar, hör gärna av dig till oss via vårt{' '}
                <Link to="/kontakt" style={{ color: 'var(--blue-soft)', textDecoration: 'underline' }}>
                  kontaktformulär
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
