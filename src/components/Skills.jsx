import { motion } from 'framer-motion'

const groups = [
  { title: 'Languages', color: '#a78bfa', skills: ['JavaScript (ES2024)', 'TypeScript', 'Python', 'C', 'C++', 'SQL'] },
  { title: 'Frontend', color: '#06b6d4', skills: ['React.js', 'Redux Toolkit', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', color: '#4ade80', skills: ['Node.js', 'Express.js', 'REST API Design', 'Microservices', 'JWT / OAuth2'] },
  { title: 'Data & Cloud', color: '#f97316', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'AWS (EC2, S3)', 'Docker'] },
  { title: 'Engineering', color: '#ec4899', skills: ['CI/CD Pipelines', 'Git / GitHub', 'Linux', 'System Design', 'Agile / Scrum'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontWeight: 600 }}>Technical Stack</p>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#f1f5f9' }}>Tools of the trade.</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {groups.map((g, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ padding: 24, borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${g.color}30`; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: g.color, boxShadow: `0 0 10px ${g.color}60` }} />
                <h4 style={{ fontWeight: 700, fontSize: 13, color: '#94a3b8', fontFamily: 'var(--font)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{g.title}</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {g.skills.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: `${g.color}60`, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: '#94a3b8', fontFamily: 'var(--font)', fontWeight: 400 }}>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}