const images = [
  { src: '/images/7324.jpg',        label: 'Renovation' },
  { src: '/images/IMG_560155.jpg',  label: 'Project' },
  { src: '/images/IMG_560266.jpg',  label: 'Project' },
  { src: '/images/IMG_5603555.jpg', label: 'Project' },
  { src: '/images/IMG_560466.jpg',  label: 'Project' },
  { src: '/images/IMG_560555.jpg',  label: 'Project' },
  { src: '/images/IMG_560644.jpg',  label: 'Project' },
  { src: '/images/IMG_56086.jpg',   label: 'Project' },
  { src: '/images/IMG_56125.jpg',   label: 'Project' },
  { src: '/images/IMG_56134.jpg',   label: 'Project' },
  { src: '/images/IMG_56141.jpg',   label: 'Project' },
  { src: '/images/IMG_56152.jpg',   label: 'Project' },
  { src: '/images/IMG_56161.jpg',   label: 'Project' },
  { src: '/images/IMG_56171.jpg',   label: 'Project' },
  { src: '/images/IMG_5618.jpg',    label: 'Project' },
  { src: '/images/IMG_56181.jpg',   label: 'Project' },
  { src: '/images/IMG_5619.jpg',    label: 'Project' },
  { src: '/images/IMG_56191.jpg',   label: 'Project' },
  { src: '/images/IMG_5620.jpg',    label: 'Project' },
  { src: '/images/IMG_5621.jpg',    label: 'Project' },
  { src: '/images/IMG_5622.jpg',    label: 'Project' },
  { src: '/images/IMG_5623.jpg',    label: 'Project' },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Our Work</span>
          <h2>Recent Projects</h2>
          <p>Every photo is a real job we completed — quality you can see in every detail.</p>
        </div>

        <div className="portfolio-grid">
          {images.map((img, i) => (
            <div className="portfolio-card" key={i}>
              <img src={img.src} alt={`Quality Renovators project ${i + 1}`} loading="lazy" />
              <div className="portfolio-overlay">
                <div className="portfolio-tag">Quality Renovators</div>
                <h3>Completed Project</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
