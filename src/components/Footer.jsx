export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/logo.png" alt="Quality Renovations Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} />
              </div>
              <span>Quality Renovations</span>
            </div>
            <p>
              Licensed & insured general contractors serving Natalia, TX and the surrounding area.
              Building quality homes and lasting relationships since 2004.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {['services','about','portfolio','contact'].map(id => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="tel:2104144166">(210) 414-4166</a></li>
              <li><a href="mailto:qualityrenovatorsgc@gmail.com">qualityrenovatorsgc@gmail.com</a></li>
              <li><a href="https://maps.google.com/?q=707+Miller+St+Natalia+TX+78059" target="_blank" rel="noreferrer">707 Miller St<br/>Natalia, TX 78059</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Quality Renovations. All rights reserved.</span>
          <span>Licensed &amp; Insured General Contractor · Natalia, TX</span>
        </div>
      </div>
    </footer>
  )
}
