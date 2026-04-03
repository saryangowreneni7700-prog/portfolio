import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

  const navBg = scrolled
    ? 'rgba(6,6,15,0.92)'
    : 'transparent'
  const navBorder = scrolled
    ? 'rgba(255,255,255,0.08)'
    : 'transparent'

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: scrolled ? '10px 0' : '20px 0', transition: 'padding 0.3s ease' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 24px', borderRadius: 16,
          background: navBg, backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          border: `1px solid ${navBorder}`,
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.4s ease'
        }}>

          {/* Logo — full name + credential */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 15, color: 'white', letterSpacing: '-0.03em',
              fontFamily: 'var(--font)', flexShrink: 0
            }}>SG</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1.2, fontFamily: 'var(--font)' }}>
                Saranya Gowreneni
              </span>
              <span style={{ fontSize: 11, color: '#64748b', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', lineHeight: 1.3 }}>
                Full Stack Developer · BEL
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{
                  padding: '7px 14px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                  color: '#64748b', textDecoration: 'none', letterSpacing: '-0.01em',
                  transition: 'all 0.2s', fontFamily: 'var(--font)'
                }}
                onMouseEnter={e => { e.target.style.color = '#f1f5f9'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { e.target.style.color = '#64748b'; e.target.style.background = 'transparent' }}>
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="mailto:saranyagowreneni10@gmail.com"
              className="desktop-nav"
              style={{
                padding: '8px 20px', borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                color: 'white', textDecoration: 'none', letterSpacing: '-0.01em',
                boxShadow: '0 0 20px rgba(124,58,237,0.3)', transition: 'all 0.2s',
                fontFamily: 'var(--font)'
              }}>
              Hire Me
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn"
              style={{ display: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 8, color: '#94a3b8', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(6,6,15,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: 16 }}>
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '13px 16px', color: '#94a3b8', textDecoration: 'none', fontSize: 15, fontWeight: 500, borderRadius: 10, transition: 'all 0.2s', fontFamily: 'var(--font)' }}>
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}