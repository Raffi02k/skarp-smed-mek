import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { siteContent, temporaryMedia } from '../content/siteContent'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Om Skarp Smed & Mek | Lucas Skarp, Götene"
        description="Skarp Smed & Mek drivs av FA Lucas Skarp i Götene och arbetar med svetsning, smide, specialtillverkning och maskinreparation."
        path="/om-oss"
      />
      <PageHero
        eyebrow="OM SKARP SMED & MEK"
        title="Ett namn att bygga förtroende runt."
        intro="Skarp Smed & Mek är namnet Lucas använder för verksamheten. Det juridiska företagsnamnet är FA Lucas Skarp. Sajten lyfter hantverket och den personliga kontakten utan att hitta på en större organisation än den som faktiskt finns."
        image={temporaryMedia.weldingWorkshop}
      />
      <section className="section">
        <div className="shell feature-grid about-grid">
          <div className="feature-copy">
            <p className="eyebrow">LUCAS SKARP</p>
            <h2>Svetsare, smed och mekaniskt problemlösare.</h2>
            <p>
              Lucas har beskrivit verksamheten som en smidesfirma där det mesta kretsar kring stål och svets. Han tillverkar specialprodukter på beställning, reparerar maskiner och hyr även ut sin arbetskraft till verkstäder – framför allt för svetsning.
            </p>
            <p>
              Basen är {siteContent.city}. Målet är främst fler jobb i {siteContent.region}, men för större uppdrag kan resan vara betydligt längre.
            </p>
            <Link className="button button-primary" to="/kontakt#offert">Kontakta Lucas</Link>
          </div>
          <div className="feature-media">
            <img src={temporaryMedia.weldingCloseup} alt="Tillfällig bild på svetsarbete" loading="lazy" decoding="async" />
            <div className="feature-badge about-brand-badge"><span>VARUMÄRKE</span><strong>Skarp Smed & Mek</strong></div>
          </div>
        </div>
      </section>
      <section className="section dark-panel-section">
        <div className="shell">
          <dl className="facts-panel">
            <div><dt>Bas</dt><dd>Götene</dd></div>
            <div><dt>Primärt område</dt><dd>Västra Götaland</dd></div>
            <div><dt>Fokus framåt</dt><dd>Specialtillverkning</dd></div>
            <div><dt>Juridiskt namn</dt><dd>FA Lucas Skarp</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}
