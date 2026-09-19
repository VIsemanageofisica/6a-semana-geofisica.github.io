import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import VideoHero from '../static/VideoHero.jsx';
import Hero from '../static/Hero.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';
import { DataPages } from '../../data/Vistas.js';

import Foto1 from '../../assets/evento/v_semana_2025_conferencia_1.avif';
import Foto2 from '../../assets/evento/v_semana_2025_conferencia_2.avif';
import Foto3 from '../../assets/evento/v_semana_2025_conferencia_4.avif';

const tituloVgeofisica = DataPages.find(page => page.id === 9)?.titleHero || "V Semana de la Geofísica";

const listItems1 = [
  "La exploración y caracterización de recursos energéticos.",
  "El monitoreo ambiental y la gestión del riesgo.",
  "La transición energética.",
  "La inteligencia artificial aplicada a las geociencias.",
  "El procesamiento y la interpretación de datos geofísicos."
];

const gridItems = [
  { icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z', text: 'Conferencias magistrales con expertos nacionales e internacionales.' },
  { icon: 'M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z', text: 'Presentaciones orales de investigaciones y avances científicos.' },
  { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', text: 'Sesiones de pósteres para divulgar resultados y recibir retroalimentación.' },
  { icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18', text: 'Un reto académico orientado a la creatividad y la solución de problemas.' },
  { icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972m0 0a8.001 8.001 0 00-1.718-7.794m1.718 7.794a8.001 8.001 0 01-1.718 7.794M7.73 9.728A8.001 8.001 0 006.012 1.934m1.718 7.794a8.001 8.001 0 011.718 7.794', text: 'Reconocimientos para los trabajos y propuestas más destacadas.', fullWidth: true },
];

const listItems2 = [
  { icon: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244', color: 'text-blue-500', text: 'Crear nuevas redes de colaboración.' },
  { icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99', color: 'text-emerald-500', text: 'Intercambiar conocimientos y experiencias.' },
  { icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z', color: 'text-purple-500', text: 'Conocer oportunidades académicas y de investigación.' },
  { icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z', color: 'text-gold-500', text: 'Inspirar a nuevas generaciones de geocientíficos.' },
];

const Vgeofisica = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [introRef, introVisible] = useScrollReveal({ margin: '-80px' });
  const [block1Ref, block1Visible] = useScrollReveal({ margin: '-80px' });
  const [block2Ref, block2Visible] = useScrollReveal({ margin: '-80px' });
  const [block3Ref, block3Visible] = useScrollReveal({ margin: '-80px' });
  const [photosRefs, photosVisible] = useStaggeredReveal(3);

  return (
    <div>
      <Hero titulo={tituloVgeofisica}>
      </Hero>

      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
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

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="flex flex-col space-y-16 lg:col-span-7">
              <motion.div
                ref={introRef}
                initial={{ opacity: 0, x: -15 }}
                animate={introVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
                  <h2 className="font-['Montserrat'] text-lg font-bold uppercase tracking-wide text-slate-900 break-words sm:text-2xl sm:tracking-widest md:text-3xl">
                    Recuerdos de la 5.ª Semana
                  </h2>
                </div>
                <h3 className="mb-6 font-['Montserrat'] text-xl font-black text-brand-700 sm:text-2xl">
                  Una experiencia de ciencia, innovación y comunidad
                </h3>
                <div className="space-y-4 font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
                  <p>
                    La 5.ª Semana de la Geofísica se llevó a cabo del <strong className="text-slate-800">4 al 8 de noviembre de 2025</strong> en la Universidad Industrial de Santander —UIS—, sede Bucaramanga.
                  </p>
                  <p>
                    Durante cinco días, expertos nacionales e internacionales, estudiantes, docentes, investigadores y profesionales se reunieron para compartir conocimientos, presentar avances científicos y reflexionar sobre los desafíos actuales de la geofísica, la inteligencia artificial, la geología ambiental y otras áreas de las geociencias.
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={block1Ref}
                initial={{ opacity: 0, x: -15 }}
                animate={block1Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="font-['Montserrat'] text-2xl font-black uppercase tracking-tight text-slate-900">
                    Un encuentro para las geociencias
                  </h3>
                </div>
                <p className="mb-6 text-slate-600">
                  Esta quinta edición se consolidó como un importante espacio académico y científico en el país, en el que convergieron la innovación, la interdisciplinariedad y la búsqueda de soluciones relacionadas con:
                </p>
                <ul className="space-y-3">
                  {listItems1.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 shrink-0 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                ref={block2Ref}
                initial={{ opacity: 0, x: -15 }}
                animate={block2Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 shadow-sm">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9" />
                    </svg>
                  </div>
                  <h3 className="font-['Montserrat'] text-2xl font-black uppercase tracking-tight text-slate-900">
                    Cinco días de aprendizaje
                  </h3>
                </div>
                <p className="mb-6 text-slate-600">
                  La programación académica permitió conocer investigaciones, metodologías y experiencias desarrolladas en Colombia y otros países. Entre las principales actividades se realizaron:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {gridItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={block2Visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      className={`flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${item.fullWidth ? 'sm:col-span-2' : ''}`}
                    >
                      <svg className="h-6 w-6 shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                ref={block3Ref}
                initial={{ opacity: 0, x: -15 }}
                animate={block3Visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="font-['Montserrat'] text-2xl font-black uppercase tracking-tight text-slate-900">
                    Conexiones y experiencias compartidas
                  </h3>
                </div>
                <p className="mb-6 text-slate-600">
                  Además de su programación académica, el evento contó con espacios sociales y de integración que permitieron fortalecer las relaciones entre estudiantes, investigadores, docentes y profesionales. Estos encuentros contribuyeron a:
                </p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {listItems2.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={block3Visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                      className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <svg className={`h-6 w-6 shrink-0 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:sticky lg:top-24 lg:col-span-5">
              <div className="space-y-4">
                {[Foto1, Foto2, Foto3].map((foto, i) => (
                  <motion.div
                    key={i}
                    ref={photosRefs(i)}
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={photosVisible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 shadow-lg"
                  >
                    <OptimizedImage
                      src={foto}
                      alt={`Momento destacado ${i + 1} de la V Semana de la Geofísica`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoHero />
    </div>
  );
};

export default Vgeofisica;
