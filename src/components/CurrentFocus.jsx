import React from 'react';
import { currentFocusCards } from '../data/certifications';
import { Layers, Brain, Database, Cloud } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Brain: Brain,
  Database: Database,
  Cloud: Cloud
};

export const CurrentFocus = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">What I'm Currently Focused On</h2>
        <p className="section-subtitle">
          Core technical domains driving my learning & engineering projects.
        </p>

        <div className="focus-grid">
          {currentFocusCards.map((card) => {
            const IconComponent = iconMap[card.icon] || Layers;

            return (
              <div key={card.id} className="card-glass focus-card">
                <div className="focus-icon">
                  <IconComponent size={24} color="var(--accent-ai)" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .focus-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .focus-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        @media (max-width: 1024px) {
          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .focus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
