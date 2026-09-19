export type Review = {
  name: string
  text: string
  source: string
  rating: number
}

export const reviews: Review[] = []

// Preview content, replaced automatically when real reviews are supplied above.
export const demoReviews: Review[] = [
  { name: 'Johan Andersson', text: 'Smidig kontakt från första skissen till den färdiga metalldetaljen.', source: 'Demo', rating: 5 },
  { name: 'Maria Lindberg', text: 'Noggrant svetsarbete och ett resultat som passade precis där det skulle.', source: 'Demo', rating: 5 },
  { name: 'Peter Karlsson', text: 'Bra hjälp när maskinen behövde repareras. Tydlig dialog genom hela jobbet.', source: 'Demo', rating: 5 },
  { name: 'Anna Johansson', text: 'En praktisk lösning på ett specialjobb som inte gick att köpa färdigt.', source: 'Demo', rating: 5 },
  { name: 'Erik Nilsson', text: 'Flexibelt med arbete på plats och ett omsorgsfullt utfört slutresultat.', source: 'Demo', rating: 5 },
  { name: 'Sofia Larsson', text: 'Lyhörd för våra önskemål och bra återkoppling från början till slut.', source: 'Demo', rating: 5 },
]
