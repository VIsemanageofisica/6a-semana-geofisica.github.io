import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { TextReveal } from '../ui/TextReveal.jsx';
import Hero from '../static/Hero.jsx';
import AcercaDelEvento from '../ui/AcercaDelEvento.jsx';
import Card from '../ui/Card.jsx';
import { teamMembers } from '../../data/Personal.js';
import VideoHero from '../static/VideoHero.jsx';
import { DataPages } from '../../data/Vistas.js';


const ComiteGrupo = ({ titulo, miembros, onMiembroClick }) => {
  const [tituloRef, tituloVisible] = useScrollReveal({ margin: '-80px' });
  const [cardRefs, cardVisible] = useStaggeredReveal(miembros.length);

  if (miembros.length === 0) return null;

  return (
    <motion.div
      ref={tituloRef}
      initial={{ opacity: 0, y: 20 }}
      animate={tituloVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="mb-16"
    >
      <h3 className="mb-8 text-center font-['Montserrat'] text-xl font-semibold text-brand-800">
        {titulo}
      </h3>
      <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
        {miembros.map((miembro, index) => (
          <motion.div
            ref={cardRefs(index)}
            key={miembro.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={cardVisible[index] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
          >
            <Card
              name={miembro.name}
              role={miembro.comite}
              avatarImg={miembro.imagen}
              onBtn1Click={() => onMiembroClick(miembro.linkedin)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Inicio = () => {

  // Función segura para abrir LinkedIn: solo permite https y el dominio de LinkedIn.
  const abrirLinkedIn = (url) => {
    if (!url) return;
    try {
      const enlace = new URL(url.startsWith('http') ? url : `https://${url}`);
      if (enlace.protocol !== 'https:') return;
      if (!/^(www\.)?linkedin\.com$/.test(enlace.hostname)) return;
      window.open(enlace.href, '_blank', 'noopener,noreferrer');
    } catch {
      return;
    }
  };

  // Obtenemos el título de la página de inicio desde Vistas.js (id: 1)
  const tituloInicio = DataPages.find(page => page.id === 1)?.titleHero || "VI Semana de la Geofísica";

  // Filtramos la data de los miembros del equipo
  const comiteOrganizador = teamMembers.filter(m => m.comite === "Comité Organizador");
  const comiteApoyo = teamMembers.filter(m => m.comite === "Comité de Apoyo");

  // Filtro de comite admonostrativo
  const comiteAdministrativo = teamMembers.filter(m => m.comite === "Comité Administrativo");
  
  // Agrupamos el Científico
  const comiteCientificoYAdmin = teamMembers.filter(m => m.comite === "Comité Cientifico");

  //Filtro de comite de desarrollo web
  const comiteDesarrolloWeb = teamMembers.filter(m => m.comite === "Comité de Desarrollo Web");

  // Scroll reveal refs
  const [teamTitleRef, teamTitleVisible] = useScrollReveal({ margin: '-100px' });

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

          <ComiteGrupo titulo="Comité Organizador" miembros={comiteOrganizador} onMiembroClick={abrirLinkedIn} />

          <ComiteGrupo titulo="Comité de Apoyo" miembros={comiteApoyo} onMiembroClick={abrirLinkedIn} />

          <ComiteGrupo titulo="Comité Administrativo" miembros={comiteAdministrativo} onMiembroClick={abrirLinkedIn} />

          <ComiteGrupo titulo="Comité Científico" miembros={comiteCientificoYAdmin} onMiembroClick={abrirLinkedIn} />

          <ComiteGrupo titulo="Comité de Desarrollo Web" miembros={comiteDesarrolloWeb} onMiembroClick={abrirLinkedIn} />

        </div>
      </section>

      {/* Sección de Video */}
      <VideoHero/>
    </div>
  )
}

export default Inicio;