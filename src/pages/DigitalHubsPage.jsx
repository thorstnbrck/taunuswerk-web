import React from 'react';
import { motion } from 'framer-motion';
import { useRouter, Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import { Layers, Sparkles, ArrowRight, LayoutTemplate, Cpu, Database, Users } from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function DigitalHubsPage({ onOpenFunnel }) {
  const { navigate } = useRouter();

  const handleStart = () => {
    if (onOpenFunnel) {
      onOpenFunnel();
    } else {
      navigate('/#anfrage');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          Startseite
        </Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--text-headline)', fontWeight: 600, fontSize: '0.9rem' }}>
          Digital Hubs & Rapid Prototyping
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
          <span className="glass-pill" style={{ marginBottom: '18px', color: '#0284C7', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
            <Layers size={15} />
            <span>04 · Prototyping & Plattformen</span>
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '18px', lineHeight: 1.18 }}>
            Smarte digitale Werkzeuge – schnell live, ohne endlose Zyklen.
          </h1>

          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Wir bauen regionale Plattformen, Community-Hubs und Web-Tools pragmatisch vom MVP bis zum Rollout.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_PHYSICS}
            onClick={handleStart}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem', background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)', willChange: 'transform' }}
          >
            <Sparkles size={18} />
            <span>Plattform-Idee prüfen: Ab ins Konzept-Werk für 500 €</span>
          </motion.button>
        </div>

        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '340px', boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)' }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
            alt="Moderne Softwareentwicklung und UI Design"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </TiltGlassCard>

      {/* Leistungs-Module */}
      <div>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '12px' }}>
            Entwicklungs-Module
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Agil, nutzerzentriert und ohne technische Altlasten.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <TiltGlassCard index={0} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <LayoutTemplate size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Informationsarchitektur & intuitiver User Flow
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Klares Wireframing, intuitive Klickpfade und aufgeräumte Interfaces, die Bürger und Nutzer sofort verstehen.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={1} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.15)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Cpu size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Schnelle Umsetzung mit modernen Web-Technologien
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Vite, React, Next.js oder smarte No-Code-Kombinationen – je nachdem, was am schnellsten und wirtschaftlichsten zum Ziel führt.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={2} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.15)', color: '#6366F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Database size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Stabile Schnittstellen & performante Datenstrukturen
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Sichere APIs, datenschutzkonformes Hosting in Deutschland/EU und modulare Bausteine für zukünftige Skalierung.
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
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 249, 255, 0.6) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.15)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Users size={26} />
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0369A1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Kollektiv-Code
          </div>
          <p style={{ color: 'var(--text-headline)', fontSize: '1.05rem', fontWeight: 600, marginTop: '4px' }}>
            "Senior UI-Designer und Full-Stack-Entwickler aus dem Kollektiv garantieren sauberen Code und Skalierbarkeit."
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
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.7) 100%)'
        }}
      >
        <h3 style={{ fontSize: '1.7rem', marginBottom: '12px' }}>
          Plattform-Idee prüfen: Ab ins Konzept-Werk für 500 €.
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Wir erarbeiten die Spezifikation, den Tech-Stack und eine realistische MVP-Roadmap in 7 Tagen.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_PHYSICS}
          onClick={handleStart}
          className="btn-primary"
          style={{ padding: '14px 28px', willChange: 'transform' }}
        >
          <span>Konzept-Werk starten</span>
          <ArrowRight size={16} />
        </motion.button>
      </TiltGlassCard>
    </div>
  );
}
