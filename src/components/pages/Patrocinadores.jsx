import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
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

const cardData = [
  { title: 'Presente su trabajo de investigación', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { title: 'Aprenda de expertos del área', icon: 'M4.26 10.147a6.04 6.04 0 00-.491 6.347A4.862 4.862 0 014 18.75c0 1.44.5 2.748 1.35 3.822h13.3c.85-1.074 1.35-2.382 1.35-3.822 0-.61-.1-1.196-.285-1.742a6.04 6.04 0 00-.49-6.347M8 18.75h8M8 21.75h8M12 15.75v-1.5m-3-4.5h6m-7.5 3h9' },
  { title: 'Networking con colegas', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
  { title: 'Viva la experiencia científica', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
];

const Patrocinadores = () => {
  const [quoteRef, quoteVisible] = useScrollReveal({ margin: '-100px' });
  const [titleRef, titleVisible] = useScrollReveal({ margin: '-100px' });
  const [descRef, descVisible] = useScrollReveal({ margin: '-100px' });
  const [organizaRef, organizaVisible] = useScrollReveal({ margin: '-80px' });
  const [apoyanRef, apoyanVisible] = useScrollReveal({ margin: '-80px' });
  const [financianRef, financianVisible] = useScrollReveal({ margin: '-80px' });
  const [microRefs, microVisible] = useStaggeredReveal(4);

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
                  className="group flex h-32 w-60 shrink-0 cursor-pointer items-center justify-center rounded-xl p-2 opacity-60 grayscale ring-1 ring-transparent transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:shadow-lg hover:shadow-gold-500/20 hover:ring-gold-400/30 sm:h-40 sm:w-80"
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
                      className="group flex h-28 w-44 shrink-0 cursor-pointer items-center justify-center rounded-xl p-2 opacity-60 grayscale ring-1 ring-transparent transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:shadow-lg hover:shadow-gold-500/20 hover:ring-gold-400/30"
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
                      className="group flex h-28 w-44 shrink-0 cursor-pointer items-center justify-center rounded-xl p-2 opacity-60 grayscale ring-1 ring-transparent transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:shadow-lg hover:shadow-gold-500/20 hover:ring-gold-400/30"
                    >
                      <OptimizedImage src={logo.src} alt={logo.alt} className="max-h-full max-w-full" imgClassName="object-contain" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cardData.map((item, i) => (
              <motion.div
                key={item.title}
                ref={microRefs(i)}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={microVisible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
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

export default Patrocinadores;
