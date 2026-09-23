import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ReviewsRail from '../components/ReviewsRail'
import { projectPlaceholders } from '../content/projects'
import { services } from '../content/services'
import { siteContent, temporaryMedia } from '../content/siteContent'

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteContent.brandName,
    legalName: siteContent.legalName,
    description: siteContent.tagline,
    areaServed: [
      { '@type': 'City', name: 'Götene' },
      { '@type': 'AdministrativeArea', name: 'Västra Götaland' },
    ],
  }

  return (
    <>
      <PageMeta
        title="Skarp Smed & Mek | Svets, smide & specialtillverkning i Götene"
        description="Skarp Smed & Mek i Götene – specialtillverkning i metall, svets, smide, maskinreparation och flexibel svetskompetens i Västra Götaland."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* 0. HERO VIDEO SECTION */}
      <section className="hero-video">
        <div className="hero-video__bg" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={siteContent.heroPosterUrl}
            src={siteContent.heroVideoUrl}
          />
        </div>
        <div className="hero-video__overlay" aria-hidden="true" />
        <div className="hero-video__content">
          <img
            src="/images/skarp-logo-vit-new.webp"
            alt={siteContent.brandName}
            className="hero-video__logo"
            width="420"
            height="420"
          />

          <h1 className="hero-video__subtitle">
            Specialtillverkning i metall, svetsning, smide och maskinreparation i {siteContent.city} &amp; {siteContent.region}.
          </h1>

          <div className="hero-video__ctas">
            <Link to="/kontakt#offert" className="hero-video__cta hero-video__cta--primary">
              Begär offert
            </Link>
            <Link to="/tjanster" className="hero-video__cta">
              Se våra tjänster
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Det här erbjuder vi">
        <div className="trust-strip-track">
          {[0, 1].map((copy) => (
            <div className="trust-strip-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              <div><strong>01</strong><span>Specialtillverkning efter behov</span></div>
              <div><strong>02</strong><span>Svets, smide & reparation</span></div>
              <div><strong>03</strong><span>Flexibel för verkstad & fältjobb</span></div>
              <div><strong>04</strong><span>Reser för större uppdrag</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-services" id="tjanster">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">TJÄNSTER</p>
              <h2>Från idé till färdig metallösning.</h2>
            </div>
            <p>
              Fokus ligger på praktiska jobb där något behöver tillverkas, svetsas, repareras eller anpassas. Varje huvudtjänst får en egen sida så både kunden och Google förstår exakt vad Skarp Smed & Mek erbjuder.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <Link className={`service-card service-card-${index + 1}`} key={service.slug} to={`/tjanster/${service.slug}`}>
                <img src={service.image} alt="Tillfällig inspirationsbild för tjänsten" loading="lazy" decoding="async" />
                <div className="service-card-shade" />
                <span className="service-number">0{index + 1}</span>
                <div className="service-card-content">
                  <p>{service.eyebrow}</p>
                  <h3>{service.shortTitle}</h3>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="media-note">Bilderna i första versionen är tillfälliga inspirationsbilder och ersätts med Lucas egna jobb före lansering.</p>
        </div>
      </section>

      <section className="section feature-split">
        <div className="shell feature-grid">
          <div className="feature-media">
            <img src={temporaryMedia.weldingCloseup} alt="Tillfällig bild på svetsarbete" loading="lazy" decoding="async" />
            <div className="feature-badge">
              <span>FOKUS</span>
              <strong>Specialtillverkning</strong>
            </div>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">DET LUCAS VILL VÄXA MED</p>
            <h2>Beställ något som faktiskt passar jobbet.</h2>
            <p>
              Specialtillverkning är den del av verksamheten som ska få extra utrymme. Motorfästen, stålstaket och andra kundanpassade metallprodukter visar bredden – men sidan ska framför allt göra det enkelt att beskriva ett behov och få kontakt direkt.
            </p>
            <ul className="check-list">
              <li>Utgå från behov, mått och användning</li>
              <li>Tydligt offertflöde för privatpersoner och företag</li>
              <li>Projektbilder som bygger förtroende över tid</li>
            </ul>
            <Link className="text-link large" to="/tjanster/specialtillverkning-metall">Läs om specialtillverkning →</Link>
          </div>
        </div>
      </section>

      <section className="section projects-preview">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">PROJEKT & GALLERI</p>
              <h2>Arbetet ska synas, inte bara beskrivas.</h2>
            </div>
            <p>
              När Lucas skickar fler bilder blir projektgalleriet en av sajtens starkaste delar. Varje riktigt projekt kan få kategori, kort beskrivning och plats när den informationen finns.
            </p>
          </div>

          <div className="project-grid">
            {projectPlaceholders.map((project) => (
              <Link className="project-card" key={project.slug} to={`/projekt/${project.slug}`}>
                <div className="project-image-wrap">
                  <img src={project.image} alt="Tillfällig exempelbild" loading="lazy" decoding="async" />
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-open">Visa projekt <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
          <Link className="button button-outline" to="/projekt">Se projektupplägget</Link>
        </div>
      </section>

      <ReviewsRail />

      <section className="section area-section">
        <div className="shell area-grid">
          <div>
            <p className="eyebrow">GÖTENE · VÄSTRA GÖTALAND</p>
            <h2>Lokal bas. Flexibel räckvidd.</h2>
            <p>
              Skarp Smed & Mek utgår från Götene. De flesta jobb är intressanta i Västra Götaland, men större uppdrag kan motivera längre resor. Lucas har redan berättat att han tidigare arbetat så långt bort som Falun och Karlskrona vid större jobb.
            </p>
            <Link className="button button-primary" to="/kontakt#offert">Beskriv ditt jobb</Link>
          </div>
          <div className="map-frame">
            <iframe
              title="Karta över Götene"
              src="https://www.google.com/maps?q=G%C3%B6tene%2C%20Sweden&t=k&z=11&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-caption">Utgångspunkt: Götene. Exakt företagsadress läggs in först när den är verifierad.</div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-bg" style={{ backgroundImage: `url("${temporaryMedia.weldingWorkshop}")` }} aria-hidden="true" />
        <div className="shell final-cta-inner">
          <p className="eyebrow">HAR DU ETT JOBB SOM BEHÖVER LÖSAS?</p>
          <h2>Skicka behovet. Börja där.</h2>
          <p>Beskriv vad som ska tillverkas, svetsas eller repareras så finns ett tydligt första steg till offert.</p>
          <Link className="button button-primary" to="/kontakt#offert">Begär offert</Link>
        </div>
      </section>
    </>
  )
}
