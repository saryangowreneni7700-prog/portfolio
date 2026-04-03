import { motion } from 'framer-motion'
import { Lock, Cpu, Database, Server } from 'lucide-react'

const projects = [
  {
    icon: Cpu, iconColor: '#a78bfa', iconBg: 'rgba(124,58,237,0.12)',
    category: "C++ / Embedded Systems",
    title: "Cognitive Psychomotor Evaluation System",
    desc: "Real-time evaluation platform for complex operational environments, built with multithreaded C++ for ultra-low latency and precise measurement fidelity.",
    impact: { value: "~20%", label: "accuracy improvement" },
    impact2: { value: "25%", label: "faster execution" },
    stack: ["Qt Framework", "C++17", "Multithreading", "Embedded Linux"]
  },
  {
    icon: Database, iconColor: '#06b6d4', iconBg: 'rgba(6,182,212,0.12)',
    category: "Full Stack / Data Integrity",
    title: "Automated Audit Logging & Version Control",
    desc: "Enterprise-grade audit trail system with granular change tracking, conflict-free diff engine, and one-click rollback across 1000+ records.",
    impact: { value: "40%", label: "faster incident recovery" },
    impact2: { value: "1000+", label: "records tracked" },
    stack: ["React", "Node.js", "PostgreSQL", "REST API"]
  },
  {
    icon: Server, iconColor: '#4ade80', iconBg: 'rgba(34,197,94,0.12)',
    category: "Enterprise Platform",
    title: "Central Records Management System",
    desc: "Modular, RBAC-secured internal records platform deployed at scale within BEL. Streamlines cross-departmental data workflows with real-time updates.",
    impact: { value: "25%", label: "productivity gain" },
    impact2: { value: "15+", label: "APIs in production" },
    stack: ["React.js", "Node.js", "JWT/RBAC", "PostgreSQL"]
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontWeight: 600 }}>Featured Work</p>
          <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#f1f5f9' }}>
            Systems shipped to production.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex', flexDirection: 'column', padding: 28,
                  borderRadius: 20, background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${p.iconColor}30`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} color={p.iconColor} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#475569', background: 'rgba(255,255,255,0.04)', padding: '5px 10px', borderRadius: 6, fontFamily: 'var(--font)' }}>
                    <Lock size={10} /> Proprietary
                  </div>
                </div>

                <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#64748b', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.category}</p>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.03em', lineHeight: 1.3, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontFamily: 'var(--font)', flex: 1, marginBottom: 24 }}>{p.desc}</p>

                {/* Impact metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
                  {[p.impact, p.impact2].map((imp, j) => (
                    <div key={j} style={{ padding: '12px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                      <div style={{ fontSize: 20, fontWeight: 900, color: p.iconColor, fontFamily: 'var(--font)', letterSpacing: '-0.04em' }}>{imp.value}</div>
                      <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'var(--font)', marginTop: 2 }}>{imp.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stack pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.stack.map((t, j) => (
                    <span key={j} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}