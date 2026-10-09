import { useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CookieModal from './CookieModal'
import { locations } from '../content/locations'
import { services } from '../content/services'
import { siteContent } from '../content/siteContent'

export default function Footer() {
  const location = useLocation()
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false)

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer className="site-footer">
        <div className="footer-grid shell">
          <div className="footer-brand">
            <Link to="/" onClick={onLogoClick} aria-label="Till startsidan">
              <img src="/images/skarp-logo-vit-new.webp" alt="Skarp Smed & Mek" />
            </Link>
            <p>{siteContent.shortDescription}</p>
            <span className="legal-name">Drivs av {siteContent.legalName}</span>
          </div>

          <div>
            <h2>Navigation</h2>
            <div className="footer-links">
              {siteContent.navigation.map((item) => (
                <Link key={item.to} to={item.to}>{item.label}</Link>
              ))}
              <Link to="/faq">Vanliga frågor (FAQ)</Link>
            </div>
          </div>

          <div>
            <h2>Tjänster</h2>
            <div className="footer-links">
              {services.map((service) => (
                <Link key={service.slug} to={`/tjanster/${service.slug}`}>{service.shortTitle}</Link>
              ))}
            </div>
          </div>

          <div>
            <h2>Område</h2>
            <p>{siteContent.serviceArea}</p>
            <Link className="text-link" to="/kontakt">Kontakt & offert →</Link>
          </div>
        </div>

        {/* Orter SEO Pills */}
        <div className="footer-orter-section shell">
          <div className="footer-orter-list">
            <span className="footer-orter-badge">Orter</span>
            {locations.map((loc) => {
              const isActive = location.pathname === `/orter/${loc.slug}`
              return (
                <Link
                  key={loc.slug}
                  to={`/orter/${loc.slug}`}
                  className={`footer-ort-pill ${isActive ? 'active' : ''}`}
                >
                  {loc.pillLabel}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer Bottom Bar (Screenshots 1 & 4) */}
        <div className="footer-bottom shell">
          <span>© {new Date().getFullYear()} {siteContent.brandName} · Drivs av {siteContent.legalName}</span>

          <div className="footer-legal-links">
            <Link to="/integritet">Integritet & GDPR</Link>
            <Link to="/tillganglighet">Tillgänglighet</Link>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => setIsCookieModalOpen(true)}
            >
              Cookie-inställningar
            </button>
            <Link to="/faq">FAQ</Link>
          </div>

          <a className="mediamagnet-credit" href={siteContent.mediaMagnetUrl} target="_blank" rel="noreferrer">
            <span>Byggd av</span>
            <img src="/images/mediamagnet_logo_with_text_vit.webp" alt="MediaMagnet" />
          </a>
        </div>
      </footer>

      {/* Interactive Cookie Settings Modal (Screenshot 4) */}
      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />
    </>
  )
}


