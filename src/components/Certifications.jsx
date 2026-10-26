import { useState } from 'react'
import SectionReveal from './SectionReveal'
import CredentialCard from './CredentialCard'
import { certifications, workshops } from '../data/portfolioData'
import { FiX } from 'react-icons/fi'

const TABS = [
  { key: 'courses', label: 'Courses' },
  { key: 'events', label: 'Events & Workshops' },
]

export default function Certifications() {
  const [tab, setTab] = useState('courses')
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionReveal className="section-head">
          <p className="section-eyebrow">Credentials</p>
          <h2>Certifications</h2>
          <p>Each card is the certificate itself — click one to see it full size.</p>
        </SectionReveal>

        <div className="cert-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              className={`cert-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {tab === 'courses'
            ? certifications.map((c) => (
                <CredentialCard
                  key={c.id}
                  image={c.image}
                  eyebrow={c.issuer}
                  title={c.title}
                  meta={c.date}
                  onOpen={() => setOpen({ image: c.image, title: c.title })}
                />
              ))
            : workshops.map((w) => (
                <CredentialCard
                  key={w.id}
                  image={w.image}
                  eyebrow={w.organiser}
                  title={w.title}
                  meta={`${w.format} · ${w.date}`}
                  alt={`${w.title} participation certificate`}
                  onOpen={() => setOpen({ image: w.image, title: w.title })}
                />
              ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">
              <FiX />
            </button>
            <img src={open.image} alt={`${open.title} certificate`} />
          </div>
        </div>
      )}
    </section>
  )
}
