import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { projectPlaceholders } from '../content/projects'
import { temporaryMedia } from '../content/siteContent'

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projekt & galleri | Skarp Smed & Mek"
        description="Projektgalleri för specialtillverkning, svets, smide och maskinreparation. Riktiga projektbilder läggs in före lansering."
        path="/projekt"
      />
      <PageHero
        eyebrow="PROJEKT & GALLERI"
        title="Bevisa kvaliteten med riktiga jobb."
        intro="Sidan är byggd för Lucas egna projektbilder. I den här första designversionen används tydligt markerade exempelbilder tills det riktiga materialet är insamlat."
        image={temporaryMedia.weldingCloseup}
      />
      <section className="section">
        <div className="shell gallery-grid">
          {projectPlaceholders.concat(projectPlaceholders).map((project, index) => (
            <Link className={`gallery-card gallery-card-${(index % 3) + 1}`} key={`${project.slug}-${index}`} to={`/projekt/${project.slug}`}>
              <img src={project.image} alt="Tillfällig exempelbild" loading="lazy" decoding="async" />
              <div className="gallery-overlay">
                <span>EXEMPELBILD</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <span className="project-open">Visa projekt <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="gallery-note">
          <strong>Före publicering:</strong> ersätt exempelbilderna med Lucas egna projekt och lägg bara till plats, material och uppdragsdetaljer när de är verifierade.
        </div>
      </section>
      <section className="mini-cta">
        <div className="shell mini-cta-inner">
          <div>
            <p className="eyebrow">DITT PROJEKT KAN BÖRJA HÄR</p>
            <h2>Beskriv vad du vill få tillverkat.</h2>
          </div>
          <Link className="button button-primary" to="/kontakt#offert">Begär offert</Link>
        </div>
      </section>
    </>
  )
}
