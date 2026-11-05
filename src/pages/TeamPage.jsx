import React from 'react';
import { Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import {
  Users2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Settings2,
  Video,
  Code2,
  Palette,
  Compass,
  Quote
} from 'lucide-react';

export default function TeamPage({ onOpenFunnel }) {
  const teamMembers = [
    {
      title: 'Konzeption, Plattformen & Venture Lead',
      tag: 'Strategie & Prototyping',
      tagColor: '#BE185D',
      tagBg: 'rgba(244, 63, 94, 0.1)',
      icon: Compass,
      role: 'Der Architekt & Übersetzer',
      text: 'Schlüsselfertige 500-€-Konzepte, digitale Werkzeuge und Venture-Architektur. Übersetzt Ideen in funktionierende Produkte.',
      quote: '„Schluss mit 40-seitigen Slides. Wir bauen das jetzt einfach.“',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      isFounder: true
    },
    {
      title: 'Strategischer Einkauf & Verhandlungsführung',
      tag: 'Konditionen & Marge',
      tagColor: '#065F46',
      tagBg: 'rgba(16, 185, 129, 0.12)',
      icon: Briefcase,
      role: 'Die Verhandlerin & Deal-Makerin',
      text: 'Verhandlungskompetenz auf Konzernebene. Sichert bessere Einkaufspreise, optimiert Lieferantenverträge und hebt versteckte Marge.',
      quote: '„Wer beim Einkauf schläft, verschenkt seinen Gewinn am ersten Tag.“',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      title: 'Projektsteuerung & Prozessoptimierung',
      tag: 'Struktur & Flow',
      tagColor: '#9A3412',
      tagBg: 'rgba(251, 146, 60, 0.14)',
      icon: Settings2,
      role: 'Der Taktgeber & Prozess-Architekt',
      text: 'Das operative Rückgrat. Verwandelt kreative Prototypen in getaktete, fehlerfreie Workflows und beseitigt Zettelwirtschaft.',
      quote: '„Kreativität ohne Prozess ist Chaos. Wir bauen Leitplanken, die skalieren.“',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      title: 'HR-Spezialist & People Strategy',
      tag: 'Recruiting & Kultur',
      tagColor: '#4338CA',
      tagBg: 'rgba(129, 140, 248, 0.12)',
      icon: Users2,
      role: 'Der Talent-Magnet & Team-Builder',
      text: 'Modernes Social Recruiting und Employer Branding für Handwerk und Startups. Holt Gesellen und Fachkräfte auf Augenhöhe ab.',
      quote: '„Fachkräftemangel ist oft nur ein Mangel an moderner Ansprache.“',
      avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      title: 'Foto, Video & Social Ads',
      tag: 'Social Content & Paid Ads',
      tagColor: '#BE185D',
      tagBg: 'rgba(244, 63, 94, 0.1)',
      icon: Video,
      role: 'Das visuelle Auge & Performance-Storyteller',
      text: 'Ungeschminkter Social Content und hochkonvertierende Ads direkt von der Werkbank und Baustelle. Scroll-Stopping-Hooks statt austauschbarer Stock-Footage.',
      quote: '„Kein Kitsch. Echte Menschen, echte Maschinen, messbare Reichweite.“',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      title: 'Fullstack Development & Code',
      tag: 'Web-Apps & APIs',
      tagColor: '#0284C7',
      tagBg: 'rgba(56, 189, 248, 0.12)',
      icon: Code2,
      role: 'Der Code-Pragmatiker',
      text: 'Skalierbare Software, robuste Schnittstellen und Web-Apps. Verwandelt Klick-Dummies in ausfallsichere Systeme.',
      quote: '„Clean Code ist gut. Code, der dem Kunden Geld einbringt, ist besser.“',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      title: 'UI/UX & Brand Design',
      tag: 'Interface & Identität',
      tagColor: '#6D28D9',
      tagBg: 'rgba(167, 139, 250, 0.14)',
      icon: Palette,
      role: 'Die Gestalterin & Interface-Expertin',
      text: 'Hochwertige Markenauftritte und intuitive Nutzerführung. Sorgt dafür, dass komplexe Tools mühelos bedienbar sind.',
      quote: '„Design ist nicht, wie es aussieht - sondern wie intuitiv es funktioniert.“',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', position: 'relative', zIndex: 2 }}>
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link
          to="/"
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          <span>Startseite</span>
        </Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--text-headline)', fontWeight: 700, fontSize: '0.9rem' }}>
          Team &amp; Kollektiv
        </span>
      </div>

      {/* 1. HERO-HEADER */}
      <section style={{ paddingTop: '5px' }}>
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <span
              className="glass-pill"
              style={{
                padding: '8px 20px',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.92)',
                borderColor: 'rgba(129, 140, 248, 0.35)',
                color: '#4338CA'
              }}
            >
              <Users2 size={16} color="#6366F1" />
              <span>Die Werkbank · Köpfe &amp; Kernkompetenzen</span>
            </span>
          </div>

          <h1
            className="hero-title-black"
            style={{
              fontSize: 'clamp(2.1rem, 4.4vw, 3.3rem)',
              marginBottom: '18px',
              lineHeight: 1.15
            }}
          >
            7 Köpfe. Ein Prinzip: Direkte Wege, messbare Resultate.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: '#334155',
              lineHeight: 1.68,
              maxWidth: '780px',
              margin: '0 auto'
            }}
          >
            Keine langen Instanzenzüge, keine endlosen E-Mail-Schleifen. Bei uns sitzen Strategie, Verhandlung, Recruiting, Code, Design und Performance-Content direkt an einem Tisch - schlank aufgestellt und mit voller Umsetzungskraft.
          </p>
        </div>
      </section>

      {/* 2. DAS 7ER BENTO-GRID */}
      <section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {teamMembers.map((member, idx) => {
            const IconComponent = member.icon;
            return (
              <TiltGlassCard
                key={idx}
                index={idx}
                maxTilt={4}
                shimmerBorder={member.isFounder}
                style={{
                  padding: '28px',
                  borderRadius: '26px',
                  background: member.isFounder
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 242, 242, 0.8) 100%)'
                    : 'rgba(255, 255, 255, 0.84)',
                  border: member.isFounder
                    ? '1.5px solid rgba(244, 63, 94, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                  boxShadow: '0 16px 36px -10px rgba(15, 23, 42, 0.08)'
                }}
              >
                <div>
                  {/* Top Row: Avatar & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        boxShadow: '0 8px 20px -4px rgba(15, 23, 42, 0.16)',
                        border: '2px solid rgba(255, 255, 255, 0.95)',
                        background: 'rgba(226, 232, 240, 0.6)'
                      }}
                    >
                      <img
                        src={member.avatarUrl}
                        alt={member.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        loading="lazy"
                      />
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: member.tagColor,
                        background: member.tagBg,
                        padding: '4px 11px',
                        borderRadius: '100px',
                        letterSpacing: '0.02em'
                      }}
                    >
                      <IconComponent size={13} color={member.tagColor} />
                      <span>{member.tag}</span>
                    </span>
                  </div>

                  {/* Card Title & Role */}
                  <h3
                    style={{
                      fontSize: '1.24rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '4px',
                      lineHeight: 1.3
                    }}
                  >
                    {member.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: member.tagColor,
                      marginBottom: '12px'
                    }}
                  >
                    {member.role}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: '#334155',
                      fontSize: '0.92rem',
                      lineHeight: 1.62,
                      margin: '0 0 16px 0'
                    }}
                  >
                    {member.text}
                  </p>
                </div>

                {/* Quote Callout */}
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '14px',
                    background: 'rgba(248, 250, 252, 0.85)',
                    borderLeft: `3px solid ${member.tagColor}`,
                    fontSize: '0.86rem',
                    fontStyle: 'italic',
                    color: '#475569',
                    lineHeight: 1.5,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}
                >
                  <Quote size={14} color={member.tagColor} style={{ flexShrink: 0, marginTop: '2px', opacity: 0.7 }} />
                  <span>{member.quote}</span>
                </div>
              </TiltGlassCard>
            );
          })}
        </div>
      </section>

      {/* 3. CLOSING-STATEMENT */}
      <section>
        <TiltGlassCard
          index={0}
          maxTilt={2.5}
          shimmerBorder={true}
          style={{
            padding: 'clamp(36px, 5vw, 52px)',
            borderRadius: '32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(240, 249, 255, 0.8) 50%, rgba(254, 242, 242, 0.8) 100%)',
            maxWidth: '920px',
            margin: '0 auto',
            boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.12)'
          }}
        >
          <span
            className="glass-pill"
            style={{
              marginBottom: '16px',
              color: '#0284C7',
              borderColor: 'rgba(56, 189, 248, 0.35)',
              background: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <Sparkles size={14} color="#0284C7" />
            <span>Feste Köpfe · Flexible Buchung</span>
          </span>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)',
              marginBottom: '14px',
              color: '#0F172A',
              fontWeight: 800
            }}
          >
            Gezielt besetzt. Modular gebucht.
          </h2>

          <p
            style={{
              color: '#334155',
              fontSize: '1.1rem',
              lineHeight: 1.68,
              maxWidth: '680px',
              margin: '0 auto 30px auto'
            }}
          >
            Je nach Projektgröße greifen wir genau auf die Köpfe zu, die du für deinen nächsten Meilenstein brauchst - vom 500-€-Sprint bis zur kompletten Venture-Begleitung. Volle Flexibilität, direkte Ansprechpartner.
          </p>

          <button
            onClick={onOpenFunnel}
            className="btn-primary"
            style={{
              padding: '16px 34px',
              fontSize: '1.04rem',
              margin: '0 auto'
            }}
          >
            <span>Projekt anfragen oder Sparring buchen</span>
            <ArrowRight size={18} />
          </button>
        </TiltGlassCard>
      </section>

      {/* Footer Backlink */}
      <div style={{ textAlign: 'center', paddingTop: '10px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-headline)',
            textDecoration: 'none',
            fontSize: '0.92rem',
            fontWeight: 700,
            padding: '12px 22px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.2s ease'
          }}
        >
          <span>← Zurück zur Startseite</span>
        </Link>
      </div>
    </div>
  );
}
