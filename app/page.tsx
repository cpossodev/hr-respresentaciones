

// Import Css
import pageHomeStyles from './pageHomeStyles.module.css';

// Import Component
import BotonWhatsApp from "./components/redesBoxCompt/botonWhatsApp"
import BoxPortadaCompt from "./components/inicio/sectionPortada/boxPortadaCompt";
import NosotrosHomeComponent from './components/inicio/sectionNosotros/nosotrosHomeComponent';
import HomeLineasProductosCompt from './components/inicio/sectionLineaDeProductos/homeLineasProductosCompt';
import BoxMarcasHR from './components/inicio/sectionNuestrasMarcas/boxMarcasHR';
import SectionStaffAsesores from './components/inicio/sectionAsesores/sectionStaffAsesores';
import SectServPostVent from './components/inicio/sectionPostVenta/sectServPostVent'
import BannerSlogan from './components/inicio/sectionBannerSlogan/bannerSlogan';

export default function Home() {

  return (

    <main className={pageHomeStyles.containerMain} >

      <div className={pageHomeStyles.boxMainBtnWtsApp}>

          <BotonWhatsApp />

      </div> 

        
        <BoxPortadaCompt />

        <NosotrosHomeComponent />

        <HomeLineasProductosCompt />

        <BoxMarcasHR />

        <SectionStaffAsesores />

        <SectServPostVent /> 

        <BannerSlogan /> 
        
    </main>
  );
}
