import React, { useEffect, useRef } from 'react';
import { CheckCircle2, X, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConfirmationModal({ isOpen, onClose, formData }) {
  const dialogRef = useRef(null);

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

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="glass-dialog"
      closedby="any"
      aria-labelledby="confirmation-modal-title"
    >
      <div className="dialog-card">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="btn-secondary"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '50%'
          }}
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              margin: '0 auto 16px auto',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(56, 189, 248, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#059669',
              boxShadow: '0 8px 24px -4px rgba(16, 185, 129, 0.25)'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <span className="glass-pill" style={{ marginBottom: '12px', color: '#047857', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <Sparkles size={13} color="#059669" />
            <span>Kickoff-Anfrage eingegangen · 100% kostenlos</span>
          </span>

          <h3 id="confirmation-modal-title" style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
            Eingegangen auf der Werkbank.
          </h3>
          <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6 }}>
            Ich prüfe deine Angaben und melde mich innerhalb von <strong>24 Stunden</strong> mit Terminvorschlägen für unser <strong>kostenloses 15-Minuten-Erstgespräch</strong>.
          </p>
        </div>

        {/* Summary Card */}
        {formData && (
          <div
            style={{
              background: 'rgba(248, 250, 252, 0.8)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '18px',
              padding: '18px',
              marginBottom: '24px',
              fontSize: '0.9rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 16px', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Bereich:</span>
              <strong style={{ color: 'var(--text-headline)' }}>{formData.category || 'Allgemein'}</strong>

              <span style={{ color: 'var(--text-muted)' }}>Zeitrahmen:</span>
              <strong style={{ color: 'var(--text-headline)' }}>{formData.timeframe || 'Schnellstmöglich'}</strong>

              <span style={{ color: 'var(--text-muted)' }}>Kontakt:</span>
              <strong style={{ color: 'var(--text-headline)' }}>{formData.name} ({formData.email})</strong>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Clock size={16} color="#FB923C" />
            <span>24h Reaktionszeit werktags</span>
            <ShieldCheck size={16} color="#059669" style={{ marginLeft: 'auto' }} />
            <span>Erstgespräch garantiert kostenlos</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-primary"
            style={{ width: '100%', padding: '14px', marginTop: '6px' }}
          >
            <span>Verstanden & Fenster schließen</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
