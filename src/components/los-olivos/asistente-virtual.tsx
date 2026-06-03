"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const WA_NUMBER = "573233093435"

function waUrl(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

const ACTIONS = [
  { emoji: "💚", label: "Quiero afiliarme",  msg: "Hola, quiero información sobre planes de afiliación." },
  { emoji: "🌳", label: "Parque",             msg: "Hola, quiero información sobre el parque cementerio." },
  { emoji: "📋", label: "Trámites",           msg: "Hola, necesito orientación con trámites de persona fallecida." },
  { emoji: "💳", label: "Pagos",              msg: "Hola, necesito ayuda con mis pagos o acceso al portal." },
]


function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

const STYLES = `
  @keyframes lia-slide-up {
    from { opacity: 0; transform: translateY(18px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes lia-hint-in {
    from { opacity: 0; transform: translateX(10px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes lia-pulse {
    0%   { box-shadow: 0 0 0 0    rgba(1,140,88,0.45), 0 4px 20px rgba(1,140,88,0.4); }
    70%  { box-shadow: 0 0 0 14px rgba(1,140,88,0),   0 4px 20px rgba(1,140,88,0.4); }
    100% { box-shadow: 0 0 0 0    rgba(1,140,88,0),   0 4px 20px rgba(1,140,88,0.4); }
  }
  @keyframes lia-dot {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }
  @keyframes lia-fab-in {
    from { opacity: 0; transform: scale(0.7); }
    to   { opacity: 1; transform: scale(1);   }
  }

  .lia-fab {
    position: fixed;
    bottom: 24px;
    right: 20px;
    z-index: 9999;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #018c58, #016645);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  }
  .lia-fab.lia-visible {
    animation: lia-fab-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both,
               lia-pulse 2.2s ease-out 0.5s infinite;
  }
  .lia-fab.lia-open {
    animation: none !important;
    box-shadow: 0 4px 20px rgba(1,102,69,0.4);
  }

  .lia-popup {
    position: fixed;
    bottom: 88px;
    right: 20px;
    z-index: 9999;
    width: 320px;
  }
  .lia-hint {
    position: fixed;
    bottom: 88px;
    right: 20px;
    z-index: 9999;
    max-width: 220px;
  }

  @media (max-width: 640px) {
    .lia-fab   { width: 50px; height: 50px; bottom: 16px; right: 14px; }
    .lia-popup {
      width: min(290px, calc(100vw - 40px));
      right: 14px;
      bottom: 78px;
      max-height: calc(100dvh - 100px);
      overflow-y: auto;
    }
    .lia-hint  { right: 14px; bottom: 78px; max-width: min(220px, calc(100vw - 40px)); }
  }
`

export function AsistenteVirtual() {
  const [mounted, setMounted]     = useState(false)
  const [visible, setVisible]     = useState(false)
  const [isOpen, setIsOpen]       = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [introPlayed, setIntroPlayed] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  // Show FAB only when popups are closed AND user has scrolled
  useEffect(() => {
    if (!mounted) return

    const check = () => {
      const popupsBlocking = document.body.style.overflow === "hidden"
      const scrolled = window.scrollY > 60
      if (!popupsBlocking && scrolled) setVisible(true)
    }

    window.addEventListener("scroll", check, { passive: true })

    // Detect when popups close (they remove overflow:hidden from body)
    const observer = new MutationObserver(check)
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] })

    check()
    return () => {
      window.removeEventListener("scroll", check)
      observer.disconnect()
    }
  }, [mounted])

  const playOpen = () => {
    try {
      const ctx = new AudioContext()
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.connect(g); g.connect(ctx.destination)
      o.type = "sine"
      o.frequency.setValueAtTime(600, ctx.currentTime)
      o.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08)
      g.gain.setValueAtTime(0.18, ctx.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22)
      o.start(); o.stop(ctx.currentTime + 0.22)
      o.onended = () => ctx.close()
    } catch { /* sin Web Audio */ }
  }

  const playClose = () => {
    try {
      const ctx = new AudioContext()
      const o = ctx.createOscillator(); const g = ctx.createGain()
      o.connect(g); g.connect(ctx.destination)
      o.type = "sine"
      o.type = "sine"
      o.frequency.setValueAtTime(900, ctx.currentTime)
      o.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.08)
      g.gain.setValueAtTime(0.18, ctx.currentTime)
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22)
      o.start(); o.stop(ctx.currentTime + 0.22)
      o.onended = () => ctx.close()
      o.onended = () => ctx.close()
    } catch { /* sin Web Audio */ }
  }

  const open  = () => { playOpen();  setIsOpen(true); setHasOpened(true) }
  const close = () => { playClose(); setIsOpen(false) }

  if (!mounted) return null

  return createPortal(
    <>
      <style>{STYLES}</style>

      {/* Chat popup */}
      {visible && isOpen && (
        <div className="lia-popup" style={{
          background: "#fff", borderRadius: 20,
          boxShadow: "0 16px 48px rgba(0,0,0,0.16)", border: "1px solid #f0f0f0",
          overflow: "hidden", animation: "lia-slide-up 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          fontFamily: "var(--font-display)",
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg,#018c58 0%,#016645 100%)",
            padding: "16px", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }}/>
            <div style={{ position: "absolute", bottom: -8, left: 32, width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }}/>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 13, overflow: "hidden",
                    background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lia.png" alt="LIA" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{
                    position: "absolute", bottom: -2, right: -2,
                    width: 12, height: 12, borderRadius: "50%",
                    background: "#4ade80", border: "2px solid white",
                    display: "block", animation: "lia-dot 2s ease-in-out infinite",
                  }}/>
                </div>
                <div>
                  <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>LIA</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Asistente de experiencia · En línea</p>
                </div>
              </div>
              <button
                onClick={close}
                style={{
                  width: 32, height: 32, borderRadius: 10, border: "none", cursor: "pointer",
                  background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center",
                }}
                aria-label="Cerrar"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M11 3L3 11M3 3l8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 7, flexShrink: 0, overflow: "hidden",
                background: "#e6f7f1",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/lia.png" alt="LIA" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ background: "#e6f7f1", borderRadius: "14px 14px 14px 4px", padding: "10px 13px" }}>
                <p style={{ margin: 0, fontSize: 13, color: "#1a1a1a", lineHeight: 1.6 }}>
                  Hola, soy Lia, tu asistente de experiencia de Los Olivos Cartagena. Estoy aquí para orientarte 😊<br/>
                  <span style={{ color: "#555" }}>Dime, ¿qué quieres hacer hoy?</span>
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
              {ACTIONS.map((a) => (
                <button
                  key={a.label}
                  onClick={() => window.open(waUrl(a.msg), "_blank", "noopener,noreferrer")}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "9px 11px", borderRadius: 11,
                    border: "1px solid #b3e4d0", background: "#f7fdfb",
                    color: "#016645", fontSize: 11, fontWeight: 600,
                    cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e6f7f1"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#018c58" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f7fdfb"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#b3e4d0" }}
                >
                  <span style={{ fontSize: 14, lineHeight: 1 }}>{a.emoji}</span>
                  <span style={{ lineHeight: 1.3 }}>{a.label}</span>
                </button>
              ))}
            </div>

            <a
              href={waUrl("Hola, necesito ayuda.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
                padding: "11px", borderRadius: 12, textDecoration: "none",
                background: "linear-gradient(135deg,#25d366,#1ebe5d)",
                color: "#fff", fontWeight: 700, fontSize: 13,
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <IconWhatsApp />
              Iniciar chat en WhatsApp
            </a>

            <p style={{ margin: 0, textAlign: "center", fontSize: 10, color: "#aaa" }}>
              Respuesta inmediata en horario laboral
            </p>
          </div>
        </div>
      )}


      {/* Modal de presentación — primera apertura del chat */}
      {isOpen && !introPlayed && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 10000,
          background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
          animation: "lia-slide-up 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <div style={{
            position: "relative", width: "100%", maxWidth: 420,
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}>
            <video
              src="/video-lia-compressed.mp4"
              autoPlay
              muted
              playsInline
              style={{ width: "100%", display: "block" }}
              onPlay={(e) => { (e.target as HTMLVideoElement).muted = false }}
              onEnded={() => setIntroPlayed(true)}
            />
            <button
              onClick={() => setIntroPlayed(true)}
              style={{
                position: "absolute", bottom: 14, right: 14,
                background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff", fontSize: 12, fontWeight: 700,
                padding: "5px 14px", borderRadius: 20, cursor: "pointer",
                fontFamily: "var(--font-display)",
              }}
            >
              Saltar
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      {visible && (
        <button
          onClick={isOpen ? close : open}
          aria-label={isOpen ? "Cerrar LIA" : "Abrir asistente virtual LIA"}
          className={`lia-fab ${visible ? "lia-visible" : ""} ${isOpen ? "lia-open" : ""}`}
          style={{ fontFamily: "var(--font-display)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)" }}
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/lia.png" alt="LIA" style={{ width: 36, height: 36, objectFit: "cover", borderRadius: "50%" }} />
          )}
          {/* Badge rojo — solo mientras no haya abierto el chat */}
          {!isOpen && !hasOpened && visible && (
            <span style={{
              position: "absolute", top: -4, right: -4,
              width: 18, height: 18, borderRadius: "50%",
              background: "#ef4444", border: "2.5px solid white",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, color: "white", fontWeight: 800,
              fontFamily: "var(--font-display)",
            }}>1</span>
          )}
        </button>
      )}
    </>,
    document.body
  )
}
