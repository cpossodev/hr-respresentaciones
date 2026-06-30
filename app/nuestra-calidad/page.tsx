// Import Component
import SectionPortadaCalidad from '../components/calidadCompt/sectionPortadaCalidad'
import SectMarcasLideresCalidad from '../components/calidadCompt/sectMarcasLideresCalidad'
import SectionCertificacionesCalidad from '../components/calidadCompt/sectionCertificacionesCalidad'
import SectionSolucionesEsp from '../components/calidadCompt/sectionSolucionesEsp'
import SectionTrayectoriaCalidad from '../components/calidadCompt/sectionTrayectoriaCalidad'

export default function NuestraCalidad() {
    return (
        <>
        
            <SectionPortadaCalidad />
            <SectMarcasLideresCalidad />
            <SectionCertificacionesCalidad />
            <SectionSolucionesEsp />
            <SectionTrayectoriaCalidad />
        
        </>
    );
}