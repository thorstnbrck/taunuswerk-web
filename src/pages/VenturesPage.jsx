import React, { useState } from 'react';
import { Link } from '../router';
import TiltGlassCard from '../components/TiltGlassCard';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Wrench,
  Brain,
  Flame,
  Check,
  Send,
  Building2,
  Cpu,
  ShoppingBag,
  CreditCard,
  Hammer,
  Layers,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';

export default function VenturesPage({ onOpenFunnel }) {
  // Pitch funnel form state
  const [submissionType, setSubmissionType] = useState('prototype'); // 'prototype' or 'classic'
  const [prototypeLink, setPrototypeLink] = useState('');
  const [startupName, setStartupName] = useState('');
  const [sector, setSector] = useState('Handwerk / Vor-Ort');
  const [phase, setPhase] = useState('Idee / Pre-Seed');
  const [problemSolution, setProblemSolution] = useState('');
  const [needs, setNeeds] = useState(['Kapital', 'Marketing & Go-to-Market']);
  const [founderName, setFounderName] = useState('');
  const [email, setEmail] = useState('');
  const [deckLink, setDeckLink] = useState('');
  const [isNeurodivergent, setIsNeurodivergent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Active sector filter for the interactive sectors grid
  const [activeSectorFilter, setActiveSectorFilter] = useState('all');

  const sectorsList = [
    {
      id: 'handwerk',
      tag: 'Handwerk / Vor-Ort',
      title: 'Handwerk & Vor-Ort-Services',
      icon: Hammer,
      accentColor: '#FB923C',
      bgColor: 'rgba(251, 146, 60, 0.12)',
      desc: 'Smarte Montagedienste, mobile Werkstätten, moderne Dienstleister.',
      thesis: 'Echtes Handwerk skaliert mit digitalen Prozessen, moderner Termin-Logik und Vor-Ort-Apps.',
      focusExamples: ['Mobile Handwerker-Hubs', 'Smarte Ausbaubetriebe', 'Moderne Sanitär- & Klimatechnik']
    },
    {
      id: 'brands',
      tag: 'Regionale Brand',
      title: 'Regionale Macher & Brands',
      icon: Building2,
      accentColor: '#F43F5E',
      bgColor: 'rgba(244, 63, 94, 0.12)',
      desc: 'D2C-Marken und Traditionsbetriebe mit Skalierungspotenzial.',
      thesis: 'Starke regionale Verankerung gepaart mit moderner Content-Engine und direktem Kundenkontakt.',
      focusExamples: ['Traditionsmanufakturen', 'Lokale Genuss-Marken', 'Spezialisierte Produktlinien']
    },
    {
      id: 'tech',
      tag: 'Tech / SaaS',
      title: 'Tech & Digital Hubs',
      icon: Cpu,
      accentColor: '#38BDF8',
      bgColor: 'rgba(56, 189, 248, 0.12)',
      desc: 'B2B-SaaS, No-Code/Low-Code-Plattformen, KI-getriebene Workflows.',
      thesis: 'Software-Werkzeuge, die echte Arbeitsabläufe radikal vereinfachen und sofortigen ROI liefern.',
      focusExamples: ['Handwerker-Apps', 'Regionale Marktplätze', 'Automatisierte Dispatch-Tools']
    },
    {
      id: 'fintech',
      tag: 'FinTech',
      title: 'FinTech',
      icon: CreditCard,
      accentColor: '#10B981',
      bgColor: 'rgba(16, 185, 129, 0.12)',
      desc: 'Smarte Payment-Flows, finanzielle Infrastruktur und datenbasierte Tools.',
      thesis: 'Voll regulierte Erfahrung: Schnelle Rechnungsstellung, Vor-Ort-Kartenzahlung und Liquiditätssteuerung.',
      focusExamples: ['Point-of-Sale Payment', 'Mobile Factoring für KMU', 'Rechnungs-Automation']
    },
    {
      id: 'ecommerce',
      tag: 'E-Commerce',
      title: 'E-Commerce',
      icon: ShoppingBag,
      accentColor: '#818CF8',
      bgColor: 'rgba(129, 140, 248, 0.12)',
      desc: 'Skalierbare Shop-Konzepte mit hoher Kundenbindung und klarer Markenstory.',
      thesis: 'Wirtschaftliche Unit-Economics, organische Video-Reichweite und nachhaltige Wiederkaufsraten.',
      focusExamples: ['Nischen-Shops mit Community', 'Direktvertrieb für Manufakturen', 'Abo-Modelle']
    }
  ];

  const sectorOptions = [
    'Handwerk / Vor-Ort',
    'Regionale Brand',
    'Tech / SaaS',
    'FinTech',
    'E-Commerce'
  ];

  const phaseOptions = [
    'Idee / Pre-Seed',
    'Seed / Laufender Betrieb',
    'Unternehmensnachfolge'
  ];

  const needsOptions = [
    'Kapital',
    'Marketing & Go-to-Market',
    'Tech- & Prozess-Support',
    'Sparring'
  ];

  const toggleNeed = (need) => {
    if (needs.includes(need)) {
      setNeeds(needs.filter((n) => n !== need));
    } else {
      setNeeds([...needs, need]);
    }
  };

  const scrollToPitch = () => {
    const el = document.getElementById('pitch-funnel');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFokus = () => {
    const el = document.getElementById('investment-fokus');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!startupName.trim()) {
      newErrors.startupName = 'Bitte Namen deines Vorhabens / Betriebs angeben';
    }
    if (submissionType === 'prototype' && !prototypeLink.trim()) {
      newErrors.prototypeLink = 'Bitte Link zum Prototyp, Repo oder Demo angeben';
    }
    if (!problemSolution.trim()) {
      newErrors.problemSolution = 'Bitte beschreibe kurz, was ihr baut (2-3 Sätze)';
    }
    if (!founderName.trim()) {
      newErrors.founderName = 'Bitte deinen Namen angeben';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Bitte gültige E-Mail-Adresse angeben';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const filteredSectors = activeSectorFilter === 'all'
    ? sectorsList
    : sectorsList.filter((s) => s.id === activeSectorFilter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 2 }}>
      {/* Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link
          to="/"
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.92rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>← Zurück zur Taunuswerk Hauptseite</span>
        </Link>
        <span style={{ color: 'var(--text-muted)' }}>/</span>
        <span style={{ color: 'var(--text-headline)', fontWeight: 700, fontSize: '0.92rem' }}>
          Taunuswerk Ventures
        </span>
      </div>

      {/* 2. HERO-SECTION (Layered Glass Card) */}
      <section style={{ paddingTop: '5px' }}>
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 40px auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <span
              className="glass-pill"
              style={{
                padding: '8px 22px',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.88)',
                borderColor: 'rgba(251, 146, 60, 0.35)',
                color: '#BE185D'
              }}
            >
              <Sparkles size={16} color="#FB923C" />
              <span>Taunuswerk Ventures · Smart Capital & Sweat Equity</span>
            </span>
          </div>

          <h1 className="hero-title-black" style={{ marginBottom: '16px' }}>
            Wir investieren Kapital. Und packen selbst mit an.
          </h1>

          <div
            className="hero-subtitle"
            style={{
              maxWidth: '820px',
              margin: '0 auto 28px auto',
              fontSize: 'clamp(1.05rem, 2vw, 1.22rem)',
              lineHeight: 1.65,
              fontWeight: 500,
              color: '#334155'
            }}
          >
            Kein passives Geld, keine schlauen Ratschläge von der Seitenlinie: Wir investieren Kapital, operative Macher-Skills und 15 Jahre Erfahrung aus Tech, FinTech, E-Commerce - und dem modernen Handwerk. Von der regionalen Werkbank bis zum digitalen Skalieren.
          </div>

          {/* Quick-Stats Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <span className="glass-pill" style={{ background: 'rgba(255, 255, 255, 0.82)', fontSize: '0.86rem' }}>
              <span style={{ color: '#10B981', fontSize: '1.05rem', lineHeight: 1 }}>●</span>
              <span>Pre-Seed & Seed Tickets</span>
            </span>
            <span className="glass-pill" style={{ background: 'rgba(255, 255, 255, 0.82)', fontSize: '0.86rem' }}>
              <Wrench size={14} color="#FB923C" />
              <span>15 Jahre Operator-DNA</span>
            </span>
            <span className="glass-pill" style={{ background: 'rgba(255, 255, 255, 0.82)', fontSize: '0.86rem' }}>
              <MapPin size={14} color="#38BDF8" />
              <span>Rhein-Main & Digital</span>
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToPitch}
              className="btn-primary"
              style={{ padding: '14px 30px', fontSize: '1rem' }}
            >
              <span>Startup / Vorhaben pitchen</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={scrollToFokus}
              className="btn-secondary"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <span>Investment-Fokus ansehen</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card */}
        <TiltGlassCard
          index={0}
          maxTilt={3}
          style={{
            position: 'relative',
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.52)',
            boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.1), 0 0 20px rgba(255, 255, 255, 0.85) inset',
            border: '1px solid rgba(255, 255, 255, 0.85)'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              minHeight: '380px',
              maxHeight: '460px'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Macher an der Werkbank - Präzision, Handwerk und Ingenieurskunst"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.1) 50%, transparent 80%)'
              }}
            />

            {/* Floating Overlay Badge 1 */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                padding: '16px 22px',
                maxWidth: '340px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FB923C 0%, #F43F5E 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0
                }}
              >
                <TrendingUp size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>Ticket-Größe</div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-headline)' }}>Pre-Seed bis frühe Expansion</div>
              </div>
            </div>

            {/* Floating Overlay Badge 2 */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                padding: '12px 18px',
                background: 'rgba(255, 255, 255, 0.92)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Wrench size={16} color="#FB923C" />
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                Kapital + Taten
              </span>
            </div>
          </div>
        </TiltGlassCard>
      </section>

      {/* 3. DAS MODELL: 3 SÄULEN DER BETEILIGUNG (Bento-Grid) */}
      <section>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <Layers size={14} color="#FB923C" />
            <span>Das Beteiligungsmodell</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', marginBottom: '14px', color: '#0F172A' }}>
            Drei Säulen für dein Vorhaben.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.08rem' }}>
            Wir beteiligen uns dort, wo Kapital durch echte Hebelwirkung multipliziert wird.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {/* Säule 1 */}
          <TiltGlassCard
            index={0}
            maxTilt={5}
            style={{
              padding: '34px 28px',
              borderRadius: '26px',
              background: 'rgba(255, 255, 255, 0.78)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.12)', color: '#047857', fontWeight: 700, fontSize: '0.82rem', marginBottom: '18px' }}>
                <span>💰</span>
                <span>Kapital</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#0F172A' }}>
                Smart Capital
              </h3>
              <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Gezielte Tickets für Pre-Seed-, Seed- und frühe Wachstumsphasen. Wir sichern deinen Runway, finanzieren Betriebsnachfolgen oder modernisieren deinen Maschinen- und Tool-Park.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#047857', fontWeight: 600 }}>
              <Check size={16} />
              <span>Verlässliche Gesellschafter-Struktur</span>
            </div>
          </TiltGlassCard>

          {/* Säule 2 */}
          <TiltGlassCard
            index={1}
            maxTilt={5}
            shimmerBorder={true}
            style={{
              padding: '34px 28px',
              borderRadius: '26px',
              background: 'rgba(255, 255, 255, 0.82)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(251, 146, 60, 0.14)', color: '#C2410C', fontWeight: 700, fontSize: '0.82rem', marginBottom: '18px' }}>
                <span>🛠</span>
                <span>Werkbank-Skills</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#0F172A' }}>
                Hands-on Power (Sweat Equity)
              </h3>
              <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Wir schauen nicht nur ins Reporting, wir bauen mit: Go-to-Market-Strategien, hochkonvertierende Content-Engines, Web-Plattformen und maßgeschneiderte No-Code-Workflows direkt aus unserem Studio.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#C2410C', fontWeight: 600 }}>
              <Check size={16} />
              <span>Voller Zugriff auf das Taunuswerk-Team</span>
            </div>
          </TiltGlassCard>

          {/* Säule 3 */}
          <TiltGlassCard
            index={2}
            maxTilt={5}
            style={{
              padding: '34px 28px',
              borderRadius: '26px',
              background: 'rgba(255, 255, 255, 0.78)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(129, 140, 248, 0.14)', color: '#4338CA', fontWeight: 700, fontSize: '0.82rem', marginBottom: '18px' }}>
                <span>🧠</span>
                <span>Sparring auf Augenhöhe</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#0F172A' }}>
                15 Jahre Operator-Erfahrung
              </h3>
              <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Keine Berater-Theorie. Wir kennen die Hochphasen und Krisen aus reguliertem FinTech, skaliertem E-Commerce, Software-Builds und dem operativen Handwerk. Sparring von Gründern für Gründer.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#4338CA', fontWeight: 600 }}>
              <Check size={16} />
              <span>Direkter Draht zu den Entscheidungsträgern</span>
            </div>
          </TiltGlassCard>
        </div>
      </section>

      {/* 4. DEEP-DIVE: WERKBANK-VENTURES (Handwerk & Regionaler Fokus) */}
      <section>
        <div
          className="glass-panel border-shimmer-card"
          style={{
            padding: 'clamp(36px, 5vw, 60px)',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(254, 243, 199, 0.45) 50%, rgba(254, 226, 226, 0.45) 100%)',
            boxShadow: '0 24px 60px -15px rgba(245, 158, 11, 0.15), 0 0 24px rgba(255, 255, 255, 0.9) inset'
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <span
              className="glass-pill"
              style={{
                marginBottom: '18px',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#D97706',
                borderColor: 'rgba(245, 158, 11, 0.4)'
              }}
            >
              <Flame size={15} color="#D97706" />
              <span>Unser Alleinstellungsmerkmal: Handwerk, Vor-Ort & Nachfolge</span>
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '18px', color: '#0F172A' }}>
              Vom Blaumann zum Business-Case: Warum wir Handwerk lieben.
            </h2>

            <p style={{ color: '#334155', fontSize: '1.12rem', lineHeight: 1.7 }}>
              Klassische VCs suchen das nächste Social Network in Berlin-Mitte und verstehen keine Baustellen. Wir investieren dort, wo echte Substanz geschaffen wird: im regionalen Handwerk, in smarten Vor-Ort-Services und bei anstehenden Unternehmensnachfolgen. Viele Betriebe scheitern nicht an handwerklicher Qualität, sondern an Zettelwirtschaft, fehlendem Social-Recruiting und unsichtbarem Marketing. Wir bringen Kapital mit und bauen mit dir das digitale Fundament.
            </p>
          </div>

          {/* 3 Fokus-Pfeiler */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {/* Pfeiler A */}
            <TiltGlassCard
              index={0}
              maxTilt={4}
              style={{
                padding: '26px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Pfeiler A
              </div>
              <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#0F172A' }}>
                Nachfolge 2.0
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Gesunde Betriebe übernehmen, Tradition sichern und Prozesse per Web-App digitalisieren.
              </p>
            </TiltGlassCard>

            {/* Pfeiler B */}
            <TiltGlassCard
              index={1}
              maxTilt={4}
              style={{
                padding: '26px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#F43F5E', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Pfeiler B
              </div>
              <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#0F172A' }}>
                Social Recruiting
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Betriebe in den attraktivsten Arbeitgeber der Region verwandeln - Bewerber auf dem Smartphone abholen statt Stellenanzeigen drucken.
              </p>
            </TiltGlassCard>

            {/* Pfeiler C */}
            <TiltGlassCard
              index={2}
              maxTilt={4}
              style={{
                padding: '26px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Pfeiler C
              </div>
              <h3 style={{ fontSize: '1.18rem', marginBottom: '10px', color: '#0F172A' }}>
                Werkzeuge aus der Praxis
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Wir investieren in Macher, die digitale Tools bauen, die Meister und Gesellen auf der Baustelle in 10 Sekunden bedienen können.
              </p>
            </TiltGlassCard>
          </div>
        </div>
      </section>

      {/* 5. MODUL: PROTOTYP-SPARRING ("Hyperfocus Hub · Von Prototyp zu Business") */}
      <section>
        <div
          className="glass-panel pulse-glow-violet-blue"
          style={{
            padding: 'clamp(36px, 5vw, 60px)',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(243, 232, 255, 0.72) 45%, rgba(224, 242, 254, 0.65) 100%)',
            border: '1.5px solid rgba(167, 139, 250, 0.65)',
            transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <span
              className="glass-pill"
              style={{
                marginBottom: '18px',
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#7C3AED',
                borderColor: 'rgba(139, 92, 246, 0.45)',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.12)'
              }}
            >
              <Brain size={16} color="#7C3AED" />
              <span>🧠 Hyperfocus Hub · Von Prototyp zu Business</span>
            </span>

            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '18px', color: '#0F172A' }}>
              Nachtschicht mit KI eskaliert? Wir geben Feedback in Stunden statt Wochen.
            </h2>

            <p style={{ color: '#334155', fontSize: '1.14rem', lineHeight: 1.75, maxWidth: '800px', margin: '0 auto' }}>
              Es ist die beste Zeit für Macher: Dank generativer KI stampfen kreative Köpfe heute in wenigen Nächten funktionierende Web-Apps, Tools und Plattformen aus dem Boden. Doch oft folgt auf das gebaute Tool die Wand: Go-to-Market, Vertrieb, Bürokratie. Bevor das Momentum verfliegt und der Prototyp in der Schublade landet - wir fangen es auf.
            </p>
          </div>

          {/* 3 Schritte als Step-Progress-Cards (Horizontaler Flow) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}
          >
            {/* Schritt 1 */}
            <TiltGlassCard
              index={0}
              maxTilt={4}
              style={{
                padding: '28px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(196, 181, 253, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 12px 28px -8px rgba(124, 58, 237, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #7C3AED, #6366F1)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 14px rgba(124, 58, 237, 0.3)'
                  }}
                >
                  01
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Schritt 1
                </span>
              </div>
              <h3 style={{ fontSize: '1.22rem', marginBottom: '10px', color: '#0F172A', fontWeight: 700 }}>
                1. Link rüberwerfen
              </h3>
              <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                Kein 40-seitiges Pitchdeck. Schick uns deinen Klick-Dummy, deine Live-Demo oder dein Repo.
              </p>
            </TiltGlassCard>

            {/* Schritt 2 */}
            <TiltGlassCard
              index={1}
              maxTilt={4}
              style={{
                padding: '28px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(167, 139, 250, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 12px 28px -8px rgba(99, 102, 241, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #6366F1, #38BDF8)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 14px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  02
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Schritt 2
                </span>
              </div>
              <h3 style={{ fontSize: '1.22rem', marginBottom: '10px', color: '#0F172A', fontWeight: 700 }}>
                2. Ehrlicher Realitäts-Check
              </h3>
              <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                20 Minuten kostenloses Macher-Sparring. Gibt es einen Markt? Wer zahlt dafür? Wo hakt es?
              </p>
            </TiltGlassCard>

            {/* Schritt 3 */}
            <TiltGlassCard
              index={2}
              maxTilt={4}
              style={{
                padding: '28px 24px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid rgba(125, 211, 252, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 12px 28px -8px rgba(56, 189, 248, 0.12)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #38BDF8, #10B981)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 14px rgba(56, 189, 248, 0.3)'
                  }}
                >
                  03
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Schritt 3
                </span>
              </div>
              <h3 style={{ fontSize: '1.22rem', marginBottom: '10px', color: '#0F172A', fontWeight: 700 }}>
                3. Klare Optionen
              </h3>
              <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                Wenn das Ding trägt, steigen wir operativ ein (Sweat Equity/Kapital) oder docken dich an spezialisierte Partner aus unserem Kollektiv an.
              </p>
            </TiltGlassCard>
          </div>

          {/* Quick-Jump Action Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => {
                setSubmissionType('prototype');
                scrollToPitch();
              }}
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                boxShadow: '0 10px 24px -4px rgba(124, 58, 237, 0.4)',
                padding: '14px 28px',
                fontSize: '1rem'
              }}
            >
              <span>Prototyp jetzt zum Sparring einreichen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. ALLE FOKUS-SEKTOREN (Interaktive Filter / Grid) */}
      <section id="investment-fokus" style={{ scrollMarginTop: '110px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
          <span className="glass-pill" style={{ marginBottom: '14px' }}>
            <TrendingUp size={14} color="#38BDF8" />
            <span>Investment-Fokus</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', marginBottom: '14px', color: '#0F172A' }}>
            In diese 5 Bereiche investieren wir.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.08rem' }}>
            Wähle einen Sektor, um unsere Anlagethese und typische Einsatzfelder zu filtern.
          </p>
        </div>

        {/* Interactive Filter Chips */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <button
            type="button"
            className={`chip-btn ${activeSectorFilter === 'all' ? 'selected' : ''}`}
            onClick={() => setActiveSectorFilter('all')}
          >
            <span>Alle Sektoren (5)</span>
          </button>
          {sectorsList.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`chip-btn ${activeSectorFilter === item.id ? 'selected' : ''}`}
              onClick={() => setActiveSectorFilter(item.id)}
            >
              <span>{item.tag}</span>
            </button>
          ))}
        </div>

        {/* Grid of Sector Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
          {filteredSectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <TiltGlassCard
                key={s.id}
                index={idx}
                maxTilt={4}
                style={{
                  padding: '30px 26px',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.82)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: s.bgColor,
                        color: s.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: s.accentColor }}>
                      {s.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#0F172A' }}>
                    {s.title}
                  </h3>

                  <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {s.desc}
                  </p>

                  <div style={{ padding: '12px 14px', borderRadius: '14px', background: 'rgba(248, 250, 252, 0.75)', border: '1px solid rgba(226, 232, 240, 0.7)', fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                    <strong style={{ color: '#0F172A' }}>These: </strong>
                    {s.thesis}
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Typische Anwendungsfelder:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {s.focusExamples.map((ex) => (
                        <li key={ex} style={{ fontSize: '0.86rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: s.accentColor, fontSize: '0.9rem' }}>✓</span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSector(s.tag);
                    scrollToPitch();
                  }}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  <span>Vorhaben in {s.tag} pitchen</span>
                  <ArrowRight size={14} />
                </button>
              </TiltGlassCard>
            );
          })}
        </div>
      </section>

      {/* 6. DER PITCH-FUNNEL: SCHLANK & FAIR */}
      <section id="pitch-funnel" style={{ scrollMarginTop: '110px' }}>
        <div
          className="glass-panel border-shimmer-card"
          style={{
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '32px',
            background: 'rgba(255, 255, 255, 0.88)',
            maxWidth: '860px',
            margin: '0 auto',
            boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.12)'
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.35)'
                }}
              >
                <CheckCircle2 size={34} />
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '14px', color: '#0F172A' }}>
                Eingegangen auf der Werkbank.
              </h2>

              <p style={{ color: '#334155', fontSize: '1.12rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 28px auto' }}>
                Wir prüfen die Unterlagen sorgfältig und melden uns innerhalb von <strong>48 Stunden</strong> für ein 20-minütiges Gründer-Sparring bei dir.
              </p>

              {/* Receipt Summary Card */}
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: '18px',
                  background: 'rgba(248, 250, 252, 0.85)',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  maxWidth: '540px',
                  margin: '0 auto 30px auto',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div><strong>Art des Vorhabens:</strong> {submissionType === 'prototype' ? '⚡️ KI-Prototyp & Schnelles Sparring' : '🏛 Klassisches Venture-Kapital / Nachfolge'}</div>
                <div><strong>Vorhaben:</strong> {startupName}</div>
                {submissionType === 'prototype' && prototypeLink && (
                  <div style={{ wordBreak: 'break-all' }}>
                    <strong>Prototyp-Link:</strong>{' '}
                    <a href={prototypeLink.startsWith('http') ? prototypeLink : `https://${prototypeLink}`} target="_blank" rel="noopener noreferrer" style={{ color: '#7C3AED', textDecoration: 'underline', fontWeight: 600 }}>
                      {prototypeLink}
                    </a>
                  </div>
                )}
                <div><strong>Branche:</strong> {sector}</div>
                <div><strong>Phase:</strong> {phase}</div>
                <div><strong>Gründer:</strong> {founderName} ({email})</div>
                <div><strong>Bedarf:</strong> {needs.join(', ')}</div>
                {isNeurodivergent && (
                  <div style={{ color: '#7C3AED', fontWeight: 700, paddingTop: '4px', borderTop: '1px dashed rgba(167, 139, 250, 0.5)' }}>
                    🧠 Neurodiverses Gründerteam / ADHS (Fokus auf Struktur &amp; Sparring aktiviert)
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setSubmissionType('prototype');
                  setPrototypeLink('');
                  setStartupName('');
                  setProblemSolution('');
                  setFounderName('');
                  setEmail('');
                  setDeckLink('');
                  setIsNeurodivergent(false);
                }}
                className="btn-secondary"
                style={{ padding: '12px 24px' }}
              >
                <RotateCcw size={16} />
                <span>Weiteres Vorhaben einreichen</span>
              </button>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <span className="glass-pill" style={{ marginBottom: '14px' }}>
                  <Send size={14} color="#FB923C" />
                  <span>Unkomplizierter Pitch</span>
                </span>

                <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.7rem)', marginBottom: '12px', color: '#0F172A' }}>
                  Pitch dein Vorhaben an die Werkbank.
                </h2>

                <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
                  Kein 40-seitiges Deck nötig. Gib uns die Kernfakten - wir melden uns mit ehrlichem Macher-Feedback.
                </p>
              </div>

              <form onSubmit={handlePitchSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                {/* 0. Art des Vorhabens (Radio-Filter / Schnell-Wahlschalter) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    Art des Vorhabens *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                    {/* Option 1: KI-Prototyp */}
                    <button
                      type="button"
                      onClick={() => setSubmissionType('prototype')}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '20px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        border: submissionType === 'prototype'
                          ? '2px solid #7C3AED'
                          : '1px solid rgba(203, 213, 225, 0.7)',
                        background: submissionType === 'prototype'
                          ? 'linear-gradient(135deg, rgba(245, 243, 255, 0.98) 0%, rgba(238, 242, 255, 0.92) 100%)'
                          : 'rgba(255, 255, 255, 0.72)',
                        boxShadow: submissionType === 'prototype'
                          ? '0 8px 24px -4px rgba(124, 58, 237, 0.2)'
                          : 'none',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: submissionType === 'prototype' ? '6px solid #7C3AED' : '2px solid #94A3B8',
                          background: '#FFFFFF',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: 800, color: submissionType === 'prototype' ? '#4C1D95' : '#0F172A', fontSize: '0.94rem', marginBottom: '4px' }}>
                          ⚡️ KI-Prototyp &amp; Sparring
                        </div>
                        <div style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.45 }}>
                          Ich habe einen fertigen KI-Prototyp und brauche schnelles Sparring &amp; Struktur
                        </div>
                      </div>
                    </button>

                    {/* Option 2: Klassisches Venture-Kapital */}
                    <button
                      type="button"
                      onClick={() => setSubmissionType('classic')}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '20px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        border: submissionType === 'classic'
                          ? '2px solid #2563EB'
                          : '1px solid rgba(203, 213, 225, 0.7)',
                        background: submissionType === 'classic'
                          ? 'linear-gradient(135deg, rgba(239, 246, 255, 0.98) 0%, rgba(240, 253, 250, 0.92) 100%)'
                          : 'rgba(255, 255, 255, 0.72)',
                        boxShadow: submissionType === 'classic'
                          ? '0 8px 24px -4px rgba(37, 99, 235, 0.2)'
                          : 'none',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                      }}
                    >
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: submissionType === 'classic' ? '6px solid #2563EB' : '2px solid #94A3B8',
                          background: '#FFFFFF',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      />
                      <div>
                        <div style={{ fontWeight: 800, color: submissionType === 'classic' ? '#1E40AF' : '#0F172A', fontSize: '0.94rem', marginBottom: '4px' }}>
                          🏛 Venture &amp; Nachfolge
                        </div>
                        <div style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.45 }}>
                          Ich suche klassisches Venture-Kapital / Nachfolge-Partner
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Dynamisches Feld: Hervorgehoben bei Option 1 (Prototyp) */}
                {submissionType === 'prototype' && (
                  <div
                    style={{
                      padding: '20px 22px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(245, 243, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)',
                      border: '1.5px solid #8B5CF6',
                      boxShadow: '0 8px 24px rgba(139, 92, 246, 0.15)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                      <label htmlFor="prototype-link" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4C1D95' }}>
                        Link zum Prototyp / Live-Demo (URL, Testzugang oder Repo) *
                      </label>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#7C3AED', background: 'rgba(124, 58, 237, 0.1)', padding: '2px 8px', borderRadius: '100px' }}>
                        Prio-Review
                      </span>
                    </div>
                    <input
                      id="prototype-link"
                      type="text"
                      placeholder="https://... (Vercel-Link, GitHub, Figma, Loom oder Live-URL)"
                      value={prototypeLink}
                      onChange={(e) => setPrototypeLink(e.target.value)}
                      className="form-input"
                      style={{
                        background: '#FFFFFF',
                        borderColor: errors.prototypeLink ? '#F43F5E' : 'rgba(167, 139, 250, 0.6)',
                        boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)'
                      }}
                    />
                    {errors.prototypeLink ? (
                      <p style={{ color: '#F43F5E', fontSize: '0.82rem', marginTop: '4px' }}>{errors.prototypeLink}</p>
                    ) : (
                      <p style={{ color: '#6D28D9', fontSize: '0.8rem', marginTop: '6px' }}>
                        Tipp: Du kannst auch Zugangsdaten oder kurze Anmerkungen direkt im Beschreibungsfeld ergänzen.
                      </p>
                    )}
                  </div>
                )}

                {/* 1. Name of Startup / Betrieb */}
                <div>
                  <label htmlFor="startup-name" style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '8px' }}>
                    1. Name deines Vorhabens / Betriebs *
                  </label>
                  <input
                    id="startup-name"
                    type="text"
                    placeholder="z.B. Holzwerk Digital GmbH oder MeisterApp"
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                    className="form-input"
                    style={{ borderColor: errors.startupName ? '#F43F5E' : undefined }}
                  />
                  {errors.startupName && (
                    <p style={{ color: '#F43F5E', fontSize: '0.82rem', marginTop: '4px' }}>{errors.startupName}</p>
                  )}
                </div>

                {/* 2. Chip-Auswahl Branche */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    2. In welcher Branche bewegt ihr euch?
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {sectorOptions.map((opt) => {
                      const isSelected = sector === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          className={`chip-btn ${isSelected ? 'selected' : ''}`}
                          onClick={() => setSector(opt)}
                        >
                          {isSelected && <Check size={14} />}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Chip-Auswahl Phase */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    3. Aktuelle Phase
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {phaseOptions.map((opt) => {
                      const isSelected = phase === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          className={`chip-btn ${isSelected ? 'selected' : ''}`}
                          onClick={() => setPhase(opt)}
                        >
                          {isSelected && <Check size={14} />}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Textarea: Problem & Lösung */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <label htmlFor="problem-solution" style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                      4. Was baut ihr und welches Problem löst ihr? *
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2-3 Sätze</span>
                  </div>
                  <textarea
                    id="problem-solution"
                    rows={3}
                    placeholder="Worum geht es konkret? Wer ist eure Zielgruppe und was macht euer Angebot einzigartig?"
                    value={problemSolution}
                    onChange={(e) => setProblemSolution(e.target.value)}
                    className="form-textarea"
                    style={{ borderColor: errors.problemSolution ? '#F43F5E' : undefined }}
                  />
                  {errors.problemSolution && (
                    <p style={{ color: '#F43F5E', fontSize: '0.82rem', marginTop: '4px' }}>{errors.problemSolution}</p>
                  )}
                </div>

                {/* 5. Multi-Select: Was braucht ihr aktuell am meisten? */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    5. Was braucht ihr aktuell am meisten? (Mehrfachauswahl möglich)
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {needsOptions.map((opt) => {
                      const isSelected = needs.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          className={`chip-btn ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleNeed(opt)}
                        >
                          {isSelected && <Check size={14} />}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Special Support Tag: Neurodiverses Gründerteam / ADHS */}
                <div>
                  <div
                    style={{
                      padding: '16px 20px',
                      borderRadius: '18px',
                      background: isNeurodivergent ? 'rgba(237, 233, 254, 0.7)' : 'rgba(255, 255, 255, 0.75)',
                      border: isNeurodivergent ? '1.5px solid #8B5CF6' : '1px solid rgba(226, 232, 240, 0.85)',
                      transition: 'all 0.2s ease',
                      boxShadow: isNeurodivergent ? '0 4px 16px rgba(139, 92, 246, 0.15)' : 'none'
                    }}
                  >
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: isNeurodivergent ? '#4C1D95' : 'var(--text-headline)',
                        userSelect: 'none'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isNeurodivergent}
                        onChange={(e) => setIsNeurodivergent(e.target.checked)}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#8B5CF6',
                          cursor: 'pointer'
                        }}
                      />
                      <span>
                        🧠 <strong>Neurodiverses Gründerteam / ADHS</strong> (Fokus auf Struktur &amp; Sparring)
                      </span>
                    </label>
                  </div>
                </div>

                {/* 7. Kontaktdaten & Unterlagen */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
                    7. Kontaktdaten & Unterlagen
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Dein Name (Gründer/in) *"
                        value={founderName}
                        onChange={(e) => setFounderName(e.target.value)}
                        className="form-input"
                        style={{ borderColor: errors.founderName ? '#F43F5E' : undefined }}
                      />
                      {errors.founderName && (
                        <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>{errors.founderName}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="E-Mail-Adresse *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        style={{ borderColor: errors.email ? '#F43F5E' : undefined }}
                      />
                      {errors.email && (
                        <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="url"
                        placeholder="Website- oder Pitchdeck-Link (optional)"
                        value={deckLink}
                        onChange={(e) => setDeckLink(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div style={{ paddingTop: '8px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px 28px',
                      fontSize: '1.04rem',
                      cursor: isSubmitting ? 'wait' : 'pointer',
                      background: submissionType === 'prototype'
                        ? 'linear-gradient(135deg, #7C3AED, #4F46E5)'
                        : undefined,
                      boxShadow: submissionType === 'prototype'
                        ? '0 10px 25px -4px rgba(124, 58, 237, 0.4)'
                        : undefined
                    }}
                  >
                    {isSubmitting ? (
                      <span>Wird an die Werkbank übertragen...</span>
                    ) : (
                      <>
                        <span>{submissionType === 'prototype' ? 'Prototyp zum Sparring einreichen →' : 'Pitch einreichen →'}</span>
                      </>
                    )}
                  </button>

                  {/* SLA-Badge unter dem Button */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      marginTop: '16px',
                      padding: '10px 18px',
                      borderRadius: '100px',
                      background: 'rgba(236, 253, 245, 0.9)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      color: '#065F46',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      maxWidth: 'fit-content',
                      margin: '16px auto 0 auto',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.1)'
                    }}
                  >
                    <span className="sla-pulse-dot" />
                    <span>
                      {submissionType === 'prototype'
                        ? 'Blitz-Feedback: Bei Prototyp-Einreichungen melden wir uns in der Regel innerhalb weniger Stunden.'
                        : 'Blitz-Feedback: Wir melden uns verlässlich innerhalb von 48 Stunden bei dir.'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px', marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                    <span>🔒 100% vertraulich behandelt</span>
                    <span>⚡️ Kein Agentur-Wasserkopf</span>
                    <span>🤝 Direktes Sparring mit Machern</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* 7. FOOTER-VERLINKUNG & BREADCRUMB */}
      <section style={{ textAlign: 'center', padding: '10px 0' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-headline)',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: 700,
            padding: '12px 24px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.2s ease'
          }}
        >
          <span>← Zurück zur Taunuswerk Hauptseite</span>
        </Link>
      </section>
    </div>
  );
}
