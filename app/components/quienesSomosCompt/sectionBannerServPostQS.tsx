
// Import Css
import bannerSPostQSStyles from '../../styles/quienesSomosStyles/sectionBannerServPostQS.module.css'

// Import Compoents
import SectionBannerQSServ from '../quienesSomosCompt/sectionBannerQSServ'

export default function SectionBannerServPostQS() {
    return(

        <div className={bannerSPostQSStyles.allBannerSPostQs} style={{backgroundImage: `url("/bkQuienesSomos/bkBannerServPostQS.jpg")`}}> 

            <div className={bannerSPostQSStyles.boxColorContentBanner}>

                <SectionBannerQSServ />


            </div>
        
        
        </div>


    );
}