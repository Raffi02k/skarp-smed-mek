import { useEffect, useId, useRef, useState } from 'react'
import { demoReviews, reviews } from '../content/reviews'
import type { Review } from '../content/reviews'
import '../styles/reviews.css'

function ReviewRow({ items, reverse, nativeScroll }: {
  items: Review[]
  reverse: boolean
  nativeScroll: boolean
}) {
  const id = useId()
  const rail = useRef<HTMLDivElement>(null)
  const group = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; left: number } | null>(null)
  const pointerDown = useRef(false)
  const manual = useRef(false)
  const resumeAt = useRef(0)
  const buttonScroll = useRef<{ from: number; to: number; started: number } | null>(null)
  const row = reverse ? 2 : 1
  const speed = reverse ? -0.027 : 0.03

  function interact() {
    buttonScroll.current = null
    manual.current = true
    resumeAt.current = performance.now() + 180
  }

  function wrap() {
    const el = rail.current
    const width = group.current?.offsetWidth ?? 0
    if (!el || nativeScroll || !width || width < el.clientWidth) return
    const previous = el.scrollLeft
    const next = width + ((previous - width) % width + width) % width
    if (Math.abs(next - previous) > 0.5) {
      el.scrollLeft = next
      if (drag.current) drag.current.left += next - previous
    }
  }

  useEffect(() => {
    const el = rail.current
    const firstGroup = group.current
    if (!el || !firstGroup) return
    drag.current = null
    pointerDown.current = false
    manual.current = false
    buttonScroll.current = null
    el.scrollLeft = 0
    if (nativeScroll) return

    let width = firstGroup.offsetWidth
    let viewport = el.clientWidth
    el.scrollLeft = width + (reverse ? 150 : 0)
    let position = el.scrollLeft
    let frame = 0
    let last = 0
    let visible = true
    const normalize = (value: number) => width > 0 && width >= viewport
      ? width + ((value - width) % width + width) % width : value
    const resize = new ResizeObserver(() => {
      width = firstGroup.offsetWidth
      viewport = el.clientWidth
      buttonScroll.current = null
      position = normalize(el.scrollLeft)
      el.scrollLeft = position
    })
    resize.observe(firstGroup)
    resize.observe(el)
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    observer.observe(el)
    function tick(now: number) {
      const delta = last ? Math.min(now - last, 40) : 0
      last = now
      const movement = buttonScroll.current
      if (movement) {
        const progress = Math.min(1, (now - movement.started) / 420)
        position = normalize(movement.from + (movement.to - movement.from) * (1 - Math.pow(1 - progress, 3)))
        el!.scrollLeft = position
        if (progress === 1) {
          buttonScroll.current = null
          manual.current = false
          position = el!.scrollLeft
        }
      } else if (width >= viewport && width > 0 && visible && !document.hidden && !pointerDown.current && now > resumeAt.current) {
        if (manual.current) {
          position = el!.scrollLeft
          manual.current = false
        }
        // Preserve fractional pixels so autoplay stays smooth at high refresh rates.
        position = normalize(position + speed * delta)
        el!.scrollLeft = position
      } else {
        position = el!.scrollLeft
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      observer.disconnect()
      buttonScroll.current = null
    }
  }, [items, reverse, nativeScroll, speed])

  function scroll(direction: number) {
    const el = rail.current
    if (!el) return
    interact()
    wrap()
    const offset = direction * el.clientWidth * 0.72
    if (nativeScroll) el.scrollLeft += offset
    else buttonScroll.current = { from: el.scrollLeft, to: el.scrollLeft + offset, started: performance.now() }
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
        ref={rail} id={id} className={`reviews-rail${nativeScroll ? '' : ' reviews-rail-loop'}`} tabIndex={0} role="region"
        aria-label={`Omdömen, rad ${row}. Svep eller använd piltangenterna.`}
        onScroll={() => {
          if (manual.current && !buttonScroll.current) {
            resumeAt.current = performance.now() + 180
            wrap()
          }
        }}
        onWheel={interact}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            scroll(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return
          pointerDown.current = true
          interact()
          event.currentTarget.setPointerCapture(event.pointerId)
          if (event.pointerType === 'mouse') {
            drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft }
          }
        }}
        onPointerMove={(event) => {
          const gesture = drag.current
          if (!gesture) return
          event.currentTarget.scrollLeft = gesture.left - (event.clientX - gesture.x)
          interact()
          wrap()
        }}
        onPointerUp={endDrag} onPointerCancel={endDrag}
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) endDrag()
        }}
      >
        <div className="reviews-track">
          {(nativeScroll ? [0] : [0, 1, 2]).map((copy) => (
            <div className="reviews-group" key={copy} ref={copy === 0 ? group : undefined}
              aria-hidden={copy === (nativeScroll ? 0 : 1) ? undefined : true}>
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

const nativeScrollQuery = '(prefers-reduced-motion: reduce)'

export default function ReviewsRail() {
  const headingId = useId()
  const [nativeScroll, setNativeScroll] = useState(() => window.matchMedia(nativeScrollQuery).matches)
  useEffect(() => {
    const query = window.matchMedia(nativeScrollQuery)
    const update = () => setNativeScroll(query.matches)
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
        <ReviewRow items={items} reverse={false} nativeScroll={nativeScroll} />
        <ReviewRow items={items} reverse nativeScroll={nativeScroll} />
      </div>
    </section>
  )
}
