import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { DisasterDashboardVisual } from './DisasterDashboardVisual';
import { DeepStockDashboardVisual } from './DeepStockDashboardVisual';
import { profileData } from '../data/profile';

export const ProjectCard = ({ project, onSelect }) => {
  const githubTargetUrl = (project.github && project.github !== '#')
    ? project.github
    : (profileData.github && profileData.github !== '#' ? profileData.github : 'https://github.com');

  const handleCardClick = () => {
    window.open(githubTargetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(project);
    }
  };

  return (
    <div
      className="card-glass project-card"
      onClick={handleCardClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative'
      }}
    >
      {/* Top Visual Area */}
      <div className="project-visual-wrapper" style={{ padding: '16px 16px 0 16px', backgroundColor: '#0B0F19', position: 'relative', overflow: 'hidden' }}>
        <div className="visual-scaler" style={{ transition: 'transform 0.3s ease' }}>
          {project.visualType === 'disaster' ? (
            <DisasterDashboardVisual />
          ) : (
            <DeepStockDashboardVisual />
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="project-overlay">
          <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px', gap: '8px' }}>
            <Github size={18} />
            <span>Open GitHub Repo</span>
          </button>
        </div>
      </div>

      {/* Card Content Area */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: '20px',
              backgroundColor: project.badgeColor === 'cyan' ? 'rgba(34, 211, 238, 0.1)' : 'rgba(99, 102, 241, 0.1)',
              color: project.badgeColor === 'cyan' ? 'var(--accent-ai)' : 'var(--accent-primary)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}
          >
            {project.category}
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', fontFamily: 'var(--font-display)' }}>
            {project.title}
          </h3>

          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  fontSize: '12px',
                  color: 'var(--accent-primary)',
                  fontWeight: 600
                }}
              >
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Open on GitHub <Github size={16} />
            </span>

            <div style={{ display: 'flex', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handleDetailsClick}
                title="View Full Details"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Eye size={18} />
              </button>
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  style={{ color: 'var(--text-muted)', padding: '6px' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-ai)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
        }

        .project-card:hover .visual-scaler {
          transform: scale(1.02);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(11, 15, 25, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .project-overlay {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
