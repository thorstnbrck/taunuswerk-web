import React from 'react';
import { useRouter, Link } from '../router';
import { Music, Sparkles, ArrowRight, Volume2, Headphones, Radio, Mic2 } from 'lucide-react';

export default function CreativeAudioPage({ onOpenFunnel }) {
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
          Creative Media & AI-Audio
        </span>
      </div>

      {/* Hero Card */}
      <div
        className="glass-panel"
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
          <span className="glass-pill" style={{ marginBottom: '18px', color: '#6366F1', borderColor: 'rgba(129, 140, 248, 0.3)' }}>
            <Music size={15} />
            <span>03 · Akustische Identität & Soundscapes</span>
          </span>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', marginBottom: '18px', lineHeight: 1.18 }}>
            Der richtige Ton für deine Marke.
          </h1>

          <p style={{ color: 'var(--text-body)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '32px' }}>
            Wiedererkennbare Audio-Hooks, Soundscapes und moderne KI-gestützte Musikproduktion.
          </p>

          <button
            onClick={handleStart}
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '1rem', background: 'linear-gradient(135deg, #818CF8 0%, #F43F5E 100%)' }}
          >
            <Sparkles size={18} />
            <span>Audio-Konzept für deine Kampagne anfragen</span>
          </button>
        </div>

        <div style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '340px', boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)' }}>
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80"
            alt="Moderne Musik- und Tonproduktion"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Leistungs-Module */}
      <div>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '12px' }}>
            Audio-Bausteine
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Von akustischen Brand-Signaturen bis zu dynamischen Soundtracks für Videos & Events.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div className="glass-panel glass-panel-hover" style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.15)', color: '#6366F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Volume2 size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Maßgeschneiderte Audio-Logos und Signet-Sounds
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Ein unverwechselbarer Klang in 2–3 Sekunden. Perfekt für Video-Intros, Podcasts, Apps und Point-of-Sale Momente.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover" style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.15)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Headphones size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              Dynamisches Sound-Design für Video-Reels
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Foley, Risers, Bass-Drops und Raumklang. Wir verleihen Kampagnenclips Tiefe und spürbare Wucht.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover" style={{ padding: '32px', borderRadius: '24px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
              <Radio size={22} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>
              AI-gestützte Musikkonzepte für Social Media & Events
            </h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Lizenzsicher, maßgeschneidert und budgetschonend: Modernste KI-Musikmodelle im Verbund mit handwerklichem Finetuning.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div
        className="glass-panel"
        style={{
          padding: '40px',
          borderRadius: '28px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(238, 242, 255, 0.7) 100%)'
        }}
      >
        <h3 style={{ fontSize: '1.7rem', marginBottom: '12px' }}>
          Bereit für deinen eigenen Markensound?
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Im 500 € Konzept-Werk definieren wir die Tonalität, Einsatzorte und die Produktionspipeline.
        </p>
        <button onClick={handleStart} className="btn-primary" style={{ padding: '14px 28px' }}>
          <span>Audio-Konzept anfragen</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
