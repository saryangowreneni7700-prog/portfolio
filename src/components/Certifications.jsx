import { motion } from 'framer-motion'
import { Award, BadgeCheck, ExternalLink } from 'lucide-react'

const certs = [
  { title: "Full Stack Web Development", issuer: "Coursera", year: "2025", link: "#", color: '#a78bfa' },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2025", link: "#", color: '#f97316' },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024", link: "#", color: '#06b6d4' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontWeight: 600 }}>Credentials</p>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#f1f5f9' }}>
            Continuous Learning
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: 28, borderRadius: 20, background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden', transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${c.color}30`
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Award size={72} color={c.color} style={{ position: 'absolute', top: 8, right: 8, opacity: 0.06 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
                  <BadgeCheck size={15} color="#4ade80" />
                  <span style={{ fontSize: 11, fontFamily: 'var(--font)', color: '#4ade80', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Verified</span>
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 16, fontFamily: 'var(--font)', color: '#f1f5f9', letterSpacing: '-0.03em', marginBottom: 6, paddingRight: 40, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', fontFamily: 'var(--font)', marginBottom: 24 }}>{c.issuer}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: '#475569', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 6 }}>{c.year}</span>
                  <a href={c.link} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: c.color, textDecoration: 'none', fontFamily: 'var(--font)' }}>
                    View <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
