import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Calendar } from 'lucide-react'

const points = [
  { impact: "25% workflow efficiency gain", detail: "Architected and delivered the Central Records Management System using React + Node.js, transforming manual BEL operations." },
  { impact: "30% DB latency reduction", detail: "Optimized PostgreSQL queries with strategic indexing and analyzed slow query logs to identify critical bottlenecks." },
  { impact: "Enterprise-grade RBAC", detail: "Implemented JWT-based authentication with granular role-based access control, protecting sensitive enterprise data." },
  { impact: "15+ APIs in production", detail: "Designed, documented, and deployed RESTful APIs following OpenAPI standards across multiple internal systems." },
  { impact: "Audit trail system", detail: "Built comprehensive automated audit logging with 1000+ records tracked, enabling full compliance and version rollback." },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontWeight: 600 }}>Work Experience</p>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#f1f5f9' }}>Where I've made an impact.</h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 0, top: 24, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0.1))', marginLeft: 0 }} />

          <div style={{ paddingLeft: 36, position: 'relative' }}>
            <div style={{ position: 'absolute', left: -6, top: 24, width: 13, height: 13, borderRadius: '50%', background: '#7c3aed', border: '3px solid var(--bg)', boxShadow: '0 0 20px rgba(124,58,237,0.8)' }} />

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {/* Header */}
              <div style={{ padding: '28px 32px', borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 6 }}>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.04em', marginBottom: 4 }}>Software Developer</h3>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#a78bfa', fontFamily: 'var(--font)' }}>Bharat Electronics Limited (BEL)</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={12} /> Feb 2025 – Present
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#64748b', fontFamily: 'var(--font)' }}>
                      <MapPin size={12} /> Bengaluru, India
                    </div>
                    <span style={{ padding: '3px 10px', borderRadius: 99, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ade80', fontSize: 11, fontFamily: 'var(--font)', fontWeight: 600 }}>Full-time</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {points.map((pt, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{ display: 'flex', gap: 16, padding: '18px 20px', borderRadius: 12, background: 'var(--bg-card)', border: '1px solid var(--border)', alignItems: 'flex-start', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'; e.currentTarget.style.background = 'rgba(124,58,237,0.04)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'var(--bg-card)' }}>
                    <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <span style={{ fontWeight: 700, color: '#f1f5f9', fontFamily: 'var(--font)', fontSize: 14 }}>{pt.impact}: </span>
                      <span style={{ color: '#64748b', fontSize: 14, fontFamily: 'var(--font)', lineHeight: 1.6 }}>{pt.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}