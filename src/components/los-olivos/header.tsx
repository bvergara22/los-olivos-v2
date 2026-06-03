"use client"

import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  FileCheck,
  Flower2,
  Gift,
  Heart,
  HeartHandshake,
  MapPin,
  PawPrint,
  Shield,
  TreePine,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ComponentType, useEffect, useRef, useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  // Territorios panel: null=main, "homenajes"|"mas-vida"|"prevision"|"sedes"
  const [territoriosPanel, setTerritoriosPanel] = useState<null | "homenajes" | "mas-vida" | "prevision" | "sedes">(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const homenajes = [
    { label: "Homenaje al amor", description: "Ceremonias personalizadas para honrar la memoria", href: "/homenaje", icon: Heart },
    { label: "Parque Jardín", description: "Espacios de descanso eterno con naturaleza", href: "/parque-cementerio", icon: TreePine },
    { label: "Unidad de gestión de las emociones", description: "Acompañamiento profesional en momentos difíciles", href: "/unidad-duelo", icon: Flower2 },
  ]
  const masVida = [
    { label: "Unidad de gestión de las emociones", description: "Recursos para gestionar tus emociones en el día a día", href: "/unidad-vida", icon: Flower2 },
    { label: "Golden Offers", description: "Beneficios y ofertas exclusivas para nuestros afiliados", href: "https://goldenoffer.losolivoscartagena.com/", icon: Gift, isExternal: true },
  ]
  const previsionItems = [
    { label: "Planes Integrales", description: "Planes de protección para ti y tu familia", href: "#ver-sedes", icon: Shield },
    { label: "Mascotas", description: "Protección especial para tus mascotas", href: "/huellitas", icon: PawPrint },
  ]
  const sedesItems = [
    { label: "Cartagena", href: "/planes/cartagena" },
    { label: "Turbaco", href: "/planes/turbaco" },
    { label: "Arjona", href: "/planes/arjona" },
    { label: "Magangué", href: "/planes/magangue" },
    { label: "María la Baja", href: "/planes/maria-la-baja" },
    { label: "San Andrés", href: "/planes/san-andres" },
    { label: "Mahates", href: "/planes/mahates" },
    { label: "Soplaviento", href: "/planes/soplaviento" },
    { label: "San Juan", href: "/planes/san-juan" },
    { label: "Mompox", href: "/planes/mompox" },
  ]
  const conocenosItems: { label: string; description: string; href: string; icon: ComponentType<{ className?: string }>; isExternal?: boolean }[] = [
    { label: "Nosotros", description: "Conoce nuestra historia y misión", href: "/nosotros", icon: Users },
    { label: "Blog", description: "Artículos y noticias de interés", href: "/blog", icon: BookOpen },
    { label: "Tratamiento de datos", description: "Política de privacidad y protección de datos", href: "/tratamiento-de-datos", icon: FileCheck },
  ]

  const navItems = [
    { label: "Inicio", href: "/", hasDropdown: false },
    { label: "Territorios", href: "#territorios", hasDropdown: true },
    { label: "Conócenos", href: "#nosotros", hasDropdown: true },
  ]

  function toggleDropdown(label: string) {
    if (openDropdown === label) {
      setOpenDropdown(null)
      setTerritoriosPanel(null)
    } else {
      setOpenDropdown(label)
      setTerritoriosPanel(null)
    }
  }

  function closeAll() {
    setOpenDropdown(null)
    setTerritoriosPanel(null)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
        setTerritoriosPanel(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <Image src="/logo-olivos.png" alt="Logo Los Olivos" width={120} height={50} className="object-contain" priority />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end pr-12">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                        openDropdown === item.label ? "text-primary" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${openDropdown === item.label ? "rotate-180" : "rotate-0"}`} />
                    </button>
                  ) : (
                    <a href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://goldenoffer.losolivoscartagena.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-9 px-4 rounded-md text-sm font-semibold border-2 bg-white transition-colors hover:bg-amber-50"
                style={{ borderColor: "#C9981E", color: "#C9981E" }}
              >
                <Gift className="w-4 h-4" />
                <span>Golden Offers</span>
              </Link>
              <div className="relative flex">
                {/* Parte izquierda: enlace al portal */}
                <Link
                  href="https://www.portal.losolivoscartagena.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 pl-4 pr-3 rounded-l-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Image src="/olivos-white.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                  <span>Portal Los Olivos</span>
                </Link>
                {/* Parte derecha: toggle dropdown */}
                <button
                  onClick={() => setOpenDropdown(openDropdown === "portal" ? null : "portal")}
                  className="inline-flex items-center justify-center h-9 w-8 rounded-r-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "portal" ? "rotate-180" : ""}`} />
                </button>
                {/* Dropdown flotante */}
                {openDropdown === "portal" && (
                  <div className="absolute right-0 top-[calc(100%+6px)] w-52 rounded-xl shadow-2xl z-[9999] overflow-hidden bg-primary">
                    {[
                      { label: "Portal clientes" },
                      { label: "Portal empresas" },
                    ].map((item, i) => (
                      <div key={item.label} className={`flex items-center justify-between px-4 py-3 cursor-not-allowed select-none opacity-60 ${i > 0 ? "border-t border-white/10" : ""}`}>
                        <span className="text-sm text-white font-medium">{item.label}</span>
                        <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">Pronto</span>
                      </div>
                    ))}
                    <div className="h-1" />
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 flex items-center justify-center w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-[18px]">
                <span className="absolute top-0 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center"
                  style={isMenuOpen ? { transform: "translateY(8px) rotateZ(-45deg)" } : {}} />
                <span className="absolute top-1/2 -translate-y-1/2 left-0 h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center"
                  style={{ width: isMenuOpen ? "0%" : "100%" }} />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transition-all duration-300 ease-in-out origin-center"
                  style={isMenuOpen ? { transform: "translateY(-8px) rotateZ(45deg)" } : {}} />
              </div>
            </button>
          </div>

          {/* ── Desktop Mega Menu ── */}
          {openDropdown && openDropdown !== "portal" && (
            <div className="hidden lg:block absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* TERRITORIOS — main: 3 items */}
                {openDropdown === "Territorios" && territoriosPanel === null && (
                  <div>
                    <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">Nuestros Territorios</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {/* Homenajes */}
                      <button type="button" onClick={() => setTerritoriosPanel("homenajes")}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group text-left w-full"
                      >
                        <div className="w-10 h-10 rounded-lg bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0 group-hover:bg-duelo-main group-hover:text-white transition-colors">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground text-sm group-hover:text-duelo-main transition-colors">Homenajes</span>
                            <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">Servicios de homenaje y cementerio</p>
                        </div>
                      </button>
                      {/* Previsión Integral */}
                      <button type="button" onClick={() => setTerritoriosPanel("prevision")}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group text-left w-full"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">Previsión Integral</span>
                            <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">Planes integrales y mascotas</p>
                        </div>
                      </button>
                      {/* Más vida para ti */}
                      <button type="button" onClick={() => setTerritoriosPanel("mas-vida")}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group text-left w-full"
                      >
                        <div className="w-10 h-10 rounded-lg bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                          <HeartHandshake className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground text-sm group-hover:text-vida-dark transition-colors">Más vida para ti</span>
                            <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">Bienestar emocional y beneficios</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* TERRITORIOS — Homenajes submenu */}
                {openDropdown === "Territorios" && territoriosPanel === "homenajes" && (
                  <div>
                    <button type="button" onClick={() => setTerritoriosPanel(null)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-duelo-main mb-6 transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" /> Volver
                    </button>
                    <h3 className="text-duelo-main font-semibold text-sm mb-4 uppercase tracking-wide">Homenajes</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {homenajes.map((item) => (
                        <a key={item.label} href={item.href} onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0 group-hover:bg-duelo-main group-hover:text-white transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-foreground text-sm group-hover:text-duelo-main transition-colors block">{item.label}</span>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* TERRITORIOS — Más vida para ti submenu */}
                {openDropdown === "Territorios" && territoriosPanel === "mas-vida" && (
                  <div>
                    <button type="button" onClick={() => setTerritoriosPanel(null)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-vida-dark mb-6 transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" /> Volver
                    </button>
                    <h3 className="text-vida-dark font-semibold text-sm mb-4 uppercase tracking-wide">Más vida para ti</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {masVida.map((item) => (
                        <a key={item.label} href={item.href}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-foreground text-sm group-hover:text-vida-dark transition-colors">{item.label}</span>
                              {item.isExternal && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* TERRITORIOS — Previsión Integral submenu */}
                {openDropdown === "Territorios" && territoriosPanel === "prevision" && (
                  <div>
                    <button type="button" onClick={() => setTerritoriosPanel(null)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" /> Volver
                    </button>
                    <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">Previsión Integral</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {previsionItems.map((item) =>
                        item.href === "#ver-sedes" ? (
                          <button key={item.label} type="button" onClick={() => setTerritoriosPanel("sedes")}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group text-left w-full"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{item.label}</span>
                                <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                            </div>
                          </button>
                        ) : (
                          <a key={item.label} href={item.href} onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors block">{item.label}</span>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* TERRITORIOS — city list */}
                {openDropdown === "Territorios" && territoriosPanel === "sedes" && (
                  <div>
                    <button type="button" onClick={() => setTerritoriosPanel("prevision")}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" /> Volver
                    </button>
                    <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">Selecciona una sede</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {sedesItems.map((sede) => (
                        <Link key={sede.href} href={sede.href}
                          onClick={() => { setOpenDropdown(null); setTerritoriosPanel(null) }}
                          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{sede.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CONÓCENOS */}
                {openDropdown === "Conócenos" && (
                  <div>
                    <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">Nuestra empresa</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {conocenosItems.map((subItem) => (
                        <a key={subItem.label} href={subItem.href}
                          target={subItem.isExternal ? "_blank" : undefined}
                          rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <subItem.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{subItem.label}</span>
                              {subItem.isExternal && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{subItem.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ── Mobile Menu ── */}
          <div
            className="lg:hidden grid transition-[grid-template-rows] duration-300 ease-in-out"
            style={{ gridTemplateRows: isMenuOpen ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="py-4 border-t border-border">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.hasDropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.label)}
                            className={`flex items-center justify-between w-full text-sm font-medium py-3 px-2 ${
                              openDropdown === item.label ? "text-primary" : "text-foreground hover:text-primary"
                            }`}
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${openDropdown === item.label ? "rotate-180" : "rotate-0"}`} />
                          </button>

                          {openDropdown === item.label && (
                            <div className="ml-2 border-l-2 pl-4 py-2 border-primary/20">

                              {/* Mobile: Territorios — main */}
                              {item.label === "Territorios" && territoriosPanel === null && (
                                <div className="space-y-1">
                                  {[
                                    { key: "homenajes", label: "Homenajes", icon: Heart, color: "duelo-main" },
                                    { key: "prevision", label: "Previsión Integral", icon: Shield, color: "primary" },
                                    { key: "mas-vida", label: "Más vida para ti", icon: HeartHandshake, color: "vida-dark" },
                                  ].map((sec) => (
                                    <button key={sec.key} type="button"
                                      onClick={() => setTerritoriosPanel(sec.key as "homenajes" | "mas-vida" | "prevision")}
                                      className={`flex items-center justify-between gap-3 text-sm text-muted-foreground py-2 w-full ${
                                        sec.color === "primary" ? "hover:text-primary"
                                          : sec.color === "vida-dark" ? "hover:text-vida-dark"
                                          : "hover:text-duelo-main"
                                      }`}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                          sec.color === "primary" ? "bg-primary/10 text-primary"
                                            : sec.color === "vida-dark" ? "bg-vida-dark/10 text-vida-dark"
                                            : "bg-duelo-main/10 text-duelo-main"
                                        }`}>
                                          <sec.icon className="w-4 h-4" />
                                        </div>
                                        <span>{sec.label}</span>
                                      </div>
                                      <ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0" />
                                    </button>
                                  ))}
                                </div>
                              )}

                              {/* Mobile: Territorios — Homenajes */}
                              {item.label === "Territorios" && territoriosPanel === "homenajes" && (
                                <div>
                                  <button type="button" onClick={() => setTerritoriosPanel(null)}
                                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-duelo-main mb-2"
                                  >
                                    <ChevronDown className="w-3 h-3 rotate-90" /> Volver
                                  </button>
                                  <p className="text-duelo-main font-semibold text-xs mb-2 uppercase tracking-wide">Homenajes</p>
                                  {homenajes.map((subItem) => (
                                    <a key={subItem.label} href={subItem.href} onClick={closeAll}
                                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-duelo-main py-2"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0">
                                        <subItem.icon className="w-4 h-4" />
                                      </div>
                                      <span>{subItem.label}</span>
                                    </a>
                                  ))}
                                </div>
                              )}

                              {/* Mobile: Territorios — Más vida */}
                              {item.label === "Territorios" && territoriosPanel === "mas-vida" && (
                                <div>
                                  <button type="button" onClick={() => setTerritoriosPanel(null)}
                                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-vida-dark mb-2"
                                  >
                                    <ChevronDown className="w-3 h-3 rotate-90" /> Volver
                                  </button>
                                  <p className="text-vida-dark font-semibold text-xs mb-2 uppercase tracking-wide">Más vida para ti</p>
                                  {masVida.map((subItem) => (
                                    <a key={subItem.label} href={subItem.href}
                                      target={subItem.isExternal ? "_blank" : undefined}
                                      rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                      onClick={closeAll}
                                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-vida-dark py-2"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0">
                                        <subItem.icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span>{subItem.label}</span>
                                        {subItem.isExternal && <ExternalLink className="w-3 h-3" />}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              )}

                              {/* Mobile: Territorios — Previsión Integral */}
                              {item.label === "Territorios" && territoriosPanel === "prevision" && (
                                <div>
                                  <button type="button" onClick={() => setTerritoriosPanel(null)}
                                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-2"
                                  >
                                    <ChevronDown className="w-3 h-3 rotate-90" /> Volver
                                  </button>
                                  <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wide">Previsión Integral</p>
                                  {previsionItems.map((subItem) =>
                                    subItem.href === "#ver-sedes" ? (
                                      <button key={subItem.label} type="button" onClick={() => setTerritoriosPanel("sedes")}
                                        className="flex items-center justify-between gap-3 text-sm text-muted-foreground hover:text-primary py-2 w-full"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                            <subItem.icon className="w-4 h-4" />
                                          </div>
                                          <span>{subItem.label}</span>
                                        </div>
                                        <ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0" />
                                      </button>
                                    ) : (
                                      <a key={subItem.label} href={subItem.href} onClick={closeAll}
                                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <span>{subItem.label}</span>
                                      </a>
                                    )
                                  )}
                                </div>
                              )}

                              {/* Mobile: Territorios — sedes list */}
                              {item.label === "Territorios" && territoriosPanel === "sedes" && (
                                <div>
                                  <button type="button" onClick={() => setTerritoriosPanel("prevision")}
                                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-3"
                                  >
                                    <ChevronDown className="w-3 h-3 rotate-90" /> Volver
                                  </button>
                                  <p className="text-primary font-semibold text-xs mb-3 uppercase tracking-wide">Selecciona una sede</p>
                                  <div className="grid grid-cols-2 gap-2">
                                    {sedesItems.map((sede) => (
                                      <Link key={sede.href} href={sede.href} onClick={closeAll}
                                        className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-all group text-sm"
                                      >
                                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-foreground group-hover:text-primary transition-colors">{sede.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Mobile: Conócenos */}
                              {item.label === "Conócenos" && (
                                <div className="space-y-1">
                                  <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wide">Nuestra empresa</p>
                                  {conocenosItems.map((subItem) => (
                                    <a key={subItem.label} href={subItem.href}
                                      target={subItem.isExternal ? "_blank" : undefined}
                                      rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                      onClick={closeAll}
                                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <subItem.icon className="w-4 h-4" />
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span>{subItem.label}</span>
                                        {subItem.isExternal && <ExternalLink className="w-3 h-3" />}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              )}

                            </div>
                          )}
                        </>
                      ) : (
                        <a href={item.href} className="block text-sm font-medium text-foreground hover:text-primary py-3 px-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                    <Link
                      href="https://goldenoffer.losolivoscartagena.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-md text-sm font-semibold border-2 bg-white hover:bg-amber-50 transition-colors"
                      style={{ borderColor: "#C9981E", color: "#C9981E" }}
                    >
                      <Gift className="w-4 h-4" />
                      <span>Golden Offers</span>
                    </Link>
                    <div className="relative flex w-full">
                      <Link
                        href="https://www.portal.losolivoscartagena.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 flex-1 h-10 pl-4 pr-3 rounded-l-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Image src="/olivos-white.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                        <span>Portal Los Olivos</span>
                      </Link>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === "portal-mobile" ? null : "portal-mobile")}
                        className="inline-flex items-center justify-center h-10 w-8 rounded-r-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "portal-mobile" ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {openDropdown === "portal-mobile" && (
                      <div className="rounded-xl overflow-hidden bg-primary">
                        {["Portal clientes", "Portal empresas"].map((label, i) => (
                          <div key={label} className={`flex items-center justify-between px-4 py-3 cursor-not-allowed select-none opacity-60 ${i > 0 ? "border-t border-white/10" : ""}`}>
                            <span className="text-sm text-white font-medium">{label}</span>
                            <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">Pronto</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
