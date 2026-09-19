import { useEffect, useId, useRef, useState } from 'react'
import { demoReviews, reviews } from '../content/reviews'
import type { Review } from '../content/reviews'
import '../styles/reviews.css'

function wrapPosition(position: number, width: number) {
  return width + (((position - width) % width) + width) % width
}

function ReviewRow({ items, reverse, reduced }: {
  items: Review[]
  reverse: boolean
  reduced: boolean
}) {
  const id = useId()
  const rail = useRef<HTMLDivElement>(null)
  const group = useRef<HTMLDivElement>(null)
  const pointerDown = useRef(false)
  const manual = useRef(false)
  const drag = useRef<{ x: number; left: number } | null>(null)
  const movement = useRef<{ from: number; to: number; started: number } | null>(null)
  const row = reverse ? 2 : 1

  function interact() {
    movement.current = null
    manual.current = true
  }

  function wrap() {
    const el = rail.current
    const width = group.current?.offsetWidth || 0
    if (!el || reduced || !width || width < el.clientWidth) return
    const previous = el.scrollLeft
    const next = wrapPosition(previous, width)
    if (Math.abs(next - previous) > 0.5) {
      el.scrollLeft = next
      if (drag.current) drag.current.left += next - previous
    }
  }

  useEffect(() => {
    const el = rail.current
    if (!el) return
    movement.current = null
    drag.current = null
    pointerDown.current = false
    manual.current = false
    const width = group.current?.offsetWidth || 0
    el.scrollLeft = !reduced && width >= el.clientWidth ? width + (reverse ? 150 : 0) : 0
    if (reduced) return

    let frame = 0
    let lastTime = 0
    let position = el.scrollLeft
    let visible = true
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    observer.observe(el)

    function tick(now: number) {
      const element = rail.current
      if (!element) return
      const groupWidth = group.current?.offsetWidth || 0
      const canLoop = groupWidth > 0 && groupWidth >= element.clientWidth
      const delta = lastTime ? Math.min(now - lastTime, 40) : 0
      lastTime = now
      const animation = movement.current

      if (animation) {
        const progress = Math.min(1, (now - animation.started) / 420)
        position = animation.from + (animation.to - animation.from) * (1 - Math.pow(1 - progress, 3))
        if (canLoop) position = wrapPosition(position, groupWidth)
        element.scrollLeft = position
        if (progress === 1) {
          movement.current = null
          manual.current = false
          position = element.scrollLeft
        }
      } else if (canLoop && visible && !document.hidden &&
        !pointerDown.current && !drag.current) {
        if (manual.current) {
          position = element.scrollLeft
          manual.current = false
        }
        position = wrapPosition(position + delta * (reverse ? -0.027 : 0.03), groupWidth)
        element.scrollLeft = position
      } else {
        position = element.scrollLeft
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      movement.current = null
    }
  }, [items, reverse, reduced])

  function scroll(direction: number) {
    const el = rail.current
    if (!el) return
    interact()
    wrap()
    const offset = direction * el.clientWidth * 0.72
    if (reduced) {
      el.scrollLeft += offset
    } else {
      movement.current = { from: el.scrollLeft, to: el.scrollLeft + offset, started: performance.now() }
    }
  }

  function endDrag() {
    pointerDown.current = false
    drag.current = null
    interact()
  }

  const ordered = reverse ? [...items].reverse() : items
  return (
    <div className="reviews-row">
      <div
        ref={rail} id={id} className="reviews-rail" tabIndex={0} role="region"
        aria-label={`Omdömen, rad ${row}. Svep eller använd piltangenterna.`}
        onWheel={interact}
        onKeyDown={(event) => {
          interact()
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            scroll(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
        onScroll={() => {
          if (manual.current && !movement.current) {
            wrap()
          }
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return
          pointerDown.current = true
          interact()
          if (event.pointerType === 'mouse') {
            drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft }
          }
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (!drag.current) return
          event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x)
          interact()
        }}
        onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}
      >
        <div className="reviews-track">
          {(reduced ? [0] : [0, 1, 2]).map((copy) => (
            <div className="reviews-group" key={copy} ref={copy === 0 ? group : undefined}
              aria-hidden={copy === (reduced ? 0 : 1) ? undefined : true}>
              {ordered.map((review, index) => {
                const rating = Number.isFinite(review.rating) ? Math.max(0, Math.min(5, review.rating)) : 0
                return (
                  <article className="reviews-card" key={`${review.name}-${index}`}>
                    <div className="reviews-card-top">
                      <span className="reviews-stars" role="img" aria-label={`${rating.toLocaleString('sv-SE')} av 5 stjärnor`}>
                        <span aria-hidden="true">★★★★★</span>
                        <span className="reviews-stars-fill" style={{ width: `${rating * 20}%` }} aria-hidden="true">★★★★★</span>
                      </span>
                      <span className="reviews-source">{review.source}</span>
                    </div>
                    <blockquote>{review.text}</blockquote>
                    <div className="reviews-person">
                      <span className="reviews-avatar" aria-hidden="true">{review.name.split(' ').map((part) => part.charAt(0)).slice(0, 2).join('')}</span>
                      <strong>{review.name}</strong>
                      <span>{review.source === 'Demo' ? 'Demoomdöme' : 'Kundomdöme'}</span>
                    </div>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="reviews-controls shell">
        <span>0{row} / Dra eller svep</span>
        <button type="button" onClick={() => scroll(-1)} aria-label={`Scrolla rad ${row} åt vänster`} aria-controls={id}>←</button>
        <button type="button" onClick={() => scroll(1)} aria-label={`Scrolla rad ${row} åt höger`} aria-controls={id}>→</button>
      </div>
    </div>
  )
}

export default function ReviewsRail() {
  const headingId = useId()
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  const isDemo = reviews.length === 0
  const items = isDemo ? demoReviews : reviews

  return (
    <section className="reviews-widget section" aria-labelledby={headingId}>
      <div className="reviews-heading shell">
        <p className="eyebrow">KUNDOMDÖMEN</p>
        <h2 id={headingId}>Orden bakom jobbet.</h2>
        <p>{isDemo ? 'Förhandsvisning med demoomdömen – ersätts med riktiga kundomdömen.' : 'Kundernas egna ord om arbetet, kontakten och resultatet.'}</p>
      </div>
      <div className="reviews-rows">
        <ReviewRow items={items} reverse={false} reduced={reduced} />
        <ReviewRow items={items} reverse reduced={reduced} />
      </div>
    </section>
  )
}
