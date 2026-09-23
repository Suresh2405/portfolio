import React from 'react';
import { profileData } from '../data/profile';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const edu = profileData.education;

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background in Computer Science & Artificial Intelligence.</p>

        <div className="timeline-container">
          {/* Vertical Accent Line */}
          <div className="timeline-line" />

          {/* Timeline Item */}
          <div className="timeline-item">
            {/* Dot Indicator */}
            <div className="timeline-dot">
              <GraduationCap size={18} color="#FFFFFF" />
            </div>

            {/* Content Card */}
            <div className="card-glass timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)' }}>
                    {edu.institution}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="period-badge">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '8px' }}>
                  {edu.degree} — {edu.specialization}
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', color: 'var(--success-color)', fontWeight: 700, fontSize: '15px' }}>
                  <Award size={16} />
                  <span>Cumulative GPA: {edu.gpa} / 10.0</span>
                </div>
              </div>

              <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
                Pursuing comprehensive coursework in Data Structures, Object-Oriented Programming (Java/Python), Database Management Systems (SQL), Computer Networks, Machine Learning algorithms, and Artificial Intelligence techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%);
        }

        .timeline-item {
          position: relative;
          padding-left: 64px;
        }

        .timeline-dot {
          position: absolute;
          left: 8px;
          top: 24px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(99, 102, 241, 0.6);
          z-index: 2;
        }

        .timeline-card {
          padding: 30px;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          flex-wrap: wrap;
        }

        .period-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          backgroundColor: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          fontSize: 13px;
          color: var(--accent-ai);
          fontWeight: 500;
        }

        @media (max-width: 640px) {
          .timeline-line {
            display: none;
          }
          .timeline-item {
            padding-left: 0;
          }
          .timeline-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
