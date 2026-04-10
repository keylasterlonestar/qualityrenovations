export default function About() {
  const features = [
    'Licensed & fully insured for your peace of mind',
    'Free, no-obligation estimates on every project',
    'On-time completion — we respect your schedule',
    'Transparent pricing with no hidden fees',
    'Premium materials from trusted suppliers',
    'Lifetime workmanship guarantee on labor',
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src="/images/IMG_5620.jpg"
              alt="Quality Renovations team at work"
            />
            <div className="about-badge">
              <h4>20+</h4>
              <p>Years of<br/>Excellence</p>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>Your Trusted Local Renovation Experts</h2>
            <p>
              Quality Renovations is a family-owned general contracting company based in
              Natalia, Texas. For over 20 years, we've helped homeowners across the region
              transform their spaces with expert craftsmanship and honest, straightforward
              service. Every project — big or small — gets our full attention and care.
            </p>

            <ul className="about-features">
              {features.map(f => (
                <li key={f}>
                  <span className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
