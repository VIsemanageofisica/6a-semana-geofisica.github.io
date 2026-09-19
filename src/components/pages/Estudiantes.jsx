import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import Hero from '../static/Hero.jsx';
import { DataPages } from '../../data/Vistas.js';
import Button from '../ui/Button.jsx';
import Video from '../static/VideoHero.jsx';
import AnimatedButton from '../ui/AnimatedButton.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';

import Estudiantes1 from '../../assets/flyers/apoyo_estudiantes.avif';
import Estudiantes2 from '../../assets/flyers/apoyo_estudiantes_evento.avif';

const tituloEstudiantes = DataPages.find(page => page.id === 7)?.titleHero || "Convocatoria Estudiantes";

const cardData = [
  { title: 'Estudiantes de pregrado', desc: 'La convocatoria está dirigida a estudiantes activos de programas universitarios de cualquier institución de educación superior del país.', icon: 'M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9' },
  { title: 'De diferentes regiones', desc: 'Podrán postularse estudiantes que requieran apoyo económico para trasladarse y participar presencialmente en la VI Semana de la Geofísica.', icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' },
  { title: 'Interés en geociencias', desc: 'Se invita especialmente a estudiantes de geología, geofísica, ingeniería, ciencias de la Tierra y otras áreas relacionadas con el evento.', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
];

const Estudiantes = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [microRefs, microVisible] = useStaggeredReveal(3);
  const [leftRef, leftVisible] = useScrollReveal({ margin: '-80px' });
  const [rightRef, rightVisible] = useScrollReveal({ margin: '-80px' });

  return (
    <div>
      <Hero titulo={tituloEstudiantes}>
        <Button className="w-full sm:w-auto sm:mr-12" onClick={() => console.log('Ir a subir resumen')}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScVx10Ku4oKmLHurQv4yVLluSk_LNAgbnRzJQwzVIoyUMELBQ/viewform" target="_blank" rel="noopener noreferrer">TE APOYAMOS!!</a>
        </Button>
        <Button
          className="w-full sm:w-auto border sm:ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
          onClick={() => document.getElementById('detalles-convocatoria').scrollIntoView({ behavior: 'smooth' })}
        >
          <a href="https://www.instagram.com/semana_geofisica/">NOTICIAS Y ACTUALIZACIONES</a>
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
              Convocatoria de Apoyo para Estudiantes de Pregrado
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
            <p className="mb-4 font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              La VI Semana de la Geofísica invita a estudiantes de pregrado de universidades e instituciones de educación superior de todo Colombia a postularse para recibir un apoyo económico que facilite su participación presencial en el evento.
            </p>
            <p className="mb-4 font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              Esta iniciativa busca promover la participación de estudiantes interesados en la geofísica, la geología, las geociencias y áreas relacionadas, fortaleciendo su formación mediante el intercambio de conocimientos con investigadores, profesionales y otros estudiantes del país.
            </p>
            <p className="font-['Montserrat'] font-bold text-brand-700 md:text-lg">
              El evento se realizará del 3 al 7 de noviembre de 2026 en la Universidad Industrial de Santander, en Bucaramanga.
            </p>
          </motion.div>

          <h3 className="mb-12 text-center font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
            ¿A quién está dirigida la convocatoria?
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cardData.map((item, i) => (
              <motion.div
                key={item.title}
                ref={microRefs(i)}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={microVisible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: i % 2 === 0 ? -6 : 6, scale: 1.1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
                  className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white"
                >
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="mb-2 font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="detalles-convocatoria" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, x: -20 }}
              animate={leftVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col lg:col-span-7"
            >
              <h3 className="mb-6 font-['Montserrat'] text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl">
                ¿Por qué participar?
              </h3>
              <ul className="mb-12 flex flex-col gap-6">
                {[
                  { title: 'Fortalece tu formación académica', desc: 'Conoce investigaciones, metodologías y tecnologías emergentes aplicadas a las geociencias.', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' },
                  { title: 'Conecta con la comunidad científica', desc: 'Interactúa con estudiantes, docentes, investigadores y profesionales de diferentes instituciones.', icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' },
                  { title: 'Participa en un evento nacional', desc: 'Vive una experiencia presencial de intercambio académico en la Universidad Industrial de Santander.', icon: 'M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex rounded-lg bg-gold-100 p-2 text-gold-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <strong className="block font-['Montserrat'] text-lg text-slate-900">{item.title}</strong>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="mb-6 font-['Montserrat'] text-xl font-bold uppercase tracking-widest text-brand-800">
                ¿Cómo postularte?
              </h3>

              <div className="mb-10 flex flex-col gap-6">
                {[
                  { title: '1. Completa el formulario', desc: 'Registra tus datos personales, académicos y la información solicitada para participar en la convocatoria.', icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125' },
                  { title: '2. Adjunta los documentos requeridos', desc: 'Verifica cuidadosamente los requisitos indicados en el formulario antes de enviar tu postulación.', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
                  { title: '3. Envía tu solicitud antes del cierre', desc: 'Las postulaciones deberán realizarse antes de la fecha límite establecida.', icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5' },
                ].map((item) => (
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
                className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 p-6 shadow-xl shadow-brand-900/20 sm:p-8"
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
                    <h4 className="font-['Montserrat'] text-sm font-bold uppercase tracking-widest text-gold-300">Cierre de Convocatoria</h4>
                    <p className="mt-1 font-['Montserrat'] text-2xl font-black text-white sm:text-3xl">Jueves 8 de octubre de 2026</p>
                  </div>
                </div>
              </motion.div>

              <div className="mb-8 flex flex-col items-start rounded-xl border-l-4 border-slate-300 bg-slate-50 p-5">
                <p className="text-sm text-slate-700">
                  <span className="font-bold">Nota:</span> Los requisitos específicos, los criterios de selección y el alcance del apoyo económico se encuentran detallados en el formulario de inscripción.
                </p>
              </div>

              <div className="flex w-full justify-start">
                <AnimatedButton>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScVx10Ku4oKmLHurQv4yVLluSk_LNAgbnRzJQwzVIoyUMELBQ/viewform">Incribete Aquí</a>
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
                <OptimizedImage src={Estudiantes1} alt="Flyer de la convocatoria para estudiantes" className="h-full w-full object-cover" />
              </div>
              <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                <OptimizedImage src={Estudiantes2} alt="Flyer informativo de requisitos" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Video />
    </div>
  );
};

export default Estudiantes;
