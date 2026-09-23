import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        zIndex: 100,
        backgroundColor: 'rgba(11, 15, 25, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Suresh.dev Homepage"
          style={{
            fontSize: '22px',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            color: 'var(--text-main)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          Suresh<span style={{ color: 'var(--accent-primary)' }}>.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href={profileData.resumeUrl}
            download="Mandamanedi_Suresh_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: '8px 18px', fontSize: '14px' }}
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '8px',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            backgroundColor: '#0B0F19',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeInDown 250ms ease forwards',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profileData.resumeUrl}
            download="Mandamanedi_Suresh_Resume.pdf"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%', marginTop: '8px' }}
          >
            <FileText size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      )}

      {/* Embedded Responsive CSS for Navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};
