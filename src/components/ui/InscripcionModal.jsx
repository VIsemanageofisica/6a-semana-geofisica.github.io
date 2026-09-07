import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ASISTENTE = import.meta.env.VITE_EMAILJS_TEMPLATE_ASISTENTE_ID
const TEMPLATE_ORGANIZADOR = import.meta.env.VITE_EMAILJS_TEMPLATE_ORGANIZADOR_ID
const ORGANIZADOR_EMAIL =
  import.meta.env.VITE_EMAILJS_ORGANIZADOR_EMAIL || '6a.semana.geofisica@gmail.com'
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL

const NIVEL_OPTIONS = [
  'Estudiante de pregrado',
  'Estudiante de posgrado',
  'Profesional',
  'Técnico o tecnólogo',
  'Otros',
]

const POSTER_OPTIONS = ['Sí', 'No']

const ENTERADO_OPTIONS = ['Página de Instagram', 'Amigo', 'Boletín informativo', 'Anuncio']

const initialForm = {
  nombre: '',
  email: '',
  afiliacion: '',
  nivel: '',
  nivelOtro: '',
  area: '',
  desde: '',
  poster: '',
  enterado: '',
  comentarios: '',
}

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30'

const Field = ({ label, required, error, children }) => (
  <label className="block">
    <span className="mb-1.5 block font-['Montserrat'] text-sm font-semibold uppercase tracking-wider text-slate-700">
      {label}
      {required && <span className="ml-1 text-gold-600">*</span>}
    </span>
    {children}
    {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
  </label>
)

const RadioGroup = ({ name, options, value, onChange }) => (
  <div className="flex flex-wrap gap-2" role="radiogroup">
    {options.map((option) => (
      <label
        key={option}
        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          value === option
            ? 'border-brand-700 bg-brand-700 text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:border-brand-700/60 hover:text-brand-700'
        }`}
      >
        <input
          type="radio"
          name={name}
          value={option}
          checked={value === option}
          onChange={() => onChange(option)}
          className="sr-only"
        />
        {option}
      </label>
    ))}
  </div>
)

const InscripcionModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const panelRef = useRef(null)
  const previousFocus = useRef(null)

  const handleClose = useCallback(() => {
    document.body.style.overflow = ''
    previousFocus.current?.focus()
    onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      previousFocus.current = document.activeElement
      document.body.style.overflow = 'hidden'
      panelRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        handleClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, handleClose])

  const setField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!form.nombre.trim()) nextErrors.nombre = 'Ingresa tu nombre completo.'
    if (!form.email.trim()) {
      nextErrors.email = 'Ingresa tu correo electrónico.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Ingresa un correo electrónico válido.'
    }
    if (!form.afiliacion.trim()) nextErrors.afiliacion = 'Ingresa tu afiliación o institución.'
    if (!form.nivel) {
      nextErrors.nivel = 'Selecciona tu nivel académico.'
    } else if (form.nivel === 'Otros' && !form.nivelOtro.trim()) {
      nextErrors.nivelOtro = 'Especifica tu nivel académico.'
    }
    if (!form.poster) nextErrors.poster = 'Selecciona una opción.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const nivelFinal = form.nivel === 'Otros' ? form.nivelOtro.trim() : form.nivel

    const params = {
      to_email: form.email.trim(),
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      afiliacion: form.afiliacion.trim(),
      nivel_academico: nivelFinal,
      area: form.area.trim(),
      desde: form.desde.trim(),
      poster: form.poster,
      enterado: form.enterado,
      comentarios: form.comentarios.trim(),
    }

    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ASISTENTE, params, { publicKey: PUBLIC_KEY })
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ORGANIZADOR,
        { ...params, to_email: ORGANIZADOR_EMAIL },
        { publicKey: PUBLIC_KEY },
      )
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(params),
        }).catch(() => {})
      }
      setStatus('success')
    } catch (error) {
      console.error('Error al enviar la inscripción:', error)
      setStatus('error')
    }
  }

  return (
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
            aria-labelledby="inscripcion-modal-title"
            tabIndex={-1}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl outline-none"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            <div className="relative border-b border-slate-100 px-6 py-5 sm:px-8">
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-gold-400 to-gold-600" />
              <h2
                id="inscripcion-modal-title"
                className="mt-3 pr-10 font-['Montserrat'] text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl"
              >
                Inscripción a la <span className="text-brand-700">VI Semana de la Geofísica</span>
              </h2>
              <p className="mt-1 font-['Montserrat'] text-sm text-slate-500">
                Completa tus datos. Recibirás la confirmación por correo.
              </p>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Cerrar formulario"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center px-6 py-14 text-center sm:px-8">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-black text-slate-900">
                  ¡Inscripción registrada!
                </h3>
                <p className="mt-2 max-w-md font-['Montserrat'] text-slate-600">
                  Hemos enviado la confirmación a <strong>{form.email}</strong>. Si tienes
                  preguntas, escríbenos a {ORGANIZADOR_EMAIL}.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-8 py-3 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-brand-950 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="px-6 py-6 sm:px-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field label="Nombre completo" required error={errors.nombre}>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={setField('nombre')}
                        placeholder="Ej. Ana María Pérez"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Correo electrónico" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={setField('email')}
                        placeholder="Ej. ana.perez@correo.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Afiliación o institución" required error={errors.afiliacion}>
                      <input
                        type="text"
                        value={form.afiliacion}
                        onChange={setField('afiliacion')}
                        placeholder="Ej. Universidad Industrial de Santander"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Nivel académico" required error={errors.nivel}>
                      <RadioGroup
                        name="nivel"
                        options={NIVEL_OPTIONS}
                        value={form.nivel}
                        onChange={(value) => setForm((current) => ({ ...current, nivel: value }))}
                      />
                    </Field>
                    {form.nivel === 'Otros' && (
                      <div className="mt-3">
                        <Field label="Especifica tu nivel académico" required error={errors.nivelOtro}>
                          <input
                            type="text"
                            value={form.nivelOtro}
                            onChange={setField('nivelOtro')}
                            placeholder="Escribe tu nivel académico"
                            className={inputClass}
                          />
                        </Field>
                      </div>
                    )}
                  </div>

                  <Field label="Área de formación o especialización">
                    <input
                      type="text"
                      value={form.area}
                      onChange={setField('area')}
                      placeholder="Ej. Sismología, geofísica aplicada…"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="¿Desde dónde nos visitas?">
                    <input
                      type="text"
                      value={form.desde}
                      onChange={setField('desde')}
                      placeholder="Ej. Ciudad, institución o país"
                      className={inputClass}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                      label="¿Tienes previsto enviar un póster para presentación en el evento?"
                      required
                      error={errors.poster}
                    >
                      <RadioGroup
                        name="poster"
                        options={POSTER_OPTIONS}
                        value={form.poster}
                        onChange={(value) => setForm((current) => ({ ...current, poster: value }))}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="¿Cómo te enteraste del evento?">
                      <RadioGroup
                        name="enterado"
                        options={ENTERADO_OPTIONS}
                        value={form.enterado}
                        onChange={(value) => setForm((current) => ({ ...current, enterado: value }))}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Comentarios o preguntas">
                      <textarea
                        value={form.comentarios}
                        onChange={setField('comentarios')}
                        placeholder="Escribe aquí tus comentarios o preguntas (opcional)"
                        rows={4}
                        className={`${inputClass} resize-none`}
                      />
                    </Field>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    No pudimos enviar tu inscripción. Inténtalo nuevamente o escríbenos a{' '}
                    {ORGANIZADOR_EMAIL}.
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-['Montserrat'] text-xs text-slate-400">
                    * Campos obligatorios
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-10 py-3.5 font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-brand-950 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        Enviando…
                      </>
                    ) : (
                      'Registrarme'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default InscripcionModal