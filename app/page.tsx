// Import Css
import homeStyles from './styles/homeStyles.module.css';

// Import Component
import BoxPortadaCompt from "./components/homeCompt/boxPortadaCompt";
import NosotrosHomeComponent from './components/homeCompt/nosotrosHomeComponent';
import HomeLineasProductosCompt from './components/homeCompt/homeLineasProductosCompt';
import BoxMarcasHR from './components/homeCompt/boxMarcasHR';
import SectionStaffAsesores from './components/homeCompt/sectionStaffAsesores';
import SectServPostVent from './components/homeCompt/sectServPostVent'
import BannerSlogan from './components/homeCompt/bannerSlogan';

export default function Home() {

  return (

    <main className={homeStyles.containerMain} >

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
