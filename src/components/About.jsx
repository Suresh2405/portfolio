import React from 'react';
import { profileData } from '../data/profile';
import { Award, BookOpen, MapPin, Code2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Building practical solutions with software and AI.</p>

        <div className="about-grid">
          {/* Left Column - Detailed Professional Bio */}
          <div
            className="card-glass"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent-ai)' }}>
              Passionate Computer Science & AI Engineer
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              {profileData.aboutBio}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8 }}>
              I combine core computer science fundamentals—such as Database Management Systems (DBMS), Data Structures, and Computer Networks—with modern full-stack web engineering and deep learning time-series models to engineer robust, practical software products.
            </p>
          </div>

          {/* Right Column - 4 Information Cards */}
          <div className="about-cards-grid">
            {profileData.aboutCards.map((card) => (
              <div
                key={card.id}
                style={{
                  backgroundColor: '#151B2B',
                  border: '1px solid #273449',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#6366F1';
                  e.currentTarget.style.boxShadow = '0 12px 25px -8px rgba(99, 102, 241, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#273449';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginTop: '4px', fontFamily: 'var(--font-display)' }}>
                    {card.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: stretch;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
