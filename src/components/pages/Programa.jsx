import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import Video from '../static/VideoHero.jsx';
import Hero from '../static/Hero.jsx';
import { DataPages } from '../../data/Vistas.js';
// Panel de espera oculto mientras haya eventos publicados
// import Proxima from '../ui/Proximamente.jsx';
import EventosGrid from '../ui/EventosGrid.jsx';
import { Charlas } from '../../data/Charlas.js';
import { Paneles } from '../../data/Paneles.js';

// Íconos de fecha, hora y lugar para los paneles
const ICONOS_PANEL = {
  fecha: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  hora: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  lugar: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
};

const tituloPrograma = DataPages.find(page => page.id === 4)?.titleHero;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const Programa = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [microRefs, microVisible] = useStaggeredReveal(4);

  return (
    <div>
      <Hero titulo={tituloPrograma}>
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
            <div className="mb-10 flex items-center justify-center gap-4">
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

          {/* Invitación a participar de los eventos */}
          <motion.div
            ref={descRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-12 flex flex-col items-center justify-center text-center"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 font-['Montserrat'] text-xs font-semibold uppercase tracking-widest text-gold-600">
              <span className="h-2 w-2 rounded-full bg-gold-500" />
              Charlas y Conferencias
            </span>
            <h5 className="mb-5 max-w-3xl font-['Montserrat'] text-xl font-bold tracking-wide text-slate-900 sm:text-2xl md:text-3xl">
              Te invitamos a participar de los eventos que tenemos para ti
            </h5>
            <p className="mb-4 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              La VI Semana de la Geofísica contará con charlas y conferencias de investigadores y profesionales que compartirán su experiencia y los avances más recientes en geociencias.
            </p>
            <p className="font-['Montserrat'] text-sm font-medium text-slate-500">
              Pasa el cursor sobre cada tarjeta para conocer cada charla y haz clic para ver los detalles e inscribirte.
            </p>

            {/* Panel de espera oculto mientras haya eventos publicados */}
            {/* <Proxima id={1} /> */}
          </motion.div>

          {/* Tarjetas de los eventos */}
          <div className="mb-20">
            <EventosGrid eventos={Charlas} tipo="Charla Magistral" proximoId={1} />
          </div>

          {/* Paneles con sus ponentes */}
          {Paneles.map((panel) => (
            <section key={panel.id} className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="mb-10 flex flex-col items-center text-center"
              >
                {/* Título del panel con separadores laterales */}
                <div className="mb-5 flex items-center justify-center gap-4">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold-400 sm:w-24" />
                  <h5 className="font-['Montserrat'] text-xl font-bold uppercase tracking-wide text-slate-900 sm:text-2xl sm:tracking-widest">
                    {panel.titulo}
                  </h5>
                  <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gold-400 sm:w-24" />
                </div>

                {/* Descripción del panel */}
                <p className="mb-5 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
                  {panel.descripcion}
                </p>

                {/* Fecha, hora y lugar del panel */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['fecha', 'hora', 'lugar'].map((campo) =>
                    panel[campo] ? (
                      <span
                        key={campo}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 font-['Montserrat'] text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
                      >
                        <svg className="h-4 w-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={ICONOS_PANEL[campo]} />
                        </svg>
                        {panel[campo]}
                      </span>
                    ) : null
                  )}
                </div>
              </motion.div>

              {/* Tarjetas de los ponentes del panel */}
              <EventosGrid
                eventos={panel.ponentes.map((ponente) => ({
                  ...ponente,
                  titulo: panel.titulo,
                  descripcion: panel.descripcion,
                  fecha: panel.fecha,
                  hora: panel.hora,
                  lugar: panel.lugar,
                  link_inscripcion: panel.link_inscripcion,
                }))}
                tipo="Panel"
              />
            </section>
          ))}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Presente su trabajo de investigación', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
              { title: 'Aprenda de expertos del área', icon: 'M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9' },
              { title: 'Networking con colegas', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
              { title: 'Viva la experiencia científica', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                ref={microRefs(i)}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={microVisible[i] ? 'visible' : 'hidden'}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/20"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  whileHover={{ rotate: i % 2 === 0 ? -6 : 6, scale: 1.1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
                  className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gold-50 text-gold-600 shadow-sm transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-gold-600 group-hover:text-white"
                >
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </motion.div>
                <h3 className="font-['Montserrat'] text-lg font-bold text-slate-800 transition-colors duration-300 group-hover:text-brand-700">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Video />
    </div>
  );
};

export default Programa;
