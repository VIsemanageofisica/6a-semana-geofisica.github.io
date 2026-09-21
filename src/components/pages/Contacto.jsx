import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import FeaturesCards from '../ui/FeaturesCards.jsx';
import Hero from '../static/Hero.jsx';
import Video from '../static/VideoHero.jsx';
import Button from '../ui/Button.jsx';
import { DataPages } from '../../data/Vistas.js';

const tituloContacto = DataPages.find(page => page.id === 3)?.titleHero;

const Contacto = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });

  return (
    <div>
      <Hero titulo={tituloContacto}>
        <Button className="w-full sm:w-auto" onClick={() => console.log('Ir a subir resumen')}>
          <a href="https://www.instagram.com/semana_geofisica/">Instagram</a>
        </Button>
        <Button
          className="w-full sm:w-auto border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-none backdrop-blur-sm hover:border-gold-400 hover:text-gold-400"
          onClick={() => console.log('Ver noticias')}
        >
          6a.semana.geofisica@gmail.com
        </Button>
        <Button className="w-full sm:w-auto" onClick={() => console.log('Ir a registro')}>
          <a href="https://chat.whatsapp.com/FHC0HqhGl6iBsDuotgVhuy">WhatsApp</a>
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
            className="mb-10 flex flex-col items-center justify-center text-center"
          >
            <h3 className="mb-3 font-['Montserrat'] text-2xl font-bold tracking-widest text-slate-900 sm:text-3xl">
              Contactanos
            </h3>
            <p className="mb-8 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              Para más información y cualquier consulta, no dude en contactar a los organizadores:
              <br />
              <span className="font-extrabold text-slate-800">
                Ana Mantilla - Daniela Quintero - Grupo de Investigación HDSP
              </span>
            </p>
            <h5 className="font-['Montserrat'] text-xl font-bold tracking-widest text-slate-900 sm:text-2xl">
              Información de contacto
            </h5>
            <ul className="mb-2 mt-3 max-w-2xl font-['Montserrat'] text-base leading-relaxed text-slate-600 sm:text-lg">
              <li>
                <span className="font-extrabold text-slate-800">Ana Mantilla</span> - <a href="mailto:ana.mantilla@correo.uis.edu.co">ana.mantilla@correo.uis.edu.co</a>
              </li>
              <li>
                <span className="font-extrabold text-slate-800">Daniela Quintero</span> - <a href="mailto:daniela2202434@correo.uis.edu.co">daniela2202434@correo.uis.edu.co</a>
              </li>
              <li>
                <span className="font-extrabold text-slate-800">Grupo de Investigación HDSP</span> - <a href="mailto:hdsp@uis.edu.co">hdsp@uis.edu.co</a>
              </li>
            </ul>
          </motion.div>

          <FeaturesCards/>
        </div>
      </section>

      <Video />
    </div>
  );
};

export default Contacto;
