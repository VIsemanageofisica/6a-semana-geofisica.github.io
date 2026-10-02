import { motion } from 'framer-motion'
import { useStaggeredReveal } from '../../hooks/useScrollReveal.js'
import EventCard from './EventCard.jsx'
// Panel de espera oculto mientras haya eventos publicados
// import Proximamente from './Proximamente.jsx'

// Genera una tarjeta por cada evento de Talleres.js o Charlas.js
// proximoId se conserva para volver a activar el panel de espera
// eslint-disable-next-line no-unused-vars
const EventosGrid = ({ eventos = [], tipo = 'Evento', proximoId = 1 }) => {
  // Filtramos los eventos que ya tienen título y ponente
  const visibles = eventos.filter((e) => e?.titulo?.trim() && e?.ponente?.trim())
  const [refs, visible] = useStaggeredReveal(visibles.length, { margin: '-60px' })

  // Panel de espera oculto: si no hay eventos no se muestra nada
  // if (visibles.length === 0) return <Proximamente id={proximoId} />
  if (visibles.length === 0) return null

  return (
    <div className="flex w-full flex-wrap justify-center gap-7">
      {visibles.map((evento, i) => (
        <motion.div
          key={evento.id ?? i}
          ref={refs(i)}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={visible[i] ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <EventCard evento={evento} tipo={tipo} />
        </motion.div>
      ))}
    </div>
  )
}

export default EventosGrid
