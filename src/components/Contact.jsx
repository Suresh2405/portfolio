import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    // Fallback: Trigger client mailto stream cleanly
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Let's Build Something Together</h2>
        <p className="section-subtitle">
          I'm open to entry-level software development opportunities, internships, and projects where I can apply my technical skills and continue growing as a software professional.
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & CTAs */}
          <div className="card-glass" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                Get In Touch
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
                Feel free to reach out via email or connect with me on professional platforms. I'm always open to discussing new tech stacks, projects, or placement opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                    <a href={`mailto:${profileData.email}`} style={{ fontSize: '15px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={20} color="var(--accent-ai)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Phone</div>
                    <a href={`tel:${profileData.phone}`} style={{ fontSize: '15px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} color="var(--accent-secondary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: '15px', color: 'var(--text-main)', fontWeight: 500 }}>
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={`mailto:${profileData.email}`} className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '14px' }}>
                <Mail size={16} />
                <span>Email Me</span>
              </a>

              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '10px 16px', fontSize: '14px' }}>
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '10px 16px', fontSize: '14px' }}>
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card-glass" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
              Send a Message
            </h3>

            {submitted && (
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  color: 'var(--success-color)',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px'
                }}
              >
                <CheckCircle2 size={18} />
                <span>Opening email client with your message details...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Your Name <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#0B0F19',
                    border: errors.name ? '1px solid #EF4444' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-main)'
                  }}
                />
                {errors.name && <div style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Email Address <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#0B0F19',
                    border: errors.email ? '1px solid #EF4444' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-main)'
                  }}
                />
                {errors.email && <div style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Placement / Project Query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#0B0F19',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-main)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Message <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#0B0F19',
                    border: errors.message ? '1px solid #EF4444' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-main)',
                    resize: 'vertical'
                  }}
                />
                {errors.message && <div style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '6px' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 32px;
          align-items: stretch;
        }

        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
