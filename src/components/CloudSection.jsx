import React from 'react';
import { cloudDeploymentData } from '../data/certifications';
import { Cloud, GitBranch, Github, Server } from 'lucide-react';

export const CloudSection = () => {
  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="card-glass"
          style={{
            padding: '40px',
            textAlign: 'center',
            maxWidth: '960px',
            margin: '0 auto',
            background: 'linear-gradient(180deg, #151B2B 0%, #0F1626 100%)'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(34, 211, 238, 0.1)',
              border: '1px solid rgba(34, 211, 238, 0.25)',
              color: 'var(--accent-ai)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            DEVOPS & DEPLOYMENT
          </div>

          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
            {cloudDeploymentData.title}
          </h2>

          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 36px auto', lineHeight: 1.6 }}>
            {cloudDeploymentData.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px'
            }}
          >
            {cloudDeploymentData.tools.map((tool) => (
              <div
                key={tool.name}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  backgroundColor: '#0B0F19',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-ai)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                  {tool.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
