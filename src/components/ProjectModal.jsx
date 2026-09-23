import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { DisasterDashboardVisual } from './DisasterDashboardVisual';
import { DeepStockDashboardVisual } from './DeepStockDashboardVisual';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        backgroundColor: 'rgba(11, 15, 25, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 250ms ease forwards'
      }}
      onClick={onClose}
    >
      <div
        className="card-glass"
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#151B2B',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.2)',
          position: 'relative',
          padding: '32px',
          animation: 'modalScale 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.borderColor = '#EF4444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: project.badgeColor === 'cyan' ? 'rgba(34, 211, 238, 0.12)' : 'rgba(99, 102, 241, 0.12)',
              color: project.badgeColor === 'cyan' ? 'var(--accent-ai)' : 'var(--accent-primary)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '10px'
            }}
          >
            {project.category}
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
            {project.title}
          </h2>
        </div>

        {/* Project Interactive Visual Display */}
        <div style={{ marginBottom: '24px' }}>
          {project.visualType === 'disaster' ? (
            <DisasterDashboardVisual />
          ) : (
            <DeepStockDashboardVisual />
          )}
        </div>

        {/* Description */}
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.fullDescription}
        </p>

        {/* Key Features */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
            Key Features & Architecture
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
            Technologies Used
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer if present */}
        {project.disclaimer && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              color: '#F59E0B',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px'
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{project.disclaimer}</span>
          </div>
        )}

        {/* Modal Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github size={16} />
            <span>View Source Code</span>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
