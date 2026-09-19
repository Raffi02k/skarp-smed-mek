import PageMeta from '../components/PageMeta'

export default function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Integritet | Skarp Smed & Mek"
        description="Information om hur kontaktuppgifter hanteras på Skarp Smed & Meks webbplats."
        path="/integritet"
      />
      <section className="legal-page shell">
        <p className="eyebrow">INTEGRITET</p>
        <h1>Integritet och kontaktuppgifter</h1>
        <p>Detta är en design- och utvecklingsversion. En slutlig integritetstext ska färdigställas när kontaktformulärets faktiska e-postmottagare, backend och lagringsflöde är bestämda.</p>
        <h2>Planerad princip</h2>
        <p>Uppgifter i offertformuläret ska endast användas för att besvara förfrågan och hanteras enligt den slutliga lösning som väljs före publicering.</p>
      </section>
    </>
  )
}
