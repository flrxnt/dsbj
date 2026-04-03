import { useCallback, useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from 'react'
import { BjSvgIcon } from '../icons'

export interface CarouselSlide {
  src: string
  alt?: string
  caption?: string
}

export interface BjCarouselProps {
  slides: CarouselSlide[]
  autoplay?: boolean
  interval?: number
  showIndicators?: boolean
  showNavigation?: boolean
  className?: string
  onChange?: (payload: { index: number; total: number }) => void
  renderSlide?: (slide: CarouselSlide, index: number) => React.ReactNode
}

export function BjCarousel({
  slides,
  autoplay = false,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
  className,
  onChange,
  renderSlide,
}: BjCarouselProps) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartRef = useRef(0)
  const total = slides.length

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total
      setCurrent(next)
      onChange?.({ index: next, total })
    },
    [total, onChange],
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    if (!autoplay || timerRef.current) return
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const n = (c + 1) % total
        onChange?.({ index: n, total })
        return n
      })
    }, interval)
  }, [autoplay, interval, total, onChange])

  useEffect(() => {
    if (autoplay) startAutoplay()
    return stopAutoplay
  }, [autoplay, startAutoplay, stopAutoplay])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); stopAutoplay(); prev() }
      else if (e.key === 'ArrowRight') { e.preventDefault(); stopAutoplay(); next() }
    },
    [stopAutoplay, prev, next],
  )

  const onTouchStart = useCallback((e: ReactTouchEvent) => { touchStartRef.current = e.touches[0].clientX }, [])
  const onTouchEnd = useCallback(
    (e: ReactTouchEvent) => {
      const diff = touchStartRef.current - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        stopAutoplay()
        diff > 0 ? next() : prev()
      }
    },
    [stopAutoplay, next, prev],
  )

  return (
    <div
      className={['bj-carousel', autoplay && 'bj-carousel--auto', className].filter(Boolean).join(' ')}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onFocus={stopAutoplay}
      onBlur={startAutoplay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="bj-carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="bj-carousel__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`Diapositive ${i + 1} sur ${total}`}
            aria-hidden={i !== current}
          >
            {renderSlide ? (
              renderSlide(slide, i)
            ) : (
              <>
                <img src={slide.src} alt={slide.alt ?? ''} />
                {slide.caption ? <div className="bj-carousel__caption">{slide.caption}</div> : null}
              </>
            )}
          </div>
        ))}
      </div>

      {showNavigation && slides.length > 1 ? (
        <>
          <button
            type="button"
            className="bj-carousel__nav bj-carousel__nav--prev"
            aria-label="Diapositive précédente"
            onClick={() => { stopAutoplay(); prev() }}
          >
            <BjSvgIcon name="arrowLeftSLine" />
          </button>
          <button
            type="button"
            className="bj-carousel__nav bj-carousel__nav--next"
            aria-label="Diapositive suivante"
            onClick={() => { stopAutoplay(); next() }}
          >
            <BjSvgIcon name="arrowRightSLine" />
          </button>
        </>
      ) : null}

      {showIndicators && slides.length > 1 ? (
        <div className="bj-carousel__indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={['bj-carousel__dot', i === current && 'bj-carousel__dot--active'].filter(Boolean).join(' ')}
              aria-label={`Aller à la diapositive ${i + 1}`}
              aria-current={i === current || undefined}
              onClick={() => { stopAutoplay(); goTo(i) }}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

BjCarousel.displayName = 'BjCarousel'
