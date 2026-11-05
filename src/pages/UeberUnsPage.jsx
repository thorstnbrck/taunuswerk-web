import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import {
  UserCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Network,
  Award,
  Users2,
  Briefcase,
  Settings2,
  Video,
  Layers
} from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function UeberUnsPage({ onOpenFunnel }) {
  const teamMembers = [
    {
      name: 'Thorsten Bruck',
      role: 'Gründer & Stratege an der Werkbank',
      tag: 'Strategie & Sparring',
      tagColor: '#BE185D',
      tagBg: 'rgba(244, 63, 94, 0.1)',
      desc: '15 Jahre Praxiserfahrung aus Tech, FinTech, E-Commerce und Handwerk. Dein fester Sparringspartner für Konzeption, Hebel und Gesamtsteuerung.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      isFounder: true
    },
    {
      name: '[Name Platzhalter]',
      role: 'Einkäuferin & Verhandlungs-Profi',
      tag: 'Konditionen & Marge',
      tagColor: '#065F46',
      tagBg: 'rgba(16, 185, 129, 0.12)',
      desc: 'Harte Verhandlungskompetenz auf Konzernebene. Optimiert Lieferantenverträge, drückt Einkaufspreise und holt in B2B-Verhandlungen echte Marge raus.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      name: '[Name Platzhalter]',
      role: 'Projektmanager & Workflow-Architekt',
      tag: 'Struktur & Flow',
      tagColor: '#9A3412',
      tagBg: 'rgba(251, 146, 60, 0.14)',
      desc: 'Das operative Rückgrat. Verwandelt kreative Builds in getaktete, fehlerfreie Prozesse mit glasklaren Übergaben und hohem Tempo.',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      name: '[Name Platzhalter]',
      role: 'Kamera, Drohne & Visual Storytelling',
      tag: 'Content & Film',
      tagColor: '#BE185D',
      tagBg: 'rgba(244, 63, 94, 0.1)',
      desc: 'Kinoreife Bilder, Social-First Framing und schneller Vor-Ort-Dreh für Kampagnen, die Kunden emotional packen und hängen bleiben.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      name: '[Name Platzhalter]',
      role: 'UI/UX Design & Full-Stack Code',
      tag: 'Interfaces & Web-Tools',
      tagColor: '#0369A1',
      tagBg: 'rgba(56, 189, 248, 0.12)',
      desc: 'Moderne Web-Applikationen, hochkonvertierende Landingpages und digitale Werkzeuge, die sich auf der Baustelle in 10 Sekunden bedienen lassen.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    },
    {
      name: '[Name Platzhalter]',
      role: 'HR- & Recruiting-Spezialist',
      tag: 'Fachkräfte & Region',
      tagColor: '#4338CA',
      tagBg: 'rgba(129, 140, 248, 0.12)',
      desc: 'Social-Recruiting-Funnels und gezielte Arbeitgeberpositionierung, um wechselwillige Fachkräfte direkt auf dem Smartphone abzuholen.',
      avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
      isFounder: false
    }
  ];
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

          <button
            onClick={onOpenFunnel}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem' }}
          >
            <Sparkles size={18} />
            <span>Kostenloses Kickoff vereinbaren</span>
          </button>
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
              Du sprichst direkt mit dem Kopf, der die Fäden zieht - ohne Zwischenebenen, Junior-Account-Manager oder stille Post im Hintergrund.
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

      {/* 3. Team & Kollektiv-Macher (Platzhalter) */}
      <section>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px auto' }}>
          <span className="glass-pill" style={{ marginBottom: '14px', color: '#0F172A', borderColor: 'rgba(15, 23, 42, 0.15)' }}>
            <Users2 size={15} color="#818CF8" />
            <span>Köpfe &amp; Kollektiv</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', marginBottom: '12px', color: '#0F172A' }}>
            Die Macher an der Werkbank.
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Keine anonymen Hierarchien, sondern eingespielte Spezialisten, die anpacken statt nur Folien zu präsentieren.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
          {teamMembers.map((member, idx) => (
            <TiltGlassCard
              key={idx}
              index={idx}
              maxTilt={4}
              shimmerBorder={member.isFounder}
              style={{
                padding: '28px',
                borderRadius: '26px',
                background: member.isFounder
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(254, 242, 242, 0.8) 100%)'
                  : 'rgba(255, 255, 255, 0.82)',
                border: member.isFounder ? '1.5px solid rgba(244, 63, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      boxShadow: '0 8px 20px -4px rgba(15, 23, 42, 0.15)',
                      border: '2px solid rgba(255, 255, 255, 0.95)',
                      background: 'rgba(226, 232, 240, 0.6)'
                    }}
                  >
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', marginBottom: '3px' }}>
                      {member.name}
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#475569' }}>
                      {member.role}
                    </div>
                  </div>
                </div>

                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {member.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(226, 232, 240, 0.6)' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: member.tagColor,
                    background: member.tagBg,
                    padding: '4px 10px',
                    borderRadius: '100px'
                  }}
                >
                  <span>{member.tag}</span>
                </span>

                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {member.isFounder ? 'Werkstatt-Führung' : 'Kollektiv-Partner'}
                </span>
              </div>
            </TiltGlassCard>
          ))}
        </div>
      </section>

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
          Egal ob du eine vage Idee im Kopf hast oder ein akutes Problem lösen willst: Der erste Schritt ist ein unverbindlicher, kostenloser 15-Minuten-Fokus-Call.
        </p>
        <button
          onClick={onOpenFunnel}
          className="btn-primary"
          style={{ padding: '15px 32px', fontSize: '1.05rem' }}
        >
          <span>Idee einreichen & Kickoff buchen</span>
          <ArrowRight size={18} />
        </button>
      </TiltGlassCard>
    </div>
  );
}
