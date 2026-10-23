import Networking from '../assets/flyers/networking.avif'
import Reto from '../assets/flyers/reto_interdisciplinario.avif'
import Pitch from '../assets/flyers/pitch_tesis.avif'
import Geoferia from '../assets/flyers/geoferia.avif'
import Campamento from '../assets/flyers/campamento.avif'

// Información tomada del proyecto 2026_VI_SEMANA_GEOFÍSICA de Canva (flyers de las actividades)
// Cada objeto genera una tarjeta con su flyer, al hacer clic se abre el flyer en grande
// link_inscripcion: enlace al formulario de la actividad, si queda vacío no se muestra el botón

export const Actividades = [
    {
        id: 1,
        titulo: "Sesión de Networking",
        descripcion: "Conecta con ponentes del evento. Un espacio para conversar de forma cercana sobre oportunidades laborales, investigativas, experiencias académicas y profesionales.",
        fecha: "Miércoles, 4 de noviembre",
        hora: "3:00 p.m. - 5:00 p.m.",
        lugar: "Auditorio Alberto Elías Hernández Durán (CENTIC)",
        flyer: Networking,
        link_inscripcion: "",
    },
    {
        id: 2,
        titulo: "Reto Interdisciplinario",
        descripcion: "Reto de geociencias e inteligencia artificial con cupos limitados. Plazo de inscripción: lunes 26 de octubre antes de las 2:00 p.m. Los requisitos están en el formulario de inscripción.",
        fecha: "Jueves, 5 de noviembre",
        hora: "3:00 p.m. - 5:00 p.m.",
        lugar: "Auditorio Alberto Elías Hernández Durán (CENTIC) - Cuarto piso",
        flyer: Reto,
        link_inscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSewgYu-yaQjmKvJLjLyCw6vjcvTBptXQ-S8l4UR7ZK2coyQcA/viewform",
    },
    {
        id: 3,
        titulo: "Pitch de tesis",
        descripcion: "¡Comparte tu investigación en 3 minutos! Presenta tu trabajo de grado (pregrado o posgrado) en un formato dinámico, da a conocer tu investigación y conecta con la comunidad científica.",
        fecha: "Jueves, 5 de noviembre",
        hora: "5:00 p.m. - 6:00 p.m.",
        lugar: "Auditorio Alberto Elías Hernández Durán (CENTIC)",
        flyer: Pitch,
        link_inscripcion: "",
    },
    {
        id: 4,
        titulo: "Geoferia",
        descripcion: "Conoce los semilleros y capítulos estudiantiles de la Escuela de Geología: una oportunidad para conocer sus iniciativas, compartir conocimientos y conectar con nuevas perspectivas en las geociencias.",
        fecha: "Viernes, 6 de noviembre",
        hora: "2:00 p.m. - 4:00 p.m.",
        lugar: "Sótano del edificio Jorge Bautista Vesga",
        flyer: Geoferia,
        link_inscripcion: "",
    },
    {
        // En el flyer de Canva aparece "7 de octubre", se deja noviembre que es la fecha del evento
        id: 5,
        titulo: "Campamento Geofísico",
        descripcion: "Salida de campo a Piedecuesta, Santander, con cupos limitados. Aporte aproximado: $60.000 por persona, incluye transporte desde la Universidad hasta la zona de estudio y viceversa, almuerzo y alquiler del terreno.",
        fecha: "Sábado, 7 de noviembre",
        hora: "8:00 a.m. - 5:00 p.m.",
        lugar: "Piedecuesta, Santander",
        flyer: Campamento,
        link_inscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSfBwEavSU3_Spf6_YnDP1G56RdqTFDR98U75d3FO5Du0h2UrQ/viewform",
    },
]
