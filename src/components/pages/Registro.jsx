import { useState } from 'react'
import Hero from '../static/Hero.jsx'
import Video from '../static/VideoHero.jsx'
import AnimatedButton from '../ui/AnimatedButton.jsx'
import Button from '../ui/Button.jsx'
import InscripcionModal from '../ui/InscripcionModal.jsx'
import { DataPages } from '../../data/Vistas.js';
import Flyer  from '../../assets/flyers/apoyo_estudiantes.png'

const Registro = () => {
  const tituloRegistro = DataPages.find(page => page.id === 2)?.titleHero || "Inscripción al evento";
  const [modalOpen, setModalOpen] = useState(false)
  const [modalKey, setModalKey] = useState(0)

  const openModal = () => {
    setModalKey((key) => key + 1)
    setModalOpen(true)
  }

  return (
    <div>
        <Hero titulo={tituloRegistro}>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              className="w-full sm:w-auto sm:mr-12"
              onClick={() => console.log('Ir a subir resumen')}
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform" target="_blank" rel="noopener noreferrer">INSCRIBETE AHORA</a>
            </Button>

            <Button 
                className="w-full sm:w-auto border sm:ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
            >
                <a href="https://www.instagram.com/semana_geofisica/" target="_blank" rel="noopener noreferrer">NOTICIAS Y ACTUALIZACIONES</a>
            </Button>
          </div>
        </Hero>

        {/* Sección de descripción superior */}
        <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex items-center justify-center gap-4 sm:mb-20">
              <h3 className="text-center font-['Montserrat'] text-sm italic tracking-wide text-slate-900 sm:text-base sm:tracking-widest lg:text-2xl">
                "Lo importante es no dejar de cuestionar". (Albert Einstein) 
              </h3>
            </div>
            
            {/* Título con separadores laterales */}
            <div className="mb-10 flex items-center justify-center gap-4">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"></div>
              <h2 className="text-center font-['Montserrat'] text-lg font-bold uppercase tracking-wide text-slate-900 break-words sm:text-2xl sm:tracking-widest md:text-3xl">
                VI Semana de la Geofísica
              </h2>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"></div>
            </div>

            {/* Descripción general del evento */}
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <p className="font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
                La VI Semana de la Geofísica se realizará en Bucaramanga, Santander, la reconocida “Ciudad Bonita”, un escenario ideal para el encuentro académico y científico en el corazón de los Andes colombianos. Este evento reunirá a estudiantes, profesionales e investigadores en torno a las últimas tendencias en exploración geofísica, inteligencia artificial aplicada a geociencias, transición energética, gestión del riesgo, sismología y agrogeofísica. La inscripción al evento se efectuará mediante un formulario de Google, donde encontrará toda la información e indicaciones necesarias para completar adecuadamente su registro y asegurar su participación en esta nueva edición del encuentro geofísico más importante de la región. 
              </p>
            </div>

            {/* Grid de Ítems Animados (Micro-cards) */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Ítem 1 */}
              <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Presente su trabajo de investigación</h3>
              </div>
              {/* Ítem 2 */}
              <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Aprenda de expertos del área</h3>
              </div>
              {/* Ítem 3 */}
              <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Networking con colegas</h3>
              </div>
              {/* Ítem 4 */}
              <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">Viva la experiencia científica</h3>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DETALLADA DE REGISTRO CON GRID DE 2 COLUMNAS */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            
            {/* Grid layout: 7 columnas para texto, 5 para imágenes en desktop */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              
              {/* COLUMNA IZQUIERDA: Textos e Información */}
              <div className="flex flex-col lg:col-span-7">
                <h2 className="mb-6 font-['Montserrat'] text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
                  Registra tu asistencia a la <span className="bg-gradient-to-r from-gold-400 to-brand-600 bg-clip-text text-transparent">VI Semana de la Geofísica</span>
                </h2>
                
                <p className="mb-4 font-['Montserrat'] text-base leading-relaxed text-slate-600">
                  Del 3 al 7 de noviembre de 2026, la Universidad Industrial de Santander será el punto de encuentro de estudiantes, profesionales, docentes e investigadores interesados en el presente y futuro de las geociencias.
                </p>
                <p className="mb-10 font-['Montserrat'] text-base leading-relaxed text-slate-600">
                  Durante cinco días, la VI Semana de la Geofísica ofrecerá un espacio para conocer avances científicos, intercambiar experiencias y establecer nuevas conexiones académicas y profesionales.
                </p>

                {/* Subtítulo 1 */}
                <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                  ¿Qué encontrarás en el evento?
                </h3>
                <ul className="mb-10 flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      {/* Icono de academia/conferencias */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-slate-900">Conferencias y espacios académicos</strong>
                      <span className="text-slate-600">Aprende de expertos nacionales e internacionales y conoce investigaciones recientes en diferentes áreas de la geofísica.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      {/* Icono de IA/Tecnología */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-slate-900">Geofísica, inteligencia artificial e innovación</strong>
                      <span className="text-slate-600">Explora aplicaciones de inteligencia artificial, ciencia de datos y nuevas tecnologías en geociencias, transición energética, monitoreo ambiental y gestión del riesgo.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      {/* Icono de Gráfico/Investigación */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-slate-900">Divulgación de investigaciones</strong>
                      <span className="text-slate-600">Comparte los resultados de tu trabajo, conoce proyectos desarrollados por otros participantes y participa en espacios de discusión científica.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      {/* Icono de Conexiones/Usuarios */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-slate-900">Conexiones académicas y profesionales</strong>
                      <span className="text-slate-600">Interactúa con estudiantes, investigadores, docentes, profesionales y representantes de diferentes instituciones.</span>
                    </div>
                  </li>
                </ul>

                {/* Subtítulo 2 */}
                <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                  Información del Evento
                </h3>
                <ul className="mb-10 flex flex-col gap-3 font-['Montserrat'] text-slate-700">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
                    <strong>Fecha:</strong> 3 al 7 de noviembre de 2026
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    <strong>Lugar:</strong> Universidad Industrial de Santander, Bucaramanga
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                    <strong>Modalidad:</strong> Presencial
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    <strong>Contacto:</strong> 6a.semana.geofisica@gmail.com
                  </li>
                </ul>

                {/* Subtítulo 3 y Botón */}
                <h3 className="mb-4 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                  ¿Cómo registrarte?
                </h3>
                <p className="mb-8 font-['Montserrat'] text-slate-600">
                  Completa el formulario de inscripción haciendo clic en el botón disponible a continuación o escaneando el código QR del flyer.
                </p>
                <div className="flex w-full justify-start">
                  <a>
                    <AnimatedButton onClick={openModal}>
                      REGISTRARME
                    </AnimatedButton>
                  </a>
                </div>
              </div>

              {/* COLUMNA DERECHA: Flyer y Mapa */}
              <div className="flex flex-col gap-8 lg:col-span-5">
                
                {/* Contenedor del Flyer (Sustituye el contenido con tu etiqueta <img />) */}
                <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                  <img src={Flyer} alt="Flyer del evento" className="h-full w-full object-cover" />
                  {/* Ejemplo de uso real: <img src={FlyerImg} alt="Flyer del evento" className="h-full w-full object-cover" /> */}
                </div>

                {/* Contenedor del Mapa (Integración con iframe de Google Maps - Coordenadas predeterminadas UIS) */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                  <iframe
                    title="Mapa Universidad Industrial de Santander"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.531777553597!2d-73.12199862402138!3d7.142999792862024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f1e944ef011%3A0x6b10de67f2e1a396!2sUniversidad%20Industrial%20de%20Santander!5e0!3m2!1ses!2sco!4v1715000000000!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Sección de video de fondo/cierre */}
        <Video/>

        <InscripcionModal key={modalKey} open={modalOpen} onClose={() => setModalOpen(false)} />

    </div>
  )
}

export default Registro;