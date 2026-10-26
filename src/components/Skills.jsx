import { useState } from 'react'
import SectionReveal from './SectionReveal'
import { skillGroups } from '../data/portfolioData'
import { hasValue } from '../utils/hasValue'
import { FiX, FiEye } from 'react-icons/fi'

// Proof files are plain paths, so the extension decides how to render them.
const isVideo = (src) => /\.(mp4|webm|mov|ogv)$/i.test(src || '')

export default function Skills() {
  const [proof, setProof] = useState(null)

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Technical expertise</p>
          <h2>Skills &amp; Technologies</h2>
          <p>Every skill has a “View POC” button — it opens the proof behind that skill, whether that is a screenshot, a certificate or a short clip.</p>
        </SectionReveal>

        <div className="skills-cards">
          {skillGroups.map((group) => (
            <SectionReveal key={group.category} className="card skill-card">
              <span className="skill-card-icon" aria-hidden="true">{group.icon}</span>
              <h3 className="skill-card-title">{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((s) => (
                  <div className="skill-line" key={s.name}>
                    <span className="skill-line-name">{s.name}</span>
                    {hasValue(s.proof) && (
                    <button
                      type="button"
                      className="poc-btn"
                      onClick={() => setProof({ name: s.name, src: s.proof })}
                      aria-label={`View POC for ${s.name}`}
                    >
                      <FiEye aria-hidden="true" /> View POC
                    </button>
                    )}
                  </div>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {proof && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setProof(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setProof(null)} aria-label="Close">
                <FiX />
              </button>
            {isVideo(proof.src) ? (
              <video src={proof.src} controls autoPlay playsInline />
            ) : (
              <img src={proof.src} alt={`Proof for ${proof.name}`} />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
