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
                <img src="/logo.png" alt="Quality Renovators Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }} />
              </div>
              <span>Quality Renovators</span>
            </div>
            <p>
              Faith-based, family-owned general contractors serving Natalia, TX and the surrounding area.
              We build with integrity, serve with heart, and treat every home like our own.
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
              <li>
                <a href="https://www.facebook.com/QualityRenovators/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
              </li>
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
          <span>© {year} Quality Renovators. All rights reserved.</span>
          <a href="https://www.bbb.org/us/tx/natalia/profile/remodel-contractors/quality-renovators-0825-1000132953" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
            <span className="footer-bbb-badge">BBB A+</span>
            Accredited Business Since 2016
          </a>
        </div>
      </div>
    </footer>
  )
}
