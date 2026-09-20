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
  const track = useRef<HTMLDivElement>(null)
  const group = useRef<HTMLDivElement>(null)
  const animation = useRef<Animation | null>(null)
  const duration = useRef(0)
  const drag = useRef<{ x: number; y: number; active: boolean } | null>(null)
  const row = reverse ? 2 : 1
  const speed = reverse ? -0.027 : 0.03

  useEffect(() => {
    const el = rail.current
    const content = track.current
    const firstGroup = group.current
    if (!el || !content || !firstGroup) return
    drag.current = null
    el.scrollLeft = 0
    if (nativeScroll) return

    function animate() {
      const width = firstGroup!.offsetWidth
      if (!width) return
      const previousTime = Number(animation.current?.currentTime ?? 0)
      const progress = duration.current ? (previousTime % duration.current) / duration.current : 0
      animation.current?.cancel()
      duration.current = width / Math.abs(speed)
      // A compositor transform keeps looping during native vertical scrolling.
      // No per-frame layout reads or writes to the browser's scroll position.
      animation.current = content!.animate([
        { transform: `translate3d(${-width * (reverse ? 2 : 1)}px, 0, 0)` },
        { transform: `translate3d(${-width * (reverse ? 1 : 2)}px, 0, 0)` },
      ], { duration: duration.current, iterations: Infinity, easing: 'linear' })
      animation.current.currentTime = progress * duration.current
    }
    animate()
    const observer = new ResizeObserver(animate)
    observer.observe(firstGroup)
    return () => {
      observer.disconnect()
      animation.current?.cancel()
      animation.current = null
      duration.current = 0
    }
  }, [items, reverse, nativeScroll, speed])

  function shiftPosition(offset: number) {
    if (nativeScroll) {
      if (rail.current) rail.current.scrollLeft += offset
      return
    }
    const loop = animation.current
    if (!loop || !duration.current) return
    const time = Number(loop.currentTime ?? 0) + offset / speed
    loop.currentTime = ((time % duration.current) + duration.current) % duration.current
  }

  function scroll(direction: number) {
    const el = rail.current
    if (!el) return
    shiftPosition(direction * el.clientWidth * 0.72)
  }

  function endDrag() {
    drag.current = null
  }

  const ordered = reverse ? [...items].reverse() : items
  return (
    <div className="reviews-row">
      <div
        ref={rail} id={id} className={`reviews-rail${nativeScroll ? '' : ' reviews-rail-loop'}`} tabIndex={0} role="region"
        aria-label={`Omdömen, rad ${row}. Svep eller använd piltangenterna.`}
        onWheel={(event) => {
          if (!nativeScroll && Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            shiftPosition(event.deltaX)
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            scroll(event.key === 'ArrowLeft' ? -1 : 1)
          }
        }}
        onPointerDown={(event) => {
          if (event.button !== 0 || (nativeScroll && event.pointerType !== 'mouse')) return
          drag.current = { x: event.clientX, y: event.clientY, active: event.pointerType === 'mouse' }
          if (drag.current.active) event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          const gesture = drag.current
          if (!gesture) return
          const dx = event.clientX - gesture.x
          const dy = event.clientY - gesture.y
          if (!gesture.active) {
            if (Math.abs(dy) > Math.abs(dx)) {
              endDrag()
              return
            }
            if (Math.abs(dx) < 6) return
            gesture.active = true
            event.currentTarget.setPointerCapture(event.pointerId)
          }
          shiftPosition(-dx)
          gesture.x = event.clientX
          gesture.y = event.clientY
        }}
        onPointerUp={endDrag} onPointerCancel={endDrag}
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) endDrag()
        }}
      >
        <div className="reviews-track" ref={track}>
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
