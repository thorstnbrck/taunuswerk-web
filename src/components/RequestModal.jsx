import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Check, User, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

const SPRING_PHYSICS = { type: 'spring', stiffness: 260, damping: 24 };

export default function RequestModal({ isOpen, onClose, onSubmitted }) {
  const [category, setCategory] = useState('Kampagne / Event');
  const [idea, setIdea] = useState('');
  const [timeframe, setTimeframe] = useState('So schnell wie möglich');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const dialogRef = useRef(null);

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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

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
      onSubmitted({
        category,
        idea,
        timeframe,
        name,
        email,
        phone
      });
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="glass-dialog"
      closedby="any"
      aria-labelledby="request-modal-title"
      style={{ maxWidth: '820px', width: 'calc(100% - 24px)' }}
    >
      <div 
        className="dialog-card border-shimmer-card"
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(28px, 4vw, 44px)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="btn-secondary"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            padding: 0,
            borderRadius: '50%',
            zIndex: 10
          }}
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <span className="glass-pill" style={{ color: '#047857', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <Sparkles size={14} color="#10B981" />
              <span>100% kostenloser & unverbindlicher 15-Minuten-Kickoff</span>
            </span>
          </div>

          <h2 id="request-modal-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)', marginBottom: '12px' }}>
            Idee einreichen. Fundament bauen.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Beschreibe kurz dein Vorhaben. Ich melde mich innerhalb von 24 Stunden mit Terminvorschlägen für unser kostenloses 15-Minuten-Erstgespräch.
          </p>
        </div>

        {/* The Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          {/* Step 1: Category Chips */}
          <div>
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
              1. In welchem Themenfeld liegt dein Vorhaben?
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => {
                const isSelected = category === cat;
                return (
                  <motion.button
                    type="button"
                    key={cat}
                    className={`chip-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setCategory(cat)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ scale: isSelected ? 1.02 : 1 }}
                    transition={SPRING_PHYSICS}
                  >
                    {isSelected && (
                      <span style={{ display: 'inline-flex' }}>
                        <Check size={14} />
                      </span>
                    )}
                    <span>{cat}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Idea Textarea */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
              <label htmlFor="modal-idea-input" style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)' }}>
                2. Deine Idee in 2–3 Sätzen
              </label>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zielgruppe & Kernziel</span>
            </div>
            <textarea
              id="modal-idea-input"
              rows={3}
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Worum geht es konkret? Was soll erreicht werden?"
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
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
              3. Geplanter Zeitrahmen
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {timeframes.map((time) => {
                const isSelected = timeframe === time;
                return (
                  <motion.button
                    type="button"
                    key={time}
                    className={`chip-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setTimeframe(time)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ scale: isSelected ? 1.02 : 1 }}
                    transition={SPRING_PHYSICS}
                  >
                    {isSelected && (
                      <span style={{ display: 'inline-flex' }}>
                        <Check size={14} />
                      </span>
                    )}
                    <span>{time}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Contact Information */}
          <div>
            <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '10px' }}>
              4. Deine Kontaktdaten
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              <div>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Name / Firma *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    style={{
                      paddingLeft: '40px',
                      borderColor: errors.name ? '#F43F5E' : undefined
                    }}
                  />
                  <User size={17} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
                {errors.name && (
                  <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>{errors.name}</p>
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
                      paddingLeft: '40px',
                      borderColor: errors.email ? '#F43F5E' : undefined
                    }}
                  />
                  <Mail size={17} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
                {errors.email && (
                  <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>{errors.email}</p>
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
                    style={{ paddingLeft: '40px' }}
                  />
                  <Phone size={17} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              transition={SPRING_PHYSICS}
              style={{
                width: '100%',
                padding: '16px 24px',
                fontSize: '1.02rem',
                cursor: isSubmitting ? 'wait' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <span>Wird übermittelt...</span>
              ) : (
                <>
                  <span>Kostenloses 15-Minuten-Kickoff anfragen</span>
                  <Send size={17} />
                </>
              )}
            </motion.button>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '14px', fontSize: '0.8rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
              <span>✓ 100% kostenlos & unverbindlich</span>
              <span>✓ 24h Reaktionsgarantie</span>
              <span>✓ Konzept-Werk 500 € nur bei Beauftragung</span>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}
