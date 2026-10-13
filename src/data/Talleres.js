import OscarA from '../assets/ponentes/Oscar_Avila.avif'
import LuisO from '../assets/ponentes/Luis_Hernan_Ochoa.avif'

// Información tomada del proyecto 2026_VI_SEMANA_GEOFÍSICA de Canva (piezas "Curso-Taller")
// Cada objeto genera una tarjeta, solo se muestran los que tengan titulo y ponente
// descripcion: texto del evento (opcional), perfil_ponente: biografía que aparece en el modal
// imagen_ponente: foto importada arriba (recortada de las piezas de Canva), si queda vacío se muestran las iniciales
// link_inscripcion: enlace al Google Forms del evento, si queda vacío se muestra "Inscripciones próximamente"

export const Talleres = [
    {
        id: 1,
        titulo: "MT: Leer la tierra desde sus señales. De la física electromagnética a la interpretación del subsuelo",
        descripcion: "",
        ponente: "Ph.D(s). Oscar Avila Vargas",
        cargo_ponente: "Universidad Nacional Autónoma de México",
        tipo_ponente: "Ponente internacional",
        perfil_ponente: "Especialista internacional en Geofísica Aplicada y Métodos Electromagnéticos, con amplia experiencia en Magnetotelúrica (MT), desde la adquisición y procesamiento de datos hasta la inversión 1D/2D/3D e interpretación geológica. Su trabajo integra física electromagnética, modelado geofísico, análisis de datos y evaluación de incertidumbres, con énfasis en la construcción de modelos de resistividad consistentes con el contexto geológico y orientados a una mejor comprensión del subsuelo.",
        fecha: "Miércoles, 4 de noviembre",
        hora: "8:00 a.m. - 11:00 a.m.",
        lugar: "Auditorio Alberto Elías Hernández Durán (CENTIC)",
        imagen_ponente: OscarA,
        link_inscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSf9XywMfE0DNdJsTQAa-l3K5iJaYKz4jNl7AAGIuhwr17dhhA/viewform?usp=header",
    },
    {
        id: 2,
        titulo: "Algoritmos Genéticos aplicados a un problema inverso de gravimetría",
        descripcion: "",
        ponente: "Ph.D. Luis Hernán Ochoa Gutiérrez",
        cargo_ponente: "Universidad Nacional de Colombia",
        tipo_ponente: "Ponente nacional",
        perfil_ponente: "PhD. en Ingeniería de Sistemas, con maestrías en Geomática y Geofísica, e Ingeniero Civil. Experto en sistemas inteligentes, aprendizaje de máquina, minería de datos y desarrollo de aplicaciones informáticas, con experiencia en sismología, métodos geofísicos, SIG, geofísica de pozos, procesamiento digital de imágenes y ciencias planetarias. Docente de la Universidad Nacional de Colombia desde 2002, Director de Área Curricular del Departamento de Geociencias desde 2016 y Profesor Titular desde agosto de 2026.",
        fecha: "Viernes, 6 de noviembre",
        hora: "8:00 a.m. - 12:00 m.",
        lugar: "Auditorio Alberto Elías Hernández Durán (CENTIC)",
        imagen_ponente: LuisO,
        link_inscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSesLjoLDbsMwqyy0SnmGhLmpFVr11jp5yJi1V-oFJJL9nvrZw/viewform",
    },
]

