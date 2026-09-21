import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import FeaturesCards from '../ui/FeaturesCards.jsx';
import Video from '../static/VideoHero.jsx';
import Hero from '../static/Hero.jsx';
import Button from '../ui/Button.jsx';
import { DataPages } from '../../data/Vistas.js';
import AnimatedButton from '../ui/AnimatedButton.jsx';

const tituloAprende = DataPages.find(page => page.id === 8)?.titleHero;

const Aprende = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [video1Ref, video1Visible] = useScrollReveal({ margin: '-80px' });
  const [video2Ref, video2Visible] = useScrollReveal({ margin: '-80px' });
  const [condRef, condVisible] = useScrollReveal({ margin: '-80px' });

  return (
    <div>
      <Hero titulo={tituloAprende}>
        <Button className="w-full sm:w-auto sm:mr-12" onClick={() => console.log('Ir a subir resumen')}>
          <a href="https://sigacuis.github.io/Repositorio.html" target="_blank" rel="noopener noreferrer">VISÍTANOS</a>
        </Button>
        <Button
          className="w-full sm:w-auto border sm:ml-12 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
          onClick={() => console.log('Ver noticias')}
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
              Acceso al repositorio!
            </TextReveal>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32" />
          </motion.div>

          <motion.div
            ref={descRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-10 flex flex-col items-center justify-center text-center"
          >
            <p className="mb-0 max-w-4xl font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              La Semana de la Geofísica es posible gracias al respaldo de instituciones y empresas que impulsan la innovación, la investigación y el fortalecimiento del conocimiento geofísico en Colombia.
            </p>
          </motion.div>

          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-2xl">
              Explora el repositorio de Datos Geofísicos del SIGAC
            </h3>
            <p className="mb-8 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              Consulta, descarga y explora información geofísica disponible para apoyo académico, investigativo y técnico desarrollada por el SIGAC.
            </p>
            <AnimatedButton className="mt-4">
              <a href="https://sigacuis.github.io/Repositorio.html">Ingresa al Repositorio</a>
            </AnimatedButton>
          </div>

          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-2xl">
              Explora nuestros tutoriales Geofísicos
            </h3>
            <p className="mb-8 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              Accede a contenido gratuito y aprende a procesar datos magnetotelúricos y gravimétricos mediante nuestros tutoriales especializados.
            </p>
          </div>

          <FeaturesCards/>
        </div>
      </section>

      <div className="mb-10 flex flex-col items-center justify-center px-4 text-center">
        <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-2xl">
          Tutorial de Procesamiento Magnetotelúrico
        </h3>
      </div>

      <motion.div
        ref={video1Ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={video1Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto mb-16 max-w-6xl"
      >
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 via-gold-500 to-amber-500/20 blur-2xl sm:rounded-[3rem]"
        />
        <div className="relative rounded-2xl bg-gradient-to-br from-gold-500 via-blue-500/20 to-amber-300/60 p-[3px] shadow-[0_0_60px_rgba(255,100,150,0.08)] sm:rounded-[2.8rem]">
          <div className="rounded-2xl bg-gradient-to-br from-white/95 to-rose-50/95 p-3 shadow-xl sm:rounded-[2.6rem]">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-inner sm:rounded-[2.2rem]">
              <iframe
                src="https://www.youtube.com/embed/lzUhIHVW1zo"
                title="Tutorial Magnetotelúrico"
                className="aspect-[16/9] w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mb-10 flex flex-col items-center justify-center px-4 text-center">
        <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-2xl">
          Tutorial de Procesamiento Gravimétrico
        </h3>
      </div>

      <motion.div
        ref={video2Ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={video2Visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative mx-auto mb-16 max-w-6xl"
      >
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 via-gold-500 to-amber-500/20 blur-2xl sm:rounded-[3rem]"
        />
        <div className="relative rounded-2xl bg-gradient-to-br from-gold-500 via-blue-500/20 to-amber-300/60 p-[3px] shadow-[0_0_60px_rgba(255,100,150,0.08)] sm:rounded-[2.8rem]">
          <div className="rounded-2xl bg-gradient-to-br from-white/95 to-rose-50/95 p-3 shadow-xl sm:rounded-[2.6rem]">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-inner sm:rounded-[2.2rem]">
              <iframe
                src="https://www.youtube.com/embed/xBWFjzD98Sg"
                title="Tutorial Gravimétrico"
                className="aspect-[16/9] w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section
        ref={condRef}
        initial={{ opacity: 0, y: 30 }}
        animate={condVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        <div className="mb-0 flex flex-col items-center justify-center text-center">
          <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-2xl">
            Condiciones de Uso
          </h3>
          <p className="mb-4 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
            Los datos publicados en este repositorio son de libre acceso para fines académicos y de investigación, siempre que se cite adecuadamente la fuente correspondiente:
          </p>
          <p className="mb-4 max-w-2xl font-['Montserrat'] text-base font-extrabold leading-relaxed text-slate-600 sm:text-lg">
            Semillero de Investigación en Geofísica Aplicada y Computacional. (SIGAC), Universidad Industrial de Santander.
          </p>
        </div>
      </motion.section>

      <Video />
    </div>
  );
};

export default Aprende;
