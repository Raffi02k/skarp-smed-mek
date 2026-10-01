import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { locationBySlug, locations } from '../content/locations'
import NotFoundPage from './NotFoundPage'
import '../styles/locations.css'

export default function LocationPage() {
  const { slug } = useParams()
  const location = locationBySlug(slug)

  // State for interactive accordions
  const [openProcessIndex, setOpenProcessIndex] = useState<number | null>(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  if (!location) {
    return <NotFoundPage />
  }

  const toggleProcess = (index: number) => {
    setOpenProcessIndex((prev) => (prev === index ? null : index))
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  const otherLocations = locations.filter((loc) => loc.slug !== location.slug)

  return (
    <div className="ort-page">
      <PageMeta
        title={location.seoTitle}
        description={location.seoDescription}
        path={`/orter/${location.slug}`}
      />

      {/* Breadcrumb / Back link */}
      <div className="ort-breadcrumb-wrap shell">
        <Link to="/" className="ort-backlink">
          ← Tillbaka till start
        </Link>
      </div>

      {/* Hero Section (Screenshot 2) */}
      <section className="ort-hero shell">
        <div className="ort-hero-grid">
          <div className="ort-hero-content">
            <span className="ort-tag">SMED & MEKANISK VERKSTAD · {location.name.toUpperCase()}</span>
            <h1 className="ort-hero-title">
              Smed & mekanisk verkstad i{' '}
              <span className="ort-highlight">
                {location.name}
                <svg
                  className="ort-underline-svg"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3,14 Q45,2 97,12"
                    fill="none"
                    stroke="#2b79ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="ort-hero-subtitle">{location.heroSubtitle}</p>

            {/* "KORT SVAR" callout card */}
            <div className="ort-short-answer-card">
              <span className="ort-short-answer-label">Kort svar</span>
              <p>{location.shortAnswer}</p>
            </div>
          </div>

          {/* Right side info card */}
          <aside className="ort-side-card" aria-label="Lokal information">
            <div className="ort-side-badges">
              <span className="ort-badge-accent">{location.name.toUpperCase()}</span>
              <span className="ort-badge-dark">FAST PRIS</span>
              <span className="ort-badge-dark">24H SVAR</span>
            </div>

            <div className="ort-side-work-in">
              <h3>VI JOBBAR I</h3>
              <div className="ort-areas-list">
                {location.nearbyAreas.join(' · ')}
              </div>
              <p className="ort-side-note">
                Utgår från verkstad i Götene med full servicebil för arbeten på plats i {location.name} och hela {location.region}.
              </p>
            </div>

            <Link
              to={`/kontakt?ort=${location.slug}#offert`}
              className="button button-primary ort-side-cta"
            >
              Begär offert →
            </Link>
          </aside>
        </div>
      </section>

      {/* Stats & Social Proof Banner (Screenshot 3) */}
      <section className="ort-stats-section" aria-label="Statistik och omdöme">
        <div className="shell ort-stats-grid">
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat1.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat1.label}</span>
          </div>
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat2.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat2.label}</span>
          </div>
          <div className="ort-stat-box">
            <span className="ort-stat-val">{location.stats.stat3.value}</span>
            <span className="ort-stat-lbl">{location.stats.stat3.label}</span>
          </div>
          <div className="ort-quote-box">
            <p className="ort-quote-text">"{location.stats.quote}"</p>
            <span className="ort-quote-author">{location.stats.quoteAuthor}</span>
          </div>
        </div>
      </section>

      {/* "Det vi gör i [Ort]" Grid (Screenshot 3) */}
      <section className="ort-services-section shell" aria-label="Våra tjänster lokalt">
        <p className="eyebrow">DET VI GÖR I {location.name.toUpperCase()}</p>
        <h2>
          Allt inom smide & mekanik{' '}
          <span className="ort-highlight">
            lokalt
            <svg
              className="ort-underline-svg"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4,15 Q50,4 96,13"
                fill="none"
                stroke="#ff9a32"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <div className="ort-services-grid">
          {location.services.map((service) => (
            <Link
              key={service.number}
              to={`/tjanster/${service.serviceSlug}`}
              className="ort-service-card"
            >
              <div className="ort-service-card-top">
                <span className="ort-service-num">{service.number}</span>
                <span className="ort-service-arrow" aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* "Varför Skarp Smed & Mek i [Ort]" (Screenshot 5) */}
      <section className="ort-usps-section" aria-label="Fördelar med Skarp Smed & Mek">
        <div className="shell">
          <p className="eyebrow">VARFÖR SKARP SMED & MEK I {location.name.toUpperCase()}</p>
          <h2>En trygg & rak partner för era stålprojekt</h2>
          <div className="ort-usps-grid">
            {location.usps.map((usp) => (
              <div key={usp.number} className="ort-usp-card">
                <span className="ort-usp-num">{usp.number}</span>
                <h3>{usp.title}</h3>
                <p>{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Så jobbar vi" Process Accordion (Screenshot 5) */}
      <section className="ort-process-section shell" aria-label="Så jobbar vi">
        <div className="ort-process-grid">
          <div className="ort-process-heading-sticky">
            <p className="eyebrow">SÅ JOBBAR VI</p>
            <h2>Från första samtal till färdig metallösning</h2>
            <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.95rem' }}>
              Samma tydliga process oavsett om ni sitter i {location.name} eller någon annanstans i {location.region}.
            </p>
          </div>

          <div className="ort-process-list">
            {location.processSteps.map((step, index) => {
              const isOpen = openProcessIndex === index
              return (
                <div key={step.number} className={`ort-process-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="ort-process-toggle"
                    onClick={() => toggleProcess(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="ort-process-title-wrap">
                      <span className="ort-process-index">{step.number}</span>
                      <span className="ort-process-step-title">{step.title}</span>
                    </div>
                    <span className="ort-process-symbol">+</span>
                  </button>
                  {isOpen && <p className="ort-process-desc">{step.description}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local FAQ Accordion */}
      <section className="ort-faq-section" aria-label="Vanliga frågor">
        <div className="shell ort-faq-container">
          <div style={{ textAlign: 'center' }}>
            <p className="eyebrow">VANLIGA FRÅGOR · {location.name.toUpperCase()}</p>
            <h2>Frågor om smide & mekanik i {location.name}</h2>
          </div>

          <div className="ort-faq-list">
            {location.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div key={faq.question} className={`ort-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="ort-faq-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="ort-faq-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  {isOpen && <div className="ort-faq-answer">{faq.answer}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="ort-bottom-cta">
        <div className="shell ort-bottom-cta-inner">
          <p className="eyebrow">REDO ATT KOMMA IGÅNG?</p>
          <h2>Behöver ni smed eller mekaniker i {location.name}?</h2>
          <p>
            Vi hjälper er med måttbeställda stålkonstruktioner, reparationssvetsning eller akut maskinservice i {location.name}. Skicka en förfrågan eller ring oss direkt.
          </p>
          <div className="ort-cta-buttons">
            <Link to={`/kontakt?ort=${location.slug}#offert`} className="button button-primary">
              Begär offert för {location.name}
            </Link>
            <a href="tel:0701234567" className="button button-ghost">
              Ring 070-123 45 67
            </a>
          </div>
        </div>
      </section>

      {/* Other Locations Bar at bottom */}
      <section className="ort-other-locations" aria-label="Andra orter">
        <div className="shell">
          <h3 className="ort-other-locations-title">Smide, svets & mekanik i fler orter</h3>
          <div className="ort-other-pills">
            {otherLocations.map((loc) => (
              <Link key={loc.slug} to={`/orter/${loc.slug}`} className="footer-ort-pill">
                {loc.pillLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
