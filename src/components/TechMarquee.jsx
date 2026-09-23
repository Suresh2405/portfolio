import React from 'react';
import { marqueeTechnologies } from '../data/skills';

export const TechMarquee = () => {
  // Double array to create smooth seamless looping effect
  const techList = [...marqueeTechnologies, ...marqueeTechnologies, ...marqueeTechnologies];

  return (
    <div
      style={{
        padding: '30px 0',
        backgroundColor: '#0F1522',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Edge Blur Overlays */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(90deg, #0F1522 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(270deg, #0F1522 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <div className="marquee-track">
        {techList.map((tech, idx) => (
          <div key={`${tech}-${idx}`} className="marquee-item">
            <span className="marquee-dot">•</span>
            <span>{tech}</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 36px;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          color: var(--text-muted);
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .marquee-item:hover {
          color: var(--accent-ai);
        }

        .marquee-dot {
          color: var(--accent-primary);
          font-size: 14px;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};
