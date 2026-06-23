
// Import Components
import SectionPortadaQScompt from '../components/quienesSomosCompt/sectionPortadaQS'
import SectionBannerTiendaQS from '../components/quienesSomosCompt/sectionBannerTiendaQS'
import SectionBannerQSServ from '../components/quienesSomosCompt/sectionBannerQSServ'

export default function QuienesSomos() {
    return (

        <>
        
        <SectionPortadaQScompt />

        <div style={{backgroundColor: "#ffffff", height: "2px", width: "100%"}}></div>

        <SectionBannerTiendaQS /> 
       
        <div style={{backgroundColor: "#ffffff", height: "2px", width: "100%"}}></div> 

        <SectionBannerQSServ /> 

        </>
    );
}