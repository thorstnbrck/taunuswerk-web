import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
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
      aria-labelledby="legal-modal-title"
      style={{ maxWidth: '720px' }}
    >
      <div className="dialog-card" style={{ maxHeight: '85vh', overflowY: 'auto' }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          {type === 'impressum' ? (
            <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(251, 146, 60, 0.15)', color: '#FB923C' }}>
              <FileText size={20} />
            </div>
          ) : (
            <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8' }}>
              <Shield size={20} />
            </div>
          )}
          <h3 id="legal-modal-title" style={{ fontSize: '1.4rem' }}>
            {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
          </h3>
        </div>

        {type === 'impressum' ? (
          <div style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <strong>Angaben gemäß § 5 TMG:</strong><br />
              Taunuswerk – Studio für digitale Strategie, Content & Prototyping<br />
              Inhaber: Thorsten Brück<br />
              Taunus / Rhein-Main Region<br />
              Deutschland
            </div>
            <div>
              <strong>Kontakt:</strong><br />
              E-Mail: hallo@taunuswerk.de<br />
              Web: www.taunuswerk.de
            </div>
            <div>
              <strong>Umsatzsteuer-ID:</strong><br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: In Vorbereitung / Kleinunternehmerregelung bzw. Regelbesteuerung gemäß UStG.
            </div>
            <div>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Thorsten Brück, Taunuswerk.
            </div>
            <div>
              <strong>Haftungshinweis:</strong><br />
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </div>
          </div>
        ) : (
          <div style={{ color: 'var(--text-body)', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021).
            </p>
            <div>
              <strong>1. Erhebung und Verarbeitung von Daten</strong><br />
              Wenn Sie über unser Kontaktformular oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </div>
            <div>
              <strong>2. Ihre Rechte</strong><br />
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich an die Aufsichtsbehörde wenden.
            </div>
            <div>
              <strong>3. Keine Tracking-Cookies oder Werbenetzwerke</strong><br />
              Diese Website verzichtet auf invasive Drittanbieter-Tracker und Marketing-Cookies. Die Funktionalität basiert auf sauberen Web-Standards.
            </div>
          </div>
        )}

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(226, 232, 240, 0.7)' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
            style={{ width: '100%', padding: '10px' }}
          >
            Schließen
          </button>
        </div>
      </div>
    </dialog>
  );
}
