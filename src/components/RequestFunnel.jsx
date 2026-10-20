import React, { useState } from 'react';
import { Send, Sparkles, Check, Clock, Phone, Mail, User, Layers, HelpCircle } from 'lucide-react';

export default function RequestFunnel({ onSubmitted }) {
  const [category, setCategory] = useState('Kampagne / Event');
  const [idea, setIdea] = useState('');
  const [timeframe, setTimeframe] = useState('So schnell wie möglich');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    'Kampagne / Event',
    'Digitales Portal / Web-Tool',
    'Content & Video',
    'Sonstiges'
  ];

  const timeframes = [
    'So schnell wie möglich',
    'Nächste 1–3 Monate',
    'Noch offen'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Bitte gib deinen Namen oder Firma an';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse an';
    if (!idea.trim()) newErrors.idea = 'Bitte beschreibe kurz deine Idee (2–3 Sätze)';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitted) {
        onSubmitted({
          category,
          idea,
          timeframe,
          name,
          email,
          phone
        });
      }
    }, 600);
  };

  return (
    <div id="anfrage" className="glass-panel" style={{ padding: '40px', maxWidth: '860px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative ambient corner glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(244, 63, 94, 0.15) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}
      />

      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span className="glass-pill">
            <Sparkles size={14} color="#F43F5E" />
            <span>Direktes Sparring · 15 Min. Kickoff</span>
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '14px' }}>
          Idee einreichen. Fundament bauen.
        </h2>
        <p style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Unverbindlich ausfüllen – ich melde mich innerhalb von 24 Stunden mit Feedback und den Terminvorschlägen für den 15-Minuten-Kickoff.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {/* Step 1: Category Chips */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '12px' }}>
            1. In welchem Themenfeld liegt dein Vorhaben?
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`chip-btn ${category === cat ? 'selected' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {category === cat && <Check size={14} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Idea Textarea */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
            <label htmlFor="idea-input" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-headline)' }}>
              2. Deine Idee in 2–3 Sätzen
            </label>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zielgruppe & Kernziel</span>
          </div>
          <textarea
            id="idea-input"
            rows={4}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Worum geht es konkret? Wer soll erreicht oder aktiviert werden und was ist das wichtigste Ziel des Vorhabens?"
            className="form-textarea"
            style={{
              borderColor: errors.idea ? '#F43F5E' : undefined,
              resize: 'vertical'
            }}
          />
          {errors.idea && (
            <p style={{ color: '#F43F5E', fontSize: '0.82rem', marginTop: '6px', fontWeight: 500 }}>
              {errors.idea}
            </p>
          )}
        </div>

        {/* Step 3: Timeframe Chips */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '12px' }}>
            3. Geplanter Zeitrahmen
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {timeframes.map((time) => (
              <button
                type="button"
                key={time}
                className={`chip-btn ${timeframe === time ? 'selected' : ''}`}
                onClick={() => setTimeframe(time)}
              >
                {timeframe === time && <Check size={14} />}
                <span>{time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Contact Information */}
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '12px' }}>
            4. Deine Kontaktdaten
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Name / Firma *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '42px',
                    borderColor: errors.name ? '#F43F5E' : undefined
                  }}
                />
                <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
              {errors.name && (
                <p style={{ color: '#F43F5E', fontSize: '0.8rem', marginTop: '4px' }}>{errors.name}</p>
              )}
            </div>

            <div>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  placeholder="E-Mail-Adresse *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  style={{
                    paddingLeft: '42px',
                    borderColor: errors.email ? '#F43F5E' : undefined
                  }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
              {errors.email && (
                <p style={{ color: '#F43F5E', fontSize: '0.8rem', marginTop: '4px' }}>{errors.email}</p>
              )}
            </div>

            <div>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  placeholder="Telefon (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '42px' }}
                />
                <Phone size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button & Assurance */}
        <div style={{ paddingTop: '8px' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '16px 24px',
              fontSize: '1.05rem',
              cursor: isSubmitting ? 'wait' : 'pointer',
              opacity: isSubmitting ? 0.8 : 1
            }}
          >
            {isSubmitting ? (
              <span>Wird übermittelt...</span>
            ) : (
              <>
                <span>Idee ins Konzept-Werk schicken</span>
                <Send size={18} />
              </>
            )}
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '16px', fontSize: '0.82rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
            <span>🔒 Daten bleiben 100% vertraulich</span>
            <span>⚡️ 24h Reaktionsgarantie</span>
            <span>🎯 500 € Festpreis ohne Folgezwang</span>
          </div>
        </div>
      </form>
    </div>
  );
}
