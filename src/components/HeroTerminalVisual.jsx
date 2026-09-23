import React, { useState, useEffect } from 'react';
import { Terminal, CheckCircle2, Play, Cpu, Database, Code } from 'lucide-react';

export const HeroTerminalVisual = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setStatus('Forecast generated successfully');
          return 100;
        }
        if (prev === 20) setStatus('Loading dataset...');
        if (prev === 50) setStatus('Initializing LSTM neural network...');
        if (prev === 80) setStatus('Running time-series predictions...');
        return prev + 10;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto'
      }}
    >
      {/* Main Terminal Box */}
      <div
        className="card-glass"
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)',
          border: '1px solid rgba(39, 52, 73, 0.8)',
          backgroundColor: '#0F1626'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            backgroundColor: '#151B2B',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
          </div>
          <div
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-code)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Terminal size={14} color="var(--accent-primary)" />
            <span>deepstock_model.py — bash</span>
          </div>
          <div style={{ width: '36px' }}></div>
        </div>

        {/* Terminal Output Content */}
        <div
          style={{
            padding: '24px',
            fontFamily: 'var(--font-code)',
            fontSize: '14px',
            color: '#E2E8F0',
            lineHeight: 1.8,
            minHeight: '260px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-ai)' }}>
            <span style={{ color: 'var(--accent-primary)' }}>$</span>
            <span>python deepstock.py</span>
          </div>
          
          <div style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            Loading dataset: AAPL_historical_prices.csv ...
          </div>

          <div style={{ marginTop: '12px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="var(--accent-primary)" />
            <span>Architecture: LSTM Model (PyTorch/TensorFlow)</span>
          </div>

          {/* Progress Bar Display */}
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span>{status}</span>
              <span>{progress}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#1E293B',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #6366F1, #22D3EE)',
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>

          {/* Terminal Output Stream */}
          {progress >= 100 && (
            <div
              style={{
                marginTop: '18px',
                padding: '12px 14px',
                backgroundColor: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                borderRadius: '8px',
                color: 'var(--success-color)',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                animation: 'fadeIn 0.4s ease'
              }}
            >
              <CheckCircle2 size={16} />
              <span>Forecast generated. Output: +12.4% trend prediction</span>
            </div>
          )}

          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--accent-ai)' }}>suresh@dev-machine:~$</span>
            <span className="blinking-cursor" style={{ display: 'inline-block', width: '8px', height: '16px', backgroundColor: 'var(--accent-ai)' }}></span>
          </div>
        </div>
      </div>

      {/* Floating Technology Pills */}
      <div
        className="floating-card"
        style={{
          position: 'absolute',
          top: '-16px',
          right: '-20px',
          backgroundColor: '#151B2B',
          border: '1px solid var(--accent-primary)',
          borderRadius: '12px',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          animation: 'floatAnim 4s ease-in-out infinite',
          animationDelay: '0s'
        }}
      >
        <Code size={16} color="var(--accent-primary)" />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Python</span>
      </div>

      <div
        className="floating-card"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '-28px',
          backgroundColor: '#151B2B',
          border: '1px solid var(--accent-ai)',
          borderRadius: '12px',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          animation: 'floatAnim 4s ease-in-out infinite',
          animationDelay: '1.2s'
        }}
      >
        <AtomIcon size={16} color="var(--accent-ai)" />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>React</span>
      </div>

      <div
        className="floating-card"
        style={{
          position: 'absolute',
          bottom: '-16px',
          right: '20px',
          backgroundColor: '#151B2B',
          border: '1px solid var(--accent-secondary)',
          borderRadius: '12px',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          animation: 'floatAnim 4s ease-in-out infinite',
          animationDelay: '2.4s'
        }}
      >
        <Database size={16} color="var(--accent-secondary)" />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>SQL</span>
      </div>

      <div
        className="floating-card"
        style={{
          position: 'absolute',
          top: '45%',
          left: '-32px',
          backgroundColor: '#151B2B',
          border: '1px solid rgba(34, 211, 238, 0.4)',
          borderRadius: '12px',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          animation: 'floatAnim 4s ease-in-out infinite',
          animationDelay: '0.6s'
        }}
      >
        <Cpu size={16} color="var(--accent-ai)" />
        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>AI / ML</span>
      </div>

      <style>{`
        @keyframes floatAnim {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Helper SVG for React Atom Icon
const AtomIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" fill={color}/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
  </svg>
);
