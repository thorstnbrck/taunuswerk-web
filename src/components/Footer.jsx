import React from 'react';
import { useRouter, Link } from '../router';
import { Sparkles, ArrowUp, Heart } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const { currentPath, navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ padding: '0 24px 32px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div
        className="glass-panel"
        style={{
          padding: '36px 32px',
          borderRadius: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="brand-logo" style={{ marginBottom: '6px' }}>
              <span>TAUNUSWERK</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Studio für digitale Strategie, Content & Prototyping.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '10px 16px', fontSize: '0.85rem' }}
            title="Nach oben scrollen"
          >
            <span>Nach oben</span>
            <ArrowUp size={15} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(226, 232, 240, 0.6)'
          }}
        >
          {/* Main Navigation Links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 24px', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Startseite
            </Link>
            <Link 
              to="/#konzept-werk" 
              onClick={() => {
                if (currentPath !== '/') {
                  navigate('/#konzept-werk');
                } else {
                  const el = document.getElementById('konzept-werk');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}
            >
              Konzept-Werk
            </Link>
            <Link to="/standort-kampagnen" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Leistungen
            </Link>
            <Link to="/ueber-uns" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Über uns
            </Link>
          </nav>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
            <button
              type="button"
              onClick={() => onOpenLegal('impressum')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Impressum
            </button>
            <span style={{ color: 'rgba(203, 213, 225, 0.8)' }}>·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('datenschutz')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Datenschutz
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 Taunuswerk. Handwerk trifft Digital.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Gestaltet & gebaut mit Sorgfalt im Taunus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
