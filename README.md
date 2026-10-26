# VI Semana de la Geofísica

Sitio web oficial de la **VI Semana de la Geofísica** — Universidad Industrial de Santander, Bucaramanga, Colombia. Evento académico y científico que reúne estudiantes, profesionales e investigadores en torno a las últimas tendencias en geociencias.

## Acerca del Proyecto

El sitio web de la VI Semana de la Geofísica fue migrado desde un sitio estático construido con **HTML + CSS + JavaScript puro** a una aplicación moderna basada en **React**, con el objetivo de mejorar la optimización, el orden del código y la experiencia de desarrollo. La migración incluyó:

- Componentización de la interfaz con **React** para reutilizar elementos como heroes, cards y formularios.
- Estilizado con **TailwindCSS 4** para un diseño responsive y consistente.
- Integración de **EmailJS** para gestionar el formulario de inscripción de asistentes directamente desde el navegador, sin necesidad de backend.
- Animaciones y transiciones de página con **Framer Motion**.
- Optimización de imágenes al formato **AVIF** mediante un script personalizado.
- Enrutamiento del lado del cliente con **React Router**.

## Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19 | Framework de UI |
| Vite | 8 | Bundler y servidor de desarrollo |
| TailwindCSS | 4 | Estilos utilitarios |
| EmailJS | 4 | Envío de correos desde el navegador |
| Framer Motion | 13 | Animaciones |
| React Router | 7 | Enrutamiento SPA |
| Lucide React | 1 | Iconografía |
| Sharp | 0.35 | Conversión de imágenes a AVIF |

## Estructura del Proyecto

```
├── public/                  # Archivos estáticos (favicon, icons)
├── scripts/
│   └── convert-to-avif.mjs  # Script de conversión de imágenes
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── pages/           # Componentes de cada página
│   │   ├── static/          # Hero, VideoHero
│   │   └── ui/              # Botones, cards, modales, utilidades
│   ├── data/                # Datos de páginas, equipo, eventos
│   ├── hooks/               # Custom hooks (scroll reveal, etc.)
│   ├── App.jsx              # Router principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Tema de Tailwind y animaciones
├── .env.example             # Plantilla de variables de entorno
├── eslint.config.js         # Configuración de ESLint
├── index.html               # HTML de entrada
├── package.json
└── vite.config.js           # Configuración de Vite
```

## Configuración y Ejecución Local

### Prerrequisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm o un gestor de paquetes equivalente

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/VIsemanageofisica/6a-semana-geofisica.github.io.git
cd 6a-semana-geofisica.github.io
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env` a partir de la plantilla y completa las variables de EmailJS:

```bash
cp .env.example .env
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run convert-avif` | Convierte imágenes PNG/JPG a formato AVIF |

## Variables de Entorno

Copia `.env.example` a `.env` y completa los valores:

| Variable | Descripción |
|----------|-------------|
| `EMAILJS_KEY` | Clave pública de tu cuenta EmailJS |
| `EMAILJS_SERVICE_ID` | ID del servicio de correo configurado |
| `EMAILJS_TEMPLATE_ASISTENTE_ID` | Template de confirmación enviado al asistente |
| `EMAILJS_TEMPLATE_ORGANIZADOR_ID` | Template de notificación enviado al organizador |
| `EMAILJS_ORGANIZADOR_EMAIL` | Dirección de correo del organizador |

## Páginas / Rutas

| Ruta | Página |
|------|--------|
| `/` | Inicio |
| `/registro` | Inscripción al evento |
| `/contacto` | Canales de atención |
| `/programa` | Agenda oficial |
| `/cursos` | Explora los cursos |
| `/patrocinadores` | Patrocinadores |
| `/apoyo-estudiantes` | Apoyo a estudiantes |
| `/aprende-geofisica` | Repositorio SIGAC |
| `/v-semana` | V Semana de la Geofísica |
| `/recepcion-resumenes` | Recepción de resúmenes |

## Contacto

- **Email:** 6a.semana.geofisica@gmail.com
- **Instagram:** [@semana_geofisica](https://www.instagram.com/semana_geofisica/)
- **Grupo de Investigación HDSP:** [hdsp@uis.edu.co](mailto:hdsp@uis.edu.co)

## Licencia

Este proyecto es propiedad del Grupo de Investigación HDSP — Universidad Industrial de Santander.
