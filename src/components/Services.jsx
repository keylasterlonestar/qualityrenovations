import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    title: 'Kitchen Remodeling',
    desc: 'Transform your kitchen into a stunning, functional space with custom cabinetry, countertops, and modern fixtures.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v4H3zM3 7v14h18V7M8 7v14M8 11h8M8 15h5"/>
      </svg>
    ),
  },
  {
    title: 'Bathroom Renovation',
    desc: 'Create your dream bathroom with luxury tile work, vanities, walk-in showers, and spa-quality finishes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 C9 4.34 7.66 3 6 3 C4.34 3 3 4.34 3 6 L3 12"/>
        <path d="M3 12 L3 17 C3 18.66 4.34 20 6 20 L18 20 C19.66 20 21 18.66 21 17 L21 12 Z"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="20" x2="8" y2="22"/>
        <line x1="16" y1="20" x2="16" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'Home Additions',
    desc: 'Expand your living space with seamlessly integrated room additions, sunrooms, and second-story builds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <line x1="19" y1="5" x2="19" y2="2"/>
        <line x1="17" y1="3" x2="21" y2="3"/>
      </svg>
    ),
  },
  {
    title: 'Flooring Installation',
    desc: 'Hardwood, tile, luxury vinyl, and carpet — expert installation that stands up to daily life beautifully.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="1"/>
        <rect x="13" y="3" width="8" height="8" rx="1"/>
        <rect x="3" y="13" width="8" height="8" rx="1"/>
        <rect x="13" y="13" width="8" height="8" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Exterior & Roofing',
    desc: 'Boost curb appeal and protect your home with expert siding, roofing, gutters, and exterior painting.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 12 2 12"/>
        <rect x="4" y="12" width="16" height="10" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Interior Painting',
    desc: 'Fresh, flawless paint that transforms any room. We handle prep, priming, and cleanup for a perfect finish.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14l3-4-3-4z"/>
        <line x1="3" y1="9" x2="3" y2="21"/>
      </svg>
    ),
  },
]

function ServiceCard({ service, delay }) {
  const ref = useScrollAnimation()
  return (
    <div className={`service-card fade-up delay-${delay}`} ref={ref}>
      <div className="service-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </div>
  )
}

export default function Services() {
  const headingRef = useScrollAnimation()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading fade-up" ref={headingRef}>
          <span className="section-label">What We Do</span>
          <h2>Our Services</h2>
          <p>From small updates to complete renovations, we bring skill and integrity to every project.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
