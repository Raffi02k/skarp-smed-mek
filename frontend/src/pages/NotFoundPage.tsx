import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="404 – Sidan finns inte | Skarp Smed & Mek"
        description="Sidan du söker kunde inte hittas."
        path="/404"
        noindex
      />
      <section className="not-found shell">
        <p className="eyebrow">404</p>
        <h1>Den sidan verkar ha lämnat verkstaden.</h1>
        <p>Adressen är fel eller sidan har flyttats. Gå tillbaka till startsidan eller välj en tjänst.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">Till startsidan</Link>
          <Link className="button button-outline" to="/tjanster">Se tjänster</Link>
        </div>
      </section>
    </>
  )
}
