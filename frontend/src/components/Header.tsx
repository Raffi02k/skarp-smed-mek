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
    const onScroll = () => setScrolled(window.scrollY > 28)
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
          <img src="/images/skarp-logo-vit-new.png" alt="Skarp Smed & Mek" />
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

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
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
          <p className="eyebrow">SKARP SMED & MEK</p>
          <nav aria-label="Mobilnavigation">
            {siteContent.navigation.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="button button-primary button-block" to="/kontakt#offert" onClick={() => setOpen(false)}>
            Begär offert
          </Link>
          <p className="mobile-menu-note">Götene · Västra Götaland · större uppdrag även längre bort</p>
        </div>
      </div>
    </header>
  )
}
