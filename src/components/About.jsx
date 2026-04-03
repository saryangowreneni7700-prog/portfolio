import { motion } from 'framer-motion'
import { Layers, ShieldCheck, Cloud, GitMerge } from 'lucide-react'

const pillars = [
  { icon: Layers, color: '#a78bfa', bg: 'rgba(124,58,237,0.1)', title: "Product-Grade Engineering", desc: "End-to-end architectures that are modular, scalable, and built for real business impact." },
  { icon: ShieldCheck, color: '#4ade80', bg: 'rgba(34,197,94,0.1)', title: "Secure by Default", desc: "JWT/RBAC authentication and granular audit logging for enterprise-grade security." },
  { icon: Cloud, color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', title: "Cloud Native", desc: "AWS deployments and Docker containerization for high-availability production systems." },
  { icon: GitMerge, color: '#f97316', bg: 'rgba(249,115,22,0.1)', title: "Systems Thinking", desc: "Bridging frontend UX, backend APIs, and database performance to eliminate bottlenecks." },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 80, alignItems: 'start' }}>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16, fontWeight: 600 }}>Engineering Philosophy</p>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.08, marginBottom: 28, color: '#f1f5f9' }}>
              Precision engineering. Real-world impact.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, fontFamily: 'var(--font)' }}>
                I'm a Full Stack Developer at Bharat Electronics Limited, where I build secure, high-performance internal systems that power mission-critical operations. My work sits at the intersection of clean architecture and tangible business outcomes.
              </p>
              <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, fontFamily: 'var(--font)' }}>
                Every system I build is designed with three non-negotiables: it must be secure, it must scale, and it must be observable. Whether it's reducing database latency by 30% or implementing zero-downtime RBAC migrations — I treat every commit as a product decision.
              </p>
            </div>

            <div style={{ marginTop: 36, display: 'flex', gap: 32, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {[{ value: '1+', label: 'Year at BEL' }, { value: '15+', label: 'APIs Shipped' }, { value: '3', label: 'Core Systems' }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.05em', color: '#f1f5f9', fontFamily: 'var(--font)' }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: '#64748b', fontFamily: 'var(--font)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  style={{ padding: 22, borderRadius: 16, background: 'var(--bg-card)', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={20} color={p.color} />
                  </div>
                  <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 14, color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.02em' }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, fontFamily: 'var(--font)' }}>{p.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}