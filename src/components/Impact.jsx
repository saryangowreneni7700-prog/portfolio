import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    if (!isInView) return
    let start, frame
    const animate = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 2200, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(ease * end))
      if (p < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [end, isInView])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 30, suffix: '%', label: 'Database latency reduction', desc: 'Via strategic indexing & query optimization' },
  { value: 25, suffix: '%', label: 'Workflow efficiency gain', desc: 'Across BEL internal operations' },
  { value: 15, suffix: '+', label: 'REST APIs shipped', desc: 'To production environments' },
  { value: 1000, suffix: '+', label: 'Records audit-logged', desc: 'With granular change tracking' },
]

export default function Impact() {
  return (
    <section style={{ padding: '96px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ padding: '28px 24px', borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
              <div style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.06em', color: '#f1f5f9', marginBottom: 6, fontFamily: 'var(--font)' }}>
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 4, fontFamily: 'var(--font)' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}