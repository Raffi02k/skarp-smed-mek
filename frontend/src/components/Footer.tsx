import type { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../content/services'
import { siteContent } from '../content/siteContent'

export default function Footer() {
  const location = useLocation()
  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
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
            <Link to="/integritet">Integritet</Link>
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

      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} Skarp Smed & Mek</span>
        <a className="mediamagnet-credit" href={siteContent.mediaMagnetUrl} target="_blank" rel="noreferrer">
          <span>Byggd av</span>
          <img src="/images/mediamagnet_logo_with_text_vit.webp" alt="MediaMagnet" />
        </a>
      </div>
    </footer>
  )
}
