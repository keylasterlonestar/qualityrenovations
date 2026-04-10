import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'About', 'Portfolio', 'Contact']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Quality Renovators Logo" className="logo-img" />
          </div>

          <nav className="nav">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link) }}>
                {link}
              </a>
            ))}
            <a
              href="https://www.facebook.com/QualityRenovators/"
              target="_blank"
              rel="noreferrer"
              className="nav-fb"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <button className="btn btn-primary" onClick={() => navigate('/quote')}>
              Free Quote
            </button>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(link) }}>
              {link}
            </a>
          ))}
          <a
            href="https://www.facebook.com/QualityRenovators/"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Follow us on Facebook
          </a>
          <button className="btn btn-primary" style={{ width: 'fit-content' }} onClick={() => { navigate('/quote'); setMenuOpen(false) }}>
            Free Quote
          </button>
        </nav>
      </div>
    </header>
  )
}
