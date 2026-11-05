import React from 'react';
import { Link } from '../router';
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
  Clock,
  Briefcase,
  Settings2
} from 'lucide-react';

export default function HomePage({ onOpenFunnel }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '90px' }}>
      {/* 1. HERO SECTION (Layered App-Card Layout) */}
      <section style={{ paddingTop: '10px' }}>
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px auto', position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title-black">
            Wir machen aus guten Ideen echte Projekte.
          </h1>

          <div className="hero-subtitle">
            Studio für digitale Strategie, Content &amp; Prototyping
          </div>

          <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: '#334155', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 32px auto', display: 'block', opacity: 1, visibility: 'visible' }}>
            Starke Konzepte, moderner Content und innovative Web-Tools. Für alle, die lieber echte Ergebnisse sehen als lange PowerPoints.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenFunnel}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <Sparkles size={18} />
              <span>Idee einreichen</span>
            </button>

            <button
              onClick={() => scrollToSection('showcase')}
              className="btn-secondary"
              style={{ padding: '14px 26px', fontSize: '1rem' }}
            >
              <span>Arbeiten & Showcases</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

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
            <div
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
            </div>

            {/* Floating Glass Layer Card 2: Right Top */}
            <div
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
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                Werkbank geöffnet für Q4/2026
              </span>
            </div>
          </div>
        </TiltGlassCard>
      </section>

      {/* 2. DAS FLAGGSCHIFF: "DAS KONZEPT-WERK" (mit 1px Border-Shimmer) */}
      <section id="konzept-werk" style={{ scrollMarginTop: '100px' }}>
        <div
          className="glass-panel border-shimmer-card"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden'
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
              <Sparkles size={14} color="#F43F5E" />
              <span>Schlüsselfertiger Einstieg · 500 € Festpreis (Kickoff kostenlos)</span>
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '18px', color: '#0F172A', display: 'block', opacity: 1, visibility: 'visible' }}>
              Du hast den Gedanken im Kopf. Wir bauen das Fundament.
            </h2>

            <p style={{ color: '#334155', fontSize: '1.12rem', lineHeight: 1.65, display: 'block', opacity: 1, visibility: 'visible' }}>
              Schluss mit losen Notizen. Der 15-minütige Fokus-Kickoff ist <strong>100% kostenlos</strong>. Erst wenn wir gemeinsam starten, gießen wir deinen Gedanken in 7 Tagen in einen glasklaren Masterplan für <strong>500 € Festpreis</strong> - inklusive Zielgruppen-Logik, Kanalstrategie, Tool-Setup und Meilensteinen.
            </p>
          </div>

          {/* Die 3 Phasen als transluzente Bento-Karten */}
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
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Clock size={22} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Phase 01 · 100% Kostenlos
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>15 Min. Fokus-Kickoff</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Ziel, Hebel, internes Team und dein Realisierungsbudget direkt unverbindlich abgestimmt - ohne Kosten oder Risiko.
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
                Phase 02 · 7 Tage Sprint
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>7 Tage Konstruktion</h3>
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
                Phase 03 · Schlüsselfertig
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A' }}>Werksabnahme</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                Dein schlüsselfertiger Bauplan zur sofortigen Umsetzung - für dein Inhouse-Team oder mit dem Taunuswerk-Kollektiv.
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
              <ShieldCheck size={24} color="#059669" />
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-headline)', fontSize: '1.05rem' }}>
                  500 € netto Festpreis für das Konzept
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  Kickoff 100% kostenlos · Transparenter Festpreis erst bei Beauftragung
                </div>
              </div>
            </div>

            <button
              onClick={onOpenFunnel}
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <span>Kostenloses Kickoff buchen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. LEISTUNGS-DOCK */}
      <section id="leistungen">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px auto' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Layers size={14} color="#38BDF8" />
            <span>Disziplinen & Gewerke</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px', color: '#0F172A' }}>
            Vier Säulen. Ein nahtloser Werkstatt-Standard.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Von regionaler Mobilisierung über virale Videoformate bis zu schnellen Prototypen - alles aus einer Hand konzipiert.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 01 */}
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
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#0F172A' }}>
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

          {/* Card 02 */}
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
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#0F172A' }}>
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

          {/* Card 03 */}
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
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#0F172A' }}>
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

          {/* Card 04 */}
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
              <h3 style={{ fontSize: '1.45rem', marginBottom: '10px', color: '#0F172A' }}>
                Digital Hubs & Rapid Prototyping
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Smarte Plattformen, regionale Portale und Web-Apps schnell live gebracht - vom MVP bis zum Rollout.
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

      {/* 4. SHOWCASE CASE STUDY */}
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

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '14px', color: '#0F172A' }}>
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
              <span>Kostenloser Call → 7 Tage Ausarbeitung → 500 € Konzept-Festpreis</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div>
                <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                  Der Output:
                </strong>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Aus einer vagen Idee wurde ein 6-seitiger Umsetzungsbauplan mit Kampagnen-Motto, 4-Wochen-Rollout, 3 Video-Storyboards und digitalem Vor-Ort-Leitsystem.
                </p>
              </div>

              <div>
                <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                  Das Resultat:
                </strong>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Voll besuchtes Areal, virale Vorab-Reichweite in der Region und direkte Folgebeauftragung für das Kollektiv.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenFunnel}
              className="btn-primary"
              style={{ padding: '12px 24px' }}
            >
              <span>Ähnliches Projekt anfragen</span>
              <ArrowRight size={16} />
            </button>
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
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(36px, 5vw, 56px)',
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span className="glass-pill" style={{ marginBottom: '18px' }}>
              <Users2 size={16} color="#818CF8" />
              <span>Die Werkstatt-Architektur</span>
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', color: '#0F172A' }}>
              Ein Kopf. Ein Netzwerk. Keine Reibungsverluste.
            </h2>

            <p style={{ fontSize: '1.12rem', color: '#334155', lineHeight: 1.7, marginBottom: '32px' }}>
              Ein fester Sparringspartner an der Werkbank für Konzeption und Steuerung: <strong>ich</strong>. Für die Umsetzung greift Taunuswerk auf ein eingespieltes Kollektiv spezialisierter Macher zurück - von Kamera, UI &amp; Code über HR-Recruiting bis zu strategischem Einkauf und getakteter Projektsteuerung. Maximale Kompetenz, schlanke Prozesse.
            </p>

            {/* Macher-Rollen im Kollektiv (Bento-Grid) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Obere Reihe: 3 Gewerke */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', textAlign: 'left' }}>
                <TiltGlassCard
                  index={0}
                  maxTilt={6}
                  shimmerBorder={true}
                  style={{ padding: '22px 22px', borderRadius: '22px', background: 'rgba(255, 255, 255, 0.8)' }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: 700, color: '#BE185D', background: 'rgba(244, 63, 94, 0.1)', padding: '3px 9px', borderRadius: '100px', marginBottom: '10px' }}>
                    <Video size={12} color="#F43F5E" />
                    <span>Content &amp; Film</span>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', marginBottom: '6px' }}>
                    Kamera &amp; Drohne
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Kinoreife Bilder, Social-First Framing und schneller Vor-Ort-Dreh.
                  </div>
                </TiltGlassCard>

                <TiltGlassCard
                  index={1}
                  maxTilt={6}
                  shimmerBorder={true}
                  style={{ padding: '22px 22px', borderRadius: '22px', background: 'rgba(255, 255, 255, 0.8)' }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: 700, color: '#0369A1', background: 'rgba(56, 189, 248, 0.1)', padding: '3px 9px', borderRadius: '100px', marginBottom: '10px' }}>
                    <Layers size={12} color="#0284C7" />
                    <span>Interfaces &amp; Code</span>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', marginBottom: '6px' }}>
                    UI/UX &amp; Code
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Smarte Interfaces, moderne Web-Technologien und skalierbare Architektur.
                  </div>
                </TiltGlassCard>

                <TiltGlassCard
                  index={2}
                  maxTilt={6}
                  shimmerBorder={true}
                  style={{ padding: '22px 22px', borderRadius: '22px', background: 'rgba(255, 255, 255, 0.8)' }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', fontWeight: 700, color: '#4338CA', background: 'rgba(129, 140, 248, 0.1)', padding: '3px 9px', borderRadius: '100px', marginBottom: '10px' }}>
                    <Users2 size={12} color="#6366F1" />
                    <span>Talente &amp; Region</span>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.05rem', marginBottom: '6px' }}>
                    HR- &amp; Recruiting
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Gezielte Arbeitgeberpositionierung und Ansprache von Fachkräften in der Region.
                  </div>
                </TiltGlassCard>
              </div>

              {/* Untere Reihe: 2 neue Kernprofile (Strategischer Einkauf & Prozessoptimierung) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', textAlign: 'left' }}>
                {/* Karte 1: Strategischer Einkauf & Verhandlung */}
                <TiltGlassCard
                  index={3}
                  maxTilt={5}
                  shimmerBorder={true}
                  style={{
                    padding: '24px 24px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 253, 244, 0.8) 100%)',
                    border: '1px solid rgba(167, 243, 208, 0.7)',
                    boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.08)'
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 700, color: '#065F46', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '100px', marginBottom: '12px' }}>
                    <Briefcase size={13} color="#10B981" />
                    <span>Konditionen &amp; Marge</span>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.14rem', marginBottom: '2px' }}>
                    Strategischer Einkauf &amp; Verhandlung
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#059669', marginBottom: '10px' }}>
                    Einkäuferin &amp; Verhandlungs-Profi
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    Harte Verhandlungskompetenz auf Konzernebene. Wir optimieren Lieferantenverträge, drücken Einkaufspreise und holen in B2B-Verhandlungen die Marge raus, die andere auf dem Tisch liegen lassen.
                  </div>
                </TiltGlassCard>

                {/* Karte 2: Prozessoptimierung & Projektsteuerung */}
                <TiltGlassCard
                  index={4}
                  maxTilt={5}
                  shimmerBorder={true}
                  style={{
                    padding: '24px 24px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 247, 237, 0.8) 100%)',
                    border: '1px solid rgba(254, 215, 170, 0.7)',
                    boxShadow: '0 10px 25px -5px rgba(249, 115, 22, 0.08)'
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 700, color: '#9A3412', background: 'rgba(251, 146, 60, 0.14)', padding: '4px 10px', borderRadius: '100px', marginBottom: '12px' }}>
                    <Settings2 size={13} color="#EA580C" />
                    <span>Struktur &amp; Flow</span>
                  </div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.14rem', marginBottom: '2px' }}>
                    Prozessoptimierung &amp; Projektsteuerung
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#EA580C', marginBottom: '10px' }}>
                    Projektmanager &amp; Workflow-Architekt
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    Das operative Rückgrat. Verwandelt kreatives Chaos und KI-Prototypen in getaktete, fehlerfreie Prozesse - ohne Zettelwirtschaft, mit glasklaren Übergaben und maximalem Projekttempo.
                  </div>
                </TiltGlassCard>
              </div>
            </div>

            {/* NEUES MODUL: Kognitive Vielfalt · Das Kollektiv-Prinzip */}
            <div
              className="glass-panel"
              style={{
                marginTop: '40px',
                padding: 'clamp(28px, 4vw, 42px)',
                borderRadius: '26px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(245, 243, 255, 0.78) 50%, rgba(238, 242, 255, 0.72) 100%)',
                border: '1px solid rgba(167, 139, 250, 0.45)',
                boxShadow: '0 16px 40px -10px rgba(124, 58, 237, 0.12)',
                textAlign: 'left'
              }}
            >
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 28px auto' }}>
                <span
                  className="glass-pill"
                  style={{
                    marginBottom: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: '#7C3AED',
                    borderColor: 'rgba(139, 92, 246, 0.35)'
                  }}
                >
                  <Zap size={14} color="#7C3AED" />
                  <span>Kognitive Vielfalt · Das Kollektiv-Prinzip</span>
                </span>

                <h3 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', color: '#0F172A', marginBottom: '12px' }}>
                  Zwei Denkweisen. Ein Ergebnis: Echte Wirkung.
                </h3>

                <p style={{ fontSize: '1.04rem', color: '#334155', lineHeight: 1.6 }}>
                  Große Ideen entstehen selten in linearen Schablonen - und stabile Unternehmen nicht im Chaos. Wir vereinen das Beste aus zwei Welten.
                </p>
              </div>

              {/* Dual-Card Grid (2 Spalten nebeneinander, auf Mobile untereinander) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px',
                  marginBottom: '24px'
                }}
              >
                {/* Karte Links (Kreativer Hyperfokus) */}
                <TiltGlassCard
                  index={0}
                  maxTilt={5}
                  style={{
                    padding: '24px 22px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    border: '1px solid rgba(196, 181, 253, 0.75)',
                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.1)'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#7C3AED',
                      background: 'rgba(124, 58, 237, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <span>Kreativer Ausbruch &amp; Tempo</span>
                  </div>
                  <h4 style={{ fontSize: '1.18rem', color: '#0F172A', marginBottom: '10px', fontWeight: 700 }}>
                    Kreativer Hyperfokus
                  </h4>
                  <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                    Unkonventionelle Problemlösung, blitzschnelles Erkennen von Mustern und funktionierende Prototypen, die über Nacht mit generativer KI entstehen.
                  </p>
                </TiltGlassCard>

                {/* Karte Rechts (Operative Leitplanken) */}
                <TiltGlassCard
                  index={1}
                  maxTilt={5}
                  style={{
                    padding: '24px 22px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.92)',
                    border: '1px solid rgba(147, 197, 253, 0.75)',
                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#2563EB',
                      background: 'rgba(37, 99, 235, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '100px',
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    <span>Struktur &amp; Skalierung</span>
                  </div>
                  <h4 style={{ fontSize: '1.18rem', color: '#0F172A', marginBottom: '10px', fontWeight: 700 }}>
                    Operative Leitplanken
                  </h4>
                  <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                    Strukturierte Go-to-Market-Pläne, verlässliche Prozesse, Vertriebsaufbau und die Geduld für nachhaltige, lineare Skalierung.
                  </p>
                </TiltGlassCard>
              </div>

              {/* Statement-Box darunter */}
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '18px',
                  background: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(196, 181, 253, 0.65)',
                  textAlign: 'center'
                }}
              >
                <p style={{ fontSize: '0.98rem', color: '#4C1D95', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                  In unserem Netzwerk arbeiten Macher mit und ohne ADHS Hand in Hand. Wir verbiegen niemanden, sondern lassen jedes Gehirn genau dort anpacken, wo seine größte Stärke liegt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL-TO-ACTION */}
      <section>
        <div
          className="glass-panel border-shimmer-card"
          style={{
            padding: 'clamp(36px, 5vw, 56px)',
            borderRadius: '32px',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <span className="glass-pill" style={{ marginBottom: '18px', color: '#047857', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <Sparkles size={14} color="#10B981" />
            <span>Kostenloses 15-Minuten-Kickoff</span>
          </span>

          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', marginBottom: '16px', color: '#0F172A' }}>
            Bereit für den ersten Bauplan?
          </h2>

          <p style={{ color: '#334155', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 32px auto' }}>
            Reiche deine Idee unverbindlich ein. Im kostenlosen 15-Minuten-Kickoff prüfen wir Hebel, Machbarkeit und den nächsten Schritt.
          </p>

          <button
            onClick={onOpenFunnel}
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <Sparkles size={18} />
            <span>Jetzt Idee einreichen & Kickoff sichern</span>
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px', fontSize: '0.84rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#10B981" />
              <span>100% vertraulich</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} color="#FB923C" />
              <span>24h Reaktionsgarantie</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="#38BDF8" />
              <span>Kickoff kostenlos · Konzept-Werk 500 € Festpreis</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
