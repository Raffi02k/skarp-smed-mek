import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { projectPlaceholders } from '../content/projects'
import NotFoundPage from './NotFoundPage'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projectPlaceholders.find((item) => item.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <>
      <PageMeta
        title={`${project.seoTitle} | Skarp Smed & Mek`}
        description={project.seoDescription}
        path={`/projekt/${project.slug}`}
        image={project.image}
      />
      <PageHero eyebrow="PROJEKTEXEMPEL · GÖTENE · VÄSTRA GÖTALAND" title={project.heading} intro={project.intro} image={project.image}>
        <Link className="button button-ghost" to="/projekt">← Alla projekt</Link>
      </PageHero>

      <section className="section">
        <div className="shell project-detail">
          <figure className="project-detail-image">
            <img src={project.image} alt={`Tillfällig inspirationsbild för ${project.title.toLowerCase()}`} decoding="async" />
            <figcaption>Exempelbild · ersätts med Lucas egna projektbilder.</figcaption>
          </figure>
          <div className="project-detail-copy">
            <p className="eyebrow">ARBETETS OMFATTNING</p>
            <h2>{project.workTitle}</h2>
            <p>{project.workDescription}</p>
            <dl className="project-facts">
              <div><dt>Arbetsområde</dt><dd>{project.serviceLabel}</dd></div>
              <div><dt>Verksamhetens bas</dt><dd>Götene</dd></div>
              <div><dt>Primärt län</dt><dd>Västra Götalands län</dd></div>
              <div><dt>Projektets arbetsplats</dt><dd>Kompletteras för det verkliga uppdraget</dd></div>
            </dl>
            <Link className="text-link" to="/projekt">← Tillbaka till projektgalleriet</Link>
          </div>
        </div>
      </section>

      <section className="section project-work-section">
        <div className="shell project-detail">
          <div className="project-detail-copy">
            <p className="eyebrow">SÅ KAN ARBETET GÅ TILL</p>
            <h2>Arbetsmoment, steg för steg.</h2>
            <ol className="project-work-steps">
              {project.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
          <div className="project-detail-copy">
            <p className="eyebrow">RESULTAT & FORTSÄTTNING</p>
            <h2>Från behov till lösning.</h2>
            <p>{project.result}</p>
            <h3>Liknande uppdrag i Götene och Västra Götaland</h3>
            <p>Har du ett liknande behov? Skicka gärna bilder, mått och en beskrivning av vad du behöver hjälp med. Ange också ort och län där jobbet finns. För större uppdrag kan arbete även utföras längre bort i Sverige.</p>
            <Link className="text-link" to={`/tjanster/${project.serviceSlug}`}>Läs mer om {project.serviceLabel.toLowerCase()} →</Link>
          </div>
        </div>
      </section>

      <section className="mini-cta">
        <div className="shell mini-cta-inner">
          <div>
            <p className="eyebrow">HAR DU EN LIKNANDE IDÉ?</p>
            <h2>Berätta om ditt projekt.</h2>
          </div>
          <Link className="button button-primary" to="/kontakt#offert">Begär offert</Link>
        </div>
      </section>
    </>
  )
}
