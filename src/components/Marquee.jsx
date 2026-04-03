import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiMongodb, SiMysql, SiDocker, SiGit, SiLinux, SiPython } from 'react-icons/si'

const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'REST APIs', icon: null, color: '#a78bfa' },
  { name: 'JWT & RBAC', icon: null, color: '#ec4899' },
  { name: 'AWS Cloud', icon: null, color: '#f97316' },
  { name: 'CI/CD', icon: null, color: '#06b6d4' },
  { name: 'Microservices', icon: null, color: '#4ade80' },
]

export default function Marquee() {
  const items = [...skills, ...skills]
  return (
    <div style={{ position: 'relative', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.25)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
      <div className="animate-marquee" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
        {items.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '0 28px', whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
              {Icon ? <Icon style={{ width: 16, height: 16, color: s.color, flexShrink: 0 }} /> : <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0 }} />}
              <span style={{ fontSize: 14, fontWeight: 500, color: '#64748b', fontFamily: 'var(--font)', letterSpacing: '-0.01em' }}>{s.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}