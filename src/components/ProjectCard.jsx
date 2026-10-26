import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiMaximize2, FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { hasValue } from '../utils/hasValue'

export default function ProjectCard({ project }) {
  const media = project.video ? [{ type: 'video', src: project.video }, ...project.screenshots.map((s) => ({ type: 'image', src: s }))] : project.screenshots.map((s) => ({ type: 'image', src: s }))
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState(false)
  const current = media[idx] || media[0]

  const prev = () => setIdx((i) => (i - 1 + media.length) % media.length)
  const next = () => setIdx((i) => (i + 1) % media.length)

  // Keyboard controls while the lightbox is open.
  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => {
      if (e.key === 'Escape') setZoom(false)
      else if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + media.length) % media.length)
      else if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % media.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoom, media.length])

  return (
    <div className="card project-card">
      <div className="project-card-inner">
        <div className="project-gallery">
          {current?.type === 'video' ? (
            <>
              <video src={current.src} controls poster={project.screenshots[0]} />
              <button className="gallery-expand" onClick={() => setZoom(true)} aria-label="Expand video">
                <FiMaximize2 />
              </button>
            </>
          ) : (
            <button type="button" className="gallery-zoom" onClick={() => setZoom(true)} aria-label="View screenshot full size">
              <img src={current?.src} alt={`${project.name} screenshot ${idx + 1}`} />
            </button>
          )}
          {media.length > 1 && (
            <>
              <button className="gallery-nav prev" onClick={prev} aria-label="Previous media"><FiChevronLeft /></button>
              <button className="gallery-nav next" onClick={next} aria-label="Next media"><FiChevronRight /></button>
              <div className="gallery-dots">
                {media.map((_, i) => (
                  <button key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} aria-label={`Show media ${i + 1}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="project-body">
          
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            {hasValue(project.live) && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                <FiExternalLink /> Live demo
              </a>
            )}
            {hasValue(project.github) && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                <FaGithub /> Source
              </a>
            )}
           
          </div>
        </div>
      </div>

      {zoom && current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setZoom(false)} aria-label="Close">
              <FiX />
            </button>
            {media.length > 1 && (
              <>
                <button className="lightbox-nav prev" onClick={prev} aria-label="Previous media"><FiChevronLeft /></button>
                <button className="lightbox-nav next" onClick={next} aria-label="Next media"><FiChevronRight /></button>
              </>
            )}
            {current.type === 'video' ? (
              <video src={current.src} controls autoPlay playsInline />
            ) : (
              <img src={current.src} alt={`${project.name} screenshot ${idx + 1}`} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
