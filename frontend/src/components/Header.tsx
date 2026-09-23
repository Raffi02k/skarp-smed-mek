import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { services } from '../content/services'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner shell">
        <Link className="brand-link" to="/" onClick={onLogoClick} aria-label="Skarp Smed & Mek – startsidan">
          <img src="/images/skarp-logo-vit-new.webp" alt="Skarp Smed & Mek" />
        </Link>

        <nav className="desktop-nav" aria-label="Huvudnavigation">
          {siteContent.navigation.map((item) => item.to === '/tjanster' ? (
            <div
              key={item.to}
              className={`nav-services ${servicesOpen ? 'is-open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false)
              }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) => `services-trigger ${isActive ? 'active' : ''}`}
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                onClick={() => setServicesOpen(false)}
              >
                {item.label}
                <svg className="services-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </NavLink>
              <div id="services-dropdown" className="services-dropdown" hidden={!servicesOpen}>
                <div className="services-dropdown-panel">
                  {services.map((service) => (
                    <NavLink key={service.slug} to={`/tjanster/${service.slug}`} onClick={() => setServicesOpen(false)}>
                      {service.shortTitle}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button-primary header-cta" to="/kontakt#offert">
          Begär offert
        </Link>

        <div className="header-actions">
          {siteContent.phone && (
            <a
              href={`tel:${siteContent.phone.replace(/[^0-9+]/g, '')}`}
              className="header-phone-btn"
              aria-label={`Ring ${siteContent.phone}`}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Ring</span>
            </a>
          )}

          <button
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <div className="menu-toggle-inner" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobilmeny"
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false)
        }}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <p className="eyebrow" style={{ margin: 0 }}>SKARP SMED &amp; MEK</p>
            <button
              type="button"
              className="mobile-menu-close-btn"
              aria-label="Stäng meny"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav aria-label="Mobilnavigation">
            {siteContent.navigation.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-ctas">
            {siteContent.phone && (
              <a
                href={`tel:${siteContent.phone.replace(/[^0-9+]/g, '')}`}
                className="button button-call button-block"
                onClick={() => setOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Ring {siteContent.phone}</span>
              </a>
            )}

            <Link className="button button-primary button-block" to="/kontakt#offert" onClick={() => setOpen(false)}>
              Begär offert
            </Link>
          </div>

          <p className="mobile-menu-note">Götene · Västra Götaland · större uppdrag även längre bort</p>
        </div>
      </div>
    </header>
  )
}
