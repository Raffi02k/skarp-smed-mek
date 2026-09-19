import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string
  intro: string
  image?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, intro, image, children }: Props) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(3,8,15,.94), rgba(3,8,15,.55)), url(\"${image}\")` } : undefined}>
      <div className="shell page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        {children}
      </div>
    </section>
  )
}
