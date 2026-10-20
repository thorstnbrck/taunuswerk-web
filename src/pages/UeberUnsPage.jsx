import React from 'react';
import { motion } from 'framer-motion';
import { useRouter, Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import { UserCheck, Sparkles, ArrowRight, MessageSquare, PhoneCall, Network, Award } from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function UeberUnsPage({ onOpenFunnel }) {
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
          Über uns
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
          <span className="glass-pill" style={{ marginBottom: '18px', color: '#BE185D', borderColor: 'rgba(244, 63, 94, 0.3)' }}>
            <UserCheck size={15} />
            <span>Haltung · Macher-Mentalität</span>
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '18px', lineHeight: 1.18 }}>
            Stratege an der Werkbank.
          </h1>

          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Warum ein erfahrener Generalist mit Spezialisten-Netzwerk jede träge Agentur schlägt.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_PHYSICS}
            onClick={handleStart}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem', willChange: 'transform' }}
          >
            <Sparkles size={18} />
            <span>Lass uns dein nächstes Projekt zimmern</span>
          </motion.button>
        </div>

        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '340px', boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)' }}>
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
            alt="Strategisches Arbeiten mit Fokus und Weitblick"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </TiltGlassCard>

      {/* Die 3 Säulen */}
      <div>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '12px' }}>
            Die drei Säulen von Taunuswerk
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Unsere Arbeitsphilosophie für spürbare Resultate und absolute Verlässlichkeit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Säule 1 */}
          <TiltGlassCard index={0} maxTilt={6} style={{ padding: '34px', borderRadius: '26px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(251, 146, 60, 0.15)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <MessageSquare size={24} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Säule 01
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
              Klartext statt Fachchinesisch
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.65 }}>
              Ehrliche Deadlines, verbindliche Budgets, machbare Pläne. Bei uns gibt es keine aufgeblasenen Pitch-Folien, sondern glasklare Zusagen.
            </p>
          </TiltGlassCard>

          {/* Säule 2 */}
          <TiltGlassCard index={1} maxTilt={6} style={{ padding: '34px', borderRadius: '26px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <PhoneCall size={24} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F43F5E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Säule 02
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
              Direkter Draht
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.65 }}>
              Du sprichst direkt mit dem Kopf, der die Fäden zieht – ohne Zwischenebenen, Junior-Account-Manager oder stille Post im Hintergrund.
            </p>
          </TiltGlassCard>

          {/* Säule 3 */}
          <TiltGlassCard index={2} maxTilt={6} style={{ padding: '34px', borderRadius: '26px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(56, 189, 248, 0.15)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Network size={24} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
              Säule 03
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
              Das Kollektiv im Rücken
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.65 }}>
              So wendig wie ein Freelancer, so schlagkräftig wie eine Agentur. Für jedes Gewerk ziehen wir exakt die Spezialisten hinzu, die dein Projekt braucht.
            </p>
          </TiltGlassCard>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <TiltGlassCard
        index={1}
        maxTilt={3}
        style={{
          padding: '48px',
          borderRadius: '32px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 242, 242, 0.7) 100%)'
        }}
      >
        <span className="glass-pill" style={{ marginBottom: '16px' }}>
          <Award size={15} color="#F43F5E" />
          <span>Handwerk & Digitalität vereint</span>
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '14px' }}>
          Lass uns dein nächstes Projekt zimmern.
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
          Egal ob du eine vage Idee im Kopf hast oder ein akutes Problem lösen willst: Der erste Schritt ist ein unverbindlicher 15-Minuten-Fokus-Call.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_PHYSICS}
          onClick={handleStart}
          className="btn-primary"
          style={{ padding: '15px 32px', fontSize: '1.05rem', willChange: 'transform' }}
        >
          <span>Idee einreichen & Kickoff buchen</span>
          <ArrowRight size={18} />
        </motion.button>
      </TiltGlassCard>
    </div>
  );
}
