import { useState } from 'react'
import SectionReveal from './SectionReveal'
import { hasValue } from '../utils/hasValue'
import { internships } from '../data/portfolioData'
import { FiX, FiFileText } from 'react-icons/fi'

export default function Internships() {
  const [cert, setCert] = useState(null)

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Professional Experience</p>
          <h2>Internships</h2>
        </SectionReveal>

        <div className="timeline">
          {internships.map((it) => (
            <SectionReveal key={it.id} className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />

              <p className="timeline-meta">
                {[it.duration, it.length, it.location].filter(Boolean).map((part, i) => (
                  <span key={part}>
                    {i > 0 && <span className="sep">&nbsp;·&nbsp;</span>}
                    {part}
                  </span>
                ))}
              </p>

              <h3 className="timeline-title">{it.role} — {it.company}</h3>
              <p className="timeline-desc">{it.description}</p>

              <ul className="timeline-points">
                {it.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-tech timeline-tech">
                {it.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {hasValue(it.certificate) && (
                  <button className="btn btn-outline btn-sm" onClick={() => setCert(it)}>
                    <FiFileText /> View Internship Certificate
                  </button>
                )}
              
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {cert && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setCert(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setCert(null)} aria-label="Close">
                <FiX />
              </button>
            <img src={cert.certificate} alt={`${cert.company} internship certificate`} />
          </div>
        </div>
      )}
    </section>
  )
}
