import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.4)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg, #7c3aed, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: 'white', fontFamily: 'var(--font)' }}>SG</div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.02em', marginBottom: 2 }}>Saranya Gowreneni</p>
            <p style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em', margin: 0 }}>Full Stack Developer · BEL · React · Node.js · PostgreSQL</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 12, color: '#334155', fontFamily: 'var(--font)' }}>
            &copy; {new Date().getFullYear()} Saranya Gowreneni
          </span>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { href: 'https://github.com/saranyagowreneni', icon: <Github size={15} /> },
              { href: 'https://linkedin.com/in/saranya-gowreneni', icon: <Linkedin size={15} /> },
              { href: 'mailto:saranyagowreneni10@gmail.com', icon: <Mail size={15} /> },
            ].map((s, i) => (
              <a key={i} href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#f1f5f9'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}