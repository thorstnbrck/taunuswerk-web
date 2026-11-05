import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AuroraCanvas from './AuroraCanvas';

// Konfiguriertes Passwort (kann auch über VITE_SITE_PASSWORD in .env überschrieben werden)
const DEFAULT_PASSWORD = import.meta.env.VITE_SITE_PASSWORD || '1337';
const STORAGE_KEY = 'taunuswerk_preview_access_1337';

export default function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    // 1. Prüfen ob bereits in localStorage gespeichert
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === 'granted') {
      setIsAuthenticated(true);
      return;
    }

    // 2. Prüfen ob Passwort als URL-Parameter übergeben wurde (z.B. ?pass=taunuswerk)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const passParam = urlParams.get('pass');
      if (passParam && passParam.toLowerCase() === DEFAULT_PASSWORD.toLowerCase()) {
        localStorage.setItem(STORAGE_KEY, 'granted');
        setIsAuthenticated(true);
      }
    } catch {
      // Ignoriere Fehler beim Parsen der URL
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.trim().toLowerCase() === DEFAULT_PASSWORD.toLowerCase()) {
      localStorage.setItem(STORAGE_KEY, 'granted');
      setError(false);
      setIsAuthenticated(true);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <AuroraCanvas />

      <div
        className={`glass-panel ${isShaking ? 'shake-animation' : ''}`}
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: 'clamp(32px, 5vw, 44px)',
          borderRadius: '28px',
          background: 'rgba(255, 255, 255, 0.88)',
          boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.15), 0 0 24px rgba(255, 255, 255, 0.9) inset',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Lock Icon Badge */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #0F172A, #334155)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto',
            boxShadow: '0 12px 28px -6px rgba(15, 23, 42, 0.25)'
          }}
        >
          <Lock size={28} />
        </div>

        {/* Pill Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
          <span
            className="glass-pill"
            style={{
              padding: '6px 14px',
              fontSize: '0.8rem',
              color: '#0F172A',
              borderColor: 'rgba(15, 23, 42, 0.15)'
            }}
          >
            <Sparkles size={13} color="#FB923C" />
            <span>Taunuswerk Vorschau</span>
          </span>
        </div>

        <h1
          style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.02em'
          }}
        >
          Geschützter Bereich
        </h1>

        <p
          style={{
            color: '#475569',
            fontSize: '0.94rem',
            lineHeight: 1.55,
            marginBottom: '26px'
          }}
        >
          Diese Seite befindet sich im internen Review. Bitte gib das Freigabe-Passwort ein, um den Entwurf anzusehen.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              placeholder="Passwort eingeben..."
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                if (error) setError(false);
              }}
              autoFocus
              className="form-input"
              style={{
                paddingLeft: '44px',
                borderColor: error ? '#F43F5E' : undefined,
                background: '#FFFFFF',
                boxShadow: error ? '0 0 0 3px rgba(244, 63, 94, 0.15)' : undefined
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: error ? '#F43F5E' : '#94A3B8',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <KeyRound size={18} />
            </div>
          </div>

          {error && (
            <p style={{ color: '#F43F5E', fontSize: '0.84rem', margin: 0, fontWeight: 600 }}>
              Falsches Passwort. Bitte versuche es erneut.
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px 20px',
              fontSize: '1rem',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <span>Zugang freischalten</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '24px',
            fontSize: '0.8rem',
            color: '#64748B'
          }}
        >
          <ShieldCheck size={14} color="#10B981" />
          <span>Taunuswerk Studio Preview</span>
        </div>
      </div>
    </div>
  );
}
