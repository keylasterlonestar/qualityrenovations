import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const navigate = useNavigate()
  const imgRef = useScrollAnimation()
  const contentRef = useScrollAnimation()
  const features = [
    'BBB Accredited with an A+ rating since 2016',
    'Faith-based values guiding every decision we make',
    'Family-owned and operated — we treat you like family',
    'Licensed & fully insured for your peace of mind',
    'Free, no-obligation estimates on every project',
    'Transparent pricing with no hidden fees',
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap fade-left" ref={imgRef}>
            <img
              src="/images/IMG_5620.jpg"
              alt="Quality Renovators team at work"
            />
            <div className="about-badge">
              <h4>29</h4>
              <p>Years of<br/>Excellence</p>
            </div>
          </div>

          <div className="about-content fade-right" ref={contentRef}>
            <span className="section-label">About Us</span>
            <h2>Faith-Based. Family-Owned. Built on Trust.</h2>
            <p>
              Quality Renovators is a faith-based, family-owned general contracting company
              rooted in Natalia, Texas. Since 1997, Greg and Elizabeth Cargile have built
              more than structures — they've built lasting relationships grounded in faith,
              integrity, and genuine care. Our BBB A+ rating and accreditation since 2016
              reflect the trust our customers place in us every day.
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

            <div className="faith-banner">
              <span className="faith-quote">"Whatever you do, work at it with all your heart." — Colossians 3:23</span>
            </div>

            <button className="btn btn-primary" onClick={() => navigate('/quote')}>
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
