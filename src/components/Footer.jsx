import React from 'react';
import { profileData } from '../data/profile';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#070A12',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="footer-top">
          {/* Logo & Headline */}
          <div>
            <a
              href="#home"
              style={{
                fontSize: '24px',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-main)',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '10px'
              }}
            >
              Suresh<span style={{ color: 'var(--accent-primary)' }}>.dev</span>
            </a>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
              Computer Science & AI | Full-Stack Development | AI/ML
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Home</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>About</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Projects</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease'
              }}
            >
              <Github size={16} />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease'
              }}
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email Suresh"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease'
              }}
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginLeft: '8px'
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}
        >
          © 2026 Mandamanedi Suresh. All rights reserved.
        </div>
      </div>

      <style>{`
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
