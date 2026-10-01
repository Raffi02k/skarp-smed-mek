import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/legal.css'

export type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'skarp_cookie_consent'

export default function CookieModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setPreferences(JSON.parse(stored))
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSave = (custom?: Partial<CookiePreferences>) => {
    const finalPrefs = {
      necessary: true,
      analytics: custom?.analytics !== undefined ? custom.analytics : preferences.analytics,
      marketing: custom?.marketing !== undefined ? custom.marketing : preferences.marketing,
    }
    setPreferences(finalPrefs)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs))
    } catch {
      // ignore
    }
    onClose()
  }

  const handleAcceptAll = () => {
    handleSave({ analytics: true, marketing: true })
  }

  return (
    <div
      className="cookie-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      <div className="cookie-modal-box">
        <button
          type="button"
          className="cookie-modal-close"
          onClick={onClose}
          aria-label="Stäng cookie-inställningar"
        >
          ✕
        </button>

        <h3 id="cookie-modal-title" className="cookie-modal-title">
          Cookie-inställningar
        </h3>
        <p className="cookie-modal-subtitle">
          Välj vilka cookies du tillåter. Läs mer i vår{' '}
          <Link to="/integritet" onClick={onClose}>
            integritetspolicy
          </Link>
          .
        </p>

        <div className="cookie-cards-list">
          {/* Nödvändiga */}
          <div className="cookie-card-item">
            <div className="cookie-card-text">
              <h4>Nödvändiga</h4>
              <p>Krävs för att sajten ska fungera, t.ex. säkerhet och dina cookie-val. Kan inte stängas av.</p>
            </div>
            <label className="cookie-switch is-disabled" title="Nödvändiga cookies kan inte stängas av">
              <input type="checkbox" checked disabled readOnly aria-label="Nödvändiga cookies aktiverade" />
              <span className="cookie-switch-slider"></span>
            </label>
          </div>

          {/* Analys */}
          <div className="cookie-card-item">
            <div className="cookie-card-text">
              <h4>Analys</h4>
              <p>Hjälper oss förstå hur sajten används så att vi kan förbättra den (t.ex. besöksstatistik).</p>
            </div>
            <label className="cookie-switch" title="Växla analyscookies">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                }
                aria-label="Tillåt analyscookies"
              />
              <span className="cookie-switch-slider"></span>
            </label>
          </div>

          {/* Marknadsföring */}
          <div className="cookie-card-item">
            <div className="cookie-card-text">
              <h4>Marknadsföring</h4>
              <p>Används för att mäta och anpassa annonser i sociala medier och sökmotorer.</p>
            </div>
            <label className="cookie-switch" title="Växla marknadsföringscookies">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                }
                aria-label="Tillåt marknadsföringscookies"
              />
              <span className="cookie-switch-slider"></span>
            </label>
          </div>
        </div>

        <div className="cookie-modal-actions">
          <button type="button" className="cookie-btn-accept" onClick={handleAcceptAll}>
            Acceptera alla
          </button>
          <button type="button" className="cookie-btn-save" onClick={() => handleSave()}>
            Spara val
          </button>
        </div>
      </div>
    </div>
  )
}
