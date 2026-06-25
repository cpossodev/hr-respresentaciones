
// Import Components
import SectionPortadaQScompt from '../components/quienesSomosCompt/sectionPortadaQS'
import SectionBannerTiendaQS from '../components/quienesSomosCompt/sectionBannerTiendaQS'
import SectionBannerServPostQS from '../components/quienesSomosCompt/sectionBannerServPostQS'
import SectionSloganQS from '../components/quienesSomosCompt/sectionSloganQs'

export default function QuienesSomos() {
    return (

        <>
        
        <SectionPortadaQScompt />

        < SectionSloganQS />

        <SectionBannerTiendaQS /> 
       
       <SectionBannerServPostQS />

        {/* <SectionBannerQSServ />  */}

        </>
    );
}