import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import '../styles/legal.css'
import '../styles/locations.css'

interface FaqItem {
  category: string
  question: string
  answer: string
}

const faqsData: FaqItem[] = [
  // Beställning & Offert
  {
    category: 'Beställning & Offert',
    question: 'Hur går jag tillväga för att begära en offert?',
    answer:
      'Det enklaste sättet är att fylla i kontaktformuläret på hemsidan eller ringa direkt på 070-123 45 67. Beskriv vad som ska tillverkas, svetsas eller repareras, gärna med bifogad ritning, skiss eller måttangivelser.',
  },
  {
    category: 'Beställning & Offert',
    question: 'Hur snabbt kan jag förvänta mig svar på min förfrågan?',
    answer:
      'Vi besvarar alla förfrågningar inom 24 timmar på vardagar. För enklare arbeten kan vi ofta ge prisförslag samma dag.',
  },
  {
    category: 'Beställning & Offert',
    question: 'Erbjuder ni fasta priser eller löpande räkning?',
    answer:
      'Vi föredrar alltid fasta priser så att du som kund vet exakt vad slutsumman landar på utan obehagliga överraskningar. Vid akuta felsökningar eller svårbedömda reparationer kan vi arbeta på en transparent löpande timtaxa enligt överenskommelse.',
  },
  {
    category: 'Beställning & Offert',
    question: 'Utför ni uppdrag åt både privatpersoner och företag?',
    answer:
      'Ja, vi hjälper såväl industriföretag, lantbrukare och byggfirmor som privatpersoner som behöver räcken, grindar, fästen eller reparation av redskap.',
  },

  // Smide & Svets
  {
    category: 'Smide & Svets',
    question: 'Vilka metaller och svetsmetoder behärskar ni?',
    answer:
      'Vi svetsar och bearbetar vanligt konstruktionsstål, rostfritt stål, slitstål (Hardox) och aluminium. Vi behärskar MIG/MAG, TIG samt MMA (elektrod/pinnsvetsning) för såväl verkstads- som utomhusmontage.',
  },
  {
    category: 'Smide & Svets',
    question: 'Kan ni tillverka delar utifrån en trasig originaldel eller enkel skiss?',
    answer:
      'Ja, det är en stor del av vår vardag! Du behöver ingen färdig CAD-ritning. Lämna in den trasiga delen till verkstaden eller skicka ett foto med mått, så mäter vi upp och tillverkar en ny, ofta med smarta förstärkningar.',
  },
  {
    category: 'Smide & Svets',
    question: 'Vilka ytbehandlingar kan ni ordna?',
    answer:
      'Vi kan leverera produkter grundmålade, varmförzinkade (galvade) för långvarigt utomhusskydd, eller pulverlackerade i valfri RAL-kulör.',
  },

  // Maskinreparation & Mek
  {
    category: 'Maskinreparation & Mek',
    question: 'Vilka typer av maskiner och utrustning reparerar ni?',
    answer:
      'Vi utför mekaniska reparationer och svetsarbeten på entreprenadmaskiner, traktorer, lantbruksredskap, transportörer, skopor, fästen, chassier och hydraulikinfästningar.',
  },
  {
    category: 'Maskinreparation & Mek',
    question: 'Kan ni komma ut och reparera på plats?',
    answer:
      'Ja, vår servicebil är utrustad för mobil svetsning, skärning och mekaniska montagearbeten ute i fält eller på er anläggning.',
  },
  {
    category: 'Maskinreparation & Mek',
    question: 'Vad gör jag om en maskin havererat akut under pågående arbete?',
    answer:
      'Ring oss direkt på 070-123 45 67. Vid akuta driftstopp prioriterar vi snabb inställelse för att minimera kostsamma stillestånd.',
  },

  // Område & Samarbete
  {
    category: 'Område & Samarbete',
    question: 'Vilket geografiskt område arbetar ni i?',
    answer:
      'Vår verkstad ligger i Götene och vårt primära arbetsområde är hela Skaraborg och Västra Götaland (Lidköping, Skövde, Mariestad, Skara, Falköping, Trollhättan, Göteborg, etc.). Vid större tillverknings- och montageuppdrag reser vi även längre i Sverige.',
  },
  {
    category: 'Område & Samarbete',
    question: 'Kan man hyra in er som svetsresurs till en verkstad?',
    answer:
      'Ja! Lucas hyr ut sin kompetens till verkstäder och tillverkande industrier som behöver flexibel förstärkning vid produktionstoppar eller specialprojekt.',
  },
]

const categories = ['Alla', 'Beställning & Offert', 'Smide & Svets', 'Maskinreparation & Mek', 'Område & Samarbete']

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alla')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredFaqs =
    selectedCategory === 'Alla'
      ? faqsData
      : faqsData.filter((item) => item.category === selectedCategory)

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <PageMeta
        title="Vanliga frågor & svar (FAQ) | Skarp Smed & Mek"
        description="Hitta svar på vanliga frågor om beställningar, smide, svetsning, maskinreparation och samarbete med Skarp Smed & Mek i Götene och Västra Götaland."
        path="/faq"
      />

      <section className="legal-page-wrap shell">
        <div className="legal-header-kicker">
          <div className="legal-kicker-left">
            <span className="legal-badge-pill">FAQ</span>
            <span className="legal-badge-pill">Frågor & svar</span>
          </div>
          <span className="legal-update-date">Snabba svar på dina frågor</span>
        </div>

        <p className="eyebrow">VANLIGA FRÅGOR</p>
        <h1 className="legal-main-title">Allt du behöver veta</h1>
        <p className="legal-main-intro">
          Här har vi samlat svar på de vanligaste frågorna gällande priser, beställningar, svetsmetoder, reparationer och samarbete med Skarp Smed & Mek.
        </p>

        {/* Filter Bar */}
        <div className="faq-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`faq-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat)
                setOpenIndex(0)
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="ort-faq-list" style={{ maxWidth: '920px', margin: '0 0 60px' }}>
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className={`ort-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="ort-faq-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="ort-faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="ort-faq-answer">
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="ort-short-answer-card" style={{ maxWidth: '920px', padding: '34px' }}>
          <span className="ort-short-answer-label">Hittade du inte svaret du sökte?</span>
          <p style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '16px' }}>
            Du är alltid välkommen att kontakta Lucas direkt. Vi tar gärna emot en beskrivning av ditt projekt och återkopplar inom kort.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/kontakt#offert" className="button button-primary">
              Skicka en förfrågan
            </Link>
            <a href="tel:0701234567" className="button button-ghost">
              Ring 070-123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
