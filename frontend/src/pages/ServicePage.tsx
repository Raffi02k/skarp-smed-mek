import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { serviceBySlug } from '../content/services'
import NotFoundPage from './NotFoundPage'

export default function ServicePage() {
  const { slug } = useParams()
  const service = serviceBySlug(slug)

  if (!service) return <NotFoundPage />

  return (
    <>
      <PageMeta
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/tjanster/${service.slug}`}
        image={service.image}
      />
      <PageHero eyebrow={service.eyebrow} title={service.title} intro={service.intro} image={service.image}>
        <Link className="button button-primary" to="/kontakt#offert">Begär offert</Link>
      </PageHero>

      <section className="section service-detail">
        <div className="shell service-detail-grid">
          <div className="service-detail-copy">
            <p className="eyebrow">OM TJÄNSTEN</p>
            <h2>Praktiskt arbete, tydligt upplägg.</h2>
            <p>{service.description}</p>
            <h3>Exempel på vad sidan täcker</h3>
            <ul className="check-list">
              {service.details.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="service-detail-media">
            <img src={service.secondaryImage || service.image} alt="Tillfällig inspirationsbild för tjänsten" loading="lazy" decoding="async" />
            <span className="demo-label">Tillfällig bild · ersätts med Lucas eget material</span>
          </div>
        </div>
      </section>

      <section className="section dark-panel-section">
        <div className="shell">
          <div className="dark-panel">
            <div>
              <p className="eyebrow">VARFÖR SKARP SMED & MEK?</p>
              <h2>En direkt väg från problem till lösning.</h2>
            </div>
            <div className="benefit-grid">
              {service.benefits.map((benefit, index) => (
                <div key={benefit}>
                  <span>0{index + 1}</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mini-cta">
        <div className="shell mini-cta-inner">
          <div>
            <p className="eyebrow">NÄSTA STEG</p>
            <h2>Har du ett liknande behov?</h2>
          </div>
          <Link className="button button-primary" to="/kontakt#offert">Skicka en förfrågan</Link>
        </div>
      </section>
    </>
  )
}
