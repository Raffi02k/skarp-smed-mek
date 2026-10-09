import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { siteContent, temporaryMedia } from '../content/siteContent'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Om Skarp Smed & Mek | Lucas Skarp, Götene"
        description="Skarp Smed & Mek drivs av FA Lucas Skarp i Götene och arbetar med svetsning, smide, specialtillverkning i svartstål och rostfritt samt maskinreparation."
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
            <h2>Svetsare, smed och mekanisk problemlösare.</h2>
            <p>
              Lucas verksamhet kretsar kring praktiskt stål- och svetsarbete – med stor erfarenhet av både robust svartstål och finare rostfritt stål. Han tillverkar kundanpassade produkter på beställning, reparerar maskiner och hyr även ut sin arbetskraft till verkstäder som behöver extra svetskompetens.
            </p>
            <p>
              Basen är {siteContent.city}. Målet är främst fler jobb i {siteContent.region}, men för större uppdrag kan resan vara betydligt längre.
            </p>
            <Link className="button button-primary" to="/kontakt#offert">Kontakta Lucas</Link>
          </div>
          <div className="feature-media">
            <img src={temporaryMedia.weldingCloseup} alt="Svetsarbete i stålverkstad" loading="lazy" decoding="async" />
            <div className="feature-badge about-brand-badge"><span>VARUMÄRKE</span><strong>Skarp Smed & Mek</strong></div>
          </div>
        </div>
      </section>
      <section className="section dark-panel-section">
        <div className="shell">
          <dl className="facts-panel">
            <div><dt>Bas</dt><dd>Götene</dd></div>
            <div><dt>Primärt område</dt><dd>Västra Götaland</dd></div>
            <div><dt>Fokus framåt</dt><dd>Svartstål, rostfritt &amp; special</dd></div>
            <div><dt>Juridiskt namn</dt><dd>FA Lucas Skarp</dd></div>
          </dl>
        </div>
      </section>
    </>
  )
}
