export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '20+',  label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '5★',   label: 'Average Rating' },
  ]

  return (
    <section className="hero" id="home">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            Faith-Based · Family-Owned · Licensed &amp; Insured
          </div>

          <h1>
            Building With Integrity,<br />
            <span>Serving With Heart</span>
          </h1>

          <p>
            Quality Renovators is a faith-based, family-owned contracting company.
            We treat every home like our own — with honesty, craftsmanship, and care
            rooted in our values.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Get a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-outline-white" onClick={() => scrollTo('portfolio')}>
              View Our Work
            </button>
          </div>
        </div>

        <div className="hero-stats" style={{ marginTop: 'auto' }}>
          <div className="hero-stats-grid">
            {stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
