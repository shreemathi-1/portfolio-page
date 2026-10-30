import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import SectionReveal from './SectionReveal'
import Seal from './Seal'
import { achievements, tracking, profile } from '../data/portfolioData'

export default function Highlights() {
  const [open, setOpen] = useState(null)
  const { githubUsername: gh, leetcodeUsername: lc } = tracking

  return (
    <section className="section" id="highlights">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Highlights</p>
          <h2>Milestones along the way</h2>
        </SectionReveal>

        <div className="achievements-grid">
          {achievements.map((a) => (
            <SectionReveal key={a.id} className="card achievement-card">
              <button
                type="button"
                className="achievement-photo"
                onClick={() => setOpen(a)}
                aria-label={`View ${a.title} full size`}
              >
                <img src={a.photo} alt={a.title} loading="lazy" decoding="async" />
              </button>
              <div className="achievement-body">
                <span className="achievement-year">{a.year}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="subsection-label">Consistent Contributions</SectionReveal>

        <div className="tracking-grid">
          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>GitHub contributions</h3>
              <Seal>Live</Seal>
            </div>
            <a className="tracking-link" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <img
              src={`https://ghchart.rshah.org/1C3D6E/${gh}`}
              alt={`GitHub contribution heatmap for ${gh}`}
              loading="lazy"
            />
            </a>
            <p className="tracking-note">github.com/{gh}</p>
          </SectionReveal>

          <SectionReveal className="card tracking-card">
            <div className="tracking-card-head">
              <h3>LeetCode activity</h3>
              <Seal>Live</Seal>
            </div>
            <a className="tracking-link" href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="Open LeetCode profile">
            <img
              src={`https://leetcard.jacoblin.cool/${lc}?theme=light&font=DM%20Sans&ext=heatmap`}
              alt={`LeetCode activity heatmap for ${lc}`}
              loading="lazy"
            />
            </a>
            <p className="tracking-note">leetcode.com/{lc}</p>
          </SectionReveal>
        </div>
      </div>


      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">
              <FiX />
            </button>
            <img src={open.photo} alt={open.title} />
          </div>
        </div>
      )}
    </section>
  )
}
