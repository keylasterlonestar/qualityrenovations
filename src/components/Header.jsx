import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
            <button className="btn btn-primary" onClick={() => scrollTo('Contact')}>
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
          <button className="btn btn-primary" style={{ width: 'fit-content' }} onClick={() => scrollTo('Contact')}>
            Free Quote
          </button>
        </nav>
      </div>
    </header>
  )
}
