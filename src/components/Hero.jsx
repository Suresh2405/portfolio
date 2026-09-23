import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, FileText, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { HeroTerminalVisual } from './HeroTerminalVisual';

export const Hero = () => {
  const roles = profileData.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* Left Column - Content */}
          <div className="hero-content">
            {/* Small Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: 'var(--accent-primary)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}
            >
              <Sparkles size={14} color="var(--accent-ai)" />
              <span>FINAL-YEAR CSE-AIML STUDENT</span>
            </div>

            {/* Main Heading */}
            <h1
              className="hero-heading"
              style={{
                fontSize: '56px',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm <br />
              <span>Mandamanedi </span>
              <span style={{ color: 'var(--accent-primary)' }}>Suresh</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--accent-ai)',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                fontFamily: 'var(--font-display)'
              }}
            >
              <span>{currentText}</span>
              <span className="blinking-cursor" style={{ marginLeft: '4px', color: 'var(--accent-primary)' }}>|</span>
            </div>

            {/* Professional Description */}
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '32px'
              }}
            >
              {profileData.heroDescription}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '40px'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>

              <a
                href={profileData.resumeUrl}
                download="Mandamanedi_Suresh_Resume.pdf"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(34, 211, 238, 0.4)', color: 'var(--accent-ai)' }}
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>Connect:</span>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={18} />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Mandamanedi Suresh"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-ai)';
                  e.currentTarget.style.color = 'var(--accent-ai)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Developer Visual */}
          <div className="hero-visual">
            <HeroTerminalVisual />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hero-heading {
            font-size: 44px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-heading {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
