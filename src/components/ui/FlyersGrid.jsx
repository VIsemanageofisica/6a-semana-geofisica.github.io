import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage.jsx';

// Íconos de fecha, hora y lugar
const ICONOS = {
  fecha: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  hora: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  lugar: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
};

const Icono = ({ nombre, className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={ICONOS[nombre]} />
  </svg>
);

// Modal que muestra el flyer en grande con la información de la actividad
export const FlyerModal = ({ item, onClose }) => {
  const panelRef = useRef(null);
  const previousFocus = useRef(null);

  const handleClose = useCallback(() => {
    previousFocus.current?.focus?.();
    onClose();
  }, [onClose]);

  // Bloqueamos el scroll y cerramos el modal con la tecla Escape
  useEffect(() => {
    if (!item) return undefined;
    previousFocus.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    const onKeyDown = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [item, handleClose]);

  return createPortal(
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
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
            aria-label={item.titulo}
            tabIndex={-1}
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto scrollbar-modal rounded-2xl bg-white shadow-2xl outline-none sm:rounded-3xl md:flex-row md:overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-slate-600 shadow-sm transition-colors duration-200 hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Flyer completo */}
            <div className="flex shrink-0 items-center justify-center bg-slate-100 md:max-h-[92vh] md:w-3/5">
              <img
                src={item.flyer}
                alt={`Flyer de ${item.titulo}`}
                className="block h-auto max-h-[70vh] w-full object-contain md:max-h-[92vh]"
              />
            </div>

            {/* Información de la actividad */}
            <div className="flex flex-col px-6 py-7 sm:px-8 md:w-2/5 md:overflow-y-auto">
              <span className="mb-3 inline-flex w-fit rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-widest text-gold-600">
                {item.etiqueta || 'Actividad'}
              </span>
              <h2 className="mb-4 pr-8 font-['Montserrat'] text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                {item.titulo}
              </h2>

              <div className="mb-5 flex flex-col gap-2">
                {['fecha', 'hora', 'lugar'].map((campo) =>
                  item[campo] ? (
                    <span key={campo} className="flex items-start gap-2 font-['Montserrat'] text-sm text-slate-700">
                      <Icono nombre={campo} className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      {item[campo]}
                    </span>
                  ) : null
                )}
              </div>

              <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />

              {item.descripcion && (
                <p className="mb-6 whitespace-pre-line font-['Montserrat'] text-[15px] leading-relaxed text-slate-600">
                  {item.descripcion}
                </p>
              )}

              <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center">
                {item.link_inscripcion && (
                  <a
                    href={item.link_inscripcion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 font-['Montserrat'] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold-500/25 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Inscribirme
                  </a>
                )}
                <a
                  href={item.flyer}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-['Montserrat'] text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                >
                  Descargar flyer
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// Tarjeta con la miniatura del flyer
const FlyerCard = ({ item, index, onOpen }) => (
  <motion.button
    type="button"
    onClick={() => onOpen(item)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.23, 1, 0.32, 1] }}
    className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
    aria-label={`Ver flyer de ${item.titulo}`}
  >
    {/* Miniatura del flyer */}
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
      <OptimizedImage
        src={item.flyer}
        alt={`Flyer de ${item.titulo}`}
        className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
        fill
      />
      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-5 rounded-full bg-white/95 px-4 py-1.5 font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-brand-800 shadow">
          Ver flyer
        </span>
      </div>
    </div>

    {/* Datos de la actividad */}
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-brand-600 to-gold-400" />
      <h3 className="mb-3 font-['Montserrat'] text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-700">
        {item.titulo}
      </h3>
      <div className="flex flex-col gap-1.5">
        {['fecha', 'hora', 'lugar'].map((campo) =>
          item[campo] ? (
            <span key={campo} className="flex items-start gap-2 font-['Montserrat'] text-sm text-slate-600">
              <Icono nombre={campo} className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {item[campo]}
            </span>
          ) : null
        )}
      </div>
    </div>
  </motion.button>
);

// Grilla de flyers, genera una tarjeta por cada elemento
const FlyersGrid = ({ items = [], etiqueta }) => {
  const [abierto, setAbierto] = useState(null);

  if (!items.length) return null;

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FlyerCard key={item.id} item={item} index={i} onOpen={(it) => setAbierto({ etiqueta, ...it })} />
        ))}
      </div>
      <FlyerModal item={abierto} onClose={() => setAbierto(null)} />
    </>
  );
};

export default FlyersGrid;
