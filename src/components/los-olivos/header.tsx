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
}

interface NavItem {
  label: string
  href: string
  hasDropdown: boolean
  columns?: DropdownColumn[]
}


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Servicios dropdown - estilo Nequi con columnas
  const serviciosColumns: DropdownColumn[] = [
    {
      title: "Nuestros Servicios",
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
          label: "Unidad de gestion de las emociones", 
          description: "Acompañamiento profesional en momentos dificiles",
          href: "/unidad-duelo", 
          icon: Flower2 
        },
      ]
    },
    {
      title: "Servicios en Linea",
      items: [
        { 
          label: "Pagos en Linea", 
          description: "Realiza tus pagos de forma segura y rapida",
          href: "/pagos", 
          icon: CreditCard,
          
        },
        { 
          label: "Cotizar Homenaje", 
          description: "Solicita una cotizacion personalizada",
          href: "/cotizar", 
          icon: FileText 
        },
        { 
          label: "Tramites fallecido", 
          description: "Gestion de documentos y tramites necesarios",
          href: "/tramites", 
          icon: ClipboardList 
        },
      ]
    }
  ]

  // Sedes & Planes dropdown
  const sedesColumns: DropdownColumn[] = [
    {
      title: "Prevision Exequial",
      items: [
        { 
          label: "Planes exequial", 
          description: "Planes de proteccion para ti y tu familia",
          href: "#sedes-planes", 
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
    {
      title: "Nuestras Sedes",
      items: [
        { 
          label: "Sedes en Cartagena", 
          description: "Encuentra la sede mas cercana a ti",
          href: "#sedes-planes", 
          icon: MapPin 
        },
        { 
          label: "Tienda", 
          description: "Accede a nuestro portal de servicios",
          href: "https://www.portal.losolivoscartagena.com/tienda", 
          icon: Building2,
          
        },
      ]
    }
  ]

  // Beneficios dropdown
  const beneficiosColumns: DropdownColumn[] = [
    {
      title: "Beneficios Olivos",
      items: [
        { 
          label: "Asistencia Exequial", 
          description: "Cobertura completa en servicios funerarios",
          href: "#beneficios", 
          icon: Shield 
        },
        { 
          label: "Asistencia en Vida", 
          description: "Beneficios para disfrutar en vida",
          href: "#beneficios", 
          icon: HeartHandshake 
        },
        { 
          label: "Asistencia Psicologica", 
          description: "Apoyo emocional profesional",
          href: "#beneficios", 
          icon: Brain 
        },
        { 
          label: "Beneficios Adicionales", 
          description: "Descuentos y alianzas exclusivas",
          href: "#beneficios", 
          icon: Gift 
        },
      ]
    }
  ]

  // Conocenos dropdown (reemplaza Contacto) - items en fila sin titulos de seccion
  const conocenosItems: DropdownItem[] = [
    { 
      label: "Nosotros", 
      description: "Conoce nuestra historia y mision",
      href: "/nosotros", 
      icon: Users,
      
    },
    { 
      label: "Blog", 
      description: "Articulos y noticias de interes",
      href: "/blog", 
      icon: BookOpen,
      
    },
    { 
      label: "Tratamiento de datos", 
      description: "Politica de privacidad y proteccion de datos",
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
    { label: "Beneficios", href: "#beneficios", hasDropdown: true, columns: beneficiosColumns },
    { label: "Conócenos", href: "#nosotros", hasDropdown: true, columns: nosotrosColumns },
  ]

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4" ref={dropdownRef}>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
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
                      openDropdown === item.label 
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
          <div className="hidden md:flex items-center gap-3">
  
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
      <ExternalLink className="w-4 h-4" />
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
              {/* Conocenos - items en fila sin titulos */}
              {openDropdown === "Conócenos" && (
                <div className="flex justify-center gap-6">
                  {conocenosItems.map((subItem, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={subItem.href}
                      target={subItem.isExternal ? "_blank" : undefined}
                      rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted transition-colors group min-w-[200px]"
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
              )}

              {/* Beneficios - grid 2x2 sin titulo */}
              {openDropdown === "Beneficios" && (
                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {beneficiosColumns[0].items.map((subItem, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <subItem.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
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

              {/* Otros menus - layout con columnas y titulos */}
              {openDropdown !== "Conócenos" && openDropdown !== "Beneficios" && navItems.find(item => item.label === openDropdown)?.columns && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {navItems.find(item => item.label === openDropdown)?.columns?.map((column, colIndex) => (
                    <div key={colIndex}>
                      <h3 className="text-primary font-semibold text-sm mb-4 uppercase tracking-wide">
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
                          openDropdown === item.label 
                            ? "text-primary" 
                            : "text-foreground hover:text-primary"
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
                        <div className="ml-2 border-l-2 border-primary/20 pl-4 py-2">
                          {/* Conocenos y Beneficios - sin titulos */}
                          {(item.label === "Conocenos" || item.label === "Beneficios") ? (
                            <div className="space-y-1">
                              {(item.label === "Conocenos" ? conocenosItems : beneficiosColumns[0].items).map((subItem, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href={subItem.href}
                                  target={subItem.isExternal ? "_blank" : undefined}
                                  rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                  onClick={() => {
                                    setOpenDropdown(null)
                                    setIsMenuOpen(false)
                                  }}
                                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                    <subItem.icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span>{subItem.label}</span>
                                    {subItem.isExternal && (
                                      <ExternalLink className="w-3 h-3" />
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          ) : (
                            /* Otros menus - con titulos */
                            <div className="space-y-4">
                              {item.columns?.map((column, colIndex) => (
                                <div key={colIndex}>
                                  <h4 className="text-primary font-semibold text-xs mb-2 uppercase tracking-wide">
                                    {column.title}
                                  </h4>
                                  <div className="space-y-1">
                                    {column.items.map((subItem, itemIndex) => (
                                      <a
                                        key={itemIndex}
                                        href={subItem.href}
                                        target={subItem.isExternal ? "_blank" : undefined}
                                        rel={subItem.isExternal ? "noopener noreferrer" : undefined}
                                        onClick={() => {
                                          setOpenDropdown(null)
                                          setIsMenuOpen(false)
                                        }}
                                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary py-2"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                          <subItem.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <span>{subItem.label}</span>
                                          {subItem.isExternal && (
                                            <ExternalLink className="w-3 h-3" />
                                          )}
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
                  <ExternalLink className="w-4 h-4" />
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
