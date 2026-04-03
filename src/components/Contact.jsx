import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [state, setState] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('submitting');

    emailjs.send('service_i5ns68i', 'template_xntk2ke', {
      name: e.target.name.value,
      email: e.target.email.value,
      companyRole: e.target.companyRole.value,
      message: e.target.message.value,
    }, 'p5Mm4r8HHtVL--c_v')
    .then(() => setState('success'))
    .catch(() => setState('idle'));
    
    setTimeout(() => setState('idle'), 4000);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.35)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '13px 16px',
    color: '#f1f5f9',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'var(--font)',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    letterSpacing: '-0.01em'
  };

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '14px', fontWeight: '600' }}>
              Get In Touch
            </p>
            <h2 style={{ fontFamily: 'var(--font)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', letterSpacing: '-0.05em', color: '#f1f5f9', lineHeight: '1.1', marginBottom: '20px' }}>
              Let's build something extraordinary.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.75', fontFamily: 'var(--font)', marginBottom: '44px' }}>
              Open to full-time roles at product-driven companies. If you're building something ambitious and need a developer who takes performance and security seriously, let's talk.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(167, 139, 250, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={17} color="#a78bfa" />
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: '#475569', fontFamily: 'var(--font)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</p>
                  <a href="mailto:saranyagowreneni10@gmail.com" style={{ color: '#94a3b8', fontSize: '14px', fontFamily: 'var(--font)', textDecoration: 'none', fontWeight: '500' }}>
                    saranyagowreneni10@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={17} color="#06b6d4" />
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: '#475569', fontFamily: 'var(--font)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Location</p>
                  <p style={{ color: '#94a3b8', fontSize: '14px', fontFamily: 'var(--font)', margin: 0, fontWeight: '500' }}>Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{ padding: '36px', borderRadius: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '380px', textAlign: 'center', gap: '16px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={30} color="#4ade80" />
                    </div>
                    <h4 style={{ fontSize: '22px', fontWeight: '800', color: '#f1f5f9', fontFamily: 'var(--font)', letterSpacing: '-0.04em' }}>Message Received!</h4>
                    <p style={{ color: '#64748b', fontFamily: 'var(--font)', maxWidth: '280px', lineHeight: '1.6' }}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setState('idle')}
                      style={{ marginTop: '8px', background: 'none', border: 'none', color: '#a78bfa', cursor: 'pointer', fontSize: '14px', fontFamily: 'var(--font)', fontWeight: '600' }}
                    >
                      Send another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Name</label>
                      <input required type="text" name="name" placeholder="Jane Smith" style={inputStyle} 
                        onFocus={(e) => e.target.style.borderColor = 'rgba(124, 58, 237, 0.5)'} 
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</label>
                      <input required type="email" name="email" placeholder="jane@apple.com" style={inputStyle} 
                        onFocus={(e) => e.target.style.borderColor = 'rgba(124, 58, 237, 0.5)'} 
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Company / Role</label>
                    <input type="text" name="companyRole" placeholder="Apple - Senior Engineer" style={inputStyle} 
                      onFocus={(e) => e.target.style.borderColor = 'rgba(124, 58, 237, 0.5)'} 
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} 
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '8px', fontFamily: 'var(--font)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                    <textarea required rows="5" name="message" placeholder="Hi Saranya, we'd love to discuss an opportunity..." 
                      style={{ ...inputStyle, resize: 'none' }} 
                      onFocus={(e) => e.target.style.borderColor = 'rgba(124, 58, 237, 0.5)'} 
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} 
                    />
                  </div>
                  
                  <button type="submit" disabled={state === 'submitting'} 
                    style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                      background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: 'white', 
                      border: 'none', borderRadius: '12px', padding: '15px 24px', 
                      fontWeight: '700', fontSize: '15px', cursor: state === 'submitting' ? 'not-allowed' : 'pointer', 
                      fontFamily: 'var(--font)', letterSpacing: '-0.02em', 
                      opacity: state === 'submitting' ? 0.7 : 1, 
                      boxShadow: '0 0 24px rgba(124, 58, 237, 0.35)', 
                      transition: 'all 0.2s'
                    }}
                  >
                    {state === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}