//Import Link
import Link from 'next/link';

//Import Css
import BannerQSServStyles from '../../styles/quienesSomosStyles/sectionBannerQSServ.module.css'

export default function SectionBannerQSServ() {
    return(

        <div className={BannerQSServStyles.contantAllQSServ}>

            <div className={BannerQSServStyles.panelBKCalidad}>

                <img className={BannerQSServStyles.IconPostVentaCalidad} src="/IconsPostventas/Icon-Asesoramiento.svg" />

                <p className={BannerQSServStyles.titleQSserv}>CONTAMOS CON EL MEJOR SERVICIO POST VENTA DEL PAÍS</p>

                <Link 
                href={"/calidad"}
                className={BannerQSServStyles.linkToCalidad}>Conoce Más</Link>

            </div>

        </div>

    );
}