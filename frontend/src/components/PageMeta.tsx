import { useEffect } from 'react'

export type PageMetaProps = {
  title: string
  description: string
  path?: string
  image?: string
  noindex?: boolean
}

const upsertMeta = (selector: string, attr: string, value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/)
    if (match) element.setAttribute(match[1], match[2])
    document.head.appendChild(element)
  }
  element.setAttribute(attr, value)
}

export default function PageMeta({
  title,
  description,
  path = '/',
  image = '/images/og.jpg',
  noindex = false,
}: PageMetaProps) {
  useEffect(() => {
    const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
    const base = configured || window.location.origin
    const canonical = `${base}${path.startsWith('/') ? path : `/${path}`}`
    const ogImage = image.startsWith('http') ? image : `${base}${image}`

    document.title = title
    upsertMeta('meta[name="description"]', 'content', description)
    upsertMeta('meta[property="og:title"]', 'content', title)
    upsertMeta('meta[property="og:description"]', 'content', description)
    upsertMeta('meta[property="og:url"]', 'content', canonical)
    upsertMeta('meta[property="og:image"]', 'content', ogImage)
    upsertMeta('meta[name="twitter:title"]', 'content', title)
    upsertMeta('meta[name="twitter:description"]', 'content', description)
    upsertMeta('meta[name="twitter:image"]', 'content', ogImage)
    upsertMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow')

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }, [title, description, path, image, noindex])

  return null
}
