import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Database, Code2, Shield, Cpu } from 'lucide-react'

const TAG = ({ children, color = '#7c3aed' }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 6, background: `${color}15`, border: `1px solid ${color}30`, color: color, fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.02em' }}>
    {children}
  </span>
)

export default function Hero() {
  const codeLines = [
    { delay: 0.8, content: <><span style={{ color: '#94a3b8' }}>// Software Developer @ BEL</span></> },
    { delay: 1.0, content: <><span style={{ color: '#a78bfa' }}>const</span> <span style={{ color: '#e2e8f0' }}>saranya</span> <span style={{ color: '#64748b' }}>=</span> <span style={{ color: '#a78bfa' }}>{'{'}</span></> },
    { delay: 1.2, content: <span style={{ paddingLeft: 18 }}><span style={{ color: '#64748b' }}>role:</span> <span style={{ color: '#34d399' }}>"Full Stack Developer"</span>,</span> },
    { delay: 1.4, content: <span style={{ paddingLeft: 18 }}><span style={{ color: '#64748b' }}>company:</span> <span style={{ color: '#34d399' }}>"Bharat Electronics Ltd"</span>,</span> },
    { delay: 1.6, content: <span style={{ paddingLeft: 18 }}><span style={{ color: '#64748b' }}>stack:</span> [<span style={{ color: '#fb923c' }}>"React"</span>, <span style={{ color: '#fb923c' }}>"Node"</span>, <span style={{ color: '#fb923c' }}>"PostgreSQL"</span>],</span> },
    { delay: 1.8, content: <span style={{ paddingLeft: 18 }}><span style={{ color: '#64748b' }}>impact:</span> <span style={{ color: '#34d399' }}>"30% latency reduction"</span>,</span> },
    { delay: 2.0, content: <span style={{ paddingLeft: 18 }}><span style={{ color: '#64748b' }}>status:</span> <span style={{ color: '#4ade80' }}>✓</span> <span style={{ color: '#34d399' }}>"Open to Opportunities"</span></span> },
    { delay: 2.2, content: <><span style={{ color: '#a78bfa' }}>{'}'}</span></> },
  ]

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100, overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '10%', width: 320, height: 320, background: 'rgba(124,58,237,0.07)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 280, height: 280, background: 'rgba(236,72,153,0.06)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ position: 'relative', width: 8, height: 8 }}>
                <span className="pulse-ring" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e', display: 'block' }} />
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: '#64748b', letterSpacing: '0.06em' }}>AVAILABLE FOR FULL-TIME ROLES</span>
            </div>

            <div>
              <h1 style={{ fontFamily: 'var(--font)', fontWeight: 900, fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.05em', margin: 0 }}>
                <span style={{ display: 'block', color: '#f1f5f9' }}>Saranya</span>
                <span style={{ display: 'block', background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Gowreneni
                </span>
              </h1>
              <p style={{ marginTop: 12, fontSize: 20, fontWeight: 500, color: '#64748b', letterSpacing: '-0.02em', fontFamily: 'var(--font)' }}>
                Full Stack Developer — Bharat Electronics Limited
              </p>
            </div>

            <p style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.75, maxWidth: 520, fontFamily: 'var(--font)', fontWeight: 400 }}>
              I build production-grade systems that are secure, performant, and built to scale. From RBAC authentication architectures to database query optimization — I ship code that makes a measurable difference.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <TAG color="#a78bfa">React.js</TAG>
              <TAG color="#06b6d4">Node.js</TAG>
              <TAG color="#4ade80">PostgreSQL</TAG>
              <TAG color="#f97316">AWS</TAG>
              <TAG color="#ec4899">JWT / RBAC</TAG>
              <TAG color="#a78bfa">Docker</TAG>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/SaranyaResume.pdf" download style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px',
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: 'white',
                borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                fontFamily: 'var(--font)', letterSpacing: '-0.02em',
                boxShadow: '0 0 30px rgba(124,58,237,0.4)', transition: 'all 0.25s'
              }}>
                <Download size={16} /> Download Resume
              </a>
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px',
                background: 'rgba(255,255,255,0.05)', color: '#f1f5f9',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none',
                fontFamily: 'var(--font)', letterSpacing: '-0.02em', transition: 'all 0.25s'
              }}>
                View Projects <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>

          {/* Right — Code Card */}
          <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}>

            <div style={{
              borderRadius: 20, overflow: 'hidden',
              background: 'linear-gradient(160deg, #0d0d1a 0%, #0a0a16 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)',
            }}>
              {/* Window bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', gap: 7 }}>
                  {['#ff5f57', '#ffbd2e', '#28c840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c + 'cc' }} />)}
                </div>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: '#475569', letterSpacing: '0.03em' }}>saranya.dev</span>
                <div style={{ width: 50 }} />
              </div>
              {/* Code */}
              <div style={{ padding: '24px 28px', fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.9 }}>
                {codeLines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: line.delay, duration: 0.5 }}>
                    {line.content}
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                  style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ color: '#7c3aed' }}>▸</span>
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
                    style={{ display: 'inline-block', width: 8, height: 16, background: '#a78bfa', borderRadius: 1 }} />
                </motion.div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div className="float-a" style={{ position: 'absolute', right: -24, top: '18%', padding: '12px 16px', background: 'rgba(13,13,26,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,58,237,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={18} color="#a78bfa" />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.03em' }}>30%</div>
                <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'var(--font)', whiteSpace: 'nowrap' }}>DB Latency Drop</div>
              </div>
            </motion.div>

            <motion.div className="float-b" style={{ position: 'absolute', left: -24, bottom: '20%', padding: '12px 16px', background: 'rgba(13,13,26,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(6,182,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={18} color="#06b6d4" />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.03em' }}>15+</div>
                <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'var(--font)', whiteSpace: 'nowrap' }}>APIs Shipped</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}