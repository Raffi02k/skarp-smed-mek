import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { services } from '../content/services'
import { temporaryMedia } from '../content/siteContent'

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Tjänster | Skarp Smed & Mek"
        description="Specialtillverkning i metall, svets, smide, maskinreparation och inhyrd svetskompetens från Götene."
        path="/tjanster"
      />
      <PageHero
        eyebrow="TJÄNSTER"
        title="Metall, svets och mek – uppdelat efter det du faktiskt behöver."
        intro="Varje viktig tjänst har en egen sida. Det gör det lättare för kunden att hitta rätt och ger en starkare SEO-struktur än en enda lång samlingssida."
        image={temporaryMedia.weldingWorkshop}
      />
      <section className="section">
        <div className="shell services-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.slug}>
              <div className="service-row-media">
                <img src={service.image} alt="Tillfällig inspirationsbild" loading="lazy" decoding="async" />
                <span>0{index + 1}</span>
              </div>
              <div className="service-row-copy">
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
                <Link className="text-link large" to={`/tjanster/${service.slug}`}>Läs mer →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
