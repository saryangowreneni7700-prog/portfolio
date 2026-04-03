import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, Send, Rocket, Star, Sparkles } from 'lucide-react';

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
    
    setTimeout(() => setState('idle'), 20000);
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
          
          {/* Left Info - UNCHANGED */}
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
                  initial={{ opacity: 0, scale: 0.92, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div style={{ 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                    minHeight: '380px', textAlign: 'center', gap: '24px', padding: '32px' 
                  }}>
                    {/* Premium Rocket Animation */}
                    <motion.div 
                      animate={{ 
                        y: [0, -8, 0], 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }}
                      style={{ position: 'relative' }}
                    >
                      <div style={{ 
                        width: '80px', height: '80px', borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #22c55e, #4ade80)', 
                        boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative',
                        border: '3px solid rgba(255,255,255,0.2)'
                      }}>
                        <Rocket size={32} color="white" strokeWidth={2} />
                      </div>
                      {/* Sparkle Effects */}
                      <Sparkles size={20} color="#fbbf24" style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', opacity: 0.8 }} />
                      <Star size={16} color="#f59e0b" style={{ position: 'absolute', bottom: -4, right: 4, opacity: 0.7 }} />
                    </motion.div>

                    <div>
                      <h4 style={{ 
                        fontSize: '28px', fontWeight: '900', 
                        background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)', 
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        fontFamily: 'var(--font)', letterSpacing: '-0.04em', 
                        marginBottom: '12px'
                      }}>
                        🚀 Message Launched...!
                      </h4>
                      <p style={{ 
                        color: '#64748b', fontFamily: 'var(--font)', 
                        maxWidth: '320px', lineHeight: '1.7', fontSize: '16px',
                        marginBottom: '8px'
                      }}>
                        Thank you for reaching out. Your message rocketed to my inbox! <span style={{ color: '#22c55e' }}>✨</span>
                      </p>
                      <p style={{ 
                        color: '#94a3b8', fontFamily: 'var(--font)', 
                        fontSize: '14px', margin: 0
                      }}>
                        I'll reply within 24 hours. Let's build something amazing! Feel free to explore my latest case studies or connect with me on LinkedIn 🎯
                      </p>
                    </div>

                    <motion.button 
                      onClick={() => setState('idle')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '8px', 
                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', 
                        color: 'white', border: 'none', borderRadius: '12px', 
                        padding: '14px 28px', fontWeight: '700', fontSize: '15px', 
                        cursor: 'pointer', fontFamily: 'var(--font)', 
                        letterSpacing: '-0.02em', boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)'
                      }}
                    >
                      <Sparkles size={16} />
                      Send Another Message
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Form fields - UNCHANGED */}
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