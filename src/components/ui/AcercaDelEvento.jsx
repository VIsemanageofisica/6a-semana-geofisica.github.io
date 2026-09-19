import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';

const features = [
  {
    title: 'Presente su trabajo de investigación',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Aprenda de expertos del área',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9" />
      </svg>
    ),
  },
  {
    title: 'Networking con colegas',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Viva la experiencia científica',
    icon: (
      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

const AcercaDelEvento = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-80px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-80px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-80px' });
  const [featureRefs, featureVisible] = useStaggeredReveal(features.length);

  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Einstein quote */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 20 }}
          animate={quoteVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8 flex items-center justify-center gap-4 sm:mb-20"
        >
          <h3 className="text-center font-['Montserrat'] text-sm italic tracking-wide text-slate-900 sm:text-base sm:tracking-widest lg:text-2xl">
            &ldquo;Lo importante es no dejar de cuestionar&rdquo;. (Albert Einstein)
          </h3>
        </motion.div>

        {/* Title with side separators */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"
            style={{ transformOrigin: 'left center' }}
          />
          <h2 className="text-center font-['Montserrat'] text-2xl font-bold uppercase tracking-widest text-slate-900 sm:text-3xl">
            VI Semana de la Geofísica
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"
            style={{ transformOrigin: 'right center' }}
          />
        </motion.div>

        {/* Description */}
        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 20 }}
          animate={descVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
            La Semana de la Geofísica es un evento de carácter científico y académico dedicado a la difusión,
            actualización e intercambio de conocimientos en el campo de la geofísica y sus aplicaciones en las
            geociencias. Este encuentro reúne a investigadores, profesionales, docentes y estudiantes para compartir
            avances, experiencias y desarrollos tecnológicos en distintas áreas de la disciplina. El evento se
            llevará a cabo del 03 al 07 de noviembre de 2026 y abordará diversas ramas de la geofísica, incluyendo
            geofísica de exploración, geofísica ambiental, geotecnia, hidrogeofísica, métodos sísmicos, eléctricos y
            electromagnéticos, así como aplicaciones en gestión del riesgo, recursos hídricos, energía y caracterización
            del subsuelo.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              ref={featureRefs(i)}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={featureVisible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-slate-100 shadow-2xl shadow-gold-500/20"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-600 to-gold-400 opacity-100" />
              <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg shadow-gold-500/40 scale-110">
                {feature.icon}
              </div>
              <h3 className="font-['Montserrat'] text-lg font-bold text-brand-700">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcercaDelEvento;
