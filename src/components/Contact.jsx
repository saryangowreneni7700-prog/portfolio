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
    
    // Success stays 60 seconds (1 minute) - Premium duration
    setTimeout(() => setState('idle'), 60000);
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
    transition: 'border-color 0.2s, box-shadow 0.2s',
    letterSpacing: '-0.01em'
  };

  return (
    <section id="contact" style={{ 
      padding: '120px 0', 
      background: 'rgba(0,0,0,0.2)', 
      borderTop: '1px solid rgba(255,255,255,0.04)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated gradient background glow */}
      <motion.div
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, #6d28d9 0%, transparent 60%)',
            'radial-gradient(circle at 80% 70%, #7c3aed 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          filter: 'blur(60px)',
          opacity: 0.3
        }}
      />
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 32px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="contact-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.3fr', 
          gap: '64px', 
          alignItems: 'start' 
        }}>
          
          {/* Left Info - UNCHANGED */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ 
              fontSize: '11px', 
              fontFamily: 'var(--font-mono)', 
              color: '#7c3aed', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              marginBottom: '14px', 
              fontWeight: '600' 
            }}>
              Get In Touch
            </p>
            <h2 style={{ 
              fontFamily: 'var(--font)', 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '900', 
              letterSpacing: '-0.05em', 
              color: '#f1f5f9', 
              lineHeight: '1.1', 
              marginBottom: '20px' 
            }}>
              Let's build something extraordinary.
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: '#64748b', 
              lineHeight: '1.75', 
              fontFamily: 'var(--font)', 
              marginBottom: '44px' 
            }}>
              Open to full-time roles at product-driven companies. If you're building something ambitious and need a developer who takes performance and security seriously, let's talk.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '42px', height: '42px', 
                  borderRadius: '10px', 
                  background: 'rgba(167, 139, 250, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <Mail size={17} color="#a78bfa" />
                </div>
                <div>
                  <p style={{ 
                    fontSize: '11px', 
                    color: '#475569', 
                    fontFamily: 'var(--font)', 
                    marginBottom: '2px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.06em' 
                  }}>Email</p>
                  <a href="mailto:saranyagowreneni10@gmail.com" style={{ 
                    color: '#94a3b8', 
                    fontSize: '14px', 
                    fontFamily: 'var(--font)', 
                    textDecoration: 'none', 
                    fontWeight: '500' 
                  }}>
                    saranyagowreneni10@gmail.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '42px', height: '42px', 
                  borderRadius: '10px', 
                  background: 'rgba(6, 182, 212, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <MapPin size={17} color="#06b6d4" />
                </div>
                <div>
                  <p style={{ 
                    fontSize: '11px', 
                    color: '#475569', 
                    fontFamily: 'var(--font)', 
                    marginBottom: '2px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.06em' 
                  }}>Location</p>
                  <p style={{ 
                    color: '#94a3b8', 
                    fontSize: '14px', 
                    fontFamily: 'var(--font)', 
                    margin: 0, 
                    fontWeight: '500' 
                  }}>Bengaluru, India</p>
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
            <div style={{ 
              padding: '36px', 
              borderRadius: '24px', 
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 0 48px rgba(124,58,237,0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '380px', 
                    textAlign: 'center', 
                    gap: '32px', 
                    padding: '32px' 
                  }}>
                    {/* Premium Rocket Animation */}
                    <motion.div 
                      animate={{ 
                        y: [0, -12, 0], 
                        rotate: [0, 8, -8, 0],
                        scale: [1, 1.12, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }}
                      style={{ position: 'relative' }}
                    >
                      <div style={{ 
                        width: '90px', 
                        height: '90px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #22c55e, #4ade80)', 
                        boxShadow: '0 0 48px rgba(34, 197, 94, 0.7)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        position: 'relative',
                        border: '3px solid rgba(255,255,255,0.3)'
                      }}>
                        <Rocket size={36} color="white" strokeWidth={2.5} />
                      </div>
                      {/* Enhanced Sparkle Effects */}
                      <Sparkles size={24} color="#fbbf24" style={{ 
                        position: 'absolute', 
                        top: -12, 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        opacity: 0.9 
                      }} />
                      <Star size={20} color="#f59e0b" style={{ 
                        position: 'absolute', 
                        bottom: -6, 
                        right: 6, 
                        opacity: 0.8 
                      }} />
                    </motion.div>

                    <div>
                      <h4 style={{ 
                        fontSize: '32px', 
                        fontWeight: '900', 
                        background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)', 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'var(--font)', 
                        letterSpacing: '-0.04em', 
                        marginBottom: '16px'
                      }}>
                        🚀 Message Launched!
                      </h4>
                      <p style={{ 
                        color: '#64748b', 
                        fontFamily: 'var(--font)', 
                        maxWidth: '360px', 
                        lineHeight: '1.8', 
                        fontSize: '17px',
                        marginBottom: '12px'
                      }}>
                        Your message rocketed to my inbox! <span style={{ color: '#22c55e' }}>✨</span>
                      </p>
                      <p style={{ 
                        color: '#94a3b8', 
                        fontFamily: 'var(--font)', 
                        fontSize: '15px', 
                        margin: 0
                      }}>
                        I'll reply within 24 hours. Let's build something amazing! 🎯
                      </p>
                    </div>

                    <motion.button 
                      onClick={() => setState('idle')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '14px', 
                        padding: '16px 32px', 
                        fontWeight: '700', 
                        fontSize: '16px', 
                        cursor: 'pointer', 
                        fontFamily: 'var(--font)', 
                        letterSpacing: '-0.02em', 
                        boxShadow: '0 12px 40px rgba(124, 58, 237, 0.5)'
                      }}
                    >
                      <Sparkles size={18} />
                      Send Another Message
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Form fields - Enhanced focus states */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b', 
                        marginBottom: '8px', 
                        fontFamily: 'var(--font)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.06em' 
                      }}>Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name" 
                        placeholder="Jane Smith" 
                        style={inputStyle} 
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(124, 58, 237, 0.6)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.15)';
                        }} 
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = 'none';
                        }} 
                      />
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#64748b', 
                        marginBottom: '8px', 
                        fontFamily: 'var(--font)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.06em' 
                      }}>Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email" 
                        placeholder="jane@apple.com" 
                        style={inputStyle} 
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(124, 58, 237, 0.6)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.15)';
                        }} 
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = 'none';
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '12px', 
                      fontWeight: '600', 
                      color: '#64748b', 
                      marginBottom: '8px', 
                      fontFamily: 'var(--font)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.06em' 
                    }}>Company / Role</label>
                    <input 
                      type="text" 
                      name="companyRole" 
                      placeholder="Apple - Senior Engineer" 
                      style={inputStyle} 
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(124, 58, 237, 0.6)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.15)';
                      }} 
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.boxShadow = 'none';
                      }} 
                    />
                  </div>
                  
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '12px', 
                      fontWeight: '600', 
                      color: '#64748b', 
                      marginBottom: '8px', 
                      fontFamily: 'var(--font)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.06em' 
                    }}>Message</label>
                    <textarea 
                      required 
                      rows="5" 
                      name="message" 
                      placeholder="Hi Saranya, we'd love to discuss an opportunity..." 
                      style={{ 
                        ...inputStyle, 
                        resize: 'none',
                        minHeight: '120px'
                      }} 
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(124, 58, 237, 0.6)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.15)';
                      }} 
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.boxShadow = 'none';
                      }} 
                    />
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    disabled={state === 'submitting'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '10px', 
                      background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '14px', 
                      padding: '16px 28px', 
                      fontWeight: '700', 
                      fontSize: '16px', 
                      cursor: state === 'submitting' ? 'not-allowed' : 'pointer', 
                      fontFamily: 'var(--font)', 
                      letterSpacing: '-0.02em', 
                      opacity: state === 'submitting' ? 0.8 : 1, 
                      boxShadow: '0 12px 40px rgba(124, 58, 237, 0.4)', 
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {state === 'submitting' ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}