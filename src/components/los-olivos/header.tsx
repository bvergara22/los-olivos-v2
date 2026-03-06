"use client"

import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  Brain,
  Building2,
  ChevronDown,
  ClipboardList,
  CreditCard,
  ExternalLink,
  FileCheck,
  FileText,
  Flower2,
  Gift,
  Heart,
  HeartHandshake,
  Info,
  MapPin,
  Menu,
  PawPrint,
  Shield,
  TreePine,
  Users,
  X
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface DropdownItem {
  label: string
  description: string
  href: string
  icon: LucideIcon
  isExternal?: boolean
}

interface DropdownColumn {
  title: string
  items: DropdownItem[]
  accent?: string
}

interface NavItem {
  label: string
  href: string
  hasDropdown: boolean
  columns?: DropdownColumn[]
  accent?: "vida"
}


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Servicios dropdown - estilo Nequi con columnas
  const serviciosColumns: DropdownColumn[] = [
    {
      title: "Nuestros Servicios",
      accent: "var(--duelo-main)",
      items: [
        { 
          label: "Homenaje al amor", 
          description: "Ceremonias personalizadas para honrar la memoria",
          href: "/homenaje", 
          icon: Heart 
        },
        { 
          label: "Parque cementerio", 
          description: "Espacios de descanso eterno con naturaleza",
          href: "/parque-cementerio", 
          icon: TreePine 
        },
        { 
          label: "Unidad de gestión de las emociones",
          description: "Acompañamiento profesional en momentos difíciles",
          href: "/unidad-duelo", 
          icon: Flower2 
        },
      ]
    },
    {
      title: "Servicios en Línea",
      items: [
        { 
          label: "Pagos en línea",
          description: "Realiza tus pagos de forma segura y rápida",
          href: "/pagos", 
          icon: CreditCard,
          
        },
        { 
          label: "Cotizar Homenaje", 
          description: "Solicita una cotización personalizada",
          href: "/cotizar", 
          icon: FileText 
        },
        { 
          label: "Trámites fallecido",
          description: "Gestión de documentos y trámites necesarios",
          href: "/tramites", 
          icon: ClipboardList 
        },
      ]
    }
  ]

  // Sedes individuales para el submenu
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

  // Estado para mostrar el panel de sedes dentro del mega menu
  const [showSedesPanel, setShowSedesPanel] = useState(false)

  // Sedes & Planes dropdown
  const sedesColumns: DropdownColumn[] = [
    {
      title: "Previsión Exequial",
      items: [
        {
          label: "Planes exequial",
          description: "Planes de protección para ti y tu familia",
          href: "#ver-sedes",
          icon: Shield,
        },
        {
          label: "Plan Huellitas",
          description: "Proteccion especial para tus mascotas",
          href: "/huellitas",
          icon: PawPrint
        },
        {
          label: "Conoce más",
          description: "Descubre todas las opciones disponibles",
          href: "/planes",
          icon: Info
        },
      ]
    },
  ]

  // Beneficios dropdown
  const beneficiosColumns: DropdownColumn[] = [
    {
      title: "Beneficios Olivos",
      items: [
        { 
          label: "Asistencia Exequial", 
          description: "Cobertura completa en servicios funerarios",
          href: "/beneficios", 
          icon: Shield 
        },
        { 
          label: "Asistencia en Vida", 
          description: "Beneficios para disfrutar en vida",
          href: "/beneficios", 
          icon: HeartHandshake 
        },
        { 
          label: "Asistencia Psicológica",
          description: "Apoyo emocional profesional",
          href: "/beneficios", 
          icon: Brain 
        },
        { 
          label: "Beneficios Adicionales", 
          description: "Descuentos y alianzas exclusivas",
          href: "/beneficios", 
          icon: Gift 
        },
      ]
    }
  ]

  // Conocenos dropdown (reemplaza Contacto) - items en fila sin titulos de seccion
  const conocenosItems: DropdownItem[] = [
    { 
      label: "Nosotros", 
      description: "Conoce nuestra historia y misión",
      href: "/nosotros", 
      icon: Users,
      
    },
    { 
      label: "Blog", 
      description: "Artículos y noticias de interés",
      href: "/blog", 
      icon: BookOpen,
      
    },
    { 
      label: "Tratamiento de datos", 
      description: "Política de privacidad y protección de datos",
      href: "/tratamiento-de-datos", 
      icon: FileCheck,
      
    },
  ]

  // Nosotros dropdown
  const nosotrosColumns: DropdownColumn[] = [
    {
      title: "Nosotros",
      items: conocenosItems
    }
  ]

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/", hasDropdown: false },
    { label: "Servicios", href: "#servicios", hasDropdown: true, columns: serviciosColumns },
    { label: "Sedes & Planes", href: "#sedes-planes", hasDropdown: true, columns: sedesColumns },
    { label: "Beneficios", href: "#beneficios", hasDropdown: true, columns: beneficiosColumns, accent: "vida" },
    { label: "Conócenos", href: "#nosotros", hasDropdown: true, columns: nosotrosColumns },
  ]

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null)
      setShowSedesPanel(false)
    } else {
      setOpenDropdown(label)
      setShowSedesPanel(false)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Listen for "open-sedes-panel" custom event (from VerSedesButton)
  useEffect(() => {
    const handleOpenSedes = () => {
      setIsMenuOpen(true)
      setOpenDropdown("Sedes & Planes")
      setShowSedesPanel(true)
    }

    window.addEventListener("open-sedes-panel", handleOpenSedes)
    return () => window.removeEventListener("open-sedes-panel", handleOpenSedes)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center ml-6">
            <Image
            src="/logo-olivos.png"
            alt="Logo Los Olivos"
            width={120}
            height={50}
            className="object-contain"
            priority
            />
          </a>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      item.accent === "vida"
                        ? openDropdown === item.label
                          ? "text-vida-main"
                          : "text-muted-foreground hover:text-vida-main"
                        : openDropdown === item.label
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                        openDropdown === item.label ? "rotate-180" : "rotate-0"
                      }`} 
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 mr-6">
  
            <Button
              asChild
                variant="outline"
                  size="sm"
                    className="gap-2 bg-transparent hover:bg-[#C38B2C] hover:text-white hover:border-[#C38B2C] transition-colors"
                    >
            <Link
              href="https://goldenoffer.losolivoscartagena.com/"
              target="_blank"
                rel="noopener noreferrer"
                >
                <CreditCard className="w-4 h-4" />
                <span>Golden Offers</span>
            </Link>
            </Button>

  <Button
    asChild
    size="sm"
    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
  >
    <Link
      href="https://www.portal.losolivoscartagena.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src="/olivos-white.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
      <span>Portal</span>
    </Link>
  </Button>

</div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mega Menu Dropdown - Desktop (estilo Nequi) */}
        {openDropdown && (
          <div className="hidden lg:block absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-8">
              {/* Conócenos - misma estructura que Sedes & Planes */}
              {openDropdown === "Conócenos" && (
                <div>
                  <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">
                    Nuestra empresa
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {conocenosItems.map((subItem, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={subItem.href}
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
                            <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                              {subItem.label}
                            </span>
                            {subItem.isExternal && (
                              <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {subItem.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Beneficios - grid 2x2 con colores Vida */}
              {openDropdown === "Beneficios" && (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-vida-main font-semibold text-sm mb-4 uppercase tracking-wide">
                    {beneficiosColumns[0].title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {beneficiosColumns[0].items.map((subItem, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-vida-main/10 text-vida-main flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                          <subItem.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground text-sm group-hover:text-vida-main transition-colors">
                              {subItem.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {subItem.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Sedes & Planes - 1 columna por item */}
              {openDropdown === "Sedes & Planes" && !showSedesPanel && (
                <div>
                  <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">
                    {sedesColumns[0].title}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {sedesColumns[0].items.map((subItem, itemIndex) => (
                      subItem.href === "#ver-sedes" ? (
                        <button
                          key={itemIndex}
                          type="button"
                          onClick={() => setShowSedesPanel(true)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group w-full text-left"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <subItem.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                {subItem.label}
                              </span>
                              <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                              {subItem.description}
                            </p>
                          </div>
                        </button>
                      ) : (
                        <a
                          key={itemIndex}
                          href={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <subItem.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors block">
                              {subItem.label}
                            </span>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                              {subItem.description}
                            </p>
                          </div>
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Panel de sedes desplegado */}
              {openDropdown === "Sedes & Planes" && showSedesPanel && (
                <div>
                  <button
                    type="button"
                    onClick={() => setShowSedesPanel(false)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    Volver
                  </button>
                  <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">
                    Selecciona una sede
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {sedesItems.map((sede) => (
                      <Link
                        key={sede.href}
                        href={sede.href}
                        onClick={() => {
                          setOpenDropdown(null)
                          setShowSedesPanel(false)
                        }}
                        className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {sede.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Otros menus - layout con columnas y titulos */}
              {openDropdown !== "Conócenos" && openDropdown !== "Beneficios" && openDropdown !== "Sedes & Planes" && navItems.find(item => item.label === openDropdown)?.columns && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {navItems.find(item => item.label === openDropdown)?.columns?.map((column, colIndex) => (
                    <div key={colIndex}>
                      <h3
                        className="font-semibold text-sm mb-4 uppercase tracking-wide"
                        style={{ color: column.accent ?? "var(--color-primary)" }}
                      >
                        {column.title}
                      </h3>
                      <div className="space-y-1">
                        {column.items.map((subItem, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={subItem.href}
                            target={subItem.isExternal ? "_blank" : undefined}
                            rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            {column.accent ? (
                              <div className="w-10 h-10 rounded-lg bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-duelo-main group-hover:text-white">
                                <subItem.icon className="w-5 h-5" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <subItem.icon className="w-5 h-5" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className={`font-medium text-foreground text-sm transition-colors ${column.accent ? "group-hover:text-duelo-main" : "group-hover:text-primary"}`}>
                                  {subItem.label}
                                </span>
                                {subItem.isExternal && (
                                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                {subItem.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between w-full text-sm font-medium py-3 px-2 ${
                          item.accent === "vida"
                            ? openDropdown === item.label ? "text-vida-main" : "text-foreground hover:text-vida-main"
                            : openDropdown === item.label ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                            openDropdown === item.label ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className={`ml-2 border-l-2 pl-4 py-2 ${item.accent === "vida" ? "border-vida-main/20" : "border-primary/20"}`}>

                          {/* Beneficios - colores Vida */}
                          {item.label === "Beneficios" && (
                            <div className="space-y-1">
                              <p className="text-vida-main font-semibold text-xs mb-2 uppercase tracking-wide">{beneficiosColumns[0].title}</p>
                              {beneficiosColumns[0].items.map((subItem, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={subItem.href}
                                  onClick={() => { setOpenDropdown(null); setIsMenuOpen(false) }}
                                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-vida-main py-2"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-vida-main/10 text-vida-main flex items-center justify-center flex-shrink-0">
                                    <subItem.icon className="w-4 h-4" />
                                  </div>
                                  <span>{subItem.label}</span>
                                </a>
                              ))}
                            </div>
                          )}

                          {/* Conócenos */}
                          {item.label === "Conócenos" && (
                            <div className="space-y-1">
                              <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wide">Nuestra empresa</p>
                              {conocenosItems.map((subItem, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={subItem.href}
                                  target={subItem.isExternal ? "_blank" : undefined}
                                  rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                  onClick={() => { setOpenDropdown(null); setIsMenuOpen(false) }}
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

                          {/* Sedes & Planes */}
                          {item.label === "Sedes & Planes" && !showSedesPanel && (
                            <div className="space-y-1">
                              <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wide">{sedesColumns[0].title}</p>
                              {sedesColumns[0].items.map((subItem, itemIndex) => (
                                subItem.href === "#ver-sedes" ? (
                                  <button
                                    key={itemIndex}
                                    type="button"
                                    onClick={() => setShowSedesPanel(true)}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2 w-full text-left"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                      <subItem.icon className="w-4 h-4" />
                                    </div>
                                    <span>{subItem.label}</span>
                                    <ChevronDown className="w-3 h-3 text-muted-foreground -rotate-90 ml-auto" />
                                  </button>
                                ) : (
                                  <a
                                    key={itemIndex}
                                    href={subItem.href}
                                    onClick={() => { setOpenDropdown(null); setIsMenuOpen(false) }}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                      <subItem.icon className="w-4 h-4" />
                                    </div>
                                    <span>{subItem.label}</span>
                                  </a>
                                )
                              ))}
                            </div>
                          )}
                          {item.label === "Sedes & Planes" && showSedesPanel && (
                            <div>
                              <button
                                type="button"
                                onClick={() => setShowSedesPanel(false)}
                                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary mb-3 transition-colors"
                              >
                                <ChevronDown className="w-3 h-3 rotate-90" />
                                Volver
                              </button>
                              <p className="text-primary font-semibold text-xs mb-3 uppercase tracking-wide">Selecciona una sede</p>
                              <div className="grid grid-cols-2 gap-2">
                                {sedesItems.map((sede) => (
                                  <Link
                                    key={sede.href}
                                    href={sede.href}
                                    onClick={() => { setOpenDropdown(null); setIsMenuOpen(false); setShowSedesPanel(false) }}
                                    className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-all group text-sm"
                                  >
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-foreground group-hover:text-primary transition-colors">{sede.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Servicios y demás - respeta accent por columna */}
                          {item.label !== "Beneficios" && item.label !== "Conócenos" && item.label !== "Sedes & Planes" && (
                            <div className="space-y-4">
                              {item.columns?.map((column, colIndex) => (
                                <div key={colIndex}>
                                  <p
                                    className="font-semibold text-xs mb-2 uppercase tracking-wide"
                                    style={{ color: column.accent ?? "var(--color-primary)" }}
                                  >
                                    {column.title}
                                  </p>
                                  <div className="space-y-1">
                                    {column.items.map((subItem, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={subItem.href}
                                        target={subItem.isExternal ? "_blank" : undefined}
                                        rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                        onClick={() => { setOpenDropdown(null); setIsMenuOpen(false) }}
                                        className="flex items-center gap-3 text-sm text-muted-foreground py-2 group"
                                      >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${column.accent ? "bg-duelo-main/10 text-duelo-main" : "bg-primary/10 text-primary"}`}>
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <span className={column.accent ? "group-hover:text-duelo-main" : "group-hover:text-primary"}>{subItem.label}</span>
                                          {subItem.isExternal && <ExternalLink className="w-3 h-3" />}
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm font-medium text-foreground hover:text-primary py-3 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                
                <Button variant="outline" className="gap-2 w-full justify-center bg-transparent hover:bg-amber-500 hover:text-white hover:border-amber-500">
                  <CreditCard className="w-4 h-4" />
                  <span>Golden Offers</span>
                </Button>
                <Button className="gap-2 w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90">
                  <Image src="/olivos-white.png" alt="" width={16} height={16} className="w-4 h-4 object-contain" />
                  <span>Portal</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}