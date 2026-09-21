import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import FeaturesCards from '../ui/FeaturesCards.jsx';
import Video from '../static/VideoHero.jsx';
import Hero from '../static/Hero.jsx';
import OptimizedImage from '../ui/OptimizedImage.jsx';
import { DataPages } from '../../data/Vistas.js';
import logoUIS from '../../assets/organizaciones/logo_UIS.avif';
import hdspLogo from '../../assets/organizaciones/hdsplogo.svg';
import gigbaLogo from '../../assets/organizaciones/gigba_logo.avif';
import gidcoLogo from '../../assets/organizaciones/gidco.avif';
import logoSIGAC from '../../assets/organizaciones/logo_SIGAC_2024.avif';
import logoMinciencias from '../../assets/organizaciones/logo_minciencias.avif';
import logoANH from '../../assets/organizaciones/LOGO_ANH.avif';

const tituloPatrocinadores = DataPages.find(page => page.id === 6)?.titleHero;

const logoOrganiza = {
  id: 'uis',
  nombre: 'Universidad Industrial de Santander',
  src: logoUIS,
  alt: 'Logo UIS'
};

const logosApoyan = [
  { id: 1, nombre: 'HDSP', src: hdspLogo, alt: 'Logo HDSP' },
  { id: 2, nombre: 'Gigba', src: gigbaLogo, alt: 'Logo Gigba' },
  { id: 3, nombre: 'Gidco', src: gidcoLogo, alt: 'Logo Gidco' },
  { id: 4, nombre: 'SIGAC', src: logoSIGAC, alt: 'Logo SIGAC' },
];

const logosFinancian = [
  { id: 1, nombre: 'Minciencias', src: logoMinciencias, alt: 'Logo Min-ciencias' },
  { id: 2, nombre: 'ANH', src: logoANH, alt: 'Logo ANH' },
];

const Patrocinadores = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [organizaRef, organizaVisible] = useScrollReveal({ margin: '-80px' });
  const [apoyanRef, apoyanVisible] = useScrollReveal({ margin: '-80px' });
  const [financianRef, financianVisible] = useScrollReveal({ margin: '-80px' });

  return (
    <div>
      <Hero titulo={tituloPatrocinadores}>
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
            className="mb-24 flex flex-col items-center justify-center text-center"
          >
            <p className="mb-16 max-w-4xl font-['Montserrat'] text-base leading-relaxed text-slate-600 md:text-lg">
              La Semana de la Geofísica es posible gracias al respaldo de instituciones y empresas que impulsan la innovación, la investigación y el fortalecimiento del conocimiento geofísico en Colombia.
            </p>

            <div className="w-full max-w-5xl">
              <h3 className="mb-12 font-['Montserrat'] text-3xl font-black uppercase tracking-widest text-slate-900 sm:text-4xl">
                Patrocinadores
              </h3>

              <motion.div
                ref={organizaRef}
                initial={{ opacity: 0, y: 30 }}
                animate={organizaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="mb-14 flex flex-col items-center"
              >
                <h4 className="mb-8 font-['Montserrat'] text-lg font-bold uppercase tracking-wider text-slate-500 sm:text-xl">
                  Organiza
                </h4>
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="flex h-32 w-60 shrink-0 items-center justify-center p-2 sm:h-40 sm:w-80"
                >
                  <OptimizedImage src={logoOrganiza.src} alt={logoOrganiza.alt} className="max-h-full max-w-full" imgClassName="object-contain" priority />
                </motion.div>
              </motion.div>

              <div className="mx-auto mb-14 h-px w-2/3 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

              <motion.div
                ref={apoyanRef}
                initial={{ opacity: 0, y: 30 }}
                animate={apoyanVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="mb-14 flex flex-col items-center"
              >
                <h4 className="mb-8 font-['Montserrat'] text-lg font-bold uppercase tracking-wider text-slate-500 sm:text-xl">
                  Apoyan
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                  {logosApoyan.map((logo, i) => (
                    <motion.div
                      key={logo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={apoyanVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      className="flex h-28 w-44 shrink-0 items-center justify-center p-2"
                    >
                      <OptimizedImage src={logo.src} alt={logo.alt} className="max-h-full max-w-full" imgClassName="object-contain" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="mx-auto mb-14 h-px w-2/3 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

              <motion.div
                ref={financianRef}
                initial={{ opacity: 0, y: 30 }}
                animate={financianVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center"
              >
                <h4 className="mb-8 font-['Montserrat'] text-lg font-bold uppercase tracking-wider text-slate-500 sm:text-xl">
                  Financian
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                  {logosFinancian.map((logo, i) => (
                    <motion.div
                      key={logo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={financianVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      className="flex h-28 w-44 shrink-0 items-center justify-center p-2"
                    >
                      <OptimizedImage src={logo.src} alt={logo.alt} className="max-h-full max-w-full" imgClassName="object-contain" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <FeaturesCards/>
        </div>
      </section>
      <Video />
    </div>
  );
};

export default Patrocinadores;
