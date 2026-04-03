import { useCallback, useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { BjSvgIcon } from '../icons'

export type GalleryImage = {
  src: string
  alt?: string
  caption?: string
  thumbnail?: string
}

export interface BjGalleryProps {
  images: GalleryImage[]
  cols?: 2 | 3 | 4
  className?: string
}

export function BjGallery({ images, cols = 3, className }: BjGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const current = images[currentIndex]

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.classList.add('bj-modal-open')
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.classList.remove('bj-modal-open')
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex(i => (i > 0 ? i - 1 : images.length - 1))
  }, [images.length])

  const next = useCallback(() => {
    setCurrentIndex(i => (i < images.length - 1 ? i + 1 : 0))
  }, [images.length])

  useEffect(() => {
    function onKeydown(e: globalThis.KeyboardEvent) {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [lightboxOpen, closeLightbox, prev, next])

  useEffect(() => {
    return () => {
      document.body.classList.remove('bj-modal-open')
    }
  }, [])

  function onItemKeyDown(e: ReactKeyboardEvent<HTMLDivElement>, index: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLightbox(index)
    }
  }

  const lightbox =
    lightboxOpen && current ? (
      <div
        className="bj-lightbox"
        data-bj-expanded
        role="dialog"
        aria-modal="true"
        aria-label="Visionneuse d'images"
        style={{ display: 'flex' }}
        onClick={e => {
          if (e.target === e.currentTarget) closeLightbox()
        }}
        onKeyDown={e => {
          if (e.key === 'Escape') closeLightbox()
        }}
      >
        <span className="bj-lightbox__counter">
          {currentIndex + 1} / {images.length}
        </span>
        <button type="button" className="bj-lightbox__close" aria-label="Fermer" onClick={closeLightbox}>
          <BjSvgIcon name="closeLine" />
        </button>
        <button
          type="button"
          className="bj-lightbox__nav bj-lightbox__nav--prev"
          aria-label="Image précédente"
          onClick={prev}
        >
          <BjSvgIcon name="arrowLeftSLine" />
        </button>
        <div className="bj-lightbox__content">
          <img className="bj-lightbox__img" src={current.src} alt={current.alt ?? ''} />
          {current.caption ? <p className="bj-lightbox__caption">{current.caption}</p> : null}
        </div>
        <button
          type="button"
          className="bj-lightbox__nav bj-lightbox__nav--next"
          aria-label="Image suivante"
          onClick={next}
        >
          <BjSvgIcon name="arrowRightSLine" />
        </button>
      </div>
    ) : null

  return (
    <>
      <div
        className={['bj-gallery', cols !== 3 && `bj-gallery--cols-${cols}`, className]
          .filter(Boolean)
          .join(' ')}
      >
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="bj-gallery__item"
            role="button"
            tabIndex={0}
            aria-label={`Voir l'image ${i + 1}`}
            onClick={() => openLightbox(i)}
            onKeyDown={e => onItemKeyDown(e, i)}
          >
            <img className="bj-gallery__img" src={img.thumbnail || img.src} alt={img.alt ?? ''} />
            {img.caption ? <span className="bj-gallery__caption">{img.caption}</span> : null}
          </div>
        ))}
      </div>
      {lightbox ? createPortal(lightbox, document.body) : null}
    </>
  )
}

BjGallery.displayName = 'BjGallery'
