import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TrustBar() {
  const ref = useScrollAnimation()

  return (
    <div className="trust-bar" ref={ref}>
      <div className="container">
        <div className="trust-bar-inner fade-up" ref={ref}>
          <a
            href="https://www.bbb.org/us/tx/natalia/profile/remodel-contractors/quality-renovators-0825-1000132953"
            target="_blank"
            rel="noreferrer"
            className="trust-item trust-bbb"
          >
            <div className="bbb-badge">
              <div className="bbb-letters">BBB</div>
              <div className="bbb-info">
                <div className="bbb-rating">A+</div>
                <div className="bbb-label">Rating</div>
              </div>
            </div>
            <div className="trust-item-text">
              <strong>BBB Accredited Business</strong>
              <span>Accredited since 2016 · Click to verify</span>
            </div>
          </a>

          <div className="trust-divider" />

          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div className="trust-item-text">
              <strong>Licensed &amp; Insured</strong>
              <span>Fully covered on every job</span>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="trust-item-text">
              <strong>29 Years in Business</strong>
              <span>Serving South Texas since 1997</span>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="trust-item-text">
              <strong>Family-Owned</strong>
              <span>Greg &amp; Elizabeth Cargile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
