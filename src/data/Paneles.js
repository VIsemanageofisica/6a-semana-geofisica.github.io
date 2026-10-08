import LeidyC from '../assets/ponentes/Leidy_Castro.avif'
import SoniaP from '../assets/ponentes/Sonia_Ponguta.avif'
import LinaD from '../assets/ponentes/Lina_Dorado.avif'
import FranckA from '../assets/ponentes/Franck_Audemard.avif'
import GloriaC from '../assets/ponentes/Gloria_Cortes.avif'
import RaisaT from '../assets/ponentes/Raisa_Torres.avif'
import FranciscoV from '../assets/ponentes/Francisco_Velandia.avif'

// Información tomada del proyecto 2026_VI_SEMANA_GEOFÍSICA de Canva (piezas de los paneles)
// Cada panel genera un título con su descripción y una tarjeta por cada ponente
// imagen_ponente: foto importada arriba (recortada de las piezas de Canva), si queda vacío se muestran las iniciales

export const Paneles = [
    {
        id: 1,
        titulo: "Panel de Mujeres",
        descripcion: "Un espacio de conversación sobre los desafíos, oportunidades y experiencias de las mujeres en la dirección de proyectos en geociencias, destacando su liderazgo, toma de decisiones y desarrollo profesional.",
        fecha: "Martes, 3 de noviembre",
        hora: "3:00 p.m. - 5:00 p.m.",
        lugar: "Auditorio Guillermo Camacho Caro",
        link_inscripcion: "",
        ponentes: [
            {
                id: 1,
                ponente: "Ph.D. Leidy Castro Vera",
                cargo_ponente: "Aachen University",
                tipo_ponente: "Ponente internacional",
                perfil_ponente: "Geóloga con doctorado en Geociencias Aplicadas, especializada en exploración de recursos del subsuelo, interpretación geológica y aplicación de tecnologías innovadoras. Actualmente lidera proyectos de exploración de minerales y apoya técnicamente proyectos de exploración de hidrógeno blanco y aguas subterráneas. Su experiencia integra análisis y modelamiento de cuencas 1D–3D, interpretación sísmica, investigación y gestión de proyectos multidisciplinarios.",
                imagen_ponente: LeidyC,
            },
            {
                id: 2,
                ponente: "Geo. y Esp. Sonia Ponguta",
                cargo_ponente: "Geo Oil Energy",
                tipo_ponente: "Ponente internacional",
                perfil_ponente: "Líder internacional del sector energético con más de 32 años de experiencia en negocios, planeación corporativa, economía y operaciones a lo largo de toda la cadena energética. Ha ocupado cargos directivos en compañías como Texas Petroleum, BP, Halliburton, AGAT Laboratories, Core Laboratories y ENI Canada, además de participar en juntas directivas de empresas de exploración y producción. Es fundadora y Presidenta & CEO de Geo Oil Energy SAS, compañía canadiense-colombiana creada en 2009, desde donde lidera proyectos y estrategias para el sector energético.",
                imagen_ponente: SoniaP,
            },
            {
                id: 3,
                ponente: "M.Sc. Lina Dorado",
                cargo_ponente: "Cruz Roja Colombiana",
                tipo_ponente: "Ponente nacional",
                perfil_ponente: "Ingeniera Geóloga, Magíster en Gestión del Riesgo y Atención de Emergencias y en Desarrollo Sustentable, con 25 años de experiencia en gestión del riesgo de desastres. Ha ocupado cargos directivos en Nariño y la UNGRD, y actualmente es Líder Nacional del Equipo de Gestión del Riesgo de Desastres de la Cruz Roja Colombiana. Su experiencia incluye acciones anticipatorias, sistemas de alerta comunitaria, resiliencia, cambio climático y soluciones basadas en la naturaleza, con participación en importantes escenarios internacionales sobre reducción del riesgo y acción climática.",
                imagen_ponente: LinaD,
            },
        ],
    },
    {
        id: 2,
        titulo: "Panel de Gestión del Riesgo",
        descripcion: "Un espacio para conocer y discutir el panorama de la amenaza y riesgo sísmico en Colombia, junto con sus principales avances y desafíos.",
        fecha: "Jueves, 5 de noviembre",
        hora: "9:00 a.m. - 11:00 a.m.",
        lugar: "Auditorio Luis Eduardo Lobo",
        link_inscripcion: "",
        ponentes: [
            {
                id: 1,
                ponente: "Ph.D. Franck Audemard",
                cargo_ponente: "Universidad Central de Venezuela",
                tipo_ponente: "Ponente internacional",
                perfil_ponente: "Geólogo e investigador senior, profesor titular y consultor especializado en geología estructural, geomorfología, neotectónica, geología de terremotos, geodinámica y geodesia GPS-GNSS. Actualmente está vinculado a la Universidad Central de Venezuela, es asesor de FUNVISIS e investigador asociado del CICESE en México. Cuenta con amplia experiencia en evaluación de amenaza sísmica, tectónica activa y caracterización de fallas.",
                imagen_ponente: FranckA,
            },
            {
                id: 2,
                ponente: "Ph.D. Gloria Cortés",
                cargo_ponente: "Investigadora independiente",
                tipo_ponente: "Ponente nacional",
                perfil_ponente: "Geóloga de la Universidad de Caldas, especialista en Gestión del Riesgo Natural y Magíster en Ciencias de la Tierra, con 35 años de experiencia en el Servicio Geológico Colombiano. Su trayectoria se ha enfocado en monitoreo y amenaza volcánica, gestión del riesgo, apropiación social del conocimiento, geoconservación, geoeducación y geoturismo. Fue coordinadora del Observatorio Vulcanológico y Sismológico de Manizales y es miembro fundador de la Asociación Latinoamericana de Vulcanología (ALVO).",
                imagen_ponente: GloriaC,
            },
            {
                id: 3,
                ponente: "Ph.D. Raisa Torres",
                cargo_ponente: "Universidad Yachay Tech",
                tipo_ponente: "Ponente internacional",
                perfil_ponente: "Raisa Torres es docente-investigadora de Geología en la Universidad Yachay Tech, especializada en geomorfología, teledetección y análisis de riesgos naturales. Su trabajo se enfoca en la dinámica de laderas, movimientos en masa e inundaciones en los Andes ecuatorianos, integrando drones, sensores remotos, SIG y métodos geofísicos para estudiar la inestabilidad del terreno y contribuir a la gestión territorial y reducción del riesgo de desastres.",
                imagen_ponente: RaisaT,
            },
            {
                // En Canva aparece como moderador del panel
                id: 4,
                ponente: "Ph.D. Francisco Velandia",
                cargo_ponente: "Universidad Industrial de Santander",
                tipo_ponente: "Moderador",
                perfil_ponente: "Geólogo, MSc. en Geología y Doctor en Geociencias, con experiencia en geología regional, neotectónica, geomorfología, hidrogeología y amenazas geológicas. Trabajó 21 años en INGEOMINAS, actual SGC, liderando proyectos de cartografía, hidrogeología y geotermia. Desde 2011 es profesor de la UIS e investigador en la evolución tectónica reciente de los Andes del Norte.",
                imagen_ponente: FranciscoV,
            },
        ],
    },
]
