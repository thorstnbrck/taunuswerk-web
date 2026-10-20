import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import { Compass, Sparkles, ArrowRight, Users, Target, Share2 } from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function StandortKampagnenPage({ onOpenFunnel }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      {/* Breadcrumb / Category Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          Startseite
        </Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--text-headline)', fontWeight: 600, fontSize: '0.9rem' }}>
          Standort- & Kampagnen-Marketing
        </span>
      </div>

      {/* Hero Card */}
      <TiltGlassCard
        index={0}
        maxTilt={3.5}
        shimmerBorder
        style={{
          padding: 'clamp(32px, 5vw, 56px)',
          borderRadius: '32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}
      >
        <div>
          <span className="glass-pill" style={{ marginBottom: '18px', color: '#EA580C', borderColor: 'rgba(251, 146, 60, 0.3)' }}>
            <Compass size={15} />
            <span>01 · Regional & Wirksam</span>
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '18px', lineHeight: 1.18 }}>
            Kampagnen, die vor Ort ankommen – digital und auf der Straße.
          </h1>

          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Von Bürgerbeteiligung bis Employer Branding: Wir mobilisieren Menschen mit Haltung und System.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_PHYSICS}
            onClick={onOpenFunnel}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem' }}
          >
            <Sparkles size={18} />
            <span>Kostenloses Kickoff vereinbaren</span>
          </motion.button>
        </div>

        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '340px', boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)' }}>
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
            alt="Standort- und Kampagnenmarketing vor Ort"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </TiltGlassCard>

      {/* Leistungs-Module */}
      <div>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '12px' }}>
            Konkrete Leistungs-Module
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Pragmatische Werkzeuge für regionale Reichweite und echte Aktivierung.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <TiltGlassCard index={0} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.15)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Strategische Kampagnenmechanik & scharfe Leitbotschaften
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Keine Floskeln, sondern Botschaften, die verfangen. Wir definieren das zentrale Motto, die Hebel für Aufmerksamkeit und den genauen Zeitplan.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={1} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Share2 size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Vernetzung von Vor-Ort-Aktionen mit Social-Media-Buzz
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Die Straße befeuern und digital verlängern: Wir sorgen dafür, dass Events, Infostände und Aktionen organisch in Instagram, LinkedIn & TikTok zünden.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={2} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Users size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Zielgruppen-Recruiting & Standortmarketing
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Fachkräfte und Bürger dort ansprechen, wo sie leben. In Kooperation mit HR-Spezialisten positionieren wir deine Region oder Firma als attraktive Heimat.
            </p>
          </TiltGlassCard>
        </div>
      </div>

      {/* Kollektiv-Fokus */}
      <TiltGlassCard
        index={0}
        maxTilt={3}
        style={{
          padding: '36px',
          borderRadius: '26px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(254, 242, 242, 0.6) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Users size={26} />
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#BE185D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Das Kollektiv im Einsatz
          </div>
          <p style={{ color: 'var(--text-headline)', fontSize: '1.05rem', fontWeight: 600, marginTop: '4px' }}>
            "Gezielter Einsatz von HR- und Kommunikations-Experten aus dem Netzwerk für maximale Glaubwürdigkeit vor Ort."
          </p>
        </div>
      </TiltGlassCard>

      {/* Bottom CTA Banner */}
      <TiltGlassCard
        index={1}
        maxTilt={3}
        style={{
          padding: '40px',
          borderRadius: '28px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 247, 237, 0.7) 100%)'
        }}
      >
        <h3 style={{ fontSize: '1.7rem', marginBottom: '12px' }}>
          Aktion in Planung? Lass uns im kostenlosen Kickoff starten.
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          In 15 Minuten klären wir kostenlos deine Ziele. Bei Beauftragung steht in 7 Tagen deine fertige Kampagnenmechanik im 500 € Konzept-Werk.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_PHYSICS}
          onClick={onOpenFunnel}
          className="btn-primary"
          style={{ padding: '14px 28px' }}
        >
          <span>Kostenloses Erstgespräch buchen</span>
          <ArrowRight size={16} />
        </motion.button>
      </TiltGlassCard>
    </div>
  );
}
