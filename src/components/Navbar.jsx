import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },    
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Scrollspy: highlight the link whose section crosses the middle of the viewport.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="nav-brand">
          <span>{profile.name.split(' ')[0]}.</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={() => { setActive(l.href); setOpen(false) }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
