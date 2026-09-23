import React from 'react';
import { TrendingUp, Cpu, Activity, BarChart2, Zap, ArrowUpRight } from 'lucide-react';

export const DeepStockDashboardVisual = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#0F1626',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        fontSize: '12px',
        color: 'var(--text-main)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Dashboard Top Header */}
      <div
        style={{
          backgroundColor: '#151B2B',
          padding: '10px 16px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TrendingUp size={16} color="var(--accent-ai)" />
          <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '13px' }}>
            DeepStock AI Platform
          </span>
          <span style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(99, 102, 241, 0.2)', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '11px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            AAPL
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success-color)' }}></span>
          <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Model: Ready</span>
        </div>
      </div>

      {/* Grid Container */}
      <div style={{ padding: '14px', backgroundColor: '#0B0F19' }}>
        {/* Metric Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
          <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Architecture</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-primary)', marginTop: '2px' }}>LSTM Network</div>
          </div>

          <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Forecast Horizon</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-ai)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span>Bullish Trend</span>
              <ArrowUpRight size={14} color="var(--accent-ai)" />
            </div>
          </div>

          <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Indicator</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>RSI (14): 58.4</div>
          </div>

          <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Model Status</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success-color)', marginTop: '2px' }}>Converged</div>
          </div>
        </div>

        {/* Clean Line Chart & Neural Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
          {/* Main Chart Panel */}
          <div
            style={{
              backgroundColor: '#151B2B',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              padding: '12px',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Historical Price vs LSTM Forecast</span>
              <div style={{ display: 'flex', gap: '12px', fontSize: '10px' }}>
                <span style={{ color: '#6366F1' }}>— Historical</span>
                <span style={{ color: '#22D3EE' }}>-- Forecast</span>
              </div>
            </div>

            {/* SVG Chart Visualization */}
            <svg width="100%" height="90" viewBox="0 0 300 90" fill="none">
              {/* Gridlines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="#1F293D" strokeWidth="1" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="#1F293D" strokeWidth="1" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="#1F293D" strokeWidth="1" />

              {/* Historical Solid Path */}
              <path
                d="M 10 70 Q 40 60 70 45 T 130 55 T 190 35 T 210 30"
                stroke="#6366F1"
                strokeWidth="2.5"
                fill="none"
              />

              {/* LSTM Forecast Dashed Line */}
              <path
                d="M 210 30 Q 240 20 270 15 T 290 10"
                stroke="#22D3EE"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* Current Node Point */}
              <circle cx="210" cy="30" r="4" fill="#22D3EE" />
              <circle cx="210" cy="30" r="8" fill="rgba(34, 211, 238, 0.3)" />
            </svg>
          </div>

          {/* Neural Network Flow Box */}
          <div
            style={{
              backgroundColor: '#151B2B',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              gap: '6px'
            }}
          >
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Neural Pipeline
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-main)', marginTop: '4px' }}>
              <span style={{ padding: '2px 6px', backgroundColor: '#1E293B', borderRadius: '4px' }}>Data</span>
              <span style={{ color: 'var(--accent-primary)' }}>→</span>
              <Cpu size={14} color="var(--accent-ai)" />
              <span style={{ color: 'var(--accent-primary)' }}>→</span>
              <span style={{ padding: '2px 6px', backgroundColor: 'rgba(34, 211, 238, 0.15)', color: 'var(--accent-ai)', borderRadius: '4px', fontWeight: 600 }}>Forecast</span>
            </div>

            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Multi-layer LSTM Architecture
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
