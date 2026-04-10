import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // To receive form submissions by email, sign up free at formspree.io
    // and replace YOUR_FORM_ID in the action below with your form ID.
    setSubmitted(true)
  }

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
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Get In Touch</span>
          <h2>Request a Free Quote</h2>
          <p>Fill out the form and we'll get back to you within one business day.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="(210) 555-0000" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Renovation</option>
                    <option>Home Addition</option>
                    <option>Flooring Installation</option>
                    <option>Exterior &amp; Roofing</option>
                    <option>Interior Painting</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project…" value={form.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div>
              <h3>Let's Talk About Your Project</h3>
              <p>
                We're a faith-based, family-owned team that genuinely cares about the people we work for.
                Reach out — we'd love to hear about your project and provide a free, no-obligation estimate.
              </p>
            </div>

            <div className="contact-items">
              {info.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <strong>{item.label}</strong>
                    {item.href
                      ? <a href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
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
