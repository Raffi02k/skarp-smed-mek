import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { siteContent, temporaryMedia } from '../content/siteContent'

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Kontakt & offert | Skarp Smed & Mek"
        description="Kontakta Skarp Smed & Mek för specialtillverkning, svets, smide, maskinreparation eller inhyrd svetskompetens. Utgår från Götene."
        path="/kontakt"
      />
      <PageHero
        eyebrow="KONTAKT & OFFERT"
        title="Berätta vad som ska byggas, lagas eller svetsas."
        intro="Utgångspunkten är Götene, men uppdrag tas i hela Västra Götaland och längre bort när omfattningen motiverar det."
        image={temporaryMedia.weldingWorkshop}
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <div className="contact-info">
            <p className="eyebrow">KONTAKTUPPGIFTER</p>
            <h2>{siteContent.brandName}</h2>
            <p>{siteContent.shortDescription}</p>
            <div className="contact-facts">
              <div><span>Juridiskt namn</span><strong>{siteContent.legalName}</strong></div>
              <div><span>Utgår från</span><strong>{siteContent.city}</strong></div>
              <div><span>Serviceområde</span><strong>{siteContent.region} + längre vid större jobb</strong></div>
            </div>
            <div className="placeholder-box">
              <strong>Behöver verifieras före lansering</strong>
              <p>Telefonnummer, e-post, eventuell företagsadress, organisationsnummer och öppettider har inte lämnats ännu och visas därför inte som riktiga kontaktuppgifter.</p>
            </div>
            <div className="map-frame compact-map">
              <iframe
                title="Karta över Götene"
                src="https://www.google.com/maps?q=G%C3%B6tene%2C%20Sweden&t=k&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-caption">Kartan visar Götene som utgångspunkt – inte en påhittad företagsadress.</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
