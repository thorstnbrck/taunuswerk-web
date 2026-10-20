import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../router';
import RequestFunnel from '../components/RequestFunnel';
import TiltGlassCard from '../components/TiltGlassCard';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Video,
  Music,
  Layers,
  Hammer,
  FileCheck2,
  Users2,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function HomePage({ onFormSubmitted }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
      {/* 1. HERO SECTION (Layered App-Card Layout) */}
      <section style={{ paddingTop: '20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_PHYSICS}
          style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px auto', willChange: 'transform, opacity' }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <span className="glass-pill" style={{ padding: '8px 20px', gap: '10px' }}>
              <Sparkles size={16} color="#F43F5E" />
              <span>Studio für digitale Strategie, Content & Prototyping</span>
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.15 }}>
            Wo Ideen Substanz bekommen.
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 32px auto' }}>
            Ganzheitliche Kampagnen, scharfer Multimedia-Content und smarte digitale Tools. Für Regionen, Macher und Unternehmen – vom ersten Bauplan bis zum Rollout.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_PHYSICS}
              onClick={() => scrollToSection('anfrage')}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem', willChange: 'transform' }}
            >
              <Sparkles size={18} />
              <span>Idee ins Konzept-Werk bringen (500 €)</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_PHYSICS}
              onClick={() => scrollToSection('showcase')}
              className="btn-secondary"
              style={{ padding: '14px 26px', fontSize: '1rem', willChange: 'transform' }}
            >
              <span>Arbeiten & Showcases</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Visual: Schwebende Frosted-Glass-Karten im 3D-Layer-Stil über weichem Lichtverlauf */}
        <TiltGlassCard
          index={1}
          maxTilt={3.5}
          style={{
            position: 'relative',
            maxWidth: '1040px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.48)',
            boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.1), 0 0 20px rgba(255, 255, 255, 0.8) inset',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              minHeight: '380px',
              maxHeight: '480px'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Strategie und kreatives Schaffen im Taunuswerk"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(1.05)' }}
              loading="eager"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.45) 0%, transparent 60%)'
              }}
            />

            {/* Floating Glass Layer Card 1: Left Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_PHYSICS, delay: 0.15 }}
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                padding: '18px 24px',
                maxWidth: '320px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.15)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-pink))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  flexShrink: 0
                }}
              >
                <Zap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>7-Tage-Sprint</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-headline)' }}>Vom Gedanken zum Masterplan</div>
              </div>
            </motion.div>

            {/* Floating Glass Layer Card 2: Right Top */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_PHYSICS, delay: 0.2 }}
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div className="glow-dot"></div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                Werkbank geöffnet für Q4/2026
              </span>
            </motion.div>
          </div>
        </TiltGlassCard>
      </section>

      {/* 2. DAS FLAGGSCHIFF: "DAS KONZEPT-WERK" (mit 1px Border-Shimmer Lichtkante) */}
      <section id="konzept-werk" style={{ scrollMarginTop: '100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING_PHYSICS}
          className="glass-panel border-shimmer-card"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden',
            willChange: 'transform, opacity'
          }}
        >
          {/* Subtle Ambient Backlight */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              left: '30%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, rgba(244, 63, 94, 0.1) 60%, transparent 80%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}
          />

          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '44px', position: 'relative', zIndex: 2 }}>
            <span
              className="glass-pill"
              style={{
                marginBottom: '18px',
                background: 'rgba(255, 255, 255, 0.85)',
                color: '#BE185D',
                borderColor: 'rgba(244, 63, 94, 0.3)'
              }}
            >
              ⚡️ Schlüsselfertiger Einstieg · 500 € Festpreis
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '18px' }}>
              Du hast den Gedanken im Kopf. Wir bauen das Fundament.
            </h2>

            <p style={{ color: 'var(--text-body)', fontSize: '1.12rem', lineHeight: 1.65 }}>
              Schluss mit losen Notizen. Im Konzept-Werk gießen wir deinen Gedanken in 7 Tagen in einen glasklaren, realistischen Masterplan – inklusive Zielgruppen-Logik, Kanalstrategie, Tool-Setup und Meilensteinen.
            </p>
          </div>

          {/* Die 3 Phasen als transluzente Bento-Karten mit 3D-Tilt & Staggered Fade-Up (50ms Delay) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
            {/* Phase 1 */}
            <TiltGlassCard
              index={0}
              maxTilt={6}
              style={{
                padding: '28px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.72)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(251, 146, 60, 0.15)',
                  color: '#FB923C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Clock size={22} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FB923C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Phase 01
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>15 Min. Fokus-Kickoff</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Ziel, Hebel, internes Team und dein Realisierungsbudget direkt abgestimmt – ohne Vorgeplänkel oder Zeitverlust.
              </p>
            </TiltGlassCard>

            {/* Phase 2 */}
            <TiltGlassCard
              index={1}
              maxTilt={6}
              style={{
                padding: '28px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.72)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  color: '#F43F5E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Hammer size={22} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F43F5E', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Phase 02
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>7 Tage Konstruktion</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Ausarbeitung von Mechanik, Content-Formaten, präzisen Meilensteinen und Tool-Empfehlungen auf der Werkbank.
              </p>
            </TiltGlassCard>

            {/* Phase 3 */}
            <TiltGlassCard
              index={2}
              maxTilt={6}
              style={{
                padding: '28px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.72)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FileCheck2 size={22} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Phase 03
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>Werksabnahme</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Dein schlüsselfertiger Bauplan zur sofortigen Umsetzung – für dein Inhouse-Team oder mit dem Taunuswerk-Kollektiv.
              </p>
            </TiltGlassCard>
          </div>

          {/* Bottom Bar: Festpreis & CTA */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              padding: '20px 28px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={24} color="#F43F5E" />
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-headline)', fontSize: '1.05rem' }}>
                  500 € netto Festpreis
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  Transparent, kalkulierbar & ohne Folgeverpflichtung
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_PHYSICS}
              onClick={() => scrollToSection('anfrage')}
              className="btn-primary"
              style={{ padding: '12px 24px', willChange: 'transform' }}
            >
              <span>Idee jetzt einreichen</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 3. LEISTUNGS-DOCK (Bento-Grid aus 4 Frosted-Glass-Cards mit 3D Tilt & 50ms Stagger) */}
      <section id="leistungen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING_PHYSICS}
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px auto' }}
        >
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Layers size={14} color="#38BDF8" />
            <span>Disziplinen & Gewerke</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
            Vier Säulen. Ein nahtloser Werkstatt-Standard.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Von regionaler Mobilisierung über virale Videoformate bis zu schnellen Prototypen – alles aus einer Hand konzipiert.
          </p>
        </motion.div>

        <div className="bento-grid">
          {/* Card 01: Standort- & Kampagnen-Marketing */}
          <TiltGlassCard
            index={0}
            maxTilt={6}
            style={{
              gridColumn: 'span 6',
              padding: '32px',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="glass-pill" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>01 · Kampagnen</span>
                <Compass size={22} color="#FB923C" />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                Standort- & Kampagnen-Marketing
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Regionale Kampagnen, Bürgeransprache und Aktivierungsformate, die Menschen mobilisieren.
              </p>
            </div>

            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
                alt="Standort- & Kampagnen-Marketing"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <Link
              to="/standort-kampagnen"
              className="btn-secondary"
              style={{ justifyContent: 'space-between', width: '100%', padding: '12px 20px' }}
            >
              <span>Mehr erfahren</span>
              <ArrowRight size={16} />
            </Link>
          </TiltGlassCard>

          {/* Card 02: Content & Social Media Engine */}
          <TiltGlassCard
            index={1}
            maxTilt={6}
            style={{
              gridColumn: 'span 6',
              padding: '32px',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="glass-pill" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>02 · Video</span>
                <Video size={22} color="#F43F5E" />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                Content & Social Media Engine
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Authentische Short-Form-Videos (Reels, TikTok) und Content-Serien ohne Agentur-Wasserkopf.
              </p>
            </div>

            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
                alt="Content & Social Media Engine"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <Link
              to="/content-video"
              className="btn-secondary"
              style={{ justifyContent: 'space-between', width: '100%', padding: '12px 20px' }}
            >
              <span>Mehr erfahren</span>
              <ArrowRight size={16} />
            </Link>
          </TiltGlassCard>

          {/* Card 03: Creative Media & AI-Audio */}
          <TiltGlassCard
            index={2}
            maxTilt={6}
            style={{
              gridColumn: 'span 6',
              padding: '32px',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="glass-pill" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>03 · Audio</span>
                <Music size={22} color="#818CF8" />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                Creative Media & AI-Audio
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Wiedererkennbare Soundscapes, Audio-Logos und moderne AI-gestützte Musikproduktion.
              </p>
            </div>

            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80"
                alt="Creative Media & AI-Audio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <Link
              to="/creative-audio"
              className="btn-secondary"
              style={{ justifyContent: 'space-between', width: '100%', padding: '12px 20px' }}
            >
              <span>Mehr erfahren</span>
              <ArrowRight size={16} />
            </Link>
          </TiltGlassCard>

          {/* Card 04: Digital Hubs & Rapid Prototyping */}
          <TiltGlassCard
            index={3}
            maxTilt={6}
            style={{
              gridColumn: 'span 6',
              padding: '32px',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="glass-pill" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>04 · Digital</span>
                <Layers size={22} color="#0284C7" />
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px' }}>
                Digital Hubs & Rapid Prototyping
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Smarte Plattformen, regionale Portale und Web-Apps schnell live gebracht – vom MVP bis zum Rollout.
              </p>
            </div>

            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '180px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                alt="Digital Hubs & Rapid Prototyping"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <Link
              to="/digital-hubs"
              className="btn-secondary"
              style={{ justifyContent: 'space-between', width: '100%', padding: '12px 20px' }}
            >
              <span>Mehr erfahren</span>
              <ArrowRight size={16} />
            </Link>
          </TiltGlassCard>
        </div>
      </section>

      {/* 4. SHOWCASE CASE STUDY (Card mit Soft-Glow & 3D Tilt) */}
      <section id="showcase">
        <TiltGlassCard
          index={0}
          maxTilt={4}
          style={{
            padding: 'clamp(32px, 5vw, 48px)',
            borderRadius: '32px',
            boxShadow: '0 24px 60px -10px rgba(244, 63, 94, 0.08), 0 0 24px rgba(255, 255, 255, 0.9) inset',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="glass-pill" style={{ marginBottom: '16px', color: '#BE185D', borderColor: 'rgba(244, 63, 94, 0.25)' }}>
              Case Study · Das Konzept-Werk
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '14px' }}>
              Vom vagen Event-Plan zum schlüsselfertigen Besucher-Magneten.
            </h2>

            {/* Fact Pills */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '14px',
                background: 'rgba(251, 146, 60, 0.1)',
                color: '#C2410C',
                fontWeight: 700,
                fontSize: '0.88rem',
                marginBottom: '20px'
              }}
            >
              <span>15 Min. Call → 7 Tage Ausarbeitung → 500 € Festpreis</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div>
                <strong style={{ color: 'var(--text-headline)', display: 'block', marginBottom: '4px' }}>
                  Der Output:
                </strong>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Aus einer vagen Idee wurde ein 6-seitiger Umsetzungsbauplan mit Kampagnen-Motto, 4-Wochen-Rollout, 3 Video-Storyboards und digitalem Vor-Ort-Leitsystem.
                </p>
              </div>

              <div>
                <strong style={{ color: 'var(--text-headline)', display: 'block', marginBottom: '4px' }}>
                  Das Resultat:
                </strong>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Voll besuchtes Areal, virale Vorab-Reichweite in der Region und direkte Folgebeauftragung für das Kollektiv.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_PHYSICS}
              onClick={() => scrollToSection('anfrage')}
              className="btn-primary"
              style={{ padding: '12px 24px', willChange: 'transform' }}
            >
              <span>Ähnliches Projekt starten</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.15)', height: '100%', minHeight: '320px' }}>
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
              alt="Erfolgreiches Vor-Ort-Event mit hoher Besucherfrequenz"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        </TiltGlassCard>
      </section>

      {/* 5. DAS KOLLEKTIV-VERSPRECHEN */}
      <section id="kollektiv" style={{ scrollMarginTop: '100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING_PHYSICS}
          className="glass-panel"
          style={{
            padding: 'clamp(36px, 5vw, 56px)',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative',
            willChange: 'transform, opacity'
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span className="glass-pill" style={{ marginBottom: '18px' }}>
              <Users2 size={16} color="#818CF8" />
              <span>Die Werkstatt-Architektur</span>
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px' }}>
              Ein Kopf. Ein Netzwerk. Keine Reibungsverluste.
            </h2>

            <p style={{ fontSize: '1.12rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '36px' }}>
              Ein fester Sparringspartner an der Werkbank für Konzeption und Steuerung: <strong>ich</strong>. Für die Produktion greift Taunuswerk auf ein eingespieltes Kollektiv zurück – Kamera & Drohne, UI-Design, Full-Stack-Code und HR-/Recruiting-Spezialisten. Maximale Kompetenz, schlanke Prozesse.
            </p>

            {/* Micro Pillars with Staggered Fade-Up & 3D Tilt */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', textAlign: 'left' }}>
              <TiltGlassCard
                index={0}
                maxTilt={6}
                style={{ padding: '18px 20px', borderRadius: '18px', background: 'rgba(255, 255, 255, 0.72)', border: '1px solid rgba(255, 255, 255, 0.9)' }}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-headline)', marginBottom: '6px' }}>
                  Kamera & Drohne
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Kinoreife Bilder, Social-First Framing und schneller Vor-Ort-Dreh.
                </div>
              </TiltGlassCard>

              <TiltGlassCard
                index={1}
                maxTilt={6}
                style={{ padding: '18px 20px', borderRadius: '18px', background: 'rgba(255, 255, 255, 0.72)', border: '1px solid rgba(255, 255, 255, 0.9)' }}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-headline)', marginBottom: '6px' }}>
                  UI/UX & Code
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Smarte Interfaces, moderne Web-Technologien und skalierbare Architektur.
                </div>
              </TiltGlassCard>

              <TiltGlassCard
                index={2}
                maxTilt={6}
                style={{ padding: '18px 20px', borderRadius: '18px', background: 'rgba(255, 255, 255, 0.72)', border: '1px solid rgba(255, 255, 255, 0.9)' }}
              >
                <div style={{ fontWeight: 700, color: 'var(--text-headline)', marginBottom: '6px' }}>
                  HR- & Recruiting
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Gezielte Arbeitgeberpositionierung und Ansprache von Fachkräften in der Region.
                </div>
              </TiltGlassCard>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. ANFRAGE-FORMULAR / FUNNEL */}
      <section>
        <RequestFunnel onSubmitted={onFormSubmitted} />
      </section>
    </div>
  );
}
