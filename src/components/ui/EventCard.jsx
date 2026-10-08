import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Íconos en línea con el mismo estilo de los demás íconos del sitio
const ICONS = {
  fecha: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  hora: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  lugar: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  externo: 'M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25',
  click: 'M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59',
}

const Icon = ({ name, className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[name]} />
  </svg>
)

// Obtenemos las iniciales del ponente cuando no tiene foto
const getIniciales = (nombre = '') =>
  nombre
    .split(' ')
    .filter((p) => p && !p.includes('.') && !/^(dr|dra|ing|msc|phd|prof|geo|esp|y)$/i.test(p))
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()

// Foto del ponente, si no tiene imagen se muestran sus iniciales
const Avatar = ({ src, nombre, textClass = 'text-4xl' }) =>
  src ? (
    <img
      src={src}
      alt={`Foto de ${nombre}`}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
    />
  ) : (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-800 to-brand-950 font-['Montserrat'] font-black text-gold-300 ${textClass}`}
      aria-hidden="true"
    >
      {getIniciales(nombre) || '?'}
    </div>
  )

// Ítem de fecha, hora o lugar (no se muestra si viene vacío)
const MetaItem = ({ icon, children }) =>
  children ? (
    <span className="inline-flex items-center gap-1.5">
      <Icon name={icon} className="h-3.5 w-3.5 shrink-0 text-gold-400" />
      {children}
    </span>
  ) : null

// Modal con la descripción completa del evento y el botón de inscripción
const EventModal = ({ evento, tipo, open, onClose }) => {
  const panelRef = useRef(null)
  const previousFocus = useRef(null)

  const handleClose = useCallback(() => {
    previousFocus.current?.focus?.()
    onClose()
  }, [onClose])

  // Bloqueamos el scroll y cerramos el modal con la tecla Escape
  useEffect(() => {
    if (!open) return undefined
    previousFocus.current = document.activeElement
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    const onKeyDown = (e) => e.key === 'Escape' && handleClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, handleClose])

  const titleId = `evento-${tipo}-${evento.id}-titulo`
  const tieneLink = Boolean(evento.link_inscripcion)

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto scrollbar-modal rounded-2xl bg-white shadow-2xl outline-none sm:rounded-3xl"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Cabecera con la foto y datos del ponente */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 px-6 pb-8 pt-10 text-white sm:px-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />

              <button
                type="button"
                onClick={handleClose}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full ring-4 ring-gold-400/80 ring-offset-4 ring-offset-brand-950 sm:h-32 sm:w-32">
                  <Avatar src={evento.imagen_ponente} nombre={evento.ponente} textClass="text-3xl" />
                </div>
                <div>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    <span className="inline-flex rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-300">
                      {tipo}
                    </span>
                    {/* Ponente nacional o internacional */}
                    {evento.tipo_ponente && (
                      <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-300">
                        {evento.tipo_ponente}
                      </span>
                    )}
                  </div>
                  <h2 id={titleId} className="mt-3 font-['Montserrat'] text-xl font-black leading-tight sm:text-2xl md:text-3xl">
                    {evento.titulo}
                  </h2>
                  <p className="mt-2 font-['Montserrat'] text-sm font-semibold text-gold-300 sm:text-base">
                    {evento.ponente}
                  </p>
                  {evento.cargo_ponente && (
                    <p className="mt-0.5 font-['Montserrat'] text-xs text-slate-400 sm:text-sm">{evento.cargo_ponente}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Fecha, hora y lugar del evento */}
            {(evento.fecha || evento.hora || evento.lugar) && (
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-b border-slate-100 bg-slate-50 px-6 py-4 font-['Montserrat'] text-sm font-medium text-slate-700 sm:justify-start sm:px-10">
                <MetaItem icon="fecha">{evento.fecha}</MetaItem>
                <MetaItem icon="hora">{evento.hora}</MetaItem>
                <MetaItem icon="lugar">{evento.lugar}</MetaItem>
              </div>
            )}

            <div className="px-6 py-7 sm:px-10">
              <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />

              {/* Descripción del evento */}
              {evento.descripcion && (
                <div className="mb-7">
                  <h3 className="mb-3 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-slate-900">
                    Descripción
                  </h3>
                  <div className="whitespace-pre-line font-['Montserrat'] text-[15px] leading-relaxed text-slate-600">
                    {evento.descripcion}
                  </div>
                </div>
              )}

              {/* Perfil del ponente */}
              {evento.perfil_ponente && (
                <div className="mb-7">
                  <h3 className="mb-3 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-slate-900">
                    Sobre el ponente
                  </h3>
                  <div className="whitespace-pre-line font-['Montserrat'] text-[15px] leading-relaxed text-slate-600">
                    {evento.perfil_ponente}
                  </div>
                </div>
              )}

              {/* Mensaje cuando aún no hay información */}
              {!evento.descripcion && !evento.perfil_ponente && (
                <p className="font-['Montserrat'] text-[15px] leading-relaxed text-slate-600">
                  La descripción de este evento estará disponible próximamente.
                </p>
              )}

              <div className="mt-1 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full px-6 py-3 font-['Montserrat'] text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                >
                  Cerrar
                </button>
                {tieneLink ? (
                  <a
                    href={evento.link_inscripcion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-10 py-3.5 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-brand-950 shadow-lg shadow-gold-500/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                  >
                    Inscribirme
                    <Icon name="externo" className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-slate-400">
                    Inscripciones próximamente
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

// Tarjeta con efecto flip: muestra al ponente, al hacer hover el evento y al hacer clic abre el modal
const EventCard = ({ evento, tipo = 'Evento' }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="event-card group text-left focus-visible:outline-none"
        aria-haspopup="dialog"
        aria-label={`${evento.titulo} — ${evento.ponente}. Ver detalles`}
      >
        <div className="event-card__inner">
          {/* Cara inicial: foto y nombre del ponente */}
          <div className="event-card__face event-card__speaker">
            <div className="event-card__speaker-content">
              <div className="event-card__avatar">
                <Avatar src={evento.imagen_ponente} nombre={evento.ponente} />
              </div>
              <div className="px-5 text-center">
                <p className="font-['Montserrat'] text-lg font-bold leading-snug text-white">
                  {evento.ponente}
                </p>
                {evento.cargo_ponente && (
                  <p className="mt-1 line-clamp-2 font-['Montserrat'] text-xs text-slate-400">
                    {evento.cargo_ponente}
                  </p>
                )}
              </div>
              <span className="font-['Montserrat'] text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400/80">
                {tipo}
              </span>
            </div>
          </div>

          {/* Cara al hacer hover: nombre e información del evento */}
          <div className="event-card__face event-card__event">
            {/* Círculos flotantes de fondo */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="event-card__blob" />
              <div className="event-card__blob event-card__blob--right" />
              <div className="event-card__blob event-card__blob--bottom" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-4">
              <div className="flex items-center justify-between gap-2">
                <small className="rounded-full bg-black/30 px-3 py-1 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
                  {tipo}
                </small>
                <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-gold-400/70">
                  <Avatar src={evento.imagen_ponente} nombre={evento.ponente} textClass="text-xs" />
                </div>
              </div>

              <div className="rounded-xl bg-black/55 p-4 shadow-[0_0_20px_6px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <p className="line-clamp-4 font-['Montserrat'] text-base font-bold leading-snug text-white">
                  {evento.titulo}
                </p>
                <p className="mt-1 truncate font-['Montserrat'] text-xs font-medium text-gold-300">
                  {evento.ponente}
                </p>
                <div className="mt-3 flex flex-col gap-1 font-['Montserrat'] text-[11px] text-white/70">
                  <MetaItem icon="fecha">{evento.fecha}</MetaItem>
                  <MetaItem icon="hora">{evento.hora}</MetaItem>
                  <MetaItem icon="lugar">{evento.lugar}</MetaItem>
                </div>
                <p className="mt-3 inline-flex items-center gap-1.5 border-t border-white/10 pt-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wider text-gold-400">
                  <Icon name="click" className="h-3.5 w-3.5" />
                  Ver detalles e inscripción
                </p>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Modal del evento */}
      <EventModal evento={evento} tipo={tipo} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default EventCard
