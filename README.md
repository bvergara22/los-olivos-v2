<div align="center">

# Los Olivos Cartagena — Sitio Web v2

**Sitio web institucional de Los Olivos Cartagena**
Empresa líder en servicios funerarios y previsión exequial en la región Caribe de Colombia.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[![Deploy](https://img.shields.io/badge/Deploy-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white)](https://v2.losolivoscartagena.com)
[![Live](https://img.shields.io/badge/Live-v2.losolivoscartagena.com-4caf50?style=for-the-badge&logo=googlechrome&logoColor=white)](https://v2.losolivoscartagena.com)
[![License](https://img.shields.io/badge/License-Privado-red?style=for-the-badge)](/)

</div>

---

## Tabla de contenidos

- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Instalación y desarrollo](#instalación-y-desarrollo)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Páginas y rutas](#páginas-y-rutas)
- [Despliegue](#despliegue)
- [Archivos multimedia](#archivos-multimedia)
- [Optimización de recursos](#optimización-de-recursos)
- [Sistema de diseño](#sistema-de-diseño)

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/) | 16.1.6 | Framework principal (static export) |
| [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev/) | 19 | UI |
| [![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) | 4 | Estilos |
| [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radixui&logoColor=white)](https://www.radix-ui.com/) | — | Componentes accesibles |
| [![Lucide](https://img.shields.io/badge/Lucide-F56565?logo=lucide&logoColor=white)](https://lucide.dev/) | 0.454 | Iconografía |
| [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)](https://react-hook-form.com/) | 7 | Formularios |
| [![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white)](https://zod.dev/) | 3 | Validación de esquemas |
| [![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org/) | ≥ 18 | Entorno de ejecución |

---

## Requisitos previos

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-%3E%3D9-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)

---

## Instalación y desarrollo

```bash
# 1. Clonar el repositorio
git clone https://github.com/bvergara22/los-olivos-v2.git
cd los-olivos-v2

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

> Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Genera el export estático en /out
npm run start    # Inicia servidor de producción (requiere modo servidor)
npm run lint     # Análisis estático del código
```

---

## Estructura del proyecto

```
sitio-web-los-olivos/
├── 📁 public/                     # Archivos estáticos (imágenes, PDFs)
├── 📁 src/
│   ├── 📁 app/                    # Rutas (Next.js App Router)
│   │   ├── 📄 page.tsx            # Página principal (Home)
│   │   ├── 📄 globals.css         # Estilos globales y tokens de diseño
│   │   ├── 📁 beneficios/
│   │   ├── 📁 cotizar/
│   │   ├── 📁 homenaje/
│   │   ├── 📁 huellitas/
│   │   ├── 📁 nosotros/
│   │   ├── 📁 pagos/
│   │   ├── 📁 parque-cementerio/
│   │   ├── 📁 salas-cartagena/
│   │   ├── 📁 tramites/
│   │   ├── 📁 unidad-duelo/
│   │   └── 📁 planes/             # Páginas por sede
│   │       ├── arjona/  ├── cartagena/  ├── magangue/
│   │       ├── mahates/ ├── maria-la-baja/ ├── mompox/
│   │       ├── san-andres/ ├── san-juan/ ├── soplaviento/
│   │       └── turbaco/
│   ├── 📁 components/
│   │   ├── 📁 los-olivos/         # Componentes propios del sitio
│   │   │   ├── hero.tsx           # Sección principal
│   │   │   ├── header.tsx         # Navegación
│   │   │   ├── footer.tsx         # Pie de página
│   │   │   ├── novedades.tsx      # Galería de videos
│   │   │   ├── sedes-planes.tsx   # Carrusel de sedes
│   │   │   ├── benefits.tsx       # Beneficios
│   │   │   ├── services.tsx       # Servicios
│   │   │   ├── contact.tsx        # Formulario de contacto
│   │   │   ├── aliados-section.tsx
│   │   │   └── permisos-modal.tsx
│   │   └── 📁 ui/                 # Componentes base (Radix + shadcn)
│   └── 📁 lib/                    # Utilidades
├── 📄 next.config.ts
└── 📄 tsconfig.json
```

---

## Páginas y rutas

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/planes` | Listado de sedes y planes |
| `/planes/cartagena` | Sede Cartagena |
| `/planes/turbaco` | Sede Turbaco |
| `/planes/arjona` | Sede Arjona |
| `/planes/magangue` | Sede Magangué |
| `/planes/mahates` | Sede Mahates |
| `/planes/maria-la-baja` | Sede María La Baja |
| `/planes/san-andres` | Sede San Andrés |
| `/planes/san-juan` | Sede San Juan de Nepomuceno |
| `/planes/soplaviento` | Sede Soplaviento |
| `/planes/mompox` | Sede Mompox |
| `/parque-cementerio` | Parque Cementerio Jardín |
| `/homenaje` | Homenaje al amor |
| `/unidad-duelo` | Unidad de apoyo al duelo |
| `/huellitas` | Planes para mascotas |
| `/beneficios` | Beneficios y aliados |
| `/cotizar` | Cotizador de planes |
| `/tramites` | Trámites y documentos |
| `/nosotros` | Quiénes somos |
| `/pagos` | Medios de pago |

---

## Despliegue

[![DigitalOcean](https://img.shields.io/badge/Hospedado_en-DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white)](https://v2.losolivoscartagena.com)

El proyecto genera un sitio completamente estático con `output: 'export'`:

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
```

### Repositorios remotos

```
origin:   https://github.com/DigitalAllianceCtg/olivos-cartagena-v2.git  (repo principal)
personal: https://github.com/bvergara22/los-olivos-v2.git                (fork de trabajo)
```

### Sincronizar cambios del repo principal

```bash
git fetch origin
git merge origin/main
git push personal main
```

---

## Archivos multimedia

> Los videos están en **DigitalOcean Spaces** y excluidos del repositorio vía `.gitignore`.

[![DigitalOcean Spaces](https://img.shields.io/badge/Almacenamiento-DO_Spaces_sfo3-0080FF?style=flat-square&logo=digitalocean&logoColor=white)](https://cloud.digitalocean.com/)

**Space:** `losolivoscartagena` · **Región:** `sfo3` · **Carpeta:** `/video/` · **Acceso:** público

| Video | Archivo |
|---|---|
| Parque Memorial | `VIDEO PARQUE (1).mp4` |
| Nuestro Proyecto | `Video Project 1.mp4` |
| Sanando el Dolor | `SANANDO JUNTOS.mp4` |

Para actualizar un video: comprimir → subir al Space con el mismo nombre → acceso público.

---

## Optimización de recursos

### Videos

[![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=flat-square&logo=ffmpeg&logoColor=white)](https://ffmpeg.org/)

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" \
  -c:a aac -b:a 96k \
  -movflags +faststart \
  output.mp4
```

### Imágenes

[![Sharp](https://img.shields.io/badge/Sharp-99cc00?style=flat-square&logoColor=white)](https://sharp.pixelplumbing.com/)

Todas las imágenes en `/public` están optimizadas a **≤ 500 KB**.

```bash
# PNG
node -e "require('sharp')('public/img.png').png({ quality: 70, compressionLevel: 9 }).toFile('public/img.png')"

# JPG
node -e "require('sharp')('public/img.jpg').jpeg({ quality: 75, mozjpeg: true }).toFile('public/img.jpg')"
```

---

## Sistema de diseño

### Tipografía

| Variable | Fuente | Uso |
|---|---|---|
| `--font-sans` | Raleway | Cuerpo de texto general |
| `--font-display` | Comfortaa | Títulos y encabezados |

> Los tamaños de fuente tienen +1px sobre los defaults de Tailwind, configurados en `src/app/globals.css`.

### Colores

Todos los tokens se definen en `src/app/globals.css` y se propagan automáticamente a todo el sitio.

| Token | Color | Sección |
|---|---|---|
| `--primary` | ![#4caf50](https://img.shields.io/badge/%234caf50-4caf50?style=flat-square) | Marca principal |
| `--duelo-main` | ![#3e2455](https://img.shields.io/badge/%233e2455-3e2455?style=flat-square) | Parque Cementerio / Homenaje / Duelo |
| `--duelo-dark` | ![#240e36](https://img.shields.io/badge/%23240e36-240e36?style=flat-square) | Títulos sección Duelo |
| `--vida-main` | ![#f0a33d](https://img.shields.io/badge/%23f0a33d-f0a33d?style=flat-square) | Sección Beneficios |
| `--vida-dark` | ![#e65c36](https://img.shields.io/badge/%23e65c36-e65c36?style=flat-square) | Botones sección Beneficios |
| `--cotizar-main` | ![#477a7b](https://img.shields.io/badge/%23477a7b-477a7b?style=flat-square) | Sección Cotizar |
| `--cotizar-dark` | ![#274149](https://img.shields.io/badge/%23274149-274149?style=flat-square) | Botones sección Cotizar |

---

<div align="center">

© Los Olivos Cartagena — Todos los derechos reservados.
Desarrollado por **[Digital Alliance CTG](https://github.com/DigitalAllianceCtg)**

</div>
