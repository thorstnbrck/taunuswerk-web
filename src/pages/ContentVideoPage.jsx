import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import { Video, Sparkles, ArrowRight, Film, Clapperboard, Eye, Users } from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function ContentVideoPage({ onOpenFunnel }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
          Startseite
        </Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--text-headline)', fontWeight: 600, fontSize: '0.9rem' }}>
          Content & Social Video
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
            <Video size={15} />
            <span>02 · Social-First & Storytelling</span>
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '18px', lineHeight: 1.18 }}>
            Content, der hängen bleibt – ohne Agentur-Wasserkopf.
          </h1>

          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Reels, Reportagen und Social-First-Serien mit Authentizität statt künstlicher Hochglanz-Langeweile.
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
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
            alt="Professionelle Video- und Content-Produktion"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </TiltGlassCard>

      {/* Leistungs-Module */}
      <div>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '12px' }}>
            Produktions-Module
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Vom ersten Hook bis zum finalen Export für TikTok, Reels & YouTube.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <TiltGlassCard index={0} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Clapperboard size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Formatentwicklung, Skripte & Storyboards
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Wiederkehrende Serienformate statt Zufallsvideos. Wir entwickeln die Erzähllogik, hooksichere Skripte und visuelle Storyboards.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={1} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.15)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Film size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Hands-on Drehs vor Ort
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Kamera, Licht, Ton und Drohne. Wir rücken mit leichtem, hocheffizientem Besteck an – nah an Menschen und echter Arbeitswirklichkeit.
            </p>
          </TiltGlassCard>

          <TiltGlassCard index={2} maxTilt={6} style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.15)', color: '#6366F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Eye size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Schnitt, Color-Grading & Untertitel
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Plattformgerechter Schnitt für maximale Watchtime, ansprechende Farblooks und dynamische Untertitel für den Sound-Off Konsum.
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
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(253, 242, 248, 0.6) 100%)',
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
            Kollektiv-Qualität
          </div>
          <p style={{ color: 'var(--text-headline)', fontSize: '1.05rem', fontWeight: 600, marginTop: '4px' }}>
            "Erfahrene Kamera- und Schnitt-Partner für professionelle Produktionen, strategisch geführt von Taunuswerk."
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
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(253, 242, 248, 0.7) 100%)'
        }}
      >
        <h3 style={{ fontSize: '1.7rem', marginBottom: '12px' }}>
          Format-Idee im Kopf? Lass uns das Drehbuch schreiben.
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Im kostenlosen 15-Minuten-Kickoff sprechen wir über deine Idee. Anschließend erhältst du dein komplettes Storyboard im 500 € Konzept-Werk.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_PHYSICS}
          onClick={onOpenFunnel}
          className="btn-primary"
          style={{ padding: '14px 28px' }}
        >
          <span>Idee einreichen & Kickoff buchen</span>
          <ArrowRight size={16} />
        </motion.button>
      </TiltGlassCard>
    </div>
  );
}
