import SectionReveal from './SectionReveal'

// Shared card for anything backed by a certificate picture — a certification
// or a workshop. The whole card opens the image full size.
export default function CredentialCard({ image, eyebrow, title, meta, alt, onOpen }) {
  return (
    <SectionReveal className="card cert-card">
      <button type="button" className="cert-button" onClick={onOpen} aria-label={`View the ${title} certificate`}>
        <span className="cert-thumb">
          <img src={image} alt={alt || `${title} certificate`} loading="lazy" decoding="async" />
        </span>
        <span className="cert-body">
          <span className="cert-issuer">{eyebrow}</span>
          <span className="cert-title">{title}</span>
          <span className="cert-date">{meta}</span>
        </span>
      </button>
    </SectionReveal>
  )
}
