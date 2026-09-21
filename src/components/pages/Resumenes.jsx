import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import Hero from '../static/Hero.jsx';
import { DataPages } from '../../data/Vistas.js';
import Button from '../ui/Button.jsx';
import Video from '../static/VideoHero.jsx';
import AnimatedButton from '../ui/AnimatedButton.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';
import Recepcion1 from '../../assets/flyers/recepcion_resumenes_2026.avif';
import Recepcion2 from '../../assets/flyers/recepcion_resumenes_poster.avif';
import Recepcion3 from '../../assets/flyers/recepcion_resumenes_posters_evento.avif';
import FeaturesCards from '../ui/FeaturesCards.jsx';

const tituloResumenes = DataPages.find(page => page.id === 10)?.titleHero;

const microCardData = [
  { title: 'Presente su trabajo de investigación', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { title: 'Aprenda de expertos del área', icon: 'M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9' },
  { title: 'Networking con colegas', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { title: 'Viva la experiencia científica', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
];

const benefitData = [
  { title: 'Divulga tus resultados', desc: 'Presenta los principales aportes de tu investigación ante estudiantes, profesores, profesionales e investigadores de diferentes áreas de las geociencias.', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
  { title: 'Recibe retroalimentación', desc: 'Intercambia conocimientos, discute tus resultados y conoce nuevas perspectivas que pueden contribuir al desarrollo de tu trabajo.', icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z' },
  { title: 'Establece conexiones académicas', desc: 'Conoce investigadores con intereses similares y genera oportunidades de colaboración académica y científica.', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
  { title: 'Da visibilidad a tu trabajo', desc: 'Comunica tus avances mediante un póster claro, visual y accesible para los asistentes al evento.', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
];

const lineasTematicas = [
  'Exploración, adquisición e inversión geofísica',
  'Métodos eléctricos, electromagnéticos y potenciales',
  'IA, modelos de lenguaje y métodos computacionales',
  'Geoestadística, modelamiento y simulación',
  'Sismología, amenazas y gestión del riesgo',
  'Teledetección y cambio climático',
  'Hidrogeología, geotecnia y agrogeofísica',
  'Recursos, energías renovables y transición energética'
];

const stepsData = [
  { title: '1. Revisa las líneas temáticas', desc: 'Identifica el área que mejor se relaciona con tu trabajo.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
  { title: '2. Prepara tu resumen', desc: 'Describe de manera clara el propósito de la investigación, la metodología utilizada, los principales resultados y las conclusiones más relevantes.', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { title: '3. Completa el formulario', desc: 'Registra la información de los autores y sigue las indicaciones disponibles en el formulario de recepción de resúmenes.', icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' },
];

const Resumenes = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [leftRef, leftVisible] = useScrollReveal({ margin: '-80px' });
  const [rightRef, rightVisible] = useScrollReveal({ margin: '-80px' });

  return (
    <div>
      <Hero titulo={tituloResumenes}>
        <Button className="w-full sm:w-auto sm:mr-12" onClick={() => console.log('Ir a subir resumen')}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform" target="_blank" rel="noopener noreferrer">SUBE TU RESUMEN</a>
        </Button>
        <Button
          className="w-full sm:w-auto border sm:ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
        >
          <a href="https://www.instagram.com/semana_geofisica/" target="_blank" rel="noopener noreferrer">NOTICIAS Y ACTUALIZACIONES</a>
        </Button>
      </Hero>

      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            ref={quoteRef}
            initial={{ opacity: 0, y: 20 }}
            animate={quoteVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 flex items-center justify-center gap-4 sm:mb-20"
          >
            <div className="mb-8 flex items-center justify-center gap-4 sm:mb-20">
              <h3 className="text-center font-['Montserrat'] text-sm italic tracking-wide text-slate-900 sm:text-base sm:tracking-widest lg:text-2xl">
                "Lo importante es no dejar de cuestionar". (Albert Einstein) 
              </h3>
            </div>
          </motion.div>

          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mb-10 flex items-center justify-center gap-4"
          >
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32" />
            <TextReveal split="words" stagger={0.08} className="text-center font-['Montserrat'] text-lg font-bold uppercase tracking-wide text-slate-900 break-words sm:text-2xl sm:tracking-widest md:text-3xl">
              VI Semana de la Geofísica
            </TextReveal>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32" />
          </motion.div>

          <motion.div
            ref={descRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <p className="font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              Conoce la información para la recepción de resúmenes de pósteres de la VI Semana de la Geofísica, incluyendo la fecha límite y las líneas temáticas disponibles.
            </p>
          </motion.div>

          <FeaturesCards/>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, x: -20 }}
              animate={leftVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col lg:col-span-7"
            >
              <h2 className="mb-6 font-['Montserrat'] text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl">
                Comparte tu investigación en la VI Semana de la Geofísica
              </h2>
              <p className="mb-4 font-['Montserrat'] text-base leading-relaxed text-slate-600">
                La VI Semana de la Geofísica abre la convocatoria para la recepción de resúmenes de trabajos que serán presentados en modalidad póster. Esta es una oportunidad para divulgar avances científicos, metodologías, resultados y aplicaciones relacionadas con la geofísica, la geología y las geociencias.
              </p>
              <p className="mb-10 font-['Montserrat'] text-base leading-relaxed text-slate-600">
                El evento se realizará presencialmente del 3 al 7 de noviembre de 2026 en la Universidad Industrial de Santander, en Bucaramanga.
              </p>

              <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                ¿Por qué presentar tu investigación?
              </h3>
              <ul className="mb-10 flex flex-col gap-6">
                {benefitData.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-slate-900">{item.title}</strong>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                Líneas Temáticas
              </h3>
              <p className="mb-6 font-['Montserrat'] text-base leading-relaxed text-slate-600">
                La convocatoria incluye investigaciones relacionadas con las siguientes áreas. Consulta en el flyer el listado completo y selecciona la que mejor represente tu investigación:
              </p>
              <div className="mb-10 flex flex-wrap gap-3 font-['Montserrat'] text-sm font-medium">
                {lineasTematicas.map((tema, index) => (
                  <span
                    key={index}
                    className="cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-gold-400 hover:bg-gold-50 hover:text-gold-700 hover:shadow-lg hover:shadow-gold-500/20"
                  >
                    {tema}
                  </span>
                ))}
              </div>

              <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                ¿Cómo enviar tu resumen?
              </h3>
              <div className="mb-8 flex flex-col gap-6">
                {stepsData.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600 shadow-sm transition-transform hover:scale-110">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Montserrat'] font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={leftVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 p-6 shadow-xl shadow-brand-900/20 sm:p-8"
              >
                <div className="absolute -right-6 -top-6 opacity-10">
                  <svg className="h-32 w-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md">
                    <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-gold-300">4. Envía tu propuesta a tiempo</h4>
                    <p className="mt-1 font-['Montserrat'] text-2xl font-black text-white sm:text-3xl">Jueves 22 de octubre de 2026</p>
                    <p className="mt-1 text-sm text-brand-100">Fecha límite inamovible para la recepción de resúmenes.</p>
                  </div>
                </div>
              </motion.div>

              <div className="mb-6 flex flex-col items-start rounded-xl border-l-4 border-gold-400 bg-gold-50 p-6">
                <h4 className="font-['Montserrat'] text-lg font-bold text-slate-800 sm:text-xl">
                  ¡Presenta tu investigación y forma parte de este espacio de intercambio científico y académico!
                </h4>
              </div>

              <div className="flex w-full justify-start">
                <AnimatedButton onClick={() => console.log('Abriendo formulario')}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhq-i8Raa3W6W2wPUhHqbriF4j08ck63dccxAKLYcZuP8PjQ/viewform">Envía Resumen</a>
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              ref={rightRef}
              initial={{ opacity: 0, x: 20 }}
              animate={rightVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col gap-8 lg:col-span-5"
            >
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                <OptimizedImage src={Recepcion1} alt="Flyer del evento" className="h-full w-full object-cover" fill />
              </div>
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                <OptimizedImage src={Recepcion2} alt="Flyer del evento" className="h-full w-full object-cover" fill />
              </div>
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                <OptimizedImage src={Recepcion3} alt="Flyer del evento" className="h-full w-full object-cover" fill />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Video />
    </div>
  );
};

export default Resumenes;
