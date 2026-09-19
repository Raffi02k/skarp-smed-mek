import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactForm() {
  const [message, setMessage] = useState('')

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('Designversion: formuläret kopplas till Lucas e-post innan publicering.')
  }

  return (
    <form className="contact-form" id="offert" onSubmit={submit}>
      <div className="form-head">
        <p className="eyebrow">OFFERTFÖRFRÅGAN</p>
        <h2>Berätta vad du behöver hjälp med</h2>
        <p>Det här formuläret är förberett för webbplatsen. E-postmottagare och skarp backend kopplas in före lansering.</p>
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
            <option>Specialtillverkning i metall</option>
            <option>Smed & svets</option>
            <option>Maskinreparation & mek</option>
            <option>Inhyrd svetskompetens</option>
            <option>Annat</option>
          </select>
        </label>
      </div>

      <label>
        Ort / var jobbet finns
        <input name="location" maxLength={120} autoComplete="address-level2" />
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
      <button className="button button-primary" type="submit">Skicka förfrågan</button>
      {message && <p className="form-status" role="status">{message}</p>}
    </form>
  )
}
