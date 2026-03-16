# Los Olivos Cartagena — Sitio Web v2

Sitio web institucional de **Los Olivos Cartagena**, empresa líder en servicios funerarios y de previsión exequial en la región Caribe de Colombia. Construido con Next.js 16, React 19 y Tailwind CSS v4.

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework principal (static export) |
| [React](https://react.dev/) | 19 | UI |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos |
| [Radix UI](https://www.radix-ui.com/) | — | Componentes accesibles (Dialog, Tabs, Toast…) |
| [Lucide React](https://lucide.dev/) | 0.454 | Iconografía |
| [React Hook Form](https://react-hook-form.com/) | 7 | Formularios |
| [Zod](https://zod.dev/) | 3 | Validación de esquemas |
| [Sonner](https://sonner.emilkowal.ski/) | 1 | Notificaciones toast |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |

---

## Requisitos previos

- **Node.js** ≥ 18
- **npm** ≥ 9

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

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

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
├── public/                        # Archivos estáticos (imágenes, PDFs)
├── src/
│   ├── app/                       # Rutas de la aplicación (Next.js App Router)
│   │   ├── page.tsx               # Página principal (Home)
│   │   ├── globals.css            # Estilos globales, tokens de diseño
│   │   ├── beneficios/            # Página de beneficios
│   │   ├── cotizar/               # Cotizador de planes
│   │   ├── homenaje/              # Homenaje al amor
│   │   ├── huellitas/             # Planes Huellitas (mascotas)
│   │   ├── nosotros/              # Quiénes somos
│   │   ├── pagos/                 # Medios de pago
│   │   ├── parque-cementerio/     # Parque Cementerio Jardín
│   │   ├── salas-cartagena/       # Salas de velación
│   │   ├── tramites/              # Trámites y documentos
│   │   ├── unidad-duelo/          # Unidad de apoyo al duelo
│   │   └── planes/                # Páginas por sede
│   │       ├── arjona/
│   │       ├── cartagena/
│   │       ├── magangue/
│   │       ├── mahates/
│   │       ├── maria-la-baja/
│   │       ├── mompox/
│   │       ├── san-andres/
│   │       ├── san-juan/
│   │       ├── soplaviento/
│   │       └── turbaco/
│   ├── components/
│   │   ├── los-olivos/            # Componentes propios del sitio
│   │   │   ├── hero.tsx           # Sección principal (home)
│   │   │   ├── header.tsx         # Navegación principal
│   │   │   ├── footer.tsx         # Pie de página
│   │   │   ├── novedades.tsx      # Sección de videos / novedades
│   │   │   ├── sedes-planes.tsx   # Carrusel de sedes
│   │   │   ├── benefits.tsx       # Sección de beneficios
│   │   │   ├── services.tsx       # Servicios
│   │   │   ├── why-us.tsx         # Por qué elegirnos
│   │   │   ├── steps.tsx          # Pasos del proceso
│   │   │   ├── contact.tsx        # Formulario de contacto
│   │   │   ├── aliados-section.tsx# Aliados comerciales
│   │   │   ├── permisos-modal.tsx # Modal de descarga de permisos
│   │   │   └── ...
│   │   └── ui/                    # Componentes base (Radix + shadcn)
│   └── lib/                       # Utilidades
├── next.config.ts                 # Configuración de Next.js
└── tsconfig.json                  # Configuración de TypeScript
```

---

## Páginas y rutas

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/planes` | Listado de sedes y planes |
| `/planes/cartagena` | Planes sede Cartagena |
| `/planes/turbaco` | Planes sede Turbaco |
| `/planes/arjona` | Planes sede Arjona |
| `/planes/magangue` | Planes sede Magangué |
| `/planes/mahates` | Planes sede Mahates |
| `/planes/maria-la-baja` | Planes sede María La Baja |
| `/planes/san-andres` | Planes sede San Andrés |
| `/planes/san-juan` | Planes sede San Juan de Nepomuceno |
| `/planes/soplaviento` | Planes sede Soplaviento |
| `/planes/mompox` | Planes sede Mompox |
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

## Configuración de despliegue

El proyecto usa `output: 'export'` en `next.config.ts`, lo que genera un sitio completamente estático en la carpeta `/out`.

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
```

Actualmente desplegado en **DigitalOcean** en el dominio:

```
https://v2.losolivoscartagena.com
```

Los repositorios remotos son:

```
origin:   https://github.com/DigitalAllianceCtg/olivos-cartagena-v2.git
personal: https://github.com/bvergara22/los-olivos-v2.git
```

Para sincronizar cambios del repo origen al personal:

```bash
git fetch origin
git merge origin/main
git push personal main
```

---

## Archivos multimedia

Los videos están alojados en **DigitalOcean Spaces** y excluidos del repositorio (ver `.gitignore`):

| Video | Nombre en Spaces |
|---|---|
| Parque Memorial | `VIDEO PARQUE (1).mp4` |
| Nuestro Proyecto | `Video Project 1.mp4` |
| Sanando el Dolor | `SANANDO JUNTOS.mp4` |

**Space:** `losolivoscartagena` — región `sfo3` — carpeta `/video/` — acceso público.

Para actualizar un video:
1. Comprimir con ffmpeg (ver sección siguiente)
2. Subir al Space con el mismo nombre, carpeta `/video/`, acceso público

---

## Optimización de recursos

### Videos — ffmpeg

```bash
# Comprimir video manteniendo calidad visual (CRF 28-32)
ffmpeg -i input.mp4 \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" \
  -c:a aac -b:a 96k \
  -movflags +faststart \
  output.mp4
```

### Imágenes — sharp

Todas las imágenes en `/public` están optimizadas a ≤ 500 KB. Para comprimir nuevas imágenes:

```bash
node -e "
const sharp = require('sharp');
// PNG
sharp('public/imagen.png')
  .png({ quality: 70, compressionLevel: 9 })
  .toFile('public/imagen.png');
// JPG
sharp('public/imagen.jpg')
  .jpeg({ quality: 75, mozjpeg: true })
  .toFile('public/imagen.jpg');
"
```

---

## Sistema de diseño

### Tipografía

| Variable | Fuente | Uso |
|---|---|---|
| `--font-sans` | Raleway | Cuerpo de texto general |
| `--font-display` | Comfortaa | Títulos y encabezados |

Los tamaños de fuente están incrementados en 1px sobre los defaults de Tailwind, configurados en `src/app/globals.css` dentro del bloque `@theme inline`.

### Colores

Los colores se definen en `src/app/globals.css` y se pueden modificar desde un solo lugar para actualizar todo el sitio:

| Token | Valor | Sección |
|---|---|---|
| `--primary` | `#4caf50` | Color de marca principal (verde) |
| `--duelo-main` | `#3e2455` | Parque Cementerio / Homenaje / Duelo |
| `--duelo-dark` | `#240e36` | Títulos sección Duelo |
| `--duelo-light` | `#a183b5` | Fondos suaves sección Duelo |
| `--vida-main` | `#f0a33d` | Sección Beneficios |
| `--vida-dark` | `#e65c36` | Botones sección Beneficios |
| `--cotizar-main` | `#477a7b` | Sección Cotizar |
| `--cotizar-dark` | `#274149` | Botones sección Cotizar |

---

## Variables de entorno

El proyecto no requiere variables de entorno para su funcionamiento básico. Si se agregan integraciones externas, crear un archivo `.env.local` (incluido en `.gitignore`).

---

## Licencia

Proyecto privado — © Los Olivos Cartagena. Todos los derechos reservados.
