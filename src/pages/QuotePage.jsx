import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuotePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', service: '', timeline: '', details: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // To receive submissions by email, sign up free at formspree.io
    // and replace the form action with: action="https://formspree.io/f/YOUR_ID"
    setSubmitted(true)
  }

  return (
    <div className="quote-page">

      {/* Header bar */}
      <div className="quote-page-header">
        <button className="quote-back-btn" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Site
        </button>
        <img src="/logo.png" alt="Quality Renovators" className="quote-logo" />
      </div>

      <div className="quote-page-body">

        {/* Left panel */}
        <div className="quote-info-panel">
          <span className="section-label">Free Estimate</span>
          <h1>Let's Talk About<br/>Your Project</h1>
          <p>
            Fill out the form and we'll get back to you within one business day with
            a free, no-obligation estimate. No pressure — just honest answers.
          </p>

          <div className="quote-why">
            <h3>Why Choose Quality Renovators?</h3>
            <ul>
              {[
                'BBB Accredited with an A+ Rating',
                'Faith-based, family-owned since 1997',
                'Licensed & fully insured',
                'Transparent pricing — no hidden fees',
                'Free estimates on every project',
                'Serving South Texas & San Antonio area',
              ].map(item => (
                <li key={item}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="quote-contact-quick">
            <p>Prefer to call or text?</p>
            <a href="tel:2104144166" className="quote-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (210) 414-4166
            </a>
          </div>

          <div className="quote-bbb">
            <a href="https://www.bbb.org/us/tx/natalia/profile/remodel-contractors/quality-renovators-0825-1000132953" target="_blank" rel="noreferrer">
              <div className="bbb-badge" style={{ display: 'inline-flex' }}>
                <div className="bbb-letters">BBB</div>
                <div className="bbb-info">
                  <div className="bbb-rating">A+</div>
                  <div className="bbb-label">Rating</div>
                </div>
              </div>
              <span>Accredited Business</span>
            </a>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="quote-form-panel">
          {submitted ? (
            <div className="form-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. Greg or Elizabeth will be in touch within one business day.</p>
              <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Request Your Free Quote</h2>
              <p className="form-subtitle">All fields marked * are required.</p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="(210) 555-0000" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="address">Project Address</label>
                <input id="address" name="address" type="text" placeholder="123 Main St, San Antonio, TX" value={form.address} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Renovation</option>
                    <option>Home Addition</option>
                    <option>Flooring Installation</option>
                    <option>Exterior &amp; Roofing</option>
                    <option>Interior Painting</option>
                    <option>General Contracting</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Timeline</label>
                  <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange}>
                    <option value="">When do you need this?</option>
                    <option>As soon as possible</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>Just planning ahead</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="details">Project Details *</label>
                <textarea
                  id="details"
                  name="details"
                  required
                  placeholder="Describe your project — the more detail you share, the more accurate our estimate will be…"
                  value={form.details}
                  onChange={handleChange}
                  style={{ minHeight: '130px' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                Submit Request
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              <p className="form-disclaimer">
                By submitting this form you agree to be contacted by Quality Renovators regarding your project.
                We never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
