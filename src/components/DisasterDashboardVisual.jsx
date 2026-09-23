import React from 'react';
import { 
  AlertTriangle, ShieldAlert, Users, Radio, MapPin, 
  Activity, CheckCircle2, ChevronRight, Bell
} from 'lucide-react';

export const DisasterDashboardVisual = () => {
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
      {/* Mock Browser/App Header */}
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
          <ShieldAlert size={16} color="#EF4444" />
          <span style={{ fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '13px' }}>
            DisasterResponse OS
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ padding: '2px 8px', borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#EF4444', fontWeight: 600, fontSize: '11px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            LIVE SYSTEM
          </span>
        </div>
      </div>

      {/* Main Dashboard Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', minHeight: '260px' }}>
        {/* Left Sidebar */}
        <div
          style={{
            backgroundColor: '#111827',
            borderRight: '1px solid var(--border-color)',
            padding: '12px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <div style={{ padding: '6px 10px', borderRadius: '6px', backgroundColor: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={13} />
            <span>Dashboard</span>
          </div>
          <div style={{ padding: '6px 10px', borderRadius: '6px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertTriangle size={13} />
            <span>Incidents</span>
          </div>
          <div style={{ padding: '6px 10px', borderRadius: '6px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={13} />
            <span>Rescue Requests</span>
          </div>
          <div style={{ padding: '6px 10px', borderRadius: '6px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Radio size={13} />
            <span>Resources</span>
          </div>
          <div style={{ padding: '6px 10px', borderRadius: '6px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Bell size={13} />
            <span>Contacts</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ padding: '14px', backgroundColor: '#0B0F19' }}>
          {/* Top Title Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              Disaster Management Dashboard
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>
              Region: Zone 4 Emergency Response
            </div>
          </div>

          {/* Metric Cards Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
            <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Active Incidents</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#EF4444', marginTop: '2px' }}>14</div>
            </div>

            <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Rescue Requests</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--accent-ai)', marginTop: '2px' }}>28</div>
            </div>

            <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Available Units</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--success-color)', marginTop: '2px' }}>42</div>
            </div>

            <div style={{ backgroundColor: '#151B2B', padding: '8px 10px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Emergency Alerts</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#F59E0B', marginTop: '2px' }}>3</div>
            </div>
          </div>

          {/* Abstract GIS Region Map Simulation */}
          <div
            style={{
              backgroundColor: '#151B2B',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              padding: '12px',
              position: 'relative',
              height: '110px',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
              Live GIS Incident Grid
            </div>

            {/* Grid Node Visuals */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#273449" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50%" y1="70%" x2="80%" y2="40%" stroke="#273449" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="35%" y1="20%" x2="70%" y2="80%" stroke="#273449" strokeWidth="1.5" />
            </svg>

            {/* Map Markers */}
            <div style={{ position: 'absolute', top: '35%', left: '20%', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(239, 68, 68, 0.2)', padding: '2px 6px', borderRadius: '12px', border: '1px solid #EF4444' }}>
              <MapPin size={12} color="#EF4444" />
              <span style={{ fontSize: '10px', color: '#EF4444', fontWeight: 700 }}>High Priority Incident</span>
            </div>

            <div style={{ position: 'absolute', top: '65%', left: '48%', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(34, 211, 238, 0.2)', padding: '2px 6px', borderRadius: '12px', border: '1px solid #22D3EE' }}>
              <MapPin size={12} color="#22D3EE" />
              <span style={{ fontSize: '10px', color: '#22D3EE', fontWeight: 600 }}>Rescue Team Alpha</span>
            </div>

            <div style={{ position: 'absolute', top: '25%', left: '72%', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(245, 158, 11, 0.2)', padding: '2px 6px', borderRadius: '12px', border: '1px solid #F59E0B' }}>
              <AlertTriangle size={12} color="#F59E0B" />
              <span style={{ fontSize: '10px', color: '#F59E0B', fontWeight: 600 }}>Emergency Alert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
