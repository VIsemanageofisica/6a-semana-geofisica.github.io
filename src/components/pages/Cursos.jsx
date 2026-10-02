import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import FeaturesCards from '../ui/FeaturesCards.jsx';
import Video from '../static/VideoHero.jsx';
import Hero from '../static/Hero.jsx';
import { DataPages } from '../../data/Vistas.js';
// Panel de espera oculto mientras haya eventos publicados
// import Proxima from '../ui/Proximamente.jsx';
import EventosGrid from '../ui/EventosGrid.jsx';
import { Talleres } from '../../data/Talleres.js';

const tituloCursos = DataPages.find(page => page.id === 5)?.titleHero;

const Cursos = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });

  return (
    <div>
      <Hero titulo={tituloCursos}>
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
              Cursos y Talleres
            </span>
            <h5 className="mb-5 max-w-3xl font-['Montserrat'] text-xl font-bold tracking-wide text-slate-900 sm:text-2xl md:text-3xl">
              Te invitamos a participar de los talleres que tenemos para ti
            </h5>
            <p className="mb-4 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              Durante la VI Semana de la Geofísica tendremos espacios prácticos guiados por expertos, pensados para que fortalezcas tus conocimientos y aprendas nuevas herramientas del área.
            </p>
            <p className="font-['Montserrat'] text-sm font-medium text-slate-500">
              Pasa el cursor sobre cada tarjeta para conocer cada taller y haz clic para ver los detalles e inscribirte.
            </p>

            {/* Panel de espera oculto mientras haya eventos publicados */}
            {/* <Proxima id={2} /> */}
          </motion.div>

          {/* Tarjetas de los eventos */}
          <div className="mb-20">
            <EventosGrid eventos={Talleres} tipo="Curso-Taller" proximoId={2} />
          </div>

          <FeaturesCards/>
        </div>
      </section>

      <Video />
    </div>
  );
};

export default Cursos;
