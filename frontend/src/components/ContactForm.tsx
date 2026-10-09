import { useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { locationBySlug } from '../content/locations'

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const ortSlug = searchParams.get('ort')
  const matchedLocation = ortSlug ? locationBySlug(ortSlug) : null
  const defaultOrt = matchedLocation ? matchedLocation.name : (ortSlug || '')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get('website')) {
      setStatus('success')
      setStatusMessage('Tack! Din förfrågan har mottagits.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setStatusMessage('Tack för din förfrågan! Vi återkommer till dig så snart vi kan.')
        form.reset()
      } else {
        setStatus('error')
        setStatusMessage(data.message || 'Ett fel uppstod när förfrågan skulle skickas. Försök igen.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Kunde inte nå servern. Kontrollera din anslutning eller ring oss direkt.')
    }
  }

  return (
    <form className="contact-form" id="offert" onSubmit={submit} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="37fc8de5-18d1-45b4-9d0f-a53696d86b46" />
      <input type="hidden" name="subject" value="Ny offertförfrågan – Skarp Smed & Mek" />
      <input type="hidden" name="from_name" value="Skarp Smed & Mek" />

      <div className="form-head">
        <p className="eyebrow">OFFERTFÖRFRÅGAN</p>
        <h2>Berätta vad du behöver hjälp med</h2>
        <p>Fyll i formuläret så återkommer vi med prisförslag och tidsplan så snabbt som möjligt.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Namn <span aria-hidden="true">*</span></span>
          <input name="name" required maxLength={80} autoComplete="name" />
        </label>
        <label>
          <span>Telefon <span aria-hidden="true">*</span></span>
          <input name="phone" required maxLength={30} autoComplete="tel" inputMode="tel" />
        </label>
        <label>
          <span>E-post <span aria-hidden="true">*</span></span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" />
        </label>
        <label>
          Tjänst
          <select name="service" defaultValue="">
            <option value="">Välj tjänst</option>
            <option>Svartstål &amp; rostfritt stål</option>
            <option>Specialtillverkning i metall</option>
            <option>Smed &amp; svets</option>
            <option>Maskinreparation &amp; mek</option>
            <option>Inhyrd svetskompetens</option>
            <option>Annat</option>
          </select>
        </label>
      </div>

      <label>
        Ort / var jobbet finns
        <input name="location" defaultValue={defaultOrt} key={defaultOrt} maxLength={120} autoComplete="address-level2" />
      </label>

      <label>
        <span>Beskriv jobbet <span aria-hidden="true">*</span></span>
        <textarea name="message" required maxLength={1800} rows={6} placeholder="Vad ska tillverkas, svetsas eller repareras? Beskriv gärna mått, användning och tidsplan om du vet den." />
      </label>
      <label className="checkbox-row">
        <input type="checkbox" required name="privacy" />
        <span>Jag godkänner att uppgifterna används för att besvara min förfrågan.</span>
      </label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
      {statusMessage && (
        <p className={`form-status ${status === 'success' ? 'status-success' : status === 'error' ? 'status-error' : ''}`} role="status">
          {statusMessage}
        </p>
      )}
    </form>
  )
}
