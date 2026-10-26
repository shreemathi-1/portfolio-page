import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { profile, coreExpertise } from '../data/portfolioData'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-roles">
            {profile.roles.map((role, i) => (
              <span key={role}>
                {i > 0 && <span className="sep">&nbsp;·&nbsp;</span>}
                {role}
              </span>
            ))}
          </p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <p className="hero-expertise-label">Core Expertise</p>
          <div className="hero-chips">
            {coreExpertise.map((item) => (
              <span className="hero-chip" key={item.name}>
                <span className={`chip-dot tone-${item.tone}`} />
                {item.name}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <FiMail /> Get in Touch
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <FaLinkedin /> LinkedIn ↗
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FaGithub /> GitHub ↗
            </a>
            <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="btn btn-outline">
              <SiLeetcode /> LeetCode ↗
            </a>
            <a href="#projects" className="btn btn-outline">
              <FiArrowRight /> View Projects
            </a>
          </div>

        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="hero-photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
