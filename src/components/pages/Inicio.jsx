import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import Hero from '../static/Hero.jsx';
import AcercaDelEvento from '../ui/AcercaDelEvento.jsx';
import Card from '../ui/Card.jsx';
import { teamMembers } from '../../data/Personal.js';
import VideoHero from '../static/VideoHero.jsx';
import Button from '../ui/Button.jsx';
import { DataPages } from '../../data/Vistas.js';

const stats = [
  { value: 6, suffix: 'ta', label: 'Edición' },
  { value: 5, suffix: ' días', label: 'De conferencias' },
  { value: 200, suffix: '+', label: 'Asistentes' },
  { value: 30, suffix: '+', label: 'Ponentes' },
];

const Inicio = () => {

  // Función segura para abrir LinkedIn
  const abrirLinkedIn = (url) => {
    if (!url) return;
    const enlaceSeguro = url.startsWith('http') ? url : `https://${url}`;
    window.open(enlaceSeguro, '_blank', 'noopener,noreferrer');
  };

  // Obtenemos el título de la página de inicio desde Vistas.js (id: 1)
  const tituloInicio = DataPages.find(page => page.id === 1)?.titleHero || "VI Semana de la Geofísica";

  // Filtramos la data de los miembros del equipo
  const comiteOrganizador = teamMembers.filter(m => m.comite === "Comite Organizador");
  const comiteApoyo = teamMembers.filter(m => m.comite === "Comite de Apoyo");

  // Filtro de comite admonostrativo
  const comiteAdministrativo = teamMembers.filter(m => m.comite === "Comite Administrativo");
  
  // Agrupamos el Científico
  const comiteCientificoYAdmin = teamMembers.filter(m => m.comite === "Comite Cientifico");

  //Filtro de comite de desarrollo web
  const comiteDesarrolloWeb = teamMembers.filter(m => m.comite === "Comite de Desarrollo Web");

  // Scroll reveal refs
  const [teamTitleRef, teamTitleVisible] = useScrollReveal({ margin: '-100px' });
  const [orgTitleRef, orgTitleVisible] = useScrollReveal({ margin: '-100px' });
  const [apoyoTitleRef, apoyoTitleVisible] = useScrollReveal({ margin: '-100px' });
  const [cientificoTitleRef, cientificoTitleVisible] = useScrollReveal({ margin: '-100px' });

  const [orgRefs, orgVisible] = useStaggeredReveal(comiteOrganizador.length);
  const [apoyoRefs, apoyoVisible] = useStaggeredReveal(comiteApoyo.length);
  const [cientificoRefs, cientificoVisible] = useStaggeredReveal(comiteCientificoYAdmin.length);

  return (
    <div>
      {/* Sección del banner principal (Ahora estandarizado con botones) */}
      <Hero titulo={tituloInicio}>
      </Hero>
      
      {/* Sección de información y descripción del evento */}
      <AcercaDelEvento />

      {/* Equipo de Trabajo */}
      <section className="bg-slate-50/50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-[1300px]"> 
          
          {/* Título Principal */}
          <motion.div
            ref={teamTitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16 flex items-center justify-center gap-4"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="h-[2px] w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-32"
              style={{ transformOrigin: 'left center' }}
            />
            <TextReveal split="words" stagger={0.08} className="text-center font-['Montserrat'] text-3xl font-bold uppercase tracking-widest text-slate-900 sm:text-4xl">
              Nuestro Equipo
            </TextReveal>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="h-[2px] w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-32"
              style={{ transformOrigin: 'right center' }}
            />
          </motion.div>

          {/* 1. COMITÉ ORGANIZADOR */}
          <motion.div
            ref={orgTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={orgTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité Organizador
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {comiteOrganizador.map((miembro, index) => (
                <motion.div
                  ref={orgRefs(index)}
                  key={miembro.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={orgVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card 
                    name={miembro.name}
                    role={miembro.comite}
                    avatarImg={miembro.imagen}
                    onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. COMITÉ DE APOYO */}
          <motion.div
            ref={apoyoTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={apoyoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité de Apoyo
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteApoyo.map((miembro, index) => (
                <motion.div
                  ref={apoyoRefs(index)}
                  key={miembro.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={apoyoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card 
                    name={miembro.name}
                    role={miembro.comite}
                    avatarImg={miembro.imagen}
                    onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3. COMITÉS ADMINISTRATIVO */}
          <motion.div
            ref={cientificoTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité Administrativo
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteAdministrativo.map((miembro, index) => (
                <motion.div
                  ref={cientificoRefs(index)}
                  key={miembro.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card 
                    name={miembro.name}
                    role={miembro.comite} 
                    avatarImg={miembro.imagen}
                    onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4. COMITÉS CIENTÍFICO */}
          <motion.div
            ref={cientificoTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité Científico y Administrativo
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteCientificoYAdmin.map((miembro, index) => (
                <motion.div
                  ref={cientificoRefs(index)}
                  key={miembro.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card 
                    name={miembro.name}
                    role={miembro.comite} 
                    avatarImg={miembro.imagen}
                    onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 5. COMITÉS DE DESARROLLO WEB */}
          <motion.div
            ref={cientificoTitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={cientificoTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16"
          >
            <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
              Comité de Desarrollo Web
            </h3>
            <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
              {comiteDesarrolloWeb.map((miembro, index) => (
                <motion.div
                  ref={cientificoRefs(index)}
                  key={miembro.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={cientificoVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Card 
                    name={miembro.name}
                    role={miembro.comite} 
                    avatarImg={miembro.imagen}
                    onBtn1Click={() => abrirLinkedIn(miembro.linkedin)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Sección de Video */}
      <VideoHero/>
    </div>
  )
}

export default Inicio;