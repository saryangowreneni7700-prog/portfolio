import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyRole: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const inputStyle = {
    width: "100%",
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "13px 16px",
    color: "#f1f5f9",
    fontSize: "14px",
    outline: "none",
    fontFamily: "var(--font)",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    letterSpacing: "-0.01em",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.companyRole,
          subject: "Portfolio contact",
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        companyRole: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send message");
    }
  };

  const onFocusBorder = (e) => {
    e.target.style.borderColor = "rgba(124,58,237,0.5)";
  };

  const onBlurBorder = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        background: "rgba(0,0,0,0.2)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* LEFT - INFO (same as original) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                color: "#7c3aed",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              Get In Touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                color: "#f1f5f9",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Let’s build something extraordinary.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#64748b",
                lineHeight: 1.75,
                fontFamily: "var(--font)",
                marginBottom: 44,
              }}
            >
              Open to full-time roles at product-driven companies. If you're
              building something ambitious and need a developer who takes
              performance and security seriously, let's talk.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginBottom: 36,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(124,58,237,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={17} color="#a78bfa" />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#475569",
                      fontFamily: "var(--font)",
                      marginBottom: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:saranyagowreneni10@gmail.com"
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                      fontFamily: "var(--font)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    saranyagowreneni10@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(6,182,212,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={17} color="#06b6d4" />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#475569",
                      fontFamily: "var(--font)",
                      marginBottom: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Location
                  </p>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                      fontFamily: "var(--font)",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/saranyagowreneni"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/saranya-gowreneni"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748b",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "#4ade80",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "var(--font)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 50,
                    background: "#4ade80",
                  }}
                />
                Open to roles
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM (wired to backend) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              padding: 36,
              borderRadius: 24,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 380,
                  textAlign: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 50,
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={30} color="#4ade80" />
                </div>
                <h4
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#f1f5f9",
                    fontFamily: "var(--font)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  Message Received!
                </h4>
                <p
                  style={{
                    color: "#64748b",
                    fontFamily: "var(--font)",
                    maxWidth: 280,
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for reaching out. I’ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 8,
                    background: "none",
                    border: "none",
                    color: "#a78bfa",
                    cursor: "pointer",
                    fontSize: 14,
                    fontFamily: "var(--font)",
                    fontWeight: 600,
                  }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#64748b",
                        marginBottom: 8,
                        fontFamily: "var(--font)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      style={inputStyle}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={onFocusBorder}
                      onBlur={onBlurBorder}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#64748b",
                        marginBottom: 8,
                        fontFamily: "var(--font)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@apple.com"
                      style={inputStyle}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={onFocusBorder}
                      onBlur={onBlurBorder}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: 8,
                      fontFamily: "var(--font)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Company / Role
                  </label>
                  <input
                    required
                    type="text"
                    name="companyRole"
                    placeholder="Apple • Senior Engineer opportunity"
                    style={inputStyle}
                    value={formData.companyRole}
                    onChange={handleChange}
                    onFocus={onFocusBorder}
                    onBlur={onBlurBorder}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      marginBottom: 8,
                      fontFamily: "var(--font)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    placeholder="Hi Saranya, we’d love to discuss an opportunity..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                    }}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={onFocusBorder}
                    onBlur={onBlurBorder}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: 13, color: "#f97373", fontFamily: "var(--font)" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background:
                      "linear-gradient(135deg, #7c3aed, #6d28d9)",
                    color: "white",
                    border: "none",
                    borderRadius: 12,
                    padding: "15px 24px",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    fontFamily: "var(--font)",
                    letterSpacing: "-0.02em",
                    opacity: status === "loading" ? 0.7 : 1,
                    boxShadow: "0 0 24px rgba(124,58,237,0.35)",
                    transition: "all 0.2s",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}