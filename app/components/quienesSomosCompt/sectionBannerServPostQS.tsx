//Import Link
import Link from 'next/link';

// Import Css
import bannerSPostQSStyles from '../../styles/quienesSomosStyles/sectionBannerServPostQS.module.css'

export default function SectionBannerServPostQS() {
    return(

        <div className={bannerSPostQSStyles.allBannerSPostQs} style={{backgroundImage: `url("/bkQuienesSomos/bkBannerServPostQS.jpg")`}}> 

            <div className={bannerSPostQSStyles.boxColorContentBanner}>

                <div className={bannerSPostQSStyles.panelBKCalidad}>

                    <img className={bannerSPostQSStyles.IconPostVentaCalidadQS} src="/IconsPostventas/Icon-Asesoramiento.svg" />

                    <p className={bannerSPostQSStyles.titleQSserv}>CONTAMOS CON EL MEJOR SERVICIO POST VENTA DEL PAÍS</p>

                    <Link 
                    href={"/calidad"}
                    className={bannerSPostQSStyles.linkToCalidadQS}>Conoce Más</Link>

                </div>


            </div>
        
        
        </div>


    );
}