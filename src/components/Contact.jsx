import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const navigate = useNavigate()
  const headingRef = useScrollAnimation()
  const gridRef = useScrollAnimation()

  const info = [
    {
      label: 'Phone',
      value: '(210) 414-4166',
      href: 'tel:2104144166',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'qualityrenovatorsgc@gmail.com',
      href: 'mailto:qualityrenovatorsgc@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 8.5 6c.79.54 1.2.54 1.99 0L21 7"/>
        </svg>
      ),
    },
    {
      label: 'Address',
      value: '707 Miller St, Natalia, TX 78059',
      href: 'https://maps.google.com/?q=707+Miller+St+Natalia+TX+78059',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: 'Hours',
      value: 'Mon – Sat: 7 AM – 6 PM',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      value: 'Follow us on Facebook',
      href: 'https://www.facebook.com/QualityRenovators/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading fade-up" ref={headingRef}>
          <span className="section-label">Get In Touch</span>
          <h2>Ready to Start Your Project?</h2>
          <p>Reach out by phone, email, or fill out our quick quote form — we'll get back to you within one business day.</p>
        </div>

        <div className="contact-grid fade-up" ref={gridRef}>

          {/* CTA card */}
          <div className="contact-cta-card">
            <div className="contact-cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3>Get a Free Quote</h3>
            <p>
              Tell us about your project and we'll provide a detailed,
              no-obligation estimate — completely free.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('/quote')}>
              Request a Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <div className="faith-banner" style={{ marginTop: '1.5rem', marginBottom: 0 }}>
              <span className="faith-quote">"Whatever you do, work at it with all your heart." — Colossians 3:23</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <h3>Contact Us Directly</h3>
            <p>We're a faith-based, family-owned team that genuinely cares about the people we work for. Reach out — we'd love to hear about your project.</p>
            <div className="contact-items">
              {info.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <strong>{item.label}</strong>
                    {item.href
                      ? <a href={item.href} target={['Address','Facebook'].includes(item.label) ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
                      : <span>{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
