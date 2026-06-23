//Import Link
import Link from 'next/link';

//Import Css
import bannerTiendaQS from '../../styles/quienesSomosStyles/sectionBannerTiendaQS.module.css'

export default function SectionBannerTiendaQS() {
    return(

        <div className={bannerTiendaQS.contentAllBannerQS} 
            style={{ backgroundImage: `url("/bkQuienesSomos/bkBannerQSTienda.jpg")`}}>

                <div className={bannerTiendaQS.boxTextQStienda}>

                    <img className={bannerTiendaQS.IconCompras} src={"/bkQuienesSomos/Icon-Compras.svg" }/>
                    <p className={bannerTiendaQS.TitleCompras}>ECUENTRA TODOS NUESTROS PRODUCTO EN LÍNEA</p>

                    <Link 
                    href={"/tienda-online"} className={bannerTiendaQS.linkToTiendaQS}>Visita la Tienda</Link>

                    <p className={bannerTiendaQS.textDescEx}>¡Cotiza ahora y obtén descuentos exclusivos! </p>

                </div>

        </div>



    );
}
