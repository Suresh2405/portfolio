import React from 'react';
import { certificationsData } from '../data/certifications';
import { Award, Cloud, ShieldCheck, CheckCircle } from 'lucide-react';

const iconMap = {
  Award: Award,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck
};

export const Certifications = () => {
  return (
    <section id="certificates" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Certifications & Learning</h2>
        <p className="section-subtitle">
          Professional training and cloud certifications.
        </p>

        <div className="cert-grid">
          {certificationsData.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <div key={cert.id} className="card-glass cert-card">
                <div className="cert-icon-box">
                  <IconComponent size={24} color="var(--accent-primary)" />
                </div>

                <div className="cert-badge">{cert.badge}</div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '13px', color: 'var(--accent-ai)', fontWeight: 600, marginBottom: '14px' }}>
                  {cert.issuer}
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {cert.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '20px', fontSize: '13px', color: 'var(--success-color)', fontWeight: 600 }}>
                  <CheckCircle size={15} />
                  <span>Completed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cert-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .cert-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .cert-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          padding: 4px 10px;
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
