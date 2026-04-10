import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const images = [
  '/images/7324.jpg',
  '/images/IMG_560155.jpg',
  '/images/IMG_560266.jpg',
  '/images/IMG_5603555.jpg',
  '/images/IMG_560466.jpg',
  '/images/IMG_560555.jpg',
  '/images/IMG_560644.jpg',
  '/images/IMG_56086.jpg',
  '/images/IMG_56125.jpg',
  '/images/IMG_56134.jpg',
  '/images/IMG_56141.jpg',
  '/images/IMG_56152.jpg',
  '/images/IMG_56161.jpg',
  '/images/IMG_56171.jpg',
  '/images/IMG_5618.jpg',
  '/images/IMG_56181.jpg',
  '/images/IMG_5619.jpg',
  '/images/IMG_56191.jpg',
  '/images/IMG_5620.jpg',
  '/images/IMG_5621.jpg',
  '/images/IMG_5622.jpg',
  '/images/IMG_5623.jpg',
]

function PortfolioCard({ src, index, onClick }) {
  const ref = useScrollAnimation(0.1)
  return (
    <div
      className={`portfolio-card fade-up delay-${(index % 4) + 1}`}
      ref={ref}
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
      aria-label={`View project photo ${index + 1}`}
    >
      <img src={src} alt={`Quality Renovators project ${index + 1}`} loading="lazy" />
      <div className="portfolio-overlay">
        <div className="portfolio-tag">Quality Renovators</div>
        <h3>
          Tap to enlarge
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px', verticalAlign: 'middle' }}>
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </h3>
      </div>
    </div>
  )
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={`Project ${index + 1}`} />
        <div className="lightbox-counter">{index + 1} / {images.length}</div>
      </div>

      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  )
}

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const headingRef = useScrollAnimation()

  const open = (i) => setLightboxIndex(i)
  const close = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setLightboxIndex((i) => (i + 1) % images.length)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading fade-up" ref={headingRef}>
          <span className="section-label">Our Work</span>
          <h2>Recent Projects</h2>
          <p>Every photo is a real job we completed — quality you can see in every detail. Tap any photo to enlarge.</p>
        </div>

        <div className="portfolio-grid">
          {images.map((src, i) => (
            <PortfolioCard key={src} src={src} index={i} onClick={open} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
