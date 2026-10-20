import React, { useState } from 'react';
import { useRouter, Link } from '../router';
import { Sparkles, ChevronDown, Menu, X, Compass, Video, Music, Layers } from 'lucide-react';

export default function Navbar({ onOpenFunnel }) {
  const { currentPath, navigate } = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { title: 'Standort- & Kampagnen', path: '/standort-kampagnen', icon: Compass, desc: 'Bürgeransprache & Aktivierung' },
    { title: 'Content & Social Video', path: '/content-video', icon: Video, desc: 'Reels, Reportagen & Serien' },
    { title: 'Creative Audio & Sound', path: '/creative-audio', icon: Music, desc: 'Audio-Hooks & AI-Music' },
    { title: 'Digital Hubs & MVP', path: '/digital-hubs', icon: Layers, desc: 'Portale & Web-Apps schnell live' },
  ];

  const handleActionClick = () => {
    if (onOpenFunnel) {
      onOpenFunnel();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="floating-dock-nav">
        <nav className="dock-content" aria-label="Hauptnavigation">
          {/* Logo */}
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <span>TAUNUSWERK</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <Link 
                to="/#konzept-werk" 
                className="nav-link-item"
                onClick={() => {
                  if (currentPath !== '/') {
                    navigate('/#konzept-werk');
                  } else {
                    const el = document.getElementById('konzept-werk');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Konzept-Werk
              </Link>
            </li>

            {/* Services Dropdown with seamless hover bridge */}
            <li 
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button"
                className={`nav-link-item ${currentPath.startsWith('/standort') || currentPath.startsWith('/content') || currentPath.startsWith('/creative') || currentPath.startsWith('/digital') ? 'active' : ''}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  letterSpacing: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Leistungen
                <ChevronDown size={14} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {/* Seamless wrapper bridging the hover area */}
              {servicesOpen && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '8px',
                    width: '320px',
                    zIndex: 200
                  }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.97)',
                      backdropFilter: 'blur(32px)',
                      WebkitBackdropFilter: 'blur(32px)',
                      border: '1px solid rgba(255, 255, 255, 0.95)',
                      padding: '12px',
                      borderRadius: '20px',
                      boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.7), 0 0 16px rgba(255, 255, 255, 0.9) inset',
                      animation: 'fadeIn 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {services.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setServicesOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '10px 12px',
                              borderRadius: '14px',
                              textDecoration: 'none',
                              color: 'var(--text-headline)',
                              transition: 'all 0.15s ease',
                              background: currentPath === item.path ? 'rgba(255, 255, 255, 0.95)' : 'transparent'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'}
                            onMouseLeave={(e) => {
                              if (currentPath !== item.path) e.currentTarget.style.background = 'transparent';
                            }}
                          >
                            <div style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '10px',
                              background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15), rgba(244, 63, 94, 0.15))',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#F43F5E'
                            }}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.title}</div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link to="/ueber-uns" className="nav-link-item">
                Über uns
              </Link>
            </li>
          </ul>

          {/* Action Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleActionClick}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.88rem' }}
            >
              <Sparkles size={15} />
              <span>Idee einreichen</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="btn-secondary"
              style={{
                display: 'none',
                padding: '8px',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
              id="mobile-nav-toggle"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            background: 'rgba(15, 23, 42, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="glass-panel"
            style={{
              padding: '28px',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div className="brand-logo">
                <span>TAUNUSWERK</span>
              </div>
              <button
                className="btn-secondary"
                style={{ padding: '6px', width: '36px', height: '36px', borderRadius: '50%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <Link 
              to="/" 
              className="nav-link-item" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.05rem', padding: '12px' }}
            >
              Startseite
            </Link>

            <Link 
              to="/#konzept-werk" 
              className="nav-link-item" 
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/#konzept-werk');
              }}
              style={{ fontSize: '1.05rem', padding: '12px' }}
            >
              Das Konzept-Werk
            </Link>

            <div style={{ borderTop: '1px solid rgba(203, 213, 225, 0.4)', paddingTop: '12px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0 12px 8px 12px' }}>
                Leistungen
              </div>
              {services.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '8px 12px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: currentPath === item.path ? '#F43F5E' : 'var(--text-headline)'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link 
              to="/ueber-uns" 
              className="nav-link-item" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.05rem', padding: '12px' }}
            >
              Über uns
            </Link>

            <div style={{ marginTop: '12px' }}>
              <button
                onClick={handleActionClick}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                <Sparkles size={18} />
                <span>Idee einreichen</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #mobile-nav-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
