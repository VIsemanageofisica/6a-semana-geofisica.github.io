import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import OptimizedImage from '../ui/OptimizedImage.jsx'
import eventLogo from '../../assets/logos/2026_VI_SEMANA_GEOFÍSICA.avif'
import logoUis from '../../assets/logos/UIS.avif'

const menuItems = [
  { label: 'Inicio', to: '/', end: true },
  {
    label: 'Registro',
    to: '/registro',
    children: [
      { label: 'Inscripción', to: '/registro' },
      { label: 'Recepción de resúmenes', to: '/recepcion-resumenes' },
    ],
  },
  {
    label: 'Contacto',
    to: '/contacto',
  },
  {
    label: 'Programa',
    to: '/programa',
  },
  {
    label: 'Cursos',
    to: '/cursos',
  },
  {
    label: 'Patrocinadores',
    to: '/patrocinadores',
  },
  { label: 'Apoyo a estudiantes', to: '/apoyo-estudiantes' },
  { label: 'Aprende de Geofísica', to: '/aprende-geofisica' },
  { label: 'V Semana de la Geofísica', to: '/v-semana' },
]

// Se cambió font-medium por font-['Montserrat'] font-semibold
const navLink = (isActive) =>
  `flex items-center gap-1.5 rounded-md px-3 py-2 text-lg font-['Montserrat'] font-semibold text-white transition-colors duration-200 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
    isActive ? 'text-white' : ''
  }`

const NavLabel = ({ children, active }) => (
  <span className="relative">
    {children}
    <span
      className={`absolute -bottom-1 left-0 right-0 h-[2px] origin-left rounded-full bg-gold-400 transition-transform duration-300 ease-snappy ${
        active ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  </span>
)

const Chevron = () => (
  <svg
    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:rotate-180"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 4 4 4-4" />
  </svg>
)

const Logo = ({ className }) => (
  <span
    className={`flex shrink-0 items-center justify-center bg-white p-2 ${className}`}
  >
    <OptimizedImage
      src={eventLogo}
      alt="Logo de la 6ª Semana de la Geofísica"
      className="h-full w-full"
      imgClassName="object-contain"
      priority
    />
  </span>
)

const LogoUis = ({className}) => (
  <span  className={`flex shrink-0 items-center justify-center bg-white p-2 ${className}`}>
    <OptimizedImage
      src={logoUis}
      alt="Logo Universidad Industrial de Santander"
      className="h-full w-full"
      imgClassName="object-contain"
      priority
    />
  </span>
)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) => (current === label ? null : label))
  }

  return (
    <>
      <header className="relative z-50 overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-6 lg:px-8 lg:py-10">
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-6"
            aria-label="Ir a Inicio"
          >
            <Logo className="h-14 w-14 shrink-0 rounded-xl sm:h-28 sm:w-28 sm:rounded-2xl  mix-blend-multiply" />
            <span className="flex flex-col gap-1 sm:gap-1.5">
              <span className="font-['Montserrat'] text-base font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                VI Semana de la Geofísica
              </span>
              <span className="flex items-center gap-1.5 text-xs font-['Montserrat'] font-semibold text-gold-600 sm:gap-2 sm:text-xl">
                <svg
                  className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M8 2v4M16 2v4M3 9h18" />
                </svg>
                <span className="hidden sm:inline">03 - 07 Noviembre 2026, Bucaramanga - Santander</span>
                <span className="sm:hidden">03 - 07 Nov 2026</span>
              </span>
            </span>
          </Link>
          <LogoUis className="hidden h-24 w-24 shrink-0 rounded-2xl bg-transparent sm:flex lg:h-20 lg:w-32  mix-blend-multiply" />
        </div>
      </header>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-950/90 shadow-lg shadow-brand-950/20 backdrop-blur-md border-b border-white/5'
          : 'bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 shadow-sm'
      }`}>
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 xl:hidden"
            aria-label="Ir a Inicio"
          >
            <Logo className="h-9 w-9 rounded-lg" />
            {/* Aplicado Montserrat Semibold al título en móvil */}
            <span className="hidden font-['Montserrat'] text-sm font-semibold text-white sm:block">
              6ª Semana de la Geofísica
            </span>
          </Link>

          <div className="hidden flex-1 xl:block">
            <ul className="flex items-center justify-center gap-1">
              {menuItems.map((item) =>
                item.children ? (
                  <li key={item.label} className="group relative">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => navLink(isActive)}
                    >
                      {({ isActive }) => (
                        <>
                          <NavLabel active={isActive}>
                            <span className="group-hover:text-gold-300">
                              {item.label}
                            </span>
                          </NavLabel>
                          <Chevron />
                        </>
                      )}
                    </NavLink>
                    <ul className="invisible absolute left-0 top-full z-10 w-64 origin-top-left scale-95 border border-slate-100 bg-white p-1.5 opacity-0 shadow-xl transition-[opacity,transform,visibility] duration-[180ms] ease-snappy group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              // Aplicado Montserrat Semibold a los submenús
                              `block rounded-lg px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                                isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) => navLink(isActive)}
                    >
                      {({ isActive }) => (
                        <NavLabel active={isActive}>{item.label}</NavLabel>
                      )}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors duration-200 hover:bg-white/10 hover:text-gold-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 xl:hidden"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 xl:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <aside
          id="mobile-menu"
          className={`fixed inset-y-0 right-0 z-[70] w-72 max-w-[85vw] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 xl:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Menú de navegación"
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
              <Logo className="h-9 w-9 rounded-lg" />
              <span className="font-['Montserrat'] text-sm font-semibold text-slate-800">
                6ª Semana de la Geofísica
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <ul className="px-3 py-3">
            {menuItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <div className="flex items-center justify-between rounded-md">
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        // Montserrat Semibold en el menú móvil
                        `flex flex-1 items-center rounded-md px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:text-brand-700 ${
                          isActive ? 'text-brand-700' : 'text-slate-800'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                      aria-label={`${openSubmenu === item.label ? 'Cerrar' : 'Abrir'} submenú de ${item.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors duration-200 hover:bg-slate-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${
                      openSubmenu === item.label
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="ml-3 border-l border-slate-100 pl-3 pb-1">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              onClick={closeMenu}
                              className={({ isActive }) =>
                                // Montserrat Semibold en el submenú móvil
                                `block rounded-md px-3 py-2 font-['Montserrat'] text-sm font-semibold transition-colors duration-200 hover:text-brand-700 ${
                                  isActive ? 'text-brand-700' : 'text-slate-600'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      // Montserrat Semibold en el menú móvil para links directos
                      `block rounded-md px-3 py-2 font-['Montserrat'] text-base font-semibold transition-colors duration-200 hover:text-brand-700 ${
                        isActive ? 'text-brand-700' : 'text-slate-800'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </aside>
      </nav>
    </>
  )
}

export default Navbar