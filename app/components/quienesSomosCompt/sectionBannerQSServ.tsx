//Import Link
import Link from 'next/link';

//Import Css
import BannerQSServStyles from '../../styles/quienesSomosStyles/sectionBannerQSServ.module.css'

export default function SectionBannerQSServ() {
    return(

        <div className={BannerQSServStyles.contantAllQSServ}>


                {/* PANEL IZQUIERDO */}
                <div 
                    style={{ backgroundImage: `url("/bkQuienesSomos/bkQsServicio1.jpg")`, 
                             backgroundPosition: "center", 
                             backgroundSize: "cover"}}

                    className={`${BannerQSServStyles.BKbanner} ${BannerQSServStyles.BKPanelA} `}>

                </div>

                {/* PANEL CENTRAL */}
                <div 
                
                style={{ backgroundImage: `url("/bkQuienesSomos/bkQsServicio4.jpg")`, 
                         backgroundPosition: "center", 
                         backgroundSize: "cover"}}

                className={`${BannerQSServStyles.BKbanner} ${BannerQSServStyles.BKPanelB}`}>
            
                        <div className={BannerQSServStyles.panelBKCalidad}>

                            <img className={BannerQSServStyles.IconPostVentaCalidad} src="/IconsPostventas/Icon-Asesoramiento.svg" />

                            <p className={BannerQSServStyles.titleQSserv}>CONTAMOS CON EL MEJOR SERVICIO POST VENTA DEL PAÍS</p>

                            <Link 
                            href={"/calidad"}
                            className={BannerQSServStyles.linkToCalidad}>Conoce Más</Link>

                        </div>

                </div>

                {/* PANEL IZQUIERDO */}

                <div 
                style={{ backgroundImage: `url("/bkQuienesSomos/bkQsServicio3.jpg")`, 
                         backgroundPosition: "center", 
                         backgroundSize: "cover"}}

                className={`${BannerQSServStyles.BKbanner} ${BannerQSServStyles.BKPanelC}`}></div>

        
        </div>


    );
}